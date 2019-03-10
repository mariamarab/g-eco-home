// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');

// initialise DB connection
const admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://gecohomeok.firebaseio.com/',
});

process.env.DEBUG = 'dialogflow:debug';

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

  function handleData(agent) {
    const ItemName = agent.parameters.ItemName;
    
    return admin.database().ref().once("value").then((snapshot)=>{
      var Bin= snapshot.child('Item/'+ ItemName +'/bin').val();
      agent.add('that goes into the/'+Bin+'/bin');
     });
  }
  
  //run proper function handler
    let intentMap = new Map();
    intentMap.set('wastebot',handleData);
  	agent.handleRequest(intentMap);
 
  });
 
 