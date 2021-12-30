import fs from 'fs';
import posts from './raw';
import { topicsMap } from '../topics';

const postsByTopic = posts.reduce((accu, post) => ({
  ...accu,
  [post.topicId]: (accu[post.topicId] ?? []).concat(post),
}), {});

Object.entries(postsByTopic)
  .forEach(([topicId, posts]) => {
    const topic = topicsMap[topicId];
    topic.posts = posts.sort((a, b) => a.postTime - b.postTime);
    fs.writeFileSync(`./src/data/posts/topic-${topicId}.json`, JSON.stringify(topic, null, 0));
  });
