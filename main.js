const output = false;
function find_syllables(word) {
    word = word.toLowerCase();                                     
    if(word.length <= 3) { return 1; }                             
      word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');   
      word = word.replace(/^y/, '');                                 
      return word.match(/[aeiouy]{1,2}/g).length;                    
}
function

var h1s = document.getElementsByTagName("h1");
for (var i = 0; i < h1s.length; i++) {
    var h1 = h1s[i];
    console.log(h1.innerHTML)
}
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
