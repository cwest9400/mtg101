import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import ArticleListPage from './components/categoryPages/ArticleListPage.vue'
import DeckListPage from './components/categoryPages/DeckListPage.vue'
import AboutPage from './components/detailPages/AboutPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'home', component: App},
        {path: '/articles', name: 'articles', component: ArticleListPage},
        {path: '/decks', name: 'decks', component: DeckListPage},
        {path: '/about', name: 'about', component: AboutPage},
    ]
})


createApp(App).use(router).mount('#app')
