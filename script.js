//your code here
let regix=/\bthe\b|\ban\b|\ba\b/gi;

console.log(arr.replace(regix,"$"));
let jan=[];
let map={};
for(let i=0;i<sen.length;i++){
    articellessArray = sen[i].replace(regix," ").trim();
     jan.push(articellessArray);
     map[articellessArray] = sen[i];
}

let ans=[];

for(let i of jan){
    ans.push(map[i]);
}

console.log(ans);
