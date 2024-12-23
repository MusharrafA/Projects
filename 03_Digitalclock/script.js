const clock = document.getElementById('clock')
//or we use document.queryselector('#clock')
let date = new Date()
console.log(date.toLocaleTimeString());




setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();

}, 1000)  //this 1000 represent miliseconds i.e 1000 means 1 second if 2000 then the clock goes 2 per second