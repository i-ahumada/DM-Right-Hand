import { createApp } from 'vue'
import './style.css'
import app from './app.vue'

export default {
    data () {
            return { 
            favorite_count: 0, 
            }
        },
}


createApp(app).mount('#app')

