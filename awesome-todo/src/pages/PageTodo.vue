<template>
  <q-page padding>
    <no-tasks
      v-if="!Object.keys(tasksTodo).length"
    ></no-tasks>
    <tasks-todo
      v-else
      :tasksTodo="tasksTodo"
    >Todo</tasks-todo>
    <tasks-complete
      v-if="Object.keys(tasksComplete).length"
      :tasksComplete="tasksComplete"
    >Completed</tasks-complete>
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
import AddTask from '../components/Tasks/Modals/AddTask.vue';
import TasksTodo from '../components/Tasks/TasksTodo.vue';
import TasksComplete from '../components/Tasks/TasksComplete.vue';
import NoTasks from '../components/Tasks/NoTasks.vue';

export default {
  data() {
    return {
      showAddTask: false
    }
  },
  components: {
    'add-task': AddTask,
    'tasks-todo': TasksTodo,
    'tasks-complete': TasksComplete, 
    'no-tasks': NoTasks
  },
  computed: {
    // tasks() {
    //   return this.$store.getters['tasks/tasks'];
    // }
    // Map getters from 'tasks' module 
    // then specify which getters in the array
    ...mapGetters('tasks', ['tasksTodo', 'tasksComplete'])
  },
  mounted() {
    this.$root.$on('showAddTask', () => {
      this.showAddTask = true;
    })
  }
}
</script>
