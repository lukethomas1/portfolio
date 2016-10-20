$(document).ready(function() {
    var db = firebase.database().ref("code");
    db.once('value', loadPicture);
});


function loadPicture(snapshot) {
    var code = getCode();

    if(snapshot.hasChild(code.toString())) {
        var url = snapshot.child(code).val();
        $("#userimg").attr("src", url);
        $("#imgsrc").attr("href", url);
        $("#imgsrc").attr("download", "");
    }
}


// Gets the query variable and parses it to return an integer code
function getCode() {
    // Get the code from the query
    var path = window.location.search;
    // Cut out the '?'
    path = path.substring(1);
    var number = Number(path);
    return number;
}