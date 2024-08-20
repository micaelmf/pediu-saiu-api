const bcrypt = require('bcrypt');

// const password = '-45)ETwdQ-Zt?2a8.oJ2';
const password = '123123';
const saltRounds = 10000;

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) throw err;
  console.log(hash);
});