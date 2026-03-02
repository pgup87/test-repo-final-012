export default function decorate(block) {
  const list = block.querySelector('ul') || document.createElement('ul');
  [...block.querySelectorAll('a')].forEach(link => {
    const url = link.href;
    const ext = url.split('.').pop().toLowerCase();
    const item = link.closest('li') || document.createElement('li');
    item.classList.add('resource-item', `file-${ext}`);
    if (!link.parentElement.tagName === 'LI') {
       item.append(link);
       list.append(item);
    }
  });
  if (!block.contains(list)) block.append(list);
}