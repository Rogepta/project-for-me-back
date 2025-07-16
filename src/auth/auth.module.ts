/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UserModule } from "src/users/user.module";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";
import { AuthController } from "./auth.controller";

@Module({
   imports: [
      UserModule,
      PassportModule,
      JwtModule.register({
         secret: process.env.JWT_SECRET || 'SECRET',
         signOptions: { expiresIn: '1h' },
      }),
   ],
   providers: [AuthService, JwtStrategy],
   controllers: [AuthController],

})

export class AuthModule { }