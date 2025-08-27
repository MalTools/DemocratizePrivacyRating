import DynamicQuestionList from '@/components/DynamicQuestionList';
import GuidingResponseTips from '@/components/GuidingResponseTips';
import { showImageModal } from '@/components/utils';
import { useModel } from '@umijs/max';
import { Card, Tooltip, Typography, message } from 'antd';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const App2: React.FC = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    message.success("Get to Scanner Tools' App 1 now.");
    navigate('/categories/tools/scanner-tools/app1'); // Navigate to the next tab's path
  };
  const { initialState } = useModel('@@initialState');
  const currentUser = initialState?.currentUser?.name || 'Anonymous'; // 默认值为 "Anonymous"
  const carouselRef = useRef<HTMLDivElement>(null);
  const questions = [
    {
      question: (
        <Title level={5}>
          Read and modify the contents of <mark>external storage</mark> for{' '}
          <span style={{ color: 'green' }}>app features</span>:
        </Title>
      ),
      description: (
        <Text>
          The app accesses your external storage to support translation from media files or
          documents stored on your device, enabling core functionalities like translating text from
          images or PDFs.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          <mark>Phone status and device identifiers</mark> for{' '}
          <span style={{ color: 'purple' }}>analytics and diagnosis</span> related uses:
        </Title>
      ),
      description: (
        <Text>
          The app accesses your phone status and{' '}
          <Tooltip title="Device-specific identifiers are unique codes that uniquely identify your device or SIM.">
            <span style={{ textDecoration: 'underline dashed' }}>device-specific identifiers</span>
          </Tooltip>
          , including Device Name, OS Version, SIM Serial Number,{' '}
          <Tooltip title="International Mobile Subscriber Identity">
            <span style={{ textDecoration: 'underline dashed' }}>IMSI</span>
          </Tooltip>
          ,{' '}
          <Tooltip title="International Mobile Equipment Identity">
            <span style={{ textDecoration: 'underline dashed' }}>IMEI</span>
          </Tooltip>
          , and Device Serial Number, for its "Contact Us" feature. This helps the support team
          troubleshoot issues and understand your context to provide better assistance.
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
                src={'/icons/Tools-TranslatorFastandEasy.webp'}
                alt="Icon 1"
                style={{ width: 30, borderRadius: '6px', marginLeft: 0, marginRight: 8 }}
              />
              Translator - Fast and Easy
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
              { src: '/images/Tools/Translator/TranslatorFastandEasy/image1.webp' },
              { src: '/images/Tools/Translator/TranslatorFastandEasy/image2.webp' },
              { src: '/images/Tools/Translator/TranslatorFastandEasy/image3.webp' },
              { src: '/images/Tools/Translator/TranslatorFastandEasy/image4.webp' },
              { src: '/images/Tools/Translator/TranslatorFastandEasy/image5.webp' },
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
            Fast access and immediate translation.
            <br />
            <br />
            Incredible translation tool. It has the essential to make easy, fast, precise and
            accurate your translations. Open the application, enter your text, or use the microphone
            for the spoken text and the translation is ready to listen or share.
            <br />
            <br />
            🔊 Language translator can translate 41 languages
            <br />
            🔊 Translate voice feature works with 19 languages
            <br />
            🔊 Easy to use, with big letters
            <br />
            🔊 Fast access and immediate translation
            <br />
            🔊 Takes up little space on your device
            <br />
            🔊 Share your translations
            <br />
            <br />
            Speak and translate in all languages ​​of the world. Immediate and easily accessible
            translation. Learn languages ​​easily and communicate with everyone in the world. Share
            your translations directly with instant messaging, notes, social networking, mail,
            search engine, or any application you have installed on your device.
            <br />
            <br />
            This application can translate languages such as:
            <br />
            Arabic, English, Bulgarian, Catalan, Chinese Simplified, Chinese Traditional, Croatian,
            Czech, Danish, Dutch, Estonian, Finnish, French, German, Greek, Hebrew, Hindi,
            Hungarian, Indonesian, Italian, Japanese, Korean, Lithuanian, Malay, Norwegian, Persian,
            Polish, Portuguese, Romanian, Russian, Serbian, Slovenian, Slovak, Spanish, Swedish,
            Thai, Turkish, Ukrainian, Vietnamese and Welsh.
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
          tableName="tools_translator"
          onSubmitSuccess={handleNext}
        />
      </Card>
    </div>
  );
};

export default App2;
