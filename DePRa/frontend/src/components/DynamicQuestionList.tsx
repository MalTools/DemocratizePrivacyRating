import { Button, List, message, Modal } from 'antd';
import React, { useState } from 'react';
import QuestionItem from './QuestionItem';
import QuestionItemAttention from './QuestionItemAttention';
// import Card from 'antd/es/card/Card';
import SubmitResult from './SubmitResult';
import { extractTextFromElement } from './utils';

interface Question {
  question: React.ReactNode | string;
  description: React.ReactNode | string;
}

interface Answer {
  answer: number;
  moreInfo?: string;
}

interface DynamicQuestionListProps {
  questions: Question[];
  currentUser: string;
  appNumber: number;
  tableName: string;
  onSubmitSuccess?: () => void; //可选自定义行为
}

const DynamicQuestionList: React.FC<DynamicQuestionListProps> = ({
  questions,
  currentUser,
  appNumber,
  tableName,
  onSubmitSuccess, //可选自定义行为
}) => {
  const [answers, setAnswers] = useState<{ [key: number]: Answer }>({});
  const [complete, setComplete] = useState(false);
  const handleOk = () => {
    setComplete(false);
  };

  const handleCancel = () => {
    setComplete(false);
  };

  const handleAnswerChange = (index: number, value: Answer) => {
    setAnswers((prev) => ({
      ...prev,
      [index]: value,
    }));
  };

  const defaultSuccessHandler = () => {
    console.log('Survey was successfully submitted!');
    message.success('The answers were successfully submitted!');
    
  };

  const handleSubmit = async () => {
    // console.log('questions.length=',  questions.length)
    if (questions.length === 0) {
      message.error('问题列表不能为空！');
      return;
    }

    const questionAnswerList = questions.map((q, index) => ({
      question: extractTextFromElement(q.question),
      question_number: index + 1,
      answer: answers[index]?.answer || 0,
      moreInfo: answers[index]?.moreInfo || undefined,
    }));

    const payload = {
      name: currentUser || 'Anonymous',
      status: tableName,
      app_number: appNumber,
      responses: questionAnswerList,
    };

    console.log('提交的内容:', payload);

    try {
      const response = await fetch('http://privacyrating.cloud:8000/api/submit_questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // message.success('Successfully submitted!');
        setComplete(true);
        (onSubmitSuccess || defaultSuccessHandler)(); // 如果传入了回调，优先调用传入的；否则使用默认行为
      } else {
        const result = await response.json();
        message.error(`Failed: ${result.message}`);
      }
    } catch (error) {
      console.error('提交错误:', error);
      message.error('Opps！Something is wrong...');
    }
  };

  return (
    <>
      <List
        bordered
        itemLayout="vertical"
        dataSource={questions}
        renderItem={(question, index) => 
          {
          // Check the type of `question`
          if (typeof question.question === 'string') {
            // If the type is a string, render <QuestionItemAttention>
            return (
              <QuestionItemAttention
                question={question.question}
                // description={question.description}
                index={index}
                onAnswerChange={handleAnswerChange}
              />
            );
          } else {
            // Otherwise, render <QuestionItem>
            return (
              <QuestionItem
                question={question.question}
                description={question.description}
                index={index}
                onAnswerChange={handleAnswerChange}
              />
            );
          }
        }}
        // (
        //   <QuestionItem
        //     question={question.question}
        //     description={question.description}
        //     index={index}
        //     onAnswerChange={handleAnswerChange}
        //   />
        // )}
      />
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <Button type="primary" onClick={handleSubmit}>
          Next
        </Button>
        <Modal
        centered
        title="Study Complete"
        open={complete} onOk={handleOk} onCancel={handleCancel}
      >
        <SubmitResult />  {/* Your SubmitResult component inside the modal */}
      </Modal>
        {/* {complete && <SubmitResult />} */}
      </div>
    </>
  );
};

export default DynamicQuestionList;
