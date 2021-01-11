import Home from '../pages/Home'
import Favorites from '../pages/Favorites'
import Recents from '../pages/Recents'

export default [
    { path: '/', name: 'Início', component: Home },
    { path: '/livros/favoritos', name: 'Favoritos', component: Favorites },
    { path: '/livros/recentes', name: 'Recentes', component: Recents }
]