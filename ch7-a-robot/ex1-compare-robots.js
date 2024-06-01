// It’s hard to objectively compare robots by just letting them solve a few scenarios. Maybe one robot just happened to get easier tasks or the kind of tasks that it is good at, whereas the other didn’t.
// Write a function compareRobots that takes two robots (and their starting memory). It should generate 100 tasks and let each of the robots solve each of these tasks. When done, it should output the average number of steps each robot took per task.
// For the sake of fairness, make sure you give each task to both robots, rather than generating different tasks per robot.
// Can't run this in the repo, have to use library functions defined in https://eloquentjavascript.net/07_robot.html

function countRobotTurns(task, robot, memory) {
    let turn;
    for (turn = 0; task.parcels.length != 0; turn++) {
      let action = robot(task, memory);
      task = task.move(action.direction);
      memory = action.memory;
    }
    return turn;
  }

function compareRobots(robot1, memory1, robot2, memory2) {
    const numTasks = 100;
    let randomTasks = [];
    let robot1TotalNumTurns = 0;
    let robot2TotalNumTurns = 0;

    for (let taskNum = 0; taskNum < numTasks; taskNum++) {
        randomTasks.push(VillageState.random());
    }

    for(const dTask of randomTasks) {
        robot1TotalNumTurns += countRobotTurns(dTask, robot1, memory1);
        robot2TotalNumTurns += countRobotTurns(dTask, robot2, memory2);
    }
    console.log(`Robot 1 average number of turns per task: ${robot1TotalNumTurns / numTasks}`);
    console.log(`Robot 2 average number of turns per task: ${robot2TotalNumTurns / numTasks}`);
}

compareRobots(routeRobot, [], goalOrientedRobot, []);