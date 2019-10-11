import axios from 'axios'
import _ from 'lodash'

exports.handler = function(event, context, callback) {
  const API_URL = 'https://www.breakingbadapi.com/api/'
  const ENDPOINT = 'characters'

  axios.get(`${API_URL}${ENDPOINT}`)
    .then(({ data }) => {
      const character = _.sample(data)

      return callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          character
        })
      })
    })
}

