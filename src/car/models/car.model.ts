import { Customer } from 'customer/customer.model';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BodyType } from './body-type.model';
import { Category } from './category.model';
import { Feature } from './feature.model';
import { Model } from './model.model';

enum Transmission {
  AUTOMATIC = 'automatic',
  MANUAL = 'manual',
  DUPLEX = 'duplex',
}

enum FuelType {
  DIESEL = 'diesel',
  PETROL = 'petrol',
  HYBRID = 'hybrid',
  PETROLEUMGAS = 'petroleumgas',
  ELECTRIC = 'electric',
}

enum Grade {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
  G = 'G',
}

enum SellingCondition {
  FOREIGN = 'foreign',
  NEW = 'new',
  LOCAL = 'local',
}

@Entity({ name: 'cars' })
export class Car {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  year: number;

  @Column()
  slug: string; // this will be used in searching for a car

  @Column()
  cityId: string; // city id from users microsevice

  @Column({ default: null })
  colour: string;

  @Column({ default: null })
  mileage: number;

  @Column({ unique: true, default: null })
  internalId: string;

  @Column({ unique: true, default: null })
  vin: string;

  @Column({ unique: true, default: null })
  licensePlate: string;

  @Column({ unique: true, default: null })
  engineNumber: string;

  @Column({ type: 'real', nullable: true })
  price: number;

  @Column()
  createdBy: string; // user id from users microservice

  @Column({ default: false })
  marketplaceVisible: boolean;

  @Column({ nullable: true })
  marketplaceVisibleDate: Date; // date car was set visible on marketplace

  @Column({ type: 'real', nullable: true })
  marketPlacePrice: number;

  @Column({ type: 'real', nullable: true })
  marketPlaceOldPrice: number;

  @Column({ default: false })
  isFeatured: boolean;

  @Column('text')
  reasonForSelling: string;

  @ManyToOne(type => Model)
  model: Model;

  @ManyToOne(type => Customer)
  customer: Customer;

  @Column({
    type: 'enum',
    enum: Transmission,
    default: Transmission.AUTOMATIC,
  })
  transmission: Transmission; // note this is called trim on fcg api

  @Column({ type: 'enum', enum: FuelType, nullable: true })
  fuelType: FuelType;

  @ManyToOne(type => Category)
  category: Category;

  @ManyToMany(type => Feature)
  @JoinTable()
  features: Feature[];

  @Column({ type: 'enum', enum: Grade, nullable: true })
  grade: Grade;

  @ManyToOne(type => BodyType)
  bodyType: BodyType;

  @Column({ type: 'enum', enum: SellingCondition, nullable: true })
  sellingCondition: SellingCondition;

  @Column('json')
  fields: any; // extra infomation can be saved here

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
