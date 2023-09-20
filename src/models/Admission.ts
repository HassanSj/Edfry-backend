import "reflect-metadata";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Admission extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  contact: string;

  @Column()
  qualification: string;

  @Column()
  level: string;

  @Column()
  time: string;
  @Column({nullable:true})
  newTime: string;

  @Column()
  country: string;

  @Column()
  budget: string;

  @Column()
  interest: string;
}
export default Admission;
