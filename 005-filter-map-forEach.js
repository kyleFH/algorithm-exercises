//手写filter

let Array = [1,2,3,4]

fn = (num) => num > 1
Array.myFilter = function(fn){
    let result = [];
    if(typeof fn == 'function'){
        for(let i = 0; i <= this.length;i++){
            let condition = fn(this[i])
            if(condition){
                result.push(this[i])
            }
        }

    }else{
        throw new Error('输入的不是方法')
    }
    return result;
}
let res = Array.myFilter(fn)

console.log(res)

