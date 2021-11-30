import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 配置swagger
  const options = new DocumentBuilder()
    .setTitle('nest-web-chatroom api')
    .setDescription('The nest-web-chatroom API description')
    .setVersion('1.0')
    .addTag('nest-web-chatroom')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(8080);
}
bootstrap();
