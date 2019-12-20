<template>
    <div>
        <list-header :bgColor="'bg-orange-4'">Todo</list-header>
        <q-list v-if="Object.keys(tasksTodo).length > 0" separator bordered>
            <task
                v-for="(task, key) in tasksTodo"
                :key="key"
                :id="key"
                :task="task"
            ></task>
        </q-list>
    </div>
</template>

<script>
import Task from './Task.vue';
import ListHeader from '../Shared/ListHeader.vue';

export default {
    props: ['tasksTodo'],
    components: {
        'task': Task,
        'list-header': ListHeader
    }
}
</script>

