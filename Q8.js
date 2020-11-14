const members = [ 
    {name: '최정은', age: 23, grade: 4},
    {name: '표석훈', age: 24, grade: 3}, 
    {name: '문건우', age: 26, grade: 4},  
    {name: '손민호', age: 24, grade: 3}, 
    {name: '황서영', age: 21, grade: 2}
  ];

const index = members.findIndex(i => i.name === '문건우');

console.log(index);

const sliced = members.slice(2,3);

console.log(sliced);
