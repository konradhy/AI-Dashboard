// var twoSum = function (nums, target) {
//   let x = 0;
//   let i = 0;

//   while (i < nums.length) {
//     x = 0;
//     while (x < nums.length) {
//       if (nums[i] + nums[x] === target && i != x) {
//         var answer = [i, x];

//         return answer;
//       } else {
//         x++;
//       }
//     }

//     i++;
//   }
// };

// const nums = [2, 4, 3, 7, 11, 15];
// const ans = twoSum(nums, 18);

// console.log(ans);

// const disemvowel = (str) => {
//   const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   let newStr = "";

//   for (let i = 0; i <= str.length; i++) {
//     let char = str.charAt(i);
//     if (vowels.indexOf(char) == -1) {
//       newStr += char;
//     }
//   }
//   return newStr;
// };

function disemvowel(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  str = Array.from(str);

  for (let i = 0; i < str.length; i++) {
    for (let x = 0; x < str.length; x++) {
      if (vowels[i] === str[x]) {
        str.splice(x, 1);
      }
    }
  }

  return str.join("");
}

const str = "QaFaaCRwmUHDZPNoinxdIb";

console.log(disemvowel(str));
