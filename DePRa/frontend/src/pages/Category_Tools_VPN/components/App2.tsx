import DynamicQuestionList from '@/components/DynamicQuestionList';
import GuidingResponseTips from '@/components/GuidingResponseTips';
import ScrollImages from '@/components/ScrollImages';
import { showImageModal } from '@/components/utils';
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
          <mark>Camera</mark> for <span style={{ color: 'green' }}>app features</span> (image
          uploads, QR code scanning):
        </Title>
      ),
      description: (
        <Text>
          The app accesses your camera to enable functionality for uploading images directly from
          the browser and scanning QR codes or barcodes for enhanced user interaction.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          Read and modify <mark>external storage</mark> for{' '}
          <span style={{ color: 'green' }}>app features</span> (file management, QR codes, cache
          management):
        </Title>
      ),
      description: (
        <Text>
          The app accesses your external storage for file management, such as uploading and
          downloading files via the browser, enabling QR code scanning, and managing browser-related
          cache or temporary files for improved performance.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          Read and modify <mark>external storage</mark> for{' '}
          <span style={{ color: '#1890ff' }}>advertisement</span> related services:
        </Title>
      ),
      description: (
        <Text>
          The app accesses external storage to load media assets or configuration files required for
          displaying advertisements.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          Read and modify <mark>external storage</mark> for{' '}
          <span style={{ color: 'blue' }}>development aid</span> purposes (cached files,
          configurations):
        </Title>
      ),
      description: (
        <Text>
          The app accesses external storage to manage cached files or configurations used for
          development-related features, helping improve app stability and performance during updates
          or debugging.
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
                src={'/icons/Tools-FastProxyBrowser.webp'}
                alt="Icon 1"
                style={{ width: 30, borderRadius: '6px', marginLeft: 0, marginRight: 8 }}
              />
              Fast Proxy Browser
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
              { src: '/images/Tools/VPN/FastProxyBrowser/image1.webp' },
              { src: '/images/Tools/VPN/FastProxyBrowser/image2.webp' },
              { src: '/images/Tools/VPN/FastProxyBrowser/image3.webp' },
              { src: '/images/Tools/VPN/FastProxyBrowser/image4.webp' },
              { src: '/images/Tools/VPN/FastProxyBrowser/image5.webp' },
              { src: '/images/Tools/VPN/FastProxyBrowser/image6.webp' },
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

          <ScrollImages carouselRef={carouselRef} />
        </div>

        {/* 描述文字 */}
        <div style={{ marginTop: '2px', textAlign: 'left', padding: '0 16px' }}>
          <Title level={4}>About this app:</Title>
          <p>
            SiCepat Browser is fast, simple and light web browser android app to unblock any
            websites without VPN.
            <br />
            <br />
            OPEN BLOCKED SITES
            <br />
            <br />
            Sometimes, the internet filter becomes the problem when you want to surf in the
            internet. Well, the internet filter will catch your freedom. In other hand, some
            websites are also blocked because of some reasons. Here, we will talk about the way in
            opening the blocked site with &quot;SiCepat&quot; the web browser android app. We have
            this app with some benefits, which you will not found in other similar app. This app is
            here to help you bypass Internet filters and firewalls imposed by your ISP, School,
            Workplace, or Country.
            <br />
            <br />
            SIMPLE, FAST AND EASY
            <br />
            <br />
            Using this Broxy app is easy. Just open up your app, search keyword or type URL in a
            address box and your connection is instantly anonymous. Bypass blocking by your
            government or ISP. Unblock websites at lightning-fast speed and lets you visit any
            website, anytime, from anywhere. No need to install VPN or second apps, so you can use
            it on your one app.
            <br />
            <br />
            UNLIMITED STREAMING
            <br />
            <br />
            When you want to have the great sites to have stream, this app is the best choice for
            you. Well, this SiCepat app is the best android tool to have the stream of your favorite
            videos. You will be able to stream everything here. Although the web of the stream is
            blocked, you will have chance to open it here. See, how great it is. In other hand, you
            also will have the anonymously surfing web here. With the anonymously here, you will be
            free in hiding your identity.
            <br />
            <br />
            FREE OF ALL TIME
            <br />
            <br />
            No registration or fee is required to use it, just download this app and surf. Another
            benefit matter here that can be the reason why you need to choose it is there is no
            additional fee. Well, other app maybe needs some feature when you need to use it. It
            means that you need to download the app first and you will have the chance to use it. It
            will make you are lavish in your internet data. Here, this open blocked sites do not
            need anything include the software. You only need to open app, go to the website and
            enjoy your day.
          </p>
        </div>
      </Card>
      <GuidingResponseTips />
      <Card>
        <DynamicQuestionList
          questions={questions}
          currentUser={currentUser}
          appNumber={2}
          tableName="tools_vpn"
        />
      </Card>
    </div>
  );
};

export default App2;
