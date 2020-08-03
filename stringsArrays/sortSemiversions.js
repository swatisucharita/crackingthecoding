function compare(version1=0, version2=0) {
    return version1 > version2 ? 1 : -1;
}

function semverSor(arr =[]) {
  // put your code here
  return arr.sort((ver1, ver2) => {
    const [major1, minor1, patch1, ...rest1] = ver1.split(".").map(v => parseInt(v));
    const [major2, minor2, patch2, ...rest2] = ver2.split(".").map(v => parseInt(v));

    if (major1 === major2) { 
        if (minor1 === minor2) {
            return patch1 > patch2 ? 1: -1;
        } else {
            return minor1 > minor2 ? 1 : -1;
        }
    } else {
        return major1 > major2 ? 1 : -1;
    } 

    // const version1 = ver1.split(".").map(v => parseInt(v));
    // const version2 = ver2.split(".").map(v => parseInt(v));

    // let op =-1;
    // let i = 0;
    // while(version1[i] && version2[i]) {
    //     const result = compare(version1[i], version2[i])
    //     if (result === 1) { return op = 1; break;}
    //     i++
    // }

    // return op;
    
  });
}

var arr = [ "1.0.5", "2.5.0", "0.12.0", "1", "1.23.45", "1.4.50", "1.2.3.4.5.6.7"];
var expectedOutput = [ "0.12.0", "1", "1.0.5", "1.2.3.4.5.6.7", "1.4.50", "1.23.45", "2.5.0" ];
console.log(semverSor(arr));