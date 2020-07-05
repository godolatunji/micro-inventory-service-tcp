import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'bodyTypes' })
export class BodyType {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ unique: true })
  name: string;
}
