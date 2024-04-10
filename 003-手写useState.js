//手写useState

function app(){
    const [num,updateNum] = myuseState(1)
    console.log('num',num)
    return {updateNum};
}

let fible = {};
let hasCalled = false;

function dispach(pending,action){
    pending.action = action
}

function myuseState(initstate){
    if(!hasCalled){
        const hook = {
            baiseState: initstate,
            pending:{
                action:null
            }
        }
        fible.hook = hook;
        hasCalled = true;
        return [fible.hook.baiseState,dispach.bind(null,fible.hook.pending)]
    }else{
        fible.hook.baiseState = fible.hook.pending.action(fible.hook.baiseState);
        return [fible.hook.baiseState,dispach.bind(null,fible.hook.pending)]
    }
}

const myApp = app()
myApp.updateNum((num) => num + 1)

app()