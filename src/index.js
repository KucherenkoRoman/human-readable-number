module.exports = function toReadable (number) {
  const nums = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen"
  ];

  const tensNums = [
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
  ];
  
  if (number === 0){
      return "zero";
  }

  if (number < 20){
      return nums[number - 1];
  }

  if (number < 100){
    return tensNums[Math.floor(number / 10) - 1] + (number % 10 === 0 ? "" : " " + nums[(number % 10) - 1]);
  }

  if (number < 1000){
      let readableNumber = "";
      readableNumber += nums[Math.floor(number / 100) - 1] + " hundred";

      if (number % 100 === 0){
          return readableNumber;
      }

      if (number % 100 < 20) {
        return readableNumber + " " + nums[(number % 100) - 1]
      }

      return readableNumber + " " + tensNums[Math.floor((number % 100) / 10) - 1] + ((number % 100) % 10 === 0 ? "" : " " + nums[((number % 100) % 10) - 1])
  }
}
