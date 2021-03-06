/**
 * This script exposes some Node.js' APIs to trusted
 * pages (eg. internal pages like Bookmarks)
 */

const path = require('path')

const expose_apis = () => {
    window.__$_require = require
    window.__$_process = process
    window.__$_datastore = require('../data_store')
}

const is_trusted = () => {
    // only trust pages inside ../../pages/
    return path.resolve(path.join(__dirname, '../../pages')) === path.resolve(path.join(location.pathname.substring(1), '..')) &&
        location.protocol === 'file:'
}

if (is_trusted()) {
    console.info('Page is trusted. Exposing Node.js APIs...')
    expose_apis()
}