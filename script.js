const textInput = document.getElementById("text-input");
const result = document.getElementById("result");
const checkBtn = document.getElementById("check-Btn");

function reverseString(str1) {
  let newStr = "";
  for (let i = 0; i < str1.length; i++) {
    newStr += str1[str1.length - 1 - i];
  }
  return newStr;
}
function removeNonAlphanumeric(str) {
  return str.replace(/[^a-zA-Z0-9]/g, "");
}
function toLowerCaseAlphanumerics(str) {
  return str.replace(/[A-Z0-9]/g, (char) => char.toLowerCase());
}

function checkMatchingString(str1, str2) {
  let isMatch = false;
  if (str1.length !== str2.length) {
    return isMatch;
  }

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      return isMatch;
    }
  }
  return true;
}
function checkIsPalindrome(str) {
  let cleanStr = toLowerCaseAlphanumerics(removeNonAlphanumeric(str));

  let reverseStr = reverseString(cleanStr);

  return checkMatchingString(cleanStr, reverseStr);
}

function finalResult(str) {
  if (!str) {
    // Check if the input is empty
    alert("Please input a value");
    return;
  }

  if (checkIsPalindrome(str)) {
    result.innerText = `${str} is a palindrome`;
    return `${str} is a palindrome`;
  } else {
    result.innerText = `${str} is not a palindrome`;
    return `${str} is not a palindrome`;
  }
}

checkBtn.addEventListener("click", () => finalResult(textInput.value));
