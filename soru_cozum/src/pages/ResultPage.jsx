// src/pages/ResultPage.jsx

import React from 'react';
import { useParams } from 'react-router-dom';

const ResultPage = () => {
  const { testCode } = useParams();
  const userProgress = JSON.parse(localStorage.getItem('userProgress')) || {};
  const testResult = userProgress[testCode] || { score: 0 };

  return (
    <div>
      <h1>Sonuç</h1>
      <p>Test: {testCode}</p>
      <p>Skor: {testResult.score}</p>
    </div>
  );
};

export default ResultPage;
