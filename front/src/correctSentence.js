/*
For the input of your function, you will be given one sentence.
You have to return a corrected version,
that starts with a capital letter and ends with a period (dot).

Example:

input (string): "hey, friend"
output (string): "Hey, friend."

Updated first 'h' to 'H', added '.'.

More examples:

correctSentence("greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends.") == "Greetings, friends."
 */

export function correctSentence(text) {
  // your solution goes here

  let correctedText = text;

  if(correctedText.charAt(0) == correctedText.charAt(0).toLowerCase()){
  	correctedText = correctedText.charAt(0).toUpperCase() + correctedText.slice(1);
  }

  if(correctedText.charAt(correctedText.length - 1) != "."){
  	correctedText = correctedText + ".";
  }
  
  return correctedText;
}
