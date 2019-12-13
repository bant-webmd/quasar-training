<template>
	<q-card-section class="row">
		<div class="text-h6"><slot></slot></div>
		<q-space></q-space>
		<q-btn round flat v-close-popup dense icon="close" />
	</q-card-section>
</template>

<script>
export default {
    
}
</script>