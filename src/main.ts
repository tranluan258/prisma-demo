import { PrismaService } from './service/prisma/prisma.service';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  const config = new DocumentBuilder()
    .setTitle('Prisma example')
    .setDescription('Prisma API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1', app, document);
  await app.listen(3000);
}
bootstrap();
