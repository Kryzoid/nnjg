import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table as AntTable, Tag, Skeleton, message } from 'antd';
import { LockOutlined } from '@ant-design/icons';

const getColumns = (topics, forumUrlFragment) => {
  const authorCount = topics
    .map(topic => topic.topicFirstPosterName)
    .reduce((accu, author) => ({
      ...accu,
      [author]: (accu[author] ?? 0) + 1,
    }), {});

  return [
    {
      title: 'Title',
      dataIndex: 'topicTitle',
      sorter: (a, b) => a.topicTitle.localeCompare(b.topicTitle),
      render: (title, record) => <Link to={`/forums/${forumUrlFragment}/${record.topicId}`}>{title}</Link>
    },
    {
      title: 'Author',
      dataIndex: 'topicFirstPosterName',
      filters: Object.entries(authorCount)
        .sort(([_, countA], [__, countB]) => countB - countA)
        .slice(0, 50)
        .map(([author]) => author)
        .sort((a, b) => a.localeCompare(b))
        .map(username => ({
          text: username,
          value: username,
        })),
      onFilter: (value, record) => record.topicFirstPosterName === value,
      sorter: (a, b) => a.topicFirstPosterName.localeCompare(b.topicFirstPosterName),
      render: (author, record) => (
        <Tag color={`#${record.topicFirstPosterColor || 'FFFFFF'}`.replace('#FFFFFF', 'default')}>{author}</Tag>
      )
    },
    {
      title: 'Date',
      dataIndex: 'topicTime',
      sorter: (a, b) => a.topicTime - b.topicTime,
      render: (unix) => new Date(unix * 1000).toLocaleString('en-US'),
    },
    {
      title: 'Views',
      dataIndex: 'topicViews',
      sorter: (a, b) => a.topicViews - b.topicViews,
      render: (number) => number.toLocaleString('en-US'),
      responsive: ['lg'],
    },
    {
      title: 'Replies',
      dataIndex: 'topicReplies',
      sorter: (a, b) => a.topicReplies - b.topicReplies,
      render: (number) => number.toLocaleString('en-US'),
      responsive: ['lg'],
    },
    {
      title: 'Lock',
      dataIndex: 'topicStatus',
      filters: [
        {
          text: 'Unlocked',
          value: 0
        },
        {
          text: 'Locked',
          value: 1,
        },
      ],
      onFilter: (value, record) => record.topicStatus === value,
      render: (value) => value ? <LockOutlined /> : null,
      responsive: ['lg'],
    },
    {
      title: 'Last Reply',
      dataIndex: 'topicLastPostTime',
      sorter: (a, b) => a.topicLastPostTime - b.topicLastPostTime,
      render: (unix, record) => <>
        {new Date(unix * 1000).toLocaleString('en-US')} by{' '}
        <Tag color={`#${record.topicLastPosterColor || 'FFFFFF'}`.replace('#FFFFFF', 'default')}>{record.topicLastPosterName}</Tag>
      </>,
      defaultSortOrder: 'descend'
    },
  ];
};

export default function Table({ forumId, forumName }) {
  const [topics, setTopics] = useState(null);

  const fetchTopics = () => {
    import(`../data/topics/forum-${forumId}.json`)
      .then(topics => {
        // topic status 2 means topic moved, no posts under this thread id
        setTopics(Array.from(topics).filter(topic => topic.topicStatus !== 2));
      })
      .catch((err) => {
        console.error(err);
        message.error('Failed to fetch threads, please try again later.', 5);
      });
  };

  useEffect(() => {
    fetchTopics();
  }, []);

  if (topics) {
    return (
      <AntTable
        columns={getColumns(topics, forumName)}
        dataSource={topics}
        rowKey="topicId"
      />
    );
  } else {
    return (
      <Skeleton active paragraph={{rows: 10}}/>
    );
  }
};
