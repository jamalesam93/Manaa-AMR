import { test } from 'node:test'
import assert from 'node:assert'
import { getAWaReCategory, isNotRecommendedCombination } from './aware-classification.js'

test('getAWaReCategory - happy paths', () => {
    assert.strictEqual(getAWaReCategory('Amoxicillin'), 'ACCESS')
    assert.strictEqual(getAWaReCategory('Ceftriaxone'), 'WATCH')
    assert.strictEqual(getAWaReCategory('Linezolid'), 'RESERVE')
})

test('getAWaReCategory - case insensitivity', () => {
    assert.strictEqual(getAWaReCategory('amoxicillin'), 'ACCESS')
    assert.strictEqual(getAWaReCategory('CEFTRIAXONE'), 'WATCH')
    assert.strictEqual(getAWaReCategory('lInEzOlId'), 'RESERVE')
})

test('getAWaReCategory - partial matches', () => {
    // Should match 'Amoxicillin/Clavulanic acid' and return 'ACCESS'
    assert.strictEqual(getAWaReCategory('Amoxicillin/Clavulanic acid'), 'ACCESS')
})

test('getAWaReCategory - non-existent antibiotic', () => {
    assert.strictEqual(getAWaReCategory('UnknownBiotic'), null)
})

test('getAWaReCategory - edge cases', () => {
    assert.strictEqual(getAWaReCategory(''), null)
    assert.strictEqual(getAWaReCategory(null), null)
    assert.strictEqual(getAWaReCategory(undefined), null)
})

test('isNotRecommendedCombination - happy paths', () => {
    const result = isNotRecommendedCombination('Amoxicillin/Cloxacillin')
    assert.ok(result)
    assert.strictEqual(result.name, 'Amoxicillin/Cloxacillin')
})

test('isNotRecommendedCombination - case insensitivity', () => {
    const result = isNotRecommendedCombination('amoxicillin/cloxacillin')
    assert.ok(result)
})

test('isNotRecommendedCombination - non-existent combination', () => {
    assert.strictEqual(isNotRecommendedCombination('UnknownCombo'), undefined)
})
