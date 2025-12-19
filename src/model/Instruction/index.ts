import Robot from "../Robot";
export default abstract class Instruction {
    abstract execute(robot: Robot): void;
}