const formatMoney = require("./formatMoney")

describe('formatMoney function', () => {
  it ('works with fractional numbers', () => {
    expect(formatMoney(1)).toEqual('$0.01');
    expect(formatMoney(140)).toEqual('$1.40');
  });

  it ('leaves off cents when its whole dollars', () => {
    expect(formatMoney(5000)).toEqual('$50');
    expect(formatMoney(100)).toEqual('$1.00');
  });
})
