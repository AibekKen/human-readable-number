module.exports = function toReadable(number) {
   const stringNumber = number.toString();
   let num = number;
   if (stringNumber.length <= 2) {
      return showTwoDigits(num);
   }
   else if (stringNumber.length <= 3) {
      return showThreeDigits(num);
   }
};

const showTwoDigits = (num) => {
   const numbers0_19 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   const numbers20_90 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   const stringNumber = num.toString();

   if (num < 20) {
      return numbers0_19[num]
   }
   else {
      if (stringNumber[1] === '0') {
         return numbers20_90[+stringNumber[0] - 2];
      }
      else {
         return `${numbers20_90[stringNumber[0] - 2]} ${numbers0_19[stringNumber[1]]}`;
      }
   }
};

const showThreeDigits = (num) => {
   let stringNum = num.toString();
   const firstDigit = showTwoDigits(+stringNum[0]);
   let lastDigits = '';

   if (stringNum[1] !== '0') {
      lastDigits = showTwoDigits(+`${stringNum[1]}${stringNum[2]}`)
   }
   else if (stringNum[1] == '0' && stringNum[2] !== '0') {
      lastDigits = showTwoDigits(+stringNum[2])
   }
   else {
      return `${firstDigit} hundred`
   }

   return `${firstDigit} hundred ${lastDigits}`;

};
