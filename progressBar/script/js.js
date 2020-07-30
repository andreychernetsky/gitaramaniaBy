/*
function userProgress(time) {
  let start = 0;
  let times = Math.round(time /100);
  let progressElement = document.getElementById('user-progress');
  let interval = setInterval(function(){
    if(start > 100) {
      userProgressCallback();
      clearInterval(interval);
    } else {
progressElement.value = start;
    }
    start ++;

  },times)
}
function userProgressCallback() {
 /!* document.querySelector('.hidden-block').classList.remove('.hidden-block');*!/
 fetch('https://andreychernetsky.github.io/newsBlockTo/app/index.html')
 .then(x=>x.text()).then(html=>{
   document.write(html);
  })
}
userProgress(2000);*/
// вариант 2
tween({
  duration:5000,

  onStart(){
    progressElement.value = 0;
  },
  onProgress(persent) {
    progressElement.value = 100*persent
  },
  onEnd() {
    fetch('https://andreychernetsky.github.io/newsBlockTo/app/index.html')
      .then(x=>x.text()).then(html=>{
      document.write(html);
    })
  }
});
function tween(props={}) {
  if (props.onStart) {
    props.onStart()
  }
  const startMoment = Date.now();
  const intervalFlag = setInterval(() => {
    const delta = Date.now() - startMoment;
    const percent = Math.min(1,delta/duration);

    if(props.onProgress) {
      props.onProgress(percent);
    }
    if(percent === 1 ) {
      clearInterval(intervalFlag) ;
      if(props.onEnd) {
        props.onEnd()
      }
    }
      })
}

