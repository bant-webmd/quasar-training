<template>
    <q-select 
        filled 
        v-model="sortBy" 
        :options="options" 
        class="col q-ml-sm"
        label="Sort by"
        stack-label
        emit-value 
        map-options
    />
</template>

<script>
import {mapState} from 'vuex';

export default {
    data() {
        return {
            options: [
                {
                    label: 'Name',
                    value: 'name'
                },
                {
                    label: 'Date',
                    value: 'dueDate'
                }
            ]
        };
    },
    computed: {
        ...mapState('tasks', ['sort']),
        sortBy: {
            get() {
                return this.sort;
            },
            set(value) {
                this.$store.dispatch('tasks/setSort', value, {root: true});
            }
        }
    }
};
</script>

<style lang="scss" scoped>
    .q-select {
        flex-basis: 112px;
        flex-grow: 0;
        flex-shrink: 0;
    }
</style>