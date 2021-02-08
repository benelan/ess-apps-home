import type { PopupInfo } from "./popup.type";

export type AppInfo = {
  title: string;
  body: string;
  url?: string;
  modalTitle?: string;
  popup?: Array<PopupInfo>;
};
