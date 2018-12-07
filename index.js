"use strict";
require("process");
const dgram = require('dgram');

// Backported Buffer functions for node 0.4.x

var process = module.exports = {};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions =  {
    http_parser: '2.8.0',
    node: '11.0.0',
    v8: '7.0.276.28-node.5',
    uv: '1.23.2',
    zlib: '1.2.11',
    ares: '1.14.0',
    modules: '67',
    nghttp2: '1.34.0',
    napi: '3',
    openssl: '1.1.0i \n',
    icu: '62.1',
    unicode: '11.0',
    cldr: '33.1',
    tz: '2018e'
};


module.exports = {
    manager:            require('./src/manager'),
    webapi:             require('./src/webapi'),
    Session:            require('./src/Session'),
    Stream:             require('./src/Stream'),
    AbstractMessage:    require('./src/AbstractMessage'),
    ControlMessage:     require('./src/ControlMessage'),
    RTPMessage:         require('./src/RTPMessage'),
    MTC:                require('./src/MTC'),
    MdnsService:        require('./src/mdns'),
    log:                require('./src/log'),
    hrtimer:            require('./src/hrtimer')
};
