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
import UiBreadcrumbStandardPreview from "../radix/breadcrumb/standard"
import UiBreadcrumbDropdownMenuPreview from "../radix/breadcrumb/dropdown-menu"
import UiBreadcrumbRouterLinkPreview from "../radix/breadcrumb/router-link"
import UiBreadcrumbSlashSeparatorPreview from "../radix/breadcrumb/slash-separator"
import UiBreadcrumbItemIconsPreview from "../radix/breadcrumb/item-icons"
import UiBreadcrumbStaticEllipsisPreview from "../radix/breadcrumb/static-ellipsis"
import UiBreadcrumbAvatarsPreview from "../radix/breadcrumb/avatars"
import UiBreadcrumbDoubleChevronPreview from "../radix/breadcrumb/double-chevron"
import UiBreadcrumbInCardPreview from "../radix/breadcrumb/in-card"
import UiBreadcrumbPillInFramePreview from "../radix/breadcrumb/pill-in-frame"
import UiBreadcrumbCountBadgePreview from "../radix/breadcrumb/count-badge"
import UiBreadcrumbHomeIconButtonPreview from "../radix/breadcrumb/home-icon-button"
import UiBreadcrumbBarSeparatorPreview from "../radix/breadcrumb/bar-separator"
import UiBreadcrumbButtonStylePreview from "../radix/breadcrumb/button-style"
import UiBreadcrumbProjectDocumentPreview from "../radix/breadcrumb/project-document"
import UiBubbleSenderAlignmentPreview from "../radix/bubble/sender-alignment"
import UiBubbleAllVariantsPreview from "../radix/bubble/all-variants"
import UiBubbleGroupedMessagesPreview from "../radix/bubble/grouped-messages"
import UiBubbleReactionsPreview from "../radix/bubble/reactions"
import UiBubbleShowMorePreview from "../radix/bubble/show-more"
import UiBubbleQuickRepliesPreview from "../radix/bubble/quick-replies"
import UiBubbleFormattedAnswerPreview from "../radix/bubble/formatted-answer"
import UiButtonPreview from "../radix/button/default"
import UiButtonStandardPreview from "../radix/button/standard"
import UiButtonSecondaryPreview from "../radix/button/secondary"
import UiButtonOutlinePreview from "../radix/button/outline"
import UiButtonGhostPreview from "../radix/button/ghost"
import UiButtonDestructivePreview from "../radix/button/destructive"
import UiButtonLinkPreview from "../radix/button/link"
import UiButtonExtraSmallPreview from "../radix/button/extra-small"
import UiButtonSmallPreview from "../radix/button/small"
import UiButtonLargePreview from "../radix/button/large"
import UiButtonDisabledPreview from "../radix/button/disabled"
import UiButtonIconButtonPreview from "../radix/button/icon-button"
import UiButtonIconRightPreview from "../radix/button/icon-right"
import UiButtonLoadingStatePreview from "../radix/button/loading-state"
import UiButtonIconLeftPreview from "../radix/button/icon-left"
import UiButtonInvalidStatePreview from "../radix/button/invalid-state"
import UiButtonSecondaryIconLeftPreview from "../radix/button/secondary-icon-left"
import UiButtonSecondaryIconRightPreview from "../radix/button/secondary-icon-right"
import UiButtonOutlineIconLeftPreview from "../radix/button/outline-icon-left"
import UiButtonOutlineIconRightPreview from "../radix/button/outline-icon-right"
import UiButtonGhostIconLeftPreview from "../radix/button/ghost-icon-left"
import UiButtonGhostIconRightPreview from "../radix/button/ghost-icon-right"
import UiButtonDestructiveIconLeftPreview from "../radix/button/destructive-icon-left"
import UiButtonDestructiveIconRightPreview from "../radix/button/destructive-icon-right"
import UiButtonExtraSmallIconPreview from "../radix/button/extra-small-icon"
import UiButtonSmallIconPreview from "../radix/button/small-icon"
import UiButtonLargeIconPreview from "../radix/button/large-icon"
import UiButtonNextLinkPreview from "../radix/button/next-link"
import UiButtonLinkIconLeftPreview from "../radix/button/link-icon-left"
import UiButtonLinkIconRightPreview from "../radix/button/link-icon-right"
import UiButtonLargeIconLeftPreview from "../radix/button/large-icon-left"
import UiButtonLargeIconRightPreview from "../radix/button/large-icon-right"
import UiButtonOutlineInvalidPreview from "../radix/button/outline-invalid"
import UiButtonGhostInvalidPreview from "../radix/button/ghost-invalid"
import UiButtonEmailLoginPreview from "../radix/button/email-login"
import UiButtonMoreLessTogglePreview from "../radix/button/more-less-toggle"
import UiButtonOutlineSocialIconsPreview from "../radix/button/outline-social-icons"
import UiButtonLikeCountPreview from "../radix/button/like-count"
import UiButtonStarCountPreview from "../radix/button/star-count"
import UiButtonUnreadBadgePreview from "../radix/button/unread-badge"
import UiButtonShortcutKeysPreview from "../radix/button/shortcut-keys"
import UiButtonCopyFeedbackPreview from "../radix/button/copy-feedback"
import UiButtonIconCopyPreview from "../radix/button/icon-copy"
import UiButtonHamburgerTogglePreview from "../radix/button/hamburger-toggle"
import UiButtonAsyncActionPreview from "../radix/button/async-action"
import UiButtonInlineCountPreview from "../radix/button/inline-count"
import UiButtonStatusDotPreview from "../radix/button/status-dot"
import UiButtonStatusBadgePreview from "../radix/button/status-badge"
import UiButtonNotificationBadgePreview from "../radix/button/notification-badge"
import UiButtonGoBackPreview from "../radix/button/go-back"
import UiButtonAnimatedGoBackPreview from "../radix/button/animated-go-back"
import UiButtonExpandingButtonPreview from "../radix/button/expanding-button"
import UiButtonTitleDescriptionPreview from "../radix/button/title-description"
import UiButtonSlidingArrowPreview from "../radix/button/sliding-arrow"
import UiButtonShortcutTooltipPreview from "../radix/button/shortcut-tooltip"
import UiButtonAvatarPreview from "../radix/button/avatar"
import UiButtonOutlineAvatarPreview from "../radix/button/outline-avatar"
import UiButtonSmallAvatarPreview from "../radix/button/small-avatar"
import UiButtonSmallOutlineAvatarPreview from "../radix/button/small-outline-avatar"
import UiButtonSocialLoginStackPreview from "../radix/button/social-login-stack"
import UiButtonColoredSocialIconsPreview from "../radix/button/colored-social-icons"
import UiButtonThemeTogglePreview from "../radix/button/theme-toggle"
import UiButtonGroupPreview from "../radix/button-group/default"
import UiButtonGroupTwoButtonsPreview from "../radix/button-group/two-buttons"
import UiButtonGroupButtonInputPreview from "../radix/button-group/button-input"
import UiButtonGroupButtonsBadgePreview from "../radix/button-group/buttons-badge"
import UiButtonGroupDropdownMenuPreview from "../radix/button-group/dropdown-menu"
import UiButtonGroupTeamActivityPreview from "../radix/button-group/team-activity"
import UiButtonGroupIconActionsPreview from "../radix/button-group/icon-actions"
import UiButtonGroupStatusIndicatorPreview from "../radix/button-group/status-indicator"
import UiButtonGroupLikeCounterPreview from "../radix/button-group/like-counter"
import UiButtonGroupNestedGroupsPreview from "../radix/button-group/nested-groups"
import UiButtonGroupPaginationPreview from "../radix/button-group/pagination"
import UiButtonGroupSplitPaginationPreview from "../radix/button-group/split-pagination"
import UiButtonGroupTextAlignmentPreview from "../radix/button-group/text-alignment"
import UiButtonGroupVerticalOrientationPreview from "../radix/button-group/vertical-orientation"
import UiButtonGroupVerticalToolPalettePreview from "../radix/button-group/vertical-tool-palette"
import UiButtonGroupStarWithDropdownPreview from "../radix/button-group/star-with-dropdown"
import UiButtonGroupSearchFilterClearPreview from "../radix/button-group/search-filter-clear"
import UiButtonGroupConversationMenuPreview from "../radix/button-group/conversation-menu"
import UiButtonGroupGitSplitButtonPreview from "../radix/button-group/git-split-button"
import UiButtonGroupSearchWithMenuPreview from "../radix/button-group/search-with-menu"
import UiButtonGroupSearchWithButtonPreview from "../radix/button-group/search-with-button"
import UiButtonGroupFileNameMenuPreview from "../radix/button-group/file-name-menu"
import UiButtonGroupDisabledButtonPreview from "../radix/button-group/disabled-button"
import UiButtonGroupSeparatedButtonsPreview from "../radix/button-group/separated-buttons"
import UiButtonGroupDashboardViewsPreview from "../radix/button-group/dashboard-views"
import UiButtonGroupRatingScalePreview from "../radix/button-group/rating-scale"
import UiButtonGroupUserSelectionPreview from "../radix/button-group/user-selection"
import UiButtonGroupStatusSelectPreview from "../radix/button-group/status-select"
import UiButtonGroupVolumeControlPreview from "../radix/button-group/volume-control"
import UiButtonGroupFollowerCountPreview from "../radix/button-group/follower-count"
import UiButtonGroupActiveCountPreview from "../radix/button-group/active-count"
import UiButtonGroupShareCaptionPreview from "../radix/button-group/share-caption"
import UiButtonGroupSortViewPreview from "../radix/button-group/sort-view"
import UiButtonGroupSelectControlsPreview from "../radix/button-group/select-controls"
import UiButtonGroupSegmentedControlPreview from "../radix/button-group/segmented-control"
import UiButtonGroupNumberedPaginationPreview from "../radix/button-group/numbered-pagination"
import UiButtonGroupViewSwitcherPreview from "../radix/button-group/view-switcher"
import UiButtonGroupZoomControlsPreview from "../radix/button-group/zoom-controls"
import UiButtonGroupMediaControlsPreview from "../radix/button-group/media-controls"
import UiButtonGroupSplitButtonPreview from "../radix/button-group/split-button"
import UiButtonGroupVerticalListPreview from "../radix/button-group/vertical-list"
import UiButtonGroupModelSelectorPreview from "../radix/button-group/model-selector"
import UiButtonGroupOrderTypePreview from "../radix/button-group/order-type"
import UiButtonGroupBuySellHoldPreview from "../radix/button-group/buy-sell-hold"
import UiButtonGroupPipelineStagePreview from "../radix/button-group/pipeline-stage"
import UiButtonGroupEnvironmentSwitcherPreview from "../radix/button-group/environment-switcher"
import UiButtonGroupTimeIntervalPreview from "../radix/button-group/time-interval"
import UiButtonGroupReviewActionsPreview from "../radix/button-group/review-actions"
import UiButtonGroupExportToolbarPreview from "../radix/button-group/export-toolbar"
import UiButtonGroupVerticalNavPreview from "../radix/button-group/vertical-nav"
import UiButtonGroupFilterSortMorePreview from "../radix/button-group/filter-sort-more"
import UiButtonGroupCreateMenuPreview from "../radix/button-group/create-menu"
import UiButtonGroupDashboardActionsPreview from "../radix/button-group/dashboard-actions"
import UiButtonGroupPublishControlsPreview from "../radix/button-group/publish-controls"
import UiButtonGroupServiceSelectorsPreview from "../radix/button-group/service-selectors"
import UiButtonGroupPayoutReleasePreview from "../radix/button-group/payout-release"
import UiButtonGroupFileAttachmentPreview from "../radix/button-group/file-attachment"
import UiButtonGroupAgentModePreview from "../radix/button-group/agent-mode"
import UiCalendarPreview from "../radix/calendar/default"
import UiCalendarStandardPreview from "../radix/calendar/standard"
import UiCalendarRangePreview from "../radix/calendar/range"
import UiCalendarDisabledDatesPreview from "../radix/calendar/disabled-dates"
import UiCalendarMultipleDaysPreview from "../radix/calendar/multiple-days"
import UiCalendarCircularDaysPreview from "../radix/calendar/circular-days"
import UiCalendarCircularRangePreview from "../radix/calendar/circular-range"
import UiCalendarRightNavigationPreview from "../radix/calendar/right-navigation"
import UiCalendarMonthYearSelectPreview from "../radix/calendar/month-year-select"
import UiCalendarYearSelectPreview from "../radix/calendar/year-select"
import UiCalendarWeekNumbersPreview from "../radix/calendar/week-numbers"
import UiCalendarCurrentMonthButtonPreview from "../radix/calendar/current-month-button"
import UiCalendarTodayButtonPreview from "../radix/calendar/today-button"
import UiCalendarYearViewPreview from "../radix/calendar/year-view"
import UiCalendarTimeSlotsPreview from "../radix/calendar/time-slots"
import UiCalendarDatePresetsPreview from "../radix/calendar/date-presets"
import UiCalendarRangePresetsPreview from "../radix/calendar/range-presets"
import UiCalendarPricingPreview from "../radix/calendar/pricing"
import UiCalendarForwardPresetsPreview from "../radix/calendar/forward-presets"
import UiCalendarAppointmentPreview from "../radix/calendar/appointment"
import UiCalendarTwoMonthsPreview from "../radix/calendar/two-months"
import UiCalendarTwoMonthRangePreview from "../radix/calendar/two-month-range"
import UiCalendarEventListPreview from "../radix/calendar/event-list"
import UiCalendarLocalizedPreview from "../radix/calendar/localized"
import UiCalendarDatePickerPreview from "../radix/calendar/date-picker"
import UiCalendarDateRangePickerPreview from "../radix/calendar/date-range-picker"
import UiCalendarPickerYearViewPreview from "../radix/calendar/picker-year-view"
import UiCalendarPickerTimeSlotsPreview from "../radix/calendar/picker-time-slots"
import UiCalendarPickerPresetsPreview from "../radix/calendar/picker-presets"
import UiCalendarRangePickerPresetsPreview from "../radix/calendar/range-picker-presets"
import UiCalendarDateTimeRangePreview from "../radix/calendar/date-time-range"
import UiCardPreview from "../radix/card/default"
import UiCardStandardPreview from "../radix/card/standard"
import UiCardBorderedHeaderPreview from "../radix/card/bordered-header"
import UiCardBorderSeparationPreview from "../radix/card/border-separation"
import UiCardHeaderFooterPreview from "../radix/card/header-footer"
import UiCardLinkActionPreview from "../radix/card/link-action"
import UiCardDropdownMenuPreview from "../radix/card/dropdown-menu"
import UiCardInsetImagePreview from "../radix/card/inset-image"
import UiCardImageHoverZoomPreview from "../radix/card/image-hover-zoom"
import UiCardFullImagePreview from "../radix/card/full-image"
import UiCardImageShadowFadePreview from "../radix/card/image-shadow-fade"
import UiCardStackedDepthPreview from "../radix/card/stacked-depth"
import UiCardLoginFormPreview from "../radix/card/login-form"
import UiCardBillingUsagePreview from "../radix/card/billing-usage"
import UiCardDeploymentStatusPreview from "../radix/card/deployment-status"
import UiCardStatTrendPreview from "../radix/card/stat-trend"
import UiCardBadgeActionsPreview from "../radix/card/badge-actions"
import UiCardIconLinkPreview from "../radix/card/icon-link"
import UiCardLabelLinkPreview from "../radix/card/label-link"
import UiCarouselPreview from "../radix/carousel/default"
import UiCarouselStandardPreview from "../radix/carousel/standard"
import UiCarouselVerticalPreview from "../radix/carousel/vertical"
import UiCarouselMultipleItemsPreview from "../radix/carousel/multiple-items"
import UiCarouselResponsiveBasisPreview from "../radix/carousel/responsive-basis"
import UiCarouselAutoplayPreview from "../radix/carousel/autoplay"
import UiCarouselCenteredAlignmentPreview from "../radix/carousel/centered-alignment"
import UiCarouselCustomSpacingPreview from "../radix/carousel/custom-spacing"
import UiCarouselImageOverlaysPreview from "../radix/carousel/image-overlays"
import UiCarouselThumbnailStripPreview from "../radix/carousel/thumbnail-strip"
import UiCarouselOverlayThumbnailsPreview from "../radix/carousel/overlay-thumbnails"
import UiCarouselDotsNavigationPreview from "../radix/carousel/dots-navigation"
import UiChartPreview from "../radix/chart/default"
import UiChartBarsPreview from "../radix/chart/bars"
import UiChartMultiDatasetBarsPreview from "../radix/chart/multi-dataset-bars"
import UiChartDiagonalStripeBarsPreview from "../radix/chart/diagonal-stripe-bars"
import UiChartDottedBarsPreview from "../radix/chart/dotted-bars"
import UiChartStripedSolidBarsPreview from "../radix/chart/striped-solid-bars"
import UiChart3dGradientBarsPreview from "../radix/chart/3d-gradient-bars"
import UiChartGradientBarsPreview from "../radix/chart/gradient-bars"
import UiChartIsometricBarsPreview from "../radix/chart/isometric-bars"
import UiChartDottedSolidBarsPreview from "../radix/chart/dotted-solid-bars"
import UiChartDuotoneBarsPreview from "../radix/chart/duotone-bars"
import UiChartAnimatedMonochromeBarsPreview from "../radix/chart/animated-monochrome-bars"
import UiChartHorizontalBarsPreview from "../radix/chart/horizontal-bars"
import UiChartGradientAreaPreview from "../radix/chart/gradient-area"
import UiChartStackedDashedAreaPreview from "../radix/chart/stacked-dashed-area"
import UiChartDottedStepAreaPreview from "../radix/chart/dotted-step-area"
import UiChartGlowingDotAreaPreview from "../radix/chart/glowing-dot-area"
import UiChartForecastLinePreview from "../radix/chart/forecast-line"
import UiChartCrosshatchAreaPreview from "../radix/chart/crosshatch-area"
import UiChartDonutCenterTotalPreview from "../radix/chart/donut-center-total"
import UiChartDonutCenterStatsPreview from "../radix/chart/donut-center-stats"
import UiChartStripedPiePreview from "../radix/chart/striped-pie"
import UiChartActiveSegmentDonutPreview from "../radix/chart/active-segment-donut"
import UiChartGradientRadarPreview from "../radix/chart/gradient-radar"
import UiChartGlowingStrokeRadarPreview from "../radix/chart/glowing-stroke-radar"
import UiChartRadialScoresPreview from "../radix/chart/radial-scores"
import UiCheckboxPreview from "../radix/checkbox/default"
import UiCheckboxStandardPreview from "../radix/checkbox/standard"
import UiCheckboxDisabledPreview from "../radix/checkbox/disabled"
import UiCheckboxInvalidPreview from "../radix/checkbox/invalid"
import UiCheckboxIndeterminatePreview from "../radix/checkbox/indeterminate"
import UiCheckboxLabelDescriptionPreview from "../radix/checkbox/label-description"
import UiCheckboxColoredPreview from "../radix/checkbox/colored"
import UiCheckboxCircleTodoPreview from "../radix/checkbox/circle-todo"
import UiCheckboxGroupPreview from "../radix/checkbox/group"
import UiCheckboxSettingCardPreview from "../radix/checkbox/setting-card"
import UiCheckboxFrameGroupPreview from "../radix/checkbox/frame-group"
import UiCheckboxCardRowsPreview from "../radix/checkbox/card-rows"
import UiCheckboxIconCardRowsPreview from "../radix/checkbox/icon-card-rows"
import UiCheckboxCornerCheckTilesPreview from "../radix/checkbox/corner-check-tiles"
import UiCheckboxModuleTilesPreview from "../radix/checkbox/module-tiles"
import UiCheckboxAvatarCardPreview from "../radix/checkbox/avatar-card"
import UiCheckboxNestedPermissionsPreview from "../radix/checkbox/nested-permissions"
import UiCheckboxPaymentMethodPreview from "../radix/checkbox/payment-method"
import UiCheckboxHelpIconTooltipPreview from "../radix/checkbox/help-icon-tooltip"
import UiCheckboxBadgeGroupPreview from "../radix/checkbox/badge-group"
import UiCheckboxRightSideTooltipPreview from "../radix/checkbox/right-side-tooltip"
import UiCheckboxInlineGroupPreview from "../radix/checkbox/inline-group"
import UiCheckboxUppercaseBadgesPreview from "../radix/checkbox/uppercase-badges"
import UiCollapsiblePreview from "../radix/collapsible/default"
import UiCollapsibleStandardPreview from "../radix/collapsible/standard"
import UiCollapsibleCheckboxSettingsPreview from "../radix/collapsible/checkbox-settings"
import UiCollapsibleAnimatedCardPreview from "../radix/collapsible/animated-card"
import UiCollapsibleBottomTriggerPreview from "../radix/collapsible/bottom-trigger"
import UiCollapsibleFormFieldsPreview from "../radix/collapsible/form-fields"
import UiCollapsibleInFramePreview from "../radix/collapsible/in-frame"
import UiCollapsibleNestedListPreview from "../radix/collapsible/nested-list"
import UiCollapsibleUserProfilePreview from "../radix/collapsible/user-profile"
import UiCollapsibleMultiLevelMenuPreview from "../radix/collapsible/multi-level-menu"
import UiCollapsibleFileTreePreview from "../radix/collapsible/file-tree"
import UiComboboxPreview from "../radix/combobox/default"
import UiComboboxStandardPreview from "../radix/combobox/standard"
import UiComboboxDisabledPreview from "../radix/combobox/disabled"
import UiComboboxInvalidPreview from "../radix/combobox/invalid"
import UiComboboxClearButtonPreview from "../radix/combobox/clear-button"
import UiComboboxAutoHighlightPreview from "../radix/combobox/auto-highlight"
import UiComboboxGroupedOptionsPreview from "../radix/combobox/grouped-options"
import UiComboboxGroupSeparatorsPreview from "../radix/combobox/group-separators"
import UiComboboxLargeListPreview from "../radix/combobox/large-list"
import UiComboboxIconAddonPreview from "../radix/combobox/icon-addon"
import UiComboboxCountryPickerPreview from "../radix/combobox/country-picker"
import UiComboboxInFormPreview from "../radix/combobox/in-form"
import UiComboboxMultiSelectPreview from "../radix/combobox/multi-select"
import UiComboboxDisabledMultiSelectPreview from "../radix/combobox/disabled-multi-select"
import UiComboboxInvalidMultiSelectPreview from "../radix/combobox/invalid-multi-select"
import UiComboboxNonRemovableChipsPreview from "../radix/combobox/non-removable-chips"
import UiComboboxCustomItemsPreview from "../radix/combobox/custom-items"
import UiComboboxInDialogPreview from "../radix/combobox/in-dialog"
import UiComboboxCustomTriggerIconPreview from "../radix/combobox/custom-trigger-icon"
import UiComboboxUserTagsPreview from "../radix/combobox/user-tags"
import UiComboboxInvisibleTagsPreview from "../radix/combobox/invisible-tags"
import UiComboboxStatusChangePreview from "../radix/combobox/status-change"
import UiComboboxPriorityChangePreview from "../radix/combobox/priority-change"
import UiComboboxLeadSelectionPreview from "../radix/combobox/lead-selection"
import UiComboboxMemberSelectionPreview from "../radix/combobox/member-selection"
import UiComboboxDateSelectionPreview from "../radix/combobox/date-selection"
import UiComboboxLabelSelectionPreview from "../radix/combobox/label-selection"
import UiComboboxTeamSelectionPreview from "../radix/combobox/team-selection"
import UiComboboxAssigneeSelectionPreview from "../radix/combobox/assignee-selection"
import UiCommandPreview from "../radix/command/default"
import UiCommandStandardPreview from "../radix/command/standard"
import UiCommandShortcutsPreview from "../radix/command/shortcuts"
import UiCommandGroupsPreview from "../radix/command/groups"
import UiCommandManyGroupsPreview from "../radix/command/many-groups"
import UiCommandFileSearchPreview from "../radix/command/file-search"
import UiCommandUserSearchPreview from "../radix/command/user-search"
import UiCommandActionPalettePreview from "../radix/command/action-palette"
import UiCommandRecentFavoritesPreview from "../radix/command/recent-favorites"
import UiContextMenuPreview from "../radix/context-menu/default"
import UiContextMenuStandardPreview from "../radix/context-menu/standard"
import UiContextMenuIconsPreview from "../radix/context-menu/icons"
import UiContextMenuShortcutsPreview from "../radix/context-menu/shortcuts"
import UiContextMenuNestedSubmenusPreview from "../radix/context-menu/nested-submenus"
import UiContextMenuLabelsSeparatorsPreview from "../radix/context-menu/labels-separators"
import UiContextMenuCheckboxItemsPreview from "../radix/context-menu/checkbox-items"
import UiContextMenuRadioItemsPreview from "../radix/context-menu/radio-items"
import UiContextMenuDestructiveActionsPreview from "../radix/context-menu/destructive-actions"
import UiContextMenuAlignmentSidesPreview from "../radix/context-menu/alignment-sides"
import UiContextMenuInsideDialogPreview from "../radix/context-menu/inside-dialog"
import UiDialogPreview from "../radix/dialog/default"
import UiDialogStandardPreview from "../radix/dialog/standard"
import UiDialogScrollableContentPreview from "../radix/dialog/scrollable-content"
import UiDialogStickyFooterPreview from "../radix/dialog/sticky-footer"
import UiDialogNoCloseButtonPreview from "../radix/dialog/no-close-button"
import UiDialogCustomCloseButtonPreview from "../radix/dialog/custom-close-button"
import UiDialogFullScreenPreview from "../radix/dialog/full-screen"
import UiDialogDestructiveConfirmationPreview from "../radix/dialog/destructive-confirmation"
import UiDialogCookieConsentPreview from "../radix/dialog/cookie-consent"
import UiDialogKeyboardShortcutsPreview from "../radix/dialog/keyboard-shortcuts"
import UiDialogFullWidthButtonPreview from "../radix/dialog/full-width-button"
import UiDrawerPreview from "../radix/drawer/default"
import UiDrawerScrollableContentPreview from "../radix/drawer/scrollable-content"
import UiDrawerRightSidePreview from "../radix/drawer/right-side"
import UiDrawerLeftSidePreview from "../radix/drawer/left-side"
import UiDrawerTopSidePreview from "../radix/drawer/top-side"
import UiDrawerAllSidesPreview from "../radix/drawer/all-sides"
import UiDropdownMenuPreview from "../radix/dropdown-menu/default"
import UiDropdownMenuStandardPreview from "../radix/dropdown-menu/standard"
import UiDropdownMenuOpeningPositionsPreview from "../radix/dropdown-menu/opening-positions"
import UiDropdownMenuIconsPreview from "../radix/dropdown-menu/icons"
import UiDropdownMenuKeyboardShortcutsPreview from "../radix/dropdown-menu/keyboard-shortcuts"
import UiDropdownMenuNestedSubmenusPreview from "../radix/dropdown-menu/nested-submenus"
import UiDropdownMenuCheckboxesPreview from "../radix/dropdown-menu/checkboxes"
import UiDropdownMenuRadioGroupsPreview from "../radix/dropdown-menu/radio-groups"
import UiDropdownMenuAllItemTypesPreview from "../radix/dropdown-menu/all-item-types"
import UiDropdownMenuUserProfilePreview from "../radix/dropdown-menu/user-profile"
import UiDropdownMenuWorkspaceSwitcherPreview from "../radix/dropdown-menu/workspace-switcher"
import UiDropdownMenuNotificationFeedPreview from "../radix/dropdown-menu/notification-feed"
import UiDropdownMenuRecordActionsPreview from "../radix/dropdown-menu/record-actions"
import UiDropdownMenuShareExportPreview from "../radix/dropdown-menu/share-export"
import UiDropdownMenuThemeStatusPreview from "../radix/dropdown-menu/theme-status"
import UiDropdownMenuUserCreatePreview from "../radix/dropdown-menu/user-create"
import UiDropdownMenuQuickActionsPreview from "../radix/dropdown-menu/quick-actions"
import UiDropdownMenuNotificationItemsPreview from "../radix/dropdown-menu/notification-items"
import UiDropdownMenuAiModelSelectorPreview from "../radix/dropdown-menu/ai-model-selector"
import UiEmptyPreview from "../radix/empty/default"
import UiEmptyStandardPreview from "../radix/empty/standard"
import UiEmptyNoResultsPreview from "../radix/empty/no-results"
import UiEmptySearchInputPreview from "../radix/empty/search-input"
import UiEmptyAddButtonPreview from "../radix/empty/add-button"
import UiEmptyDocumentsPreview from "../radix/empty/documents"
import UiEmptyDashedUploadPreview from "../radix/empty/dashed-upload"
import UiEmptyInboxPreview from "../radix/empty/inbox"
import UiEmptyTeamMembersPreview from "../radix/empty/team-members"
import UiEmptyNoNotificationsPreview from "../radix/empty/no-notifications"
import UiEmptyAnalyticsPreview from "../radix/empty/analytics"
import UiEmptyBookmarksPreview from "../radix/empty/bookmarks"
import UiEmptyTasksPreview from "../radix/empty/tasks"
import UiEmptyAutomationsPreview from "../radix/empty/automations"
import UiEmptyCommentsBoardPreview from "../radix/empty/comments-board"
import UiEmptyStackedProductsPreview from "../radix/empty/stacked-products"
import UiEmptySearchFileCardsPreview from "../radix/empty/search-file-cards"
import UiEmptyChatBubblesPreview from "../radix/empty/chat-bubbles"
import UiEmptyCreditCardPreview from "../radix/empty/credit-card"
import UiEmptyConnectedNodesPreview from "../radix/empty/connected-nodes"
import UiEmptyEventsCalendarPreview from "../radix/empty/events-calendar"
import UiFieldPreview from "../radix/field/default"
import UiFieldStandardPreview from "../radix/field/standard"
import UiFieldInputTextareaPreview from "../radix/field/input-textarea"
import UiFieldSelectControlsPreview from "../radix/field/select-controls"
import UiFieldRadioCheckboxesPreview from "../radix/field/radio-checkboxes"
import UiFieldSliderSwitchPreview from "../radix/field/slider-switch"
import UiFieldOtpInputPreview from "../radix/field/otp-input"
import UiFieldSettingsFormPreview from "../radix/field/settings-form"
import UiFieldPermissionsPreview from "../radix/field/permissions"
import UiFieldResponsiveLayoutPreview from "../radix/field/responsive-layout"
import UiFieldNotificationPreferencesPreview from "../radix/field/notification-preferences"
import UiFieldValidationErrorsPreview from "../radix/field/validation-errors"
import UiFileUploadPreview from "../radix/file-upload/default"
import UiFileUploadStandardPreview from "../radix/file-upload/standard"
import UiFileUploadAvatarPreview from "../radix/file-upload/avatar"
import UiFileUploadDragDropPreview from "../radix/file-upload/drag-drop"
import UiFileUploadGalleryPreview from "../radix/file-upload/gallery"
import UiFileUploadProgressListPreview from "../radix/file-upload/progress-list"
import UiFileUploadTablePreview from "../radix/file-upload/table"
import UiFileUploadProductImagesPreview from "../radix/file-upload/product-images"
import UiFileUploadSortableImagesPreview from "../radix/file-upload/sortable-images"
import UiFileUploadPreviewCardsPreview from "../radix/file-upload/preview-cards"
import UiFileUploadCoverImagePreview from "../radix/file-upload/cover-image"
import UiHoverCardPreview from "../radix/hover-card/default"
import UiHoverCardStandardPreview from "../radix/hover-card/standard"
import UiHoverCardPositionsPreview from "../radix/hover-card/positions"
import UiHoverCardProfilePreview from "../radix/hover-card/profile"
import UiHoverCardIconPreview from "../radix/hover-card/icon"
import UiHoverCardImageTextPreview from "../radix/hover-card/image-text"
import UiHoverCardInDialogPreview from "../radix/hover-card/in-dialog"
import UiHoverCardLiveTimestampPreview from "../radix/hover-card/live-timestamp"
import UiHoverCardReleaseNotesPreview from "../radix/hover-card/release-notes"
import UiInputPreview from "../radix/input/default"
import UiInputStandardPreview from "../radix/input/standard"
import UiInputWithLabelPreview from "../radix/input/with-label"
import UiInputWithDescriptionPreview from "../radix/input/with-description"
import UiInputDisabledPreview from "../radix/input/disabled"
import UiInputErrorMessagePreview from "../radix/input/error-message"
import UiInputCharacterCounterPreview from "../radix/input/character-counter"
import UiInputPasswordPreview from "../radix/input/password"
import UiInputPhonePreview from "../radix/input/phone"
import UiInputUrlPreview from "../radix/input/url"
import UiInputNumberPreview from "../radix/input/number"
import UiInputDatePreview from "../radix/input/date"
import UiInputFilePreview from "../radix/input/file"
import UiInputRequiredIndicatorPreview from "../radix/input/required-indicator"
import UiInputTimePreview from "../radix/input/time"
import UiInputContactFormPreview from "../radix/input/contact-form"
import UiInputLabelTooltipPreview from "../radix/input/label-tooltip"
import UiInputLabelBadgePreview from "../radix/input/label-badge"
import UiInputOptionalBadgePreview from "../radix/input/optional-badge"
import UiInputLinkTogglePreview from "../radix/input/link-toggle"
import UiInputHorizontalPreview from "../radix/input/horizontal"
import UiInputMultipleErrorsPreview from "../radix/input/multiple-errors"
import UiInputStrengthHintPreview from "../radix/input/strength-hint"
import UiInputStrengthMeterPreview from "../radix/input/strength-meter"
import UiInputPulsedBackgroundPreview from "../radix/input/pulsed-background"
import UiInputCustomFocusRingPreview from "../radix/input/custom-focus-ring"
import UiInputSubtleBackgroundPreview from "../radix/input/subtle-background"
import UiInputBottomBorderPreview from "../radix/input/bottom-border"
import UiInputColorPreview from "../radix/input/color"
import UiInputRangePreview from "../radix/input/range"
import UiInputPillShapePreview from "../radix/input/pill-shape"
import UiInputBorderlessPreview from "../radix/input/borderless"
import UiInputGroupPreview from "../radix/input-group/default"
import UiInputGroupStandardPreview from "../radix/input-group/standard"
import UiInputGroupDisabledPreview from "../radix/input-group/disabled"
import UiInputGroupInvalidPreview from "../radix/input-group/invalid"
import UiInputGroupPrefixIconPreview from "../radix/input-group/prefix-icon"
import UiInputGroupSuffixIconPreview from "../radix/input-group/suffix-icon"
import UiInputGroupPrefixSuffixIconsPreview from "../radix/input-group/prefix-suffix-icons"
import UiInputGroupPrefixTextPreview from "../radix/input-group/prefix-text"
import UiInputGroupSuffixTextPreview from "../radix/input-group/suffix-text"
import UiInputGroupPrefixSuffixTextPreview from "../radix/input-group/prefix-suffix-text"
import UiInputGroupActionButtonPreview from "../radix/input-group/action-button"
import UiInputGroupIconButtonPreview from "../radix/input-group/icon-button"
import UiInputGroupDropdownSelectPreview from "../radix/input-group/dropdown-select"
import UiInputGroupKeyboardShortcutPreview from "../radix/input-group/keyboard-shortcut"
import UiInputGroupTooltipActionPreview from "../radix/input-group/tooltip-action"
import UiInputGroupLoadingSpinnerPreview from "../radix/input-group/loading-spinner"
import UiInputGroupBlockStartAddonPreview from "../radix/input-group/block-start-addon"
import UiInputGroupCharacterLimitPreview from "../radix/input-group/character-limit"
import UiInputGroupAiChatToolbarPreview from "../radix/input-group/ai-chat-toolbar"
import UiInputGroupAiChatAttachmentsPreview from "../radix/input-group/ai-chat-attachments"
import UiInputGroupLabelUsagePreview from "../radix/input-group/label-usage"
import UiInputGroupMultipleEndActionsPreview from "../radix/input-group/multiple-end-actions"
import UiInputGroupPopoverTriggerPreview from "../radix/input-group/popover-trigger"
import UiInputGroupSparklesShortcutPreview from "../radix/input-group/sparkles-shortcut"
import UiInputGroupSuccessIndicatorPreview from "../radix/input-group/success-indicator"
import UiInputGroupResultsCountPreview from "../radix/input-group/results-count"
import UiInputGroupTextareaActionsPreview from "../radix/input-group/textarea-actions"
import UiInputGroupButtonGroupPreview from "../radix/input-group/button-group"
import UiInputGroupThreeDotMenuPreview from "../radix/input-group/three-dot-menu"
import UiInputGroupPillCategoryPreview from "../radix/input-group/pill-category"
import UiInputGroupInlineAddonsPreview from "../radix/input-group/inline-addons"
import UiInputGroupInlineBlockEndPreview from "../radix/input-group/inline-block-end"
import UiInputGroupMemberRowPreview from "../radix/input-group/member-row"
import UiInputGroupProjectSavePreview from "../radix/input-group/project-save"
import UiInputGroupPillAiPromptPreview from "../radix/input-group/pill-ai-prompt"
import UiInputGroupPasswordTogglePreview from "../radix/input-group/password-toggle"
import UiInputGroupApiRequestPreview from "../radix/input-group/api-request"
import UiInputGroupOrderSearchPreview from "../radix/input-group/order-search"
import UiInputGroupCompanySearchPreview from "../radix/input-group/company-search"
import UiInputGroupContactSearchPreview from "../radix/input-group/contact-search"
import UiInputGroupShareLinkPreview from "../radix/input-group/share-link"
import UiInputOtpPreview from "../radix/input-otp/default"
import UiInputOtpStandardPreview from "../radix/input-otp/standard"
import UiInputOtpDigitsOnlyPreview from "../radix/input-otp/digits-only"
import UiInputOtpMultipleSeparatorsPreview from "../radix/input-otp/multiple-separators"
import UiInputOtpLettersNumbersPreview from "../radix/input-otp/letters-numbers"
import UiInputOtpPinCodePreview from "../radix/input-otp/pin-code"
import UiInputOtpVerificationCardPreview from "../radix/input-otp/verification-card"
import UiItemPreview from "../radix/item/default"
import UiItemVariantsPreview from "../radix/item/variants"
import UiItemIconActionsPreview from "../radix/item/icon-actions"
import UiItemUserFollowPreview from "../radix/item/user-follow"
import UiItemNavigationLinksPreview from "../radix/item/navigation-links"
import UiItemStatusBadgesPreview from "../radix/item/status-badges"
import UiItemFileRowsPreview from "../radix/item/file-rows"
import UiItemKeyboardShortcutsPreview from "../radix/item/keyboard-shortcuts"
import UiItemSmallCountBadgesPreview from "../radix/item/small-count-badges"
import UiItemTeamRolesPreview from "../radix/item/team-roles"
import UiItemHeaderFooterPreview from "../radix/item/header-footer"
import UiItemIntegrationsPreview from "../radix/item/integrations"
import UiItemActivityFeedPreview from "../radix/item/activity-feed"
import UiKbdPreview from "../radix/kbd/default"
import UiKbdStandardKeysPreview from "../radix/kbd/standard-keys"
import UiKbdGroupedKeysPreview from "../radix/kbd/grouped-keys"
import UiKbdKeysWithIconsPreview from "../radix/kbd/keys-with-icons"
import UiKbdInInputPreview from "../radix/kbd/in-input"
import UiKbdInTooltipPreview from "../radix/kbd/in-tooltip"
import UiKbdShortcutListPreview from "../radix/kbd/shortcut-list"
import UiLabelPreview from "../radix/label/default"
import UiLabelStandardPreview from "../radix/label/standard"
import UiLabelCheckboxPreview from "../radix/label/checkbox"
import UiLabelTextareaPreview from "../radix/label/textarea"
import UiLabelDisabledPreview from "../radix/label/disabled"
import UiLabelRequiredPreview from "../radix/label/required"
import UiLabelOptionalPreview from "../radix/label/optional"
import UiLabelTooltipInfoPreview from "../radix/label/tooltip-info"
import UiLabelBadgePreview from "../radix/label/badge"
import UiLabelCharacterCounterPreview from "../radix/label/character-counter"
import UiLabelHelperTextPreview from "../radix/label/helper-text"
import UiLabelErrorStatePreview from "../radix/label/error-state"
import UiLabelInlineEditPreview from "../radix/label/inline-edit"
import UiLabelStatusDotPreview from "../radix/label/status-dot"
import UiMarkerPreview from "../radix/marker/default"
import UiMarkerStandardVariantsPreview from "../radix/marker/standard-variants"
import UiMarkerToolCallLogPreview from "../radix/marker/tool-call-log"
import UiMarkerRunStatusPreview from "../radix/marker/run-status"
import UiMarkerPhaseSeparatorsPreview from "../radix/marker/phase-separators"
import UiMarkerChangedFilesPreview from "../radix/marker/changed-files"
import UiMarkerLinksActionPreview from "../radix/marker/links-action"
import UiMenubarPreview from "../radix/menubar/default"
import UiMenubarStandardPreview from "../radix/menubar/standard"
import UiMenubarSubmenusPreview from "../radix/menubar/submenus"
import UiMenubarCheckboxRadioPreview from "../radix/menubar/checkbox-radio"
import UiMenubarIconsPreview from "../radix/menubar/icons"
import UiMenubarFormattingMediaPreview from "../radix/menubar/formatting-media"
import UiMessagePreview from "../radix/message/default"
import UiMessageTwoSidedChatPreview from "../radix/message/two-sided-chat"
import UiMessageAvatarsPreview from "../radix/message/avatars"
import UiMessageSenderStatusPreview from "../radix/message/sender-status"
import UiMessageReplyActionsPreview from "../radix/message/reply-actions"
import UiMessageSharedFilesPreview from "../radix/message/shared-files"
import UiMessageConsecutiveMessagesPreview from "../radix/message/consecutive-messages"
import UiMessageStreamingReplyPreview from "../radix/message/streaming-reply"
import UiMessageScrollerPreview from "../radix/message-scroller/default"
import UiMessageScrollerJumpToLatestPreview from "../radix/message-scroller/jump-to-latest"
import UiMessageScrollerStreamingReplyPreview from "../radix/message-scroller/streaming-reply"
import UiMessageScrollerAnchoredTurnPreview from "../radix/message-scroller/anchored-turn"
import UiMessageScrollerOpeningPositionPreview from "../radix/message-scroller/opening-position"
import UiMessageScrollerLoadEarlierPreview from "../radix/message-scroller/load-earlier"
import UiMessageScrollerThreadNavigatorPreview from "../radix/message-scroller/thread-navigator"
import UiNativeSelectPreview from "../radix/native-select/default"
import UiNativeSelectStandardPreview from "../radix/native-select/standard"
import UiNativeSelectGroupedOptionsPreview from "../radix/native-select/grouped-options"
import UiNativeSelectSmallPreview from "../radix/native-select/small"
import UiNativeSelectFieldWithLabelPreview from "../radix/native-select/field-with-label"
import UiNativeSelectDisabledPreview from "../radix/native-select/disabled"
import UiNativeSelectInvalidPreview from "../radix/native-select/invalid"
import UiNavigationMenuPreview from "../radix/navigation-menu/default"
import UiNavigationMenuStandardPreview from "../radix/navigation-menu/standard"
import UiNavigationMenuGridLayoutPreview from "../radix/navigation-menu/grid-layout"
import UiNavigationMenuWithIconsPreview from "../radix/navigation-menu/with-icons"
import UiNavigationMenuLearnMoreButtonPreview from "../radix/navigation-menu/learn-more-button"
import UiPaginationPreview from "../radix/pagination/default"
import UiPaginationStandardPreview from "../radix/pagination/standard"
import UiPaginationNoLabelsPreview from "../radix/pagination/no-labels"
import UiPaginationHoverBorderPreview from "../radix/pagination/hover-border"
import UiPaginationCircleButtonsPreview from "../radix/pagination/circle-buttons"
import UiPaginationCompactGoToPreview from "../radix/pagination/compact-go-to"
import UiPaginationInCardPreview from "../radix/pagination/in-card"
import UiPaginationArrowLinksPreview from "../radix/pagination/arrow-links"
import UiPaginationCenteredPageInfoPreview from "../radix/pagination/centered-page-info"
import UiPaginationLeftPageInfoPreview from "../radix/pagination/left-page-info"
import UiPaginationTrailingEllipsisPreview from "../radix/pagination/trailing-ellipsis"
import UiPaginationOutlineStripPreview from "../radix/pagination/outline-strip"
import UiPaginationRowsPerPagePreview from "../radix/pagination/rows-per-page"
import UiPaginationPageSelectPreview from "../radix/pagination/page-select"
import UiPaginationFullWidthGoToPreview from "../radix/pagination/full-width-go-to"
import UiPaginationInfoAndPerPagePreview from "../radix/pagination/info-and-per-page"
import UiPopoverPreview from "../radix/popover/default"
import UiPopoverStandardPreview from "../radix/popover/standard"
import UiPopoverOpeningSidesPreview from "../radix/popover/opening-sides"
import UiPopoverInlineFormPreview from "../radix/popover/inline-form"
import UiPopoverAlignmentPreview from "../radix/popover/alignment"
import UiPopoverInDialogPreview from "../radix/popover/in-dialog"
import UiPopoverProfileCardPreview from "../radix/popover/profile-card"
import UiPopoverFeaturePitchPreview from "../radix/popover/feature-pitch"
import UiPopoverMediaPreviewPreview from "../radix/popover/media-preview"
import UiPopoverRelativeTimePreview from "../radix/popover/relative-time"
import UiPopoverControlsPreview from "../radix/popover/controls"
import UiPopoverStepTourPreview from "../radix/popover/step-tour"
import UiProgressPreview from "../radix/progress/default"
import UiProgressStandardPreview from "../radix/progress/standard"
import UiProgressSmallPreview from "../radix/progress/small"
import UiProgressLargePreview from "../radix/progress/large"
import UiProgressStatusMessagesPreview from "../radix/progress/status-messages"
import UiProgressFileUploadsPreview from "../radix/progress/file-uploads"
import UiProgressWithSliderPreview from "../radix/progress/with-slider"
import UiProgressMultiStepPreview from "../radix/progress/multi-step"
import UiProgressCustomColorsPreview from "../radix/progress/custom-colors"
import UiQuestionnairePreview from "../radix/questionnaire/default"
import UiQuestionnaireGuidedSetupPreview from "../radix/questionnaire/guided-setup"
import UiQuestionnaireMultiSelectPreview from "../radix/questionnaire/multi-select"
import UiQuestionnaireWriteInAnswerPreview from "../radix/questionnaire/write-in-answer"
import UiQuestionnaireSegmentedProgressPreview from "../radix/questionnaire/segmented-progress"
import UiQuestionnaireOptionalSkipPreview from "../radix/questionnaire/optional-skip"
import UiQuestionnaireCrossQuestionRulePreview from "../radix/questionnaire/cross-question-rule"
import UiQuestionnaireConditionalBranchPreview from "../radix/questionnaire/conditional-branch"
import UiRadioGroupPreview from "../radix/radio-group/default"
import UiRadioGroupStandardPreview from "../radix/radio-group/standard"
import UiRadioGroupDisabledPreview from "../radix/radio-group/disabled"
import UiRadioGroupDescriptionsPreview from "../radix/radio-group/descriptions"
import UiRadioGroupInvalidPreview from "../radix/radio-group/invalid"
import UiRadioGroupColoredPreview from "../radix/radio-group/colored"
import UiRadioGroupLegendDescriptionPreview from "../radix/radio-group/legend-description"
import UiRadioGroupDescriptiveCardsPreview from "../radix/radio-group/descriptive-cards"
import UiRadioGroupCardSeparatorsPreview from "../radix/radio-group/card-separators"
import UiRadioGroupCardIconsPreview from "../radix/radio-group/card-icons"
import UiRadioGroupInFramePreview from "../radix/radio-group/in-frame"
import UiRadioGroupGridLayoutPreview from "../radix/radio-group/grid-layout"
import UiRadioGroupAvatarCardsPreview from "../radix/radio-group/avatar-cards"
import UiRadioGroupPaymentMethodsPreview from "../radix/radio-group/payment-methods"
import UiRadioGroupTooltipInfoPreview from "../radix/radio-group/tooltip-info"
import UiRadioGroupBadgesPreview from "../radix/radio-group/badges"
import UiRadioGroupInlineHorizontalPreview from "../radix/radio-group/inline-horizontal"
import UiRadioGroupPricingTiersPreview from "../radix/radio-group/pricing-tiers"
import UiResizablePreview from "../radix/resizable/default"
import UiResizableHorizontalLayoutPreview from "../radix/resizable/horizontal-layout"
import UiResizableVerticalLayoutPreview from "../radix/resizable/vertical-layout"
import UiResizableMixedDirectionsPreview from "../radix/resizable/mixed-directions"
import UiResizableNestedGripsPreview from "../radix/resizable/nested-grips"
import UiResizableAnimatedPillPreview from "../radix/resizable/animated-pill"
import UiResizableSpringPillPreview from "../radix/resizable/spring-pill"
import UiResizableCapsuleExpansionPreview from "../radix/resizable/capsule-expansion"
import UiResizableNestedPillsPreview from "../radix/resizable/nested-pills"
import UiResizableThreePanelsPreview from "../radix/resizable/three-panels"
import UiResizableSizeTrackingPreview from "../radix/resizable/size-tracking"
import UiScrollAreaPreview from "../radix/scroll-area/default"
import UiScrollAreaStandardPreview from "../radix/scroll-area/standard"
import UiScrollAreaHorizontalPreview from "../radix/scroll-area/horizontal"
import UiScrollAreaBothScrollbarsPreview from "../radix/scroll-area/both-scrollbars"
import UiScrollAreaFadeEdgesPreview from "../radix/scroll-area/fade-edges"
import UiScrollAreaScrollbarGutterPreview from "../radix/scroll-area/scrollbar-gutter"
import UiSelectPreview from "../radix/select/default"
import UiSelectStandardPreview from "../radix/select/standard"
import UiSelectIconsPreview from "../radix/select/icons"
import UiSelectGroupedLabelsPreview from "../radix/select/grouped-labels"
import UiSelectLargeListPreview from "../radix/select/large-list"
import UiSelectSmallTriggerPreview from "../radix/select/small-trigger"
import UiSelectPlanPickerPreview from "../radix/select/plan-picker"
import UiSelectDisabledItemPreview from "../radix/select/disabled-item"
import UiSelectFieldWithLabelPreview from "../radix/select/field-with-label"
import UiSelectInvalidPreview from "../radix/select/invalid"
import UiSelectDisabledPreview from "../radix/select/disabled"
import UiSelectInDialogPreview from "../radix/select/in-dialog"
import UiSelectMultipleSelectionPreview from "../radix/select/multiple-selection"
import UiSelectInlineWithInputPreview from "../radix/select/inline-with-input"
import UiSelectWithButtonPreview from "../radix/select/with-button"
import UiSelectItemAlignedPreview from "../radix/select/item-aligned"
import UiSelectAccessLevelsPreview from "../radix/select/access-levels"
import UiSelectStatusBulletsPreview from "../radix/select/status-bullets"
import UiSelectUserAvatarsPreview from "../radix/select/user-avatars"
import UiSelectStatusBadgesPreview from "../radix/select/status-badges"
import UiSelectLeftIndicatorPreview from "../radix/select/left-indicator"
import UiSelectClearButtonPreview from "../radix/select/clear-button"
import UiSelectCustomChevronsPreview from "../radix/select/custom-chevrons"
import UiSelectOverlappingDotsPreview from "../radix/select/overlapping-dots"
import UiSelectGroupedSeparatorsPreview from "../radix/select/grouped-separators"
import UiSelectCountryFlagsPreview from "../radix/select/country-flags"
import UiSelectStatusFilterPreview from "../radix/select/status-filter"
import UiSelectOptionDescriptionsPreview from "../radix/select/option-descriptions"
import UiSelectTimezoneOffsetsPreview from "../radix/select/timezone-offsets"
import UiSelectTeamAssignmentPreview from "../radix/select/team-assignment"
import UiSelectPriorityBadgesPreview from "../radix/select/priority-badges"
import UiSelectFontPreviewPreview from "../radix/select/font-preview"
import UiSelectCategoryIconsPreview from "../radix/select/category-icons"
import UiSelectSizeScalePreview from "../radix/select/size-scale"
import UiSeparatorPreview from "../radix/separator/default"
import UiSeparatorHorizontalPreview from "../radix/separator/horizontal"
import UiSeparatorVerticalPreview from "../radix/separator/vertical"
import UiSeparatorGroupedMenuItemsPreview from "../radix/separator/grouped-menu-items"
import UiSeparatorListRowsPreview from "../radix/separator/list-rows"
import UiSeparatorCenteredLabelPreview from "../radix/separator/centered-label"
import UiSeparatorOrderSummaryPreview from "../radix/separator/order-summary"
import UiSheetPreview from "../radix/sheet/default"
import UiSheetProfileEditorPreview from "../radix/sheet/profile-editor"
import UiSheetNoCloseButtonPreview from "../radix/sheet/no-close-button"
import UiSheetAnySidePreview from "../radix/sheet/any-side"
import UiSheetScrollableContentPreview from "../radix/sheet/scrollable-content"
import UiSidebarPreview from "../radix/sidebar/default"
import UiSidebarWorkspaceSwitcherPreview from "../radix/sidebar/workspace-switcher"
import UiSidebarIconRailPreview from "../radix/sidebar/icon-rail"
import UiSidebarDocsNavigationPreview from "../radix/sidebar/docs-navigation"
import UiSidebarInspectorPanelPreview from "../radix/sidebar/inspector-panel"
import UiSidebarFilterLoadingPreview from "../radix/sidebar/filter-loading"
import UiSkeletonPreview from "../radix/skeleton/default"
import UiSkeletonAvatarInfoPreview from "../radix/skeleton/avatar-info"
import UiSkeletonCardPreview from "../radix/skeleton/card"
import UiSkeletonTextParagraphsPreview from "../radix/skeleton/text-paragraphs"
import UiSkeletonFormPreview from "../radix/skeleton/form"
import UiSkeletonDataTablePreview from "../radix/skeleton/data-table"
import UiSkeletonStatsRowPreview from "../radix/skeleton/stats-row"
import UiSkeletonListWithActionsPreview from "../radix/skeleton/list-with-actions"
import UiSkeletonCardGridPreview from "../radix/skeleton/card-grid"
import UiSkeletonProfilePagePreview from "../radix/skeleton/profile-page"
import UiSkeletonChatMessagesPreview from "../radix/skeleton/chat-messages"
import UiSliderPreview from "../radix/slider/default"
import UiSliderStandardPreview from "../radix/slider/standard"
import UiSliderDisabledPreview from "../radix/slider/disabled"
import UiSliderMultipleThumbsPreview from "../radix/slider/multiple-thumbs"
import UiSliderVerticalPreview from "../radix/slider/vertical"
import UiSliderControlledValuePreview from "../radix/slider/controlled-value"
import UiSliderRangePreview from "../radix/slider/range"
import UiSliderNumberInputPreview from "../radix/slider/number-input"
import UiSliderColorTemperaturePreview from "../radix/slider/color-temperature"
import UiSliderReferenceLabelsPreview from "../radix/slider/reference-labels"
import UiSliderTickMarksPreview from "../radix/slider/tick-marks"
import UiSliderValueTooltipPreview from "../radix/slider/value-tooltip"
import UiSliderEmojiRatingPreview from "../radix/slider/emoji-rating"
import UiSonnerPreview from "../radix/sonner/default"
import UiSonnerStandardPreview from "../radix/sonner/standard"
import UiSonnerWithDescriptionPreview from "../radix/sonner/with-description"
import UiSonnerPositionsPreview from "../radix/sonner/positions"
import UiSonnerVariantIconsPreview from "../radix/sonner/variant-icons"
import UiSonnerDurationsPreview from "../radix/sonner/durations"
import UiSonnerActionButtonPreview from "../radix/sonner/action-button"
import UiSonnerPromisePreview from "../radix/sonner/promise"
import UiSonnerActionCancelPreview from "../radix/sonner/action-cancel"
import UiSonnerRichContentPreview from "../radix/sonner/rich-content"
import UiSonnerUploadProgressPreview from "../radix/sonner/upload-progress"
import UiSonnerStatusAlertPreview from "../radix/sonner/status-alert"
import UiSonnerAccentBorderPreview from "../radix/sonner/accent-border"
import UiSonnerInvertSuccessPreview from "../radix/sonner/invert-success"
import UiSonnerInvertErrorPreview from "../radix/sonner/invert-error"
import UiSonnerInvertInfoPreview from "../radix/sonner/invert-info"
import UiSonnerInvertWarningPreview from "../radix/sonner/invert-warning"
import UiSonnerInvertAvatarGroupPreview from "../radix/sonner/invert-avatar-group"
import UiSonnerCloseTopRightPreview from "../radix/sonner/close-top-right"
import UiSonnerCustomIconPreview from "../radix/sonner/custom-icon"
import UiSonnerIntegrationPreview from "../radix/sonner/integration"
import UiSonnerUpdatablePreview from "../radix/sonner/updatable"
import UiSpinnerPreview from "../radix/spinner/default"
import UiSpinnerStandardPreview from "../radix/spinner/standard"
import UiSpinnerInButtonsPreview from "../radix/spinner/in-buttons"
import UiSpinnerInBadgesPreview from "../radix/spinner/in-badges"
import UiSpinnerInInputGroupPreview from "../radix/spinner/in-input-group"
import UiSpinnerInEmptyStatePreview from "../radix/spinner/in-empty-state"
import UiSpinnerPendingButtonsPreview from "../radix/spinner/pending-buttons"
import UiSpinnerOverlayWithCaptionPreview from "../radix/spinner/overlay-with-caption"
import UiSpinnerFullPagePreview from "../radix/spinner/full-page"
import UiSpinnerInlineTextPreview from "../radix/spinner/inline-text"
import UiSpinnerLoadingDotsPreview from "../radix/spinner/loading-dots"
import UiSpinnerCardOverlayPreview from "../radix/spinner/card-overlay"
import UiSpinnerColorVariantsPreview from "../radix/spinner/color-variants"
import UiSwitchPreview from "../radix/switch/default"
import UiSwitchStandardPreview from "../radix/switch/standard"
import UiSwitchWithDescriptionPreview from "../radix/switch/with-description"
import UiSwitchDisabledPreview from "../radix/switch/disabled"
import UiSwitchSizesPreview from "../radix/switch/sizes"
import UiSwitchSwitchGroupPreview from "../radix/switch/switch-group"
import UiSwitchCardSeparatorsPreview from "../radix/switch/card-separators"
import UiSwitchCardWithIconsPreview from "../radix/switch/card-with-icons"
import UiSwitchInFramePreview from "../radix/switch/in-frame"
import UiSwitchTooltipInfoPreview from "../radix/switch/tooltip-info"
import UiSwitchWithBadgesPreview from "../radix/switch/with-badges"
import UiSwitchColoredPreview from "../radix/switch/colored"
import UiSwitchDestructiveConfirmPreview from "../radix/switch/destructive-confirm"
import UiSwitchCompactTablePreview from "../radix/switch/compact-table"
import UiSwitchCardGridPreview from "../radix/switch/card-grid"
import UiTablePreview from "../radix/table/default"
import UiTableStandardPreview from "../radix/table/standard"
import UiTableWithFooterPreview from "../radix/table/with-footer"
import UiTableStatusBadgesPreview from "../radix/table/status-badges"
import UiTableActionsColumnPreview from "../radix/table/actions-column"
import UiTableInteractiveRowsPreview from "../radix/table/interactive-rows"
import UiTableTeamMembersPreview from "../radix/table/team-members"
import UiTableOrdersPreview from "../radix/table/orders"
import UiTableProjectsPreview from "../radix/table/projects"
import UiTableActivityLogPreview from "../radix/table/activity-log"
import UiTableSubscriptionsPreview from "../radix/table/subscriptions"
import UiTableInventoryPreview from "../radix/table/inventory"
import UiTableApiKeysPreview from "../radix/table/api-keys"
import UiTableFileManagerPreview from "../radix/table/file-manager"
import UiTableIssuesPreview from "../radix/table/issues"
import UiTableLeaderboardPreview from "../radix/table/leaderboard"
import UiTableEmployeeProfilePreview from "../radix/table/employee-profile"
import UiTableServerConfigPreview from "../radix/table/server-config"
import UiTabsPreview from "../radix/tabs/default"
import UiTabsStandardPreview from "../radix/tabs/standard"
import UiTabsLineVariantPreview from "../radix/tabs/line-variant"
import UiTabsVerticalPreview from "../radix/tabs/vertical"
import UiTabsVerticalLinePreview from "../radix/tabs/vertical-line"
import UiTabsIconsPreview from "../radix/tabs/icons"
import UiTabsFullWidthIconsPreview from "../radix/tabs/full-width-icons"
import UiTabsBadgeCountsPreview from "../radix/tabs/badge-counts"
import UiTabsSideListIconsPreview from "../radix/tabs/side-list-icons"
import UiTabsSegmentedControlPreview from "../radix/tabs/segmented-control"
import UiTextareaPreview from "../radix/textarea/default"
import UiTextareaStandardPreview from "../radix/textarea/standard"
import UiTextareaInvalidPreview from "../radix/textarea/invalid"
import UiTextareaWithLabelPreview from "../radix/textarea/with-label"
import UiTextareaWithDescriptionPreview from "../radix/textarea/with-description"
import UiTextareaDisabledPreview from "../radix/textarea/disabled"
import UiTextareaAutoResizeCounterPreview from "../radix/textarea/auto-resize-counter"
import UiTogglePreview from "../radix/toggle/default"
import UiToggleStandardPreview from "../radix/toggle/standard"
import UiToggleOutlinePreview from "../radix/toggle/outline"
import UiToggleTextSizesPreview from "../radix/toggle/text-sizes"
import UiToggleButtonComparisonPreview from "../radix/toggle/button-comparison"
import UiToggleDisabledTextPreview from "../radix/toggle/disabled-text"
import UiToggleIconLabelPreview from "../radix/toggle/icon-label"
import UiToggleCountBadgePreview from "../radix/toggle/count-badge"
import UiToggleIconSizesPreview from "../radix/toggle/icon-sizes"
import UiToggleIconSwapPreview from "../radix/toggle/icon-swap"
import UiToggleLabelSwapPreview from "../radix/toggle/label-swap"
import UiToggleReactionsPreview from "../radix/toggle/reactions"
import UiToggleTooltipPreview from "../radix/toggle/tooltip"
import UiToggleDisabledIconsPreview from "../radix/toggle/disabled-icons"
import UiToggleMuteButtonPreview from "../radix/toggle/mute-button"
import UiToggleGroupPreview from "../radix/toggle-group/default"
import UiToggleGroupStandardPreview from "../radix/toggle-group/standard"
import UiToggleGroupOutlinePreview from "../radix/toggle-group/outline"
import UiToggleGroupSizesPreview from "../radix/toggle-group/sizes"
import UiToggleGroupCustomSpacingPreview from "../radix/toggle-group/custom-spacing"
import UiToggleGroupFilterControlPreview from "../radix/toggle-group/filter-control"
import UiToggleGroupVerticalPreview from "../radix/toggle-group/vertical"
import UiToggleGroupTextAlignmentPreview from "../radix/toggle-group/text-alignment"
import UiToggleGroupViewModePreview from "../radix/toggle-group/view-mode"
import UiToggleGroupVerticalSettingsPreview from "../radix/toggle-group/vertical-settings"
import UiToggleGroupColorThemePreview from "../radix/toggle-group/color-theme"
import UiToggleGroupFontSizePreview from "../radix/toggle-group/font-size"
import UiToggleGroupTimeRangePreview from "../radix/toggle-group/time-range"
import UiToggleGroupNotificationChannelsPreview from "../radix/toggle-group/notification-channels"
import UiToggleGroupLayoutColumnsPreview from "../radix/toggle-group/layout-columns"
import UiToggleGroupSortDirectionPreview from "../radix/toggle-group/sort-direction"
import UiToggleGroupPricingTierPreview from "../radix/toggle-group/pricing-tier"
import UiTooltipPreview from "../radix/tooltip/default"
import UiTooltipStandardPreview from "../radix/tooltip/standard"
import UiTooltipPlacementsPreview from "../radix/tooltip/placements"
import UiTooltipIconTriggerPreview from "../radix/tooltip/icon-trigger"
import UiTooltipKeyboardShortcutPreview from "../radix/tooltip/keyboard-shortcut"
import UiTooltipBellWithCountPreview from "../radix/tooltip/bell-with-count"
import UiTooltipStatusBadgesPreview from "../radix/tooltip/status-badges"
import UiTooltipVerifiedDomainPreview from "../radix/tooltip/verified-domain"
import UiTooltipToolbarActionsPreview from "../radix/tooltip/toolbar-actions"
import UiTooltipWarningPreview from "../radix/tooltip/warning"
import UiTooltipUpgradePromptPreview from "../radix/tooltip/upgrade-prompt"
import UiTooltipAvatarRoleBadgePreview from "../radix/tooltip/avatar-role-badge"
import UiTooltipDisabledButtonPreview from "../radix/tooltip/disabled-button"
import UiTooltipOnlineStatusPreview from "../radix/tooltip/online-status"
import UiTooltipFileInfoPreview from "../radix/tooltip/file-info"
import UiTooltipLabelBadgesPreview from "../radix/tooltip/label-badges"
import UiTooltipUnreadBellPreview from "../radix/tooltip/unread-bell"
import UiTracePreview from "../radix/trace/default"
import UiTraceAgentStepsPreview from "../radix/trace/agent-steps"
import UiTraceStreamingRunPreview from "../radix/trace/streaming-run"
import UiTraceChatTurnPreview from "../radix/trace/chat-turn"
import UiTraceSubagentsPreview from "../radix/trace/subagents"
import UiTraceChangeApprovalPreview from "../radix/trace/change-approval"
import UiTraceCitedSourcesPreview from "../radix/trace/cited-sources"
import UiTraceSupportCopilotPreview from "../radix/trace/support-copilot"
import UiTraceInstallSummaryPreview from "../radix/trace/install-summary"
import UiTraceCiPipelinePreview from "../radix/trace/ci-pipeline"
import UiTraceRequestSpansPreview from "../radix/trace/request-spans"
import UiTraceErrorBreadcrumbsPreview from "../radix/trace/error-breadcrumbs"
import UiTraceQueryPlanPreview from "../radix/trace/query-plan"
import UiTraceDataPipelinePreview from "../radix/trace/data-pipeline"
import UiTraceWebhookRetriesPreview from "../radix/trace/webhook-retries"
import UiTraceCsvImportPreview from "../radix/trace/csv-import"
import UiTraceSecurityAuditPreview from "../radix/trace/security-audit"
import UiTraceReviewFindingsPreview from "../radix/trace/review-findings"
import UiTraceEvalResultsPreview from "../radix/trace/eval-results"
import UiTraceAccessDecisionPreview from "../radix/trace/access-decision"
import UiTraceIdentityReviewPreview from "../radix/trace/identity-review"
import UiTraceDomainSetupPreview from "../radix/trace/domain-setup"
import UiTraceTranscodePreview from "../radix/trace/transcode"

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
import UiBreadcrumbStandardSource from "../radix/breadcrumb/standard.tsx?raw"
import UiBreadcrumbDropdownMenuSource from "../radix/breadcrumb/dropdown-menu.tsx?raw"
import UiBreadcrumbRouterLinkSource from "../radix/breadcrumb/router-link.tsx?raw"
import UiBreadcrumbSlashSeparatorSource from "../radix/breadcrumb/slash-separator.tsx?raw"
import UiBreadcrumbItemIconsSource from "../radix/breadcrumb/item-icons.tsx?raw"
import UiBreadcrumbStaticEllipsisSource from "../radix/breadcrumb/static-ellipsis.tsx?raw"
import UiBreadcrumbAvatarsSource from "../radix/breadcrumb/avatars.tsx?raw"
import UiBreadcrumbDoubleChevronSource from "../radix/breadcrumb/double-chevron.tsx?raw"
import UiBreadcrumbInCardSource from "../radix/breadcrumb/in-card.tsx?raw"
import UiBreadcrumbPillInFrameSource from "../radix/breadcrumb/pill-in-frame.tsx?raw"
import UiBreadcrumbCountBadgeSource from "../radix/breadcrumb/count-badge.tsx?raw"
import UiBreadcrumbHomeIconButtonSource from "../radix/breadcrumb/home-icon-button.tsx?raw"
import UiBreadcrumbBarSeparatorSource from "../radix/breadcrumb/bar-separator.tsx?raw"
import UiBreadcrumbButtonStyleSource from "../radix/breadcrumb/button-style.tsx?raw"
import UiBreadcrumbProjectDocumentSource from "../radix/breadcrumb/project-document.tsx?raw"
import UiBubbleSenderAlignmentSource from "../radix/bubble/sender-alignment.tsx?raw"
import UiBubbleAllVariantsSource from "../radix/bubble/all-variants.tsx?raw"
import UiBubbleGroupedMessagesSource from "../radix/bubble/grouped-messages.tsx?raw"
import UiBubbleReactionsSource from "../radix/bubble/reactions.tsx?raw"
import UiBubbleShowMoreSource from "../radix/bubble/show-more.tsx?raw"
import UiBubbleQuickRepliesSource from "../radix/bubble/quick-replies.tsx?raw"
import UiBubbleFormattedAnswerSource from "../radix/bubble/formatted-answer.tsx?raw"
import UiButtonSource from "../radix/button/default.tsx?raw"
import UiButtonStandardSource from "../radix/button/standard.tsx?raw"
import UiButtonSecondarySource from "../radix/button/secondary.tsx?raw"
import UiButtonOutlineSource from "../radix/button/outline.tsx?raw"
import UiButtonGhostSource from "../radix/button/ghost.tsx?raw"
import UiButtonDestructiveSource from "../radix/button/destructive.tsx?raw"
import UiButtonLinkSource from "../radix/button/link.tsx?raw"
import UiButtonExtraSmallSource from "../radix/button/extra-small.tsx?raw"
import UiButtonSmallSource from "../radix/button/small.tsx?raw"
import UiButtonLargeSource from "../radix/button/large.tsx?raw"
import UiButtonDisabledSource from "../radix/button/disabled.tsx?raw"
import UiButtonIconButtonSource from "../radix/button/icon-button.tsx?raw"
import UiButtonIconRightSource from "../radix/button/icon-right.tsx?raw"
import UiButtonLoadingStateSource from "../radix/button/loading-state.tsx?raw"
import UiButtonIconLeftSource from "../radix/button/icon-left.tsx?raw"
import UiButtonInvalidStateSource from "../radix/button/invalid-state.tsx?raw"
import UiButtonSecondaryIconLeftSource from "../radix/button/secondary-icon-left.tsx?raw"
import UiButtonSecondaryIconRightSource from "../radix/button/secondary-icon-right.tsx?raw"
import UiButtonOutlineIconLeftSource from "../radix/button/outline-icon-left.tsx?raw"
import UiButtonOutlineIconRightSource from "../radix/button/outline-icon-right.tsx?raw"
import UiButtonGhostIconLeftSource from "../radix/button/ghost-icon-left.tsx?raw"
import UiButtonGhostIconRightSource from "../radix/button/ghost-icon-right.tsx?raw"
import UiButtonDestructiveIconLeftSource from "../radix/button/destructive-icon-left.tsx?raw"
import UiButtonDestructiveIconRightSource from "../radix/button/destructive-icon-right.tsx?raw"
import UiButtonExtraSmallIconSource from "../radix/button/extra-small-icon.tsx?raw"
import UiButtonSmallIconSource from "../radix/button/small-icon.tsx?raw"
import UiButtonLargeIconSource from "../radix/button/large-icon.tsx?raw"
import UiButtonNextLinkSource from "../radix/button/next-link.tsx?raw"
import UiButtonLinkIconLeftSource from "../radix/button/link-icon-left.tsx?raw"
import UiButtonLinkIconRightSource from "../radix/button/link-icon-right.tsx?raw"
import UiButtonLargeIconLeftSource from "../radix/button/large-icon-left.tsx?raw"
import UiButtonLargeIconRightSource from "../radix/button/large-icon-right.tsx?raw"
import UiButtonOutlineInvalidSource from "../radix/button/outline-invalid.tsx?raw"
import UiButtonGhostInvalidSource from "../radix/button/ghost-invalid.tsx?raw"
import UiButtonEmailLoginSource from "../radix/button/email-login.tsx?raw"
import UiButtonMoreLessToggleSource from "../radix/button/more-less-toggle.tsx?raw"
import UiButtonOutlineSocialIconsSource from "../radix/button/outline-social-icons.tsx?raw"
import UiButtonLikeCountSource from "../radix/button/like-count.tsx?raw"
import UiButtonStarCountSource from "../radix/button/star-count.tsx?raw"
import UiButtonUnreadBadgeSource from "../radix/button/unread-badge.tsx?raw"
import UiButtonShortcutKeysSource from "../radix/button/shortcut-keys.tsx?raw"
import UiButtonCopyFeedbackSource from "../radix/button/copy-feedback.tsx?raw"
import UiButtonIconCopySource from "../radix/button/icon-copy.tsx?raw"
import UiButtonHamburgerToggleSource from "../radix/button/hamburger-toggle.tsx?raw"
import UiButtonAsyncActionSource from "../radix/button/async-action.tsx?raw"
import UiButtonInlineCountSource from "../radix/button/inline-count.tsx?raw"
import UiButtonStatusDotSource from "../radix/button/status-dot.tsx?raw"
import UiButtonStatusBadgeSource from "../radix/button/status-badge.tsx?raw"
import UiButtonNotificationBadgeSource from "../radix/button/notification-badge.tsx?raw"
import UiButtonGoBackSource from "../radix/button/go-back.tsx?raw"
import UiButtonAnimatedGoBackSource from "../radix/button/animated-go-back.tsx?raw"
import UiButtonExpandingButtonSource from "../radix/button/expanding-button.tsx?raw"
import UiButtonTitleDescriptionSource from "../radix/button/title-description.tsx?raw"
import UiButtonSlidingArrowSource from "../radix/button/sliding-arrow.tsx?raw"
import UiButtonShortcutTooltipSource from "../radix/button/shortcut-tooltip.tsx?raw"
import UiButtonAvatarSource from "../radix/button/avatar.tsx?raw"
import UiButtonOutlineAvatarSource from "../radix/button/outline-avatar.tsx?raw"
import UiButtonSmallAvatarSource from "../radix/button/small-avatar.tsx?raw"
import UiButtonSmallOutlineAvatarSource from "../radix/button/small-outline-avatar.tsx?raw"
import UiButtonSocialLoginStackSource from "../radix/button/social-login-stack.tsx?raw"
import UiButtonColoredSocialIconsSource from "../radix/button/colored-social-icons.tsx?raw"
import UiButtonThemeToggleSource from "../radix/button/theme-toggle.tsx?raw"
import UiButtonGroupSource from "../radix/button-group/default.tsx?raw"
import UiButtonGroupTwoButtonsSource from "../radix/button-group/two-buttons.tsx?raw"
import UiButtonGroupButtonInputSource from "../radix/button-group/button-input.tsx?raw"
import UiButtonGroupButtonsBadgeSource from "../radix/button-group/buttons-badge.tsx?raw"
import UiButtonGroupDropdownMenuSource from "../radix/button-group/dropdown-menu.tsx?raw"
import UiButtonGroupTeamActivitySource from "../radix/button-group/team-activity.tsx?raw"
import UiButtonGroupIconActionsSource from "../radix/button-group/icon-actions.tsx?raw"
import UiButtonGroupStatusIndicatorSource from "../radix/button-group/status-indicator.tsx?raw"
import UiButtonGroupLikeCounterSource from "../radix/button-group/like-counter.tsx?raw"
import UiButtonGroupNestedGroupsSource from "../radix/button-group/nested-groups.tsx?raw"
import UiButtonGroupPaginationSource from "../radix/button-group/pagination.tsx?raw"
import UiButtonGroupSplitPaginationSource from "../radix/button-group/split-pagination.tsx?raw"
import UiButtonGroupTextAlignmentSource from "../radix/button-group/text-alignment.tsx?raw"
import UiButtonGroupVerticalOrientationSource from "../radix/button-group/vertical-orientation.tsx?raw"
import UiButtonGroupVerticalToolPaletteSource from "../radix/button-group/vertical-tool-palette.tsx?raw"
import UiButtonGroupStarWithDropdownSource from "../radix/button-group/star-with-dropdown.tsx?raw"
import UiButtonGroupSearchFilterClearSource from "../radix/button-group/search-filter-clear.tsx?raw"
import UiButtonGroupConversationMenuSource from "../radix/button-group/conversation-menu.tsx?raw"
import UiButtonGroupGitSplitButtonSource from "../radix/button-group/git-split-button.tsx?raw"
import UiButtonGroupSearchWithMenuSource from "../radix/button-group/search-with-menu.tsx?raw"
import UiButtonGroupSearchWithButtonSource from "../radix/button-group/search-with-button.tsx?raw"
import UiButtonGroupFileNameMenuSource from "../radix/button-group/file-name-menu.tsx?raw"
import UiButtonGroupDisabledButtonSource from "../radix/button-group/disabled-button.tsx?raw"
import UiButtonGroupSeparatedButtonsSource from "../radix/button-group/separated-buttons.tsx?raw"
import UiButtonGroupDashboardViewsSource from "../radix/button-group/dashboard-views.tsx?raw"
import UiButtonGroupRatingScaleSource from "../radix/button-group/rating-scale.tsx?raw"
import UiButtonGroupUserSelectionSource from "../radix/button-group/user-selection.tsx?raw"
import UiButtonGroupStatusSelectSource from "../radix/button-group/status-select.tsx?raw"
import UiButtonGroupVolumeControlSource from "../radix/button-group/volume-control.tsx?raw"
import UiButtonGroupFollowerCountSource from "../radix/button-group/follower-count.tsx?raw"
import UiButtonGroupActiveCountSource from "../radix/button-group/active-count.tsx?raw"
import UiButtonGroupShareCaptionSource from "../radix/button-group/share-caption.tsx?raw"
import UiButtonGroupSortViewSource from "../radix/button-group/sort-view.tsx?raw"
import UiButtonGroupSelectControlsSource from "../radix/button-group/select-controls.tsx?raw"
import UiButtonGroupSegmentedControlSource from "../radix/button-group/segmented-control.tsx?raw"
import UiButtonGroupNumberedPaginationSource from "../radix/button-group/numbered-pagination.tsx?raw"
import UiButtonGroupViewSwitcherSource from "../radix/button-group/view-switcher.tsx?raw"
import UiButtonGroupZoomControlsSource from "../radix/button-group/zoom-controls.tsx?raw"
import UiButtonGroupMediaControlsSource from "../radix/button-group/media-controls.tsx?raw"
import UiButtonGroupSplitButtonSource from "../radix/button-group/split-button.tsx?raw"
import UiButtonGroupVerticalListSource from "../radix/button-group/vertical-list.tsx?raw"
import UiButtonGroupModelSelectorSource from "../radix/button-group/model-selector.tsx?raw"
import UiButtonGroupOrderTypeSource from "../radix/button-group/order-type.tsx?raw"
import UiButtonGroupBuySellHoldSource from "../radix/button-group/buy-sell-hold.tsx?raw"
import UiButtonGroupPipelineStageSource from "../radix/button-group/pipeline-stage.tsx?raw"
import UiButtonGroupEnvironmentSwitcherSource from "../radix/button-group/environment-switcher.tsx?raw"
import UiButtonGroupTimeIntervalSource from "../radix/button-group/time-interval.tsx?raw"
import UiButtonGroupReviewActionsSource from "../radix/button-group/review-actions.tsx?raw"
import UiButtonGroupExportToolbarSource from "../radix/button-group/export-toolbar.tsx?raw"
import UiButtonGroupVerticalNavSource from "../radix/button-group/vertical-nav.tsx?raw"
import UiButtonGroupFilterSortMoreSource from "../radix/button-group/filter-sort-more.tsx?raw"
import UiButtonGroupCreateMenuSource from "../radix/button-group/create-menu.tsx?raw"
import UiButtonGroupDashboardActionsSource from "../radix/button-group/dashboard-actions.tsx?raw"
import UiButtonGroupPublishControlsSource from "../radix/button-group/publish-controls.tsx?raw"
import UiButtonGroupServiceSelectorsSource from "../radix/button-group/service-selectors.tsx?raw"
import UiButtonGroupPayoutReleaseSource from "../radix/button-group/payout-release.tsx?raw"
import UiButtonGroupFileAttachmentSource from "../radix/button-group/file-attachment.tsx?raw"
import UiButtonGroupAgentModeSource from "../radix/button-group/agent-mode.tsx?raw"
import UiCalendarSource from "../radix/calendar/default.tsx?raw"
import UiCalendarStandardSource from "../radix/calendar/standard.tsx?raw"
import UiCalendarRangeSource from "../radix/calendar/range.tsx?raw"
import UiCalendarDisabledDatesSource from "../radix/calendar/disabled-dates.tsx?raw"
import UiCalendarMultipleDaysSource from "../radix/calendar/multiple-days.tsx?raw"
import UiCalendarCircularDaysSource from "../radix/calendar/circular-days.tsx?raw"
import UiCalendarCircularRangeSource from "../radix/calendar/circular-range.tsx?raw"
import UiCalendarRightNavigationSource from "../radix/calendar/right-navigation.tsx?raw"
import UiCalendarMonthYearSelectSource from "../radix/calendar/month-year-select.tsx?raw"
import UiCalendarYearSelectSource from "../radix/calendar/year-select.tsx?raw"
import UiCalendarWeekNumbersSource from "../radix/calendar/week-numbers.tsx?raw"
import UiCalendarCurrentMonthButtonSource from "../radix/calendar/current-month-button.tsx?raw"
import UiCalendarTodayButtonSource from "../radix/calendar/today-button.tsx?raw"
import UiCalendarYearViewSource from "../radix/calendar/year-view.tsx?raw"
import UiCalendarTimeSlotsSource from "../radix/calendar/time-slots.tsx?raw"
import UiCalendarDatePresetsSource from "../radix/calendar/date-presets.tsx?raw"
import UiCalendarRangePresetsSource from "../radix/calendar/range-presets.tsx?raw"
import UiCalendarPricingSource from "../radix/calendar/pricing.tsx?raw"
import UiCalendarForwardPresetsSource from "../radix/calendar/forward-presets.tsx?raw"
import UiCalendarAppointmentSource from "../radix/calendar/appointment.tsx?raw"
import UiCalendarTwoMonthsSource from "../radix/calendar/two-months.tsx?raw"
import UiCalendarTwoMonthRangeSource from "../radix/calendar/two-month-range.tsx?raw"
import UiCalendarEventListSource from "../radix/calendar/event-list.tsx?raw"
import UiCalendarLocalizedSource from "../radix/calendar/localized.tsx?raw"
import UiCalendarDatePickerSource from "../radix/calendar/date-picker.tsx?raw"
import UiCalendarDateRangePickerSource from "../radix/calendar/date-range-picker.tsx?raw"
import UiCalendarPickerYearViewSource from "../radix/calendar/picker-year-view.tsx?raw"
import UiCalendarPickerTimeSlotsSource from "../radix/calendar/picker-time-slots.tsx?raw"
import UiCalendarPickerPresetsSource from "../radix/calendar/picker-presets.tsx?raw"
import UiCalendarRangePickerPresetsSource from "../radix/calendar/range-picker-presets.tsx?raw"
import UiCalendarDateTimeRangeSource from "../radix/calendar/date-time-range.tsx?raw"
import UiCardSource from "../radix/card/default.tsx?raw"
import UiCardStandardSource from "../radix/card/standard.tsx?raw"
import UiCardBorderedHeaderSource from "../radix/card/bordered-header.tsx?raw"
import UiCardBorderSeparationSource from "../radix/card/border-separation.tsx?raw"
import UiCardHeaderFooterSource from "../radix/card/header-footer.tsx?raw"
import UiCardLinkActionSource from "../radix/card/link-action.tsx?raw"
import UiCardDropdownMenuSource from "../radix/card/dropdown-menu.tsx?raw"
import UiCardInsetImageSource from "../radix/card/inset-image.tsx?raw"
import UiCardImageHoverZoomSource from "../radix/card/image-hover-zoom.tsx?raw"
import UiCardFullImageSource from "../radix/card/full-image.tsx?raw"
import UiCardImageShadowFadeSource from "../radix/card/image-shadow-fade.tsx?raw"
import UiCardStackedDepthSource from "../radix/card/stacked-depth.tsx?raw"
import UiCardLoginFormSource from "../radix/card/login-form.tsx?raw"
import UiCardBillingUsageSource from "../radix/card/billing-usage.tsx?raw"
import UiCardDeploymentStatusSource from "../radix/card/deployment-status.tsx?raw"
import UiCardStatTrendSource from "../radix/card/stat-trend.tsx?raw"
import UiCardBadgeActionsSource from "../radix/card/badge-actions.tsx?raw"
import UiCardIconLinkSource from "../radix/card/icon-link.tsx?raw"
import UiCardLabelLinkSource from "../radix/card/label-link.tsx?raw"
import UiCarouselSource from "../radix/carousel/default.tsx?raw"
import UiCarouselStandardSource from "../radix/carousel/standard.tsx?raw"
import UiCarouselVerticalSource from "../radix/carousel/vertical.tsx?raw"
import UiCarouselMultipleItemsSource from "../radix/carousel/multiple-items.tsx?raw"
import UiCarouselResponsiveBasisSource from "../radix/carousel/responsive-basis.tsx?raw"
import UiCarouselAutoplaySource from "../radix/carousel/autoplay.tsx?raw"
import UiCarouselCenteredAlignmentSource from "../radix/carousel/centered-alignment.tsx?raw"
import UiCarouselCustomSpacingSource from "../radix/carousel/custom-spacing.tsx?raw"
import UiCarouselImageOverlaysSource from "../radix/carousel/image-overlays.tsx?raw"
import UiCarouselThumbnailStripSource from "../radix/carousel/thumbnail-strip.tsx?raw"
import UiCarouselOverlayThumbnailsSource from "../radix/carousel/overlay-thumbnails.tsx?raw"
import UiCarouselDotsNavigationSource from "../radix/carousel/dots-navigation.tsx?raw"
import UiChartSource from "../radix/chart/default.tsx?raw"
import UiChartBarsSource from "../radix/chart/bars.tsx?raw"
import UiChartMultiDatasetBarsSource from "../radix/chart/multi-dataset-bars.tsx?raw"
import UiChartDiagonalStripeBarsSource from "../radix/chart/diagonal-stripe-bars.tsx?raw"
import UiChartDottedBarsSource from "../radix/chart/dotted-bars.tsx?raw"
import UiChartStripedSolidBarsSource from "../radix/chart/striped-solid-bars.tsx?raw"
import UiChart3dGradientBarsSource from "../radix/chart/3d-gradient-bars.tsx?raw"
import UiChartGradientBarsSource from "../radix/chart/gradient-bars.tsx?raw"
import UiChartIsometricBarsSource from "../radix/chart/isometric-bars.tsx?raw"
import UiChartDottedSolidBarsSource from "../radix/chart/dotted-solid-bars.tsx?raw"
import UiChartDuotoneBarsSource from "../radix/chart/duotone-bars.tsx?raw"
import UiChartAnimatedMonochromeBarsSource from "../radix/chart/animated-monochrome-bars.tsx?raw"
import UiChartHorizontalBarsSource from "../radix/chart/horizontal-bars.tsx?raw"
import UiChartGradientAreaSource from "../radix/chart/gradient-area.tsx?raw"
import UiChartStackedDashedAreaSource from "../radix/chart/stacked-dashed-area.tsx?raw"
import UiChartDottedStepAreaSource from "../radix/chart/dotted-step-area.tsx?raw"
import UiChartGlowingDotAreaSource from "../radix/chart/glowing-dot-area.tsx?raw"
import UiChartForecastLineSource from "../radix/chart/forecast-line.tsx?raw"
import UiChartCrosshatchAreaSource from "../radix/chart/crosshatch-area.tsx?raw"
import UiChartDonutCenterTotalSource from "../radix/chart/donut-center-total.tsx?raw"
import UiChartDonutCenterStatsSource from "../radix/chart/donut-center-stats.tsx?raw"
import UiChartStripedPieSource from "../radix/chart/striped-pie.tsx?raw"
import UiChartActiveSegmentDonutSource from "../radix/chart/active-segment-donut.tsx?raw"
import UiChartGradientRadarSource from "../radix/chart/gradient-radar.tsx?raw"
import UiChartGlowingStrokeRadarSource from "../radix/chart/glowing-stroke-radar.tsx?raw"
import UiChartRadialScoresSource from "../radix/chart/radial-scores.tsx?raw"
import UiCheckboxSource from "../radix/checkbox/default.tsx?raw"
import UiCheckboxStandardSource from "../radix/checkbox/standard.tsx?raw"
import UiCheckboxDisabledSource from "../radix/checkbox/disabled.tsx?raw"
import UiCheckboxInvalidSource from "../radix/checkbox/invalid.tsx?raw"
import UiCheckboxIndeterminateSource from "../radix/checkbox/indeterminate.tsx?raw"
import UiCheckboxLabelDescriptionSource from "../radix/checkbox/label-description.tsx?raw"
import UiCheckboxColoredSource from "../radix/checkbox/colored.tsx?raw"
import UiCheckboxCircleTodoSource from "../radix/checkbox/circle-todo.tsx?raw"
import UiCheckboxGroupSource from "../radix/checkbox/group.tsx?raw"
import UiCheckboxSettingCardSource from "../radix/checkbox/setting-card.tsx?raw"
import UiCheckboxFrameGroupSource from "../radix/checkbox/frame-group.tsx?raw"
import UiCheckboxCardRowsSource from "../radix/checkbox/card-rows.tsx?raw"
import UiCheckboxIconCardRowsSource from "../radix/checkbox/icon-card-rows.tsx?raw"
import UiCheckboxCornerCheckTilesSource from "../radix/checkbox/corner-check-tiles.tsx?raw"
import UiCheckboxModuleTilesSource from "../radix/checkbox/module-tiles.tsx?raw"
import UiCheckboxAvatarCardSource from "../radix/checkbox/avatar-card.tsx?raw"
import UiCheckboxNestedPermissionsSource from "../radix/checkbox/nested-permissions.tsx?raw"
import UiCheckboxPaymentMethodSource from "../radix/checkbox/payment-method.tsx?raw"
import UiCheckboxHelpIconTooltipSource from "../radix/checkbox/help-icon-tooltip.tsx?raw"
import UiCheckboxBadgeGroupSource from "../radix/checkbox/badge-group.tsx?raw"
import UiCheckboxRightSideTooltipSource from "../radix/checkbox/right-side-tooltip.tsx?raw"
import UiCheckboxInlineGroupSource from "../radix/checkbox/inline-group.tsx?raw"
import UiCheckboxUppercaseBadgesSource from "../radix/checkbox/uppercase-badges.tsx?raw"
import UiCollapsibleSource from "../radix/collapsible/default.tsx?raw"
import UiCollapsibleStandardSource from "../radix/collapsible/standard.tsx?raw"
import UiCollapsibleCheckboxSettingsSource from "../radix/collapsible/checkbox-settings.tsx?raw"
import UiCollapsibleAnimatedCardSource from "../radix/collapsible/animated-card.tsx?raw"
import UiCollapsibleBottomTriggerSource from "../radix/collapsible/bottom-trigger.tsx?raw"
import UiCollapsibleFormFieldsSource from "../radix/collapsible/form-fields.tsx?raw"
import UiCollapsibleInFrameSource from "../radix/collapsible/in-frame.tsx?raw"
import UiCollapsibleNestedListSource from "../radix/collapsible/nested-list.tsx?raw"
import UiCollapsibleUserProfileSource from "../radix/collapsible/user-profile.tsx?raw"
import UiCollapsibleMultiLevelMenuSource from "../radix/collapsible/multi-level-menu.tsx?raw"
import UiCollapsibleFileTreeSource from "../radix/collapsible/file-tree.tsx?raw"
import UiComboboxSource from "../radix/combobox/default.tsx?raw"
import UiComboboxStandardSource from "../radix/combobox/standard.tsx?raw"
import UiComboboxDisabledSource from "../radix/combobox/disabled.tsx?raw"
import UiComboboxInvalidSource from "../radix/combobox/invalid.tsx?raw"
import UiComboboxClearButtonSource from "../radix/combobox/clear-button.tsx?raw"
import UiComboboxAutoHighlightSource from "../radix/combobox/auto-highlight.tsx?raw"
import UiComboboxGroupedOptionsSource from "../radix/combobox/grouped-options.tsx?raw"
import UiComboboxGroupSeparatorsSource from "../radix/combobox/group-separators.tsx?raw"
import UiComboboxLargeListSource from "../radix/combobox/large-list.tsx?raw"
import UiComboboxIconAddonSource from "../radix/combobox/icon-addon.tsx?raw"
import UiComboboxCountryPickerSource from "../radix/combobox/country-picker.tsx?raw"
import UiComboboxInFormSource from "../radix/combobox/in-form.tsx?raw"
import UiComboboxMultiSelectSource from "../radix/combobox/multi-select.tsx?raw"
import UiComboboxDisabledMultiSelectSource from "../radix/combobox/disabled-multi-select.tsx?raw"
import UiComboboxInvalidMultiSelectSource from "../radix/combobox/invalid-multi-select.tsx?raw"
import UiComboboxNonRemovableChipsSource from "../radix/combobox/non-removable-chips.tsx?raw"
import UiComboboxCustomItemsSource from "../radix/combobox/custom-items.tsx?raw"
import UiComboboxInDialogSource from "../radix/combobox/in-dialog.tsx?raw"
import UiComboboxCustomTriggerIconSource from "../radix/combobox/custom-trigger-icon.tsx?raw"
import UiComboboxUserTagsSource from "../radix/combobox/user-tags.tsx?raw"
import UiComboboxInvisibleTagsSource from "../radix/combobox/invisible-tags.tsx?raw"
import UiComboboxStatusChangeSource from "../radix/combobox/status-change.tsx?raw"
import UiComboboxPriorityChangeSource from "../radix/combobox/priority-change.tsx?raw"
import UiComboboxLeadSelectionSource from "../radix/combobox/lead-selection.tsx?raw"
import UiComboboxMemberSelectionSource from "../radix/combobox/member-selection.tsx?raw"
import UiComboboxDateSelectionSource from "../radix/combobox/date-selection.tsx?raw"
import UiComboboxLabelSelectionSource from "../radix/combobox/label-selection.tsx?raw"
import UiComboboxTeamSelectionSource from "../radix/combobox/team-selection.tsx?raw"
import UiComboboxAssigneeSelectionSource from "../radix/combobox/assignee-selection.tsx?raw"
import UiCommandSource from "../radix/command/default.tsx?raw"
import UiCommandStandardSource from "../radix/command/standard.tsx?raw"
import UiCommandShortcutsSource from "../radix/command/shortcuts.tsx?raw"
import UiCommandGroupsSource from "../radix/command/groups.tsx?raw"
import UiCommandManyGroupsSource from "../radix/command/many-groups.tsx?raw"
import UiCommandFileSearchSource from "../radix/command/file-search.tsx?raw"
import UiCommandUserSearchSource from "../radix/command/user-search.tsx?raw"
import UiCommandActionPaletteSource from "../radix/command/action-palette.tsx?raw"
import UiCommandRecentFavoritesSource from "../radix/command/recent-favorites.tsx?raw"
import UiContextMenuSource from "../radix/context-menu/default.tsx?raw"
import UiContextMenuStandardSource from "../radix/context-menu/standard.tsx?raw"
import UiContextMenuIconsSource from "../radix/context-menu/icons.tsx?raw"
import UiContextMenuShortcutsSource from "../radix/context-menu/shortcuts.tsx?raw"
import UiContextMenuNestedSubmenusSource from "../radix/context-menu/nested-submenus.tsx?raw"
import UiContextMenuLabelsSeparatorsSource from "../radix/context-menu/labels-separators.tsx?raw"
import UiContextMenuCheckboxItemsSource from "../radix/context-menu/checkbox-items.tsx?raw"
import UiContextMenuRadioItemsSource from "../radix/context-menu/radio-items.tsx?raw"
import UiContextMenuDestructiveActionsSource from "../radix/context-menu/destructive-actions.tsx?raw"
import UiContextMenuAlignmentSidesSource from "../radix/context-menu/alignment-sides.tsx?raw"
import UiContextMenuInsideDialogSource from "../radix/context-menu/inside-dialog.tsx?raw"
import UiDialogSource from "../radix/dialog/default.tsx?raw"
import UiDialogStandardSource from "../radix/dialog/standard.tsx?raw"
import UiDialogScrollableContentSource from "../radix/dialog/scrollable-content.tsx?raw"
import UiDialogStickyFooterSource from "../radix/dialog/sticky-footer.tsx?raw"
import UiDialogNoCloseButtonSource from "../radix/dialog/no-close-button.tsx?raw"
import UiDialogCustomCloseButtonSource from "../radix/dialog/custom-close-button.tsx?raw"
import UiDialogFullScreenSource from "../radix/dialog/full-screen.tsx?raw"
import UiDialogDestructiveConfirmationSource from "../radix/dialog/destructive-confirmation.tsx?raw"
import UiDialogCookieConsentSource from "../radix/dialog/cookie-consent.tsx?raw"
import UiDialogKeyboardShortcutsSource from "../radix/dialog/keyboard-shortcuts.tsx?raw"
import UiDialogFullWidthButtonSource from "../radix/dialog/full-width-button.tsx?raw"
import UiDrawerSource from "../radix/drawer/default.tsx?raw"
import UiDrawerScrollableContentSource from "../radix/drawer/scrollable-content.tsx?raw"
import UiDrawerRightSideSource from "../radix/drawer/right-side.tsx?raw"
import UiDrawerLeftSideSource from "../radix/drawer/left-side.tsx?raw"
import UiDrawerTopSideSource from "../radix/drawer/top-side.tsx?raw"
import UiDrawerAllSidesSource from "../radix/drawer/all-sides.tsx?raw"
import UiDropdownMenuSource from "../radix/dropdown-menu/default.tsx?raw"
import UiDropdownMenuStandardSource from "../radix/dropdown-menu/standard.tsx?raw"
import UiDropdownMenuOpeningPositionsSource from "../radix/dropdown-menu/opening-positions.tsx?raw"
import UiDropdownMenuIconsSource from "../radix/dropdown-menu/icons.tsx?raw"
import UiDropdownMenuKeyboardShortcutsSource from "../radix/dropdown-menu/keyboard-shortcuts.tsx?raw"
import UiDropdownMenuNestedSubmenusSource from "../radix/dropdown-menu/nested-submenus.tsx?raw"
import UiDropdownMenuCheckboxesSource from "../radix/dropdown-menu/checkboxes.tsx?raw"
import UiDropdownMenuRadioGroupsSource from "../radix/dropdown-menu/radio-groups.tsx?raw"
import UiDropdownMenuAllItemTypesSource from "../radix/dropdown-menu/all-item-types.tsx?raw"
import UiDropdownMenuUserProfileSource from "../radix/dropdown-menu/user-profile.tsx?raw"
import UiDropdownMenuWorkspaceSwitcherSource from "../radix/dropdown-menu/workspace-switcher.tsx?raw"
import UiDropdownMenuNotificationFeedSource from "../radix/dropdown-menu/notification-feed.tsx?raw"
import UiDropdownMenuRecordActionsSource from "../radix/dropdown-menu/record-actions.tsx?raw"
import UiDropdownMenuShareExportSource from "../radix/dropdown-menu/share-export.tsx?raw"
import UiDropdownMenuThemeStatusSource from "../radix/dropdown-menu/theme-status.tsx?raw"
import UiDropdownMenuUserCreateSource from "../radix/dropdown-menu/user-create.tsx?raw"
import UiDropdownMenuQuickActionsSource from "../radix/dropdown-menu/quick-actions.tsx?raw"
import UiDropdownMenuNotificationItemsSource from "../radix/dropdown-menu/notification-items.tsx?raw"
import UiDropdownMenuAiModelSelectorSource from "../radix/dropdown-menu/ai-model-selector.tsx?raw"
import UiEmptySource from "../radix/empty/default.tsx?raw"
import UiEmptyStandardSource from "../radix/empty/standard.tsx?raw"
import UiEmptyNoResultsSource from "../radix/empty/no-results.tsx?raw"
import UiEmptySearchInputSource from "../radix/empty/search-input.tsx?raw"
import UiEmptyAddButtonSource from "../radix/empty/add-button.tsx?raw"
import UiEmptyDocumentsSource from "../radix/empty/documents.tsx?raw"
import UiEmptyDashedUploadSource from "../radix/empty/dashed-upload.tsx?raw"
import UiEmptyInboxSource from "../radix/empty/inbox.tsx?raw"
import UiEmptyTeamMembersSource from "../radix/empty/team-members.tsx?raw"
import UiEmptyNoNotificationsSource from "../radix/empty/no-notifications.tsx?raw"
import UiEmptyAnalyticsSource from "../radix/empty/analytics.tsx?raw"
import UiEmptyBookmarksSource from "../radix/empty/bookmarks.tsx?raw"
import UiEmptyTasksSource from "../radix/empty/tasks.tsx?raw"
import UiEmptyAutomationsSource from "../radix/empty/automations.tsx?raw"
import UiEmptyCommentsBoardSource from "../radix/empty/comments-board.tsx?raw"
import UiEmptyStackedProductsSource from "../radix/empty/stacked-products.tsx?raw"
import UiEmptySearchFileCardsSource from "../radix/empty/search-file-cards.tsx?raw"
import UiEmptyChatBubblesSource from "../radix/empty/chat-bubbles.tsx?raw"
import UiEmptyCreditCardSource from "../radix/empty/credit-card.tsx?raw"
import UiEmptyConnectedNodesSource from "../radix/empty/connected-nodes.tsx?raw"
import UiEmptyEventsCalendarSource from "../radix/empty/events-calendar.tsx?raw"
import UiFieldSource from "../radix/field/default.tsx?raw"
import UiFieldStandardSource from "../radix/field/standard.tsx?raw"
import UiFieldInputTextareaSource from "../radix/field/input-textarea.tsx?raw"
import UiFieldSelectControlsSource from "../radix/field/select-controls.tsx?raw"
import UiFieldRadioCheckboxesSource from "../radix/field/radio-checkboxes.tsx?raw"
import UiFieldSliderSwitchSource from "../radix/field/slider-switch.tsx?raw"
import UiFieldOtpInputSource from "../radix/field/otp-input.tsx?raw"
import UiFieldSettingsFormSource from "../radix/field/settings-form.tsx?raw"
import UiFieldPermissionsSource from "../radix/field/permissions.tsx?raw"
import UiFieldResponsiveLayoutSource from "../radix/field/responsive-layout.tsx?raw"
import UiFieldNotificationPreferencesSource from "../radix/field/notification-preferences.tsx?raw"
import UiFieldValidationErrorsSource from "../radix/field/validation-errors.tsx?raw"
import UiFileUploadSource from "../radix/file-upload/default.tsx?raw"
import UiFileUploadStandardSource from "../radix/file-upload/standard.tsx?raw"
import UiFileUploadAvatarSource from "../radix/file-upload/avatar.tsx?raw"
import UiFileUploadDragDropSource from "../radix/file-upload/drag-drop.tsx?raw"
import UiFileUploadGallerySource from "../radix/file-upload/gallery.tsx?raw"
import UiFileUploadProgressListSource from "../radix/file-upload/progress-list.tsx?raw"
import UiFileUploadTableSource from "../radix/file-upload/table.tsx?raw"
import UiFileUploadProductImagesSource from "../radix/file-upload/product-images.tsx?raw"
import UiFileUploadSortableImagesSource from "../radix/file-upload/sortable-images.tsx?raw"
import UiFileUploadPreviewCardsSource from "../radix/file-upload/preview-cards.tsx?raw"
import UiFileUploadCoverImageSource from "../radix/file-upload/cover-image.tsx?raw"
import UiHoverCardSource from "../radix/hover-card/default.tsx?raw"
import UiHoverCardStandardSource from "../radix/hover-card/standard.tsx?raw"
import UiHoverCardPositionsSource from "../radix/hover-card/positions.tsx?raw"
import UiHoverCardProfileSource from "../radix/hover-card/profile.tsx?raw"
import UiHoverCardIconSource from "../radix/hover-card/icon.tsx?raw"
import UiHoverCardImageTextSource from "../radix/hover-card/image-text.tsx?raw"
import UiHoverCardInDialogSource from "../radix/hover-card/in-dialog.tsx?raw"
import UiHoverCardLiveTimestampSource from "../radix/hover-card/live-timestamp.tsx?raw"
import UiHoverCardReleaseNotesSource from "../radix/hover-card/release-notes.tsx?raw"
import UiInputSource from "../radix/input/default.tsx?raw"
import UiInputStandardSource from "../radix/input/standard.tsx?raw"
import UiInputWithLabelSource from "../radix/input/with-label.tsx?raw"
import UiInputWithDescriptionSource from "../radix/input/with-description.tsx?raw"
import UiInputDisabledSource from "../radix/input/disabled.tsx?raw"
import UiInputErrorMessageSource from "../radix/input/error-message.tsx?raw"
import UiInputCharacterCounterSource from "../radix/input/character-counter.tsx?raw"
import UiInputPasswordSource from "../radix/input/password.tsx?raw"
import UiInputPhoneSource from "../radix/input/phone.tsx?raw"
import UiInputUrlSource from "../radix/input/url.tsx?raw"
import UiInputNumberSource from "../radix/input/number.tsx?raw"
import UiInputDateSource from "../radix/input/date.tsx?raw"
import UiInputFileSource from "../radix/input/file.tsx?raw"
import UiInputRequiredIndicatorSource from "../radix/input/required-indicator.tsx?raw"
import UiInputTimeSource from "../radix/input/time.tsx?raw"
import UiInputContactFormSource from "../radix/input/contact-form.tsx?raw"
import UiInputLabelTooltipSource from "../radix/input/label-tooltip.tsx?raw"
import UiInputLabelBadgeSource from "../radix/input/label-badge.tsx?raw"
import UiInputOptionalBadgeSource from "../radix/input/optional-badge.tsx?raw"
import UiInputLinkToggleSource from "../radix/input/link-toggle.tsx?raw"
import UiInputHorizontalSource from "../radix/input/horizontal.tsx?raw"
import UiInputMultipleErrorsSource from "../radix/input/multiple-errors.tsx?raw"
import UiInputStrengthHintSource from "../radix/input/strength-hint.tsx?raw"
import UiInputStrengthMeterSource from "../radix/input/strength-meter.tsx?raw"
import UiInputPulsedBackgroundSource from "../radix/input/pulsed-background.tsx?raw"
import UiInputCustomFocusRingSource from "../radix/input/custom-focus-ring.tsx?raw"
import UiInputSubtleBackgroundSource from "../radix/input/subtle-background.tsx?raw"
import UiInputBottomBorderSource from "../radix/input/bottom-border.tsx?raw"
import UiInputColorSource from "../radix/input/color.tsx?raw"
import UiInputRangeSource from "../radix/input/range.tsx?raw"
import UiInputPillShapeSource from "../radix/input/pill-shape.tsx?raw"
import UiInputBorderlessSource from "../radix/input/borderless.tsx?raw"
import UiInputGroupSource from "../radix/input-group/default.tsx?raw"
import UiInputGroupStandardSource from "../radix/input-group/standard.tsx?raw"
import UiInputGroupDisabledSource from "../radix/input-group/disabled.tsx?raw"
import UiInputGroupInvalidSource from "../radix/input-group/invalid.tsx?raw"
import UiInputGroupPrefixIconSource from "../radix/input-group/prefix-icon.tsx?raw"
import UiInputGroupSuffixIconSource from "../radix/input-group/suffix-icon.tsx?raw"
import UiInputGroupPrefixSuffixIconsSource from "../radix/input-group/prefix-suffix-icons.tsx?raw"
import UiInputGroupPrefixTextSource from "../radix/input-group/prefix-text.tsx?raw"
import UiInputGroupSuffixTextSource from "../radix/input-group/suffix-text.tsx?raw"
import UiInputGroupPrefixSuffixTextSource from "../radix/input-group/prefix-suffix-text.tsx?raw"
import UiInputGroupActionButtonSource from "../radix/input-group/action-button.tsx?raw"
import UiInputGroupIconButtonSource from "../radix/input-group/icon-button.tsx?raw"
import UiInputGroupDropdownSelectSource from "../radix/input-group/dropdown-select.tsx?raw"
import UiInputGroupKeyboardShortcutSource from "../radix/input-group/keyboard-shortcut.tsx?raw"
import UiInputGroupTooltipActionSource from "../radix/input-group/tooltip-action.tsx?raw"
import UiInputGroupLoadingSpinnerSource from "../radix/input-group/loading-spinner.tsx?raw"
import UiInputGroupBlockStartAddonSource from "../radix/input-group/block-start-addon.tsx?raw"
import UiInputGroupCharacterLimitSource from "../radix/input-group/character-limit.tsx?raw"
import UiInputGroupAiChatToolbarSource from "../radix/input-group/ai-chat-toolbar.tsx?raw"
import UiInputGroupAiChatAttachmentsSource from "../radix/input-group/ai-chat-attachments.tsx?raw"
import UiInputGroupLabelUsageSource from "../radix/input-group/label-usage.tsx?raw"
import UiInputGroupMultipleEndActionsSource from "../radix/input-group/multiple-end-actions.tsx?raw"
import UiInputGroupPopoverTriggerSource from "../radix/input-group/popover-trigger.tsx?raw"
import UiInputGroupSparklesShortcutSource from "../radix/input-group/sparkles-shortcut.tsx?raw"
import UiInputGroupSuccessIndicatorSource from "../radix/input-group/success-indicator.tsx?raw"
import UiInputGroupResultsCountSource from "../radix/input-group/results-count.tsx?raw"
import UiInputGroupTextareaActionsSource from "../radix/input-group/textarea-actions.tsx?raw"
import UiInputGroupButtonGroupSource from "../radix/input-group/button-group.tsx?raw"
import UiInputGroupThreeDotMenuSource from "../radix/input-group/three-dot-menu.tsx?raw"
import UiInputGroupPillCategorySource from "../radix/input-group/pill-category.tsx?raw"
import UiInputGroupInlineAddonsSource from "../radix/input-group/inline-addons.tsx?raw"
import UiInputGroupInlineBlockEndSource from "../radix/input-group/inline-block-end.tsx?raw"
import UiInputGroupMemberRowSource from "../radix/input-group/member-row.tsx?raw"
import UiInputGroupProjectSaveSource from "../radix/input-group/project-save.tsx?raw"
import UiInputGroupPillAiPromptSource from "../radix/input-group/pill-ai-prompt.tsx?raw"
import UiInputGroupPasswordToggleSource from "../radix/input-group/password-toggle.tsx?raw"
import UiInputGroupApiRequestSource from "../radix/input-group/api-request.tsx?raw"
import UiInputGroupOrderSearchSource from "../radix/input-group/order-search.tsx?raw"
import UiInputGroupCompanySearchSource from "../radix/input-group/company-search.tsx?raw"
import UiInputGroupContactSearchSource from "../radix/input-group/contact-search.tsx?raw"
import UiInputGroupShareLinkSource from "../radix/input-group/share-link.tsx?raw"
import UiInputOtpSource from "../radix/input-otp/default.tsx?raw"
import UiInputOtpStandardSource from "../radix/input-otp/standard.tsx?raw"
import UiInputOtpDigitsOnlySource from "../radix/input-otp/digits-only.tsx?raw"
import UiInputOtpMultipleSeparatorsSource from "../radix/input-otp/multiple-separators.tsx?raw"
import UiInputOtpLettersNumbersSource from "../radix/input-otp/letters-numbers.tsx?raw"
import UiInputOtpPinCodeSource from "../radix/input-otp/pin-code.tsx?raw"
import UiInputOtpVerificationCardSource from "../radix/input-otp/verification-card.tsx?raw"
import UiItemSource from "../radix/item/default.tsx?raw"
import UiItemVariantsSource from "../radix/item/variants.tsx?raw"
import UiItemIconActionsSource from "../radix/item/icon-actions.tsx?raw"
import UiItemUserFollowSource from "../radix/item/user-follow.tsx?raw"
import UiItemNavigationLinksSource from "../radix/item/navigation-links.tsx?raw"
import UiItemStatusBadgesSource from "../radix/item/status-badges.tsx?raw"
import UiItemFileRowsSource from "../radix/item/file-rows.tsx?raw"
import UiItemKeyboardShortcutsSource from "../radix/item/keyboard-shortcuts.tsx?raw"
import UiItemSmallCountBadgesSource from "../radix/item/small-count-badges.tsx?raw"
import UiItemTeamRolesSource from "../radix/item/team-roles.tsx?raw"
import UiItemHeaderFooterSource from "../radix/item/header-footer.tsx?raw"
import UiItemIntegrationsSource from "../radix/item/integrations.tsx?raw"
import UiItemActivityFeedSource from "../radix/item/activity-feed.tsx?raw"
import UiKbdSource from "../radix/kbd/default.tsx?raw"
import UiKbdStandardKeysSource from "../radix/kbd/standard-keys.tsx?raw"
import UiKbdGroupedKeysSource from "../radix/kbd/grouped-keys.tsx?raw"
import UiKbdKeysWithIconsSource from "../radix/kbd/keys-with-icons.tsx?raw"
import UiKbdInInputSource from "../radix/kbd/in-input.tsx?raw"
import UiKbdInTooltipSource from "../radix/kbd/in-tooltip.tsx?raw"
import UiKbdShortcutListSource from "../radix/kbd/shortcut-list.tsx?raw"
import UiLabelSource from "../radix/label/default.tsx?raw"
import UiLabelStandardSource from "../radix/label/standard.tsx?raw"
import UiLabelCheckboxSource from "../radix/label/checkbox.tsx?raw"
import UiLabelTextareaSource from "../radix/label/textarea.tsx?raw"
import UiLabelDisabledSource from "../radix/label/disabled.tsx?raw"
import UiLabelRequiredSource from "../radix/label/required.tsx?raw"
import UiLabelOptionalSource from "../radix/label/optional.tsx?raw"
import UiLabelTooltipInfoSource from "../radix/label/tooltip-info.tsx?raw"
import UiLabelBadgeSource from "../radix/label/badge.tsx?raw"
import UiLabelCharacterCounterSource from "../radix/label/character-counter.tsx?raw"
import UiLabelHelperTextSource from "../radix/label/helper-text.tsx?raw"
import UiLabelErrorStateSource from "../radix/label/error-state.tsx?raw"
import UiLabelInlineEditSource from "../radix/label/inline-edit.tsx?raw"
import UiLabelStatusDotSource from "../radix/label/status-dot.tsx?raw"
import UiMarkerSource from "../radix/marker/default.tsx?raw"
import UiMarkerStandardVariantsSource from "../radix/marker/standard-variants.tsx?raw"
import UiMarkerToolCallLogSource from "../radix/marker/tool-call-log.tsx?raw"
import UiMarkerRunStatusSource from "../radix/marker/run-status.tsx?raw"
import UiMarkerPhaseSeparatorsSource from "../radix/marker/phase-separators.tsx?raw"
import UiMarkerChangedFilesSource from "../radix/marker/changed-files.tsx?raw"
import UiMarkerLinksActionSource from "../radix/marker/links-action.tsx?raw"
import UiMenubarSource from "../radix/menubar/default.tsx?raw"
import UiMenubarStandardSource from "../radix/menubar/standard.tsx?raw"
import UiMenubarSubmenusSource from "../radix/menubar/submenus.tsx?raw"
import UiMenubarCheckboxRadioSource from "../radix/menubar/checkbox-radio.tsx?raw"
import UiMenubarIconsSource from "../radix/menubar/icons.tsx?raw"
import UiMenubarFormattingMediaSource from "../radix/menubar/formatting-media.tsx?raw"
import UiMessageSource from "../radix/message/default.tsx?raw"
import UiMessageTwoSidedChatSource from "../radix/message/two-sided-chat.tsx?raw"
import UiMessageAvatarsSource from "../radix/message/avatars.tsx?raw"
import UiMessageSenderStatusSource from "../radix/message/sender-status.tsx?raw"
import UiMessageReplyActionsSource from "../radix/message/reply-actions.tsx?raw"
import UiMessageSharedFilesSource from "../radix/message/shared-files.tsx?raw"
import UiMessageConsecutiveMessagesSource from "../radix/message/consecutive-messages.tsx?raw"
import UiMessageStreamingReplySource from "../radix/message/streaming-reply.tsx?raw"
import UiMessageScrollerSource from "../radix/message-scroller/default.tsx?raw"
import UiMessageScrollerJumpToLatestSource from "../radix/message-scroller/jump-to-latest.tsx?raw"
import UiMessageScrollerStreamingReplySource from "../radix/message-scroller/streaming-reply.tsx?raw"
import UiMessageScrollerAnchoredTurnSource from "../radix/message-scroller/anchored-turn.tsx?raw"
import UiMessageScrollerOpeningPositionSource from "../radix/message-scroller/opening-position.tsx?raw"
import UiMessageScrollerLoadEarlierSource from "../radix/message-scroller/load-earlier.tsx?raw"
import UiMessageScrollerThreadNavigatorSource from "../radix/message-scroller/thread-navigator.tsx?raw"
import UiNativeSelectSource from "../radix/native-select/default.tsx?raw"
import UiNativeSelectStandardSource from "../radix/native-select/standard.tsx?raw"
import UiNativeSelectGroupedOptionsSource from "../radix/native-select/grouped-options.tsx?raw"
import UiNativeSelectSmallSource from "../radix/native-select/small.tsx?raw"
import UiNativeSelectFieldWithLabelSource from "../radix/native-select/field-with-label.tsx?raw"
import UiNativeSelectDisabledSource from "../radix/native-select/disabled.tsx?raw"
import UiNativeSelectInvalidSource from "../radix/native-select/invalid.tsx?raw"
import UiNavigationMenuSource from "../radix/navigation-menu/default.tsx?raw"
import UiNavigationMenuStandardSource from "../radix/navigation-menu/standard.tsx?raw"
import UiNavigationMenuGridLayoutSource from "../radix/navigation-menu/grid-layout.tsx?raw"
import UiNavigationMenuWithIconsSource from "../radix/navigation-menu/with-icons.tsx?raw"
import UiNavigationMenuLearnMoreButtonSource from "../radix/navigation-menu/learn-more-button.tsx?raw"
import UiPaginationSource from "../radix/pagination/default.tsx?raw"
import UiPaginationStandardSource from "../radix/pagination/standard.tsx?raw"
import UiPaginationNoLabelsSource from "../radix/pagination/no-labels.tsx?raw"
import UiPaginationHoverBorderSource from "../radix/pagination/hover-border.tsx?raw"
import UiPaginationCircleButtonsSource from "../radix/pagination/circle-buttons.tsx?raw"
import UiPaginationCompactGoToSource from "../radix/pagination/compact-go-to.tsx?raw"
import UiPaginationInCardSource from "../radix/pagination/in-card.tsx?raw"
import UiPaginationArrowLinksSource from "../radix/pagination/arrow-links.tsx?raw"
import UiPaginationCenteredPageInfoSource from "../radix/pagination/centered-page-info.tsx?raw"
import UiPaginationLeftPageInfoSource from "../radix/pagination/left-page-info.tsx?raw"
import UiPaginationTrailingEllipsisSource from "../radix/pagination/trailing-ellipsis.tsx?raw"
import UiPaginationOutlineStripSource from "../radix/pagination/outline-strip.tsx?raw"
import UiPaginationRowsPerPageSource from "../radix/pagination/rows-per-page.tsx?raw"
import UiPaginationPageSelectSource from "../radix/pagination/page-select.tsx?raw"
import UiPaginationFullWidthGoToSource from "../radix/pagination/full-width-go-to.tsx?raw"
import UiPaginationInfoAndPerPageSource from "../radix/pagination/info-and-per-page.tsx?raw"
import UiPopoverSource from "../radix/popover/default.tsx?raw"
import UiPopoverStandardSource from "../radix/popover/standard.tsx?raw"
import UiPopoverOpeningSidesSource from "../radix/popover/opening-sides.tsx?raw"
import UiPopoverInlineFormSource from "../radix/popover/inline-form.tsx?raw"
import UiPopoverAlignmentSource from "../radix/popover/alignment.tsx?raw"
import UiPopoverInDialogSource from "../radix/popover/in-dialog.tsx?raw"
import UiPopoverProfileCardSource from "../radix/popover/profile-card.tsx?raw"
import UiPopoverFeaturePitchSource from "../radix/popover/feature-pitch.tsx?raw"
import UiPopoverMediaPreviewSource from "../radix/popover/media-preview.tsx?raw"
import UiPopoverRelativeTimeSource from "../radix/popover/relative-time.tsx?raw"
import UiPopoverControlsSource from "../radix/popover/controls.tsx?raw"
import UiPopoverStepTourSource from "../radix/popover/step-tour.tsx?raw"
import UiProgressSource from "../radix/progress/default.tsx?raw"
import UiProgressStandardSource from "../radix/progress/standard.tsx?raw"
import UiProgressSmallSource from "../radix/progress/small.tsx?raw"
import UiProgressLargeSource from "../radix/progress/large.tsx?raw"
import UiProgressStatusMessagesSource from "../radix/progress/status-messages.tsx?raw"
import UiProgressFileUploadsSource from "../radix/progress/file-uploads.tsx?raw"
import UiProgressWithSliderSource from "../radix/progress/with-slider.tsx?raw"
import UiProgressMultiStepSource from "../radix/progress/multi-step.tsx?raw"
import UiProgressCustomColorsSource from "../radix/progress/custom-colors.tsx?raw"
import UiQuestionnaireSource from "../radix/questionnaire/default.tsx?raw"
import UiQuestionnaireGuidedSetupSource from "../radix/questionnaire/guided-setup.tsx?raw"
import UiQuestionnaireMultiSelectSource from "../radix/questionnaire/multi-select.tsx?raw"
import UiQuestionnaireWriteInAnswerSource from "../radix/questionnaire/write-in-answer.tsx?raw"
import UiQuestionnaireSegmentedProgressSource from "../radix/questionnaire/segmented-progress.tsx?raw"
import UiQuestionnaireOptionalSkipSource from "../radix/questionnaire/optional-skip.tsx?raw"
import UiQuestionnaireCrossQuestionRuleSource from "../radix/questionnaire/cross-question-rule.tsx?raw"
import UiQuestionnaireConditionalBranchSource from "../radix/questionnaire/conditional-branch.tsx?raw"
import UiRadioGroupSource from "../radix/radio-group/default.tsx?raw"
import UiRadioGroupStandardSource from "../radix/radio-group/standard.tsx?raw"
import UiRadioGroupDisabledSource from "../radix/radio-group/disabled.tsx?raw"
import UiRadioGroupDescriptionsSource from "../radix/radio-group/descriptions.tsx?raw"
import UiRadioGroupInvalidSource from "../radix/radio-group/invalid.tsx?raw"
import UiRadioGroupColoredSource from "../radix/radio-group/colored.tsx?raw"
import UiRadioGroupLegendDescriptionSource from "../radix/radio-group/legend-description.tsx?raw"
import UiRadioGroupDescriptiveCardsSource from "../radix/radio-group/descriptive-cards.tsx?raw"
import UiRadioGroupCardSeparatorsSource from "../radix/radio-group/card-separators.tsx?raw"
import UiRadioGroupCardIconsSource from "../radix/radio-group/card-icons.tsx?raw"
import UiRadioGroupInFrameSource from "../radix/radio-group/in-frame.tsx?raw"
import UiRadioGroupGridLayoutSource from "../radix/radio-group/grid-layout.tsx?raw"
import UiRadioGroupAvatarCardsSource from "../radix/radio-group/avatar-cards.tsx?raw"
import UiRadioGroupPaymentMethodsSource from "../radix/radio-group/payment-methods.tsx?raw"
import UiRadioGroupTooltipInfoSource from "../radix/radio-group/tooltip-info.tsx?raw"
import UiRadioGroupBadgesSource from "../radix/radio-group/badges.tsx?raw"
import UiRadioGroupInlineHorizontalSource from "../radix/radio-group/inline-horizontal.tsx?raw"
import UiRadioGroupPricingTiersSource from "../radix/radio-group/pricing-tiers.tsx?raw"
import UiResizableSource from "../radix/resizable/default.tsx?raw"
import UiResizableHorizontalLayoutSource from "../radix/resizable/horizontal-layout.tsx?raw"
import UiResizableVerticalLayoutSource from "../radix/resizable/vertical-layout.tsx?raw"
import UiResizableMixedDirectionsSource from "../radix/resizable/mixed-directions.tsx?raw"
import UiResizableNestedGripsSource from "../radix/resizable/nested-grips.tsx?raw"
import UiResizableAnimatedPillSource from "../radix/resizable/animated-pill.tsx?raw"
import UiResizableSpringPillSource from "../radix/resizable/spring-pill.tsx?raw"
import UiResizableCapsuleExpansionSource from "../radix/resizable/capsule-expansion.tsx?raw"
import UiResizableNestedPillsSource from "../radix/resizable/nested-pills.tsx?raw"
import UiResizableThreePanelsSource from "../radix/resizable/three-panels.tsx?raw"
import UiResizableSizeTrackingSource from "../radix/resizable/size-tracking.tsx?raw"
import UiScrollAreaSource from "../radix/scroll-area/default.tsx?raw"
import UiScrollAreaStandardSource from "../radix/scroll-area/standard.tsx?raw"
import UiScrollAreaHorizontalSource from "../radix/scroll-area/horizontal.tsx?raw"
import UiScrollAreaBothScrollbarsSource from "../radix/scroll-area/both-scrollbars.tsx?raw"
import UiScrollAreaFadeEdgesSource from "../radix/scroll-area/fade-edges.tsx?raw"
import UiScrollAreaScrollbarGutterSource from "../radix/scroll-area/scrollbar-gutter.tsx?raw"
import UiSelectSource from "../radix/select/default.tsx?raw"
import UiSelectStandardSource from "../radix/select/standard.tsx?raw"
import UiSelectIconsSource from "../radix/select/icons.tsx?raw"
import UiSelectGroupedLabelsSource from "../radix/select/grouped-labels.tsx?raw"
import UiSelectLargeListSource from "../radix/select/large-list.tsx?raw"
import UiSelectSmallTriggerSource from "../radix/select/small-trigger.tsx?raw"
import UiSelectPlanPickerSource from "../radix/select/plan-picker.tsx?raw"
import UiSelectDisabledItemSource from "../radix/select/disabled-item.tsx?raw"
import UiSelectFieldWithLabelSource from "../radix/select/field-with-label.tsx?raw"
import UiSelectInvalidSource from "../radix/select/invalid.tsx?raw"
import UiSelectDisabledSource from "../radix/select/disabled.tsx?raw"
import UiSelectInDialogSource from "../radix/select/in-dialog.tsx?raw"
import UiSelectMultipleSelectionSource from "../radix/select/multiple-selection.tsx?raw"
import UiSelectInlineWithInputSource from "../radix/select/inline-with-input.tsx?raw"
import UiSelectWithButtonSource from "../radix/select/with-button.tsx?raw"
import UiSelectItemAlignedSource from "../radix/select/item-aligned.tsx?raw"
import UiSelectAccessLevelsSource from "../radix/select/access-levels.tsx?raw"
import UiSelectStatusBulletsSource from "../radix/select/status-bullets.tsx?raw"
import UiSelectUserAvatarsSource from "../radix/select/user-avatars.tsx?raw"
import UiSelectStatusBadgesSource from "../radix/select/status-badges.tsx?raw"
import UiSelectLeftIndicatorSource from "../radix/select/left-indicator.tsx?raw"
import UiSelectClearButtonSource from "../radix/select/clear-button.tsx?raw"
import UiSelectCustomChevronsSource from "../radix/select/custom-chevrons.tsx?raw"
import UiSelectOverlappingDotsSource from "../radix/select/overlapping-dots.tsx?raw"
import UiSelectGroupedSeparatorsSource from "../radix/select/grouped-separators.tsx?raw"
import UiSelectCountryFlagsSource from "../radix/select/country-flags.tsx?raw"
import UiSelectStatusFilterSource from "../radix/select/status-filter.tsx?raw"
import UiSelectOptionDescriptionsSource from "../radix/select/option-descriptions.tsx?raw"
import UiSelectTimezoneOffsetsSource from "../radix/select/timezone-offsets.tsx?raw"
import UiSelectTeamAssignmentSource from "../radix/select/team-assignment.tsx?raw"
import UiSelectPriorityBadgesSource from "../radix/select/priority-badges.tsx?raw"
import UiSelectFontPreviewSource from "../radix/select/font-preview.tsx?raw"
import UiSelectCategoryIconsSource from "../radix/select/category-icons.tsx?raw"
import UiSelectSizeScaleSource from "../radix/select/size-scale.tsx?raw"
import UiSeparatorSource from "../radix/separator/default.tsx?raw"
import UiSeparatorHorizontalSource from "../radix/separator/horizontal.tsx?raw"
import UiSeparatorVerticalSource from "../radix/separator/vertical.tsx?raw"
import UiSeparatorGroupedMenuItemsSource from "../radix/separator/grouped-menu-items.tsx?raw"
import UiSeparatorListRowsSource from "../radix/separator/list-rows.tsx?raw"
import UiSeparatorCenteredLabelSource from "../radix/separator/centered-label.tsx?raw"
import UiSeparatorOrderSummarySource from "../radix/separator/order-summary.tsx?raw"
import UiSheetSource from "../radix/sheet/default.tsx?raw"
import UiSheetProfileEditorSource from "../radix/sheet/profile-editor.tsx?raw"
import UiSheetNoCloseButtonSource from "../radix/sheet/no-close-button.tsx?raw"
import UiSheetAnySideSource from "../radix/sheet/any-side.tsx?raw"
import UiSheetScrollableContentSource from "../radix/sheet/scrollable-content.tsx?raw"
import UiSidebarSource from "../radix/sidebar/default.tsx?raw"
import UiSidebarWorkspaceSwitcherSource from "../radix/sidebar/workspace-switcher.tsx?raw"
import UiSidebarIconRailSource from "../radix/sidebar/icon-rail.tsx?raw"
import UiSidebarDocsNavigationSource from "../radix/sidebar/docs-navigation.tsx?raw"
import UiSidebarInspectorPanelSource from "../radix/sidebar/inspector-panel.tsx?raw"
import UiSidebarFilterLoadingSource from "../radix/sidebar/filter-loading.tsx?raw"
import UiSkeletonSource from "../radix/skeleton/default.tsx?raw"
import UiSkeletonAvatarInfoSource from "../radix/skeleton/avatar-info.tsx?raw"
import UiSkeletonCardSource from "../radix/skeleton/card.tsx?raw"
import UiSkeletonTextParagraphsSource from "../radix/skeleton/text-paragraphs.tsx?raw"
import UiSkeletonFormSource from "../radix/skeleton/form.tsx?raw"
import UiSkeletonDataTableSource from "../radix/skeleton/data-table.tsx?raw"
import UiSkeletonStatsRowSource from "../radix/skeleton/stats-row.tsx?raw"
import UiSkeletonListWithActionsSource from "../radix/skeleton/list-with-actions.tsx?raw"
import UiSkeletonCardGridSource from "../radix/skeleton/card-grid.tsx?raw"
import UiSkeletonProfilePageSource from "../radix/skeleton/profile-page.tsx?raw"
import UiSkeletonChatMessagesSource from "../radix/skeleton/chat-messages.tsx?raw"
import UiSliderSource from "../radix/slider/default.tsx?raw"
import UiSliderStandardSource from "../radix/slider/standard.tsx?raw"
import UiSliderDisabledSource from "../radix/slider/disabled.tsx?raw"
import UiSliderMultipleThumbsSource from "../radix/slider/multiple-thumbs.tsx?raw"
import UiSliderVerticalSource from "../radix/slider/vertical.tsx?raw"
import UiSliderControlledValueSource from "../radix/slider/controlled-value.tsx?raw"
import UiSliderRangeSource from "../radix/slider/range.tsx?raw"
import UiSliderNumberInputSource from "../radix/slider/number-input.tsx?raw"
import UiSliderColorTemperatureSource from "../radix/slider/color-temperature.tsx?raw"
import UiSliderReferenceLabelsSource from "../radix/slider/reference-labels.tsx?raw"
import UiSliderTickMarksSource from "../radix/slider/tick-marks.tsx?raw"
import UiSliderValueTooltipSource from "../radix/slider/value-tooltip.tsx?raw"
import UiSliderEmojiRatingSource from "../radix/slider/emoji-rating.tsx?raw"
import UiSonnerSource from "../radix/sonner/default.tsx?raw"
import UiSonnerStandardSource from "../radix/sonner/standard.tsx?raw"
import UiSonnerWithDescriptionSource from "../radix/sonner/with-description.tsx?raw"
import UiSonnerPositionsSource from "../radix/sonner/positions.tsx?raw"
import UiSonnerVariantIconsSource from "../radix/sonner/variant-icons.tsx?raw"
import UiSonnerDurationsSource from "../radix/sonner/durations.tsx?raw"
import UiSonnerActionButtonSource from "../radix/sonner/action-button.tsx?raw"
import UiSonnerPromiseSource from "../radix/sonner/promise.tsx?raw"
import UiSonnerActionCancelSource from "../radix/sonner/action-cancel.tsx?raw"
import UiSonnerRichContentSource from "../radix/sonner/rich-content.tsx?raw"
import UiSonnerUploadProgressSource from "../radix/sonner/upload-progress.tsx?raw"
import UiSonnerStatusAlertSource from "../radix/sonner/status-alert.tsx?raw"
import UiSonnerAccentBorderSource from "../radix/sonner/accent-border.tsx?raw"
import UiSonnerInvertSuccessSource from "../radix/sonner/invert-success.tsx?raw"
import UiSonnerInvertErrorSource from "../radix/sonner/invert-error.tsx?raw"
import UiSonnerInvertInfoSource from "../radix/sonner/invert-info.tsx?raw"
import UiSonnerInvertWarningSource from "../radix/sonner/invert-warning.tsx?raw"
import UiSonnerInvertAvatarGroupSource from "../radix/sonner/invert-avatar-group.tsx?raw"
import UiSonnerCloseTopRightSource from "../radix/sonner/close-top-right.tsx?raw"
import UiSonnerCustomIconSource from "../radix/sonner/custom-icon.tsx?raw"
import UiSonnerIntegrationSource from "../radix/sonner/integration.tsx?raw"
import UiSonnerUpdatableSource from "../radix/sonner/updatable.tsx?raw"
import UiSpinnerSource from "../radix/spinner/default.tsx?raw"
import UiSpinnerStandardSource from "../radix/spinner/standard.tsx?raw"
import UiSpinnerInButtonsSource from "../radix/spinner/in-buttons.tsx?raw"
import UiSpinnerInBadgesSource from "../radix/spinner/in-badges.tsx?raw"
import UiSpinnerInInputGroupSource from "../radix/spinner/in-input-group.tsx?raw"
import UiSpinnerInEmptyStateSource from "../radix/spinner/in-empty-state.tsx?raw"
import UiSpinnerPendingButtonsSource from "../radix/spinner/pending-buttons.tsx?raw"
import UiSpinnerOverlayWithCaptionSource from "../radix/spinner/overlay-with-caption.tsx?raw"
import UiSpinnerFullPageSource from "../radix/spinner/full-page.tsx?raw"
import UiSpinnerInlineTextSource from "../radix/spinner/inline-text.tsx?raw"
import UiSpinnerLoadingDotsSource from "../radix/spinner/loading-dots.tsx?raw"
import UiSpinnerCardOverlaySource from "../radix/spinner/card-overlay.tsx?raw"
import UiSpinnerColorVariantsSource from "../radix/spinner/color-variants.tsx?raw"
import UiSwitchSource from "../radix/switch/default.tsx?raw"
import UiSwitchStandardSource from "../radix/switch/standard.tsx?raw"
import UiSwitchWithDescriptionSource from "../radix/switch/with-description.tsx?raw"
import UiSwitchDisabledSource from "../radix/switch/disabled.tsx?raw"
import UiSwitchSizesSource from "../radix/switch/sizes.tsx?raw"
import UiSwitchSwitchGroupSource from "../radix/switch/switch-group.tsx?raw"
import UiSwitchCardSeparatorsSource from "../radix/switch/card-separators.tsx?raw"
import UiSwitchCardWithIconsSource from "../radix/switch/card-with-icons.tsx?raw"
import UiSwitchInFrameSource from "../radix/switch/in-frame.tsx?raw"
import UiSwitchTooltipInfoSource from "../radix/switch/tooltip-info.tsx?raw"
import UiSwitchWithBadgesSource from "../radix/switch/with-badges.tsx?raw"
import UiSwitchColoredSource from "../radix/switch/colored.tsx?raw"
import UiSwitchDestructiveConfirmSource from "../radix/switch/destructive-confirm.tsx?raw"
import UiSwitchCompactTableSource from "../radix/switch/compact-table.tsx?raw"
import UiSwitchCardGridSource from "../radix/switch/card-grid.tsx?raw"
import UiTableSource from "../radix/table/default.tsx?raw"
import UiTableStandardSource from "../radix/table/standard.tsx?raw"
import UiTableWithFooterSource from "../radix/table/with-footer.tsx?raw"
import UiTableStatusBadgesSource from "../radix/table/status-badges.tsx?raw"
import UiTableActionsColumnSource from "../radix/table/actions-column.tsx?raw"
import UiTableInteractiveRowsSource from "../radix/table/interactive-rows.tsx?raw"
import UiTableTeamMembersSource from "../radix/table/team-members.tsx?raw"
import UiTableOrdersSource from "../radix/table/orders.tsx?raw"
import UiTableProjectsSource from "../radix/table/projects.tsx?raw"
import UiTableActivityLogSource from "../radix/table/activity-log.tsx?raw"
import UiTableSubscriptionsSource from "../radix/table/subscriptions.tsx?raw"
import UiTableInventorySource from "../radix/table/inventory.tsx?raw"
import UiTableApiKeysSource from "../radix/table/api-keys.tsx?raw"
import UiTableFileManagerSource from "../radix/table/file-manager.tsx?raw"
import UiTableIssuesSource from "../radix/table/issues.tsx?raw"
import UiTableLeaderboardSource from "../radix/table/leaderboard.tsx?raw"
import UiTableEmployeeProfileSource from "../radix/table/employee-profile.tsx?raw"
import UiTableServerConfigSource from "../radix/table/server-config.tsx?raw"
import UiTabsSource from "../radix/tabs/default.tsx?raw"
import UiTabsStandardSource from "../radix/tabs/standard.tsx?raw"
import UiTabsLineVariantSource from "../radix/tabs/line-variant.tsx?raw"
import UiTabsVerticalSource from "../radix/tabs/vertical.tsx?raw"
import UiTabsVerticalLineSource from "../radix/tabs/vertical-line.tsx?raw"
import UiTabsIconsSource from "../radix/tabs/icons.tsx?raw"
import UiTabsFullWidthIconsSource from "../radix/tabs/full-width-icons.tsx?raw"
import UiTabsBadgeCountsSource from "../radix/tabs/badge-counts.tsx?raw"
import UiTabsSideListIconsSource from "../radix/tabs/side-list-icons.tsx?raw"
import UiTabsSegmentedControlSource from "../radix/tabs/segmented-control.tsx?raw"
import UiTextareaSource from "../radix/textarea/default.tsx?raw"
import UiTextareaStandardSource from "../radix/textarea/standard.tsx?raw"
import UiTextareaInvalidSource from "../radix/textarea/invalid.tsx?raw"
import UiTextareaWithLabelSource from "../radix/textarea/with-label.tsx?raw"
import UiTextareaWithDescriptionSource from "../radix/textarea/with-description.tsx?raw"
import UiTextareaDisabledSource from "../radix/textarea/disabled.tsx?raw"
import UiTextareaAutoResizeCounterSource from "../radix/textarea/auto-resize-counter.tsx?raw"
import UiToggleSource from "../radix/toggle/default.tsx?raw"
import UiToggleStandardSource from "../radix/toggle/standard.tsx?raw"
import UiToggleOutlineSource from "../radix/toggle/outline.tsx?raw"
import UiToggleTextSizesSource from "../radix/toggle/text-sizes.tsx?raw"
import UiToggleButtonComparisonSource from "../radix/toggle/button-comparison.tsx?raw"
import UiToggleDisabledTextSource from "../radix/toggle/disabled-text.tsx?raw"
import UiToggleIconLabelSource from "../radix/toggle/icon-label.tsx?raw"
import UiToggleCountBadgeSource from "../radix/toggle/count-badge.tsx?raw"
import UiToggleIconSizesSource from "../radix/toggle/icon-sizes.tsx?raw"
import UiToggleIconSwapSource from "../radix/toggle/icon-swap.tsx?raw"
import UiToggleLabelSwapSource from "../radix/toggle/label-swap.tsx?raw"
import UiToggleReactionsSource from "../radix/toggle/reactions.tsx?raw"
import UiToggleTooltipSource from "../radix/toggle/tooltip.tsx?raw"
import UiToggleDisabledIconsSource from "../radix/toggle/disabled-icons.tsx?raw"
import UiToggleMuteButtonSource from "../radix/toggle/mute-button.tsx?raw"
import UiToggleGroupSource from "../radix/toggle-group/default.tsx?raw"
import UiToggleGroupStandardSource from "../radix/toggle-group/standard.tsx?raw"
import UiToggleGroupOutlineSource from "../radix/toggle-group/outline.tsx?raw"
import UiToggleGroupSizesSource from "../radix/toggle-group/sizes.tsx?raw"
import UiToggleGroupCustomSpacingSource from "../radix/toggle-group/custom-spacing.tsx?raw"
import UiToggleGroupFilterControlSource from "../radix/toggle-group/filter-control.tsx?raw"
import UiToggleGroupVerticalSource from "../radix/toggle-group/vertical.tsx?raw"
import UiToggleGroupTextAlignmentSource from "../radix/toggle-group/text-alignment.tsx?raw"
import UiToggleGroupViewModeSource from "../radix/toggle-group/view-mode.tsx?raw"
import UiToggleGroupVerticalSettingsSource from "../radix/toggle-group/vertical-settings.tsx?raw"
import UiToggleGroupColorThemeSource from "../radix/toggle-group/color-theme.tsx?raw"
import UiToggleGroupFontSizeSource from "../radix/toggle-group/font-size.tsx?raw"
import UiToggleGroupTimeRangeSource from "../radix/toggle-group/time-range.tsx?raw"
import UiToggleGroupNotificationChannelsSource from "../radix/toggle-group/notification-channels.tsx?raw"
import UiToggleGroupLayoutColumnsSource from "../radix/toggle-group/layout-columns.tsx?raw"
import UiToggleGroupSortDirectionSource from "../radix/toggle-group/sort-direction.tsx?raw"
import UiToggleGroupPricingTierSource from "../radix/toggle-group/pricing-tier.tsx?raw"
import UiTooltipSource from "../radix/tooltip/default.tsx?raw"
import UiTooltipStandardSource from "../radix/tooltip/standard.tsx?raw"
import UiTooltipPlacementsSource from "../radix/tooltip/placements.tsx?raw"
import UiTooltipIconTriggerSource from "../radix/tooltip/icon-trigger.tsx?raw"
import UiTooltipKeyboardShortcutSource from "../radix/tooltip/keyboard-shortcut.tsx?raw"
import UiTooltipBellWithCountSource from "../radix/tooltip/bell-with-count.tsx?raw"
import UiTooltipStatusBadgesSource from "../radix/tooltip/status-badges.tsx?raw"
import UiTooltipVerifiedDomainSource from "../radix/tooltip/verified-domain.tsx?raw"
import UiTooltipToolbarActionsSource from "../radix/tooltip/toolbar-actions.tsx?raw"
import UiTooltipWarningSource from "../radix/tooltip/warning.tsx?raw"
import UiTooltipUpgradePromptSource from "../radix/tooltip/upgrade-prompt.tsx?raw"
import UiTooltipAvatarRoleBadgeSource from "../radix/tooltip/avatar-role-badge.tsx?raw"
import UiTooltipDisabledButtonSource from "../radix/tooltip/disabled-button.tsx?raw"
import UiTooltipOnlineStatusSource from "../radix/tooltip/online-status.tsx?raw"
import UiTooltipFileInfoSource from "../radix/tooltip/file-info.tsx?raw"
import UiTooltipLabelBadgesSource from "../radix/tooltip/label-badges.tsx?raw"
import UiTooltipUnreadBellSource from "../radix/tooltip/unread-bell.tsx?raw"
import UiTraceSource from "../radix/trace/default.tsx?raw"
import UiTraceAgentStepsSource from "../radix/trace/agent-steps.tsx?raw"
import UiTraceStreamingRunSource from "../radix/trace/streaming-run.tsx?raw"
import UiTraceChatTurnSource from "../radix/trace/chat-turn.tsx?raw"
import UiTraceSubagentsSource from "../radix/trace/subagents.tsx?raw"
import UiTraceChangeApprovalSource from "../radix/trace/change-approval.tsx?raw"
import UiTraceCitedSourcesSource from "../radix/trace/cited-sources.tsx?raw"
import UiTraceSupportCopilotSource from "../radix/trace/support-copilot.tsx?raw"
import UiTraceInstallSummarySource from "../radix/trace/install-summary.tsx?raw"
import UiTraceCiPipelineSource from "../radix/trace/ci-pipeline.tsx?raw"
import UiTraceRequestSpansSource from "../radix/trace/request-spans.tsx?raw"
import UiTraceErrorBreadcrumbsSource from "../radix/trace/error-breadcrumbs.tsx?raw"
import UiTraceQueryPlanSource from "../radix/trace/query-plan.tsx?raw"
import UiTraceDataPipelineSource from "../radix/trace/data-pipeline.tsx?raw"
import UiTraceWebhookRetriesSource from "../radix/trace/webhook-retries.tsx?raw"
import UiTraceCsvImportSource from "../radix/trace/csv-import.tsx?raw"
import UiTraceSecurityAuditSource from "../radix/trace/security-audit.tsx?raw"
import UiTraceReviewFindingsSource from "../radix/trace/review-findings.tsx?raw"
import UiTraceEvalResultsSource from "../radix/trace/eval-results.tsx?raw"
import UiTraceAccessDecisionSource from "../radix/trace/access-decision.tsx?raw"
import UiTraceIdentityReviewSource from "../radix/trace/identity-review.tsx?raw"
import UiTraceDomainSetupSource from "../radix/trace/domain-setup.tsx?raw"
import UiTraceTranscodeSource from "../radix/trace/transcode.tsx?raw"

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
    id: "breadcrumb-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/breadcrumb-standard",
    dependencies: [],
    Component: UiBreadcrumbStandardPreview,
    source: UiBreadcrumbStandardSource,
  }),
  uiEntry({
    name: "breadcrumb",
    label: "Breadcrumb",
    id: "breadcrumb-dropdown-menu-radix",
    variant: "Dropdown Menu",
    installTarget: "@reui-unbound/breadcrumb-dropdown-menu",
    dependencies: ["button", "dropdown-menu"],
    Component: UiBreadcrumbDropdownMenuPreview,
    source: UiBreadcrumbDropdownMenuSource,
  }),
  uiEntry({
    name: "breadcrumb",
    label: "Breadcrumb",
    id: "breadcrumb-router-link-radix",
    variant: "Router Link",
    installTarget: "@reui-unbound/breadcrumb-router-link",
    dependencies: [],
    Component: UiBreadcrumbRouterLinkPreview,
    source: UiBreadcrumbRouterLinkSource,
  }),
  uiEntry({
    name: "breadcrumb",
    label: "Breadcrumb",
    id: "breadcrumb-slash-separator-radix",
    variant: "Slash Separator",
    installTarget: "@reui-unbound/breadcrumb-slash-separator",
    dependencies: [],
    Component: UiBreadcrumbSlashSeparatorPreview,
    source: UiBreadcrumbSlashSeparatorSource,
  }),
  uiEntry({
    name: "breadcrumb",
    label: "Breadcrumb",
    id: "breadcrumb-item-icons-radix",
    variant: "Item Icons",
    installTarget: "@reui-unbound/breadcrumb-item-icons",
    dependencies: ["@reui-unbound/icon-placeholder"],
    Component: UiBreadcrumbItemIconsPreview,
    source: UiBreadcrumbItemIconsSource,
  }),
  uiEntry({
    name: "breadcrumb",
    label: "Breadcrumb",
    id: "breadcrumb-static-ellipsis-radix",
    variant: "Static Ellipsis",
    installTarget: "@reui-unbound/breadcrumb-static-ellipsis",
    dependencies: [],
    Component: UiBreadcrumbStaticEllipsisPreview,
    source: UiBreadcrumbStaticEllipsisSource,
  }),
  uiEntry({
    name: "breadcrumb",
    label: "Breadcrumb",
    id: "breadcrumb-avatars-radix",
    variant: "Avatars",
    installTarget: "@reui-unbound/breadcrumb-avatars",
    dependencies: ["avatar"],
    Component: UiBreadcrumbAvatarsPreview,
    source: UiBreadcrumbAvatarsSource,
  }),
  uiEntry({
    name: "breadcrumb",
    label: "Breadcrumb",
    id: "breadcrumb-double-chevron-radix",
    variant: "Double Chevron",
    installTarget: "@reui-unbound/breadcrumb-double-chevron",
    dependencies: ["@reui-unbound/icon-placeholder"],
    Component: UiBreadcrumbDoubleChevronPreview,
    source: UiBreadcrumbDoubleChevronSource,
  }),
  uiEntry({
    name: "breadcrumb",
    label: "Breadcrumb",
    id: "breadcrumb-in-card-radix",
    variant: "In Card",
    installTarget: "@reui-unbound/breadcrumb-in-card",
    dependencies: ["card", "@reui-unbound/icon-placeholder"],
    Component: UiBreadcrumbInCardPreview,
    source: UiBreadcrumbInCardSource,
  }),
  uiEntry({
    name: "breadcrumb",
    label: "Breadcrumb",
    id: "breadcrumb-pill-in-frame-radix",
    variant: "Pill In Frame",
    installTarget: "@reui-unbound/breadcrumb-pill-in-frame",
    dependencies: ["@reui-unbound/frame", "@reui-unbound/icon-placeholder"],
    Component: UiBreadcrumbPillInFramePreview,
    source: UiBreadcrumbPillInFrameSource,
  }),
  uiEntry({
    name: "breadcrumb",
    label: "Breadcrumb",
    id: "breadcrumb-count-badge-radix",
    variant: "Count Badge",
    installTarget: "@reui-unbound/breadcrumb-count-badge",
    dependencies: ["@reui-unbound/badge"],
    Component: UiBreadcrumbCountBadgePreview,
    source: UiBreadcrumbCountBadgeSource,
  }),
  uiEntry({
    name: "breadcrumb",
    label: "Breadcrumb",
    id: "breadcrumb-home-icon-button-radix",
    variant: "Home Icon Button",
    installTarget: "@reui-unbound/breadcrumb-home-icon-button",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiBreadcrumbHomeIconButtonPreview,
    source: UiBreadcrumbHomeIconButtonSource,
  }),
  uiEntry({
    name: "breadcrumb",
    label: "Breadcrumb",
    id: "breadcrumb-bar-separator-radix",
    variant: "Bar Separator",
    installTarget: "@reui-unbound/breadcrumb-bar-separator",
    dependencies: [],
    Component: UiBreadcrumbBarSeparatorPreview,
    source: UiBreadcrumbBarSeparatorSource,
  }),
  uiEntry({
    name: "breadcrumb",
    label: "Breadcrumb",
    id: "breadcrumb-button-style-radix",
    variant: "Button Style",
    installTarget: "@reui-unbound/breadcrumb-button-style",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiBreadcrumbButtonStylePreview,
    source: UiBreadcrumbButtonStyleSource,
  }),
  uiEntry({
    name: "breadcrumb",
    label: "Breadcrumb",
    id: "breadcrumb-project-document-radix",
    variant: "Project & Document",
    installTarget: "@reui-unbound/breadcrumb-project-document",
    dependencies: ["avatar", "@reui-unbound/frame", "@reui-unbound/icon-placeholder"],
    Component: UiBreadcrumbProjectDocumentPreview,
    source: UiBreadcrumbProjectDocumentSource,
  }),
  uiEntry({
    name: "bubble",
    label: "Bubble",
    id: "bubble-sender-alignment-radix",
    variant: "Sender Alignment",
    installTarget: "@reui-unbound/bubble-sender-alignment",
    dependencies: ["avatar", "card"],
    Component: UiBubbleSenderAlignmentPreview,
    source: UiBubbleSenderAlignmentSource,
  }),
  uiEntry({
    name: "bubble",
    label: "Bubble",
    id: "bubble-all-variants-radix",
    variant: "All Variants",
    installTarget: "@reui-unbound/bubble-all-variants",
    Component: UiBubbleAllVariantsPreview,
    source: UiBubbleAllVariantsSource,
  }),
  uiEntry({
    name: "bubble",
    label: "Bubble",
    id: "bubble-grouped-messages-radix",
    variant: "Grouped Messages",
    installTarget: "@reui-unbound/bubble-grouped-messages",
    Component: UiBubbleGroupedMessagesPreview,
    source: UiBubbleGroupedMessagesSource,
  }),
  uiEntry({
    name: "bubble",
    label: "Bubble",
    id: "bubble-reactions-radix",
    variant: "Reactions",
    installTarget: "@reui-unbound/bubble-reactions",
    dependencies: ["button", "card"],
    Component: UiBubbleReactionsPreview,
    source: UiBubbleReactionsSource,
  }),
  uiEntry({
    name: "bubble",
    label: "Bubble",
    id: "bubble-show-more-radix",
    variant: "Show More",
    installTarget: "@reui-unbound/bubble-show-more",
    dependencies: ["button", "collapsible", "@reui-unbound/icon-placeholder"],
    Component: UiBubbleShowMorePreview,
    source: UiBubbleShowMoreSource,
  }),
  uiEntry({
    name: "bubble",
    label: "Bubble",
    id: "bubble-quick-replies-radix",
    variant: "Quick Replies",
    installTarget: "@reui-unbound/bubble-quick-replies",
    dependencies: ["button", "card", "@reui-unbound/icon-placeholder"],
    Component: UiBubbleQuickRepliesPreview,
    source: UiBubbleQuickRepliesSource,
  }),
  uiEntry({
    name: "bubble",
    label: "Bubble",
    id: "bubble-formatted-answer-radix",
    variant: "Formatted Answer",
    installTarget: "@reui-unbound/bubble-formatted-answer",
    Component: UiBubbleFormattedAnswerPreview,
    source: UiBubbleFormattedAnswerSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    Component: UiButtonPreview,
    source: UiButtonSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/button-standard",
    dependencies: ["button"],
    Component: UiButtonStandardPreview,
    source: UiButtonStandardSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-secondary-radix",
    variant: "Secondary",
    installTarget: "@reui-unbound/button-secondary",
    dependencies: ["button"],
    Component: UiButtonSecondaryPreview,
    source: UiButtonSecondarySource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-outline-radix",
    variant: "Outline",
    installTarget: "@reui-unbound/button-outline",
    dependencies: ["button"],
    Component: UiButtonOutlinePreview,
    source: UiButtonOutlineSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-ghost-radix",
    variant: "Ghost",
    installTarget: "@reui-unbound/button-ghost",
    dependencies: ["button"],
    Component: UiButtonGhostPreview,
    source: UiButtonGhostSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-destructive-radix",
    variant: "Destructive",
    installTarget: "@reui-unbound/button-destructive",
    dependencies: ["button"],
    Component: UiButtonDestructivePreview,
    source: UiButtonDestructiveSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-link-radix",
    variant: "Link",
    installTarget: "@reui-unbound/button-link",
    dependencies: ["button"],
    Component: UiButtonLinkPreview,
    source: UiButtonLinkSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-extra-small-radix",
    variant: "Extra Small",
    installTarget: "@reui-unbound/button-extra-small",
    dependencies: ["button"],
    Component: UiButtonExtraSmallPreview,
    source: UiButtonExtraSmallSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-small-radix",
    variant: "Small",
    installTarget: "@reui-unbound/button-small",
    dependencies: ["button"],
    Component: UiButtonSmallPreview,
    source: UiButtonSmallSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-large-radix",
    variant: "Large",
    installTarget: "@reui-unbound/button-large",
    dependencies: ["button"],
    Component: UiButtonLargePreview,
    source: UiButtonLargeSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-disabled-radix",
    variant: "Disabled",
    installTarget: "@reui-unbound/button-disabled",
    dependencies: ["button"],
    Component: UiButtonDisabledPreview,
    source: UiButtonDisabledSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-icon-button-radix",
    variant: "Icon Button",
    installTarget: "@reui-unbound/button-icon-button",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiButtonIconButtonPreview,
    source: UiButtonIconButtonSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-icon-right-radix",
    variant: "Icon Right",
    installTarget: "@reui-unbound/button-icon-right",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiButtonIconRightPreview,
    source: UiButtonIconRightSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-loading-state-radix",
    variant: "Loading State",
    installTarget: "@reui-unbound/button-loading-state",
    dependencies: ["button", "spinner"],
    Component: UiButtonLoadingStatePreview,
    source: UiButtonLoadingStateSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-icon-left-radix",
    variant: "Icon Left",
    installTarget: "@reui-unbound/button-icon-left",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiButtonIconLeftPreview,
    source: UiButtonIconLeftSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-invalid-state-radix",
    variant: "Invalid State",
    installTarget: "@reui-unbound/button-invalid-state",
    dependencies: ["button"],
    Component: UiButtonInvalidStatePreview,
    source: UiButtonInvalidStateSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-secondary-icon-left-radix",
    variant: "Secondary Icon Left",
    installTarget: "@reui-unbound/button-secondary-icon-left",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiButtonSecondaryIconLeftPreview,
    source: UiButtonSecondaryIconLeftSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-secondary-icon-right-radix",
    variant: "Secondary Icon Right",
    installTarget: "@reui-unbound/button-secondary-icon-right",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiButtonSecondaryIconRightPreview,
    source: UiButtonSecondaryIconRightSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-outline-icon-left-radix",
    variant: "Outline Icon Left",
    installTarget: "@reui-unbound/button-outline-icon-left",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiButtonOutlineIconLeftPreview,
    source: UiButtonOutlineIconLeftSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-outline-icon-right-radix",
    variant: "Outline Icon Right",
    installTarget: "@reui-unbound/button-outline-icon-right",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiButtonOutlineIconRightPreview,
    source: UiButtonOutlineIconRightSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-ghost-icon-left-radix",
    variant: "Ghost Icon Left",
    installTarget: "@reui-unbound/button-ghost-icon-left",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGhostIconLeftPreview,
    source: UiButtonGhostIconLeftSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-ghost-icon-right-radix",
    variant: "Ghost Icon Right",
    installTarget: "@reui-unbound/button-ghost-icon-right",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGhostIconRightPreview,
    source: UiButtonGhostIconRightSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-destructive-icon-left-radix",
    variant: "Destructive Icon Left",
    installTarget: "@reui-unbound/button-destructive-icon-left",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiButtonDestructiveIconLeftPreview,
    source: UiButtonDestructiveIconLeftSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-destructive-icon-right-radix",
    variant: "Destructive Icon Right",
    installTarget: "@reui-unbound/button-destructive-icon-right",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiButtonDestructiveIconRightPreview,
    source: UiButtonDestructiveIconRightSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-extra-small-icon-radix",
    variant: "Extra Small Icon",
    installTarget: "@reui-unbound/button-extra-small-icon",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiButtonExtraSmallIconPreview,
    source: UiButtonExtraSmallIconSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-small-icon-radix",
    variant: "Small Icon",
    installTarget: "@reui-unbound/button-small-icon",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiButtonSmallIconPreview,
    source: UiButtonSmallIconSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-large-icon-radix",
    variant: "Large Icon",
    installTarget: "@reui-unbound/button-large-icon",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiButtonLargeIconPreview,
    source: UiButtonLargeIconSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-next-link-radix",
    variant: "Next Link",
    installTarget: "@reui-unbound/button-next-link",
    dependencies: ["button"],
    Component: UiButtonNextLinkPreview,
    source: UiButtonNextLinkSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-link-icon-left-radix",
    variant: "Link Icon Left",
    installTarget: "@reui-unbound/button-link-icon-left",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiButtonLinkIconLeftPreview,
    source: UiButtonLinkIconLeftSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-link-icon-right-radix",
    variant: "Link Icon Right",
    installTarget: "@reui-unbound/button-link-icon-right",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiButtonLinkIconRightPreview,
    source: UiButtonLinkIconRightSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-large-icon-left-radix",
    variant: "Large Icon Left",
    installTarget: "@reui-unbound/button-large-icon-left",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiButtonLargeIconLeftPreview,
    source: UiButtonLargeIconLeftSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-large-icon-right-radix",
    variant: "Large Icon Right",
    installTarget: "@reui-unbound/button-large-icon-right",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiButtonLargeIconRightPreview,
    source: UiButtonLargeIconRightSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-outline-invalid-radix",
    variant: "Outline Invalid",
    installTarget: "@reui-unbound/button-outline-invalid",
    dependencies: ["button"],
    Component: UiButtonOutlineInvalidPreview,
    source: UiButtonOutlineInvalidSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-ghost-invalid-radix",
    variant: "Ghost Invalid",
    installTarget: "@reui-unbound/button-ghost-invalid",
    dependencies: ["button"],
    Component: UiButtonGhostInvalidPreview,
    source: UiButtonGhostInvalidSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-email-login-radix",
    variant: "Email Login",
    installTarget: "@reui-unbound/button-email-login",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiButtonEmailLoginPreview,
    source: UiButtonEmailLoginSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-more-less-toggle-radix",
    variant: "More Less Toggle",
    installTarget: "@reui-unbound/button-more-less-toggle",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiButtonMoreLessTogglePreview,
    source: UiButtonMoreLessToggleSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-outline-social-icons-radix",
    variant: "Outline Social Icons",
    installTarget: "@reui-unbound/button-outline-social-icons",
    dependencies: ["button"],
    Component: UiButtonOutlineSocialIconsPreview,
    source: UiButtonOutlineSocialIconsSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-like-count-radix",
    variant: "Like Count",
    installTarget: "@reui-unbound/button-like-count",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiButtonLikeCountPreview,
    source: UiButtonLikeCountSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-star-count-radix",
    variant: "Star Count",
    installTarget: "@reui-unbound/button-star-count",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiButtonStarCountPreview,
    source: UiButtonStarCountSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-unread-badge-radix",
    variant: "Unread Badge",
    installTarget: "@reui-unbound/button-unread-badge",
    dependencies: ["@reui-unbound/badge", "button", "@reui-unbound/icon-placeholder"],
    Component: UiButtonUnreadBadgePreview,
    source: UiButtonUnreadBadgeSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-shortcut-keys-radix",
    variant: "Shortcut Keys",
    installTarget: "@reui-unbound/button-shortcut-keys",
    dependencies: ["button", "kbd", "@reui-unbound/icon-placeholder"],
    Component: UiButtonShortcutKeysPreview,
    source: UiButtonShortcutKeysSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-copy-feedback-radix",
    variant: "Copy Feedback",
    installTarget: "@reui-unbound/button-copy-feedback",
    dependencies: ["@reui-unbound/use-copy-to-clipboard", "button", "@reui-unbound/icon-placeholder"],
    Component: UiButtonCopyFeedbackPreview,
    source: UiButtonCopyFeedbackSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-icon-copy-radix",
    variant: "Icon Copy",
    installTarget: "@reui-unbound/button-icon-copy",
    dependencies: ["@reui-unbound/use-copy-to-clipboard", "button", "tooltip", "@reui-unbound/icon-placeholder"],
    Component: UiButtonIconCopyPreview,
    source: UiButtonIconCopySource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-hamburger-toggle-radix",
    variant: "Hamburger Toggle",
    installTarget: "@reui-unbound/button-hamburger-toggle",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiButtonHamburgerTogglePreview,
    source: UiButtonHamburgerToggleSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-async-action-radix",
    variant: "Async Action",
    installTarget: "@reui-unbound/button-async-action",
    dependencies: ["button", "spinner", "@reui-unbound/icon-placeholder"],
    Component: UiButtonAsyncActionPreview,
    source: UiButtonAsyncActionSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-inline-count-radix",
    variant: "Inline Count",
    installTarget: "@reui-unbound/button-inline-count",
    dependencies: ["@reui-unbound/badge", "button"],
    Component: UiButtonInlineCountPreview,
    source: UiButtonInlineCountSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-status-dot-radix",
    variant: "Status Dot",
    installTarget: "@reui-unbound/button-status-dot",
    dependencies: ["button"],
    Component: UiButtonStatusDotPreview,
    source: UiButtonStatusDotSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-status-badge-radix",
    variant: "Status Badge",
    installTarget: "@reui-unbound/button-status-badge",
    dependencies: ["@reui-unbound/badge", "button"],
    Component: UiButtonStatusBadgePreview,
    source: UiButtonStatusBadgeSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-notification-badge-radix",
    variant: "Notification Badge",
    installTarget: "@reui-unbound/button-notification-badge",
    dependencies: ["@reui-unbound/badge", "button", "@reui-unbound/icon-placeholder"],
    Component: UiButtonNotificationBadgePreview,
    source: UiButtonNotificationBadgeSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-go-back-radix",
    variant: "Go Back",
    installTarget: "@reui-unbound/button-go-back",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGoBackPreview,
    source: UiButtonGoBackSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-animated-go-back-radix",
    variant: "Animated Go Back",
    installTarget: "@reui-unbound/button-animated-go-back",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiButtonAnimatedGoBackPreview,
    source: UiButtonAnimatedGoBackSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-expanding-button-radix",
    variant: "Expanding Button",
    installTarget: "@reui-unbound/button-expanding-button",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiButtonExpandingButtonPreview,
    source: UiButtonExpandingButtonSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-title-description-radix",
    variant: "Title & Description",
    installTarget: "@reui-unbound/button-title-description",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiButtonTitleDescriptionPreview,
    source: UiButtonTitleDescriptionSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-sliding-arrow-radix",
    variant: "Sliding Arrow",
    installTarget: "@reui-unbound/button-sliding-arrow",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiButtonSlidingArrowPreview,
    source: UiButtonSlidingArrowSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-shortcut-tooltip-radix",
    variant: "Shortcut Tooltip",
    installTarget: "@reui-unbound/button-shortcut-tooltip",
    dependencies: ["button", "kbd", "tooltip", "@reui-unbound/icon-placeholder"],
    Component: UiButtonShortcutTooltipPreview,
    source: UiButtonShortcutTooltipSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-avatar-radix",
    variant: "Avatar",
    installTarget: "@reui-unbound/button-avatar",
    dependencies: ["avatar", "button"],
    Component: UiButtonAvatarPreview,
    source: UiButtonAvatarSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-outline-avatar-radix",
    variant: "Outline Avatar",
    installTarget: "@reui-unbound/button-outline-avatar",
    dependencies: ["avatar", "button"],
    Component: UiButtonOutlineAvatarPreview,
    source: UiButtonOutlineAvatarSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-small-avatar-radix",
    variant: "Small Avatar",
    installTarget: "@reui-unbound/button-small-avatar",
    dependencies: ["avatar", "button"],
    Component: UiButtonSmallAvatarPreview,
    source: UiButtonSmallAvatarSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-small-outline-avatar-radix",
    variant: "Small Outline Avatar",
    installTarget: "@reui-unbound/button-small-outline-avatar",
    dependencies: ["avatar", "button"],
    Component: UiButtonSmallOutlineAvatarPreview,
    source: UiButtonSmallOutlineAvatarSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-social-login-stack-radix",
    variant: "Social Login Stack",
    installTarget: "@reui-unbound/button-social-login-stack",
    dependencies: ["button"],
    Component: UiButtonSocialLoginStackPreview,
    source: UiButtonSocialLoginStackSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-colored-social-icons-radix",
    variant: "Colored Social Icons",
    installTarget: "@reui-unbound/button-colored-social-icons",
    dependencies: ["button"],
    Component: UiButtonColoredSocialIconsPreview,
    source: UiButtonColoredSocialIconsSource,
  }),
  uiEntry({
    name: "button",
    label: "Button",
    id: "button-theme-toggle-radix",
    variant: "Theme Toggle",
    installTarget: "@reui-unbound/button-theme-toggle",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiButtonThemeTogglePreview,
    source: UiButtonThemeToggleSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    Component: UiButtonGroupPreview,
    source: UiButtonGroupSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-two-buttons-radix",
    variant: "Two Buttons",
    installTarget: "@reui-unbound/button-group-two-buttons",
    dependencies: ["button", "button-group"],
    Component: UiButtonGroupTwoButtonsPreview,
    source: UiButtonGroupTwoButtonsSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-button-input-radix",
    variant: "Button & Input",
    installTarget: "@reui-unbound/button-group-button-input",
    dependencies: ["button", "button-group", "input"],
    Component: UiButtonGroupButtonInputPreview,
    source: UiButtonGroupButtonInputSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-buttons-badge-radix",
    variant: "Buttons & Badge",
    installTarget: "@reui-unbound/button-group-buttons-badge",
    dependencies: ["@reui-unbound/badge", "button", "button-group", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupButtonsBadgePreview,
    source: UiButtonGroupButtonsBadgeSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-dropdown-menu-radix",
    variant: "Dropdown Menu",
    installTarget: "@reui-unbound/button-group-dropdown-menu",
    dependencies: ["button", "button-group", "dropdown-menu", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupDropdownMenuPreview,
    source: UiButtonGroupDropdownMenuSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-team-activity-radix",
    variant: "Team Activity",
    installTarget: "@reui-unbound/button-group-team-activity",
    dependencies: ["avatar", "button", "button-group", "dropdown-menu", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupTeamActivityPreview,
    source: UiButtonGroupTeamActivitySource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-icon-actions-radix",
    variant: "Icon Actions",
    installTarget: "@reui-unbound/button-group-icon-actions",
    dependencies: ["button", "button-group", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupIconActionsPreview,
    source: UiButtonGroupIconActionsSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-status-indicator-radix",
    variant: "Status Indicator",
    installTarget: "@reui-unbound/button-group-status-indicator",
    dependencies: ["button", "button-group", "dropdown-menu", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupStatusIndicatorPreview,
    source: UiButtonGroupStatusIndicatorSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-like-counter-radix",
    variant: "Like Counter",
    installTarget: "@reui-unbound/button-group-like-counter",
    dependencies: ["button", "button-group", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupLikeCounterPreview,
    source: UiButtonGroupLikeCounterSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-nested-groups-radix",
    variant: "Nested Groups",
    installTarget: "@reui-unbound/button-group-nested-groups",
    dependencies: ["button", "button-group", "input-group", "tooltip", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupNestedGroupsPreview,
    source: UiButtonGroupNestedGroupsSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-pagination-radix",
    variant: "Pagination",
    installTarget: "@reui-unbound/button-group-pagination",
    dependencies: ["button", "button-group", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupPaginationPreview,
    source: UiButtonGroupPaginationSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-split-pagination-radix",
    variant: "Split Pagination",
    installTarget: "@reui-unbound/button-group-split-pagination",
    dependencies: ["button", "button-group", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupSplitPaginationPreview,
    source: UiButtonGroupSplitPaginationSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-text-alignment-radix",
    variant: "Text Alignment",
    installTarget: "@reui-unbound/button-group-text-alignment",
    dependencies: ["button", "button-group", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupTextAlignmentPreview,
    source: UiButtonGroupTextAlignmentSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-vertical-orientation-radix",
    variant: "Vertical Orientation",
    installTarget: "@reui-unbound/button-group-vertical-orientation",
    dependencies: ["button", "button-group", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupVerticalOrientationPreview,
    source: UiButtonGroupVerticalOrientationSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-vertical-tool-palette-radix",
    variant: "Vertical Tool Palette",
    installTarget: "@reui-unbound/button-group-vertical-tool-palette",
    dependencies: ["button", "button-group", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupVerticalToolPalettePreview,
    source: UiButtonGroupVerticalToolPaletteSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-star-with-dropdown-radix",
    variant: "Star With Dropdown",
    installTarget: "@reui-unbound/button-group-star-with-dropdown",
    dependencies: ["@reui-unbound/badge", "button", "button-group", "dropdown-menu", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupStarWithDropdownPreview,
    source: UiButtonGroupStarWithDropdownSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-search-filter-clear-radix",
    variant: "Search Filter Clear",
    installTarget: "@reui-unbound/button-group-search-filter-clear",
    dependencies: ["button", "button-group", "dropdown-menu", "input", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupSearchFilterClearPreview,
    source: UiButtonGroupSearchFilterClearSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-conversation-menu-radix",
    variant: "Conversation Menu",
    installTarget: "@reui-unbound/button-group-conversation-menu",
    dependencies: ["button", "button-group", "dropdown-menu", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupConversationMenuPreview,
    source: UiButtonGroupConversationMenuSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-git-split-button-radix",
    variant: "Git Split Button",
    installTarget: "@reui-unbound/button-group-git-split-button",
    dependencies: ["button", "button-group", "dropdown-menu", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupGitSplitButtonPreview,
    source: UiButtonGroupGitSplitButtonSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-search-with-menu-radix",
    variant: "Search With Menu",
    installTarget: "@reui-unbound/button-group-search-with-menu",
    dependencies: ["button", "button-group", "dropdown-menu", "input-group", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupSearchWithMenuPreview,
    source: UiButtonGroupSearchWithMenuSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-search-with-button-radix",
    variant: "Search With Button",
    installTarget: "@reui-unbound/button-group-search-with-button",
    dependencies: ["button", "button-group", "dropdown-menu", "input-group", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupSearchWithButtonPreview,
    source: UiButtonGroupSearchWithButtonSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-file-name-menu-radix",
    variant: "File Name Menu",
    installTarget: "@reui-unbound/button-group-file-name-menu",
    dependencies: ["button", "button-group", "dropdown-menu", "input-group", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupFileNameMenuPreview,
    source: UiButtonGroupFileNameMenuSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-disabled-button-radix",
    variant: "Disabled Button",
    installTarget: "@reui-unbound/button-group-disabled-button",
    dependencies: ["button", "button-group", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupDisabledButtonPreview,
    source: UiButtonGroupDisabledButtonSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-separated-buttons-radix",
    variant: "Separated Buttons",
    installTarget: "@reui-unbound/button-group-separated-buttons",
    dependencies: ["button", "button-group", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupSeparatedButtonsPreview,
    source: UiButtonGroupSeparatedButtonsSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-dashboard-views-radix",
    variant: "Dashboard Views",
    installTarget: "@reui-unbound/button-group-dashboard-views",
    dependencies: ["button", "button-group", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupDashboardViewsPreview,
    source: UiButtonGroupDashboardViewsSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-rating-scale-radix",
    variant: "Rating Scale",
    installTarget: "@reui-unbound/button-group-rating-scale",
    dependencies: ["button", "button-group"],
    Component: UiButtonGroupRatingScalePreview,
    source: UiButtonGroupRatingScaleSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-user-selection-radix",
    variant: "User Selection",
    installTarget: "@reui-unbound/button-group-user-selection",
    dependencies: ["avatar", "button", "button-group", "select", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupUserSelectionPreview,
    source: UiButtonGroupUserSelectionSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-status-select-radix",
    variant: "Status Select",
    installTarget: "@reui-unbound/button-group-status-select",
    dependencies: ["button-group", "input", "select"],
    Component: UiButtonGroupStatusSelectPreview,
    source: UiButtonGroupStatusSelectSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-volume-control-radix",
    variant: "Volume Control",
    installTarget: "@reui-unbound/button-group-volume-control",
    dependencies: ["button", "button-group", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupVolumeControlPreview,
    source: UiButtonGroupVolumeControlSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-follower-count-radix",
    variant: "Follower Count",
    installTarget: "@reui-unbound/button-group-follower-count",
    dependencies: ["button", "button-group", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupFollowerCountPreview,
    source: UiButtonGroupFollowerCountSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-active-count-radix",
    variant: "Active Count",
    installTarget: "@reui-unbound/button-group-active-count",
    dependencies: ["button", "button-group", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupActiveCountPreview,
    source: UiButtonGroupActiveCountSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-share-caption-radix",
    variant: "Share Caption",
    installTarget: "@reui-unbound/button-group-share-caption",
    dependencies: ["button", "button-group", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupShareCaptionPreview,
    source: UiButtonGroupShareCaptionSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-sort-view-radix",
    variant: "Sort & View",
    installTarget: "@reui-unbound/button-group-sort-view",
    dependencies: ["button", "button-group", "dropdown-menu", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupSortViewPreview,
    source: UiButtonGroupSortViewSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-select-controls-radix",
    variant: "Select Controls",
    installTarget: "@reui-unbound/button-group-select-controls",
    dependencies: ["button-group", "select", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupSelectControlsPreview,
    source: UiButtonGroupSelectControlsSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-segmented-control-radix",
    variant: "Segmented Control",
    installTarget: "@reui-unbound/button-group-segmented-control",
    dependencies: ["button", "button-group", "dropdown-menu", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupSegmentedControlPreview,
    source: UiButtonGroupSegmentedControlSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-numbered-pagination-radix",
    variant: "Numbered Pagination",
    installTarget: "@reui-unbound/button-group-numbered-pagination",
    dependencies: ["button", "button-group", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupNumberedPaginationPreview,
    source: UiButtonGroupNumberedPaginationSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-view-switcher-radix",
    variant: "View Switcher",
    installTarget: "@reui-unbound/button-group-view-switcher",
    dependencies: ["button", "button-group", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupViewSwitcherPreview,
    source: UiButtonGroupViewSwitcherSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-zoom-controls-radix",
    variant: "Zoom Controls",
    installTarget: "@reui-unbound/button-group-zoom-controls",
    dependencies: ["button", "button-group", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupZoomControlsPreview,
    source: UiButtonGroupZoomControlsSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-media-controls-radix",
    variant: "Media Controls",
    installTarget: "@reui-unbound/button-group-media-controls",
    dependencies: ["button", "button-group", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupMediaControlsPreview,
    source: UiButtonGroupMediaControlsSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-split-button-radix",
    variant: "Split Button",
    installTarget: "@reui-unbound/button-group-split-button",
    dependencies: ["button", "button-group", "dropdown-menu", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupSplitButtonPreview,
    source: UiButtonGroupSplitButtonSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-vertical-list-radix",
    variant: "Vertical List",
    installTarget: "@reui-unbound/button-group-vertical-list",
    dependencies: ["button", "button-group"],
    Component: UiButtonGroupVerticalListPreview,
    source: UiButtonGroupVerticalListSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-model-selector-radix",
    variant: "Model Selector",
    installTarget: "@reui-unbound/button-group-model-selector",
    dependencies: ["@reui-unbound/badge", "button", "button-group", "tooltip", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupModelSelectorPreview,
    source: UiButtonGroupModelSelectorSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-order-type-radix",
    variant: "Order Type",
    installTarget: "@reui-unbound/button-group-order-type",
    dependencies: ["button", "button-group", "tooltip", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupOrderTypePreview,
    source: UiButtonGroupOrderTypeSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-buy-sell-hold-radix",
    variant: "Buy Sell Hold",
    installTarget: "@reui-unbound/button-group-buy-sell-hold",
    dependencies: ["button", "button-group", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupBuySellHoldPreview,
    source: UiButtonGroupBuySellHoldSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-pipeline-stage-radix",
    variant: "Pipeline Stage",
    installTarget: "@reui-unbound/button-group-pipeline-stage",
    dependencies: ["button", "button-group", "dropdown-menu", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupPipelineStagePreview,
    source: UiButtonGroupPipelineStageSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-environment-switcher-radix",
    variant: "Environment Switcher",
    installTarget: "@reui-unbound/button-group-environment-switcher",
    dependencies: ["button", "button-group", "tooltip", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupEnvironmentSwitcherPreview,
    source: UiButtonGroupEnvironmentSwitcherSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-time-interval-radix",
    variant: "Time Interval",
    installTarget: "@reui-unbound/button-group-time-interval",
    dependencies: ["button", "button-group", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupTimeIntervalPreview,
    source: UiButtonGroupTimeIntervalSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-review-actions-radix",
    variant: "Review Actions",
    installTarget: "@reui-unbound/button-group-review-actions",
    dependencies: ["button", "button-group", "dropdown-menu", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupReviewActionsPreview,
    source: UiButtonGroupReviewActionsSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-export-toolbar-radix",
    variant: "Export Toolbar",
    installTarget: "@reui-unbound/button-group-export-toolbar",
    dependencies: ["button", "button-group", "dropdown-menu", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupExportToolbarPreview,
    source: UiButtonGroupExportToolbarSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-vertical-nav-radix",
    variant: "Vertical Nav",
    installTarget: "@reui-unbound/button-group-vertical-nav",
    dependencies: ["button", "button-group", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupVerticalNavPreview,
    source: UiButtonGroupVerticalNavSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-filter-sort-more-radix",
    variant: "Filter Sort More",
    installTarget: "@reui-unbound/button-group-filter-sort-more",
    dependencies: ["button", "button-group", "dropdown-menu", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupFilterSortMorePreview,
    source: UiButtonGroupFilterSortMoreSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-create-menu-radix",
    variant: "Create Menu",
    installTarget: "@reui-unbound/button-group-create-menu",
    dependencies: ["button", "button-group", "dropdown-menu", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupCreateMenuPreview,
    source: UiButtonGroupCreateMenuSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-dashboard-actions-radix",
    variant: "Dashboard Actions",
    installTarget: "@reui-unbound/button-group-dashboard-actions",
    dependencies: ["button", "button-group", "dropdown-menu", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupDashboardActionsPreview,
    source: UiButtonGroupDashboardActionsSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-publish-controls-radix",
    variant: "Publish Controls",
    installTarget: "@reui-unbound/button-group-publish-controls",
    dependencies: ["avatar", "button", "button-group", "dropdown-menu", "separator", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupPublishControlsPreview,
    source: UiButtonGroupPublishControlsSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-service-selectors-radix",
    variant: "Service Selectors",
    installTarget: "@reui-unbound/button-group-service-selectors",
    dependencies: ["button", "button-group", "dropdown-menu", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupServiceSelectorsPreview,
    source: UiButtonGroupServiceSelectorsSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-payout-release-radix",
    variant: "Payout Release",
    installTarget: "@reui-unbound/button-group-payout-release",
    dependencies: ["button", "button-group", "dropdown-menu", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupPayoutReleasePreview,
    source: UiButtonGroupPayoutReleaseSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-file-attachment-radix",
    variant: "File Attachment",
    installTarget: "@reui-unbound/button-group-file-attachment",
    dependencies: ["button", "button-group", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupFileAttachmentPreview,
    source: UiButtonGroupFileAttachmentSource,
  }),
  uiEntry({
    name: "button-group",
    label: "Button Group",
    id: "button-group-agent-mode-radix",
    variant: "Agent Mode",
    installTarget: "@reui-unbound/button-group-agent-mode",
    dependencies: ["button", "button-group", "dropdown-menu", "@reui-unbound/icon-placeholder"],
    Component: UiButtonGroupAgentModePreview,
    source: UiButtonGroupAgentModeSource,
  }),
  uiEntry({
    name: "calendar",
    label: "Calendar",
    Component: UiCalendarPreview,
    source: UiCalendarSource,
  }),
  uiEntry({
    name: "calendar",
    label: "Calendar",
    id: "calendar-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/calendar-standard",
    dependencies: ["calendar", "card"],
    Component: UiCalendarStandardPreview,
    source: UiCalendarStandardSource,
  }),
  uiEntry({
    name: "calendar",
    label: "Calendar",
    id: "calendar-range-radix",
    variant: "Range",
    installTarget: "@reui-unbound/calendar-range",
    dependencies: ["calendar", "card"],
    Component: UiCalendarRangePreview,
    source: UiCalendarRangeSource,
  }),
  uiEntry({
    name: "calendar",
    label: "Calendar",
    id: "calendar-disabled-dates-radix",
    variant: "Disabled Dates",
    installTarget: "@reui-unbound/calendar-disabled-dates",
    dependencies: ["calendar", "card"],
    Component: UiCalendarDisabledDatesPreview,
    source: UiCalendarDisabledDatesSource,
  }),
  uiEntry({
    name: "calendar",
    label: "Calendar",
    id: "calendar-multiple-days-radix",
    variant: "Multiple Days",
    installTarget: "@reui-unbound/calendar-multiple-days",
    dependencies: ["calendar", "card"],
    Component: UiCalendarMultipleDaysPreview,
    source: UiCalendarMultipleDaysSource,
  }),
  uiEntry({
    name: "calendar",
    label: "Calendar",
    id: "calendar-circular-days-radix",
    variant: "Circular Days",
    installTarget: "@reui-unbound/calendar-circular-days",
    dependencies: ["calendar", "card"],
    Component: UiCalendarCircularDaysPreview,
    source: UiCalendarCircularDaysSource,
  }),
  uiEntry({
    name: "calendar",
    label: "Calendar",
    id: "calendar-circular-range-radix",
    variant: "Circular Range",
    installTarget: "@reui-unbound/calendar-circular-range",
    dependencies: ["calendar", "card"],
    Component: UiCalendarCircularRangePreview,
    source: UiCalendarCircularRangeSource,
  }),
  uiEntry({
    name: "calendar",
    label: "Calendar",
    id: "calendar-right-navigation-radix",
    variant: "Right Navigation",
    installTarget: "@reui-unbound/calendar-right-navigation",
    dependencies: ["calendar", "card"],
    Component: UiCalendarRightNavigationPreview,
    source: UiCalendarRightNavigationSource,
  }),
  uiEntry({
    name: "calendar",
    label: "Calendar",
    id: "calendar-month-year-select-radix",
    variant: "Month Year Select",
    installTarget: "@reui-unbound/calendar-month-year-select",
    dependencies: ["calendar", "card", "select"],
    Component: UiCalendarMonthYearSelectPreview,
    source: UiCalendarMonthYearSelectSource,
  }),
  uiEntry({
    name: "calendar",
    label: "Calendar",
    id: "calendar-year-select-radix",
    variant: "Year Select",
    installTarget: "@reui-unbound/calendar-year-select",
    dependencies: ["calendar", "card", "select"],
    Component: UiCalendarYearSelectPreview,
    source: UiCalendarYearSelectSource,
  }),
  uiEntry({
    name: "calendar",
    label: "Calendar",
    id: "calendar-week-numbers-radix",
    variant: "Week Numbers",
    installTarget: "@reui-unbound/calendar-week-numbers",
    dependencies: ["calendar", "card"],
    Component: UiCalendarWeekNumbersPreview,
    source: UiCalendarWeekNumbersSource,
  }),
  uiEntry({
    name: "calendar",
    label: "Calendar",
    id: "calendar-current-month-button-radix",
    variant: "Current Month Button",
    installTarget: "@reui-unbound/calendar-current-month-button",
    dependencies: ["button", "calendar", "card"],
    Component: UiCalendarCurrentMonthButtonPreview,
    source: UiCalendarCurrentMonthButtonSource,
  }),
  uiEntry({
    name: "calendar",
    label: "Calendar",
    id: "calendar-today-button-radix",
    variant: "Today Button",
    installTarget: "@reui-unbound/calendar-today-button",
    dependencies: ["button", "calendar", "card"],
    Component: UiCalendarTodayButtonPreview,
    source: UiCalendarTodayButtonSource,
  }),
  uiEntry({
    name: "calendar",
    label: "Calendar",
    id: "calendar-year-view-radix",
    variant: "Year View",
    installTarget: "@reui-unbound/calendar-year-view",
    dependencies: ["button", "calendar", "card", "scroll-area", "@reui-unbound/icon-placeholder"],
    Component: UiCalendarYearViewPreview,
    source: UiCalendarYearViewSource,
  }),
  uiEntry({
    name: "calendar",
    label: "Calendar",
    id: "calendar-time-slots-radix",
    variant: "Time Slots",
    installTarget: "@reui-unbound/calendar-time-slots",
    dependencies: ["button", "calendar", "card", "scroll-area"],
    Component: UiCalendarTimeSlotsPreview,
    source: UiCalendarTimeSlotsSource,
  }),
  uiEntry({
    name: "calendar",
    label: "Calendar",
    id: "calendar-date-presets-radix",
    variant: "Date Presets",
    installTarget: "@reui-unbound/calendar-date-presets",
    dependencies: ["button", "calendar", "card"],
    Component: UiCalendarDatePresetsPreview,
    source: UiCalendarDatePresetsSource,
  }),
  uiEntry({
    name: "calendar",
    label: "Calendar",
    id: "calendar-range-presets-radix",
    variant: "Range Presets",
    installTarget: "@reui-unbound/calendar-range-presets",
    dependencies: ["button", "calendar", "card"],
    Component: UiCalendarRangePresetsPreview,
    source: UiCalendarRangePresetsSource,
  }),
  uiEntry({
    name: "calendar",
    label: "Calendar",
    id: "calendar-pricing-radix",
    variant: "Pricing",
    installTarget: "@reui-unbound/calendar-pricing",
    dependencies: ["calendar"],
    Component: UiCalendarPricingPreview,
    source: UiCalendarPricingSource,
  }),
  uiEntry({
    name: "calendar",
    label: "Calendar",
    id: "calendar-forward-presets-radix",
    variant: "Forward Presets",
    installTarget: "@reui-unbound/calendar-forward-presets",
    dependencies: ["button", "calendar", "card"],
    Component: UiCalendarForwardPresetsPreview,
    source: UiCalendarForwardPresetsSource,
  }),
  uiEntry({
    name: "calendar",
    label: "Calendar",
    id: "calendar-appointment-radix",
    variant: "Appointment",
    installTarget: "@reui-unbound/calendar-appointment",
    dependencies: ["button", "calendar", "card", "scroll-area", "@reui-unbound/icon-placeholder"],
    Component: UiCalendarAppointmentPreview,
    source: UiCalendarAppointmentSource,
  }),
  uiEntry({
    name: "calendar",
    label: "Calendar",
    id: "calendar-two-months-radix",
    variant: "Two Months",
    installTarget: "@reui-unbound/calendar-two-months",
    dependencies: ["calendar", "card"],
    Component: UiCalendarTwoMonthsPreview,
    source: UiCalendarTwoMonthsSource,
  }),
  uiEntry({
    name: "calendar",
    label: "Calendar",
    id: "calendar-two-month-range-radix",
    variant: "Two Month Range",
    installTarget: "@reui-unbound/calendar-two-month-range",
    dependencies: ["calendar", "card"],
    Component: UiCalendarTwoMonthRangePreview,
    source: UiCalendarTwoMonthRangeSource,
  }),
  uiEntry({
    name: "calendar",
    label: "Calendar",
    id: "calendar-event-list-radix",
    variant: "Event List",
    installTarget: "@reui-unbound/calendar-event-list",
    dependencies: ["button", "calendar", "card", "@reui-unbound/icon-placeholder"],
    Component: UiCalendarEventListPreview,
    source: UiCalendarEventListSource,
  }),
  uiEntry({
    name: "calendar",
    label: "Calendar",
    id: "calendar-localized-radix",
    variant: "Localized",
    installTarget: "@reui-unbound/calendar-localized",
    dependencies: ["calendar", "card", "select"],
    Component: UiCalendarLocalizedPreview,
    source: UiCalendarLocalizedSource,
  }),
  uiEntry({
    name: "calendar",
    label: "Calendar",
    id: "calendar-date-picker-radix",
    variant: "Date Picker",
    installTarget: "@reui-unbound/calendar-date-picker",
    dependencies: ["button", "calendar", "popover", "@reui-unbound/icon-placeholder"],
    Component: UiCalendarDatePickerPreview,
    source: UiCalendarDatePickerSource,
  }),
  uiEntry({
    name: "calendar",
    label: "Calendar",
    id: "calendar-date-range-picker-radix",
    variant: "Date Range Picker",
    installTarget: "@reui-unbound/calendar-date-range-picker",
    dependencies: ["button", "calendar", "card", "popover", "@reui-unbound/icon-placeholder"],
    Component: UiCalendarDateRangePickerPreview,
    source: UiCalendarDateRangePickerSource,
  }),
  uiEntry({
    name: "calendar",
    label: "Calendar",
    id: "calendar-picker-year-view-radix",
    variant: "Picker Year View",
    installTarget: "@reui-unbound/calendar-picker-year-view",
    dependencies: ["button", "calendar", "card", "popover", "scroll-area", "@reui-unbound/icon-placeholder"],
    Component: UiCalendarPickerYearViewPreview,
    source: UiCalendarPickerYearViewSource,
  }),
  uiEntry({
    name: "calendar",
    label: "Calendar",
    id: "calendar-picker-time-slots-radix",
    variant: "Picker Time Slots",
    installTarget: "@reui-unbound/calendar-picker-time-slots",
    dependencies: ["button", "calendar", "card", "popover", "scroll-area", "@reui-unbound/icon-placeholder"],
    Component: UiCalendarPickerTimeSlotsPreview,
    source: UiCalendarPickerTimeSlotsSource,
  }),
  uiEntry({
    name: "calendar",
    label: "Calendar",
    id: "calendar-picker-presets-radix",
    variant: "Picker Presets",
    installTarget: "@reui-unbound/calendar-picker-presets",
    dependencies: ["button", "calendar", "card", "popover", "@reui-unbound/icon-placeholder"],
    Component: UiCalendarPickerPresetsPreview,
    source: UiCalendarPickerPresetsSource,
  }),
  uiEntry({
    name: "calendar",
    label: "Calendar",
    id: "calendar-range-picker-presets-radix",
    variant: "Range Picker Presets",
    installTarget: "@reui-unbound/calendar-range-picker-presets",
    dependencies: ["button", "calendar", "card", "popover", "@reui-unbound/icon-placeholder"],
    Component: UiCalendarRangePickerPresetsPreview,
    source: UiCalendarRangePickerPresetsSource,
  }),
  uiEntry({
    name: "calendar",
    label: "Calendar",
    id: "calendar-date-time-range-radix",
    variant: "Date Time Range",
    installTarget: "@reui-unbound/calendar-date-time-range",
    dependencies: ["button", "calendar", "field", "input-group", "popover", "separator", "@reui-unbound/icon-placeholder"],
    Component: UiCalendarDateTimeRangePreview,
    source: UiCalendarDateTimeRangeSource,
  }),
  uiEntry({
    name: "card",
    label: "Card",
    Component: UiCardPreview,
    source: UiCardSource,
  }),
  uiEntry({
    name: "card",
    label: "Card",
    id: "card-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/card-standard",
    dependencies: ["button", "card"],
    Component: UiCardStandardPreview,
    source: UiCardStandardSource,
  }),
  uiEntry({
    name: "card",
    label: "Card",
    id: "card-bordered-header-radix",
    variant: "Bordered Header",
    installTarget: "@reui-unbound/card-bordered-header",
    dependencies: ["card"],
    Component: UiCardBorderedHeaderPreview,
    source: UiCardBorderedHeaderSource,
  }),
  uiEntry({
    name: "card",
    label: "Card",
    id: "card-border-separation-radix",
    variant: "Border Separation",
    installTarget: "@reui-unbound/card-border-separation",
    dependencies: ["button", "card"],
    Component: UiCardBorderSeparationPreview,
    source: UiCardBorderSeparationSource,
  }),
  uiEntry({
    name: "card",
    label: "Card",
    id: "card-header-footer-radix",
    variant: "Header & Footer",
    installTarget: "@reui-unbound/card-header-footer",
    dependencies: ["button", "card"],
    Component: UiCardHeaderFooterPreview,
    source: UiCardHeaderFooterSource,
  }),
  uiEntry({
    name: "card",
    label: "Card",
    id: "card-link-action-radix",
    variant: "Link Action",
    installTarget: "@reui-unbound/card-link-action",
    dependencies: ["button", "card", "@reui-unbound/icon-placeholder"],
    Component: UiCardLinkActionPreview,
    source: UiCardLinkActionSource,
  }),
  uiEntry({
    name: "card",
    label: "Card",
    id: "card-dropdown-menu-radix",
    variant: "Dropdown Menu",
    installTarget: "@reui-unbound/card-dropdown-menu",
    dependencies: ["avatar", "button", "card", "dropdown-menu", "@reui-unbound/icon-placeholder"],
    Component: UiCardDropdownMenuPreview,
    source: UiCardDropdownMenuSource,
  }),
  uiEntry({
    name: "card",
    label: "Card",
    id: "card-inset-image-radix",
    variant: "Inset Image",
    installTarget: "@reui-unbound/card-inset-image",
    dependencies: ["@reui-unbound/badge", "button", "card", "@reui-unbound/icon-placeholder"],
    Component: UiCardInsetImagePreview,
    source: UiCardInsetImageSource,
  }),
  uiEntry({
    name: "card",
    label: "Card",
    id: "card-image-hover-zoom-radix",
    variant: "Image Hover Zoom",
    installTarget: "@reui-unbound/card-image-hover-zoom",
    dependencies: ["card"],
    Component: UiCardImageHoverZoomPreview,
    source: UiCardImageHoverZoomSource,
  }),
  uiEntry({
    name: "card",
    label: "Card",
    id: "card-full-image-radix",
    variant: "Full Image",
    installTarget: "@reui-unbound/card-full-image",
    dependencies: ["@reui-unbound/badge", "button", "card", "@reui-unbound/icon-placeholder"],
    Component: UiCardFullImagePreview,
    source: UiCardFullImageSource,
  }),
  uiEntry({
    name: "card",
    label: "Card",
    id: "card-image-shadow-fade-radix",
    variant: "Image Shadow Fade",
    installTarget: "@reui-unbound/card-image-shadow-fade",
    dependencies: ["@reui-unbound/badge", "avatar", "card"],
    Component: UiCardImageShadowFadePreview,
    source: UiCardImageShadowFadeSource,
  }),
  uiEntry({
    name: "card",
    label: "Card",
    id: "card-stacked-depth-radix",
    variant: "Stacked Depth",
    installTarget: "@reui-unbound/card-stacked-depth",
    dependencies: ["button", "card"],
    Component: UiCardStackedDepthPreview,
    source: UiCardStackedDepthSource,
  }),
  uiEntry({
    name: "card",
    label: "Card",
    id: "card-login-form-radix",
    variant: "Login Form",
    installTarget: "@reui-unbound/card-login-form",
    dependencies: ["button", "card", "field", "input", "input-group", "@reui-unbound/icon-placeholder"],
    Component: UiCardLoginFormPreview,
    source: UiCardLoginFormSource,
  }),
  uiEntry({
    name: "card",
    label: "Card",
    id: "card-billing-usage-radix",
    variant: "Billing Usage",
    installTarget: "@reui-unbound/card-billing-usage",
    dependencies: ["button", "card", "progress", "@reui-unbound/icon-placeholder"],
    Component: UiCardBillingUsagePreview,
    source: UiCardBillingUsageSource,
  }),
  uiEntry({
    name: "card",
    label: "Card",
    id: "card-deployment-status-radix",
    variant: "Deployment Status",
    installTarget: "@reui-unbound/card-deployment-status",
    dependencies: ["card", "@reui-unbound/icon-placeholder"],
    Component: UiCardDeploymentStatusPreview,
    source: UiCardDeploymentStatusSource,
  }),
  uiEntry({
    name: "card",
    label: "Card",
    id: "card-stat-trend-radix",
    variant: "Stat Trend",
    installTarget: "@reui-unbound/card-stat-trend",
    dependencies: ["@reui-unbound/badge", "button", "card", "dropdown-menu", "separator", "@reui-unbound/icon-placeholder"],
    Component: UiCardStatTrendPreview,
    source: UiCardStatTrendSource,
  }),
  uiEntry({
    name: "card",
    label: "Card",
    id: "card-badge-actions-radix",
    variant: "Badge & Actions",
    installTarget: "@reui-unbound/card-badge-actions",
    dependencies: ["@reui-unbound/badge", "avatar", "button", "card", "dropdown-menu", "@reui-unbound/icon-placeholder"],
    Component: UiCardBadgeActionsPreview,
    source: UiCardBadgeActionsSource,
  }),
  uiEntry({
    name: "card",
    label: "Card",
    id: "card-icon-link-radix",
    variant: "Icon & Link",
    installTarget: "@reui-unbound/card-icon-link",
    dependencies: ["card", "@reui-unbound/icon-placeholder"],
    Component: UiCardIconLinkPreview,
    source: UiCardIconLinkSource,
  }),
  uiEntry({
    name: "card",
    label: "Card",
    id: "card-label-link-radix",
    variant: "Label & Link",
    installTarget: "@reui-unbound/card-label-link",
    dependencies: ["card", "@reui-unbound/icon-placeholder"],
    Component: UiCardLabelLinkPreview,
    source: UiCardLabelLinkSource,
  }),
  uiEntry({
    name: "carousel",
    label: "Carousel",
    Component: UiCarouselPreview,
    source: UiCarouselSource,
  }),
  uiEntry({
    name: "carousel",
    label: "Carousel",
    id: "carousel-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/carousel-standard",
    dependencies: ["card", "carousel"],
    Component: UiCarouselStandardPreview,
    source: UiCarouselStandardSource,
  }),
  uiEntry({
    name: "carousel",
    label: "Carousel",
    id: "carousel-vertical-radix",
    variant: "Vertical",
    installTarget: "@reui-unbound/carousel-vertical",
    dependencies: ["card", "carousel"],
    Component: UiCarouselVerticalPreview,
    source: UiCarouselVerticalSource,
  }),
  uiEntry({
    name: "carousel",
    label: "Carousel",
    id: "carousel-multiple-items-radix",
    variant: "Multiple Items",
    installTarget: "@reui-unbound/carousel-multiple-items",
    dependencies: ["card", "carousel"],
    Component: UiCarouselMultipleItemsPreview,
    source: UiCarouselMultipleItemsSource,
  }),
  uiEntry({
    name: "carousel",
    label: "Carousel",
    id: "carousel-responsive-basis-radix",
    variant: "Responsive Basis",
    installTarget: "@reui-unbound/carousel-responsive-basis",
    dependencies: ["card", "carousel"],
    Component: UiCarouselResponsiveBasisPreview,
    source: UiCarouselResponsiveBasisSource,
  }),
  uiEntry({
    name: "carousel",
    label: "Carousel",
    id: "carousel-autoplay-radix",
    variant: "Autoplay",
    installTarget: "@reui-unbound/carousel-autoplay",
    dependencies: ["card", "carousel"],
    Component: UiCarouselAutoplayPreview,
    source: UiCarouselAutoplaySource,
  }),
  uiEntry({
    name: "carousel",
    label: "Carousel",
    id: "carousel-centered-alignment-radix",
    variant: "Centered Alignment",
    installTarget: "@reui-unbound/carousel-centered-alignment",
    dependencies: ["card", "carousel"],
    Component: UiCarouselCenteredAlignmentPreview,
    source: UiCarouselCenteredAlignmentSource,
  }),
  uiEntry({
    name: "carousel",
    label: "Carousel",
    id: "carousel-custom-spacing-radix",
    variant: "Custom Spacing",
    installTarget: "@reui-unbound/carousel-custom-spacing",
    dependencies: ["card", "carousel"],
    Component: UiCarouselCustomSpacingPreview,
    source: UiCarouselCustomSpacingSource,
  }),
  uiEntry({
    name: "carousel",
    label: "Carousel",
    id: "carousel-image-overlays-radix",
    variant: "Image Overlays",
    installTarget: "@reui-unbound/carousel-image-overlays",
    dependencies: ["card", "carousel"],
    Component: UiCarouselImageOverlaysPreview,
    source: UiCarouselImageOverlaysSource,
  }),
  uiEntry({
    name: "carousel",
    label: "Carousel",
    id: "carousel-thumbnail-strip-radix",
    variant: "Thumbnail Strip",
    installTarget: "@reui-unbound/carousel-thumbnail-strip",
    dependencies: ["carousel"],
    Component: UiCarouselThumbnailStripPreview,
    source: UiCarouselThumbnailStripSource,
  }),
  uiEntry({
    name: "carousel",
    label: "Carousel",
    id: "carousel-overlay-thumbnails-radix",
    variant: "Overlay Thumbnails",
    installTarget: "@reui-unbound/carousel-overlay-thumbnails",
    dependencies: ["carousel"],
    Component: UiCarouselOverlayThumbnailsPreview,
    source: UiCarouselOverlayThumbnailsSource,
  }),
  uiEntry({
    name: "carousel",
    label: "Carousel",
    id: "carousel-dots-navigation-radix",
    variant: "Dots Navigation",
    installTarget: "@reui-unbound/carousel-dots-navigation",
    dependencies: ["card", "carousel"],
    Component: UiCarouselDotsNavigationPreview,
    source: UiCarouselDotsNavigationSource,
  }),
  uiEntry({
    name: "chart",
    label: "Chart",
    Component: UiChartPreview,
    source: UiChartSource,
  }),
  uiEntry({
    name: "chart",
    label: "Chart",
    id: "chart-bars-radix",
    variant: "Bars",
    installTarget: "@reui-unbound/chart-bars",
    dependencies: ["@reui-unbound/badge", "card", "chart", "@reui-unbound/icon-placeholder"],
    Component: UiChartBarsPreview,
    source: UiChartBarsSource,
  }),
  uiEntry({
    name: "chart",
    label: "Chart",
    id: "chart-multi-dataset-bars-radix",
    variant: "Multi-Dataset Bars",
    installTarget: "@reui-unbound/chart-multi-dataset-bars",
    dependencies: ["@reui-unbound/badge", "card", "chart", "@reui-unbound/icon-placeholder"],
    Component: UiChartMultiDatasetBarsPreview,
    source: UiChartMultiDatasetBarsSource,
  }),
  uiEntry({
    name: "chart",
    label: "Chart",
    id: "chart-diagonal-stripe-bars-radix",
    variant: "Diagonal Stripe Bars",
    installTarget: "@reui-unbound/chart-diagonal-stripe-bars",
    dependencies: ["@reui-unbound/badge", "card", "chart", "@reui-unbound/icon-placeholder"],
    Component: UiChartDiagonalStripeBarsPreview,
    source: UiChartDiagonalStripeBarsSource,
  }),
  uiEntry({
    name: "chart",
    label: "Chart",
    id: "chart-dotted-bars-radix",
    variant: "Dotted Bars",
    installTarget: "@reui-unbound/chart-dotted-bars",
    dependencies: ["@reui-unbound/badge", "card", "chart", "@reui-unbound/icon-placeholder"],
    Component: UiChartDottedBarsPreview,
    source: UiChartDottedBarsSource,
  }),
  uiEntry({
    name: "chart",
    label: "Chart",
    id: "chart-striped-solid-bars-radix",
    variant: "Striped Solid Bars",
    installTarget: "@reui-unbound/chart-striped-solid-bars",
    dependencies: ["@reui-unbound/badge", "card", "chart", "@reui-unbound/icon-placeholder"],
    Component: UiChartStripedSolidBarsPreview,
    source: UiChartStripedSolidBarsSource,
  }),
  uiEntry({
    name: "chart",
    label: "Chart",
    id: "chart-3d-gradient-bars-radix",
    variant: "3D Gradient Bars",
    installTarget: "@reui-unbound/chart-3d-gradient-bars",
    dependencies: ["@reui-unbound/badge", "card", "chart", "@reui-unbound/icon-placeholder"],
    Component: UiChart3dGradientBarsPreview,
    source: UiChart3dGradientBarsSource,
  }),
  uiEntry({
    name: "chart",
    label: "Chart",
    id: "chart-gradient-bars-radix",
    variant: "Gradient Bars",
    installTarget: "@reui-unbound/chart-gradient-bars",
    dependencies: ["@reui-unbound/badge", "card", "chart", "@reui-unbound/icon-placeholder"],
    Component: UiChartGradientBarsPreview,
    source: UiChartGradientBarsSource,
  }),
  uiEntry({
    name: "chart",
    label: "Chart",
    id: "chart-isometric-bars-radix",
    variant: "Isometric Bars",
    installTarget: "@reui-unbound/chart-isometric-bars",
    dependencies: ["@reui-unbound/badge", "card", "chart", "@reui-unbound/icon-placeholder"],
    Component: UiChartIsometricBarsPreview,
    source: UiChartIsometricBarsSource,
  }),
  uiEntry({
    name: "chart",
    label: "Chart",
    id: "chart-dotted-solid-bars-radix",
    variant: "Dotted Solid Bars",
    installTarget: "@reui-unbound/chart-dotted-solid-bars",
    dependencies: ["@reui-unbound/badge", "card", "chart", "@reui-unbound/icon-placeholder"],
    Component: UiChartDottedSolidBarsPreview,
    source: UiChartDottedSolidBarsSource,
  }),
  uiEntry({
    name: "chart",
    label: "Chart",
    id: "chart-duotone-bars-radix",
    variant: "Duotone Bars",
    installTarget: "@reui-unbound/chart-duotone-bars",
    dependencies: ["@reui-unbound/badge", "card", "chart", "@reui-unbound/icon-placeholder"],
    Component: UiChartDuotoneBarsPreview,
    source: UiChartDuotoneBarsSource,
  }),
  uiEntry({
    name: "chart",
    label: "Chart",
    id: "chart-animated-monochrome-bars-radix",
    variant: "Animated Monochrome Bars",
    installTarget: "@reui-unbound/chart-animated-monochrome-bars",
    dependencies: ["@reui-unbound/badge", "card", "chart", "@reui-unbound/icon-placeholder"],
    Component: UiChartAnimatedMonochromeBarsPreview,
    source: UiChartAnimatedMonochromeBarsSource,
  }),
  uiEntry({
    name: "chart",
    label: "Chart",
    id: "chart-horizontal-bars-radix",
    variant: "Horizontal Bars",
    installTarget: "@reui-unbound/chart-horizontal-bars",
    dependencies: ["@reui-unbound/badge", "card", "chart", "@reui-unbound/icon-placeholder"],
    Component: UiChartHorizontalBarsPreview,
    source: UiChartHorizontalBarsSource,
  }),
  uiEntry({
    name: "chart",
    label: "Chart",
    id: "chart-gradient-area-radix",
    variant: "Gradient Area",
    installTarget: "@reui-unbound/chart-gradient-area",
    dependencies: ["@reui-unbound/badge", "card", "chart", "@reui-unbound/icon-placeholder"],
    Component: UiChartGradientAreaPreview,
    source: UiChartGradientAreaSource,
  }),
  uiEntry({
    name: "chart",
    label: "Chart",
    id: "chart-stacked-dashed-area-radix",
    variant: "Stacked Dashed Area",
    installTarget: "@reui-unbound/chart-stacked-dashed-area",
    dependencies: ["@reui-unbound/badge", "card", "chart", "@reui-unbound/icon-placeholder"],
    Component: UiChartStackedDashedAreaPreview,
    source: UiChartStackedDashedAreaSource,
  }),
  uiEntry({
    name: "chart",
    label: "Chart",
    id: "chart-dotted-step-area-radix",
    variant: "Dotted Step Area",
    installTarget: "@reui-unbound/chart-dotted-step-area",
    dependencies: ["@reui-unbound/badge", "card", "chart", "@reui-unbound/icon-placeholder"],
    Component: UiChartDottedStepAreaPreview,
    source: UiChartDottedStepAreaSource,
  }),
  uiEntry({
    name: "chart",
    label: "Chart",
    id: "chart-glowing-dot-area-radix",
    variant: "Glowing Dot Area",
    installTarget: "@reui-unbound/chart-glowing-dot-area",
    dependencies: ["@reui-unbound/badge", "card", "chart", "@reui-unbound/icon-placeholder"],
    Component: UiChartGlowingDotAreaPreview,
    source: UiChartGlowingDotAreaSource,
  }),
  uiEntry({
    name: "chart",
    label: "Chart",
    id: "chart-forecast-line-radix",
    variant: "Forecast Line",
    installTarget: "@reui-unbound/chart-forecast-line",
    dependencies: ["card", "chart"],
    Component: UiChartForecastLinePreview,
    source: UiChartForecastLineSource,
  }),
  uiEntry({
    name: "chart",
    label: "Chart",
    id: "chart-crosshatch-area-radix",
    variant: "Crosshatch Area",
    installTarget: "@reui-unbound/chart-crosshatch-area",
    dependencies: ["@reui-unbound/badge", "card", "chart", "@reui-unbound/icon-placeholder"],
    Component: UiChartCrosshatchAreaPreview,
    source: UiChartCrosshatchAreaSource,
  }),
  uiEntry({
    name: "chart",
    label: "Chart",
    id: "chart-donut-center-total-radix",
    variant: "Donut Center Total",
    installTarget: "@reui-unbound/chart-donut-center-total",
    dependencies: ["card", "chart"],
    Component: UiChartDonutCenterTotalPreview,
    source: UiChartDonutCenterTotalSource,
  }),
  uiEntry({
    name: "chart",
    label: "Chart",
    id: "chart-donut-center-stats-radix",
    variant: "Donut Center Stats",
    installTarget: "@reui-unbound/chart-donut-center-stats",
    dependencies: ["card", "chart"],
    Component: UiChartDonutCenterStatsPreview,
    source: UiChartDonutCenterStatsSource,
  }),
  uiEntry({
    name: "chart",
    label: "Chart",
    id: "chart-striped-pie-radix",
    variant: "Striped Pie",
    installTarget: "@reui-unbound/chart-striped-pie",
    dependencies: ["card", "chart"],
    Component: UiChartStripedPiePreview,
    source: UiChartStripedPieSource,
  }),
  uiEntry({
    name: "chart",
    label: "Chart",
    id: "chart-active-segment-donut-radix",
    variant: "Active Segment Donut",
    installTarget: "@reui-unbound/chart-active-segment-donut",
    dependencies: ["card", "chart"],
    Component: UiChartActiveSegmentDonutPreview,
    source: UiChartActiveSegmentDonutSource,
  }),
  uiEntry({
    name: "chart",
    label: "Chart",
    id: "chart-gradient-radar-radix",
    variant: "Gradient Radar",
    installTarget: "@reui-unbound/chart-gradient-radar",
    dependencies: ["card", "chart"],
    Component: UiChartGradientRadarPreview,
    source: UiChartGradientRadarSource,
  }),
  uiEntry({
    name: "chart",
    label: "Chart",
    id: "chart-glowing-stroke-radar-radix",
    variant: "Glowing Stroke Radar",
    installTarget: "@reui-unbound/chart-glowing-stroke-radar",
    dependencies: ["card", "chart"],
    Component: UiChartGlowingStrokeRadarPreview,
    source: UiChartGlowingStrokeRadarSource,
  }),
  uiEntry({
    name: "chart",
    label: "Chart",
    id: "chart-radial-scores-radix",
    variant: "Radial Scores",
    installTarget: "@reui-unbound/chart-radial-scores",
    dependencies: ["card", "chart"],
    Component: UiChartRadialScoresPreview,
    source: UiChartRadialScoresSource,
  }),
  uiEntry({
    name: "checkbox",
    label: "Checkbox",
    Component: UiCheckboxPreview,
    source: UiCheckboxSource,
  }),
  uiEntry({
    name: "checkbox",
    label: "Checkbox",
    id: "checkbox-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/checkbox-standard",
    dependencies: ["checkbox", "field"],
    Component: UiCheckboxStandardPreview,
    source: UiCheckboxStandardSource,
  }),
  uiEntry({
    name: "checkbox",
    label: "Checkbox",
    id: "checkbox-disabled-radix",
    variant: "Disabled",
    installTarget: "@reui-unbound/checkbox-disabled",
    dependencies: ["checkbox", "field"],
    Component: UiCheckboxDisabledPreview,
    source: UiCheckboxDisabledSource,
  }),
  uiEntry({
    name: "checkbox",
    label: "Checkbox",
    id: "checkbox-invalid-radix",
    variant: "Invalid",
    installTarget: "@reui-unbound/checkbox-invalid",
    dependencies: ["checkbox", "field"],
    Component: UiCheckboxInvalidPreview,
    source: UiCheckboxInvalidSource,
  }),
  uiEntry({
    name: "checkbox",
    label: "Checkbox",
    id: "checkbox-indeterminate-radix",
    variant: "Indeterminate",
    installTarget: "@reui-unbound/checkbox-indeterminate",
    dependencies: ["checkbox", "field"],
    Component: UiCheckboxIndeterminatePreview,
    source: UiCheckboxIndeterminateSource,
  }),
  uiEntry({
    name: "checkbox",
    label: "Checkbox",
    id: "checkbox-label-description-radix",
    variant: "Label & Description",
    installTarget: "@reui-unbound/checkbox-label-description",
    dependencies: ["checkbox", "field"],
    Component: UiCheckboxLabelDescriptionPreview,
    source: UiCheckboxLabelDescriptionSource,
  }),
  uiEntry({
    name: "checkbox",
    label: "Checkbox",
    id: "checkbox-colored-radix",
    variant: "Colored",
    installTarget: "@reui-unbound/checkbox-colored",
    dependencies: ["checkbox", "field"],
    Component: UiCheckboxColoredPreview,
    source: UiCheckboxColoredSource,
  }),
  uiEntry({
    name: "checkbox",
    label: "Checkbox",
    id: "checkbox-circle-todo-radix",
    variant: "Circle To-Do",
    installTarget: "@reui-unbound/checkbox-circle-todo",
    dependencies: ["checkbox", "field"],
    Component: UiCheckboxCircleTodoPreview,
    source: UiCheckboxCircleTodoSource,
  }),
  uiEntry({
    name: "checkbox",
    label: "Checkbox",
    id: "checkbox-group-radix",
    variant: "Group",
    installTarget: "@reui-unbound/checkbox-group",
    dependencies: ["checkbox", "field"],
    Component: UiCheckboxGroupPreview,
    source: UiCheckboxGroupSource,
  }),
  uiEntry({
    name: "checkbox",
    label: "Checkbox",
    id: "checkbox-setting-card-radix",
    variant: "Setting Card",
    installTarget: "@reui-unbound/checkbox-setting-card",
    dependencies: ["checkbox", "field"],
    Component: UiCheckboxSettingCardPreview,
    source: UiCheckboxSettingCardSource,
  }),
  uiEntry({
    name: "checkbox",
    label: "Checkbox",
    id: "checkbox-frame-group-radix",
    variant: "Frame Group",
    installTarget: "@reui-unbound/checkbox-frame-group",
    dependencies: ["@reui-unbound/frame", "checkbox", "field", "separator"],
    Component: UiCheckboxFrameGroupPreview,
    source: UiCheckboxFrameGroupSource,
  }),
  uiEntry({
    name: "checkbox",
    label: "Checkbox",
    id: "checkbox-card-rows-radix",
    variant: "Card Rows",
    installTarget: "@reui-unbound/checkbox-card-rows",
    dependencies: ["card", "checkbox", "field", "separator"],
    Component: UiCheckboxCardRowsPreview,
    source: UiCheckboxCardRowsSource,
  }),
  uiEntry({
    name: "checkbox",
    label: "Checkbox",
    id: "checkbox-icon-card-rows-radix",
    variant: "Icon Card Rows",
    installTarget: "@reui-unbound/checkbox-icon-card-rows",
    dependencies: ["card", "checkbox", "field", "separator", "@reui-unbound/icon-placeholder"],
    Component: UiCheckboxIconCardRowsPreview,
    source: UiCheckboxIconCardRowsSource,
  }),
  uiEntry({
    name: "checkbox",
    label: "Checkbox",
    id: "checkbox-corner-check-tiles-radix",
    variant: "Corner Check Tiles",
    installTarget: "@reui-unbound/checkbox-corner-check-tiles",
    dependencies: ["checkbox", "field"],
    Component: UiCheckboxCornerCheckTilesPreview,
    source: UiCheckboxCornerCheckTilesSource,
  }),
  uiEntry({
    name: "checkbox",
    label: "Checkbox",
    id: "checkbox-module-tiles-radix",
    variant: "Module Tiles",
    installTarget: "@reui-unbound/checkbox-module-tiles",
    dependencies: ["checkbox", "field", "@reui-unbound/icon-placeholder"],
    Component: UiCheckboxModuleTilesPreview,
    source: UiCheckboxModuleTilesSource,
  }),
  uiEntry({
    name: "checkbox",
    label: "Checkbox",
    id: "checkbox-avatar-card-radix",
    variant: "Avatar Card",
    installTarget: "@reui-unbound/checkbox-avatar-card",
    dependencies: ["avatar", "checkbox", "field"],
    Component: UiCheckboxAvatarCardPreview,
    source: UiCheckboxAvatarCardSource,
  }),
  uiEntry({
    name: "checkbox",
    label: "Checkbox",
    id: "checkbox-nested-permissions-radix",
    variant: "Nested Permissions",
    installTarget: "@reui-unbound/checkbox-nested-permissions",
    dependencies: ["checkbox", "field"],
    Component: UiCheckboxNestedPermissionsPreview,
    source: UiCheckboxNestedPermissionsSource,
  }),
  uiEntry({
    name: "checkbox",
    label: "Checkbox",
    id: "checkbox-payment-method-radix",
    variant: "Payment Method",
    installTarget: "@reui-unbound/checkbox-payment-method",
    dependencies: ["checkbox", "field"],
    Component: UiCheckboxPaymentMethodPreview,
    source: UiCheckboxPaymentMethodSource,
  }),
  uiEntry({
    name: "checkbox",
    label: "Checkbox",
    id: "checkbox-help-icon-tooltip-radix",
    variant: "Help Icon Tooltip",
    installTarget: "@reui-unbound/checkbox-help-icon-tooltip",
    dependencies: ["checkbox", "field", "tooltip", "@reui-unbound/icon-placeholder"],
    Component: UiCheckboxHelpIconTooltipPreview,
    source: UiCheckboxHelpIconTooltipSource,
  }),
  uiEntry({
    name: "checkbox",
    label: "Checkbox",
    id: "checkbox-badge-group-radix",
    variant: "Badge Group",
    installTarget: "@reui-unbound/checkbox-badge-group",
    dependencies: ["@reui-unbound/badge", "checkbox", "field"],
    Component: UiCheckboxBadgeGroupPreview,
    source: UiCheckboxBadgeGroupSource,
  }),
  uiEntry({
    name: "checkbox",
    label: "Checkbox",
    id: "checkbox-right-side-tooltip-radix",
    variant: "Right Side Tooltip",
    installTarget: "@reui-unbound/checkbox-right-side-tooltip",
    dependencies: ["checkbox", "field", "tooltip", "@reui-unbound/icon-placeholder"],
    Component: UiCheckboxRightSideTooltipPreview,
    source: UiCheckboxRightSideTooltipSource,
  }),
  uiEntry({
    name: "checkbox",
    label: "Checkbox",
    id: "checkbox-inline-group-radix",
    variant: "Inline Group",
    installTarget: "@reui-unbound/checkbox-inline-group",
    dependencies: ["checkbox", "field"],
    Component: UiCheckboxInlineGroupPreview,
    source: UiCheckboxInlineGroupSource,
  }),
  uiEntry({
    name: "checkbox",
    label: "Checkbox",
    id: "checkbox-uppercase-badges-radix",
    variant: "Uppercase Badges",
    installTarget: "@reui-unbound/checkbox-uppercase-badges",
    dependencies: ["@reui-unbound/badge", "checkbox", "field"],
    Component: UiCheckboxUppercaseBadgesPreview,
    source: UiCheckboxUppercaseBadgesSource,
  }),
  uiEntry({
    name: "collapsible",
    label: "Collapsible",
    Component: UiCollapsiblePreview,
    source: UiCollapsibleSource,
  }),
  uiEntry({
    name: "collapsible",
    label: "Collapsible",
    id: "collapsible-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/collapsible-standard",
    dependencies: ["@reui-unbound/badge", "button", "collapsible", "@reui-unbound/icon-placeholder"],
    Component: UiCollapsibleStandardPreview,
    source: UiCollapsibleStandardSource,
  }),
  uiEntry({
    name: "collapsible",
    label: "Collapsible",
    id: "collapsible-checkbox-settings-radix",
    variant: "Checkbox Settings",
    installTarget: "@reui-unbound/collapsible-checkbox-settings",
    dependencies: ["button", "card", "checkbox", "collapsible", "field", "@reui-unbound/icon-placeholder"],
    Component: UiCollapsibleCheckboxSettingsPreview,
    source: UiCollapsibleCheckboxSettingsSource,
  }),
  uiEntry({
    name: "collapsible",
    label: "Collapsible",
    id: "collapsible-animated-card-radix",
    variant: "Animated Card",
    installTarget: "@reui-unbound/collapsible-animated-card",
    dependencies: ["card", "collapsible", "@reui-unbound/icon-placeholder"],
    Component: UiCollapsibleAnimatedCardPreview,
    source: UiCollapsibleAnimatedCardSource,
  }),
  uiEntry({
    name: "collapsible",
    label: "Collapsible",
    id: "collapsible-bottom-trigger-radix",
    variant: "Bottom Trigger",
    installTarget: "@reui-unbound/collapsible-bottom-trigger",
    dependencies: ["button", "card", "collapsible", "progress", "@reui-unbound/icon-placeholder"],
    Component: UiCollapsibleBottomTriggerPreview,
    source: UiCollapsibleBottomTriggerSource,
  }),
  uiEntry({
    name: "collapsible",
    label: "Collapsible",
    id: "collapsible-form-fields-radix",
    variant: "Form Fields",
    installTarget: "@reui-unbound/collapsible-form-fields",
    dependencies: ["button", "card", "collapsible", "field", "input-group", "@reui-unbound/icon-placeholder"],
    Component: UiCollapsibleFormFieldsPreview,
    source: UiCollapsibleFormFieldsSource,
  }),
  uiEntry({
    name: "collapsible",
    label: "Collapsible",
    id: "collapsible-in-frame-radix",
    variant: "In Frame",
    installTarget: "@reui-unbound/collapsible-in-frame",
    dependencies: ["@reui-unbound/frame", "collapsible", "@reui-unbound/icon-placeholder"],
    Component: UiCollapsibleInFramePreview,
    source: UiCollapsibleInFrameSource,
  }),
  uiEntry({
    name: "collapsible",
    label: "Collapsible",
    id: "collapsible-nested-list-radix",
    variant: "Nested List",
    installTarget: "@reui-unbound/collapsible-nested-list",
    dependencies: ["@reui-unbound/use-copy-to-clipboard", "@reui-unbound/frame", "button", "collapsible", "dropdown-menu", "@reui-unbound/icon-placeholder"],
    Component: UiCollapsibleNestedListPreview,
    source: UiCollapsibleNestedListSource,
  }),
  uiEntry({
    name: "collapsible",
    label: "Collapsible",
    id: "collapsible-user-profile-radix",
    variant: "User Profile",
    installTarget: "@reui-unbound/collapsible-user-profile",
    dependencies: ["@reui-unbound/frame", "avatar", "collapsible", "@reui-unbound/icon-placeholder"],
    Component: UiCollapsibleUserProfilePreview,
    source: UiCollapsibleUserProfileSource,
  }),
  uiEntry({
    name: "collapsible",
    label: "Collapsible",
    id: "collapsible-multi-level-menu-radix",
    variant: "Multi-Level Menu",
    installTarget: "@reui-unbound/collapsible-multi-level-menu",
    dependencies: ["card", "collapsible", "item", "@reui-unbound/icon-placeholder"],
    Component: UiCollapsibleMultiLevelMenuPreview,
    source: UiCollapsibleMultiLevelMenuSource,
  }),
  uiEntry({
    name: "collapsible",
    label: "Collapsible",
    id: "collapsible-file-tree-radix",
    variant: "File Tree",
    installTarget: "@reui-unbound/collapsible-file-tree",
    dependencies: ["button", "card", "collapsible", "item", "tabs", "@reui-unbound/icon-placeholder"],
    Component: UiCollapsibleFileTreePreview,
    source: UiCollapsibleFileTreeSource,
  }),
  uiEntry({
    name: "combobox",
    label: "Combobox",
    Component: UiComboboxPreview,
    source: UiComboboxSource,
  }),
  uiEntry({
    name: "combobox",
    label: "Combobox",
    id: "combobox-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/combobox-standard",
    dependencies: ["combobox", "field"],
    Component: UiComboboxStandardPreview,
    source: UiComboboxStandardSource,
  }),
  uiEntry({
    name: "combobox",
    label: "Combobox",
    id: "combobox-disabled-radix",
    variant: "Disabled",
    installTarget: "@reui-unbound/combobox-disabled",
    dependencies: ["combobox", "field"],
    Component: UiComboboxDisabledPreview,
    source: UiComboboxDisabledSource,
  }),
  uiEntry({
    name: "combobox",
    label: "Combobox",
    id: "combobox-invalid-radix",
    variant: "Invalid",
    installTarget: "@reui-unbound/combobox-invalid",
    dependencies: ["combobox", "field"],
    Component: UiComboboxInvalidPreview,
    source: UiComboboxInvalidSource,
  }),
  uiEntry({
    name: "combobox",
    label: "Combobox",
    id: "combobox-clear-button-radix",
    variant: "Clear Button",
    installTarget: "@reui-unbound/combobox-clear-button",
    dependencies: ["combobox", "field"],
    Component: UiComboboxClearButtonPreview,
    source: UiComboboxClearButtonSource,
  }),
  uiEntry({
    name: "combobox",
    label: "Combobox",
    id: "combobox-auto-highlight-radix",
    variant: "Auto-Highlight",
    installTarget: "@reui-unbound/combobox-auto-highlight",
    dependencies: ["combobox", "field"],
    Component: UiComboboxAutoHighlightPreview,
    source: UiComboboxAutoHighlightSource,
  }),
  uiEntry({
    name: "combobox",
    label: "Combobox",
    id: "combobox-grouped-options-radix",
    variant: "Grouped Options",
    installTarget: "@reui-unbound/combobox-grouped-options",
    dependencies: ["combobox", "field"],
    Component: UiComboboxGroupedOptionsPreview,
    source: UiComboboxGroupedOptionsSource,
  }),
  uiEntry({
    name: "combobox",
    label: "Combobox",
    id: "combobox-group-separators-radix",
    variant: "Group Separators",
    installTarget: "@reui-unbound/combobox-group-separators",
    dependencies: ["combobox", "field"],
    Component: UiComboboxGroupSeparatorsPreview,
    source: UiComboboxGroupSeparatorsSource,
  }),
  uiEntry({
    name: "combobox",
    label: "Combobox",
    id: "combobox-large-list-radix",
    variant: "Large List",
    installTarget: "@reui-unbound/combobox-large-list",
    dependencies: ["combobox", "field"],
    Component: UiComboboxLargeListPreview,
    source: UiComboboxLargeListSource,
  }),
  uiEntry({
    name: "combobox",
    label: "Combobox",
    id: "combobox-icon-addon-radix",
    variant: "Icon Addon",
    installTarget: "@reui-unbound/combobox-icon-addon",
    dependencies: ["combobox", "field", "input-group", "@reui-unbound/icon-placeholder"],
    Component: UiComboboxIconAddonPreview,
    source: UiComboboxIconAddonSource,
  }),
  uiEntry({
    name: "combobox",
    label: "Combobox",
    id: "combobox-country-picker-radix",
    variant: "Country Picker",
    installTarget: "@reui-unbound/combobox-country-picker",
    dependencies: ["button", "combobox", "field"],
    Component: UiComboboxCountryPickerPreview,
    source: UiComboboxCountryPickerSource,
  }),
  uiEntry({
    name: "combobox",
    label: "Combobox",
    id: "combobox-in-form-radix",
    variant: "In Form",
    installTarget: "@reui-unbound/combobox-in-form",
    dependencies: ["button", "combobox", "field"],
    Component: UiComboboxInFormPreview,
    source: UiComboboxInFormSource,
  }),
  uiEntry({
    name: "combobox",
    label: "Combobox",
    id: "combobox-multi-select-radix",
    variant: "Multi-Select",
    installTarget: "@reui-unbound/combobox-multi-select",
    dependencies: ["combobox", "field"],
    Component: UiComboboxMultiSelectPreview,
    source: UiComboboxMultiSelectSource,
  }),
  uiEntry({
    name: "combobox",
    label: "Combobox",
    id: "combobox-disabled-multi-select-radix",
    variant: "Disabled Multi-Select",
    installTarget: "@reui-unbound/combobox-disabled-multi-select",
    dependencies: ["combobox", "field"],
    Component: UiComboboxDisabledMultiSelectPreview,
    source: UiComboboxDisabledMultiSelectSource,
  }),
  uiEntry({
    name: "combobox",
    label: "Combobox",
    id: "combobox-invalid-multi-select-radix",
    variant: "Invalid Multi-Select",
    installTarget: "@reui-unbound/combobox-invalid-multi-select",
    dependencies: ["combobox", "field"],
    Component: UiComboboxInvalidMultiSelectPreview,
    source: UiComboboxInvalidMultiSelectSource,
  }),
  uiEntry({
    name: "combobox",
    label: "Combobox",
    id: "combobox-non-removable-chips-radix",
    variant: "Non-Removable Chips",
    installTarget: "@reui-unbound/combobox-non-removable-chips",
    dependencies: ["combobox", "field"],
    Component: UiComboboxNonRemovableChipsPreview,
    source: UiComboboxNonRemovableChipsSource,
  }),
  uiEntry({
    name: "combobox",
    label: "Combobox",
    id: "combobox-custom-items-radix",
    variant: "Custom Items",
    installTarget: "@reui-unbound/combobox-custom-items",
    dependencies: ["avatar", "button", "combobox", "field", "item"],
    Component: UiComboboxCustomItemsPreview,
    source: UiComboboxCustomItemsSource,
  }),
  uiEntry({
    name: "combobox",
    label: "Combobox",
    id: "combobox-in-dialog-radix",
    variant: "In Dialog",
    installTarget: "@reui-unbound/combobox-in-dialog",
    dependencies: ["button", "combobox", "dialog", "field"],
    Component: UiComboboxInDialogPreview,
    source: UiComboboxInDialogSource,
  }),
  uiEntry({
    name: "combobox",
    label: "Combobox",
    id: "combobox-custom-trigger-icon-radix",
    variant: "Custom Trigger Icon",
    installTarget: "@reui-unbound/combobox-custom-trigger-icon",
    dependencies: ["combobox", "field", "@reui-unbound/icon-placeholder"],
    Component: UiComboboxCustomTriggerIconPreview,
    source: UiComboboxCustomTriggerIconSource,
  }),
  uiEntry({
    name: "combobox",
    label: "Combobox",
    id: "combobox-user-tags-radix",
    variant: "User Tags",
    installTarget: "@reui-unbound/combobox-user-tags",
    dependencies: ["avatar", "combobox", "field", "item"],
    Component: UiComboboxUserTagsPreview,
    source: UiComboboxUserTagsSource,
  }),
  uiEntry({
    name: "combobox",
    label: "Combobox",
    id: "combobox-invisible-tags-radix",
    variant: "Invisible Tags",
    installTarget: "@reui-unbound/combobox-invisible-tags",
    dependencies: ["avatar", "combobox", "field", "item"],
    Component: UiComboboxInvisibleTagsPreview,
    source: UiComboboxInvisibleTagsSource,
  }),
  uiEntry({
    name: "combobox",
    label: "Combobox",
    id: "combobox-status-change-radix",
    variant: "Status Change",
    installTarget: "@reui-unbound/combobox-status-change",
    dependencies: ["button", "combobox", "field", "@reui-unbound/icon-placeholder"],
    Component: UiComboboxStatusChangePreview,
    source: UiComboboxStatusChangeSource,
  }),
  uiEntry({
    name: "combobox",
    label: "Combobox",
    id: "combobox-priority-change-radix",
    variant: "Priority Change",
    installTarget: "@reui-unbound/combobox-priority-change",
    dependencies: ["button", "combobox", "field", "@reui-unbound/icon-placeholder"],
    Component: UiComboboxPriorityChangePreview,
    source: UiComboboxPriorityChangeSource,
  }),
  uiEntry({
    name: "combobox",
    label: "Combobox",
    id: "combobox-lead-selection-radix",
    variant: "Lead Selection",
    installTarget: "@reui-unbound/combobox-lead-selection",
    dependencies: ["avatar", "button", "combobox", "field", "item", "@reui-unbound/icon-placeholder"],
    Component: UiComboboxLeadSelectionPreview,
    source: UiComboboxLeadSelectionSource,
  }),
  uiEntry({
    name: "combobox",
    label: "Combobox",
    id: "combobox-member-selection-radix",
    variant: "Member Selection",
    installTarget: "@reui-unbound/combobox-member-selection",
    dependencies: ["avatar", "button", "combobox", "field", "item", "@reui-unbound/icon-placeholder"],
    Component: UiComboboxMemberSelectionPreview,
    source: UiComboboxMemberSelectionSource,
  }),
  uiEntry({
    name: "combobox",
    label: "Combobox",
    id: "combobox-date-selection-radix",
    variant: "Date Selection",
    installTarget: "@reui-unbound/combobox-date-selection",
    dependencies: ["button", "calendar", "combobox", "dialog", "field", "@reui-unbound/icon-placeholder"],
    Component: UiComboboxDateSelectionPreview,
    source: UiComboboxDateSelectionSource,
  }),
  uiEntry({
    name: "combobox",
    label: "Combobox",
    id: "combobox-label-selection-radix",
    variant: "Label Selection",
    installTarget: "@reui-unbound/combobox-label-selection",
    dependencies: ["button", "combobox", "field", "@reui-unbound/icon-placeholder"],
    Component: UiComboboxLabelSelectionPreview,
    source: UiComboboxLabelSelectionSource,
  }),
  uiEntry({
    name: "combobox",
    label: "Combobox",
    id: "combobox-team-selection-radix",
    variant: "Team Selection",
    installTarget: "@reui-unbound/combobox-team-selection",
    dependencies: ["button", "combobox", "field", "@reui-unbound/icon-placeholder"],
    Component: UiComboboxTeamSelectionPreview,
    source: UiComboboxTeamSelectionSource,
  }),
  uiEntry({
    name: "combobox",
    label: "Combobox",
    id: "combobox-assignee-selection-radix",
    variant: "Assignee Selection",
    installTarget: "@reui-unbound/combobox-assignee-selection",
    dependencies: ["avatar", "button", "combobox", "field", "item", "@reui-unbound/icon-placeholder"],
    Component: UiComboboxAssigneeSelectionPreview,
    source: UiComboboxAssigneeSelectionSource,
  }),
  uiEntry({
    name: "command",
    label: "Command",
    Component: UiCommandPreview,
    source: UiCommandSource,
  }),
  uiEntry({
    name: "command",
    label: "Command",
    id: "command-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/command-standard",
    dependencies: ["card", "command", "@reui-unbound/icon-placeholder"],
    Component: UiCommandStandardPreview,
    source: UiCommandStandardSource,
  }),
  uiEntry({
    name: "command",
    label: "Command",
    id: "command-shortcuts-radix",
    variant: "Shortcuts",
    installTarget: "@reui-unbound/command-shortcuts",
    dependencies: ["button", "command", "@reui-unbound/icon-placeholder"],
    Component: UiCommandShortcutsPreview,
    source: UiCommandShortcutsSource,
  }),
  uiEntry({
    name: "command",
    label: "Command",
    id: "command-groups-radix",
    variant: "Groups",
    installTarget: "@reui-unbound/command-groups",
    dependencies: ["button", "command", "@reui-unbound/icon-placeholder"],
    Component: UiCommandGroupsPreview,
    source: UiCommandGroupsSource,
  }),
  uiEntry({
    name: "command",
    label: "Command",
    id: "command-many-groups-radix",
    variant: "Many Groups",
    installTarget: "@reui-unbound/command-many-groups",
    dependencies: ["button", "command", "@reui-unbound/icon-placeholder"],
    Component: UiCommandManyGroupsPreview,
    source: UiCommandManyGroupsSource,
  }),
  uiEntry({
    name: "command",
    label: "Command",
    id: "command-file-search-radix",
    variant: "File Search",
    installTarget: "@reui-unbound/command-file-search",
    dependencies: ["@reui-unbound/badge", "button", "command", "kbd", "@reui-unbound/icon-placeholder"],
    Component: UiCommandFileSearchPreview,
    source: UiCommandFileSearchSource,
  }),
  uiEntry({
    name: "command",
    label: "Command",
    id: "command-user-search-radix",
    variant: "User Search",
    installTarget: "@reui-unbound/command-user-search",
    dependencies: ["@reui-unbound/badge", "avatar", "button", "command"],
    Component: UiCommandUserSearchPreview,
    source: UiCommandUserSearchSource,
  }),
  uiEntry({
    name: "command",
    label: "Command",
    id: "command-action-palette-radix",
    variant: "Action Palette",
    installTarget: "@reui-unbound/command-action-palette",
    dependencies: ["button", "command", "@reui-unbound/icon-placeholder"],
    Component: UiCommandActionPalettePreview,
    source: UiCommandActionPaletteSource,
  }),
  uiEntry({
    name: "command",
    label: "Command",
    id: "command-recent-favorites-radix",
    variant: "Recent & Favorites",
    installTarget: "@reui-unbound/command-recent-favorites",
    dependencies: ["button", "command", "@reui-unbound/icon-placeholder"],
    Component: UiCommandRecentFavoritesPreview,
    source: UiCommandRecentFavoritesSource,
  }),
  uiEntry({
    name: "context-menu",
    label: "Context Menu",
    Component: UiContextMenuPreview,
    source: UiContextMenuSource,
  }),
  uiEntry({
    name: "context-menu",
    label: "Context Menu",
    id: "context-menu-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/context-menu-standard",
    dependencies: ["context-menu"],
    Component: UiContextMenuStandardPreview,
    source: UiContextMenuStandardSource,
  }),
  uiEntry({
    name: "context-menu",
    label: "Context Menu",
    id: "context-menu-icons-radix",
    variant: "Icons",
    installTarget: "@reui-unbound/context-menu-icons",
    dependencies: ["context-menu", "@reui-unbound/icon-placeholder"],
    Component: UiContextMenuIconsPreview,
    source: UiContextMenuIconsSource,
  }),
  uiEntry({
    name: "context-menu",
    label: "Context Menu",
    id: "context-menu-shortcuts-radix",
    variant: "Shortcuts",
    installTarget: "@reui-unbound/context-menu-shortcuts",
    dependencies: ["context-menu"],
    Component: UiContextMenuShortcutsPreview,
    source: UiContextMenuShortcutsSource,
  }),
  uiEntry({
    name: "context-menu",
    label: "Context Menu",
    id: "context-menu-nested-submenus-radix",
    variant: "Nested Submenus",
    installTarget: "@reui-unbound/context-menu-nested-submenus",
    dependencies: ["context-menu"],
    Component: UiContextMenuNestedSubmenusPreview,
    source: UiContextMenuNestedSubmenusSource,
  }),
  uiEntry({
    name: "context-menu",
    label: "Context Menu",
    id: "context-menu-labels-separators-radix",
    variant: "Labels & Separators",
    installTarget: "@reui-unbound/context-menu-labels-separators",
    dependencies: ["context-menu"],
    Component: UiContextMenuLabelsSeparatorsPreview,
    source: UiContextMenuLabelsSeparatorsSource,
  }),
  uiEntry({
    name: "context-menu",
    label: "Context Menu",
    id: "context-menu-checkbox-items-radix",
    variant: "Checkbox Items",
    installTarget: "@reui-unbound/context-menu-checkbox-items",
    dependencies: ["context-menu"],
    Component: UiContextMenuCheckboxItemsPreview,
    source: UiContextMenuCheckboxItemsSource,
  }),
  uiEntry({
    name: "context-menu",
    label: "Context Menu",
    id: "context-menu-radio-items-radix",
    variant: "Radio Items",
    installTarget: "@reui-unbound/context-menu-radio-items",
    dependencies: ["context-menu"],
    Component: UiContextMenuRadioItemsPreview,
    source: UiContextMenuRadioItemsSource,
  }),
  uiEntry({
    name: "context-menu",
    label: "Context Menu",
    id: "context-menu-destructive-actions-radix",
    variant: "Destructive Actions",
    installTarget: "@reui-unbound/context-menu-destructive-actions",
    dependencies: ["context-menu", "@reui-unbound/icon-placeholder"],
    Component: UiContextMenuDestructiveActionsPreview,
    source: UiContextMenuDestructiveActionsSource,
  }),
  uiEntry({
    name: "context-menu",
    label: "Context Menu",
    id: "context-menu-alignment-sides-radix",
    variant: "Alignment Sides",
    installTarget: "@reui-unbound/context-menu-alignment-sides",
    dependencies: ["context-menu"],
    Component: UiContextMenuAlignmentSidesPreview,
    source: UiContextMenuAlignmentSidesSource,
  }),
  uiEntry({
    name: "context-menu",
    label: "Context Menu",
    id: "context-menu-inside-dialog-radix",
    variant: "Inside Dialog",
    installTarget: "@reui-unbound/context-menu-inside-dialog",
    dependencies: ["button", "context-menu", "dialog", "@reui-unbound/icon-placeholder"],
    Component: UiContextMenuInsideDialogPreview,
    source: UiContextMenuInsideDialogSource,
  }),
  uiEntry({
    name: "dialog",
    label: "Dialog",
    Component: UiDialogPreview,
    source: UiDialogSource,
  }),
  uiEntry({
    name: "dialog",
    label: "Dialog",
    id: "dialog-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/dialog-standard",
    dependencies: ["button", "dialog", "field", "input"],
    Component: UiDialogStandardPreview,
    source: UiDialogStandardSource,
  }),
  uiEntry({
    name: "dialog",
    label: "Dialog",
    id: "dialog-scrollable-content-radix",
    variant: "Scrollable Content",
    installTarget: "@reui-unbound/dialog-scrollable-content",
    dependencies: ["button", "dialog"],
    Component: UiDialogScrollableContentPreview,
    source: UiDialogScrollableContentSource,
  }),
  uiEntry({
    name: "dialog",
    label: "Dialog",
    id: "dialog-sticky-footer-radix",
    variant: "Sticky Footer",
    installTarget: "@reui-unbound/dialog-sticky-footer",
    dependencies: ["button", "dialog"],
    Component: UiDialogStickyFooterPreview,
    source: UiDialogStickyFooterSource,
  }),
  uiEntry({
    name: "dialog",
    label: "Dialog",
    id: "dialog-no-close-button-radix",
    variant: "No Close Button",
    installTarget: "@reui-unbound/dialog-no-close-button",
    dependencies: ["button", "dialog"],
    Component: UiDialogNoCloseButtonPreview,
    source: UiDialogNoCloseButtonSource,
  }),
  uiEntry({
    name: "dialog",
    label: "Dialog",
    id: "dialog-custom-close-button-radix",
    variant: "Custom Close Button",
    installTarget: "@reui-unbound/dialog-custom-close-button",
    dependencies: ["button", "dialog", "field", "input"],
    Component: UiDialogCustomCloseButtonPreview,
    source: UiDialogCustomCloseButtonSource,
  }),
  uiEntry({
    name: "dialog",
    label: "Dialog",
    id: "dialog-full-screen-radix",
    variant: "Full-Screen",
    installTarget: "@reui-unbound/dialog-full-screen",
    dependencies: ["button", "dialog"],
    Component: UiDialogFullScreenPreview,
    source: UiDialogFullScreenSource,
  }),
  uiEntry({
    name: "dialog",
    label: "Dialog",
    id: "dialog-destructive-confirmation-radix",
    variant: "Destructive Confirmation",
    installTarget: "@reui-unbound/dialog-destructive-confirmation",
    dependencies: ["button", "dialog", "@reui-unbound/icon-placeholder"],
    Component: UiDialogDestructiveConfirmationPreview,
    source: UiDialogDestructiveConfirmationSource,
  }),
  uiEntry({
    name: "dialog",
    label: "Dialog",
    id: "dialog-cookie-consent-radix",
    variant: "Cookie Consent",
    installTarget: "@reui-unbound/dialog-cookie-consent",
    dependencies: ["button", "dialog", "label", "switch"],
    Component: UiDialogCookieConsentPreview,
    source: UiDialogCookieConsentSource,
  }),
  uiEntry({
    name: "dialog",
    label: "Dialog",
    id: "dialog-keyboard-shortcuts-radix",
    variant: "Keyboard Shortcuts",
    installTarget: "@reui-unbound/dialog-keyboard-shortcuts",
    dependencies: ["button", "dialog", "kbd"],
    Component: UiDialogKeyboardShortcutsPreview,
    source: UiDialogKeyboardShortcutsSource,
  }),
  uiEntry({
    name: "dialog",
    label: "Dialog",
    id: "dialog-full-width-button-radix",
    variant: "Full Width Button",
    installTarget: "@reui-unbound/dialog-full-width-button",
    dependencies: ["button", "dialog"],
    Component: UiDialogFullWidthButtonPreview,
    source: UiDialogFullWidthButtonSource,
  }),
  uiEntry({
    name: "drawer",
    label: "Drawer",
    Component: UiDrawerPreview,
    source: UiDrawerSource,
  }),
  uiEntry({
    name: "drawer",
    label: "Drawer",
    id: "drawer-scrollable-content-radix",
    variant: "Scrollable Content",
    installTarget: "@reui-unbound/drawer-scrollable-content",
    dependencies: ["button", "drawer"],
    Component: UiDrawerScrollableContentPreview,
    source: UiDrawerScrollableContentSource,
  }),
  uiEntry({
    name: "drawer",
    label: "Drawer",
    id: "drawer-right-side-radix",
    variant: "Right Side",
    installTarget: "@reui-unbound/drawer-right-side",
    dependencies: ["button", "drawer"],
    Component: UiDrawerRightSidePreview,
    source: UiDrawerRightSideSource,
  }),
  uiEntry({
    name: "drawer",
    label: "Drawer",
    id: "drawer-left-side-radix",
    variant: "Left Side",
    installTarget: "@reui-unbound/drawer-left-side",
    dependencies: ["button", "drawer"],
    Component: UiDrawerLeftSidePreview,
    source: UiDrawerLeftSideSource,
  }),
  uiEntry({
    name: "drawer",
    label: "Drawer",
    id: "drawer-top-side-radix",
    variant: "Top Side",
    installTarget: "@reui-unbound/drawer-top-side",
    dependencies: ["button", "drawer"],
    Component: UiDrawerTopSidePreview,
    source: UiDrawerTopSideSource,
  }),
  uiEntry({
    name: "drawer",
    label: "Drawer",
    id: "drawer-all-sides-radix",
    variant: "All Sides",
    installTarget: "@reui-unbound/drawer-all-sides",
    dependencies: ["button", "drawer"],
    Component: UiDrawerAllSidesPreview,
    source: UiDrawerAllSidesSource,
  }),
  uiEntry({
    name: "dropdown-menu",
    label: "Dropdown Menu",
    Component: UiDropdownMenuPreview,
    source: UiDropdownMenuSource,
  }),
  uiEntry({
    name: "dropdown-menu",
    label: "Dropdown Menu",
    id: "dropdown-menu-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/dropdown-menu-standard",
    dependencies: ["button", "dropdown-menu"],
    Component: UiDropdownMenuStandardPreview,
    source: UiDropdownMenuStandardSource,
  }),
  uiEntry({
    name: "dropdown-menu",
    label: "Dropdown Menu",
    id: "dropdown-menu-opening-positions-radix",
    variant: "Opening Positions",
    installTarget: "@reui-unbound/dropdown-menu-opening-positions",
    dependencies: ["button", "dropdown-menu"],
    Component: UiDropdownMenuOpeningPositionsPreview,
    source: UiDropdownMenuOpeningPositionsSource,
  }),
  uiEntry({
    name: "dropdown-menu",
    label: "Dropdown Menu",
    id: "dropdown-menu-icons-radix",
    variant: "Icons",
    installTarget: "@reui-unbound/dropdown-menu-icons",
    dependencies: ["button", "dropdown-menu", "@reui-unbound/icon-placeholder"],
    Component: UiDropdownMenuIconsPreview,
    source: UiDropdownMenuIconsSource,
  }),
  uiEntry({
    name: "dropdown-menu",
    label: "Dropdown Menu",
    id: "dropdown-menu-keyboard-shortcuts-radix",
    variant: "Keyboard Shortcuts",
    installTarget: "@reui-unbound/dropdown-menu-keyboard-shortcuts",
    dependencies: ["button", "dropdown-menu"],
    Component: UiDropdownMenuKeyboardShortcutsPreview,
    source: UiDropdownMenuKeyboardShortcutsSource,
  }),
  uiEntry({
    name: "dropdown-menu",
    label: "Dropdown Menu",
    id: "dropdown-menu-nested-submenus-radix",
    variant: "Nested Submenus",
    installTarget: "@reui-unbound/dropdown-menu-nested-submenus",
    dependencies: ["button", "dropdown-menu"],
    Component: UiDropdownMenuNestedSubmenusPreview,
    source: UiDropdownMenuNestedSubmenusSource,
  }),
  uiEntry({
    name: "dropdown-menu",
    label: "Dropdown Menu",
    id: "dropdown-menu-checkboxes-radix",
    variant: "Checkboxes",
    installTarget: "@reui-unbound/dropdown-menu-checkboxes",
    dependencies: ["button", "dropdown-menu", "@reui-unbound/icon-placeholder"],
    Component: UiDropdownMenuCheckboxesPreview,
    source: UiDropdownMenuCheckboxesSource,
  }),
  uiEntry({
    name: "dropdown-menu",
    label: "Dropdown Menu",
    id: "dropdown-menu-radio-groups-radix",
    variant: "Radio Groups",
    installTarget: "@reui-unbound/dropdown-menu-radio-groups",
    dependencies: ["button", "dropdown-menu", "@reui-unbound/icon-placeholder"],
    Component: UiDropdownMenuRadioGroupsPreview,
    source: UiDropdownMenuRadioGroupsSource,
  }),
  uiEntry({
    name: "dropdown-menu",
    label: "Dropdown Menu",
    id: "dropdown-menu-all-item-types-radix",
    variant: "All Item Types",
    installTarget: "@reui-unbound/dropdown-menu-all-item-types",
    dependencies: ["button", "dropdown-menu", "@reui-unbound/icon-placeholder"],
    Component: UiDropdownMenuAllItemTypesPreview,
    source: UiDropdownMenuAllItemTypesSource,
  }),
  uiEntry({
    name: "dropdown-menu",
    label: "Dropdown Menu",
    id: "dropdown-menu-user-profile-radix",
    variant: "User Profile",
    installTarget: "@reui-unbound/dropdown-menu-user-profile",
    dependencies: ["avatar", "button", "dropdown-menu", "@reui-unbound/icon-placeholder"],
    Component: UiDropdownMenuUserProfilePreview,
    source: UiDropdownMenuUserProfileSource,
  }),
  uiEntry({
    name: "dropdown-menu",
    label: "Dropdown Menu",
    id: "dropdown-menu-workspace-switcher-radix",
    variant: "Workspace Switcher",
    installTarget: "@reui-unbound/dropdown-menu-workspace-switcher",
    dependencies: ["svgs", "avatar", "button", "dropdown-menu", "@reui-unbound/icon-placeholder"],
    Component: UiDropdownMenuWorkspaceSwitcherPreview,
    source: UiDropdownMenuWorkspaceSwitcherSource,
  }),
  uiEntry({
    name: "dropdown-menu",
    label: "Dropdown Menu",
    id: "dropdown-menu-notification-feed-radix",
    variant: "Notification Feed",
    installTarget: "@reui-unbound/dropdown-menu-notification-feed",
    dependencies: ["@reui-unbound/badge", "avatar", "button", "dropdown-menu", "@reui-unbound/icon-placeholder"],
    Component: UiDropdownMenuNotificationFeedPreview,
    source: UiDropdownMenuNotificationFeedSource,
  }),
  uiEntry({
    name: "dropdown-menu",
    label: "Dropdown Menu",
    id: "dropdown-menu-record-actions-radix",
    variant: "Record Actions",
    installTarget: "@reui-unbound/dropdown-menu-record-actions",
    dependencies: ["button", "dropdown-menu", "@reui-unbound/icon-placeholder"],
    Component: UiDropdownMenuRecordActionsPreview,
    source: UiDropdownMenuRecordActionsSource,
  }),
  uiEntry({
    name: "dropdown-menu",
    label: "Dropdown Menu",
    id: "dropdown-menu-share-export-radix",
    variant: "Share & Export",
    installTarget: "@reui-unbound/dropdown-menu-share-export",
    dependencies: ["button", "dropdown-menu", "@reui-unbound/icon-placeholder"],
    Component: UiDropdownMenuShareExportPreview,
    source: UiDropdownMenuShareExportSource,
  }),
  uiEntry({
    name: "dropdown-menu",
    label: "Dropdown Menu",
    id: "dropdown-menu-theme-status-radix",
    variant: "Theme & Status",
    installTarget: "@reui-unbound/dropdown-menu-theme-status",
    dependencies: ["@reui-unbound/badge", "avatar", "button", "dropdown-menu", "tabs", "@reui-unbound/icon-placeholder"],
    Component: UiDropdownMenuThemeStatusPreview,
    source: UiDropdownMenuThemeStatusSource,
  }),
  uiEntry({
    name: "dropdown-menu",
    label: "Dropdown Menu",
    id: "dropdown-menu-user-create-radix",
    variant: "User & Create",
    installTarget: "@reui-unbound/dropdown-menu-user-create",
    dependencies: ["avatar", "button", "dropdown-menu", "separator", "@reui-unbound/icon-placeholder"],
    Component: UiDropdownMenuUserCreatePreview,
    source: UiDropdownMenuUserCreateSource,
  }),
  uiEntry({
    name: "dropdown-menu",
    label: "Dropdown Menu",
    id: "dropdown-menu-quick-actions-radix",
    variant: "Quick Actions",
    installTarget: "@reui-unbound/dropdown-menu-quick-actions",
    dependencies: ["button", "dropdown-menu", "@reui-unbound/icon-placeholder"],
    Component: UiDropdownMenuQuickActionsPreview,
    source: UiDropdownMenuQuickActionsSource,
  }),
  uiEntry({
    name: "dropdown-menu",
    label: "Dropdown Menu",
    id: "dropdown-menu-notification-items-radix",
    variant: "Notification Items",
    installTarget: "@reui-unbound/dropdown-menu-notification-items",
    dependencies: ["button", "dropdown-menu", "@reui-unbound/icon-placeholder"],
    Component: UiDropdownMenuNotificationItemsPreview,
    source: UiDropdownMenuNotificationItemsSource,
  }),
  uiEntry({
    name: "dropdown-menu",
    label: "Dropdown Menu",
    id: "dropdown-menu-ai-model-selector-radix",
    variant: "AI Model Selector",
    installTarget: "@reui-unbound/dropdown-menu-ai-model-selector",
    dependencies: ["svgs", "button", "dropdown-menu", "@reui-unbound/icon-placeholder"],
    Component: UiDropdownMenuAiModelSelectorPreview,
    source: UiDropdownMenuAiModelSelectorSource,
  }),
  uiEntry({
    name: "empty",
    label: "Empty",
    Component: UiEmptyPreview,
    source: UiEmptySource,
  }),
  uiEntry({
    name: "empty",
    label: "Empty",
    id: "empty-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/empty-standard",
    dependencies: ["button", "empty", "@reui-unbound/icon-placeholder"],
    Component: UiEmptyStandardPreview,
    source: UiEmptyStandardSource,
  }),
  uiEntry({
    name: "empty",
    label: "Empty",
    id: "empty-no-results-radix",
    variant: "No Results",
    installTarget: "@reui-unbound/empty-no-results",
    dependencies: ["button", "empty", "@reui-unbound/icon-placeholder"],
    Component: UiEmptyNoResultsPreview,
    source: UiEmptyNoResultsSource,
  }),
  uiEntry({
    name: "empty",
    label: "Empty",
    id: "empty-search-input-radix",
    variant: "Search Input",
    installTarget: "@reui-unbound/empty-search-input",
    dependencies: ["empty", "input-group", "kbd", "@reui-unbound/icon-placeholder"],
    Component: UiEmptySearchInputPreview,
    source: UiEmptySearchInputSource,
  }),
  uiEntry({
    name: "empty",
    label: "Empty",
    id: "empty-add-button-radix",
    variant: "Add Button",
    installTarget: "@reui-unbound/empty-add-button",
    dependencies: ["button", "empty", "@reui-unbound/icon-placeholder"],
    Component: UiEmptyAddButtonPreview,
    source: UiEmptyAddButtonSource,
  }),
  uiEntry({
    name: "empty",
    label: "Empty",
    id: "empty-documents-radix",
    variant: "Documents",
    installTarget: "@reui-unbound/empty-documents",
    dependencies: ["button", "card", "empty", "@reui-unbound/icon-placeholder"],
    Component: UiEmptyDocumentsPreview,
    source: UiEmptyDocumentsSource,
  }),
  uiEntry({
    name: "empty",
    label: "Empty",
    id: "empty-dashed-upload-radix",
    variant: "Dashed Upload",
    installTarget: "@reui-unbound/empty-dashed-upload",
    dependencies: ["button", "empty", "@reui-unbound/icon-placeholder"],
    Component: UiEmptyDashedUploadPreview,
    source: UiEmptyDashedUploadSource,
  }),
  uiEntry({
    name: "empty",
    label: "Empty",
    id: "empty-inbox-radix",
    variant: "Inbox",
    installTarget: "@reui-unbound/empty-inbox",
    dependencies: ["empty", "@reui-unbound/icon-placeholder"],
    Component: UiEmptyInboxPreview,
    source: UiEmptyInboxSource,
  }),
  uiEntry({
    name: "empty",
    label: "Empty",
    id: "empty-team-members-radix",
    variant: "Team Members",
    installTarget: "@reui-unbound/empty-team-members",
    dependencies: ["button", "card", "empty", "@reui-unbound/icon-placeholder"],
    Component: UiEmptyTeamMembersPreview,
    source: UiEmptyTeamMembersSource,
  }),
  uiEntry({
    name: "empty",
    label: "Empty",
    id: "empty-no-notifications-radix",
    variant: "No Notifications",
    installTarget: "@reui-unbound/empty-no-notifications",
    dependencies: ["empty", "@reui-unbound/icon-placeholder"],
    Component: UiEmptyNoNotificationsPreview,
    source: UiEmptyNoNotificationsSource,
  }),
  uiEntry({
    name: "empty",
    label: "Empty",
    id: "empty-analytics-radix",
    variant: "Analytics",
    installTarget: "@reui-unbound/empty-analytics",
    dependencies: ["button", "empty", "@reui-unbound/icon-placeholder"],
    Component: UiEmptyAnalyticsPreview,
    source: UiEmptyAnalyticsSource,
  }),
  uiEntry({
    name: "empty",
    label: "Empty",
    id: "empty-bookmarks-radix",
    variant: "Bookmarks",
    installTarget: "@reui-unbound/empty-bookmarks",
    dependencies: ["button", "empty", "@reui-unbound/icon-placeholder"],
    Component: UiEmptyBookmarksPreview,
    source: UiEmptyBookmarksSource,
  }),
  uiEntry({
    name: "empty",
    label: "Empty",
    id: "empty-tasks-radix",
    variant: "Tasks",
    installTarget: "@reui-unbound/empty-tasks",
    dependencies: ["button", "card", "empty", "@reui-unbound/icon-placeholder"],
    Component: UiEmptyTasksPreview,
    source: UiEmptyTasksSource,
  }),
  uiEntry({
    name: "empty",
    label: "Empty",
    id: "empty-automations-radix",
    variant: "Automations",
    installTarget: "@reui-unbound/empty-automations",
    dependencies: ["button", "empty"],
    Component: UiEmptyAutomationsPreview,
    source: UiEmptyAutomationsSource,
  }),
  uiEntry({
    name: "empty",
    label: "Empty",
    id: "empty-comments-board-radix",
    variant: "Comments Board",
    installTarget: "@reui-unbound/empty-comments-board",
    dependencies: ["empty"],
    Component: UiEmptyCommentsBoardPreview,
    source: UiEmptyCommentsBoardSource,
  }),
  uiEntry({
    name: "empty",
    label: "Empty",
    id: "empty-stacked-products-radix",
    variant: "Stacked Products",
    installTarget: "@reui-unbound/empty-stacked-products",
    dependencies: ["empty"],
    Component: UiEmptyStackedProductsPreview,
    source: UiEmptyStackedProductsSource,
  }),
  uiEntry({
    name: "empty",
    label: "Empty",
    id: "empty-search-file-cards-radix",
    variant: "Search File Cards",
    installTarget: "@reui-unbound/empty-search-file-cards",
    dependencies: ["empty"],
    Component: UiEmptySearchFileCardsPreview,
    source: UiEmptySearchFileCardsSource,
  }),
  uiEntry({
    name: "empty",
    label: "Empty",
    id: "empty-chat-bubbles-radix",
    variant: "Chat Bubbles",
    installTarget: "@reui-unbound/empty-chat-bubbles",
    dependencies: ["button", "empty"],
    Component: UiEmptyChatBubblesPreview,
    source: UiEmptyChatBubblesSource,
  }),
  uiEntry({
    name: "empty",
    label: "Empty",
    id: "empty-credit-card-radix",
    variant: "Credit Card",
    installTarget: "@reui-unbound/empty-credit-card",
    dependencies: ["button", "empty"],
    Component: UiEmptyCreditCardPreview,
    source: UiEmptyCreditCardSource,
  }),
  uiEntry({
    name: "empty",
    label: "Empty",
    id: "empty-connected-nodes-radix",
    variant: "Connected Nodes",
    installTarget: "@reui-unbound/empty-connected-nodes",
    dependencies: ["button", "empty"],
    Component: UiEmptyConnectedNodesPreview,
    source: UiEmptyConnectedNodesSource,
  }),
  uiEntry({
    name: "empty",
    label: "Empty",
    id: "empty-events-calendar-radix",
    variant: "Events Calendar",
    installTarget: "@reui-unbound/empty-events-calendar",
    dependencies: ["button", "empty"],
    Component: UiEmptyEventsCalendarPreview,
    source: UiEmptyEventsCalendarSource,
  }),
  uiEntry({
    name: "field",
    label: "Field",
    Component: UiFieldPreview,
    source: UiFieldSource,
  }),
  uiEntry({
    name: "field",
    label: "Field",
    id: "field-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/field-standard",
    dependencies: ["field", "input", "input-group"],
    Component: UiFieldStandardPreview,
    source: UiFieldStandardSource,
  }),
  uiEntry({
    name: "field",
    label: "Field",
    id: "field-input-textarea-radix",
    variant: "Input & Textarea",
    installTarget: "@reui-unbound/field-input-textarea",
    dependencies: ["field", "input", "textarea"],
    Component: UiFieldInputTextareaPreview,
    source: UiFieldInputTextareaSource,
  }),
  uiEntry({
    name: "field",
    label: "Field",
    id: "field-select-controls-radix",
    variant: "Select Controls",
    installTarget: "@reui-unbound/field-select-controls",
    dependencies: ["field", "select"],
    Component: UiFieldSelectControlsPreview,
    source: UiFieldSelectControlsSource,
  }),
  uiEntry({
    name: "field",
    label: "Field",
    id: "field-radio-checkboxes-radix",
    variant: "Radio & Checkboxes",
    installTarget: "@reui-unbound/field-radio-checkboxes",
    dependencies: ["checkbox", "field", "radio-group"],
    Component: UiFieldRadioCheckboxesPreview,
    source: UiFieldRadioCheckboxesSource,
  }),
  uiEntry({
    name: "field",
    label: "Field",
    id: "field-slider-switch-radix",
    variant: "Slider & Switch",
    installTarget: "@reui-unbound/field-slider-switch",
    dependencies: ["field", "slider", "switch"],
    Component: UiFieldSliderSwitchPreview,
    source: UiFieldSliderSwitchSource,
  }),
  uiEntry({
    name: "field",
    label: "Field",
    id: "field-otp-input-radix",
    variant: "OTP Input",
    installTarget: "@reui-unbound/field-otp-input",
    dependencies: ["field", "input-otp", "native-select"],
    Component: UiFieldOtpInputPreview,
    source: UiFieldOtpInputSource,
  }),
  uiEntry({
    name: "field",
    label: "Field",
    id: "field-settings-form-radix",
    variant: "Settings Form",
    installTarget: "@reui-unbound/field-settings-form",
    dependencies: ["button", "checkbox", "field", "input", "switch", "textarea"],
    Component: UiFieldSettingsFormPreview,
    source: UiFieldSettingsFormSource,
  }),
  uiEntry({
    name: "field",
    label: "Field",
    id: "field-permissions-radix",
    variant: "Permissions",
    installTarget: "@reui-unbound/field-permissions",
    dependencies: ["checkbox", "field"],
    Component: UiFieldPermissionsPreview,
    source: UiFieldPermissionsSource,
  }),
  uiEntry({
    name: "field",
    label: "Field",
    id: "field-responsive-layout-radix",
    variant: "Responsive Layout",
    installTarget: "@reui-unbound/field-responsive-layout",
    dependencies: ["button", "field", "input", "select"],
    Component: UiFieldResponsiveLayoutPreview,
    source: UiFieldResponsiveLayoutSource,
  }),
  uiEntry({
    name: "field",
    label: "Field",
    id: "field-notification-preferences-radix",
    variant: "Notification Preferences",
    installTarget: "@reui-unbound/field-notification-preferences",
    dependencies: ["checkbox", "field", "switch"],
    Component: UiFieldNotificationPreferencesPreview,
    source: UiFieldNotificationPreferencesSource,
  }),
  uiEntry({
    name: "field",
    label: "Field",
    id: "field-validation-errors-radix",
    variant: "Validation Errors",
    installTarget: "@reui-unbound/field-validation-errors",
    dependencies: ["button", "field", "input", "input-group", "@reui-unbound/icon-placeholder"],
    Component: UiFieldValidationErrorsPreview,
    source: UiFieldValidationErrorsSource,
  }),
  uiEntry({
    name: "file-upload",
    label: "File Upload",
    Component: UiFileUploadPreview,
    source: UiFileUploadSource,
  }),
  uiEntry({
    name: "file-upload",
    label: "File Upload",
    id: "file-upload-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/file-upload-standard",
    dependencies: ["@reui-unbound/use-file-upload", "button", "@reui-unbound/icon-placeholder"],
    Component: UiFileUploadStandardPreview,
    source: UiFileUploadStandardSource,
  }),
  uiEntry({
    name: "file-upload",
    label: "File Upload",
    id: "file-upload-avatar-radix",
    variant: "Avatar",
    installTarget: "@reui-unbound/file-upload-avatar",
    dependencies: ["@reui-unbound/use-file-upload", "@reui-unbound/alert", "button", "@reui-unbound/icon-placeholder"],
    Component: UiFileUploadAvatarPreview,
    source: UiFileUploadAvatarSource,
  }),
  uiEntry({
    name: "file-upload",
    label: "File Upload",
    id: "file-upload-drag-drop-radix",
    variant: "Drag & Drop",
    installTarget: "@reui-unbound/file-upload-drag-drop",
    dependencies: ["@reui-unbound/use-file-upload", "@reui-unbound/alert", "button", "@reui-unbound/icon-placeholder"],
    Component: UiFileUploadDragDropPreview,
    source: UiFileUploadDragDropSource,
  }),
  uiEntry({
    name: "file-upload",
    label: "File Upload",
    id: "file-upload-gallery-radix",
    variant: "Gallery",
    installTarget: "@reui-unbound/file-upload-gallery",
    dependencies: ["@reui-unbound/use-file-upload", "@reui-unbound/alert", "button", "dialog", "spinner", "@reui-unbound/icon-placeholder"],
    Component: UiFileUploadGalleryPreview,
    source: UiFileUploadGallerySource,
  }),
  uiEntry({
    name: "file-upload",
    label: "File Upload",
    id: "file-upload-progress-list-radix",
    variant: "Progress List",
    installTarget: "@reui-unbound/file-upload-progress-list",
    dependencies: ["@reui-unbound/use-file-upload", "@reui-unbound/alert", "@reui-unbound/badge", "button", "progress", "@reui-unbound/icon-placeholder"],
    Component: UiFileUploadProgressListPreview,
    source: UiFileUploadProgressListSource,
  }),
  uiEntry({
    name: "file-upload",
    label: "File Upload",
    id: "file-upload-table-radix",
    variant: "Table",
    installTarget: "@reui-unbound/file-upload-table",
    dependencies: ["@reui-unbound/use-file-upload", "@reui-unbound/alert", "@reui-unbound/badge", "button", "table", "@reui-unbound/icon-placeholder"],
    Component: UiFileUploadTablePreview,
    source: UiFileUploadTableSource,
  }),
  uiEntry({
    name: "file-upload",
    label: "File Upload",
    id: "file-upload-product-images-radix",
    variant: "Product Images",
    installTarget: "@reui-unbound/file-upload-product-images",
    dependencies: ["@reui-unbound/alert", "button", "card", "progress", "@reui-unbound/icon-placeholder"],
    Component: UiFileUploadProductImagesPreview,
    source: UiFileUploadProductImagesSource,
  }),
  uiEntry({
    name: "file-upload",
    label: "File Upload",
    id: "file-upload-sortable-images-radix",
    variant: "Sortable Images",
    installTarget: "@reui-unbound/file-upload-sortable-images",
    dependencies: ["@reui-unbound/alert", "@reui-unbound/sortable", "button", "card", "progress", "@reui-unbound/icon-placeholder"],
    Component: UiFileUploadSortableImagesPreview,
    source: UiFileUploadSortableImagesSource,
  }),
  uiEntry({
    name: "file-upload",
    label: "File Upload",
    id: "file-upload-preview-cards-radix",
    variant: "Preview Cards",
    installTarget: "@reui-unbound/file-upload-preview-cards",
    dependencies: ["@reui-unbound/use-file-upload", "@reui-unbound/alert", "button", "tooltip", "@reui-unbound/icon-placeholder"],
    Component: UiFileUploadPreviewCardsPreview,
    source: UiFileUploadPreviewCardsSource,
  }),
  uiEntry({
    name: "file-upload",
    label: "File Upload",
    id: "file-upload-cover-image-radix",
    variant: "Cover Image",
    installTarget: "@reui-unbound/file-upload-cover-image",
    dependencies: ["@reui-unbound/use-file-upload", "@reui-unbound/alert", "button", "@reui-unbound/icon-placeholder"],
    Component: UiFileUploadCoverImagePreview,
    source: UiFileUploadCoverImageSource,
  }),
  uiEntry({
    name: "hover-card",
    label: "Hover Card",
    Component: UiHoverCardPreview,
    source: UiHoverCardSource,
  }),
  uiEntry({
    name: "hover-card",
    label: "Hover Card",
    id: "hover-card-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/hover-card-standard",
    dependencies: ["button", "hover-card"],
    Component: UiHoverCardStandardPreview,
    source: UiHoverCardStandardSource,
  }),
  uiEntry({
    name: "hover-card",
    label: "Hover Card",
    id: "hover-card-positions-radix",
    variant: "Positions",
    installTarget: "@reui-unbound/hover-card-positions",
    dependencies: ["button", "hover-card"],
    Component: UiHoverCardPositionsPreview,
    source: UiHoverCardPositionsSource,
  }),
  uiEntry({
    name: "hover-card",
    label: "Hover Card",
    id: "hover-card-profile-radix",
    variant: "Profile",
    installTarget: "@reui-unbound/hover-card-profile",
    dependencies: ["avatar", "hover-card", "@reui-unbound/icon-placeholder"],
    Component: UiHoverCardProfilePreview,
    source: UiHoverCardProfileSource,
  }),
  uiEntry({
    name: "hover-card",
    label: "Hover Card",
    id: "hover-card-icon-radix",
    variant: "Icon",
    installTarget: "@reui-unbound/hover-card-icon",
    dependencies: ["button", "hover-card", "@reui-unbound/icon-placeholder"],
    Component: UiHoverCardIconPreview,
    source: UiHoverCardIconSource,
  }),
  uiEntry({
    name: "hover-card",
    label: "Hover Card",
    id: "hover-card-image-text-radix",
    variant: "Image & Text",
    installTarget: "@reui-unbound/hover-card-image-text",
    dependencies: ["button", "hover-card"],
    Component: UiHoverCardImageTextPreview,
    source: UiHoverCardImageTextSource,
  }),
  uiEntry({
    name: "hover-card",
    label: "Hover Card",
    id: "hover-card-in-dialog-radix",
    variant: "In Dialog",
    installTarget: "@reui-unbound/hover-card-in-dialog",
    dependencies: ["button", "dialog", "hover-card"],
    Component: UiHoverCardInDialogPreview,
    source: UiHoverCardInDialogSource,
  }),
  uiEntry({
    name: "hover-card",
    label: "Hover Card",
    id: "hover-card-live-timestamp-radix",
    variant: "Live Timestamp",
    installTarget: "@reui-unbound/hover-card-live-timestamp",
    dependencies: ["@reui-unbound/badge", "hover-card", "separator"],
    Component: UiHoverCardLiveTimestampPreview,
    source: UiHoverCardLiveTimestampSource,
  }),
  uiEntry({
    name: "hover-card",
    label: "Hover Card",
    id: "hover-card-release-notes-radix",
    variant: "Release Notes",
    installTarget: "@reui-unbound/hover-card-release-notes",
    dependencies: ["@reui-unbound/badge", "button", "hover-card", "@reui-unbound/icon-placeholder"],
    Component: UiHoverCardReleaseNotesPreview,
    source: UiHoverCardReleaseNotesSource,
  }),
  uiEntry({
    name: "input",
    label: "Input",
    Component: UiInputPreview,
    source: UiInputSource,
  }),
  uiEntry({
    name: "input",
    label: "Input",
    id: "input-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/input-standard",
    dependencies: ["field", "input"],
    Component: UiInputStandardPreview,
    source: UiInputStandardSource,
  }),
  uiEntry({
    name: "input",
    label: "Input",
    id: "input-with-label-radix",
    variant: "With Label",
    installTarget: "@reui-unbound/input-with-label",
    dependencies: ["field", "input"],
    Component: UiInputWithLabelPreview,
    source: UiInputWithLabelSource,
  }),
  uiEntry({
    name: "input",
    label: "Input",
    id: "input-with-description-radix",
    variant: "With Description",
    installTarget: "@reui-unbound/input-with-description",
    dependencies: ["field", "input"],
    Component: UiInputWithDescriptionPreview,
    source: UiInputWithDescriptionSource,
  }),
  uiEntry({
    name: "input",
    label: "Input",
    id: "input-disabled-radix",
    variant: "Disabled",
    installTarget: "@reui-unbound/input-disabled",
    dependencies: ["field", "input"],
    Component: UiInputDisabledPreview,
    source: UiInputDisabledSource,
  }),
  uiEntry({
    name: "input",
    label: "Input",
    id: "input-error-message-radix",
    variant: "Error Message",
    installTarget: "@reui-unbound/input-error-message",
    dependencies: ["field", "input"],
    Component: UiInputErrorMessagePreview,
    source: UiInputErrorMessageSource,
  }),
  uiEntry({
    name: "input",
    label: "Input",
    id: "input-character-counter-radix",
    variant: "Character Counter",
    installTarget: "@reui-unbound/input-character-counter",
    dependencies: ["field", "input"],
    Component: UiInputCharacterCounterPreview,
    source: UiInputCharacterCounterSource,
  }),
  uiEntry({
    name: "input",
    label: "Input",
    id: "input-password-radix",
    variant: "Password",
    installTarget: "@reui-unbound/input-password",
    dependencies: ["field", "input"],
    Component: UiInputPasswordPreview,
    source: UiInputPasswordSource,
  }),
  uiEntry({
    name: "input",
    label: "Input",
    id: "input-phone-radix",
    variant: "Phone",
    installTarget: "@reui-unbound/input-phone",
    dependencies: ["field", "input"],
    Component: UiInputPhonePreview,
    source: UiInputPhoneSource,
  }),
  uiEntry({
    name: "input",
    label: "Input",
    id: "input-url-radix",
    variant: "URL",
    installTarget: "@reui-unbound/input-url",
    dependencies: ["field", "input"],
    Component: UiInputUrlPreview,
    source: UiInputUrlSource,
  }),
  uiEntry({
    name: "input",
    label: "Input",
    id: "input-number-radix",
    variant: "Number",
    installTarget: "@reui-unbound/input-number",
    dependencies: ["field", "input"],
    Component: UiInputNumberPreview,
    source: UiInputNumberSource,
  }),
  uiEntry({
    name: "input",
    label: "Input",
    id: "input-date-radix",
    variant: "Date",
    installTarget: "@reui-unbound/input-date",
    dependencies: ["field", "input"],
    Component: UiInputDatePreview,
    source: UiInputDateSource,
  }),
  uiEntry({
    name: "input",
    label: "Input",
    id: "input-file-radix",
    variant: "File",
    installTarget: "@reui-unbound/input-file",
    dependencies: ["field", "input"],
    Component: UiInputFilePreview,
    source: UiInputFileSource,
  }),
  uiEntry({
    name: "input",
    label: "Input",
    id: "input-required-indicator-radix",
    variant: "Required Indicator",
    installTarget: "@reui-unbound/input-required-indicator",
    dependencies: ["field", "input"],
    Component: UiInputRequiredIndicatorPreview,
    source: UiInputRequiredIndicatorSource,
  }),
  uiEntry({
    name: "input",
    label: "Input",
    id: "input-time-radix",
    variant: "Time",
    installTarget: "@reui-unbound/input-time",
    dependencies: ["field", "input"],
    Component: UiInputTimePreview,
    source: UiInputTimeSource,
  }),
  uiEntry({
    name: "input",
    label: "Input",
    id: "input-contact-form-radix",
    variant: "Contact Form",
    installTarget: "@reui-unbound/input-contact-form",
    dependencies: ["button", "field", "input", "select"],
    Component: UiInputContactFormPreview,
    source: UiInputContactFormSource,
  }),
  uiEntry({
    name: "input",
    label: "Input",
    id: "input-label-tooltip-radix",
    variant: "Label Tooltip",
    installTarget: "@reui-unbound/input-label-tooltip",
    dependencies: ["field", "input", "tooltip", "@reui-unbound/icon-placeholder"],
    Component: UiInputLabelTooltipPreview,
    source: UiInputLabelTooltipSource,
  }),
  uiEntry({
    name: "input",
    label: "Input",
    id: "input-label-badge-radix",
    variant: "Label Badge",
    installTarget: "@reui-unbound/input-label-badge",
    dependencies: ["@reui-unbound/badge", "field", "input"],
    Component: UiInputLabelBadgePreview,
    source: UiInputLabelBadgeSource,
  }),
  uiEntry({
    name: "input",
    label: "Input",
    id: "input-optional-badge-radix",
    variant: "Optional Badge",
    installTarget: "@reui-unbound/input-optional-badge",
    dependencies: ["@reui-unbound/badge", "field", "input"],
    Component: UiInputOptionalBadgePreview,
    source: UiInputOptionalBadgeSource,
  }),
  uiEntry({
    name: "input",
    label: "Input",
    id: "input-link-toggle-radix",
    variant: "Link & Toggle",
    installTarget: "@reui-unbound/input-link-toggle",
    dependencies: ["field", "input", "@reui-unbound/icon-placeholder"],
    Component: UiInputLinkTogglePreview,
    source: UiInputLinkToggleSource,
  }),
  uiEntry({
    name: "input",
    label: "Input",
    id: "input-horizontal-radix",
    variant: "Horizontal",
    installTarget: "@reui-unbound/input-horizontal",
    dependencies: ["field", "input"],
    Component: UiInputHorizontalPreview,
    source: UiInputHorizontalSource,
  }),
  uiEntry({
    name: "input",
    label: "Input",
    id: "input-multiple-errors-radix",
    variant: "Multiple Errors",
    installTarget: "@reui-unbound/input-multiple-errors",
    dependencies: ["field", "input", "@reui-unbound/icon-placeholder"],
    Component: UiInputMultipleErrorsPreview,
    source: UiInputMultipleErrorsSource,
  }),
  uiEntry({
    name: "input",
    label: "Input",
    id: "input-strength-hint-radix",
    variant: "Strength Hint",
    installTarget: "@reui-unbound/input-strength-hint",
    dependencies: ["field", "input", "@reui-unbound/icon-placeholder"],
    Component: UiInputStrengthHintPreview,
    source: UiInputStrengthHintSource,
  }),
  uiEntry({
    name: "input",
    label: "Input",
    id: "input-strength-meter-radix",
    variant: "Strength Meter",
    installTarget: "@reui-unbound/input-strength-meter",
    dependencies: ["field", "input", "@reui-unbound/icon-placeholder"],
    Component: UiInputStrengthMeterPreview,
    source: UiInputStrengthMeterSource,
  }),
  uiEntry({
    name: "input",
    label: "Input",
    id: "input-pulsed-background-radix",
    variant: "Pulsed Background",
    installTarget: "@reui-unbound/input-pulsed-background",
    dependencies: ["field", "input"],
    Component: UiInputPulsedBackgroundPreview,
    source: UiInputPulsedBackgroundSource,
  }),
  uiEntry({
    name: "input",
    label: "Input",
    id: "input-custom-focus-ring-radix",
    variant: "Custom Focus Ring",
    installTarget: "@reui-unbound/input-custom-focus-ring",
    dependencies: ["field", "input"],
    Component: UiInputCustomFocusRingPreview,
    source: UiInputCustomFocusRingSource,
  }),
  uiEntry({
    name: "input",
    label: "Input",
    id: "input-subtle-background-radix",
    variant: "Subtle Background",
    installTarget: "@reui-unbound/input-subtle-background",
    dependencies: ["field", "input"],
    Component: UiInputSubtleBackgroundPreview,
    source: UiInputSubtleBackgroundSource,
  }),
  uiEntry({
    name: "input",
    label: "Input",
    id: "input-bottom-border-radix",
    variant: "Bottom Border",
    installTarget: "@reui-unbound/input-bottom-border",
    dependencies: ["field", "input"],
    Component: UiInputBottomBorderPreview,
    source: UiInputBottomBorderSource,
  }),
  uiEntry({
    name: "input",
    label: "Input",
    id: "input-color-radix",
    variant: "Color",
    installTarget: "@reui-unbound/input-color",
    dependencies: ["field", "input"],
    Component: UiInputColorPreview,
    source: UiInputColorSource,
  }),
  uiEntry({
    name: "input",
    label: "Input",
    id: "input-range-radix",
    variant: "Range",
    installTarget: "@reui-unbound/input-range",
    dependencies: ["field", "input"],
    Component: UiInputRangePreview,
    source: UiInputRangeSource,
  }),
  uiEntry({
    name: "input",
    label: "Input",
    id: "input-pill-shape-radix",
    variant: "Pill Shape",
    installTarget: "@reui-unbound/input-pill-shape",
    dependencies: ["field", "input"],
    Component: UiInputPillShapePreview,
    source: UiInputPillShapeSource,
  }),
  uiEntry({
    name: "input",
    label: "Input",
    id: "input-borderless-radix",
    variant: "Borderless",
    installTarget: "@reui-unbound/input-borderless",
    dependencies: ["field", "input"],
    Component: UiInputBorderlessPreview,
    source: UiInputBorderlessSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    Component: UiInputGroupPreview,
    source: UiInputGroupSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/input-group-standard",
    dependencies: ["field", "input-group"],
    Component: UiInputGroupStandardPreview,
    source: UiInputGroupStandardSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-disabled-radix",
    variant: "Disabled",
    installTarget: "@reui-unbound/input-group-disabled",
    dependencies: ["field", "input-group"],
    Component: UiInputGroupDisabledPreview,
    source: UiInputGroupDisabledSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-invalid-radix",
    variant: "Invalid",
    installTarget: "@reui-unbound/input-group-invalid",
    dependencies: ["field", "input-group"],
    Component: UiInputGroupInvalidPreview,
    source: UiInputGroupInvalidSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-prefix-icon-radix",
    variant: "Prefix Icon",
    installTarget: "@reui-unbound/input-group-prefix-icon",
    dependencies: ["field", "input-group", "@reui-unbound/icon-placeholder"],
    Component: UiInputGroupPrefixIconPreview,
    source: UiInputGroupPrefixIconSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-suffix-icon-radix",
    variant: "Suffix Icon",
    installTarget: "@reui-unbound/input-group-suffix-icon",
    dependencies: ["field", "input-group", "@reui-unbound/icon-placeholder"],
    Component: UiInputGroupSuffixIconPreview,
    source: UiInputGroupSuffixIconSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-prefix-suffix-icons-radix",
    variant: "Prefix Suffix Icons",
    installTarget: "@reui-unbound/input-group-prefix-suffix-icons",
    dependencies: ["field", "input-group", "@reui-unbound/icon-placeholder"],
    Component: UiInputGroupPrefixSuffixIconsPreview,
    source: UiInputGroupPrefixSuffixIconsSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-prefix-text-radix",
    variant: "Prefix Text",
    installTarget: "@reui-unbound/input-group-prefix-text",
    dependencies: ["field", "input-group"],
    Component: UiInputGroupPrefixTextPreview,
    source: UiInputGroupPrefixTextSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-suffix-text-radix",
    variant: "Suffix Text",
    installTarget: "@reui-unbound/input-group-suffix-text",
    dependencies: ["field", "input-group"],
    Component: UiInputGroupSuffixTextPreview,
    source: UiInputGroupSuffixTextSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-prefix-suffix-text-radix",
    variant: "Prefix Suffix Text",
    installTarget: "@reui-unbound/input-group-prefix-suffix-text",
    dependencies: ["field", "input-group"],
    Component: UiInputGroupPrefixSuffixTextPreview,
    source: UiInputGroupPrefixSuffixTextSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-action-button-radix",
    variant: "Action Button",
    installTarget: "@reui-unbound/input-group-action-button",
    dependencies: ["field", "input-group"],
    Component: UiInputGroupActionButtonPreview,
    source: UiInputGroupActionButtonSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-icon-button-radix",
    variant: "Icon Button",
    installTarget: "@reui-unbound/input-group-icon-button",
    dependencies: ["field", "input-group", "@reui-unbound/icon-placeholder"],
    Component: UiInputGroupIconButtonPreview,
    source: UiInputGroupIconButtonSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-dropdown-select-radix",
    variant: "Dropdown Select",
    installTarget: "@reui-unbound/input-group-dropdown-select",
    dependencies: ["dropdown-menu", "field", "input-group", "@reui-unbound/icon-placeholder"],
    Component: UiInputGroupDropdownSelectPreview,
    source: UiInputGroupDropdownSelectSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-keyboard-shortcut-radix",
    variant: "Keyboard Shortcut",
    installTarget: "@reui-unbound/input-group-keyboard-shortcut",
    dependencies: ["field", "input-group", "kbd"],
    Component: UiInputGroupKeyboardShortcutPreview,
    source: UiInputGroupKeyboardShortcutSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-tooltip-action-radix",
    variant: "Tooltip Action",
    installTarget: "@reui-unbound/input-group-tooltip-action",
    dependencies: ["field", "input-group", "tooltip", "@reui-unbound/icon-placeholder"],
    Component: UiInputGroupTooltipActionPreview,
    source: UiInputGroupTooltipActionSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-loading-spinner-radix",
    variant: "Loading Spinner",
    installTarget: "@reui-unbound/input-group-loading-spinner",
    dependencies: ["field", "input-group", "spinner"],
    Component: UiInputGroupLoadingSpinnerPreview,
    source: UiInputGroupLoadingSpinnerSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-block-start-addon-radix",
    variant: "Block-Start Addon",
    installTarget: "@reui-unbound/input-group-block-start-addon",
    dependencies: ["field", "input-group", "@reui-unbound/icon-placeholder"],
    Component: UiInputGroupBlockStartAddonPreview,
    source: UiInputGroupBlockStartAddonSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-character-limit-radix",
    variant: "Character Limit",
    installTarget: "@reui-unbound/input-group-character-limit",
    dependencies: ["field", "input-group", "@reui-unbound/icon-placeholder"],
    Component: UiInputGroupCharacterLimitPreview,
    source: UiInputGroupCharacterLimitSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-ai-chat-toolbar-radix",
    variant: "AI Chat Toolbar",
    installTarget: "@reui-unbound/input-group-ai-chat-toolbar",
    dependencies: ["dropdown-menu", "field", "input-group", "kbd", "@reui-unbound/icon-placeholder"],
    Component: UiInputGroupAiChatToolbarPreview,
    source: UiInputGroupAiChatToolbarSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-ai-chat-attachments-radix",
    variant: "AI Chat Attachments",
    installTarget: "@reui-unbound/input-group-ai-chat-attachments",
    dependencies: ["dropdown-menu", "field", "input-group", "@reui-unbound/icon-placeholder"],
    Component: UiInputGroupAiChatAttachmentsPreview,
    source: UiInputGroupAiChatAttachmentsSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-label-usage-radix",
    variant: "Label Usage",
    installTarget: "@reui-unbound/input-group-label-usage",
    dependencies: ["field", "input-group", "@reui-unbound/icon-placeholder"],
    Component: UiInputGroupLabelUsagePreview,
    source: UiInputGroupLabelUsageSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-multiple-end-actions-radix",
    variant: "Multiple End Actions",
    installTarget: "@reui-unbound/input-group-multiple-end-actions",
    dependencies: ["field", "input-group", "@reui-unbound/icon-placeholder"],
    Component: UiInputGroupMultipleEndActionsPreview,
    source: UiInputGroupMultipleEndActionsSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-popover-trigger-radix",
    variant: "Popover Trigger",
    installTarget: "@reui-unbound/input-group-popover-trigger",
    dependencies: ["field", "input-group", "popover", "@reui-unbound/icon-placeholder"],
    Component: UiInputGroupPopoverTriggerPreview,
    source: UiInputGroupPopoverTriggerSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-sparkles-shortcut-radix",
    variant: "Sparkles Shortcut",
    installTarget: "@reui-unbound/input-group-sparkles-shortcut",
    dependencies: ["field", "input-group", "kbd", "@reui-unbound/icon-placeholder"],
    Component: UiInputGroupSparklesShortcutPreview,
    source: UiInputGroupSparklesShortcutSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-success-indicator-radix",
    variant: "Success Indicator",
    installTarget: "@reui-unbound/input-group-success-indicator",
    dependencies: ["field", "input-group", "@reui-unbound/icon-placeholder"],
    Component: UiInputGroupSuccessIndicatorPreview,
    source: UiInputGroupSuccessIndicatorSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-results-count-radix",
    variant: "Results Count",
    installTarget: "@reui-unbound/input-group-results-count",
    dependencies: ["field", "input-group", "@reui-unbound/icon-placeholder"],
    Component: UiInputGroupResultsCountPreview,
    source: UiInputGroupResultsCountSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-textarea-actions-radix",
    variant: "Textarea Actions",
    installTarget: "@reui-unbound/input-group-textarea-actions",
    dependencies: ["field", "input-group"],
    Component: UiInputGroupTextareaActionsPreview,
    source: UiInputGroupTextareaActionsSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-button-group-radix",
    variant: "Button Group",
    installTarget: "@reui-unbound/input-group-button-group",
    dependencies: ["button-group", "field", "input-group", "@reui-unbound/icon-placeholder"],
    Component: UiInputGroupButtonGroupPreview,
    source: UiInputGroupButtonGroupSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-three-dot-menu-radix",
    variant: "Three Dot Menu",
    installTarget: "@reui-unbound/input-group-three-dot-menu",
    dependencies: ["dropdown-menu", "field", "input-group", "@reui-unbound/icon-placeholder"],
    Component: UiInputGroupThreeDotMenuPreview,
    source: UiInputGroupThreeDotMenuSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-pill-category-radix",
    variant: "Pill Category",
    installTarget: "@reui-unbound/input-group-pill-category",
    dependencies: ["dropdown-menu", "field", "input-group", "@reui-unbound/icon-placeholder"],
    Component: UiInputGroupPillCategoryPreview,
    source: UiInputGroupPillCategorySource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-inline-addons-radix",
    variant: "Inline Addons",
    installTarget: "@reui-unbound/input-group-inline-addons",
    dependencies: ["field", "input-group"],
    Component: UiInputGroupInlineAddonsPreview,
    source: UiInputGroupInlineAddonsSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-inline-block-end-radix",
    variant: "Inline Block-End",
    installTarget: "@reui-unbound/input-group-inline-block-end",
    dependencies: ["field", "input-group"],
    Component: UiInputGroupInlineBlockEndPreview,
    source: UiInputGroupInlineBlockEndSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-member-row-radix",
    variant: "Member Row",
    installTarget: "@reui-unbound/input-group-member-row",
    dependencies: ["avatar", "dropdown-menu", "field", "input-group", "@reui-unbound/icon-placeholder"],
    Component: UiInputGroupMemberRowPreview,
    source: UiInputGroupMemberRowSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-project-save-radix",
    variant: "Project Save",
    installTarget: "@reui-unbound/input-group-project-save",
    dependencies: ["dropdown-menu", "field", "input-group", "@reui-unbound/icon-placeholder"],
    Component: UiInputGroupProjectSavePreview,
    source: UiInputGroupProjectSaveSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-pill-ai-prompt-radix",
    variant: "Pill AI Prompt",
    installTarget: "@reui-unbound/input-group-pill-ai-prompt",
    dependencies: ["dropdown-menu", "field", "input-group", "@reui-unbound/icon-placeholder"],
    Component: UiInputGroupPillAiPromptPreview,
    source: UiInputGroupPillAiPromptSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-password-toggle-radix",
    variant: "Password Toggle",
    installTarget: "@reui-unbound/input-group-password-toggle",
    dependencies: ["field", "input-group", "@reui-unbound/icon-placeholder"],
    Component: UiInputGroupPasswordTogglePreview,
    source: UiInputGroupPasswordToggleSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-api-request-radix",
    variant: "API Request",
    installTarget: "@reui-unbound/input-group-api-request",
    dependencies: ["dropdown-menu", "field", "input-group", "@reui-unbound/icon-placeholder"],
    Component: UiInputGroupApiRequestPreview,
    source: UiInputGroupApiRequestSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-order-search-radix",
    variant: "Order Search",
    installTarget: "@reui-unbound/input-group-order-search",
    dependencies: ["checkbox", "field", "input-group", "label", "popover", "@reui-unbound/icon-placeholder"],
    Component: UiInputGroupOrderSearchPreview,
    source: UiInputGroupOrderSearchSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-company-search-radix",
    variant: "Company Search",
    installTarget: "@reui-unbound/input-group-company-search",
    dependencies: ["dropdown-menu", "field", "input-group", "@reui-unbound/icon-placeholder"],
    Component: UiInputGroupCompanySearchPreview,
    source: UiInputGroupCompanySearchSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-contact-search-radix",
    variant: "Contact Search",
    installTarget: "@reui-unbound/input-group-contact-search",
    dependencies: ["checkbox", "dropdown-menu", "field", "input-group", "label", "popover", "@reui-unbound/icon-placeholder"],
    Component: UiInputGroupContactSearchPreview,
    source: UiInputGroupContactSearchSource,
  }),
  uiEntry({
    name: "input-group",
    label: "Input Group",
    id: "input-group-share-link-radix",
    variant: "Share Link",
    installTarget: "@reui-unbound/input-group-share-link",
    dependencies: ["dropdown-menu", "field", "input-group", "@reui-unbound/icon-placeholder"],
    Component: UiInputGroupShareLinkPreview,
    source: UiInputGroupShareLinkSource,
  }),
  uiEntry({
    name: "input-otp",
    label: "Input Otp",
    Component: UiInputOtpPreview,
    source: UiInputOtpSource,
  }),
  uiEntry({
    name: "input-otp",
    label: "Input Otp",
    id: "input-otp-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/input-otp-standard",
    dependencies: ["field", "input-otp"],
    Component: UiInputOtpStandardPreview,
    source: UiInputOtpStandardSource,
  }),
  uiEntry({
    name: "input-otp",
    label: "Input Otp",
    id: "input-otp-digits-only-radix",
    variant: "Digits Only",
    installTarget: "@reui-unbound/input-otp-digits-only",
    dependencies: ["field", "input-otp"],
    Component: UiInputOtpDigitsOnlyPreview,
    source: UiInputOtpDigitsOnlySource,
  }),
  uiEntry({
    name: "input-otp",
    label: "Input Otp",
    id: "input-otp-multiple-separators-radix",
    variant: "Multiple Separators",
    installTarget: "@reui-unbound/input-otp-multiple-separators",
    dependencies: ["field", "input-otp"],
    Component: UiInputOtpMultipleSeparatorsPreview,
    source: UiInputOtpMultipleSeparatorsSource,
  }),
  uiEntry({
    name: "input-otp",
    label: "Input Otp",
    id: "input-otp-letters-numbers-radix",
    variant: "Letters & Numbers",
    installTarget: "@reui-unbound/input-otp-letters-numbers",
    dependencies: ["field", "input-otp"],
    Component: UiInputOtpLettersNumbersPreview,
    source: UiInputOtpLettersNumbersSource,
  }),
  uiEntry({
    name: "input-otp",
    label: "Input Otp",
    id: "input-otp-pin-code-radix",
    variant: "PIN Code",
    installTarget: "@reui-unbound/input-otp-pin-code",
    dependencies: ["field", "input-otp"],
    Component: UiInputOtpPinCodePreview,
    source: UiInputOtpPinCodeSource,
  }),
  uiEntry({
    name: "input-otp",
    label: "Input Otp",
    id: "input-otp-verification-card-radix",
    variant: "Verification Card",
    installTarget: "@reui-unbound/input-otp-verification-card",
    dependencies: ["button", "card", "field", "input-otp", "@reui-unbound/icon-placeholder"],
    Component: UiInputOtpVerificationCardPreview,
    source: UiInputOtpVerificationCardSource,
  }),
  uiEntry({
    name: "item",
    label: "Item",
    Component: UiItemPreview,
    source: UiItemSource,
  }),
  uiEntry({
    name: "item",
    label: "Item",
    id: "item-variants-radix",
    variant: "Variants",
    installTarget: "@reui-unbound/item-variants",
    dependencies: ["item"],
    Component: UiItemVariantsPreview,
    source: UiItemVariantsSource,
  }),
  uiEntry({
    name: "item",
    label: "Item",
    id: "item-icon-actions-radix",
    variant: "Icon & Actions",
    installTarget: "@reui-unbound/item-icon-actions",
    dependencies: ["button", "item", "@reui-unbound/icon-placeholder"],
    Component: UiItemIconActionsPreview,
    source: UiItemIconActionsSource,
  }),
  uiEntry({
    name: "item",
    label: "Item",
    id: "item-user-follow-radix",
    variant: "User Follow",
    installTarget: "@reui-unbound/item-user-follow",
    dependencies: ["avatar", "button", "item"],
    Component: UiItemUserFollowPreview,
    source: UiItemUserFollowSource,
  }),
  uiEntry({
    name: "item",
    label: "Item",
    id: "item-navigation-links-radix",
    variant: "Navigation Links",
    installTarget: "@reui-unbound/item-navigation-links",
    dependencies: ["item", "@reui-unbound/icon-placeholder"],
    Component: UiItemNavigationLinksPreview,
    source: UiItemNavigationLinksSource,
  }),
  uiEntry({
    name: "item",
    label: "Item",
    id: "item-status-badges-radix",
    variant: "Status Badges",
    installTarget: "@reui-unbound/item-status-badges",
    dependencies: ["@reui-unbound/badge", "avatar", "item"],
    Component: UiItemStatusBadgesPreview,
    source: UiItemStatusBadgesSource,
  }),
  uiEntry({
    name: "item",
    label: "Item",
    id: "item-file-rows-radix",
    variant: "File Rows",
    installTarget: "@reui-unbound/item-file-rows",
    dependencies: ["@reui-unbound/badge", "button", "item", "@reui-unbound/icon-placeholder"],
    Component: UiItemFileRowsPreview,
    source: UiItemFileRowsSource,
  }),
  uiEntry({
    name: "item",
    label: "Item",
    id: "item-keyboard-shortcuts-radix",
    variant: "Keyboard Shortcuts",
    installTarget: "@reui-unbound/item-keyboard-shortcuts",
    dependencies: ["item", "kbd", "@reui-unbound/icon-placeholder"],
    Component: UiItemKeyboardShortcutsPreview,
    source: UiItemKeyboardShortcutsSource,
  }),
  uiEntry({
    name: "item",
    label: "Item",
    id: "item-small-count-badges-radix",
    variant: "Small Count Badges",
    installTarget: "@reui-unbound/item-small-count-badges",
    dependencies: ["@reui-unbound/badge", "item", "@reui-unbound/icon-placeholder"],
    Component: UiItemSmallCountBadgesPreview,
    source: UiItemSmallCountBadgesSource,
  }),
  uiEntry({
    name: "item",
    label: "Item",
    id: "item-team-roles-radix",
    variant: "Team Roles",
    installTarget: "@reui-unbound/item-team-roles",
    dependencies: ["@reui-unbound/badge", "avatar", "button", "dropdown-menu", "item", "@reui-unbound/icon-placeholder"],
    Component: UiItemTeamRolesPreview,
    source: UiItemTeamRolesSource,
  }),
  uiEntry({
    name: "item",
    label: "Item",
    id: "item-header-footer-radix",
    variant: "Header & Footer",
    installTarget: "@reui-unbound/item-header-footer",
    dependencies: ["@reui-unbound/badge", "avatar", "button", "item", "progress", "@reui-unbound/icon-placeholder"],
    Component: UiItemHeaderFooterPreview,
    source: UiItemHeaderFooterSource,
  }),
  uiEntry({
    name: "item",
    label: "Item",
    id: "item-integrations-radix",
    variant: "Integrations",
    installTarget: "@reui-unbound/item-integrations",
    dependencies: ["@reui-unbound/badge", "button", "item", "@reui-unbound/icon-placeholder"],
    Component: UiItemIntegrationsPreview,
    source: UiItemIntegrationsSource,
  }),
  uiEntry({
    name: "item",
    label: "Item",
    id: "item-activity-feed-radix",
    variant: "Activity Feed",
    installTarget: "@reui-unbound/item-activity-feed",
    dependencies: ["@reui-unbound/badge", "avatar", "item"],
    Component: UiItemActivityFeedPreview,
    source: UiItemActivityFeedSource,
  }),
  uiEntry({
    name: "kbd",
    label: "Kbd",
    Component: UiKbdPreview,
    source: UiKbdSource,
  }),
  uiEntry({
    name: "kbd",
    label: "Kbd",
    id: "kbd-standard-keys-radix",
    variant: "Standard Keys",
    installTarget: "@reui-unbound/kbd-standard-keys",
    dependencies: ["kbd"],
    Component: UiKbdStandardKeysPreview,
    source: UiKbdStandardKeysSource,
  }),
  uiEntry({
    name: "kbd",
    label: "Kbd",
    id: "kbd-grouped-keys-radix",
    variant: "Grouped Keys",
    installTarget: "@reui-unbound/kbd-grouped-keys",
    dependencies: ["kbd"],
    Component: UiKbdGroupedKeysPreview,
    source: UiKbdGroupedKeysSource,
  }),
  uiEntry({
    name: "kbd",
    label: "Kbd",
    id: "kbd-keys-with-icons-radix",
    variant: "Keys With Icons",
    installTarget: "@reui-unbound/kbd-keys-with-icons",
    dependencies: ["kbd", "@reui-unbound/icon-placeholder"],
    Component: UiKbdKeysWithIconsPreview,
    source: UiKbdKeysWithIconsSource,
  }),
  uiEntry({
    name: "kbd",
    label: "Kbd",
    id: "kbd-in-input-radix",
    variant: "In Input",
    installTarget: "@reui-unbound/kbd-in-input",
    dependencies: ["input-group", "kbd"],
    Component: UiKbdInInputPreview,
    source: UiKbdInInputSource,
  }),
  uiEntry({
    name: "kbd",
    label: "Kbd",
    id: "kbd-in-tooltip-radix",
    variant: "In Tooltip",
    installTarget: "@reui-unbound/kbd-in-tooltip",
    dependencies: ["button", "kbd", "tooltip", "@reui-unbound/icon-placeholder"],
    Component: UiKbdInTooltipPreview,
    source: UiKbdInTooltipSource,
  }),
  uiEntry({
    name: "kbd",
    label: "Kbd",
    id: "kbd-shortcut-list-radix",
    variant: "Shortcut List",
    installTarget: "@reui-unbound/kbd-shortcut-list",
    dependencies: ["kbd", "separator"],
    Component: UiKbdShortcutListPreview,
    source: UiKbdShortcutListSource,
  }),
  uiEntry({
    name: "label",
    label: "Label",
    Component: UiLabelPreview,
    source: UiLabelSource,
  }),
  uiEntry({
    name: "label",
    label: "Label",
    id: "label-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/label-standard",
    dependencies: ["field", "input", "label"],
    Component: UiLabelStandardPreview,
    source: UiLabelStandardSource,
  }),
  uiEntry({
    name: "label",
    label: "Label",
    id: "label-checkbox-radix",
    variant: "Checkbox",
    installTarget: "@reui-unbound/label-checkbox",
    dependencies: ["checkbox", "field", "label"],
    Component: UiLabelCheckboxPreview,
    source: UiLabelCheckboxSource,
  }),
  uiEntry({
    name: "label",
    label: "Label",
    id: "label-textarea-radix",
    variant: "Textarea",
    installTarget: "@reui-unbound/label-textarea",
    dependencies: ["field", "label", "textarea"],
    Component: UiLabelTextareaPreview,
    source: UiLabelTextareaSource,
  }),
  uiEntry({
    name: "label",
    label: "Label",
    id: "label-disabled-radix",
    variant: "Disabled",
    installTarget: "@reui-unbound/label-disabled",
    dependencies: ["field", "input", "label"],
    Component: UiLabelDisabledPreview,
    source: UiLabelDisabledSource,
  }),
  uiEntry({
    name: "label",
    label: "Label",
    id: "label-required-radix",
    variant: "Required",
    installTarget: "@reui-unbound/label-required",
    dependencies: ["field", "input", "label"],
    Component: UiLabelRequiredPreview,
    source: UiLabelRequiredSource,
  }),
  uiEntry({
    name: "label",
    label: "Label",
    id: "label-optional-radix",
    variant: "Optional",
    installTarget: "@reui-unbound/label-optional",
    dependencies: ["field", "input", "label"],
    Component: UiLabelOptionalPreview,
    source: UiLabelOptionalSource,
  }),
  uiEntry({
    name: "label",
    label: "Label",
    id: "label-tooltip-info-radix",
    variant: "Tooltip Info",
    installTarget: "@reui-unbound/label-tooltip-info",
    dependencies: ["field", "input", "label", "tooltip", "@reui-unbound/icon-placeholder"],
    Component: UiLabelTooltipInfoPreview,
    source: UiLabelTooltipInfoSource,
  }),
  uiEntry({
    name: "label",
    label: "Label",
    id: "label-badge-radix",
    variant: "Badge",
    installTarget: "@reui-unbound/label-badge",
    dependencies: ["@reui-unbound/badge", "field", "input", "label"],
    Component: UiLabelBadgePreview,
    source: UiLabelBadgeSource,
  }),
  uiEntry({
    name: "label",
    label: "Label",
    id: "label-character-counter-radix",
    variant: "Character Counter",
    installTarget: "@reui-unbound/label-character-counter",
    dependencies: ["field", "label", "textarea"],
    Component: UiLabelCharacterCounterPreview,
    source: UiLabelCharacterCounterSource,
  }),
  uiEntry({
    name: "label",
    label: "Label",
    id: "label-helper-text-radix",
    variant: "Helper Text",
    installTarget: "@reui-unbound/label-helper-text",
    dependencies: ["field", "input", "label"],
    Component: UiLabelHelperTextPreview,
    source: UiLabelHelperTextSource,
  }),
  uiEntry({
    name: "label",
    label: "Label",
    id: "label-error-state-radix",
    variant: "Error State",
    installTarget: "@reui-unbound/label-error-state",
    dependencies: ["field", "input", "label"],
    Component: UiLabelErrorStatePreview,
    source: UiLabelErrorStateSource,
  }),
  uiEntry({
    name: "label",
    label: "Label",
    id: "label-inline-edit-radix",
    variant: "Inline Edit",
    installTarget: "@reui-unbound/label-inline-edit",
    dependencies: ["button", "field", "input", "label", "@reui-unbound/icon-placeholder"],
    Component: UiLabelInlineEditPreview,
    source: UiLabelInlineEditSource,
  }),
  uiEntry({
    name: "label",
    label: "Label",
    id: "label-status-dot-radix",
    variant: "Status Dot",
    installTarget: "@reui-unbound/label-status-dot",
    dependencies: ["field", "input", "label"],
    Component: UiLabelStatusDotPreview,
    source: UiLabelStatusDotSource,
  }),
  uiEntry({
    name: "marker",
    label: "Marker",
    Component: UiMarkerPreview,
    source: UiMarkerSource,
  }),
  uiEntry({
    name: "marker",
    label: "Marker",
    id: "marker-standard-variants-radix",
    variant: "Standard Variants",
    installTarget: "@reui-unbound/marker-standard-variants",
    dependencies: ["marker"],
    Component: UiMarkerStandardVariantsPreview,
    source: UiMarkerStandardVariantsSource,
  }),
  uiEntry({
    name: "marker",
    label: "Marker",
    id: "marker-tool-call-log-radix",
    variant: "Tool Call Log",
    installTarget: "@reui-unbound/marker-tool-call-log",
    dependencies: ["marker", "@reui-unbound/icon-placeholder"],
    Component: UiMarkerToolCallLogPreview,
    source: UiMarkerToolCallLogSource,
  }),
  uiEntry({
    name: "marker",
    label: "Marker",
    id: "marker-run-status-radix",
    variant: "Run Status",
    installTarget: "@reui-unbound/marker-run-status",
    dependencies: ["@reui-unbound/badge", "card", "marker", "spinner", "@reui-unbound/icon-placeholder"],
    Component: UiMarkerRunStatusPreview,
    source: UiMarkerRunStatusSource,
  }),
  uiEntry({
    name: "marker",
    label: "Marker",
    id: "marker-phase-separators-radix",
    variant: "Phase Separators",
    installTarget: "@reui-unbound/marker-phase-separators",
    dependencies: ["card", "marker", "@reui-unbound/icon-placeholder"],
    Component: UiMarkerPhaseSeparatorsPreview,
    source: UiMarkerPhaseSeparatorsSource,
  }),
  uiEntry({
    name: "marker",
    label: "Marker",
    id: "marker-changed-files-radix",
    variant: "Changed Files",
    installTarget: "@reui-unbound/marker-changed-files",
    dependencies: ["@reui-unbound/badge", "marker", "@reui-unbound/icon-placeholder"],
    Component: UiMarkerChangedFilesPreview,
    source: UiMarkerChangedFilesSource,
  }),
  uiEntry({
    name: "marker",
    label: "Marker",
    id: "marker-links-action-radix",
    variant: "Links & Action",
    installTarget: "@reui-unbound/marker-links-action",
    dependencies: ["marker", "@reui-unbound/icon-placeholder"],
    Component: UiMarkerLinksActionPreview,
    source: UiMarkerLinksActionSource,
  }),
  uiEntry({
    name: "menubar",
    label: "Menubar",
    Component: UiMenubarPreview,
    source: UiMenubarSource,
  }),
  uiEntry({
    name: "menubar",
    label: "Menubar",
    id: "menubar-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/menubar-standard",
    dependencies: ["menubar"],
    Component: UiMenubarStandardPreview,
    source: UiMenubarStandardSource,
  }),
  uiEntry({
    name: "menubar",
    label: "Menubar",
    id: "menubar-submenus-radix",
    variant: "Submenus",
    installTarget: "@reui-unbound/menubar-submenus",
    dependencies: ["menubar"],
    Component: UiMenubarSubmenusPreview,
    source: UiMenubarSubmenusSource,
  }),
  uiEntry({
    name: "menubar",
    label: "Menubar",
    id: "menubar-checkbox-radio-radix",
    variant: "Checkbox & Radio",
    installTarget: "@reui-unbound/menubar-checkbox-radio",
    dependencies: ["menubar"],
    Component: UiMenubarCheckboxRadioPreview,
    source: UiMenubarCheckboxRadioSource,
  }),
  uiEntry({
    name: "menubar",
    label: "Menubar",
    id: "menubar-icons-radix",
    variant: "Icons",
    installTarget: "@reui-unbound/menubar-icons",
    dependencies: ["menubar", "@reui-unbound/icon-placeholder"],
    Component: UiMenubarIconsPreview,
    source: UiMenubarIconsSource,
  }),
  uiEntry({
    name: "menubar",
    label: "Menubar",
    id: "menubar-formatting-media-radix",
    variant: "Formatting & Media",
    installTarget: "@reui-unbound/menubar-formatting-media",
    dependencies: ["menubar", "@reui-unbound/icon-placeholder"],
    Component: UiMenubarFormattingMediaPreview,
    source: UiMenubarFormattingMediaSource,
  }),
  uiEntry({
    name: "message",
    label: "Message",
    Component: UiMessagePreview,
    source: UiMessageSource,
  }),
  uiEntry({
    name: "message",
    label: "Message",
    id: "message-two-sided-chat-radix",
    variant: "Two-Sided Chat",
    installTarget: "@reui-unbound/message-two-sided-chat",
    dependencies: ["bubble", "message"],
    Component: UiMessageTwoSidedChatPreview,
    source: UiMessageTwoSidedChatSource,
  }),
  uiEntry({
    name: "message",
    label: "Message",
    id: "message-avatars-radix",
    variant: "Avatars",
    installTarget: "@reui-unbound/message-avatars",
    dependencies: ["avatar", "bubble", "message"],
    Component: UiMessageAvatarsPreview,
    source: UiMessageAvatarsSource,
  }),
  uiEntry({
    name: "message",
    label: "Message",
    id: "message-sender-status-radix",
    variant: "Sender & Status",
    installTarget: "@reui-unbound/message-sender-status",
    dependencies: ["bubble", "message"],
    Component: UiMessageSenderStatusPreview,
    source: UiMessageSenderStatusSource,
  }),
  uiEntry({
    name: "message",
    label: "Message",
    id: "message-reply-actions-radix",
    variant: "Reply Actions",
    installTarget: "@reui-unbound/message-reply-actions",
    dependencies: ["bubble", "button", "message", "@reui-unbound/icon-placeholder"],
    Component: UiMessageReplyActionsPreview,
    source: UiMessageReplyActionsSource,
  }),
  uiEntry({
    name: "message",
    label: "Message",
    id: "message-shared-files-radix",
    variant: "Shared Files",
    installTarget: "@reui-unbound/message-shared-files",
    dependencies: ["attachment", "avatar", "bubble", "message", "@reui-unbound/icon-placeholder"],
    Component: UiMessageSharedFilesPreview,
    source: UiMessageSharedFilesSource,
  }),
  uiEntry({
    name: "message",
    label: "Message",
    id: "message-consecutive-messages-radix",
    variant: "Consecutive Messages",
    installTarget: "@reui-unbound/message-consecutive-messages",
    dependencies: ["avatar", "bubble", "message"],
    Component: UiMessageConsecutiveMessagesPreview,
    source: UiMessageConsecutiveMessagesSource,
  }),
  uiEntry({
    name: "message",
    label: "Message",
    id: "message-streaming-reply-radix",
    variant: "Streaming Reply",
    installTarget: "@reui-unbound/message-streaming-reply",
    dependencies: ["bubble", "button", "marker", "message", "spinner"],
    Component: UiMessageStreamingReplyPreview,
    source: UiMessageStreamingReplySource,
  }),
  uiEntry({
    name: "message-scroller",
    label: "Message Scroller",
    Component: UiMessageScrollerPreview,
    source: UiMessageScrollerSource,
  }),
  uiEntry({
    name: "message-scroller",
    label: "Message Scroller",
    id: "message-scroller-jump-to-latest-radix",
    variant: "Jump to Latest",
    installTarget: "@reui-unbound/message-scroller-jump-to-latest",
    dependencies: ["avatar", "bubble", "card", "message", "message-scroller", "@reui-unbound/icon-placeholder"],
    Component: UiMessageScrollerJumpToLatestPreview,
    source: UiMessageScrollerJumpToLatestSource,
  }),
  uiEntry({
    name: "message-scroller",
    label: "Message Scroller",
    id: "message-scroller-streaming-reply-radix",
    variant: "Streaming Reply",
    installTarget: "@reui-unbound/message-scroller-streaming-reply",
    dependencies: ["@reui-unbound/badge", "avatar", "bubble", "button", "card", "message", "message-scroller", "spinner", "@reui-unbound/icon-placeholder"],
    Component: UiMessageScrollerStreamingReplyPreview,
    source: UiMessageScrollerStreamingReplySource,
  }),
  uiEntry({
    name: "message-scroller",
    label: "Message Scroller",
    id: "message-scroller-anchored-turn-radix",
    variant: "Anchored Turn",
    installTarget: "@reui-unbound/message-scroller-anchored-turn",
    dependencies: ["avatar", "bubble", "card", "input-group", "message", "message-scroller", "@reui-unbound/icon-placeholder"],
    Component: UiMessageScrollerAnchoredTurnPreview,
    source: UiMessageScrollerAnchoredTurnSource,
  }),
  uiEntry({
    name: "message-scroller",
    label: "Message Scroller",
    id: "message-scroller-opening-position-radix",
    variant: "Opening Position",
    installTarget: "@reui-unbound/message-scroller-opening-position",
    dependencies: ["bubble", "card", "marker", "message", "message-scroller", "tabs"],
    Component: UiMessageScrollerOpeningPositionPreview,
    source: UiMessageScrollerOpeningPositionSource,
  }),
  uiEntry({
    name: "message-scroller",
    label: "Message Scroller",
    id: "message-scroller-load-earlier-radix",
    variant: "Load Earlier",
    installTarget: "@reui-unbound/message-scroller-load-earlier",
    dependencies: ["@reui-unbound/badge", "avatar", "bubble", "button", "card", "marker", "message", "message-scroller", "spinner", "@reui-unbound/icon-placeholder"],
    Component: UiMessageScrollerLoadEarlierPreview,
    source: UiMessageScrollerLoadEarlierSource,
  }),
  uiEntry({
    name: "message-scroller",
    label: "Message Scroller",
    id: "message-scroller-thread-navigator-radix",
    variant: "Thread Navigator",
    installTarget: "@reui-unbound/message-scroller-thread-navigator",
    dependencies: ["avatar", "bubble", "button", "card", "message", "message-scroller", "@reui-unbound/icon-placeholder"],
    Component: UiMessageScrollerThreadNavigatorPreview,
    source: UiMessageScrollerThreadNavigatorSource,
  }),
  uiEntry({
    name: "native-select",
    label: "Native Select",
    Component: UiNativeSelectPreview,
    source: UiNativeSelectSource,
  }),
  uiEntry({
    name: "native-select",
    label: "Native Select",
    id: "native-select-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/native-select-standard",
    dependencies: ["native-select"],
    Component: UiNativeSelectStandardPreview,
    source: UiNativeSelectStandardSource,
  }),
  uiEntry({
    name: "native-select",
    label: "Native Select",
    id: "native-select-grouped-options-radix",
    variant: "Grouped Options",
    installTarget: "@reui-unbound/native-select-grouped-options",
    dependencies: ["native-select"],
    Component: UiNativeSelectGroupedOptionsPreview,
    source: UiNativeSelectGroupedOptionsSource,
  }),
  uiEntry({
    name: "native-select",
    label: "Native Select",
    id: "native-select-small-radix",
    variant: "Small",
    installTarget: "@reui-unbound/native-select-small",
    dependencies: ["native-select"],
    Component: UiNativeSelectSmallPreview,
    source: UiNativeSelectSmallSource,
  }),
  uiEntry({
    name: "native-select",
    label: "Native Select",
    id: "native-select-field-with-label-radix",
    variant: "Field With Label",
    installTarget: "@reui-unbound/native-select-field-with-label",
    dependencies: ["field", "native-select"],
    Component: UiNativeSelectFieldWithLabelPreview,
    source: UiNativeSelectFieldWithLabelSource,
  }),
  uiEntry({
    name: "native-select",
    label: "Native Select",
    id: "native-select-disabled-radix",
    variant: "Disabled",
    installTarget: "@reui-unbound/native-select-disabled",
    dependencies: ["native-select"],
    Component: UiNativeSelectDisabledPreview,
    source: UiNativeSelectDisabledSource,
  }),
  uiEntry({
    name: "native-select",
    label: "Native Select",
    id: "native-select-invalid-radix",
    variant: "Invalid",
    installTarget: "@reui-unbound/native-select-invalid",
    dependencies: ["native-select"],
    Component: UiNativeSelectInvalidPreview,
    source: UiNativeSelectInvalidSource,
  }),
  uiEntry({
    name: "navigation-menu",
    label: "Navigation Menu",
    Component: UiNavigationMenuPreview,
    source: UiNavigationMenuSource,
  }),
  uiEntry({
    name: "navigation-menu",
    label: "Navigation Menu",
    id: "navigation-menu-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/navigation-menu-standard",
    dependencies: ["navigation-menu"],
    Component: UiNavigationMenuStandardPreview,
    source: UiNavigationMenuStandardSource,
  }),
  uiEntry({
    name: "navigation-menu",
    label: "Navigation Menu",
    id: "navigation-menu-grid-layout-radix",
    variant: "Grid Layout",
    installTarget: "@reui-unbound/navigation-menu-grid-layout",
    dependencies: ["navigation-menu"],
    Component: UiNavigationMenuGridLayoutPreview,
    source: UiNavigationMenuGridLayoutSource,
  }),
  uiEntry({
    name: "navigation-menu",
    label: "Navigation Menu",
    id: "navigation-menu-with-icons-radix",
    variant: "With Icons",
    installTarget: "@reui-unbound/navigation-menu-with-icons",
    dependencies: ["navigation-menu", "@reui-unbound/icon-placeholder"],
    Component: UiNavigationMenuWithIconsPreview,
    source: UiNavigationMenuWithIconsSource,
  }),
  uiEntry({
    name: "navigation-menu",
    label: "Navigation Menu",
    id: "navigation-menu-learn-more-button-radix",
    variant: "Learn More Button",
    installTarget: "@reui-unbound/navigation-menu-learn-more-button",
    dependencies: ["button", "navigation-menu", "@reui-unbound/icon-placeholder"],
    Component: UiNavigationMenuLearnMoreButtonPreview,
    source: UiNavigationMenuLearnMoreButtonSource,
  }),
  uiEntry({
    name: "pagination",
    label: "Pagination",
    Component: UiPaginationPreview,
    source: UiPaginationSource,
  }),
  uiEntry({
    name: "pagination",
    label: "Pagination",
    id: "pagination-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/pagination-standard",
    dependencies: ["pagination"],
    Component: UiPaginationStandardPreview,
    source: UiPaginationStandardSource,
  }),
  uiEntry({
    name: "pagination",
    label: "Pagination",
    id: "pagination-no-labels-radix",
    variant: "No Labels",
    installTarget: "@reui-unbound/pagination-no-labels",
    dependencies: ["pagination", "@reui-unbound/icon-placeholder"],
    Component: UiPaginationNoLabelsPreview,
    source: UiPaginationNoLabelsSource,
  }),
  uiEntry({
    name: "pagination",
    label: "Pagination",
    id: "pagination-hover-border-radix",
    variant: "Hover Border",
    installTarget: "@reui-unbound/pagination-hover-border",
    dependencies: ["pagination"],
    Component: UiPaginationHoverBorderPreview,
    source: UiPaginationHoverBorderSource,
  }),
  uiEntry({
    name: "pagination",
    label: "Pagination",
    id: "pagination-circle-buttons-radix",
    variant: "Circle Buttons",
    installTarget: "@reui-unbound/pagination-circle-buttons",
    dependencies: ["button", "pagination"],
    Component: UiPaginationCircleButtonsPreview,
    source: UiPaginationCircleButtonsSource,
  }),
  uiEntry({
    name: "pagination",
    label: "Pagination",
    id: "pagination-compact-go-to-radix",
    variant: "Compact Go-To",
    installTarget: "@reui-unbound/pagination-compact-go-to",
    dependencies: ["input", "pagination", "@reui-unbound/icon-placeholder"],
    Component: UiPaginationCompactGoToPreview,
    source: UiPaginationCompactGoToSource,
  }),
  uiEntry({
    name: "pagination",
    label: "Pagination",
    id: "pagination-in-card-radix",
    variant: "In Card",
    installTarget: "@reui-unbound/pagination-in-card",
    dependencies: ["card", "pagination", "@reui-unbound/icon-placeholder"],
    Component: UiPaginationInCardPreview,
    source: UiPaginationInCardSource,
  }),
  uiEntry({
    name: "pagination",
    label: "Pagination",
    id: "pagination-arrow-links-radix",
    variant: "Arrow Links",
    installTarget: "@reui-unbound/pagination-arrow-links",
    dependencies: ["pagination", "@reui-unbound/icon-placeholder"],
    Component: UiPaginationArrowLinksPreview,
    source: UiPaginationArrowLinksSource,
  }),
  uiEntry({
    name: "pagination",
    label: "Pagination",
    id: "pagination-centered-page-info-radix",
    variant: "Centered Page Info",
    installTarget: "@reui-unbound/pagination-centered-page-info",
    dependencies: ["pagination", "@reui-unbound/icon-placeholder"],
    Component: UiPaginationCenteredPageInfoPreview,
    source: UiPaginationCenteredPageInfoSource,
  }),
  uiEntry({
    name: "pagination",
    label: "Pagination",
    id: "pagination-left-page-info-radix",
    variant: "Left Page Info",
    installTarget: "@reui-unbound/pagination-left-page-info",
    dependencies: ["pagination"],
    Component: UiPaginationLeftPageInfoPreview,
    source: UiPaginationLeftPageInfoSource,
  }),
  uiEntry({
    name: "pagination",
    label: "Pagination",
    id: "pagination-trailing-ellipsis-radix",
    variant: "Trailing Ellipsis",
    installTarget: "@reui-unbound/pagination-trailing-ellipsis",
    dependencies: ["pagination"],
    Component: UiPaginationTrailingEllipsisPreview,
    source: UiPaginationTrailingEllipsisSource,
  }),
  uiEntry({
    name: "pagination",
    label: "Pagination",
    id: "pagination-outline-strip-radix",
    variant: "Outline Strip",
    installTarget: "@reui-unbound/pagination-outline-strip",
    dependencies: ["pagination", "@reui-unbound/icon-placeholder"],
    Component: UiPaginationOutlineStripPreview,
    source: UiPaginationOutlineStripSource,
  }),
  uiEntry({
    name: "pagination",
    label: "Pagination",
    id: "pagination-rows-per-page-radix",
    variant: "Rows per Page",
    installTarget: "@reui-unbound/pagination-rows-per-page",
    dependencies: ["native-select", "pagination", "@reui-unbound/icon-placeholder"],
    Component: UiPaginationRowsPerPagePreview,
    source: UiPaginationRowsPerPageSource,
  }),
  uiEntry({
    name: "pagination",
    label: "Pagination",
    id: "pagination-page-select-radix",
    variant: "Page Select",
    installTarget: "@reui-unbound/pagination-page-select",
    dependencies: ["native-select", "pagination", "@reui-unbound/icon-placeholder"],
    Component: UiPaginationPageSelectPreview,
    source: UiPaginationPageSelectSource,
  }),
  uiEntry({
    name: "pagination",
    label: "Pagination",
    id: "pagination-full-width-go-to-radix",
    variant: "Full Width Go-To",
    installTarget: "@reui-unbound/pagination-full-width-go-to",
    dependencies: ["input", "pagination", "@reui-unbound/icon-placeholder"],
    Component: UiPaginationFullWidthGoToPreview,
    source: UiPaginationFullWidthGoToSource,
  }),
  uiEntry({
    name: "pagination",
    label: "Pagination",
    id: "pagination-info-and-per-page-radix",
    variant: "Info & Per-Page",
    installTarget: "@reui-unbound/pagination-info-and-per-page",
    dependencies: ["native-select", "pagination"],
    Component: UiPaginationInfoAndPerPagePreview,
    source: UiPaginationInfoAndPerPageSource,
  }),
  uiEntry({
    name: "popover",
    label: "Popover",
    Component: UiPopoverPreview,
    source: UiPopoverSource,
  }),
  uiEntry({
    name: "popover",
    label: "Popover",
    id: "popover-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/popover-standard",
    dependencies: ["button", "popover"],
    Component: UiPopoverStandardPreview,
    source: UiPopoverStandardSource,
  }),
  uiEntry({
    name: "popover",
    label: "Popover",
    id: "popover-opening-sides-radix",
    variant: "Opening Sides",
    installTarget: "@reui-unbound/popover-opening-sides",
    dependencies: ["button", "popover"],
    Component: UiPopoverOpeningSidesPreview,
    source: UiPopoverOpeningSidesSource,
  }),
  uiEntry({
    name: "popover",
    label: "Popover",
    id: "popover-inline-form-radix",
    variant: "Inline Form",
    installTarget: "@reui-unbound/popover-inline-form",
    dependencies: ["button", "field", "input", "popover"],
    Component: UiPopoverInlineFormPreview,
    source: UiPopoverInlineFormSource,
  }),
  uiEntry({
    name: "popover",
    label: "Popover",
    id: "popover-alignment-radix",
    variant: "Alignment",
    installTarget: "@reui-unbound/popover-alignment",
    dependencies: ["button", "popover"],
    Component: UiPopoverAlignmentPreview,
    source: UiPopoverAlignmentSource,
  }),
  uiEntry({
    name: "popover",
    label: "Popover",
    id: "popover-in-dialog-radix",
    variant: "In Dialog",
    installTarget: "@reui-unbound/popover-in-dialog",
    dependencies: ["button", "dialog", "popover"],
    Component: UiPopoverInDialogPreview,
    source: UiPopoverInDialogSource,
  }),
  uiEntry({
    name: "popover",
    label: "Popover",
    id: "popover-profile-card-radix",
    variant: "Profile Card",
    installTarget: "@reui-unbound/popover-profile-card",
    dependencies: ["avatar", "button", "popover", "@reui-unbound/icon-placeholder"],
    Component: UiPopoverProfileCardPreview,
    source: UiPopoverProfileCardSource,
  }),
  uiEntry({
    name: "popover",
    label: "Popover",
    id: "popover-feature-pitch-radix",
    variant: "Feature Pitch",
    installTarget: "@reui-unbound/popover-feature-pitch",
    dependencies: ["button", "popover", "@reui-unbound/icon-placeholder"],
    Component: UiPopoverFeaturePitchPreview,
    source: UiPopoverFeaturePitchSource,
  }),
  uiEntry({
    name: "popover",
    label: "Popover",
    id: "popover-media-preview-radix",
    variant: "Media Preview",
    installTarget: "@reui-unbound/popover-media-preview",
    dependencies: ["button", "popover", "@reui-unbound/icon-placeholder"],
    Component: UiPopoverMediaPreviewPreview,
    source: UiPopoverMediaPreviewSource,
  }),
  uiEntry({
    name: "popover",
    label: "Popover",
    id: "popover-relative-time-radix",
    variant: "Relative Time",
    installTarget: "@reui-unbound/popover-relative-time",
    dependencies: ["@reui-unbound/badge", "popover"],
    Component: UiPopoverRelativeTimePreview,
    source: UiPopoverRelativeTimeSource,
  }),
  uiEntry({
    name: "popover",
    label: "Popover",
    id: "popover-controls-radix",
    variant: "Controls",
    installTarget: "@reui-unbound/popover-controls",
    dependencies: ["button", "popover", "slider", "switch", "@reui-unbound/icon-placeholder"],
    Component: UiPopoverControlsPreview,
    source: UiPopoverControlsSource,
  }),
  uiEntry({
    name: "popover",
    label: "Popover",
    id: "popover-step-tour-radix",
    variant: "Step Tour",
    installTarget: "@reui-unbound/popover-step-tour",
    dependencies: ["button", "popover", "@reui-unbound/icon-placeholder"],
    Component: UiPopoverStepTourPreview,
    source: UiPopoverStepTourSource,
  }),
  uiEntry({
    name: "progress",
    label: "Progress",
    Component: UiProgressPreview,
    source: UiProgressSource,
  }),
  uiEntry({
    name: "progress",
    label: "Progress",
    id: "progress-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/progress-standard",
    dependencies: ["progress"],
    Component: UiProgressStandardPreview,
    source: UiProgressStandardSource,
  }),
  uiEntry({
    name: "progress",
    label: "Progress",
    id: "progress-small-radix",
    variant: "Small",
    installTarget: "@reui-unbound/progress-small",
    dependencies: ["progress"],
    Component: UiProgressSmallPreview,
    source: UiProgressSmallSource,
  }),
  uiEntry({
    name: "progress",
    label: "Progress",
    id: "progress-large-radix",
    variant: "Large",
    installTarget: "@reui-unbound/progress-large",
    dependencies: ["progress"],
    Component: UiProgressLargePreview,
    source: UiProgressLargeSource,
  }),
  uiEntry({
    name: "progress",
    label: "Progress",
    id: "progress-status-messages-radix",
    variant: "Status Messages",
    installTarget: "@reui-unbound/progress-status-messages",
    dependencies: ["progress"],
    Component: UiProgressStatusMessagesPreview,
    source: UiProgressStatusMessagesSource,
  }),
  uiEntry({
    name: "progress",
    label: "Progress",
    id: "progress-file-uploads-radix",
    variant: "File Uploads",
    installTarget: "@reui-unbound/progress-file-uploads",
    dependencies: ["item", "progress", "@reui-unbound/icon-placeholder"],
    Component: UiProgressFileUploadsPreview,
    source: UiProgressFileUploadsSource,
  }),
  uiEntry({
    name: "progress",
    label: "Progress",
    id: "progress-with-slider-radix",
    variant: "With Slider",
    installTarget: "@reui-unbound/progress-with-slider",
    dependencies: ["progress", "slider"],
    Component: UiProgressWithSliderPreview,
    source: UiProgressWithSliderSource,
  }),
  uiEntry({
    name: "progress",
    label: "Progress",
    id: "progress-multi-step-radix",
    variant: "Multi-Step",
    installTarget: "@reui-unbound/progress-multi-step",
    dependencies: ["progress", "@reui-unbound/icon-placeholder"],
    Component: UiProgressMultiStepPreview,
    source: UiProgressMultiStepSource,
  }),
  uiEntry({
    name: "progress",
    label: "Progress",
    id: "progress-custom-colors-radix",
    variant: "Custom Colors",
    installTarget: "@reui-unbound/progress-custom-colors",
    dependencies: ["progress"],
    Component: UiProgressCustomColorsPreview,
    source: UiProgressCustomColorsSource,
  }),
  uiEntry({
    name: "questionnaire",
    label: "Questionnaire",
    Component: UiQuestionnairePreview,
    source: UiQuestionnaireSource,
  }),
  uiEntry({
    name: "questionnaire",
    label: "Questionnaire",
    id: "questionnaire-guided-setup-radix",
    variant: "Guided Setup",
    installTarget: "@reui-unbound/questionnaire-guided-setup",
    dependencies: ["button", "card", "questionnaire"],
    Component: UiQuestionnaireGuidedSetupPreview,
    source: UiQuestionnaireGuidedSetupSource,
  }),
  uiEntry({
    name: "questionnaire",
    label: "Questionnaire",
    id: "questionnaire-multi-select-radix",
    variant: "Multi-Select",
    installTarget: "@reui-unbound/questionnaire-multi-select",
    dependencies: ["@reui-unbound/badge", "button", "card", "questionnaire"],
    Component: UiQuestionnaireMultiSelectPreview,
    source: UiQuestionnaireMultiSelectSource,
  }),
  uiEntry({
    name: "questionnaire",
    label: "Questionnaire",
    id: "questionnaire-write-in-answer-radix",
    variant: "Write-In Answer",
    installTarget: "@reui-unbound/questionnaire-write-in-answer",
    dependencies: ["button", "card", "label", "questionnaire"],
    Component: UiQuestionnaireWriteInAnswerPreview,
    source: UiQuestionnaireWriteInAnswerSource,
  }),
  uiEntry({
    name: "questionnaire",
    label: "Questionnaire",
    id: "questionnaire-segmented-progress-radix",
    variant: "Segmented Progress",
    installTarget: "@reui-unbound/questionnaire-segmented-progress",
    dependencies: ["button", "empty", "questionnaire", "@reui-unbound/icon-placeholder"],
    Component: UiQuestionnaireSegmentedProgressPreview,
    source: UiQuestionnaireSegmentedProgressSource,
  }),
  uiEntry({
    name: "questionnaire",
    label: "Questionnaire",
    id: "questionnaire-optional-skip-radix",
    variant: "Optional Skip",
    installTarget: "@reui-unbound/questionnaire-optional-skip",
    dependencies: ["@reui-unbound/badge", "button", "card", "questionnaire"],
    Component: UiQuestionnaireOptionalSkipPreview,
    source: UiQuestionnaireOptionalSkipSource,
  }),
  uiEntry({
    name: "questionnaire",
    label: "Questionnaire",
    id: "questionnaire-cross-question-rule-radix",
    variant: "Cross-Question Rule",
    installTarget: "@reui-unbound/questionnaire-cross-question-rule",
    dependencies: ["button", "card", "questionnaire"],
    Component: UiQuestionnaireCrossQuestionRulePreview,
    source: UiQuestionnaireCrossQuestionRuleSource,
  }),
  uiEntry({
    name: "questionnaire",
    label: "Questionnaire",
    id: "questionnaire-conditional-branch-radix",
    variant: "Conditional Branch",
    installTarget: "@reui-unbound/questionnaire-conditional-branch",
    dependencies: ["avatar", "button", "card", "questionnaire", "@reui-unbound/icon-placeholder"],
    Component: UiQuestionnaireConditionalBranchPreview,
    source: UiQuestionnaireConditionalBranchSource,
  }),
  uiEntry({
    name: "radio-group",
    label: "Radio Group",
    Component: UiRadioGroupPreview,
    source: UiRadioGroupSource,
  }),
  uiEntry({
    name: "radio-group",
    label: "Radio Group",
    id: "radio-group-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/radio-group-standard",
    dependencies: ["field", "radio-group"],
    Component: UiRadioGroupStandardPreview,
    source: UiRadioGroupStandardSource,
  }),
  uiEntry({
    name: "radio-group",
    label: "Radio Group",
    id: "radio-group-disabled-radix",
    variant: "Disabled",
    installTarget: "@reui-unbound/radio-group-disabled",
    dependencies: ["field", "radio-group"],
    Component: UiRadioGroupDisabledPreview,
    source: UiRadioGroupDisabledSource,
  }),
  uiEntry({
    name: "radio-group",
    label: "Radio Group",
    id: "radio-group-descriptions-radix",
    variant: "Descriptions",
    installTarget: "@reui-unbound/radio-group-descriptions",
    dependencies: ["field", "radio-group"],
    Component: UiRadioGroupDescriptionsPreview,
    source: UiRadioGroupDescriptionsSource,
  }),
  uiEntry({
    name: "radio-group",
    label: "Radio Group",
    id: "radio-group-invalid-radix",
    variant: "Invalid",
    installTarget: "@reui-unbound/radio-group-invalid",
    dependencies: ["field", "radio-group"],
    Component: UiRadioGroupInvalidPreview,
    source: UiRadioGroupInvalidSource,
  }),
  uiEntry({
    name: "radio-group",
    label: "Radio Group",
    id: "radio-group-colored-radix",
    variant: "Colored",
    installTarget: "@reui-unbound/radio-group-colored",
    dependencies: ["field", "radio-group"],
    Component: UiRadioGroupColoredPreview,
    source: UiRadioGroupColoredSource,
  }),
  uiEntry({
    name: "radio-group",
    label: "Radio Group",
    id: "radio-group-legend-description-radix",
    variant: "Legend & Description",
    installTarget: "@reui-unbound/radio-group-legend-description",
    dependencies: ["field", "radio-group"],
    Component: UiRadioGroupLegendDescriptionPreview,
    source: UiRadioGroupLegendDescriptionSource,
  }),
  uiEntry({
    name: "radio-group",
    label: "Radio Group",
    id: "radio-group-descriptive-cards-radix",
    variant: "Descriptive Cards",
    installTarget: "@reui-unbound/radio-group-descriptive-cards",
    dependencies: ["field", "radio-group"],
    Component: UiRadioGroupDescriptiveCardsPreview,
    source: UiRadioGroupDescriptiveCardsSource,
  }),
  uiEntry({
    name: "radio-group",
    label: "Radio Group",
    id: "radio-group-card-separators-radix",
    variant: "Card Separators",
    installTarget: "@reui-unbound/radio-group-card-separators",
    dependencies: ["card", "field", "radio-group", "separator"],
    Component: UiRadioGroupCardSeparatorsPreview,
    source: UiRadioGroupCardSeparatorsSource,
  }),
  uiEntry({
    name: "radio-group",
    label: "Radio Group",
    id: "radio-group-card-icons-radix",
    variant: "Card Icons",
    installTarget: "@reui-unbound/radio-group-card-icons",
    dependencies: ["card", "field", "radio-group", "separator", "@reui-unbound/icon-placeholder"],
    Component: UiRadioGroupCardIconsPreview,
    source: UiRadioGroupCardIconsSource,
  }),
  uiEntry({
    name: "radio-group",
    label: "Radio Group",
    id: "radio-group-in-frame-radix",
    variant: "In Frame",
    installTarget: "@reui-unbound/radio-group-in-frame",
    dependencies: ["@reui-unbound/frame", "field", "radio-group", "separator"],
    Component: UiRadioGroupInFramePreview,
    source: UiRadioGroupInFrameSource,
  }),
  uiEntry({
    name: "radio-group",
    label: "Radio Group",
    id: "radio-group-grid-layout-radix",
    variant: "Grid Layout",
    installTarget: "@reui-unbound/radio-group-grid-layout",
    dependencies: ["field", "radio-group", "@reui-unbound/icon-placeholder"],
    Component: UiRadioGroupGridLayoutPreview,
    source: UiRadioGroupGridLayoutSource,
  }),
  uiEntry({
    name: "radio-group",
    label: "Radio Group",
    id: "radio-group-avatar-cards-radix",
    variant: "Avatar Cards",
    installTarget: "@reui-unbound/radio-group-avatar-cards",
    dependencies: ["avatar", "field", "radio-group"],
    Component: UiRadioGroupAvatarCardsPreview,
    source: UiRadioGroupAvatarCardsSource,
  }),
  uiEntry({
    name: "radio-group",
    label: "Radio Group",
    id: "radio-group-payment-methods-radix",
    variant: "Payment Methods",
    installTarget: "@reui-unbound/radio-group-payment-methods",
    dependencies: ["field", "radio-group", "@reui-unbound/icon-placeholder"],
    Component: UiRadioGroupPaymentMethodsPreview,
    source: UiRadioGroupPaymentMethodsSource,
  }),
  uiEntry({
    name: "radio-group",
    label: "Radio Group",
    id: "radio-group-tooltip-info-radix",
    variant: "Tooltip Info",
    installTarget: "@reui-unbound/radio-group-tooltip-info",
    dependencies: ["field", "radio-group", "tooltip", "@reui-unbound/icon-placeholder"],
    Component: UiRadioGroupTooltipInfoPreview,
    source: UiRadioGroupTooltipInfoSource,
  }),
  uiEntry({
    name: "radio-group",
    label: "Radio Group",
    id: "radio-group-badges-radix",
    variant: "Badges",
    installTarget: "@reui-unbound/radio-group-badges",
    dependencies: ["badge", "field", "radio-group"],
    Component: UiRadioGroupBadgesPreview,
    source: UiRadioGroupBadgesSource,
  }),
  uiEntry({
    name: "radio-group",
    label: "Radio Group",
    id: "radio-group-inline-horizontal-radix",
    variant: "Inline Horizontal",
    installTarget: "@reui-unbound/radio-group-inline-horizontal",
    dependencies: ["field", "radio-group"],
    Component: UiRadioGroupInlineHorizontalPreview,
    source: UiRadioGroupInlineHorizontalSource,
  }),
  uiEntry({
    name: "radio-group",
    label: "Radio Group",
    id: "radio-group-pricing-tiers-radix",
    variant: "Pricing Tiers",
    installTarget: "@reui-unbound/radio-group-pricing-tiers",
    dependencies: ["field", "radio-group"],
    Component: UiRadioGroupPricingTiersPreview,
    source: UiRadioGroupPricingTiersSource,
  }),
  uiEntry({
    name: "resizable",
    label: "Resizable",
    Component: UiResizablePreview,
    source: UiResizableSource,
  }),
  uiEntry({
    name: "resizable",
    label: "Resizable",
    id: "resizable-horizontal-layout-radix",
    variant: "Horizontal Layout",
    installTarget: "@reui-unbound/resizable-horizontal-layout",
    dependencies: ["resizable"],
    Component: UiResizableHorizontalLayoutPreview,
    source: UiResizableHorizontalLayoutSource,
  }),
  uiEntry({
    name: "resizable",
    label: "Resizable",
    id: "resizable-vertical-layout-radix",
    variant: "Vertical Layout",
    installTarget: "@reui-unbound/resizable-vertical-layout",
    dependencies: ["resizable"],
    Component: UiResizableVerticalLayoutPreview,
    source: UiResizableVerticalLayoutSource,
  }),
  uiEntry({
    name: "resizable",
    label: "Resizable",
    id: "resizable-mixed-directions-radix",
    variant: "Mixed Directions",
    installTarget: "@reui-unbound/resizable-mixed-directions",
    dependencies: ["resizable"],
    Component: UiResizableMixedDirectionsPreview,
    source: UiResizableMixedDirectionsSource,
  }),
  uiEntry({
    name: "resizable",
    label: "Resizable",
    id: "resizable-nested-grips-radix",
    variant: "Nested Grips",
    installTarget: "@reui-unbound/resizable-nested-grips",
    dependencies: ["resizable"],
    Component: UiResizableNestedGripsPreview,
    source: UiResizableNestedGripsSource,
  }),
  uiEntry({
    name: "resizable",
    label: "Resizable",
    id: "resizable-animated-pill-radix",
    variant: "Animated Pill",
    installTarget: "@reui-unbound/resizable-animated-pill",
    dependencies: ["resizable"],
    Component: UiResizableAnimatedPillPreview,
    source: UiResizableAnimatedPillSource,
  }),
  uiEntry({
    name: "resizable",
    label: "Resizable",
    id: "resizable-spring-pill-radix",
    variant: "Spring Pill",
    installTarget: "@reui-unbound/resizable-spring-pill",
    dependencies: ["resizable"],
    Component: UiResizableSpringPillPreview,
    source: UiResizableSpringPillSource,
  }),
  uiEntry({
    name: "resizable",
    label: "Resizable",
    id: "resizable-capsule-expansion-radix",
    variant: "Capsule Expansion",
    installTarget: "@reui-unbound/resizable-capsule-expansion",
    dependencies: ["resizable"],
    Component: UiResizableCapsuleExpansionPreview,
    source: UiResizableCapsuleExpansionSource,
  }),
  uiEntry({
    name: "resizable",
    label: "Resizable",
    id: "resizable-nested-pills-radix",
    variant: "Nested Pills",
    installTarget: "@reui-unbound/resizable-nested-pills",
    dependencies: ["resizable"],
    Component: UiResizableNestedPillsPreview,
    source: UiResizableNestedPillsSource,
  }),
  uiEntry({
    name: "resizable",
    label: "Resizable",
    id: "resizable-three-panels-radix",
    variant: "Three Panels",
    installTarget: "@reui-unbound/resizable-three-panels",
    dependencies: ["resizable"],
    Component: UiResizableThreePanelsPreview,
    source: UiResizableThreePanelsSource,
  }),
  uiEntry({
    name: "resizable",
    label: "Resizable",
    id: "resizable-size-tracking-radix",
    variant: "Size Tracking",
    installTarget: "@reui-unbound/resizable-size-tracking",
    dependencies: ["resizable"],
    Component: UiResizableSizeTrackingPreview,
    source: UiResizableSizeTrackingSource,
  }),
  uiEntry({
    name: "scroll-area",
    label: "Scroll Area",
    Component: UiScrollAreaPreview,
    source: UiScrollAreaSource,
  }),
  uiEntry({
    name: "scroll-area",
    label: "Scroll Area",
    id: "scroll-area-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/scroll-area-standard",
    dependencies: ["scroll-area"],
    Component: UiScrollAreaStandardPreview,
    source: UiScrollAreaStandardSource,
  }),
  uiEntry({
    name: "scroll-area",
    label: "Scroll Area",
    id: "scroll-area-horizontal-radix",
    variant: "Horizontal",
    installTarget: "@reui-unbound/scroll-area-horizontal",
    dependencies: ["scroll-area"],
    Component: UiScrollAreaHorizontalPreview,
    source: UiScrollAreaHorizontalSource,
  }),
  uiEntry({
    name: "scroll-area",
    label: "Scroll Area",
    id: "scroll-area-both-scrollbars-radix",
    variant: "Both Scrollbars",
    installTarget: "@reui-unbound/scroll-area-both-scrollbars",
    dependencies: ["scroll-area"],
    Component: UiScrollAreaBothScrollbarsPreview,
    source: UiScrollAreaBothScrollbarsSource,
  }),
  uiEntry({
    name: "scroll-area",
    label: "Scroll Area",
    id: "scroll-area-fade-edges-radix",
    variant: "Fade Edges",
    installTarget: "@reui-unbound/scroll-area-fade-edges",
    dependencies: ["scroll-area"],
    Component: UiScrollAreaFadeEdgesPreview,
    source: UiScrollAreaFadeEdgesSource,
  }),
  uiEntry({
    name: "scroll-area",
    label: "Scroll Area",
    id: "scroll-area-scrollbar-gutter-radix",
    variant: "Scrollbar Gutter",
    installTarget: "@reui-unbound/scroll-area-scrollbar-gutter",
    dependencies: ["scroll-area"],
    Component: UiScrollAreaScrollbarGutterPreview,
    source: UiScrollAreaScrollbarGutterSource,
  }),
  uiEntry({
    name: "select",
    label: "Select",
    Component: UiSelectPreview,
    source: UiSelectSource,
  }),
  uiEntry({
    name: "select",
    label: "Select",
    id: "select-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/select-standard",
    dependencies: ["field", "select"],
    Component: UiSelectStandardPreview,
    source: UiSelectStandardSource,
  }),
  uiEntry({
    name: "select",
    label: "Select",
    id: "select-icons-radix",
    variant: "Icons",
    installTarget: "@reui-unbound/select-icons",
    dependencies: ["field", "select", "@reui-unbound/icon-placeholder"],
    Component: UiSelectIconsPreview,
    source: UiSelectIconsSource,
  }),
  uiEntry({
    name: "select",
    label: "Select",
    id: "select-grouped-labels-radix",
    variant: "Grouped Labels",
    installTarget: "@reui-unbound/select-grouped-labels",
    dependencies: ["field", "select"],
    Component: UiSelectGroupedLabelsPreview,
    source: UiSelectGroupedLabelsSource,
  }),
  uiEntry({
    name: "select",
    label: "Select",
    id: "select-large-list-radix",
    variant: "Large List",
    installTarget: "@reui-unbound/select-large-list",
    dependencies: ["field", "select"],
    Component: UiSelectLargeListPreview,
    source: UiSelectLargeListSource,
  }),
  uiEntry({
    name: "select",
    label: "Select",
    id: "select-small-trigger-radix",
    variant: "Small Trigger",
    installTarget: "@reui-unbound/select-small-trigger",
    dependencies: ["field", "select"],
    Component: UiSelectSmallTriggerPreview,
    source: UiSelectSmallTriggerSource,
  }),
  uiEntry({
    name: "select",
    label: "Select",
    id: "select-plan-picker-radix",
    variant: "Plan Picker",
    installTarget: "@reui-unbound/select-plan-picker",
    dependencies: ["field", "item", "select"],
    Component: UiSelectPlanPickerPreview,
    source: UiSelectPlanPickerSource,
  }),
  uiEntry({
    name: "select",
    label: "Select",
    id: "select-disabled-item-radix",
    variant: "Disabled Item",
    installTarget: "@reui-unbound/select-disabled-item",
    dependencies: ["field", "select"],
    Component: UiSelectDisabledItemPreview,
    source: UiSelectDisabledItemSource,
  }),
  uiEntry({
    name: "select",
    label: "Select",
    id: "select-field-with-label-radix",
    variant: "Field With Label",
    installTarget: "@reui-unbound/select-field-with-label",
    dependencies: ["field", "select"],
    Component: UiSelectFieldWithLabelPreview,
    source: UiSelectFieldWithLabelSource,
  }),
  uiEntry({
    name: "select",
    label: "Select",
    id: "select-invalid-radix",
    variant: "Invalid",
    installTarget: "@reui-unbound/select-invalid",
    dependencies: ["field", "select"],
    Component: UiSelectInvalidPreview,
    source: UiSelectInvalidSource,
  }),
  uiEntry({
    name: "select",
    label: "Select",
    id: "select-disabled-radix",
    variant: "Disabled",
    installTarget: "@reui-unbound/select-disabled",
    dependencies: ["field", "select"],
    Component: UiSelectDisabledPreview,
    source: UiSelectDisabledSource,
  }),
  uiEntry({
    name: "select",
    label: "Select",
    id: "select-in-dialog-radix",
    variant: "In Dialog",
    installTarget: "@reui-unbound/select-in-dialog",
    dependencies: ["button", "dialog", "field", "select"],
    Component: UiSelectInDialogPreview,
    source: UiSelectInDialogSource,
  }),
  uiEntry({
    name: "select",
    label: "Select",
    id: "select-multiple-selection-radix",
    variant: "Multiple Selection",
    installTarget: "@reui-unbound/select-multiple-selection",
    dependencies: ["field", "select"],
    Component: UiSelectMultipleSelectionPreview,
    source: UiSelectMultipleSelectionSource,
  }),
  uiEntry({
    name: "select",
    label: "Select",
    id: "select-inline-with-input-radix",
    variant: "Inline With Input",
    installTarget: "@reui-unbound/select-inline-with-input",
    dependencies: ["input", "select"],
    Component: UiSelectInlineWithInputPreview,
    source: UiSelectInlineWithInputSource,
  }),
  uiEntry({
    name: "select",
    label: "Select",
    id: "select-with-button-radix",
    variant: "With Button",
    installTarget: "@reui-unbound/select-with-button",
    dependencies: ["button", "select"],
    Component: UiSelectWithButtonPreview,
    source: UiSelectWithButtonSource,
  }),
  uiEntry({
    name: "select",
    label: "Select",
    id: "select-item-aligned-radix",
    variant: "Item Aligned",
    installTarget: "@reui-unbound/select-item-aligned",
    dependencies: ["field", "select"],
    Component: UiSelectItemAlignedPreview,
    source: UiSelectItemAlignedSource,
  }),
  uiEntry({
    name: "select",
    label: "Select",
    id: "select-access-levels-radix",
    variant: "Access Levels",
    installTarget: "@reui-unbound/select-access-levels",
    dependencies: ["field", "select"],
    Component: UiSelectAccessLevelsPreview,
    source: UiSelectAccessLevelsSource,
  }),
  uiEntry({
    name: "select",
    label: "Select",
    id: "select-status-bullets-radix",
    variant: "Status Bullets",
    installTarget: "@reui-unbound/select-status-bullets",
    dependencies: ["field", "select"],
    Component: UiSelectStatusBulletsPreview,
    source: UiSelectStatusBulletsSource,
  }),
  uiEntry({
    name: "select",
    label: "Select",
    id: "select-user-avatars-radix",
    variant: "User Avatars",
    installTarget: "@reui-unbound/select-user-avatars",
    dependencies: ["avatar", "field", "select"],
    Component: UiSelectUserAvatarsPreview,
    source: UiSelectUserAvatarsSource,
  }),
  uiEntry({
    name: "select",
    label: "Select",
    id: "select-status-badges-radix",
    variant: "Status Badges",
    installTarget: "@reui-unbound/select-status-badges",
    dependencies: ["@reui-unbound/badge", "field", "select"],
    Component: UiSelectStatusBadgesPreview,
    source: UiSelectStatusBadgesSource,
  }),
  uiEntry({
    name: "select",
    label: "Select",
    id: "select-left-indicator-radix",
    variant: "Left Indicator",
    installTarget: "@reui-unbound/select-left-indicator",
    dependencies: ["field", "select"],
    Component: UiSelectLeftIndicatorPreview,
    source: UiSelectLeftIndicatorSource,
  }),
  uiEntry({
    name: "select",
    label: "Select",
    id: "select-clear-button-radix",
    variant: "Clear Button",
    installTarget: "@reui-unbound/select-clear-button",
    dependencies: ["field", "select", "@reui-unbound/icon-placeholder"],
    Component: UiSelectClearButtonPreview,
    source: UiSelectClearButtonSource,
  }),
  uiEntry({
    name: "select",
    label: "Select",
    id: "select-custom-chevrons-radix",
    variant: "Custom Chevrons",
    installTarget: "@reui-unbound/select-custom-chevrons",
    dependencies: ["field", "select", "@reui-unbound/icon-placeholder"],
    Component: UiSelectCustomChevronsPreview,
    source: UiSelectCustomChevronsSource,
  }),
  uiEntry({
    name: "select",
    label: "Select",
    id: "select-overlapping-dots-radix",
    variant: "Overlapping Dots",
    installTarget: "@reui-unbound/select-overlapping-dots",
    dependencies: ["@reui-unbound/badge", "field", "select"],
    Component: UiSelectOverlappingDotsPreview,
    source: UiSelectOverlappingDotsSource,
  }),
  uiEntry({
    name: "select",
    label: "Select",
    id: "select-grouped-separators-radix",
    variant: "Grouped Separators",
    installTarget: "@reui-unbound/select-grouped-separators",
    dependencies: ["field", "select"],
    Component: UiSelectGroupedSeparatorsPreview,
    source: UiSelectGroupedSeparatorsSource,
  }),
  uiEntry({
    name: "select",
    label: "Select",
    id: "select-country-flags-radix",
    variant: "Country Flags",
    installTarget: "@reui-unbound/select-country-flags",
    dependencies: ["field", "select"],
    Component: UiSelectCountryFlagsPreview,
    source: UiSelectCountryFlagsSource,
  }),
  uiEntry({
    name: "select",
    label: "Select",
    id: "select-status-filter-radix",
    variant: "Status Filter",
    installTarget: "@reui-unbound/select-status-filter",
    dependencies: ["field", "select"],
    Component: UiSelectStatusFilterPreview,
    source: UiSelectStatusFilterSource,
  }),
  uiEntry({
    name: "select",
    label: "Select",
    id: "select-option-descriptions-radix",
    variant: "Option Descriptions",
    installTarget: "@reui-unbound/select-option-descriptions",
    dependencies: ["field", "select"],
    Component: UiSelectOptionDescriptionsPreview,
    source: UiSelectOptionDescriptionsSource,
  }),
  uiEntry({
    name: "select",
    label: "Select",
    id: "select-timezone-offsets-radix",
    variant: "Timezone Offsets",
    installTarget: "@reui-unbound/select-timezone-offsets",
    dependencies: ["field", "select"],
    Component: UiSelectTimezoneOffsetsPreview,
    source: UiSelectTimezoneOffsetsSource,
  }),
  uiEntry({
    name: "select",
    label: "Select",
    id: "select-team-assignment-radix",
    variant: "Team Assignment",
    installTarget: "@reui-unbound/select-team-assignment",
    dependencies: ["avatar", "field", "select"],
    Component: UiSelectTeamAssignmentPreview,
    source: UiSelectTeamAssignmentSource,
  }),
  uiEntry({
    name: "select",
    label: "Select",
    id: "select-priority-badges-radix",
    variant: "Priority Badges",
    installTarget: "@reui-unbound/select-priority-badges",
    dependencies: ["@reui-unbound/badge", "field", "select"],
    Component: UiSelectPriorityBadgesPreview,
    source: UiSelectPriorityBadgesSource,
  }),
  uiEntry({
    name: "select",
    label: "Select",
    id: "select-font-preview-radix",
    variant: "Font Preview",
    installTarget: "@reui-unbound/select-font-preview",
    dependencies: ["field", "select"],
    Component: UiSelectFontPreviewPreview,
    source: UiSelectFontPreviewSource,
  }),
  uiEntry({
    name: "select",
    label: "Select",
    id: "select-category-icons-radix",
    variant: "Category Icons",
    installTarget: "@reui-unbound/select-category-icons",
    dependencies: ["field", "select", "@reui-unbound/icon-placeholder"],
    Component: UiSelectCategoryIconsPreview,
    source: UiSelectCategoryIconsSource,
  }),
  uiEntry({
    name: "select",
    label: "Select",
    id: "select-size-scale-radix",
    variant: "Size Scale",
    installTarget: "@reui-unbound/select-size-scale",
    dependencies: ["field", "select"],
    Component: UiSelectSizeScalePreview,
    source: UiSelectSizeScaleSource,
  }),
  uiEntry({
    name: "separator",
    label: "Separator",
    Component: UiSeparatorPreview,
    source: UiSeparatorSource,
  }),
  uiEntry({
    name: "separator",
    label: "Separator",
    id: "separator-horizontal-radix",
    variant: "Horizontal",
    installTarget: "@reui-unbound/separator-horizontal",
    dependencies: ["separator"],
    Component: UiSeparatorHorizontalPreview,
    source: UiSeparatorHorizontalSource,
  }),
  uiEntry({
    name: "separator",
    label: "Separator",
    id: "separator-vertical-radix",
    variant: "Vertical",
    installTarget: "@reui-unbound/separator-vertical",
    dependencies: ["separator"],
    Component: UiSeparatorVerticalPreview,
    source: UiSeparatorVerticalSource,
  }),
  uiEntry({
    name: "separator",
    label: "Separator",
    id: "separator-grouped-menu-items-radix",
    variant: "Grouped Menu Items",
    installTarget: "@reui-unbound/separator-grouped-menu-items",
    dependencies: ["separator"],
    Component: UiSeparatorGroupedMenuItemsPreview,
    source: UiSeparatorGroupedMenuItemsSource,
  }),
  uiEntry({
    name: "separator",
    label: "Separator",
    id: "separator-list-rows-radix",
    variant: "List Rows",
    installTarget: "@reui-unbound/separator-list-rows",
    dependencies: ["separator"],
    Component: UiSeparatorListRowsPreview,
    source: UiSeparatorListRowsSource,
  }),
  uiEntry({
    name: "separator",
    label: "Separator",
    id: "separator-centered-label-radix",
    variant: "Centered Label",
    installTarget: "@reui-unbound/separator-centered-label",
    dependencies: ["separator"],
    Component: UiSeparatorCenteredLabelPreview,
    source: UiSeparatorCenteredLabelSource,
  }),
  uiEntry({
    name: "separator",
    label: "Separator",
    id: "separator-order-summary-radix",
    variant: "Order Summary",
    installTarget: "@reui-unbound/separator-order-summary",
    dependencies: ["separator"],
    Component: UiSeparatorOrderSummaryPreview,
    source: UiSeparatorOrderSummarySource,
  }),
  uiEntry({
    name: "sheet",
    label: "Sheet",
    Component: UiSheetPreview,
    source: UiSheetSource,
  }),
  uiEntry({
    name: "sheet",
    label: "Sheet",
    id: "sheet-profile-editor-radix",
    variant: "Profile Editor",
    installTarget: "@reui-unbound/sheet-profile-editor",
    dependencies: ["button", "field", "input", "sheet"],
    Component: UiSheetProfileEditorPreview,
    source: UiSheetProfileEditorSource,
  }),
  uiEntry({
    name: "sheet",
    label: "Sheet",
    id: "sheet-no-close-button-radix",
    variant: "No Close Button",
    installTarget: "@reui-unbound/sheet-no-close-button",
    dependencies: ["button", "field", "input", "sheet"],
    Component: UiSheetNoCloseButtonPreview,
    source: UiSheetNoCloseButtonSource,
  }),
  uiEntry({
    name: "sheet",
    label: "Sheet",
    id: "sheet-any-side-radix",
    variant: "Any Side",
    installTarget: "@reui-unbound/sheet-any-side",
    dependencies: ["button", "sheet"],
    Component: UiSheetAnySidePreview,
    source: UiSheetAnySideSource,
  }),
  uiEntry({
    name: "sheet",
    label: "Sheet",
    id: "sheet-scrollable-content-radix",
    variant: "Scrollable Content",
    installTarget: "@reui-unbound/sheet-scrollable-content",
    dependencies: ["button", "scroll-area", "sheet"],
    Component: UiSheetScrollableContentPreview,
    source: UiSheetScrollableContentSource,
  }),
  uiEntry({
    name: "sidebar",
    label: "Sidebar",
    Component: UiSidebarPreview,
    source: UiSidebarSource,
  }),
  uiEntry({
    name: "sidebar",
    label: "Sidebar",
    id: "sidebar-workspace-switcher-radix",
    variant: "Workspace Switcher",
    installTarget: "@reui-unbound/sidebar-workspace-switcher",
    dependencies: ["avatar", "breadcrumb", "button", "card", "dropdown-menu", "sidebar", "@reui-unbound/icon-placeholder"],
    Component: UiSidebarWorkspaceSwitcherPreview,
    source: UiSidebarWorkspaceSwitcherSource,
  }),
  uiEntry({
    name: "sidebar",
    label: "Sidebar",
    id: "sidebar-icon-rail-radix",
    variant: "Icon Rail",
    installTarget: "@reui-unbound/sidebar-icon-rail",
    dependencies: ["avatar", "button", "sidebar", "@reui-unbound/icon-placeholder"],
    Component: UiSidebarIconRailPreview,
    source: UiSidebarIconRailSource,
  }),
  uiEntry({
    name: "sidebar",
    label: "Sidebar",
    id: "sidebar-docs-navigation-radix",
    variant: "Docs Navigation",
    installTarget: "@reui-unbound/sidebar-docs-navigation",
    dependencies: ["collapsible", "sidebar", "@reui-unbound/icon-placeholder"],
    Component: UiSidebarDocsNavigationPreview,
    source: UiSidebarDocsNavigationSource,
  }),
  uiEntry({
    name: "sidebar",
    label: "Sidebar",
    id: "sidebar-inspector-panel-radix",
    variant: "Inspector Panel",
    installTarget: "@reui-unbound/sidebar-inspector-panel",
    dependencies: ["@reui-unbound/badge", "avatar", "button", "dropdown-menu", "sidebar", "@reui-unbound/icon-placeholder"],
    Component: UiSidebarInspectorPanelPreview,
    source: UiSidebarInspectorPanelSource,
  }),
  uiEntry({
    name: "sidebar",
    label: "Sidebar",
    id: "sidebar-filter-loading-radix",
    variant: "Filter & Loading",
    installTarget: "@reui-unbound/sidebar-filter-loading",
    dependencies: ["button", "card", "input-group", "sidebar", "@reui-unbound/icon-placeholder"],
    Component: UiSidebarFilterLoadingPreview,
    source: UiSidebarFilterLoadingSource,
  }),
  uiEntry({
    name: "skeleton",
    label: "Skeleton",
    Component: UiSkeletonPreview,
    source: UiSkeletonSource,
  }),
  uiEntry({
    name: "skeleton",
    label: "Skeleton",
    id: "skeleton-avatar-info-radix",
    variant: "Avatar Info",
    installTarget: "@reui-unbound/skeleton-avatar-info",
    dependencies: ["skeleton"],
    Component: UiSkeletonAvatarInfoPreview,
    source: UiSkeletonAvatarInfoSource,
  }),
  uiEntry({
    name: "skeleton",
    label: "Skeleton",
    id: "skeleton-card-radix",
    variant: "Card",
    installTarget: "@reui-unbound/skeleton-card",
    dependencies: ["card", "skeleton"],
    Component: UiSkeletonCardPreview,
    source: UiSkeletonCardSource,
  }),
  uiEntry({
    name: "skeleton",
    label: "Skeleton",
    id: "skeleton-text-paragraphs-radix",
    variant: "Text Paragraphs",
    installTarget: "@reui-unbound/skeleton-text-paragraphs",
    dependencies: ["skeleton"],
    Component: UiSkeletonTextParagraphsPreview,
    source: UiSkeletonTextParagraphsSource,
  }),
  uiEntry({
    name: "skeleton",
    label: "Skeleton",
    id: "skeleton-form-radix",
    variant: "Form",
    installTarget: "@reui-unbound/skeleton-form",
    dependencies: ["skeleton"],
    Component: UiSkeletonFormPreview,
    source: UiSkeletonFormSource,
  }),
  uiEntry({
    name: "skeleton",
    label: "Skeleton",
    id: "skeleton-data-table-radix",
    variant: "Data Table",
    installTarget: "@reui-unbound/skeleton-data-table",
    dependencies: ["skeleton"],
    Component: UiSkeletonDataTablePreview,
    source: UiSkeletonDataTableSource,
  }),
  uiEntry({
    name: "skeleton",
    label: "Skeleton",
    id: "skeleton-stats-row-radix",
    variant: "Stats Row",
    installTarget: "@reui-unbound/skeleton-stats-row",
    dependencies: ["card", "skeleton"],
    Component: UiSkeletonStatsRowPreview,
    source: UiSkeletonStatsRowSource,
  }),
  uiEntry({
    name: "skeleton",
    label: "Skeleton",
    id: "skeleton-list-with-actions-radix",
    variant: "List With Actions",
    installTarget: "@reui-unbound/skeleton-list-with-actions",
    dependencies: ["separator", "skeleton"],
    Component: UiSkeletonListWithActionsPreview,
    source: UiSkeletonListWithActionsSource,
  }),
  uiEntry({
    name: "skeleton",
    label: "Skeleton",
    id: "skeleton-card-grid-radix",
    variant: "Card Grid",
    installTarget: "@reui-unbound/skeleton-card-grid",
    dependencies: ["card", "skeleton"],
    Component: UiSkeletonCardGridPreview,
    source: UiSkeletonCardGridSource,
  }),
  uiEntry({
    name: "skeleton",
    label: "Skeleton",
    id: "skeleton-profile-page-radix",
    variant: "Profile Page",
    installTarget: "@reui-unbound/skeleton-profile-page",
    dependencies: ["card", "separator", "skeleton"],
    Component: UiSkeletonProfilePagePreview,
    source: UiSkeletonProfilePageSource,
  }),
  uiEntry({
    name: "skeleton",
    label: "Skeleton",
    id: "skeleton-chat-messages-radix",
    variant: "Chat Messages",
    installTarget: "@reui-unbound/skeleton-chat-messages",
    dependencies: ["card", "skeleton"],
    Component: UiSkeletonChatMessagesPreview,
    source: UiSkeletonChatMessagesSource,
  }),
  uiEntry({
    name: "slider",
    label: "Slider",
    Component: UiSliderPreview,
    source: UiSliderSource,
  }),
  uiEntry({
    name: "slider",
    label: "Slider",
    id: "slider-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/slider-standard",
    dependencies: ["slider"],
    Component: UiSliderStandardPreview,
    source: UiSliderStandardSource,
  }),
  uiEntry({
    name: "slider",
    label: "Slider",
    id: "slider-disabled-radix",
    variant: "Disabled",
    installTarget: "@reui-unbound/slider-disabled",
    dependencies: ["slider"],
    Component: UiSliderDisabledPreview,
    source: UiSliderDisabledSource,
  }),
  uiEntry({
    name: "slider",
    label: "Slider",
    id: "slider-multiple-thumbs-radix",
    variant: "Multiple Thumbs",
    installTarget: "@reui-unbound/slider-multiple-thumbs",
    dependencies: ["slider"],
    Component: UiSliderMultipleThumbsPreview,
    source: UiSliderMultipleThumbsSource,
  }),
  uiEntry({
    name: "slider",
    label: "Slider",
    id: "slider-vertical-radix",
    variant: "Vertical",
    installTarget: "@reui-unbound/slider-vertical",
    dependencies: ["slider"],
    Component: UiSliderVerticalPreview,
    source: UiSliderVerticalSource,
  }),
  uiEntry({
    name: "slider",
    label: "Slider",
    id: "slider-controlled-value-radix",
    variant: "Controlled Value",
    installTarget: "@reui-unbound/slider-controlled-value",
    dependencies: ["label", "slider"],
    Component: UiSliderControlledValuePreview,
    source: UiSliderControlledValueSource,
  }),
  uiEntry({
    name: "slider",
    label: "Slider",
    id: "slider-range-radix",
    variant: "Range",
    installTarget: "@reui-unbound/slider-range",
    dependencies: ["slider"],
    Component: UiSliderRangePreview,
    source: UiSliderRangeSource,
  }),
  uiEntry({
    name: "slider",
    label: "Slider",
    id: "slider-number-input-radix",
    variant: "Number Input",
    installTarget: "@reui-unbound/slider-number-input",
    dependencies: ["input", "label", "slider"],
    Component: UiSliderNumberInputPreview,
    source: UiSliderNumberInputSource,
  }),
  uiEntry({
    name: "slider",
    label: "Slider",
    id: "slider-color-temperature-radix",
    variant: "Color Temperature",
    installTarget: "@reui-unbound/slider-color-temperature",
    dependencies: ["label", "slider"],
    Component: UiSliderColorTemperaturePreview,
    source: UiSliderColorTemperatureSource,
  }),
  uiEntry({
    name: "slider",
    label: "Slider",
    id: "slider-reference-labels-radix",
    variant: "Reference Labels",
    installTarget: "@reui-unbound/slider-reference-labels",
    dependencies: ["label", "slider"],
    Component: UiSliderReferenceLabelsPreview,
    source: UiSliderReferenceLabelsSource,
  }),
  uiEntry({
    name: "slider",
    label: "Slider",
    id: "slider-tick-marks-radix",
    variant: "Tick Marks",
    installTarget: "@reui-unbound/slider-tick-marks",
    dependencies: ["label", "slider"],
    Component: UiSliderTickMarksPreview,
    source: UiSliderTickMarksSource,
  }),
  uiEntry({
    name: "slider",
    label: "Slider",
    id: "slider-value-tooltip-radix",
    variant: "Value Tooltip",
    installTarget: "@reui-unbound/slider-value-tooltip",
    dependencies: ["label", "slider"],
    Component: UiSliderValueTooltipPreview,
    source: UiSliderValueTooltipSource,
  }),
  uiEntry({
    name: "slider",
    label: "Slider",
    id: "slider-emoji-rating-radix",
    variant: "Emoji Rating",
    installTarget: "@reui-unbound/slider-emoji-rating",
    dependencies: ["label", "slider"],
    Component: UiSliderEmojiRatingPreview,
    source: UiSliderEmojiRatingSource,
  }),
  uiEntry({
    name: "sonner",
    label: "Sonner",
    Component: UiSonnerPreview,
    source: UiSonnerSource,
  }),
  uiEntry({
    name: "sonner",
    label: "Sonner",
    id: "sonner-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/sonner-standard",
    dependencies: ["button"],
    Component: UiSonnerStandardPreview,
    source: UiSonnerStandardSource,
  }),
  uiEntry({
    name: "sonner",
    label: "Sonner",
    id: "sonner-with-description-radix",
    variant: "With Description",
    installTarget: "@reui-unbound/sonner-with-description",
    dependencies: ["button"],
    Component: UiSonnerWithDescriptionPreview,
    source: UiSonnerWithDescriptionSource,
  }),
  uiEntry({
    name: "sonner",
    label: "Sonner",
    id: "sonner-positions-radix",
    variant: "Positions",
    installTarget: "@reui-unbound/sonner-positions",
    dependencies: ["button"],
    Component: UiSonnerPositionsPreview,
    source: UiSonnerPositionsSource,
  }),
  uiEntry({
    name: "sonner",
    label: "Sonner",
    id: "sonner-variant-icons-radix",
    variant: "Variant Icons",
    installTarget: "@reui-unbound/sonner-variant-icons",
    dependencies: ["button"],
    Component: UiSonnerVariantIconsPreview,
    source: UiSonnerVariantIconsSource,
  }),
  uiEntry({
    name: "sonner",
    label: "Sonner",
    id: "sonner-durations-radix",
    variant: "Durations",
    installTarget: "@reui-unbound/sonner-durations",
    dependencies: ["button"],
    Component: UiSonnerDurationsPreview,
    source: UiSonnerDurationsSource,
  }),
  uiEntry({
    name: "sonner",
    label: "Sonner",
    id: "sonner-action-button-radix",
    variant: "Action Button",
    installTarget: "@reui-unbound/sonner-action-button",
    dependencies: ["button"],
    Component: UiSonnerActionButtonPreview,
    source: UiSonnerActionButtonSource,
  }),
  uiEntry({
    name: "sonner",
    label: "Sonner",
    id: "sonner-promise-radix",
    variant: "Promise",
    installTarget: "@reui-unbound/sonner-promise",
    dependencies: ["button"],
    Component: UiSonnerPromisePreview,
    source: UiSonnerPromiseSource,
  }),
  uiEntry({
    name: "sonner",
    label: "Sonner",
    id: "sonner-action-cancel-radix",
    variant: "Action & Cancel",
    installTarget: "@reui-unbound/sonner-action-cancel",
    dependencies: ["button"],
    Component: UiSonnerActionCancelPreview,
    source: UiSonnerActionCancelSource,
  }),
  uiEntry({
    name: "sonner",
    label: "Sonner",
    id: "sonner-rich-content-radix",
    variant: "Rich Content",
    installTarget: "@reui-unbound/sonner-rich-content",
    dependencies: ["avatar", "button"],
    Component: UiSonnerRichContentPreview,
    source: UiSonnerRichContentSource,
  }),
  uiEntry({
    name: "sonner",
    label: "Sonner",
    id: "sonner-upload-progress-radix",
    variant: "Upload Progress",
    installTarget: "@reui-unbound/sonner-upload-progress",
    dependencies: ["button", "progress", "@reui-unbound/icon-placeholder"],
    Component: UiSonnerUploadProgressPreview,
    source: UiSonnerUploadProgressSource,
  }),
  uiEntry({
    name: "sonner",
    label: "Sonner",
    id: "sonner-status-alert-radix",
    variant: "Status Alert",
    installTarget: "@reui-unbound/sonner-status-alert",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiSonnerStatusAlertPreview,
    source: UiSonnerStatusAlertSource,
  }),
  uiEntry({
    name: "sonner",
    label: "Sonner",
    id: "sonner-accent-border-radix",
    variant: "Accent Border",
    installTarget: "@reui-unbound/sonner-accent-border",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiSonnerAccentBorderPreview,
    source: UiSonnerAccentBorderSource,
  }),
  uiEntry({
    name: "sonner",
    label: "Sonner",
    id: "sonner-invert-success-radix",
    variant: "Invert Success",
    installTarget: "@reui-unbound/sonner-invert-success",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiSonnerInvertSuccessPreview,
    source: UiSonnerInvertSuccessSource,
  }),
  uiEntry({
    name: "sonner",
    label: "Sonner",
    id: "sonner-invert-error-radix",
    variant: "Invert Error",
    installTarget: "@reui-unbound/sonner-invert-error",
    dependencies: ["button", "separator", "@reui-unbound/icon-placeholder"],
    Component: UiSonnerInvertErrorPreview,
    source: UiSonnerInvertErrorSource,
  }),
  uiEntry({
    name: "sonner",
    label: "Sonner",
    id: "sonner-invert-info-radix",
    variant: "Invert Info",
    installTarget: "@reui-unbound/sonner-invert-info",
    dependencies: ["avatar", "button"],
    Component: UiSonnerInvertInfoPreview,
    source: UiSonnerInvertInfoSource,
  }),
  uiEntry({
    name: "sonner",
    label: "Sonner",
    id: "sonner-invert-warning-radix",
    variant: "Invert Warning",
    installTarget: "@reui-unbound/sonner-invert-warning",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiSonnerInvertWarningPreview,
    source: UiSonnerInvertWarningSource,
  }),
  uiEntry({
    name: "sonner",
    label: "Sonner",
    id: "sonner-invert-avatar-group-radix",
    variant: "Invert Avatar Group",
    installTarget: "@reui-unbound/sonner-invert-avatar-group",
    dependencies: ["avatar", "button", "separator"],
    Component: UiSonnerInvertAvatarGroupPreview,
    source: UiSonnerInvertAvatarGroupSource,
  }),
  uiEntry({
    name: "sonner",
    label: "Sonner",
    id: "sonner-close-top-right-radix",
    variant: "Close Top Right",
    installTarget: "@reui-unbound/sonner-close-top-right",
    dependencies: ["button"],
    Component: UiSonnerCloseTopRightPreview,
    source: UiSonnerCloseTopRightSource,
  }),
  uiEntry({
    name: "sonner",
    label: "Sonner",
    id: "sonner-custom-icon-radix",
    variant: "Custom Icon",
    installTarget: "@reui-unbound/sonner-custom-icon",
    dependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: UiSonnerCustomIconPreview,
    source: UiSonnerCustomIconSource,
  }),
  uiEntry({
    name: "sonner",
    label: "Sonner",
    id: "sonner-integration-radix",
    variant: "Integration",
    installTarget: "@reui-unbound/sonner-integration",
    dependencies: ["button", "separator", "@reui-unbound/icon-placeholder"],
    Component: UiSonnerIntegrationPreview,
    source: UiSonnerIntegrationSource,
  }),
  uiEntry({
    name: "sonner",
    label: "Sonner",
    id: "sonner-updatable-radix",
    variant: "Updatable",
    installTarget: "@reui-unbound/sonner-updatable",
    dependencies: ["button", "spinner", "@reui-unbound/icon-placeholder"],
    Component: UiSonnerUpdatablePreview,
    source: UiSonnerUpdatableSource,
  }),
  uiEntry({
    name: "spinner",
    label: "Spinner",
    Component: UiSpinnerPreview,
    source: UiSpinnerSource,
  }),
  uiEntry({
    name: "spinner",
    label: "Spinner",
    id: "spinner-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/spinner-standard",
    dependencies: ["spinner"],
    Component: UiSpinnerStandardPreview,
    source: UiSpinnerStandardSource,
  }),
  uiEntry({
    name: "spinner",
    label: "Spinner",
    id: "spinner-in-buttons-radix",
    variant: "In Buttons",
    installTarget: "@reui-unbound/spinner-in-buttons",
    dependencies: ["button", "spinner"],
    Component: UiSpinnerInButtonsPreview,
    source: UiSpinnerInButtonsSource,
  }),
  uiEntry({
    name: "spinner",
    label: "Spinner",
    id: "spinner-in-badges-radix",
    variant: "In Badges",
    installTarget: "@reui-unbound/spinner-in-badges",
    dependencies: ["@reui-unbound/badge", "spinner"],
    Component: UiSpinnerInBadgesPreview,
    source: UiSpinnerInBadgesSource,
  }),
  uiEntry({
    name: "spinner",
    label: "Spinner",
    id: "spinner-in-input-group-radix",
    variant: "In Input Group",
    installTarget: "@reui-unbound/spinner-in-input-group",
    dependencies: ["field", "input-group", "spinner"],
    Component: UiSpinnerInInputGroupPreview,
    source: UiSpinnerInInputGroupSource,
  }),
  uiEntry({
    name: "spinner",
    label: "Spinner",
    id: "spinner-in-empty-state-radix",
    variant: "In Empty State",
    installTarget: "@reui-unbound/spinner-in-empty-state",
    dependencies: ["button", "empty", "spinner"],
    Component: UiSpinnerInEmptyStatePreview,
    source: UiSpinnerInEmptyStateSource,
  }),
  uiEntry({
    name: "spinner",
    label: "Spinner",
    id: "spinner-pending-buttons-radix",
    variant: "Pending Buttons",
    installTarget: "@reui-unbound/spinner-pending-buttons",
    dependencies: ["button", "spinner"],
    Component: UiSpinnerPendingButtonsPreview,
    source: UiSpinnerPendingButtonsSource,
  }),
  uiEntry({
    name: "spinner",
    label: "Spinner",
    id: "spinner-overlay-with-caption-radix",
    variant: "Overlay With Caption",
    installTarget: "@reui-unbound/spinner-overlay-with-caption",
    dependencies: ["card", "spinner"],
    Component: UiSpinnerOverlayWithCaptionPreview,
    source: UiSpinnerOverlayWithCaptionSource,
  }),
  uiEntry({
    name: "spinner",
    label: "Spinner",
    id: "spinner-full-page-radix",
    variant: "Full Page",
    installTarget: "@reui-unbound/spinner-full-page",
    dependencies: ["card", "spinner"],
    Component: UiSpinnerFullPagePreview,
    source: UiSpinnerFullPageSource,
  }),
  uiEntry({
    name: "spinner",
    label: "Spinner",
    id: "spinner-inline-text-radix",
    variant: "Inline Text",
    installTarget: "@reui-unbound/spinner-inline-text",
    dependencies: ["spinner"],
    Component: UiSpinnerInlineTextPreview,
    source: UiSpinnerInlineTextSource,
  }),
  uiEntry({
    name: "spinner",
    label: "Spinner",
    id: "spinner-loading-dots-radix",
    variant: "Loading Dots",
    installTarget: "@reui-unbound/spinner-loading-dots",
    Component: UiSpinnerLoadingDotsPreview,
    source: UiSpinnerLoadingDotsSource,
  }),
  uiEntry({
    name: "spinner",
    label: "Spinner",
    id: "spinner-card-overlay-radix",
    variant: "Card Overlay",
    installTarget: "@reui-unbound/spinner-card-overlay",
    dependencies: ["card", "spinner"],
    Component: UiSpinnerCardOverlayPreview,
    source: UiSpinnerCardOverlaySource,
  }),
  uiEntry({
    name: "spinner",
    label: "Spinner",
    id: "spinner-color-variants-radix",
    variant: "Color Variants",
    installTarget: "@reui-unbound/spinner-color-variants",
    dependencies: ["spinner"],
    Component: UiSpinnerColorVariantsPreview,
    source: UiSpinnerColorVariantsSource,
  }),
  uiEntry({
    name: "switch",
    label: "Switch",
    Component: UiSwitchPreview,
    source: UiSwitchSource,
  }),
  uiEntry({
    name: "switch",
    label: "Switch",
    id: "switch-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/switch-standard",
    dependencies: ["field", "switch"],
    Component: UiSwitchStandardPreview,
    source: UiSwitchStandardSource,
  }),
  uiEntry({
    name: "switch",
    label: "Switch",
    id: "switch-with-description-radix",
    variant: "With Description",
    installTarget: "@reui-unbound/switch-with-description",
    dependencies: ["field", "switch"],
    Component: UiSwitchWithDescriptionPreview,
    source: UiSwitchWithDescriptionSource,
  }),
  uiEntry({
    name: "switch",
    label: "Switch",
    id: "switch-disabled-radix",
    variant: "Disabled",
    installTarget: "@reui-unbound/switch-disabled",
    dependencies: ["label", "switch"],
    Component: UiSwitchDisabledPreview,
    source: UiSwitchDisabledSource,
  }),
  uiEntry({
    name: "switch",
    label: "Switch",
    id: "switch-sizes-radix",
    variant: "Sizes",
    installTarget: "@reui-unbound/switch-sizes",
    dependencies: ["label", "switch"],
    Component: UiSwitchSizesPreview,
    source: UiSwitchSizesSource,
  }),
  uiEntry({
    name: "switch",
    label: "Switch",
    id: "switch-switch-group-radix",
    variant: "Switch Group",
    installTarget: "@reui-unbound/switch-switch-group",
    dependencies: ["field", "switch"],
    Component: UiSwitchSwitchGroupPreview,
    source: UiSwitchSwitchGroupSource,
  }),
  uiEntry({
    name: "switch",
    label: "Switch",
    id: "switch-card-separators-radix",
    variant: "Card Separators",
    installTarget: "@reui-unbound/switch-card-separators",
    dependencies: ["card", "field", "separator", "switch"],
    Component: UiSwitchCardSeparatorsPreview,
    source: UiSwitchCardSeparatorsSource,
  }),
  uiEntry({
    name: "switch",
    label: "Switch",
    id: "switch-card-with-icons-radix",
    variant: "Card With Icons",
    installTarget: "@reui-unbound/switch-card-with-icons",
    dependencies: ["card", "field", "separator", "switch", "@reui-unbound/icon-placeholder"],
    Component: UiSwitchCardWithIconsPreview,
    source: UiSwitchCardWithIconsSource,
  }),
  uiEntry({
    name: "switch",
    label: "Switch",
    id: "switch-in-frame-radix",
    variant: "In Frame",
    installTarget: "@reui-unbound/switch-in-frame",
    dependencies: ["@reui-unbound/frame", "field", "separator", "switch"],
    Component: UiSwitchInFramePreview,
    source: UiSwitchInFrameSource,
  }),
  uiEntry({
    name: "switch",
    label: "Switch",
    id: "switch-tooltip-info-radix",
    variant: "Tooltip Info",
    installTarget: "@reui-unbound/switch-tooltip-info",
    dependencies: ["field", "switch", "tooltip", "@reui-unbound/icon-placeholder"],
    Component: UiSwitchTooltipInfoPreview,
    source: UiSwitchTooltipInfoSource,
  }),
  uiEntry({
    name: "switch",
    label: "Switch",
    id: "switch-with-badges-radix",
    variant: "With Badges",
    installTarget: "@reui-unbound/switch-with-badges",
    dependencies: ["badge", "field", "switch"],
    Component: UiSwitchWithBadgesPreview,
    source: UiSwitchWithBadgesSource,
  }),
  uiEntry({
    name: "switch",
    label: "Switch",
    id: "switch-colored-radix",
    variant: "Colored",
    installTarget: "@reui-unbound/switch-colored",
    dependencies: ["field", "switch"],
    Component: UiSwitchColoredPreview,
    source: UiSwitchColoredSource,
  }),
  uiEntry({
    name: "switch",
    label: "Switch",
    id: "switch-destructive-confirm-radix",
    variant: "Destructive Confirm",
    installTarget: "@reui-unbound/switch-destructive-confirm",
    dependencies: ["field", "switch"],
    Component: UiSwitchDestructiveConfirmPreview,
    source: UiSwitchDestructiveConfirmSource,
  }),
  uiEntry({
    name: "switch",
    label: "Switch",
    id: "switch-compact-table-radix",
    variant: "Compact Table",
    installTarget: "@reui-unbound/switch-compact-table",
    dependencies: ["separator", "switch"],
    Component: UiSwitchCompactTablePreview,
    source: UiSwitchCompactTableSource,
  }),
  uiEntry({
    name: "switch",
    label: "Switch",
    id: "switch-card-grid-radix",
    variant: "Card Grid",
    installTarget: "@reui-unbound/switch-card-grid",
    dependencies: ["field", "switch", "@reui-unbound/icon-placeholder"],
    Component: UiSwitchCardGridPreview,
    source: UiSwitchCardGridSource,
  }),
  uiEntry({
    name: "table",
    label: "Table",
    Component: UiTablePreview,
    source: UiTableSource,
  }),
  uiEntry({
    name: "table",
    label: "Table",
    id: "table-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/table-standard",
    dependencies: ["table"],
    Component: UiTableStandardPreview,
    source: UiTableStandardSource,
  }),
  uiEntry({
    name: "table",
    label: "Table",
    id: "table-with-footer-radix",
    variant: "With Footer",
    installTarget: "@reui-unbound/table-with-footer",
    dependencies: ["table"],
    Component: UiTableWithFooterPreview,
    source: UiTableWithFooterSource,
  }),
  uiEntry({
    name: "table",
    label: "Table",
    id: "table-status-badges-radix",
    variant: "Status Badges",
    installTarget: "@reui-unbound/table-status-badges",
    dependencies: ["card", "table"],
    Component: UiTableStatusBadgesPreview,
    source: UiTableStatusBadgesSource,
  }),
  uiEntry({
    name: "table",
    label: "Table",
    id: "table-actions-column-radix",
    variant: "Actions Column",
    installTarget: "@reui-unbound/table-actions-column",
    dependencies: ["button", "card", "dropdown-menu", "table", "@reui-unbound/icon-placeholder"],
    Component: UiTableActionsColumnPreview,
    source: UiTableActionsColumnSource,
  }),
  uiEntry({
    name: "table",
    label: "Table",
    id: "table-interactive-rows-radix",
    variant: "Interactive Rows",
    installTarget: "@reui-unbound/table-interactive-rows",
    dependencies: ["card", "input", "table"],
    Component: UiTableInteractiveRowsPreview,
    source: UiTableInteractiveRowsSource,
  }),
  uiEntry({
    name: "table",
    label: "Table",
    id: "table-team-members-radix",
    variant: "Team Members",
    installTarget: "@reui-unbound/table-team-members",
    dependencies: ["@reui-unbound/badge", "@reui-unbound/frame", "avatar", "table"],
    Component: UiTableTeamMembersPreview,
    source: UiTableTeamMembersSource,
  }),
  uiEntry({
    name: "table",
    label: "Table",
    id: "table-orders-radix",
    variant: "Orders",
    installTarget: "@reui-unbound/table-orders",
    dependencies: ["@reui-unbound/badge", "avatar", "table"],
    Component: UiTableOrdersPreview,
    source: UiTableOrdersSource,
  }),
  uiEntry({
    name: "table",
    label: "Table",
    id: "table-projects-radix",
    variant: "Projects",
    installTarget: "@reui-unbound/table-projects",
    dependencies: ["@reui-unbound/badge", "avatar", "table", "@reui-unbound/icon-placeholder"],
    Component: UiTableProjectsPreview,
    source: UiTableProjectsSource,
  }),
  uiEntry({
    name: "table",
    label: "Table",
    id: "table-activity-log-radix",
    variant: "Activity Log",
    installTarget: "@reui-unbound/table-activity-log",
    dependencies: ["@reui-unbound/badge", "@reui-unbound/frame", "avatar", "table"],
    Component: UiTableActivityLogPreview,
    source: UiTableActivityLogSource,
  }),
  uiEntry({
    name: "table",
    label: "Table",
    id: "table-subscriptions-radix",
    variant: "Subscriptions",
    installTarget: "@reui-unbound/table-subscriptions",
    dependencies: ["@reui-unbound/badge", "button", "table", "@reui-unbound/icon-placeholder"],
    Component: UiTableSubscriptionsPreview,
    source: UiTableSubscriptionsSource,
  }),
  uiEntry({
    name: "table",
    label: "Table",
    id: "table-inventory-radix",
    variant: "Inventory",
    installTarget: "@reui-unbound/table-inventory",
    dependencies: ["@reui-unbound/badge", "button", "dropdown-menu", "table", "@reui-unbound/icon-placeholder"],
    Component: UiTableInventoryPreview,
    source: UiTableInventorySource,
  }),
  uiEntry({
    name: "table",
    label: "Table",
    id: "table-api-keys-radix",
    variant: "API Keys",
    installTarget: "@reui-unbound/table-api-keys",
    dependencies: ["@reui-unbound/badge", "button", "card", "table", "@reui-unbound/icon-placeholder"],
    Component: UiTableApiKeysPreview,
    source: UiTableApiKeysSource,
  }),
  uiEntry({
    name: "table",
    label: "Table",
    id: "table-file-manager-radix",
    variant: "File Manager",
    installTarget: "@reui-unbound/table-file-manager",
    dependencies: ["@reui-unbound/badge", "avatar", "table", "@reui-unbound/icon-placeholder"],
    Component: UiTableFileManagerPreview,
    source: UiTableFileManagerSource,
  }),
  uiEntry({
    name: "table",
    label: "Table",
    id: "table-issues-radix",
    variant: "Issues",
    installTarget: "@reui-unbound/table-issues",
    dependencies: ["@reui-unbound/badge", "avatar", "card", "table", "@reui-unbound/icon-placeholder"],
    Component: UiTableIssuesPreview,
    source: UiTableIssuesSource,
  }),
  uiEntry({
    name: "table",
    label: "Table",
    id: "table-leaderboard-radix",
    variant: "Leaderboard",
    installTarget: "@reui-unbound/table-leaderboard",
    dependencies: ["@reui-unbound/badge", "avatar", "table", "@reui-unbound/icon-placeholder"],
    Component: UiTableLeaderboardPreview,
    source: UiTableLeaderboardSource,
  }),
  uiEntry({
    name: "table",
    label: "Table",
    id: "table-employee-profile-radix",
    variant: "Employee Profile",
    installTarget: "@reui-unbound/table-employee-profile",
    dependencies: ["@reui-unbound/badge", "avatar", "table"],
    Component: UiTableEmployeeProfilePreview,
    source: UiTableEmployeeProfileSource,
  }),
  uiEntry({
    name: "table",
    label: "Table",
    id: "table-server-config-radix",
    variant: "Server Config",
    installTarget: "@reui-unbound/table-server-config",
    dependencies: ["@reui-unbound/badge", "@reui-unbound/frame", "table", "@reui-unbound/icon-placeholder"],
    Component: UiTableServerConfigPreview,
    source: UiTableServerConfigSource,
  }),
  uiEntry({
    name: "tabs",
    label: "Tabs",
    Component: UiTabsPreview,
    source: UiTabsSource,
  }),
  uiEntry({
    name: "tabs",
    label: "Tabs",
    id: "tabs-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/tabs-standard",
    dependencies: ["button", "card", "input", "label", "tabs"],
    Component: UiTabsStandardPreview,
    source: UiTabsStandardSource,
  }),
  uiEntry({
    name: "tabs",
    label: "Tabs",
    id: "tabs-line-variant-radix",
    variant: "Line Variant",
    installTarget: "@reui-unbound/tabs-line-variant",
    dependencies: ["button", "card", "input", "label", "tabs"],
    Component: UiTabsLineVariantPreview,
    source: UiTabsLineVariantSource,
  }),
  uiEntry({
    name: "tabs",
    label: "Tabs",
    id: "tabs-vertical-radix",
    variant: "Vertical",
    installTarget: "@reui-unbound/tabs-vertical",
    dependencies: ["button", "card", "input", "label", "tabs"],
    Component: UiTabsVerticalPreview,
    source: UiTabsVerticalSource,
  }),
  uiEntry({
    name: "tabs",
    label: "Tabs",
    id: "tabs-vertical-line-radix",
    variant: "Vertical Line",
    installTarget: "@reui-unbound/tabs-vertical-line",
    dependencies: ["button", "card", "input", "label", "tabs"],
    Component: UiTabsVerticalLinePreview,
    source: UiTabsVerticalLineSource,
  }),
  uiEntry({
    name: "tabs",
    label: "Tabs",
    id: "tabs-icons-radix",
    variant: "Icons",
    installTarget: "@reui-unbound/tabs-icons",
    dependencies: ["button", "card", "input", "label", "tabs", "@reui-unbound/icon-placeholder"],
    Component: UiTabsIconsPreview,
    source: UiTabsIconsSource,
  }),
  uiEntry({
    name: "tabs",
    label: "Tabs",
    id: "tabs-full-width-icons-radix",
    variant: "Full Width Icons",
    installTarget: "@reui-unbound/tabs-full-width-icons",
    dependencies: ["card", "tabs", "@reui-unbound/icon-placeholder"],
    Component: UiTabsFullWidthIconsPreview,
    source: UiTabsFullWidthIconsSource,
  }),
  uiEntry({
    name: "tabs",
    label: "Tabs",
    id: "tabs-badge-counts-radix",
    variant: "Badge Counts",
    installTarget: "@reui-unbound/tabs-badge-counts",
    dependencies: ["@reui-unbound/badge", "card", "tabs"],
    Component: UiTabsBadgeCountsPreview,
    source: UiTabsBadgeCountsSource,
  }),
  uiEntry({
    name: "tabs",
    label: "Tabs",
    id: "tabs-side-list-icons-radix",
    variant: "Side List Icons",
    installTarget: "@reui-unbound/tabs-side-list-icons",
    dependencies: ["@reui-unbound/badge", "card", "tabs", "@reui-unbound/icon-placeholder"],
    Component: UiTabsSideListIconsPreview,
    source: UiTabsSideListIconsSource,
  }),
  uiEntry({
    name: "tabs",
    label: "Tabs",
    id: "tabs-segmented-control-radix",
    variant: "Segmented Control",
    installTarget: "@reui-unbound/tabs-segmented-control",
    dependencies: ["card", "tabs", "@reui-unbound/icon-placeholder"],
    Component: UiTabsSegmentedControlPreview,
    source: UiTabsSegmentedControlSource,
  }),
  uiEntry({
    name: "textarea",
    label: "Textarea",
    Component: UiTextareaPreview,
    source: UiTextareaSource,
  }),
  uiEntry({
    name: "textarea",
    label: "Textarea",
    id: "textarea-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/textarea-standard",
    dependencies: ["textarea"],
    Component: UiTextareaStandardPreview,
    source: UiTextareaStandardSource,
  }),
  uiEntry({
    name: "textarea",
    label: "Textarea",
    id: "textarea-invalid-radix",
    variant: "Invalid",
    installTarget: "@reui-unbound/textarea-invalid",
    dependencies: ["textarea"],
    Component: UiTextareaInvalidPreview,
    source: UiTextareaInvalidSource,
  }),
  uiEntry({
    name: "textarea",
    label: "Textarea",
    id: "textarea-with-label-radix",
    variant: "With Label",
    installTarget: "@reui-unbound/textarea-with-label",
    dependencies: ["field", "textarea"],
    Component: UiTextareaWithLabelPreview,
    source: UiTextareaWithLabelSource,
  }),
  uiEntry({
    name: "textarea",
    label: "Textarea",
    id: "textarea-with-description-radix",
    variant: "With Description",
    installTarget: "@reui-unbound/textarea-with-description",
    dependencies: ["field", "textarea"],
    Component: UiTextareaWithDescriptionPreview,
    source: UiTextareaWithDescriptionSource,
  }),
  uiEntry({
    name: "textarea",
    label: "Textarea",
    id: "textarea-disabled-radix",
    variant: "Disabled",
    installTarget: "@reui-unbound/textarea-disabled",
    dependencies: ["field", "textarea"],
    Component: UiTextareaDisabledPreview,
    source: UiTextareaDisabledSource,
  }),
  uiEntry({
    name: "textarea",
    label: "Textarea",
    id: "textarea-auto-resize-counter-radix",
    variant: "Auto-Resize Counter",
    installTarget: "@reui-unbound/textarea-auto-resize-counter",
    dependencies: ["field", "textarea"],
    Component: UiTextareaAutoResizeCounterPreview,
    source: UiTextareaAutoResizeCounterSource,
  }),
  uiEntry({
    name: "toggle",
    label: "Toggle",
    Component: UiTogglePreview,
    source: UiToggleSource,
  }),
  uiEntry({
    name: "toggle",
    label: "Toggle",
    id: "toggle-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/toggle-standard",
    dependencies: ["toggle", "@reui-unbound/icon-placeholder"],
    Component: UiToggleStandardPreview,
    source: UiToggleStandardSource,
  }),
  uiEntry({
    name: "toggle",
    label: "Toggle",
    id: "toggle-outline-radix",
    variant: "Outline",
    installTarget: "@reui-unbound/toggle-outline",
    dependencies: ["toggle", "@reui-unbound/icon-placeholder"],
    Component: UiToggleOutlinePreview,
    source: UiToggleOutlineSource,
  }),
  uiEntry({
    name: "toggle",
    label: "Toggle",
    id: "toggle-text-sizes-radix",
    variant: "Text Sizes",
    installTarget: "@reui-unbound/toggle-text-sizes",
    dependencies: ["toggle"],
    Component: UiToggleTextSizesPreview,
    source: UiToggleTextSizesSource,
  }),
  uiEntry({
    name: "toggle",
    label: "Toggle",
    id: "toggle-button-comparison-radix",
    variant: "Button Comparison",
    installTarget: "@reui-unbound/toggle-button-comparison",
    dependencies: ["button", "toggle", "@reui-unbound/icon-placeholder"],
    Component: UiToggleButtonComparisonPreview,
    source: UiToggleButtonComparisonSource,
  }),
  uiEntry({
    name: "toggle",
    label: "Toggle",
    id: "toggle-disabled-text-radix",
    variant: "Disabled Text",
    installTarget: "@reui-unbound/toggle-disabled-text",
    dependencies: ["toggle"],
    Component: UiToggleDisabledTextPreview,
    source: UiToggleDisabledTextSource,
  }),
  uiEntry({
    name: "toggle",
    label: "Toggle",
    id: "toggle-icon-label-radix",
    variant: "Icon & Label",
    installTarget: "@reui-unbound/toggle-icon-label",
    dependencies: ["toggle", "@reui-unbound/icon-placeholder"],
    Component: UiToggleIconLabelPreview,
    source: UiToggleIconLabelSource,
  }),
  uiEntry({
    name: "toggle",
    label: "Toggle",
    id: "toggle-count-badge-radix",
    variant: "Count Badge",
    installTarget: "@reui-unbound/toggle-count-badge",
    dependencies: ["@reui-unbound/badge", "toggle", "@reui-unbound/icon-placeholder"],
    Component: UiToggleCountBadgePreview,
    source: UiToggleCountBadgeSource,
  }),
  uiEntry({
    name: "toggle",
    label: "Toggle",
    id: "toggle-icon-sizes-radix",
    variant: "Icon Sizes",
    installTarget: "@reui-unbound/toggle-icon-sizes",
    dependencies: ["toggle", "@reui-unbound/icon-placeholder"],
    Component: UiToggleIconSizesPreview,
    source: UiToggleIconSizesSource,
  }),
  uiEntry({
    name: "toggle",
    label: "Toggle",
    id: "toggle-icon-swap-radix",
    variant: "Icon Swap",
    installTarget: "@reui-unbound/toggle-icon-swap",
    dependencies: ["toggle", "@reui-unbound/icon-placeholder"],
    Component: UiToggleIconSwapPreview,
    source: UiToggleIconSwapSource,
  }),
  uiEntry({
    name: "toggle",
    label: "Toggle",
    id: "toggle-label-swap-radix",
    variant: "Label Swap",
    installTarget: "@reui-unbound/toggle-label-swap",
    dependencies: ["toggle", "@reui-unbound/icon-placeholder"],
    Component: UiToggleLabelSwapPreview,
    source: UiToggleLabelSwapSource,
  }),
  uiEntry({
    name: "toggle",
    label: "Toggle",
    id: "toggle-reactions-radix",
    variant: "Reactions",
    installTarget: "@reui-unbound/toggle-reactions",
    dependencies: ["toggle", "@reui-unbound/icon-placeholder"],
    Component: UiToggleReactionsPreview,
    source: UiToggleReactionsSource,
  }),
  uiEntry({
    name: "toggle",
    label: "Toggle",
    id: "toggle-tooltip-radix",
    variant: "Tooltip",
    installTarget: "@reui-unbound/toggle-tooltip",
    dependencies: ["toggle", "tooltip", "@reui-unbound/icon-placeholder"],
    Component: UiToggleTooltipPreview,
    source: UiToggleTooltipSource,
  }),
  uiEntry({
    name: "toggle",
    label: "Toggle",
    id: "toggle-disabled-icons-radix",
    variant: "Disabled Icons",
    installTarget: "@reui-unbound/toggle-disabled-icons",
    dependencies: ["toggle", "@reui-unbound/icon-placeholder"],
    Component: UiToggleDisabledIconsPreview,
    source: UiToggleDisabledIconsSource,
  }),
  uiEntry({
    name: "toggle",
    label: "Toggle",
    id: "toggle-mute-button-radix",
    variant: "Mute Button",
    installTarget: "@reui-unbound/toggle-mute-button",
    dependencies: ["toggle", "@reui-unbound/icon-placeholder"],
    Component: UiToggleMuteButtonPreview,
    source: UiToggleMuteButtonSource,
  }),
  uiEntry({
    name: "toggle-group",
    label: "Toggle Group",
    Component: UiToggleGroupPreview,
    source: UiToggleGroupSource,
  }),
  uiEntry({
    name: "toggle-group",
    label: "Toggle Group",
    id: "toggle-group-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/toggle-group-standard",
    dependencies: ["toggle-group", "@reui-unbound/icon-placeholder"],
    Component: UiToggleGroupStandardPreview,
    source: UiToggleGroupStandardSource,
  }),
  uiEntry({
    name: "toggle-group",
    label: "Toggle Group",
    id: "toggle-group-outline-radix",
    variant: "Outline",
    installTarget: "@reui-unbound/toggle-group-outline",
    dependencies: ["toggle-group"],
    Component: UiToggleGroupOutlinePreview,
    source: UiToggleGroupOutlineSource,
  }),
  uiEntry({
    name: "toggle-group",
    label: "Toggle Group",
    id: "toggle-group-sizes-radix",
    variant: "Sizes",
    installTarget: "@reui-unbound/toggle-group-sizes",
    dependencies: ["toggle-group"],
    Component: UiToggleGroupSizesPreview,
    source: UiToggleGroupSizesSource,
  }),
  uiEntry({
    name: "toggle-group",
    label: "Toggle Group",
    id: "toggle-group-custom-spacing-radix",
    variant: "Custom Spacing",
    installTarget: "@reui-unbound/toggle-group-custom-spacing",
    dependencies: ["toggle-group"],
    Component: UiToggleGroupCustomSpacingPreview,
    source: UiToggleGroupCustomSpacingSource,
  }),
  uiEntry({
    name: "toggle-group",
    label: "Toggle Group",
    id: "toggle-group-filter-control-radix",
    variant: "Filter Control",
    installTarget: "@reui-unbound/toggle-group-filter-control",
    dependencies: ["toggle-group"],
    Component: UiToggleGroupFilterControlPreview,
    source: UiToggleGroupFilterControlSource,
  }),
  uiEntry({
    name: "toggle-group",
    label: "Toggle Group",
    id: "toggle-group-vertical-radix",
    variant: "Vertical",
    installTarget: "@reui-unbound/toggle-group-vertical",
    dependencies: ["toggle-group", "@reui-unbound/icon-placeholder"],
    Component: UiToggleGroupVerticalPreview,
    source: UiToggleGroupVerticalSource,
  }),
  uiEntry({
    name: "toggle-group",
    label: "Toggle Group",
    id: "toggle-group-text-alignment-radix",
    variant: "Text Alignment",
    installTarget: "@reui-unbound/toggle-group-text-alignment",
    dependencies: ["toggle-group", "@reui-unbound/icon-placeholder"],
    Component: UiToggleGroupTextAlignmentPreview,
    source: UiToggleGroupTextAlignmentSource,
  }),
  uiEntry({
    name: "toggle-group",
    label: "Toggle Group",
    id: "toggle-group-view-mode-radix",
    variant: "View Mode",
    installTarget: "@reui-unbound/toggle-group-view-mode",
    dependencies: ["toggle-group", "@reui-unbound/icon-placeholder"],
    Component: UiToggleGroupViewModePreview,
    source: UiToggleGroupViewModeSource,
  }),
  uiEntry({
    name: "toggle-group",
    label: "Toggle Group",
    id: "toggle-group-vertical-settings-radix",
    variant: "Vertical Settings",
    installTarget: "@reui-unbound/toggle-group-vertical-settings",
    dependencies: ["toggle-group", "@reui-unbound/icon-placeholder"],
    Component: UiToggleGroupVerticalSettingsPreview,
    source: UiToggleGroupVerticalSettingsSource,
  }),
  uiEntry({
    name: "toggle-group",
    label: "Toggle Group",
    id: "toggle-group-color-theme-radix",
    variant: "Color Theme",
    installTarget: "@reui-unbound/toggle-group-color-theme",
    dependencies: ["toggle-group", "@reui-unbound/icon-placeholder"],
    Component: UiToggleGroupColorThemePreview,
    source: UiToggleGroupColorThemeSource,
  }),
  uiEntry({
    name: "toggle-group",
    label: "Toggle Group",
    id: "toggle-group-font-size-radix",
    variant: "Font Size",
    installTarget: "@reui-unbound/toggle-group-font-size",
    dependencies: ["toggle-group"],
    Component: UiToggleGroupFontSizePreview,
    source: UiToggleGroupFontSizeSource,
  }),
  uiEntry({
    name: "toggle-group",
    label: "Toggle Group",
    id: "toggle-group-time-range-radix",
    variant: "Time Range",
    installTarget: "@reui-unbound/toggle-group-time-range",
    dependencies: ["toggle-group"],
    Component: UiToggleGroupTimeRangePreview,
    source: UiToggleGroupTimeRangeSource,
  }),
  uiEntry({
    name: "toggle-group",
    label: "Toggle Group",
    id: "toggle-group-notification-channels-radix",
    variant: "Notification Channels",
    installTarget: "@reui-unbound/toggle-group-notification-channels",
    dependencies: ["toggle-group", "@reui-unbound/icon-placeholder"],
    Component: UiToggleGroupNotificationChannelsPreview,
    source: UiToggleGroupNotificationChannelsSource,
  }),
  uiEntry({
    name: "toggle-group",
    label: "Toggle Group",
    id: "toggle-group-layout-columns-radix",
    variant: "Layout Columns",
    installTarget: "@reui-unbound/toggle-group-layout-columns",
    dependencies: ["toggle-group", "@reui-unbound/icon-placeholder"],
    Component: UiToggleGroupLayoutColumnsPreview,
    source: UiToggleGroupLayoutColumnsSource,
  }),
  uiEntry({
    name: "toggle-group",
    label: "Toggle Group",
    id: "toggle-group-sort-direction-radix",
    variant: "Sort Direction",
    installTarget: "@reui-unbound/toggle-group-sort-direction",
    dependencies: ["toggle-group", "@reui-unbound/icon-placeholder"],
    Component: UiToggleGroupSortDirectionPreview,
    source: UiToggleGroupSortDirectionSource,
  }),
  uiEntry({
    name: "toggle-group",
    label: "Toggle Group",
    id: "toggle-group-pricing-tier-radix",
    variant: "Pricing Tier",
    installTarget: "@reui-unbound/toggle-group-pricing-tier",
    dependencies: ["toggle-group"],
    Component: UiToggleGroupPricingTierPreview,
    source: UiToggleGroupPricingTierSource,
  }),
  uiEntry({
    name: "tooltip",
    label: "Tooltip",
    Component: UiTooltipPreview,
    source: UiTooltipSource,
  }),
  uiEntry({
    name: "tooltip",
    label: "Tooltip",
    id: "tooltip-standard-radix",
    variant: "Standard",
    installTarget: "@reui-unbound/tooltip-standard",
    dependencies: ["button", "tooltip"],
    Component: UiTooltipStandardPreview,
    source: UiTooltipStandardSource,
  }),
  uiEntry({
    name: "tooltip",
    label: "Tooltip",
    id: "tooltip-placements-radix",
    variant: "Placements",
    installTarget: "@reui-unbound/tooltip-placements",
    dependencies: ["button", "tooltip"],
    Component: UiTooltipPlacementsPreview,
    source: UiTooltipPlacementsSource,
  }),
  uiEntry({
    name: "tooltip",
    label: "Tooltip",
    id: "tooltip-icon-trigger-radix",
    variant: "Icon Trigger",
    installTarget: "@reui-unbound/tooltip-icon-trigger",
    dependencies: ["button", "tooltip", "@reui-unbound/icon-placeholder"],
    Component: UiTooltipIconTriggerPreview,
    source: UiTooltipIconTriggerSource,
  }),
  uiEntry({
    name: "tooltip",
    label: "Tooltip",
    id: "tooltip-keyboard-shortcut-radix",
    variant: "Keyboard Shortcut",
    installTarget: "@reui-unbound/tooltip-keyboard-shortcut",
    dependencies: ["button", "kbd", "tooltip", "@reui-unbound/icon-placeholder"],
    Component: UiTooltipKeyboardShortcutPreview,
    source: UiTooltipKeyboardShortcutSource,
  }),
  uiEntry({
    name: "tooltip",
    label: "Tooltip",
    id: "tooltip-bell-with-count-radix",
    variant: "Bell With Count",
    installTarget: "@reui-unbound/tooltip-bell-with-count",
    dependencies: ["@reui-unbound/badge", "button", "tooltip", "@reui-unbound/icon-placeholder"],
    Component: UiTooltipBellWithCountPreview,
    source: UiTooltipBellWithCountSource,
  }),
  uiEntry({
    name: "tooltip",
    label: "Tooltip",
    id: "tooltip-status-badges-radix",
    variant: "Status Badges",
    installTarget: "@reui-unbound/tooltip-status-badges",
    dependencies: ["@reui-unbound/badge", "button", "tooltip"],
    Component: UiTooltipStatusBadgesPreview,
    source: UiTooltipStatusBadgesSource,
  }),
  uiEntry({
    name: "tooltip",
    label: "Tooltip",
    id: "tooltip-verified-domain-radix",
    variant: "Verified Domain",
    installTarget: "@reui-unbound/tooltip-verified-domain",
    dependencies: ["@reui-unbound/badge", "tooltip", "@reui-unbound/icon-placeholder"],
    Component: UiTooltipVerifiedDomainPreview,
    source: UiTooltipVerifiedDomainSource,
  }),
  uiEntry({
    name: "tooltip",
    label: "Tooltip",
    id: "tooltip-toolbar-actions-radix",
    variant: "Toolbar Actions",
    installTarget: "@reui-unbound/tooltip-toolbar-actions",
    dependencies: ["button", "separator", "tooltip", "@reui-unbound/icon-placeholder"],
    Component: UiTooltipToolbarActionsPreview,
    source: UiTooltipToolbarActionsSource,
  }),
  uiEntry({
    name: "tooltip",
    label: "Tooltip",
    id: "tooltip-warning-radix",
    variant: "Warning",
    installTarget: "@reui-unbound/tooltip-warning",
    dependencies: ["@reui-unbound/badge", "button", "tooltip", "@reui-unbound/icon-placeholder"],
    Component: UiTooltipWarningPreview,
    source: UiTooltipWarningSource,
  }),
  uiEntry({
    name: "tooltip",
    label: "Tooltip",
    id: "tooltip-upgrade-prompt-radix",
    variant: "Upgrade Prompt",
    installTarget: "@reui-unbound/tooltip-upgrade-prompt",
    dependencies: ["@reui-unbound/badge", "button", "tooltip", "@reui-unbound/icon-placeholder"],
    Component: UiTooltipUpgradePromptPreview,
    source: UiTooltipUpgradePromptSource,
  }),
  uiEntry({
    name: "tooltip",
    label: "Tooltip",
    id: "tooltip-avatar-role-badge-radix",
    variant: "Avatar Role Badge",
    installTarget: "@reui-unbound/tooltip-avatar-role-badge",
    dependencies: ["@reui-unbound/badge", "avatar", "tooltip"],
    Component: UiTooltipAvatarRoleBadgePreview,
    source: UiTooltipAvatarRoleBadgeSource,
  }),
  uiEntry({
    name: "tooltip",
    label: "Tooltip",
    id: "tooltip-disabled-button-radix",
    variant: "Disabled Button",
    installTarget: "@reui-unbound/tooltip-disabled-button",
    dependencies: ["button", "tooltip"],
    Component: UiTooltipDisabledButtonPreview,
    source: UiTooltipDisabledButtonSource,
  }),
  uiEntry({
    name: "tooltip",
    label: "Tooltip",
    id: "tooltip-online-status-radix",
    variant: "Online Status",
    installTarget: "@reui-unbound/tooltip-online-status",
    dependencies: ["avatar", "tooltip"],
    Component: UiTooltipOnlineStatusPreview,
    source: UiTooltipOnlineStatusSource,
  }),
  uiEntry({
    name: "tooltip",
    label: "Tooltip",
    id: "tooltip-file-info-radix",
    variant: "File Info",
    installTarget: "@reui-unbound/tooltip-file-info",
    dependencies: ["@reui-unbound/badge", "tooltip", "@reui-unbound/icon-placeholder"],
    Component: UiTooltipFileInfoPreview,
    source: UiTooltipFileInfoSource,
  }),
  uiEntry({
    name: "tooltip",
    label: "Tooltip",
    id: "tooltip-label-badges-radix",
    variant: "Label Badges",
    installTarget: "@reui-unbound/tooltip-label-badges",
    dependencies: ["@reui-unbound/badge", "tooltip", "@reui-unbound/icon-placeholder"],
    Component: UiTooltipLabelBadgesPreview,
    source: UiTooltipLabelBadgesSource,
  }),
  uiEntry({
    name: "tooltip",
    label: "Tooltip",
    id: "tooltip-unread-bell-radix",
    variant: "Unread Bell",
    installTarget: "@reui-unbound/tooltip-unread-bell",
    dependencies: ["button", "tooltip", "@reui-unbound/icon-placeholder"],
    Component: UiTooltipUnreadBellPreview,
    source: UiTooltipUnreadBellSource,
  }),
  uiEntry({
    name: "trace",
    label: "Trace",
    Component: UiTracePreview,
    source: UiTraceSource,
  }),
  uiEntry({
    name: "trace",
    label: "Trace",
    id: "trace-agent-steps-radix",
    variant: "Agent Steps",
    installTarget: "@reui-unbound/trace-agent-steps",
    dependencies: ["@reui-unbound/code-block", "trace", "@reui-unbound/icon-placeholder"],
    Component: UiTraceAgentStepsPreview,
    source: UiTraceAgentStepsSource,
  }),
  uiEntry({
    name: "trace",
    label: "Trace",
    id: "trace-streaming-run-radix",
    variant: "Streaming Run",
    installTarget: "@reui-unbound/trace-streaming-run",
    dependencies: ["@reui-unbound/code-block", "button", "trace", "@reui-unbound/icon-placeholder"],
    Component: UiTraceStreamingRunPreview,
    source: UiTraceStreamingRunSource,
  }),
  uiEntry({
    name: "trace",
    label: "Trace",
    id: "trace-chat-turn-radix",
    variant: "Chat Turn",
    installTarget: "@reui-unbound/trace-chat-turn",
    dependencies: ["@reui-unbound/code-block", "bubble", "message", "trace", "@reui-unbound/icon-placeholder"],
    Component: UiTraceChatTurnPreview,
    source: UiTraceChatTurnSource,
  }),
  uiEntry({
    name: "trace",
    label: "Trace",
    id: "trace-subagents-radix",
    variant: "Subagents",
    installTarget: "@reui-unbound/trace-subagents",
    dependencies: ["@reui-unbound/code-block", "button", "trace", "@reui-unbound/icon-placeholder"],
    Component: UiTraceSubagentsPreview,
    source: UiTraceSubagentsSource,
  }),
  uiEntry({
    name: "trace",
    label: "Trace",
    id: "trace-change-approval-radix",
    variant: "Change Approval",
    installTarget: "@reui-unbound/trace-change-approval",
    dependencies: ["button", "item", "trace", "@reui-unbound/icon-placeholder"],
    Component: UiTraceChangeApprovalPreview,
    source: UiTraceChangeApprovalSource,
  }),
  uiEntry({
    name: "trace",
    label: "Trace",
    id: "trace-cited-sources-radix",
    variant: "Cited Sources",
    installTarget: "@reui-unbound/trace-cited-sources",
    dependencies: ["@reui-unbound/badge", "trace", "@reui-unbound/icon-placeholder"],
    Component: UiTraceCitedSourcesPreview,
    source: UiTraceCitedSourcesSource,
  }),
  uiEntry({
    name: "trace",
    label: "Trace",
    id: "trace-support-copilot-radix",
    variant: "Support Copilot",
    installTarget: "@reui-unbound/trace-support-copilot",
    dependencies: ["button", "trace", "@reui-unbound/icon-placeholder"],
    Component: UiTraceSupportCopilotPreview,
    source: UiTraceSupportCopilotSource,
  }),
  uiEntry({
    name: "trace",
    label: "Trace",
    id: "trace-install-summary-radix",
    variant: "Install Summary",
    installTarget: "@reui-unbound/trace-install-summary",
    dependencies: ["@reui-unbound/code-block", "trace", "@reui-unbound/icon-placeholder"],
    Component: UiTraceInstallSummaryPreview,
    source: UiTraceInstallSummarySource,
  }),
  uiEntry({
    name: "trace",
    label: "Trace",
    id: "trace-ci-pipeline-radix",
    variant: "CI Pipeline",
    installTarget: "@reui-unbound/trace-ci-pipeline",
    dependencies: ["@reui-unbound/code-block", "button", "trace", "@reui-unbound/icon-placeholder"],
    Component: UiTraceCiPipelinePreview,
    source: UiTraceCiPipelineSource,
  }),
  uiEntry({
    name: "trace",
    label: "Trace",
    id: "trace-request-spans-radix",
    variant: "Request Spans",
    installTarget: "@reui-unbound/trace-request-spans",
    dependencies: ["@reui-unbound/badge", "trace", "@reui-unbound/icon-placeholder"],
    Component: UiTraceRequestSpansPreview,
    source: UiTraceRequestSpansSource,
  }),
  uiEntry({
    name: "trace",
    label: "Trace",
    id: "trace-error-breadcrumbs-radix",
    variant: "Error Breadcrumbs",
    installTarget: "@reui-unbound/trace-error-breadcrumbs",
    dependencies: ["@reui-unbound/code-block", "dialog", "trace", "@reui-unbound/icon-placeholder"],
    Component: UiTraceErrorBreadcrumbsPreview,
    source: UiTraceErrorBreadcrumbsSource,
  }),
  uiEntry({
    name: "trace",
    label: "Trace",
    id: "trace-query-plan-radix",
    variant: "Query Plan",
    installTarget: "@reui-unbound/trace-query-plan",
    dependencies: ["@reui-unbound/badge", "@reui-unbound/code-block", "trace", "@reui-unbound/icon-placeholder"],
    Component: UiTraceQueryPlanPreview,
    source: UiTraceQueryPlanSource,
  }),
  uiEntry({
    name: "trace",
    label: "Trace",
    id: "trace-data-pipeline-radix",
    variant: "Data Pipeline",
    installTarget: "@reui-unbound/trace-data-pipeline",
    dependencies: ["card", "table", "trace", "@reui-unbound/icon-placeholder"],
    Component: UiTraceDataPipelinePreview,
    source: UiTraceDataPipelineSource,
  }),
  uiEntry({
    name: "trace",
    label: "Trace",
    id: "trace-webhook-retries-radix",
    variant: "Webhook Retries",
    installTarget: "@reui-unbound/trace-webhook-retries",
    dependencies: ["@reui-unbound/code-block", "button", "trace", "@reui-unbound/icon-placeholder"],
    Component: UiTraceWebhookRetriesPreview,
    source: UiTraceWebhookRetriesSource,
  }),
  uiEntry({
    name: "trace",
    label: "Trace",
    id: "trace-csv-import-radix",
    variant: "CSV Import",
    installTarget: "@reui-unbound/trace-csv-import",
    dependencies: ["button", "card", "table", "trace", "@reui-unbound/icon-placeholder"],
    Component: UiTraceCsvImportPreview,
    source: UiTraceCsvImportSource,
  }),
  uiEntry({
    name: "trace",
    label: "Trace",
    id: "trace-security-audit-radix",
    variant: "Security Audit",
    installTarget: "@reui-unbound/trace-security-audit",
    dependencies: ["@reui-unbound/badge", "button", "trace", "@reui-unbound/icon-placeholder"],
    Component: UiTraceSecurityAuditPreview,
    source: UiTraceSecurityAuditSource,
  }),
  uiEntry({
    name: "trace",
    label: "Trace",
    id: "trace-review-findings-radix",
    variant: "Review Findings",
    installTarget: "@reui-unbound/trace-review-findings",
    dependencies: ["@reui-unbound/code-block", "button", "sheet", "trace", "@reui-unbound/icon-placeholder"],
    Component: UiTraceReviewFindingsPreview,
    source: UiTraceReviewFindingsSource,
  }),
  uiEntry({
    name: "trace",
    label: "Trace",
    id: "trace-eval-results-radix",
    variant: "Eval Results",
    installTarget: "@reui-unbound/trace-eval-results",
    dependencies: ["label", "switch", "trace", "@reui-unbound/icon-placeholder"],
    Component: UiTraceEvalResultsPreview,
    source: UiTraceEvalResultsSource,
  }),
  uiEntry({
    name: "trace",
    label: "Trace",
    id: "trace-access-decision-radix",
    variant: "Access Decision",
    installTarget: "@reui-unbound/trace-access-decision",
    dependencies: ["field", "select", "trace", "@reui-unbound/icon-placeholder"],
    Component: UiTraceAccessDecisionPreview,
    source: UiTraceAccessDecisionSource,
  }),
  uiEntry({
    name: "trace",
    label: "Trace",
    id: "trace-identity-review-radix",
    variant: "Identity Review",
    installTarget: "@reui-unbound/trace-identity-review",
    dependencies: ["button", "trace", "@reui-unbound/icon-placeholder"],
    Component: UiTraceIdentityReviewPreview,
    source: UiTraceIdentityReviewSource,
  }),
  uiEntry({
    name: "trace",
    label: "Trace",
    id: "trace-domain-setup-radix",
    variant: "Domain Setup",
    installTarget: "@reui-unbound/trace-domain-setup",
    dependencies: ["button", "card", "table", "trace", "@reui-unbound/icon-placeholder"],
    Component: UiTraceDomainSetupPreview,
    source: UiTraceDomainSetupSource,
  }),
  uiEntry({
    name: "trace",
    label: "Trace",
    id: "trace-transcode-radix",
    variant: "Transcode",
    installTarget: "@reui-unbound/trace-transcode",
    dependencies: ["trace", "@reui-unbound/icon-placeholder"],
    Component: UiTraceTranscodePreview,
    source: UiTraceTranscodeSource,
  }),
]
