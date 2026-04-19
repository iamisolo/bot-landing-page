import { InfiniteMarquee } from "@/components/reactbits/InfiniteMarquee";
import { siteConfig } from "@/config/site";

export const StatsMarquee = () => {
  const items = [
    `${siteConfig.bot.servers} servers`,
    `${siteConfig.bot.users} users`,
    `${siteConfig.bot.commands}+ commands`,
    `${siteConfig.bot.uptime} uptime`,
    "Lossless audio",
    "AI moderation",
    "20+ languages",
    "<50ms latency",
  ];
  return (
    <section className="container max-w-6xl py-10">
      <InfiniteMarquee items={items} speed={35} />
    </section>
  );
};
