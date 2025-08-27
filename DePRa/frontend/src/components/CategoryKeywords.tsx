import React from 'react';
import { Tag, Flex } from 'antd';

// 定义 Props 类型
interface CategoryKeywordsProps {
  keywords: string[]; // 只传入关键词列表
}

// 定义颜色列表
const COLOR_LIST = [
  'magenta',
  'red',
  'volcano',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'blue',
  'geekblue',
  'purple',
];

// 组件定义
const CategoryKeywords: React.FC<CategoryKeywordsProps> = ({ keywords }) => {
  return (
    <Flex gap="4px 0" wrap>
      {keywords.map((keyword, index) => (
        <Tag
          key={index}
          bordered={false}
          color={COLOR_LIST[index % COLOR_LIST.length]} // 自动分配颜色
          style={{ fontSize: '14px' }}
        >
          {keyword}
        </Tag>
      ))}
    </Flex>
  );
};

export default CategoryKeywords;
