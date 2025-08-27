import DynamicQuestionList from '@/components/DynamicQuestionList';
import GuidingResponseTips from '@/components/GuidingResponseTips';
import { useModel } from '@umijs/max';
import { Card, Typography, message } from 'antd';
import React, { useRef } from 'react';
import { showImageModal } from '@/components/utils';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;


const App2: React.FC = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    message.success("Get to Weather's App 3 now.");
    navigate('/categories/weather/app3'); // Navigate to the next tab's path
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
          The app accesses your precise location to provide accurate, real-time climate risk
          information tailored to your geographic context.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          <mark>Camera</mark> for <span style={{ color: 'green' }}>app features</span> :
        </Title>
      ),
      description: (
        <Text>
          The app accesses your camera to allow you to capture profile images or document climate
          risks and environmental events by taking photos for reporting or visual evidence.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          Read <mark>external storage</mark> for{' '}
          <span style={{ color: 'green' }}>app features</span> :
        </Title>
      ),
      description: (
        <Text>
          The app accesses external storage to let you set custom wallpapers or themes using images
          from your device's gallery, or to upload images for risk reporting or climate-related
          alerts.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          <mark>Contacts</mark> for <span style={{ color: 'green' }}>app features</span> (emergency
          notifications):
        </Title>
      ),
      description: (
        <Text>
          The app accesses your contact list to let you set emergency contacts who can be notified
          or alerted during a climate-related emergency or risk event.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          <mark>Accounts</mark> for <span style={{ color: 'purple' }}>analytics</span> related uses:
        </Title>
      ),
      description: (
        <Text>
          The app accesses your account information to track user interactions or behavior within
          the app for analytics and event tracking purposes.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          <mark>Accounts</mark> for <span style={{ color: 'green' }}>app features</span> (external
          service integration):
        </Title>
      ),
      description: (
        <Text>
          The app accesses your account information to integrate with external services like Google
          or Microsoft, enabling features like calendar syncing or sending alerts to linked
          services.
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
            width: '100%',
          }}
        >
          {/* 小标题 */}
          <div style={{ textAlign: 'left', marginBottom: '2px' }}>
            <h2 style={{ margin: 0, fontSize: '18px' }}>
              <img
                src={'/icons/Weather-Rainbird.webp'}
                alt="Icon 1"
                style={{ width: 30, borderRadius: '6px', marginLeft: 0, marginRight: 8 }}
              />
              Rainbird - climate risk alarm
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
              { src: '/images/Weather/Rainbird/image1.webp' },
              { src: '/images/Weather/Rainbird/image2.webp' },
              { src: '/images/Weather/Rainbird/image3.webp' },
              { src: '/images/Weather/Rainbird/image4.webp' },
              { src: '/images/Weather/Rainbird/image5.webp' },
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
            Company identity, RainbirdGEO, came from a combination of &#39;Rainbird&#39;, which
            announces rain with its cries, and &#39;GEO&#39;, which means both Earth and satellites.
            It analyzes state-of-the-art Earth observation satellites to send forecasts and provides
            services that make it easy to share risk information within/between the communities.{' '}
            <br /> <br />
            Easy functions of &#39;RainbirdGEO&#39; application.
            <br /> <br />* Rain forecast by satellite algorithm
            <br />
            Get &#39;in advance&#39; rain forecast!
            <br />
            RainbirdGEO provides location-based rain forecast alarms with the world-class algorithm
            developed by RainbirdGEO using high-quality data provided by Korean geostationary
            satellites. You can prepare in advance for sudden rainfall.
            <br /> <br />
            * User-directed warning reporting
            <br />
            You can report any warning you find directly through the app. Various warnings such as
            lightning, fire, heat wave, heavy rain, strong wind, shortage of water, and flood can be
            reported. You can also share risk information with other users by adding photos and
            comments.
            <br /> <br />* Various warning notifications near your location <br />
            You can receive notifications of various warnings that are happening around you. You can
            quickly receive notifications from other users&#39; reports, such as sudden fire.
            <br /> <br />* Receive local weather information
            <br />
            You can easily check local weather information through the RainbirdGEO app. Check the
            current local weather now.
            <br />
          </p>
        </div>
      </Card>
      <GuidingResponseTips />
      <Card>
        <DynamicQuestionList
          questions={questions}
          currentUser={currentUser}
          appNumber={2}
          tableName="weather"
          onSubmitSuccess={handleNext}
        />        
      </Card>
    </div>
  );
};

export default App2;
