import TurnLeft from '../Instruction/TurnLeft';
import TurnRight from '../Instruction/TurnRight';
import Forward from '../Instruction/Forward';
import Instruction from '.';

export default class InstructionFactory {

    static createInstruction(instructionChar: string): Instruction {
        const validInstructions = ['L', 'R', 'F'];
        
        if (!validInstructions.includes(instructionChar)) {
            throw new Error(`Invalid instruction character: ${instructionChar}`);
        }

        switch (instructionChar) {
            case 'L':
                return new TurnLeft();
            case 'R':
                return new TurnRight();
            case 'F':
                return new Forward();
            default:
                throw new Error(`Unhandled instruction character: ${instructionChar}`);
        }
    }
}