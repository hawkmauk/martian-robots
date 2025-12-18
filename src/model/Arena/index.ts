import Location from '../Location';
export default abstract class Arena implements ArenaInterface {

    // ensure there is only one Arena
    static arenaInstance: Arena;
    // The set of all locations in the arena
    protected matrix!: Set<Location>;

    constructor() {
        if (!Arena.arenaInstance) {
            Arena.arenaInstance = this;
            this.matrix = new Set<Location>();
        }
        return Arena.arenaInstance;
    }

    // Check if a given location is within the bounds of the arena
    public isWithinBounds(location: Location): boolean {
        return this.matrix.has(location);
    }
}

export interface ArenaInterface {
    isWithinBounds(location: Location): boolean;
}