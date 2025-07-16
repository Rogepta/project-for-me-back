/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('films')
export class Film {
   @PrimaryGeneratedColumn() 
   id: number;

   @Column({ type: 'varchar', length: 255 }) 
   title: string;

   @Column({ type: 'varchar', length: 50 }) 
   duration: string;

   @Column({ type: 'text', nullable: true }) 
   imageUrl: string;
}
