import { getRepository } from 'typeorm';

import Budget from '../models/Budget';

interface Request {
  installation_zip_code: string;
  installation_address_number: string;
  installation_type: string;
  average_month_consume: number;
  average_month_energy_cost: number;
  roof_type: string;
  project_objective: string;
  date: Date;
}

class CreateBudgetService {
  public async execute({
    installation_zip_code,
    installation_address_number,
    installation_type,
    average_month_consume,
    average_month_energy_cost,
    roof_type,
    project_objective,
    date,
  }: Request): Promise<Budget> {
    const budgetsRepository = getRepository(Budget);

    const budget = budgetsRepository.create({
      installation_zip_code,
      installation_address_number,
      installation_type,
      average_month_consume,
      average_month_energy_cost,
      roof_type,
      project_objective,
      date,
    });
    await budgetsRepository.save(budget);
    return budget;
  }
}
export default CreateBudgetService;
