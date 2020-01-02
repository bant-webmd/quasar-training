<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height column">
        <div class="row q-mb-lg">
          <search></search>
        <sort></sort>
        </div>
        <p v-if="search && !Object.keys(tasksTodo).length && !Object.keys(tasksComplete).length">No Search Results</p>


        <q-scroll-area class="q-scroll-area-tasks">
          <no-tasks
            v-if="!Object.keys(tasksTodo).length && !search && !settings.showTasksInOneList"
          ></no-tasks>
          <tasks-todo
            v-if="Object.keys(tasksTodo).length"
            :tasksTodo="tasksTodo"
          >Todo</tasks-todo>
          <tasks-complete
            class="q-mb-lg"
            v-if="Object.keys(tasksComplete).length"
            :tasksComplete="tasksComplete"
          >Completed</tasks-complete>
        </q-scroll-area>

        <div class="absolute-bottom text-center q-mb-lg no-pointer-events">
          <q-btn 
            round
            class="all-pointer-events"
            @click="showAddTask=true"
            size="24px" 
            color="primary" 
            icon="add" 
          />
        </div>
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
import {mapState} from 'vuex';
import AddTask from '../components/Tasks/Modals/AddTask.vue';
import TasksTodo from '../components/Tasks/TasksTodo.vue';
import TasksComplete from '../components/Tasks/TasksComplete.vue';
import NoTasks from '../components/Tasks/NoTasks.vue';
import Search from '../components/Tasks/Tools/Search.vue';
import Sort from '../components/Tasks/Tools/Sort.vue';

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
    'no-tasks': NoTasks,
	'search': Search,
	'sort': Sort 
  },
  computed: {
    // tasks() {
    //   return this.$store.getters['tasks/tasks'];
    // }
    // Map getters from 'tasks' module 
    // then specify which getters in the array
    ...mapGetters('tasks', ['tasksTodo', 'tasksComplete']),
    ...mapGetters('settings', ['settings']),
    ...mapState('tasks', ['search'])
  },
  mounted() {
    this.$root.$on('showAddTask', () => {
      this.showAddTask = true;
    })
  }
}
</script>

<style lang="scss" scoped>
.q-scroll-area-tasks {
    display: flex;
    flex-grow: 1;
}
</style>