import { Bot, Sparkles, Shield, Music, Zap, MessageSquare, Globe, Github, Twitter, Mail } from "lucide-react";
import prayagAvatar from "@/assets/prayag-avatar.jpg";

export const siteConfig = {
  bot: {
    name: "Solo Bot",
    tagline: "The next-generation Discord bot",
    description:
      "Solo Bot is an all-in-one Discord bot crafted for modern communities. Moderation, music, fun, utilities — beautifully designed and lightning fast.",
    version: "v3.2.0",
    servers: "50+",
    users: "2k+",
    commands: 240,
    uptime: "99.99%",
    inviteUrl: "https://discord.com/oauth2/authorize",
    supportUrl: "https://discord.gg/McpypWYTDX",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Commands", href: "/commands" },
    { label: "About", href: "/about" },
    { label: "Privacy", href: "/privacy" },
  ],

  features: [
    {
      icon: Shield,
      title: "Advanced Moderation",
      description:
        "AI-powered auto-mod, raid protection, and granular permission controls keep your server safe 24/7.",
    },
    {
      icon: Music,
      title: "High-Fidelity Music",
      description:
        "Crystal clear lossless audio streaming from Spotify, YouTube, SoundCloud and Apple Music.",
    },
    {
      icon: Sparkles,
      title: "Custom Embeds",
      description:
        "Create stunning announcements with our visual embed builder — no code required.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Globally distributed infrastructure ensures every command responds in under 50ms.",
    },
    {
      icon: MessageSquare,
      title: "Smart Tickets",
      description:
        "A complete support system with transcripts, categories and staff assignments.",
    },
    {
      icon: Globe,
      title: "20+ Languages",
      description:
        "Fully translated experience for your international community members.",
    },
  ],

  commandCategories: [
    {
      name: "Moderation",
      icon: Shield,
      commands: [
        { name: "/ban", description: "Ban a member from the server", usage: "/ban <user> [reason]" },
        { name: "/kick", description: "Kick a member from the server", usage: "/kick <user> [reason]" },
        { name: "/mute", description: "Timeout a member", usage: "/mute <user> <duration>" },
        { name: "/warn", description: "Issue a warning to a member", usage: "/warn <user> <reason>" },
        { name: "/purge", description: "Bulk delete messages", usage: "/purge <amount>" },
      ],
    },
    {
      name: "Music",
      icon: Music,
      commands: [
        { name: "/play", description: "Play a song or playlist", usage: "/play <query>" },
        { name: "/queue", description: "View the current music queue", usage: "/queue" },
        { name: "/skip", description: "Skip the current track", usage: "/skip" },
        { name: "/lyrics", description: "Fetch lyrics for the current song", usage: "/lyrics" },
        { name: "/loop", description: "Loop track or queue", usage: "/loop <mode>" },
      ],
    },
    {
      name: "Utility",
      icon: Zap,
      commands: [
        { name: "/serverinfo", description: "Display server statistics", usage: "/serverinfo" },
        { name: "/userinfo", description: "Display user information", usage: "/userinfo <user>" },
        { name: "/avatar", description: "Show user avatar in HD", usage: "/avatar <user>" },
        { name: "/poll", description: "Create an interactive poll", usage: "/poll <question>" },
        { name: "/remind", description: "Set a personal reminder", usage: "/remind <time> <text>" },
      ],
    },
    {
      name: "Fun",
      icon: Sparkles,
      commands: [
        { name: "/meme", description: "Get a random fresh meme", usage: "/meme" },
        { name: "/8ball", description: "Ask the magic 8-ball", usage: "/8ball <question>" },
        { name: "/trivia", description: "Start a trivia game", usage: "/trivia" },
        { name: "/ship", description: "Calculate love compatibility", usage: "/ship <user1> <user2>" },
      ],
    },
  ],

  team: [
    {
      name: "Solo Dev",
      role: "Founder & Lead Developer",
      bio: "Architects the core. Loves clean code and late-night debugging.",
      avatar: prayagAvatar,
      socials: { github: "#", twitter: "#" },
    },
    {
      name: "Solo Team",
      role: "Product Designer",
      bio: "Crafts the pixels you fall in love with.",
      avatar: "",
      socials: { github: "#", twitter: "#" },
    },
  ],

  faqs: [
    {
      q: "Is Solo Bot free to use?",
      a: "Yes, all core features are completely free. Premium features may be added in the future.",
    },
    {
      q: "How do I add Solo Bot to my server?",
      a: "Click the Invite button anywhere on the site and authorize the bot.",
    },
    {
      q: "Does Solo Bot store my messages?",
      a: "No. Only necessary configuration data is stored.",
    },
    {
      q: "Can I request a new feature?",
      a: "Yes, join our Discord server and suggest features.",
    },
    {
      q: "What happens if the bot goes offline?",
      a: "We use high uptime infrastructure. Updates are posted in our Discord.",
    },
  ],

  contact: {
    youtube: "https://www.youtube.com/@IAmISolo",
    instagram: "https://www.instagram.com/iamisolo",
    discord: "https://discord.gg/McpypWYTDX",
  },

  socials: [
  { icon: Globe, href: "https://www.youtube.com/@IAmISolo", label: "YouTube" },
  { icon: Sparkles, href: "https://www.instagram.com/iamisolo", label: "Instagram" },
  { icon: MessageSquare, href: "https://discord.gg/McpypWYTDX", label: "Discord" },
],

  privacy: {
    lastUpdated: "April 18 2026",
    sections: [
      {
        title: "Information We Collect",
        body: "We collect minimal data required for the bot to function.",
      },
      {
        title: "How We Use Your Data",
        body: "Your data is used only for bot functionality.",
      },
      {
        title: "Data Retention",
        body: "When Solo Bot is removed, all data is deleted within 30 days.",
      },
      {
        title: "Your Rights",
        body: "You can request deletion anytime.",
      },
    ],
  },

  terms: {
    sections: [
      {
        title: "Acceptable Use",
        body: "Do not misuse Solo Bot or use it for illegal activities.",
      },
      {
        title: "Service Availability",
        body: "Solo Bot is provided as-is with high uptime but no guarantees.",
      },
      {
        title: "Changes to Terms",
        body: "We may update terms anytime.",
      },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
