const connection = require('./connection')

function getRatingByParkId (parkId, db = connection) {
  return db('rating')
    .where('park_id', parkId)
    .select(
      'id',
      'user_id as userId',
      'park_id as parkId',
      'rating'
    )
}

function addRating (newRating, db = connection) {
  const { parkId, userId, rating } = newRating
  return db('rating')
    .insert({
      park_id: parkId,
      user_id: userId,
      rating
    })
}

function updateRating (updatedRating, db = connection) {
  const { rating, parkId, id } = updatedRating
  console.log(updatedRating)
  return db('rating')
    .where('id', id)
    .update({
      rating
    })
}

function deleteRating (starRating, db = connection) {
  const { id } = starRating
  console.log(starRating)
  return db('rating')
  .where({ id: id })
  .delete()
}

module.exports = {
  getRatingByParkId,
  addRating,
  updateRating,
  deleteRating
}
