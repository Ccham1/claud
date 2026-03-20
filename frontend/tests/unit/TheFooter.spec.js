import { mount } from '@vue/test-utils'
import TheFooter from '@/components/TheFooter.vue'

describe('TheFooter', () => {
  it('renders all 4 social media links', () => {
    const wrapper = mount(TheFooter)
    const labels = ['Instagram', 'Facebook', 'WhatsApp', 'Meetup']
    labels.forEach(label => {
      expect(wrapper.find(`a[aria-label="${label}"]`).exists()).toBe(true)
    })
  })

  it('renders all 7 site navigation links', () => {
    const wrapper = mount(TheFooter)
    const labels = ['Home', 'About', 'How It Works', 'Chat', 'Events', 'FAQ', 'Contact']
    labels.forEach(label => {
      expect(wrapper.text()).toContain(label)
    })
  })

  it('renders all 4 legal links', () => {
    const wrapper = mount(TheFooter)
    const labels = ['Privacy Policy', 'Terms & Conditions', 'Cookie Policy', 'Sitemap']
    labels.forEach(label => {
      expect(wrapper.text()).toContain(label)
    })
  })

  it('shows confirmation message after newsletter form is submitted', async () => {
    const wrapper = mount(TheFooter)
    const forms = wrapper.findAll('form')
    const newsletterForm = forms[0]

    await wrapper.find('input[aria-label="Email for newsletter"]').setValue('test@example.com')
    await newsletterForm.trigger('submit')

    expect(wrapper.text()).toContain("You're subscribed!")
  })

  it('renders the copyright year', () => {
    const wrapper = mount(TheFooter)
    expect(wrapper.text()).toContain(String(new Date().getFullYear()))
  })
})
