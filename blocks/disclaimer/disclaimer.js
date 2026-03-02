export default function decorate(block) {
  const content = block.querySelector(':scope > div');
  if (content) content.classList.add('disclaimer-container');
  
  // Check for 'scroll' variant
  if (block.classList.contains('scroll')) {
    block.classList.add('is-scrollable');
  }
}