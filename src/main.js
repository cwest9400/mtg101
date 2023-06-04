import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import HomePage from './components/HomePage.vue'
import ArticleListPage from './components/categoryPages/ArticleListPage.vue'
import DeckListPage from './components/categoryPages/DeckListPage.vue'
import AboutPage from './components/detailPages/AboutPage.vue'
import ArticleDetailPage from './components/detailPages/ArticleDetailPage.vue'
import DeckDetailPage from './components/detailPages/DeckDetailPage.vue'




const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'home', component: HomePage},
        {path: '/about', name: 'about', component: AboutPage},
        {path: '/articles', name: 'articles', component: ArticleListPage},
        {path: '/decks', name: 'decks', component: DeckListPage},
        {path: '/article/:id', name: 'articleDetail', component: ArticleDetailPage, props:true},
        {path: '/deck/:id', name: 'deckDetail', component: DeckDetailPage, props:true},
    ]
})


createApp(App).use(router).mount('#app')
