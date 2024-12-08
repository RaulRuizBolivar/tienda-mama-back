import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1710782786568 implements MigrationInterface {
    name = 'Migration1710782786568'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`isAdmin\` tinyint NOT NULL DEFAULT 0, \`deletedAt\` datetime(6) NULL, UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`campaigns\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`name\` varchar(255) NOT NULL, \`startDate\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`endDate\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`deletedAt\` datetime(6) NULL, UNIQUE INDEX \`IDX_d32021d5791ed1617efaf1ac68\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`images\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`url\` varchar(255) NOT NULL, \`deletedAt\` datetime(6) NULL, \`product_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`products\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`name\` varchar(255) NOT NULL, \`stock\` int NOT NULL, \`description\` varchar(255) NOT NULL DEFAULT '', \`price\` float NOT NULL, \`deletedAt\` datetime(6) NULL, \`campaign_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`images\` ADD CONSTRAINT \`FK_96fabbb1202770b8e6a58bf6f1d\` FOREIGN KEY (\`product_id\`) REFERENCES \`products\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD CONSTRAINT \`FK_62d567f55d305f57022c1a1f23e\` FOREIGN KEY (\`campaign_id\`) REFERENCES \`campaigns\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`products\` DROP FOREIGN KEY \`FK_62d567f55d305f57022c1a1f23e\``);
        await queryRunner.query(`ALTER TABLE \`images\` DROP FOREIGN KEY \`FK_96fabbb1202770b8e6a58bf6f1d\``);
        await queryRunner.query(`DROP TABLE \`products\``);
        await queryRunner.query(`DROP TABLE \`images\``);
        await queryRunner.query(`DROP INDEX \`IDX_d32021d5791ed1617efaf1ac68\` ON \`campaigns\``);
        await queryRunner.query(`DROP TABLE \`campaigns\``);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
