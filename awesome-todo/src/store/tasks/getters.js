export function tasksFiltered(state) {
    if (state.search.length > 0) {
        let tasksFiltered = {}
        Object.keys(state.tasks).forEach(function(key) {
            let task = state.tasks[key];
            let taskName = task.name.toLowerCase();
            let searchVal = state.search.toLowerCase();
            if (taskName.includes(searchVal)) {
                tasksFiltered[key] = task;
            }
        });
        return tasksFiltered;
    } else {
        return state.tasks;
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

