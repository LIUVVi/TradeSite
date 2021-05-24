import {request} from "@/network/request";

export function getUserInfo() {
    return request({
        method: 'get',
        url: '/user/info'
    })
}
