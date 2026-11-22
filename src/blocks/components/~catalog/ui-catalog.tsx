import type { BlockEntry, BlockFile } from "@/blocks/~internal/registry"

import UiAccordionSingleExpandPreview from "../radix/accordion/single-expand"
import UiAccordionPlusMinusPreview from "../radix/accordion/plus-minus"
import UiAccordionBorderedPreview from "../radix/accordion/bordered"
import UiAccordionInCardPreview from "../radix/accordion/in-card"
import UiAccordionDisabledItemsPreview from "../radix/accordion/disabled-items"
import UiAccordionIconsBadgesPreview from "../radix/accordion/icons-badges"
import UiAccordionInFramePreview from "../radix/accordion/in-frame"
import UiAccordionNestedPreview from "../radix/accordion/nested"
import UiAccordionUserListPreview from "../radix/accordion/user-list"
import UiAccordionRotatingArrowPreview from "../radix/accordion/rotating-arrow"
import UiAccordionSetupStepsPreview from "../radix/accordion/setup-steps"
import UiAlertDialogConfirmationPreview from "../radix/alert-dialog/confirmation"
import UiAlertDialogSmallPreview from "../radix/alert-dialog/small"
import UiAlertDialogWithIconPreview from "../radix/alert-dialog/with-icon"
import UiAlertDialogSmallWithIconPreview from "../radix/alert-dialog/small-with-icon"
import UiAlertDialogDestructiveDeletePreview from "../radix/alert-dialog/destructive-delete"
import UiAlertDialogNestedInDialogPreview from "../radix/alert-dialog/nested-in-dialog"
import UiAlertDialogSuccessNoticePreview from "../radix/alert-dialog/success-notice"
import UiAlertDialogAccountDeactivationPreview from "../radix/alert-dialog/account-deactivation"
import UiAlertDialogUnsavedChangesPreview from "../radix/alert-dialog/unsaved-changes"
import UiAlertDialogETicketReceiptPreview from "../radix/alert-dialog/e-ticket-receipt"
import UiAlertDialogSystemUpdatePreview from "../radix/alert-dialog/system-update"
import UiAlertDialogBillingWarningPreview from "../radix/alert-dialog/billing-warning"
import UiAlertDialogLogoutConfirmationPreview from "../radix/alert-dialog/logout-confirmation"
import UiAlertDialogSecurityAuditPreview from "../radix/alert-dialog/security-audit"
import UiAspectRatioWidescreenPreview from "../radix/aspect-ratio/widescreen"
import UiAspectRatioStandardPreview from "../radix/aspect-ratio/standard"
import UiAspectRatioSquarePreview from "../radix/aspect-ratio/square"
import UiAspectRatioUltrawidePreview from "../radix/aspect-ratio/ultrawide"
import UiAspectRatioTallPortraitPreview from "../radix/aspect-ratio/tall-portrait"
import UiAspectRatioClassicPhotoPreview from "../radix/aspect-ratio/classic-photo"
import UiAspectRatioSocialPortraitPreview from "../radix/aspect-ratio/social-portrait"
import UiAspectRatioMonitorPreview from "../radix/aspect-ratio/monitor"
import UiAttachmentAssistantReplyPreview from "../radix/attachment/assistant-reply"
import UiAttachmentComposerTrayPreview from "../radix/attachment/composer-tray"
import UiAttachmentImageStripPreview from "../radix/attachment/image-strip"
import UiAttachmentThreeSizesPreview from "../radix/attachment/three-sizes"
import UiAttachmentUploadQueuePreview from "../radix/attachment/upload-queue"
import UiAttachmentFilePickerPreview from "../radix/attachment/file-picker"
import UiAvatarStandardPreview from "../radix/avatar/standard"
import UiAvatarFallbacksPreview from "../radix/avatar/fallbacks"
import UiAvatarSizesPreview from "../radix/avatar/sizes"
import UiAvatarBorderRadiusPreview from "../radix/avatar/border-radius"
import UiAvatarCustomSizesPreview from "../radix/avatar/custom-sizes"
import UiAvatarStatusDotsPreview from "../radix/avatar/status-dots"
import UiAvatarBadgeIconsPreview from "../radix/avatar/badge-icons"
import UiAvatarRoundBadgeCornersPreview from "../radix/avatar/round-badge-corners"
import UiAvatarSquareBadgeCornersPreview from "../radix/avatar/square-badge-corners"
import UiAvatarAvatarGroupPreview from "../radix/avatar/avatar-group"
import UiAvatarGroupWithCountPreview from "../radix/avatar/group-with-count"
import UiAvatarPlusChipGroupPreview from "../radix/avatar/plus-chip-group"
import UiAvatarBorderRingsPreview from "../radix/avatar/border-rings"
import UiAvatarSoftFallbacksPreview from "../radix/avatar/soft-fallbacks"
import UiAvatarSolidFallbacksPreview from "../radix/avatar/solid-fallbacks"
import UiAvatarUserDetailsPreview from "../radix/avatar/user-details"
import UiAvatarGrayscalePreview from "../radix/avatar/grayscale"
import UiAvatarGroupPresencePreview from "../radix/avatar/group-presence"
import UiAvatarOutlineButtonPreview from "../radix/avatar/outline-button"
import UiAvatarSocialProofPillPreview from "../radix/avatar/social-proof-pill"
import UiAvatarCompactSocialProofPreview from "../radix/avatar/compact-social-proof"
import UiAvatarLiftTooltipsPreview from "../radix/avatar/lift-tooltips"
import UiAvatarHoverFanPreview from "../radix/avatar/hover-fan"
import UiAvatarFanWithTooltipsPreview from "../radix/avatar/fan-with-tooltips"
import UiAvatarBorderedCountPillPreview from "../radix/avatar/bordered-count-pill"
import UiAvatarPillOutlineButtonPreview from "../radix/avatar/pill-outline-button"
import UiAvatarPillPrimaryButtonPreview from "../radix/avatar/pill-primary-button"
import UiAvatarEmptyStatePreview from "../radix/avatar/empty-state"
import UiAvatarGroupAddButtonPreview from "../radix/avatar/group-add-button"
import UiAvatarLoadingStatePreview from "../radix/avatar/loading-state"
import UiAvatarCustomBadgePreview from "../radix/avatar/custom-badge"
import UiAvatarPulsingRingPreview from "../radix/avatar/pulsing-ring"
import UiAvatarGradientRingPreview from "../radix/avatar/gradient-ring"
import UiAvatarMultipleBadgesPreview from "../radix/avatar/multiple-badges"
import UiAvatarDropdownMenuPreview from "../radix/avatar/dropdown-menu"
import UiBreadcrumbPreview from "../radix/breadcrumb/default"
import UiBubblePreview from "../radix/bubble/default"
import UiButtonPreview from "../radix/button/default"
import UiButtonGroupPreview from "../radix/button-group/default"
import UiCalendarPreview from "../radix/calendar/default"
import UiCardPreview from "../radix/card/default"
import UiCarouselPreview from "../radix/carousel/default"
import UiChartPreview from "../radix/chart/default"
import UiCheckboxPreview from "../radix/checkbox/default"
import UiCollapsiblePreview from "../radix/collapsible/default"
import UiComboboxPreview from "../radix/combobox/default"
import UiCommandPreview from "../radix/command/default"
import UiContextMenuPreview from "../radix/context-menu/default"
import UiDialogPreview from "../radix/dialog/default"
import UiDrawerPreview from "../radix/drawer/default"
import UiDropdownMenuPreview from "../radix/dropdown-menu/default"
import UiEmptyPreview from "../radix/empty/default"
import UiFieldPreview from "../radix/field/default"
import UiFileUploadPreview from "../radix/file-upload/default"
import UiHoverCardPreview from "../radix/hover-card/default"
import UiInputPreview from "../radix/input/default"
import UiInputGroupPreview from "../radix/input-group/default"
import UiInputOtpPreview from "../radix/input-otp/default"
import UiItemPreview from "../radix/item/default"
import UiKbdPreview from "../radix/kbd/default"
import UiLabelPreview from "../radix/label/default"
import UiMarkerPreview from "../radix/marker/default"
import UiMenubarPreview from "../radix/menubar/default"
import UiMessagePreview from "../radix/message/default"
import UiMessageScrollerPreview from "../radix/message-scroller/default"
import UiNativeSelectPreview from "../radix/native-select/default"
import UiNavigationMenuPreview from "../radix/navigation-menu/default"
import UiPaginationPreview from "../radix/pagination/default"
import UiPopoverPreview from "../radix/popover/default"
import UiProgressPreview from "../radix/progress/default"
import UiQuestionnairePreview from "../radix/questionnaire/default"
import UiRadioGroupPreview from "../radix/radio-group/default"
import UiResizablePreview from "../radix/resizable/default"
import UiScrollAreaPreview from "../radix/scroll-area/default"
import UiSelectPreview from "../radix/select/default"
import UiSeparatorPreview from "../radix/separator/default"
import UiSheetPreview from "../radix/sheet/default"
import UiSidebarPreview from "../radix/sidebar/default"
import UiSkeletonPreview from "../radix/skeleton/default"
import UiSliderPreview from "../radix/slider/default"
import UiSonnerPreview from "../radix/sonner/default"
import UiSpinnerPreview from "../radix/spinner/default"
import UiSwitchPreview from "../radix/switch/default"
import UiTablePreview from "../radix/table/default"
import UiTabsPreview from "../radix/tabs/default"
import UiTextareaPreview from "../radix/textarea/default"
import UiTogglePreview from "../radix/toggle/default"
import UiToggleGroupPreview from "../radix/toggle-group/default"
import UiTooltipPreview from "../radix/tooltip/default"
import UiTracePreview from "../radix/trace/default"

import UiAccordionSingleExpandSource from "../radix/accordion/single-expand.tsx?raw"
import UiAccordionPlusMinusSource from "../radix/accordion/plus-minus.tsx?raw"
import UiAccordionBorderedSource from "../radix/accordion/bordered.tsx?raw"
import UiAccordionInCardSource from "../radix/accordion/in-card.tsx?raw"
import UiAccordionDisabledItemsSource from "../radix/accordion/disabled-items.tsx?raw"
import UiAccordionIconsBadgesSource from "../radix/accordion/icons-badges.tsx?raw"
import UiAccordionInFrameSource from "../radix/accordion/in-frame.tsx?raw"
import UiAccordionNestedSource from "../radix/accordion/nested.tsx?raw"
import UiAccordionUserListSource from "../radix/accordion/user-list.tsx?raw"
import UiAccordionRotatingArrowSource from "../radix/accordion/rotating-arrow.tsx?raw"
import UiAccordionSetupStepsSource from "../radix/accordion/setup-steps.tsx?raw"
import UiAlertDialogConfirmationSource from "../radix/alert-dialog/confirmation.tsx?raw"
import UiAlertDialogSmallSource from "../radix/alert-dialog/small.tsx?raw"
import UiAlertDialogWithIconSource from "../radix/alert-dialog/with-icon.tsx?raw"
import UiAlertDialogSmallWithIconSource from "../radix/alert-dialog/small-with-icon.tsx?raw"
import UiAlertDialogDestructiveDeleteSource from "../radix/alert-dialog/destructive-delete.tsx?raw"
import UiAlertDialogNestedInDialogSource from "../radix/alert-dialog/nested-in-dialog.tsx?raw"
import UiAlertDialogSuccessNoticeSource from "../radix/alert-dialog/success-notice.tsx?raw"
import UiAlertDialogAccountDeactivationSource from "../radix/alert-dialog/account-deactivation.tsx?raw"
import UiAlertDialogUnsavedChangesSource from "../radix/alert-dialog/unsaved-changes.tsx?raw"
import UiAlertDialogETicketReceiptSource from "../radix/alert-dialog/e-ticket-receipt.tsx?raw"
import UiAlertDialogSystemUpdateSource from "../radix/alert-dialog/system-update.tsx?raw"
import UiAlertDialogBillingWarningSource from "../radix/alert-dialog/billing-warning.tsx?raw"
import UiAlertDialogLogoutConfirmationSource from "../radix/alert-dialog/logout-confirmation.tsx?raw"
import UiAlertDialogSecurityAuditSource from "../radix/alert-dialog/security-audit.tsx?raw"
import UiAspectRatioWidescreenSource from "../radix/aspect-ratio/widescreen.tsx?raw"
import UiAspectRatioStandardSource from "../radix/aspect-ratio/standard.tsx?raw"
import UiAspectRatioSquareSource from "../radix/aspect-ratio/square.tsx?raw"
import UiAspectRatioUltrawideSource from "../radix/aspect-ratio/ultrawide.tsx?raw"
import UiAspectRatioTallPortraitSource from "../radix/aspect-ratio/tall-portrait.tsx?raw"
import UiAspectRatioClassicPhotoSource from "../radix/aspect-ratio/classic-photo.tsx?raw"
import UiAspectRatioSocialPortraitSource from "../radix/aspect-ratio/social-portrait.tsx?raw"
import UiAspectRatioMonitorSource from "../radix/aspect-ratio/monitor.tsx?raw"
import UiAttachmentAssistantReplySource from "../radix/attachment/assistant-reply.tsx?raw"
import UiAttachmentComposerTraySource from "../radix/attachment/composer-tray.tsx?raw"
import UiAttachmentImageStripSource from "../radix/attachment/image-strip.tsx?raw"
import UiAttachmentThreeSizesSource from "../radix/attachment/three-sizes.tsx?raw"
import UiAttachmentUploadQueueSource from "../radix/attachment/upload-queue.tsx?raw"
import UiAttachmentFilePickerSource from "../radix/attachment/file-picker.tsx?raw"
import UiAvatarStandardSource from "../radix/avatar/standard.tsx?raw"
import UiAvatarFallbacksSource from "../radix/avatar/fallbacks.tsx?raw"
import UiAvatarSizesSource from "../radix/avatar/sizes.tsx?raw"
import UiAvatarBorderRadiusSource from "../radix/avatar/border-radius.tsx?raw"
import UiAvatarCustomSizesSource from "../radix/avatar/custom-sizes.tsx?raw"
import UiAvatarStatusDotsSource from "../radix/avatar/status-dots.tsx?raw"
import UiAvatarBadgeIconsSource from "../radix/avatar/badge-icons.tsx?raw"
import UiAvatarRoundBadgeCornersSource from "../radix/avatar/round-badge-corners.tsx?raw"
import UiAvatarSquareBadgeCornersSource from "../radix/avatar/square-badge-corners.tsx?raw"
import UiAvatarAvatarGroupSource from "../radix/avatar/avatar-group.tsx?raw"
import UiAvatarGroupWithCountSource from "../radix/avatar/group-with-count.tsx?raw"
import UiAvatarPlusChipGroupSource from "../radix/avatar/plus-chip-group.tsx?raw"
import UiAvatarBorderRingsSource from "../radix/avatar/border-rings.tsx?raw"
import UiAvatarSoftFallbacksSource from "../radix/avatar/soft-fallbacks.tsx?raw"
import UiAvatarSolidFallbacksSource from "../radix/avatar/solid-fallbacks.tsx?raw"
import UiAvatarUserDetailsSource from "../radix/avatar/user-details.tsx?raw"
import UiAvatarGrayscaleSource from "../radix/avatar/grayscale.tsx?raw"
import UiAvatarGroupPresenceSource from "../radix/avatar/group-presence.tsx?raw"
import UiAvatarOutlineButtonSource from "../radix/avatar/outline-button.tsx?raw"
import UiAvatarSocialProofPillSource from "../radix/avatar/social-proof-pill.tsx?raw"
import UiAvatarCompactSocialProofSource from "../radix/avatar/compact-social-proof.tsx?raw"
import UiAvatarLiftTooltipsSource from "../radix/avatar/lift-tooltips.tsx?raw"
import UiAvatarHoverFanSource from "../radix/avatar/hover-fan.tsx?raw"
import UiAvatarFanWithTooltipsSource from "../radix/avatar/fan-with-tooltips.tsx?raw"
import UiAvatarBorderedCountPillSource from "../radix/avatar/bordered-count-pill.tsx?raw"
import UiAvatarPillOutlineButtonSource from "../radix/avatar/pill-outline-button.tsx?raw"
import UiAvatarPillPrimaryButtonSource from "../radix/avatar/pill-primary-button.tsx?raw"
import UiAvatarEmptyStateSource from "../radix/avatar/empty-state.tsx?raw"
import UiAvatarGroupAddButtonSource from "../radix/avatar/group-add-button.tsx?raw"
import UiAvatarLoadingStateSource from "../radix/avatar/loading-state.tsx?raw"
import UiAvatarCustomBadgeSource from "../radix/avatar/custom-badge.tsx?raw"
import UiAvatarPulsingRingSource from "../radix/avatar/pulsing-ring.tsx?raw"
import UiAvatarGradientRingSource from "../radix/avatar/gradient-ring.tsx?raw"
import UiAvatarMultipleBadgesSource from "../radix/avatar/multiple-badges.tsx?raw"
import UiAvatarDropdownMenuSource from "../radix/avatar/dropdown-menu.tsx?raw"
import UiBreadcrumbSource from "../radix/breadcrumb/default.tsx?raw"
import UiBubbleSource from "../radix/bubble/default.tsx?raw"
import UiButtonSource from "../radix/button/default.tsx?raw"
import UiButtonGroupSource from "../radix/button-group/default.tsx?raw"
import UiCalendarSource from "../radix/calendar/default.tsx?raw"
import UiCardSource from "../radix/card/default.tsx?raw"
import UiCarouselSource from "../radix/carousel/default.tsx?raw"
import UiChartSource from "../radix/chart/default.tsx?raw"
import UiCheckboxSource from "../radix/checkbox/default.tsx?raw"
import UiCollapsibleSource from "../radix/collapsible/default.tsx?raw"
import UiComboboxSource from "../radix/combobox/default.tsx?raw"
import UiCommandSource from "../radix/command/default.tsx?raw"
import UiContextMenuSource from "../radix/context-menu/default.tsx?raw"
import UiDialogSource from "../radix/dialog/default.tsx?raw"
import UiDrawerSource from "../radix/drawer/default.tsx?raw"
import UiDropdownMenuSource from "../radix/dropdown-menu/default.tsx?raw"
import UiEmptySource from "../radix/empty/default.tsx?raw"
import UiFieldSource from "../radix/field/default.tsx?raw"
import UiFileUploadSource from "../radix/file-upload/default.tsx?raw"
import UiHoverCardSource from "../radix/hover-card/default.tsx?raw"
import UiInputSource from "../radix/input/default.tsx?raw"
import UiInputGroupSource from "../radix/input-group/default.tsx?raw"
import UiInputOtpSource from "../radix/input-otp/default.tsx?raw"
import UiItemSource from "../radix/item/default.tsx?raw"
import UiKbdSource from "../radix/kbd/default.tsx?raw"
import UiLabelSource from "../radix/label/default.tsx?raw"
import UiMarkerSource from "../radix/marker/default.tsx?raw"
import UiMenubarSource from "../radix/menubar/default.tsx?raw"
import UiMessageSource from "../radix/message/default.tsx?raw"
import UiMessageScrollerSource from "../radix/message-scroller/default.tsx?raw"
import UiNativeSelectSource from "../radix/native-select/default.tsx?raw"
import UiNavigationMenuSource from "../radix/navigation-menu/default.tsx?raw"
import UiPaginationSource from "../radix/pagination/default.tsx?raw"
import UiPopoverSource from "../radix/popover/default.tsx?raw"
import UiProgressSource from "../radix/progress/default.tsx?raw"
import UiQuestionnaireSource from "../radix/questionnaire/default.tsx?raw"
import UiRadioGroupSource from "../radix/radio-group/default.tsx?raw"
import UiResizableSource from "../radix/resizable/default.tsx?raw"
import UiScrollAreaSource from "../radix/scroll-area/default.tsx?raw"
import UiSelectSource from "../radix/select/default.tsx?raw"
import UiSeparatorSource from "../radix/separator/default.tsx?raw"
import UiSheetSource from "../radix/sheet/default.tsx?raw"
import UiSidebarSource from "../radix/sidebar/default.tsx?raw"
import UiSkeletonSource from "../radix/skeleton/default.tsx?raw"
import UiSliderSource from "../radix/slider/default.tsx?raw"
import UiSonnerSource from "../radix/sonner/default.tsx?raw"
import UiSpinnerSource from "../radix/spinner/default.tsx?raw"
import UiSwitchSource from "../radix/switch/default.tsx?raw"
import UiTableSource from "../radix/table/default.tsx?raw"
import UiTabsSource from "../radix/tabs/default.tsx?raw"
import UiTextareaSource from "../radix/textarea/default.tsx?raw"
import UiToggleSource from "../radix/toggle/default.tsx?raw"
import UiToggleGroupSource from "../radix/toggle-group/default.tsx?raw"
import UiTooltipSource from "../radix/tooltip/default.tsx?raw"
import UiTraceSource from "../radix/trace/default.tsx?raw"

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
    id: "avatar-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/avatar-standard",
    Component: UiAvatarStandardPreview,
    source: UiAvatarStandardSource,
  }),
  uiEntry({
    name: "avatar",
    label: "Avatar",
    id: "avatar-fallbacks-radix",
    variant: "Fallbacks",
    installTarget: "@reui-unbound/avatar-fallbacks",
    dependencies: ["@reui-unbound/icon-placeholder"],
    Component: UiAvatarFallbacksPreview,
    source: UiAvatarFallbacksSource,
  }),
  uiEntry({
    name: "avatar",
    label: "Avatar",
    id: "avatar-sizes-radix",
    variant: "Sizes",
    installTarget: "@reui-unbound/avatar-sizes",
    Component: UiAvatarSizesPreview,
    source: UiAvatarSizesSource,
  }),
  uiEntry({
    name: "avatar",
    label: "Avatar",
    id: "avatar-border-radius-radix",
    variant: "Border Radius",
    installTarget: "@reui-unbound/avatar-border-radius",
    Component: UiAvatarBorderRadiusPreview,
    source: UiAvatarBorderRadiusSource,
  }),
  uiEntry({
    name: "avatar",
    label: "Avatar",
    id: "avatar-custom-sizes-radix",
    variant: "Custom Sizes",
    installTarget: "@reui-unbound/avatar-custom-sizes",
    Component: UiAvatarCustomSizesPreview,
    source: UiAvatarCustomSizesSource,
  }),
  uiEntry({
    name: "avatar",
    label: "Avatar",
    id: "avatar-status-dots-radix",
    variant: "Status Dots",
    installTarget: "@reui-unbound/avatar-status-dots",
    Component: UiAvatarStatusDotsPreview,
    source: UiAvatarStatusDotsSource,
  }),
  uiEntry({
    name: "avatar",
    label: "Avatar",
    id: "avatar-badge-icons-radix",
    variant: "Badge Icons",
    installTarget: "@reui-unbound/avatar-badge-icons",
    dependencies: ["@reui-unbound/icon-placeholder"],
    Component: UiAvatarBadgeIconsPreview,
    source: UiAvatarBadgeIconsSource,
  }),
  uiEntry({
    name: "avatar",
    label: "Avatar",
    id: "avatar-round-badge-corners-radix",
    variant: "Round Badge Corners",
    installTarget: "@reui-unbound/avatar-round-badge-corners",
    Component: UiAvatarRoundBadgeCornersPreview,
    source: UiAvatarRoundBadgeCornersSource,
  }),
  uiEntry({
    name: "avatar",
    label: "Avatar",
    id: "avatar-square-badge-corners-radix",
    variant: "Square Badge Corners",
    installTarget: "@reui-unbound/avatar-square-badge-corners",
    Component: UiAvatarSquareBadgeCornersPreview,
    source: UiAvatarSquareBadgeCornersSource,
  }),
  uiEntry({
    name: "avatar",
    label: "Avatar",
    id: "avatar-avatar-group-radix",
    variant: "Avatar Group",
    installTarget: "@reui-unbound/avatar-avatar-group",
    Component: UiAvatarAvatarGroupPreview,
    source: UiAvatarAvatarGroupSource,
  }),
  uiEntry({
    name: "avatar",
    label: "Avatar",
    id: "avatar-group-with-count-radix",
    variant: "Group With Count",
    installTarget: "@reui-unbound/avatar-group-with-count",
    Component: UiAvatarGroupWithCountPreview,
    source: UiAvatarGroupWithCountSource,
  }),
  uiEntry({
    name: "avatar",
    label: "Avatar",
    id: "avatar-plus-chip-group-radix",
    variant: "Plus Chip Group",
    installTarget: "@reui-unbound/avatar-plus-chip-group",
    dependencies: ["@reui-unbound/icon-placeholder"],
    Component: UiAvatarPlusChipGroupPreview,
    source: UiAvatarPlusChipGroupSource,
  }),
  uiEntry({
    name: "avatar",
    label: "Avatar",
    id: "avatar-border-rings-radix",
    variant: "Border Rings",
    installTarget: "@reui-unbound/avatar-border-rings",
    Component: UiAvatarBorderRingsPreview,
    source: UiAvatarBorderRingsSource,
  }),
  uiEntry({
    name: "avatar",
    label: "Avatar",
    id: "avatar-soft-fallbacks-radix",
    variant: "Soft Fallbacks",
    installTarget: "@reui-unbound/avatar-soft-fallbacks",
    Component: UiAvatarSoftFallbacksPreview,
    source: UiAvatarSoftFallbacksSource,
  }),
  uiEntry({
    name: "avatar",
    label: "Avatar",
    id: "avatar-solid-fallbacks-radix",
    variant: "Solid Fallbacks",
    installTarget: "@reui-unbound/avatar-solid-fallbacks",
    Component: UiAvatarSolidFallbacksPreview,
    source: UiAvatarSolidFallbacksSource,
  }),
  uiEntry({
    name: "avatar",
    label: "Avatar",
    id: "avatar-user-details-radix",
    variant: "User Details",
    installTarget: "@reui-unbound/avatar-user-details",
    dependencies: ["@reui-unbound/badge"],
    Component: UiAvatarUserDetailsPreview,
    source: UiAvatarUserDetailsSource,
  }),
  uiEntry({
    name: "avatar",
    label: "Avatar",
    id: "avatar-grayscale-radix",
    variant: "Grayscale",
    installTarget: "@reui-unbound/avatar-grayscale",
    Component: UiAvatarGrayscalePreview,
    source: UiAvatarGrayscaleSource,
  }),
  uiEntry({
    name: "avatar",
    label: "Avatar",
    id: "avatar-group-presence-radix",
    variant: "Group Presence",
    installTarget: "@reui-unbound/avatar-group-presence",
    Component: UiAvatarGroupPresencePreview,
    source: UiAvatarGroupPresenceSource,
  }),
  uiEntry({
    name: "avatar",
    label: "Avatar",
    id: "avatar-outline-button-radix",
    variant: "Outline Button",
    installTarget: "@reui-unbound/avatar-outline-button",
    dependencies: ["button"],
    Component: UiAvatarOutlineButtonPreview,
    source: UiAvatarOutlineButtonSource,
  }),
  uiEntry({
    name: "avatar",
    label: "Avatar",
    id: "avatar-social-proof-pill-radix",
    variant: "Social Proof Pill",
    installTarget: "@reui-unbound/avatar-social-proof-pill",
    Component: UiAvatarSocialProofPillPreview,
    source: UiAvatarSocialProofPillSource,
  }),
  uiEntry({
    name: "avatar",
    label: "Avatar",
    id: "avatar-compact-social-proof-radix",
    variant: "Compact Social Proof",
    installTarget: "@reui-unbound/avatar-compact-social-proof",
    dependencies: ["@reui-unbound/frame"],
    Component: UiAvatarCompactSocialProofPreview,
    source: UiAvatarCompactSocialProofSource,
  }),
  uiEntry({
    name: "avatar",
    label: "Avatar",
    id: "avatar-lift-tooltips-radix",
    variant: "Lift Tooltips",
    installTarget: "@reui-unbound/avatar-lift-tooltips",
    dependencies: ["tooltip"],
    Component: UiAvatarLiftTooltipsPreview,
    source: UiAvatarLiftTooltipsSource,
  }),
  uiEntry({
    name: "avatar",
    label: "Avatar",
    id: "avatar-hover-fan-radix",
    variant: "Hover Fan",
    installTarget: "@reui-unbound/avatar-hover-fan",
    Component: UiAvatarHoverFanPreview,
    source: UiAvatarHoverFanSource,
  }),
  uiEntry({
    name: "avatar",
    label: "Avatar",
    id: "avatar-fan-with-tooltips-radix",
    variant: "Fan With Tooltips",
    installTarget: "@reui-unbound/avatar-fan-with-tooltips",
    dependencies: ["tooltip"],
    Component: UiAvatarFanWithTooltipsPreview,
    source: UiAvatarFanWithTooltipsSource,
  }),
  uiEntry({
    name: "avatar",
    label: "Avatar",
    id: "avatar-bordered-count-pill-radix",
    variant: "Bordered Count Pill",
    installTarget: "@reui-unbound/avatar-bordered-count-pill",
    Component: UiAvatarBorderedCountPillPreview,
    source: UiAvatarBorderedCountPillSource,
  }),
  uiEntry({
    name: "avatar",
    label: "Avatar",
    id: "avatar-pill-outline-button-radix",
    variant: "Pill Outline Button",
    installTarget: "@reui-unbound/avatar-pill-outline-button",
    Component: UiAvatarPillOutlineButtonPreview,
    source: UiAvatarPillOutlineButtonSource,
  }),
  uiEntry({
    name: "avatar",
    label: "Avatar",
    id: "avatar-pill-primary-button-radix",
    variant: "Pill Primary Button",
    installTarget: "@reui-unbound/avatar-pill-primary-button",
    dependencies: ["button"],
    Component: UiAvatarPillPrimaryButtonPreview,
    source: UiAvatarPillPrimaryButtonSource,
  }),
  uiEntry({
    name: "avatar",
    label: "Avatar",
    id: "avatar-empty-state-radix",
    variant: "Empty State",
    installTarget: "@reui-unbound/avatar-empty-state",
    dependencies: ["button"],
    Component: UiAvatarEmptyStatePreview,
    source: UiAvatarEmptyStateSource,
  }),
  uiEntry({
    name: "avatar",
    label: "Avatar",
    id: "avatar-group-add-button-radix",
    variant: "Group Add Button",
    installTarget: "@reui-unbound/avatar-group-add-button",
    dependencies: ["@reui-unbound/icon-placeholder"],
    Component: UiAvatarGroupAddButtonPreview,
    source: UiAvatarGroupAddButtonSource,
  }),
  uiEntry({
    name: "avatar",
    label: "Avatar",
    id: "avatar-loading-state-radix",
    variant: "Loading State",
    installTarget: "@reui-unbound/avatar-loading-state",
    dependencies: ["button", "tooltip", "@reui-unbound/icon-placeholder"],
    Component: UiAvatarLoadingStatePreview,
    source: UiAvatarLoadingStateSource,
  }),
  uiEntry({
    name: "avatar",
    label: "Avatar",
    id: "avatar-custom-badge-radix",
    variant: "Custom Badge",
    installTarget: "@reui-unbound/avatar-custom-badge",
    dependencies: ["spinner"],
    Component: UiAvatarCustomBadgePreview,
    source: UiAvatarCustomBadgeSource,
  }),
  uiEntry({
    name: "avatar",
    label: "Avatar",
    id: "avatar-pulsing-ring-radix",
    variant: "Pulsing Ring",
    installTarget: "@reui-unbound/avatar-pulsing-ring",
    Component: UiAvatarPulsingRingPreview,
    source: UiAvatarPulsingRingSource,
  }),
  uiEntry({
    name: "avatar",
    label: "Avatar",
    id: "avatar-gradient-ring-radix",
    variant: "Gradient Ring",
    installTarget: "@reui-unbound/avatar-gradient-ring",
    Component: UiAvatarGradientRingPreview,
    source: UiAvatarGradientRingSource,
  }),
  uiEntry({
    name: "avatar",
    label: "Avatar",
    id: "avatar-multiple-badges-radix",
    variant: "Multiple Badges",
    installTarget: "@reui-unbound/avatar-multiple-badges",
    Component: UiAvatarMultipleBadgesPreview,
    source: UiAvatarMultipleBadgesSource,
  }),
  uiEntry({
    name: "avatar",
    label: "Avatar",
    id: "avatar-dropdown-menu-radix",
    variant: "Dropdown Menu",
    installTarget: "@reui-unbound/avatar-dropdown-menu",
    Component: UiAvatarDropdownMenuPreview,
    source: UiAvatarDropdownMenuSource,
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
