/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Feature {
  id: number;
  title: string;
  version: string;
  description: string;
  thumbnailUrl: string;
}

export interface Proficiency {
  label: string;
  percentage: number;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  text: string;
  rating: number;
  date: string;
}

export interface ActiveFocus {
  id: string;
  title: string;
  role: string;
  company: string;
  progress: number; // percentage of completion/mastery or timeline progress
  duration: string;
  description: string;
  posterUrl: string;
  status: "ACTIVE NOW" | "COMPLETED" | "UPCOMING SEASON";
}

export interface Project {
  id: string;
  title: string;
  matchScore: number;
  year: string;
  level: "Advanced" | "Intermediate" | "Expert" | "Beginner";
  edition: string;
  genres: string[];
  description: string;
  posterUrl: string;
  billboardUrl: string;
  features: Feature[];
  techStack: string;
  role: string;
  duration: string;
  proficiency: Proficiency[];
  reviews?: Review[];
}

export interface Skill {
  id: string;
  title: string;
  matchScore: number;
  tag: string;
  imageUrl: string;
  details: string;
  level: "Expert" | "Advanced" | "Intermediate";
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export interface Notification {
  id: string;
  title: string;
  timestamp: string;
  read: boolean;
}

export interface Message {
  id: string;
  name: string;
  email: string;
  text: string;
  timestamp: string;
}
