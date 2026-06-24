(function() {
  var html = document.documentElement;
  var saved = localStorage.getItem('srs-theme') || 'auto';
  html.setAttribute('data-theme', saved);
  function updateSystemDark() {
    var isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    html.setAttribute('data-system-dark', isDark);
  }
  updateSystemDark();
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateSystemDark);
  document.querySelectorAll('.theme-btn').forEach(function(btn) {
    if (btn.dataset.themeValue === saved) { btn.classList.add('active'); } else { btn.classList.remove('active'); }
    btn.addEventListener('click', function() {
      var val = this.dataset.themeValue;
      html.setAttribute('data-theme', val);
      localStorage.setItem('srs-theme', val);
      document.querySelectorAll('.theme-btn').forEach(function(b) { b.classList.remove('active'); });
      this.classList.add('active');
    });
  });
})();
