import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1710792254105 implements MigrationInterface {
  name = 'Migration1710792254105';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`products\` DROP FOREIGN KEY \`FK_62d567f55d305f57022c1a1f23e\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`images\` DROP FOREIGN KEY \`FK_96fabbb1202770b8e6a58bf6f1d\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``,
    );
    await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`email\``);
    await queryRunner.query(
      `ALTER TABLE \`users\` ADD \`email\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` ADD UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`)`,
    );
    await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`password\``);
    await queryRunner.query(
      `ALTER TABLE \`users\` ADD \`password\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_d32021d5791ed1617efaf1ac68\` ON \`campaigns\``,
    );
    await queryRunner.query(`ALTER TABLE \`campaigns\` DROP COLUMN \`name\``);
    await queryRunner.query(
      `ALTER TABLE \`campaigns\` ADD \`name\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`campaigns\` ADD UNIQUE INDEX \`IDX_d32021d5791ed1617efaf1ac68\` (\`name\`)`,
    );
    await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`name\``);
    await queryRunner.query(
      `ALTER TABLE \`products\` ADD \`name\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`products\` DROP COLUMN \`description\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`products\` ADD \`description\` varchar(255) NOT NULL DEFAULT ''`,
    );
    await queryRunner.query(`ALTER TABLE \`images\` DROP COLUMN \`url\``);
    await queryRunner.query(
      `ALTER TABLE \`images\` ADD \`url\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`products\` ADD CONSTRAINT \`FK_62d567f55d305f57022c1a1f23e\` FOREIGN KEY (\`campaign_id\`) REFERENCES \`campaigns\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`images\` ADD CONSTRAINT \`FK_96fabbb1202770b8e6a58bf6f1d\` FOREIGN KEY (\`product_id\`) REFERENCES \`products\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`images\` DROP FOREIGN KEY \`FK_96fabbb1202770b8e6a58bf6f1d\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`products\` DROP FOREIGN KEY \`FK_62d567f55d305f57022c1a1f23e\``,
    );
    await queryRunner.query(`ALTER TABLE \`images\` DROP COLUMN \`url\``);
    await queryRunner.query(
      `ALTER TABLE \`images\` ADD \`url\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`products\` DROP COLUMN \`description\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`products\` ADD \`description\` varchar(255) NOT NULL DEFAULT ''`,
    );
    await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`name\``);
    await queryRunner.query(
      `ALTER TABLE \`products\` ADD \`name\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`campaigns\` DROP INDEX \`IDX_d32021d5791ed1617efaf1ac68\``,
    );
    await queryRunner.query(`ALTER TABLE \`campaigns\` DROP COLUMN \`name\``);
    await queryRunner.query(
      `ALTER TABLE \`campaigns\` ADD \`name\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX \`IDX_d32021d5791ed1617efaf1ac68\` ON \`campaigns\` (\`name\`)`,
    );
    await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`password\``);
    await queryRunner.query(
      `ALTER TABLE \`users\` ADD \`password\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\``,
    );
    await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`email\``);
    await queryRunner.query(
      `ALTER TABLE \`users\` ADD \`email\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\` (\`email\`)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`images\` ADD CONSTRAINT \`FK_96fabbb1202770b8e6a58bf6f1d\` FOREIGN KEY (\`product_id\`) REFERENCES \`tiendamamadb\`.\`products\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`products\` ADD CONSTRAINT \`FK_62d567f55d305f57022c1a1f23e\` FOREIGN KEY (\`campaign_id\`) REFERENCES \`tiendamamadb\`.\`campaigns\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`,
    );
  }
}
