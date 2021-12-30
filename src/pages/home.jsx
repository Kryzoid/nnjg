import React from 'react';
import { Space } from 'antd';
import forums from '../data/forums';
import { preprocess } from '../components/node';
import Tree from '../components/tree';
import Shoutbox from '../components/shoutbox';

const Home = () => (
  <Space direction="vertical" size={16} style={{width: '100%'}}>
    <Shoutbox/>
    <Tree treeData={forums.map(preprocess)} />
  </Space>
);

export default Home;
