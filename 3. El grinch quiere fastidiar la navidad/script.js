function isValid(letter) {
  console.log(letter)
  //Regex to check if word inside ()
  const grinch = /\(.+\)/
  //Regex will check for []{} inside () signs
  const grinchV2 = /\(.*[\]\[\{\}].*\)/
  //Regex to check for empty ()
  const grinchV3 = /\(\s*\)/

//if regex is true then grinch left {}[] inside
if(grinchV2.test(letter)){
  console.log(false,'Has []{}')
  return false
}
//if there's no '(' or ')' or if they are empty
 if(grinch.test(letter) && !grinchV3.test(letter)){
   console.log(true,'Valid card')
   return true
 }

return false
}