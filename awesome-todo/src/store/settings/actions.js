import {LocalStorage} from 'quasar';

export function setShow12HourTimeFormat({commit, dispatch}, value) {
    commit('setShow12HourTimeFormat', value);
    dispatch('saveSettings');
}

export function setShowTasksInOneList({commit, dispatch}, value) {
    commit('setShowTasksInOneList', value);
    dispatch('saveSettings');
}

export function saveSettings({state}) {
    LocalStorage.set('settings', state.settings);
}

export function getSettings({commit}) {
    // get settings from localstorage if they exist 
    let settings = LocalStorage.getItem('settings');
    // if settings exist in localstorage
    if (settings) {
        // set the state via mutation 
        commit('setSettings', settings);
    }
}