import http from "../common/http";
import store from "../store";


class WallpaperService {
    constructor() {
        http.interceptors.request.use(config => {
            const user = store.getters.loggedInUser;
            if (user && user.accessToken) {
                config.headers.authorization = `Bearer ${user.accessToken}`;
            }
            return config;
        });
    }

    getAll() { return http.get("/wallpapers"); }
    get(id) { return http.get(`/wallpapers/${id}`); }
    getCollect(name) { return http.get(`/wallpapers/collect/${name}`); }
    createComment(id, data) { return http.post(`/wallpapers/comment/${id}`, data) }
    findByName(name) { return http.get(`/wallpapers?name=${name}`); }

}


export default new WallpaperService();