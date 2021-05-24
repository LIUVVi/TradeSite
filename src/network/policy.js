import {request} from "@/network/request";

export function addPolicy(policyFrom) {
    return request({
        method: 'post',
        url: '/policy',
        data: policyFrom
    })
}

export function getPolicy() {
    return request({
        method: 'get',
        url: '/policy',
    })
}

export function getPolicyDetails(id) {
    return request({
        method: 'get',
        url: '/policy/' + id,
    })
}

export function delPolicy(id) {
    return request({
        method: 'delete',
        url: '/policy/' + id,
    })
}
