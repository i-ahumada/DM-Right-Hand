<script setup>
    import { ref } from 'vue';
    let id = 0;
    let playerName = ref('');
    let playerRace = ref('');
    let playerStats = ref([8,8,8,8,8,8]);
    let players = ref([]);
    const emit = defineEmits(['response'])

    function addPlayer() {
        players.value.push({
            id: id++,
            name: playerName,
            race: playerRace,
            stats: playerStats
        })
        emit('response', players);
        playerName = '';
        playerRace = '';
        playerStats = [8,8,8,8,8,8];
    }

    function deletePlayer(player) {
        players.value = players.value.filter((p) => p.id !== player.id);
        emit('response', players.value);
    }

    defineExpose({
        players
    })
</script>

<template>
    <h3>Party</h3>
    <div class="container-fluid players-container">
        <div class="container player text-center mb-2" v-for="player in players" :key="player.id">
            <button class="delete" @click="deletePlayer(player)">X</button>
            <div class="row mt-2">
                <div class="col-4">
                    <div class="w-100 d-flex justify-content-center">
                        <img src="\images\21104.png" alt="image" height="50">
                    </div>
                </div>
                <div class="col">
                    <h5>{{ player.name }} <br> <em>{{ player.race }}</em></h5>
                </div>
            </div>
            <div class="row">
                <div class="col p-0">
                    <strong>Str: </strong><em>{{ player.stats[0] }} ({{ Math.floor(player.stats[0]/2) - 5 }})</em>
                </div>
                <div class="col p-0">
                    <strong>Dex: </strong><em>{{ player.stats[1] }} ({{ Math.floor(player.stats[1]/2) - 5 }})</em>
                </div>
                <div class="col p-0">
                    <strong>Con: </strong><em>{{ player.stats[2] }} ({{ Math.floor(player.stats[2]/2) - 5 }})</em>
                </div>
            </div>
            <div class="row">
                <div class="col p-0">
                    <strong>Int: </strong><em>{{ player.stats[3] }} ({{ Math.floor(player.stats[3]/2) - 5 }})</em>
                </div>
                <div class="col p-0">
                    <strong>Wis: </strong><em>{{ player.stats[4] }} ({{ Math.floor(player.stats[4]/2) - 5 }})</em>
                </div>
                <div class="col p-0">
                    <strong>Cha: </strong><em>{{ player.stats[5] }} ({{ Math.floor(player.stats[5]/2) - 5 }})</em>
                </div>
            </div>
        </div>
    </div>

    <div class="row py-2">
        <!-- Button trigger creatP Modal -->
        <div class="col-6">
            <button type="button" class="w-100 p-1" data-toggle="modal" data-target="#createP-modal">Create player</button>
        </div>
        <!-- Button trigger JSON Modal -->
        <div class="col-6">
            <button type="button" class="w-100 p-1" data-toggle="modal" data-target="#party-modal" disabled>Import json</button>
        </div>

    </div>

    <!-- Modal Create Player -->
    <div class="modal fade" id="createP-modal" tabindex="-1" role="dialog" aria-labelledby="createP-modal" aria-hidden="true">
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
                                            <input type="text" name="player-name" id="player-name" placeholder="-- Name --" v-model="playerName">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            <input type="text" name="player-race" id="player-race" placeholder="-- Race --" v-model="playerRace">
                                        </div>
                                    </div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-4">
                                <label for="player-str"><strong>Strength: </strong></label>
                                <input type="number" name="player-str" id="player-str" onkeydown="return false" min="1" v-model.number="playerStats[0]">
                            </div>
                            <div class="col-4">
                                <label for="player-dex"><strong>Dexterity: </strong></label>
                                <input type="number" name="player-dex" id="player-dex" onkeydown="return false" min="1" v-model.number="playerStats[1]">
                            </div>
                            <div class="col-4">
                                <label for="player-con"><strong>Constitution: </strong></label>
                                <input type="number" name="player-con" id="player-con" onkeydown="return false" min="1" v-model.number="playerStats[2]">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <label for="player-int"><strong>Intelligence:</strong></label>
                                <input type="number" name="player-int" id="player-int" onkeydown="return false" min="1" v-model.number="playerStats[3]">
                            </div>
                            <div class="col-4">
                                <label for="player-wis"><strong>Wisdom: </strong></label>
                                <input type="number" name="player-wis" id="player-wis" onkeydown="return false" min="1" v-model.number="playerStats[4]">
                            </div>
                            <div class="col-4">
                                <label for="player-cha"><strong>Charisma: </strong></label>
                                <input type="number" name="player-cha" id="player-cha" onkeydown="return false" min="1" v-model.number="playerStats[5]">
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
    <div class="modal fade" id="json-modal" tabindex="-1" role="dialog" aria-labelledby="json-modal" aria-hidden="true">
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