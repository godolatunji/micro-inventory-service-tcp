import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'banks' })
export class Bank {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ unique: true })
  name: string;

  @Column()
  countryId: string;
}
