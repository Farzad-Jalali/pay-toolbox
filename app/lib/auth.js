/**
 * Authentication middleware allowing developers to put all private content
 * behind Google/ GitHub (TBD) authenticated sessions. Provides helper methods
 * for requesting authentication
 *
 * - note the current architecture design thoughts here are to put a
 *   bitly/oauth proxy. This way headers are checked for valid signatures,
 *   potentially groups and read/ write permissions. All requests that are
 *   outside of that will be rejected and anything with this valid signature
 *   will be served (no resources in this case will be public)
 */
// @TODO(sfount) if cookie parser is not required (header data is sent encrypted
// in some other way) remove this dependency
const cookieParser = require('cookie-parser')

const logger = require('./logger')

// Simple middleware method to ensure that all `req` objects passed in have
// sufficient access headers to access secured routes. Any route that specifies
// `secured` will be rejected without these headers.
// @TODO(sfount) header checks
const secured = function secured (req, res, next) {
  console.log(req.headers)
  // @TODO(sfount) experiment with actual headers passed - validation should
  // happen both at the reverse proxy and with this server (using shared
  // .env secrets)
  const identityHeader = 'X-OAuth-Header-Secret'
  const oAuthProxyIdentityHeader = req.get(identityHeader)

  if (validateHeaderWithSecrets(oAuthProxiyIdentitiyHeader)) {
    next()
  }

  // header is invalid
  res.status(403).send()
}

module.exports = { secured }
