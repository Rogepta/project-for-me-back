/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Film } from './films/film.entity'
import { FilmsModule } from './films/films.module';
import { UserModule } from './users/user.module';
import { User } from './users/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'angelina',
      database: 'Local PostgreSQL',
      entities: [Film, User],
      synchronize: true
    }),
    FilmsModule,
    UserModule,
    AuthModule
  ],
})
export class AppModule { }
