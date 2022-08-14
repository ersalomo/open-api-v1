const routes = (handler) => [
  // menginsert data
  {
    method: 'POST',
    path: '/albums',
    handler: handler.postAlbumHandler,
  },
  // mendapatkan semua data
  {
    method: 'GET',
    path: '/albums',
    handler: handler.getAlbumsHandler,
  },
  // mendapatkan data berdasarkan id
  {
    method: 'GET',
    path: '/albums/{id}',
    handler: handler.getAlbumHandler,
  },
  // mengedit
  {
    method: 'PUT',
    path: '/albums/{id}',
    handler: () => {},
  },
  // menghapus
  {
    method: 'DELETE',
    path: '/albums/{id}',
    handler: () => {},
  },
]

module.exports = routes
