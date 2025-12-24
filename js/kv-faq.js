// FAQ Accordion
const faqItems = document.querySelectorAll('.kv-faq-item summary');

faqItems.forEach(item => {
  item.addEventListener('click', () => {
    faqItems.forEach(i => {
      if(i !== item) i.parentElement.removeAttribute('open'); // mbyll pyetjet e tjera
    });
  });
});