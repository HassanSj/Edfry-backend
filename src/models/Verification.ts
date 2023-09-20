import "reflect-metadata";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Verification extends BaseEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phone : String;
  
  @Column()
  status: boolean;

  }
export default Verification;
