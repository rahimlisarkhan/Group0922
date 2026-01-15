

const timeDisplay = document.getElementById('timeDisplay');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

const StopWatch = {

    startTime: 0,
    timer: null,

    start: function(){

        clearInterval(this.timer);

        this.timer = setInterval(() => {

            this.startTime += 10;
            this.show();
            
        }, 10);

    },

    stop: function(){
        clearInterval(this.timer);
        this.show();
    },

    show:function(){
        timeDisplay.innerHTML = this.generateTimeFormat(this.startTime);
    },

    generateTimeFormat:function(totalMilliseconds){
        const minutes = Math.floor((totalMilliseconds % 3600000) / 60000);
        const seconds = Math.floor((totalMilliseconds % 60000) / 1000);
        const milliseconds = Math.floor((totalMilliseconds % 1000) / 10);

        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');
        const formattedMilliseconds = String(milliseconds).padStart(2, '0');

        return `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
    },

    reset:function(){
        this.startTime = 0;
        this.stop();
      
    }

}


startBtn.addEventListener('click', function(){
    StopWatch.start();
});

stopBtn.addEventListener('click', function(){
    StopWatch.stop();
});

resetBtn.addEventListener('click', function(){
    StopWatch.reset();
    timeDisplay.textContent = "00:00:00";
});