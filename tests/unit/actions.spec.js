import { updateLightState } from '@/actions'
import chai from 'chai'
chai.use(require('dirty-chai'))
const expect = chai.expect
const fetchMock = require('fetch-mock')

describe('actions', () => {
  describe('updateLightState', () => {
    let updateLightHttpRequest

    beforeEach(() => {
      updateLightHttpRequest = fetchMock.put(
        'http://192.168.1.100/api/pbCR-nMeHM23nX8li4i3JpTnNWLNYWZqOt42T1kR/lights/1/state',
        200)
    })

    afterEach(() => {
      updateLightHttpRequest.reset()
    })

    context('when Tommy wants to turn the light off', () => {
      it('makes an http put request', () => {
        updateLightState({}, false)
        expect(updateLightHttpRequest.called('http://192.168.1.100/api/pbCR-nMeHM23nX8li4i3JpTnNWLNYWZqOt42T1kR/lights/1/state')).to.be.true()
        const requestBody = JSON.parse(updateLightHttpRequest.lastOptions().body)
        expect(requestBody).to.eql({ on: false })
      })
    })

    context('when Tommy wants to turn the light on', () => {
      it('makes an http put request', () => {
        updateLightState({}, true)
        expect(updateLightHttpRequest.called('http://192.168.1.100/api/pbCR-nMeHM23nX8li4i3JpTnNWLNYWZqOt42T1kR/lights/1/state')).to.be.true()
        const requestBody = JSON.parse(updateLightHttpRequest.lastOptions().body)
        expect(requestBody).to.eql({ on: true })
      })
    })
  })
})

// pbCR-nMeHM23nX8li4i3JpTnNWLNYWZqOt42T1kR

// http://192.168.1.100/api/pbCR-nMeHM23nX8li4i3JpTnNWLNYWZqOt42T1kR/lights/1/state
