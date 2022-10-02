"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_service_1 = require("./service/prisma/prisma.service");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api/v1');
    const prismaService = app.get(prisma_service_1.PrismaService);
    await prismaService.enableShutdownHooks(app);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Prisma example')
        .setDescription('Prisma API description')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/v1', app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map