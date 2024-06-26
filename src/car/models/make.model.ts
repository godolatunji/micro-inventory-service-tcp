import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'makes' })
export class Make {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ unique: true })
  name: string;
}
