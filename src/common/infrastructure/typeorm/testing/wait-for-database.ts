// src/common/infrastructure/typeorm/testing/wait-for-database.ts
import { DataSource } from 'typeorm';

export async function waitForDatabase(
  dataSource: DataSource,
  maxRetries = 10,
  delayMs = 1000
): Promise<void> {
  for (let i = 1; i <= maxRetries; i++) {
    try {
      await dataSource.initialize();
      console.log(`✅ Banco conectado após ${i} tentativa(s)`);
      return;
    } catch (err: any) {
      if (i === maxRetries) throw new Error(`❌ Falha após ${maxRetries} tentativas: ${err.message}`);
      console.log(`⏳ Tentativa ${i}/${maxRetries} — aguardando ${delayMs}ms...`);
      await new Promise(r => setTimeout(r, delayMs));
    }
  }
}
