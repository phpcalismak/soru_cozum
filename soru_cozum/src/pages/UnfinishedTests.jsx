// Örneğin UnfinishedTests bileşeni için güncellenmiş kod

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { List, Button } from 'antd';
import { isTestCompleted } from '../utils/storage';
import { loadQuestions } from '../utils/loadQuestions';

const UnfinishedTests = () => {
  const navigate = useNavigate();
  const [unfinishedTests, setUnfinishedTests] = useState([]);

  useEffect(() => {
    const getUnfinishedTests = async () => {
      const testCodes = ['test1', 'test2', 'test3'];
      const tests = [];

      for (const testCode of testCodes) {
        if (!isTestCompleted(testCode)) {
          const questions = await loadQuestions(testCode);
          if (questions) {
            tests.push({ testCode, questions });
          }
        }
      }

      setUnfinishedTests(tests);
    };

    getUnfinishedTests();
  }, []);

  const handleStartTest = (testCode) => {
    navigate(`/test/${testCode}`);
  };

  return (
    <div>
      <h1>Çözülmemiş Testler</h1>
      <List
        dataSource={unfinishedTests} // Veri burada doğru formatlı olmalı
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={<a href={`/test/${item.testCode}`}>{item.testCode}</a>}
              description={`Soru sayısı: ${item.questions.length}`}
            />
            <Button type="primary" onClick={() => handleStartTest(item.testCode)}>
              Teste Başla
            </Button>
          </List.Item>
        )}
      />
    </div>
  );
};

export default UnfinishedTests;
