import fs from 'fs';
import messages from './raw';

const chunk =(array, size) => {
  if (!array.length) {
    return [];
  }

  const head = array.slice(0, size);
  const tail = array.slice(size);

  return [head, ...chunk(tail, size)];
};

chunk(messages.sort((a, b) => a.time - b.time), 200)
  .forEach((chunk, i) => {
    const asArray = chunk.map(msg => [msg.messageId, msg.username, msg.userColor, msg.message, msg.time]);
    fs.writeFileSync(`./src/data/messages/messages-${i}.json`, JSON.stringify(asArray, null, 0));
  });
