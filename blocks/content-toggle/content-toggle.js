export default function decorate(block) {
  const tabs = document.createElement('div');
  tabs.classList.add('toggle-tabs');
  const panels = document.createElement('div');
  panels.classList.add('toggle-panels');

  [...block.children].forEach((row, idx) => {
    const [label, content] = row.children;
    
    const btn = document.createElement('button');
    btn.textContent = label.textContent;
    btn.dataset.index = idx;
    if (idx === 0) btn.classList.add('active');
    btn.addEventListener('click', () => {
      block.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      block.querySelectorAll('.toggle-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      panels.children[idx].classList.add('active');
    });
    tabs.append(btn);

    const panel = document.createElement('div');
    panel.classList.add('toggle-panel');
    if (idx === 0) panel.classList.add('active');
    panel.append(content);
    panels.append(panel);
  });

  block.textContent = '';
  block.append(tabs, panels);
}