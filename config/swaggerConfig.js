const swaggerOptions = {
  definition: {
    openapi: "3.0.0", // OpenAPI 3.0 버전 사용
    info: {
      title: "MENTALK API",
      version: "1.0.0",
      description: "MENTALK API documentation",
      contact: {
        name: "MENTALK Team",
        email: "support@mentalk.com",
      },
    },
    servers: [
      {
        url: "https://mentalk-server.netlify.app/api", // 배포된 서버 URL
      },
    ],
  },
  apis: ["./routes/*.js", "./controllers/*.js"], // API 문서를 생성할 파일들
};
