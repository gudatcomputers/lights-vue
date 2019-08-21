import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import HomePage from '@/views/HomePage.vue'
import td from 'testdouble'
const localVue = createLocalVue()

describe('HomePage', () => {
  let wrapper
  let store, actions

  beforeEach(() => {
    localVue.use(Vuex)

    actions = {
      updateLightState: td.func()
    }
    store = new Vuex.Store({
      actions
    })

    wrapper = shallowMount(HomePage, {
      store, localVue
    })
  })

  it('shows that the light is off', () => {
    expect(wrapper.find('p').text()).to.include('Off')
  })

  context('when the light is off', () => {
    describe('turning on the light', () => {
      beforeEach(() => {
        const button = wrapper.find('button')
        button.trigger('click')
      })

      it('sets the status', () => {
        expect(wrapper.find('p').text()).to.include('On')
      })

      it('delegates to the updateLightState action', () => {
        td.verify(actions.updateLightState(td.matchers.anything(), {
          isLightOn: true,
          hue: undefined,
          sat: undefined,
          bri: undefined
        }, undefined))
      })
    })
  })

  context('changing the light color', () => {
    beforeEach(() => {
      wrapper.find('input#hue').setValue(4500)
      wrapper.find('input#saturation').setValue(200)
      wrapper.find('input#brightness').setValue(150)
      wrapper.find('button').trigger('click')
    })

    it('delegates to the updateLightState action', () => {
      td.verify(actions.updateLightState(td.matchers.anything(), { isLightOn: true, hue: '4500', sat: '200', bri: '150' }, undefined))
    })
  })
})
