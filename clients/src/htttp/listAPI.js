import { $authHost } from ".";


export const createList = async (list) =>{
    const {data} = await $authHost.post('api/list', list)
    return data
}

export const fetchList = async () =>{
    const {data} = await $authHost.get('api/list')
    return data
} 

export const fetchListOne = async (id) =>{
    const {data} = await $authHost.get('api/list/' + id)
    return data
} 