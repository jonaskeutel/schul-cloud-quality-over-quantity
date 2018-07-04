import Vue from 'vue';
import Router from 'vue-router';

const overviewPage = () => import(/* webpackChunkName: "overview" */ '@/components/pages/overview/overview.vue');
const statsPage = () => import(/* webpackChunkName: "stats" */ '@/components/pages/stats/stats.vue');
const editPage = () => import(/* webpackChunkName: "edit" */ '@/components/pages/edit/edit.vue');
const reviewPage = () => import(/* webpackChunkName: "review" */ '@/components/pages/review/review.vue');
const profilPage = () => import(/* webpackChunkName: "profil" */ '@/components/pages/profil/profil.vue');
const leaderboardPage = () => import(/* webpackChunkName: "leaderboard" */ '@/components/pages/leaderboard/leaderboard.vue');
const createPage = () => import(/* webpackChunkName: "create" */ '@/components/pages/create/create.vue');

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', name: 'main', component: overviewPage},
    {path: '/stats', name: 'stats', component: statsPage},
    {path: '/create', name: 'create', component: createPage},
    {path: '/edit/:id', name: 'edit', component: editPage},
    {path: '/review', name: 'review', component: reviewPage},
    {path: '/profil', name: 'profil', component: profilPage},
    {path: '/leaderboard', name: 'leaderboard', component: leaderboardPage},
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return {x: 0, y: 0};
  },
});
