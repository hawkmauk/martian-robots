import InstructionSet from "./Instruction/InstructionSet";

export default class Earth {

    constructor() {
    }

    public provideInstructions(s: string): InstructionSet {
        return new InstructionSet(s);
    }
}

export interface EarthInterface {
    provideInstructions(s: string): InstructionSet;
}