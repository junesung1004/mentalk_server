// netlify-functions/app.js
const serverless = require("serverless-http");
const app = require("../server");

module.exports.handler = serverless(app);
