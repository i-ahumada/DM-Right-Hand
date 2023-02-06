<script setup>
    import { ref } from 'vue';
    let id = 0;
    let npcName = ref('');
    let npcRace = ref('');
    let npcStats = ref([8,8,8,8,8,8]);
    let npcs = ref([]);

    function addPlayer() {
        npcs.value.push({
            id: id++,
            name: npcName,
            race: npcRace,
            stats: npcStats
        })
        npcName = '';
        npcRace = '';
        npcStats = [8,8,8,8,8,8]; 
    }

    function deleteNpc(npc) {
        npcs.value = npcs.value.filter((n) => n.id !== npc.id);
    }
</script>

<template>
    <h3>NPC</h3>
    <div class="container-fluid players-container">
        <div class="container player text-center mb-2" v-for="npc in npcs" :key="npc.id">
            <button class="delete" @click="deleteNpc(npc)">X</button>
            <div class="row mt-2">
                <div class="col-4">
                    <div class="w-100 d-flex justify-content-center">
                        <img src="\images\21104.png" alt="image" height="50">
                    </div>
                </div>
                <div class="col">
                    <h5>{{ npc.name }} <br> <em>{{ npc.race }}</em></h5>
                </div>
            </div>
            <div class="row">
                <div class="col p-0">
                    <strong>Str: </strong><em>{{ npc.stats[0] }} ({{ Math.floor(npc.stats[0]/2) - 5 }})</em>
                </div>
                <div class="col p-0">
                    <strong>Dex: </strong><em>{{ npc.stats[1] }} ({{ Math.floor(npc.stats[1]/2) - 5 }})</em>
                </div>
                <div class="col p-0">
                    <strong>Con: </strong><em>{{ npc.stats[2] }} ({{ Math.floor(npc.stats[2]/2) - 5 }})</em>
                </div>
            </div>
            <div class="row">
                <div class="col p-0">
                    <strong>Int: </strong><em>{{ npc.stats[3] }} ({{ Math.floor(npc.stats[3]/2) - 5 }})</em>
                </div>
                <div class="col p-0">
                    <strong>Wis: </strong><em>{{ npc.stats[4] }} ({{ Math.floor(npc.stats[4]/2) - 5 }})</em>
                </div>
                <div class="col p-0">
                    <strong>Cha: </strong><em>{{ npc.stats[5] }} ({{ Math.floor(npc.stats[5]/2) - 5 }})</em>
                </div>
            </div>
        </div>
    </div>

    <div class="row mb-2 py-2">
        <!-- Button trigger creatP Modal -->
        <div class="col-6">
            <button type="button" class="w-100 p-1" data-toggle="modal" data-target="#create-npc-modal">Create NPC</button>
        </div>
        <!-- Button trigger JSON Modal -->
        <div class="col-6">
            <button type="button" class="w-100 p-1" data-toggle="modal" data-target="#json-npc-modal" disabled>Import json</button>
        </div>
    </div>

    <!-- Modal Create Player -->
    <div class="modal fade" id="create-npc-modal" tabindex="-1" role="dialog" aria-labelledby="create-npc-modal" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content text-center">
                <div class="container-fluid my-3">
                    <form method="post">
                        <div class="row mb-2">
                                <div class="col-4">
                                    <img src="" alt="image">
                                </div>
                                <div class="col-8">
                                    <div class="row mb-2">
                                        <div class="col-12">
                                            <input type="text" name="player-name" id="player-name" placeholder="-- Name --" v-model="npcName">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            <input type="text" name="player-race" id="player-race" placeholder="-- Race --" v-model="npcRace">
                                        </div>
                                    </div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-4">
                                <label for="player-str"><strong>Strength: </strong></label>
                                <input type="number" name="player-str" id="player-str" onkeydown="return false" min="1" v-model="npcStats[0]">
                            </div>
                            <div class="col-4">
                                <label for="player-dex"><strong>Dexterity: </strong></label>
                                <input type="number" name="player-dex" id="player-dex" onkeydown="return false" min="1" v-model="npcStats[1]">
                            </div>
                            <div class="col-4">
                                <label for="player-con"><strong>Constitution: </strong></label>
                                <input type="number" name="player-con" id="player-con" onkeydown="return false" min="1" v-model="npcStats[2]">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <label for="player-int"><strong>Intelligence:</strong></label>
                                <input type="number" name="player-int" id="player-int" onkeydown="return false" min="1" v-model="npcStats[3]">
                            </div>
                            <div class="col-4">
                                <label for="player-wis"><strong>Wisdom: </strong></label>
                                <input type="number" name="player-wis" id="player-wis" onkeydown="return false" min="1" v-model="npcStats[4]">
                            </div>
                            <div class="col-4">
                                <label for="player-cha"><strong>Charisma: </strong></label>
                                <input type="number" name="player-cha" id="player-cha" onkeydown="return false" min="1" v-model="npcStats[5]">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                        <input type="submit" class="btn" value="Close" data-dismiss="modal">
                        <input type="submit" class="btn" value="Add Player" data-dismiss="modal" @click="addPlayer()">
                </div>
            </div>
        </div>
    </div>
    <!-- Modal Create Player - END -->

    <!-- Modal JSON -->
    <div class="modal fade" id="json-npc-modal" tabindex="-1" role="dialog" aria-labelledby="json-npc-modal" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form method="post">
                    <div class="modal-header">
                        <input type="file" name="input-playerJson" id="playerJson">
                    </div>
                    <div class="modal-footer">
                        <input type="submit" class="btn" value="Close" data-dismiss="modal">
                        <input type="submit" class="btn" value="Submit" data-dismiss="modal">
                    </div>

                </form>
            </div>
        </div>
    </div>
    <!-- Modal JSON - END -->
</template>

<style scoped>
    .players-container {
        max-height: 400px;
        overflow-y: scroll;
    }
    .player {
        position: relative;
        border: 2px solid black;
        
    }
    .player em {
        font-size: 12px;
    }
    .player h5 em {
        font-size: 14px;
        font-weight: 300;
    }
    .player strong {
        font-size: 14px;
    }
    .player img {
        border-radius: 50%;
    }
    input[type='number'] {
        text-align: center;
        width: 80px;
    }
    input[type='text'] {
        text-align: center;
        width: 100%;
    }
    .delete {
    font-size: 12px;
    position: absolute;
    right: 0px;
    padding: 0px 7px;
    border: 2px solid black;
    z-index: 10;
    }
</style>
