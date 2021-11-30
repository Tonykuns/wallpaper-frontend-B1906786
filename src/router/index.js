import { createWebHistory, createRouter } from "vue-router";
// import store from "../store";

const routes = [{
        path: "/",
        name: "TrangChu",
        component: () =>
            import ("../views/TrangChu.vue"),
    },
    {
        path: '/dangnhap',
        component: () =>
            import ("../views/DangNhap")
    },
    {
        path: '/dangky',
        component: () =>
            import ("../views/DangKy.vue")
    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import ("../views/About.vue"),
    },
    {
        path: "/collect/:name",
        name: "Collect",
        component: () =>
            import ("../views/Collect-Wallpaper.vue"),
    },
    {
        path: "/wallpaper/:id",
        name: "Wallpaper",
        component: () =>
            import ("../views/Wallpaper.vue"),
    },
    {
        path: "/timkiem/:name",
        name: "TimKiem",
        component: () =>
            import ("../views/TimKiem.vue"),
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;