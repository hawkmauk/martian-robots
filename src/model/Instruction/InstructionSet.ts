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