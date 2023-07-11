const helloWorld = require('./helloWorld');

describe('my Exercise-01', function() {
  test('says "Ajika is the man!"', function() {
    expect(helloWorld()).toEqual('Ajika is the man!');
  });
});
