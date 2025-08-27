import DynamicQuestionList from '@/components/DynamicQuestionList';
import GuidingResponseTips from '@/components/GuidingResponseTips';
import { showImageModal } from '@/components/utils';
import { useModel } from '@umijs/max';
import { Card, Tooltip, Typography } from 'antd';
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
          <mark>Phone status and identifiers</mark> for{' '}
          <span style={{ color: 'green' }}>app features</span> (account management, subscriptions):
        </Title>
      ),
      description: (
        <Text>
          The app accesses your phone status and identifiers, including{' '}
          <Tooltip title="International Mobile Subscriber Identity">
            <span style={{ textDecoration: 'underline dashed' }}>IMSI</span>
          </Tooltip>
          , Device ID, and{' '}
          <Tooltip title="Integrated Circuit Card Identifier">
            <span style={{ textDecoration: 'underline dashed' }}>ICCID</span>
          </Tooltip>
          , to manage user accounts and enable subscriptions.
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
          The app accesses your external storage to cache comics for offline reading, enable fast
          loading, and support media customization, such as wallpapers and thumbnails.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          Read and modify <mark>external storage</mark> for{' '}
          <span style={{ color: 'Tomato' }}>social networking</span> (media sharing) purposes:
        </Title>
      ),
      description: (
        <Text>
          The app accesses your external storage to allow you to share media, such as comic images
          or videos, to social platforms like WeChat.
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
                src={'/icons/Comics-MyComicBook.webp'}
                alt="Icon 1"
                style={{ width: 30, borderRadius: '6px', marginLeft: 0, marginRight: 8 }}
              />
              MyComicBook
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
              { src: '/images/Comics/MyComicBook/image1.webp' },
              { src: '/images/Comics/MyComicBook/image2.webp' },
              { src: '/images/Comics/MyComicBook/image3.webp' },
              { src: '/images/Comics/MyComicBook/image4.webp' },
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
            MyComicBook is newly launched - one-stop reading of massive popular comics + popular
            novels. Anytime, anywhere, take you to control more fun and beautiful content!
            <br />
            Full analysis of boutique functions:
            <br />
            [One APP, twice as exciting] On the basis of rich comics, the new version adds a male
            and female novel section, one-stop reading of comics and novels. Install an APP and
            enjoy double the fun!
            <br />
            [Full-color comics, rich in variety] Funny, fantasy, horror, romantic and multi-theme
            comics are available, with a large library, professional and high-quality, and are
            favored by the majority of comic fans.
            <br />
            [Fictions for boys and girls, everything you expect to find] The novel section includes
            both male and female channels, with a complete range of genres, romance, urban, fantasy,
            supernatural, thriller... to meet the reading tastes of different readers, and give you
            the best choice!
            <br />
            [Quick update, enjoy watching] Synchronous update with the source, intimate update
            reminder, one step faster to get exciting content.
            <br />
            [Selected recommendations, no pitfalls] No matter comics or novels, the
            multi-dimensional list recommends the best works for readers, so you can read freely
            without stepping on pitfalls.
            <br />
            [Simple design, smooth reading] Simple and fresh design style, humanized operation, let
            you easily enter the reading world.
            <br />
            [Offline reading, wonderful non-stop] Online reading of novels and comics, offline
            cache, you can read as much as you want without the Internet, bringing you a unique
            reading experience.
          </p>
        </div>
      </Card>
      <GuidingResponseTips />
      <Card>
        <DynamicQuestionList
          questions={questions}
          currentUser={currentUser}
          appNumber={2}
          tableName="comics"
        />
      </Card>
    </div>
  );
};

export default App2;
