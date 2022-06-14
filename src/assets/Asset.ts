import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import {Field, ObjectType} from "type-graphql";

@Entity()
@ObjectType()
export class Asset {

    @PrimaryGeneratedColumn()
    @Field()
    id: number

    @Column()
    @Field()
    name: string

}
