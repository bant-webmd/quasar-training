<template>
    <div>Thing!</div>
</template>

<script>
export default {
    created() {
        this.$nextTick(function () {
            // Code that will run only after the
            // entire view has been rendered
            console.log("v-if worked!!");
        })
    }
}
</script>