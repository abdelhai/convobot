var assert = require('assert')
var request = require('request')


var mockData = {
  get: (match, data) => {
    return {body: data}
  }
}

it('should be ok', () => {
  
  assert.ok(true)
})