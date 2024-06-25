import PokemonsRepository from '../../data/repositories/PokemonsRepository'

export default class GetPokemonsUseCase {
    async call() {
        return PokemonsRepository.getAll()
    }
}
