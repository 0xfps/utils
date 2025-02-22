function* generator(i) {
    const firstArg = yield i ** 2;
    const secondArg = yield firstArg ** 3;
    return secondArg ** 4;
}

console.log("==========")

const gen = generator(5)

const firstYield = gen.next()
console.log({ firstYield }); // { value: 25, done: false }

const secondYield = gen.next(10);
console.log({ secondYield }) // { value: 1000, done: false }

const thirdYield = gen.next(20)
console.log({ thirdYield }) // { value: 160000, done: true }

console.log("==========")

async function* asyncGenerator(i) {
    const firstArg = yield i ** 2;
    const secondArg = yield firstArg ** 3;
    return secondArg ** 4;
}

async function main() {
    const gen = await asyncGenerator(5)

    const firstYield = await gen.next()
    console.log({ firstYield }); // { value: 25, done: false }
    
    const secondYield = await gen.next(10);
    console.log({ secondYield }) // { value: 1000, done: false }
    
    const thirdYield = await gen.next(20)
    console.log({ thirdYield }) // { value: 160000, done: true }
    
    console.log("==========")
}

main()
