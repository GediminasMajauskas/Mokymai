const { sudetis } = require('../sum.js');

test ('Turime sudeti', () => {
    const x = 2;
    const y = 6;
    const rezultatas = sudetis (x, y);
    expect(rezultatas).toBe(8);
});
