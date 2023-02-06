<script setup> 
    import { ref } from 'vue';
    let owlbearURL = ref('');
</script>

<template>
    <h3>Owlbear</h3>
    <iframe id="inlineFrameExample" class="w-100"
    title="Inline Frame Example"
    height="350"
    :src="owlbearURL">
    </iframe>
    <div>
        <textarea class="text-center w-100" v-model="owlbearURL" placeholder="-- Owlbear Rodeo Link --"></textarea>
    </div>

</template>

<style scoped>
textarea {
    resize: none;
}
</style>