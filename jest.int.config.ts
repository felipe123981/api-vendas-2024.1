import { pathsToModuleNameMapper } from 'ts-jest'
import { compilerOptions } from './tsconfig.json'

export default {
  moduleFileExtensions: ['ts', 'js', 'json'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
   testTimeout: 300000, // Aumenta o timeout para 3000 segundos
  testRegex: '.*\\.int-spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': ['ts-jest', {
      // Opcional: se quiser garantir que ts-jest processe módulos ESM corretamente
      useESM: false, // ← mantenha false se seu projeto é CommonJS (padrão)
    }],
  },
  // 👇 ESSE É O CAMINHO PARA RESOLVER O ERRO COM @faker-js/faker
  transformIgnorePatterns: [
    // Ignora tudo em node_modules, EXCETO:
    // - @faker-js/faker (ESM-only desde v8)
    // - outros pacotes ESM que você usar no futuro
    `/node_modules/(?!@faker-js/faker)/`,
  ],
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
} satisfies import('jest').Config;
