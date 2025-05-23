declare module 'tesseract.js' {
  interface Worker {
    loadLanguage: (lang: string) => Promise<void>
    initialize: (lang: string) => Promise<void>
    recognize: (image: HTMLCanvasElement) => Promise<{
      data: {
        text: string
      }
    }>
    terminate: () => Promise<void>
  }

  export function createWorker(): Promise<Worker>
} 