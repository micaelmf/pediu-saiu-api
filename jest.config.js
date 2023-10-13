// jest.config.js
require('dotenv').config({ path: '.env.test' });

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testTimeout: 60000
};