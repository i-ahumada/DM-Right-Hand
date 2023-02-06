<script setup>
    const props = defineProps({
        players: Object,
    })
</script>

<template>
    <h3>Initiative</h3>
    <p>{{ players[0].name || 'No props passed yet' }}</p>
</template>

<style scoped>
</style>
