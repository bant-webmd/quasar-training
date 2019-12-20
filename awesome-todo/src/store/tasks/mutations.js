import Vue from 'vue';

export function updateTask (state, payload) {
    // state.tasks[payload.id]
    Object.assign(state.tasks[payload.id], payload.updates);
}

export function deleteTask(state, taskID) {   
    Vue.delete(state.tasks, taskID);
}

export function addTask(state, payload) {
    Vue.set(state.tasks, payload.id, payload.task);
}

export function setSearch(state, value) {
     state.search = value;
}