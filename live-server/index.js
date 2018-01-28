import liveServer from '../node_modules/live-server'
import path from 'path'

var params = {
  port: 53581,
  host: '127.0.0.1',
  root: __dirname,
  wait: 100,
  mount: [
      ['/', path.join(__dirname, '../dist')],
  ]
}

liveServer.start(params)
