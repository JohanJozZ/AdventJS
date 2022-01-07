function listGifts(letter) {

  // /\s+/ regex means one or more spaces
 const giftArray = letter.split(/\s+/);
 const giftObj = {};

 giftArray.forEach(gift => {
   //stop if starts with _ or if it's an empty string
   if(gift.charAt(0)==='_' || gift === ''){
       return
     }
     // if property doesn't exist then create one.
   if (!giftObj.hasOwnProperty(gift)){
     giftObj[gift] = 0
   }
   //increment
   giftObj[gift]++
})

return giftObj
}