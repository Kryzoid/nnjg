import fs from 'fs';
import { flatForums } from '../data/forums';

const index = fs.readFileSync('./docs/index.html', {encoding: 'utf-8'});
const metaTagsReplace = '<meta name="placeholder" content="this will be replaced by postbuild.js">';

// Index already exists, just add SEO tags
fs.writeFileSync('./docs/index.html', index.replace(metaTagsReplace, `
  <title>Home | 2011 NNJG</title>
  <meta property="og:title" content="Home | 2011 NNJG">
  <meta name="og:description" content="A read-only version of the NoNerdsJustGeeks forums as they existed in 2011.">
  <meta name="og:url" content="https://nonerdsjustgeeks.net">
`));

// Create 404
fs.writeFileSync('./docs/404.html', index.replace(metaTagsReplace, `
  <title>404 | 2011 NNJG</title>
  <meta property="og:title" content="404 | 2011 NNJG">
  <meta name="og:description" content="404: Page not found">
`));

// Create all forums and threads
Object.entries(flatForums)
  .forEach(([forumName, forum]) => {
    fs.mkdirSync(`./docs/forums/${forumName}`, {recursive: true})
    fs.writeFileSync(`./docs/forums/${forumName}/index.html`, index.replace(metaTagsReplace, `
      <title>${forum.forumName} | 2011 NNJG</title>
      <meta name="og:title" content="${forum.forumName} | 2011 NNJG">
      <meta name="og:description" content="${forum.forumDesc}">
      <meta name="og:url" content="https://nonerdsjustgeeks.net/forums/${forumName}">
    `));

    import(`../data/topics/forum-${forum.forumId}.json`)
      .then(({default: topics}) => {
        topics.forEach(topic => {
          const description = `a${topic.topicStatus ? ' locked ' : ' '}thread with ${topic.topicViews.toLocaleString('en-US')} ${topic.topicViews === 1 ? 'view' : 'views'} and ${topic.topicReplies.toLocaleString('en-US')} ${topic.topicReplies === 1 ? 'reply' : 'replies'}`;
          fs.writeFileSync(`./docs/forums/${forumName}/${topic.topicId}.html`, index.replace(metaTagsReplace, `
            <title>${topic.topicTitle} | 2011 NNJG</title>
            <meta property="og:title" content="${topic.topicTitle}">
            <meta property="og:description" content="${description}">
            <meta name="og:url" content="https://nonerdsjustgeeks.net/forums/${forumName}/${topic.topicId}">
          `));
        });
      })
      .catch(() => {
        console.log(`Didn't find forum #${forum.forumId}, that's fine.`);
      });
  })
