import InstructionSet from "./Instruction/InstructionSet";

export default class Earth {

    constructor() {
    }

}

export interface EarthInterface {
    provideInstructions(): InstructionSet;
}