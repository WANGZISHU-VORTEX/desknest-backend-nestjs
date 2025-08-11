// src/module/database.module.ts
import { Test, TestingModule } from '@nestjs/testing';
import { DataSource, Repository } from 'typeorm';
import { DatabaseModule } from './database.module';
import { TestEntity } from '../../test/test.entity';
import { ConfigModule } from '@nestjs/config';

describe('DatabaseModule', () => {
  let module: TestingModule;
  let dataSource: DataSource;
  let testRepository: Repository<TestEntity>;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: '.env',
        }),
        DatabaseModule,
      ],
    }).compile();

    dataSource = module.get<DataSource>(DataSource);
    testRepository = dataSource.getRepository(TestEntity);
  });

  afterAll(async () => {
    await testRepository.clear();
    await dataSource.destroy();
    await module.close();
  });

  it('should establish a valid database connection', async () => {
    expect(dataSource.isInitialized).toBe(true);
    expect(dataSource.options.type).toBe('mysql');
  });

  it('should perform CRUD operations on test entity', async () => {
    const created = await testRepository.save({ name: '测试数据' });
    expect(created.id).toBeDefined();
    expect(created.name).toBe('测试数据');

    const found = await testRepository.findOne({ where: { id: created.id } });
    expect(found).not.toBeNull();
    expect(found!.name).toBe('测试数据');

    await testRepository.update(created.id, { name: '更新后的数据' });
    const updated = await testRepository.findOne({ where: { id: created.id } });
    expect(updated!.name).toBe('更新后的数据');

    await testRepository.delete(created.id);
    const deleted = await testRepository.findOne({ where: { id: created.id } });
    expect(deleted).toBeNull();
  });
});
