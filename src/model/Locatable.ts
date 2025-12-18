export default abstract class Locatable implements LocatableInterface{

    private location: Location;
    
    constructor(location: Location) {
        this.location = location;
    }

    getLocation(): Location {
        return this.location;
    }
}

export interface LocatableInterface {
    getLocation(): Location;
}