import React, { useState } from "react";
import { List, Radio, Input,Typography } from "antd";
import type { RadioChangeEvent } from "antd";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
const { Text } = Typography;

interface QuestionItemProps {
  question: React.ReactNode;
  description: React.ReactNode;
  index: number;
  onAnswerChange: (index: number, value: { answer: number; moreInfo?: string }) => void; // 回调函数
}

const QuestionItem: React.FC<QuestionItemProps> = ({ question, description, index, onAnswerChange }) => {
  const [value, setValue] = useState(0); // 存储用户选择的答案
  const [needMoreInfo, setNeedMoreInfo] = useState(false); // 控制是否显示额外信息输入框
  const [moreInfo, setMoreInfo] = useState(""); // 存储额外信息

  const handleRadioChange = (e: RadioChangeEvent) => {
    const selectedValue = e.target.value; // 获取用户选择的值
    setValue(selectedValue);

    // 如果选择了 "Need more information to assess"，显示输入框
    if (selectedValue === 6) {
      setNeedMoreInfo(true);
    } else {
      setNeedMoreInfo(false);
      setMoreInfo(""); // 清空额外信息
    }

    // 调用父组件的回调函数，传递答案
    onAnswerChange(index, { answer: selectedValue, moreInfo });
  };

  const handleMoreInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const info = e.target.value;
    setMoreInfo(info);

    // 同时更新父组件的状态
    onAnswerChange(index, { answer: value, moreInfo: info });
  };

  return (
    <List.Item key={index}>
      <List.Item.Meta 
      title={question}
      description={description}/>
      
      {/* 单选按钮组 */}
      <Radio.Group
        onChange={handleRadioChange}
        value={value}
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <Radio value={1}>
          <FrownOutlined style={{ color: "red", marginRight: 6 }} />
          Very Uncomfortable
        </Radio>
        <Radio value={2}>
          <FrownOutlined style={{ color: "HotPink", marginRight: 6 }} />
          Uncomfortable
        </Radio>
        <Radio value={3}>
          <MehOutlined style={{ color: "orange", marginRight: 6 }} />
          So-so
        </Radio>
        <Radio value={4}>
          <SmileOutlined style={{ color: "MediumAquamarine", marginRight: 6 }} />
          Comfortable
        </Radio>
        <Radio value={5}>
          <SmileOutlined style={{ color: "green", marginRight: 6 }} />
          Very Comfortable
        </Radio>
        <Radio value={6}>Need more information to assess</Radio>
      </Radio.Group>

      {/* 额外信息输入框 */}
      {needMoreInfo && (
        <List.Item.Meta
          description={
            <Input
              showCount
              maxLength={120}
              placeholder="Please specify what additional information you need."
              value={moreInfo}
              onChange={handleMoreInfoChange}
            />
          }
        />
      )}
    </List.Item>
  );
};

export default QuestionItem;
