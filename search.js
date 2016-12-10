// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString;
}

function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}
function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyDXyjnqQy-W3bb_IFqo6uSXjGGSO8XVWf0');

    search();
}

function search() {
    
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q:'coding for enterprenuers'
        
    });
    request.execute(onSearchResponse);
}

function onSearchResponse(response) {
    showResponse(response);
}
