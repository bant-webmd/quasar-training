export function updateTask ({commit}, payload) {
    // console.log("Payload: ", payload);
    commit('updateTask', payload);
}

export function deleteTask({commit}, taskID) {
    commit('deleteTask', taskID);
}