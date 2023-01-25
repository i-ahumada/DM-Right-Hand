<script setup>
    import initiative from './components/panel-initiative.vue'
    import notes from './components/panel-notes.vue'
    import owlbear from './components/panel-owlbear.vue'
    import npc from './components/panel-npc.vue'
    import party from './components/panel-party.vue'
    import { ref } from 'vue'

    let player = ref('');
</script>

<template>
<div class="container-fluid">
    <div class="row my-2">
    <div class="col-3">
        <div class="container panel h-100">
            <party @response="(playerName) => player = playerName"></party>
        </div>
    </div>
    <div class="col-6">
        <div class="container panel">
            <owlbear></owlbear>
        </div>
    </div>
    <div class="col-3 ">
        <div class="container panel h-100">
            <npc></npc>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-6" >
        <div class="container panel bottom-panel">
            <notes></notes>
        </div>
    </div>
    <div class="col-6 ">
        <div class="container panel bottom-panel">
            <initiative :players="player"></initiative>
        </div>
    </div>
</div>
</div>

</template>

<style scoped>
    #main-row {
        height: 100%;
    }
    .panel {
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,0.7);
    }
    .bottom-panel {
        height: 220px;
    }
</style>