import { describe, it } from 'node:test'
import assert from 'node:assert'
import { isSafeUrl, getSafeUrl } from './security.js'

describe('security utilities', () => {
    describe('isSafeUrl', () => {
        it('should allow valid http and https urls', () => {
            assert.strictEqual(isSafeUrl('http://example.com/test.png'), true)
            assert.strictEqual(isSafeUrl('https://example.com/test.png'), true)
        })

        it('should allow local paths (starting with / or .)', () => {
            assert.strictEqual(isSafeUrl('/images/test.png'), true)
            assert.strictEqual(isSafeUrl('./images/test.png'), true)
            assert.strictEqual(isSafeUrl('../images/test.png'), true)
        })

        it('should allow safe protocols like blob: and data:', () => {
            assert.strictEqual(isSafeUrl('data:image/png;base64,iVBORw0KGgo='), true)
            assert.strictEqual(isSafeUrl('blob:http://localhost:3000/1234-5678'), true)
        })

        it('should block malicious javascript: urls', () => {
            assert.strictEqual(isSafeUrl('javascript:alert(1)'), false)
            assert.strictEqual(isSafeUrl(' javascript:alert(1)'), false)
            assert.strictEqual(isSafeUrl('\x01javascript:alert(1)'), false)
            assert.strictEqual(isSafeUrl('JaVaScRiPt:alert(1)'), false)
        })

        it('should block vbscript: urls', () => {
            assert.strictEqual(isSafeUrl('vbscript:msgbox(1)'), false)
        })

        it('should handle empty or null values safely', () => {
            assert.strictEqual(isSafeUrl(null), false)
            assert.strictEqual(isSafeUrl(undefined), false)
            assert.strictEqual(isSafeUrl(''), false)
        })
    })

    describe('getSafeUrl', () => {
        it('should return the original URL if it is safe', () => {
            assert.strictEqual(getSafeUrl('https://example.com'), 'https://example.com')
            assert.strictEqual(getSafeUrl('/path/to/image.png'), '/path/to/image.png')
        })

        it('should return the fallback URL if the original URL is unsafe', () => {
            assert.strictEqual(getSafeUrl('javascript:alert(1)'), '')
            assert.strictEqual(getSafeUrl('javascript:alert(1)', '/default.png'), '/default.png')
            assert.strictEqual(getSafeUrl('', '/default.png'), '/default.png')
        })
    })
})
