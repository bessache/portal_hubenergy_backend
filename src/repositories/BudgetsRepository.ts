import { EntityRepository, Repository } from 'typeorm';
import Budget from '../models/Budget';

@EntityRepository(Budget)
class BudgetsRepository extends Repository<Budget> {
  public async findById(date: Date): Promise<Budget | null> {
    const findBudget = await this.findOne({
      where: { date },
    });
    return findBudget || null;
  }
}
export default BudgetsRepository;
