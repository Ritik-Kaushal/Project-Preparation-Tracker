
const routes = [
    {
        path : '/',
        redirect : '/physics'
    },
    {
        path : '/chemistry',
        component : chemistry
    },
    {
        path : '/maths',
        component : maths
        
    },
    {
        path : '/physics',
        component : physics
    }
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    el : "#tracker_body",
    router : router

})