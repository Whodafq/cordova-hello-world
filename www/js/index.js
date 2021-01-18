document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() { 
    // Cordova is now initialized. Have fun!

    document.getElementById('message').innerHTML = 'welcome to cross platform app development';
}

document.addEventListener('pause',onPause, false);
function onPause(){
        alert('onPause function is called');
}

document.addEventListener('resume',onResume, false);
function onResume(){
        alert('onResume() function is called');
    }

    document.addEventListener('backbutton',onPressingBackButton, false);
function onPressingBackButton(e){
    e.preventDefault
        alert('onPressingBackButton() function is called');
}

document.addEventListener('menubutton',onMenuButton, false);
function onMenuButton(){
        alert('onMenubutton() function is called');
}

document.addEventListener('searchbutton',onSearchButton, false);
function onSearchButton(){
        alert('onSearchButton() function is called');
}