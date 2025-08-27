import DynamicQuestionList from '@/components/DynamicQuestionList';
import GuidingResponseTips from '@/components/GuidingResponseTips';
import ScrollImages from '@/components/ScrollImages';
import { useModel } from '@umijs/max';
import { Card, Typography } from 'antd';
import React, { useRef } from 'react';

const { Title, Text } = Typography;

const App2: React.FC = () => {
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
                src={'/icons/Tools-QRandBarcodeScannerAndroid.webp'}
                alt="Icon 1"
                style={{ width: 30, borderRadius: '6px', marginLeft: 0, marginRight: 8 }}
              />
              QR and Barcode Scanner Android
            </h2>
          </div>

          {/* 图片滑动区域 */}
          <div
            ref={carouselRef}
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
              { src: '/images/Tools/Scanner/QRandBarcodeScannerAndroid/image1.webp' },
              { src: '/images/Tools/Scanner/QRandBarcodeScannerAndroid/image2.webp' },
              { src: '/images/Tools/Scanner/QRandBarcodeScannerAndroid/image3.webp' },
              { src: '/images/Tools/Scanner/QRandBarcodeScannerAndroid/image4.webp' },
              { src: '/images/Tools/Scanner/QRandBarcodeScannerAndroid/image5.webp' },
              { src: '/images/Tools/Scanner/QRandBarcodeScannerAndroid/image6.webp' },
              { src: '/images/Tools/Scanner/QRandBarcodeScannerAndroid/image7.webp' },
              { src: '/images/Tools/Scanner/QRandBarcodeScannerAndroid/image8.webp' },
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
                  }}
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
            QR and Barcode Scanner Android format supports:
            <br />- Contacts
            <br />- URLs
            <br />
            - Calendar events
            <br />- Email address
            <br />- Phone number
            <br />- ISBNs
            <br />- WiFi connections information
            <br />
            <br />
            How to use this app?
            <br />- Install the app from the store
            <br />
            - Open the app
            <br />- Grant permissions
            <br />- Scan QR or Bardcodes
            <br />- See the result
          </p>
        </div>
      </Card>
      <GuidingResponseTips />
      <Card>
        <DynamicQuestionList
          questions={questions}
          currentUser={currentUser}
          appNumber={2}
          tableName="tools_scanner"
        />
      </Card>
    </div>
  );
};

export default App2;
