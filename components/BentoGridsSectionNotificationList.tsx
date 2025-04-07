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
    <div className="relative flex items-center gap-x-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 p-4 ring-1 ring-neutral-900/5">
      {type === "call" ? (
        <div className="flex w-full gap-2 items-center">
          <div className="grow mr-auto">{title}</div>
          <div className="bg-green-500 text-white p-2 h-fit rounded-full">
            <PhoneIcon className="w-5 h-5" />
          </div>
          <div className="bg-red-500 text-white p-2 rounded-full">
            <PhoneOffIcon className="w-5 h-5" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          {type === "time-sensitive" && (
            <div className="text-sm opacity-60">{timeSensitiveLabel}</div>
          )}
          <div className="text-sm font-bold">{title}</div>
          <div className="text-sm">{body}</div>
        </div>
      )}
    </div>
  );
}
