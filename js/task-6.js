function checkForKeywords(message) {
  const str = message.toLowerCase();
  if (str.includes("urgent")) {
    return true;
  } else if (str.includes("important")) {
    return true;
  } else if (str.includes("immediate")) {
    return true;
  } else {
    return false;
  }
}
console.log(checkForKeywords("immediaTe kjfhkdsf"));
