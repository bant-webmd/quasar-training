<template>
	<div class="q-mb-sm">
		<q-input
			label="Task name"
			clearable
			outlined
			autofocus
            :value="name"
            @input="updateValue"
			:rules="[val => !!val || 'Field is required']"
		/>
	</div>
</template>

<script>
export default {
    props: ['name'],
    methods: {
        updateValue(value) {
            // console.log(value);
            this.$emit('update:name', value);
        }
    }
};
</script>