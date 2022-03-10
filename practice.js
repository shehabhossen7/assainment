

// .others
const bestFriend = ['aman', 'mefta', 'saikot', 'fahim', 'nasim'];
function oddFriend(bestFriend){
    const unique = [];
    for (const element of bestFriend){
        // console.log(element);
        // var element = bestFriend[i];
        // console.log(element.length)
        if( element.length % 2 != 0 ){
            // console.log(element);
            unique.push(element);
            // var myOnlybestFriend = element[]; 
            // return myOnlybestFriend;
            return unique;
        }
    }
    
} 

const myBestFriend = oddFriend(bestFriend);
console.log(myBestFriend);
console.log(typeof myBestFriend)