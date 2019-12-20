export function tasksTodo(state) {
    var result = {}
    Object.keys(state.tasks).forEach(function(key) {
        var task = state.tasks[key];
        if (!task.completed) {
            result[key] = task;
        }
    });
    return result;
}

export function tasksComplete(state) {
    var result = {}
    Object.keys(state.tasks).forEach(function(key) {
        var task = state.tasks[key];
        if (task.completed) {
            result[key] = task;
        }
    });
    return result;   
}