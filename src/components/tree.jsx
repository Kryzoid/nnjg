import React from 'react';
import { Tree as AntTree } from 'antd';

const Tree = ({ treeData }) => (
  <AntTree
    style={{ padding: '16px' }}
    autoExpandParent={true}
    blockNode={true}
    defaultExpandAll={true}
    fieldNames={{ key: 'forumId' }}
    showLine={true}
    treeData={treeData}
  />
);

export default Tree;
