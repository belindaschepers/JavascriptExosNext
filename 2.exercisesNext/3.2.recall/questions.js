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
    };

let everyPossiblePair = (array) => {
    array.sort();
    let everyPossible = [];
    for (i = 0; i < array.length - 1; i++) {
      for (j = i + 1; j < array.length; j++) {
        everyPossible.push([array[i], array[j]]);
      }
    }
    return everyPossible;
  };

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
    return 'Write your method here';
}

let stringToNumber = (string) => {
    return 'Write your method here';
}

let calculateAverage = (array) => {
    return 'Write your method here';
}

let getElementsUntilGreaterThanFive = (array) => {
    return 'Write your method here';
}

let convertArrayToObject = (array) => {
    return 'Write your method here';
}

let getAllLetters = (array) => {
    return 'Write your method here';
}

let swapKeysAndValues = (object) => {
    return 'Write your method here';
}

let sumKeysAndValues = (object) => {
    return 'Write your method here';
}

let removeCapitals = (string) => {
    return 'Write your method here';
}

let roundUp = (number) => {
    return 'Write your method here';
}

let formatDateNicely = (date) => {
    return 'Write your method here';
}

let getDomainName = (string) => {
    return 'Write your method here';
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    return 'Write your method here';
}

let squareRoot = (number) => {
    return 'Write your method here';
}

let factorial = (number) => {
    return 'Write your method here';
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return 'Write your method here';
}

let letterPosition = (array) => {
    return 'Write your method here';
}
