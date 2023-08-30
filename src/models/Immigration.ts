import "reflect-metadata";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Immigration extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  email : string;
  
  @Column()
  phone: string;

  @Column()
  message: string;
}
export default Immigration;
