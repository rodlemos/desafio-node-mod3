import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOrders1634228148817 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table(
        {
          name: "orders",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true
            },
            {
              name: "user_id",
              type: "uuid"
            }
          ],
          foreignKeys: [
            {
              name: "FKUserOrder",
              referencedTableName: "users",
              referencedColumnNames: ["id"],
              columnNames: ["user_id"],
              onDelete: "CASCADE",
              onUpdate: "CASCADE"
            }
          ]
        }
      )
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("orders");
  }

}
