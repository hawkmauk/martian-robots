export default class Coordinate {

    static MAX = 50;
    static MIN = 0;
    private id: number;
    
    constructor(id: number) {
        if (id < Coordinate.MIN || id > Coordinate.MAX) {
            throw new Error(`Coordinate id must be between ${Coordinate.MIN} and ${Coordinate.MAX}`);
        }
        this.id = id;
    }

    equals(other: Coordinate): boolean {
        return this.id === other.id;
    }
}