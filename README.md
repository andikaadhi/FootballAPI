# FootballAPI 

Football API merupakan API yang memberikan data seputar sepakbola, seperti kompetisi, pertandingan, tim sepakbola, dll. 
### Source Data: football-data.org

## Available API
- GET /competitions
- GET /competitions/{competitionid}/matches
- GET /competitions/{competitionid}/teams
- GET /competitions/{comeptitionid}/standings
- GET /teams
- GET /teams/{teamid}
- GET /teams/{teamid}/matches
- GET /matches
- GET /matches/{matchid}

## API Docs (Blueprint)
Berada pada /documentation/ApiDocs.apib
+ [Link to file](https://github.com/andikaadhi/FootballAPI/blob/master/documentation/ApiDocs.apib)
+ [Link to Apiary Docs](https://footballrestapi.docs.apiary.io)

## Architecture and Sequence Diagram 
Berada pada /documentation
+ [Linkt to folder](https://github.com/andikaadhi/FootballAPI/blob/master/documentation)


## Cara menjalankan
+ clone repo
+ install dependancies menggunakan perintah 'yarn' atau 'npm install' menggunakan console
+ jalankan aplikasi dengan perintah 'yarn start' atau 'npm start' jika terinstall nodemon
   - opsi 2: 'node server.js'
+ akses API pada port 8000
+ jika ingin mengganti port, silahkan mengganti di .env

## Dependancies
+ axios
+ dotenv
+ express
+ moment
+ nodemon
+ winston

### Terima kasih
