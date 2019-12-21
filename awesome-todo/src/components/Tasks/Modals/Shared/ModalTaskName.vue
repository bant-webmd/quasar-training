<template>
	<div class="q-mb-sm">
		<q-input
			label="Task name"
			clearable
			outlined
			autofocus
            v-select-all
            :value="name"
            @input="updateValue"
			:rules="[val => !!val || 'Field is required']"
		/>
	</div>
</template>

<script>
import { selectAll } from 'src/directives/directive-select-all';

export default {
    props: ['name'],
    methods: {
        updateValue(value) {
            // console.log(value);
            this.$emit('update:name', value);
        }
    },
    directives: {
        selectAll
    }
};
</script>