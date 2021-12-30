import fs from 'fs';
import forums from './raw';

const root = {};

const forumMap = forums.reduce((accu, forum) => ({
  ...accu,
  [forum.forumId]: forum,
}), {});
const childrenMap = forums.reduce((accu, forum) => ({
  ...accu,
  [forum.forumId]: (accu[forum.forumId] ?? []),
  [forum.parentId]: (accu[forum.parentId] ?? []).concat(forum.forumId),
}), {});

let currentObjects = { '0': root };
let currentKeys = ['0'];

while(currentKeys.length) {
  const newCurrentKeys = [];

  currentKeys.forEach(key => {
    const childrenOfThatKey = childrenMap[key]
      .map(childKey => forumMap[childKey])

    currentObjects[key].children = childrenOfThatKey;
    newCurrentKeys.push(...childrenOfThatKey.map(f => f.forumId));
  });
  
  currentKeys = newCurrentKeys;
  currentObjects = currentKeys.reduce((accu, key) => ({
    ...accu,
    [key]: forumMap[key]
  }), {});
}

fs.writeFileSync('./src/data/forums/forums.json', JSON.stringify(root.children, null, 0));
