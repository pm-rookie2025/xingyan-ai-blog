import { useEffect, useRef } from 'react'
import Head from 'next/head'
import BLOG from '../blog.config'

const MusicPage = () => {
  const playerRef = useRef(null)

  useEffect(() => {
    // 动态加载 APlayer 和 MetingJS 的 CSS 和 JS
    const loadExternalResources = async () => {
      // 加载 APlayer CSS
      if (!document.querySelector('link[href*="aplayer"]')) {
        const aplayerCSS = document.createElement('link')
        aplayerCSS.rel = 'stylesheet'
        aplayerCSS.href = 'https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css'
        document.head.appendChild(aplayerCSS)
      }

      // 加载 APlayer JS
      if (!window.APlayer) {
        await new Promise((resolve) => {
          const aplayerJS = document.createElement('script')
          aplayerJS.src = 'https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js'
          aplayerJS.onload = resolve
          document.head.appendChild(aplayerJS)
        })
      }

      // 加载 MetingJS
      if (!window.MetingJSElement) {
        await new Promise((resolve) => {
          const metingJS = document.createElement('script')
          metingJS.src = 'https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js'
          metingJS.onload = resolve
          document.head.appendChild(metingJS)
        })
      }

      // 初始化播放器
      if (playerRef.current && window.APlayer) {
        // 如果使用 MetingJS，它会自动处理
        // 如果要手动初始化，可以这样做：
        /*
        const ap = new APlayer({
          container: playerRef.current,
          lrcType: 3,
          audio: [
            // 这里可以放自定义的歌曲列表
          ]
        })
        */
      }
    }

    loadExternalResources()
  }, [])

  return (
    <>
      <Head>
        <title>音乐 - {BLOG.TITLE}</title>
        <meta name="description" content="我的音乐分享" />
      </Head>
      
      <div className="min-h-screen bg-gray-900 text-white">
        {/* 页面头部 */}
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">我的音乐</h1>
          
          {/* 音乐播放器容器 */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-6 shadow-2xl">
              {/* 使用 MetingJS 从网易云音乐加载歌单 */}
              <meting-js
                server="netease"
                type="playlist"
                id="60198"
                fixed="false"
                autoplay="false"
                theme="#ad7a86"
                loop="all"
                order="random"
                preload="auto"
                volume="0.7"
                mutex="true"
                lrcshow="true"
                listshow="true"
                listfolded="false"
                listmaxheight="400px"
                storagename="music_setting"
              />
              
              {/* 备用的手动播放器容器 */}
              <div ref={playerRef} id="aplayer" className="hidden"></div>
            </div>
            
            {/* 说明文字 */}
            <div className="mt-8 text-center text-gray-400">
              <p>🎵 分享一些我喜欢的音乐</p>
              <p className="text-sm mt-2">音乐来源：网易云音乐</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MusicPage 