export function tasksSorted(state) {
    let result = {};
    var keysSorted = Object.keys(state.tasks).sort(function (keyA, keyB) {
        var propA = state.tasks[keyA][state.sort].toLowerCase();
        var propB = state.tasks[keyB][state.sort].toLowerCase();
        if (propA > propB) {
            // A comes after B so return positive
            return 1; 
        } else if (propB > propA) {
            // B comes after A so return negative 
            return -1; 
        } else {
            return 0; 
        }
    });
    // console.log("keysSorted: ", keysSorted);
    keysSorted.forEach(function(key) {
        result[key] = state.tasks[key];
    });
    // console.log("Result: ", result);
    return result;
}

export function tasksFiltered(state, getters) {
    let tasksSorted = getters.tasksSorted;
    if (state.search.length > 0) {
        let tasksFiltered = {}
        Object.keys(tasksSorted).forEach(function(key) {
            let task = tasksSorted[key];
            let taskName = task.name.toLowerCase();
            let searchVal = state.search.toLowerCase();
            if (taskName.includes(searchVal)) {
                tasksFiltered[key] = task;
            }
        });
        return tasksFiltered;
    } else {
        return tasksSorted;
    }
}

export function tasksTodo(state, getters) {
    let result = {}
    Object.keys(getters.tasksFiltered).forEach(function(key) {
        let task = getters.tasksFiltered[key];
        if (!task.completed) {
            result[key] = task;
        }
    });
    return result;
}

export function tasksComplete(state, getters) {
    let result = {}
    Object.keys(getters.tasksFiltered).forEach(function(key) {
        let task = getters.tasksFiltered[key];
        if (task.completed) {
            result[key] = task;
        }
    });
    return result;   
}

