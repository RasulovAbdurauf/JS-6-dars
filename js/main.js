// localStoragei in JS

//localStorage.setItem("ism","Ibo");
//localStorage.setItem("familiya","Olimjonov");
//localStorage.setItem("yoshi","18 yoshda");
//localStorage["ism"] = "Sabo";
//localStorage["familiya"] = "Komiljonova";
//localStorage["yoshi"] = "17 yoshda";
//localStorage.removeItem("ism");
//localStorage.removeItem("familiya");
//localStorage.removeItem("yoshi")
//localStorage.clear();
//let uningIsmi = localStorage.getItem("ism");
//let uningFamiliyasi = localStorage.getItem("familiya");
//let uningYoshi = localStorage.getItem("yoshi");
//console.log(uningIsmi,uningFamiliyasi,uningYoshi);

// https resquests in JS

//let sorov = new XMLHttpRequest();
//sorov.open("get","https://getty.uz/serverdan/malumot/olish");
//sorov.send();
//sorov.onload = function(){
    //console.log(sorov.responseText);
//}

// JSON in JS

//let jsFile = {ism: "Robert", yoshi: 17};                  // JS object
//let jsonFile = '{"ism": "Jozef", "yoshi": 21}';           //JSON
//console.log(JSON.stringify(jsFile));                      //js kodni jsonga aylantirish
//console.log(JSON.parse(jsonFile));                        //jsonni js kodga aylantirish

//let sorov = new XMLHttpRequest();
//sorov.open("get","jsonFile.json");
//sorov.send();
//sorov.onload = function(){
    //console.log(JSON.parse(sorov.responseText));          //jsonni js kodga aylantirish
//}

// indexOf in js (matn ichidan index raqamini topish)

//let matn =  "sen gapir men esa sen bilan yozib boramiz"
//let birinchiSenIndeksi = matn.indexOf("sen")
//console.log(matn.indexOf("sen",birinchiSenIndeksi+1));

// replece in js (matn ichidagi so'zlarni almashtirish)

let matn = "Salom hammaga! salom berdim hammaga. salom"

//console.log(matn.replace(/salom|hammaga|hammaga|/gi,"alik"));

let yangiMatn = matn.replace(/salom|hammaga/gi,function(soz){
    if(soz == "Salom" || soz == "salom"){
        return "alik"
    }else if(soz == "hammaga"){
        return "barchaga"
    }
});
console.log(yangiMatn);