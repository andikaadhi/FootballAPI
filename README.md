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
[Link to file](https://github.com/andikaadhi/FootballAPI/blob/master/documentation/ApiDocs.apib)

## Architecture and Sequence Diagram 
Berada pada /documentation
[Linkt to folder](https://github.com/andikaadhi/FootballAPI/blob/master/documentation)


## Cara menjalankan
+ install dependancies menggunakan perintah 'yarn'
+ jalankan aplikasi dengan 'yarn start'
+ akses API pada port 8000
+ jika ingin mengganti port, silahkan mengganti di .env
