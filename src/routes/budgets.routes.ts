import { Router } from 'express';
import { getRepository } from 'typeorm';
import { parseISO, sub } from 'date-fns';

import Budget from '../models/Budget';
import CreateBudgetService from '../services/CreateBudgetService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const budgetsRouter = Router();
budgetsRouter.use(ensureAuthenticated);

budgetsRouter.get('/', async (request, response) => {
  const budgetsRepository = getRepository(Budget);
  const budgets = await budgetsRepository.find();

  return response.json(budgets);
});

budgetsRouter.post('/', async (request, response) => {
  const {
    installation_zip_code,
    installation_address_number,
    installation_type,
    average_month_consume,
    average_month_energy_cost,
    roof_type,
    project_objective,
    date,
  } = request.body;
  const parsedDate = parseISO(date);

  const CreateBudget = new CreateBudgetService();

  const budget = await CreateBudget.execute({
    installation_zip_code,
    installation_address_number,
    installation_type,
    average_month_consume,
    average_month_energy_cost,
    roof_type,
    project_objective,
    date: parsedDate,
  });

  return response.json(budget);
});
export default budgetsRouter;
