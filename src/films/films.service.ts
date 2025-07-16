/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Film } from './film.entity';

@Injectable()
export class FilmsService {
   constructor(
      @InjectRepository(Film)
      private filmsRepository: Repository<Film>,
   ) { }

   async findAll(): Promise<Film[]> {
      try {
         const films = await this.filmsRepository.find();
         return films;
      } catch (error) {
         console.error('Error fetching films:', error); 
         throw new Error('Failed to fetch films');
      }
   }
}

// добавить методы для получения, создания, обновления и удаления фильмов

