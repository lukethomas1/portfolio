/*
 * Helpful sources
 *
 * http://callbackhell.com/
 *
 * http://stackoverflow.com/questions/11636731/
 * handling-asynchronous-calls-firebase-in-functions
 */

$(document).ready(function() {
    // Keyup handler
    $(document).on('keydown', function(event) {
        // If Enter key was pressed
        if(event.keyCode == 13) {
            event.preventDefault();
            submit();
        }
    });

    // Button click handler
    $("#btn-submit").click(submit);
});


// Goes to corresponding page or displays error message
function submit() {
    var secretNumber = $("#code-text").val();

    // If there was no input
    if(secretNumber === undefined) {
        showError();
    }

    else {
        checkFirebase(secretNumber);
    }
}


function checkFirebase(secretNumber) {
    var db = firebase.database().ref("code");

    // Check firebase to see if that code is in the database
    db.once('value', function(snapshot) {
        if(snapshot.hasChild(secretNumber.toString())) {
            // Move to image page, add a query variable containing the code value
            window.location.href = "./start.html?" + secretNumber;
        }

        else {
            showError();
        }
    });
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