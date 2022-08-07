// PROJECTNEW1

document.getElementById('nextbutton').addEventListener('click',function () {
    var PIN1 = parseInt(document.getElementById('pin1').value);
    var PIN2 = parseInt(document.getElementById('pin2').value);

    if (('sessionStorage' in window) && window['sessionStorage'] !== null){
        var newName = document.getElementById('newname').value;
            sessionStorage.setItem('user',newName);
            sessionStorage.setItem('PIN',PIN2);
    };

    if (PIN1 == PIN2 && newName !== "" ) {
        alert('Account Created Successfully!');
        location.href = 'welcome.html';
    } else {
        alert('Account Creation Unsuccessful!');
    }

});

//  WELCOME
function naMe() {
    document.getElementById('nam').innerHTML = sessionStorage.getItem('user');    
}






// ---------------------------------------------------------------------------------------------------------------
//CANCEL
function cancelPrompt() {

    

    var canCel = prompt("Do you want to make another transaction? \n 1.yes \n 2.no");

    if (canCel == '1' || canCel == 'yes') {
        location.href = 'pinold.html';
        } else if( canCel == '2' || canCel == 'no'){ 
        location.href = 'receipt.html';
        } else {
        alert('invalid input');
    };
};

function NAME() {
    var beyOnce = document.getElementById('username');
    var jayZ = document.getElementById('pin');

    if (beyOnce.value == "" || jayZ.value == "") {
        alert('Please provide your details below!');
    } else if ( beyOnce.value !== sessionStorage.getItem('user') || jayZ.value !== sessionStorage.getItem('PIN')) {
        alert('Invalid Username or Password');
    }
    else if (beyOnce.value == sessionStorage.getItem('user') && jayZ.value == sessionStorage.getItem('PIN')) {
        location.href = 'welcome.html';
    };
};

function tranSaction() {

    if (('sessionStorage') in window && window['sessionStorage'] !==null) {
        var nix= document.getElementById('input').value;
        sessionStorage.setItem('amount',nix); 
     };

    alert('KINDLY, WAIT WHILE YOUR TRANSACTION IS BEING PROCESSED!');
    alert("TRANSACTION SUCCESSFUL!");
    cancelPrompt();
};

// DEPOSIT
function depoSit() {
    if (('sessionStorage') in window && window['sessionStorage'] !==null) {
        var dePosit = parseInt(document.querySelector('#deposit').value);
        sessionStorage.setItem('deposit',dePosit);
    };
};

// RECEIPT
function reCeiptname() {
    document.querySelector('#rename').innerHTML = sessionStorage.getItem('user');

    document.querySelector('#acn').innerHTML = Math.floor(100000 + Math.random() * 900000);
    
    var daTe = new Date();
    document.querySelector('#edate').innerHTML = daTe.toDateString();

    document.querySelector('#ref').innerHTML =  Math.floor(1000000000 + Math.random() * 9000000000);

    document.querySelector('#tdate').innerHTML = new Date();

    var initialBalance = document.querySelector('#ibal').innerHTML = sessionStorage.getItem('deposit');

    var amoUnt = document.querySelector('#amnt').innerHTML = sessionStorage.getItem('amount');

    document.querySelector('#cbal').innerHTML = initialBalance - amoUnt ;
};

// AMOUNT
function amOunta(){
    document.getElementById('input').value = document.getElementById('a').innerHTML;
};
function amOuntb(){
    document.getElementById('input').value = document.getElementById('b').innerHTML;
};
function amOuntc(){
    document.getElementById('input').value = document.getElementById('c').innerHTML;
};
function amOuntd(){
    document.getElementById('input').value = document.getElementById('d').innerHTML;
};
function amOunte(){
    document.getElementById('input').value = document.getElementById('e').innerHTML;
};
function amOuntf(){
    document.getElementById('input').value = document.getElementById('f').innerHTML;
};
function amOuntg(){
    document.getElementById('input').value = document.getElementById('g').innerHTML;
};
function amOunth(){
    document.getElementById('input').value = document.getElementById('h').innerHTML;
};

