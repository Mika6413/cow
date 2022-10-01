let userInfo = require('./Information.js');

const cowsay = require('cowsay');

console.log(cowsay.say ({
text : `Hello I'm ${userInfo.userName} from ${userInfo.userCampus}`,
})
);


