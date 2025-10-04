import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  facebook,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
    Agency,
  Freelancer,
  Startup,
  Enterprise,
  notion,
  plusSquare,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  github,
  twitter,

  service1,
  service3,
  Linkedin,
  Youtube,
} from "../assets";
export const navigation = [
  { id: "0", title: "Features", url: "/#features" },
  { id: "1", title: "Use Cases", url: "/#use-cases" },
  { id: "2", title: "pricing", url: "/pricing" },
  { id: "3", title: "Contact us", url: "/contact" },
  { id: "4", title: "Demo", url: "/#demo", onlyMobile: true },
  { id: "5", title: "Start", url: "/#login", onlyMobile: true },
];



export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [
  {
    id: "0",
    title: "Content Creators",
    imageUrl: Agency,
  },
  {
    id: "1",
    title: "Marketing Teams",
    imageUrl: Freelancer,
  },
  {
    id: "2",
    title: "Startups & Entrepreneurs",
    imageUrl: Startup,
  },
  {
    id: "3",
    title: "Agencies & Enterprises",
    imageUrl: Enterprise,
  },
];


export const pricingPlans = {
  monthly: [
    {
      id: "free",
      title: "Free",
      description: "Perfect for creators just getting started",
      price: "0",
      frequency: "/month",
      features: [
        "10 AI video generations / month",
        "Basic captions & subtitles",
        "Watermarked videos",
        "Auto-post to 1 YouTube or Instagram account",
        "Community support",
      ],
      cta: "Current Plan",
    },
    {
      id: "pro",
      title: "Pro",
      description: "For solo creators & small businesses",
      price: "29",
      frequency: "/month",
      features: [
        "Unlimited AI video generations",
        "HD export without watermark",
        "AI captions & hashtags",
        "AI voiceovers (10+ languages)",
        "Auto-post to 5 social accounts",
        "Priority email support",
      ],
      cta: "Upgrade to Pro",
      popular: true,
    },
    {
      id: "premium",
      title: "Premium",
      description: "For agencies & content teams",
      price: "99",
      frequency: "/month",
      features: [
        "Everything in Pro",
        "4K video exports",
        "Team collaboration (5 seats)",
        "Custom brand templates & intros",
        "Unlimited social accounts",
        "Video scheduling & bulk uploads",
        "1-on-1 onboarding call",
      ],
      cta: "Upgrade to Premium",
    },
    {
      id: "enterprise",
      title: "Enterprise",
      description: "For large creators, brands & media houses",
      price: null,
      frequency: null,
      features: [
        "Everything in Premium",
        "Dedicated account manager",
        "White-label video studio",
        "Custom AI avatar training",
        "Enterprise-grade security",
        "Custom integrations & APIs",
        "24/7 phone support",
      ],
      cta: "Contact Sales",
    },
  ],
  yearly: [
    {
      id: "free",
      title: "Free",
      description: "Perfect for creators just getting started",
      price: "0",
      frequency: "/year",
      features: [
        "10 AI video generations / month",
        "Basic captions & subtitles",
        "Watermarked videos",
        "Auto-post to 1 YouTube or Instagram account",
        "Community support",
      ],
      cta: "Current Plan",
    },
    {
      id: "pro",
      title: "Pro",
      description: "For solo creators & small businesses",
      price: "299",
      frequency: "/year",
      features: [
        "Unlimited AI video generations",
        "HD export without watermark",
        "AI captions & hashtags",
        "AI voiceovers (10+ languages)",
        "Auto-post to 5 social accounts",
        "Priority email support",
      ],
      cta: "Upgrade to Pro",
      popular: true,
    },
    {
      id: "premium",
      title: "Premium",
      description: "For agencies & content teams",
      price: "999",
      frequency: "/year",
      features: [
        "Everything in Pro",
        "4K video exports",
        "Team collaboration (5 seats)",
        "Custom brand templates & intros",
        "Unlimited social accounts",
        "Video scheduling & bulk uploads",
        "1-on-1 onboarding call",
      ],
      cta: "Upgrade to Premium",
    },
    {
      id: "enterprise",
      title: "Enterprise",
      description: "For large creators, brands & media houses",
      price: null,
      frequency: null,
      features: [
        "Everything in Premium",
        "Dedicated account manager",
        "White-label video studio",
        "Custom AI avatar training",
        "Enterprise-grade security",
        "Custom integrations & APIs",
        "24/7 phone support",
      ],
      cta: "Contact Sales",
    },
  ],
};


export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Daily Sales Education",
    text: "Receive unique B2B/PLG sales insights in your inbox every day, auto-scheduled at 9 AM with a 7-day rotating curriculum.",
    date: "DASH AI",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Meeting Prep & Notes",
    text: "Check your calendar, research attendees, generate prep notes, and structure them into Notion before every meeting.",
    date: "DASH AI",
    status: "done",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Sprint Planning",
    text: "Automatically fetch Linear issues, organize them into Google Sheets, and assign tasks based on priority.",
    date: "DASH AI",
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Talent Screening",
    text: "Review job applications, identify ‘cracked’ candidates, and forward the best profiles with context to your CTO.",
    date: "DASH AI",
    status: "done",
    imageUrl: roadmap4,
  },
  {
    id: "4",
    title: "Investor Research",
    text: "Research competitors’ investors, build a rich investor database with contact strategies and analysis in Google Sheets.",
    date: "DASH AI",
    status: "done",
    imageUrl: service1,
  },
  {
    id: "5",
    title: "Automated Daily Workflow Creation",
    text: "Dash creates your daily workflow, combining task prioritization, calendar sync, and outreach setup — all prepped before your day starts.",
    date: "Upcoming",
    status: "done",
    imageUrl: service3,
  },
];

export const brainbaseCollabContent = [
  {
    id: 1,
    title: "Works across all your content sources",
    text: "Vidogen connects scripts, media assets, and AI tools into a seamless workflow for video creation.",
  },
  {
    id: 2,
    title: "Automates video generation",
    text: "From script to final render, Vidogen generates, edits, and formats videos automatically for any platform.",
  },
  {
    id: 3,
    title: "Built for modern creators",
    text: "Vidogen fits into your workflow—whether you’re producing marketing, tutorials, or social media content.",
  },
];

export const brainbaseCollabText =
  "Vidogen integrates scripts, avatars, and assets, then automatically generates videos—ready to publish, download, or schedule across platforms.";

export const collabApps = [
  {
    id: "0",
    title: "YouTube",
    icon: "https://img.icons8.com/?size=96&id=ot8QhAKun4rZ&format=png",
    width: 36,
    height: 36,
  },
    {
    id: "5",
    title: "reel",
    icon: "https://img.icons8.com/?size=160&id=2nO8JYag8jfc&format=png",
    width: 36,
    height: 36,
  },
  {
    id: "1",
    title: "TikTok",
    icon: "https://img.icons8.com/?size=160&id=GN6LgEfShU2b&format=png",
    width: 36,
    height: 36,
  },
  {
    id: "2",
    title: "Instagram",
    icon: "https://img.icons8.com/?size=160&id=TEYr8ETaIfBJ&format=png",
    width: 36,
    height: 36,
  },
  {
    id: "3",
    title: "Facebook",
    icon: "https://img.icons8.com/?size=160&id=118555&format=png",
    width: 36,
    height: 36,
  },
      {
    id: "6",
    title: "youtube",
    icon: "https://img.icons8.com/?size=160&id=BAxd3cJ9Cbda&format=png",
    width: 36,
    height: 36,
  },
  {
    id: "4",
    title: "LinkedIn",
    icon: "https://img.icons8.com/?size=160&id=64154&format=png",
    width: 36,
    height: 36,
  },
  {
    id: "5",
    title: "Twitter",
    icon: "https://img.icons8.com/?size=96&id=juMonkXG5u3u&format=png",
    width: 36,
    height: 36,
  }
];


export const team = [
  {
    name: "Pranjali Awasthi",
    role: "Founder & CEO",
    bio: "Building future of work — 18 y/o serial founder, previously launched AI copilots in high school.",
    photo: "https://bookface-images.s3.us-west-2.amazonaws.com/avatars/8a216a6d4bbf33ad14dbd403008f66c3b3c8832a.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAQC4NIECABIJL3KEJ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T102721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIGqMhFt4y8l1EDNDOo%2FaQ1aZOLiUBB2iMu%2F8JSWPH%2Fn%2FAiAL%2FyUP8VfETL19bktzqP8UZQWcNvsNPC%2BdibvWgV3y2SrlAwhvEAAaDDAwNjIwMTgxMTA3MiIMEzNJNQBb3QLlt81hKsIDUHeHJFtGRunps12pIyHXGN%2BrwJqO6VL4OP2cdI13mA1bo%2BioIwd7Wl1OWCV%2FXRXi7MIZSiN8aZVRWqkCpCJqOCFwLFDxlH2k3DiOMJYHAF412UoBYrpSeIjGGU%2FxGWpT7huOR1fUH6MN6NnoV4GeQ1DssrZc9cbSo1Y8NTvlixK86u%2Ba3bZpNlsA7evgbLZrUouH%2BuykH9NIzy41R%2BJC8mcI%2FVEQuntQ9%2FpEiIv5tf6G%2BZB4jfZU3U05m9DtCtnI5vjSGnNZr8xK%2FCFMoWrQYItVk2TLGIutfdDFk1rdAM906jLSWoJbbLypqc%2BYeFlxiIcbnneqL2S%2FmsenBlWM31i%2FGxtV5taAvVWYMtMv87bX6GHfwibQnT15i%2BCObtI%2BnGgfewT7JIPsX8ZaMG%2BUvhMJjLyvYWMiuYOex0B09KwgXc139rxNcNoep%2BS%2FN2CD2YLChBXXR%2FEe1qqfGWWUYD7xNiXpkLh%2B%2BHtt1BRRTcHA204j%2FYnMct%2B%2F99%2F%2F0FGloyrvwXZCKrUSBl1RknTVEmLsmKzBMH3t9LgJeegR6xXnhBsv4KbZpV%2FOPMbYAmYim7ax9%2Ft9vo8eJvIb4bASOQ9tMKbx%2BMIGOqYB9t6rfK0unb73LBKnVWvuTWtWHvzgmJ%2FFbgBGtfL7tXExHRzXx2TWcbG5h2LnJlprSNe8BTsC97k5So%2BL1HRDjByo012QlqLI9PEtl5%2BMBoTkfWteuVSExv0omMIEjGm75VFPsd%2B22A4h6ZemcFTNOc9a%2FZTIKY3GMZoxw3LPqEJB%2FtR7Ad17cdMd81quqdfGprOmTRdxb7jG0WxBvZLsPpXnp7%2FCpA%3D%3D&X-Amz-SignedHeaders=host&X-Amz-Signature=a8943e5d0c7af68cbfb8cec13c94f7a260eb8064a92261f8b16d2fe8a6d47633",
    twitter: "https://twitter.com/PranjaliAwasthi",
  },
  {
    name: "Harsha Gaddipati",
    role: "Founder & COO",
    bio: "CS grad (Georgia Tech), ex-AWS, published in Space Policy — running ops at Dash.",
    photo: "https://bookface-images.s3.us-west-2.amazonaws.com/avatars/92acbfaee472f1cb2f0391cce84807835e411573.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAQC4NIECABIJL3KEJ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T102721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIGqMhFt4y8l1EDNDOo%2FaQ1aZOLiUBB2iMu%2F8JSWPH%2Fn%2FAiAL%2FyUP8VfETL19bktzqP8UZQWcNvsNPC%2BdibvWgV3y2SrlAwhvEAAaDDAwNjIwMTgxMTA3MiIMEzNJNQBb3QLlt81hKsIDUHeHJFtGRunps12pIyHXGN%2BrwJqO6VL4OP2cdI13mA1bo%2BioIwd7Wl1OWCV%2FXRXi7MIZSiN8aZVRWqkCpCJqOCFwLFDxlH2k3DiOMJYHAF412UoBYrpSeIjGGU%2FxGWpT7huOR1fUH6MN6NnoV4GeQ1DssrZc9cbSo1Y8NTvlixK86u%2Ba3bZpNlsA7evgbLZrUouH%2BuykH9NIzy41R%2BJC8mcI%2FVEQuntQ9%2FpEiIv5tf6G%2BZB4jfZU3U05m9DtCtnI5vjSGnNZr8xK%2FCFMoWrQYItVk2TLGIutfdDFk1rdAM906jLSWoJbbLypqc%2BYeFlxiIcbnneqL2S%2FmsenBlWM31i%2FGxtV5taAvVWYMtMv87bX6GHfwibQnT15i%2BCObtI%2BnGgfewT7JIPsX8ZaMG%2BUvhMJjLyvYWMiuYOex0B09KwgXc139rxNcNoep%2BS%2FN2CD2YLChBXXR%2FEe1qqfGWWUYD7xNiXpkLh%2B%2BHtt1BRRTcHA204j%2FYnMct%2B%2F99%2F%2F0FGloyrvwXZCKrUSBl1RknTVEmLsmKzBMH3t9LgJeegR6xXnhBsv4KbZpV%2FOPMbYAmYim7ax9%2Ft9vo8eJvIb4bASOQ9tMKbx%2BMIGOqYB9t6rfK0unb73LBKnVWvuTWtWHvzgmJ%2FFbgBGtfL7tXExHRzXx2TWcbG5h2LnJlprSNe8BTsC97k5So%2BL1HRDjByo012QlqLI9PEtl5%2BMBoTkfWteuVSExv0omMIEjGm75VFPsd%2B22A4h6ZemcFTNOc9a%2FZTIKY3GMZoxw3LPqEJB%2FtR7Ad17cdMd81quqdfGprOmTRdxb7jG0WxBvZLsPpXnp7%2FCpA%3D%3D&X-Amz-SignedHeaders=host&X-Amz-Signature=f07de35e01ffeb7910082e8ee35e0c0521935f27829d5f2f1a6def9a27a44f99",
    twitter: "https://twitter.com/harshagaddi",
  },
  {
    name: "Dhruv Roongta",
    role: "Founder & CTO",
    bio: "Ex-Groq & Pulse, HackMIT winner — leading engineering and AI innovation.",
    photo: "https://bookface-images.s3.us-west-2.amazonaws.com/avatars/f726696878d0aea7136b4e35aa639a734d81387c.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAQC4NIECABIJL3KEJ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T102721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIGqMhFt4y8l1EDNDOo%2FaQ1aZOLiUBB2iMu%2F8JSWPH%2Fn%2FAiAL%2FyUP8VfETL19bktzqP8UZQWcNvsNPC%2BdibvWgV3y2SrlAwhvEAAaDDAwNjIwMTgxMTA3MiIMEzNJNQBb3QLlt81hKsIDUHeHJFtGRunps12pIyHXGN%2BrwJqO6VL4OP2cdI13mA1bo%2BioIwd7Wl1OWCV%2FXRXi7MIZSiN8aZVRWqkCpCJqOCFwLFDxlH2k3DiOMJYHAF412UoBYrpSeIjGGU%2FxGWpT7huOR1fUH6MN6NnoV4GeQ1DssrZc9cbSo1Y8NTvlixK86u%2Ba3bZpNlsA7evgbLZrUouH%2BuykH9NIzy41R%2BJC8mcI%2FVEQuntQ9%2FpEiIv5tf6G%2BZB4jfZU3U05m9DtCtnI5vjSGnNZr8xK%2FCFMoWrQYItVk2TLGIutfdDFk1rdAM906jLSWoJbbLypqc%2BYeFlxiIcbnneqL2S%2FmsenBlWM31i%2FGxtV5taAvVWYMtMv87bX6GHfwibQnT15i%2BCObtI%2BnGgfewT7JIPsX8ZaMG%2BUvhMJjLyvYWMiuYOex0B09KwgXc139rxNcNoep%2BS%2FN2CD2YLChBXXR%2FEe1qqfGWWUYD7xNiXpkLh%2B%2BHtt1BRRTcHA204j%2FYnMct%2B%2F99%2F%2F0FGloyrvwXZCKrUSBl1RknTVEmLsmKzBMH3t9LgJeegR6xXnhBsv4KbZpV%2FOPMbYAmYim7ax9%2Ft9vo8eJvIb4bASOQ9tMKbx%2BMIGOqYB9t6rfK0unb73LBKnVWvuTWtWHvzgmJ%2FFbgBGtfL7tXExHRzXx2TWcbG5h2LnJlprSNe8BTsC97k5So%2BL1HRDjByo012QlqLI9PEtl5%2BMBoTkfWteuVSExv0omMIEjGm75VFPsd%2B22A4h6ZemcFTNOc9a%2FZTIKY3GMZoxw3LPqEJB%2FtR7Ad17cdMd81quqdfGprOmTRdxb7jG0WxBvZLsPpXnp7%2FCpA%3D%3D&X-Amz-SignedHeaders=host&X-Amz-Signature=5d4cd51ce73a7b0ed6c37e53e021fd4613cede6c6b1dc2fb6999d9c09c84da4e",
    twitter: "#",
  },
];


export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/wedgehealth",
  },
  {
    id: "1",
    title: "Linkedin",
    iconUrl: Linkedin,
    url: "https://www.linkedin.com/company/wedge-ai/",
  },
  
];
