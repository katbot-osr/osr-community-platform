import { getConfigurationOption } from '../config/config'
import { Logger } from 'tslog'
import { LogflareHttpClient } from 'logflare-transport-core'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const logLevel = getConfigurationOption('REACT_APP_LOG_LEVEL', 'info')

const levelNumberToNameMap = {
  silly: 0,
  trace: 1,
  debug: 2,
  info: 3,
  warn: 4,
  error: 5,
  fatal: 6,
}

export const logger = new Logger({
  type: window.location.hostname === 'localhost' ? 'pretty' : 'hidden',
  minLevel: levelNumberToNameMap[logLevel],
  hideLogPositionForProduction: true,
})

const logFlareTransport = (props) => {
  try {
    const client = new LogflareHttpClient({
      apiKey: props.LOGFLARE_KEY,
      sourceToken: props.LOGFLARE_SOURCE,
    })
    return (logObject: any) => {
      client.addLogEvent({
        message: logObject[0],
        metadata: logObject[1],
      })
    }
  } catch (err) {
    return () => { }
  }
}

logger.attachTransport(
  logFlareTransport({
    LOGFLARE_KEY: getConfigurationOption('REACT_APP_LOGFLARE_KEY', ''),
    LOGFLARE_SOURCE: getConfigurationOption('REACT_APP_LOGFLARE_SOURCE', ''),
  }),
)
