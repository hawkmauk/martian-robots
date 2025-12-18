import type Instruction from ".";

export default class InstructionSet {

    private instructions: Instruction[];

    constructor( instructionString: string) {
        this.instructions = [];
    }

    hasNextInstruction() : boolean {
        return this.instructions.length > 0;
    }

    getNextInstruction() : Instruction {
        if (!this.hasNextInstruction()) {
            throw new Error("No more instructions available");
        }
        return this.instructions.pop()!;
    }
}