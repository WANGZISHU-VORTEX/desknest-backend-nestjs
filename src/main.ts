import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  const configService = app.get(ConfigService);

  app.enableCors({
    origin: configService.get('CORS_ORIGIN'),
    methods:
      configService.get('CORS_METHODS').split(','),
    credentials: true,
  });

  const swaggerConfig = new DocumentBuilder()
    .setTitle('DeskNest API')
    .setDescription('DeskNest API documentation')
    .setVersion('1.0')
    .addTag('auth', 'authentication endpoints')
    .addTag('user', 'user management endpoints')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);

  const swaggerPath = configService.get('SWAGGER_PATH');
  SwaggerModule.setup(swaggerPath, app, document);

  await app.listen(configService.get('PORT'));
}
bootstrap();
