import Location from './Location';
export default abstract class Locatable{

    private _location: Location;
    
    constructor(location: Location) {
        this._location = location;
    }

    get location(): Location {
        return this._location;
    }
}