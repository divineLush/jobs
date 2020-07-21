import AppHome from '../src/pages/AppHome.vue'
import AppJob from '../src/pages/AppJob.vue'

export const routes = [
    { path: '', component: AppHome },
    { path: '/job/:id', component: AppJob }
]
