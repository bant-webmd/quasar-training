<template>
  <q-page padding>
    <q-list v-if="Object.keys(tasks).length > 0" separator bordered>
      <!-- <q-item-label header>Tasks</q-item-label> -->
      <task
        v-for="(task, key) in tasks"
        :key="key"
        :id="key"
        :task="task"
      ></task>
    </q-list>
    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn 
        round
        @click="showAddTask=true"
        size="24px" 
        color="primary" 
        icon="add" 
      />
    </div>
    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask=false"></add-task>
    </q-dialog>
  </q-page>
</template>

<style>
</style>

<script>
import {mapGetters} from 'vuex';
import Task from '../components/Tasks/Task.vue';
import AddTask from '../components/Tasks/Modals/AddTask.vue';

export default {
  data() {
    return {
      showAddTask: false
    }
  },
  components: {
    'task': Task,
    'add-task': AddTask
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
