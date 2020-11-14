const members =[
  {grade: 4, name:'페이커'},
  {grade: 3, name:'너구리'},
  {grade: 3, name:'쇼메이커'},
  {grade: 1, name: '칸나'}, 
  {grade: 2, name: '캐니언'},
  {grade: 1, name:'라이프'}
];

const high = members.filter(mem => mem.grade >= 3);
const low = members.filter(mem => mem.grade <= 2);

console.log(high);
console.log(low);