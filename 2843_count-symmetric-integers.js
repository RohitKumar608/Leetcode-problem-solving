/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
  let result = 0;
  for(let i=low; i<=high; i++){
      const str = `${i}`;
      const strLen = str.length;
      if(strLen % 2 !== 0) continue;
      let leftSum =0;
      let rightSum =0;
      for(let j=0; j<Math.floor(strLen/2); j++ ){
          leftSum += +str[j];
          rightSum += +str[strLen-1-j];
      }
      if(leftSum == rightSum){
          result++;
      }
  }
  return result;
};