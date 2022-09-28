const output = false;
function find_syllables(word) {
    word = word.toLowerCase();                                     
    if(word.length <= 3) { return 1; }                             
      word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');   
      word = word.replace(/^y/, '');                                 
      return word.match(/[aeiouy]{1,2}/g).length;                    
}


var h1s = document.getElementsByTagName("h1");
for (var i = 0; i < h1s.length; i++) {
    var h1 = h1s[i].innerText.split(' ');

    h1.forEach(myFunction);

    function myFunction(item) {
      if (item === "" || item === "\n") {
      } else {
        if (find_syllables(item) === 5)
          console.log(item)
      }
    }
    //#TODO check if var h1 is a haiku
}

// #TODO add the part above for h2-h6 and p

chrome.storage.sync.get({
  favoriteoutput: 'console',
}, function(items) {
  if(output){
    switch(items.favoriteoutput) {
      case "console":
          console.log(output);
        break;
      case "alert":
        alert(output);
        break;
      case "all":
        console.log(output);
        alert(output);
        break;
      default:
    }
  }
});
