import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://baraalsedih:Bis%40158963@cluster0.cwy0zf2.mongodb.net/nestjs-project',
    ),
    UsersModule,
    PostsModule,
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
