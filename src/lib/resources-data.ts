import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Heart,
  Moon,
  Smartphone,
  Focus,
  Smile,
  ShieldCheck,
  Phone,
  Wind,
  Leaf,
  Clock,
  Music,
  BookOpen,
  Sun,
} from "lucide-react";

export type ResourceCategory =
  | "All"
  | "Focus & Productivity"
  | "Emotional Well-being"
  | "Digital Detox"
  | "Sleep & Rest"
  | "Crisis & Support";

export interface Resource {
  id: number;
  icon: LucideIcon;
  title: string;
  summary: string;
  category: Exclude<ResourceCategory, "All">;
  details: (string | { url: string; text: string })[];
}

export const resourcesData: Resource[] = [
  {
    id: 1,
    icon: Focus,
    title: "The Pomodoro Technique",
    summary:
      "Break your work into focused 25-minute intervals separated by short breaks.",
    category: "Focus & Productivity",
    details: [
      "Set a timer for 25 minutes and work on a single task.",
      "Take a 5-minute break after each interval.",
      "After 4 intervals, take a longer 15-30 minute break.",
      {
        url: "https://en.wikipedia.org/wiki/Pomodoro_Technique",
        text: "Learn more about the Pomodoro Technique",
      },
    ],
  },
  {
    id: 2,
    icon: Brain,
    title: "Mindful Journaling",
    summary:
      "Write down your thoughts and feelings to process emotions and reduce stress.",
    category: "Emotional Well-being",
    details: [
      "Spend 10 minutes each morning writing freely about your thoughts.",
      "Try gratitude journaling: list 3 things you are thankful for each day.",
      "Reflect on challenges and write about what you learned from them.",
    ],
  },
  {
    id: 3,
    icon: Smartphone,
    title: "Digital Sunset Routine",
    summary:
      "Reduce screen time in the evening to improve sleep quality and mental clarity.",
    category: "Digital Detox",
    details: [
      "Set a 'digital sunset' 1 hour before bedtime—no screens allowed.",
      "Replace scrolling with reading a physical book or stretching.",
      "Use blue-light filters if you must use screens in the evening.",
    ],
  },
  {
    id: 4,
    icon: Moon,
    title: "Sleep Hygiene 101",
    summary:
      "Build a consistent sleep routine for better rest and recovery.",
    category: "Sleep & Rest",
    details: [
      "Go to bed and wake up at the same time every day, even on weekends.",
      "Keep your room cool, dark, and quiet.",
      "Avoid caffeine at least 6 hours before bed.",
      {
        url: "https://www.sleepfoundation.org/sleep-hygiene",
        text: "Sleep Foundation: Sleep Hygiene Tips",
      },
    ],
  },
  {
    id: 5,
    icon: Phone,
    title: "Crisis Helplines",
    summary:
      "Immediate support resources for when you or someone you know needs help.",
    category: "Crisis & Support",
    details: [
      {
        url: "https://988lifeline.org/",
        text: "988 Suicide & Crisis Lifeline (call or text 988)",
      },
      {
        url: "https://www.crisistextline.org/",
        text: "Crisis Text Line (text HOME to 741741)",
      },
      {
        url: "https://www.nami.org/help",
        text: "NAMI Helpline: 1-800-950-NAMI (6264)",
      },
    ],
  },
  {
    id: 6,
    icon: Wind,
    title: "Box Breathing Exercise",
    summary:
      "A simple breathing technique to calm anxiety and regain focus in minutes.",
    category: "Emotional Well-being",
    details: [
      "Breathe in for 4 seconds.",
      "Hold your breath for 4 seconds.",
      "Exhale slowly for 4 seconds.",
      "Hold again for 4 seconds. Repeat 4 times.",
    ],
  },
  {
    id: 7,
    icon: Leaf,
    title: "Nature Walk Break",
    summary:
      "Step outside for a short walk to reset your mind between study sessions.",
    category: "Focus & Productivity",
    details: [
      "Even a 10-minute walk in nature can reduce cortisol levels.",
      "Leave your phone behind or switch it to Do Not Disturb.",
      "Pay attention to your surroundings—practice informal mindfulness.",
    ],
  },
  {
    id: 8,
    icon: Clock,
    title: "Time Blocking",
    summary:
      "Assign specific time blocks to tasks for a more structured and productive day.",
    category: "Focus & Productivity",
    details: [
      "Plan your day the night before using a planner or calendar app.",
      "Allocate blocks for deep work, breaks, meals, and social time.",
      "Protect your blocks—treat them like appointments you can't miss.",
    ],
  },
  {
    id: 9,
    icon: Music,
    title: "Study Music & Soundscapes",
    summary:
      "Use ambient sounds or lo-fi music to create a focused study environment.",
    category: "Digital Detox",
    details: [
      "Try lo-fi hip hop or classical music for concentration.",
      "Use nature soundscapes like rain or ocean waves.",
      {
        url: "https://www.youtube.com/results?search_query=lofi+study+music",
        text: "Find lo-fi study playlists on YouTube",
      },
    ],
  },
  {
    id: 10,
    icon: Sun,
    title: "Morning Sunlight Exposure",
    summary:
      "Get 10-15 minutes of morning sunlight to regulate your circadian rhythm.",
    category: "Sleep & Rest",
    details: [
      "Step outside within the first hour of waking up.",
      "Morning light helps set your internal clock for better sleep at night.",
      "Combine with a short walk or stretching for extra benefits.",
    ],
  },
];

export const featuredToolkit = {
  title: "🧘 Quick Calm Toolkit",
  tools: [
    { name: "Deep Breathing", icon: Wind },
    { name: "Body Scan", icon: Heart },
    { name: "Gratitude List", icon: Smile },
    { name: "Grounding Exercise", icon: ShieldCheck },
  ],
};

export const studentAdvice = [
  {
    text: "Taking a 10-minute walk between classes completely changed my focus levels.",
    category: "Focus & Productivity",
  },
  {
    text: "I started journaling before bed and my anxiety went down so much.",
    category: "Emotional Well-being",
  },
  {
    text: "Deleting social media apps during finals week was the best decision I ever made.",
    category: "Digital Detox",
  },
  {
    text: "Calling the crisis line helped me more than I ever thought it would. Don't hesitate.",
    category: "Crisis & Support",
  },
];

export const externalLinks = [
  {
    title: "Headspace for Students",
    url: "https://www.headspace.com/studentplan",
    description:
      "Free or discounted meditation and mindfulness app for students.",
  },
  {
    title: "NAMI on Campus",
    url: "https://www.nami.org/get-involved/nami-on-campus",
    description:
      "Find mental health clubs and resources at colleges nationwide.",
  },
  {
    title: "Calm Study Tools",
    url: "https://www.calm.com/blog/study-tips",
    description:
      "Tips and tools from Calm to help manage stress during study sessions.",
  },
  {
    title: "JED Foundation",
    url: "https://jedfoundation.org/",
    description:
      "Protecting emotional health and preventing suicide among teens and young adults.",
  },
];

export const weeklyChallenges = [
  "📵 Go phone-free for 1 hour today and journal about the experience.",
  "🌿 Take a 15-minute walk outside without any music or podcasts.",
  "📝 Write down 5 things you are grateful for before bed tonight.",
  "💤 Set a 'digital sunset' tonight—no screens 1 hour before sleep.",
  "🧘 Try a 5-minute guided breathing exercise during a study break.",
  "💬 Reach out to a friend you haven't spoken to in a while.",
];
