var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyC1qI8bbpbPHAqE-Rfwy24ZyoXOfGyBMzw",
    authDomain: "plant-330a1.firebaseapp.com",
    databaseURL: "https://plant-330a1.firebaseio.com",
    storageBucket: "plant-330a1.appspot.com"
};
firebase.initializeApp(config);

module.exports = firebase;
