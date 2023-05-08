import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('User Detail App') 
    .setDescription('User App')
    .setVersion('')
    .build()
  const document = SwaggerModule.createDocument(app,options);
  SwaggerModule.setup('api', app, document);
  //app.setGlobalPrefix('api');
  await app.listen(3003);
}
bootstrap();
