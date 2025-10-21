declare module '*.css'
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.ico'

interface ImportMeta {
  readonly env: Record<string, string | boolean | undefined>
}
