import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    // Set the root directory for Jest to locate all files in
    roots: ['<rootDir>/src'],

    // Make sure jest is setting up to interact with testing-library etc.
    setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],

    // Set test environment to run DOM
    testEnvironment: 'jsdom',

    // Find the test files
    testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],

    // TODO: ENTENDER ESSE COMANDO DEPOIS
    // All TSX files will be transpiled properly
    // transform: {
    //     '^.+\\.tsx?$': 'ts-jest',
    // },

    // Enable test coverage
    coverageDirectory: 'coverage',
    collectCoverage: true,
    collectCoverageFrom: [
        'src/components/**/*.ts(x)?',
        '!src/components/**/index.ts',
        '!src/components/**/*.stories.tsx',
        '!src/components/templates/**',
        '!src/components/**/*.mock.ts',
    ],

    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
};

export default config;
