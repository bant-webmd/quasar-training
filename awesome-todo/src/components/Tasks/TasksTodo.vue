<template>
    <transition
        appear 
        enter-active-class="animated zoomIn"
        leave-active-class="animated zoomOut absolute-top"
    >
        <div>
            <list-header v-if="!settings.showTasksInOneList" :bgColor="'bg-orange-4'">Todo</list-header>
            <q-list v-if="Object.keys(tasksTodo).length > 0" separator bordered>
                <task
                    v-for="(task, key) in tasksTodo"
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
import {mapGetters} from 'vuex';

export default {
    props: ['tasksTodo'],
    computed: {
        ...mapGetters('settings', ['settings']) 
    },
    components: {
        'task': Task,
        'list-header': ListHeader
    }
}
</script>

