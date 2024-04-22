import { authGuard } from "@bcwdev/auth0provider-client"
import { createRouter, createWebHashHistory } from 'vue-router'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/profiles/:profileId',
    name: 'Profile',
    component: loadPage('ProfilePage')
  },
  {
    path: '/characters/:characterId',
    name: 'Character',
    component: loadPage('CharacterPage')
  },
  {
    path: '/characters/:characterId/sheet',
    name: 'CharacterSheet',
    component: loadPage('CharacterSheetPage')
  },
  {
    path: '/create-character',
    name: 'CreateCharacter',
    component: loadPage('CreateCharacterPage'),
    beforeEnter: authGuard
  },
  {
    path: '/search',
    name: 'Search',
    component: loadPage('SearchPage')
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
