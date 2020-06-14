'use strict'

exports.handler = async (event, context) => {
  console.log(JSON.stringify('Event: event'))
  return {
    body: 'Hello from Lambda'
  }
}
