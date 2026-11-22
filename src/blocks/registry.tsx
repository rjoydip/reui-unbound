import { CustomerBalancesBlock } from "@/blocks/data-grid-base-1"
import { LeadScoringContactsBlock } from "@/blocks/data-grid-base-2"
import { DealPipelineBlock } from "@/blocks/data-grid-base-3"
import { WeeklyTimesheetBlock } from "@/blocks/data-grid-base-4"
import { SupportTicketsBlock } from "@/blocks/data-grid-base-5"
import { TeamMembersBlock } from "@/blocks/data-grid-base-6"
import { ProjectModulesBlock } from "@/blocks/data-grid-base-7"
import { CloudRateCardBlock } from "@/blocks/data-grid-base-8"
import { ApiRequestLogsBlock } from "@/blocks/data-grid-base-9"

import { AccessPermissionsBlock } from "@/blocks/data-grid-columns-1"
import { CourseCatalogBlock } from "@/blocks/data-grid-columns-2"
import { WorkQueueBlock } from "@/blocks/data-grid-columns-3"
import { MemberColumnsBlock } from "@/blocks/data-grid-columns-4"
import { CompanyAttributesBlock } from "@/blocks/data-grid-columns-5"

import { SprintBacklogBlock } from "@/blocks/data-grid-drag-drop-1"
import { RoutingRulesBlock } from "@/blocks/data-grid-drag-drop-2"
import { DispatchLayoutBlock } from "@/blocks/data-grid-drag-drop-3"
import { SharedDriveBlock } from "@/blocks/data-grid-drag-drop-4"

import { LabelManagerBlock } from "@/blocks/data-grid-editing-1"
import { ProductInventoryBlock } from "@/blocks/data-grid-editing-2"
import { ProjectIntakeBlock } from "@/blocks/data-grid-editing-3"
import { PricingPlanEditorBlock } from "@/blocks/data-grid-editing-4"
import { TaskSpreadsheetBlock } from "@/blocks/data-grid-editing-5"
import { StockReorderPlanBlock } from "@/blocks/data-grid-editing-6"

import { TaskDeliveryBlock } from "@/blocks/data-grid-expansion-1"
import { TreasuryWaterfallBlock } from "@/blocks/data-grid-expansion-2"
import { ReleaseReviewsBlock } from "@/blocks/data-grid-expansion-3"

import { BillingTransactionsBlock } from "@/blocks/data-grid-filtering-1"

import { AutomationLibraryBlock } from "@/blocks/data-grid-filtering-2"

import { RenewalsReviewBlock } from "@/blocks/data-grid-filtering-3"

import { AtRiskRenewalsBlock } from "@/blocks/data-grid-filtering-4"

import { RoadmapQueueBlock } from "@/blocks/data-grid-grouping-1"

import { RevenueByRegionBlock } from "@/blocks/data-grid-grouping-2"

import { PatientAccessCohortsBlock } from "@/blocks/data-grid-grouping-3"

import { BillOfMaterialsBlock } from "@/blocks/data-grid-grouping-4"

import { ReportingLinesBlock } from "@/blocks/data-grid-grouping-5"

import { ProductionDeskBlock } from "@/blocks/data-grid-grouping-6"

import { DeliveryBoardBlock } from "@/blocks/data-grid-grouping-7"

import { TransactionsVirtualizedBlock } from "@/blocks/data-grid-virtualization-1"

import { ExceptionQueueBlock } from "@/blocks/data-grid-virtualization-2"

import AdCampaignPerformanceBlock from "@/blocks/data-grid-advanced-1"
import RegionalStorePnlBlock from "@/blocks/data-grid-advanced-2"
import CampaignTargetReviewBlock from "@/blocks/data-grid-advanced-3"
import SloReliabilityIndexBlock from "@/blocks/data-grid-advanced-4"
import WholesaleOnboardingBlock from "@/blocks/data-grid-advanced-5"
import StockMixBlock from "@/blocks/data-grid-advanced-6"
import FourplexProFormaBlock from "@/blocks/data-grid-advanced-7"
import ProductKpiGridBlock from "@/blocks/data-grid-advanced-8"
import ServiceVisitPlannerBlock from "@/blocks/data-grid-advanced-9"
import TechnicianCapacityBlock from "@/blocks/data-grid-advanced-10"
import FactoryScorecardBlock from "@/blocks/data-grid-advanced-11"
import FreightLanesBlock from "@/blocks/data-grid-advanced-12"
import HrScorecardBlock from "@/blocks/data-grid-advanced-13"
import StrategyScorecardBlock from "@/blocks/data-grid-advanced-14"
import RetailPnlBlock from "@/blocks/data-grid-advanced-15"
import StoreKpiBoardBlock from "@/blocks/data-grid-advanced-16"
import SupportScorecardBlock from "@/blocks/data-grid-advanced-17"
import JobScheduleBlock from "@/blocks/data-grid-advanced-18"
import ProspectDatabaseBlock from "@/blocks/data-grid-advanced-19"
import ProjectBudgetBlock from "@/blocks/data-grid-advanced-20"
import { InvoiceManagerBlock } from "@/blocks/data-grid-advanced-21"

import base1Index from "@/blocks/data-grid-base-1/index.tsx?raw"
import base1Parts from "@/blocks/data-grid-base-1/parts.tsx?raw"
import base1CustomerSheets from "@/blocks/data-grid-base-1/customer-sheets.tsx?raw"
import base1Data from "@/blocks/data-grid-base-1/data.ts?raw"
import base2Index from "@/blocks/data-grid-base-2/index.tsx?raw"
import base2Parts from "@/blocks/data-grid-base-2/parts.tsx?raw"
import base2ContactFilters from "@/blocks/data-grid-base-2/contact-filters.tsx?raw"
import base2ContactSheets from "@/blocks/data-grid-base-2/contact-sheets.tsx?raw"
import base2Data from "@/blocks/data-grid-base-2/data.ts?raw"
import base3Index from "@/blocks/data-grid-base-3/index.tsx?raw"
import base3Parts from "@/blocks/data-grid-base-3/parts.tsx?raw"
import base3PipelineFilters from "@/blocks/data-grid-base-3/pipeline-filters.tsx?raw"
import base3Data from "@/blocks/data-grid-base-3/data.ts?raw"
import base4Index from "@/blocks/data-grid-base-4/index.tsx?raw"
import base4Parts from "@/blocks/data-grid-base-4/parts.tsx?raw"
import base4Data from "@/blocks/data-grid-base-4/data.ts?raw"
import base5Index from "@/blocks/data-grid-base-5/index.tsx?raw"
import base5Parts from "@/blocks/data-grid-base-5/parts.tsx?raw"
import base5Data from "@/blocks/data-grid-base-5/data.ts?raw"
import base6Index from "@/blocks/data-grid-base-6/index.tsx?raw"
import base6Data from "@/blocks/data-grid-base-6/data.ts?raw"
import base7Index from "@/blocks/data-grid-base-7/index.tsx?raw"
import base7Data from "@/blocks/data-grid-base-7/data.ts?raw"
import base8Index from "@/blocks/data-grid-base-8/index.tsx?raw"
import base8Data from "@/blocks/data-grid-base-8/data.ts?raw"
import base9Index from "@/blocks/data-grid-base-9/index.tsx?raw"
import base9TrafficChart from "@/blocks/data-grid-base-9/traffic-chart.tsx?raw"
import base9LogSheet from "@/blocks/data-grid-base-9/log-sheet.tsx?raw"
import base9Data from "@/blocks/data-grid-base-9/data.ts?raw"

import columns1Index from "@/blocks/data-grid-columns-1/index.tsx?raw"
import columns1Data from "@/blocks/data-grid-columns-1/data.ts?raw"
import columns2Index from "@/blocks/data-grid-columns-2/index.tsx?raw"
import columns2Data from "@/blocks/data-grid-columns-2/data.ts?raw"
import columns3Index from "@/blocks/data-grid-columns-3/index.tsx?raw"
import columns3Data from "@/blocks/data-grid-columns-3/data.ts?raw"
import columns4Index from "@/blocks/data-grid-columns-4/index.tsx?raw"
import columns4Data from "@/blocks/data-grid-columns-4/data.ts?raw"
import columns5Index from "@/blocks/data-grid-columns-5/index.tsx?raw"
import columns5Data from "@/blocks/data-grid-columns-5/data.ts?raw"

import dnd1Index from "@/blocks/data-grid-drag-drop-1/index.tsx?raw"
import dnd1Data from "@/blocks/data-grid-drag-drop-1/data.ts?raw"
import dnd2Index from "@/blocks/data-grid-drag-drop-2/index.tsx?raw"
import dnd2Data from "@/blocks/data-grid-drag-drop-2/data.ts?raw"
import dnd3Index from "@/blocks/data-grid-drag-drop-3/index.tsx?raw"
import dnd3Data from "@/blocks/data-grid-drag-drop-3/data.ts?raw"
import dnd4Index from "@/blocks/data-grid-drag-drop-4/index.tsx?raw"
import dnd4Data from "@/blocks/data-grid-drag-drop-4/data.ts?raw"

import edit1Index from "@/blocks/data-grid-editing-1/index.tsx?raw"
import edit1Data from "@/blocks/data-grid-editing-1/data.ts?raw"
import edit2Index from "@/blocks/data-grid-editing-2/index.tsx?raw"
import edit2Data from "@/blocks/data-grid-editing-2/data.ts?raw"
import edit3Index from "@/blocks/data-grid-editing-3/index.tsx?raw"
import edit3Data from "@/blocks/data-grid-editing-3/data.ts?raw"
import edit4Index from "@/blocks/data-grid-editing-4/index.tsx?raw"
import edit4Data from "@/blocks/data-grid-editing-4/data.ts?raw"
import edit5Index from "@/blocks/data-grid-editing-5/index.tsx?raw"
import edit5Data from "@/blocks/data-grid-editing-5/data.ts?raw"
import edit6Index from "@/blocks/data-grid-editing-6/index.tsx?raw"
import edit6Data from "@/blocks/data-grid-editing-6/data.ts?raw"

import exp1Index from "@/blocks/data-grid-expansion-1/index.tsx?raw"
import exp1Data from "@/blocks/data-grid-expansion-1/data.ts?raw"
import exp2Index from "@/blocks/data-grid-expansion-2/index.tsx?raw"
import exp2Data from "@/blocks/data-grid-expansion-2/data.ts?raw"
import exp3Index from "@/blocks/data-grid-expansion-3/index.tsx?raw"
import exp3Data from "@/blocks/data-grid-expansion-3/data.ts?raw"

import filter1Index from "@/blocks/data-grid-filtering-1/index.tsx?raw"
import filter1Data from "@/blocks/data-grid-filtering-1/data.ts?raw"

import filter2Index from "@/blocks/data-grid-filtering-2/index.tsx?raw"
import filter2Data from "@/blocks/data-grid-filtering-2/data.ts?raw"

import filter3Index from "@/blocks/data-grid-filtering-3/index.tsx?raw"
import filter3Data from "@/blocks/data-grid-filtering-3/data.ts?raw"
import filter3Brands from "@/blocks/data-grid-filtering-3/brand-icons.tsx?raw"

import filter4Index from "@/blocks/data-grid-filtering-4/index.tsx?raw"
import filter4Data from "@/blocks/data-grid-filtering-4/data.ts?raw"
import filter4Brands from "@/blocks/data-grid-filtering-4/brand-icons.tsx?raw"

import grouping1Index from "@/blocks/data-grid-grouping-1/index.tsx?raw"
import grouping1Data from "@/blocks/data-grid-grouping-1/data.ts?raw"

import grouping2Index from "@/blocks/data-grid-grouping-2/index.tsx?raw"
import grouping2Data from "@/blocks/data-grid-grouping-2/data.ts?raw"

import grouping3Index from "@/blocks/data-grid-grouping-3/index.tsx?raw"
import grouping3Data from "@/blocks/data-grid-grouping-3/data.ts?raw"

import grouping4Index from "@/blocks/data-grid-grouping-4/index.tsx?raw"
import grouping4Data from "@/blocks/data-grid-grouping-4/data.ts?raw"

import grouping5Index from "@/blocks/data-grid-grouping-5/index.tsx?raw"
import grouping5Data from "@/blocks/data-grid-grouping-5/data.ts?raw"

import grouping6Index from "@/blocks/data-grid-grouping-6/index.tsx?raw"
import grouping6Data from "@/blocks/data-grid-grouping-6/data.ts?raw"

import grouping7Index from "@/blocks/data-grid-grouping-7/index.tsx?raw"
import grouping7Data from "@/blocks/data-grid-grouping-7/data.ts?raw"

import virtualization1Index from "@/blocks/data-grid-virtualization-1/index.tsx?raw"
import virtualization1Data from "@/blocks/data-grid-virtualization-1/data.ts?raw"

import virtualization2Index from "@/blocks/data-grid-virtualization-2/index.tsx?raw"
import virtualization2Data from "@/blocks/data-grid-virtualization-2/data.ts?raw"

import adv1Index from "@/blocks/data-grid-advanced-1/index.tsx?raw"
import adv1CampaignSheet from "@/blocks/data-grid-advanced-1/campaign-sheet.tsx?raw"
import adv1Data from "@/blocks/data-grid-advanced-1/data.ts?raw"
import adv1Parts from "@/blocks/data-grid-advanced-1/parts.tsx?raw"
import adv2Index from "@/blocks/data-grid-advanced-2/index.tsx?raw"
import adv2Data from "@/blocks/data-grid-advanced-2/data.ts?raw"
import adv2Parts from "@/blocks/data-grid-advanced-2/parts.tsx?raw"
import adv2StoreSheet from "@/blocks/data-grid-advanced-2/store-sheet.tsx?raw"
import adv3Index from "@/blocks/data-grid-advanced-3/index.tsx?raw"
import adv3Data from "@/blocks/data-grid-advanced-3/data.ts?raw"
import adv3Parts from "@/blocks/data-grid-advanced-3/parts.tsx?raw"
import adv3TargetSheet from "@/blocks/data-grid-advanced-3/target-sheet.tsx?raw"
import adv4Index from "@/blocks/data-grid-advanced-4/index.tsx?raw"
import adv4Data from "@/blocks/data-grid-advanced-4/data.ts?raw"
import adv4Parts from "@/blocks/data-grid-advanced-4/parts.tsx?raw"
import adv4SloSheet from "@/blocks/data-grid-advanced-4/slo-sheet.tsx?raw"
import adv5Index from "@/blocks/data-grid-advanced-5/index.tsx?raw"
import adv5AccountSheet from "@/blocks/data-grid-advanced-5/account-sheet.tsx?raw"
import adv5Data from "@/blocks/data-grid-advanced-5/data.ts?raw"
import adv5Parts from "@/blocks/data-grid-advanced-5/parts.tsx?raw"
import adv6Index from "@/blocks/data-grid-advanced-6/index.tsx?raw"
import adv6Data from "@/blocks/data-grid-advanced-6/data.ts?raw"
import adv6Parts from "@/blocks/data-grid-advanced-6/parts.tsx?raw"
import adv7Index from "@/blocks/data-grid-advanced-7/index.tsx?raw"
import adv7Data from "@/blocks/data-grid-advanced-7/data.ts?raw"
import adv7Parts from "@/blocks/data-grid-advanced-7/parts.tsx?raw"
import adv8Index from "@/blocks/data-grid-advanced-8/index.tsx?raw"
import adv8Data from "@/blocks/data-grid-advanced-8/data.ts?raw"
import adv8Parts from "@/blocks/data-grid-advanced-8/parts.tsx?raw"
import adv9Index from "@/blocks/data-grid-advanced-9/index.tsx?raw"
import adv9Data from "@/blocks/data-grid-advanced-9/data.ts?raw"
import adv9Parts from "@/blocks/data-grid-advanced-9/parts.tsx?raw"
import adv10Index from "@/blocks/data-grid-advanced-10/index.tsx?raw"
import adv10Data from "@/blocks/data-grid-advanced-10/data.ts?raw"
import adv10Parts from "@/blocks/data-grid-advanced-10/parts.tsx?raw"
import adv11Index from "@/blocks/data-grid-advanced-11/index.tsx?raw"
import adv11Data from "@/blocks/data-grid-advanced-11/data.ts?raw"
import adv11Parts from "@/blocks/data-grid-advanced-11/parts.tsx?raw"
import adv11Sheets from "@/blocks/data-grid-advanced-11/sheets.tsx?raw"
import adv12Index from "@/blocks/data-grid-advanced-12/index.tsx?raw"
import adv12Data from "@/blocks/data-grid-advanced-12/data.ts?raw"
import adv12Parts from "@/blocks/data-grid-advanced-12/parts.tsx?raw"
import adv12Sheets from "@/blocks/data-grid-advanced-12/sheets.tsx?raw"
import adv13Index from "@/blocks/data-grid-advanced-13/index.tsx?raw"
import adv13Data from "@/blocks/data-grid-advanced-13/data.ts?raw"
import adv13Dialogs from "@/blocks/data-grid-advanced-13/dialogs.tsx?raw"
import adv13Parts from "@/blocks/data-grid-advanced-13/parts.tsx?raw"
import adv14Index from "@/blocks/data-grid-advanced-14/index.tsx?raw"
import adv14Data from "@/blocks/data-grid-advanced-14/data.ts?raw"
import adv14Dialogs from "@/blocks/data-grid-advanced-14/dialogs.tsx?raw"
import adv14Parts from "@/blocks/data-grid-advanced-14/parts.tsx?raw"
import adv15Index from "@/blocks/data-grid-advanced-15/index.tsx?raw"
import adv15Data from "@/blocks/data-grid-advanced-15/data.ts?raw"
import adv15Dialogs from "@/blocks/data-grid-advanced-15/dialogs.tsx?raw"
import adv15Parts from "@/blocks/data-grid-advanced-15/parts.tsx?raw"
import adv16Index from "@/blocks/data-grid-advanced-16/index.tsx?raw"
import adv16Data from "@/blocks/data-grid-advanced-16/data.ts?raw"
import adv16Parts from "@/blocks/data-grid-advanced-16/parts.tsx?raw"
import adv16StoreSheet from "@/blocks/data-grid-advanced-16/store-sheet.tsx?raw"
import adv17Index from "@/blocks/data-grid-advanced-17/index.tsx?raw"
import adv17AgentSheet from "@/blocks/data-grid-advanced-17/agent-sheet.tsx?raw"
import adv17Data from "@/blocks/data-grid-advanced-17/data.ts?raw"
import adv17Parts from "@/blocks/data-grid-advanced-17/parts.tsx?raw"
import adv18Index from "@/blocks/data-grid-advanced-18/index.tsx?raw"
import adv18Data from "@/blocks/data-grid-advanced-18/data.ts?raw"
import adv18JobSheet from "@/blocks/data-grid-advanced-18/job-sheet.tsx?raw"
import adv18Parts from "@/blocks/data-grid-advanced-18/parts.tsx?raw"
import adv19Index from "@/blocks/data-grid-advanced-19/index.tsx?raw"
import adv19CompanySheet from "@/blocks/data-grid-advanced-19/company-sheet.tsx?raw"
import adv19Data from "@/blocks/data-grid-advanced-19/data.ts?raw"
import adv19Parts from "@/blocks/data-grid-advanced-19/parts.tsx?raw"
import adv20Index from "@/blocks/data-grid-advanced-20/index.tsx?raw"
import adv20Data from "@/blocks/data-grid-advanced-20/data.ts?raw"
import adv20LineSheet from "@/blocks/data-grid-advanced-20/line-sheet.tsx?raw"
import adv20Parts from "@/blocks/data-grid-advanced-20/parts.tsx?raw"
import adv21Index from "@/blocks/data-grid-advanced-21/index.tsx?raw"
import adv21CustomerSheet from "@/blocks/data-grid-advanced-21/customer-sheet.tsx?raw"
import adv21Data from "@/blocks/data-grid-advanced-21/data.ts?raw"
import adv21Parts from "@/blocks/data-grid-advanced-21/parts.tsx?raw"

export type Lang = "tsx" | "typescript"

export interface BlockFile {
  name: string
  lang: Lang
  code: string
}

export type PackageManager = "npm" | "pnpm" | "yarn" | "bun"

export interface BlockEntry {
  id: string
  name: string
  category: string
  stage: string
  href: string
  Component: () => React.JSX.Element
  files: BlockFile[]
  dependencies: {
    registry: string[]
    packages: string[]
  }
  kind?: "block" | "component"
  flavor?: "radix" | "base"
  variant?: string
  registryId?: string
  installTarget?: string
}

export interface CategoryEntry {
  name: string
  count: number
}

const file = (name: string, code: string, lang: Lang = "tsx"): BlockFile => ({
  name,
  lang,
  code,
})

/** Counts mirror the ReUI catalog; all Base and Advanced blocks are implemented. */
export const CATEGORIES: CategoryEntry[] = [
  { name: "Base", count: 9 },
  { name: "Advanced", count: 21 },
  { name: "Columns", count: 5 },
  { name: "Drag & Drop", count: 4 },
  { name: "Editing", count: 6 },
  { name: "Expansion", count: 3 },
  { name: "Filtering", count: 4 },
  { name: "Grouping", count: 7 },
  { name: "Virtualization", count: 2 },
]

export const DATA_GRID_TOTAL = CATEGORIES.reduce(
  (sum, category) => sum + category.count,
  0,
)

export const BLOCKS: BlockEntry[] = [
  {
    id: "data-grid-base-1",
    name: "Customers",
    category: "Base",
    stage: "Base",
    href: "https://reui.io/blocks/data-grid/base/data-grid-base-1",
    installTarget: "@reui-unbound/data-grid-base-customers",
    dependencies: {
      registry: [
        "@reui-unbound/badge",
        "@reui-unbound/cascader",
        "@reui-unbound/data-grid",
        "@reui-unbound/frame",
        "@reui-unbound/number-field",
        "alert-dialog",
        "avatar",
        "button",
        "dropdown-menu",
        "field",
        "input-group",
        "kbd",
        "select",
        "sheet",
        "sonner",
        "tabs",
        "tooltip",
      ],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: CustomerBalancesBlock,
    files: [
      file("index.tsx", base1Index, "tsx"),
      file("parts.tsx", base1Parts, "tsx"),
      file("customer-sheets.tsx", base1CustomerSheets, "tsx"),
      file("data.ts", base1Data, "typescript"),
    ],
  },
  {
    id: "data-grid-base-2",
    name: "Contacts",
    category: "Base",
    stage: "Base",
    href: "https://reui.io/blocks/data-grid/base/data-grid-base-2",
    installTarget: "@reui-unbound/data-grid-base-contacts",
    dependencies: {
      registry: [
        "@reui-unbound/badge",
        "@reui-unbound/data-grid",
        "@reui-unbound/filters",
        "@reui-unbound/frame",
        "@reui-unbound/number-field",
        "avatar",
        "button",
        "dropdown-menu",
        "field",
        "input-group",
        "kbd",
        "select",
        "sheet",
        "sonner",
        "tooltip",
      ],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: LeadScoringContactsBlock,
    files: [
      file("index.tsx", base2Index, "tsx"),
      file("parts.tsx", base2Parts, "tsx"),
      file("contact-filters.tsx", base2ContactFilters, "tsx"),
      file("contact-sheets.tsx", base2ContactSheets, "tsx"),
      file("data.ts", base2Data, "typescript"),
    ],
  },
  {
    id: "data-grid-base-3",
    name: "Opportunities",
    category: "Base",
    stage: "Base",
    href: "https://reui.io/blocks/data-grid/base/data-grid-base-3",
    installTarget: "@reui-unbound/data-grid-base-opportunities",
    dependencies: {
      registry: [
        "@reui-unbound/badge",
        "@reui-unbound/data-grid",
        "@reui-unbound/filters",
        "@reui-unbound/frame",
        "avatar",
        "button",
        "dropdown-menu",
        "sonner",
        "tooltip",
      ],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: DealPipelineBlock,
    files: [
      file("index.tsx", base3Index, "tsx"),
      file("parts.tsx", base3Parts, "tsx"),
      file("pipeline-filters.tsx", base3PipelineFilters, "tsx"),
      file("data.ts", base3Data, "typescript"),
    ],
  },
  {
    id: "data-grid-base-4",
    name: "Timesheets",
    category: "Base",
    stage: "Base",
    href: "https://reui.io/blocks/data-grid/base/data-grid-base-4",
    installTarget: "@reui-unbound/data-grid-base-timesheets",
    dependencies: {
      registry: [
        "@reui-unbound/data-grid",
        "@reui-unbound/frame",
        "avatar",
        "button",
        "calendar",
        "popover",
        "select",
        "separator",
        "tooltip",
        "sonner",
      ],
      packages: ["@tanstack/react-table", "date-fns", "react-day-picker", "cn"],
    },
    Component: WeeklyTimesheetBlock,
    files: [
      file("index.tsx", base4Index, "tsx"),
      file("parts.tsx", base4Parts, "tsx"),
      file("data.ts", base4Data, "typescript"),
    ],
  },
  {
    id: "data-grid-base-5",
    name: "Support Queue",
    category: "Base",
    stage: "Base",
    href: "https://reui.io/blocks/data-grid/base/data-grid-base-5",
    installTarget: "@reui-unbound/data-grid-base-support-queue",
    dependencies: {
      registry: [
        "@reui-unbound/badge",
        "@reui-unbound/data-grid",
        "alert-dialog",
        "avatar",
        "button",
        "card",
        "dropdown-menu",
        "input-group",
        "select",
        "sonner",
      ],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: SupportTicketsBlock,
    files: [
      file("index.tsx", base5Index, "tsx"),
      file("parts.tsx", base5Parts, "tsx"),
      file("data.ts", base5Data, "typescript"),
    ],
  },
  {
    id: "data-grid-base-6",
    name: "Members",
    category: "Base",
    stage: "Base",
    href: "https://reui.io/blocks/data-grid/base/data-grid-base-6",
    installTarget: "@reui-unbound/data-grid-base-members",
    dependencies: {
      registry: [
        "@reui-unbound/badge",
        "@reui-unbound/data-grid",
        "avatar",
        "button",
        "dropdown-menu",
        "input-group",
        "sonner",
      ],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: TeamMembersBlock,
    files: [
      file("index.tsx", base6Index, "tsx"),
      file("data.ts", base6Data, "typescript"),
    ],
  },
  {
    id: "data-grid-base-7",
    name: "Modules",
    category: "Base",
    stage: "Base",
    href: "https://reui.io/blocks/data-grid/base/data-grid-base-7",
    installTarget: "@reui-unbound/data-grid-base-modules",
    dependencies: {
      registry: [
        "@reui-unbound/badge",
        "@reui-unbound/data-grid",
        "@reui-unbound/icon-tile",
        "button",
        "dropdown-menu",
        "input-group",
        "sonner",
      ],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: ProjectModulesBlock,
    files: [
      file("index.tsx", base7Index, "tsx"),
      file("data.ts", base7Data, "typescript"),
    ],
  },
  {
    id: "data-grid-base-8",
    name: "Rate Card",
    category: "Base",
    stage: "Base",
    href: "https://reui.io/blocks/data-grid/base/data-grid-base-8",
    installTarget: "@reui-unbound/data-grid-base-rate-card",
    dependencies: {
      registry: [
        "@reui-unbound/badge",
        "@reui-unbound/data-grid",
        "@reui-unbound/filters",
        "@reui-unbound/frame",
        "button",
        "dialog",
        "field",
        "input",
        "input-group",
        "popover",
        "select",
        "separator",
        "sonner",
        "switch",
      ],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: CloudRateCardBlock,
    files: [
      file("index.tsx", base8Index, "tsx"),
      file("data.ts", base8Data, "typescript"),
    ],
  },
  {
    id: "data-grid-base-9",
    name: "API Requests",
    category: "Base",
    stage: "Base",
    href: "https://reui.io/blocks/data-grid/base/data-grid-base-9",
    installTarget: "@reui-unbound/data-grid-base-api-requests",
    dependencies: {
      registry: [
        "@reui-unbound/badge",
        "@reui-unbound/data-grid",
        "@reui-unbound/filters",
        "@reui-unbound/frame",
        "button",
        "dropdown-menu",
        "input-group",
        "kbd",
        "select",
        "sheet",
        "sonner",
      ],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: ApiRequestLogsBlock,
    files: [
      file("index.tsx", base9Index, "tsx"),
      file("traffic-chart.tsx", base9TrafficChart, "tsx"),
      file("log-sheet.tsx", base9LogSheet, "tsx"),
      file("data.ts", base9Data, "typescript"),
    ],
  },
  {
    id: "data-grid-columns-1",
    name: "Workspace Access Review",
    category: "Columns",
    stage: "Columns",
    href: "https://reui.io/blocks/data-grid/columns/data-grid-columns-1",
    installTarget: "@reui-unbound/data-grid-columns-workspace-access-review",
    dependencies: {
      registry: ["@reui-unbound/badge", "@reui-unbound/data-grid", "@reui-unbound/frame", "avatar", "button", "dropdown-menu", "input-group", "select", "sonner", "switch", "tooltip"],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: AccessPermissionsBlock,
    files: [
      file("index.tsx", columns1Index, "tsx"),
      file("data.ts", columns1Data, "typescript"),
    ],
  },
  {
    id: "data-grid-columns-2",
    name: "Course Catalog",
    category: "Columns",
    stage: "Columns",
    href: "https://reui.io/blocks/data-grid/columns/data-grid-columns-2",
    installTarget: "@reui-unbound/data-grid-columns-course-catalog",
    dependencies: {
      registry: ["@reui-unbound/badge", "@reui-unbound/data-grid", "@reui-unbound/frame", "avatar", "button", "dropdown-menu", "input-group", "select", "sonner", "switch", "tooltip"],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: CourseCatalogBlock,
    files: [
      file("index.tsx", columns2Index, "tsx"),
      file("data.ts", columns2Data, "typescript"),
    ],
  },
  {
    id: "data-grid-columns-3",
    name: "Work Queue",
    category: "Columns",
    stage: "Columns",
    href: "https://reui.io/blocks/data-grid/columns/data-grid-columns-3",
    installTarget: "@reui-unbound/data-grid-columns-work-queue",
    dependencies: {
      registry: ["@reui-unbound/badge", "@reui-unbound/data-grid", "@reui-unbound/frame", "avatar", "button", "dropdown-menu", "input-group", "select", "sonner", "switch", "tooltip"],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: WorkQueueBlock,
    files: [
      file("index.tsx", columns3Index, "tsx"),
      file("data.ts", columns3Data, "typescript"),
    ],
  },
  {
    id: "data-grid-columns-4",
    name: "Members",
    category: "Columns",
    stage: "Columns",
    href: "https://reui.io/blocks/data-grid/columns/data-grid-columns-4",
    installTarget: "@reui-unbound/data-grid-columns-members",
    dependencies: {
      registry: ["@reui-unbound/badge", "@reui-unbound/data-grid", "@reui-unbound/frame", "avatar", "button", "dropdown-menu", "input-group", "select", "sonner", "switch", "tooltip"],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: MemberColumnsBlock,
    files: [
      file("index.tsx", columns4Index, "tsx"),
      file("data.ts", columns4Data, "typescript"),
    ],
  },
  {
    id: "data-grid-columns-5",
    name: "Companies",
    category: "Columns",
    stage: "Columns",
    href: "https://reui.io/blocks/data-grid/columns/data-grid-columns-5",
    installTarget: "@reui-unbound/data-grid-columns-companies",
    dependencies: {
      registry: ["@reui-unbound/badge", "@reui-unbound/data-grid", "@reui-unbound/frame", "avatar", "button", "dropdown-menu", "input-group", "select", "sonner", "switch", "tooltip"],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: CompanyAttributesBlock,
    files: [
      file("index.tsx", columns5Index, "tsx"),
      file("data.ts", columns5Data, "typescript"),
    ],
  },
  {
    id: "data-grid-drag-drop-1",
    name: "Sprint Backlog",
    category: "Drag & Drop",
    stage: "Drag & Drop",
    href: "https://reui.io/blocks/data-grid/drag-drop/data-grid-drag-drop-1",
    installTarget: "@reui-unbound/data-grid-drag-drop-sprint-backlog",
    dependencies: {
      registry: ["@reui-unbound/badge", "@reui-unbound/data-grid", "@reui-unbound/frame", "@reui-unbound/icon-tile", "avatar", "button", "sonner", "switch"],
      packages: ["@dnd-kit/core", "@dnd-kit/modifiers", "@dnd-kit/sortable", "@dnd-kit/utilities", "@tanstack/react-table", "sonner", "cn"],
    },
    Component: SprintBacklogBlock,
    files: [
      file("index.tsx", dnd1Index, "tsx"),
      file("data.ts", dnd1Data, "typescript"),
    ],
  },
  {
    id: "data-grid-drag-drop-2",
    name: "Routing Rules",
    category: "Drag & Drop",
    stage: "Drag & Drop",
    href: "https://reui.io/blocks/data-grid/drag-drop/data-grid-drag-drop-2",
    installTarget: "@reui-unbound/data-grid-drag-drop-routing-rules",
    dependencies: {
      registry: ["@reui-unbound/badge", "@reui-unbound/data-grid", "@reui-unbound/frame", "@reui-unbound/icon-tile", "avatar", "button", "sonner", "switch"],
      packages: ["@dnd-kit/core", "@dnd-kit/modifiers", "@dnd-kit/sortable", "@dnd-kit/utilities", "@tanstack/react-table", "sonner", "cn"],
    },
    Component: RoutingRulesBlock,
    files: [
      file("index.tsx", dnd2Index, "tsx"),
      file("data.ts", dnd2Data, "typescript"),
    ],
  },
  {
    id: "data-grid-drag-drop-3",
    name: "Dispatch Layout",
    category: "Drag & Drop",
    stage: "Drag & Drop",
    href: "https://reui.io/blocks/data-grid/drag-drop/data-grid-drag-drop-3",
    installTarget: "@reui-unbound/data-grid-drag-drop-dispatch-layout",
    dependencies: {
      registry: ["@reui-unbound/badge", "@reui-unbound/data-grid", "@reui-unbound/frame", "@reui-unbound/icon-tile", "avatar", "button", "sonner", "switch"],
      packages: ["@dnd-kit/core", "@dnd-kit/modifiers", "@dnd-kit/sortable", "@dnd-kit/utilities", "@tanstack/react-table", "sonner", "cn"],
    },
    Component: DispatchLayoutBlock,
    files: [
      file("index.tsx", dnd3Index, "tsx"),
      file("data.ts", dnd3Data, "typescript"),
    ],
  },
  {
    id: "data-grid-drag-drop-4",
    name: "Shared Drive",
    category: "Drag & Drop",
    stage: "Drag & Drop",
    href: "https://reui.io/blocks/data-grid/drag-drop/data-grid-drag-drop-4",
    installTarget: "@reui-unbound/data-grid-drag-drop-shared-drive",
    dependencies: {
      registry: ["@reui-unbound/badge", "@reui-unbound/data-grid", "@reui-unbound/frame", "@reui-unbound/icon-tile", "avatar", "button", "sonner", "switch"],
      packages: ["@dnd-kit/core", "@dnd-kit/modifiers", "@dnd-kit/sortable", "@dnd-kit/utilities", "@tanstack/react-table", "sonner", "cn"],
    },
    Component: SharedDriveBlock,
    files: [
      file("index.tsx", dnd4Index, "tsx"),
      file("data.ts", dnd4Data, "typescript"),
    ],
  },
  {
    id: "data-grid-editing-1",
    name: "Labels",
    category: "Editing",
    stage: "Editing",
    href: "https://reui.io/blocks/data-grid/editing/data-grid-editing-1",
    installTarget: "@reui-unbound/data-grid-editing-labels",
    dependencies: {
      registry: ["@reui-unbound/badge", "@reui-unbound/data-grid", "@reui-unbound/frame", "avatar", "button", "dialog", "dropdown-menu", "input", "input-group", "select", "switch", "sonner"],
      packages: ["@dnd-kit/core", "@dnd-kit/sortable", "@dnd-kit/utilities", "@tanstack/react-table", "sonner", "cn"],
    },
    Component: LabelManagerBlock,
    files: [
      file("index.tsx", edit1Index, "tsx"),
      file("data.ts", edit1Data, "typescript"),
    ],
  },
  {
    id: "data-grid-editing-2",
    name: "Product Inventory",
    category: "Editing",
    stage: "Editing",
    href: "https://reui.io/blocks/data-grid/editing/data-grid-editing-2",
    installTarget: "@reui-unbound/data-grid-editing-product-inventory",
    dependencies: {
      registry: ["@reui-unbound/badge", "@reui-unbound/data-grid", "@reui-unbound/frame", "avatar", "button", "dialog", "dropdown-menu", "input", "input-group", "select", "switch", "sonner"],
      packages: ["@dnd-kit/core", "@dnd-kit/sortable", "@dnd-kit/utilities", "@tanstack/react-table", "sonner", "cn"],
    },
    Component: ProductInventoryBlock,
    files: [
      file("index.tsx", edit2Index, "tsx"),
      file("data.ts", edit2Data, "typescript"),
    ],
  },
  {
    id: "data-grid-editing-3",
    name: "Project Intake",
    category: "Editing",
    stage: "Editing",
    href: "https://reui.io/blocks/data-grid/editing/data-grid-editing-3",
    installTarget: "@reui-unbound/data-grid-editing-project-intake",
    dependencies: {
      registry: ["@reui-unbound/badge", "@reui-unbound/data-grid", "@reui-unbound/frame", "avatar", "button", "dialog", "dropdown-menu", "input", "input-group", "select", "switch", "sonner"],
      packages: ["@dnd-kit/core", "@dnd-kit/sortable", "@dnd-kit/utilities", "@tanstack/react-table", "sonner", "cn"],
    },
    Component: ProjectIntakeBlock,
    files: [
      file("index.tsx", edit3Index, "tsx"),
      file("data.ts", edit3Data, "typescript"),
    ],
  },
  {
    id: "data-grid-editing-4",
    name: "Plans",
    category: "Editing",
    stage: "Editing",
    href: "https://reui.io/blocks/data-grid/editing/data-grid-editing-4",
    installTarget: "@reui-unbound/data-grid-editing-plans",
    dependencies: {
      registry: ["@reui-unbound/badge", "@reui-unbound/data-grid", "@reui-unbound/frame", "avatar", "button", "dialog", "dropdown-menu", "input", "input-group", "select", "switch", "sonner"],
      packages: ["@dnd-kit/core", "@dnd-kit/sortable", "@dnd-kit/utilities", "@tanstack/react-table", "sonner", "cn"],
    },
    Component: PricingPlanEditorBlock,
    files: [
      file("index.tsx", edit4Index, "tsx"),
      file("data.ts", edit4Data, "typescript"),
    ],
  },
  {
    id: "data-grid-editing-5",
    name: "Launch Runbook",
    category: "Editing",
    stage: "Editing",
    href: "https://reui.io/blocks/data-grid/editing/data-grid-editing-5",
    installTarget: "@reui-unbound/data-grid-editing-launch-runbook",
    dependencies: {
      registry: ["@reui-unbound/badge", "@reui-unbound/data-grid", "@reui-unbound/frame", "avatar", "button", "dialog", "dropdown-menu", "input", "input-group", "select", "switch", "sonner"],
      packages: ["@dnd-kit/core", "@dnd-kit/sortable", "@dnd-kit/utilities", "@tanstack/react-table", "sonner", "cn"],
    },
    Component: TaskSpreadsheetBlock,
    files: [
      file("index.tsx", edit5Index, "tsx"),
      file("data.ts", edit5Data, "typescript"),
    ],
  },
  {
    id: "data-grid-editing-6",
    name: "Reorder Plan",
    category: "Editing",
    stage: "Editing",
    href: "https://reui.io/blocks/data-grid/editing/data-grid-editing-6",
    installTarget: "@reui-unbound/data-grid-editing-reorder-plan",
    dependencies: {
      registry: ["@reui-unbound/badge", "@reui-unbound/data-grid", "@reui-unbound/frame", "avatar", "button", "dialog", "dropdown-menu", "input", "input-group", "select", "switch", "sonner"],
      packages: ["@dnd-kit/core", "@dnd-kit/sortable", "@dnd-kit/utilities", "@tanstack/react-table", "sonner", "cn"],
    },
    Component: StockReorderPlanBlock,
    files: [
      file("index.tsx", edit6Index, "tsx"),
      file("data.ts", edit6Data, "typescript"),
    ],
  },
  {
    id: "data-grid-expansion-1",
    name: "Task Delivery",
    category: "Expansion",
    stage: "Expansion",
    href: "https://reui.io/blocks/data-grid/expansion/data-grid-expansion-1",
    installTarget: "@reui-unbound/data-grid-expansion-task-delivery",
    dependencies: {
      registry: ["@reui-unbound/badge", "@reui-unbound/data-grid", "@reui-unbound/frame", "avatar", "button", "dropdown-menu", "input-group", "select", "sonner"],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: TaskDeliveryBlock,
    files: [
      file("index.tsx", exp1Index, "tsx"),
      file("data.ts", exp1Data, "typescript"),
    ],
  },
  {
    id: "data-grid-expansion-2",
    name: "Treasury Waterfall",
    category: "Expansion",
    stage: "Expansion",
    href: "https://reui.io/blocks/data-grid/expansion/data-grid-expansion-2",
    installTarget: "@reui-unbound/data-grid-expansion-treasury-waterfall",
    dependencies: {
      registry: ["@reui-unbound/badge", "@reui-unbound/data-grid", "@reui-unbound/frame", "avatar", "button", "dropdown-menu", "input-group", "select", "sonner"],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: TreasuryWaterfallBlock,
    files: [
      file("index.tsx", exp2Index, "tsx"),
      file("data.ts", exp2Data, "typescript"),
    ],
  },
  {
    id: "data-grid-expansion-3",
    name: "Release Reviews",
    category: "Expansion",
    stage: "Expansion",
    href: "https://reui.io/blocks/data-grid/expansion/data-grid-expansion-3",
    installTarget: "@reui-unbound/data-grid-expansion-release-reviews",
    dependencies: {
      registry: ["@reui-unbound/badge", "@reui-unbound/data-grid", "@reui-unbound/frame", "avatar", "button", "dropdown-menu", "input-group", "select", "sonner"],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: ReleaseReviewsBlock,
    files: [
      file("index.tsx", exp3Index, "tsx"),
      file("data.ts", exp3Data, "typescript"),
    ],
  },
  {
    id: "data-grid-filtering-1",
    name: "Transactions",
    category: "Filtering",
    stage: "Filtering",
    href: "https://reui.io/blocks/data-grid/filtering/data-grid-filtering-1",
    installTarget: "@reui-unbound/data-grid-filtering-transactions",
    dependencies: {
      registry: ["@reui-unbound/badge", "@reui-unbound/data-grid", "@reui-unbound/frame", "@reui-unbound/icon-tile", "button", "dropdown-menu", "input", "input-group", "popover", "sonner"],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: BillingTransactionsBlock,
    files: [
      file("index.tsx", filter1Index, "tsx"),
      file("data.ts", filter1Data, "typescript"),
    ],
  },
  {
    id: "data-grid-filtering-2",
    name: "Automation Library",
    category: "Filtering",
    stage: "Filtering",
    href: "https://reui.io/blocks/data-grid/filtering/data-grid-filtering-2",
    installTarget: "@reui-unbound/data-grid-filtering-automation-library",
    dependencies: {
      registry: ["@reui-unbound/badge", "@reui-unbound/data-grid", "avatar", "button", "dropdown-menu", "input", "popover", "switch", "sonner"],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: AutomationLibraryBlock,
    files: [
      file("index.tsx", filter2Index, "tsx"),
      file("data.ts", filter2Data, "typescript"),
    ],
  },
  {
    id: "data-grid-filtering-3",
    name: "Renewals Review",
    category: "Filtering",
    stage: "Filtering",
    href: "https://reui.io/blocks/data-grid/filtering/data-grid-filtering-3",
    installTarget: "@reui-unbound/data-grid-filtering-renewals-review",
    dependencies: {
      registry: ["@reui-unbound/badge", "@reui-unbound/data-grid", "avatar", "button", "dropdown-menu", "input", "popover", "sonner"],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: RenewalsReviewBlock,
    files: [
      file("index.tsx", filter3Index, "tsx"),
      file("data.ts", filter3Data, "typescript"),
      file("brand-icons.tsx", filter3Brands, "tsx"),
    ],
  },
  {
    id: "data-grid-filtering-4",
    name: "Renewals Risk",
    category: "Filtering",
    stage: "Filtering",
    href: "https://reui.io/blocks/data-grid/filtering/data-grid-filtering-4",
    installTarget: "@reui-unbound/data-grid-filtering-renewals-risk",
    dependencies: {
      registry: ["@reui-unbound/badge", "@reui-unbound/data-grid", "avatar", "button", "dropdown-menu", "input", "popover", "switch", "sonner"],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: AtRiskRenewalsBlock,
    files: [
      file("index.tsx", filter4Index, "tsx"),
      file("data.ts", filter4Data, "typescript"),
      file("brand-icons.tsx", filter4Brands, "tsx"),
    ],
  },
  {
    id: "data-grid-grouping-1",
    name: "Roadmap Queue",
    category: "Grouping",
    stage: "Grouping",
    href: "https://reui.io/blocks/data-grid/grouping/data-grid-grouping-1",
    installTarget: "@reui-unbound/data-grid-grouping-roadmap-queue",
    dependencies: {
      registry: ["@reui-unbound/badge", "avatar", "button", "dropdown-menu", "input-group", "popover", "select", "switch", "sonner"],
      packages: ["sonner", "cn"],
    },
    Component: RoadmapQueueBlock,
    files: [
      file("index.tsx", grouping1Index, "tsx"),
      file("data.ts", grouping1Data, "typescript"),
    ],
  },
  {
    id: "data-grid-grouping-2",
    name: "Revenue By Region",
    category: "Grouping",
    stage: "Grouping",
    href: "https://reui.io/blocks/data-grid/grouping/data-grid-grouping-2",
    installTarget: "@reui-unbound/data-grid-grouping-revenue-by-region",
    dependencies: {
      registry: ["@reui-unbound/badge", "avatar", "button", "dropdown-menu", "input-group", "popover", "select", "sonner"],
      packages: ["sonner", "cn"],
    },
    Component: RevenueByRegionBlock,
    files: [
      file("index.tsx", grouping2Index, "tsx"),
      file("data.ts", grouping2Data, "typescript"),
    ],
  },
  {
    id: "data-grid-grouping-3",
    name: "Access Cohort",
    category: "Grouping",
    stage: "Grouping",
    href: "https://reui.io/blocks/data-grid/grouping/data-grid-grouping-3",
    installTarget: "@reui-unbound/data-grid-grouping-access-cohort",
    dependencies: {
      registry: ["@reui-unbound/badge", "button", "input-group", "select", "switch"],
      packages: ["cn"],
    },
    Component: PatientAccessCohortsBlock,
    files: [
      file("index.tsx", grouping3Index, "tsx"),
      file("data.ts", grouping3Data, "typescript"),
    ],
  },
  {
    id: "data-grid-grouping-4",
    name: "Bill Of Materials",
    category: "Grouping",
    stage: "Grouping",
    href: "https://reui.io/blocks/data-grid/grouping/data-grid-grouping-4",
    installTarget: "@reui-unbound/data-grid-grouping-bill-of-materials",
    dependencies: {
      registry: ["@reui-unbound/badge", "button", "dropdown-menu", "input-group", "popover", "select", "switch", "sonner"],
      packages: ["sonner", "cn"],
    },
    Component: BillOfMaterialsBlock,
    files: [
      file("index.tsx", grouping4Index, "tsx"),
      file("data.ts", grouping4Data, "typescript"),
    ],
  },
  {
    id: "data-grid-grouping-5",
    name: "Reporting Lines",
    category: "Grouping",
    stage: "Grouping",
    href: "https://reui.io/blocks/data-grid/grouping/data-grid-grouping-5",
    installTarget: "@reui-unbound/data-grid-grouping-reporting-lines",
    dependencies: {
      registry: ["@reui-unbound/badge", "avatar", "button", "checkbox", "dropdown-menu", "input-group", "popover", "select", "switch", "sonner"],
      packages: ["sonner", "cn"],
    },
    Component: ReportingLinesBlock,
    files: [
      file("index.tsx", grouping5Index, "tsx"),
      file("data.ts", grouping5Data, "typescript"),
    ],
  },
  {
    id: "data-grid-grouping-6",
    name: "Production Desk",
    category: "Grouping",
    stage: "Grouping",
    href: "https://reui.io/blocks/data-grid/grouping/data-grid-grouping-6",
    installTarget: "@reui-unbound/data-grid-grouping-production-desk",
    dependencies: {
      registry: ["@reui-unbound/badge", "avatar", "button", "dropdown-menu", "input-group", "popover", "select", "switch", "sonner"],
      packages: ["sonner", "cn"],
    },
    Component: ProductionDeskBlock,
    files: [
      file("index.tsx", grouping6Index, "tsx"),
      file("data.ts", grouping6Data, "typescript"),
    ],
  },
  {
    id: "data-grid-grouping-7",
    name: "Delivery Board",
    category: "Grouping",
    stage: "Grouping",
    href: "https://reui.io/blocks/data-grid/grouping/data-grid-grouping-7",
    installTarget: "@reui-unbound/data-grid-grouping-delivery-board",
    dependencies: {
      registry: ["@reui-unbound/badge", "avatar", "button", "checkbox", "input-group", "popover", "select", "sonner"],
      packages: ["sonner", "cn"],
    },
    Component: DeliveryBoardBlock,
    files: [
      file("index.tsx", grouping7Index, "tsx"),
      file("data.ts", grouping7Data, "typescript"),
    ],
  },
  {
    id: "data-grid-virtualization-1",
    name: "Transactions",
    category: "Virtualization",
    stage: "Virtualization",
    href: "https://reui.io/blocks/data-grid/virtualization/data-grid-virtualization-1",
    installTarget: "@reui-unbound/data-grid-virtualization-transactions",
    dependencies: {
      registry: ["@reui-unbound/badge", "avatar", "button", "checkbox", "dropdown-menu", "input-group", "popover", "switch", "sonner"],
      packages: ["@tanstack/react-virtual", "sonner", "cn"],
    },
    Component: TransactionsVirtualizedBlock,
    files: [
      file("index.tsx", virtualization1Index, "tsx"),
      file("data.ts", virtualization1Data, "typescript"),
    ],
  },
  {
    id: "data-grid-virtualization-2",
    name: "Exception Queue",
    category: "Virtualization",
    stage: "Virtualization",
    href: "https://reui.io/blocks/data-grid/virtualization/data-grid-virtualization-2",
    installTarget: "@reui-unbound/data-grid-virtualization-exception-queue",
    dependencies: {
      registry: ["@reui-unbound/badge", "avatar", "button", "checkbox", "dropdown-menu", "input-group", "popover", "switch", "sonner"],
      packages: ["@tanstack/react-virtual", "sonner", "cn"],
    },
    Component: ExceptionQueueBlock,
    files: [
      file("index.tsx", virtualization2Index, "tsx"),
      file("data.ts", virtualization2Data, "typescript"),
    ],
  },
  {
    id: "data-grid-advanced-1",
    name: "Campaign Performance",
    category: "Advanced",
    stage: "Advanced",
    href: "https://reui.io/blocks/data-grid/advanced/data-grid-advanced-1",
    installTarget: "@reui-unbound/data-grid-advanced-campaign-performance",
    dependencies: {
      registry: [
        "@reui-unbound/badge",
        "@reui-unbound/data-grid",
        "@reui-unbound/filters",
        "@reui-unbound/frame",
        "button",
        "dialog",
        "dropdown-menu",
        "select",
        "sheet",
        "sonner",
      ],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: AdCampaignPerformanceBlock,
    files: [
      file("index.tsx", adv1Index, "tsx"),
      file("campaign-sheet.tsx", adv1CampaignSheet, "tsx"),
      file("data.ts", adv1Data, "typescript"),
      file("parts.tsx", adv1Parts, "tsx"),
    ],
  },
  {
    id: "data-grid-advanced-2",
    name: "Store P&L",
    category: "Advanced",
    stage: "Advanced",
    href: "https://reui.io/blocks/data-grid/advanced/data-grid-advanced-2",
    installTarget: "@reui-unbound/data-grid-advanced-store-p-l",
    dependencies: {
      registry: [
        "@reui-unbound/badge",
        "@reui-unbound/data-grid",
        "@reui-unbound/filters",
        "@reui-unbound/frame",
        "button",
        "dialog",
        "dropdown-menu",
        "select",
        "sheet",
        "sonner",
      ],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: RegionalStorePnlBlock,
    files: [
      file("index.tsx", adv2Index, "tsx"),
      file("data.ts", adv2Data, "typescript"),
      file("parts.tsx", adv2Parts, "tsx"),
      file("store-sheet.tsx", adv2StoreSheet, "tsx"),
    ],
  },
  {
    id: "data-grid-advanced-3",
    name: "Campaign Targets",
    category: "Advanced",
    stage: "Advanced",
    href: "https://reui.io/blocks/data-grid/advanced/data-grid-advanced-3",
    installTarget: "@reui-unbound/data-grid-advanced-campaign-targets",
    dependencies: {
      registry: [
        "@reui-unbound/badge",
        "@reui-unbound/data-grid",
        "@reui-unbound/filters",
        "@reui-unbound/frame",
        "button",
        "dialog",
        "dropdown-menu",
        "select",
        "sheet",
        "sonner",
      ],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: CampaignTargetReviewBlock,
    files: [
      file("index.tsx", adv3Index, "tsx"),
      file("data.ts", adv3Data, "typescript"),
      file("parts.tsx", adv3Parts, "tsx"),
      file("target-sheet.tsx", adv3TargetSheet, "tsx"),
    ],
  },
  {
    id: "data-grid-advanced-4",
    name: "Reliability Index",
    category: "Advanced",
    stage: "Advanced",
    href: "https://reui.io/blocks/data-grid/advanced/data-grid-advanced-4",
    installTarget: "@reui-unbound/data-grid-advanced-reliability-index",
    dependencies: {
      registry: [
        "@reui-unbound/badge",
        "@reui-unbound/data-grid",
        "@reui-unbound/filters",
        "@reui-unbound/frame",
        "button",
        "dialog",
        "dropdown-menu",
        "select",
        "sheet",
        "sonner",
      ],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: SloReliabilityIndexBlock,
    files: [
      file("index.tsx", adv4Index, "tsx"),
      file("data.ts", adv4Data, "typescript"),
      file("parts.tsx", adv4Parts, "tsx"),
      file("slo-sheet.tsx", adv4SloSheet, "tsx"),
    ],
  },
  {
    id: "data-grid-advanced-5",
    name: "Wholesale Applications",
    category: "Advanced",
    stage: "Advanced",
    href: "https://reui.io/blocks/data-grid/advanced/data-grid-advanced-5",
    installTarget: "@reui-unbound/data-grid-advanced-wholesale-applications",
    dependencies: {
      registry: [
        "@reui-unbound/badge",
        "@reui-unbound/data-grid",
        "@reui-unbound/filters",
        "@reui-unbound/frame",
        "button",
        "dialog",
        "dropdown-menu",
        "select",
        "sheet",
        "sonner",
      ],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: WholesaleOnboardingBlock,
    files: [
      file("index.tsx", adv5Index, "tsx"),
      file("account-sheet.tsx", adv5AccountSheet, "tsx"),
      file("data.ts", adv5Data, "typescript"),
      file("parts.tsx", adv5Parts, "tsx"),
    ],
  },
  {
    id: "data-grid-advanced-6",
    name: "Stock Mix",
    category: "Advanced",
    stage: "Advanced",
    href: "https://reui.io/blocks/data-grid/advanced/data-grid-advanced-6",
    installTarget: "@reui-unbound/data-grid-advanced-stock-mix",
    dependencies: {
      registry: [
        "@reui-unbound/badge",
        "@reui-unbound/data-grid",
        "@reui-unbound/filters",
        "@reui-unbound/frame",
        "button",
        "dialog",
        "dropdown-menu",
        "select",
        "sheet",
        "sonner",
      ],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: StockMixBlock,
    files: [
      file("index.tsx", adv6Index, "tsx"),
      file("data.ts", adv6Data, "typescript"),
      file("parts.tsx", adv6Parts, "tsx"),
    ],
  },
  {
    id: "data-grid-advanced-7",
    name: "Fourplex Pro Forma",
    category: "Advanced",
    stage: "Advanced",
    href: "https://reui.io/blocks/data-grid/advanced/data-grid-advanced-7",
    installTarget: "@reui-unbound/data-grid-advanced-fourplex-pro-forma",
    dependencies: {
      registry: [
        "@reui-unbound/badge",
        "@reui-unbound/data-grid",
        "@reui-unbound/filters",
        "@reui-unbound/frame",
        "button",
        "dialog",
        "dropdown-menu",
        "select",
        "sheet",
        "sonner",
      ],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: FourplexProFormaBlock,
    files: [
      file("index.tsx", adv7Index, "tsx"),
      file("data.ts", adv7Data, "typescript"),
      file("parts.tsx", adv7Parts, "tsx"),
    ],
  },
  {
    id: "data-grid-advanced-8",
    name: "Product KPIs",
    category: "Advanced",
    stage: "Advanced",
    href: "https://reui.io/blocks/data-grid/advanced/data-grid-advanced-8",
    installTarget: "@reui-unbound/data-grid-advanced-product-kpis",
    dependencies: {
      registry: [
        "@reui-unbound/badge",
        "@reui-unbound/data-grid",
        "@reui-unbound/filters",
        "@reui-unbound/frame",
        "button",
        "dialog",
        "dropdown-menu",
        "select",
        "sheet",
        "sonner",
      ],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: ProductKpiGridBlock,
    files: [
      file("index.tsx", adv8Index, "tsx"),
      file("data.ts", adv8Data, "typescript"),
      file("parts.tsx", adv8Parts, "tsx"),
    ],
  },
  {
    id: "data-grid-advanced-9",
    name: "Service Visits",
    category: "Advanced",
    stage: "Advanced",
    href: "https://reui.io/blocks/data-grid/advanced/data-grid-advanced-9",
    installTarget: "@reui-unbound/data-grid-advanced-service-visits",
    dependencies: {
      registry: [
        "@reui-unbound/badge",
        "@reui-unbound/data-grid",
        "@reui-unbound/filters",
        "@reui-unbound/frame",
        "button",
        "dialog",
        "dropdown-menu",
        "select",
        "sheet",
        "sonner",
      ],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: ServiceVisitPlannerBlock,
    files: [
      file("index.tsx", adv9Index, "tsx"),
      file("data.ts", adv9Data, "typescript"),
      file("parts.tsx", adv9Parts, "tsx"),
    ],
  },
  {
    id: "data-grid-advanced-10",
    name: "Technician Capacity",
    category: "Advanced",
    stage: "Advanced",
    href: "https://reui.io/blocks/data-grid/advanced/data-grid-advanced-10",
    installTarget: "@reui-unbound/data-grid-advanced-technician-capacity",
    dependencies: {
      registry: [
        "@reui-unbound/badge",
        "@reui-unbound/data-grid",
        "@reui-unbound/filters",
        "@reui-unbound/frame",
        "button",
        "dialog",
        "dropdown-menu",
        "select",
        "sheet",
        "sonner",
      ],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: TechnicianCapacityBlock,
    files: [
      file("index.tsx", adv10Index, "tsx"),
      file("data.ts", adv10Data, "typescript"),
      file("parts.tsx", adv10Parts, "tsx"),
    ],
  },
  {
    id: "data-grid-advanced-11",
    name: "Factory Scorecard",
    category: "Advanced",
    stage: "Advanced",
    href: "https://reui.io/blocks/data-grid/advanced/data-grid-advanced-11",
    installTarget: "@reui-unbound/data-grid-advanced-factory-scorecard",
    dependencies: {
      registry: [
        "@reui-unbound/badge",
        "@reui-unbound/data-grid",
        "@reui-unbound/filters",
        "@reui-unbound/frame",
        "button",
        "dialog",
        "dropdown-menu",
        "select",
        "sheet",
        "sonner",
      ],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: FactoryScorecardBlock,
    files: [
      file("index.tsx", adv11Index, "tsx"),
      file("data.ts", adv11Data, "typescript"),
      file("parts.tsx", adv11Parts, "tsx"),
      file("sheets.tsx", adv11Sheets, "tsx"),
    ],
  },
  {
    id: "data-grid-advanced-12",
    name: "Freight & Cargo Services",
    category: "Advanced",
    stage: "Advanced",
    href: "https://reui.io/blocks/data-grid/advanced/data-grid-advanced-12",
    installTarget: "@reui-unbound/data-grid-advanced-freight-cargo-services",
    dependencies: {
      registry: [
        "@reui-unbound/badge",
        "@reui-unbound/data-grid",
        "@reui-unbound/filters",
        "@reui-unbound/frame",
        "button",
        "dialog",
        "dropdown-menu",
        "select",
        "sheet",
        "sonner",
      ],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: FreightLanesBlock,
    files: [
      file("index.tsx", adv12Index, "tsx"),
      file("data.ts", adv12Data, "typescript"),
      file("parts.tsx", adv12Parts, "tsx"),
      file("sheets.tsx", adv12Sheets, "tsx"),
    ],
  },
  {
    id: "data-grid-advanced-13",
    name: "HR Scorecard",
    category: "Advanced",
    stage: "Advanced",
    href: "https://reui.io/blocks/data-grid/advanced/data-grid-advanced-13",
    installTarget: "@reui-unbound/data-grid-advanced-hr-scorecard",
    dependencies: {
      registry: [
        "@reui-unbound/badge",
        "@reui-unbound/data-grid",
        "@reui-unbound/filters",
        "@reui-unbound/frame",
        "button",
        "dialog",
        "dropdown-menu",
        "select",
        "sheet",
        "sonner",
      ],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: HrScorecardBlock,
    files: [
      file("index.tsx", adv13Index, "tsx"),
      file("data.ts", adv13Data, "typescript"),
      file("dialogs.tsx", adv13Dialogs, "tsx"),
      file("parts.tsx", adv13Parts, "tsx"),
    ],
  },
  {
    id: "data-grid-advanced-14",
    name: "Strategy Scorecard",
    category: "Advanced",
    stage: "Advanced",
    href: "https://reui.io/blocks/data-grid/advanced/data-grid-advanced-14",
    installTarget: "@reui-unbound/data-grid-advanced-strategy-scorecard",
    dependencies: {
      registry: [
        "@reui-unbound/badge",
        "@reui-unbound/data-grid",
        "@reui-unbound/filters",
        "@reui-unbound/frame",
        "button",
        "dialog",
        "dropdown-menu",
        "select",
        "sheet",
        "sonner",
      ],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: StrategyScorecardBlock,
    files: [
      file("index.tsx", adv14Index, "tsx"),
      file("data.ts", adv14Data, "typescript"),
      file("dialogs.tsx", adv14Dialogs, "tsx"),
      file("parts.tsx", adv14Parts, "tsx"),
    ],
  },
  {
    id: "data-grid-advanced-15",
    name: "P&L Outlook",
    category: "Advanced",
    stage: "Advanced",
    href: "https://reui.io/blocks/data-grid/advanced/data-grid-advanced-15",
    installTarget: "@reui-unbound/data-grid-advanced-p-l-outlook",
    dependencies: {
      registry: [
        "@reui-unbound/badge",
        "@reui-unbound/data-grid",
        "@reui-unbound/filters",
        "@reui-unbound/frame",
        "button",
        "dialog",
        "dropdown-menu",
        "select",
        "sheet",
        "sonner",
      ],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: RetailPnlBlock,
    files: [
      file("index.tsx", adv15Index, "tsx"),
      file("data.ts", adv15Data, "typescript"),
      file("dialogs.tsx", adv15Dialogs, "tsx"),
      file("parts.tsx", adv15Parts, "tsx"),
    ],
  },
  {
    id: "data-grid-advanced-16",
    name: "Store KPIs",
    category: "Advanced",
    stage: "Advanced",
    href: "https://reui.io/blocks/data-grid/advanced/data-grid-advanced-16",
    installTarget: "@reui-unbound/data-grid-advanced-store-kpis",
    dependencies: {
      registry: [
        "@reui-unbound/badge",
        "@reui-unbound/data-grid",
        "@reui-unbound/filters",
        "@reui-unbound/frame",
        "button",
        "dialog",
        "dropdown-menu",
        "select",
        "sheet",
        "sonner",
      ],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: StoreKpiBoardBlock,
    files: [
      file("index.tsx", adv16Index, "tsx"),
      file("data.ts", adv16Data, "typescript"),
      file("parts.tsx", adv16Parts, "tsx"),
      file("store-sheet.tsx", adv16StoreSheet, "tsx"),
    ],
  },
  {
    id: "data-grid-advanced-17",
    name: "Support Scorecard",
    category: "Advanced",
    stage: "Advanced",
    href: "https://reui.io/blocks/data-grid/advanced/data-grid-advanced-17",
    installTarget: "@reui-unbound/data-grid-advanced-support-scorecard",
    dependencies: {
      registry: [
        "@reui-unbound/badge",
        "@reui-unbound/data-grid",
        "@reui-unbound/filters",
        "@reui-unbound/frame",
        "button",
        "dialog",
        "dropdown-menu",
        "select",
        "sheet",
        "sonner",
      ],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: SupportScorecardBlock,
    files: [
      file("index.tsx", adv17Index, "tsx"),
      file("agent-sheet.tsx", adv17AgentSheet, "tsx"),
      file("data.ts", adv17Data, "typescript"),
      file("parts.tsx", adv17Parts, "tsx"),
    ],
  },
  {
    id: "data-grid-advanced-18",
    name: "Job Schedule",
    category: "Advanced",
    stage: "Advanced",
    href: "https://reui.io/blocks/data-grid/advanced/data-grid-advanced-22",
    installTarget: "@reui-unbound/data-grid-advanced-job-schedule",
    dependencies: {
      registry: [
        "@reui-unbound/badge",
        "@reui-unbound/data-grid",
        "@reui-unbound/filters",
        "@reui-unbound/frame",
        "button",
        "dialog",
        "dropdown-menu",
        "select",
        "sheet",
        "sonner",
      ],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: JobScheduleBlock,
    files: [
      file("index.tsx", adv18Index, "tsx"),
      file("data.ts", adv18Data, "typescript"),
      file("job-sheet.tsx", adv18JobSheet, "tsx"),
      file("parts.tsx", adv18Parts, "tsx"),
    ],
  },
  {
    id: "data-grid-advanced-19",
    name: "Prospects",
    category: "Advanced",
    stage: "Advanced",
    href: "https://reui.io/blocks/data-grid/advanced/data-grid-advanced-23",
    installTarget: "@reui-unbound/data-grid-advanced-prospects",
    dependencies: {
      registry: [
        "@reui-unbound/badge",
        "@reui-unbound/data-grid",
        "@reui-unbound/filters",
        "@reui-unbound/frame",
        "button",
        "dialog",
        "dropdown-menu",
        "select",
        "sheet",
        "sonner",
      ],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: ProspectDatabaseBlock,
    files: [
      file("index.tsx", adv19Index, "tsx"),
      file("company-sheet.tsx", adv19CompanySheet, "tsx"),
      file("data.ts", adv19Data, "typescript"),
      file("parts.tsx", adv19Parts, "tsx"),
    ],
  },
  {
    id: "data-grid-advanced-20",
    name: "Project Budget",
    category: "Advanced",
    stage: "Advanced",
    href: "https://reui.io/blocks/data-grid/advanced/data-grid-advanced-27",
    installTarget: "@reui-unbound/data-grid-advanced-project-budget",
    dependencies: {
      registry: [
        "@reui-unbound/badge",
        "@reui-unbound/data-grid",
        "@reui-unbound/filters",
        "@reui-unbound/frame",
        "button",
        "dialog",
        "dropdown-menu",
        "select",
        "sheet",
        "sonner",
      ],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: ProjectBudgetBlock,
    files: [
      file("index.tsx", adv20Index, "tsx"),
      file("data.ts", adv20Data, "typescript"),
      file("line-sheet.tsx", adv20LineSheet, "tsx"),
      file("parts.tsx", adv20Parts, "tsx"),
    ],
  },
  {
    id: "data-grid-advanced-21",
    name: "Invoices",
    category: "Advanced",
    stage: "Advanced",
    href: "https://reui.io/blocks/data-grid/advanced/data-grid-advanced-28",
    installTarget: "@reui-unbound/data-grid-advanced-invoices",
    dependencies: {
      registry: [
        "@reui-unbound/badge",
        "@reui-unbound/data-grid",
        "@reui-unbound/filters",
        "@reui-unbound/frame",
        "button",
        "dialog",
        "dropdown-menu",
        "select",
        "sheet",
        "sonner",
      ],
      packages: ["@tanstack/react-table", "sonner", "cn"],
    },
    Component: InvoiceManagerBlock,
    files: [
      file("index.tsx", adv21Index, "tsx"),
      file("customer-sheet.tsx", adv21CustomerSheet, "tsx"),
      file("data.ts", adv21Data, "typescript"),
      file("parts.tsx", adv21Parts, "tsx"),
    ],
  },
]

export function blocksInCategory(category: string) {
  return BLOCKS.filter((block) => block.category === category)
}

export const APP_REGISTRY = "@reui-unbound"

export function registryName(id: string) {
  return `${APP_REGISTRY}/${id}`
}

export function installCommandFor(
  target: string,
  packageManager: PackageManager = "npm",
) {
  switch (packageManager) {
    case "pnpm":
      return `pnpm dlx shadcn@latest add ${target}`
    case "yarn":
      return `yarn dlx shadcn@latest add ${target}`
    case "bun":
      return `bunx --bun shadcn@latest add ${target}`
    default:
      return `npx shadcn@latest add ${target}`
  }
}

export function installCommand(
  id: string,
  packageManager: PackageManager = "npm",
) {
  return installCommandFor(registryName(id), packageManager)
}
