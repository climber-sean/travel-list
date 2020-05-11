import Search from './components/Search.vue';
import MyList from './components/MyList.vue';

export const routes =
    [
        { path: '/', component: Search},
        { path: '/my-list', component: MyList}
    ];