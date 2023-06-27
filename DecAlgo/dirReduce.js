// write a solution in javascript:
// Background
// We are given directions to go from one point to another.
// The directions are "NORTH", "SOUTH", "WEST", "EAST".
// Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.
// Going one direction and coming back the opposite direction is a wasted effort,
// so let's concise these directions to go the shortest route.

// For example, given the following directions:

// plan = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
// You can immediately see that going "NORTH" and then "SOUTH" is not
// reasonable, better stay to the same place!
// So the task is to reduce a simplified version of the plan.
// A better plan in this case is simply:

// plan = ["WEST"]
// Other examples:
// In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH"
// is going north and coming back right away.What a waste of time!
// Better to do nothing.The path becomes["EAST", "WEST"], now "EAST" and "WEST"
// annihilate each other, therefore, the final result is[](nil in Clojure).
// In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH"
// are not directly opposite but they become directly opposite after
// the reduction of "EAST" and "WEST" so the whole path is reducible to["WEST", "WEST"].

// Task
// You have to write a function dirReduc which will take an array of strings
// and returns an array of strings with the needless directions removed(W < -> E or S < -> N
// side by side).

// The Haskell version takes a list of directions with data
// Direction = North | East | West | South.The Clojure version returns
// nil when the path is reduced to nothing.

// Solve it using javaScript

function dirReduce(plan) {
    const oppositeDirections = {
        NORTH: 'SOUTH',
        SOUTH: 'NORTH',
        WEST: 'EAST',
        EAST: 'WEST',
    };

    const reducedPlan = [];

    for (const direction of plan) {
        if (reducedPlan.length > 0 && reducedPlan[reducedPlan.length - 1] === oppositeDirections[direction]) {
            reducedPlan.pop(); // Remove the last direction if it's opposite to the current one
        } else {
            reducedPlan.push(direction);
        }
    }

    console.log(reducedPlan)
    return reducedPlan;
}

dirReduce(["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"])
