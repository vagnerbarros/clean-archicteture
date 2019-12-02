import sanitize from 'sanitize-html'
import validate from '../util/validate'

import buildMakeClient from './client'

const makeClient = buildMakeClient({ sanitize, validate })

export default makeClient
