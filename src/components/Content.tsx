import React from 'react';
import { ResumeInfo, Language } from '../types';
import style from './resume.module.less';

interface ContentProps {
  info: ResumeInfo;
  lang: Language;
  switchLang: () => void;
}

const Content: React.FC<ContentProps> = ({ info, lang }) => {
  const { name, position, introduction, skills, experience, education, contact } = info;

  const skillList = skills.map((item, index) => {
    return (
      <div className={style.skillItem} key={index}>
        <div className={style.skillName}>{item.name}</div>
        {item.description && (
          <div className={style.skillDescription}>{item.description}</div>
        )}
      </div>
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
      <div className={style.twoColumnLayout}>
        {/* Left Column - Sidebar */}
        <div className={style.leftColumn}>
          <div className={style.profileSection}>
            <h1 className={style.name}>{name}</h1>
            <h2 className={style.position}>{position}</h2>
          </div>

          <section className={style.sidebarSection}>
            <h3 className={style.sidebarTitle}>{lang === 'zh' ? '联系方式' : 'CONTACT'}</h3>
            <div className={style.contactList}>
              <div className={style.contactItem}>
                <span className={style.contactIcon}>☎️</span>
                <a href={`tel:${contact.cellPhone}`}>{contact.cellPhone}</a>
              </div>
              <div className={style.contactItem}>
                <span className={style.contactIcon}>✉️</span>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
              <div className={style.contactItem}>
                <span className={style.contactIcon}>📍</span>
                <span>{contact.location}</span>
              </div>
              <div className={style.contactItem}>
                <span className={style.contactIcon}>🔗</span>
                <a href={contact.gitHub} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </section>


          {introduction && (
            <section className={style.sidebarSection}>
              <h3 className={style.sidebarTitle}>{lang === 'zh' ? '个人简介' : 'PROFILE'}</h3>
              <p className={style.introduction}>{introduction}</p>
            </section>
          )}

          <section className={style.sidebarSection}>
            <h3 className={style.sidebarTitle}>{lang === 'zh' ? '教育背景' : 'EDUCATION'}</h3>
            <ul className={style.educationList}>{educationList}</ul>
          </section>

          <section className={style.sidebarSection}>
            <h3 className={style.sidebarTitle}>{lang === 'zh' ? '关键字' : 'KEYWORDS'}</h3>
            <div className={style.skillWrap}>{skillList}</div>
          </section>
        </div>

        {/* Right Column - Main Content */}
        <div className={style.rightColumn}>
          <section className={style.mainSection}>
            <h3 className={style.mainTitle}>{lang === 'zh' ? '工作经历 & 项目介绍' : 'EXPERIENCE & PROJECTS'}</h3>
            <div className={style.experienceTimeline}>
              {experience.map((exp, expIndex) => {
                const companyProjects = exp.projects || [];
                
                return (
                  <div key={expIndex} className={style.experienceBlock}>
                    <div className={style.experienceHeader}>
                      <h3>
                        {exp.company}
                        <b>{exp.position}</b>
                      </h3>
                      <span className={style.experienceDuration}>
                        {exp.duration[0]} - {exp.duration[1]}
                      </span>
                    </div>
                    
                    <p className={style.experienceWork}>{exp.work}</p>
                    
                    {companyProjects.length > 0 && (
                      <div className={style.projectsUnderCompany}>
                        {companyProjects.map((project, projIndex) => {
                          return (
                            <div key={projIndex} className={style.projectItem}>
                              <div className={style.projectHeader}>
                                <div className={style.projectTitleRow}>
                                  <h5>{project.name}</h5>
                                  {project.duty && (
                                    <span className={style.projectDuty}>{project.duty}</span>
                                  )}
                                </div>
                                {project.duration && project.duration.length === 2 && (
                                  <span className={style.projectDuration}>
                                    {project.duration[0]}
                                    {project.duration[1] ? ` - ${project.duration[1]}` : ''}
                                  </span>
                                )}
                              </div>

                              {project.background && (
                                <div className={style.projectBackground}>
                                  {project.background}
                                </div>
                              )}

                              {(project.activities && project.activities.length > 0) || 
                               (project.achievements && project.achievements.length > 0) ? (
                                <div className={style.projectTwoColumns}>
                                  {project.activities && project.activities.length > 0 && (
                                    <div className={style.projectSection}>
                                      <h6 className={style.sectionLabel}>行动</h6>
                                      <ul className={style.projectActivitiesList}>
                                        {project.activities.map((activity: string, idx: number) => (
                                          <li key={idx}>{activity}</li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}

                                  {project.achievements && project.achievements.length > 0 && (
                                    <div className={style.projectSection}>
                                      <h6 className={style.sectionLabel}>成果</h6>
                                      <ul className={style.projectAchievementList}>
                                        {project.achievements.map((achievement: string, idx: number) => (
                                          <li key={idx}>{achievement}</li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              ) : null}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Content;
