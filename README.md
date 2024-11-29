Link del projecto desplegado: [MCSystems-Leo-Torres](https://mc-systems-test-leo-torres.vercel.app/)

## Arquitectura

El proyecto está hecho en Nextjs. Decidí implementar la estructura de carpetas basandome un poco
[Screaming Architecture](https://www.milanjovanovic.tech/blog/screaming-architecture), ya que considero puede llegar a ser una estructura mas organizada en cuanto archivos si en un caso un proyecto llegase a tener gran cantidad de ellos.

Tambien decidí implementar redux toolkit, solamente para manejar si el usuario quiere buscar por algún pais en específico, esto lo hice asi porque en un momento consideré utilizar esta variable fuera del principal componente donde la utilizo (Aunque no fue asi al final). 

## Ejecutar en local

1. Bajar el repo

2. Desde la terminal, acceder a la carpeta del proyecto y ejectutar según el empaquetador que utilices (npm, yarn, pnpm o bun): 
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```
    
    Si aparece el siguiente error: 
    ![image](https://github.com/user-attachments/assets/38aea8a7-902c-4f27-ac97-4b3100e32dcf)

    prueba ejecutar el siguiente comando: 
    ```bash
    npm install --legacy-peer-deps
    ```

    Si el error persiste, ejecutar: 
    ```bash
    npm install --force
    ```

    Si la instalanciones de dependencias se hicieron correctamente, te saldra un mensaje diciendo que los paquetes fueron agregados, parecido a esto: 

    ![image](https://github.com/user-attachments/assets/1afb8da1-4b42-4008-ad14-4796a826060b)

    Una vez instaladas las dependencias, vamos al paso 3. 

3. Realizar el build de la aplicacion (según empaquetador):
    ```bash
    npm run buil
    # or
    yarn run build
    # or
    pnpm run build
    # or
    bun run build
    ```     

4. Levantar el proyecto:
    ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. Abrir [http://localhost:3000](http://localhost:3000) en tu navegador.
