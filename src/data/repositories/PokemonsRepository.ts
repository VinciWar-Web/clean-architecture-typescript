import { requestGetData } from '../../common/requestData'
import { router } from '../../common/utils/router'
import pokemonsAdapter from '../adapters/pokemonsAdapter'
import { PokemonsInterface } from '../interfaces';


export default class PokemonsRepository {

    /**
     * Método GET para listar todos los pokemons.
     * 
     * @returns {Promise<{ jsonData: Pokemon[], body: any }>}
     */

    static async getAll(): Promise<{ jsonData: PokemonsInterface[], body: any }> {

        try {
     
           const { resp, body } = await requestGetData<{ results: PokemonsInterface[] }>(`${router.pokemon}`)

            if(!body.ok) return { jsonData: [], body } // Si la solicitud HTTP no fue exitosa envia jsonData en blanco

            const data = resp.results.map((items: any) => pokemonsAdapter(items))

            const jsonString = JSON.stringify(data) // serializa objetos
            const jsonData = JSON.parse(jsonString) // convertir una cadena JSON en array

            return { jsonData, body }
        } catch (error) {
            console.error("Error en PokemonsRepository getAll:", error)
            throw error
        }
    }
}
