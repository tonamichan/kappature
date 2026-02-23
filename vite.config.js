import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import fs from 'fs'
import path from 'path'

// public ディレクトリの内容を docs にコピーするプラグイン
const copyPublicPlugin = {
  name: 'copy-public',
  apply: 'build',
  enforce: 'post',
  async generateBundle() {
    const publicDir = path.resolve(__dirname, 'public')
    const docsDir = path.resolve(__dirname, 'docs')

    if (!fs.existsSync(publicDir)) return

    const copyRecursive = (src, dest) => {
      if (fs.statSync(src).isDirectory()) {
        if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true })
        fs.readdirSync(src).forEach(file => {
          copyRecursive(path.join(src, file), path.join(dest, file))
        })
      } else {
        fs.copyFileSync(src, dest)
      }
    }

    copyRecursive(publicDir, docsDir)
  }
}

export default defineConfig({
  base: './',
  plugins: [vue(), copyPublicPlugin],
  build: {
    outDir: 'docs',
    assetsDir: 'assets'
  },
  server: {
    port: 5173,
    open: true,
  }
})
