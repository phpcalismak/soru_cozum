// src/utils/loadQuestions.js

export const loadQuestions = async (testCode) => {
    try {
      const response = await fetch('/dataJson/questions.json');
      if (!response.ok) {
        throw new Error('Sorular yüklenemedi.');
      }
      const data = await response.json();
      const questions = data[testCode];
      if (!questions) {
        throw new Error('Test kodu bulunamadı.');
      }
      return questions;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  