# TRIBAL TEST

# Documentación API TEST
**Framework:**
`"laravel/framework": "^8.12"`

**Requiere:**
`"php": "^7.3|^8.0"`

**Pasos para correr y probar:**
1)	Descargar e instalar Composer:   [Descargar Composer aqui](https://getcomposer.org/)
2)	Instalar Laravel, abrir terminal y ejecutar el siguiente comando: 
`composer global require laravel/installer`

3)	En la terminal ubicarse dentro del directorio “**backend**” del proyecto y luego ejecutar los siguientes comandos en el orden especificado:
I)	`composer install`
II)	`php artisan serve`

**Como consumir la API:**
La api solo posee un **endpoint** el cual es de tipo **GET** y recibe un parámetro que usa para buscar en diferentes servicios y retornar la data que coincida, a continuación se muestra un ejemplo de como consumirla: 
`curl --location --request GET 'http://localhost:8000/api/search/adan'`

Donde **adan** es el  parámetro y/o texto a buscar


# Documentación WEB TEST

**Framework:**
`Angular: 10.2.3`

**Pasos para correr y probar:**
1)	Descargar e instalar node.js puede hacerlo desde el siguiente enlace: 
[Descargar Node.js aqui](https://nodejs.org/es/)

2)	Abrir una terminal y ejecutar el siguiente comando:
`npm install -g @angular/cli`

3)	Abrir una terminal y ubicarse dentro del dirctorio “**fronted**” del proyecto y luego ejecutar los siguientes comandos en el orden especificado:
I)	`npm install`
II)	`ng serve --open`
