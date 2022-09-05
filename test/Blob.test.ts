import { pipe } from 'fp-ts/function';
import { it, itFail, runTests, Tests } from 'unit-test-ts';
import * as vitest from 'vitest';

import * as blob from '../src/Blob';

const tests: Tests = {
  'fromString then text returns original string': it({
    expectTask: pipe('masumoto', blob.fromString, blob.text),
    toEqual: 'masumoto',
  }),
  'fromString then text does not return another string': itFail({
    expectTask: pipe('masumoto', blob.fromString, blob.text),
    toEqual: 'nazuna',
  }),
};

runTests(tests, vitest);
