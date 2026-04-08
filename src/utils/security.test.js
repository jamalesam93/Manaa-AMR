import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isSafeUrl } from './security.js';

test('isSafeUrl - allows safe URLs', () => {
    assert.equal(isSafeUrl('https://example.com'), true);
    assert.equal(isSafeUrl('http://example.com'), true);
    assert.equal(isSafeUrl('https://example.com/path?query=1#hash'), true);
});

test('isSafeUrl - allows relative URLs', () => {
    assert.equal(isSafeUrl('/path/to/file.jpg'), true);
    assert.equal(isSafeUrl('./file.jpg'), true);
    assert.equal(isSafeUrl('../file.jpg'), true);
    assert.equal(isSafeUrl('#section'), true);
});

test('isSafeUrl - blocks dangerous protocols', () => {
    assert.equal(isSafeUrl('javascript:alert(1)'), false);
    assert.equal(isSafeUrl('JAVASCRIPT:alert(1)'), false);
    assert.equal(isSafeUrl('javascript:/*comment*/alert(1)'), false);
    assert.equal(isSafeUrl('vbscript:msgbox(1)'), false);
});

test('isSafeUrl - handles data URIs', () => {
    assert.equal(isSafeUrl('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=='), true);
    assert.equal(isSafeUrl('data:text/html;base64,PHNjcmlwdD5hbGVydCgxKTwvc2NyaXB0Pg=='), false);
    assert.equal(isSafeUrl('data:text/html,<script>alert(1)</script>'), false);
});

test('isSafeUrl - handles invalid inputs safely', () => {
    assert.equal(isSafeUrl(null), false);
    assert.equal(isSafeUrl(undefined), false);
    assert.equal(isSafeUrl(''), false);
    assert.equal(isSafeUrl(123), false);
    assert.equal(isSafeUrl({}), false);
});
