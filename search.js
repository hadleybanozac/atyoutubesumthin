// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
  $('#search-button2').attr('disabled', false);
}

function listCreate(res, selectId, plyr){
  var videoSelect = document.getElementById(selectId);
  for (var i = 0; i < res.items.length; i++) {
    var id = res.items[i].id.videoId;
    var name = res.items[i].snippet.title;
    var option = document.createElement('option')
    option.value = id;
    option.textContent = name;
    option.onclick = function(){
      plyr.loadVideoById(this.value);
    }
    videoSelect.appendChild(option);
  }
}

function listCreate2(res, selectId, plyr2){
  var songSelect = document.getElementById(selectId);
  for (var i = 0; i < res.items.length; i++) {
    var id = res.items[i].id.videoId;
    var name = res.items[i].snippet.title;
    var option = document.createElement('option')
    option.value = id;
    option.textContent = name;
    option.onclick = function(){
      plyr2.loadVideoById(this.value);
    }
    songSelect.appendChild(option);
  }
}

// Search for a specified string.
function searchShow() {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

  request.execute(function(response) {
    // var str = JSON.stringify(response.result);
    // $('#search-container').html('<pre>' + str + '</pre>');
    var firstId = response.items[0].id.videoId;
    player.loadVideoById(firstId);
    listCreate(response,'videoSelect', player);
  });
}


function searchSong() {
  var q = $('#query2').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });


  request.execute(function(response) {
    // var str = JSON.stringify(response.result);
    // $('#search-container').html('<pre>' + str + '</pre>');
    var firstId = response.items[0].id.videoId;
    player2.loadVideoById(firstId);
    listCreate(response,'songSelect', player);
  });
}


