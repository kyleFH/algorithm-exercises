// 1、实现一个函数"closure”时，该函数调用后会返回一个新计数器。每当调用某个计数器时会返回一个数字且该数字会累加1。
// 注意：
// 1. 初次调用返回值为1
// 2. 每个计数器所统计的数字是独立的
// 测试用例：
// const timer1 = closure()
// console.log(timer1()) // 1
// console.log(timer1()) // 2

// const time2 = closure()
// console.log(timer2()) // 1
// console.log(timer1()) // 3

const closure = () => {
    let num = 1
        return function(){
            return num ++
        }
    }

/**
 * 题解：
 * 尽量让所有的回调不再共享同一个环境
 */