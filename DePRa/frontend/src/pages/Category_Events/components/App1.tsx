import DynamicQuestionList from '@/components/DynamicQuestionList';
import GuidingResponseTips from '@/components/GuidingResponseTips';
import { showImageModal } from '@/components/utils';
import { useModel } from '@umijs/max';
import { Card, Typography, message } from 'antd';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const App1: React.FC = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    message.success("Get to Events' App 2 now.");
    navigate('/categories/events/app2'); // Navigate to the next tab's path
  };
  const { initialState } = useModel('@@initialState');
  const currentUser = initialState?.currentUser?.name || 'Anonymous'; // 默认值为 "Anonymous"
  const carouselRef = useRef<HTMLDivElement>(null);
  const questions = [
    {
      question: (
        <Title level={5}>
          Precise <mark>location</mark> for <span style={{ color: 'green' }}>app features</span>:
        </Title>
      ),
      description: (
        <Text>
          The app accesses your precise location to notify you about nearby events and provide
          navigation or directions to event venues.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          <mark>Camera</mark> for <span style={{ color: 'green' }}>app features</span>:
        </Title>
      ),
      description: (
        <Text>
          The app uses your camera to allow you to capture photos or videos during events and upload
          them to the app. It also supports QR or barcode scanning for event check-ins, ticket
          scanning, or retrieving event-related information.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          <mark>Microphone</mark> for <span style={{ color: 'green' }}>app features</span>:
        </Title>
      ),
      description: (
        <Text>
          The app uses your microphone for functionalities related to event participation, such as
          recording audio during events or providing voice-enabled features.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          Read and modify <mark>contacts</mark> for{' '}
          <span style={{ color: 'green' }}>app features</span>:
        </Title>
      ),
      description: (
        <Text>
          The app accesses your contacts to enable event invitations or sharing, facilitate
          networking by identifying shared contacts or connections, and add or update event-related
          contact entries.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          Read and modify <mark>calendars</mark> for{' '}
          <span style={{ color: 'green' }}>app features</span>:
        </Title>
      ),
      description: (
        <Text>
          The app accesses your calendar to allow you to schedule events directly, manage and
          synchronize events, and provide notifications or reminders for upcoming events.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          Read and modify <mark>external storage</mark> for{' '}
          <span style={{ color: 'green' }}>app features</span>:
        </Title>
      ),
      description: (
        <Text>
          The app accesses your external storage to capture and store event-related images, videos,
          or audio. It also allows you to upload or access existing media files from external
          storage for sharing or including in event-related content.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          <mark>Body sensor</mark> and <mark>activity data</mark> for{' '}
          <span style={{ color: 'green' }}>app features</span>:
        </Title>
      ),
      description: (
        <Text>
          The app accesses your body sensor and activity data to track physical activity levels
          (e.g., steps, heart rate) during event participation, dynamically requesting this
          information as needed.
        </Text>
      ),
    },
    {
      question: "What category do you think this app should belong to?",
      description: " "
    }
  ];

  return (
    <div>
      <Card>
        <div
          style={{
            position: 'relative',
            // overflow: 'hidden',
            width: '100%',
            // margin: '0 auto',
          }}
        >
          {/* 小标题 */}
          <div style={{ textAlign: 'left', marginBottom: '2px' }}>
            <h2 style={{ margin: 0, fontSize: '18px' }}>
              <img
                src={'/icons/Events-MyEventApp.webp'}
                alt="Icon 1"
                style={{ width: 30, borderRadius: '6px', marginLeft: 0, marginRight: 8 }}
              />
              My Event App
            </h2>
          </div>

          {/* 图片滑动区域 */}
          <div
            // ref={carouselRef}
            style={{
              display: 'flex',
              //   justifyContent: 'space-around', //space-around
              alignItems: 'center',
              gap: '16px',
              overflowX: 'hidden', //scroll
              scrollBehavior: 'smooth',
              padding: '16px 0',
            }}
          >
            {[
              { src: '/images/Events/MyEventApp/image1.webp' },
              { src: '/images/Events/MyEventApp/image2.webp' },
              { src: '/images/Events/MyEventApp/image3.webp' },
              { src: '/images/Events/MyEventApp/image4.webp' },
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
            Use this App to access your event inserting the event code provided by the organization.
            <br />
            <br />
            Using My Event App you will be able to:
            <br />
            &gt; Browse information about the agenda, speakers, and the event in general;
            <br />
            &gt; Stay up to date with push-notifications;
            <br />
            &gt; Provide feedback;
            <br />
            &gt; Engage with the event by using features like live polling, ask a question and a
            collaborative wordcloud;
            <br />
            &gt; Interact with other participants by sharing your thoughts and pictures in a common
            event feed, building your networking and exchanging private messages.
            <br />
            &gt; Take notes and send them to your e-mail;
            <br />
            &gt; Ease your check-in process by having a QR-Code directly in your App
            <br />
            <br />
            Whenever you want to access a different event, your information will be stored on your
            phone for later access.
          </p>
        </div>
      </Card>
      {/* <Divider style={{ borderColor: 'blue' }} orientation="center">
        
      </Divider> */}
      <GuidingResponseTips />
      <Card>
        <DynamicQuestionList
          questions={questions}
          currentUser={currentUser}
          appNumber={1}
          tableName="Events"
          onSubmitSuccess={handleNext}
        />
      </Card>
    </div>
  );
};

export default App1;
