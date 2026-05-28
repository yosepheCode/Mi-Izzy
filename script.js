function toggle(el) {
  const wasOpen = el.classList.contains('open');
  el.classList.toggle('open');

  const hint = el.querySelector('.tap-hint');
  hint.textContent = wasOpen ? 'abrir' : 'cerrar';

  if (!wasOpen) {
    const heart = el.querySelector('.heart-float');
    heart.style.animation = 'none';
    void heart.offsetWidth;
    heart.style.animation = '';
  }
}
