<template>
    <transition
        appear 
        enter-active-class="animated zoomIn"
        leave-active-class="animated zoomOut"
    >
        <div class="q-mt-lg">
            <list-header :bgColor="'bg-green-4'">Completed</list-header>
            <q-list v-if="Object.keys(tasksComplete).length > 0" separator bordered>
            <task
                v-for="(task, key) in tasksComplete"
                :key="key"
                :id="key"
                :task="task"
            ></task>
            </q-list>
        </div>
    </transition>
</template>

<script>
import Task from './Task.vue';
import ListHeader from '../Shared/ListHeader.vue';

export default {
    props: ['tasksComplete'],
    components: {
        'task': Task,
        'list-header': ListHeader
    }
}
</script>