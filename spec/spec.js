const isNotBoolean = require('../index')

describe('is not boolean', () => {
  it('checks if not a boolean', () => {
    expect(isNotBoolean(new Boolean(42))).toBeFalsy()
    expect(isNotBoolean(false)).toBeFalsy()
    expect(isNotBoolean(Object(false))).toBeFalsy()
    expect(isNotBoolean(true)).toBeFalsy()
    expect(isNotBoolean(Object(true))).toBeFalsy()

    expect(isNotBoolean(undefined)).toBeTruthy()
    expect(isNotBoolean(null)).toBeTruthy()
    expect(isNotBoolean('foo')).toBeTruthy()
    expect(isNotBoolean(function () {})).toBeTruthy()
    expect(isNotBoolean([])).toBeTruthy()
    expect(isNotBoolean({})).toBeTruthy()
    expect(isNotBoolean(/a/g)).toBeTruthy()
    expect(isNotBoolean(new RegExp('a', 'g'))).toBeTruthy()
    expect(isNotBoolean(new Date())).toBeTruthy()
    expect(isNotBoolean(42)).toBeTruthy()
    expect(isNotBoolean(NaN)).toBeTruthy()
    expect(isNotBoolean(Infinity)).toBeTruthy()
  })
})
