import { PokemonsInterface } from '../interfaces'

export default class PokemonsModels implements PokemonsInterface {
    name: string
    url: string

    constructor( name: string, url: string ) {
        this.name = name
        this.url = url
    }
}