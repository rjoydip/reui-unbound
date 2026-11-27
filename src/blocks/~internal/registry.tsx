import { blockFile as file, lazyComponent, lazyNamed, sourceLoader } from "./lazy"
const CustomerBalancesBlock = lazyNamed(() => import("@/blocks/data-grid/base/customers"), "CustomerBalancesBlock")
const LeadScoringContactsBlock = lazyNamed(() => import("@/blocks/data-grid/base/contacts"), "LeadScoringContactsBlock")
const DealPipelineBlock = lazyNamed(() => import("@/blocks/data-grid/base/opportunities"), "DealPipelineBlock")
const WeeklyTimesheetBlock = lazyNamed(() => import("@/blocks/data-grid/base/timesheets"), "WeeklyTimesheetBlock")
const SupportTicketsBlock = lazyNamed(() => import("@/blocks/data-grid/base/support-queue"), "SupportTicketsBlock")
const TeamMembersBlock = lazyNamed(() => import("@/blocks/data-grid/base/members"), "TeamMembersBlock")
const ProjectModulesBlock = lazyNamed(() => import("@/blocks/data-grid/base/modules"), "ProjectModulesBlock")
const CloudRateCardBlock = lazyNamed(() => import("@/blocks/data-grid/base/rate-card"), "CloudRateCardBlock")
const ApiRequestLogsBlock = lazyNamed(() => import("@/blocks/data-grid/base/api-requests"), "ApiRequestLogsBlock")

const AccessPermissionsBlock = lazyNamed(() => import("@/blocks/data-grid/columns/workspace-access-review"), "AccessPermissionsBlock")
const CourseCatalogBlock = lazyNamed(() => import("@/blocks/data-grid/columns/course-catalog"), "CourseCatalogBlock")
const WorkQueueBlock = lazyNamed(() => import("@/blocks/data-grid/columns/work-queue"), "WorkQueueBlock")
const MemberColumnsBlock = lazyNamed(() => import("@/blocks/data-grid/columns/members"), "MemberColumnsBlock")
const CompanyAttributesBlock = lazyNamed(() => import("@/blocks/data-grid/columns/companies"), "CompanyAttributesBlock")

const SprintBacklogBlock = lazyNamed(() => import("@/blocks/data-grid/drag-drop/sprint-backlog"), "SprintBacklogBlock")
const RoutingRulesBlock = lazyNamed(() => import("@/blocks/data-grid/drag-drop/routing-rules"), "RoutingRulesBlock")
const DispatchLayoutBlock = lazyNamed(() => import("@/blocks/data-grid/drag-drop/dispatch-layout"), "DispatchLayoutBlock")
const SharedDriveBlock = lazyNamed(() => import("@/blocks/data-grid/drag-drop/shared-drive"), "SharedDriveBlock")

const LabelManagerBlock = lazyNamed(() => import("@/blocks/data-grid/editing/labels"), "LabelManagerBlock")
const ProductInventoryBlock = lazyNamed(() => import("@/blocks/data-grid/editing/product-inventory"), "ProductInventoryBlock")
const ProjectIntakeBlock = lazyNamed(() => import("@/blocks/data-grid/editing/project-intake"), "ProjectIntakeBlock")
const PricingPlanEditorBlock = lazyNamed(() => import("@/blocks/data-grid/editing/plans"), "PricingPlanEditorBlock")
const TaskSpreadsheetBlock = lazyNamed(() => import("@/blocks/data-grid/editing/launch-runbook"), "TaskSpreadsheetBlock")
const StockReorderPlanBlock = lazyNamed(() => import("@/blocks/data-grid/editing/reorder-plan"), "StockReorderPlanBlock")

const TaskDeliveryBlock = lazyNamed(() => import("@/blocks/data-grid/expansion/task-delivery"), "TaskDeliveryBlock")
const TreasuryWaterfallBlock = lazyNamed(() => import("@/blocks/data-grid/expansion/treasury-waterfall"), "TreasuryWaterfallBlock")
const ReleaseReviewsBlock = lazyNamed(() => import("@/blocks/data-grid/expansion/release-reviews"), "ReleaseReviewsBlock")

const BillingTransactionsBlock = lazyNamed(() => import("@/blocks/data-grid/filtering/transactions"), "BillingTransactionsBlock")

const AutomationLibraryBlock = lazyNamed(() => import("@/blocks/data-grid/filtering/automation-library"), "AutomationLibraryBlock")

const RenewalsReviewBlock = lazyNamed(() => import("@/blocks/data-grid/filtering/renewals-review"), "RenewalsReviewBlock")

const AtRiskRenewalsBlock = lazyNamed(() => import("@/blocks/data-grid/filtering/renewals-risk"), "AtRiskRenewalsBlock")

const RoadmapQueueBlock = lazyNamed(() => import("@/blocks/data-grid/grouping/roadmap-queue"), "RoadmapQueueBlock")

const RevenueByRegionBlock = lazyNamed(() => import("@/blocks/data-grid/grouping/revenue-by-region"), "RevenueByRegionBlock")

const PatientAccessCohortsBlock = lazyNamed(() => import("@/blocks/data-grid/grouping/access-cohort"), "PatientAccessCohortsBlock")

const BillOfMaterialsBlock = lazyNamed(() => import("@/blocks/data-grid/grouping/bill-of-materials"), "BillOfMaterialsBlock")

const ReportingLinesBlock = lazyNamed(() => import("@/blocks/data-grid/grouping/reporting-lines"), "ReportingLinesBlock")

const ProductionDeskBlock = lazyNamed(() => import("@/blocks/data-grid/grouping/production-desk"), "ProductionDeskBlock")

const DeliveryBoardBlock = lazyNamed(() => import("@/blocks/data-grid/grouping/delivery-board"), "DeliveryBoardBlock")

const TransactionsVirtualizedBlock = lazyNamed(() => import("@/blocks/data-grid/virtualization/transactions"), "TransactionsVirtualizedBlock")

const ExceptionQueueBlock = lazyNamed(() => import("@/blocks/data-grid/virtualization/exception-queue"), "ExceptionQueueBlock")

const AdCampaignPerformanceBlock = lazyComponent(() => import("@/blocks/data-grid/advanced/campaign-performance"))
const RegionalStorePnlBlock = lazyComponent(() => import("@/blocks/data-grid/advanced/store-p-l"))
const CampaignTargetReviewBlock = lazyComponent(() => import("@/blocks/data-grid/advanced/campaign-targets"))
const SloReliabilityIndexBlock = lazyComponent(() => import("@/blocks/data-grid/advanced/reliability-index"))
const WholesaleOnboardingBlock = lazyComponent(() => import("@/blocks/data-grid/advanced/wholesale-applications"))
const StockMixBlock = lazyComponent(() => import("@/blocks/data-grid/advanced/stock-mix"))
const FourplexProFormaBlock = lazyComponent(() => import("@/blocks/data-grid/advanced/fourplex-pro-forma"))
const ProductKpiGridBlock = lazyComponent(() => import("@/blocks/data-grid/advanced/product-kpis"))
const ServiceVisitPlannerBlock = lazyComponent(() => import("@/blocks/data-grid/advanced/service-visits"))
const TechnicianCapacityBlock = lazyComponent(() => import("@/blocks/data-grid/advanced/technician-capacity"))
const FactoryScorecardBlock = lazyComponent(() => import("@/blocks/data-grid/advanced/factory-scorecard"))
const FreightLanesBlock = lazyComponent(() => import("@/blocks/data-grid/advanced/freight-cargo-services"))
const HrScorecardBlock = lazyComponent(() => import("@/blocks/data-grid/advanced/hr-scorecard"))
const StrategyScorecardBlock = lazyComponent(() => import("@/blocks/data-grid/advanced/strategy-scorecard"))
const RetailPnlBlock = lazyComponent(() => import("@/blocks/data-grid/advanced/p-l-outlook"))
const StoreKpiBoardBlock = lazyComponent(() => import("@/blocks/data-grid/advanced/store-kpis"))
const SupportScorecardBlock = lazyComponent(() => import("@/blocks/data-grid/advanced/support-scorecard"))
const JobScheduleBlock = lazyComponent(() => import("@/blocks/data-grid/advanced/job-schedule"))
const ProspectDatabaseBlock = lazyComponent(() => import("@/blocks/data-grid/advanced/prospects"))
const ProjectBudgetBlock = lazyComponent(() => import("@/blocks/data-grid/advanced/project-budget"))
import { APP_SHELL_BLOCKS } from "@/blocks/application/app-shell/~blocks"
import { AUTH_BLOCKS } from "@/blocks/application/auth/~blocks"
import { CARD_BLOCKS } from "@/blocks/application/card/~blocks"
import { DASHBOARD_BLOCKS } from "@/blocks/application/dashboard/~blocks"
import { DIALOG_BLOCKS } from "@/blocks/application/dialog/~blocks"
import { EMPTY_STATE_BLOCKS } from "@/blocks/application/empty-state/~blocks"
import { EVENT_CALENDAR_BLOCKS } from "@/blocks/application/event-calendar/~blocks"
import { FLOW_BLOCKS } from "@/blocks/application/flow/~blocks"
import { FORM_BLOCKS } from "@/blocks/application/form/~blocks"
import { GANTT_BLOCKS } from "@/blocks/application/gantt/~blocks"
import { KANBAN_BOARD_BLOCKS } from "@/blocks/application/kanban-board/~blocks"
import { LIST_BLOCKS } from "@/blocks/application/list/~blocks"
import { NAVBAR_BLOCKS } from "@/blocks/application/navbar/~blocks"
import { ONBOARDING_BLOCKS } from "@/blocks/application/onboarding/~blocks"
import { PROFILE_BLOCKS } from "@/blocks/application/profile/~blocks"
import { RICH_TEXT_EDITOR_BLOCKS } from "@/blocks/application/rich-text-editor/~blocks"
import { SCHEDULE_BLOCKS } from "@/blocks/application/schedule/~blocks"
import { SETTINGS_BLOCKS } from "@/blocks/application/settings/~blocks"
import { SHEET_BLOCKS } from "@/blocks/application/sheet/~blocks"
import { STATS_BLOCKS } from "@/blocks/application/stats/~blocks"
import { TIMELINE_BLOCKS } from "@/blocks/application/timeline/~blocks"
import { WHITEBOARD_BLOCKS } from "@/blocks/application/whiteboard/~blocks"
import { WIZARD_BLOCKS } from "@/blocks/application/wizard/~blocks"
const InvoiceManagerBlock = lazyNamed(() => import("@/blocks/data-grid/advanced/invoices"), "InvoiceManagerBlock")


const base1Index = sourceLoader(() => import("@/blocks/data-grid/base/customers/index.tsx?raw"))
const base1Parts = sourceLoader(() => import("@/blocks/data-grid/base/customers/parts.tsx?raw"))
const base1CustomerSheets = sourceLoader(() => import("@/blocks/data-grid/base/customers/customer-sheets.tsx?raw"))
const base1Data = sourceLoader(() => import("@/blocks/data-grid/base/customers/data.ts?raw"))
const base2Index = sourceLoader(() => import("@/blocks/data-grid/base/contacts/index.tsx?raw"))
const base2Parts = sourceLoader(() => import("@/blocks/data-grid/base/contacts/parts.tsx?raw"))
const base2ContactFilters = sourceLoader(() => import("@/blocks/data-grid/base/contacts/contact-filters.tsx?raw"))
const base2ContactSheets = sourceLoader(() => import("@/blocks/data-grid/base/contacts/contact-sheets.tsx?raw"))
const base2Data = sourceLoader(() => import("@/blocks/data-grid/base/contacts/data.ts?raw"))
const base3Index = sourceLoader(() => import("@/blocks/data-grid/base/opportunities/index.tsx?raw"))
const base3Parts = sourceLoader(() => import("@/blocks/data-grid/base/opportunities/parts.tsx?raw"))
const base3PipelineFilters = sourceLoader(() => import("@/blocks/data-grid/base/opportunities/pipeline-filters.tsx?raw"))
const base3Data = sourceLoader(() => import("@/blocks/data-grid/base/opportunities/data.ts?raw"))
const base4Index = sourceLoader(() => import("@/blocks/data-grid/base/timesheets/index.tsx?raw"))
const base4Parts = sourceLoader(() => import("@/blocks/data-grid/base/timesheets/parts.tsx?raw"))
const base4Data = sourceLoader(() => import("@/blocks/data-grid/base/timesheets/data.ts?raw"))
const base5Index = sourceLoader(() => import("@/blocks/data-grid/base/support-queue/index.tsx?raw"))
const base5Parts = sourceLoader(() => import("@/blocks/data-grid/base/support-queue/parts.tsx?raw"))
const base5Data = sourceLoader(() => import("@/blocks/data-grid/base/support-queue/data.ts?raw"))
const base6Index = sourceLoader(() => import("@/blocks/data-grid/base/members/index.tsx?raw"))
const base6Data = sourceLoader(() => import("@/blocks/data-grid/base/members/data.ts?raw"))
const base7Index = sourceLoader(() => import("@/blocks/data-grid/base/modules/index.tsx?raw"))
const base7Data = sourceLoader(() => import("@/blocks/data-grid/base/modules/data.ts?raw"))
const base8Index = sourceLoader(() => import("@/blocks/data-grid/base/rate-card/index.tsx?raw"))
const base8Data = sourceLoader(() => import("@/blocks/data-grid/base/rate-card/data.ts?raw"))
const base9Index = sourceLoader(() => import("@/blocks/data-grid/base/api-requests/index.tsx?raw"))
const base9TrafficChart = sourceLoader(() => import("@/blocks/data-grid/base/api-requests/traffic-chart.tsx?raw"))
const base9LogSheet = sourceLoader(() => import("@/blocks/data-grid/base/api-requests/log-sheet.tsx?raw"))
const base9Data = sourceLoader(() => import("@/blocks/data-grid/base/api-requests/data.ts?raw"))

const columns1Index = sourceLoader(() => import("@/blocks/data-grid/columns/workspace-access-review/index.tsx?raw"))
const columns1Data = sourceLoader(() => import("@/blocks/data-grid/columns/workspace-access-review/data.ts?raw"))
const columns2Index = sourceLoader(() => import("@/blocks/data-grid/columns/course-catalog/index.tsx?raw"))
const columns2Data = sourceLoader(() => import("@/blocks/data-grid/columns/course-catalog/data.ts?raw"))
const columns3Index = sourceLoader(() => import("@/blocks/data-grid/columns/work-queue/index.tsx?raw"))
const columns3Data = sourceLoader(() => import("@/blocks/data-grid/columns/work-queue/data.ts?raw"))
const columns4Index = sourceLoader(() => import("@/blocks/data-grid/columns/members/index.tsx?raw"))
const columns4Data = sourceLoader(() => import("@/blocks/data-grid/columns/members/data.ts?raw"))
const columns5Index = sourceLoader(() => import("@/blocks/data-grid/columns/companies/index.tsx?raw"))
const columns5Data = sourceLoader(() => import("@/blocks/data-grid/columns/companies/data.ts?raw"))

const dnd1Index = sourceLoader(() => import("@/blocks/data-grid/drag-drop/sprint-backlog/index.tsx?raw"))
const dnd1Data = sourceLoader(() => import("@/blocks/data-grid/drag-drop/sprint-backlog/data.ts?raw"))
const dnd2Index = sourceLoader(() => import("@/blocks/data-grid/drag-drop/routing-rules/index.tsx?raw"))
const dnd2Data = sourceLoader(() => import("@/blocks/data-grid/drag-drop/routing-rules/data.ts?raw"))
const dnd3Index = sourceLoader(() => import("@/blocks/data-grid/drag-drop/dispatch-layout/index.tsx?raw"))
const dnd3Data = sourceLoader(() => import("@/blocks/data-grid/drag-drop/dispatch-layout/data.ts?raw"))
const dnd4Index = sourceLoader(() => import("@/blocks/data-grid/drag-drop/shared-drive/index.tsx?raw"))
const dnd4Data = sourceLoader(() => import("@/blocks/data-grid/drag-drop/shared-drive/data.ts?raw"))

const edit1Index = sourceLoader(() => import("@/blocks/data-grid/editing/labels/index.tsx?raw"))
const edit1Data = sourceLoader(() => import("@/blocks/data-grid/editing/labels/data.ts?raw"))
const edit2Index = sourceLoader(() => import("@/blocks/data-grid/editing/product-inventory/index.tsx?raw"))
const edit2Data = sourceLoader(() => import("@/blocks/data-grid/editing/product-inventory/data.ts?raw"))
const edit3Index = sourceLoader(() => import("@/blocks/data-grid/editing/project-intake/index.tsx?raw"))
const edit3Data = sourceLoader(() => import("@/blocks/data-grid/editing/project-intake/data.ts?raw"))
const edit4Index = sourceLoader(() => import("@/blocks/data-grid/editing/plans/index.tsx?raw"))
const edit4Data = sourceLoader(() => import("@/blocks/data-grid/editing/plans/data.ts?raw"))
const edit5Index = sourceLoader(() => import("@/blocks/data-grid/editing/launch-runbook/index.tsx?raw"))
const edit5Data = sourceLoader(() => import("@/blocks/data-grid/editing/launch-runbook/data.ts?raw"))
const edit6Index = sourceLoader(() => import("@/blocks/data-grid/editing/reorder-plan/index.tsx?raw"))
const edit6Data = sourceLoader(() => import("@/blocks/data-grid/editing/reorder-plan/data.ts?raw"))

const exp1Index = sourceLoader(() => import("@/blocks/data-grid/expansion/task-delivery/index.tsx?raw"))
const exp1Data = sourceLoader(() => import("@/blocks/data-grid/expansion/task-delivery/data.ts?raw"))
const exp2Index = sourceLoader(() => import("@/blocks/data-grid/expansion/treasury-waterfall/index.tsx?raw"))
const exp2Data = sourceLoader(() => import("@/blocks/data-grid/expansion/treasury-waterfall/data.ts?raw"))
const exp3Index = sourceLoader(() => import("@/blocks/data-grid/expansion/release-reviews/index.tsx?raw"))
const exp3Data = sourceLoader(() => import("@/blocks/data-grid/expansion/release-reviews/data.ts?raw"))

const filter1Index = sourceLoader(() => import("@/blocks/data-grid/filtering/transactions/index.tsx?raw"))
const filter1Data = sourceLoader(() => import("@/blocks/data-grid/filtering/transactions/data.ts?raw"))

const filter2Index = sourceLoader(() => import("@/blocks/data-grid/filtering/automation-library/index.tsx?raw"))
const filter2Data = sourceLoader(() => import("@/blocks/data-grid/filtering/automation-library/data.ts?raw"))

const filter3Index = sourceLoader(() => import("@/blocks/data-grid/filtering/renewals-review/index.tsx?raw"))
const filter3Data = sourceLoader(() => import("@/blocks/data-grid/filtering/renewals-review/data.ts?raw"))
const filter3Brands = sourceLoader(() => import("@/blocks/data-grid/filtering/renewals-review/brand-icons.tsx?raw"))

const filter4Index = sourceLoader(() => import("@/blocks/data-grid/filtering/renewals-risk/index.tsx?raw"))
const filter4Data = sourceLoader(() => import("@/blocks/data-grid/filtering/renewals-risk/data.ts?raw"))
const filter4Brands = sourceLoader(() => import("@/blocks/data-grid/filtering/renewals-risk/brand-icons.tsx?raw"))

const grouping1Index = sourceLoader(() => import("@/blocks/data-grid/grouping/roadmap-queue/index.tsx?raw"))
const grouping1Data = sourceLoader(() => import("@/blocks/data-grid/grouping/roadmap-queue/data.ts?raw"))

const grouping2Index = sourceLoader(() => import("@/blocks/data-grid/grouping/revenue-by-region/index.tsx?raw"))
const grouping2Data = sourceLoader(() => import("@/blocks/data-grid/grouping/revenue-by-region/data.ts?raw"))

const grouping3Index = sourceLoader(() => import("@/blocks/data-grid/grouping/access-cohort/index.tsx?raw"))
const grouping3Data = sourceLoader(() => import("@/blocks/data-grid/grouping/access-cohort/data.ts?raw"))

const grouping4Index = sourceLoader(() => import("@/blocks/data-grid/grouping/bill-of-materials/index.tsx?raw"))
const grouping4Data = sourceLoader(() => import("@/blocks/data-grid/grouping/bill-of-materials/data.ts?raw"))

const grouping5Index = sourceLoader(() => import("@/blocks/data-grid/grouping/reporting-lines/index.tsx?raw"))
const grouping5Data = sourceLoader(() => import("@/blocks/data-grid/grouping/reporting-lines/data.ts?raw"))

const grouping6Index = sourceLoader(() => import("@/blocks/data-grid/grouping/production-desk/index.tsx?raw"))
const grouping6Data = sourceLoader(() => import("@/blocks/data-grid/grouping/production-desk/data.ts?raw"))

const grouping7Index = sourceLoader(() => import("@/blocks/data-grid/grouping/delivery-board/index.tsx?raw"))
const grouping7Data = sourceLoader(() => import("@/blocks/data-grid/grouping/delivery-board/data.ts?raw"))

const virtualization1Index = sourceLoader(() => import("@/blocks/data-grid/virtualization/transactions/index.tsx?raw"))
const virtualization1Data = sourceLoader(() => import("@/blocks/data-grid/virtualization/transactions/data.ts?raw"))

const virtualization2Index = sourceLoader(() => import("@/blocks/data-grid/virtualization/exception-queue/index.tsx?raw"))
const virtualization2Data = sourceLoader(() => import("@/blocks/data-grid/virtualization/exception-queue/data.ts?raw"))

const adv1Index = sourceLoader(() => import("@/blocks/data-grid/advanced/campaign-performance/index.tsx?raw"))
const adv1CampaignSheet = sourceLoader(() => import("@/blocks/data-grid/advanced/campaign-performance/campaign-sheet.tsx?raw"))
const adv1Data = sourceLoader(() => import("@/blocks/data-grid/advanced/campaign-performance/data.ts?raw"))
const adv1Parts = sourceLoader(() => import("@/blocks/data-grid/advanced/campaign-performance/parts.tsx?raw"))
const adv2Index = sourceLoader(() => import("@/blocks/data-grid/advanced/store-p-l/index.tsx?raw"))
const adv2Data = sourceLoader(() => import("@/blocks/data-grid/advanced/store-p-l/data.ts?raw"))
const adv2Parts = sourceLoader(() => import("@/blocks/data-grid/advanced/store-p-l/parts.tsx?raw"))
const adv2StoreSheet = sourceLoader(() => import("@/blocks/data-grid/advanced/store-p-l/store-sheet.tsx?raw"))
const adv3Index = sourceLoader(() => import("@/blocks/data-grid/advanced/campaign-targets/index.tsx?raw"))
const adv3Data = sourceLoader(() => import("@/blocks/data-grid/advanced/campaign-targets/data.ts?raw"))
const adv3Parts = sourceLoader(() => import("@/blocks/data-grid/advanced/campaign-targets/parts.tsx?raw"))
const adv3TargetSheet = sourceLoader(() => import("@/blocks/data-grid/advanced/campaign-targets/target-sheet.tsx?raw"))
const adv4Index = sourceLoader(() => import("@/blocks/data-grid/advanced/reliability-index/index.tsx?raw"))
const adv4Data = sourceLoader(() => import("@/blocks/data-grid/advanced/reliability-index/data.ts?raw"))
const adv4Parts = sourceLoader(() => import("@/blocks/data-grid/advanced/reliability-index/parts.tsx?raw"))
const adv4SloSheet = sourceLoader(() => import("@/blocks/data-grid/advanced/reliability-index/slo-sheet.tsx?raw"))
const adv5Index = sourceLoader(() => import("@/blocks/data-grid/advanced/wholesale-applications/index.tsx?raw"))
const adv5AccountSheet = sourceLoader(() => import("@/blocks/data-grid/advanced/wholesale-applications/account-sheet.tsx?raw"))
const adv5Data = sourceLoader(() => import("@/blocks/data-grid/advanced/wholesale-applications/data.ts?raw"))
const adv5Parts = sourceLoader(() => import("@/blocks/data-grid/advanced/wholesale-applications/parts.tsx?raw"))
const adv6Index = sourceLoader(() => import("@/blocks/data-grid/advanced/stock-mix/index.tsx?raw"))
const adv6Data = sourceLoader(() => import("@/blocks/data-grid/advanced/stock-mix/data.ts?raw"))
const adv6Parts = sourceLoader(() => import("@/blocks/data-grid/advanced/stock-mix/parts.tsx?raw"))
const adv7Index = sourceLoader(() => import("@/blocks/data-grid/advanced/fourplex-pro-forma/index.tsx?raw"))
const adv7Data = sourceLoader(() => import("@/blocks/data-grid/advanced/fourplex-pro-forma/data.ts?raw"))
const adv7Parts = sourceLoader(() => import("@/blocks/data-grid/advanced/fourplex-pro-forma/parts.tsx?raw"))
const adv8Index = sourceLoader(() => import("@/blocks/data-grid/advanced/product-kpis/index.tsx?raw"))
const adv8Data = sourceLoader(() => import("@/blocks/data-grid/advanced/product-kpis/data.ts?raw"))
const adv8Parts = sourceLoader(() => import("@/blocks/data-grid/advanced/product-kpis/parts.tsx?raw"))
const adv9Index = sourceLoader(() => import("@/blocks/data-grid/advanced/service-visits/index.tsx?raw"))
const adv9Data = sourceLoader(() => import("@/blocks/data-grid/advanced/service-visits/data.ts?raw"))
const adv9Parts = sourceLoader(() => import("@/blocks/data-grid/advanced/service-visits/parts.tsx?raw"))
const adv10Index = sourceLoader(() => import("@/blocks/data-grid/advanced/technician-capacity/index.tsx?raw"))
const adv10Data = sourceLoader(() => import("@/blocks/data-grid/advanced/technician-capacity/data.ts?raw"))
const adv10Parts = sourceLoader(() => import("@/blocks/data-grid/advanced/technician-capacity/parts.tsx?raw"))
const adv11Index = sourceLoader(() => import("@/blocks/data-grid/advanced/factory-scorecard/index.tsx?raw"))
const adv11Data = sourceLoader(() => import("@/blocks/data-grid/advanced/factory-scorecard/data.ts?raw"))
const adv11Parts = sourceLoader(() => import("@/blocks/data-grid/advanced/factory-scorecard/parts.tsx?raw"))
const adv11Sheets = sourceLoader(() => import("@/blocks/data-grid/advanced/factory-scorecard/sheets.tsx?raw"))
const adv12Index = sourceLoader(() => import("@/blocks/data-grid/advanced/freight-cargo-services/index.tsx?raw"))
const adv12Data = sourceLoader(() => import("@/blocks/data-grid/advanced/freight-cargo-services/data.ts?raw"))
const adv12Parts = sourceLoader(() => import("@/blocks/data-grid/advanced/freight-cargo-services/parts.tsx?raw"))
const adv12Sheets = sourceLoader(() => import("@/blocks/data-grid/advanced/freight-cargo-services/sheets.tsx?raw"))
const adv13Index = sourceLoader(() => import("@/blocks/data-grid/advanced/hr-scorecard/index.tsx?raw"))
const adv13Data = sourceLoader(() => import("@/blocks/data-grid/advanced/hr-scorecard/data.ts?raw"))
const adv13Dialogs = sourceLoader(() => import("@/blocks/data-grid/advanced/hr-scorecard/dialogs.tsx?raw"))
const adv13Parts = sourceLoader(() => import("@/blocks/data-grid/advanced/hr-scorecard/parts.tsx?raw"))
const adv14Index = sourceLoader(() => import("@/blocks/data-grid/advanced/strategy-scorecard/index.tsx?raw"))
const adv14Data = sourceLoader(() => import("@/blocks/data-grid/advanced/strategy-scorecard/data.ts?raw"))
const adv14Dialogs = sourceLoader(() => import("@/blocks/data-grid/advanced/strategy-scorecard/dialogs.tsx?raw"))
const adv14Parts = sourceLoader(() => import("@/blocks/data-grid/advanced/strategy-scorecard/parts.tsx?raw"))
const adv15Index = sourceLoader(() => import("@/blocks/data-grid/advanced/p-l-outlook/index.tsx?raw"))
const adv15Data = sourceLoader(() => import("@/blocks/data-grid/advanced/p-l-outlook/data.ts?raw"))
const adv15Dialogs = sourceLoader(() => import("@/blocks/data-grid/advanced/p-l-outlook/dialogs.tsx?raw"))
const adv15Parts = sourceLoader(() => import("@/blocks/data-grid/advanced/p-l-outlook/parts.tsx?raw"))
const adv16Index = sourceLoader(() => import("@/blocks/data-grid/advanced/store-kpis/index.tsx?raw"))
const adv16Data = sourceLoader(() => import("@/blocks/data-grid/advanced/store-kpis/data.ts?raw"))
const adv16Parts = sourceLoader(() => import("@/blocks/data-grid/advanced/store-kpis/parts.tsx?raw"))
const adv16StoreSheet = sourceLoader(() => import("@/blocks/data-grid/advanced/store-kpis/store-sheet.tsx?raw"))
const adv17Index = sourceLoader(() => import("@/blocks/data-grid/advanced/support-scorecard/index.tsx?raw"))
const adv17AgentSheet = sourceLoader(() => import("@/blocks/data-grid/advanced/support-scorecard/agent-sheet.tsx?raw"))
const adv17Data = sourceLoader(() => import("@/blocks/data-grid/advanced/support-scorecard/data.ts?raw"))
const adv17Parts = sourceLoader(() => import("@/blocks/data-grid/advanced/support-scorecard/parts.tsx?raw"))
const adv18Index = sourceLoader(() => import("@/blocks/data-grid/advanced/job-schedule/index.tsx?raw"))
const adv18Data = sourceLoader(() => import("@/blocks/data-grid/advanced/job-schedule/data.ts?raw"))
const adv18JobSheet = sourceLoader(() => import("@/blocks/data-grid/advanced/job-schedule/job-sheet.tsx?raw"))
const adv18Parts = sourceLoader(() => import("@/blocks/data-grid/advanced/job-schedule/parts.tsx?raw"))
const adv19Index = sourceLoader(() => import("@/blocks/data-grid/advanced/prospects/index.tsx?raw"))
const adv19CompanySheet = sourceLoader(() => import("@/blocks/data-grid/advanced/prospects/company-sheet.tsx?raw"))
const adv19Data = sourceLoader(() => import("@/blocks/data-grid/advanced/prospects/data.ts?raw"))
const adv19Parts = sourceLoader(() => import("@/blocks/data-grid/advanced/prospects/parts.tsx?raw"))
const adv20Index = sourceLoader(() => import("@/blocks/data-grid/advanced/project-budget/index.tsx?raw"))
const adv20Data = sourceLoader(() => import("@/blocks/data-grid/advanced/project-budget/data.ts?raw"))
const adv20LineSheet = sourceLoader(() => import("@/blocks/data-grid/advanced/project-budget/line-sheet.tsx?raw"))
const adv20Parts = sourceLoader(() => import("@/blocks/data-grid/advanced/project-budget/parts.tsx?raw"))
const adv21Index = sourceLoader(() => import("@/blocks/data-grid/advanced/invoices/index.tsx?raw"))
const adv21CustomerSheet = sourceLoader(() => import("@/blocks/data-grid/advanced/invoices/customer-sheet.tsx?raw"))
const adv21Data = sourceLoader(() => import("@/blocks/data-grid/advanced/invoices/data.ts?raw"))
const adv21Parts = sourceLoader(() => import("@/blocks/data-grid/advanced/invoices/parts.tsx?raw"))


export type Lang = "tsx" | "typescript"

export interface BlockFile {
  name: string
  lang: Lang
  /** Inline source when it is already in memory. */
  code?: string
  /** Lazily loaded source, used for every registry file. */
  load?: () => Promise<string>
}

export type PackageManager = "npm" | "pnpm" | "yarn" | "bun"

export interface BlockEntry {
  id: string
  name: string
  category: string
  stage: string
  /** Block family. Defaults to `data-grid` when omitted. */
  group?: "data-grid" | "application"
  href: string
  Component: React.ComponentType
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
  group?: "data-grid" | "application"
}

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

/** Application block categories from https://reui.io/blocks/application. */
export const APPLICATION_CATEGORIES: CategoryEntry[] = [
  { name: "App Shell", count: 36 },
  { name: "Auth", count: 20 },
  { name: "Card", count: 43 },
  { name: "Dashboard", count: 8 },
  { name: "Dialog", count: 15 },
  { name: "Empty State", count: 14 },
  { name: "Event Calendar", count: 6 },
  { name: "Flow", count: 4 },
  { name: "Form", count: 12 },
  { name: "Gantt", count: 4 },
  { name: "Kanban Board", count: 10 },
  { name: "List", count: 11 },
  { name: "Navbar", count: 13 },
  { name: "Onboarding", count: 9 },
  { name: "Profile", count: 10 },
  { name: "Rich Text Editor", count: 5 },
  { name: "Schedule", count: 10 },
  { name: "Settings", count: 16 },
  { name: "Sheet", count: 24 },
  { name: "Stats", count: 17 },
  { name: "Timeline", count: 9 },
  { name: "Whiteboard", count: 2 },
  { name: "Wizard", count: 7 },
].map((entry) => ({ ...entry, group: "application" as const }))

export const DATA_GRID_TOTAL = CATEGORIES.reduce(
  (sum, category) => sum + category.count,
  0,
)

export const APPLICATION_TOTAL = APPLICATION_CATEGORIES.reduce(
  (sum, category) => sum + category.count,
  0,
)

/** Top-level ReUI block groups shown in the sidebar selector and blocks page. */
export interface BlockGroupEntry {
  name: string
  count: number
  categories: string[]
}

export const BLOCK_GROUPS: BlockGroupEntry[] = [
  {
    name: "Application",
    count: 305,
    categories: APPLICATION_CATEGORIES.map((category) => category.name),
  },
  {
    name: "Data Grid",
    count: 70,
    categories: CATEGORIES.map((category) => category.name),
  },
  { name: "Charts", count: 54, categories: [] },
  { name: "Solutions", count: 82, categories: [] },
  { name: "AI & Agents", count: 22, categories: [] },
  { name: "eCommerce", count: 87, categories: [] },
  { name: "Marketing", count: 67, categories: [] },
]

export const BLOCK_TOTAL = BLOCK_GROUPS.reduce(
  (sum, group) => sum + group.count,
  0,
)

export function categoriesInGroup(group: string | null): CategoryEntry[] {
  if (!group) return [...APPLICATION_CATEGORIES, ...CATEGORIES]
  if (group === "Application") return APPLICATION_CATEGORIES
  if (group === "Data Grid") return CATEGORIES
  return []
}

export function blocksInGroup(group: string | null): BlockEntry[] {
  if (!group) return BLOCKS
  const entry = BLOCK_GROUPS.find((item) => item.name === group)
  if (!entry) return []
  return BLOCKS.filter((block) => entry.categories.includes(block.category))
}

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
  ...APP_SHELL_BLOCKS,
  ...AUTH_BLOCKS,
  ...CARD_BLOCKS,
  ...DASHBOARD_BLOCKS,
  ...DIALOG_BLOCKS,
  ...EMPTY_STATE_BLOCKS,
  ...EVENT_CALENDAR_BLOCKS,
  ...FLOW_BLOCKS,
  ...FORM_BLOCKS,
  ...GANTT_BLOCKS,
  ...KANBAN_BOARD_BLOCKS,
  ...LIST_BLOCKS,
  ...NAVBAR_BLOCKS,
  ...ONBOARDING_BLOCKS,
  ...PROFILE_BLOCKS,
  ...RICH_TEXT_EDITOR_BLOCKS,
  ...SCHEDULE_BLOCKS,
  ...SETTINGS_BLOCKS,
  ...SHEET_BLOCKS,
  ...STATS_BLOCKS,
  ...TIMELINE_BLOCKS,
  ...WHITEBOARD_BLOCKS,
  ...WIZARD_BLOCKS,
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
