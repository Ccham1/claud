import { mount } from '@vue/test-utils'
import TestimonialsSection from '@/components/TestimonialsSection.vue'

describe('TestimonialsSection', () => {
  it('renders the section heading', () => {
    const wrapper = mount(TestimonialsSection)
    expect(wrapper.text()).toContain('What our Amigos say')
  })

  it('renders all 8 testimonial cards', () => {
    const wrapper = mount(TestimonialsSection)
    expect(wrapper.findAll('article')).toHaveLength(8)
  })

  it('renders 8 dot indicators', () => {
    const wrapper = mount(TestimonialsSection)
    const dots = wrapper.findAll('button[aria-label^="Go to testimonial"]')
    expect(dots).toHaveLength(8)
  })

  it('marks the first dot as active on mount', () => {
    const wrapper = mount(TestimonialsSection)
    const firstDot = wrapper.find('button[aria-label="Go to testimonial 1"]')
    expect(firstDot.attributes('aria-current')).toBe('true')
  })

  it('prev button is disabled on the first card', () => {
    const wrapper = mount(TestimonialsSection)
    expect(wrapper.find('button[aria-label="Previous testimonials"]').attributes('disabled')).toBeDefined()
  })

  it('next button is not disabled on the first card', () => {
    const wrapper = mount(TestimonialsSection)
    expect(wrapper.find('button[aria-label="Next testimonials"]').attributes('disabled')).toBeUndefined()
  })

  it('advances offset when next is clicked', async () => {
    const wrapper = mount(TestimonialsSection)
    await wrapper.find('button[aria-label="Next testimonials"]').trigger('click')
    const secondDot = wrapper.find('button[aria-label="Go to testimonial 2"]')
    expect(secondDot.attributes('aria-current')).toBe('true')
  })

  it('goes back when prev is clicked after next', async () => {
    const wrapper = mount(TestimonialsSection)
    await wrapper.find('button[aria-label="Next testimonials"]').trigger('click')
    await wrapper.find('button[aria-label="Previous testimonials"]').trigger('click')
    const firstDot = wrapper.find('button[aria-label="Go to testimonial 1"]')
    expect(firstDot.attributes('aria-current')).toBe('true')
  })

  it('navigates directly to a card when its dot is clicked', async () => {
    const wrapper = mount(TestimonialsSection)
    await wrapper.find('button[aria-label="Go to testimonial 5"]').trigger('click')
    expect(wrapper.find('button[aria-label="Go to testimonial 5"]').attributes('aria-current')).toBe('true')
  })

  it('disables next button on the last card', async () => {
    const wrapper = mount(TestimonialsSection)
    await wrapper.find('button[aria-label="Go to testimonial 8"]').trigger('click')
    expect(wrapper.find('button[aria-label="Next testimonials"]').attributes('disabled')).toBeDefined()
  })

  it('renders each member name', () => {
    const wrapper = mount(TestimonialsSection)
    const names = ['Sofia M.', 'James T.', 'Marta R.', 'Karim B.', 'Elena V.', 'David L.', 'Ana P.', 'Marco F.']
    names.forEach(name => expect(wrapper.text()).toContain(name))
  })

  it('renders 5 stars per card', () => {
    const wrapper = mount(TestimonialsSection)
    const starGroups = wrapper.findAll('[aria-label="5 out of 5 stars"]')
    expect(starGroups).toHaveLength(8)
  })
})
