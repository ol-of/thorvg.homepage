// 스크롤 시 우측 네비 메뉴 그림자
document.addEventListener('DOMContentLoaded', () => {
    const toc = document.querySelector('.content-toc');

    window.addEventListener('scroll', () => {
        const threshold = 100;
        if (window.scrollY > threshold) {
            toc.classList.add('scrolled');
        } else {
            toc.classList.remove('scrolled');
        }
    });
});

// Copy 버튼 클릭 시 애니메이션 및 클립 보드 복사
document.addEventListener("DOMContentLoaded", () => {
  const snippets = document.querySelectorAll(".code-block");

  snippets.forEach((snippet) => {
      const button = snippet.querySelector(".copy-button");
      const code = snippet.querySelector(".code-content");
      const copyIcon = snippet.querySelector(".copy-icon");
      const doneIcon = snippet.querySelector(".done-icon");

      button.addEventListener("click", () => {
      const codeText = code.textContent.trim();

      navigator.clipboard.writeText(codeText).then(() => {
          // 아이콘 전환
          copyIcon.classList.remove("active");
          doneIcon.classList.add("active");

          // 일정 시간 후 복구
          setTimeout(() => {
          doneIcon.classList.remove("active");
          copyIcon.classList.add("active");
          }, 700);
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toTopBtn = document.getElementById("to-top-btn");

  toTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  function toggleToTopBtn() {
    const isMobile = window.innerWidth <= 768;
    const hasScrolled = window.scrollY > 200;

    if (isMobile) {
      if (hasScrolled) {
        toTopBtn.style.opacity = "1";
        toTopBtn.style.visibility = "visible";
        toTopBtn.style.pointerEvents = "auto";
      } else {
        toTopBtn.style.opacity = "0";
        toTopBtn.style.visibility = "hidden";
        toTopBtn.style.pointerEvents = "none";
      }
    } else {
      // 데스크탑에서는 아예 안 보이게
      toTopBtn.style.opacity = "0";
      toTopBtn.style.visibility = "hidden";
      toTopBtn.style.pointerEvents = "none";
    }
  }

  toggleToTopBtn();
  window.addEventListener("scroll", toggleToTopBtn);
  window.addEventListener("resize", toggleToTopBtn);
});

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.menu-toggle');
  const menuIcon = toggleButton.querySelector('.menu-icon');
  const menuDrawer = document.querySelector('.menu-drawer');

  let isOpen = false;

  toggleButton.addEventListener('click', () => {
    isOpen = !isOpen;

    // 아이콘 이미지 변경
    menuIcon.src = isOpen ? 'icon/close.svg' : 'icon/menu.svg';
    menuIcon.alt = isOpen ? 'Close menu' : 'Menu';

    // 메뉴 드로어 토글
    if (isOpen) {
      menuDrawer.classList.add('open');
    } else {
      menuDrawer.classList.remove('open');
    }
  });
});