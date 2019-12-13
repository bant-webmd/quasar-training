<template>
  <q-item
    clickable
    v-ripple
    @click="updateTask({id: id, updates: {completed: !task.completed}})"
    :class="{'bg-orange-1': !task.completed, 'bg-green-1': task.completed}"
  >
    <q-item-section side top>
      <q-checkbox class="no-pointer-events" :value="task.completed" />
    </q-item-section>

    <q-item-section>
      <q-item-label :class="{'text-strikethrough': task.completed}">{{task.name}}</q-item-label>
    </q-item-section>

    <q-item-section side top v-if="task.dueDate">
      <div class="row">
        <div class="column justify-center">
          <q-icon name="event" class="q-mr-md" />
        </div>
        <div class="column">
          <q-item-label class="row justify-end" caption>{{task.dueDate}}</q-item-label>
          <q-item-label class="row justify-end" caption>
            <small>{{task.dueTime}}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>

    <q-item-section side >
      <div class="row">
          <q-btn 
            flat
            round 
            dense 
            color="red" 
            icon="delete" 
            @click.stop="promptToDelete(id)"
          />
          <q-btn 
            flat
            round 
            dense 
            color="primary" 
            icon="edit" 
            @click.stop="showEditTask = true"
          />
      </div>
    </q-item-section>
    <q-dialog v-model="showEditTask">
      <edit-task 
        :id="id"
        :task="task"
        @close="showEditTask=false"></edit-task>
    </q-dialog>
  </q-item>
</template>

<script>
import {mapActions} from 'vuex';
import EditTask from './Modals/EditTask.vue';

export default {
  data() {
    return {
      showEditTask: false 
    }
  },
  components: {
    'edit-task': EditTask
  },
  props: ['id', 'task'],
  methods: {
      ...mapActions('tasks', ['updateTask', 'deleteTask']),
      promptToDelete(id) {
        this.$q.dialog({
          title: 'Confirm',
          message: 'Sure you want to delete?',
          ok: {
            push: true
          },
          cancel: {
            color: 'negative'
          },
          persistent: true
        }).onOk(() => {
          // console.log('>>>> OK')
          this.deleteTask(id);
        })
      }
  }
};
</script>