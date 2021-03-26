import type { AppInfo } from "../types/app.type";

const apps: Array<AppInfo> = [
  {
    title: "Devices",
    body: "Find and check-out devices for testing.",
    url: "https://essapps.esri.com/devices",
  },
  {
    title: "Products",
    body: "Determine which team/queue supports a product.",
    url: "https://essapps.esri.com/products",
  },
  {
    title: "Requests",
    body: "Generate an email for training and exam requests.",
    url: "https://essapps.esri.com/requests",
  },
  {
    title: "Resources",
    body: "Share testing resources with your team.",
    modalTitle: "Pick Your Team",
    popup: [
      {
        popupTitle: "DaD Products",
        popupUrl:
          "http://essapps.esri.com/resources/dadp",
      },
      {
        popupTitle: "Enterprise",
        popupUrl:
          "https://essapps.esri.com/resources/enterprise",
      },
    ],
  },
  {
    title: "Absences",
    body: "Inform management of an upcoming absence.",
    modalTitle: "Pick Your Team",
    popup: [
      {
        popupTitle: "ArcGIS",
        popupUrl:
          "http://essapps.esri.com/absences/arcgis",
      },
      {
        popupTitle: "DaD Products",
        popupUrl:
          "http://essapps.esri.com/absences/dadp",
      },
      {
        popupTitle: "Desktop",
        popupUrl:
          "http://essapps.esri.com/absences/desktop",
      },
      {
        popupTitle: "Enterprise",
        popupUrl:
          "https://essapps.esri.com/absences/enterprise",
      },
      {
        popupTitle: "Management",
        popupUrl:
          "http://essapps.esri.com/absences/management",
      },
    ],
  },
  {
    title: "Join the TS/PS Program",
    body: "Submit a request or recommend an analyst to participate in the TS/PS Collaboration Program",
    url: "https://essapps.esri.com/tsps/join",
  }
];

export default apps;
