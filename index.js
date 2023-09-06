/*import filesystem modules from node library or else function such as fs.mkdir will not work*/
import fs from 'node:fs';
//import fs modules from node library
import open from 'node:open';

fs.mkdir('./memes', function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('New directory successfully created.');
  }
});

open('https://memegen-link-examples-upleveled.netlify.app');
