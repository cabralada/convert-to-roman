function writeInRoman(data) {  
  let result = '';

  // This idea was to try split bettwen values that I knew, 
  // to try combine with roman algormism
  let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  // I need of a little bit time, to remember about all, or almost all Roman numebrs
  let roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];

  for (let i = 0; i <= decimal.length; i++) {

    while ((data % decimal[i]) < data) {
        /* 
            This WHILE, took me more than I was expecting,
            because I did a wrong calculation, I was try ( / ), but I should use ( % );
            but here, basically I doing a calc to check if is divider by decimal[i] - that is my array of DECIMALS
        */

      result = [...result, roman[i]]; // -> Incrementing my array with ES6
      data -= decimal[i]; // data = data - decimal[i] -> now I adpting my new data value, to keep calcing
    }

  }
  
  return result;
}

writeInRoman(50);