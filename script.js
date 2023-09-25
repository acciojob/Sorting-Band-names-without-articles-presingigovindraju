//your code here


let sen =["The Virupaksha Temple","Victoria Memorial","Tajmahal"];
let regix=/\bthe\b|\ban\b|\ba\b/gi;
let jan=[];
let map={};
for(let i=0;i<sen.length;i++){
    let articellessArray = sen[i].replace(regix," ").trim();
	articellessArray =articellessArray.replace(/  /g," ");
     jan.push(articellessArray);
     map[articellessArray] = sen[i];
}
jan.sort();
let ans=[];

for(let i of jan){
    ans.push(map[i]);
}

console.log(ans);
