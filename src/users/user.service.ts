/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDTO } from "./create-user.dto";
import { User } from "./user.entity";
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
   constructor(
      @InjectRepository(User)
      private userRepository: Repository<User>,
   ) { }

   async create(createUserDTO: CreateUserDTO): Promise<User> {
      const hashedPassword = await bcrypt.hash(createUserDTO.password, 10);
      const user = this.userRepository.create({ ...createUserDTO, password: hashedPassword });
      return this.userRepository.save(user)
   }

   async findByEmail(email: string): Promise<User | null> {
      return this.userRepository.findOne({ where: { email } })
   }
}