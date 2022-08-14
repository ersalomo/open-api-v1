# Project ini dibuat untuk menyelesaikan tugas dari Dicoding

 ## kriteria
 + GET /albums{id}
 - ```{
    "status": "success",
    "data": {
    "album": {
      "id": "album-Mk8AnmCp210PwT6B",
      "name": "Viva la Vida",
      "year": 2008
      }
      }
    }

+ GET /songs
  - ```{
    "status": "success",
    "data": {
        "songs": [
            {
                "id": "song-Qbax5Oy7L8WKf74l",
                "title": "Life in Technicolor",
                "performer": "Coldplay"
            },
            {
                "id": "song-poax5Oy7L8WKllqw",
                "title": "Centimeteries of London",
                "performer": "Coldplay"
            },
            {
                "id": "song-Qalokam7L8WKf74l",
                "title": "Lost!",
                "performer": "Coldplay"
            }
          ]
      }
    }
+ GET /songs/{id}
  - ```{
    "status": "success",
    "data": {
        "song": {
            "id": "song-Qbax5Oy7L8WKf74l",
            "title": "Life in Technicolor",
            "year": 2008,
            "performer": "Coldplay",
            "genre": "Indie",
            "duration": 120,
            "albumId": "album-Mk8AnmCp210PwT6B"
              }
      }
    }

## validation
 + POST /albums
   - name : string, required.
   - year : number, required.
 + PUT /albums
   - name : string, required.
   - year : number, required.
 + POST /songs
   - title : string, required.
   - year : number, required.
   - genre : string, required.
   - performer : string, required.
   - duration : number.
   - albumId: string.
 + PUT /songs
   - title : string, required.
   - year : number, required.
   - genre : string, required.
   - performer : string, required.
   - duration : number.
   - albumId : string.

## (Error Handling)

* Ketika proses validasi data pada request payload tidak sesuai (gagal), server harus mengembalikan response:
  - status code: 400 (Bad Request)
  - response body: 
    - status: fail
    - message: <apa pun selama tidak kosong>
  
* Ketika pengguna mengakses resource yang tidak ditemukan, server harus mengembalikan response:
  - status code: 404 (Not Found)
  - response body:
    - status: fail
    - message: <apa pun selama tidak kosong>

* Ketika terjadi server eror, server harus mengembalikan response:
  - status code: 500 (Internal Server Error)
  - response body:
    - status: error
    - message: <apa pun selama tidak kosong>


## Kriteria Opsional OpenMusic API versi 1



