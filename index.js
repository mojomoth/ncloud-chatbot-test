const requestBodyString = JSON.stringify({
  "version": "v2",
  "userId": "test",
  "timestamp": new Date().getDate(),
  "bubbles": [ {
  "type": "text",
  "data" : { "description" : "(/도와줘SOS)" } } ],
  "event": "send"
  });
const secretKey = "WHd2RkZIWmFNVGFVcFpyZVhSekVZV0ppd2xxUE9zSUE=";
const url = "https://6e875d362ca2402d8936c323c582701e.apigw.ntruss.com/custom/v1/5268/f6ccaa7ac017166dddc86d1b4d4f102653f7508a12365aaf50b913aee51b4a56";

const HmacSHA256 = require('crypto-js/hmac-sha256');
const EncBase64 = require('crypto-js/enc-base64');
const fetch = require("node-fetch");

const signatureHeader = HmacSHA256(requestBodyString, secretKey).toString(EncBase64);
console.log(escape("(/도와줘SOS)"))   

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-NCP-CHATBOT_SIGNATURE': signatureHeader,
  },
  body: requestBodyString
}).then(res => {
  return res.json();
}).then(json => {
  console.log(JSON.stringify(json))
}).catch(err => {
  console.error(err)
})