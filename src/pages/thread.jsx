import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { List, Comment, Avatar, Typography, Skeleton, message } from 'antd';
import users from '../data/users';
import { LockOutlined } from '@ant-design/icons';
import scrollToElement from 'scroll-to-element';

const { Title, Paragraph } = Typography;

export default function Thread() {
  const { threadId } = useParams();
  const [thread, setThread] = useState(null);

  const fetchThread = () => {
    import(`../data/posts/topic-${threadId}.json`)
      .then(thread => {
        setThread(thread);
      })
      .then(() => {
        const { hash } = window.location;

        if (hash) {
          scrollToElement(hash, {duration: 250});
        }
      })
      .catch((err) => {
        console.error(err);
        message.error('Failed to fetch thread, please try again later.', 5);
      });
  };

  useEffect(() => {
    fetchThread();
  }, []);

  if (!thread) {
    return (
      <Skeleton active paragraph={{rows: 10}}/>
    );
  }

  const {posts} = thread;
  const description = `a ${thread.topicStatus ? 'locked' : ''} thread with ${thread.topicViews.toLocaleString('en-US')} ${thread.topicViews === 1 ? 'view' : 'views'} and ${thread.topicReplies.toLocaleString('en-US')} ${thread.topicReplies === 1 ? 'reply' : 'replies'}`;

  return <>
    <Title level={1} style={{ marginBottom: 0 }}>
      {Boolean(thread.topicStatus) && <LockOutlined/>}
      {thread.topicStatus ? ' ' : ''}{thread.topicTitle}
    </Title>
    <Paragraph type="secondary">
      {description}
    </Paragraph>
    <List
      pagination={true}
      itemLayout="horizontal"
      dataSource={posts}
      renderItem={post => {
        const [username, userColor] = users[post.posterId];

        return (
          <Comment
            style={{backgroundColor: 'white', paddingLeft: '16px', paddingRight: '16px'}}
            id={`post-${post.postId}`}
            author={userColor ? <span style={{color: `#${userColor}`}}>{username}</span> : username}
            avatar={
              <Avatar size="large" style={{ ...(userColor && {backgroundColor: `#${userColor}`})}}>
                {username
                  .replace(/(Mr\.)/i, '')
                  .replace(/([^a-z0-9]|NNJG)/ig, '')
                  .replace(/^The/i, '')
                  .charAt(0)}
              </Avatar>
            }
            content={post.postText}
            datetime={<a href={`#post-${post.postId}`} style={{color: 'unset'}}>{new Date(post.postTime * 1000).toLocaleString('en-US')}</a>}
          />
        );
      }}
    />
  </>;
};
