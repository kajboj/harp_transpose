import liveServer from '../node_modules/live-server'
import path from 'path'
import express from 'express'

const RootRedirector = express()

RootRedirector.get('/', (req, res) => {
  res.redirect(defaultPath)
})

var params = {
  port: 53581,
  host: '127.0.0.1',
  root: __dirname,
  wait: 100,
  mount: [
      ['/js', path.join(__dirname, '../dist/js')],
  ],
  middleware: [RootRedirector]
}

liveServer.start(params)
