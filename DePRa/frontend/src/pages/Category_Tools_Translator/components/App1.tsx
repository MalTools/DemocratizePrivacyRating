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
    message.success("Get to Translotor Tools' App 2 now.");
    navigate('/categories/tools/translator-tools/app2'); // Navigate to the next tab's path
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
          The app accesses your external storage to allow image selection and editing (e.g.,
          cropping) for text extraction and translation, which are core functionalities of the app.
        </Text>
      ),
    },
    {
      question: (
        <Title level={5}>
          <mark>Phone status and identifiers</mark> for{' '}
          <span style={{ color: 'green' }}>app features</span>:
        </Title>
      ),
      description: (
        <Text>
          The app accesses some of your phone status and identifiers (e.g., SIM serial number, phone
          number) as part of its self-service functionality, although the specific context for its
          use is unclear (due to insufficient context in the code).
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
                src={'/icons/Tools-TranslatorPro.webp'}
                alt="Icon 1"
                style={{ width: 30, borderRadius: '6px', marginLeft: 0, marginRight: 8 }}
              />
              Translator Pro -All in One App
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
            {/* <Image>
                src={'/images/Tools/Translator/TranslatorPro/image1.webp' },
            </Image> */}

            {[
              { src: '/images/Tools/Translator/TranslatorPro/image1.webp' },
              { src: '/images/Tools/Translator/TranslatorPro/image2.webp' },
              { src: '/images/Tools/Translator/TranslatorPro/image3.webp' },
              { src: '/images/Tools/Translator/TranslatorPro/image4.webp' },
              { src: '/images/Tools/Translator/TranslatorPro/image5.webp' },
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
            This Application is perfect to translate texts fast &amp; easily on your phone or even
            tablet. With this online All in One translator you won&#39;t have communication
            problems.
            <br />
            <br />
            Features:
            <br />
            -Easy &amp; Simple UI to use.
            <br />
            -The interface is simple and stylish.
            <br />
            -The translations are done instantly.
            <br />
            -The application is totally free.
            <br />
            -You can translate from 90 different languages.
            <br />
            -You can translate by using your voice.
            <br />
            -You can listen translations.
            <br />
            -Possibility to copy the translated text by using one button.
            <br />
            -Possibility to delete the text by clicking one button.
            <br />
            <br />
            <br />
            It&#39;s a perfect translator from english to Spanish and also from Spanish to english,
            but it also has more languages like for example: Russian, french, german, Italian,
            Hindi, Chinese, Catalan and many others.....
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
          tableName="tools_translator"
          onSubmitSuccess={handleNext}
        />
      </Card>
    </div>
  );
};

export default App1;
