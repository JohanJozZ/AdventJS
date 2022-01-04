export default function isValid(letter) {
  console.log(letter)

  //Regex will check for []{} inside () signs
  const grinchV2 = /\(.*[\]\[\{\}].*\)/

  //variables to help understand 
  let [start,finish,open] = [null,null,false];

//Loop over all the characters looking for () 
 for(let i in letter){
   if(letter[i]=== '('){
     start = i;
     open = true;
   }
   if(letter[i]=== ')' && open == true){
       finish = i;
       open = false
       break
   }
 }

//if there's no '(' or ')' or if they are empty
 if(!start || !finish || start > finish - 2){
   console.log(false,'empty or missing')
   return false
 }
//if regex is true then grinch left {}[] inside
if(grinchV2.test(letter)){
  return false
}
return true
}