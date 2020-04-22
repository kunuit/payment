const admin = require('firebase-admin');

var serviceAccount = require("./serviceAccountKey.json");
var serviceAccount1 = require("./serviceAccountKey1.json");
const app2 = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://onlinechat-bb67b.firebaseio.com"
}, 'app1');


const app1 = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount1),
  databaseURL: "https://demopayment-719ab.firebaseio.com"
}, 'app2');


module.exports = {
  app1,
  app2
}