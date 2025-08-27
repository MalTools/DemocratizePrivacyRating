import DynamicQuestionList from '@/components/DynamicQuestionList';
import GuidingResponseTips from '@/components/GuidingResponseTips';
import { showImageModal } from '@/components/utils';
import { useModel } from '@umijs/max';
import { Card, Tooltip, Typography, message } from 'antd';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const App1: React.FC = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    message.success("Get to Social's App 2 now.");
    navigate('/categories/social/app2'); // Navigate to the next tab's path
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
          The app accesses your precise location to help you find nearby JCI events or programs and
          facilitate connections by identifying nearby users.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          Precise <mark>location</mark> for <span style={{ color: 'purple' }}>analytics</span>{' '}
          related uses:
        </Title>
      ),
      description: (
        <Text>
          The app collects location data to analyze user engagement as part of its analytics
          processes.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          Precise <mark>location</mark> for <span style={{ color: 'blue' }}>payment</span> related
          services:
        </Title>
      ),
      description: (
        <Text>
          The app uses your location during payment transactions for purposes such as fraud
          detection, regulatory compliance, and providing geographical context for users and
          merchants.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          <mark>Camera</mark> for <span style={{ color: 'green' }}>app features</span> (profile
          pictures, event check-ins):
        </Title>
      ),
      description: (
        <Text>
          The app accesses your camera to let you take or upload profile pictures, capture photos or
          videos to share within the app, and scan codes for event check-ins or connecting with
          other members.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          Read and modify <mark>external storage</mark> for{' '}
          <span style={{ color: 'green' }}>app features</span> (media sharing, caching):
        </Title>
      ),
      description: (
        <Text>
          The app accesses your external storage to upload photos or videos to share with the
          community, save media from the app to your device, and display multimedia content through
          thumbnail generation and caching.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          Read and modify <mark>external storage</mark> for third-party services (temporary data):
        </Title>
      ),
      description: (
        <Text>
          The app integrates{' '}
          <Tooltip title="Third-party SDKs (Software Development Kits) are tools or libraries provided by external companies to add functionality to an app, such as payment processing, analytics, or advertisements.">
            <span style={{ textDecoration: 'underline dashed' }}>third-party SDKs</span>
          </Tooltip>
          (e.g., PayPal) that may use external storage to handle temporary data.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          <mark>Microphone</mark> for <span style={{ color: 'green' }}>app features</span> :
        </Title>
      ),
      description: (
        <Text>
          The app accesses audio recording capabilities for self-services like voice-based messages
          or participation in audio-based chatrooms.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          Device-specific <mark>identifiers</mark> for{' '}
          <span style={{ color: 'green' }}>app features</span> (session management):
        </Title>
      ),
      description: (
        <Text>
          The app uses{' '}
          <Tooltip title="Device-specific identifiers are unique codes that uniquely identify your device or SIM.">
            <span style={{ textDecoration: 'underline dashed' }}>device-specific identifiers</span>
          </Tooltip>{' '}
          (e.g.,{' '}
          <Tooltip title="International Mobile Equipment Identity">
            <span style={{ textDecoration: 'underline dashed' }}>IMEI</span>
          </Tooltip>
          ,{' '}
          <Tooltip title="International Mobile Subscriber Identity">
            <span style={{ textDecoration: 'underline dashed' }}>IMSI</span>
          </Tooltip>
          , or SIM serial numbers) to ensure that a user's session is tied to a specific device or
          user account.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          Device-specific <mark>identifiers</mark> for{' '}
          <span style={{ color: 'blue' }}>payment</span> related services (security, session
          recovery):
        </Title>
      ),
      description: (
        <Text>
          The app accesses device-specific identifiers to facilitate payment services, such as
          transaction logs, security checks, or session recovery.
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
                src={'/icons/Social-JCI.webp'}
                alt="Icon 1"
                style={{ width: 30, borderRadius: '6px', marginLeft: 0, marginRight: 8 }}
              />
              JCI - Virtual Community
            </h2>
          </div>

          {/* 图片滑动区域 */}
          <div
            // ref={carouselRef}
            style={{
              display: 'flex',
              // justifyContent: 'space-around', //space-around
              alignItems: 'center',
              gap: '2px',
              overflowX: 'hidden', //scroll
              scrollBehavior: 'smooth',
              padding: '16px 0',
            }}
          >
            {[
              { src: '/images/Social/JCI/image1.webp' },
              { src: '/images/Social/JCI/image2.webp' },
              { src: '/images/Social/JCI/image3.webp' },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  width: '350px',
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
            Developing Leaders for a Changing World.
            <br />
            Engage with all your JCI connections in one app. Now you have a single contact point to
            connect with members across the world, engage in global events and utilize programs.
            Stay in the know with easy access across all your devices. <br />
            <br />
            Instantly connect <br />
            Browse the profiles of fellow JCI members <br />
            Befriend new members and add them to your friends list <br />
            Secure in-app messaging <br />
            Create groups with multiple members <br />
            Start a conversation with others without ever having to leave the app <br />
            Connection opportunities and enormous discoveries a click away <br />
            Find new JCI programs and events to participate in from the comfort of your mobile
            device <br />
            Access to products like the Global Leadership Masterclasses and level-up your
            entrepreneurial skills <br />
            Sign up for courses and events all in one digital space
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
          tableName="social"
          onSubmitSuccess={handleNext}
        />
      </Card>
    </div>
  );
};

export default App1;
