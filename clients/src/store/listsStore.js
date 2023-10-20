
import { makeAutoObservable } from 'mobx'

export default class ListsStore{
    constructor(){
        this._lists = []
        makeAutoObservable(this)
    }

    setList(list){
        this._lists = list
    }

    get List(){
        return this._lists
    }
}