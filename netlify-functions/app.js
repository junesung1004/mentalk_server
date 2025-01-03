// netlify-functions/api-docs.js
const express = require("express");
const serverless = require("serverless-http");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("../config/swaggerConfig"); // Swagger 설정 파일 경로

const app = express();

// Swagger UI 서빙
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// serverless 래핑
module.exports.handler = serverless(app);
