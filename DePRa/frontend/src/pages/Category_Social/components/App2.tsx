import DynamicQuestionList from '@/components/DynamicQuestionList';
import GuidingResponseTips from '@/components/GuidingResponseTips';
import { showImageModal } from '@/components/utils';
import { useModel } from '@umijs/max';
import { Card, Typography, message } from 'antd';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const App2: React.FC = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    message.success("Get to Social's App 3 now.");
    navigate('/categories/social/app3'); // Navigate to the next tab's path
  };
  const { initialState } = useModel('@@initialState');
  const currentUser = initialState?.currentUser?.name || 'Anonymous'; // 默认值为 "Anonymous"
  const carouselRef = useRef<HTMLDivElement>(null);
  const questions = [
    {
      question: (
        <Title level={5}>
          Send and read <mark>SMS</mark> for <span style={{ color: 'green' }}>app features</span> :
        </Title>
      ),
      description: (
        <Text>
          The app accesses your SMS functionality to allow you to send and read SMS messages as part
          of its core messaging services.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          <mark>Device identifiers</mark> for <span style={{ color: 'green' }}>app features</span>{' '}
          (SIM selection, message delivery):
        </Title>
      ),
      description: (
        <Text>
          The app accesses your phone identifiers (e.g., SIM identifiers) to enable SIM selection
          and ensure proper message delivery for its messaging functionality.
        </Text>
      ),
    },
  ];

  return (
    <div>
      <Card>
        <div
          style={{
            position: 'relative',
            width: '100%',
          }}
        >
          {/* 小标题 */}
          <div style={{ textAlign: 'left', marginBottom: '2px' }}>
            <h2 style={{ margin: 0, fontSize: '18px' }}>
              <img
                src={'/icons/Social-Messages.webp'}
                alt="Icon 1"
                style={{ width: 30, borderRadius: '6px', marginLeft: 0, marginRight: 8 }}
              />
              Messages: MERI DAIRY SMS
            </h2>
          </div>

          {/* 图片滑动区域 */}
          <div
            // ref={carouselRef}
            style={{
              display: 'flex',
              // justifyContent: 'space-around', //space-around
              alignItems: 'center',
              gap: '16px',
              overflowX: 'hidden', //scroll
              scrollBehavior: 'smooth',
              padding: '16px 0',
            }}
          >
            {[
              { src: '/images/Social/Messages/image1.webp' },
              { src: '/images/Social/Messages/image2.webp' },
              { src: '/images/Social/Messages/image3.webp' },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  width: '180px',
                  flexShrink: 0,
                  textAlign: 'center',
                }}
              >
                <img
                  src={item.src}
                  alt={`Image ${index + 1}`}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
                    cursor: 'pointer',
                  }}
                  onClick={() => showImageModal(item.src)}
                />
              </div>
            ))}
          </div>
          {/* <ScrollImages carouselRef={carouselRef} /> */}
        </div>

        {/* 描述文字 */}
        <div style={{ marginTop: '2px', textAlign: 'left', padding: '0 16px' }}>
          <Title level={4}>About this app:</Title>
          <p>
            Messages: Meri Dairy App can connect with people everywhere, send SMS, text message
            without internet connection. Send photos or Free Messages to all your messaging and
            social apps from one text messaging app. Fast texting, easy chat and privacy messaging!
            <br />
            <br />
            Tag a color to a thread <br />
            Filter with Color thread
          </p>
        </div>
      </Card>
      <GuidingResponseTips />
      <Card>
        <DynamicQuestionList
          questions={questions}
          currentUser={currentUser}
          appNumber={2}
          tableName="social"
          onSubmitSuccess={handleNext}
        />
      </Card>
    </div>
  );
};

export default App2;
