import Arena from '.';
import Coordinate from '../Coordinate';
import CoordinateX from '../Coordinate/CoordinateX';
import CoordinateY from '../Coordinate/CoordinateY';
import Location from '../Location';

export default class Surface extends Arena {

    constructor(x: number, y: number) {
        super();
        // populate the matrices with locations
        this.createCoordinates<CoordinateX>(x, CoordinateX).forEach( xc => {
            this.createCoordinates<CoordinateY>(y, CoordinateY).forEach( yc => {
                this.matrix.add(new Location([xc, yc]));
            })
        });
        return this;
    }

    private createCoordinates<T extends Coordinate>(
        n: number,
        CoordinateClass: new (id: number) => T
    ) : Set<T> {
        const coordinates: Set<T> = new Set();
        do {
            coordinates.add( new CoordinateClass(n));
        } while ( n-- > 0 );
        return coordinates;
    }
}