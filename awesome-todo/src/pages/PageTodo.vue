<template>
  <q-page padding>
    <q-list separator bordered>
      <q-item-label header>General</q-item-label>
      <task
        v-for="(task, key) in tasks"
        :key="key"
        :id="key"
        :task="task"
      ></task>
    </q-list>
  </q-page>
</template>

<style>
</style>

<script>
import {mapGetters} from 'vuex';
import Task from '../components/Tasks/Task.vue';

export default {
  components: {
    'task': Task
  },
  computed: {
    // tasks() {
    //   return this.$store.getters['tasks/tasks'];
    // }
    // Map getters from 'tasks' module 
    // then specify which getters in the array
    ...mapGetters('tasks', ['tasks'])
  }
}
</script>
