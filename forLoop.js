function printForLoop() {
   
   let result = '';

   for(let i = 1; i <= 5; i++) {
       result += i;
   }
   
   console.log('For Loop Result:');
   console.log(result);
}  

module.exports = printForLoop;