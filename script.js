//your code here


let sen =["The Virupaksha Temple","Victoria Memorial","Tajmahal"];
let regix=/\bthe\b|\ban\b|\ba\b/gi;
let jan=[];
let map={};
for(let i=0;i<sen.length;i++){
    let articellessArray = sen[i].replace(regix," ").trim();
	articellessArray =articellessArray.replace(/  /g," ");
     jan.push(articellessArray);
	  jan.sort();
     map[articellessArray] = sen[i];
}
jan.sort();

for(let i=0;i<jan.length;i++){
    console.log(map[jan[i]]);
}

