import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot(' mongodb://localhost/nestjs_db')],
  controllers: [],
  providers: [],
})
export class AppModule {}
