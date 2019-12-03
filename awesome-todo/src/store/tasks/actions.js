import { uid } from 'quasar';

export function updateTask ({commit}, payload) {
    // console.log("Payload: ", payload);
    commit('updateTask', payload);
}

export function deleteTask({commit}, taskID) {
    commit('deleteTask', taskID);
}

export function addTask({commit}, task) {
    let payload = {
        id: uid(),
        task
    }
    commit('addTask', payload);
}