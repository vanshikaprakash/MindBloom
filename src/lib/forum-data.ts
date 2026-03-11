export interface Reply {
  id: string;
  author: string;
  timestamp: string;
  body: string;
}

export interface ForumThread {
  id: string;
  title: string;
  body: string;
  author: string;
  timestamp: string;
  replies: Reply[];
}

export const forumThreads: ForumThread[] = [
  {
    id: "thread-1",
    title: "How do you manage exam stress?",
    body: "Finals are coming up and I feel completely overwhelmed. I have 4 exams in 5 days and I can barely keep up with the revision. Does anyone have strategies that actually work?",
    author: "Student A",
    timestamp: "2 hours ago",
    replies: [
      {
        id: "reply-1",
        author: "Student B",
        timestamp: "1 hour ago",
        body: "I break my study sessions into 25-minute blocks with 5-minute breaks (Pomodoro Technique). It really helps me stay focused without burning out.",
      },
      {
        id: "reply-2",
        author: "Student C",
        timestamp: "45 minutes ago",
        body: "Try to get enough sleep! I know it's tempting to pull all-nighters, but sleep helps your brain consolidate what you've studied.",
      },
    ],
  },
  {
    id: "thread-2",
    title: "Feeling homesick — is it normal?",
    body: "This is my first semester away from home and I miss my family a lot. Some days it's hard to focus on anything. Is anyone else going through this?",
    author: "Student D",
    timestamp: "1 day ago",
    replies: [
      {
        id: "reply-3",
        author: "Student E",
        timestamp: "20 hours ago",
        body: "Totally normal! I felt the same way. What helped me was scheduling a weekly video call with my family — having something to look forward to made a big difference.",
      },
    ],
  },
  {
    id: "thread-3",
    title: "Best study playlists?",
    body: "I need some good background music for studying. Lo-fi? Classical? What do you all listen to?",
    author: "Student F",
    timestamp: "3 days ago",
    replies: [
      {
        id: "reply-4",
        author: "Student G",
        timestamp: "2 days ago",
        body: "Lo-fi hip hop beats are my go-to! There are great playlists on YouTube and Spotify that run for hours.",
      },
      {
        id: "reply-5",
        author: "Student H",
        timestamp: "2 days ago",
        body: "I prefer nature sounds — rain and thunder work best for me. It blocks out distractions without being too catchy.",
      },
      {
        id: "reply-6",
        author: "Student I",
        timestamp: "1 day ago",
        body: "Classical music, especially anything by Debussy or Chopin. Really helps me get into a flow state.",
      },
    ],
  },
];
