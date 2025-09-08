// Simple interaction for Contact Me button
document.addEventListener('DOMContentLoaded', function() {
  const contactBtn = document.querySelector('.contact-btn');
  if (contactBtn) {
    contactBtn.addEventListener('click', function() {
      alert('Terima kasih telah menghubungi kami!');
    });
  }

  // Highlight phone/email on click
  document.querySelectorAll('.about-info').forEach(function(el) {
    el.addEventListener('click', function() {
      el.style.background = '#2196f3';
      el.style.color = '#fff';
      setTimeout(() => {
        el.style.background = '';
        el.style.color = '#fff';
      }, 700);
    });
  });

  // Highlight filosofi points on hover
  document.querySelectorAll('.filosofi-points li').forEach(function(el) {
    el.addEventListener('mouseenter', function() {
      el.style.background = '#2196f3';
      el.style.color = '#fff';
    });
    el.addEventListener('mouseleave', function() {
      el.style.background = '';
      el.style.color = '#fff';
    });
  });

  // Hover effect for layanan icons
  document.querySelectorAll('.layanan-icon').forEach(function(icon) {
    icon.addEventListener('mouseenter', function() {
      icon.style.background = '#2196f3';
      icon.style.color = '#fff';
    });
    icon.addEventListener('mouseleave', function() {
      icon.style.background = '#222';
      icon.style.color = '#fff';
    });
  });

  // Card hover effect
  document.querySelectorAll('.testimoni-card').forEach(function(card) {
    card.addEventListener('mouseenter', function() {
      card.style.boxShadow = '0 4px 24px rgba(33,150,243,0.18)';
      card.style.transform = 'translateY(-4px)';
    });
    card.addEventListener('mouseleave', function() {
      card.style.boxShadow = '0 2px 16px rgba(0,0,0,0.08)';
      card.style.transform = 'none';
    });
  });
});