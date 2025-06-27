// File 버튼 클릭 시 숨겨진 input 클릭
document.getElementById('file-button').addEventListener('click', () => {
  document.getElementById('hidden-file-input').click();
});

// 파일이 선택되었을 때 실행
document.getElementById('hidden-file-input').addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = (e) => {
    const content = e.target.result;
    const canvasArea = document.getElementById('canvasArea');
    canvasArea.innerHTML = ''; // 초기화

    if (file.name.endsWith('.svg')) {
      const svgBlob = new Blob([content], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(svgBlob);
      const img = document.createElement('img');
      img.src = url;
      img.style.maxWidth = '100%';
      img.style.maxHeight = '100%';
      canvasArea.appendChild(img);
    } else if (file.name.endsWith('.json')) {
      canvasArea.textContent = content;
    } else {
      canvasArea.textContent = '지원되지 않는 파일 형식입니다.';
    }
  };

  reader.readAsText(file);
});