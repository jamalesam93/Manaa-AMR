import { test } from 'node:test'
import assert from 'node:assert'
import { isSafeUrl } from './security.js'

test('isSafeUrl allows valid HTTP/HTTPS URLs', () => {
    assert.strictEqual(isSafeUrl('http://example.com'), true)
    assert.strictEqual(isSafeUrl('https://example.com'), true)
    assert.strictEqual(isSafeUrl('https://example.com/path/to/file.jpg'), true)
})

test('isSafeUrl allows relative URLs', () => {
    assert.strictEqual(isSafeUrl('/path/to/file.jpg'), true)
    assert.strictEqual(isSafeUrl('./file.jpg'), true)
    assert.strictEqual(isSafeUrl('../file.jpg'), true)
    assert.strictEqual(isSafeUrl('file.jpg'), true)
})

test('isSafeUrl allows specific safe protocols', () => {
    assert.strictEqual(isSafeUrl('mailto:test@example.com'), true)
    assert.strictEqual(isSafeUrl('tel:+1234567890'), true)
    assert.strictEqual(isSafeUrl('blob:http://example.com/1234'), true)
    assert.strictEqual(isSafeUrl('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='), true)
})

test('isSafeUrl blocks dangerous protocols', () => {
    assert.strictEqual(isSafeUrl('javascript:alert(1)'), false)
    assert.strictEqual(isSafeUrl('vbscript:msgbox("test")'), false)
})

test('isSafeUrl handles whitespace correctly', () => {
    assert.strictEqual(isSafeUrl('  javascript:alert(1)'), false)
    assert.strictEqual(isSafeUrl('\tjavascript:alert(1)'), false)
    assert.strictEqual(isSafeUrl('\njavascript:alert(1)'), false)
    assert.strictEqual(isSafeUrl(' javascript:alert(1) '), false)
})

test('isSafeUrl handles case insensitivity', () => {
    assert.strictEqual(isSafeUrl('JaVaScRiPt:alert(1)'), false)
    assert.strictEqual(isSafeUrl('VBScript:msgbox("test")'), false)
    assert.strictEqual(isSafeUrl('DATA:text/html;base64,...'), true) // Since we allow data:
})

test('isSafeUrl handles empty or invalid inputs gracefully', () => {
    assert.strictEqual(isSafeUrl(''), false)
    assert.strictEqual(isSafeUrl(null), false)
    assert.strictEqual(isSafeUrl(undefined), false)
    assert.strictEqual(isSafeUrl(123), false)
    assert.strictEqual(isSafeUrl({}), false)
})
