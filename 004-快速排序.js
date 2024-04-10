//快速排序
const array = [8,2,3,4,2,8,4,9,12,0]

function quickSort(arr){
    sort(arr,0,arr.length - 1)
    return arr;

    function sort(arr,left,right){
        if(left >= right){
            return
        }
        let i = left;
        let j = right;
        let x = arr[i];
        while( i < j){
            while(i < j && arr[j] > x){
                j--
            }
            if( i < j){
                arr[i] = arr[j]
            }
            while(i < j && arr[i]<= x){
                i++
            }
            if( i<j ){
                arr[j] = arr[i]
            }
        }
        arr[i] = x;
        sort(arr,left,i - 1);
        sort(arr,i + 1,right);
    }
}
const a = quickSort(array)
console.log(a)
