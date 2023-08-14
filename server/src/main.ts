import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('toma')
    .setDescription('Toma API')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.SERVER_PORT);
  console.log(`Server start in: http://localhost:${process.env.SERVER_PORT}`);
  console.log(
    `Swagger API open in: http://localhost:${process.env.SERVER_PORT}/api`,
  );
}
bootstrap();
