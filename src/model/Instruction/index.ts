import Robot from "../Robot";
export default abstract class Instruction {
    abstract call( robot: Robot): void;
}