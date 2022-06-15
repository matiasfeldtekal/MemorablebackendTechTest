import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import {Field, ObjectType} from "type-graphql";

@Entity()
@ObjectType()
export class Asset {

    @PrimaryGeneratedColumn()
    @Field()
    id: number

    @Column()   // For typeorm
    @Field()    // For type-graphql
    name: string

}
