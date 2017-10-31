import test from 'ava';

test('first', t => {
        t.pass();
});

test('second', async t => {
        const bar = Promise.resolve('ok');

            t.is(await bar, 'ok');
});
