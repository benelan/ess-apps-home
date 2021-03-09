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
          "https://esriis.sharepoint.com/sites/AnalyticsRED1/SitePages/UnitResources.aspx",
      },
      {
        popupTitle: "Enterprise",
        popupUrl:
          "https://esriis.sharepoint.com/sites/EnterpriseUnitTeam/SitePages/EnterpriseUnitResources/Home.aspx",
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
          "https://esriis.sharepoint.com/teams/EsriSupportServicesDomestic/Absences/SitePages/essa/arcgis.aspx",
      },
      {
        popupTitle: "DaD Products",
        popupUrl:
          "https://esriis.sharepoint.com/teams/EsriSupportServicesDomestic/Absences/SitePages/essa/dpdm.aspx",
      },
      {
        popupTitle: "Desktop",
        popupUrl:
          "https://esriis.sharepoint.com/teams/EsriSupportServicesDomestic/Absences/SitePages/essa/desktop.aspx",
      },
      {
        popupTitle: "Enterprise",
        popupUrl:
          "https://esriis.sharepoint.com/teams/EsriSupportServicesDomestic/Absences/SitePages/essa/enterprise.aspx",
      },
      {
        popupTitle: "Management",
        popupUrl:
          "https://esriis.sharepoint.com/teams/EsriSupportServicesDomestic/AbsencesMgmt/SitePages/essam/Home.aspx",
      },
    ],
  },
  {
    title: "Join the TS/PS Program",
    body: "Submit a request or recommend an analyst to participate in the TS/PS Collaboration Program",
    url: "https://forms.office.com/Pages/ResponsePage.aspx?id=yePmrh5xfEy9JwTyMH2yDdNrs7P98jpGujXzzo8SGOVUQ001Q0FNSUE2RTREUjFZV0Q1TzE5SU9BRS4u",
  }
];

export default apps;
