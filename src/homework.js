////////////////// Task1 /////////////////////////

const arr = ['s', '4', 't', 'e', 't', 'p', '4', 't'];
const arr1 = ['s', '4', 't', 'e', 't', 'p', '4', 't','23', '4', '23', 'a', null, null];


const removeDuplicateElements = function(arr) {
    const sortArr = [];
    arr.filter((i) => {
        if(!sortArr.includes(i)) {
            sortArr.push(i)
        }
    });
    console.log(sortArr);
    return sortArr;
}

removeDuplicateElements(arr);
removeDuplicateElements(arr1);

////////////////// Task2 /////////////////////////

const wordTest = 'testi';
const wordTest1 = 'test';
const wordTest2 = 'A';
const wordTest4 = 'sfk;s;kdfsk';

const middleСharacter = function (word) {
    if (word.length > 0) {        
        if(word.length % 2 === 0) {
            console.log(word[word.length / 2 - 1] + word[word.length / 2]);
        } else {
            console.log(word[Math.floor(word.length / 2)]);
        }    
    } else {
        console.log("No symbols");
    }
}

middleСharacter(wordTest);
middleСharacter(wordTest1);
middleСharacter(wordTest2);
middleСharacter(wordTest4);