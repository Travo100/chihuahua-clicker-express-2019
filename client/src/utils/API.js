import axios from "axios";

export default {
    getChihuahuas: function() {
        return axios.get("/api/chihuahuas");
    },

    addChihuahua: function(chihuahuaObj) {
        return axios.post("/api/chihuahuas", chihuahuaObj);
    }
}