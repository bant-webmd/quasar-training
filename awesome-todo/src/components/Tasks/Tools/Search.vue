<template>
	<q-input 
        outlined 
        class="col"
        v-model="searchField" 
        label="Search"
        v-select-all
        @keyup.esc="resetSearch" 
    >
		<template v-slot:append>
			<q-icon 
                v-if="searchField !== ''" 
                name="close" 
                @click="searchField = ''" 
                class="cursor-pointer" 
            />
			<q-icon name="search" v-else/>
		</template>
	</q-input>
</template>

<script>
import { mapState } from 'vuex';
import { mapActions } from 'vuex';
import { selectAll } from 'src/directives/directive-select-all';

export default {
    methods: {
        ...mapActions('tasks', ['setSearch']),
        resetSearch() {
            this.setSearch('');
        }
    },
    computed: {
        ...mapState('tasks', ['search']),
        searchField: {
            get() {
                return this.search; 
            },
            set(value) {
                // Dispatch Vuex action here 
                // this.$store.dispatch('tasks/setSearch', value, {root: true});
                this.setSearch(value);
            }
        }
    },
    directives: {
        selectAll
    }
}
</script>