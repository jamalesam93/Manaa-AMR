import { test } from 'node:test';
import assert from 'node:assert';
import { isSafeUrl } from './security.js';

test('isSafeUrl blocks dangerous protocols', () => {
    assert.strictEqual(isSafeUrl('javascript:alert(1)'), false);
    assert.strictEqual(isSafeUrl('vbscript:msgbox(1)'), false);
    assert.strictEqual(isSafeUrl('data:text/html,<script>alert(1)</script>'), false);
    assert.strictEqual(isSafeUrl('file:///etc/passwd'), false);
});

test('isSafeUrl allows safe protocols and URLs', () => {
    assert.strictEqual(isSafeUrl('https://example.com'), true);
    assert.strictEqual(isSafeUrl('http://example.com'), true);
    assert.strictEqual(isSafeUrl('mailto:test@example.com'), true);
    assert.strictEqual(isSafeUrl('tel:1234567890'), true);
    assert.strictEqual(isSafeUrl('/relative/path'), true);
    assert.strictEqual(isSafeUrl('relative/path'), true);
    assert.strictEqual(isSafeUrl('?query=1'), true);
    assert.strictEqual(isSafeUrl('#hash'), true);
});

test('isSafeUrl rejects non-string inputs', () => {
    assert.strictEqual(isSafeUrl(null), false);
    assert.strictEqual(isSafeUrl(undefined), false);
    assert.strictEqual(isSafeUrl(123), false);
    assert.strictEqual(isSafeUrl({}), false);
    assert.strictEqual(isSafeUrl(['javascript:alert(1)']), false);
});
