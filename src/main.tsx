import React from 'react';
import ReactDOM from 'react-dom/client';
import Resume from './components/Resume';
import { ResumeData } from './types';
import latestData from './2026-01.json';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Resume resumeInfo={latestData as unknown as ResumeData} />
  </React.StrictMode>
);
