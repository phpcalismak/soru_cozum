import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'antd';

const MyResults = () => {
  const navigate = useNavigate();
  const [completedTests, setCompletedTests] = useState([]);

  useEffect(() => {
    // localStorage'dan tüm test ilerlemelerini al
    const userProgress = JSON.parse(localStorage.getItem('userProgress')) || {};

    // Tamamlanmış testleri filtrele
    const completedTests = Object.entries(userProgress)
      .filter(([testCode, progress]) => progress.completed)
      .map(([testCode, progress]) => ({
        testCode,
        score: progress.score,
      }));

    setCompletedTests(completedTests);
  }, []);


  return (
    <div>
      <h1>Test Sonuçlarım</h1>
      {completedTests.length === 0 ? (
        <p>No completed tests yet.</p>
      ) : (
        completedTests.map((test, index) => (
          <Card key={index} style={{ marginBottom: '1rem' }}>
            <h2>Test: {test.testCode}</h2>
            <p>Puan: {test.score}</p>
           
          </Card>
        ))
      )}
    </div>
  );
};

export default MyResults;
