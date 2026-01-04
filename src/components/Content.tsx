import React from 'react';
import { ResumeInfo, Language } from '../types';
import style from './resume.module.less';

interface ContentProps {
  info: ResumeInfo;
  lang: Language;
  switchLang: () => void;
}

const Content: React.FC<ContentProps> = ({ info, lang }) => {
  const { name, position, introduction, skills, projects, experience, education, contact } = info;

  const skillList = skills.map((item, index) => {
    return (
      <div className={style.skillTag} key={index}>
        {item.name}
      </div>
    );
  });

  const projectList = projects.map((item, index) => {
    const contentItems = item.content?.map((content, idx) => <li key={idx}>{content}</li>);
    const achievementItems = item.achievements?.map((achievement, idx) => <li key={idx}>{achievement}</li>);
    const duties = item.duty?.map((duty, idx) => <li key={idx}>{duty}</li>);

    return (
      <li key={index} className={style.projectItem}>
        <div className={style.projectHeader}>
          <h3>{item.name}</h3>
          {item.duration && item.duration.length === 2 ? (
            <span className={style.projectDuration}>
              {item.duration[0]}
              {item.duration[1] ? ` - ${item.duration[1]}` : ''}
            </span>
          ) : null}
        </div>

        
          <div className={style.projectStructured}>
            {contentItems && contentItems.length > 0 && (
              <div className={style.projectSection}>
                <div className={style.sectionLabel}>具体内容</div>
                <ul className={style.sectionList}>{contentItems}</ul>
              </div>
            )}
            {achievementItems && achievementItems.length > 0 && (
              <div className={style.projectSection}>
                <div className={style.sectionLabel}>结果产出</div>
                <ul className={style.sectionList}>{achievementItems}</ul>
              </div>
            )}
          </div>

        {duties && duties.length !== 0 ? (
          <div className={style.projectDuties}>
            <h5>项目职责</h5>
            <ul>{duties}</ul>
          </div>
        ) : null}
      </li>
    );
  });

  const experienceList = experience.map((item, index) => {
    return (
      <li key={index} className={style.experienceItem}>
        <div className={style.experienceHeader}>
          <h3>{item.company}</h3>
          <span className={style.experienceDuration}>
            {item.duration[0]} - {item.duration[1]}
          </span>
        </div>
        <h4>{item.position}</h4>
        <p>{item.work}</p>
      </li>
    );
  });

  const educationList = education.map((item, index) => {
    return (
      <li key={index} className={style.educationItem}>
        <div className={style.educationHeader}>
          <h3>{item.school}</h3>
          <span className={style.educationDuration}>
            {item.duration[0]} - {item.duration[1]}
          </span>
        </div>
        <h4>{item.degree}</h4>
      </li>
    );
  });

  return (
    <div className={style.content}>
      <div className={style.head}>
        <div className={style.headLeft}>
          <h1>{name}</h1>
          <h2>{position}</h2>
          {introduction && <p>{introduction}</p>}
        </div>
        <div className={style.contact}>
          <p>
            <span className={style.contactIcon}>📍</span>
            {contact.location}
          </p>
          <p>
            <span className={style.contactIcon}>✉️</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <span className={style.contactDivider}>|</span>
            <span className={style.contactIcon}>☎️</span>
            <a href={`tel:${contact.cellPhone}`}>{contact.cellPhone}</a>
          </p>
          <p>
            <span className={style.contactIcon}>🔗</span>
            <a href={contact.gitHub} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
        </div>
      </div>
      <div className={style.main}>
        <section>
          <h1>{lang === 'zh' ? 'Keywords' : 'Skills'}</h1>
          <div className={style.skillWrap}>{skillList}</div>
        </section>
        <section>
          <h1>{lang === 'zh' ? '工作经历' : 'Experience'}</h1>
          <ul className={style.experienceList}>{experienceList}</ul>
        </section>
        <section>
          <h1>{lang === 'zh' ? '主要项目介绍' : 'Projects'}</h1>
          <ul className={style.projectList}>{projectList}</ul>
        </section>
        <section>
          <h1>{lang === 'zh' ? '教育背景' : 'Education'}</h1>
          <ul className={style.educationList}>{educationList}</ul>
        </section>
      </div>
    </div>
  );
};

export default Content;
