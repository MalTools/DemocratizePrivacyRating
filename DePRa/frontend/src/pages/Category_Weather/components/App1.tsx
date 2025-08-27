import DynamicQuestionList from '@/components/DynamicQuestionList';
import GuidingResponseTips from '@/components/GuidingResponseTips';
import ScrollImages from '@/components/ScrollImages';
import { showImageModal } from '@/components/utils';
import { useModel } from '@umijs/max';
import { Card, Typography, message } from 'antd';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;


const App1: React.FC = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    message.success("Get to Weather's App 2 now.");
    navigate('/categories/weather/app2'); // Navigate to the next tab's path
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
          The app accesses your precise location for weather updates. Examples include real-time
          conditions and personalized forecasts.
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
        <Text>The app accesses your precise location to deliver personalized advertisements.</Text>
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
          The app uses your precise location for analytic purposes, such as analyzing app usage
          patterns in different geographic regions.
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
          The app accesses your camera to support interactive advertising features, such as
          augmented reality (AR).
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
          The app accesses your camera to allow users to capture and share weather-related content,
          such as photos with weather overlays.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          Read <mark>external storage</mark> for{' '}
          <span style={{ color: 'green' }}>app features</span>:
        </Title>
      ),
      description: (
        <Text>
          The app accesses external storage to let users customize widget themes, weather icons, or
          wallpapers by selecting assets stored in external storage.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          Read <mark>external storage</mark> for{' '}
          <span style={{ color: '#1890ff' }}>advertising</span> related services:
        </Title>
      ),
      description: (
        <Text>
          The app accesses external storage to load cached ad-related media, such as images or
          videos, for advertisement purposes.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          <mark>Calendar</mark> for <span style={{ color: 'green' }}>app features</span>:
        </Title>
      ),
      description: (
        <Text>
          The app accesses your calendar to display upcoming events on its widget, providing an
          overview of your daily schedule alongside weather information.
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
            // overflow: 'hidden',
            width: '100%',
            // margin: '0 auto',
          }}
        >
          {/* 小标题 */}
          <div style={{ textAlign: 'left', marginBottom: '2px' }}>
            <h2 style={{ margin: 0, fontSize: '18px' }}>
              <img
                src={'/icons/Weather-Transparentclockandweather.webp'}
                alt="Icon 1"
                style={{ width: 30, borderRadius: '6px', marginLeft: 0, marginRight: 8 }}
              />
              Transparent clock and weather
            </h2>
          </div>

          {/* 图片滑动区域 */}
          <div
            ref={carouselRef}
            style={{
              display: 'flex',
              justifyContent: 'space-around', //space-around
              alignItems: 'center',
              gap: '10px',
              overflowX: 'hidden', //scroll
              scrollBehavior: 'smooth',
              padding: '16px 0',
            }}
          >
            {[
              { src: '/images/Weather/Transparentclockandweather/image1.webp' },
              { src: '/images/Weather/Transparentclockandweather/image2.webp' },
              { src: '/images/Weather/Transparentclockandweather/image3.webp' },
              { src: '/images/Weather/Transparentclockandweather/image4.webp' },
              { src: '/images/Weather/Transparentclockandweather/image5.webp' },
              { src: '/images/Weather/Transparentclockandweather/image6.webp' },
              { src: '/images/Weather/Transparentclockandweather/image7.webp' },
              { src: '/images/Weather/Transparentclockandweather/image8.webp' },
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
            🌤 <b>24x7 Weather Forecasts</b>
            <br />
            Stay updated with our detailed hourly weather forecasts. Check the latest weather
            conditions at any time, anywhere. From hourly to 15-day forecasts, we&#39;ve got you
            covered.
          </p>
          <p>
            ⚡ <b>Severe Weather Alerts</b>
            <br />
            Stay safe with all types of severe weather alerts. Our app instantly notifies you of
            potential severe weather, upcoming weather conditions, alerts for high or low
            temperatures, alerts for strong winds and more.
          </p>
          <p>
            🌎 <b>Radar Maps</b>
            <br />
            Track hazardous weather conditions with our radar maps. Switch between radar,
            high-resolution satellite, and rainfall, temperature and other maps for real-time
            tracking data.
          </p>
          <p>
            🌦 <b>Weather Forecasting</b>
            <br />
            We support live weather forecasts for global locations and provide detailed 7 to 15-day
            weather information. Get insights on rainfall forecasts, &#39;feels like&#39;
            temperatures, air quality index (AQI), UV index, humidity, visibility, wind direction,
            wind speed, and pressure changes.
          </p>
          <p>
            🏞 <b>Hourly Activity Forecast</b>
            <br />
            Planning an outdoor adventure? Our app&#39;s unique Indices feature provides weather
            suitability for popular outdoor activities like hiking, running, camping, kayaking,
            fishing, and hunting for the next 48 hours. Make the most of your outdoor pursuits with
            our easy to use weather insights.
          </p>
          <p>
            📱 <b>Customizable Widgets</b>
            <br />
            Enhance your home screen with our customizable widgets. Get weather updates right on
            your home screen with our beautiful weather &amp; clock widgets. Choose from a variety
            of styles and sizes to match your aesthetic.
          </p>
          <p>
            🌙 <b>Sun &amp; Moon Tracker</b>
            <br />
            Stay in sync with nature with our dynamic display of sunrise and sunset times.
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
          tableName="weather"
          onSubmitSuccess={handleNext}
        />
      </Card>
    </div>
  );
};

export default App1;
