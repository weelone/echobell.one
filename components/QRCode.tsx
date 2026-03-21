"use client";

import { QRCodeSVG } from "qrcode.react";

export function AppStoreQRCode({ value }: { value: string }) {
  return (
    <QRCodeSVG
      className="w-20 h-20"
      value={value}
      bgColor="transparent"
      fgColor="currentColor"
    />
  );
}
