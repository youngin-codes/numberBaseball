var body = document.body;

var form = document.createElement('form');
document.body.append(form);

var input = document.createElement('input');
input.style.borderRadius = '3px';
input.style.height = '25px';
input.maxLength = 4;
form.append(input);

var button = document.createElement('button');
button.textContent = "정답 제출";
button.style.marginLeft = '10px';
button.style.borderRadius = '3px';
button.style.height = '30px';
form.append(button);

var hint = document.createElement('div');
hint.style.marginTop = '10px';
document.body.append(hint);


var numList;
var keyList;

function keyMaker () {
    numList = [1,2,3,4,5,6,7,8,9];
    keyList = [];
    for (var i=0; i<4; i++) {
        var numAdd = numList.splice(Math.floor(Math.random()*9)-i, 1);
        keyList.push(numAdd[0]);
    }

    return keyList;
}

var keyList = keyMaker();
console.log(keyList);

form.addEventListener('submit', function callback(e) {
    e.preventDefault();
    
    if (input.value === keyList.join('')) { // 맞혔을 때
        hint.textContent = input.value + " 홈런!";
        input.value = '';
        input.focus();
        keyList = keyMaker();
        console.log(keyList);
    } else { //틀렸을 때
        var strike = 0;
        var ball = 0;

        for (var i=0; i<4; i++) {
            if (input.value.charAt(i) === String(keyList[i])) {
                strike++;
            }
            else if (keyList.indexOf(Number(input.value.charAt(i))) > -1) {
                ball++;
            }
        }
        hint.innerHTML += input.value + ":  " + strike + "스트라이크 " + ball + "볼" + '<br/>';
        input.value = '';
        input.focus();
    }
} )
