import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import TheHeader from '@/components/TheHeader.vue'

function mountHeader() {
  return mount(TheHeader, {
    global: { plugins: [createPinia()] },
  })
}

describe('TheHeader', () => {
  it('renders the logo text', () => {
    const wrapper = mountHeader()
    expect(wrapper.text()).toContain('amigos')
    expect(wrapper.text()).toContain('30+')
  })

  it('renders all 7 nav links', () => {
    const wrapper = mountHeader()
    const labels = ['Home', 'About', 'How It Works', 'Chat', 'Events', 'FAQ', 'Contact']
    labels.forEach(label => {
      expect(wrapper.text()).toContain(label)
    })
  })

  it('shows the announcement banner by default', () => {
    const wrapper = mountHeader()
    expect(wrapper.find('[role="banner"]').exists()).toBe(true)
  })

  it('hides the banner when the dismiss button is clicked', async () => {
    const wrapper = mountHeader()
    const dismissBtn = wrapper.find('button[aria-label="Dismiss announcement"]')
    await dismissBtn.trigger('click')
    expect(wrapper.find('[role="banner"]').exists()).toBe(false)
  })

  it('toggles the mobile menu when the hamburger button is clicked', async () => {
    const wrapper = mountHeader()
    const hamburger = wrapper.find('button[aria-label="Toggle menu"]')

    expect(wrapper.find('#mobile-menu').exists()).toBe(false)
    await hamburger.trigger('click')
    expect(wrapper.find('#mobile-menu').exists()).toBe(true)
    await hamburger.trigger('click')
    expect(wrapper.find('#mobile-menu').exists()).toBe(false)
  })
})
