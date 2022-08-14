const { Pool } = require('pg')
const { nanoid } = require('nanoid')

class AlbumsService {
  constructor() {
    this._pool = new Pool();
  }

  async addAlbum({ title, artist, album }) {
    const id = nanoid(16)
    const createdAt = new Date().toISOString()
    const updatedAt = createdAt

    const query = {
      text: 'INSERT INTO albums VALUES($1, $2, $3, $4, $5, $6) RETURNING id',
      values: [id, title, artist, album, createdAt, updatedAt],
    }
    const hasil = await this._pool.query(query)

    return hasil.rows[0].id
  }
}

module.exports = AlbumsService
