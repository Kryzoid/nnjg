import forums from './forums.json';

const urlify = (name) => name
  .toLowerCase()
  .replace(/[^a-z0-9- ]/ig, '')
  .replace(/ /g, '-');

const flatForums = {};
const visitName = (forum) => {
  flatForums[urlify(forum.forumName)] = forum;
  forum.children.forEach(visitName);
}
forums.forEach(visitName);

export {
  forums as default,
  flatForums,
  urlify,
};
