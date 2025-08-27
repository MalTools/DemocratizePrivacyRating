import DynamicQuestionList from '@/components/DynamicQuestionList';
import GuidingResponseTips from '@/components/GuidingResponseTips';
import { showImageModal } from '@/components/utils';
import { useModel } from '@umijs/max';
import { Card, Typography } from 'antd';
import React, { useRef } from 'react';

const { Title, Text } = Typography;

const App1: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const currentUser = initialState?.currentUser?.name || 'Anonymous'; // 默认值为 "Anonymous"
  const carouselRef = useRef<HTMLDivElement>(null);
  const questions = [
    {
      question: (
        <Title level={5}>
          <mark>Phone status</mark> and <mark>device-specific identifiers</mark> for{' '}
          <span style={{ color: 'green' }}>app features</span> (device identification, subscription
          management):
        </Title>
      ),
      description: (
        <Text>
          The app accesses your phone status (e.g., network type) and device-specific identifiers
          (e.g., SIM serial number, phone number) to associate purchases or subscriptions with your
          device and ensure only authorized devices access purchased content.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          <mark>Phone status</mark> and <mark>device-specific identifiers</mark> for{' '}
          <span style={{ color: 'purple' }}>analytics</span> related uses:
        </Title>
      ),
      description: (
        <Text>
          The app collects your phone's network-related data and device-specific identifiers to
          track app performance under different network conditions and understand user behavior
          patterns for optimizing app content.
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
          The app accesses your external storage to allow you to download and store comics or other
          app data. It also supports efficient media handling, such as displaying thumbnails or
          previews of comic pages.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          Read and modify <mark>external storage</mark> for{' '}
          <span style={{ color: '#1890ff' }}>advertising</span> related services:
        </Title>
      ),
      description: (
        <Text>
          The app accesses your external storage to manage ad-related data or logs as part of its
          advertising or marketing functionalities.
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
                src={'/icons/Comics-Tinkle.webp'}
                alt="Icon 1"
                style={{ width: 30, borderRadius: '6px', marginLeft: 0, marginRight: 8 }}
              />
              Tinkle
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
              { src: '/images/Comics/Tinkle/image1.webp' },
              { src: '/images/Comics/Tinkle/image2.webp' },
              { src: '/images/Comics/Tinkle/image3.webp' },
              { src: '/images/Comics/Tinkle/image4.webp' },
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
            Tinkle Comics is now available on a screen near you! The official Tinkle Comics app
            brings alive our most entertaining Tinkle toons, from classic characters like Suppandi,
            Shambu, and Tantri the Mantri, to brand new faces like WingStar, YogYodhas, and the
            students at NOIS! <br />
            <br />
            Tinkle books are filled with fun and entertainment to the brim, all while teaching you
            something new every day! With the Tinkle Comics app, you can now instantly purchase
            Tinkle magazines, books, digests, and more. You can also start a digital subscription
            and get access to hundreds of Tinkle issues from years past. All of this at less than a
            quarter of our market price! That&#39;s not all! You can access all your purchased
            comics across multiple devices with a single user account! <br />
            <br />
            So what are you waiting for? Hop on the Tinkle train for a rollicking time!
            <br />
            <br />
            FEATURES
            <br />
            <br />• New titles added every week <br />• Best-in-the-class reading experience
            <br />
            • Value for money subscription plans
            <br />• Fascinating stories with iconic art
            <br />• Dedicated customer support
            <br />
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
          tableName="comics"
        />
      </Card>
    </div>
  );
};

export default App1;
