export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`hero-${cols.length}-cols`);

  // Identify elements
  const img = block.querySelector('img');
  if (img) {
    const picture = img.closest('picture');
    const bgWrapper = document.createElement('div');
    bgWrapper.classList.add('hero-bg');
    bgWrapper.append(picture);
    block.prepend(bgWrapper);
  }

  const content = block.querySelector(':scope > div > div:not(.hero-bg)');
  if (content) {
    content.classList.add('hero-content');
    // Wrap text in a container if needed
    const container = document.createElement('div');
    container.classList.add('hero-content-wrapper');
    [...content.childNodes].forEach(node => container.append(node));
    content.append(container);
  }
}