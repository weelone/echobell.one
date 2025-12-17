"use client";

import { uiDictionary } from "@/lib/i18n";
import { AnimatedList } from "./magicui/animated-list";
import { PhoneIcon, PhoneOffIcon } from "lucide-react";

export default function BentoGridsSectionNotificationList({
  className,
  lang,
}: {
  className?: string;
  lang: string;
}) {
  const t = uiDictionary[lang as keyof typeof uiDictionary].features;
  const notificationList = Array.from(
    { length: 10 },
    () => t.notificationList
  ).flat();

  return (
    <AnimatedList className={className} delay={2000}>
      {notificationList.map((item, index) => (
        <NotificationItem
          key={index}
          timeSensitiveLabel={t.timeSensitive}
          type={item.type}
          title={item.title}
          body={item.body}
        />
      ))}
    </AnimatedList>
  );
}

function NotificationItem({
  timeSensitiveLabel,
  type,
  title,
  body,
}: {
  timeSensitiveLabel: string;
  type: string;
  title: string;
  body: string;
}) {
  return (
    <div className="relative flex items-center gap-x-3 rounded-2xl bg-neutral-100 dark:bg-neutral-800 p-4 shadow-sm ring-1 ring-neutral-900/5 dark:ring-white/5">
      {type === "call" ? (
        <div className="flex w-full gap-3 items-center">
          <div className="grow mr-auto font-medium text-sm">{title}</div>
          <div className="bg-green-500 hover:bg-green-600 text-white p-2.5 rounded-full transition-colors">
            <PhoneIcon className="w-4 h-4" />
          </div>
          <div className="bg-red-500 hover:bg-red-600 text-white p-2.5 rounded-full transition-colors">
            <PhoneOffIcon className="w-4 h-4" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-0.5">
          {type === "time-sensitive" && (
            <div className="text-xs font-medium text-orange-600 dark:text-orange-400">{timeSensitiveLabel}</div>
          )}
          <div className="text-sm font-semibold">{title}</div>
          <div className="text-sm opacity-70 line-clamp-2">{body}</div>
        </div>
      )}
    </div>
  );
}
