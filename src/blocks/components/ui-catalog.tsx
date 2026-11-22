import type { BlockEntry, BlockFile } from "@/blocks/registry"

import UiAccordionPreview from "./radix/accordion"
import UiAccordionSingleExpandPreview from "./radix/accordion-single-expand"
import UiAccordionPlusMinusPreview from "./radix/accordion-plus-minus"
import UiAccordionBorderedPreview from "./radix/accordion-bordered"
import UiAccordionInCardPreview from "./radix/accordion-in-card"
import UiAccordionDisabledItemsPreview from "./radix/accordion-disabled-items"
import UiAccordionIconsBadgesPreview from "./radix/accordion-icons-badges"
import UiAccordionInFramePreview from "./radix/accordion-in-frame"
import UiAccordionNestedPreview from "./radix/accordion-nested"
import UiAccordionUserListPreview from "./radix/accordion-user-list"
import UiAccordionRotatingArrowPreview from "./radix/accordion-rotating-arrow"
import UiAccordionSetupStepsPreview from "./radix/accordion-setup-steps"
import UiAlertDialogConfirmationPreview from "./radix/alert-dialog-confirmation"
import UiAlertDialogSmallPreview from "./radix/alert-dialog-small"
import UiAlertDialogWithIconPreview from "./radix/alert-dialog-with-icon"
import UiAlertDialogSmallWithIconPreview from "./radix/alert-dialog-small-with-icon"
import UiAlertDialogDestructiveDeletePreview from "./radix/alert-dialog-destructive-delete"
import UiAlertDialogNestedInDialogPreview from "./radix/alert-dialog-nested-in-dialog"
import UiAlertDialogSuccessNoticePreview from "./radix/alert-dialog-success-notice"
import UiAlertDialogAccountDeactivationPreview from "./radix/alert-dialog-account-deactivation"
import UiAlertDialogUnsavedChangesPreview from "./radix/alert-dialog-unsaved-changes"
import UiAlertDialogETicketReceiptPreview from "./radix/alert-dialog-e-ticket-receipt"
import UiAlertDialogSystemUpdatePreview from "./radix/alert-dialog-system-update"
import UiAlertDialogBillingWarningPreview from "./radix/alert-dialog-billing-warning"
import UiAlertDialogLogoutConfirmationPreview from "./radix/alert-dialog-logout-confirmation"
import UiAlertDialogSecurityAuditPreview from "./radix/alert-dialog-security-audit"
import UiAspectRatioPreview from "./radix/aspect-ratio"
import UiAspectRatioWidescreenPreview from "./radix/aspect-ratio-widescreen"
import UiAspectRatioStandardPreview from "./radix/aspect-ratio-standard"
import UiAspectRatioSquarePreview from "./radix/aspect-ratio-square"
import UiAspectRatioUltrawidePreview from "./radix/aspect-ratio-ultrawide"
import UiAspectRatioTallPortraitPreview from "./radix/aspect-ratio-tall-portrait"
import UiAspectRatioClassicPhotoPreview from "./radix/aspect-ratio-classic-photo"
import UiAspectRatioSocialPortraitPreview from "./radix/aspect-ratio-social-portrait"
import UiAspectRatioMonitorPreview from "./radix/aspect-ratio-monitor"
import UiAttachmentPreview from "./radix/attachment"
import UiAttachmentAssistantReplyPreview from "./radix/attachment-assistant-reply"
import UiAttachmentComposerTrayPreview from "./radix/attachment-composer-tray"
import UiAttachmentImageStripPreview from "./radix/attachment-image-strip"
import UiAttachmentThreeSizesPreview from "./radix/attachment-three-sizes"
import UiAttachmentUploadQueuePreview from "./radix/attachment-upload-queue"
import UiAttachmentFilePickerPreview from "./radix/attachment-file-picker"
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
import UiAccordionSingleExpandSource from "./radix/accordion-single-expand.tsx?raw"
import UiAccordionPlusMinusSource from "./radix/accordion-plus-minus.tsx?raw"
import UiAccordionBorderedSource from "./radix/accordion-bordered.tsx?raw"
import UiAccordionInCardSource from "./radix/accordion-in-card.tsx?raw"
import UiAccordionDisabledItemsSource from "./radix/accordion-disabled-items.tsx?raw"
import UiAccordionIconsBadgesSource from "./radix/accordion-icons-badges.tsx?raw"
import UiAccordionInFrameSource from "./radix/accordion-in-frame.tsx?raw"
import UiAccordionNestedSource from "./radix/accordion-nested.tsx?raw"
import UiAccordionUserListSource from "./radix/accordion-user-list.tsx?raw"
import UiAccordionRotatingArrowSource from "./radix/accordion-rotating-arrow.tsx?raw"
import UiAccordionSetupStepsSource from "./radix/accordion-setup-steps.tsx?raw"
import UiAlertDialogConfirmationSource from "./radix/alert-dialog-confirmation.tsx?raw"
import UiAlertDialogSmallSource from "./radix/alert-dialog-small.tsx?raw"
import UiAlertDialogWithIconSource from "./radix/alert-dialog-with-icon.tsx?raw"
import UiAlertDialogSmallWithIconSource from "./radix/alert-dialog-small-with-icon.tsx?raw"
import UiAlertDialogDestructiveDeleteSource from "./radix/alert-dialog-destructive-delete.tsx?raw"
import UiAlertDialogNestedInDialogSource from "./radix/alert-dialog-nested-in-dialog.tsx?raw"
import UiAlertDialogSuccessNoticeSource from "./radix/alert-dialog-success-notice.tsx?raw"
import UiAlertDialogAccountDeactivationSource from "./radix/alert-dialog-account-deactivation.tsx?raw"
import UiAlertDialogUnsavedChangesSource from "./radix/alert-dialog-unsaved-changes.tsx?raw"
import UiAlertDialogETicketReceiptSource from "./radix/alert-dialog-e-ticket-receipt.tsx?raw"
import UiAlertDialogSystemUpdateSource from "./radix/alert-dialog-system-update.tsx?raw"
import UiAlertDialogBillingWarningSource from "./radix/alert-dialog-billing-warning.tsx?raw"
import UiAlertDialogLogoutConfirmationSource from "./radix/alert-dialog-logout-confirmation.tsx?raw"
import UiAlertDialogSecurityAuditSource from "./radix/alert-dialog-security-audit.tsx?raw"
import UiAspectRatioSource from "./radix/aspect-ratio.tsx?raw"
import UiAspectRatioWidescreenSource from "./radix/aspect-ratio-widescreen.tsx?raw"
import UiAspectRatioStandardSource from "./radix/aspect-ratio-standard.tsx?raw"
import UiAspectRatioSquareSource from "./radix/aspect-ratio-square.tsx?raw"
import UiAspectRatioUltrawideSource from "./radix/aspect-ratio-ultrawide.tsx?raw"
import UiAspectRatioTallPortraitSource from "./radix/aspect-ratio-tall-portrait.tsx?raw"
import UiAspectRatioClassicPhotoSource from "./radix/aspect-ratio-classic-photo.tsx?raw"
import UiAspectRatioSocialPortraitSource from "./radix/aspect-ratio-social-portrait.tsx?raw"
import UiAspectRatioMonitorSource from "./radix/aspect-ratio-monitor.tsx?raw"
import UiAttachmentSource from "./radix/attachment.tsx?raw"
import UiAttachmentAssistantReplySource from "./radix/attachment-assistant-reply.tsx?raw"
import UiAttachmentComposerTraySource from "./radix/attachment-composer-tray.tsx?raw"
import UiAttachmentImageStripSource from "./radix/attachment-image-strip.tsx?raw"
import UiAttachmentThreeSizesSource from "./radix/attachment-three-sizes.tsx?raw"
import UiAttachmentUploadQueueSource from "./radix/attachment-upload-queue.tsx?raw"
import UiAttachmentFilePickerSource from "./radix/attachment-file-picker.tsx?raw"
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
  id,
  variant,
  dependencies = [],
  installTarget,
  Component,
  source,
}: {
  name: string
  label: string
  id?: string
  variant?: string
  dependencies?: string[]
  installTarget?: string
  Component: () => React.JSX.Element
  source: string
}): BlockEntry {
  return {
    id: id ?? `${name}-radix`,
    name: label,
    category: "Components",
    stage: "Radix",
    href: `https://reui.io/components/${name}`,
    dependencies: {
      registry: [name, ...dependencies],
      packages: [],
    },
    Component,
    files: [file("preview.tsx", source)],
    kind: "component",
    flavor: "radix",
    registryId: name,
    installTarget: installTarget ?? name,
    variant,
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
    name: "accordion",
    label: "Accordion",
    id: "accordion-single-expand-radix",
    variant: "Single Expand",
    installTarget: "@reui-unbound/accordion-single-expand",
    Component: UiAccordionSingleExpandPreview,
    source: UiAccordionSingleExpandSource,
  }),
  uiEntry({
    name: "accordion",
    label: "Accordion",
    id: "accordion-plus-minus-radix",
    variant: "Plus Minus",
    installTarget: "@reui-unbound/accordion-plus-minus",
    dependencies: ["@reui-unbound/icon-placeholder"],
    Component: UiAccordionPlusMinusPreview,
    source: UiAccordionPlusMinusSource,
  }),
  uiEntry({
    name: "accordion",
    label: "Accordion",
    id: "accordion-bordered-radix",
    variant: "Bordered Rounded",
    installTarget: "@reui-unbound/accordion-bordered",
    Component: UiAccordionBorderedPreview,
    source: UiAccordionBorderedSource,
  }),
  uiEntry({
    name: "accordion",
    label: "Accordion",
    id: "accordion-in-card-radix",
    variant: "In Card",
    installTarget: "@reui-unbound/accordion-in-card",
    dependencies: ["button", "card", "@reui-unbound/icon-placeholder"],
    Component: UiAccordionInCardPreview,
    source: UiAccordionInCardSource,
  }),
  uiEntry({
    name: "accordion",
    label: "Accordion",
    id: "accordion-disabled-items-radix",
    variant: "Disabled Items",
    installTarget: "@reui-unbound/accordion-disabled-items",
    Component: UiAccordionDisabledItemsPreview,
    source: UiAccordionDisabledItemsSource,
  }),
  uiEntry({
    name: "accordion",
    label: "Accordion",
    id: "accordion-icons-badges-radix",
    variant: "Icons & Badges",
    installTarget: "@reui-unbound/accordion-icons-badges",
    dependencies: ["@reui-unbound/badge", "@reui-unbound/icon-placeholder"],
    Component: UiAccordionIconsBadgesPreview,
    source: UiAccordionIconsBadgesSource,
  }),
  uiEntry({
    name: "accordion",
    label: "Accordion",
    id: "accordion-in-frame-radix",
    variant: "In Frame",
    installTarget: "@reui-unbound/accordion-in-frame",
    dependencies: [
      "@reui-unbound/badge",
      "@reui-unbound/frame",
      "@reui-unbound/icon-placeholder",
    ],
    Component: UiAccordionInFramePreview,
    source: UiAccordionInFrameSource,
  }),
  uiEntry({
    name: "accordion",
    label: "Accordion",
    id: "accordion-nested-radix",
    variant: "Nested",
    installTarget: "@reui-unbound/accordion-nested",
    Component: UiAccordionNestedPreview,
    source: UiAccordionNestedSource,
  }),
  uiEntry({
    name: "accordion",
    label: "Accordion",
    id: "accordion-user-list-radix",
    variant: "User List",
    installTarget: "@reui-unbound/accordion-user-list",
    dependencies: ["avatar", "@reui-unbound/badge", "@reui-unbound/frame"],
    Component: UiAccordionUserListPreview,
    source: UiAccordionUserListSource,
  }),
  uiEntry({
    name: "accordion",
    label: "Accordion",
    id: "accordion-rotating-arrow-radix",
    variant: "Rotating Arrow",
    installTarget: "@reui-unbound/accordion-rotating-arrow",
    dependencies: ["@reui-unbound/icon-placeholder"],
    Component: UiAccordionRotatingArrowPreview,
    source: UiAccordionRotatingArrowSource,
  }),
  uiEntry({
    name: "accordion",
    label: "Accordion",
    id: "accordion-setup-steps-radix",
    variant: "Setup Steps",
    installTarget: "@reui-unbound/accordion-setup-steps",
    dependencies: [
      "@reui-unbound/badge",
      "@reui-unbound/icon-placeholder",
      "button",
      "button-group",
      "input",
      "spinner",
    ],
    Component: UiAccordionSetupStepsPreview,
    source: UiAccordionSetupStepsSource,
  }),
  uiEntry({
    name: "alert-dialog",
    label: "Alert Dialog",
    id: "alert-dialog-confirmation-radix",
    variant: "Confirmation",
    installTarget: "@reui-unbound/alert-dialog-confirmation",
    dependencies: ["button"],
    Component: UiAlertDialogConfirmationPreview,
    source: UiAlertDialogConfirmationSource,
  }),
  uiEntry({
    name: "alert-dialog",
    label: "Alert Dialog",
    id: "alert-dialog-small-radix",
    variant: "Small Size",
    installTarget: "@reui-unbound/alert-dialog-small",
    dependencies: ["button"],
    Component: UiAlertDialogSmallPreview,
    source: UiAlertDialogSmallSource,
  }),
  uiEntry({
    name: "alert-dialog",
    label: "Alert Dialog",
    id: "alert-dialog-with-icon-radix",
    variant: "With Icon",
    installTarget: "@reui-unbound/alert-dialog-with-icon",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiAlertDialogWithIconPreview,
    source: UiAlertDialogWithIconSource,
  }),
  uiEntry({
    name: "alert-dialog",
    label: "Alert Dialog",
    id: "alert-dialog-small-with-icon-radix",
    variant: "Small With Icon",
    installTarget: "@reui-unbound/alert-dialog-small-with-icon",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiAlertDialogSmallWithIconPreview,
    source: UiAlertDialogSmallWithIconSource,
  }),
  uiEntry({
    name: "alert-dialog",
    label: "Alert Dialog",
    id: "alert-dialog-destructive-delete-radix",
    variant: "Destructive Delete",
    installTarget: "@reui-unbound/alert-dialog-destructive-delete",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiAlertDialogDestructiveDeletePreview,
    source: UiAlertDialogDestructiveDeleteSource,
  }),
  uiEntry({
    name: "alert-dialog",
    label: "Alert Dialog",
    id: "alert-dialog-nested-in-dialog-radix",
    variant: "Nested In Dialog",
    installTarget: "@reui-unbound/alert-dialog-nested-in-dialog",
    dependencies: ["button", "dialog"],
    Component: UiAlertDialogNestedInDialogPreview,
    source: UiAlertDialogNestedInDialogSource,
  }),
  uiEntry({
    name: "alert-dialog",
    label: "Alert Dialog",
    id: "alert-dialog-success-notice-radix",
    variant: "Success Notice",
    installTarget: "@reui-unbound/alert-dialog-success-notice",
    dependencies: ["button", "checkbox", "label", "@reui-unbound/icon-placeholder"],
    Component: UiAlertDialogSuccessNoticePreview,
    source: UiAlertDialogSuccessNoticeSource,
  }),
  uiEntry({
    name: "alert-dialog",
    label: "Alert Dialog",
    id: "alert-dialog-account-deactivation-radix",
    variant: "Account Deactivation",
    installTarget: "@reui-unbound/alert-dialog-account-deactivation",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiAlertDialogAccountDeactivationPreview,
    source: UiAlertDialogAccountDeactivationSource,
  }),
  uiEntry({
    name: "alert-dialog",
    label: "Alert Dialog",
    id: "alert-dialog-unsaved-changes-radix",
    variant: "Unsaved Changes",
    installTarget: "@reui-unbound/alert-dialog-unsaved-changes",
    dependencies: ["button", "checkbox", "@reui-unbound/frame", "label", "@reui-unbound/icon-placeholder"],
    Component: UiAlertDialogUnsavedChangesPreview,
    source: UiAlertDialogUnsavedChangesSource,
  }),
  uiEntry({
    name: "alert-dialog",
    label: "Alert Dialog",
    id: "alert-dialog-e-ticket-receipt-radix",
    variant: "E-Ticket Receipt",
    installTarget: "@reui-unbound/alert-dialog-e-ticket-receipt",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiAlertDialogETicketReceiptPreview,
    source: UiAlertDialogETicketReceiptSource,
  }),
  uiEntry({
    name: "alert-dialog",
    label: "Alert Dialog",
    id: "alert-dialog-system-update-radix",
    variant: "System Update",
    installTarget: "@reui-unbound/alert-dialog-system-update",
    dependencies: ["@reui-unbound/badge", "button", "@reui-unbound/icon-placeholder"],
    Component: UiAlertDialogSystemUpdatePreview,
    source: UiAlertDialogSystemUpdateSource,
  }),
  uiEntry({
    name: "alert-dialog",
    label: "Alert Dialog",
    id: "alert-dialog-billing-warning-radix",
    variant: "Billing Warning",
    installTarget: "@reui-unbound/alert-dialog-billing-warning",
    dependencies: ["@reui-unbound/badge", "button", "@reui-unbound/icon-placeholder"],
    Component: UiAlertDialogBillingWarningPreview,
    source: UiAlertDialogBillingWarningSource,
  }),
  uiEntry({
    name: "alert-dialog",
    label: "Alert Dialog",
    id: "alert-dialog-logout-confirmation-radix",
    variant: "Logout Confirmation",
    installTarget: "@reui-unbound/alert-dialog-logout-confirmation",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiAlertDialogLogoutConfirmationPreview,
    source: UiAlertDialogLogoutConfirmationSource,
  }),
  uiEntry({
    name: "alert-dialog",
    label: "Alert Dialog",
    id: "alert-dialog-security-audit-radix",
    variant: "Security Audit",
    installTarget: "@reui-unbound/alert-dialog-security-audit",
    dependencies: ["@reui-unbound/badge", "button", "@reui-unbound/icon-placeholder"],
    Component: UiAlertDialogSecurityAuditPreview,
    source: UiAlertDialogSecurityAuditSource,
  }),
  uiEntry({
    name: "aspect-ratio",
    label: "Aspect Ratio",
    Component: UiAspectRatioPreview,
    source: UiAspectRatioSource,
  }),
  uiEntry({
    name: "aspect-ratio",
    label: "Aspect Ratio",
    id: "aspect-ratio-widescreen-radix",
    variant: "Widescreen",
    installTarget: "@reui-unbound/aspect-ratio-widescreen",
    Component: UiAspectRatioWidescreenPreview,
    source: UiAspectRatioWidescreenSource,
  }),
  uiEntry({
    name: "aspect-ratio",
    label: "Aspect Ratio",
    id: "aspect-ratio-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/aspect-ratio-standard",
    Component: UiAspectRatioStandardPreview,
    source: UiAspectRatioStandardSource,
  }),
  uiEntry({
    name: "aspect-ratio",
    label: "Aspect Ratio",
    id: "aspect-ratio-square-radix",
    variant: "Square",
    installTarget: "@reui-unbound/aspect-ratio-square",
    Component: UiAspectRatioSquarePreview,
    source: UiAspectRatioSquareSource,
  }),
  uiEntry({
    name: "aspect-ratio",
    label: "Aspect Ratio",
    id: "aspect-ratio-ultrawide-radix",
    variant: "Ultrawide",
    installTarget: "@reui-unbound/aspect-ratio-ultrawide",
    Component: UiAspectRatioUltrawidePreview,
    source: UiAspectRatioUltrawideSource,
  }),
  uiEntry({
    name: "aspect-ratio",
    label: "Aspect Ratio",
    id: "aspect-ratio-tall-portrait-radix",
    variant: "Tall Portrait",
    installTarget: "@reui-unbound/aspect-ratio-tall-portrait",
    Component: UiAspectRatioTallPortraitPreview,
    source: UiAspectRatioTallPortraitSource,
  }),
  uiEntry({
    name: "aspect-ratio",
    label: "Aspect Ratio",
    id: "aspect-ratio-classic-photo-radix",
    variant: "Classic Photo",
    installTarget: "@reui-unbound/aspect-ratio-classic-photo",
    Component: UiAspectRatioClassicPhotoPreview,
    source: UiAspectRatioClassicPhotoSource,
  }),
  uiEntry({
    name: "aspect-ratio",
    label: "Aspect Ratio",
    id: "aspect-ratio-social-portrait-radix",
    variant: "Social Portrait",
    installTarget: "@reui-unbound/aspect-ratio-social-portrait",
    Component: UiAspectRatioSocialPortraitPreview,
    source: UiAspectRatioSocialPortraitSource,
  }),
  uiEntry({
    name: "aspect-ratio",
    label: "Aspect Ratio",
    id: "aspect-ratio-monitor-radix",
    variant: "Monitor",
    installTarget: "@reui-unbound/aspect-ratio-monitor",
    Component: UiAspectRatioMonitorPreview,
    source: UiAspectRatioMonitorSource,
  }),
  uiEntry({
    name: "attachment",
    label: "Attachment",
    Component: UiAttachmentPreview,
    source: UiAttachmentSource,
  }),
  uiEntry({
    name: "attachment",
    label: "Attachment",
    id: "attachment-assistant-reply-radix",
    variant: "Assistant Reply",
    installTarget: "@reui-unbound/attachment-assistant-reply",
    dependencies: ["@reui-unbound/icon-placeholder"],
    Component: UiAttachmentAssistantReplyPreview,
    source: UiAttachmentAssistantReplySource,
  }),
  uiEntry({
    name: "attachment",
    label: "Attachment",
    id: "attachment-composer-tray-radix",
    variant: "Composer Tray",
    installTarget: "@reui-unbound/attachment-composer-tray",
    dependencies: ["field", "input-group", "@reui-unbound/icon-placeholder"],
    Component: UiAttachmentComposerTrayPreview,
    source: UiAttachmentComposerTraySource,
  }),
  uiEntry({
    name: "attachment",
    label: "Attachment",
    id: "attachment-image-strip-radix",
    variant: "Image Strip",
    installTarget: "@reui-unbound/attachment-image-strip",
    Component: UiAttachmentImageStripPreview,
    source: UiAttachmentImageStripSource,
  }),
  uiEntry({
    name: "attachment",
    label: "Attachment",
    id: "attachment-three-sizes-radix",
    variant: "Three Sizes",
    installTarget: "@reui-unbound/attachment-three-sizes",
    dependencies: ["@reui-unbound/icon-placeholder"],
    Component: UiAttachmentThreeSizesPreview,
    source: UiAttachmentThreeSizesSource,
  }),
  uiEntry({
    name: "attachment",
    label: "Attachment",
    id: "attachment-upload-queue-radix",
    variant: "Upload Queue",
    installTarget: "@reui-unbound/attachment-upload-queue",
    dependencies: ["spinner", "@reui-unbound/icon-placeholder"],
    Component: UiAttachmentUploadQueuePreview,
    source: UiAttachmentUploadQueueSource,
  }),
  uiEntry({
    name: "attachment",
    label: "Attachment",
    id: "attachment-file-picker-radix",
    variant: "File Picker",
    installTarget: "@reui-unbound/attachment-file-picker",
    dependencies: ["@reui-unbound/use-file-upload", "@reui-unbound/icon-placeholder"],
    Component: UiAttachmentFilePickerPreview,
    source: UiAttachmentFilePickerSource,
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
