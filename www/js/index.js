function toggleAgenda(el) {
    var agenda = el.parentElement.parentElement.querySelector('.agenda');
    agenda.classList.toggle('none');
}

function toggleAgenda(icon) {
    // Encontre a agenda correspondente
    const agenda = icon.parentElement.nextElementSibling;
    
    // Alternar visibilidade
    if (agenda.classList.contains('hidden')) {
      agenda.classList.remove('hidden');
    } else {
      agenda.classList.add('hidden');
    }
}
  
