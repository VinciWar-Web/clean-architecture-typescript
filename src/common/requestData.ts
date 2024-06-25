// Base URL .env
const urlBase = import.meta.env.VITE_API_URL_BASE

// Define el tipo de la respuesta de la solicitud
interface ApiResponse<T> {
    resp: T;
    body: Response;
}

export const requestGetData = async <T>( endpoint: string ): Promise<ApiResponse<T>> => {

    const url = `${urlBase}${endpoint}`

    const requestOptions: RequestInit = {
        method: "GET",
        redirect: "follow"
    }

    try {

        const body = await fetch(url, requestOptions)

        if(!body.ok) return { resp: [] as unknown as T, body } // Forzar a que `resp` sea un array vacío en caso de error

        const resp: T = await body.json()
        return { resp, body }

    } catch (error) {
        console.error("Error en requestGetData:", error)
        throw error
    }
}

/* export const requestSendData = async (endpoint, parameters, methods) => {
    const url = `${CountrySingleton.getBaseUrl()}${endpoint}`

    const myHeaders = new Headers()
    myHeaders.append('X-API-KEY', API_KEY)
    myHeaders.append('Content-Type', 'application/json')

    const raw = JSON.stringify(parameters)

    const requestOptions = {
        method: methods,
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
    }

    const body = await fetch(`${url}`, requestOptions)

    if(!body.ok) return { resp:[], body }

    const resp = await body.json()

    return { resp, body }
} */
