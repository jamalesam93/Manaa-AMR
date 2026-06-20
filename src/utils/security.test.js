import test from 'node:test'
import assert from 'node:assert'
import { isSafeUrl, getSafeUrl } from './security.js'

test('isSafeUrl - safe protocols', (t) => {
    assert.strictEqual(isSafeUrl('http://example.com'), true)
    assert.strictEqual(isSafeUrl('https://example.com'), true)
    assert.strictEqual(isSafeUrl('mailto:test@example.com'), true)
    assert.strictEqual(isSafeUrl('tel:+123456789'), true)
    assert.strictEqual(isSafeUrl('/relative/path'), true)
    assert.strictEqual(isSafeUrl('relative/path'), true)
    assert.strictEqual(isSafeUrl('?query=string'), true)
    assert.strictEqual(isSafeUrl('#fragment'), true)
})

test('isSafeUrl - dangerous protocols', (t) => {
    assert.strictEqual(isSafeUrl('javascript:alert(1)'), false)
    assert.strictEqual(isSafeUrl('vbscript:msgbox(1)'), false)
    assert.strictEqual(isSafeUrl('data:text/html,<script>alert(1)</script>'), false)
    assert.strictEqual(isSafeUrl('file:///etc/passwd'), false)
})

test('isSafeUrl - edge cases', (t) => {
    assert.strictEqual(isSafeUrl('JaVaScRiPt:alert(1)'), false, 'Should be case-insensitive')
    assert.strictEqual(isSafeUrl('  javascript:alert(1)'), false, 'Should handle whitespace') // URL parser handles this
    assert.strictEqual(isSafeUrl(null), false)
    assert.strictEqual(isSafeUrl(undefined), false)
    assert.strictEqual(isSafeUrl(123), false)
    assert.strictEqual(isSafeUrl({}), false)
    assert.strictEqual(isSafeUrl(['javascript:alert(1)']), false)
})

test('getSafeUrl', (t) => {
    assert.strictEqual(getSafeUrl('https://example.com'), 'https://example.com')
    assert.strictEqual(getSafeUrl('javascript:alert(1)'), undefined)
    assert.strictEqual(getSafeUrl(null), undefined)
    assert.strictEqual(getSafeUrl(undefined), undefined)
})
