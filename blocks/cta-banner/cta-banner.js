export default function decorate(block) {
  const wrapper = block.firstElementChild;
  wrapper.classList.add('cta-banner-wrapper');
  const links = block.querySelectorAll('a');
  links.forEach(a => a.classList.add('button', 'accent'));
}