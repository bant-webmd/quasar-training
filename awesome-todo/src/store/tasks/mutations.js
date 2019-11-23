export function updateTask (state, payload) {
    // state.tasks[payload.id]
    Object.assign(state.tasks[payload.id], payload.updates);
}
