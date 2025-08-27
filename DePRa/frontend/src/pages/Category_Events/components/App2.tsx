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
    message.success("Get to Translotor Tools' App 1 now.");
    navigate('/categories/tools/translator-tools/app1'); // Navigate to the next tab's path
  };
  const { initialState } = useModel('@@initialState');
  const currentUser = initialState?.currentUser?.name || 'Anonymous'; // 默认值为 "Anonymous"
  const carouselRef = useRef<HTMLDivElement>(null);
  const questions = [
    {
      question: (
        <Title level={5}>
          <mark>Camera</mark> for <span style={{ color: 'green' }}>app features</span>:
        </Title>
      ),
      description: (
        <Text>
          The app accesses your camera for capturing photos for profile pictures or event-related
          images, recording videos for event purposes, and scanning barcodes or QR codes for tasks
          like check-in or ticket validation.
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
          The app accesses your external storage to browse, view, and select photos or videos, edit
          and save media back to your gallery, and handle event-related files, such as exporting
          documents or sharing event materials.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          Read and modify <mark>external storage</mark> for{' '}
          <span style={{ color: 'tomato' }}>social networking</span> (media sharing):
        </Title>
      ),
      description: (
        <Text>
          The app accesses your external storage to enable sharing media to social networks,
          potentially for event promotion or sending invitations.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          <mark>Phone status and identifiers</mark> for{' '}
          <span style={{ color: 'green' }}>app features</span>:
        </Title>
      ),
      description: (
        <Text>
          The app retrieves your phone status and identifiers, such as IMEI, IMSI, or SIM serial
          numbers, to uniquely identify devices or users for account management and personalized
          features.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          <mark>Phone status and identifiers</mark> for{' '}
          <span style={{ color: 'purple' }}>analytics</span> related uses:
        </Title>
      ),
      description: (
        <Text>
          The app accesses your phone status and identifiers to support analytics purposes, such as
          user profiling and engagement tracking, for improving user experiences.
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
                src={'/icons/Events-Letsmeet.webp'}
                alt="Icon 1"
                style={{ width: 30, borderRadius: '6px', marginLeft: 0, marginRight: 8 }}
              />
              Let's Meet
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
              { src: '/images/Events/LetsMeet/image1.webp' },
              { src: '/images/Events/LetsMeet/image2.webp' },
              { src: '/images/Events/LetsMeet/image3.webp' },
              { src: '/images/Events/LetsMeet/image4.webp' },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  height: '360px',
                  flexShrink: 0,
                  textAlign: 'center',
                }}
              >
                <img
                  src={item.src}
                  alt={`Image ${index + 1}`}
                  style={{
                    width: 'auto',
                    height: '100%',
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
      <GuidingResponseTips />
      <Card>
        <DynamicQuestionList
          questions={questions}
          currentUser={currentUser}
          appNumber={2}
          tableName="Events"
          onSubmitSuccess={handleNext}
        />
      </Card>
    </div>
  );
};

export default App2;
