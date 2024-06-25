/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL_BASE: string
    // otras variables de entorno que tengas
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv
}