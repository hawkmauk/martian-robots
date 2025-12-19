import InstructionSet from './Instruction/InstructionSet';
import Location from './Location';
import Orientation from './Orientation';
import Arena from './Arena';
export default class Robot implements RobotInterface {

    private _orientation: Orientation;
    private _lost: boolean;
    private _location: Location;

    constructor(location: Location, orientation: Orientation) {
        this._location = location;
        this._orientation = orientation;
        this._lost = false;
    }

    consumeInstructions(instructions: InstructionSet): void {
        while (instructions.hasNext()) {
            const instruction = instructions.next();
            instruction.execute(this);
        }
    }

    get location(): Location {
        return this._location;
    }

    set location(location: Location) {
        this._location = location
    }
    
    get orientation(): Orientation {
        return this._orientation;
    }

    set orientation(orientation: Orientation) {
        this._orientation = orientation;
    }

    set lost(lost: boolean) {
        this._lost = lost;
    }
    
    public isLost(): boolean {
        return this._lost;
    }

    toString(): string {
        return `${this.location.toString()} ${this.orientation} ${this.isLost() ? 'LOST' : ''}`.trim();
    }

    public getArena(): Arena {
        return this.location.getArena();
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
    getArena(): Arena;
}