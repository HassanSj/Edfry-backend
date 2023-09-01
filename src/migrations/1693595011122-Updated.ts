import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class Updated1693595011122 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('immigration', new TableColumn({
            name: 'new_column',
            type: 'string',
            isNullable: true,
          }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('immigration', 'new_column');
      }

}
