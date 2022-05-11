import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Pet } from "./pet.entity";

@Entity()
export class User{

    @ApiProperty()
    @PrimaryGeneratedColumn() 
    id: number;

    @ApiProperty()
    @Column()
    username: string;

    @ApiProperty()
    @Column()
    password: string;

    @OneToMany(()=> Pet, (pet) => pet.owner )
    pet: Pet[];
}
