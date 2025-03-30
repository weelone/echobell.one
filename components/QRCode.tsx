"use client";

import { QRCodeSVG } from "qrcode.react";

export function AppStoreQRCode() {
  return (
    <QRCodeSVG
      className="w-20 h-20"
      value="#"
      bgColor="transparent"
      fgColor="currentColor"
    />
  );
}
