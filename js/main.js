document.addEventListener("DOMContentLoaded", function () {
    const btnNo = document.getElementById('btn-no');
    const btnYes = document.getElementById('btn-yes');
  
    function moveButton() {
      const maxX = window.innerWidth - btnNo.offsetWidth - 10;
      const maxY = window.innerHeight - btnNo.offsetHeight - 10;
  
      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;
  
      btnNo.style.left = `${randomX}px`;
      btnNo.style.top = `${randomY}px`;
    }
  
    // Desktop: chuột di vào
    btnNo.addEventListener('mouseenter', moveButton);
  
    // Mobile: chạm vào
    btnNo.addEventListener('touchstart', function (e) {
      e.preventDefault(); // ngăn click mặc định
      moveButton();
    });
  
    // Nút Có
    btnYes.addEventListener('click', () => {
      window.location.href = "answer.html";
    });
  });
  