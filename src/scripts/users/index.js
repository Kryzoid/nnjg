import fs from 'fs';
import users from './raw';

const usersMap = users.reduce((accu, user) => ({
  ...accu,
  [user.userId]: [user.username, user.userColor],
}), {})

fs.writeFileSync('./src/data/users/users.json', JSON.stringify(usersMap, null, 0));
