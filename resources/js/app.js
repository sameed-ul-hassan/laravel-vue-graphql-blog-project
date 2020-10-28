import Vue from "vue";
import VueRouter from "vue-router";
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';
import './bootstrap';

//import components
import PostList from './components/post/PostList';
import Post from './components/post/Post'
import TopicPostList from "./components/post/TopicPostList";
window.Vue = Vue;
Vue.use(VueRouter);

const routes = [
    {
        path : '/',
        name: 'index',
        component : PostList
    },
    {
        path : '/post/:id',
        name : 'post',
        component : Post
    },
    {
        path : '/topic/:slug',
        name : 'topic',
        component : TopicPostList
    }
];

Vue.use(VueApollo);
const apolloClient = new ApolloClient({
    // You should use an absolute URL here
    uri: 'http://127.0.0.1:8000/graphql'
});

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
});

const router = new VueRouter({
    mode : 'history',
    routes
});
const app = new Vue({
    el: '#app',
    apolloProvider,
    router
});
