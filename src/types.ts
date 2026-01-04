/**
 * 表示技能及其熟练程度和描述。
 */
export interface Skill {
  /** 技能名称。 */
  name: string;
  /** 熟练程度（例如：“精通”、“良好”）。 */
  level?: string;
  /** 技能的简要描述。 */
  description?: string;
}

/**
 * 表示参与的项目。
 */
export interface Project {
  /** 项目名称。 */
  name: string;
  /** 项目的开始和结束日期，格式为 [开始, 结束]。 */
  duration?: [string, string];
  /** 项目的描述或功能列表（兼容旧格式）。 */
  description?: string[];
  /** 项目具体内容列表。 */
  content?: string[];
  /** 项目结果产出列表。 */
  achievements?: string[];
  /** 在项目中的职责或任务列表。 */
  duty?: string[];
}

/**
 * 表示职业工作经验。
 */
export interface Experience {
  /** 公司名称。 */
  company: string;
  /** 任职的开始和结束日期，格式为 [开始, 结束]。 */
  duration: [string, string];
  /** 职位或头衔。 */
  position: string;
  /** 工作内容的描述。 */
  work: string;
}

/**
 * 表示教育背景。
 */
export interface Education {
  /** 学校或大学名称。 */
  school: string;
  /** 获得的学位或学历。 */
  degree: string;
  /** 就读的开始和结束日期，格式为 [开始, 结束]。 */
  duration: [string, string];
}

/**
 * 表示联系方式。
 */
export interface Contact {
  /** 电子邮件地址。 */
  email: string;
  /** QQ 号码。 */
  qq?: string;
  /** 手机号码。 */
  cellPhone?: string;
  /** GitHub 个人主页 URL 或用户名。 */
  gitHub?: string;
  /** 地理位置。 */
  location?: string;
}

/**
 * 表示特定语言版本的完整简历信息。
 */
export interface ResumeInfo {
  /** 姓名。 */
  name: string;
  /** 目标职位或当前职位。 */
  position: string;
  /** 个人简介。 */
  introduction?: string;
  /** 联系方式。 */
  contact: Contact;
  /** 个人照片的 URL 或路径。 */
  photo?: string;
  /** 技能列表。 */
  skills: Skill[];
  /** 项目列表。 */
  projects: Project[];
  /** 工作经验列表。 */
  experience: Experience[];
  /** 教育背景列表。 */
  education: Education[];
}

/**
 * 表示包含多种语言版本的简历数据。
 */
export interface ResumeData {
  /** 中文版简历。 */
  zh: ResumeInfo;
  /** 英文版简历。 */
  en: ResumeInfo;
}

/**
 * 简历支持的语言。
 */
export type Language = 'zh' | 'en';
