import { HeartTwoTone } from '@ant-design/icons';
import { Result, Typography } from 'antd';
import React from 'react';

const { Text } = Typography;

const SubmitResult: React.FC = () => (
  <Result
    status="success"
    title="Thank you!"
    subTitle={
      <>
        {/* <Text>Don't forget to complete the <strong>Other Apps Tabs</strong> in this category! </Text>
      <HeartTwoTone twoToneColor="#eb2f96" /> */}
        <Text>
          Please click the link below to return to Prolific and <strong>enter the completion code</strong>. Your
          response will be recorded once you've entered the completion code on Prolific.{' '}
        </Text>
        <HeartTwoTone twoToneColor="#eb2f96" />
        <br />
        <Text>
          <a href="https://app.prolific.com/submissions/complete?cc=CC3F9W3U" target="_blank" rel="noopener noreferrer">
          https://app.prolific.com/submissions/complete?cc=CC3F9W3U
          </a>{' '}
          <br />
          Completion code: <strong>CC3F9W3U</strong> <br />
        </Text>
      </>
    }
    // extra={[
    //   <Button type="primary" key="console">
    //     Go Console
    //   </Button>,
    // ]}
  />
);

export default SubmitResult;
