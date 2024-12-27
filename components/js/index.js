
function StopWatch() {
    let startTime, stopTime, running, duration = 0;

    this.start = function() {
        if (running) {
            throw new Error('Stopwatch has already started');
        } else {
            running = true;
            console.log('Stopwatch is running');
            const count = setInterval(() => {
                if (running) {
                    duration++;
                }
            }, 1000)
        }
    }
    this.stop = function() {
        if (!running) {
            throw new Error('Stopwatch is already stopped');
        } else {
            running = false;
            console.log('Stopwatch has stopped running');
        }
    }
    this.reset = function() {
        duration = 0;
        running = false;
        console.log()
    }
    this.duration = function() {
        console.log(duration);
    }
}

const sw = new StopWatch();


