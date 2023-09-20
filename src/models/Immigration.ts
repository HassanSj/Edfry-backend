import "reflect-metadata";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Immigration extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  contact: string;

  @Column()
  age: string;

  @Column()
  martialStatus: string;

  @Column()
  familyUnitSize: string;

  @Column()
  funds: string;

  @Column()
  education: string;

  @Column()
  experience: string;

  @Column()
  relatives: string;

  @Column()
  financialCapacity: string;
}
export default Immigration;
