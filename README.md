Link del projecto desplegado: [MCSystems-Leo-Torres](https://mc-systems-test-leo-torres.vercel.app/)

## Arquitectura

El proyecto está hecho en Nextjs. Decidí implementar la estructura de carpetas basandome un poco
[Screaming Architecture](https://www.milanjovanovic.tech/blog/screaming-architecture), ya que considero puede llegar a
ser una estructura mas organizada en cuanto archivos si en un caso un proyecto llegase a tener gran cantidad de ellos.

Tambien decidí implementar redux toolkit, solamente para manejar si el usuario quiere buscar por algún pais en específico, esto lo hice asi porque en un momento consideré utilizar esta variable fuera del principal componente donde la utilizo (Aunque no fue asi al final). 

## Ejecutar en local

1. Bajar el repo

2. ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

3. Abrir [http://localhost:3000](http://localhost:3000) en tu navegador.
