import React from 'react';
import { Row, Col } from 'antd';
import { useParams } from 'react-router-dom';
import { preprocess } from '../components/node';
import Table from '../components/table';
import Tree from '../components/tree';
import { flatForums, urlify } from '../data/forums';

export default function Forum() {
  const { forumName } = useParams();
  const thisForum = preprocess(flatForums[forumName]);
  
  return (
    <>
      {Boolean(thisForum.children.length) && (
        <Row style={{ marginBottom: '16px'}}>
          <Col span={24}>
            <Tree treeData={thisForum.children} />
          </Col>
        </Row>
      )}
      {Boolean(thisForum.forumTopics) && (
        <Row>
          <Col span={24}>
            <Table
              forumName={urlify(thisForum.forumName)}
              forumId={flatForums[forumName].forumId}
            />
          </Col>
        </Row>
      )}
    </>
  );
}
