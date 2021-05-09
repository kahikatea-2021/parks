import request from 'superagent'

export function getPark () {
  return request
    .get('/api/v1/park/')
    .then((res) => res.body.parks)
}

// export function postComment (comment, parkId, userName, rating) {
//   const commentData = { comment, parkId, userName, rating }

//   return request
//     .post('/api/v1/comments')
//     .send(commentData)
//     .then((res) => res.body)
// }