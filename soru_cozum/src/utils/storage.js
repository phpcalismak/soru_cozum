// src/utils/storage.js

// Kullanıcı ilerlemesini kaydetmek için bir fonksiyon
export const saveUserProgress = (testCode, progress) => {
    const userProgress = JSON.parse(localStorage.getItem('userProgress')) || {};
    userProgress[testCode] = progress;
    localStorage.setItem('userProgress', JSON.stringify(userProgress));
  };
  
  // Bir testin tamamlanıp tamamlanmadığını kontrol eden bir fonksiyon
  export const isTestCompleted = (testCode) => {
    const userProgress = JSON.parse(localStorage.getItem('userProgress')) || {};
    return userProgress[testCode]?.completed || false;
  };
  