import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <Head>
        <title>星艘爱博客</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        textAlign: 'center'
      }}>
        <h1 style={{ marginBottom: '20px' }}>欢迎来到星艘爱博客</h1>
        <p style={{ marginBottom: '30px', maxWidth: '600px' }}>
          这是一个基于 Notion 和 Next.js 搭建的个人博客。我们正在完善内容，请稍后再访问。
        </p>
        <div style={{ 
          background: '#f5f5f5', 
          padding: '20px', 
          borderRadius: '8px',
          maxWidth: '500px'
        }}>
          <h2 style={{ marginBottom: '15px', fontSize: '1.2rem' }}>技术栈</h2>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px'
          }}>
            <li style={{ background: '#e1f5fe', padding: '8px 16px', borderRadius: '20px' }}>Next.js</li>
            <li style={{ background: '#e8f5e9', padding: '8px 16px', borderRadius: '20px' }}>Notion API</li>
            <li style={{ background: '#fff3e0', padding: '8px 16px', borderRadius: '20px' }}>Tailwind CSS</li>
            <li style={{ background: '#f3e5f5', padding: '8px 16px', borderRadius: '20px' }}>Vercel</li>
          </ul>
        </div>
      </div>
    </>
  );
} 