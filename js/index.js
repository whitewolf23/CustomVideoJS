
/* window.onload = function(){} 함수는 
웹브라우저의 모든 구성요소에 대한 로드가 끝났을 때 브라우저에 의해서 호출되는 함수로,
해당 부분에 넣으면 HTML을 모두 로드한 뒤에 함수를 호출합니다. */

// window.onload = () => {
    var hw = document.getElementById('hw');
    hw.addEventListener('click', function(event){
        alert('Hello world', event);
    })
// }

// window.onload = () => {
//     var hw = document.getElementById('hw');
//     hw.addEventListener('click', function(event){
//         alert('Hello world', event);
//     })
// }