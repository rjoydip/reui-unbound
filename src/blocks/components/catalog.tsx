import { BLOCKS } from "@/blocks/registry"
import { UI_COMPONENT_ENTRIES } from "./ui-catalog"
import type { BlockEntry, BlockFile } from "@/blocks/registry"
import baseRegistry from "@/components/reui-unbound/base/registry.json"
import reuiRegistry from "@/components/reui-unbound/registry.json"

import RadixAlertPreview from "./radix/alert"
import RadixAutocompletePreview from "./radix/autocomplete"
import RadixBadgePreview from "./radix/badge"
import RadixCascaderPreview from "./radix/cascader"
import RadixCodeBlockPreview from "./radix/code-block"
import RadixColorPickerPreview from "./radix/color-picker"
import RadixDataGridPreview from "./radix/data-grid"
import RadixDateSelectorPreview from "./radix/date-selector"
import RadixEmojiPickerPreview from "./radix/emoji-picker"
import RadixEventCalendarPreview from "./radix/event-calendar"
import RadixFileTypePreview from "./radix/file-type"
import RadixFiltersPreview from "./radix/filters"
import RadixFramePreview from "./radix/frame"
import RadixGanttPreview from "./radix/gantt"
import RadixIconStackPreview from "./radix/icon-stack"
import RadixIconTilePreview from "./radix/icon-tile"
import RadixKanbanPreview from "./radix/kanban"
import RadixNumberFieldPreview from "./radix/number-field"
import RadixPhoneInputPreview from "./radix/phone-input"
import RadixRatingPreview from "./radix/rating"
import RadixScrollspyPreview from "./radix/scrollspy"
import RadixSignaturePadPreview from "./radix/signature-pad"
import RadixSortablePreview from "./radix/sortable"
import RadixStepperPreview from "./radix/stepper"
import RadixTimePickerPreview from "./radix/time-picker"
import RadixTimelinePreview from "./radix/timeline"
import RadixTreePreview from "./radix/tree"
import BaseAutocompletePreview from "./base/autocomplete"
import BaseBadgePreview from "./base/badge"
import BaseCascaderPreview from "./base/cascader"
import BaseCodeBlockPreview from "./base/code-block"
import BaseColorPickerPreview from "./base/color-picker"
import BaseDataGridPreview from "./base/data-grid"
import BaseDateSelectorPreview from "./base/date-selector"
import BaseEmojiPickerPreview from "./base/emoji-picker"
import BaseEventCalendarPreview from "./base/event-calendar"
import BaseFiltersPreview from "./base/filters"
import BaseFramePreview from "./base/frame"
import BaseGanttPreview from "./base/gantt"
import BaseIconStackPreview from "./base/icon-stack"
import BaseIconTilePreview from "./base/icon-tile"
import BaseKanbanPreview from "./base/kanban"
import BaseNumberFieldPreview from "./base/number-field"
import BasePhoneInputPreview from "./base/phone-input"
import BaseSignaturePadPreview from "./base/signature-pad"
import BaseSortablePreview from "./base/sortable"
import BaseStepperPreview from "./base/stepper"
import BaseTimePickerPreview from "./base/time-picker"
import BaseTimelinePreview from "./base/timeline"
import BaseTreePreview from "./base/tree"

import RadixAlertSource from "./radix/alert.tsx?raw"
import RadixAutocompleteSource from "./radix/autocomplete.tsx?raw"
import RadixBadgeSource from "./radix/badge.tsx?raw"
import RadixCascaderSource from "./radix/cascader.tsx?raw"
import RadixCodeBlockSource from "./radix/code-block.tsx?raw"
import RadixColorPickerSource from "./radix/color-picker.tsx?raw"
import RadixDataGridSource from "./radix/data-grid.tsx?raw"
import RadixDateSelectorSource from "./radix/date-selector.tsx?raw"
import RadixEmojiPickerSource from "./radix/emoji-picker.tsx?raw"
import RadixEventCalendarSource from "./radix/event-calendar.tsx?raw"
import RadixFileTypeSource from "./radix/file-type.tsx?raw"
import RadixFiltersSource from "./radix/filters.tsx?raw"
import RadixFrameSource from "./radix/frame.tsx?raw"
import RadixGanttSource from "./radix/gantt.tsx?raw"
import RadixIconStackSource from "./radix/icon-stack.tsx?raw"
import RadixIconTileSource from "./radix/icon-tile.tsx?raw"
import RadixKanbanSource from "./radix/kanban.tsx?raw"
import RadixNumberFieldSource from "./radix/number-field.tsx?raw"
import RadixPhoneInputSource from "./radix/phone-input.tsx?raw"
import RadixRatingSource from "./radix/rating.tsx?raw"
import RadixScrollspySource from "./radix/scrollspy.tsx?raw"
import RadixSignaturePadSource from "./radix/signature-pad.tsx?raw"
import RadixSortableSource from "./radix/sortable.tsx?raw"
import RadixStepperSource from "./radix/stepper.tsx?raw"
import RadixTimePickerSource from "./radix/time-picker.tsx?raw"
import RadixTimelineSource from "./radix/timeline.tsx?raw"
import RadixTreeSource from "./radix/tree.tsx?raw"
import BaseAutocompleteSource from "./base/autocomplete.tsx?raw"
import BaseBadgeSource from "./base/badge.tsx?raw"
import BaseCascaderSource from "./base/cascader.tsx?raw"
import BaseCodeBlockSource from "./base/code-block.tsx?raw"
import BaseColorPickerSource from "./base/color-picker.tsx?raw"
import BaseDataGridSource from "./base/data-grid.tsx?raw"
import BaseDateSelectorSource from "./base/date-selector.tsx?raw"
import BaseEmojiPickerSource from "./base/emoji-picker.tsx?raw"
import BaseEventCalendarSource from "./base/event-calendar.tsx?raw"
import BaseFiltersSource from "./base/filters.tsx?raw"
import BaseFrameSource from "./base/frame.tsx?raw"
import BaseGanttSource from "./base/gantt.tsx?raw"
import BaseIconStackSource from "./base/icon-stack.tsx?raw"
import BaseIconTileSource from "./base/icon-tile.tsx?raw"
import BaseKanbanSource from "./base/kanban.tsx?raw"
import BaseNumberFieldSource from "./base/number-field.tsx?raw"
import BasePhoneInputSource from "./base/phone-input.tsx?raw"
import BaseSignaturePadSource from "./base/signature-pad.tsx?raw"
import BaseSortableSource from "./base/sortable.tsx?raw"
import BaseStepperSource from "./base/stepper.tsx?raw"
import BaseTimePickerSource from "./base/time-picker.tsx?raw"
import BaseTimelineSource from "./base/timeline.tsx?raw"
import BaseTreeSource from "./base/tree.tsx?raw"

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
  Component,
  source,
}: {
  flavor: "radix" | "base"
  item: string
  id: string
  name: string
  Component: () => React.JSX.Element
  source: string
}): BlockEntry {
  const registry = registryItem(flavor, item)
  const registryDependencies = [
    `@reui-unbound/${item}`,
    ...(registry?.registryDependencies ?? []),
  ]

  return {
    id,
    name,
    category: "Components",
    stage: flavor === "base" ? "Base" : "Radix",
    href: `https://reui.io/components/${item.replace(/^base-/, "")}`,
    dependencies: {
      registry: [...new Set(registryDependencies)],
      packages: registry?.dependencies ?? [],
    },
    Component,
    files: [file("preview.tsx", source)],
    kind: "component",
    flavor,
    registryId: item,
  }
}

const REUI_COMPONENT_ENTRIES: BlockEntry[] = [
  componentEntry({
    flavor: "radix",
    item: "alert",
    id: "alert-radix",
    name: "Alert",
    Component: RadixAlertPreview,
    source: RadixAlertSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "autocomplete",
    id: "autocomplete-radix",
    name: "Autocomplete",
    Component: RadixAutocompletePreview,
    source: RadixAutocompleteSource,
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
