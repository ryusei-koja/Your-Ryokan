import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);



import RyokanPage from './components/Ryokan/RyokanPage.vue'
import RyokanDetail from './components/Ryokan/RyokanDetail.vue'
import EventDetail from './components/Ryokan/EventDetail.vue'

import toppage from './components/topPage.vue'
import contact from './components/Contact.vue'
import event from './components/Event.vue'


//管理画面
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Dashboard from './components/Kanri/Dashboard.vue'
import eventRegister from './components//Kanri/EventRegister.vue'
import RyokanAdd from './components/Kanri/RyokanAdd.vue'
import EventList from './components/Kanri/EventList.vue'
import RyokanList from './components/Kanri/RyokanList.vue'
import ReservationList from './components/Kanri/ReservationList.vue'
import placeSerchList from './components/placeSerchList.vue'



export default new VueRouter({
    // モードの設定
    mode: 'history',
    routes: [
        {
            // routeのパス設定
            path: '/',
            // 名前付きルートを設定したい場合付与
            name: 'top-page',
            // コンポーネントの指定
            component: toppage,
            
            
            
        },
        {
            // routeのパス設定
            path: '/contact',
            // 名前付きルートを設定したい場合付与
            name: 'contact',
            // コンポーネントの指定
            component: contact,
            
            
        },
        {
            // routeのパス設定
            path: '/event',
            // 名前付きルートを設定したい場合付与
            name: 'event',
            // コンポーネントの指定
            component: event,
            
        },
        {
            // routeのパス設定
            path: '/RyokanPage',
            // 名前付きルートを設定したい場合付与
            name: 'RyokanPage',
            // コンポーネントの指定
            component: RyokanPage,
            
        },
        {
            // routeのパス設定
            path: '/RyokanDetail/:ryokanId',
            // 名前付きルートを設定したい場合付与
            name: 'RyokanDetail',
            // コンポーネントの指定
            component: RyokanDetail,
            props: true
        },
        {
            // routeのパス設定
            path: '/RyokanAdd',
            // 名前付きルートを設定したい場合付与
            name: 'RyokanAdd',
            // コンポーネントの指定
            component: RyokanAdd,
        },
        {

        
            path: '/eventRegister/:ryokanId',
            // 名前付きルートを設定したい場合付与
            name: 'eventRegister',
            // コンポーネントの指定
            component: eventRegister,
            props: true
        },
        // {
        //     // routeのパス設定
        //     path: '/EventDetail/:id',
        //     // 名前付きルートを設定したい場合付与
        //     name: 'RyokanDetail',
        //     // コンポーネントの指定
        //     component: EventDetail,
        //     props: true
        // },
        {

        
            path: '/login',
            // 名前付きルートを設定したい場合付与
            name: 'Login',
            // コンポーネントの指定
            component: Login,
            
        },
        {

        
            path: '/register',
            // 名前付きルートを設定したい場合付与
            name: 'Register',
            // コンポーネントの指定
            component: Register,
            
        },
        {

        
            path: '/dashboard',
            // 名前付きルートを設定したい場合付与
            name: 'Dashboard',
            // コンポーネントの指定
            component: Dashboard,
            beforeEnter: (to, form, next)=>{
                axios.get('/authenticated').then(()=>{
                    next()
                }).catch(()=>{
                    return next({name:'Login'})
                })
            }
        },
        {

        
            path: '/EventList',
            // 名前付きルートを設定したい場合付与
            name: 'EventList',
            // コンポーネントの指定
            component: EventList,
            // beforeEnter: (to, form, next)=>{
            //     axios.get('api/authenticated').then(()=>{
            //         next()
            //     }).catch(()=>{
            //         return next({name:'Login'})
            //     })
            // }
        },
        {

        
            path: '/RyokanList',
            // 名前付きルートを設定したい場合付与
            name: 'RyokanList',
            // コンポーネントの指定
            component: RyokanList,
            // beforeEnter: (to, form, next)=>{
            //     axios.get('api/authenticated').then(()=>{
            //         next()
            //     }).catch(()=>{
            //         return next({name:'Login'})
            //     })
            // }
        },
        {

        
            path: '/ReservationList',
            // 名前付きルートを設定したい場合付与
            name: 'ReservationList',
            // コンポーネントの指定
            component: ReservationList,
            // beforeEnter: (to, form, next)=>{
            //     axios.get('api/authenticated').then(()=>{
            //         next()
            //     }).catch(()=>{
            //         return next({name:'Login'})
            //     })
            // }
        },
        {
            path: '/placeSerchList/:place',
            name: 'placeSerchList',
            component: placeSerchList,
        }


    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
});