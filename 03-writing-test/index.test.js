import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sum } from './index.js';

test('menjumlahkan 1 + 2 seharusnya 3', () => {
  assert.strictEqual(sum(1, 2), 3);
});

test('menjumlahkan -5 + 5 seharusnya 0', () => {
  assert.strictEqual(sum(-5, 5), 0);
});

test('menjumlahkan 0 + 0 seharusnya 0', () => {
  assert.strictEqual(sum(0, 0), 0);
});

test('menjumlahkan 2.5 + 2.5 seharusnya 5', () => {
  assert.strictEqual(sum(2.5, 2.5), 5);
});