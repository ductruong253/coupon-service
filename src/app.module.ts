import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import config from '../config/configuration'
import { AuthMiddleWare } from './interceptors/auth.middleware';
const cookieSession = require('cookie-session');

@Module({
  imports: [ConfigModule.forRoot({
    load: [config],
    isGlobal: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleWare)
      .forRoutes('*');
  }
}
