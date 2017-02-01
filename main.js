var forEach = function(arr, func){
    for(var i = 0 ; i < arr.length; i++){
        func(arr[i], i, arr)
    }
}

document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment')
  var strNum = answerPTagWithValue.textContent;
  var final = parseInt(strNum) * 2;
  answerPTagWithValue.innerHTML = final;
})

document.querySelector("#color-circle button").addEventListener('click',function(){
  // // TASK #3
  var whiteToBlack = document.querySelector('#circle-bw');
    var styleOriginal = window.getComputedStyle(whiteToBlack);
    var styleColor = styleOriginal.backgroundColor;
      if(styleColor === 'rgb(255, 255, 255)'){
        whiteToBlack.style.backgroundColor = 'rgb(0, 0, 0)';
      }
      else if(styleColor === 'rgb(0, 0, 0)'){
        whiteToBlack.style.backgroundColor = 'rgb(255, 255, 255)';
      }
})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  var largeRed = document.querySelector('.circle-red');
  var originalSize = window.getComputedStyle(largeRed);
  var width = parseInt(originalSize.width);
  var height = parseInt(originalSize.height);

  if(width < 320){
  largeRed.style.width = width * 2 + 'px';
  largeRed.style.height = height * 2 + 'px';
  }

  else if (width >= 320){
    largeRed.style.width =  '40px';
    largeRed.style.height = '40px';
  }

})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
var mainContent = document.querySelector('#user-list');
var removeInactive = document.querySelectorAll('#user-list li');

  forEach(removeInactive, function(listItem, index, theArray){
      if(listItem.className !== 'active'){
        mainContent.removeChild(listItem)
      }
});
})

document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
  var reverseSquares = document.querySelectorAll('.answer-box span');
  var newSquares = document.querySelector('.new-squares')
  var newArr = [];
  var newStr = '';
  forEach(reverseSquares, function(list, ind, array){
    newArr.push(list);
  });
  var reversedArray = newArr.reverse();

  forEach(reversedArray, function(list, ind, array){
    newStr += list.outerHTML;
  });

    newSquares.innerHTML = newStr;
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
  var pigsEl = document.querySelectorAll('#tasks li');
  var pigsFinal = document.querySelector('#tasks');
  var lastArr = [];
  var newStr = '';
  var finalStr = '';

  forEach(pigsEl, function(list, ind, arr){
    newStr = list.innerHTML;
    var secondArr = newStr.split('');
    var reverse = secondArr.reverse();
    var finalArr = reverse.join('');
    lastArr.push(finalArr);
  });

  forEach(lastArr, function(lastArrEl, lastIndex, lastArray){
    finalStr += '<li>' + lastArrEl + '</li>';
   });

   pigsFinal.innerHTML = finalStr;
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
   var cityImage = document.querySelector('#city-img');
})
