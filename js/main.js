var inpt1 = document.getElementById('inpt1');
var result = document.getElementById('result');
var fee = document.getElementById('fee');
var PERCENT_CONST = 10;

// add event cross browser
function addEvent(elem, event, fn) {
    if (elem.addEventListener) {
        elem.addEventListener(event, fn, false);
    } else {
        elem.attachEvent("on" + event, function() {
            // set the this pointer same as addEventListener when fn is called
            return(fn.call(elem, window.event));
        });
    }
}

function percentage(num) {
	return (num * PERCENT_CONST) / 100;
}

function limitNotation(num){
	return num.toFixed(2);
}

window.onload = function (){
	inpt1.value = '';
	fee.value = '0';
	result.value = '0';

	inpt1.focus();
};

addEvent(inpt1, 'keyup', function (e) {
	var val = e.target.value;
	var percent = percentage(val);

	fee.value = limitNotation(percent);
	result.value = limitNotation(val - percent);
});
