import InstructionSet from './Instruction/InstructionSet';
import Locatable from './Locatable';

export type Orientation = 'N' | 'E' | 'S' | 'W';
export default class Robot extends Locatable implements RobotInterface {

    private orientation: Orientation;

    constructor(location: Location, orientation: Orientation) {
        super(location);
        this.orientation = orientation;
    }

    consumeInstructions(instructions: InstructionSet): void {
        //to be implemented
    }

    getOrientation(): Orientation {
        return this.orientation;
    }
}

export interface RobotInterface {
    consumeInstructions(instructions: InstructionSet): void;
    getOrientation(): Orientation;
    /**
     * Returns a string representation of the robot's current state.
     * @return {string} A string representing the robot's location and orientation.
     * @example
     * const robot = new Robot(new Location([new CoordinateX(1), new CoordinateY(2)]), 'N');
     * console.log(robot.toString()); // Outputs: "1 2 N"
     */
    toString(): string;
}