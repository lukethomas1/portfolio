$(document).ready(function() {
    // Keyup handler
    $(document).on('keydown', function(event) {
        if(event.keyCode == 13) {
            event.preventDefault();
            submit();
        }
    });

    // Button click handler
    $("#btn-submit").click(function() {
        submit();
    });
});


// Goes to corresponding page or displays error message
function submit() {
    var secretNumber = $("#code-text").val();

    // If there was no input
    if(secretNumber === undefined) {
        showError();
    }

    else {
        inDatabase = isInFirebase(secretNumber);

        alert(inDatabase)
        if(inDatabase) {
            // Move to image page, add a query variable containing the code value
            window.location.href = "./start.html?" + secretNumber;
        }

        else {
            showError();
        }
    }
}


// Checks if the number provided is in Firebase
function isInFirebase(secretNumber) {
    var db = firebase.database().ref("code");
    inDatabase = false;

    // Check firebase to see if that code is in the database
    if(db.once('value', function(snapshot) {
        if(snapshot.hasChild(secretNumber.toString())) {
            return true;
        }
    })) {
        return true;
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