/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { FilmsService } from './films.service';
import { Film } from './film.entity';

@Controller('films')
export class FilmsController {
   constructor(private readonly filmsService: FilmsService) { }

   @Get()
   async findAll(): Promise<Film[]> {
      return this.filmsService.findAll();
   }
}
