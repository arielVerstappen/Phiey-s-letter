onload = () => {
  // Hapus kelas "container" agar animasi berjalan
  document.body.classList.remove("container");

  // Tampilkan teks setelah animasi bunga mulai (misalnya setelah 1.5 detik)
  setTimeout(() => {
    const textOverlay = document.querySelector('.text-overlay');
    if (textOverlay) {
      textOverlay.style.opacity = '1';
      textOverlay.style.transform = 'translateX(-50%) scale(1)';
    }
  }, 1500);
};