import { mount } from '@vue/test-utils'
import SeoContent from '@/components/SeoContent.vue'

describe('SeoContent', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(SeoContent)
  })

  // Headings
  it('renders the h1 heading', () => {
    expect(wrapper.find('h1').text()).toContain('Meet New Friends in Barcelona Over 30')
  })

  it('renders two h2 headings', () => {
    const h2s = wrapper.findAll('h2')
    expect(h2s).toHaveLength(2)
    expect(h2s[0].text()).toContain('Join Events and Meetups in Barcelona')
    expect(h2s[1].text()).toContain('Chat and Connect Safely')
  })

  it('renders three h3 headings', () => {
    const h3s = wrapper.findAll('h3')
    expect(h3s).toHaveLength(3)
    expect(h3s[0].text()).toContain('How It Works')
    expect(h3s[1].text()).toContain('Frequently Asked Questions')
    expect(h3s[2].text()).toContain('Get in Touch')
  })

  // Deep links
  it('has a deep link to #about', () => {
    expect(wrapper.find('a[href="#about"]').exists()).toBe(true)
  })

  it('has a deep link to #events', () => {
    expect(wrapper.find('a[href="#events"]').exists()).toBe(true)
  })

  it('has a deep link to #chat', () => {
    expect(wrapper.find('a[href="#chat"]').exists()).toBe(true)
  })

  it('has a deep link to #how-it-works', () => {
    expect(wrapper.find('a[href="#how-it-works"]').exists()).toBe(true)
  })

  it('has a deep link to #faq', () => {
    expect(wrapper.find('a[href="#faq"]').exists()).toBe(true)
  })

  it('has a deep link to #contact', () => {
    expect(wrapper.find('a[href="#contact"]').exists()).toBe(true)
  })

  // Image / illustration
  it('renders the member count stat', () => {
    expect(wrapper.text()).toContain('500+ members')
  })

  it('renders the nationalities stat', () => {
    expect(wrapper.text()).toContain('30+ nationalities')
  })

  it('renders the illustration SVG', () => {
    expect(wrapper.find('svg').exists()).toBe(true)
  })

  // CTA button
  it('renders the Join CTA button linking to #contact', () => {
    const links = wrapper.findAll('a[href="#contact"]')
    const cta = links[links.length - 1]
    expect(cta.text()).toContain('Join Amigos 30+')
  })

  // Section ID for nav scrollspy
  it('has id="about" on the section element', () => {
    expect(wrapper.find('section#about').exists()).toBe(true)
  })
})
