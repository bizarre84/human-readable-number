module.exports = function toReadable (number) {
  let dic = {
      digits: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen' ,'nineteen'
    ],
    decades: ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  }
  let arrDigits = number.toString().split('').map(Number)

  let toReadable20 = (number) => dic.digits[number]
  let toReadable99 = (number) => {
    return (number%10 != 0) ? `${dic.decades[arrDigits[0]-2]} ${dic.digits[arrDigits[1]]}` : `${dic.decades[arrDigits[0]-2]}`
  }
  

  if (number < 20) return toReadable20(number)
  if (number >=20 && number < 100) return toReadable99(number)
  if (number >=100 && number < 1000) {
    if (number%100 == 0) {return `${dic.digits[arrDigits[0]]} hundred`}
    if ((number - (arrDigits[0]*100)) < 20) {
        return `${dic.digits[arrDigits[0]]} hundred ${toReadable20((number - (arrDigits[0]*100)))}`
    }
    if ((number - (arrDigits[0]*100)) >= 20) {
        arrDigits = (number - (arrDigits[0]*100)).toString().split('').map(Number)
        return `${dic.digits[arrDigits[0]]} hundred ${toReadable99((number - (arrDigits[0]*100)))}`
    }
  }
  
  return 'r'
}
