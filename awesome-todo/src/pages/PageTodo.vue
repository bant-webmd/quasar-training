<template>
  <q-page padding>
      <q-item-label header>General</q-item-label>

      <q-item 
        clickable
        v-ripple
        v-for="task in tasks"
        :key="task.id"     
        @click="task.completed = !task.completed"   
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{task.name}}</q-item-label>
        </q-item-section>
        
        <q-item-section side top>
          <q-icon name="event"/>
          <q-item-label caption>{{task.dueDate}}</q-item-label>        
          <q-item-label caption><small>{{task.dueTime}}</small></q-item-label>        
        </q-item-section>
      </q-item>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          id: 1, 
          name: "Go to shop",
          completed: false,
          dueDate: '2019/05/12',
          dueTime: '18:30'
        },
        {
          id: 2, 
          name: "Get bananas",
          completed: false, 
          dueDate: '2019/05/13',
          dueTime: '14:00'
        },
        {
          id: 3, 
          name: "Get apples",
          completed: false, 
          dueDate: '2019/05/14',
          dueTime: '16:00'
        }
      ]
    }
  }
}
</script>
