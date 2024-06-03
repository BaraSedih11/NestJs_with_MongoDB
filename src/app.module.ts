import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://baraalsedih:Bis%40158963@cluster0.cwy0zf2.mongodb.net/nestjs-project',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
