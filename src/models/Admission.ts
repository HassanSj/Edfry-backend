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
  interestedEducation: string;

  @Column()
  budget: string;

  @Column()
  timeSlot: string;

  @Column()
  country: string;

  @Column()
  program: string;
}
export default Admission;
