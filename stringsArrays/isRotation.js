function isSubstring(s1, s2) {
  return s1.includes(s2);
}

function isRotation(s1, s2) {
  if (s1.length !== s2.length) { return false}

  return isSubstring(`${s1}${s1}`, s2);
}

console.log(isRotation("waterbottle", "erbottlewat") === true);
console.log(isRotation("waterbottle", "bottlewater") === true);
console.log(isRotation("waterbottlem", "bottlewater") === false);