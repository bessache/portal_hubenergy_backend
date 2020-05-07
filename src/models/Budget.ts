import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('budgets')
class Budget {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  installation_zip_code: string;

  @Column()
  installation_address_number: string;

  @Column()
  installation_type: string;

  @Column()
  average_month_consume: number;

  @Column()
  average_month_energy_cost: number;

  @Column()
  roof_type: string;

  @Column()
  project_objective: string;

  @Column('timestamp with time zone')
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Budget;
