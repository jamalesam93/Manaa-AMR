import { describe, it } from 'node:test';
import assert from 'node:assert';
import { isSafeUrl, getSafeUrl } from './security.js';

describe('isSafeUrl', () => {
  it('allows http URLs', () => {
    assert.strictEqual(isSafeUrl('http://example.com'), true);
  });

  it('allows https URLs', () => {
    assert.strictEqual(isSafeUrl('https://example.com'), true);
  });

  it('allows mailto URLs', () => {
    assert.strictEqual(isSafeUrl('mailto:test@example.com'), true);
  });

  it('allows tel URLs', () => {
    assert.strictEqual(isSafeUrl('tel:+1234567890'), true);
  });

  it('allows relative URLs', () => {
    assert.strictEqual(isSafeUrl('/path/to/resource'), true);
    assert.strictEqual(isSafeUrl('./path/to/resource'), true);
    assert.strictEqual(isSafeUrl('../path/to/resource'), true);
    assert.strictEqual(isSafeUrl('?query=param'), true);
    assert.strictEqual(isSafeUrl('#anchor'), true);
  });

  it('blocks javascript URLs', () => {
    assert.strictEqual(isSafeUrl('javascript:alert(1)'), false);
    assert.strictEqual(isSafeUrl(' javascript:alert(1) '), false);
    assert.strictEqual(isSafeUrl('JAVASCRIPT:alert(1)'), false);
  });

  it('blocks vbscript URLs', () => {
    assert.strictEqual(isSafeUrl('vbscript:msgbox(1)'), false);
  });

  it('allows data URIs for images but blocks text/html', () => {
    assert.strictEqual(isSafeUrl('data:image/png;base64,iVBORw0KGgo='), true);
    assert.strictEqual(isSafeUrl('data:text/html,<script>alert(1)</script>'), false);
  });

  it('fails safely with invalid inputs', () => {
    assert.strictEqual(isSafeUrl(null), false);
    assert.strictEqual(isSafeUrl(undefined), false);
    assert.strictEqual(isSafeUrl({}), false);
    assert.strictEqual(isSafeUrl([]), false);
    assert.strictEqual(isSafeUrl(123), false);
  });
});

describe('getSafeUrl', () => {
  it('returns safe URL', () => {
    assert.strictEqual(getSafeUrl('https://example.com'), 'https://example.com');
  });

  it('returns fallback for unsafe URL', () => {
    assert.strictEqual(getSafeUrl('javascript:alert(1)', 'fallback.com'), 'fallback.com');
  });

  it('returns undefined by default for unsafe URL', () => {
    assert.strictEqual(getSafeUrl('javascript:alert(1)'), undefined);
  });
});
