
function save_options() {
    var output = document.getElementById('output').value;
    chrome.storage.sync.set({
      favoriteoutput: output,
    }, function() {
      var status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
  }
  
  function restore_options() {
    chrome.storage.sync.get({
      favoriteoutput: 'console',
    }, function(items) {
      document.getElementById('output').value = items.favoriteoutput;
    });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click', save_options);