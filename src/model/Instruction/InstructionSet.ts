import type Instruction from ".";
import InstructionFactory from "./InstructionFactory";

export default class InstructionSet {

    static readonly MAX_INSTRUCTIONS = 100;
    private instructions: Instruction[];

    constructor( instructionString: string) {
        if (instructionString.length > InstructionSet.MAX_INSTRUCTIONS) {
            throw new Error(`Instruction set cannot exceed ${InstructionSet.MAX_INSTRUCTIONS} instructions.`);
        }

        this.instructions = instructionString.split('').reverse().map(char => {
            return InstructionFactory.createInstruction(char);
        });
    }

    hasNext() : boolean {
        return this.instructions.length > 0;
    }

    next() : Instruction {
        if (!this.hasNext()) {
            throw new Error("No more instructions available");
        }
        return this.instructions.pop()!;
    }
}