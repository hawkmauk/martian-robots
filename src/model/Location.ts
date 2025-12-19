import Coordinate from './Coordinate';
import Arena from './Arena';
export default class Location {

    // use a map to ensure that only one coordinate of each type is stored
    private coordinates: Map<string, Coordinate>;
    private arena: Arena;

    constructor( coordinates: Coordinate[], arena: Arena ) {
        this.coordinates = new Map<string, Coordinate>();
        this.arena = arena;
        this.addCoordinates( coordinates );
    }
    private addCoordinates(coordinates: Coordinate[]): void {
        for (const coordinate of coordinates) {
            this.addCoordinate(coordinate);
        }
    }

    private addCoordinate(coordinate: Coordinate): void {
        const key = coordinate.constructor.name;
        if (this.coordinates.has(key)) {
            throw new Error(`Coordinate of type ${key} already exists in this location`);
        }
        this.coordinates.set(key, coordinate);
    }

    public getCoordinate(type: typeof Coordinate): Coordinate | undefined {
        return this.coordinates.get(type.name);
    }

    public getArena(): Arena {
        return this.arena;
    }

    public toString(): string {
        const coordsArray = Array.from(this.coordinates.values())
            .sort((a, b) => a.constructor.name.localeCompare(b.constructor.name))
            .map(coord => coord.toString());
        return coordsArray.join(' ');
    }

}

export interface LocationInterface {
    getCoordinate(type: typeof Coordinate): Coordinate | undefined;
    getArena(): Arena;
    toString(): string;
}