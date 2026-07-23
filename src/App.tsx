import React, { useEffect } from 'react';
import { BrowserRouter, useLocation, useNavigate } from 'react-router-dom';
import Resume from './components/Resume';
import type { ResumeData } from './types';

const DEFAULT_RESUME_ROUTE = 'ai-agent';

const resumeModules = import.meta.glob('./data/*.json', {
  eager: true,
  import: 'default',
}) as Record<string, ResumeData>;

const resumeDataByRoute = Object.fromEntries(
  Object.entries(resumeModules).map(([path, data]) => {
    const route = path.split('/').pop()!.replace(/\.json$/, '');
    return [route, data];
  }),
) as Record<string, ResumeData>;

const AppInner: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  const route = pathname.slice(1);
  const resumeInfo = resumeDataByRoute[route];

  useEffect(() => {
    if (pathname === '/' || !resumeInfo) {
      navigate(`/${DEFAULT_RESUME_ROUTE}`, { replace: true });
    }
  }, [pathname, resumeInfo, navigate]);

  return resumeInfo ? <Resume resumeInfo={resumeInfo} /> : null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppInner />
    </BrowserRouter>
  );
};

export default App;
