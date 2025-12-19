import Instruction from '.';
import Robot from "../Robot";
export default class TurnRight extends Instruction {
    execute( robot: Robot): void {
        // Implementation for turning the robot right
        robot.orientation.right();
    }
}