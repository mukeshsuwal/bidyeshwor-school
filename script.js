
function setLang(lang){
  document.documentElement.setAttribute('data-lang', localStorage.getItem('bidyeshwor_lang') || 'ne');
}
function toggleMenu(){
  const menu = document.getElementById('navMenu');
  if(menu) menu.classList.toggle('open');
}
document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('bidyeshwor_lang') || 'ne';
  setLang(lang);

  const activePage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__menu a').forEach(a => {
    if(a.getAttribute('href') === activePage) a.classList.add('active');
  });

  const heroImage = document.getElementById('heroImage');
  const heroCaption = document.getElementById('heroCaption');
  if(heroImage && heroCaption){
    const slides = [
      {src:'assets/campus-1.jpg', ne:'विद्यालयको मुख्य भवन', en:'Main school building'},
      {src:'assets/campus-2.jpg', ne:'शैक्षिक गतिविधि', en:'Academic activity'},
      {src:'assets/campus-3.jpg', ne:'विद्यार्थी उपलब्धि', en:'Student achievement'},
      {src:'assets/campus-4.jpg', ne:'समारोह तथा कार्यक्रम', en:'Ceremony and events'},
      {src:'assets/logo.jpg', ne:'विद्यालय लोगो', en:'School logo'}
    ];
    let i = 0;
    function show(){
      const s = slides[i];
      heroImage.src = s.src;
      heroCaption.textContent = document.documentElement.getAttribute('data-lang') === 'ne' ? s.ne : s.en;
      i = (i + 1) % slides.length;
    }
    show();
    setInterval(show, 4200);
  }
});
