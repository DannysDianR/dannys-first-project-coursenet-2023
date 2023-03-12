# dannys-first-project-coursenet-2023

## Website tentang Mobile Legend

## Awalan dalam Set Up Project

1. Buat Folder server
2. Lalu set up instalasi package di masing masing folder
   - Interface | Frontend
     - Bikin react package : 
      ```
        npx create-react-app interface | npx create-react-app FrontEnd
      ```
      - Masukin beberapa Package seperti Bootstrap, Axios
        - Bootstrap (Buat Tampilan makin Cantik)
          ```
            npm i bootstrap react-icons
          ```
        - Axios (Buat menarik data dari database)
          ```
            npm i axios react-router-dom
          ```

   - Server | Backend
     - Bikin package manager:
       ```
       npm init -y
       ```
     - Masukin beberapa Package seperti :
       - Dependencies :

          - Cara untuk menginstall semua package yg diperlukan dengan cepat (Kalo ini udah dijalankan, yg dibawah gak usah):
            ```
            npm install express pg sequelize dotenv cors
            ```            
          - express (Munculin node.js)
            ```
            npm install express
            ```

          - pg (postgresql | Untuk database yg digunakan)
            ```
            npm install pg
            ```

          - sequelize (Menggunakan format/syntax database yg simpel)
            ```
            npm install sequelize
            ```

          - dotenv 
            ```
            npm install dotenv
            ```

          - cors (Untuk dapat masuk data parsing di FrontEnd) 
            ```
            npm install cors
            ```

       - Dev Dependencies :
         - Cara untuk menginstall semua package yg diperlukan dengan cepat (Kalo ini udah dijalankan, yg dibawah gak usah):

         ```
         npm install nodemon sequelize-cli --save-dev
         ```

         - nodemon (Untuk membuat terminal tidak usah di)
         ```
         ```
         ```
         ```
         ```
         ```