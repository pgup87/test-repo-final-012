export default function decorate(block) {
  const formUrl = block.querySelector('a')?.href;
  if (!formUrl) return;

  const form = document.createElement('form');
  form.innerHTML = `<div class='form-loading'>Loading form...</div>`;
  
  // Async load logic for EDS spreadsheet forms
  const loadForm = async () => {
    const resp = await fetch(formUrl);
    if (resp.ok) {
      const json = await resp.json();
      form.innerHTML = ''; // Clear loading
      json.data.forEach(field => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('form-field');
        const label = document.createElement('label');
        label.textContent = field.Label;
        const input = document.createElement('input');
        input.type = field.Type || 'text';
        input.name = field.Field;
        input.placeholder = field.Placeholder || '';
        if (field.Required === 'yes') input.required = true;
        wrapper.append(label, input);
        form.append(wrapper);
      });
      const submit = document.createElement('button');
      submit.textContent = 'Submit';
      form.append(submit);
    }
  };

  block.textContent = '';
  block.append(form);
  loadForm();
}