module.exports = {
  transform: {'^.+\\.ts?$': 'ts-jest'},
  testEnvironment: 'jsdom', //'node',
  testRegex: '/__test__/.*\\.(test|spec)?\\.ts$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node']
};
