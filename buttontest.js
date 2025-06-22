var btncontainer = document.getElementById("btncontainer");
var btns = document.getElementsByClassName("btn");

function showrecs(tag) {
    var x = document.getElementsByClassName("rec");
    for(var i=0; i<x.length; i++) { 
    x[i].style.display='none';
    }
    document.getElementById(tag).style.display='block';

    for (var i = 0; i < btns.length; i++) {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        var next = document.getElementById("btn-" + tag);
        next.className += " active";
    }
}

function finalbutton(tag) {
    var x = document.getElementsByClassName("rec");
    for(var i=0; i<x.length; i++) { 
    x[i].style.display='block';
    }
    document.getElementById(tag).style.display='block';

    for (var i = 0; i < btns.length; i++) {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        var next = document.getElementById("btn-" + tag);
       
    }
}

function addNew() {

            // Get the main Div in which all the other divs will be added
            var mainContainer = document.getElementById('mainContainer');

            // Create a new div for holding text and button input elements
            var newDiv = document.createElement('div');

            // Create a new text input
            var newDropdown = document.createElement('select');

            newDropdownOption = document.createElement("option");
            newDropdownOption.value = "value1";
            newDropdownOption.text = "option 1";

            newDropdown.add(newDropdownOption);

            // Create buttons for creating and removing inputs
            var newAddButton = document.createElement('input');
            newAddButton.type = "button";
            newAddButton.value = " + ";

            var newDelButton = document.createElement('input');
            newDelButton.type = "button";
            newDelButton.value = " - ";

            // Append new text input to the newDiv
            newDiv.appendChild(newDropdown);

            // Append new button inputs to the newDiv
            newDiv.appendChild(newAddButton);
            newDiv.appendChild(newDelButton);

            // Append newDiv input to the mainContainer div
            mainContainer.appendChild(newDiv);

            // Add a handler to button for deleting the newDiv from the mainContainer
            newAddButton.onclick = addNew;

            newDelButton.onclick = function() {
                    mainContainer.removeChild(newDiv);
            };
        }