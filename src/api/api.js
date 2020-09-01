import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '99557ee1-9f56-4ba8-a907-a3a9bd527d18'}
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 100) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                    return response.data;
                }
            )
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },

    getProfile(userId) {
        console.warn('Obsolete method.Please use profileApa object');
        return profileAPI.getProfile(userId);
        // return instance.get(`/profile/${userId}`)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`/profile/${userId}`)
        // return instance.get(`/profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`/status/${status}`)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me/`)
    }
}
