import DynamicQuestionList from '@/components/DynamicQuestionList';
import GuidingResponseTips from '@/components/GuidingResponseTips';
import ScrollImages from '@/components/ScrollImages';
import { showImageModal } from '@/components/utils';
import { useModel } from '@umijs/max';
import { Card, Typography, message } from 'antd';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const App3: React.FC = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    message.success("Get to Events' App 1 now.");
    navigate('/categories/events/app1'); // Navigate to the next tab's path
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
          The app uses your precise location to localize content, match users in chat rooms or
          games, and provide location-specific app functionalities.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          Precise <mark>location</mark> for <span style={{ color: '#1890ff' }}>advertising</span>{' '}
          related services:
        </Title>
      ),
      description: (
        <Text>
          The app accesses your location data to deliver personalized advertisements, including
          location-based ads tailored to your geographic region.
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
          The app uses your camera to enable capturing photos or videos for sharing in chat rooms,
          live streams, or parties, and for enabling video calls or AR-based interactive games.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          <mark>Camera</mark> for <span style={{ color: '#1890ff' }}>advertising</span> related
          services:
        </Title>
      ),
      description: (
        <Text>
          The app accesses your camera to provide AR-enhanced advertisements and personalized ad
          experiences through advertising libraries.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          <mark>Contacts</mark> for <span style={{ color: 'green' }}>app features</span>:
        </Title>
      ),
      description: (
        <Text>
          The app accesses your contacts to provide functionality for contacting with other users,
          though the specific purpose is not explicitly clear (due to insufficient context in the
          code).
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
          The app accesses your calendar to provide functionalities related to scheduling events or
          reminders, though the exact purpose is not specified (due to insufficient context in the
          code).
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
          The app accesses your microphone for real-time voice interaction, enabling voice-based
          features or audio-enhanced games.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          <mark>Microphone</mark> for <span style={{ color: '#1890ff' }}>advertising</span> related
          services:
        </Title>
      ),
      description: (
        <Text>
          The app uses your microphone to support voice-interactive advertisements as part of its
          advertising features.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          <mark>Accounts</mark> for <span style={{ color: 'green' }}>app features</span>{' '}
          (authentication, account management):
        </Title>
      ),
      description: (
        <Text>
          The app accesses your account information to simplify login or sign-up processes and
          manage accounts, such as fetching existing accounts on your device.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          <mark>Accounts</mark> for <span style={{ color: '#1890ff' }}>analytics</span> related
          uses:
        </Title>
      ),
      description: (
        <Text>
          The app uses your account information to associate analytics data with specific users or
          accounts for tracking and analysis purposes.
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
                src={'/icons/Social-Hago.webp'}
                alt="Icon 1"
                style={{ width: 30, borderRadius: '6px', marginLeft: 0, marginRight: 8 }}
              />
              Hago- Party, Chat & Games
            </h2>
          </div>

          {/* 图片滑动区域 */}
          <div
            ref={carouselRef}
            style={{
              display: 'flex',
              justifyContent: 'space-around', //space-around
              alignItems: 'center',
              gap: '16px',
              overflowX: 'hidden', //scroll
              scrollBehavior: 'smooth',
              padding: '16px 0',
            }}
          >
            {[
              { src: '/images/Social/Hago/image1.webp' },
              { src: '/images/Social/Hago/image2.webp' },
              { src: '/images/Social/Hago/image3.webp' },
              { src: '/images/Social/Hago/image4.webp' },
              { src: '/images/Social/Hago/image5.webp' },
              { src: '/images/Social/Hago/image6.webp' },
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
          <ScrollImages carouselRef={carouselRef} />
        </div>

        {/* 描述文字 */}
        <div style={{ marginTop: '2px', textAlign: 'left', padding: '0 16px' }}>
          <Title level={4}>About this app:</Title>
          <p>
            Hago provides you a way to party online with friends. Download Hago to enjoy chat rooms,
            online party games, live streams and have unlimited fun. Join Hago to have a good online
            party and hangout with friends anytime anywhere. <br />
            <br />
            [Have A Good Online Party]
            <br />
            Hago is a best place for you to have online party with friends. Karaoke, gossip,
            wedding, or birthday parties, choose any theme you like. Great chance to surprise your
            friends with amazing gifts like cake, rose, crown etc. <br />
            <br />
            [Watch live streams]
            <br /> Check out talented streamers on Hago. Singing, dancing, makeup and more! <br />
            <br />
            [Group Voice Chat Room] Join group voice chat room and hang out with friends. You can
            create/choose the theme of your room according to your interests. Come here to have a
            voice chat party! <br />
            <br />
            [Online Party Games] <br />
            Looking for more indoor entertainment? Hago provides online party games for you and your
            friends to have a fun night. <br />
            <br />
            [200+ Mini Games] <br />
            Hago has more than 200 mini games for you and your friends to play. Whether you&#39;re
            looking for Ghost dorm, ludo, brain teaser or you just want to chill, we&#39;ve got you
            covered. <br />
          </p>
        </div>
      </Card>
      <GuidingResponseTips />
      <Card>
        <DynamicQuestionList
          questions={questions}
          currentUser={currentUser}
          appNumber={3}
          tableName="social"
          onSubmitSuccess={handleNext}
        />
      </Card>
    </div>
  );
};

export default App3;
