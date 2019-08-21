import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import HomePage from '@/views/HomePage.vue'
import td from 'testdouble'
const localVue = createLocalVue()

describe('HomePage', () => {

  let wrapper, vm
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
    vm = wrapper.vm
  })

  it('shows that the light is off', () => {
    expect(wrapper.find('label').text()).to.include('Off')
  })

  context('when the light is off', () => {
    describe('turning on the light', () => {
      beforeEach(() => {
        const button = wrapper.find('button')
        button.trigger('click')
      })

      it('sets the status label', () => {
        expect(wrapper.find('label').text()).to.include('On')
      })

      it('delegates to the updateLightState action', () => {
        td.verify(actions.updateLightState(td.matchers.anything(), true, undefined))
      })
    })
  })
})
