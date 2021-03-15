module.exports = function check(str, bracketsConfig) {
    let braces = [];

    for(let i=0; i<bracketsConfig.length; i++) {
        braces.push(bracketsConfig[i].join(''))
    }
    for(let i=0; i<braces.length; i++){
        if(str.includes(braces[i])){
            str = str.replace(braces[i], "");
            i = -1;
        }
    }
    return str.length === 0;
}

