// import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import CategoryKeywords from '@/components/CategoryKeywords';
import { PageContainer } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Typography } from 'antd';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import App1 from './components/App1';
import App2 from './components/App2';
import App3 from './components/App3';

const { Text } = Typography;

const Social: React.FC = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const location = useLocation();

  // Map path to tab key
  const pathToKey: Record<string, string> = {
    '/categories/social/app1': '1',
    '/categories/social/app2': '2',
    '/categories/social/app3': '3',
  };

  // Map tab key to path
  const keyToPath: Record<string, string> = {
    '1': '/categories/social/app1',
    '2': '/categories/social/app2',
    '3': '/categories/social/app3',
  };
  const activeTabKey = pathToKey[location.pathname] || '1';
  const handleTabChange = (key: string) => {
    navigate(keyToPath[key]); // Navigate to the corresponding path
  };

  // const [activeTabKey, setActiveTabKey] = useState('1'); // 当前激活的 Tab key

  const weatherKeywords = [
    'whatsapp',
    'facebook',
    'instagram',
    'social media',
    'messages',
    'chat',
    'sharing',
    'social networking',
    'church communicate',
    'faith community',
    'matchmaking service',
    'residents unit communication',
  ];

  const renderTabContent = () => {
    switch (activeTabKey) {
      case '1':
        return <App1 />;
      case '2':
        return <App2 />;
      case '3':
        return <App3 />;
      default:
        return null;
    }
  };

  return (
    <PageContainer
      fixedHeader
      // content={intl.formatMessage({
      //   id: 'pages.categories.weather.title',
      //   defaultMessage: 'In the Weather category, whose descriptive keywords include:',
      // })}
      header={{
        title: 'Social Category',
      }}
      content={<CategoryKeywords keywords={weatherKeywords} />}
      tabList={[
        {
          tab: (
            <>
              <img
                src={'/icons/Social-JCI.webp'}
                alt="Icon 1"
                style={{ width: 20, borderRadius: '4px', marginLeft: 0, marginRight: 8 }}
              />{' '}
              App 1
            </>
          ),
          key: '1',
        },
        {
          tab: (
            <>
              <img
                src={'/icons/Social-Messages.webp'}
                alt="Icon 1"
                style={{ width: 20, borderRadius: '4px', marginLeft: 0, marginRight: 8 }}
              />{' '}
              App 2
            </>
          ),
          key: '2',
        },
        {
          tab: (
            <>
              <img
                src={'/icons/Social-Hago.webp'}
                alt="Icon 1"
                style={{ width: 20, borderRadius: '4px', marginLeft: 0, marginRight: 8 }}
              />{' '}
              App 3
            </>
          ),
          key: '3',
        },
      ]}
      tabProps={{
        type: 'card',
        tabBarGutter: 4,
        // onChange: (key) => setActiveTabKey(key),
        activeKey: activeTabKey,
        onChange: handleTabChange,
      }}
    >
      {renderTabContent()} {/* 动态渲染内容 */}
    </PageContainer>
  );
};

export default Social;
