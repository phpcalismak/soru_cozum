// src/pages/TestPage.jsx

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Radio, Button, Space, Input } from 'antd';
import { loadQuestions } from '../utils/loadQuestions';
import { saveUserProgress, isTestCompleted } from '../utils/storage';

const TestPage = () => {
  const { testCode } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [value, setValue] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      const questions = await loadQuestions(testCode);
      if (questions) {
        setQuestions(questions);
      } else {
        navigate('/');
      }
    };

    fetchQuestions();
  }, [testCode, navigate]);

  if (isTestCompleted(testCode)) {
    navigate('/'); // Test daha önce tamamlanmışsa ana sayfaya yönlendir
    return null;
  }

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleNext = () => {
    const correctAnswer = questions[currentQuestion].answer;
    if (value === correctAnswer) {
      setScore(score + 1);
    } else {
      setScore(score - 0.25); // 4 yanlış 1 doğruyu götürür
    }

    if (currentQuestion + 1 === questions.length) {
      saveUserProgress(testCode, { completed: true, score });
      navigate(`/result/${testCode}`);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setValue(null); // Yeni soruya geçerken seçimi temizle
    }
  };

  return (
    <div>
      <h1>Test: {testCode}</h1>
      {questions.length > 0 && (
        <div>
          <p>{questions[currentQuestion].question}</p>
          <Radio.Group onChange={onChange} value={value}>
            <Space direction="vertical">
              {questions[currentQuestion].options.map((option, index) => (
                <Radio key={index} value={index}>
                  {option}
                </Radio>
              ))}
             
            </Space>
          </Radio.Group>
          <div style={{ marginTop: 16 }}>
            <Button type="primary" onClick={handleNext}>
              Sıradaki
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestPage;
