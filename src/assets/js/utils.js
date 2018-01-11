let utils = {};

utils.filterArrayByPrice = (arr,startPrice,endPrice) => {
    return arr.filter( (item) => {
        return item.salePrice >= startPrice && item.salePrice <= endPrice ;
    } )
}

utils.sortArrayByPrice = (arr,inc) =>{
    if( inc) {
        for(let i =0; i< arr.length -1 ; i++) {
            for( let j =0 ; j< arr.length - i -1 ;j++ ){
                if( arr[j].salePrice > arr[j+1].salePrice ){
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
               
            }
        }
    } else {
        for(let i =0; i< arr.length -1 ; i++) {
            for( let j =0 ; j< arr.length - i -1 ;j++ ){
                if( arr[j].salePrice < arr[j+1].salePrice ){
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
               
            }
        }
    }
}


export default utils;