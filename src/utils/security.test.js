import { isSafeUrl, getSafeUrl } from './security.js';
import { describe, it } from 'node:test';
import assert from 'node:assert';

describe('security utils', () => {
    describe('isSafeUrl', () => {
        it('should allow safe urls', () => {
            assert.strictEqual(isSafeUrl('https://example.com'), true);
            assert.strictEqual(isSafeUrl('http://example.com'), true);
            assert.strictEqual(isSafeUrl('/relative/path'), true);
            assert.strictEqual(isSafeUrl('mailto:test@test.com'), true);
            assert.strictEqual(isSafeUrl('tel:1234567890'), true);
            assert.strictEqual(isSafeUrl('blob:https://example.com/123'), true);
            assert.strictEqual(isSafeUrl('data:image/png;base64,iVBOR'), true);
        });

        it('should block unsafe urls', () => {
            assert.strictEqual(isSafeUrl('javascript:alert(1)'), false);
            assert.strictEqual(isSafeUrl(' JAVASCRIPT: alert(1) '), false);
            assert.strictEqual(isSafeUrl('vbscript:msgbox("hello")'), false);
            assert.strictEqual(isSafeUrl('file:///etc/passwd'), false);
        });

        it('should handle invalid inputs', () => {
            assert.strictEqual(isSafeUrl(null), false);
            assert.strictEqual(isSafeUrl(undefined), false);
            assert.strictEqual(isSafeUrl(''), false);
            assert.strictEqual(isSafeUrl(['javascript:alert(1)']), false);
            assert.strictEqual(isSafeUrl({}), false);
        });
    });

    describe('getSafeUrl', () => {
        it('should return the url if safe', () => {
            assert.strictEqual(getSafeUrl('https://example.com'), 'https://example.com');
        });

        it('should return fallback if unsafe', () => {
            assert.strictEqual(getSafeUrl('javascript:alert(1)'), '#');
            assert.strictEqual(getSafeUrl('javascript:alert(1)', '/safe'), '/safe');
        });

        it('should return undefined if url is undefined/null', () => {
             assert.strictEqual(getSafeUrl(null), null);
             assert.strictEqual(getSafeUrl(undefined), undefined);
        });
    });
});
