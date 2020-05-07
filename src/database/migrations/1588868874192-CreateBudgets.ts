import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateBudgets1588868874192 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'budgets',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'installation_zip_code',
            type: 'varchar',
          },
          {
            name: 'installation_address_number',
            type: 'varchar',
          },
          {
            name: 'installation_type',
            type: 'varchar',
          },
          {
            name: 'average_month_consume',
            type: 'numeric',
          },
          {
            name: 'average_month_energy_cost',
            type: 'numeric',
          },
          {
            name: 'roof_type',
            type: 'varchar',
          },
          {
            name: 'project_objective',
            type: 'varchar',
          },

          {
            name: 'date',
            type: 'timestamp with time zone',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('budgets');
  }
}
