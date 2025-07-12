import test from 'node:test';
import assert from 'node:assert/strict';
import sum from './index.js';

test('Menjumlahkan 2 + 3 harus menghasilkan 5', () => {
  assert.strictEqual(sum(2, 3), 5);
});

test('Jika input bukan angka (misal: "2" dan 3), harus mengembalikan 0', () => {
  assert.strictEqual(sum("2", 3), 0);
});

test('Jika salah satu input null, harus mengembalikan 0', () => {
  assert.strictEqual(sum(null, 4), 0);
});

test('Jika salah satu input negatif, hasil harus 0', () => {
  assert.strictEqual(sum(-2, 3), 0);
});

test('Jika kedua input negatif, hasil harus 0', () => {
  assert.strictEqual(sum(-5, -6), 0);
});

test('Jika kedua input bukan angka, hasil harus 0', () => {
  assert.strictEqual(sum("a", {}), 0);
});

test('Menjumlahkan 0 + 5 harus menghasilkan 5', () => {
  assert.strictEqual(sum(0, 5), 5);
});