import { BLOCKS } from "@/blocks/~internal/registry"
import { UI_COMPONENT_ENTRIES } from "./ui-catalog"
import type { BlockEntry, BlockFile } from "@/blocks/~internal/registry"
import baseRegistry from "@/components/kit/base/registry.json"
import reuiRegistry from "@/components/kit/registry.json"

import RadixAlertTitleDescriptionPreview from "../radix/alert/title-description"
import RadixAlertLeadingIconPreview from "../radix/alert/leading-icon"
import RadixAlertIconActionsPreview from "../radix/alert/icon-actions"
import RadixAlertPaymentFailurePreview from "../radix/alert/payment-failure"
import RadixAlertInfoVariantPreview from "../radix/alert/info-variant"
import RadixAlertSuccessVariantPreview from "../radix/alert/success-variant"
import RadixAlertWarningVariantPreview from "../radix/alert/warning-variant"
import RadixAlertErrorVariantPreview from "../radix/alert/error-variant"
import RadixAlertInvertVariantPreview from "../radix/alert/invert-variant"
import RadixAlertTitleActionsPreview from "../radix/alert/title-actions"
import RadixAlertDescriptionActionsPreview from "../radix/alert/description-actions"
import RadixAlertFrameResetBordersPreview from "../radix/alert/frame-reset-borders"
import RadixAlertStackedInFramePreview from "../radix/alert/stacked-in-frame"
import RadixAlertFrameWithActionsPreview from "../radix/alert/frame-with-actions"
import RadixAlertProUpsellPreview from "../radix/alert/pro-upsell"
import RadixAlertUrgentBillingPreview from "../radix/alert/urgent-billing"
import RadixAlertServiceStatusPreview from "../radix/alert/service-status"
import RadixAlertFeatureDiscoveryPreview from "../radix/alert/feature-discovery"
import RadixAlertDirectMessagePreview from "../radix/alert/direct-message"
import RadixAlertCommentMentionPreview from "../radix/alert/comment-mention"
import RadixAutocompleteStandardPreview from "../radix/autocomplete/standard"
import RadixAutocompleteDisabledPreview from "../radix/autocomplete/disabled"
import RadixAutocompleteAutoHighlightPreview from "../radix/autocomplete/auto-highlight"
import RadixAutocompleteLabeledPreview from "../radix/autocomplete/labeled"
import RadixAutocompleteClearButtonPreview from "../radix/autocomplete/clear-button"
import RadixAutocompleteTriggerButtonPreview from "../radix/autocomplete/trigger-button"
import RadixAutocompleteClearTriggerPreview from "../radix/autocomplete/clear-trigger"
import RadixAutocompleteGroupsLabelsPreview from "../radix/autocomplete/groups-labels"
import RadixAutocompleteSearchResultsPreview from "../radix/autocomplete/search-results"
import RadixAutocompleteSmallPreview from "../radix/autocomplete/small"
import RadixAutocompleteLargePreview from "../radix/autocomplete/large"
import RadixAutocompleteFormIntegrationPreview from "../radix/autocomplete/form-integration"
import RadixBadgePreview from "../radix/badge/default"
import RadixCascaderPreview from "../radix/cascader/default"
import RadixCodeBlockPreview from "../radix/code-block/default"
import RadixColorPickerPreview from "../radix/color-picker/default"
import RadixDataGridPreview from "../radix/data-grid/default"
import RadixDateSelectorPreview from "../radix/date-selector/default"
import RadixEmojiPickerPreview from "../radix/emoji-picker/default"
import RadixEventCalendarPreview from "../radix/event-calendar/default"
import RadixFileTypePreview from "../radix/file-type/default"
import RadixFiltersPreview from "../radix/filters/default"
import RadixFramePreview from "../radix/frame/default"
import RadixGanttPreview from "../radix/gantt/default"
import RadixIconStackPreview from "../radix/icon-stack/default"
import RadixIconTilePreview from "../radix/icon-tile/default"
import RadixKanbanPreview from "../radix/kanban/default"
import RadixNumberFieldPreview from "../radix/number-field/default"
import RadixPhoneInputPreview from "../radix/phone-input/default"
import RadixRatingPreview from "../radix/rating/default"
import RadixScrollspyPreview from "../radix/scrollspy/default"
import RadixSignaturePadPreview from "../radix/signature-pad/default"
import RadixSortablePreview from "../radix/sortable/default"
import RadixStepperPreview from "../radix/stepper/default"
import RadixTimePickerPreview from "../radix/time-picker/default"
import RadixTimelinePreview from "../radix/timeline/default"
import RadixTreePreview from "../radix/tree/default"
import BaseAutocompletePreview from "../base/autocomplete/default"
import BaseBadgePreview from "../base/badge/default"
import BaseCascaderPreview from "../base/cascader/default"
import BaseCodeBlockPreview from "../base/code-block/default"
import BaseColorPickerPreview from "../base/color-picker/default"
import BaseDataGridPreview from "../base/data-grid/default"
import BaseDateSelectorPreview from "../base/date-selector/default"
import BaseEmojiPickerPreview from "../base/emoji-picker/default"
import BaseEventCalendarPreview from "../base/event-calendar/default"
import BaseFiltersPreview from "../base/filters/default"
import BaseFramePreview from "../base/frame/default"
import BaseGanttPreview from "../base/gantt/default"
import BaseIconStackPreview from "../base/icon-stack/default"
import BaseIconTilePreview from "../base/icon-tile/default"
import BaseKanbanPreview from "../base/kanban/default"
import BaseNumberFieldPreview from "../base/number-field/default"
import BasePhoneInputPreview from "../base/phone-input/default"
import BaseSignaturePadPreview from "../base/signature-pad/default"
import BaseSortablePreview from "../base/sortable/default"
import BaseStepperPreview from "../base/stepper/default"
import BaseTimePickerPreview from "../base/time-picker/default"
import BaseTimelinePreview from "../base/timeline/default"
import BaseTreePreview from "../base/tree/default"

import RadixAlertTitleDescriptionSource from "../radix/alert/title-description.tsx?raw"
import RadixAlertLeadingIconSource from "../radix/alert/leading-icon.tsx?raw"
import RadixAlertIconActionsSource from "../radix/alert/icon-actions.tsx?raw"
import RadixAlertPaymentFailureSource from "../radix/alert/payment-failure.tsx?raw"
import RadixAlertInfoVariantSource from "../radix/alert/info-variant.tsx?raw"
import RadixAlertSuccessVariantSource from "../radix/alert/success-variant.tsx?raw"
import RadixAlertWarningVariantSource from "../radix/alert/warning-variant.tsx?raw"
import RadixAlertErrorVariantSource from "../radix/alert/error-variant.tsx?raw"
import RadixAlertInvertVariantSource from "../radix/alert/invert-variant.tsx?raw"
import RadixAlertTitleActionsSource from "../radix/alert/title-actions.tsx?raw"
import RadixAlertDescriptionActionsSource from "../radix/alert/description-actions.tsx?raw"
import RadixAlertFrameResetBordersSource from "../radix/alert/frame-reset-borders.tsx?raw"
import RadixAlertStackedInFrameSource from "../radix/alert/stacked-in-frame.tsx?raw"
import RadixAlertFrameWithActionsSource from "../radix/alert/frame-with-actions.tsx?raw"
import RadixAlertProUpsellSource from "../radix/alert/pro-upsell.tsx?raw"
import RadixAlertUrgentBillingSource from "../radix/alert/urgent-billing.tsx?raw"
import RadixAlertServiceStatusSource from "../radix/alert/service-status.tsx?raw"
import RadixAlertFeatureDiscoverySource from "../radix/alert/feature-discovery.tsx?raw"
import RadixAlertDirectMessageSource from "../radix/alert/direct-message.tsx?raw"
import RadixAlertCommentMentionSource from "../radix/alert/comment-mention.tsx?raw"
import RadixAutocompleteStandardSource from "../radix/autocomplete/standard.tsx?raw"
import RadixAutocompleteDisabledSource from "../radix/autocomplete/disabled.tsx?raw"
import RadixAutocompleteAutoHighlightSource from "../radix/autocomplete/auto-highlight.tsx?raw"
import RadixAutocompleteLabeledSource from "../radix/autocomplete/labeled.tsx?raw"
import RadixAutocompleteClearButtonSource from "../radix/autocomplete/clear-button.tsx?raw"
import RadixAutocompleteTriggerButtonSource from "../radix/autocomplete/trigger-button.tsx?raw"
import RadixAutocompleteClearTriggerSource from "../radix/autocomplete/clear-trigger.tsx?raw"
import RadixAutocompleteGroupsLabelsSource from "../radix/autocomplete/groups-labels.tsx?raw"
import RadixAutocompleteSearchResultsSource from "../radix/autocomplete/search-results.tsx?raw"
import RadixAutocompleteSmallSource from "../radix/autocomplete/small.tsx?raw"
import RadixAutocompleteLargeSource from "../radix/autocomplete/large.tsx?raw"
import RadixAutocompleteFormIntegrationSource from "../radix/autocomplete/form-integration.tsx?raw"
import RadixBadgeSource from "../radix/badge/default.tsx?raw"
import RadixCascaderSource from "../radix/cascader/default.tsx?raw"
import RadixCodeBlockSource from "../radix/code-block/default.tsx?raw"
import RadixColorPickerSource from "../radix/color-picker/default.tsx?raw"
import RadixDataGridSource from "../radix/data-grid/default.tsx?raw"
import RadixDateSelectorSource from "../radix/date-selector/default.tsx?raw"
import RadixEmojiPickerSource from "../radix/emoji-picker/default.tsx?raw"
import RadixEventCalendarSource from "../radix/event-calendar/default.tsx?raw"
import RadixFileTypeSource from "../radix/file-type/default.tsx?raw"
import RadixFiltersSource from "../radix/filters/default.tsx?raw"
import RadixFrameSource from "../radix/frame/default.tsx?raw"
import RadixGanttSource from "../radix/gantt/default.tsx?raw"
import RadixIconStackSource from "../radix/icon-stack/default.tsx?raw"
import RadixIconTileSource from "../radix/icon-tile/default.tsx?raw"
import RadixKanbanSource from "../radix/kanban/default.tsx?raw"
import RadixNumberFieldSource from "../radix/number-field/default.tsx?raw"
import RadixPhoneInputSource from "../radix/phone-input/default.tsx?raw"
import RadixRatingSource from "../radix/rating/default.tsx?raw"
import RadixScrollspySource from "../radix/scrollspy/default.tsx?raw"
import RadixSignaturePadSource from "../radix/signature-pad/default.tsx?raw"
import RadixSortableSource from "../radix/sortable/default.tsx?raw"
import RadixStepperSource from "../radix/stepper/default.tsx?raw"
import RadixTimePickerSource from "../radix/time-picker/default.tsx?raw"
import RadixTimelineSource from "../radix/timeline/default.tsx?raw"
import RadixTreeSource from "../radix/tree/default.tsx?raw"
import BaseAutocompleteSource from "../base/autocomplete/default.tsx?raw"
import BaseBadgeSource from "../base/badge/default.tsx?raw"
import BaseCascaderSource from "../base/cascader/default.tsx?raw"
import BaseCodeBlockSource from "../base/code-block/default.tsx?raw"
import BaseColorPickerSource from "../base/color-picker/default.tsx?raw"
import BaseDataGridSource from "../base/data-grid/default.tsx?raw"
import BaseDateSelectorSource from "../base/date-selector/default.tsx?raw"
import BaseEmojiPickerSource from "../base/emoji-picker/default.tsx?raw"
import BaseEventCalendarSource from "../base/event-calendar/default.tsx?raw"
import BaseFiltersSource from "../base/filters/default.tsx?raw"
import BaseFrameSource from "../base/frame/default.tsx?raw"
import BaseGanttSource from "../base/gantt/default.tsx?raw"
import BaseIconStackSource from "../base/icon-stack/default.tsx?raw"
import BaseIconTileSource from "../base/icon-tile/default.tsx?raw"
import BaseKanbanSource from "../base/kanban/default.tsx?raw"
import BaseNumberFieldSource from "../base/number-field/default.tsx?raw"
import BasePhoneInputSource from "../base/phone-input/default.tsx?raw"
import BaseSignaturePadSource from "../base/signature-pad/default.tsx?raw"
import BaseSortableSource from "../base/sortable/default.tsx?raw"
import BaseStepperSource from "../base/stepper/default.tsx?raw"
import BaseTimePickerSource from "../base/time-picker/default.tsx?raw"
import BaseTimelineSource from "../base/timeline/default.tsx?raw"
import BaseTreeSource from "../base/tree/default.tsx?raw"

const file = (name: string, code: string): BlockFile => ({
  name,
  code,
  lang: "tsx",
})

type RegistryItem = {
  name: string
  dependencies?: string[]
  registryDependencies?: string[]
}

function registryItem(flavor: "radix" | "base", item: string): RegistryItem | undefined {
  const registry = flavor === "base" ? baseRegistry : reuiRegistry
  return (registry.items as RegistryItem[]).find((entry) => entry.name === item)
}

function componentEntry({
  flavor,
  item,
  id,
  name,
  variant,
  extraDependencies = [],
  extraPackages = [],
  installTarget,
  Component,
  source,
}: {
  flavor: "radix" | "base"
  item: string
  id: string
  name: string
  variant?: string
  extraDependencies?: string[]
  extraPackages?: string[]
  installTarget?: string
  Component: () => React.JSX.Element
  source: string
}): BlockEntry {
  const registry = registryItem(flavor, item)
  const registryDependencies = [
    `@reui-unbound/${item}`,
    ...(registry?.registryDependencies ?? []),
    ...extraDependencies,
  ]

  return {
    id,
    name,
    category: "Components",
    stage: flavor === "base" ? "Base" : "Radix",
    href: `https://reui.io/components/${item.replace(/^base-/, "")}`,
    dependencies: {
      registry: [...new Set(registryDependencies)],
      packages: [...(registry?.dependencies ?? []), ...extraPackages],
    },
    Component,
    files: [file("preview.tsx", source)],
    kind: "component",
    flavor,
    registryId: item,
    installTarget,
    variant,
  }
}

const REUI_COMPONENT_ENTRIES: BlockEntry[] = [
  componentEntry({
    flavor: "radix",
    item: "alert",
    id: "alert-title-description-radix",
    name: "Alert",
    variant: "Title & Description",
    installTarget: "@reui-unbound/alert-title-description",
    Component: RadixAlertTitleDescriptionPreview,
    source: RadixAlertTitleDescriptionSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "alert",
    id: "alert-leading-icon-radix",
    name: "Alert",
    variant: "Leading Icon",
    installTarget: "@reui-unbound/alert-leading-icon",
    Component: RadixAlertLeadingIconPreview,
    extraDependencies: ["@reui-unbound/icon-placeholder"],
    source: RadixAlertLeadingIconSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "alert",
    id: "alert-icon-actions-radix",
    name: "Alert",
    variant: "Icon & Actions",
    installTarget: "@reui-unbound/alert-icon-actions",
    Component: RadixAlertIconActionsPreview,
    extraDependencies: ["button", "@reui-unbound/icon-placeholder"],
    source: RadixAlertIconActionsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "alert",
    id: "alert-payment-failure-radix",
    name: "Alert",
    variant: "Payment Failure",
    installTarget: "@reui-unbound/alert-payment-failure",
    Component: RadixAlertPaymentFailurePreview,
    extraDependencies: ["@reui-unbound/icon-placeholder"],
    source: RadixAlertPaymentFailureSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "alert",
    id: "alert-info-variant-radix",
    name: "Alert",
    variant: "Info Variant",
    installTarget: "@reui-unbound/alert-info-variant",
    Component: RadixAlertInfoVariantPreview,
    extraDependencies: ["@reui-unbound/icon-placeholder"],
    source: RadixAlertInfoVariantSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "alert",
    id: "alert-success-variant-radix",
    name: "Alert",
    variant: "Success Variant",
    installTarget: "@reui-unbound/alert-success-variant",
    Component: RadixAlertSuccessVariantPreview,
    extraDependencies: ["@reui-unbound/icon-placeholder"],
    source: RadixAlertSuccessVariantSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "alert",
    id: "alert-warning-variant-radix",
    name: "Alert",
    variant: "Warning Variant",
    installTarget: "@reui-unbound/alert-warning-variant",
    Component: RadixAlertWarningVariantPreview,
    extraDependencies: ["@reui-unbound/icon-placeholder"],
    source: RadixAlertWarningVariantSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "alert",
    id: "alert-error-variant-radix",
    name: "Alert",
    variant: "Error Variant",
    installTarget: "@reui-unbound/alert-error-variant",
    Component: RadixAlertErrorVariantPreview,
    extraDependencies: ["@reui-unbound/icon-placeholder"],
    source: RadixAlertErrorVariantSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "alert",
    id: "alert-invert-variant-radix",
    name: "Alert",
    variant: "Invert Variant",
    installTarget: "@reui-unbound/alert-invert-variant",
    Component: RadixAlertInvertVariantPreview,
    extraDependencies: ["@reui-unbound/icon-placeholder"],
    source: RadixAlertInvertVariantSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "alert",
    id: "alert-title-actions-radix",
    name: "Alert",
    variant: "Title & Actions",
    installTarget: "@reui-unbound/alert-title-actions",
    Component: RadixAlertTitleActionsPreview,
    extraDependencies: ["button", "@reui-unbound/icon-placeholder"],
    source: RadixAlertTitleActionsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "alert",
    id: "alert-description-actions-radix",
    name: "Alert",
    variant: "Description & Actions",
    installTarget: "@reui-unbound/alert-description-actions",
    Component: RadixAlertDescriptionActionsPreview,
    extraDependencies: ["button", "@reui-unbound/icon-placeholder"],
    source: RadixAlertDescriptionActionsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "alert",
    id: "alert-frame-reset-borders-radix",
    name: "Alert",
    variant: "Frame Reset Borders",
    installTarget: "@reui-unbound/alert-frame-reset-borders",
    Component: RadixAlertFrameResetBordersPreview,
    extraDependencies: ["@reui-unbound/frame", "@reui-unbound/icon-placeholder"],
    source: RadixAlertFrameResetBordersSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "alert",
    id: "alert-stacked-in-frame-radix",
    name: "Alert",
    variant: "Stacked in Frame",
    installTarget: "@reui-unbound/alert-stacked-in-frame",
    Component: RadixAlertStackedInFramePreview,
    extraDependencies: ["button", "@reui-unbound/frame", "@reui-unbound/icon-placeholder"],
    source: RadixAlertStackedInFrameSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "alert",
    id: "alert-frame-with-actions-radix",
    name: "Alert",
    variant: "Frame With Actions",
    installTarget: "@reui-unbound/alert-frame-with-actions",
    Component: RadixAlertFrameWithActionsPreview,
    extraDependencies: ["button", "@reui-unbound/frame", "@reui-unbound/icon-placeholder"],
    source: RadixAlertFrameWithActionsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "alert",
    id: "alert-pro-upsell-radix",
    name: "Alert",
    variant: "Pro Upsell",
    installTarget: "@reui-unbound/alert-pro-upsell",
    Component: RadixAlertProUpsellPreview,
    extraDependencies: ["button", "@reui-unbound/frame", "@reui-unbound/icon-placeholder"],
    source: RadixAlertProUpsellSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "alert",
    id: "alert-urgent-billing-radix",
    name: "Alert",
    variant: "Urgent Billing",
    installTarget: "@reui-unbound/alert-urgent-billing",
    Component: RadixAlertUrgentBillingPreview,
    extraDependencies: ["button", "@reui-unbound/frame", "@reui-unbound/icon-placeholder"],
    source: RadixAlertUrgentBillingSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "alert",
    id: "alert-service-status-radix",
    name: "Alert",
    variant: "Service Status",
    installTarget: "@reui-unbound/alert-service-status",
    Component: RadixAlertServiceStatusPreview,
    extraDependencies: ["button", "@reui-unbound/frame", "@reui-unbound/icon-placeholder"],
    source: RadixAlertServiceStatusSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "alert",
    id: "alert-feature-discovery-radix",
    name: "Alert",
    variant: "Feature Discovery",
    installTarget: "@reui-unbound/alert-feature-discovery",
    Component: RadixAlertFeatureDiscoveryPreview,
    extraDependencies: ["button", "@reui-unbound/frame", "@reui-unbound/icon-placeholder"],
    source: RadixAlertFeatureDiscoverySource,
  }),
  componentEntry({
    flavor: "radix",
    item: "alert",
    id: "alert-direct-message-radix",
    name: "Alert",
    variant: "Direct Message",
    installTarget: "@reui-unbound/alert-direct-message",
    Component: RadixAlertDirectMessagePreview,
    extraDependencies: ["avatar", "button", "@reui-unbound/frame"],
    source: RadixAlertDirectMessageSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "alert",
    id: "alert-comment-mention-radix",
    name: "Alert",
    variant: "Comment Mention",
    installTarget: "@reui-unbound/alert-comment-mention",
    Component: RadixAlertCommentMentionPreview,
    extraDependencies: ["avatar", "button", "@reui-unbound/frame"],
    source: RadixAlertCommentMentionSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "autocomplete",
    id: "autocomplete-standard-radix",
    name: "Autocomplete",
    variant: "Standard",
    installTarget: "@reui-unbound/autocomplete-standard",
    Component: RadixAutocompleteStandardPreview,
    source: RadixAutocompleteStandardSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "autocomplete",
    id: "autocomplete-disabled-radix",
    name: "Autocomplete",
    variant: "Disabled",
    installTarget: "@reui-unbound/autocomplete-disabled",
    Component: RadixAutocompleteDisabledPreview,
    source: RadixAutocompleteDisabledSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "autocomplete",
    id: "autocomplete-auto-highlight-radix",
    name: "Autocomplete",
    variant: "Auto Highlight",
    installTarget: "@reui-unbound/autocomplete-auto-highlight",
    Component: RadixAutocompleteAutoHighlightPreview,
    source: RadixAutocompleteAutoHighlightSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "autocomplete",
    id: "autocomplete-labeled-radix",
    name: "Autocomplete",
    variant: "Labeled",
    installTarget: "@reui-unbound/autocomplete-labeled",
    extraDependencies: ["label"],
    Component: RadixAutocompleteLabeledPreview,
    source: RadixAutocompleteLabeledSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "autocomplete",
    id: "autocomplete-clear-button-radix",
    name: "Autocomplete",
    variant: "Clear Button",
    installTarget: "@reui-unbound/autocomplete-clear-button",
    Component: RadixAutocompleteClearButtonPreview,
    source: RadixAutocompleteClearButtonSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "autocomplete",
    id: "autocomplete-trigger-button-radix",
    name: "Autocomplete",
    variant: "Trigger Button",
    installTarget: "@reui-unbound/autocomplete-trigger-button",
    Component: RadixAutocompleteTriggerButtonPreview,
    source: RadixAutocompleteTriggerButtonSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "autocomplete",
    id: "autocomplete-clear-trigger-radix",
    name: "Autocomplete",
    variant: "Clear & Trigger",
    installTarget: "@reui-unbound/autocomplete-clear-trigger",
    Component: RadixAutocompleteClearTriggerPreview,
    source: RadixAutocompleteClearTriggerSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "autocomplete",
    id: "autocomplete-groups-labels-radix",
    name: "Autocomplete",
    variant: "Groups & Labels",
    installTarget: "@reui-unbound/autocomplete-groups-labels",
    extraDependencies: ["avatar"],
    Component: RadixAutocompleteGroupsLabelsPreview,
    source: RadixAutocompleteGroupsLabelsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "autocomplete",
    id: "autocomplete-search-results-radix",
    name: "Autocomplete",
    variant: "Search Results",
    installTarget: "@reui-unbound/autocomplete-search-results",
    extraDependencies: ["avatar", "@reui-unbound/icon-placeholder"],
    Component: RadixAutocompleteSearchResultsPreview,
    source: RadixAutocompleteSearchResultsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "autocomplete",
    id: "autocomplete-small-radix",
    name: "Autocomplete",
    variant: "Small",
    installTarget: "@reui-unbound/autocomplete-small",
    Component: RadixAutocompleteSmallPreview,
    source: RadixAutocompleteSmallSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "autocomplete",
    id: "autocomplete-large-radix",
    name: "Autocomplete",
    variant: "Large",
    installTarget: "@reui-unbound/autocomplete-large",
    Component: RadixAutocompleteLargePreview,
    source: RadixAutocompleteLargeSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "autocomplete",
    id: "autocomplete-form-integration-radix",
    name: "Autocomplete",
    variant: "Form Integration",
    installTarget: "@reui-unbound/autocomplete-form-integration",
    extraDependencies: ["@reui-unbound/alert", "button", "field", "@reui-unbound/icon-placeholder"],
    extraPackages: ["react-hook-form", "zod", "@hookform/resolvers", "sonner"],
    Component: RadixAutocompleteFormIntegrationPreview,
    source: RadixAutocompleteFormIntegrationSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "badge",
    id: "badge-radix",
    name: "Badge",
    Component: RadixBadgePreview,
    source: RadixBadgeSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "cascader",
    id: "cascader-radix",
    name: "Cascader",
    Component: RadixCascaderPreview,
    source: RadixCascaderSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "code-block",
    id: "code-block-radix",
    name: "Code Block",
    Component: RadixCodeBlockPreview,
    source: RadixCodeBlockSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "color-picker",
    id: "color-picker-radix",
    name: "Color Picker",
    Component: RadixColorPickerPreview,
    source: RadixColorPickerSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "data-grid",
    id: "data-grid-radix",
    name: "Data Grid",
    Component: RadixDataGridPreview,
    source: RadixDataGridSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "date-selector",
    id: "date-selector-radix",
    name: "Date Selector",
    Component: RadixDateSelectorPreview,
    source: RadixDateSelectorSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "emoji-picker",
    id: "emoji-picker-radix",
    name: "Emoji Picker",
    Component: RadixEmojiPickerPreview,
    source: RadixEmojiPickerSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "event-calendar",
    id: "event-calendar-radix",
    name: "Event Calendar",
    Component: RadixEventCalendarPreview,
    source: RadixEventCalendarSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "file-type",
    id: "file-type-radix",
    name: "File Type",
    Component: RadixFileTypePreview,
    source: RadixFileTypeSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "filters",
    id: "filters-radix",
    name: "Filters",
    Component: RadixFiltersPreview,
    source: RadixFiltersSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "frame",
    id: "frame-radix",
    name: "Frame",
    Component: RadixFramePreview,
    source: RadixFrameSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "gantt",
    id: "gantt-radix",
    name: "Gantt",
    Component: RadixGanttPreview,
    source: RadixGanttSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "icon-stack",
    id: "icon-stack-radix",
    name: "Icon Stack",
    Component: RadixIconStackPreview,
    source: RadixIconStackSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "icon-tile",
    id: "icon-tile-radix",
    name: "Icon Tile",
    Component: RadixIconTilePreview,
    source: RadixIconTileSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "kanban",
    id: "kanban-radix",
    name: "Kanban",
    Component: RadixKanbanPreview,
    source: RadixKanbanSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "number-field",
    id: "number-field-radix",
    name: "Number Field",
    Component: RadixNumberFieldPreview,
    source: RadixNumberFieldSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "phone-input",
    id: "phone-input-radix",
    name: "Phone Input",
    Component: RadixPhoneInputPreview,
    source: RadixPhoneInputSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "rating",
    id: "rating-radix",
    name: "Rating",
    Component: RadixRatingPreview,
    source: RadixRatingSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "scrollspy",
    id: "scrollspy-radix",
    name: "Scrollspy",
    Component: RadixScrollspyPreview,
    source: RadixScrollspySource,
  }),
  componentEntry({
    flavor: "radix",
    item: "signature-pad",
    id: "signature-pad-radix",
    name: "Signature Pad",
    Component: RadixSignaturePadPreview,
    source: RadixSignaturePadSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "sortable",
    id: "sortable-radix",
    name: "Sortable",
    Component: RadixSortablePreview,
    source: RadixSortableSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-radix",
    name: "Stepper",
    Component: RadixStepperPreview,
    source: RadixStepperSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "time-picker",
    id: "time-picker-radix",
    name: "Time Picker",
    Component: RadixTimePickerPreview,
    source: RadixTimePickerSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "timeline",
    id: "timeline-radix",
    name: "Timeline",
    Component: RadixTimelinePreview,
    source: RadixTimelineSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "tree",
    id: "tree-radix",
    name: "Tree",
    Component: RadixTreePreview,
    source: RadixTreeSource,
  }),
  componentEntry({
    flavor: "base",
    item: "base-autocomplete",
    id: "autocomplete-base",
    name: "Autocomplete",
    Component: BaseAutocompletePreview,
    source: BaseAutocompleteSource,
  }),
  componentEntry({
    flavor: "base",
    item: "base-badge",
    id: "badge-base",
    name: "Badge",
    Component: BaseBadgePreview,
    source: BaseBadgeSource,
  }),
  componentEntry({
    flavor: "base",
    item: "base-cascader",
    id: "cascader-base",
    name: "Cascader",
    Component: BaseCascaderPreview,
    source: BaseCascaderSource,
  }),
  componentEntry({
    flavor: "base",
    item: "base-code-block",
    id: "code-block-base",
    name: "Code Block",
    Component: BaseCodeBlockPreview,
    source: BaseCodeBlockSource,
  }),
  componentEntry({
    flavor: "base",
    item: "base-color-picker",
    id: "color-picker-base",
    name: "Color Picker",
    Component: BaseColorPickerPreview,
    source: BaseColorPickerSource,
  }),
  componentEntry({
    flavor: "base",
    item: "base-data-grid",
    id: "data-grid-base",
    name: "Data Grid",
    Component: BaseDataGridPreview,
    source: BaseDataGridSource,
  }),
  componentEntry({
    flavor: "base",
    item: "base-date-selector",
    id: "date-selector-base",
    name: "Date Selector",
    Component: BaseDateSelectorPreview,
    source: BaseDateSelectorSource,
  }),
  componentEntry({
    flavor: "base",
    item: "base-emoji-picker",
    id: "emoji-picker-base",
    name: "Emoji Picker",
    Component: BaseEmojiPickerPreview,
    source: BaseEmojiPickerSource,
  }),
  componentEntry({
    flavor: "base",
    item: "base-event-calendar",
    id: "event-calendar-base",
    name: "Event Calendar",
    Component: BaseEventCalendarPreview,
    source: BaseEventCalendarSource,
  }),
  componentEntry({
    flavor: "base",
    item: "base-filters",
    id: "filters-base",
    name: "Filters",
    Component: BaseFiltersPreview,
    source: BaseFiltersSource,
  }),
  componentEntry({
    flavor: "base",
    item: "base-frame",
    id: "frame-base",
    name: "Frame",
    Component: BaseFramePreview,
    source: BaseFrameSource,
  }),
  componentEntry({
    flavor: "base",
    item: "base-gantt",
    id: "gantt-base",
    name: "Gantt",
    Component: BaseGanttPreview,
    source: BaseGanttSource,
  }),
  componentEntry({
    flavor: "base",
    item: "base-icon-stack",
    id: "icon-stack-base",
    name: "Icon Stack",
    Component: BaseIconStackPreview,
    source: BaseIconStackSource,
  }),
  componentEntry({
    flavor: "base",
    item: "base-icon-tile",
    id: "icon-tile-base",
    name: "Icon Tile",
    Component: BaseIconTilePreview,
    source: BaseIconTileSource,
  }),
  componentEntry({
    flavor: "base",
    item: "base-kanban",
    id: "kanban-base",
    name: "Kanban",
    Component: BaseKanbanPreview,
    source: BaseKanbanSource,
  }),
  componentEntry({
    flavor: "base",
    item: "base-number-field",
    id: "number-field-base",
    name: "Number Field",
    Component: BaseNumberFieldPreview,
    source: BaseNumberFieldSource,
  }),
  componentEntry({
    flavor: "base",
    item: "base-phone-input",
    id: "phone-input-base",
    name: "Phone Input",
    Component: BasePhoneInputPreview,
    source: BasePhoneInputSource,
  }),
  componentEntry({
    flavor: "base",
    item: "base-signature-pad",
    id: "signature-pad-base",
    name: "Signature Pad",
    Component: BaseSignaturePadPreview,
    source: BaseSignaturePadSource,
  }),
  componentEntry({
    flavor: "base",
    item: "base-sortable",
    id: "sortable-base",
    name: "Sortable",
    Component: BaseSortablePreview,
    source: BaseSortableSource,
  }),
  componentEntry({
    flavor: "base",
    item: "base-stepper",
    id: "stepper-base",
    name: "Stepper",
    Component: BaseStepperPreview,
    source: BaseStepperSource,
  }),
  componentEntry({
    flavor: "base",
    item: "base-time-picker",
    id: "time-picker-base",
    name: "Time Picker",
    Component: BaseTimePickerPreview,
    source: BaseTimePickerSource,
  }),
  componentEntry({
    flavor: "base",
    item: "base-timeline",
    id: "timeline-base",
    name: "Timeline",
    Component: BaseTimelinePreview,
    source: BaseTimelineSource,
  }),
  componentEntry({
    flavor: "base",
    item: "base-tree",
    id: "tree-base",
    name: "Tree",
    Component: BaseTreePreview,
    source: BaseTreeSource,
  }),
]

export const COMPONENT_ENTRIES: BlockEntry[] = [
  ...REUI_COMPONENT_ENTRIES,
  ...UI_COMPONENT_ENTRIES,
]

export const CATALOG: BlockEntry[] = [...BLOCKS, ...COMPONENT_ENTRIES]
