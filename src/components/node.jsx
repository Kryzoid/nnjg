import React from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import { urlify } from '../data/forums';

const { Title, Paragraph } = Typography;

const Node = ({ name, description, url }) => (
  <Link
    to={`/forums/${url}`}
    style={{ display: 'inline-flex', flexDirection: 'column', height: '100%', width: '100%'}}
  >
    <Title level={5}>{name}</Title>
    <Paragraph style={{ whiteSpace: 'pre-wrap' }}>{description}</Paragraph>
  </Link>
);

export const preprocess = forum => {
  forum.title = (
    <Node
      name={forum.forumName}
      description={forum.forumDesc}
      url={urlify(forum.forumName)}
    />
  );
  forum.children = forum.children.map(preprocess);
  return forum;
}

export default Node;
