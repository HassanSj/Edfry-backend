import "reflect-metadata";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Immigration extends BaseEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: string;

  @Column()
  contact: string;

  @Column()
  cost: string;

  @Column()
  experience : string;
  
  @Column()
  ieltsScore: string;

  @Column()
  ieltsTaken: string;

  @Column()
  qualification: string;
  }
export default Immigration;
