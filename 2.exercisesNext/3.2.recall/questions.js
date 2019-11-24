let selectElementsStartingWithA = (array) => {
    return array.filter(word => word[0] === "a");
}

let selectElementsStartingWithVowel = (array) => {
    return array.filter(word => word[0].match(/[aeiouy]/i));
}

let removeNullElements = (array) => {
    return array.filter(word => word !== null);
}

let removeNullAndFalseElements = (array) => {
    return array.filter(word => word !== null && word !== false);
}

let reverseWordsInArray = (array) => {
    const reverseArr = array.map(element => element.split("").reverse().join(""));
      return reverseArr;
    }

let everyPossiblePair = (array) => {
    array.sort();
    let everyPossible = [];
    for (i = 0; i < array.length - 1; i++) {
      for (j = i + 1; j < array.length; j++) {
        everyPossible.push([array[i], array[j]]);
      }
    }
    return everyPossible;
  }

let allElementsExceptFirstThree = (array) => {
    return array.slice(3);
}

let addElementToBeginning = (array, element) => {
    array.unshift(element);
    return array;
}

let sortByLastLetter = (array) => {
    return array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

let getFirstHalf = (string) => {
    return string.substring(0, Math.round(string.length / 2));

}

let makeNegative = (number) => {
    return -Math.abs(number);
}

let numberOfPalindromes = (array) => {
    const palindromes = array.filter(element => element ===element.split("").reverse().join(""));
    return palindromes.length;
    
}

let shortestWord = (array) => {
    const shortestWord = array.sort((a, b) => a.length - b.length);
    return shortestWord[0];
}

let longestWord = (array) => {
    const longestWord = array.sort((a, b) => a.length - b.length);
    return longestWord[longestWord.length - 1];
}

let sumNumbers = (array) => {
    return array.reduce((acc,curr) => (acc += curr));
}

let repeatElements = (array) => {
    const repeatElem = array.concat(array);
    return repeatElem;
}

let stringToNumber = (string) => {
    return parseInt(string);
}

let calculateAverage = (array) => {
    const sum = array.reduce((acc, curr) => (acc += curr));
    const average = sum / array.length;
    return average;
}

let getElementsUntilGreaterThanFive = (array) => {
    let myArray = [];
    while (true) {
    let shifted = array.shift();
    if (shifted >= 6) {
      return myArray;
    }
    myArray.push(shifted);
  }
}

let convertArrayToObject = (array) => {
    let key = [];
    let value = [];
    let result = {};

    for (let index = 0; index < array.length; index += 2) {
      key.push(array[index]);
    }
    for (let index = 1; index < array.length; index += 2) {
      value.push(array[index]);
    }

    key.forEach((key, i) => (result[key] = value[i]));
    return result;
}

let getAllLetters = (array) => {
    let elem = array.join("");
    let elem2 = elem.split("");
    let getLetters = [...new Set(elem2.sort())];
    return getLetters;
}

let swapKeysAndValues = (object) => {
    let values = Object.keys(object);
    let keys = Object.values(object);
    let result = {};
    keys.forEach((key, i) => (result[key] = values[i]));
    return result;
}

let sumKeysAndValues = (object) => {
    let values = Object.values(object);
    let keys = Object.keys(object).map(Number);
    let sumVal = values.reduce((acc,val) => (acc += val));
    let sumKeys = keys.reduce((acc, key) => (acc += key));
    return sumVal + sumKeys;
}

let removeCapitals = (string) => {
    return 'Write your method here';
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    return date.toLocaleDateString("fr-FR");
}

let getDomainName = (string) => {
    let domain = string.replace(/.*@/, "");
    let getDomain = domain.replace(".com","")

    return getDomain;
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    return 'Write your method here';
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
    const fact = n => {
        if (n === 0) {
          return 1;
        }
        return n * factorial(n - 1);
      };
      return fact(number);
    
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return 'Write your method here';
}

let letterPosition = (array) => {
    const letterPos = array.map(el => el.toLowerCase().charCodeAt() - 96);
    return letterPos;
}
