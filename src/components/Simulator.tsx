import React, { useState } from 'react';
import Surface from '../model/Arena/Surface';
import Robot from '../model/Robot';
import CoordinateX from '../model/Coordinate/CoordinateX';
import CoordinateY from '../model/Coordinate/CoordinateY';
import Orientation from '../model/Orientation';
import InstructionSet from '../model/Instruction/InstructionSet';

export default function Simulator( arenaSize: string, robotLocation: string, instructions: string) {

    // create the arena
    const [x,y] = arenaSize.split(' ').map( n => parseInt(n) );
    const [arena, setArena] = useState(new Surface(x,y));

    // create the robot
    const [x1,y1,orientation] = robotLocation.split(' ');
    const location = arena.getLocation(new Set([
        new CoordinateX(parseInt(x1)),
        new CoordinateY(parseInt(y1))
    ]))

    if (!location) {
        throw new Error('Invalid robot location');
    }
    const robot = new Robot(location, new Orientation(orientation));
    arena.addRobot(robot);

    // create the instructionSet
    const instructionSet = new InstructionSet(instructions);
    robot.consumeInstructions(instructionSet);

    return (
        <div>
            <h2>Simulator Component</h2>
        </div>
    )
}