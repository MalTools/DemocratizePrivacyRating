import DynamicQuestionList from '@/components/DynamicQuestionList';
import GuidingResponseTips from '@/components/GuidingResponseTips';
import { useModel } from '@umijs/max';
import { Card, Tooltip, Typography, message } from 'antd';
import React, { useRef } from 'react';
import { showImageModal } from '@/components/utils';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const App3: React.FC = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    message.success("Get to Social's App 1 now.");
    navigate('/categories/social/app1'); // Navigate to the next tab's path
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
          The app uses your precise location to deliver accurate and localized weather forecasts,
          provide updates for travel or commuting routes, and display your location on a map.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          <mark>Camera</mark> for <span style={{ color: 'magenta' }}>identity authentication</span>{' '}
          services:
        </Title>
      ),
      description: (
        <Text>
          The app accesses your camera during authentication processes, such as scanning QR codes or
          capturing images for identity verification purposes.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          <mark>Camera</mark> for <span style={{ color: 'green' }}>customization</span> (avatars,
          brightness):
        </Title>
      ),
      description: (
        <Text>
          The app accesses your camera for customization, such as capturing avatars or adjusting
          brightness based on ambient conditions.
        </Text>
      ),
    },

    {
      question: (
        <Title level={5}>
          <mark>Accounts</mark> for{' '}
          <span style={{ color: 'magenta' }}>identity authentication</span> services:
        </Title>
      ),
      description: (
        <Text>
          The app accesses your account information to authenticate your identity, integrating with
          services like Microsoft accounts (e.g., Azure Active Directory) to ensure secure login and
          access control. Also, the app supports{' '}
          <Tooltip title="Single Sign-On (SSO) allows you to log in once and access multiple apps or services without needing to log in again.">
            <span style={{ textDecoration: 'underline dashed' }}>Single Sign-On (SSO)</span>
          </Tooltip>
          , allowing you to log in seamlessly without repeated authentication prompts.
        </Text>
      ),
    },

    {
      question: (
        <Title level={5}>
          <mark>Phone status</mark> for{' '}
          <span style={{ color: 'purple' }}>analytics and diagnostics</span> (error reporting,
          debugging):
        </Title>
      ),
      description: (
        <Text>
          The app accesses information about your phone's network status (e.g., whether you are on
          Wi-Fi or cellular, your carrier name, and signal strength) to collect carrier details or
          network conditions for telemetry, error reporting, or debugging purposes.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          <mark>Phone status</mark> for <span style={{ color: 'green' }}>app features</span>{' '}
          (network optimization):
        </Title>
      ),
      description: (
        <Text>
          The app determines the current network type (e.g., cellular, Wi-Fi) to optimize data usage
          and ensure connectivity for downloading weather updates.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          <mark>Microphone</mark> for <span style={{ color: 'green' }}>app features</span> (voice
          interactions):
        </Title>
      ),
      description: (
        <Text>
          The app accesses your microphone to enable hands-free interactions, such as voice
          commands, assistant integration, or voice-to-text functionality.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          <mark>Microphone</mark> for{' '}
          <span style={{ color: 'purple' }}>analytics and diagnostics</span> (interaction analysis,
          debugging):
        </Title>
      ),
      description: (
        <Text>
          The app may analyze audio recordings to understand user interactions, debug issues, or
          improve functionality based on real-world usage scenarios.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          Read <mark>external storage</mark> for{' '}
          <span style={{ color: 'green' }}>app features</span> (wallpaper customization):
        </Title>
      ),
      description: (
        <Text>
          The app accesses external storage to support wallpaper-related features, such as setting
          weather-themed wallpapers, using user-provided images, or dynamically updating wallpapers
          based on weather conditions.
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
                src={'/icons/Weather-MSNWeather.webp'}
                alt="Icon 1"
                style={{ width: 30, borderRadius: '6px', marginLeft: 0, marginRight: 8 }}
              />
              MSN Weather - Forecast & Maps
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
              { src: '/images/Weather/MSNWeather/image1.webp' },
              { src: '/images/Weather/MSNWeather/image2.webp' },
              { src: '/images/Weather/MSNWeather/image3.webp' },
              { src: '/images/Weather/MSNWeather/image4.webp' },
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
            Best way to plan your day <br />
            <br />
            Get the latest weather conditions, whether you&#39;re hitting the slopes, the beach or
            simply checking the forecast for your commute. See accurate hourly, 5-day, and 10-day
            forecasts for wherever you&#39;re going or whatever you’re doing.
            <br />
            <br />
            DETAILED CONDITIONS
            <br />
            Quickly access the day drill down, hourly, daily, and 10-day forecasts, and historical
            weather averages. Check wind, visibility, humidity, barometer, dew point, and chance of
            precipitation. See sunrise, sunset, moon phase, and UV index.
            <br />
            <br />
            INTERACTIVE MAPS
            <br />
            Go deep in detail with temperature, radar observation, radar forecast, precipitation,
            cloud and satellite maps.
            <br />
            <br />
            MULTIPLE CITIES
            <br />
            Track current weather in all the locations you care about most. Add multiple cities to
            your favorites for quick access. Sign in to save your preferences.
            <br />
            <br />
            SEVERE WEATHER ALERTS
            <br />
            Stay informed with timely notifications to help you prepare for severe weather.
            <br />
            <br />
            AVAILABLE ANYWHERE
            <br />
            Automatically sync your favorite cities across MSN Weather on the web and your mobile
            apps for quick access to the places you care about.
            <br />
          </p>
        </div>
      </Card>
      <GuidingResponseTips />
      <Card>
        <DynamicQuestionList
          questions={questions}
          currentUser={currentUser}
          appNumber={3}
          tableName="weather"
          onSubmitSuccess={handleNext}
        />
      </Card>
    </div>
  );
};

export default App3;
