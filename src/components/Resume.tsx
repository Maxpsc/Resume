import React, { useState, useEffect } from 'react';
import Content from './Content';
import { ResumeData, Language } from '../types';
import style from './resume.module.less';

interface ResumeProps {
  resumeInfo: ResumeData;
}

const Resume: React.FC<ResumeProps> = ({ resumeInfo }) => {
  const [lang, setLang] = useState<Language>('zh');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const switchLang = () => {
    setLang((prevLang) => (prevLang === 'zh' ? 'en' : 'zh'));
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    // 应用主题到 body
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const info = resumeInfo[lang];

  return (
    <div className={style.wrap}>
      <button 
        className={style.themeToggle} 
        onClick={toggleTheme}
        aria-label="Toggle theme"
        title={isDarkMode ? '切换到白天模式' : '切换到夜间模式'}
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>
      <div className={style.resume}>
        <Content info={info} lang={lang} switchLang={switchLang} />
      </div>
    </div>
  );
};

export default Resume;
