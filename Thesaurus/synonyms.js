var thesaurus = require('powerthesaurus-api');

thesaurus('blue', 'antonyms').then(
    res => {
      console.log(res)
    },
    err => {
      throw err
    }
  )