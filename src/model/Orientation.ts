export type Orientation = 'N' | 'E' | 'S' | 'W';

export class OrientationFactory {
    static createOrientation(value: string): Orientation {
        switch (value) {
            case 'N':
            case 'E':
            case 'S':
            case 'W':
                return value as Orientation;
            default:
                throw new Error(`Invalid orientation value: ${value}`);
        }
    }
}