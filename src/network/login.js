import {request} from "@/network/request";

export function checkLogin(loginFrom) {
    return request({
        method: 'post',
        url: '/auth',
        data: loginFrom
    })
}



/*export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}*/
