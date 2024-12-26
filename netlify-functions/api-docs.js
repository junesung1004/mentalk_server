// netlify-functions/api-docs.js

const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("../config/swaggerConfig"); // Swagger 설정 파일

// Express 앱 생성
const app = express();

// Swagger UI 서빙
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// serverless로 래핑
const serverless = require("serverless-http");
module.exports.handler = serverless(app);
