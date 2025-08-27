import React, { useEffect, useState } from 'react';

interface ScrollImagesProps {
  carouselRef: React.RefObject<HTMLDivElement>;
}

const ScrollImages = ({ carouselRef }: ScrollImagesProps): JSX.Element => {
  const [carousel, setCarousel] = useState<React.RefObject<HTMLDivElement>>(carouselRef);
  // 使用 useEffect 获取数据
  useEffect(() => {
    setCarousel(carouselRef);
  }, [carouselRef]); // 空数组表示仅在组件挂载时运行一次

  const scrollLeft = () => {
    if (carousel.current) {
      carousel.current.scrollBy({
        left: -200, // 调整滚动距离
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (carousel.current) {
      carousel.current.scrollBy({
        left: 200, // 调整滚动距离
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* 左滑按钮 */}
      <button
        type="button"
        onClick={scrollLeft}
        style={{
          position: 'absolute',
          top: '50%',
          left: '-15px',
          transform: 'translateY(-50%)',
          zIndex: 1,
          background: 'white',
          border: '1px solid #ddd',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          cursor: 'pointer',
          fontSize: '20px',
        }}
      >
        &lt;
      </button>

      {/* 右滑按钮 */}
      <button
        type="button"
        onClick={scrollRight}
        style={{
          position: 'absolute',
          top: '50%',
          right: '-15px',
          transform: 'translateY(-50%)',
          zIndex: 1,
          background: 'white',
          border: '1px solid #ddd',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          cursor: 'pointer',
          fontSize: '20px',
        }}
      >
        &gt;
      </button>
    </>
  );
};

export default ScrollImages;
