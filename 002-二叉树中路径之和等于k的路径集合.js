/**
 * 有一个二叉树，每个节点都是[-1000, 1000]的数字，我们定义path为从root节点到下面任意某个节点。返回这棵树中节点之和等于k的所有path。
 */

const tree = {
    value: 3,
    left: {
        value: 2,
        left: { value: 1 },
        right: { value: 5,
                left: { value: 4 },
                right: { value: 5 }
                 }
    },
    right: {
        value: 7,
        left: { value: 3 },
        right: { value: 9 }
    }
}


const preorderTraversal = function(root){
    const ret= []
    const path = [root.value]
    const recursion = (curNode,curPath)=> {
        if(!curNode) return;
        if(curNode.left === undefined && curNode.right === undefined){
            ret.push(curPath)
        }
        if(curNode.left){
            let pathleft = [...curPath,curNode.left.value]
            recursion(curNode.left,pathleft);
        }
        if(curNode.right){
            let pathright = [...curPath,curNode.right.value]
            recursion(curNode.right,pathright);
        }
        
    }
    recursion(root,path);
    return ret
}

const k = 10
const allPaht = []
preorderTraversal(tree).forEach((item,index) => {
    let num = 0
    item.reduce((ite,current) => {
        num += 1
        const retu = ite + current;
        if(retu === k){
            const pathK = item.slice(0,num + 1)
            allPaht.push(pathK)
        }
        return retu
    })
})

console.log('allPaht',allPaht)