# odin-wheres-waldo-BE
A simple BackEnd build with NodeJS/Express with mongoDB for FE.

1. create .env file, add MONGODB_URL : "\<your mongoDB connection string\>"
2. npm run serverstart

### -------------
FE (built with react/vite/bootstrap) : https://wongyc-66.github.io/odin-wheres-waldo-FE/
FE (source) :  https://github.com/WongYC-66/odin-wheres-waldo-FE

BE (built with nodeJS/express/mongoDB) : https://odin-wheres-waldo-be.adaptable.app/
BE (source) : https://github.com/WongYC-66/odin-wheres-waldo-BE

BE APIs :
1.  /v1/success_guess_post 
    - input : val, x-coor, y-coor
    - output : true/ false

2.  /v1/score_board_get
    - output : [{username1, score1}, ...]

3.  /v1/score_board_post
    - input : user, time
    - output : success/submission failed
