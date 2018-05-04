import { expect } from 'chai';

import sum from '../scripts/example-lib';

describe('Tests', function() {
	it('should run', function() {
		expect(1 + 1).to.equal(2);
	});

	it('should import files correctly', function() {
		expect(sum(1, 1)).to.equal(2);
	});
});