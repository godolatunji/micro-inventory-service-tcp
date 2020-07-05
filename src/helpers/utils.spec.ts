import * as utils from './utils';

describe('Utility Function Tests', () => {
  test('#convertObjectToString: it should be able to handle simple object', () => {
    const data = { a: 1, b: 2 };
    const result = 'a: "1", b: "2"';

    const res = utils.convertObjectToString(data);
    expect(res).toBe(result);
  });

  test('#convertObjectToString: it should be able to handle nested object', () => {
    const data = { a: 1, b: 2, c: { a: 3, b: 4 } };
    const result = 'a: "1", b: "2", c:{ a: "3", b: "4" }';

    const res = utils.convertObjectToString(data);
    expect(res).toBe(result);
  });

  test('#convertObjectToString: it should be able to handle nested object', () => {
    const data = {
      a: 1,
      b: 2,
      c: [{ a: 3, b: 4 }],
    };
    const result = 'a: "1", b: "2", c: [{ a: "3", b: "4" }]';

    const res = utils.convertObjectToString(data);

    expect(res).toBe(result);
  });
});
