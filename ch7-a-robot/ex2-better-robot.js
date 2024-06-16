// Can you write a robot that finishes the delivery task faster than goalOrientedRobot? If you observe that robot’s behavior, what obviously stupid things does it do? How could those be improved?
// If you solved the previous exercise, you might want to use your compareRobots function to verify whether you improved the robot.

// Hint: The main limitation of goalOrientedRobot is that it considers only one parcel at a time. It will often walk back and forth across the village because the parcel it happens to be looking at happens to be at the other side of the map, even if there are others much closer.
// Hint: One possible solution would be to compute routes for all packages and then take the shortest one. Even better results can be obtained, if there are multiple shortest routes, by preferring the ones that go to pick up a package instead of delivering a package.

function getShortestRoute(roadGraph, place, parcels) {
    let pickups = parcels
        .filter((p) => p.place != place)
        .map((p) => findRoute(roadGraph, place, p.place));

    let shortestPickup;
    if (pickups.length > 0) {
        shortestPickup = pickups.reduce((min, current) => (current.length < min.length ? current : min), pickups[0]);
    }

    let dropoffs = parcels
        .filter((p) => p.address != place)
        .map((p) => findRoute(roadGraph, place, p.address));
    let shortestDropoff;
    if (dropoffs.length > 0) {
        shortestDropoff = dropoffs.reduce((min, current) => (current.length < min.length ? current : min), dropoffs[0]);
    }
    if (shortestPickup && !shortestDropoff) {
        return shortestPickup;
    }
    if (shortestDropoff && !shortestPickup) {
        return shortestDropoff;
    }
    if (!shortestDropoff && !shortestPickup) {
        throw new Error("WAT. Couldn't find a pickup or dropoff!");
    }
    return shortestPickup.length <= shortestDropoff.length ? shortestPickup : shortestDropoff;
}

function betterRobot({ place, parcels }, route) {
    console.log(`Current route: ${route}`);
    if (route.length == 0) {
        console.log(`Reached destination, getting next route: ${route}`);
        route = getShortestRoute(roadGraph, place, parcels);
        console.log(`Found route ${route}`);
    }
    return { direction: route[0], memory: route.slice(1) };
}

runRobotAnimation(VillageState.random(),
                  betterRobot, []);