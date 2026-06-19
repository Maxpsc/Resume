import React, { useEffect, useCallback } from 'react';
import { HashRouter, useLocation, useNavigate } from 'react-router-dom';
import Resume from './components/Resume';
import type { ResumeData } from './types';
import frontendData from './data/frontend.json';
import aiFullstackData from './data/ai-fullstack.json';

// const toggleStyle: React.CSSProperties = {
//   textAlign: 'center',
//   padding: '16px 0 24px',
//   opacity: 0.25,
//   fontSize: 11,
//   cursor: 'pointer',
//   userSelect: 'none',
//   transition: 'opacity 0.2s',
//   color: '#999',
// };

const AppInner: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  useEffect(() => {
    if (pathname === '/') {
      navigate('/frontend', { replace: true });
    }
  }, [pathname, navigate]);

  const version: 'frontend' | 'ai' = pathname === '/ai' ? 'ai' : 'frontend';

  const switchVersion = useCallback(() => {
    navigate(version === 'frontend' ? '/ai' : '/frontend');
  }, [version, navigate]);

  const data: ResumeData =
    version === 'ai'
      ? (aiFullstackData as unknown as ResumeData)
      : (frontendData as unknown as ResumeData);

  // const toggleLabel =
  //   version === 'frontend' ? 'AI 全栈版本' : '前端版本';

  return (
    <>
      <Resume
        resumeInfo={data}
        version={version}
        onSwitchVersion={switchVersion}
      />
      {/* <div
        style={toggleStyle}
        onClick={switchVersion}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.opacity = '0.6';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.opacity = '0.25';
        }}
        title={`切换到${toggleLabel}`}
      >
        切换至 {toggleLabel} →
      </div> */}
    </>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppInner />
    </HashRouter>
  );
};

export default App;
