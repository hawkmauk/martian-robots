import Coordinate from './Coordinate';
export default class Location {

    // use a map to ensure that only one coordinate of each type is stored
    private coordinates: Map<string, Coordinate>;
    constructor( coordinates: Coordinate[] ) {
        this.coordinates = new Map<string, Coordinate>();
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
}