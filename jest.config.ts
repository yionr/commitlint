import {Config} from '@jest/types';
import {TsJestGlobalOptions} from 'ts-jest/dist/types';

interface JestConfig extends Partial<Config.InitialOptions> {
	globals?: Config.ConfigGlobals & {'ts-jest': TsJestGlobalOptions};
}

const jestConfig: JestConfig = {
	preset: 'ts-jest',
	reporters: ['default', 'jest-junit'],
	testEnvironment: 'node',
	testRegex: undefined,
	testMatch: [
		'**/*.test.ts?(x)',
		'**/@commitlint/{lint,read,travis-cli,cli,load,prompt}/src/**/*.test.js?(x)',
		'**/@commitlint/prompt-cli/*.test.js?(x)'
	]
};

module.exports = jestConfig;
