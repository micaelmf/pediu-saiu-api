// jest.config.js
require('dotenv').config({ path: '.env.test' });

module.exports = {
    preset: 'ts-jest',
    testEnvironment: './prisma/prisma-environment-jest.js',
    testTimeout: 60000
};