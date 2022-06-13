function palindrome(message) {
    // wirte your code here
    var palindromeStr = message.split("").reverse().join("");
    if (palindromeStr == message) return true;
    else return false;
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true