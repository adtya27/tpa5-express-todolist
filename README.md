# Api Documentation Back-End
---
> 1. `auth` = header token untuk user dan todo
> 2. `verifyToken` = token user dan todo

## Daftar End Point Untuk Local :
## 1. User
 - Register (`POST`) : http://localhost:3000/auth/regis
 - Login (`POST`) : http://localhost:3000/auth/login
 - GET user (`GET`) : http://localhost:3000/user/
 - POST user (`POST`) : http://localhost:3000/user/

## 2. Todo
 - GET All Todo (`GET`) : http://localhost:3000/todos/
 - POST Todo (`POST`) : http://localhost:3000/todos/
 - PUT Todo (`PUT`) : http://localhost:3000/todos/id/
 - DELETE Todo By Id (`DELETE`) : http://localhost:3000/todos/id/
 - DELETE All Todo (`DELETE`) : http://localhost:3000/todos/

## Daftar End Point Untuk Postman :
Untuk End Point Pada postman terdapat pada folder `Api Documentation`. Untuk menggunakan Api Documentation pada postman, download file terlebih dahulu kemudian import pada aplikasi `postman` anda.

>End Point ini terhubung pada Cyclic dan sudah dideploy secara online.
