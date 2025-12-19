export default class Orientation {
    static VALUES = ['N', 'E', 'S', 'W'];
    value: number;

    constructor(value: string) {
        if (!Orientation.VALUES.includes(value)) {
            throw new Error(`Invalid orientation value: ${value}`);
        }
        this.value = Orientation.VALUES.indexOf(value);
    }

    left(): void {
        this.value = (this.value + Orientation.VALUES.length - 1) % Orientation.VALUES.length; // Turn left (counter-clockwise)
    }

    right(): void {
        this.value = (this.value + 1) % Orientation.VALUES.length; // Turn right (clockwise)
    }

    toString(): string {
        return Orientation.VALUES[this.value];
    }

}

export interface OrientationInterface {
    left(): void;
    right(): void;
    toString(): string;
}