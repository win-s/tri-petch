
export function throttle(func: Function, interval: number) {
    // A flag variable to track whether the function is running or not
    let isRunning = false;
    // Return a function that takes arguments
    return function (...args: any[] | void[]): any {
        // If the function is not running
        if (!isRunning) {
            // Set the flag to true
            isRunning = true;
            // Set a timer that will reset the flag after the interval
            setTimeout(() => {
                // Set the flag to false
                isRunning = false;
                func(...args);
            }, interval);
        }
    };
}