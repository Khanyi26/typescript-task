//Create an Enum:
//1. Create an enum TrafficLight with values Red, Yellow, and Green.

enum TrafficLight {

    Red = "Red",
    Yellow = "Yellow",
    Green = "Green"
}

//2. Make a robot to change colours everything 10 seconds.

class TrafficLightRobot {
    private currentLight: TrafficLight;

    constructor() {
        this.currentLight = TrafficLight.Red;       
    }

    start() {
        setInterval (() => this.changeLight(), 10000);        
    }
    private changeLight () {
        switch (this.currentLight) {
            case TrafficLight.Red:
                this.currentLight = TrafficLight.Green;                
                break;
                
            case TrafficLight.Yellow:
                this.currentLight = TrafficLight.Red;                
                break;
            case TrafficLight.Green:
                this.currentLight = TrafficLight.Yellow;                
                break;
        }
        console.log(`The traffic light is now ${this.currentLight}`);
    }
}

const robot = new TrafficLightRobot();
robot.start();

