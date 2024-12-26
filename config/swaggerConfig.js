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
        url:
          process.env.NODE_ENV === "production"
            ? "https://mentalk-server.netlify.app" // 배포된 서버 URL
            : "http://localhost:8080", // 개발 환경에서 로컬 URL 사용
      },
    ],
  },
  apis: ["./routes/*.js", "./controllers/*.js"], // API 문서를 생성할 파일들
};
