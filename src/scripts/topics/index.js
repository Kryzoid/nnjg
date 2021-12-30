import fs from 'fs';
import topics from './raw';

export const topicsMap = topics.reduce((accu, topic) => ({
  ...accu,
  [topic.topicId]: topic,
}), {})

const topicsByForum = Object.values(topics).reduce((accu, topic) => ({
  ...accu,
  [topic.forumId]: (accu[topic.forumId] ?? []).concat(topic),
}), {});

Object.entries(topicsByForum)
  .forEach(([forumId, topics]) => {
    fs.writeFileSync(`./src/data/topics/forum-${forumId}.json`, JSON.stringify(topics, null, 0));
  });
