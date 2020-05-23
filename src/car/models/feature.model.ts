import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'features' })
export class Feature {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ unique: true })
  name: string;
}
