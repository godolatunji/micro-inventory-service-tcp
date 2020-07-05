import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Bank } from './bank.model';

enum CustomerType {
  INDIVIDUAL = 'INDIVIDUAL',
  CORPERATE = 'CORPERATE',
}

enum MaritalStatus {
  SINGLE = 'SINGLE',
  MARRIED = 'MARRIED',
}

@Entity({ name: 'customers' })
export class Customer {
  @PrimaryColumn()
  id?: string;

  @Column()
  salutation: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  phone: string;

  @Column()
  street: string;

  @Column({ default: null })
  zipcode: string;

  @Column()
  cityId: string; // get id from users microservice

  @Column()
  createdBy: string; // user id from users microservice

  @Column({ type: 'enum', enum: CustomerType, nullable: true })
  type: CustomerType;

  @Column({ type: 'text', default: null })
  comment: string;

  @ManyToOne(type => Bank, null, { nullable: true, eager: true })
  bank: Bank;

  @Column({ default: null })
  bankAccountOwner: string;

  @Column({ default: null })
  bankAccountNumber: string;

  @Column({ default: null })
  bankAccountType: string;

  @Column({ default: null })
  bankOwnerTaxId: string;

  @Column({ default: null })
  bankContactDetails: string;

  @Column({ type: 'enum', enum: MaritalStatus, nullable: true })
  maritalStatus: MaritalStatus;

  @Column({ default: null })
  occupation: string;

  @Column({ default: null })
  referrerCode: string;

  @Column('json')
  fields: any; // extra infomation can be saved here

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
