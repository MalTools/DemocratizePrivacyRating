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
    message.success("Get to VPN Proxy Tools' App 2 now.");
    navigate('/categories/tools/vpn-tools/app2'); // Navigate to the next tab's path
  };
  const { initialState } = useModel('@@initialState');
  const currentUser = initialState?.currentUser?.name || 'Anonymous'; // 默认值为 "Anonymous"
  const carouselRef = useRef<HTMLDivElement>(null);
  const questions = [
    {
      question: (
        <Title level={5}>
          Precise <mark>location</mark> for{' '}
          <span style={{ color: '#1890ff' }}>third-party services</span> (notifications, ads,
          analytics):
        </Title>
      ),
      description: (
        <Text>
          The app accesses your precise location data primarily through third-party SDKs (e.g.,
          Umeng, Facebook) for purposes such as targeted notifications, advertisements, and
          analytics.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          <mark>Camera</mark> for <span style={{ color: 'green' }}>app features</span> (QR code
          scanning):
        </Title>
      ),
      description: (
        <Text>
          The app accesses your camera to enable QR code scanning, which may be used for VPN server
          configurations or other app-related setups.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          Read and modify <mark>external storage</mark> for{' '}
          <span style={{ color: 'green' }}>app features</span> (saving and sharing content):
        </Title>
      ),
      description: (
        <Text>
          The app accesses your external storage to allow you to save and share app-related content,
          such as QR codes, tutorial images, or feedback attachments.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          Read and modify <mark>external storage</mark> for{' '}
          <span style={{ color: '#1890ff' }}>third-party services</span> (logs, analytics):
        </Title>
      ),
      description: (
        <Text>
          The app accesses external storage to store logs, temporary files, or cached data for
          analytics purposes, as well as for managing notifications or device-specific data for push
          notification services.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          <mark>Phone status and identifiers</mark> for{' '}
          <span style={{ color: 'green' }}>app features</span> (VPN accounts, subscriptions):
        </Title>
      ),
      description: (
        <Text>
          The app accesses your phone status and identifiers to associate VPN accounts with specific
          devices, enabling functionalities like subscriptions and licenses.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          <mark>Phone status and identifiers</mark> for{' '}
          <span style={{ color: 'purple' }}>analytics and diagnosis</span> purposes:
        </Title>
      ),
      description: (
        <Text>
          The app uses your phone status and identifiers to track user behavior, generate usage
          metrics, and support error reporting for analytics and diagnosis purposes.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          <mark>Phone status and identifiers</mark> for{' '}
          <span style={{ color: 'blue' }}>payment security</span>:
        </Title>
      ),
      description: (
        <Text>
          The app uses device-specific identifiers to ensure secure transactions by associating them
          with a unique device ID.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          <mark>Phone status and identifiers</mark> for{' '}
          <span style={{ color: '#1890ff' }}>personalization</span> (push notifications):
        </Title>
      ),
      description: (
        <Text>
          The app uses phone status data to deliver personalized push notifications tailored to your
          device and preferences.
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
                src={'/icons/Tools-SoExpress.webp'}
                alt="Icon 1"
                style={{ width: 30, borderRadius: '6px', marginLeft: 0, marginRight: 8 }}
              />
              So Express
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
              { src: '/images/Tools/VPN/SoExpress/image1.webp' },
              { src: '/images/Tools/VPN/SoExpress/image2.webp' },
              { src: '/images/Tools/VPN/SoExpress/image3.webp' },
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
            So express masks your IP address, encrypt your internet traffic, turns public Wi-Fi into
            a private network and helps unblock sites and apps on your Android phone so that you can
            access any restricted content safely and anonymously.
            <br />
            <br />
            Why choose So Express?
            <br />
            Unblock geographically restricted websites.
            <br />
            More than 1000+ stable unlimited high-speed VPN servers all over the world.
            <br />
            Unlimited VPN, No speed limitation, no bandwidth limitation.
            <br />
            Easy to use,One tap to connect fast and stable VPN proxy server.
            <br />
            Secure VPN, protect hotspots security safely and anonymously.
            <br />
            Strict no-logging policy.
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
          tableName="tools_vpn"
          onSubmitSuccess={handleNext}
        />
      </Card>
    </div>
  );
};

export default App1;
