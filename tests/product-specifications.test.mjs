import assert from 'node:assert/strict';
import { test } from 'node:test';
import { productSpecifications, POWER_WEEDER_FAQS, productCopyItems } from '../frontend/src/lib/product-specifications.mjs';

test('specifications retain source values, normalize labels and omit absent facts', () => {
  assert.deepEqual(productSpecifications({ name: 'Unknown' }), []);
  const specs = productSpecifications({ name: '7 HP Back-Rotary Weeder', specs: { ENGINE: 'Petrol', WorkingDepth: '8-10 inches', Blank: '', Missing: null, Zero: 0 } });
  assert.equal(specs.find(s => s.name === 'Engine').value, 'Petrol');
  assert.equal(specs.find(s => s.name === 'Working Depth').value, '8-10 inches');
  assert.equal(specs.find(s => s.name === 'Rotary type').value, 'Back rotary');
  assert.equal(specs.find(s => s.name === 'Zero').value, '0');
  assert(!specs.some(s => ['Blank', 'Missing', 'Transmission', 'Power'].includes(s.name)));
});

test('explicit rotary facts win and FAQ data is complete', () => {
  const specs = productSpecifications({ name: 'Back Rotary', specs: { 'Rotary type': 'Front rotary' } });
  assert.equal(specs.find(s => s.name === 'Rotary type').value, 'Front rotary');
  assert.equal(POWER_WEEDER_FAQS.length, 4);
  assert(POWER_WEEDER_FAQS.every(f => f.question && f.answer));
});


test('marketing claims without model evidence are omitted without changing technical facts', () => {
  const source = { specs: { Power: '7 HP / 212cc', Transmission: 'Gear Drive' }, badges: ['FMTTI Tested', 'Back Rotary'], features: ['24-48 hour dispatch', 'Adjustable handlebar', 'Genuine spare parts availability'] };
  assert.deepEqual(productCopyItems(source.badges), ['Back Rotary']);
  assert.deepEqual(productCopyItems(source.features), ['Adjustable handlebar']);
  assert.deepEqual(source.specs, { Power: '7 HP / 212cc', Transmission: 'Gear Drive' });
  assert.equal(productSpecifications(source).length, 2);
});
