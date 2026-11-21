import type { BlockEntry, BlockFile } from "@/blocks/registry"

import UiAccordionPreview from "./radix/accordion"
import UiAlertDialogPreview from "./radix/alert-dialog"
import UiAspectRatioPreview from "./radix/aspect-ratio"
import UiAttachmentPreview from "./radix/attachment"
import UiAvatarPreview from "./radix/avatar"
import UiBreadcrumbPreview from "./radix/breadcrumb"
import UiBubblePreview from "./radix/bubble"
import UiButtonPreview from "./radix/button"
import UiButtonGroupPreview from "./radix/button-group"
import UiCalendarPreview from "./radix/calendar"
import UiCardPreview from "./radix/card"
import UiCarouselPreview from "./radix/carousel"
import UiChartPreview from "./radix/chart"
import UiCheckboxPreview from "./radix/checkbox"
import UiCollapsiblePreview from "./radix/collapsible"
import UiComboboxPreview from "./radix/combobox"
import UiCommandPreview from "./radix/command"
import UiContextMenuPreview from "./radix/context-menu"
import UiDialogPreview from "./radix/dialog"
import UiDrawerPreview from "./radix/drawer"
import UiDropdownMenuPreview from "./radix/dropdown-menu"
import UiEmptyPreview from "./radix/empty"
import UiFieldPreview from "./radix/field"
import UiFileUploadPreview from "./radix/file-upload"
import UiHoverCardPreview from "./radix/hover-card"
import UiInputPreview from "./radix/input"
import UiInputGroupPreview from "./radix/input-group"
import UiInputOtpPreview from "./radix/input-otp"
import UiItemPreview from "./radix/item"
import UiKbdPreview from "./radix/kbd"
import UiLabelPreview from "./radix/label"
import UiMarkerPreview from "./radix/marker"
import UiMenubarPreview from "./radix/menubar"
import UiMessagePreview from "./radix/message"
import UiMessageScrollerPreview from "./radix/message-scroller"
import UiNativeSelectPreview from "./radix/native-select"
import UiNavigationMenuPreview from "./radix/navigation-menu"
import UiPaginationPreview from "./radix/pagination"
import UiPopoverPreview from "./radix/popover"
import UiProgressPreview from "./radix/progress"
import UiQuestionnairePreview from "./radix/questionnaire"
import UiRadioGroupPreview from "./radix/radio-group"
import UiResizablePreview from "./radix/resizable"
import UiScrollAreaPreview from "./radix/scroll-area"
import UiSelectPreview from "./radix/select"
import UiSeparatorPreview from "./radix/separator"
import UiSheetPreview from "./radix/sheet"
import UiSidebarPreview from "./radix/sidebar"
import UiSkeletonPreview from "./radix/skeleton"
import UiSliderPreview from "./radix/slider"
import UiSonnerPreview from "./radix/sonner"
import UiSpinnerPreview from "./radix/spinner"
import UiSwitchPreview from "./radix/switch"
import UiTablePreview from "./radix/table"
import UiTabsPreview from "./radix/tabs"
import UiTextareaPreview from "./radix/textarea"
import UiTogglePreview from "./radix/toggle"
import UiToggleGroupPreview from "./radix/toggle-group"
import UiTooltipPreview from "./radix/tooltip"
import UiTracePreview from "./radix/trace"

import UiAccordionSource from "./radix/accordion.tsx?raw"
import UiAlertDialogSource from "./radix/alert-dialog.tsx?raw"
import UiAspectRatioSource from "./radix/aspect-ratio.tsx?raw"
import UiAttachmentSource from "./radix/attachment.tsx?raw"
import UiAvatarSource from "./radix/avatar.tsx?raw"
import UiBreadcrumbSource from "./radix/breadcrumb.tsx?raw"
import UiBubbleSource from "./radix/bubble.tsx?raw"
import UiButtonSource from "./radix/button.tsx?raw"
import UiButtonGroupSource from "./radix/button-group.tsx?raw"
import UiCalendarSource from "./radix/calendar.tsx?raw"
import UiCardSource from "./radix/card.tsx?raw"
import UiCarouselSource from "./radix/carousel.tsx?raw"
import UiChartSource from "./radix/chart.tsx?raw"
import UiCheckboxSource from "./radix/checkbox.tsx?raw"
import UiCollapsibleSource from "./radix/collapsible.tsx?raw"
import UiComboboxSource from "./radix/combobox.tsx?raw"
import UiCommandSource from "./radix/command.tsx?raw"
import UiContextMenuSource from "./radix/context-menu.tsx?raw"
import UiDialogSource from "./radix/dialog.tsx?raw"
import UiDrawerSource from "./radix/drawer.tsx?raw"
import UiDropdownMenuSource from "./radix/dropdown-menu.tsx?raw"
import UiEmptySource from "./radix/empty.tsx?raw"
import UiFieldSource from "./radix/field.tsx?raw"
import UiFileUploadSource from "./radix/file-upload.tsx?raw"
import UiHoverCardSource from "./radix/hover-card.tsx?raw"
import UiInputSource from "./radix/input.tsx?raw"
import UiInputGroupSource from "./radix/input-group.tsx?raw"
import UiInputOtpSource from "./radix/input-otp.tsx?raw"
import UiItemSource from "./radix/item.tsx?raw"
import UiKbdSource from "./radix/kbd.tsx?raw"
import UiLabelSource from "./radix/label.tsx?raw"
import UiMarkerSource from "./radix/marker.tsx?raw"
import UiMenubarSource from "./radix/menubar.tsx?raw"
import UiMessageSource from "./radix/message.tsx?raw"
import UiMessageScrollerSource from "./radix/message-scroller.tsx?raw"
import UiNativeSelectSource from "./radix/native-select.tsx?raw"
import UiNavigationMenuSource from "./radix/navigation-menu.tsx?raw"
import UiPaginationSource from "./radix/pagination.tsx?raw"
import UiPopoverSource from "./radix/popover.tsx?raw"
import UiProgressSource from "./radix/progress.tsx?raw"
import UiQuestionnaireSource from "./radix/questionnaire.tsx?raw"
import UiRadioGroupSource from "./radix/radio-group.tsx?raw"
import UiResizableSource from "./radix/resizable.tsx?raw"
import UiScrollAreaSource from "./radix/scroll-area.tsx?raw"
import UiSelectSource from "./radix/select.tsx?raw"
import UiSeparatorSource from "./radix/separator.tsx?raw"
import UiSheetSource from "./radix/sheet.tsx?raw"
import UiSidebarSource from "./radix/sidebar.tsx?raw"
import UiSkeletonSource from "./radix/skeleton.tsx?raw"
import UiSliderSource from "./radix/slider.tsx?raw"
import UiSonnerSource from "./radix/sonner.tsx?raw"
import UiSpinnerSource from "./radix/spinner.tsx?raw"
import UiSwitchSource from "./radix/switch.tsx?raw"
import UiTableSource from "./radix/table.tsx?raw"
import UiTabsSource from "./radix/tabs.tsx?raw"
import UiTextareaSource from "./radix/textarea.tsx?raw"
import UiToggleSource from "./radix/toggle.tsx?raw"
import UiToggleGroupSource from "./radix/toggle-group.tsx?raw"
import UiTooltipSource from "./radix/tooltip.tsx?raw"
import UiTraceSource from "./radix/trace.tsx?raw"

const file = (name: string, code: string): BlockFile => ({
  name,
  code,
  lang: "tsx",
})

function uiEntry({
  name,
  label,
  Component,
  source,
}: {
  name: string
  label: string
  Component: () => React.JSX.Element
  source: string
}): BlockEntry {
  return {
    id: `${name}-radix`,
    name: label,
    category: "Components",
    stage: "Radix",
    href: `https://reui.io/components/${name}`,
    dependencies: {
      registry: [name],
      packages: [],
    },
    Component,
    files: [file("preview.tsx", source)],
    kind: "component",
    flavor: "radix",
    registryId: name,
    installTarget: name,
  }
}

export const UI_COMPONENT_ENTRIES: BlockEntry[] = [
  uiEntry({
    name: "accordion",
    label: "Accordion",
    Component: UiAccordionPreview,
    source: UiAccordionSource,
  }),
  uiEntry({
    name: "alert-dialog",
    label: "Alert Dialog",
    Component: UiAlertDialogPreview,
    source: UiAlertDialogSource,
  }),
  uiEntry({
    name: "aspect-ratio",
    label: "Aspect Ratio",
    Component: UiAspectRatioPreview,
    source: UiAspectRatioSource,
  }),
  uiEntry({
    name: "attachment",
    label: "Attachment",
    Component: UiAttachmentPreview,
    source: UiAttachmentSource,
  }),
  uiEntry({
    name: "avatar",
    label: "Avatar",
    Component: UiAvatarPreview,
    source: UiAvatarSource,
  }),
  uiEntry({
    name: "breadcrumb",
    label: "Breadcrumb",
    Component: UiBreadcrumbPreview,
    source: UiBreadcrumbSource,
  }),
  uiEntry({
    name: "bubble",
    label: "Bubble",
    Component: UiBubblePreview,
    source: UiBubbleSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    Component: UiButtonPreview,
    source: UiButtonSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    Component: UiButtonGroupPreview,
    source: UiButtonGroupSource,
  }),
  uiEntry({
    name: "calendar",
    label: "Calendar",
    Component: UiCalendarPreview,
    source: UiCalendarSource,
  }),
  uiEntry({
    name: "card",
    label: "Card",
    Component: UiCardPreview,
    source: UiCardSource,
  }),
  uiEntry({
    name: "carousel",
    label: "Carousel",
    Component: UiCarouselPreview,
    source: UiCarouselSource,
  }),
  uiEntry({
    name: "chart",
    label: "Chart",
    Component: UiChartPreview,
    source: UiChartSource,
  }),
  uiEntry({
    name: "checkbox",
    label: "Checkbox",
    Component: UiCheckboxPreview,
    source: UiCheckboxSource,
  }),
  uiEntry({
    name: "collapsible",
    label: "Collapsible",
    Component: UiCollapsiblePreview,
    source: UiCollapsibleSource,
  }),
  uiEntry({
    name: "combobox",
    label: "Combobox",
    Component: UiComboboxPreview,
    source: UiComboboxSource,
  }),
  uiEntry({
    name: "command",
    label: "Command",
    Component: UiCommandPreview,
    source: UiCommandSource,
  }),
  uiEntry({
    name: "context-menu",
    label: "Context Menu",
    Component: UiContextMenuPreview,
    source: UiContextMenuSource,
  }),
  uiEntry({
    name: "dialog",
    label: "Dialog",
    Component: UiDialogPreview,
    source: UiDialogSource,
  }),
  uiEntry({
    name: "drawer",
    label: "Drawer",
    Component: UiDrawerPreview,
    source: UiDrawerSource,
  }),
  uiEntry({
    name: "dropdown-menu",
    label: "Dropdown Menu",
    Component: UiDropdownMenuPreview,
    source: UiDropdownMenuSource,
  }),
  uiEntry({
    name: "empty",
    label: "Empty",
    Component: UiEmptyPreview,
    source: UiEmptySource,
  }),
  uiEntry({
    name: "field",
    label: "Field",
    Component: UiFieldPreview,
    source: UiFieldSource,
  }),
  uiEntry({
    name: "file-upload",
    label: "File Upload",
    Component: UiFileUploadPreview,
    source: UiFileUploadSource,
  }),
  uiEntry({
    name: "hover-card",
    label: "Hover Card",
    Component: UiHoverCardPreview,
    source: UiHoverCardSource,
  }),
  uiEntry({
    name: "input",
    label: "Input",
    Component: UiInputPreview,
    source: UiInputSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    Component: UiInputGroupPreview,
    source: UiInputGroupSource,
  }),
  uiEntry({
    name: "input-otp",
    label: "Input Otp",
    Component: UiInputOtpPreview,
    source: UiInputOtpSource,
  }),
  uiEntry({
    name: "item",
    label: "Item",
    Component: UiItemPreview,
    source: UiItemSource,
  }),
  uiEntry({
    name: "kbd",
    label: "Kbd",
    Component: UiKbdPreview,
    source: UiKbdSource,
  }),
  uiEntry({
    name: "label",
    label: "Label",
    Component: UiLabelPreview,
    source: UiLabelSource,
  }),
  uiEntry({
    name: "marker",
    label: "Marker",
    Component: UiMarkerPreview,
    source: UiMarkerSource,
  }),
  uiEntry({
    name: "menubar",
    label: "Menubar",
    Component: UiMenubarPreview,
    source: UiMenubarSource,
  }),
  uiEntry({
    name: "message",
    label: "Message",
    Component: UiMessagePreview,
    source: UiMessageSource,
  }),
  uiEntry({
    name: "message-scroller",
    label: "Message Scroller",
    Component: UiMessageScrollerPreview,
    source: UiMessageScrollerSource,
  }),
  uiEntry({
    name: "native-select",
    label: "Native Select",
    Component: UiNativeSelectPreview,
    source: UiNativeSelectSource,
  }),
  uiEntry({
    name: "navigation-menu",
    label: "Navigation Menu",
    Component: UiNavigationMenuPreview,
    source: UiNavigationMenuSource,
  }),
  uiEntry({
    name: "pagination",
    label: "Pagination",
    Component: UiPaginationPreview,
    source: UiPaginationSource,
  }),
  uiEntry({
    name: "popover",
    label: "Popover",
    Component: UiPopoverPreview,
    source: UiPopoverSource,
  }),
  uiEntry({
    name: "progress",
    label: "Progress",
    Component: UiProgressPreview,
    source: UiProgressSource,
  }),
  uiEntry({
    name: "questionnaire",
    label: "Questionnaire",
    Component: UiQuestionnairePreview,
    source: UiQuestionnaireSource,
  }),
  uiEntry({
    name: "radio-group",
    label: "Radio Group",
    Component: UiRadioGroupPreview,
    source: UiRadioGroupSource,
  }),
  uiEntry({
    name: "resizable",
    label: "Resizable",
    Component: UiResizablePreview,
    source: UiResizableSource,
  }),
  uiEntry({
    name: "scroll-area",
    label: "Scroll Area",
    Component: UiScrollAreaPreview,
    source: UiScrollAreaSource,
  }),
  uiEntry({
    name: "select",
    label: "Select",
    Component: UiSelectPreview,
    source: UiSelectSource,
  }),
  uiEntry({
    name: "separator",
    label: "Separator",
    Component: UiSeparatorPreview,
    source: UiSeparatorSource,
  }),
  uiEntry({
    name: "sheet",
    label: "Sheet",
    Component: UiSheetPreview,
    source: UiSheetSource,
  }),
  uiEntry({
    name: "sidebar",
    label: "Sidebar",
    Component: UiSidebarPreview,
    source: UiSidebarSource,
  }),
  uiEntry({
    name: "skeleton",
    label: "Skeleton",
    Component: UiSkeletonPreview,
    source: UiSkeletonSource,
  }),
  uiEntry({
    name: "slider",
    label: "Slider",
    Component: UiSliderPreview,
    source: UiSliderSource,
  }),
  uiEntry({
    name: "sonner",
    label: "Sonner",
    Component: UiSonnerPreview,
    source: UiSonnerSource,
  }),
  uiEntry({
    name: "spinner",
    label: "Spinner",
    Component: UiSpinnerPreview,
    source: UiSpinnerSource,
  }),
  uiEntry({
    name: "switch",
    label: "Switch",
    Component: UiSwitchPreview,
    source: UiSwitchSource,
  }),
  uiEntry({
    name: "table",
    label: "Table",
    Component: UiTablePreview,
    source: UiTableSource,
  }),
  uiEntry({
    name: "tabs",
    label: "Tabs",
    Component: UiTabsPreview,
    source: UiTabsSource,
  }),
  uiEntry({
    name: "textarea",
    label: "Textarea",
    Component: UiTextareaPreview,
    source: UiTextareaSource,
  }),
  uiEntry({
    name: "toggle",
    label: "Toggle",
    Component: UiTogglePreview,
    source: UiToggleSource,
  }),
  uiEntry({
    name: "toggle-group",
    label: "Toggle Group",
    Component: UiToggleGroupPreview,
    source: UiToggleGroupSource,
  }),
  uiEntry({
    name: "tooltip",
    label: "Tooltip",
    Component: UiTooltipPreview,
    source: UiTooltipSource,
  }),
  uiEntry({
    name: "trace",
    label: "Trace",
    Component: UiTracePreview,
    source: UiTraceSource,
  }),
]
