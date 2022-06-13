function countWords(message) {
    return message.split(/[^a-zA-Z]+/).filter(word => word != "").length;
}
countWords('Good morning, I love JavaScript.'); // should return 5