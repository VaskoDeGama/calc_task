const calc = require('../src/calc')

/**
 * https://github.com/ellenaua/floating-point-error-examples/tree/master/examples Tests numbers
 */

describe('Calc:', () => {
  describe('Base testes', () => {
    test('will be define', () => {
      expect(calc).toBeDefined()
    })
    test('return boolean', () => {
      const frstNumber = 1
      const scndNumber = 2
      const operation = '+'
      const resultNumber = 3

      expect(typeof calc(frstNumber, scndNumber, operation, resultNumber)).toBe('boolean')
    })
    test('Number(1), Number(2), String(+), Number(3) -> true', () => {
      const frstNumber = 1
      const scndNumber = 2
      const operation = '+'
      const resultNumber = 3

      expect(calc(frstNumber, scndNumber, operation, resultNumber)).toBe(true)
    })
    test('String(1), Number(2), String(+), Number(3) -> true', () => {
      const frstNumber = '1'
      const scndNumber = 2
      const operation = '+'
      const resultNumber = 3

      expect(calc(frstNumber, scndNumber, operation, resultNumber)).toBe(true)
    })
    test('Number(1), String(2), String(+), Number(3) -> true', () => {
      const frstNumber = 1
      const scndNumber = '2'
      const operation = '+'
      const resultNumber = 3

      expect(calc(frstNumber, scndNumber, operation, resultNumber)).toBe(true)
    })
    test('Number(1), Number(2), String(+), String(3) -> true', () => {
      const frstNumber = 1
      const scndNumber = 2
      const operation = '+'
      const resultNumber = '3'

      expect(calc(frstNumber, scndNumber, operation, resultNumber)).toBe(true)
    })
    test('String(1), String(2), String(+), String(3) -> true', () => {
      const frstNumber = '1'
      const scndNumber = '2'
      const operation = '+'
      const resultNumber = '3'

      expect(calc(frstNumber, scndNumber, operation, resultNumber)).toBe(true)
    })
    test('Not support operation', () => {
      const frstNumber = 1
      const scndNumber = 2
      const operation = '='
      const resultNumber = 3

      expect(calc(frstNumber, scndNumber, operation, resultNumber).message).toBe('Operation not supported')
    })
    test('from 0 to 1000000', () => {
      const frstNumber = 0
      const scndNumber = 1000000
      const operation = '+'
      const resultNumber = 1000000

      expect(calc(frstNumber, scndNumber, operation, resultNumber)).toBe(true)
    })
    test('out of range', () => {
      const frstNumber = -20
      const scndNumber = 10000001
      const operation = '+'
      const resultNumber = 1

      expect(calc(frstNumber, scndNumber, operation, resultNumber).message).toBe('Out of input range')
    })
    test('out of range 2', () => {
      const frstNumber = 1000000
      const scndNumber = 1000000
      const operation = '*'
      const resultNumber = 1000000000000

      expect(calc(frstNumber, scndNumber, operation, resultNumber)).toBe(true)
    })
  })
  describe('Broken IEEE 754', () => {
    test('0.1 + 0.2 === 0.3', () => {
      const frstNumber = 0.2
      const scndNumber = 0.1
      const operation = '+'
      const resultNumber = 0.3

      expect(calc(frstNumber, scndNumber, operation, resultNumber)).toBe(true)
    })

    test('10.1 + 10.2 === 20.3', () => {
      const frstNumber = '10.2'
      const scndNumber = '10.1'
      const operation = '+'
      const resultNumber = 20.3

      expect(calc(frstNumber, scndNumber, operation, resultNumber)).toBe(true)
    })

    test('100.1 + 100.2 === 200.3', () => {
      const frstNumber = '100.2'
      const scndNumber = '100.1'
      const operation = '+'
      const resultNumber = 200.3

      expect(calc(frstNumber, scndNumber, operation, resultNumber)).toBe(true)
    })

    test('8.13  - 5.75 === 2.38', () => {
      const frstNumber = '8.13'
      const scndNumber = '5.75'
      const operation = '-'
      const resultNumber = '2.38'

      expect(calc(frstNumber, scndNumber, operation, resultNumber)).toBe(true)
    })
    test('122.72  - 6.43 === 116.28', () => {
      const frstNumber = '122.72'
      const scndNumber = '6.43'
      const operation = '-'
      const resultNumber = '116.29'

      expect(calc(frstNumber, scndNumber, operation, resultNumber)).toBe(true)
    })
    test('80.04 * 8.66 === 693.1464', () => {
      const frstNumber = '80.04'
      const scndNumber = '8.66'
      const operation = '*'
      const resultNumber = '693.1464'

      expect(calc(frstNumber, scndNumber, operation, resultNumber)).toBe(true)
    })
    test('8.38 * 0.3 === 2.514', () => {
      const frstNumber = '8.38'
      const scndNumber = '0.3'
      const operation = '*'
      const resultNumber = '2.514'

      expect(calc(frstNumber, scndNumber, operation, resultNumber)).toBe(true)
    })
    test('9.16 * 8.22 === 75.2952', () => {
      const frstNumber = '9.16'
      const scndNumber = '8.22'
      const operation = '*'
      const resultNumber = '75.2952'

      expect(calc(frstNumber, scndNumber, operation, resultNumber)).toBe(true)
    })
    test('3.37 * 3.33 === 11.2221', () => {
      const frstNumber = '3.37'
      const scndNumber = '3.33 '
      const operation = '*'
      const resultNumber = '11.2221'

      expect(calc(frstNumber, scndNumber, operation, resultNumber)).toBe(true)
    })
    test('9.68 * 8.22 === 79.5696', () => {
      const frstNumber = '9.68'
      const scndNumber = '8.22'
      const operation = '*'
      const resultNumber = '79.5696'

      expect(calc(frstNumber, scndNumber, operation, resultNumber)).toBe(true)
    })
    test('89.86 * 9.46 === 850.0756', () => {
      const frstNumber = '89.86'
      const scndNumber = '9.46'
      const operation = '*'
      const resultNumber = '850.0756'

      expect(calc(frstNumber, scndNumber, operation, resultNumber)).toBe(true)
    })
    test('21.39 * 1.27 === 27.1653', () => {
      const frstNumber = '21.39'
      const scndNumber = '1.27'
      const operation = '*'
      const resultNumber = '27.1653'

      expect(calc(frstNumber, scndNumber, operation, resultNumber)).toBe(true)
    })

    test('99.27 / 3 == 33.09', () => {
      const frstNumber = '99.27'
      const scndNumber = '3'
      const operation = '/'
      const resultNumber = '33.09'

      expect(calc(frstNumber, scndNumber, operation, resultNumber)).toBe(true)
    })
    test('32.76 / 9 == 3.63', () => {
      const frstNumber = '32.76'
      const scndNumber = '9'
      const operation = '/'
      const resultNumber = '3.64'

      expect(calc(frstNumber, scndNumber, operation, resultNumber)).toBe(true)
    })
    test('44.66 / 5 === 8.932', () => {
      const frstNumber = '44.66'
      const scndNumber = '5'
      const operation = '/'
      const resultNumber = '8.932'

      expect(calc(frstNumber, scndNumber, operation, resultNumber)).toBe(true)
    })
    test('51.45 / 5 === 10.29', () => {
      const frstNumber = '51.45'
      const scndNumber = '5'
      const operation = '/'
      const resultNumber = '10.29'

      expect(calc(frstNumber, scndNumber, operation, resultNumber)).toBe(true)
    })
    test('2.06 / 5 === 0.412', () => {
      const frstNumber = '2.06'
      const scndNumber = '5'
      const operation = '/'
      const resultNumber = '0.412'

      expect(calc(frstNumber, scndNumber, operation, resultNumber)).toBe(true)
    })
    test('10^5 + 10^5 != 2*10^5 + 0.1  (false)', () => {
      const frstNumber = 100000
      const scndNumber = 100000
      const operation = '+'
      const resultNumber = 200000.1

      expect(calc(frstNumber, scndNumber, operation, resultNumber)).toBe(false)
    })
  })
  describe('Some more simple tests', () => {
    test('test 1 +', () => {
      const frstNumber = 10
      const scndNumber = 10
      const operation = '+'
      const resultNumber = 20

      expect(calc(frstNumber, scndNumber, operation, resultNumber)).toBe(true)
    })
    test('test 2 -', () => {
      const frstNumber = 20
      const scndNumber = 10
      const operation = '-'
      const resultNumber = 10

      expect(calc(frstNumber, scndNumber, operation, resultNumber)).toBe(true)
    })
    test('test 3 *', () => {
      const frstNumber = 2
      const scndNumber = 10
      const operation = '*'
      const resultNumber = 20

      expect(calc(frstNumber, scndNumber, operation, resultNumber)).toBe(true)
    })
    test('test 4 /', () => {
      const frstNumber = 20
      const scndNumber = 10
      const operation = '/'
      const resultNumber = 2

      expect(calc(frstNumber, scndNumber, operation, resultNumber)).toBe(true)
    })
    test('test 5 + (false)', () => {
      const frstNumber = 10
      const scndNumber = 10
      const operation = '+'
      const resultNumber = 19

      expect(calc(frstNumber, scndNumber, operation, resultNumber)).toBe(false)
    })
    test('test 6 * (false)', () => {
      const frstNumber = 10
      const scndNumber = 5
      const operation = '*'
      const resultNumber = 49

      expect(calc(frstNumber, scndNumber, operation, resultNumber)).toBe(false)
    })
    test('test 7 * (false)', () => {
      const frstNumber = 10
      const scndNumber = 2
      const operation = '-'
      const resultNumber = 7

      expect(calc(frstNumber, scndNumber, operation, resultNumber)).toBe(false)
    })
    test('test 8 / (false)', () => {
      const frstNumber = 10
      const scndNumber = 10
      const operation = '/'
      const resultNumber = 0

      expect(calc(frstNumber, scndNumber, operation, resultNumber)).toBe(false)
    })
  })
})
