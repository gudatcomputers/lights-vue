export function updateLightState (context, options) {
  const url = 'http://192.168.1.100/api/pbCR-nMeHM23nX8li4i3JpTnNWLNYWZqOt42T1kR/lights/1/state'
  fetch(url, {
    method: 'PUT',
    body: JSON.stringify({
      on: options.isLightOn,
      hue: parseInt(options.hue),
      bri: parseInt(options.bri),
      sat: parseInt(options.sat)
    })
  })
}
