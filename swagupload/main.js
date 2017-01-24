/*
Author: Luke Thomas
Date: 10/19/16

Description: Attaches click and keydown listeners in order to submit/verify
secret code and navigate to the image page.
*/

// Attaches event listeners when the page is loaded
$(document).ready(function() {
    $(document).on('keydown', function(event) {
        // If Enter key was pressed
        if(event.keyCode == 13) {
            event.preventDefault();
            submit();
        }
    });

    $("#btn-submit").click(submit);
});


// Goes to corresponding page or displays error message
function submit() {
    var secretNumber = $("#code-text").val();

    if(secretNumber === undefined) {
        showError();
    }
    else {
        checkFirebase(secretNumber);
    }
}


// Grabs the data from Firebase and sends it off to be handled
function checkFirebase(secretNumber) {
    var db = firebase.database().ref("code");
    // Check firebase to see if that code is in the database
    db.once('value', handleSnapshot);
}


// Handles the data taken from Firebase
function handleSnapshot(snapshot) {
    var secretNumber = $("#code-text").val();

    if(snapshot.hasChild(secretNumber.toString())) {
        // Move to image page, add a query variable containing the code value
        window.location.href = "./start.html?" + secretNumber;
    }
    else {
        showError();
    }
}


// Displays the noty error message
function showError() {
    var errorNoty = noty({
        animation: {
            open: 'animated slideInDown',
            close: 'animated slideOutUp'
        },
        closeWith: ['click', 'hover'],
        dismissQueue: false,
        killer: true,
        text: 'Invalid Secret Code',
        type: 'error'
    });
}