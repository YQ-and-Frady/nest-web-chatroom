import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
