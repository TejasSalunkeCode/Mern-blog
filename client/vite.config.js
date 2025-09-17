// // import { defineConfig } from 'vite'
// // import react from '@vitejs/plugin-react-swc'

// // // https://vite.dev/config/
// // export default defineConfig({
// //   plugins: [react()],
// // })


// import { defineConfig } from 'vite'


// export default defineConfig({
//   // server: {
//   //   proxy: {
//   //     '/api': {
//   //       target: 'http://localhost:3000',
//   //       secure: false,
//   //     },
//   //   },
//   // },
//   // plugins: [
//   //   react(),
//   // ],
// })



import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import flowbiteReact from "flowbite-react/plugin/vite";

export default defineConfig({
  server : {
    proxy : {
      '/api':{
        target:'http://localhost:3000',
        secure:false,
      },
    },
  },
  plugins: [tailwindcss(), flowbiteReact()],
})