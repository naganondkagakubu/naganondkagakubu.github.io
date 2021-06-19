//+-で味方と敵、10or00(10の位)で表裏 (8は味方香、-8は敵香、18は味方成香)

//変数宣言
for (let i = 1; i<=9; i++){
    for(let j=1; j<=9; j++){
        let ij = (10 * i) + j;
        eval("var img_" + ij + "= document.getElementById('img" + ij + "');")
    }
}

let S_get = []; //先手が取った駒
let G_get = []; //後手が取った駒
