import { mount } from '@vue/test-utils'
import HeroSlider from '@/components/HeroSlider.vue'

const slides = [
  { bg: 'bg-orange-600', image: '', eyebrow: 'Eyebrow 1', title: 'Slide One', subtitle: 'Subtitle one', ctaLabel: 'CTA One', ctaLink: '#one' },
  { bg: 'bg-sky-600',    image: '', eyebrow: 'Eyebrow 2', title: 'Slide Two', subtitle: 'Subtitle two', ctaLabel: 'CTA Two', ctaLink: '#two' },
  { bg: 'bg-amber-600',  image: '', eyebrow: 'Eyebrow 3', title: 'Slide Three', subtitle: 'Subtitle three', ctaLabel: 'CTA Three', ctaLink: '#three' },
]

describe('HeroSlider', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the first slide title and subtitle on mount', () => {
    const wrapper = mount(HeroSlider, { props: { slides } })
    expect(wrapper.text()).toContain('Slide One')
    expect(wrapper.text()).toContain('Subtitle one')
  })

  it('renders the correct number of dot indicators', () => {
    const wrapper = mount(HeroSlider, { props: { slides } })
    const dots = wrapper.findAll('button[aria-label^="Go to slide"]')
    expect(dots).toHaveLength(slides.length)
  })

  it('advances to the next slide when the next arrow is clicked', async () => {
    const wrapper = mount(HeroSlider, { props: { slides } })
    await wrapper.find('button[aria-label="Next slide"]').trigger('click')
    expect(wrapper.text()).toContain('Slide Two')
  })

  it('wraps to the last slide when prev is clicked on slide 0', async () => {
    const wrapper = mount(HeroSlider, { props: { slides } })
    await wrapper.find('button[aria-label="Previous slide"]').trigger('click')
    expect(wrapper.text()).toContain('Slide Three')
  })

  it('navigates to the correct slide when a dot is clicked', async () => {
    const wrapper = mount(HeroSlider, { props: { slides } })
    const dots = wrapper.findAll('button[aria-label^="Go to slide"]')
    await dots[1].trigger('click')
    expect(wrapper.text()).toContain('Slide Two')
  })

  it('auto-advances to the next slide after 5000ms', async () => {
    const wrapper = mount(HeroSlider, { props: { slides } })
    expect(wrapper.text()).toContain('Slide One')
    vi.advanceTimersByTime(5000)
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toContain('Slide Two')
  })

  it('renders the CTA link with the correct href for the active slide', () => {
    const wrapper = mount(HeroSlider, { props: { slides } })
    const cta = wrapper.find('a[href="#one"]')
    expect(cta.exists()).toBe(true)
    expect(cta.text()).toBe('CTA One')
  })

  it('clears the timer on unmount', () => {
    const spy = vi.spyOn(global, 'clearInterval')
    const wrapper = mount(HeroSlider, { props: { slides } })
    wrapper.unmount()
    expect(spy).toHaveBeenCalled()
  })
})
