import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // 重定向到 NotionNext 目录
    window.location.href = '/NotionNext';
  }, []);

  return (
    <div>
      <h1>正在跳转到博客...</h1>
    </div>
  );
} 