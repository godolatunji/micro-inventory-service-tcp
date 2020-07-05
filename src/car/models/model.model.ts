import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Make } from './make.model';

@Entity({ name: 'models' })
export class Model {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ unique: true })
  name: string;

  @ManyToOne(type => Make)
  make: Make;
}
