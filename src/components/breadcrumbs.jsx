import React from 'react';
import { Breadcrumb } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { flatForums, urlify } from '../data/forums';

export default function Breadcrumbs() {
  const breadcrumbs = [
    {
      label: 'Forums',
      href: '/'
    }
  ]
  const { forumName, threadId } = useParams();

  if (forumName) {
    const thisForum = flatForums[forumName];

    breadcrumbs.push(
      ...thisForum.forumParents.map(parent => ({
        label: parent,
        href: `/forums/${urlify(parent)}`
      })),
      {
        label: thisForum.forumName,
        href: `/forums/${urlify(thisForum.forumName)}`,
      }
    );

    if (threadId) {
      breadcrumbs.push({
        label: ' ',
        href: `/forums/${urlify(thisForum.forumName)}/${threadId}`,
      });
    }
  }

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {breadcrumbs.map(({ label, href}, i) => (
        <Breadcrumb.Item key={href}>
          {i + 1 === breadcrumbs.length ? label : (
            <Link to={href}>{label}</Link>
          )}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}
