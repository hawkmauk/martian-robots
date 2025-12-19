import type Coordinate from '../Coordinate';
import Location from '../Location';
import type { RobotInterface } from '../Robot';
export default abstract class Arena implements ArenaInterface {


    // ensure there is only one Arena
    static arenaInstance: Arena;
    // The set of all locations in the arena
    protected matrix!: Set<Location>;
    private robots!: Set<RobotInterface>;

    constructor() {
        if (!Arena.arenaInstance) {
            Arena.arenaInstance = this;
            this.matrix = new Set<Location>();
            this.robots = new Set<RobotInterface>();
        }
        return Arena.arenaInstance;
    }

    // this will return the first instance that matches all the provided coordinates
    // even if there isn't a complete set of coordinates for a location
    public getLocation(coordinates: Set<Coordinate>): Location | undefined {
        // for each location in the matrix
        for (const location of this.matrix) {
            // check if all coordinates match
            for (const coordinate of coordinates) {
                if (!location.getCoordinate(coordinate.constructor as typeof Coordinate)?.equals(coordinate)) {
                    return;
                }
            }
            return location;
        }
    }

    // Add a robot to the arena
    public addRobot(robot: RobotInterface): void {
        this.robots.add(robot);
    }
}

export interface ArenaInterface {
    addRobot(robot: RobotInterface): void;
    getLocation(coordinates: Set<Coordinate>): Location | undefined;
}