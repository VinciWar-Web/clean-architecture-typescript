import PokemonsModels from '../models/PokemonsModels'
import { PokemonsInterface } from '../interfaces'

const pokemonsAdapter = (json: PokemonsInterface): PokemonsModels => {
    return new PokemonsModels(json.name, json.url)
}

export default pokemonsAdapter