import InstructionSet from './Instruction/InstructionSet';
import Locatable from './Locatable';
import Location from './Location';
import type Arena from './Arena';
import type { Orientation } from './Orientation';
export default class Robot extends Locatable implements RobotInterface {

    private orientation: Orientation;
    private lost: boolean;

    constructor(arena: Arena, location: Location, orientation: Orientation) {
        super(location);
        this.orientation = orientation;
        this.lost = false;
    }

    consumeInstructions(instructions: InstructionSet): void {
        //to be implemented
    }

    public getOrientation(): Orientation {
        return this.orientation;
    }

    public setOrientation(orientation: Orientation): void {
        this.orientation = orientation;
    }

    public setLost(lost: boolean): void {
        this.lost = lost;
    }
    
    public isLost(): boolean {
        return this.lost;
    }

    toString(): string {
        const coords = this.location;
        // Assuming Location has a method to get X and Y coordinates
        const x = (coords as any).getCoordinateX().getValue(); // Replace with actual method to get X
        const y = (coords as any).getCoordinateY().getValue(); // Replace with actual method to get Y
        return `${this.location.toString()} ${this.orientation} ${this.isLost() ? 'LOST' : ''}`.trim();
    }
}

export interface RobotInterface {
    consumeInstructions(instructions: InstructionSet): void;
    /**
     * Returns a string representation of the robot's current state.
     * @return {string} A string representing the robot's location and orientation.
     * @example
     * const robot = new Robot(new Location([new CoordinateX(1), new CoordinateY(2)]), 'N');
     * console.log(robot.toString()); // Outputs: "1 2 N"
     */
    toString(): string;
}