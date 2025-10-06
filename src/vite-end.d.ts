/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  
// É possível adicionar aqui outras variáveis de ambiente.
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
