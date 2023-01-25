<script setup>
    import { ref } from 'vue'

    let id = 0;
    let notaText = ref('');
    let notaTitle = ref('');
    let notas = ref([]);
    
    function addNota() {
        notas.value.push({
            id: id++,
            title: notaTitle,
            text: notaText
        })
        notaText = '';
        notaTitle = '';
    }
    function deleteNota(nota) {
        notas.value = notas.value.filter((n) => n.id !== nota.id);
    }
</script>

<template>
    <h3>Notes</h3>
    <!-- Notes list -->
    <div class="notes-container">
        <div class="note" v-for="nota in notas" :key="nota.id">
            <button class="delete" @click="deleteNota(nota)">Delete note</button>
            <strong>{{ nota.title }}</strong> <br>
            <em> {{ nota.text }}</em> <br>
        </div>
    </div>
    <!-- Notes list - END -->

    <!-- Button trigger modal -->
    <div class="container-fluid pt-2">
        <button type="button add-note py-2" class="w-100 p-1 mb-2" data-toggle="modal" data-target="#note-modal">+</button>
    </div>


    <!-- Modal -->
    <div class="modal fade" id="note-modal" tabindex="-1" role="dialog" aria-labelledby="note-modal" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form method="post">
                        <div class="modal-header">
                        <h5 class="w-100">
                            <textarea class="modal-title w-100" placeholder="--Write your title here--" 
                            id="notas-modal" v-model="notaTitle" rows="2" required="true"></textarea>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <textarea class="w-100" placeholder="--Write your note here--" v-model="notaText"></textarea>
                    </div>
                    <div class="modal-footer">
                        <input type="button" class="btn" value="Close" data-dismiss="modal">
                        <input type="submit" class="btn" value="Add Note" data-dismiss="modal" @click="addNota()">
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Modal - END -->

</template>

<style scoped>
textarea {
    resize: none;
    border: none;
    outline: none;
}
.notes-container {
    max-height: 120px;
    overflow-y: scroll;
}
.note {
    position: relative;
    border: 2px solid black;
    padding-left: 5px;
    margin-bottom: 5px;
    word-wrap: break-word;
    max-height: 100px;
    overflow-y: auto;
}
.delete {
    font-size: 12px;
    position: absolute;
    right: 0px;
    padding: 0px 7px;
    border: 2px solid black;
    z-index: 10;
}

.add-note {
    padding-top: 5px;
}

</style>