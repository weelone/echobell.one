"use client";

import { APP_STORE_LINK } from "@/constants";
import { QRCodeSVG } from "qrcode.react";

export function AppStoreQRCode() {
  return (
    <QRCodeSVG
      className="w-20 h-20"
      value={APP_STORE_LINK}
      bgColor="transparent"
      fgColor="currentColor"
    />
  );
}
