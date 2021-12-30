import React, { useState, useEffect } from 'react';
import { List, Typography, message } from 'antd';
import { CommentOutlined } from '@ant-design/icons';
import VirtualList from 'rc-virtual-list';

const containerHeight = 350;
const date = (unix) => new Date(unix * 1000).toLocaleString('en-US')
const name = (username, userColor) => userColor
  ? <strong style={{color: `#${userColor}`}}>{username}</strong>
  : <strong>{username}</strong>;

export default function Shoutbox() {
  const [data, setData] = useState([]);
  const [currentChunk, setCurrentChunk] = useState(0);

  const appendData = () => {
    import(`../data/messages/messages-${currentChunk}.json`)
      .then(messages => {
        setData(data.concat(Array.from(messages)));
        setCurrentChunk(currentChunk + 1);
      })
      .catch((err) => {
        console.error(err);
        message.error('Failed to fetch shoutbox messages, please try again later.', 5);
      })
  };

  useEffect(() => {
    appendData();
  }, []);

  const onScroll = e => {
    if (e.target.scrollHeight - e.target.scrollTop === containerHeight) {
      appendData();
    }
  };

  return (
    <List
      grid={{gap: 0, column: 1}}
      size="small"
      style={{ backgroundColor: 'white', padding: '20px' }}
    >
      <Typography.Title level={5}><CommentOutlined/> Shoutbox</Typography.Title>
      <VirtualList
        data={data}
        height={containerHeight}
        itemHeight={20}
        itemKey={msg => msg[0]}
        onScroll={onScroll}
      >
        {([messageId, username, userColor, message, time]) => (
          <li>
            <List.Item key={messageId} style={{padding: 0, margin: 0}}>
              <Typography.Paragraph style={{display: 'inline'}} type="secondary">{date(time)}</Typography.Paragraph>
              {' '}
              {name(username, userColor)}: {message}
            </List.Item>
          </li>
        )}
      </VirtualList>
    </List>
  );
};
