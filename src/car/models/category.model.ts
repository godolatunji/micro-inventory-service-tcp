import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Categories' })
export class Category {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ unique: true })
  name: string;
}
