import { blockFile as file, lazyComponent, sourceLoader } from "@/blocks/~internal/lazy"
import type { SourceLoader } from "@/blocks/~internal/lazy"
import type { BlockEntry, BlockFile } from "@/blocks/~internal/registry"

const UiAccordionSingleExpandPreview = lazyComponent(() => import("../radix/accordion/single-expand"))
const UiAccordionPlusMinusPreview = lazyComponent(() => import("../radix/accordion/plus-minus"))
const UiAccordionBorderedPreview = lazyComponent(() => import("../radix/accordion/bordered"))
const UiAccordionInCardPreview = lazyComponent(() => import("../radix/accordion/in-card"))
const UiAccordionDisabledItemsPreview = lazyComponent(() => import("../radix/accordion/disabled-items"))
const UiAccordionIconsBadgesPreview = lazyComponent(() => import("../radix/accordion/icons-badges"))
const UiAccordionInFramePreview = lazyComponent(() => import("../radix/accordion/in-frame"))
const UiAccordionNestedPreview = lazyComponent(() => import("../radix/accordion/nested"))
const UiAccordionUserListPreview = lazyComponent(() => import("../radix/accordion/user-list"))
const UiAccordionRotatingArrowPreview = lazyComponent(() => import("../radix/accordion/rotating-arrow"))
const UiAccordionSetupStepsPreview = lazyComponent(() => import("../radix/accordion/setup-steps"))
const UiAlertDialogConfirmationPreview = lazyComponent(() => import("../radix/alert-dialog/confirmation"))
const UiAlertDialogSmallPreview = lazyComponent(() => import("../radix/alert-dialog/small"))
const UiAlertDialogWithIconPreview = lazyComponent(() => import("../radix/alert-dialog/with-icon"))
const UiAlertDialogSmallWithIconPreview = lazyComponent(() => import("../radix/alert-dialog/small-with-icon"))
const UiAlertDialogDestructiveDeletePreview = lazyComponent(() => import("../radix/alert-dialog/destructive-delete"))
const UiAlertDialogNestedInDialogPreview = lazyComponent(() => import("../radix/alert-dialog/nested-in-dialog"))
const UiAlertDialogSuccessNoticePreview = lazyComponent(() => import("../radix/alert-dialog/success-notice"))
const UiAlertDialogAccountDeactivationPreview = lazyComponent(() => import("../radix/alert-dialog/account-deactivation"))
const UiAlertDialogUnsavedChangesPreview = lazyComponent(() => import("../radix/alert-dialog/unsaved-changes"))
const UiAlertDialogETicketReceiptPreview = lazyComponent(() => import("../radix/alert-dialog/e-ticket-receipt"))
const UiAlertDialogSystemUpdatePreview = lazyComponent(() => import("../radix/alert-dialog/system-update"))
const UiAlertDialogBillingWarningPreview = lazyComponent(() => import("../radix/alert-dialog/billing-warning"))
const UiAlertDialogLogoutConfirmationPreview = lazyComponent(() => import("../radix/alert-dialog/logout-confirmation"))
const UiAlertDialogSecurityAuditPreview = lazyComponent(() => import("../radix/alert-dialog/security-audit"))
const UiAspectRatioWidescreenPreview = lazyComponent(() => import("../radix/aspect-ratio/widescreen"))
const UiAspectRatioStandardPreview = lazyComponent(() => import("../radix/aspect-ratio/standard"))
const UiAspectRatioSquarePreview = lazyComponent(() => import("../radix/aspect-ratio/square"))
const UiAspectRatioUltrawidePreview = lazyComponent(() => import("../radix/aspect-ratio/ultrawide"))
const UiAspectRatioTallPortraitPreview = lazyComponent(() => import("../radix/aspect-ratio/tall-portrait"))
const UiAspectRatioClassicPhotoPreview = lazyComponent(() => import("../radix/aspect-ratio/classic-photo"))
const UiAspectRatioSocialPortraitPreview = lazyComponent(() => import("../radix/aspect-ratio/social-portrait"))
const UiAspectRatioMonitorPreview = lazyComponent(() => import("../radix/aspect-ratio/monitor"))
const UiAttachmentAssistantReplyPreview = lazyComponent(() => import("../radix/attachment/assistant-reply"))
const UiAttachmentComposerTrayPreview = lazyComponent(() => import("../radix/attachment/composer-tray"))
const UiAttachmentImageStripPreview = lazyComponent(() => import("../radix/attachment/image-strip"))
const UiAttachmentThreeSizesPreview = lazyComponent(() => import("../radix/attachment/three-sizes"))
const UiAttachmentUploadQueuePreview = lazyComponent(() => import("../radix/attachment/upload-queue"))
const UiAttachmentFilePickerPreview = lazyComponent(() => import("../radix/attachment/file-picker"))
const UiAvatarStandardPreview = lazyComponent(() => import("../radix/avatar/standard"))
const UiAvatarFallbacksPreview = lazyComponent(() => import("../radix/avatar/fallbacks"))
const UiAvatarSizesPreview = lazyComponent(() => import("../radix/avatar/sizes"))
const UiAvatarBorderRadiusPreview = lazyComponent(() => import("../radix/avatar/border-radius"))
const UiAvatarCustomSizesPreview = lazyComponent(() => import("../radix/avatar/custom-sizes"))
const UiAvatarStatusDotsPreview = lazyComponent(() => import("../radix/avatar/status-dots"))
const UiAvatarBadgeIconsPreview = lazyComponent(() => import("../radix/avatar/badge-icons"))
const UiAvatarRoundBadgeCornersPreview = lazyComponent(() => import("../radix/avatar/round-badge-corners"))
const UiAvatarSquareBadgeCornersPreview = lazyComponent(() => import("../radix/avatar/square-badge-corners"))
const UiAvatarAvatarGroupPreview = lazyComponent(() => import("../radix/avatar/avatar-group"))
const UiAvatarGroupWithCountPreview = lazyComponent(() => import("../radix/avatar/group-with-count"))
const UiAvatarPlusChipGroupPreview = lazyComponent(() => import("../radix/avatar/plus-chip-group"))
const UiAvatarBorderRingsPreview = lazyComponent(() => import("../radix/avatar/border-rings"))
const UiAvatarSoftFallbacksPreview = lazyComponent(() => import("../radix/avatar/soft-fallbacks"))
const UiAvatarSolidFallbacksPreview = lazyComponent(() => import("../radix/avatar/solid-fallbacks"))
const UiAvatarUserDetailsPreview = lazyComponent(() => import("../radix/avatar/user-details"))
const UiAvatarGrayscalePreview = lazyComponent(() => import("../radix/avatar/grayscale"))
const UiAvatarGroupPresencePreview = lazyComponent(() => import("../radix/avatar/group-presence"))
const UiAvatarOutlineButtonPreview = lazyComponent(() => import("../radix/avatar/outline-button"))
const UiAvatarSocialProofPillPreview = lazyComponent(() => import("../radix/avatar/social-proof-pill"))
const UiAvatarCompactSocialProofPreview = lazyComponent(() => import("../radix/avatar/compact-social-proof"))
const UiAvatarLiftTooltipsPreview = lazyComponent(() => import("../radix/avatar/lift-tooltips"))
const UiAvatarHoverFanPreview = lazyComponent(() => import("../radix/avatar/hover-fan"))
const UiAvatarFanWithTooltipsPreview = lazyComponent(() => import("../radix/avatar/fan-with-tooltips"))
const UiAvatarBorderedCountPillPreview = lazyComponent(() => import("../radix/avatar/bordered-count-pill"))
const UiAvatarPillOutlineButtonPreview = lazyComponent(() => import("../radix/avatar/pill-outline-button"))
const UiAvatarPillPrimaryButtonPreview = lazyComponent(() => import("../radix/avatar/pill-primary-button"))
const UiAvatarEmptyStatePreview = lazyComponent(() => import("../radix/avatar/empty-state"))
const UiAvatarGroupAddButtonPreview = lazyComponent(() => import("../radix/avatar/group-add-button"))
const UiAvatarLoadingStatePreview = lazyComponent(() => import("../radix/avatar/loading-state"))
const UiAvatarCustomBadgePreview = lazyComponent(() => import("../radix/avatar/custom-badge"))
const UiAvatarPulsingRingPreview = lazyComponent(() => import("../radix/avatar/pulsing-ring"))
const UiAvatarGradientRingPreview = lazyComponent(() => import("../radix/avatar/gradient-ring"))
const UiAvatarMultipleBadgesPreview = lazyComponent(() => import("../radix/avatar/multiple-badges"))
const UiAvatarDropdownMenuPreview = lazyComponent(() => import("../radix/avatar/dropdown-menu"))
const UiBreadcrumbStandardPreview = lazyComponent(() => import("../radix/breadcrumb/standard"))
const UiBreadcrumbDropdownMenuPreview = lazyComponent(() => import("../radix/breadcrumb/dropdown-menu"))
const UiBreadcrumbRouterLinkPreview = lazyComponent(() => import("../radix/breadcrumb/router-link"))
const UiBreadcrumbSlashSeparatorPreview = lazyComponent(() => import("../radix/breadcrumb/slash-separator"))
const UiBreadcrumbItemIconsPreview = lazyComponent(() => import("../radix/breadcrumb/item-icons"))
const UiBreadcrumbStaticEllipsisPreview = lazyComponent(() => import("../radix/breadcrumb/static-ellipsis"))
const UiBreadcrumbAvatarsPreview = lazyComponent(() => import("../radix/breadcrumb/avatars"))
const UiBreadcrumbDoubleChevronPreview = lazyComponent(() => import("../radix/breadcrumb/double-chevron"))
const UiBreadcrumbInCardPreview = lazyComponent(() => import("../radix/breadcrumb/in-card"))
const UiBreadcrumbPillInFramePreview = lazyComponent(() => import("../radix/breadcrumb/pill-in-frame"))
const UiBreadcrumbCountBadgePreview = lazyComponent(() => import("../radix/breadcrumb/count-badge"))
const UiBreadcrumbHomeIconButtonPreview = lazyComponent(() => import("../radix/breadcrumb/home-icon-button"))
const UiBreadcrumbBarSeparatorPreview = lazyComponent(() => import("../radix/breadcrumb/bar-separator"))
const UiBreadcrumbButtonStylePreview = lazyComponent(() => import("../radix/breadcrumb/button-style"))
const UiBreadcrumbProjectDocumentPreview = lazyComponent(() => import("../radix/breadcrumb/project-document"))
const UiBubbleSenderAlignmentPreview = lazyComponent(() => import("../radix/bubble/sender-alignment"))
const UiBubbleAllVariantsPreview = lazyComponent(() => import("../radix/bubble/all-variants"))
const UiBubbleGroupedMessagesPreview = lazyComponent(() => import("../radix/bubble/grouped-messages"))
const UiBubbleReactionsPreview = lazyComponent(() => import("../radix/bubble/reactions"))
const UiBubbleShowMorePreview = lazyComponent(() => import("../radix/bubble/show-more"))
const UiBubbleQuickRepliesPreview = lazyComponent(() => import("../radix/bubble/quick-replies"))
const UiBubbleFormattedAnswerPreview = lazyComponent(() => import("../radix/bubble/formatted-answer"))
const UiButtonPreview = lazyComponent(() => import("../radix/button/default"))
const UiButtonStandardPreview = lazyComponent(() => import("../radix/button/standard"))
const UiButtonSecondaryPreview = lazyComponent(() => import("../radix/button/secondary"))
const UiButtonOutlinePreview = lazyComponent(() => import("../radix/button/outline"))
const UiButtonGhostPreview = lazyComponent(() => import("../radix/button/ghost"))
const UiButtonDestructivePreview = lazyComponent(() => import("../radix/button/destructive"))
const UiButtonLinkPreview = lazyComponent(() => import("../radix/button/link"))
const UiButtonExtraSmallPreview = lazyComponent(() => import("../radix/button/extra-small"))
const UiButtonSmallPreview = lazyComponent(() => import("../radix/button/small"))
const UiButtonLargePreview = lazyComponent(() => import("../radix/button/large"))
const UiButtonDisabledPreview = lazyComponent(() => import("../radix/button/disabled"))
const UiButtonIconButtonPreview = lazyComponent(() => import("../radix/button/icon-button"))
const UiButtonIconRightPreview = lazyComponent(() => import("../radix/button/icon-right"))
const UiButtonLoadingStatePreview = lazyComponent(() => import("../radix/button/loading-state"))
const UiButtonIconLeftPreview = lazyComponent(() => import("../radix/button/icon-left"))
const UiButtonInvalidStatePreview = lazyComponent(() => import("../radix/button/invalid-state"))
const UiButtonSecondaryIconLeftPreview = lazyComponent(() => import("../radix/button/secondary-icon-left"))
const UiButtonSecondaryIconRightPreview = lazyComponent(() => import("../radix/button/secondary-icon-right"))
const UiButtonOutlineIconLeftPreview = lazyComponent(() => import("../radix/button/outline-icon-left"))
const UiButtonOutlineIconRightPreview = lazyComponent(() => import("../radix/button/outline-icon-right"))
const UiButtonGhostIconLeftPreview = lazyComponent(() => import("../radix/button/ghost-icon-left"))
const UiButtonGhostIconRightPreview = lazyComponent(() => import("../radix/button/ghost-icon-right"))
const UiButtonDestructiveIconLeftPreview = lazyComponent(() => import("../radix/button/destructive-icon-left"))
const UiButtonDestructiveIconRightPreview = lazyComponent(() => import("../radix/button/destructive-icon-right"))
const UiButtonExtraSmallIconPreview = lazyComponent(() => import("../radix/button/extra-small-icon"))
const UiButtonSmallIconPreview = lazyComponent(() => import("../radix/button/small-icon"))
const UiButtonLargeIconPreview = lazyComponent(() => import("../radix/button/large-icon"))
const UiButtonNextLinkPreview = lazyComponent(() => import("../radix/button/next-link"))
const UiButtonLinkIconLeftPreview = lazyComponent(() => import("../radix/button/link-icon-left"))
const UiButtonLinkIconRightPreview = lazyComponent(() => import("../radix/button/link-icon-right"))
const UiButtonLargeIconLeftPreview = lazyComponent(() => import("../radix/button/large-icon-left"))
const UiButtonLargeIconRightPreview = lazyComponent(() => import("../radix/button/large-icon-right"))
const UiButtonOutlineInvalidPreview = lazyComponent(() => import("../radix/button/outline-invalid"))
const UiButtonGhostInvalidPreview = lazyComponent(() => import("../radix/button/ghost-invalid"))
const UiButtonEmailLoginPreview = lazyComponent(() => import("../radix/button/email-login"))
const UiButtonMoreLessTogglePreview = lazyComponent(() => import("../radix/button/more-less-toggle"))
const UiButtonOutlineSocialIconsPreview = lazyComponent(() => import("../radix/button/outline-social-icons"))
const UiButtonLikeCountPreview = lazyComponent(() => import("../radix/button/like-count"))
const UiButtonStarCountPreview = lazyComponent(() => import("../radix/button/star-count"))
const UiButtonUnreadBadgePreview = lazyComponent(() => import("../radix/button/unread-badge"))
const UiButtonShortcutKeysPreview = lazyComponent(() => import("../radix/button/shortcut-keys"))
const UiButtonCopyFeedbackPreview = lazyComponent(() => import("../radix/button/copy-feedback"))
const UiButtonIconCopyPreview = lazyComponent(() => import("../radix/button/icon-copy"))
const UiButtonHamburgerTogglePreview = lazyComponent(() => import("../radix/button/hamburger-toggle"))
const UiButtonAsyncActionPreview = lazyComponent(() => import("../radix/button/async-action"))
const UiButtonInlineCountPreview = lazyComponent(() => import("../radix/button/inline-count"))
const UiButtonStatusDotPreview = lazyComponent(() => import("../radix/button/status-dot"))
const UiButtonStatusBadgePreview = lazyComponent(() => import("../radix/button/status-badge"))
const UiButtonNotificationBadgePreview = lazyComponent(() => import("../radix/button/notification-badge"))
const UiButtonGoBackPreview = lazyComponent(() => import("../radix/button/go-back"))
const UiButtonAnimatedGoBackPreview = lazyComponent(() => import("../radix/button/animated-go-back"))
const UiButtonExpandingButtonPreview = lazyComponent(() => import("../radix/button/expanding-button"))
const UiButtonTitleDescriptionPreview = lazyComponent(() => import("../radix/button/title-description"))
const UiButtonSlidingArrowPreview = lazyComponent(() => import("../radix/button/sliding-arrow"))
const UiButtonShortcutTooltipPreview = lazyComponent(() => import("../radix/button/shortcut-tooltip"))
const UiButtonAvatarPreview = lazyComponent(() => import("../radix/button/avatar"))
const UiButtonOutlineAvatarPreview = lazyComponent(() => import("../radix/button/outline-avatar"))
const UiButtonSmallAvatarPreview = lazyComponent(() => import("../radix/button/small-avatar"))
const UiButtonSmallOutlineAvatarPreview = lazyComponent(() => import("../radix/button/small-outline-avatar"))
const UiButtonSocialLoginStackPreview = lazyComponent(() => import("../radix/button/social-login-stack"))
const UiButtonColoredSocialIconsPreview = lazyComponent(() => import("../radix/button/colored-social-icons"))
const UiButtonThemeTogglePreview = lazyComponent(() => import("../radix/button/theme-toggle"))
const UiButtonGroupPreview = lazyComponent(() => import("../radix/button-group/default"))
const UiButtonGroupTwoButtonsPreview = lazyComponent(() => import("../radix/button-group/two-buttons"))
const UiButtonGroupButtonInputPreview = lazyComponent(() => import("../radix/button-group/button-input"))
const UiButtonGroupButtonsBadgePreview = lazyComponent(() => import("../radix/button-group/buttons-badge"))
const UiButtonGroupDropdownMenuPreview = lazyComponent(() => import("../radix/button-group/dropdown-menu"))
const UiButtonGroupTeamActivityPreview = lazyComponent(() => import("../radix/button-group/team-activity"))
const UiButtonGroupIconActionsPreview = lazyComponent(() => import("../radix/button-group/icon-actions"))
const UiButtonGroupStatusIndicatorPreview = lazyComponent(() => import("../radix/button-group/status-indicator"))
const UiButtonGroupLikeCounterPreview = lazyComponent(() => import("../radix/button-group/like-counter"))
const UiButtonGroupNestedGroupsPreview = lazyComponent(() => import("../radix/button-group/nested-groups"))
const UiButtonGroupPaginationPreview = lazyComponent(() => import("../radix/button-group/pagination"))
const UiButtonGroupSplitPaginationPreview = lazyComponent(() => import("../radix/button-group/split-pagination"))
const UiButtonGroupTextAlignmentPreview = lazyComponent(() => import("../radix/button-group/text-alignment"))
const UiButtonGroupVerticalOrientationPreview = lazyComponent(() => import("../radix/button-group/vertical-orientation"))
const UiButtonGroupVerticalToolPalettePreview = lazyComponent(() => import("../radix/button-group/vertical-tool-palette"))
const UiButtonGroupStarWithDropdownPreview = lazyComponent(() => import("../radix/button-group/star-with-dropdown"))
const UiButtonGroupSearchFilterClearPreview = lazyComponent(() => import("../radix/button-group/search-filter-clear"))
const UiButtonGroupConversationMenuPreview = lazyComponent(() => import("../radix/button-group/conversation-menu"))
const UiButtonGroupGitSplitButtonPreview = lazyComponent(() => import("../radix/button-group/git-split-button"))
const UiButtonGroupSearchWithMenuPreview = lazyComponent(() => import("../radix/button-group/search-with-menu"))
const UiButtonGroupSearchWithButtonPreview = lazyComponent(() => import("../radix/button-group/search-with-button"))
const UiButtonGroupFileNameMenuPreview = lazyComponent(() => import("../radix/button-group/file-name-menu"))
const UiButtonGroupDisabledButtonPreview = lazyComponent(() => import("../radix/button-group/disabled-button"))
const UiButtonGroupSeparatedButtonsPreview = lazyComponent(() => import("../radix/button-group/separated-buttons"))
const UiButtonGroupDashboardViewsPreview = lazyComponent(() => import("../radix/button-group/dashboard-views"))
const UiButtonGroupRatingScalePreview = lazyComponent(() => import("../radix/button-group/rating-scale"))
const UiButtonGroupUserSelectionPreview = lazyComponent(() => import("../radix/button-group/user-selection"))
const UiButtonGroupStatusSelectPreview = lazyComponent(() => import("../radix/button-group/status-select"))
const UiButtonGroupVolumeControlPreview = lazyComponent(() => import("../radix/button-group/volume-control"))
const UiButtonGroupFollowerCountPreview = lazyComponent(() => import("../radix/button-group/follower-count"))
const UiButtonGroupActiveCountPreview = lazyComponent(() => import("../radix/button-group/active-count"))
const UiButtonGroupShareCaptionPreview = lazyComponent(() => import("../radix/button-group/share-caption"))
const UiButtonGroupSortViewPreview = lazyComponent(() => import("../radix/button-group/sort-view"))
const UiButtonGroupSelectControlsPreview = lazyComponent(() => import("../radix/button-group/select-controls"))
const UiButtonGroupSegmentedControlPreview = lazyComponent(() => import("../radix/button-group/segmented-control"))
const UiButtonGroupNumberedPaginationPreview = lazyComponent(() => import("../radix/button-group/numbered-pagination"))
const UiButtonGroupViewSwitcherPreview = lazyComponent(() => import("../radix/button-group/view-switcher"))
const UiButtonGroupZoomControlsPreview = lazyComponent(() => import("../radix/button-group/zoom-controls"))
const UiButtonGroupMediaControlsPreview = lazyComponent(() => import("../radix/button-group/media-controls"))
const UiButtonGroupSplitButtonPreview = lazyComponent(() => import("../radix/button-group/split-button"))
const UiButtonGroupVerticalListPreview = lazyComponent(() => import("../radix/button-group/vertical-list"))
const UiButtonGroupModelSelectorPreview = lazyComponent(() => import("../radix/button-group/model-selector"))
const UiButtonGroupOrderTypePreview = lazyComponent(() => import("../radix/button-group/order-type"))
const UiButtonGroupBuySellHoldPreview = lazyComponent(() => import("../radix/button-group/buy-sell-hold"))
const UiButtonGroupPipelineStagePreview = lazyComponent(() => import("../radix/button-group/pipeline-stage"))
const UiButtonGroupEnvironmentSwitcherPreview = lazyComponent(() => import("../radix/button-group/environment-switcher"))
const UiButtonGroupTimeIntervalPreview = lazyComponent(() => import("../radix/button-group/time-interval"))
const UiButtonGroupReviewActionsPreview = lazyComponent(() => import("../radix/button-group/review-actions"))
const UiButtonGroupExportToolbarPreview = lazyComponent(() => import("../radix/button-group/export-toolbar"))
const UiButtonGroupVerticalNavPreview = lazyComponent(() => import("../radix/button-group/vertical-nav"))
const UiButtonGroupFilterSortMorePreview = lazyComponent(() => import("../radix/button-group/filter-sort-more"))
const UiButtonGroupCreateMenuPreview = lazyComponent(() => import("../radix/button-group/create-menu"))
const UiButtonGroupDashboardActionsPreview = lazyComponent(() => import("../radix/button-group/dashboard-actions"))
const UiButtonGroupPublishControlsPreview = lazyComponent(() => import("../radix/button-group/publish-controls"))
const UiButtonGroupServiceSelectorsPreview = lazyComponent(() => import("../radix/button-group/service-selectors"))
const UiButtonGroupPayoutReleasePreview = lazyComponent(() => import("../radix/button-group/payout-release"))
const UiButtonGroupFileAttachmentPreview = lazyComponent(() => import("../radix/button-group/file-attachment"))
const UiButtonGroupAgentModePreview = lazyComponent(() => import("../radix/button-group/agent-mode"))
const UiCalendarPreview = lazyComponent(() => import("../radix/calendar/default"))
const UiCalendarStandardPreview = lazyComponent(() => import("../radix/calendar/standard"))
const UiCalendarRangePreview = lazyComponent(() => import("../radix/calendar/range"))
const UiCalendarDisabledDatesPreview = lazyComponent(() => import("../radix/calendar/disabled-dates"))
const UiCalendarMultipleDaysPreview = lazyComponent(() => import("../radix/calendar/multiple-days"))
const UiCalendarCircularDaysPreview = lazyComponent(() => import("../radix/calendar/circular-days"))
const UiCalendarCircularRangePreview = lazyComponent(() => import("../radix/calendar/circular-range"))
const UiCalendarRightNavigationPreview = lazyComponent(() => import("../radix/calendar/right-navigation"))
const UiCalendarMonthYearSelectPreview = lazyComponent(() => import("../radix/calendar/month-year-select"))
const UiCalendarYearSelectPreview = lazyComponent(() => import("../radix/calendar/year-select"))
const UiCalendarWeekNumbersPreview = lazyComponent(() => import("../radix/calendar/week-numbers"))
const UiCalendarCurrentMonthButtonPreview = lazyComponent(() => import("../radix/calendar/current-month-button"))
const UiCalendarTodayButtonPreview = lazyComponent(() => import("../radix/calendar/today-button"))
const UiCalendarYearViewPreview = lazyComponent(() => import("../radix/calendar/year-view"))
const UiCalendarTimeSlotsPreview = lazyComponent(() => import("../radix/calendar/time-slots"))
const UiCalendarDatePresetsPreview = lazyComponent(() => import("../radix/calendar/date-presets"))
const UiCalendarRangePresetsPreview = lazyComponent(() => import("../radix/calendar/range-presets"))
const UiCalendarPricingPreview = lazyComponent(() => import("../radix/calendar/pricing"))
const UiCalendarForwardPresetsPreview = lazyComponent(() => import("../radix/calendar/forward-presets"))
const UiCalendarAppointmentPreview = lazyComponent(() => import("../radix/calendar/appointment"))
const UiCalendarTwoMonthsPreview = lazyComponent(() => import("../radix/calendar/two-months"))
const UiCalendarTwoMonthRangePreview = lazyComponent(() => import("../radix/calendar/two-month-range"))
const UiCalendarEventListPreview = lazyComponent(() => import("../radix/calendar/event-list"))
const UiCalendarLocalizedPreview = lazyComponent(() => import("../radix/calendar/localized"))
const UiCalendarDatePickerPreview = lazyComponent(() => import("../radix/calendar/date-picker"))
const UiCalendarDateRangePickerPreview = lazyComponent(() => import("../radix/calendar/date-range-picker"))
const UiCalendarPickerYearViewPreview = lazyComponent(() => import("../radix/calendar/picker-year-view"))
const UiCalendarPickerTimeSlotsPreview = lazyComponent(() => import("../radix/calendar/picker-time-slots"))
const UiCalendarPickerPresetsPreview = lazyComponent(() => import("../radix/calendar/picker-presets"))
const UiCalendarRangePickerPresetsPreview = lazyComponent(() => import("../radix/calendar/range-picker-presets"))
const UiCalendarDateTimeRangePreview = lazyComponent(() => import("../radix/calendar/date-time-range"))
const UiCardPreview = lazyComponent(() => import("../radix/card/default"))
const UiCardStandardPreview = lazyComponent(() => import("../radix/card/standard"))
const UiCardBorderedHeaderPreview = lazyComponent(() => import("../radix/card/bordered-header"))
const UiCardBorderSeparationPreview = lazyComponent(() => import("../radix/card/border-separation"))
const UiCardHeaderFooterPreview = lazyComponent(() => import("../radix/card/header-footer"))
const UiCardLinkActionPreview = lazyComponent(() => import("../radix/card/link-action"))
const UiCardDropdownMenuPreview = lazyComponent(() => import("../radix/card/dropdown-menu"))
const UiCardInsetImagePreview = lazyComponent(() => import("../radix/card/inset-image"))
const UiCardImageHoverZoomPreview = lazyComponent(() => import("../radix/card/image-hover-zoom"))
const UiCardFullImagePreview = lazyComponent(() => import("../radix/card/full-image"))
const UiCardImageShadowFadePreview = lazyComponent(() => import("../radix/card/image-shadow-fade"))
const UiCardStackedDepthPreview = lazyComponent(() => import("../radix/card/stacked-depth"))
const UiCardLoginFormPreview = lazyComponent(() => import("../radix/card/login-form"))
const UiCardBillingUsagePreview = lazyComponent(() => import("../radix/card/billing-usage"))
const UiCardDeploymentStatusPreview = lazyComponent(() => import("../radix/card/deployment-status"))
const UiCardStatTrendPreview = lazyComponent(() => import("../radix/card/stat-trend"))
const UiCardBadgeActionsPreview = lazyComponent(() => import("../radix/card/badge-actions"))
const UiCardIconLinkPreview = lazyComponent(() => import("../radix/card/icon-link"))
const UiCardLabelLinkPreview = lazyComponent(() => import("../radix/card/label-link"))
const UiCarouselPreview = lazyComponent(() => import("../radix/carousel/default"))
const UiCarouselStandardPreview = lazyComponent(() => import("../radix/carousel/standard"))
const UiCarouselVerticalPreview = lazyComponent(() => import("../radix/carousel/vertical"))
const UiCarouselMultipleItemsPreview = lazyComponent(() => import("../radix/carousel/multiple-items"))
const UiCarouselResponsiveBasisPreview = lazyComponent(() => import("../radix/carousel/responsive-basis"))
const UiCarouselAutoplayPreview = lazyComponent(() => import("../radix/carousel/autoplay"))
const UiCarouselCenteredAlignmentPreview = lazyComponent(() => import("../radix/carousel/centered-alignment"))
const UiCarouselCustomSpacingPreview = lazyComponent(() => import("../radix/carousel/custom-spacing"))
const UiCarouselImageOverlaysPreview = lazyComponent(() => import("../radix/carousel/image-overlays"))
const UiCarouselThumbnailStripPreview = lazyComponent(() => import("../radix/carousel/thumbnail-strip"))
const UiCarouselOverlayThumbnailsPreview = lazyComponent(() => import("../radix/carousel/overlay-thumbnails"))
const UiCarouselDotsNavigationPreview = lazyComponent(() => import("../radix/carousel/dots-navigation"))
const UiChartPreview = lazyComponent(() => import("../radix/chart/default"))
const UiChartBarsPreview = lazyComponent(() => import("../radix/chart/bars"))
const UiChartMultiDatasetBarsPreview = lazyComponent(() => import("../radix/chart/multi-dataset-bars"))
const UiChartDiagonalStripeBarsPreview = lazyComponent(() => import("../radix/chart/diagonal-stripe-bars"))
const UiChartDottedBarsPreview = lazyComponent(() => import("../radix/chart/dotted-bars"))
const UiChartStripedSolidBarsPreview = lazyComponent(() => import("../radix/chart/striped-solid-bars"))
const UiChart3dGradientBarsPreview = lazyComponent(() => import("../radix/chart/3d-gradient-bars"))
const UiChartGradientBarsPreview = lazyComponent(() => import("../radix/chart/gradient-bars"))
const UiChartIsometricBarsPreview = lazyComponent(() => import("../radix/chart/isometric-bars"))
const UiChartDottedSolidBarsPreview = lazyComponent(() => import("../radix/chart/dotted-solid-bars"))
const UiChartDuotoneBarsPreview = lazyComponent(() => import("../radix/chart/duotone-bars"))
const UiChartAnimatedMonochromeBarsPreview = lazyComponent(() => import("../radix/chart/animated-monochrome-bars"))
const UiChartHorizontalBarsPreview = lazyComponent(() => import("../radix/chart/horizontal-bars"))
const UiChartGradientAreaPreview = lazyComponent(() => import("../radix/chart/gradient-area"))
const UiChartStackedDashedAreaPreview = lazyComponent(() => import("../radix/chart/stacked-dashed-area"))
const UiChartDottedStepAreaPreview = lazyComponent(() => import("../radix/chart/dotted-step-area"))
const UiChartGlowingDotAreaPreview = lazyComponent(() => import("../radix/chart/glowing-dot-area"))
const UiChartForecastLinePreview = lazyComponent(() => import("../radix/chart/forecast-line"))
const UiChartCrosshatchAreaPreview = lazyComponent(() => import("../radix/chart/crosshatch-area"))
const UiChartDonutCenterTotalPreview = lazyComponent(() => import("../radix/chart/donut-center-total"))
const UiChartDonutCenterStatsPreview = lazyComponent(() => import("../radix/chart/donut-center-stats"))
const UiChartStripedPiePreview = lazyComponent(() => import("../radix/chart/striped-pie"))
const UiChartActiveSegmentDonutPreview = lazyComponent(() => import("../radix/chart/active-segment-donut"))
const UiChartGradientRadarPreview = lazyComponent(() => import("../radix/chart/gradient-radar"))
const UiChartGlowingStrokeRadarPreview = lazyComponent(() => import("../radix/chart/glowing-stroke-radar"))
const UiChartRadialScoresPreview = lazyComponent(() => import("../radix/chart/radial-scores"))
const UiCheckboxPreview = lazyComponent(() => import("../radix/checkbox/default"))
const UiCheckboxStandardPreview = lazyComponent(() => import("../radix/checkbox/standard"))
const UiCheckboxDisabledPreview = lazyComponent(() => import("../radix/checkbox/disabled"))
const UiCheckboxInvalidPreview = lazyComponent(() => import("../radix/checkbox/invalid"))
const UiCheckboxIndeterminatePreview = lazyComponent(() => import("../radix/checkbox/indeterminate"))
const UiCheckboxLabelDescriptionPreview = lazyComponent(() => import("../radix/checkbox/label-description"))
const UiCheckboxColoredPreview = lazyComponent(() => import("../radix/checkbox/colored"))
const UiCheckboxCircleTodoPreview = lazyComponent(() => import("../radix/checkbox/circle-todo"))
const UiCheckboxGroupPreview = lazyComponent(() => import("../radix/checkbox/group"))
const UiCheckboxSettingCardPreview = lazyComponent(() => import("../radix/checkbox/setting-card"))
const UiCheckboxFrameGroupPreview = lazyComponent(() => import("../radix/checkbox/frame-group"))
const UiCheckboxCardRowsPreview = lazyComponent(() => import("../radix/checkbox/card-rows"))
const UiCheckboxIconCardRowsPreview = lazyComponent(() => import("../radix/checkbox/icon-card-rows"))
const UiCheckboxCornerCheckTilesPreview = lazyComponent(() => import("../radix/checkbox/corner-check-tiles"))
const UiCheckboxModuleTilesPreview = lazyComponent(() => import("../radix/checkbox/module-tiles"))
const UiCheckboxAvatarCardPreview = lazyComponent(() => import("../radix/checkbox/avatar-card"))
const UiCheckboxNestedPermissionsPreview = lazyComponent(() => import("../radix/checkbox/nested-permissions"))
const UiCheckboxPaymentMethodPreview = lazyComponent(() => import("../radix/checkbox/payment-method"))
const UiCheckboxHelpIconTooltipPreview = lazyComponent(() => import("../radix/checkbox/help-icon-tooltip"))
const UiCheckboxBadgeGroupPreview = lazyComponent(() => import("../radix/checkbox/badge-group"))
const UiCheckboxRightSideTooltipPreview = lazyComponent(() => import("../radix/checkbox/right-side-tooltip"))
const UiCheckboxInlineGroupPreview = lazyComponent(() => import("../radix/checkbox/inline-group"))
const UiCheckboxUppercaseBadgesPreview = lazyComponent(() => import("../radix/checkbox/uppercase-badges"))
const UiCollapsiblePreview = lazyComponent(() => import("../radix/collapsible/default"))
const UiCollapsibleStandardPreview = lazyComponent(() => import("../radix/collapsible/standard"))
const UiCollapsibleCheckboxSettingsPreview = lazyComponent(() => import("../radix/collapsible/checkbox-settings"))
const UiCollapsibleAnimatedCardPreview = lazyComponent(() => import("../radix/collapsible/animated-card"))
const UiCollapsibleBottomTriggerPreview = lazyComponent(() => import("../radix/collapsible/bottom-trigger"))
const UiCollapsibleFormFieldsPreview = lazyComponent(() => import("../radix/collapsible/form-fields"))
const UiCollapsibleInFramePreview = lazyComponent(() => import("../radix/collapsible/in-frame"))
const UiCollapsibleNestedListPreview = lazyComponent(() => import("../radix/collapsible/nested-list"))
const UiCollapsibleUserProfilePreview = lazyComponent(() => import("../radix/collapsible/user-profile"))
const UiCollapsibleMultiLevelMenuPreview = lazyComponent(() => import("../radix/collapsible/multi-level-menu"))
const UiCollapsibleFileTreePreview = lazyComponent(() => import("../radix/collapsible/file-tree"))
const UiComboboxPreview = lazyComponent(() => import("../radix/combobox/default"))
const UiComboboxStandardPreview = lazyComponent(() => import("../radix/combobox/standard"))
const UiComboboxDisabledPreview = lazyComponent(() => import("../radix/combobox/disabled"))
const UiComboboxInvalidPreview = lazyComponent(() => import("../radix/combobox/invalid"))
const UiComboboxClearButtonPreview = lazyComponent(() => import("../radix/combobox/clear-button"))
const UiComboboxAutoHighlightPreview = lazyComponent(() => import("../radix/combobox/auto-highlight"))
const UiComboboxGroupedOptionsPreview = lazyComponent(() => import("../radix/combobox/grouped-options"))
const UiComboboxGroupSeparatorsPreview = lazyComponent(() => import("../radix/combobox/group-separators"))
const UiComboboxLargeListPreview = lazyComponent(() => import("../radix/combobox/large-list"))
const UiComboboxIconAddonPreview = lazyComponent(() => import("../radix/combobox/icon-addon"))
const UiComboboxCountryPickerPreview = lazyComponent(() => import("../radix/combobox/country-picker"))
const UiComboboxInFormPreview = lazyComponent(() => import("../radix/combobox/in-form"))
const UiComboboxMultiSelectPreview = lazyComponent(() => import("../radix/combobox/multi-select"))
const UiComboboxDisabledMultiSelectPreview = lazyComponent(() => import("../radix/combobox/disabled-multi-select"))
const UiComboboxInvalidMultiSelectPreview = lazyComponent(() => import("../radix/combobox/invalid-multi-select"))
const UiComboboxNonRemovableChipsPreview = lazyComponent(() => import("../radix/combobox/non-removable-chips"))
const UiComboboxCustomItemsPreview = lazyComponent(() => import("../radix/combobox/custom-items"))
const UiComboboxInDialogPreview = lazyComponent(() => import("../radix/combobox/in-dialog"))
const UiComboboxCustomTriggerIconPreview = lazyComponent(() => import("../radix/combobox/custom-trigger-icon"))
const UiComboboxUserTagsPreview = lazyComponent(() => import("../radix/combobox/user-tags"))
const UiComboboxInvisibleTagsPreview = lazyComponent(() => import("../radix/combobox/invisible-tags"))
const UiComboboxStatusChangePreview = lazyComponent(() => import("../radix/combobox/status-change"))
const UiComboboxPriorityChangePreview = lazyComponent(() => import("../radix/combobox/priority-change"))
const UiComboboxLeadSelectionPreview = lazyComponent(() => import("../radix/combobox/lead-selection"))
const UiComboboxMemberSelectionPreview = lazyComponent(() => import("../radix/combobox/member-selection"))
const UiComboboxDateSelectionPreview = lazyComponent(() => import("../radix/combobox/date-selection"))
const UiComboboxLabelSelectionPreview = lazyComponent(() => import("../radix/combobox/label-selection"))
const UiComboboxTeamSelectionPreview = lazyComponent(() => import("../radix/combobox/team-selection"))
const UiComboboxAssigneeSelectionPreview = lazyComponent(() => import("../radix/combobox/assignee-selection"))
const UiCommandPreview = lazyComponent(() => import("../radix/command/default"))
const UiCommandStandardPreview = lazyComponent(() => import("../radix/command/standard"))
const UiCommandShortcutsPreview = lazyComponent(() => import("../radix/command/shortcuts"))
const UiCommandGroupsPreview = lazyComponent(() => import("../radix/command/groups"))
const UiCommandManyGroupsPreview = lazyComponent(() => import("../radix/command/many-groups"))
const UiCommandFileSearchPreview = lazyComponent(() => import("../radix/command/file-search"))
const UiCommandUserSearchPreview = lazyComponent(() => import("../radix/command/user-search"))
const UiCommandActionPalettePreview = lazyComponent(() => import("../radix/command/action-palette"))
const UiCommandRecentFavoritesPreview = lazyComponent(() => import("../radix/command/recent-favorites"))
const UiContextMenuPreview = lazyComponent(() => import("../radix/context-menu/default"))
const UiContextMenuStandardPreview = lazyComponent(() => import("../radix/context-menu/standard"))
const UiContextMenuIconsPreview = lazyComponent(() => import("../radix/context-menu/icons"))
const UiContextMenuShortcutsPreview = lazyComponent(() => import("../radix/context-menu/shortcuts"))
const UiContextMenuNestedSubmenusPreview = lazyComponent(() => import("../radix/context-menu/nested-submenus"))
const UiContextMenuLabelsSeparatorsPreview = lazyComponent(() => import("../radix/context-menu/labels-separators"))
const UiContextMenuCheckboxItemsPreview = lazyComponent(() => import("../radix/context-menu/checkbox-items"))
const UiContextMenuRadioItemsPreview = lazyComponent(() => import("../radix/context-menu/radio-items"))
const UiContextMenuDestructiveActionsPreview = lazyComponent(() => import("../radix/context-menu/destructive-actions"))
const UiContextMenuAlignmentSidesPreview = lazyComponent(() => import("../radix/context-menu/alignment-sides"))
const UiContextMenuInsideDialogPreview = lazyComponent(() => import("../radix/context-menu/inside-dialog"))
const UiDialogPreview = lazyComponent(() => import("../radix/dialog/default"))
const UiDialogStandardPreview = lazyComponent(() => import("../radix/dialog/standard"))
const UiDialogScrollableContentPreview = lazyComponent(() => import("../radix/dialog/scrollable-content"))
const UiDialogStickyFooterPreview = lazyComponent(() => import("../radix/dialog/sticky-footer"))
const UiDialogNoCloseButtonPreview = lazyComponent(() => import("../radix/dialog/no-close-button"))
const UiDialogCustomCloseButtonPreview = lazyComponent(() => import("../radix/dialog/custom-close-button"))
const UiDialogFullScreenPreview = lazyComponent(() => import("../radix/dialog/full-screen"))
const UiDialogDestructiveConfirmationPreview = lazyComponent(() => import("../radix/dialog/destructive-confirmation"))
const UiDialogCookieConsentPreview = lazyComponent(() => import("../radix/dialog/cookie-consent"))
const UiDialogKeyboardShortcutsPreview = lazyComponent(() => import("../radix/dialog/keyboard-shortcuts"))
const UiDialogFullWidthButtonPreview = lazyComponent(() => import("../radix/dialog/full-width-button"))
const UiDrawerPreview = lazyComponent(() => import("../radix/drawer/default"))
const UiDrawerScrollableContentPreview = lazyComponent(() => import("../radix/drawer/scrollable-content"))
const UiDrawerRightSidePreview = lazyComponent(() => import("../radix/drawer/right-side"))
const UiDrawerLeftSidePreview = lazyComponent(() => import("../radix/drawer/left-side"))
const UiDrawerTopSidePreview = lazyComponent(() => import("../radix/drawer/top-side"))
const UiDrawerAllSidesPreview = lazyComponent(() => import("../radix/drawer/all-sides"))
const UiDropdownMenuPreview = lazyComponent(() => import("../radix/dropdown-menu/default"))
const UiDropdownMenuStandardPreview = lazyComponent(() => import("../radix/dropdown-menu/standard"))
const UiDropdownMenuOpeningPositionsPreview = lazyComponent(() => import("../radix/dropdown-menu/opening-positions"))
const UiDropdownMenuIconsPreview = lazyComponent(() => import("../radix/dropdown-menu/icons"))
const UiDropdownMenuKeyboardShortcutsPreview = lazyComponent(() => import("../radix/dropdown-menu/keyboard-shortcuts"))
const UiDropdownMenuNestedSubmenusPreview = lazyComponent(() => import("../radix/dropdown-menu/nested-submenus"))
const UiDropdownMenuCheckboxesPreview = lazyComponent(() => import("../radix/dropdown-menu/checkboxes"))
const UiDropdownMenuRadioGroupsPreview = lazyComponent(() => import("../radix/dropdown-menu/radio-groups"))
const UiDropdownMenuAllItemTypesPreview = lazyComponent(() => import("../radix/dropdown-menu/all-item-types"))
const UiDropdownMenuUserProfilePreview = lazyComponent(() => import("../radix/dropdown-menu/user-profile"))
const UiDropdownMenuWorkspaceSwitcherPreview = lazyComponent(() => import("../radix/dropdown-menu/workspace-switcher"))
const UiDropdownMenuNotificationFeedPreview = lazyComponent(() => import("../radix/dropdown-menu/notification-feed"))
const UiDropdownMenuRecordActionsPreview = lazyComponent(() => import("../radix/dropdown-menu/record-actions"))
const UiDropdownMenuShareExportPreview = lazyComponent(() => import("../radix/dropdown-menu/share-export"))
const UiDropdownMenuThemeStatusPreview = lazyComponent(() => import("../radix/dropdown-menu/theme-status"))
const UiDropdownMenuUserCreatePreview = lazyComponent(() => import("../radix/dropdown-menu/user-create"))
const UiDropdownMenuQuickActionsPreview = lazyComponent(() => import("../radix/dropdown-menu/quick-actions"))
const UiDropdownMenuNotificationItemsPreview = lazyComponent(() => import("../radix/dropdown-menu/notification-items"))
const UiDropdownMenuAiModelSelectorPreview = lazyComponent(() => import("../radix/dropdown-menu/ai-model-selector"))
const UiEmptyPreview = lazyComponent(() => import("../radix/empty/default"))
const UiEmptyStandardPreview = lazyComponent(() => import("../radix/empty/standard"))
const UiEmptyNoResultsPreview = lazyComponent(() => import("../radix/empty/no-results"))
const UiEmptySearchInputPreview = lazyComponent(() => import("../radix/empty/search-input"))
const UiEmptyAddButtonPreview = lazyComponent(() => import("../radix/empty/add-button"))
const UiEmptyDocumentsPreview = lazyComponent(() => import("../radix/empty/documents"))
const UiEmptyDashedUploadPreview = lazyComponent(() => import("../radix/empty/dashed-upload"))
const UiEmptyInboxPreview = lazyComponent(() => import("../radix/empty/inbox"))
const UiEmptyTeamMembersPreview = lazyComponent(() => import("../radix/empty/team-members"))
const UiEmptyNoNotificationsPreview = lazyComponent(() => import("../radix/empty/no-notifications"))
const UiEmptyAnalyticsPreview = lazyComponent(() => import("../radix/empty/analytics"))
const UiEmptyBookmarksPreview = lazyComponent(() => import("../radix/empty/bookmarks"))
const UiEmptyTasksPreview = lazyComponent(() => import("../radix/empty/tasks"))
const UiEmptyAutomationsPreview = lazyComponent(() => import("../radix/empty/automations"))
const UiEmptyCommentsBoardPreview = lazyComponent(() => import("../radix/empty/comments-board"))
const UiEmptyStackedProductsPreview = lazyComponent(() => import("../radix/empty/stacked-products"))
const UiEmptySearchFileCardsPreview = lazyComponent(() => import("../radix/empty/search-file-cards"))
const UiEmptyChatBubblesPreview = lazyComponent(() => import("../radix/empty/chat-bubbles"))
const UiEmptyCreditCardPreview = lazyComponent(() => import("../radix/empty/credit-card"))
const UiEmptyConnectedNodesPreview = lazyComponent(() => import("../radix/empty/connected-nodes"))
const UiEmptyEventsCalendarPreview = lazyComponent(() => import("../radix/empty/events-calendar"))
const UiFieldPreview = lazyComponent(() => import("../radix/field/default"))
const UiFieldStandardPreview = lazyComponent(() => import("../radix/field/standard"))
const UiFieldInputTextareaPreview = lazyComponent(() => import("../radix/field/input-textarea"))
const UiFieldSelectControlsPreview = lazyComponent(() => import("../radix/field/select-controls"))
const UiFieldRadioCheckboxesPreview = lazyComponent(() => import("../radix/field/radio-checkboxes"))
const UiFieldSliderSwitchPreview = lazyComponent(() => import("../radix/field/slider-switch"))
const UiFieldOtpInputPreview = lazyComponent(() => import("../radix/field/otp-input"))
const UiFieldSettingsFormPreview = lazyComponent(() => import("../radix/field/settings-form"))
const UiFieldPermissionsPreview = lazyComponent(() => import("../radix/field/permissions"))
const UiFieldResponsiveLayoutPreview = lazyComponent(() => import("../radix/field/responsive-layout"))
const UiFieldNotificationPreferencesPreview = lazyComponent(() => import("../radix/field/notification-preferences"))
const UiFieldValidationErrorsPreview = lazyComponent(() => import("../radix/field/validation-errors"))
const UiFileUploadPreview = lazyComponent(() => import("../radix/file-upload/default"))
const UiFileUploadStandardPreview = lazyComponent(() => import("../radix/file-upload/standard"))
const UiFileUploadAvatarPreview = lazyComponent(() => import("../radix/file-upload/avatar"))
const UiFileUploadDragDropPreview = lazyComponent(() => import("../radix/file-upload/drag-drop"))
const UiFileUploadGalleryPreview = lazyComponent(() => import("../radix/file-upload/gallery"))
const UiFileUploadProgressListPreview = lazyComponent(() => import("../radix/file-upload/progress-list"))
const UiFileUploadTablePreview = lazyComponent(() => import("../radix/file-upload/table"))
const UiFileUploadProductImagesPreview = lazyComponent(() => import("../radix/file-upload/product-images"))
const UiFileUploadSortableImagesPreview = lazyComponent(() => import("../radix/file-upload/sortable-images"))
const UiFileUploadPreviewCardsPreview = lazyComponent(() => import("../radix/file-upload/preview-cards"))
const UiFileUploadCoverImagePreview = lazyComponent(() => import("../radix/file-upload/cover-image"))
const UiHoverCardPreview = lazyComponent(() => import("../radix/hover-card/default"))
const UiHoverCardStandardPreview = lazyComponent(() => import("../radix/hover-card/standard"))
const UiHoverCardPositionsPreview = lazyComponent(() => import("../radix/hover-card/positions"))
const UiHoverCardProfilePreview = lazyComponent(() => import("../radix/hover-card/profile"))
const UiHoverCardIconPreview = lazyComponent(() => import("../radix/hover-card/icon"))
const UiHoverCardImageTextPreview = lazyComponent(() => import("../radix/hover-card/image-text"))
const UiHoverCardInDialogPreview = lazyComponent(() => import("../radix/hover-card/in-dialog"))
const UiHoverCardLiveTimestampPreview = lazyComponent(() => import("../radix/hover-card/live-timestamp"))
const UiHoverCardReleaseNotesPreview = lazyComponent(() => import("../radix/hover-card/release-notes"))
const UiInputPreview = lazyComponent(() => import("../radix/input/default"))
const UiInputStandardPreview = lazyComponent(() => import("../radix/input/standard"))
const UiInputWithLabelPreview = lazyComponent(() => import("../radix/input/with-label"))
const UiInputWithDescriptionPreview = lazyComponent(() => import("../radix/input/with-description"))
const UiInputDisabledPreview = lazyComponent(() => import("../radix/input/disabled"))
const UiInputErrorMessagePreview = lazyComponent(() => import("../radix/input/error-message"))
const UiInputCharacterCounterPreview = lazyComponent(() => import("../radix/input/character-counter"))
const UiInputPasswordPreview = lazyComponent(() => import("../radix/input/password"))
const UiInputPhonePreview = lazyComponent(() => import("../radix/input/phone"))
const UiInputUrlPreview = lazyComponent(() => import("../radix/input/url"))
const UiInputNumberPreview = lazyComponent(() => import("../radix/input/number"))
const UiInputDatePreview = lazyComponent(() => import("../radix/input/date"))
const UiInputFilePreview = lazyComponent(() => import("../radix/input/file"))
const UiInputRequiredIndicatorPreview = lazyComponent(() => import("../radix/input/required-indicator"))
const UiInputTimePreview = lazyComponent(() => import("../radix/input/time"))
const UiInputContactFormPreview = lazyComponent(() => import("../radix/input/contact-form"))
const UiInputLabelTooltipPreview = lazyComponent(() => import("../radix/input/label-tooltip"))
const UiInputLabelBadgePreview = lazyComponent(() => import("../radix/input/label-badge"))
const UiInputOptionalBadgePreview = lazyComponent(() => import("../radix/input/optional-badge"))
const UiInputLinkTogglePreview = lazyComponent(() => import("../radix/input/link-toggle"))
const UiInputHorizontalPreview = lazyComponent(() => import("../radix/input/horizontal"))
const UiInputMultipleErrorsPreview = lazyComponent(() => import("../radix/input/multiple-errors"))
const UiInputStrengthHintPreview = lazyComponent(() => import("../radix/input/strength-hint"))
const UiInputStrengthMeterPreview = lazyComponent(() => import("../radix/input/strength-meter"))
const UiInputPulsedBackgroundPreview = lazyComponent(() => import("../radix/input/pulsed-background"))
const UiInputCustomFocusRingPreview = lazyComponent(() => import("../radix/input/custom-focus-ring"))
const UiInputSubtleBackgroundPreview = lazyComponent(() => import("../radix/input/subtle-background"))
const UiInputBottomBorderPreview = lazyComponent(() => import("../radix/input/bottom-border"))
const UiInputColorPreview = lazyComponent(() => import("../radix/input/color"))
const UiInputRangePreview = lazyComponent(() => import("../radix/input/range"))
const UiInputPillShapePreview = lazyComponent(() => import("../radix/input/pill-shape"))
const UiInputBorderlessPreview = lazyComponent(() => import("../radix/input/borderless"))
const UiInputGroupPreview = lazyComponent(() => import("../radix/input-group/default"))
const UiInputGroupStandardPreview = lazyComponent(() => import("../radix/input-group/standard"))
const UiInputGroupDisabledPreview = lazyComponent(() => import("../radix/input-group/disabled"))
const UiInputGroupInvalidPreview = lazyComponent(() => import("../radix/input-group/invalid"))
const UiInputGroupPrefixIconPreview = lazyComponent(() => import("../radix/input-group/prefix-icon"))
const UiInputGroupSuffixIconPreview = lazyComponent(() => import("../radix/input-group/suffix-icon"))
const UiInputGroupPrefixSuffixIconsPreview = lazyComponent(() => import("../radix/input-group/prefix-suffix-icons"))
const UiInputGroupPrefixTextPreview = lazyComponent(() => import("../radix/input-group/prefix-text"))
const UiInputGroupSuffixTextPreview = lazyComponent(() => import("../radix/input-group/suffix-text"))
const UiInputGroupPrefixSuffixTextPreview = lazyComponent(() => import("../radix/input-group/prefix-suffix-text"))
const UiInputGroupActionButtonPreview = lazyComponent(() => import("../radix/input-group/action-button"))
const UiInputGroupIconButtonPreview = lazyComponent(() => import("../radix/input-group/icon-button"))
const UiInputGroupDropdownSelectPreview = lazyComponent(() => import("../radix/input-group/dropdown-select"))
const UiInputGroupKeyboardShortcutPreview = lazyComponent(() => import("../radix/input-group/keyboard-shortcut"))
const UiInputGroupTooltipActionPreview = lazyComponent(() => import("../radix/input-group/tooltip-action"))
const UiInputGroupLoadingSpinnerPreview = lazyComponent(() => import("../radix/input-group/loading-spinner"))
const UiInputGroupBlockStartAddonPreview = lazyComponent(() => import("../radix/input-group/block-start-addon"))
const UiInputGroupCharacterLimitPreview = lazyComponent(() => import("../radix/input-group/character-limit"))
const UiInputGroupAiChatToolbarPreview = lazyComponent(() => import("../radix/input-group/ai-chat-toolbar"))
const UiInputGroupAiChatAttachmentsPreview = lazyComponent(() => import("../radix/input-group/ai-chat-attachments"))
const UiInputGroupLabelUsagePreview = lazyComponent(() => import("../radix/input-group/label-usage"))
const UiInputGroupMultipleEndActionsPreview = lazyComponent(() => import("../radix/input-group/multiple-end-actions"))
const UiInputGroupPopoverTriggerPreview = lazyComponent(() => import("../radix/input-group/popover-trigger"))
const UiInputGroupSparklesShortcutPreview = lazyComponent(() => import("../radix/input-group/sparkles-shortcut"))
const UiInputGroupSuccessIndicatorPreview = lazyComponent(() => import("../radix/input-group/success-indicator"))
const UiInputGroupResultsCountPreview = lazyComponent(() => import("../radix/input-group/results-count"))
const UiInputGroupTextareaActionsPreview = lazyComponent(() => import("../radix/input-group/textarea-actions"))
const UiInputGroupButtonGroupPreview = lazyComponent(() => import("../radix/input-group/button-group"))
const UiInputGroupThreeDotMenuPreview = lazyComponent(() => import("../radix/input-group/three-dot-menu"))
const UiInputGroupPillCategoryPreview = lazyComponent(() => import("../radix/input-group/pill-category"))
const UiInputGroupInlineAddonsPreview = lazyComponent(() => import("../radix/input-group/inline-addons"))
const UiInputGroupInlineBlockEndPreview = lazyComponent(() => import("../radix/input-group/inline-block-end"))
const UiInputGroupMemberRowPreview = lazyComponent(() => import("../radix/input-group/member-row"))
const UiInputGroupProjectSavePreview = lazyComponent(() => import("../radix/input-group/project-save"))
const UiInputGroupPillAiPromptPreview = lazyComponent(() => import("../radix/input-group/pill-ai-prompt"))
const UiInputGroupPasswordTogglePreview = lazyComponent(() => import("../radix/input-group/password-toggle"))
const UiInputGroupApiRequestPreview = lazyComponent(() => import("../radix/input-group/api-request"))
const UiInputGroupOrderSearchPreview = lazyComponent(() => import("../radix/input-group/order-search"))
const UiInputGroupCompanySearchPreview = lazyComponent(() => import("../radix/input-group/company-search"))
const UiInputGroupContactSearchPreview = lazyComponent(() => import("../radix/input-group/contact-search"))
const UiInputGroupShareLinkPreview = lazyComponent(() => import("../radix/input-group/share-link"))
const UiInputOtpPreview = lazyComponent(() => import("../radix/input-otp/default"))
const UiInputOtpStandardPreview = lazyComponent(() => import("../radix/input-otp/standard"))
const UiInputOtpDigitsOnlyPreview = lazyComponent(() => import("../radix/input-otp/digits-only"))
const UiInputOtpMultipleSeparatorsPreview = lazyComponent(() => import("../radix/input-otp/multiple-separators"))
const UiInputOtpLettersNumbersPreview = lazyComponent(() => import("../radix/input-otp/letters-numbers"))
const UiInputOtpPinCodePreview = lazyComponent(() => import("../radix/input-otp/pin-code"))
const UiInputOtpVerificationCardPreview = lazyComponent(() => import("../radix/input-otp/verification-card"))
const UiItemPreview = lazyComponent(() => import("../radix/item/default"))
const UiItemVariantsPreview = lazyComponent(() => import("../radix/item/variants"))
const UiItemIconActionsPreview = lazyComponent(() => import("../radix/item/icon-actions"))
const UiItemUserFollowPreview = lazyComponent(() => import("../radix/item/user-follow"))
const UiItemNavigationLinksPreview = lazyComponent(() => import("../radix/item/navigation-links"))
const UiItemStatusBadgesPreview = lazyComponent(() => import("../radix/item/status-badges"))
const UiItemFileRowsPreview = lazyComponent(() => import("../radix/item/file-rows"))
const UiItemKeyboardShortcutsPreview = lazyComponent(() => import("../radix/item/keyboard-shortcuts"))
const UiItemSmallCountBadgesPreview = lazyComponent(() => import("../radix/item/small-count-badges"))
const UiItemTeamRolesPreview = lazyComponent(() => import("../radix/item/team-roles"))
const UiItemHeaderFooterPreview = lazyComponent(() => import("../radix/item/header-footer"))
const UiItemIntegrationsPreview = lazyComponent(() => import("../radix/item/integrations"))
const UiItemActivityFeedPreview = lazyComponent(() => import("../radix/item/activity-feed"))
const UiKbdPreview = lazyComponent(() => import("../radix/kbd/default"))
const UiKbdStandardKeysPreview = lazyComponent(() => import("../radix/kbd/standard-keys"))
const UiKbdGroupedKeysPreview = lazyComponent(() => import("../radix/kbd/grouped-keys"))
const UiKbdKeysWithIconsPreview = lazyComponent(() => import("../radix/kbd/keys-with-icons"))
const UiKbdInInputPreview = lazyComponent(() => import("../radix/kbd/in-input"))
const UiKbdInTooltipPreview = lazyComponent(() => import("../radix/kbd/in-tooltip"))
const UiKbdShortcutListPreview = lazyComponent(() => import("../radix/kbd/shortcut-list"))
const UiLabelPreview = lazyComponent(() => import("../radix/label/default"))
const UiLabelStandardPreview = lazyComponent(() => import("../radix/label/standard"))
const UiLabelCheckboxPreview = lazyComponent(() => import("../radix/label/checkbox"))
const UiLabelTextareaPreview = lazyComponent(() => import("../radix/label/textarea"))
const UiLabelDisabledPreview = lazyComponent(() => import("../radix/label/disabled"))
const UiLabelRequiredPreview = lazyComponent(() => import("../radix/label/required"))
const UiLabelOptionalPreview = lazyComponent(() => import("../radix/label/optional"))
const UiLabelTooltipInfoPreview = lazyComponent(() => import("../radix/label/tooltip-info"))
const UiLabelBadgePreview = lazyComponent(() => import("../radix/label/badge"))
const UiLabelCharacterCounterPreview = lazyComponent(() => import("../radix/label/character-counter"))
const UiLabelHelperTextPreview = lazyComponent(() => import("../radix/label/helper-text"))
const UiLabelErrorStatePreview = lazyComponent(() => import("../radix/label/error-state"))
const UiLabelInlineEditPreview = lazyComponent(() => import("../radix/label/inline-edit"))
const UiLabelStatusDotPreview = lazyComponent(() => import("../radix/label/status-dot"))
const UiMarkerPreview = lazyComponent(() => import("../radix/marker/default"))
const UiMarkerStandardVariantsPreview = lazyComponent(() => import("../radix/marker/standard-variants"))
const UiMarkerToolCallLogPreview = lazyComponent(() => import("../radix/marker/tool-call-log"))
const UiMarkerRunStatusPreview = lazyComponent(() => import("../radix/marker/run-status"))
const UiMarkerPhaseSeparatorsPreview = lazyComponent(() => import("../radix/marker/phase-separators"))
const UiMarkerChangedFilesPreview = lazyComponent(() => import("../radix/marker/changed-files"))
const UiMarkerLinksActionPreview = lazyComponent(() => import("../radix/marker/links-action"))
const UiMenubarPreview = lazyComponent(() => import("../radix/menubar/default"))
const UiMenubarStandardPreview = lazyComponent(() => import("../radix/menubar/standard"))
const UiMenubarSubmenusPreview = lazyComponent(() => import("../radix/menubar/submenus"))
const UiMenubarCheckboxRadioPreview = lazyComponent(() => import("../radix/menubar/checkbox-radio"))
const UiMenubarIconsPreview = lazyComponent(() => import("../radix/menubar/icons"))
const UiMenubarFormattingMediaPreview = lazyComponent(() => import("../radix/menubar/formatting-media"))
const UiMessagePreview = lazyComponent(() => import("../radix/message/default"))
const UiMessageTwoSidedChatPreview = lazyComponent(() => import("../radix/message/two-sided-chat"))
const UiMessageAvatarsPreview = lazyComponent(() => import("../radix/message/avatars"))
const UiMessageSenderStatusPreview = lazyComponent(() => import("../radix/message/sender-status"))
const UiMessageReplyActionsPreview = lazyComponent(() => import("../radix/message/reply-actions"))
const UiMessageSharedFilesPreview = lazyComponent(() => import("../radix/message/shared-files"))
const UiMessageConsecutiveMessagesPreview = lazyComponent(() => import("../radix/message/consecutive-messages"))
const UiMessageStreamingReplyPreview = lazyComponent(() => import("../radix/message/streaming-reply"))
const UiMessageScrollerPreview = lazyComponent(() => import("../radix/message-scroller/default"))
const UiMessageScrollerJumpToLatestPreview = lazyComponent(() => import("../radix/message-scroller/jump-to-latest"))
const UiMessageScrollerStreamingReplyPreview = lazyComponent(() => import("../radix/message-scroller/streaming-reply"))
const UiMessageScrollerAnchoredTurnPreview = lazyComponent(() => import("../radix/message-scroller/anchored-turn"))
const UiMessageScrollerOpeningPositionPreview = lazyComponent(() => import("../radix/message-scroller/opening-position"))
const UiMessageScrollerLoadEarlierPreview = lazyComponent(() => import("../radix/message-scroller/load-earlier"))
const UiMessageScrollerThreadNavigatorPreview = lazyComponent(() => import("../radix/message-scroller/thread-navigator"))
const UiNativeSelectPreview = lazyComponent(() => import("../radix/native-select/default"))
const UiNativeSelectStandardPreview = lazyComponent(() => import("../radix/native-select/standard"))
const UiNativeSelectGroupedOptionsPreview = lazyComponent(() => import("../radix/native-select/grouped-options"))
const UiNativeSelectSmallPreview = lazyComponent(() => import("../radix/native-select/small"))
const UiNativeSelectFieldWithLabelPreview = lazyComponent(() => import("../radix/native-select/field-with-label"))
const UiNativeSelectDisabledPreview = lazyComponent(() => import("../radix/native-select/disabled"))
const UiNativeSelectInvalidPreview = lazyComponent(() => import("../radix/native-select/invalid"))
const UiNavigationMenuPreview = lazyComponent(() => import("../radix/navigation-menu/default"))
const UiNavigationMenuStandardPreview = lazyComponent(() => import("../radix/navigation-menu/standard"))
const UiNavigationMenuGridLayoutPreview = lazyComponent(() => import("../radix/navigation-menu/grid-layout"))
const UiNavigationMenuWithIconsPreview = lazyComponent(() => import("../radix/navigation-menu/with-icons"))
const UiNavigationMenuLearnMoreButtonPreview = lazyComponent(() => import("../radix/navigation-menu/learn-more-button"))
const UiPaginationPreview = lazyComponent(() => import("../radix/pagination/default"))
const UiPaginationStandardPreview = lazyComponent(() => import("../radix/pagination/standard"))
const UiPaginationNoLabelsPreview = lazyComponent(() => import("../radix/pagination/no-labels"))
const UiPaginationHoverBorderPreview = lazyComponent(() => import("../radix/pagination/hover-border"))
const UiPaginationCircleButtonsPreview = lazyComponent(() => import("../radix/pagination/circle-buttons"))
const UiPaginationCompactGoToPreview = lazyComponent(() => import("../radix/pagination/compact-go-to"))
const UiPaginationInCardPreview = lazyComponent(() => import("../radix/pagination/in-card"))
const UiPaginationArrowLinksPreview = lazyComponent(() => import("../radix/pagination/arrow-links"))
const UiPaginationCenteredPageInfoPreview = lazyComponent(() => import("../radix/pagination/centered-page-info"))
const UiPaginationLeftPageInfoPreview = lazyComponent(() => import("../radix/pagination/left-page-info"))
const UiPaginationTrailingEllipsisPreview = lazyComponent(() => import("../radix/pagination/trailing-ellipsis"))
const UiPaginationOutlineStripPreview = lazyComponent(() => import("../radix/pagination/outline-strip"))
const UiPaginationRowsPerPagePreview = lazyComponent(() => import("../radix/pagination/rows-per-page"))
const UiPaginationPageSelectPreview = lazyComponent(() => import("../radix/pagination/page-select"))
const UiPaginationFullWidthGoToPreview = lazyComponent(() => import("../radix/pagination/full-width-go-to"))
const UiPaginationInfoAndPerPagePreview = lazyComponent(() => import("../radix/pagination/info-and-per-page"))
const UiPopoverPreview = lazyComponent(() => import("../radix/popover/default"))
const UiPopoverStandardPreview = lazyComponent(() => import("../radix/popover/standard"))
const UiPopoverOpeningSidesPreview = lazyComponent(() => import("../radix/popover/opening-sides"))
const UiPopoverInlineFormPreview = lazyComponent(() => import("../radix/popover/inline-form"))
const UiPopoverAlignmentPreview = lazyComponent(() => import("../radix/popover/alignment"))
const UiPopoverInDialogPreview = lazyComponent(() => import("../radix/popover/in-dialog"))
const UiPopoverProfileCardPreview = lazyComponent(() => import("../radix/popover/profile-card"))
const UiPopoverFeaturePitchPreview = lazyComponent(() => import("../radix/popover/feature-pitch"))
const UiPopoverMediaPreviewPreview = lazyComponent(() => import("../radix/popover/media-preview"))
const UiPopoverRelativeTimePreview = lazyComponent(() => import("../radix/popover/relative-time"))
const UiPopoverControlsPreview = lazyComponent(() => import("../radix/popover/controls"))
const UiPopoverStepTourPreview = lazyComponent(() => import("../radix/popover/step-tour"))
const UiProgressPreview = lazyComponent(() => import("../radix/progress/default"))
const UiProgressStandardPreview = lazyComponent(() => import("../radix/progress/standard"))
const UiProgressSmallPreview = lazyComponent(() => import("../radix/progress/small"))
const UiProgressLargePreview = lazyComponent(() => import("../radix/progress/large"))
const UiProgressStatusMessagesPreview = lazyComponent(() => import("../radix/progress/status-messages"))
const UiProgressFileUploadsPreview = lazyComponent(() => import("../radix/progress/file-uploads"))
const UiProgressWithSliderPreview = lazyComponent(() => import("../radix/progress/with-slider"))
const UiProgressMultiStepPreview = lazyComponent(() => import("../radix/progress/multi-step"))
const UiProgressCustomColorsPreview = lazyComponent(() => import("../radix/progress/custom-colors"))
const UiQuestionnairePreview = lazyComponent(() => import("../radix/questionnaire/default"))
const UiQuestionnaireGuidedSetupPreview = lazyComponent(() => import("../radix/questionnaire/guided-setup"))
const UiQuestionnaireMultiSelectPreview = lazyComponent(() => import("../radix/questionnaire/multi-select"))
const UiQuestionnaireWriteInAnswerPreview = lazyComponent(() => import("../radix/questionnaire/write-in-answer"))
const UiQuestionnaireSegmentedProgressPreview = lazyComponent(() => import("../radix/questionnaire/segmented-progress"))
const UiQuestionnaireOptionalSkipPreview = lazyComponent(() => import("../radix/questionnaire/optional-skip"))
const UiQuestionnaireCrossQuestionRulePreview = lazyComponent(() => import("../radix/questionnaire/cross-question-rule"))
const UiQuestionnaireConditionalBranchPreview = lazyComponent(() => import("../radix/questionnaire/conditional-branch"))
const UiRadioGroupPreview = lazyComponent(() => import("../radix/radio-group/default"))
const UiRadioGroupStandardPreview = lazyComponent(() => import("../radix/radio-group/standard"))
const UiRadioGroupDisabledPreview = lazyComponent(() => import("../radix/radio-group/disabled"))
const UiRadioGroupDescriptionsPreview = lazyComponent(() => import("../radix/radio-group/descriptions"))
const UiRadioGroupInvalidPreview = lazyComponent(() => import("../radix/radio-group/invalid"))
const UiRadioGroupColoredPreview = lazyComponent(() => import("../radix/radio-group/colored"))
const UiRadioGroupLegendDescriptionPreview = lazyComponent(() => import("../radix/radio-group/legend-description"))
const UiRadioGroupDescriptiveCardsPreview = lazyComponent(() => import("../radix/radio-group/descriptive-cards"))
const UiRadioGroupCardSeparatorsPreview = lazyComponent(() => import("../radix/radio-group/card-separators"))
const UiRadioGroupCardIconsPreview = lazyComponent(() => import("../radix/radio-group/card-icons"))
const UiRadioGroupInFramePreview = lazyComponent(() => import("../radix/radio-group/in-frame"))
const UiRadioGroupGridLayoutPreview = lazyComponent(() => import("../radix/radio-group/grid-layout"))
const UiRadioGroupAvatarCardsPreview = lazyComponent(() => import("../radix/radio-group/avatar-cards"))
const UiRadioGroupPaymentMethodsPreview = lazyComponent(() => import("../radix/radio-group/payment-methods"))
const UiRadioGroupTooltipInfoPreview = lazyComponent(() => import("../radix/radio-group/tooltip-info"))
const UiRadioGroupBadgesPreview = lazyComponent(() => import("../radix/radio-group/badges"))
const UiRadioGroupInlineHorizontalPreview = lazyComponent(() => import("../radix/radio-group/inline-horizontal"))
const UiRadioGroupPricingTiersPreview = lazyComponent(() => import("../radix/radio-group/pricing-tiers"))
const UiResizablePreview = lazyComponent(() => import("../radix/resizable/default"))
const UiResizableHorizontalLayoutPreview = lazyComponent(() => import("../radix/resizable/horizontal-layout"))
const UiResizableVerticalLayoutPreview = lazyComponent(() => import("../radix/resizable/vertical-layout"))
const UiResizableMixedDirectionsPreview = lazyComponent(() => import("../radix/resizable/mixed-directions"))
const UiResizableNestedGripsPreview = lazyComponent(() => import("../radix/resizable/nested-grips"))
const UiResizableAnimatedPillPreview = lazyComponent(() => import("../radix/resizable/animated-pill"))
const UiResizableSpringPillPreview = lazyComponent(() => import("../radix/resizable/spring-pill"))
const UiResizableCapsuleExpansionPreview = lazyComponent(() => import("../radix/resizable/capsule-expansion"))
const UiResizableNestedPillsPreview = lazyComponent(() => import("../radix/resizable/nested-pills"))
const UiResizableThreePanelsPreview = lazyComponent(() => import("../radix/resizable/three-panels"))
const UiResizableSizeTrackingPreview = lazyComponent(() => import("../radix/resizable/size-tracking"))
const UiScrollAreaPreview = lazyComponent(() => import("../radix/scroll-area/default"))
const UiScrollAreaStandardPreview = lazyComponent(() => import("../radix/scroll-area/standard"))
const UiScrollAreaHorizontalPreview = lazyComponent(() => import("../radix/scroll-area/horizontal"))
const UiScrollAreaBothScrollbarsPreview = lazyComponent(() => import("../radix/scroll-area/both-scrollbars"))
const UiScrollAreaFadeEdgesPreview = lazyComponent(() => import("../radix/scroll-area/fade-edges"))
const UiScrollAreaScrollbarGutterPreview = lazyComponent(() => import("../radix/scroll-area/scrollbar-gutter"))
const UiSelectPreview = lazyComponent(() => import("../radix/select/default"))
const UiSelectStandardPreview = lazyComponent(() => import("../radix/select/standard"))
const UiSelectIconsPreview = lazyComponent(() => import("../radix/select/icons"))
const UiSelectGroupedLabelsPreview = lazyComponent(() => import("../radix/select/grouped-labels"))
const UiSelectLargeListPreview = lazyComponent(() => import("../radix/select/large-list"))
const UiSelectSmallTriggerPreview = lazyComponent(() => import("../radix/select/small-trigger"))
const UiSelectPlanPickerPreview = lazyComponent(() => import("../radix/select/plan-picker"))
const UiSelectDisabledItemPreview = lazyComponent(() => import("../radix/select/disabled-item"))
const UiSelectFieldWithLabelPreview = lazyComponent(() => import("../radix/select/field-with-label"))
const UiSelectInvalidPreview = lazyComponent(() => import("../radix/select/invalid"))
const UiSelectDisabledPreview = lazyComponent(() => import("../radix/select/disabled"))
const UiSelectInDialogPreview = lazyComponent(() => import("../radix/select/in-dialog"))
const UiSelectMultipleSelectionPreview = lazyComponent(() => import("../radix/select/multiple-selection"))
const UiSelectInlineWithInputPreview = lazyComponent(() => import("../radix/select/inline-with-input"))
const UiSelectWithButtonPreview = lazyComponent(() => import("../radix/select/with-button"))
const UiSelectItemAlignedPreview = lazyComponent(() => import("../radix/select/item-aligned"))
const UiSelectAccessLevelsPreview = lazyComponent(() => import("../radix/select/access-levels"))
const UiSelectStatusBulletsPreview = lazyComponent(() => import("../radix/select/status-bullets"))
const UiSelectUserAvatarsPreview = lazyComponent(() => import("../radix/select/user-avatars"))
const UiSelectStatusBadgesPreview = lazyComponent(() => import("../radix/select/status-badges"))
const UiSelectLeftIndicatorPreview = lazyComponent(() => import("../radix/select/left-indicator"))
const UiSelectClearButtonPreview = lazyComponent(() => import("../radix/select/clear-button"))
const UiSelectCustomChevronsPreview = lazyComponent(() => import("../radix/select/custom-chevrons"))
const UiSelectOverlappingDotsPreview = lazyComponent(() => import("../radix/select/overlapping-dots"))
const UiSelectGroupedSeparatorsPreview = lazyComponent(() => import("../radix/select/grouped-separators"))
const UiSelectCountryFlagsPreview = lazyComponent(() => import("../radix/select/country-flags"))
const UiSelectStatusFilterPreview = lazyComponent(() => import("../radix/select/status-filter"))
const UiSelectOptionDescriptionsPreview = lazyComponent(() => import("../radix/select/option-descriptions"))
const UiSelectTimezoneOffsetsPreview = lazyComponent(() => import("../radix/select/timezone-offsets"))
const UiSelectTeamAssignmentPreview = lazyComponent(() => import("../radix/select/team-assignment"))
const UiSelectPriorityBadgesPreview = lazyComponent(() => import("../radix/select/priority-badges"))
const UiSelectFontPreviewPreview = lazyComponent(() => import("../radix/select/font-preview"))
const UiSelectCategoryIconsPreview = lazyComponent(() => import("../radix/select/category-icons"))
const UiSelectSizeScalePreview = lazyComponent(() => import("../radix/select/size-scale"))
const UiSeparatorPreview = lazyComponent(() => import("../radix/separator/default"))
const UiSeparatorHorizontalPreview = lazyComponent(() => import("../radix/separator/horizontal"))
const UiSeparatorVerticalPreview = lazyComponent(() => import("../radix/separator/vertical"))
const UiSeparatorGroupedMenuItemsPreview = lazyComponent(() => import("../radix/separator/grouped-menu-items"))
const UiSeparatorListRowsPreview = lazyComponent(() => import("../radix/separator/list-rows"))
const UiSeparatorCenteredLabelPreview = lazyComponent(() => import("../radix/separator/centered-label"))
const UiSeparatorOrderSummaryPreview = lazyComponent(() => import("../radix/separator/order-summary"))
const UiSheetPreview = lazyComponent(() => import("../radix/sheet/default"))
const UiSheetProfileEditorPreview = lazyComponent(() => import("../radix/sheet/profile-editor"))
const UiSheetNoCloseButtonPreview = lazyComponent(() => import("../radix/sheet/no-close-button"))
const UiSheetAnySidePreview = lazyComponent(() => import("../radix/sheet/any-side"))
const UiSheetScrollableContentPreview = lazyComponent(() => import("../radix/sheet/scrollable-content"))
const UiSidebarPreview = lazyComponent(() => import("../radix/sidebar/default"))
const UiSidebarWorkspaceSwitcherPreview = lazyComponent(() => import("../radix/sidebar/workspace-switcher"))
const UiSidebarIconRailPreview = lazyComponent(() => import("../radix/sidebar/icon-rail"))
const UiSidebarDocsNavigationPreview = lazyComponent(() => import("../radix/sidebar/docs-navigation"))
const UiSidebarInspectorPanelPreview = lazyComponent(() => import("../radix/sidebar/inspector-panel"))
const UiSidebarFilterLoadingPreview = lazyComponent(() => import("../radix/sidebar/filter-loading"))
const UiSkeletonPreview = lazyComponent(() => import("../radix/skeleton/default"))
const UiSkeletonAvatarInfoPreview = lazyComponent(() => import("../radix/skeleton/avatar-info"))
const UiSkeletonCardPreview = lazyComponent(() => import("../radix/skeleton/card"))
const UiSkeletonTextParagraphsPreview = lazyComponent(() => import("../radix/skeleton/text-paragraphs"))
const UiSkeletonFormPreview = lazyComponent(() => import("../radix/skeleton/form"))
const UiSkeletonDataTablePreview = lazyComponent(() => import("../radix/skeleton/data-table"))
const UiSkeletonStatsRowPreview = lazyComponent(() => import("../radix/skeleton/stats-row"))
const UiSkeletonListWithActionsPreview = lazyComponent(() => import("../radix/skeleton/list-with-actions"))
const UiSkeletonCardGridPreview = lazyComponent(() => import("../radix/skeleton/card-grid"))
const UiSkeletonProfilePagePreview = lazyComponent(() => import("../radix/skeleton/profile-page"))
const UiSkeletonChatMessagesPreview = lazyComponent(() => import("../radix/skeleton/chat-messages"))
const UiSliderPreview = lazyComponent(() => import("../radix/slider/default"))
const UiSliderStandardPreview = lazyComponent(() => import("../radix/slider/standard"))
const UiSliderDisabledPreview = lazyComponent(() => import("../radix/slider/disabled"))
const UiSliderMultipleThumbsPreview = lazyComponent(() => import("../radix/slider/multiple-thumbs"))
const UiSliderVerticalPreview = lazyComponent(() => import("../radix/slider/vertical"))
const UiSliderControlledValuePreview = lazyComponent(() => import("../radix/slider/controlled-value"))
const UiSliderRangePreview = lazyComponent(() => import("../radix/slider/range"))
const UiSliderNumberInputPreview = lazyComponent(() => import("../radix/slider/number-input"))
const UiSliderColorTemperaturePreview = lazyComponent(() => import("../radix/slider/color-temperature"))
const UiSliderReferenceLabelsPreview = lazyComponent(() => import("../radix/slider/reference-labels"))
const UiSliderTickMarksPreview = lazyComponent(() => import("../radix/slider/tick-marks"))
const UiSliderValueTooltipPreview = lazyComponent(() => import("../radix/slider/value-tooltip"))
const UiSliderEmojiRatingPreview = lazyComponent(() => import("../radix/slider/emoji-rating"))
const UiSonnerPreview = lazyComponent(() => import("../radix/sonner/default"))
const UiSonnerStandardPreview = lazyComponent(() => import("../radix/sonner/standard"))
const UiSonnerWithDescriptionPreview = lazyComponent(() => import("../radix/sonner/with-description"))
const UiSonnerPositionsPreview = lazyComponent(() => import("../radix/sonner/positions"))
const UiSonnerVariantIconsPreview = lazyComponent(() => import("../radix/sonner/variant-icons"))
const UiSonnerDurationsPreview = lazyComponent(() => import("../radix/sonner/durations"))
const UiSonnerActionButtonPreview = lazyComponent(() => import("../radix/sonner/action-button"))
const UiSonnerPromisePreview = lazyComponent(() => import("../radix/sonner/promise"))
const UiSonnerActionCancelPreview = lazyComponent(() => import("../radix/sonner/action-cancel"))
const UiSonnerRichContentPreview = lazyComponent(() => import("../radix/sonner/rich-content"))
const UiSonnerUploadProgressPreview = lazyComponent(() => import("../radix/sonner/upload-progress"))
const UiSonnerStatusAlertPreview = lazyComponent(() => import("../radix/sonner/status-alert"))
const UiSonnerAccentBorderPreview = lazyComponent(() => import("../radix/sonner/accent-border"))
const UiSonnerInvertSuccessPreview = lazyComponent(() => import("../radix/sonner/invert-success"))
const UiSonnerInvertErrorPreview = lazyComponent(() => import("../radix/sonner/invert-error"))
const UiSonnerInvertInfoPreview = lazyComponent(() => import("../radix/sonner/invert-info"))
const UiSonnerInvertWarningPreview = lazyComponent(() => import("../radix/sonner/invert-warning"))
const UiSonnerInvertAvatarGroupPreview = lazyComponent(() => import("../radix/sonner/invert-avatar-group"))
const UiSonnerCloseTopRightPreview = lazyComponent(() => import("../radix/sonner/close-top-right"))
const UiSonnerCustomIconPreview = lazyComponent(() => import("../radix/sonner/custom-icon"))
const UiSonnerIntegrationPreview = lazyComponent(() => import("../radix/sonner/integration"))
const UiSonnerUpdatablePreview = lazyComponent(() => import("../radix/sonner/updatable"))
const UiSpinnerPreview = lazyComponent(() => import("../radix/spinner/default"))
const UiSpinnerStandardPreview = lazyComponent(() => import("../radix/spinner/standard"))
const UiSpinnerInButtonsPreview = lazyComponent(() => import("../radix/spinner/in-buttons"))
const UiSpinnerInBadgesPreview = lazyComponent(() => import("../radix/spinner/in-badges"))
const UiSpinnerInInputGroupPreview = lazyComponent(() => import("../radix/spinner/in-input-group"))
const UiSpinnerInEmptyStatePreview = lazyComponent(() => import("../radix/spinner/in-empty-state"))
const UiSpinnerPendingButtonsPreview = lazyComponent(() => import("../radix/spinner/pending-buttons"))
const UiSpinnerOverlayWithCaptionPreview = lazyComponent(() => import("../radix/spinner/overlay-with-caption"))
const UiSpinnerFullPagePreview = lazyComponent(() => import("../radix/spinner/full-page"))
const UiSpinnerInlineTextPreview = lazyComponent(() => import("../radix/spinner/inline-text"))
const UiSpinnerLoadingDotsPreview = lazyComponent(() => import("../radix/spinner/loading-dots"))
const UiSpinnerCardOverlayPreview = lazyComponent(() => import("../radix/spinner/card-overlay"))
const UiSpinnerColorVariantsPreview = lazyComponent(() => import("../radix/spinner/color-variants"))
const UiSwitchPreview = lazyComponent(() => import("../radix/switch/default"))
const UiSwitchStandardPreview = lazyComponent(() => import("../radix/switch/standard"))
const UiSwitchWithDescriptionPreview = lazyComponent(() => import("../radix/switch/with-description"))
const UiSwitchDisabledPreview = lazyComponent(() => import("../radix/switch/disabled"))
const UiSwitchSizesPreview = lazyComponent(() => import("../radix/switch/sizes"))
const UiSwitchSwitchGroupPreview = lazyComponent(() => import("../radix/switch/switch-group"))
const UiSwitchCardSeparatorsPreview = lazyComponent(() => import("../radix/switch/card-separators"))
const UiSwitchCardWithIconsPreview = lazyComponent(() => import("../radix/switch/card-with-icons"))
const UiSwitchInFramePreview = lazyComponent(() => import("../radix/switch/in-frame"))
const UiSwitchTooltipInfoPreview = lazyComponent(() => import("../radix/switch/tooltip-info"))
const UiSwitchWithBadgesPreview = lazyComponent(() => import("../radix/switch/with-badges"))
const UiSwitchColoredPreview = lazyComponent(() => import("../radix/switch/colored"))
const UiSwitchDestructiveConfirmPreview = lazyComponent(() => import("../radix/switch/destructive-confirm"))
const UiSwitchCompactTablePreview = lazyComponent(() => import("../radix/switch/compact-table"))
const UiSwitchCardGridPreview = lazyComponent(() => import("../radix/switch/card-grid"))
const UiTablePreview = lazyComponent(() => import("../radix/table/default"))
const UiTableStandardPreview = lazyComponent(() => import("../radix/table/standard"))
const UiTableWithFooterPreview = lazyComponent(() => import("../radix/table/with-footer"))
const UiTableStatusBadgesPreview = lazyComponent(() => import("../radix/table/status-badges"))
const UiTableActionsColumnPreview = lazyComponent(() => import("../radix/table/actions-column"))
const UiTableInteractiveRowsPreview = lazyComponent(() => import("../radix/table/interactive-rows"))
const UiTableTeamMembersPreview = lazyComponent(() => import("../radix/table/team-members"))
const UiTableOrdersPreview = lazyComponent(() => import("../radix/table/orders"))
const UiTableProjectsPreview = lazyComponent(() => import("../radix/table/projects"))
const UiTableActivityLogPreview = lazyComponent(() => import("../radix/table/activity-log"))
const UiTableSubscriptionsPreview = lazyComponent(() => import("../radix/table/subscriptions"))
const UiTableInventoryPreview = lazyComponent(() => import("../radix/table/inventory"))
const UiTableApiKeysPreview = lazyComponent(() => import("../radix/table/api-keys"))
const UiTableFileManagerPreview = lazyComponent(() => import("../radix/table/file-manager"))
const UiTableIssuesPreview = lazyComponent(() => import("../radix/table/issues"))
const UiTableLeaderboardPreview = lazyComponent(() => import("../radix/table/leaderboard"))
const UiTableEmployeeProfilePreview = lazyComponent(() => import("../radix/table/employee-profile"))
const UiTableServerConfigPreview = lazyComponent(() => import("../radix/table/server-config"))
const UiTabsPreview = lazyComponent(() => import("../radix/tabs/default"))
const UiTabsStandardPreview = lazyComponent(() => import("../radix/tabs/standard"))
const UiTabsLineVariantPreview = lazyComponent(() => import("../radix/tabs/line-variant"))
const UiTabsVerticalPreview = lazyComponent(() => import("../radix/tabs/vertical"))
const UiTabsVerticalLinePreview = lazyComponent(() => import("../radix/tabs/vertical-line"))
const UiTabsIconsPreview = lazyComponent(() => import("../radix/tabs/icons"))
const UiTabsFullWidthIconsPreview = lazyComponent(() => import("../radix/tabs/full-width-icons"))
const UiTabsBadgeCountsPreview = lazyComponent(() => import("../radix/tabs/badge-counts"))
const UiTabsSideListIconsPreview = lazyComponent(() => import("../radix/tabs/side-list-icons"))
const UiTabsSegmentedControlPreview = lazyComponent(() => import("../radix/tabs/segmented-control"))
const UiTextareaPreview = lazyComponent(() => import("../radix/textarea/default"))
const UiTextareaStandardPreview = lazyComponent(() => import("../radix/textarea/standard"))
const UiTextareaInvalidPreview = lazyComponent(() => import("../radix/textarea/invalid"))
const UiTextareaWithLabelPreview = lazyComponent(() => import("../radix/textarea/with-label"))
const UiTextareaWithDescriptionPreview = lazyComponent(() => import("../radix/textarea/with-description"))
const UiTextareaDisabledPreview = lazyComponent(() => import("../radix/textarea/disabled"))
const UiTextareaAutoResizeCounterPreview = lazyComponent(() => import("../radix/textarea/auto-resize-counter"))
const UiTogglePreview = lazyComponent(() => import("../radix/toggle/default"))
const UiToggleStandardPreview = lazyComponent(() => import("../radix/toggle/standard"))
const UiToggleOutlinePreview = lazyComponent(() => import("../radix/toggle/outline"))
const UiToggleTextSizesPreview = lazyComponent(() => import("../radix/toggle/text-sizes"))
const UiToggleButtonComparisonPreview = lazyComponent(() => import("../radix/toggle/button-comparison"))
const UiToggleDisabledTextPreview = lazyComponent(() => import("../radix/toggle/disabled-text"))
const UiToggleIconLabelPreview = lazyComponent(() => import("../radix/toggle/icon-label"))
const UiToggleCountBadgePreview = lazyComponent(() => import("../radix/toggle/count-badge"))
const UiToggleIconSizesPreview = lazyComponent(() => import("../radix/toggle/icon-sizes"))
const UiToggleIconSwapPreview = lazyComponent(() => import("../radix/toggle/icon-swap"))
const UiToggleLabelSwapPreview = lazyComponent(() => import("../radix/toggle/label-swap"))
const UiToggleReactionsPreview = lazyComponent(() => import("../radix/toggle/reactions"))
const UiToggleTooltipPreview = lazyComponent(() => import("../radix/toggle/tooltip"))
const UiToggleDisabledIconsPreview = lazyComponent(() => import("../radix/toggle/disabled-icons"))
const UiToggleMuteButtonPreview = lazyComponent(() => import("../radix/toggle/mute-button"))
const UiToggleGroupPreview = lazyComponent(() => import("../radix/toggle-group/default"))
const UiToggleGroupStandardPreview = lazyComponent(() => import("../radix/toggle-group/standard"))
const UiToggleGroupOutlinePreview = lazyComponent(() => import("../radix/toggle-group/outline"))
const UiToggleGroupSizesPreview = lazyComponent(() => import("../radix/toggle-group/sizes"))
const UiToggleGroupCustomSpacingPreview = lazyComponent(() => import("../radix/toggle-group/custom-spacing"))
const UiToggleGroupFilterControlPreview = lazyComponent(() => import("../radix/toggle-group/filter-control"))
const UiToggleGroupVerticalPreview = lazyComponent(() => import("../radix/toggle-group/vertical"))
const UiToggleGroupTextAlignmentPreview = lazyComponent(() => import("../radix/toggle-group/text-alignment"))
const UiToggleGroupViewModePreview = lazyComponent(() => import("../radix/toggle-group/view-mode"))
const UiToggleGroupVerticalSettingsPreview = lazyComponent(() => import("../radix/toggle-group/vertical-settings"))
const UiToggleGroupColorThemePreview = lazyComponent(() => import("../radix/toggle-group/color-theme"))
const UiToggleGroupFontSizePreview = lazyComponent(() => import("../radix/toggle-group/font-size"))
const UiToggleGroupTimeRangePreview = lazyComponent(() => import("../radix/toggle-group/time-range"))
const UiToggleGroupNotificationChannelsPreview = lazyComponent(() => import("../radix/toggle-group/notification-channels"))
const UiToggleGroupLayoutColumnsPreview = lazyComponent(() => import("../radix/toggle-group/layout-columns"))
const UiToggleGroupSortDirectionPreview = lazyComponent(() => import("../radix/toggle-group/sort-direction"))
const UiToggleGroupPricingTierPreview = lazyComponent(() => import("../radix/toggle-group/pricing-tier"))
const UiTooltipPreview = lazyComponent(() => import("../radix/tooltip/default"))
const UiTooltipStandardPreview = lazyComponent(() => import("../radix/tooltip/standard"))
const UiTooltipPlacementsPreview = lazyComponent(() => import("../radix/tooltip/placements"))
const UiTooltipIconTriggerPreview = lazyComponent(() => import("../radix/tooltip/icon-trigger"))
const UiTooltipKeyboardShortcutPreview = lazyComponent(() => import("../radix/tooltip/keyboard-shortcut"))
const UiTooltipBellWithCountPreview = lazyComponent(() => import("../radix/tooltip/bell-with-count"))
const UiTooltipStatusBadgesPreview = lazyComponent(() => import("../radix/tooltip/status-badges"))
const UiTooltipVerifiedDomainPreview = lazyComponent(() => import("../radix/tooltip/verified-domain"))
const UiTooltipToolbarActionsPreview = lazyComponent(() => import("../radix/tooltip/toolbar-actions"))
const UiTooltipWarningPreview = lazyComponent(() => import("../radix/tooltip/warning"))
const UiTooltipUpgradePromptPreview = lazyComponent(() => import("../radix/tooltip/upgrade-prompt"))
const UiTooltipAvatarRoleBadgePreview = lazyComponent(() => import("../radix/tooltip/avatar-role-badge"))
const UiTooltipDisabledButtonPreview = lazyComponent(() => import("../radix/tooltip/disabled-button"))
const UiTooltipOnlineStatusPreview = lazyComponent(() => import("../radix/tooltip/online-status"))
const UiTooltipFileInfoPreview = lazyComponent(() => import("../radix/tooltip/file-info"))
const UiTooltipLabelBadgesPreview = lazyComponent(() => import("../radix/tooltip/label-badges"))
const UiTooltipUnreadBellPreview = lazyComponent(() => import("../radix/tooltip/unread-bell"))
const UiTracePreview = lazyComponent(() => import("../radix/trace/default"))
const UiTraceAgentStepsPreview = lazyComponent(() => import("../radix/trace/agent-steps"))
const UiTraceStreamingRunPreview = lazyComponent(() => import("../radix/trace/streaming-run"))
const UiTraceChatTurnPreview = lazyComponent(() => import("../radix/trace/chat-turn"))
const UiTraceSubagentsPreview = lazyComponent(() => import("../radix/trace/subagents"))
const UiTraceChangeApprovalPreview = lazyComponent(() => import("../radix/trace/change-approval"))
const UiTraceCitedSourcesPreview = lazyComponent(() => import("../radix/trace/cited-sources"))
const UiTraceSupportCopilotPreview = lazyComponent(() => import("../radix/trace/support-copilot"))
const UiTraceInstallSummaryPreview = lazyComponent(() => import("../radix/trace/install-summary"))
const UiTraceCiPipelinePreview = lazyComponent(() => import("../radix/trace/ci-pipeline"))
const UiTraceRequestSpansPreview = lazyComponent(() => import("../radix/trace/request-spans"))
const UiTraceErrorBreadcrumbsPreview = lazyComponent(() => import("../radix/trace/error-breadcrumbs"))
const UiTraceQueryPlanPreview = lazyComponent(() => import("../radix/trace/query-plan"))
const UiTraceDataPipelinePreview = lazyComponent(() => import("../radix/trace/data-pipeline"))
const UiTraceWebhookRetriesPreview = lazyComponent(() => import("../radix/trace/webhook-retries"))
const UiTraceCsvImportPreview = lazyComponent(() => import("../radix/trace/csv-import"))
const UiTraceSecurityAuditPreview = lazyComponent(() => import("../radix/trace/security-audit"))
const UiTraceReviewFindingsPreview = lazyComponent(() => import("../radix/trace/review-findings"))
const UiTraceEvalResultsPreview = lazyComponent(() => import("../radix/trace/eval-results"))
const UiTraceAccessDecisionPreview = lazyComponent(() => import("../radix/trace/access-decision"))
const UiTraceIdentityReviewPreview = lazyComponent(() => import("../radix/trace/identity-review"))
const UiTraceDomainSetupPreview = lazyComponent(() => import("../radix/trace/domain-setup"))
const UiTraceTranscodePreview = lazyComponent(() => import("../radix/trace/transcode"))

const UiAccordionSingleExpandSource = sourceLoader(() => import("../radix/accordion/single-expand.tsx?raw"))
const UiAccordionPlusMinusSource = sourceLoader(() => import("../radix/accordion/plus-minus.tsx?raw"))
const UiAccordionBorderedSource = sourceLoader(() => import("../radix/accordion/bordered.tsx?raw"))
const UiAccordionInCardSource = sourceLoader(() => import("../radix/accordion/in-card.tsx?raw"))
const UiAccordionDisabledItemsSource = sourceLoader(() => import("../radix/accordion/disabled-items.tsx?raw"))
const UiAccordionIconsBadgesSource = sourceLoader(() => import("../radix/accordion/icons-badges.tsx?raw"))
const UiAccordionInFrameSource = sourceLoader(() => import("../radix/accordion/in-frame.tsx?raw"))
const UiAccordionNestedSource = sourceLoader(() => import("../radix/accordion/nested.tsx?raw"))
const UiAccordionUserListSource = sourceLoader(() => import("../radix/accordion/user-list.tsx?raw"))
const UiAccordionRotatingArrowSource = sourceLoader(() => import("../radix/accordion/rotating-arrow.tsx?raw"))
const UiAccordionSetupStepsSource = sourceLoader(() => import("../radix/accordion/setup-steps.tsx?raw"))
const UiAlertDialogConfirmationSource = sourceLoader(() => import("../radix/alert-dialog/confirmation.tsx?raw"))
const UiAlertDialogSmallSource = sourceLoader(() => import("../radix/alert-dialog/small.tsx?raw"))
const UiAlertDialogWithIconSource = sourceLoader(() => import("../radix/alert-dialog/with-icon.tsx?raw"))
const UiAlertDialogSmallWithIconSource = sourceLoader(() => import("../radix/alert-dialog/small-with-icon.tsx?raw"))
const UiAlertDialogDestructiveDeleteSource = sourceLoader(() => import("../radix/alert-dialog/destructive-delete.tsx?raw"))
const UiAlertDialogNestedInDialogSource = sourceLoader(() => import("../radix/alert-dialog/nested-in-dialog.tsx?raw"))
const UiAlertDialogSuccessNoticeSource = sourceLoader(() => import("../radix/alert-dialog/success-notice.tsx?raw"))
const UiAlertDialogAccountDeactivationSource = sourceLoader(() => import("../radix/alert-dialog/account-deactivation.tsx?raw"))
const UiAlertDialogUnsavedChangesSource = sourceLoader(() => import("../radix/alert-dialog/unsaved-changes.tsx?raw"))
const UiAlertDialogETicketReceiptSource = sourceLoader(() => import("../radix/alert-dialog/e-ticket-receipt.tsx?raw"))
const UiAlertDialogSystemUpdateSource = sourceLoader(() => import("../radix/alert-dialog/system-update.tsx?raw"))
const UiAlertDialogBillingWarningSource = sourceLoader(() => import("../radix/alert-dialog/billing-warning.tsx?raw"))
const UiAlertDialogLogoutConfirmationSource = sourceLoader(() => import("../radix/alert-dialog/logout-confirmation.tsx?raw"))
const UiAlertDialogSecurityAuditSource = sourceLoader(() => import("../radix/alert-dialog/security-audit.tsx?raw"))
const UiAspectRatioWidescreenSource = sourceLoader(() => import("../radix/aspect-ratio/widescreen.tsx?raw"))
const UiAspectRatioStandardSource = sourceLoader(() => import("../radix/aspect-ratio/standard.tsx?raw"))
const UiAspectRatioSquareSource = sourceLoader(() => import("../radix/aspect-ratio/square.tsx?raw"))
const UiAspectRatioUltrawideSource = sourceLoader(() => import("../radix/aspect-ratio/ultrawide.tsx?raw"))
const UiAspectRatioTallPortraitSource = sourceLoader(() => import("../radix/aspect-ratio/tall-portrait.tsx?raw"))
const UiAspectRatioClassicPhotoSource = sourceLoader(() => import("../radix/aspect-ratio/classic-photo.tsx?raw"))
const UiAspectRatioSocialPortraitSource = sourceLoader(() => import("../radix/aspect-ratio/social-portrait.tsx?raw"))
const UiAspectRatioMonitorSource = sourceLoader(() => import("../radix/aspect-ratio/monitor.tsx?raw"))
const UiAttachmentAssistantReplySource = sourceLoader(() => import("../radix/attachment/assistant-reply.tsx?raw"))
const UiAttachmentComposerTraySource = sourceLoader(() => import("../radix/attachment/composer-tray.tsx?raw"))
const UiAttachmentImageStripSource = sourceLoader(() => import("../radix/attachment/image-strip.tsx?raw"))
const UiAttachmentThreeSizesSource = sourceLoader(() => import("../radix/attachment/three-sizes.tsx?raw"))
const UiAttachmentUploadQueueSource = sourceLoader(() => import("../radix/attachment/upload-queue.tsx?raw"))
const UiAttachmentFilePickerSource = sourceLoader(() => import("../radix/attachment/file-picker.tsx?raw"))
const UiAvatarStandardSource = sourceLoader(() => import("../radix/avatar/standard.tsx?raw"))
const UiAvatarFallbacksSource = sourceLoader(() => import("../radix/avatar/fallbacks.tsx?raw"))
const UiAvatarSizesSource = sourceLoader(() => import("../radix/avatar/sizes.tsx?raw"))
const UiAvatarBorderRadiusSource = sourceLoader(() => import("../radix/avatar/border-radius.tsx?raw"))
const UiAvatarCustomSizesSource = sourceLoader(() => import("../radix/avatar/custom-sizes.tsx?raw"))
const UiAvatarStatusDotsSource = sourceLoader(() => import("../radix/avatar/status-dots.tsx?raw"))
const UiAvatarBadgeIconsSource = sourceLoader(() => import("../radix/avatar/badge-icons.tsx?raw"))
const UiAvatarRoundBadgeCornersSource = sourceLoader(() => import("../radix/avatar/round-badge-corners.tsx?raw"))
const UiAvatarSquareBadgeCornersSource = sourceLoader(() => import("../radix/avatar/square-badge-corners.tsx?raw"))
const UiAvatarAvatarGroupSource = sourceLoader(() => import("../radix/avatar/avatar-group.tsx?raw"))
const UiAvatarGroupWithCountSource = sourceLoader(() => import("../radix/avatar/group-with-count.tsx?raw"))
const UiAvatarPlusChipGroupSource = sourceLoader(() => import("../radix/avatar/plus-chip-group.tsx?raw"))
const UiAvatarBorderRingsSource = sourceLoader(() => import("../radix/avatar/border-rings.tsx?raw"))
const UiAvatarSoftFallbacksSource = sourceLoader(() => import("../radix/avatar/soft-fallbacks.tsx?raw"))
const UiAvatarSolidFallbacksSource = sourceLoader(() => import("../radix/avatar/solid-fallbacks.tsx?raw"))
const UiAvatarUserDetailsSource = sourceLoader(() => import("../radix/avatar/user-details.tsx?raw"))
const UiAvatarGrayscaleSource = sourceLoader(() => import("../radix/avatar/grayscale.tsx?raw"))
const UiAvatarGroupPresenceSource = sourceLoader(() => import("../radix/avatar/group-presence.tsx?raw"))
const UiAvatarOutlineButtonSource = sourceLoader(() => import("../radix/avatar/outline-button.tsx?raw"))
const UiAvatarSocialProofPillSource = sourceLoader(() => import("../radix/avatar/social-proof-pill.tsx?raw"))
const UiAvatarCompactSocialProofSource = sourceLoader(() => import("../radix/avatar/compact-social-proof.tsx?raw"))
const UiAvatarLiftTooltipsSource = sourceLoader(() => import("../radix/avatar/lift-tooltips.tsx?raw"))
const UiAvatarHoverFanSource = sourceLoader(() => import("../radix/avatar/hover-fan.tsx?raw"))
const UiAvatarFanWithTooltipsSource = sourceLoader(() => import("../radix/avatar/fan-with-tooltips.tsx?raw"))
const UiAvatarBorderedCountPillSource = sourceLoader(() => import("../radix/avatar/bordered-count-pill.tsx?raw"))
const UiAvatarPillOutlineButtonSource = sourceLoader(() => import("../radix/avatar/pill-outline-button.tsx?raw"))
const UiAvatarPillPrimaryButtonSource = sourceLoader(() => import("../radix/avatar/pill-primary-button.tsx?raw"))
const UiAvatarEmptyStateSource = sourceLoader(() => import("../radix/avatar/empty-state.tsx?raw"))
const UiAvatarGroupAddButtonSource = sourceLoader(() => import("../radix/avatar/group-add-button.tsx?raw"))
const UiAvatarLoadingStateSource = sourceLoader(() => import("../radix/avatar/loading-state.tsx?raw"))
const UiAvatarCustomBadgeSource = sourceLoader(() => import("../radix/avatar/custom-badge.tsx?raw"))
const UiAvatarPulsingRingSource = sourceLoader(() => import("../radix/avatar/pulsing-ring.tsx?raw"))
const UiAvatarGradientRingSource = sourceLoader(() => import("../radix/avatar/gradient-ring.tsx?raw"))
const UiAvatarMultipleBadgesSource = sourceLoader(() => import("../radix/avatar/multiple-badges.tsx?raw"))
const UiAvatarDropdownMenuSource = sourceLoader(() => import("../radix/avatar/dropdown-menu.tsx?raw"))
const UiBreadcrumbStandardSource = sourceLoader(() => import("../radix/breadcrumb/standard.tsx?raw"))
const UiBreadcrumbDropdownMenuSource = sourceLoader(() => import("../radix/breadcrumb/dropdown-menu.tsx?raw"))
const UiBreadcrumbRouterLinkSource = sourceLoader(() => import("../radix/breadcrumb/router-link.tsx?raw"))
const UiBreadcrumbSlashSeparatorSource = sourceLoader(() => import("../radix/breadcrumb/slash-separator.tsx?raw"))
const UiBreadcrumbItemIconsSource = sourceLoader(() => import("../radix/breadcrumb/item-icons.tsx?raw"))
const UiBreadcrumbStaticEllipsisSource = sourceLoader(() => import("../radix/breadcrumb/static-ellipsis.tsx?raw"))
const UiBreadcrumbAvatarsSource = sourceLoader(() => import("../radix/breadcrumb/avatars.tsx?raw"))
const UiBreadcrumbDoubleChevronSource = sourceLoader(() => import("../radix/breadcrumb/double-chevron.tsx?raw"))
const UiBreadcrumbInCardSource = sourceLoader(() => import("../radix/breadcrumb/in-card.tsx?raw"))
const UiBreadcrumbPillInFrameSource = sourceLoader(() => import("../radix/breadcrumb/pill-in-frame.tsx?raw"))
const UiBreadcrumbCountBadgeSource = sourceLoader(() => import("../radix/breadcrumb/count-badge.tsx?raw"))
const UiBreadcrumbHomeIconButtonSource = sourceLoader(() => import("../radix/breadcrumb/home-icon-button.tsx?raw"))
const UiBreadcrumbBarSeparatorSource = sourceLoader(() => import("../radix/breadcrumb/bar-separator.tsx?raw"))
const UiBreadcrumbButtonStyleSource = sourceLoader(() => import("../radix/breadcrumb/button-style.tsx?raw"))
const UiBreadcrumbProjectDocumentSource = sourceLoader(() => import("../radix/breadcrumb/project-document.tsx?raw"))
const UiBubbleSenderAlignmentSource = sourceLoader(() => import("../radix/bubble/sender-alignment.tsx?raw"))
const UiBubbleAllVariantsSource = sourceLoader(() => import("../radix/bubble/all-variants.tsx?raw"))
const UiBubbleGroupedMessagesSource = sourceLoader(() => import("../radix/bubble/grouped-messages.tsx?raw"))
const UiBubbleReactionsSource = sourceLoader(() => import("../radix/bubble/reactions.tsx?raw"))
const UiBubbleShowMoreSource = sourceLoader(() => import("../radix/bubble/show-more.tsx?raw"))
const UiBubbleQuickRepliesSource = sourceLoader(() => import("../radix/bubble/quick-replies.tsx?raw"))
const UiBubbleFormattedAnswerSource = sourceLoader(() => import("../radix/bubble/formatted-answer.tsx?raw"))
const UiButtonSource = sourceLoader(() => import("../radix/button/default.tsx?raw"))
const UiButtonStandardSource = sourceLoader(() => import("../radix/button/standard.tsx?raw"))
const UiButtonSecondarySource = sourceLoader(() => import("../radix/button/secondary.tsx?raw"))
const UiButtonOutlineSource = sourceLoader(() => import("../radix/button/outline.tsx?raw"))
const UiButtonGhostSource = sourceLoader(() => import("../radix/button/ghost.tsx?raw"))
const UiButtonDestructiveSource = sourceLoader(() => import("../radix/button/destructive.tsx?raw"))
const UiButtonLinkSource = sourceLoader(() => import("../radix/button/link.tsx?raw"))
const UiButtonExtraSmallSource = sourceLoader(() => import("../radix/button/extra-small.tsx?raw"))
const UiButtonSmallSource = sourceLoader(() => import("../radix/button/small.tsx?raw"))
const UiButtonLargeSource = sourceLoader(() => import("../radix/button/large.tsx?raw"))
const UiButtonDisabledSource = sourceLoader(() => import("../radix/button/disabled.tsx?raw"))
const UiButtonIconButtonSource = sourceLoader(() => import("../radix/button/icon-button.tsx?raw"))
const UiButtonIconRightSource = sourceLoader(() => import("../radix/button/icon-right.tsx?raw"))
const UiButtonLoadingStateSource = sourceLoader(() => import("../radix/button/loading-state.tsx?raw"))
const UiButtonIconLeftSource = sourceLoader(() => import("../radix/button/icon-left.tsx?raw"))
const UiButtonInvalidStateSource = sourceLoader(() => import("../radix/button/invalid-state.tsx?raw"))
const UiButtonSecondaryIconLeftSource = sourceLoader(() => import("../radix/button/secondary-icon-left.tsx?raw"))
const UiButtonSecondaryIconRightSource = sourceLoader(() => import("../radix/button/secondary-icon-right.tsx?raw"))
const UiButtonOutlineIconLeftSource = sourceLoader(() => import("../radix/button/outline-icon-left.tsx?raw"))
const UiButtonOutlineIconRightSource = sourceLoader(() => import("../radix/button/outline-icon-right.tsx?raw"))
const UiButtonGhostIconLeftSource = sourceLoader(() => import("../radix/button/ghost-icon-left.tsx?raw"))
const UiButtonGhostIconRightSource = sourceLoader(() => import("../radix/button/ghost-icon-right.tsx?raw"))
const UiButtonDestructiveIconLeftSource = sourceLoader(() => import("../radix/button/destructive-icon-left.tsx?raw"))
const UiButtonDestructiveIconRightSource = sourceLoader(() => import("../radix/button/destructive-icon-right.tsx?raw"))
const UiButtonExtraSmallIconSource = sourceLoader(() => import("../radix/button/extra-small-icon.tsx?raw"))
const UiButtonSmallIconSource = sourceLoader(() => import("../radix/button/small-icon.tsx?raw"))
const UiButtonLargeIconSource = sourceLoader(() => import("../radix/button/large-icon.tsx?raw"))
const UiButtonNextLinkSource = sourceLoader(() => import("../radix/button/next-link.tsx?raw"))
const UiButtonLinkIconLeftSource = sourceLoader(() => import("../radix/button/link-icon-left.tsx?raw"))
const UiButtonLinkIconRightSource = sourceLoader(() => import("../radix/button/link-icon-right.tsx?raw"))
const UiButtonLargeIconLeftSource = sourceLoader(() => import("../radix/button/large-icon-left.tsx?raw"))
const UiButtonLargeIconRightSource = sourceLoader(() => import("../radix/button/large-icon-right.tsx?raw"))
const UiButtonOutlineInvalidSource = sourceLoader(() => import("../radix/button/outline-invalid.tsx?raw"))
const UiButtonGhostInvalidSource = sourceLoader(() => import("../radix/button/ghost-invalid.tsx?raw"))
const UiButtonEmailLoginSource = sourceLoader(() => import("../radix/button/email-login.tsx?raw"))
const UiButtonMoreLessToggleSource = sourceLoader(() => import("../radix/button/more-less-toggle.tsx?raw"))
const UiButtonOutlineSocialIconsSource = sourceLoader(() => import("../radix/button/outline-social-icons.tsx?raw"))
const UiButtonLikeCountSource = sourceLoader(() => import("../radix/button/like-count.tsx?raw"))
const UiButtonStarCountSource = sourceLoader(() => import("../radix/button/star-count.tsx?raw"))
const UiButtonUnreadBadgeSource = sourceLoader(() => import("../radix/button/unread-badge.tsx?raw"))
const UiButtonShortcutKeysSource = sourceLoader(() => import("../radix/button/shortcut-keys.tsx?raw"))
const UiButtonCopyFeedbackSource = sourceLoader(() => import("../radix/button/copy-feedback.tsx?raw"))
const UiButtonIconCopySource = sourceLoader(() => import("../radix/button/icon-copy.tsx?raw"))
const UiButtonHamburgerToggleSource = sourceLoader(() => import("../radix/button/hamburger-toggle.tsx?raw"))
const UiButtonAsyncActionSource = sourceLoader(() => import("../radix/button/async-action.tsx?raw"))
const UiButtonInlineCountSource = sourceLoader(() => import("../radix/button/inline-count.tsx?raw"))
const UiButtonStatusDotSource = sourceLoader(() => import("../radix/button/status-dot.tsx?raw"))
const UiButtonStatusBadgeSource = sourceLoader(() => import("../radix/button/status-badge.tsx?raw"))
const UiButtonNotificationBadgeSource = sourceLoader(() => import("../radix/button/notification-badge.tsx?raw"))
const UiButtonGoBackSource = sourceLoader(() => import("../radix/button/go-back.tsx?raw"))
const UiButtonAnimatedGoBackSource = sourceLoader(() => import("../radix/button/animated-go-back.tsx?raw"))
const UiButtonExpandingButtonSource = sourceLoader(() => import("../radix/button/expanding-button.tsx?raw"))
const UiButtonTitleDescriptionSource = sourceLoader(() => import("../radix/button/title-description.tsx?raw"))
const UiButtonSlidingArrowSource = sourceLoader(() => import("../radix/button/sliding-arrow.tsx?raw"))
const UiButtonShortcutTooltipSource = sourceLoader(() => import("../radix/button/shortcut-tooltip.tsx?raw"))
const UiButtonAvatarSource = sourceLoader(() => import("../radix/button/avatar.tsx?raw"))
const UiButtonOutlineAvatarSource = sourceLoader(() => import("../radix/button/outline-avatar.tsx?raw"))
const UiButtonSmallAvatarSource = sourceLoader(() => import("../radix/button/small-avatar.tsx?raw"))
const UiButtonSmallOutlineAvatarSource = sourceLoader(() => import("../radix/button/small-outline-avatar.tsx?raw"))
const UiButtonSocialLoginStackSource = sourceLoader(() => import("../radix/button/social-login-stack.tsx?raw"))
const UiButtonColoredSocialIconsSource = sourceLoader(() => import("../radix/button/colored-social-icons.tsx?raw"))
const UiButtonThemeToggleSource = sourceLoader(() => import("../radix/button/theme-toggle.tsx?raw"))
const UiButtonGroupSource = sourceLoader(() => import("../radix/button-group/default.tsx?raw"))
const UiButtonGroupTwoButtonsSource = sourceLoader(() => import("../radix/button-group/two-buttons.tsx?raw"))
const UiButtonGroupButtonInputSource = sourceLoader(() => import("../radix/button-group/button-input.tsx?raw"))
const UiButtonGroupButtonsBadgeSource = sourceLoader(() => import("../radix/button-group/buttons-badge.tsx?raw"))
const UiButtonGroupDropdownMenuSource = sourceLoader(() => import("../radix/button-group/dropdown-menu.tsx?raw"))
const UiButtonGroupTeamActivitySource = sourceLoader(() => import("../radix/button-group/team-activity.tsx?raw"))
const UiButtonGroupIconActionsSource = sourceLoader(() => import("../radix/button-group/icon-actions.tsx?raw"))
const UiButtonGroupStatusIndicatorSource = sourceLoader(() => import("../radix/button-group/status-indicator.tsx?raw"))
const UiButtonGroupLikeCounterSource = sourceLoader(() => import("../radix/button-group/like-counter.tsx?raw"))
const UiButtonGroupNestedGroupsSource = sourceLoader(() => import("../radix/button-group/nested-groups.tsx?raw"))
const UiButtonGroupPaginationSource = sourceLoader(() => import("../radix/button-group/pagination.tsx?raw"))
const UiButtonGroupSplitPaginationSource = sourceLoader(() => import("../radix/button-group/split-pagination.tsx?raw"))
const UiButtonGroupTextAlignmentSource = sourceLoader(() => import("../radix/button-group/text-alignment.tsx?raw"))
const UiButtonGroupVerticalOrientationSource = sourceLoader(() => import("../radix/button-group/vertical-orientation.tsx?raw"))
const UiButtonGroupVerticalToolPaletteSource = sourceLoader(() => import("../radix/button-group/vertical-tool-palette.tsx?raw"))
const UiButtonGroupStarWithDropdownSource = sourceLoader(() => import("../radix/button-group/star-with-dropdown.tsx?raw"))
const UiButtonGroupSearchFilterClearSource = sourceLoader(() => import("../radix/button-group/search-filter-clear.tsx?raw"))
const UiButtonGroupConversationMenuSource = sourceLoader(() => import("../radix/button-group/conversation-menu.tsx?raw"))
const UiButtonGroupGitSplitButtonSource = sourceLoader(() => import("../radix/button-group/git-split-button.tsx?raw"))
const UiButtonGroupSearchWithMenuSource = sourceLoader(() => import("../radix/button-group/search-with-menu.tsx?raw"))
const UiButtonGroupSearchWithButtonSource = sourceLoader(() => import("../radix/button-group/search-with-button.tsx?raw"))
const UiButtonGroupFileNameMenuSource = sourceLoader(() => import("../radix/button-group/file-name-menu.tsx?raw"))
const UiButtonGroupDisabledButtonSource = sourceLoader(() => import("../radix/button-group/disabled-button.tsx?raw"))
const UiButtonGroupSeparatedButtonsSource = sourceLoader(() => import("../radix/button-group/separated-buttons.tsx?raw"))
const UiButtonGroupDashboardViewsSource = sourceLoader(() => import("../radix/button-group/dashboard-views.tsx?raw"))
const UiButtonGroupRatingScaleSource = sourceLoader(() => import("../radix/button-group/rating-scale.tsx?raw"))
const UiButtonGroupUserSelectionSource = sourceLoader(() => import("../radix/button-group/user-selection.tsx?raw"))
const UiButtonGroupStatusSelectSource = sourceLoader(() => import("../radix/button-group/status-select.tsx?raw"))
const UiButtonGroupVolumeControlSource = sourceLoader(() => import("../radix/button-group/volume-control.tsx?raw"))
const UiButtonGroupFollowerCountSource = sourceLoader(() => import("../radix/button-group/follower-count.tsx?raw"))
const UiButtonGroupActiveCountSource = sourceLoader(() => import("../radix/button-group/active-count.tsx?raw"))
const UiButtonGroupShareCaptionSource = sourceLoader(() => import("../radix/button-group/share-caption.tsx?raw"))
const UiButtonGroupSortViewSource = sourceLoader(() => import("../radix/button-group/sort-view.tsx?raw"))
const UiButtonGroupSelectControlsSource = sourceLoader(() => import("../radix/button-group/select-controls.tsx?raw"))
const UiButtonGroupSegmentedControlSource = sourceLoader(() => import("../radix/button-group/segmented-control.tsx?raw"))
const UiButtonGroupNumberedPaginationSource = sourceLoader(() => import("../radix/button-group/numbered-pagination.tsx?raw"))
const UiButtonGroupViewSwitcherSource = sourceLoader(() => import("../radix/button-group/view-switcher.tsx?raw"))
const UiButtonGroupZoomControlsSource = sourceLoader(() => import("../radix/button-group/zoom-controls.tsx?raw"))
const UiButtonGroupMediaControlsSource = sourceLoader(() => import("../radix/button-group/media-controls.tsx?raw"))
const UiButtonGroupSplitButtonSource = sourceLoader(() => import("../radix/button-group/split-button.tsx?raw"))
const UiButtonGroupVerticalListSource = sourceLoader(() => import("../radix/button-group/vertical-list.tsx?raw"))
const UiButtonGroupModelSelectorSource = sourceLoader(() => import("../radix/button-group/model-selector.tsx?raw"))
const UiButtonGroupOrderTypeSource = sourceLoader(() => import("../radix/button-group/order-type.tsx?raw"))
const UiButtonGroupBuySellHoldSource = sourceLoader(() => import("../radix/button-group/buy-sell-hold.tsx?raw"))
const UiButtonGroupPipelineStageSource = sourceLoader(() => import("../radix/button-group/pipeline-stage.tsx?raw"))
const UiButtonGroupEnvironmentSwitcherSource = sourceLoader(() => import("../radix/button-group/environment-switcher.tsx?raw"))
const UiButtonGroupTimeIntervalSource = sourceLoader(() => import("../radix/button-group/time-interval.tsx?raw"))
const UiButtonGroupReviewActionsSource = sourceLoader(() => import("../radix/button-group/review-actions.tsx?raw"))
const UiButtonGroupExportToolbarSource = sourceLoader(() => import("../radix/button-group/export-toolbar.tsx?raw"))
const UiButtonGroupVerticalNavSource = sourceLoader(() => import("../radix/button-group/vertical-nav.tsx?raw"))
const UiButtonGroupFilterSortMoreSource = sourceLoader(() => import("../radix/button-group/filter-sort-more.tsx?raw"))
const UiButtonGroupCreateMenuSource = sourceLoader(() => import("../radix/button-group/create-menu.tsx?raw"))
const UiButtonGroupDashboardActionsSource = sourceLoader(() => import("../radix/button-group/dashboard-actions.tsx?raw"))
const UiButtonGroupPublishControlsSource = sourceLoader(() => import("../radix/button-group/publish-controls.tsx?raw"))
const UiButtonGroupServiceSelectorsSource = sourceLoader(() => import("../radix/button-group/service-selectors.tsx?raw"))
const UiButtonGroupPayoutReleaseSource = sourceLoader(() => import("../radix/button-group/payout-release.tsx?raw"))
const UiButtonGroupFileAttachmentSource = sourceLoader(() => import("../radix/button-group/file-attachment.tsx?raw"))
const UiButtonGroupAgentModeSource = sourceLoader(() => import("../radix/button-group/agent-mode.tsx?raw"))
const UiCalendarSource = sourceLoader(() => import("../radix/calendar/default.tsx?raw"))
const UiCalendarStandardSource = sourceLoader(() => import("../radix/calendar/standard.tsx?raw"))
const UiCalendarRangeSource = sourceLoader(() => import("../radix/calendar/range.tsx?raw"))
const UiCalendarDisabledDatesSource = sourceLoader(() => import("../radix/calendar/disabled-dates.tsx?raw"))
const UiCalendarMultipleDaysSource = sourceLoader(() => import("../radix/calendar/multiple-days.tsx?raw"))
const UiCalendarCircularDaysSource = sourceLoader(() => import("../radix/calendar/circular-days.tsx?raw"))
const UiCalendarCircularRangeSource = sourceLoader(() => import("../radix/calendar/circular-range.tsx?raw"))
const UiCalendarRightNavigationSource = sourceLoader(() => import("../radix/calendar/right-navigation.tsx?raw"))
const UiCalendarMonthYearSelectSource = sourceLoader(() => import("../radix/calendar/month-year-select.tsx?raw"))
const UiCalendarYearSelectSource = sourceLoader(() => import("../radix/calendar/year-select.tsx?raw"))
const UiCalendarWeekNumbersSource = sourceLoader(() => import("../radix/calendar/week-numbers.tsx?raw"))
const UiCalendarCurrentMonthButtonSource = sourceLoader(() => import("../radix/calendar/current-month-button.tsx?raw"))
const UiCalendarTodayButtonSource = sourceLoader(() => import("../radix/calendar/today-button.tsx?raw"))
const UiCalendarYearViewSource = sourceLoader(() => import("../radix/calendar/year-view.tsx?raw"))
const UiCalendarTimeSlotsSource = sourceLoader(() => import("../radix/calendar/time-slots.tsx?raw"))
const UiCalendarDatePresetsSource = sourceLoader(() => import("../radix/calendar/date-presets.tsx?raw"))
const UiCalendarRangePresetsSource = sourceLoader(() => import("../radix/calendar/range-presets.tsx?raw"))
const UiCalendarPricingSource = sourceLoader(() => import("../radix/calendar/pricing.tsx?raw"))
const UiCalendarForwardPresetsSource = sourceLoader(() => import("../radix/calendar/forward-presets.tsx?raw"))
const UiCalendarAppointmentSource = sourceLoader(() => import("../radix/calendar/appointment.tsx?raw"))
const UiCalendarTwoMonthsSource = sourceLoader(() => import("../radix/calendar/two-months.tsx?raw"))
const UiCalendarTwoMonthRangeSource = sourceLoader(() => import("../radix/calendar/two-month-range.tsx?raw"))
const UiCalendarEventListSource = sourceLoader(() => import("../radix/calendar/event-list.tsx?raw"))
const UiCalendarLocalizedSource = sourceLoader(() => import("../radix/calendar/localized.tsx?raw"))
const UiCalendarDatePickerSource = sourceLoader(() => import("../radix/calendar/date-picker.tsx?raw"))
const UiCalendarDateRangePickerSource = sourceLoader(() => import("../radix/calendar/date-range-picker.tsx?raw"))
const UiCalendarPickerYearViewSource = sourceLoader(() => import("../radix/calendar/picker-year-view.tsx?raw"))
const UiCalendarPickerTimeSlotsSource = sourceLoader(() => import("../radix/calendar/picker-time-slots.tsx?raw"))
const UiCalendarPickerPresetsSource = sourceLoader(() => import("../radix/calendar/picker-presets.tsx?raw"))
const UiCalendarRangePickerPresetsSource = sourceLoader(() => import("../radix/calendar/range-picker-presets.tsx?raw"))
const UiCalendarDateTimeRangeSource = sourceLoader(() => import("../radix/calendar/date-time-range.tsx?raw"))
const UiCardSource = sourceLoader(() => import("../radix/card/default.tsx?raw"))
const UiCardStandardSource = sourceLoader(() => import("../radix/card/standard.tsx?raw"))
const UiCardBorderedHeaderSource = sourceLoader(() => import("../radix/card/bordered-header.tsx?raw"))
const UiCardBorderSeparationSource = sourceLoader(() => import("../radix/card/border-separation.tsx?raw"))
const UiCardHeaderFooterSource = sourceLoader(() => import("../radix/card/header-footer.tsx?raw"))
const UiCardLinkActionSource = sourceLoader(() => import("../radix/card/link-action.tsx?raw"))
const UiCardDropdownMenuSource = sourceLoader(() => import("../radix/card/dropdown-menu.tsx?raw"))
const UiCardInsetImageSource = sourceLoader(() => import("../radix/card/inset-image.tsx?raw"))
const UiCardImageHoverZoomSource = sourceLoader(() => import("../radix/card/image-hover-zoom.tsx?raw"))
const UiCardFullImageSource = sourceLoader(() => import("../radix/card/full-image.tsx?raw"))
const UiCardImageShadowFadeSource = sourceLoader(() => import("../radix/card/image-shadow-fade.tsx?raw"))
const UiCardStackedDepthSource = sourceLoader(() => import("../radix/card/stacked-depth.tsx?raw"))
const UiCardLoginFormSource = sourceLoader(() => import("../radix/card/login-form.tsx?raw"))
const UiCardBillingUsageSource = sourceLoader(() => import("../radix/card/billing-usage.tsx?raw"))
const UiCardDeploymentStatusSource = sourceLoader(() => import("../radix/card/deployment-status.tsx?raw"))
const UiCardStatTrendSource = sourceLoader(() => import("../radix/card/stat-trend.tsx?raw"))
const UiCardBadgeActionsSource = sourceLoader(() => import("../radix/card/badge-actions.tsx?raw"))
const UiCardIconLinkSource = sourceLoader(() => import("../radix/card/icon-link.tsx?raw"))
const UiCardLabelLinkSource = sourceLoader(() => import("../radix/card/label-link.tsx?raw"))
const UiCarouselSource = sourceLoader(() => import("../radix/carousel/default.tsx?raw"))
const UiCarouselStandardSource = sourceLoader(() => import("../radix/carousel/standard.tsx?raw"))
const UiCarouselVerticalSource = sourceLoader(() => import("../radix/carousel/vertical.tsx?raw"))
const UiCarouselMultipleItemsSource = sourceLoader(() => import("../radix/carousel/multiple-items.tsx?raw"))
const UiCarouselResponsiveBasisSource = sourceLoader(() => import("../radix/carousel/responsive-basis.tsx?raw"))
const UiCarouselAutoplaySource = sourceLoader(() => import("../radix/carousel/autoplay.tsx?raw"))
const UiCarouselCenteredAlignmentSource = sourceLoader(() => import("../radix/carousel/centered-alignment.tsx?raw"))
const UiCarouselCustomSpacingSource = sourceLoader(() => import("../radix/carousel/custom-spacing.tsx?raw"))
const UiCarouselImageOverlaysSource = sourceLoader(() => import("../radix/carousel/image-overlays.tsx?raw"))
const UiCarouselThumbnailStripSource = sourceLoader(() => import("../radix/carousel/thumbnail-strip.tsx?raw"))
const UiCarouselOverlayThumbnailsSource = sourceLoader(() => import("../radix/carousel/overlay-thumbnails.tsx?raw"))
const UiCarouselDotsNavigationSource = sourceLoader(() => import("../radix/carousel/dots-navigation.tsx?raw"))
const UiChartSource = sourceLoader(() => import("../radix/chart/default.tsx?raw"))
const UiChartBarsSource = sourceLoader(() => import("../radix/chart/bars.tsx?raw"))
const UiChartMultiDatasetBarsSource = sourceLoader(() => import("../radix/chart/multi-dataset-bars.tsx?raw"))
const UiChartDiagonalStripeBarsSource = sourceLoader(() => import("../radix/chart/diagonal-stripe-bars.tsx?raw"))
const UiChartDottedBarsSource = sourceLoader(() => import("../radix/chart/dotted-bars.tsx?raw"))
const UiChartStripedSolidBarsSource = sourceLoader(() => import("../radix/chart/striped-solid-bars.tsx?raw"))
const UiChart3dGradientBarsSource = sourceLoader(() => import("../radix/chart/3d-gradient-bars.tsx?raw"))
const UiChartGradientBarsSource = sourceLoader(() => import("../radix/chart/gradient-bars.tsx?raw"))
const UiChartIsometricBarsSource = sourceLoader(() => import("../radix/chart/isometric-bars.tsx?raw"))
const UiChartDottedSolidBarsSource = sourceLoader(() => import("../radix/chart/dotted-solid-bars.tsx?raw"))
const UiChartDuotoneBarsSource = sourceLoader(() => import("../radix/chart/duotone-bars.tsx?raw"))
const UiChartAnimatedMonochromeBarsSource = sourceLoader(() => import("../radix/chart/animated-monochrome-bars.tsx?raw"))
const UiChartHorizontalBarsSource = sourceLoader(() => import("../radix/chart/horizontal-bars.tsx?raw"))
const UiChartGradientAreaSource = sourceLoader(() => import("../radix/chart/gradient-area.tsx?raw"))
const UiChartStackedDashedAreaSource = sourceLoader(() => import("../radix/chart/stacked-dashed-area.tsx?raw"))
const UiChartDottedStepAreaSource = sourceLoader(() => import("../radix/chart/dotted-step-area.tsx?raw"))
const UiChartGlowingDotAreaSource = sourceLoader(() => import("../radix/chart/glowing-dot-area.tsx?raw"))
const UiChartForecastLineSource = sourceLoader(() => import("../radix/chart/forecast-line.tsx?raw"))
const UiChartCrosshatchAreaSource = sourceLoader(() => import("../radix/chart/crosshatch-area.tsx?raw"))
const UiChartDonutCenterTotalSource = sourceLoader(() => import("../radix/chart/donut-center-total.tsx?raw"))
const UiChartDonutCenterStatsSource = sourceLoader(() => import("../radix/chart/donut-center-stats.tsx?raw"))
const UiChartStripedPieSource = sourceLoader(() => import("../radix/chart/striped-pie.tsx?raw"))
const UiChartActiveSegmentDonutSource = sourceLoader(() => import("../radix/chart/active-segment-donut.tsx?raw"))
const UiChartGradientRadarSource = sourceLoader(() => import("../radix/chart/gradient-radar.tsx?raw"))
const UiChartGlowingStrokeRadarSource = sourceLoader(() => import("../radix/chart/glowing-stroke-radar.tsx?raw"))
const UiChartRadialScoresSource = sourceLoader(() => import("../radix/chart/radial-scores.tsx?raw"))
const UiCheckboxSource = sourceLoader(() => import("../radix/checkbox/default.tsx?raw"))
const UiCheckboxStandardSource = sourceLoader(() => import("../radix/checkbox/standard.tsx?raw"))
const UiCheckboxDisabledSource = sourceLoader(() => import("../radix/checkbox/disabled.tsx?raw"))
const UiCheckboxInvalidSource = sourceLoader(() => import("../radix/checkbox/invalid.tsx?raw"))
const UiCheckboxIndeterminateSource = sourceLoader(() => import("../radix/checkbox/indeterminate.tsx?raw"))
const UiCheckboxLabelDescriptionSource = sourceLoader(() => import("../radix/checkbox/label-description.tsx?raw"))
const UiCheckboxColoredSource = sourceLoader(() => import("../radix/checkbox/colored.tsx?raw"))
const UiCheckboxCircleTodoSource = sourceLoader(() => import("../radix/checkbox/circle-todo.tsx?raw"))
const UiCheckboxGroupSource = sourceLoader(() => import("../radix/checkbox/group.tsx?raw"))
const UiCheckboxSettingCardSource = sourceLoader(() => import("../radix/checkbox/setting-card.tsx?raw"))
const UiCheckboxFrameGroupSource = sourceLoader(() => import("../radix/checkbox/frame-group.tsx?raw"))
const UiCheckboxCardRowsSource = sourceLoader(() => import("../radix/checkbox/card-rows.tsx?raw"))
const UiCheckboxIconCardRowsSource = sourceLoader(() => import("../radix/checkbox/icon-card-rows.tsx?raw"))
const UiCheckboxCornerCheckTilesSource = sourceLoader(() => import("../radix/checkbox/corner-check-tiles.tsx?raw"))
const UiCheckboxModuleTilesSource = sourceLoader(() => import("../radix/checkbox/module-tiles.tsx?raw"))
const UiCheckboxAvatarCardSource = sourceLoader(() => import("../radix/checkbox/avatar-card.tsx?raw"))
const UiCheckboxNestedPermissionsSource = sourceLoader(() => import("../radix/checkbox/nested-permissions.tsx?raw"))
const UiCheckboxPaymentMethodSource = sourceLoader(() => import("../radix/checkbox/payment-method.tsx?raw"))
const UiCheckboxHelpIconTooltipSource = sourceLoader(() => import("../radix/checkbox/help-icon-tooltip.tsx?raw"))
const UiCheckboxBadgeGroupSource = sourceLoader(() => import("../radix/checkbox/badge-group.tsx?raw"))
const UiCheckboxRightSideTooltipSource = sourceLoader(() => import("../radix/checkbox/right-side-tooltip.tsx?raw"))
const UiCheckboxInlineGroupSource = sourceLoader(() => import("../radix/checkbox/inline-group.tsx?raw"))
const UiCheckboxUppercaseBadgesSource = sourceLoader(() => import("../radix/checkbox/uppercase-badges.tsx?raw"))
const UiCollapsibleSource = sourceLoader(() => import("../radix/collapsible/default.tsx?raw"))
const UiCollapsibleStandardSource = sourceLoader(() => import("../radix/collapsible/standard.tsx?raw"))
const UiCollapsibleCheckboxSettingsSource = sourceLoader(() => import("../radix/collapsible/checkbox-settings.tsx?raw"))
const UiCollapsibleAnimatedCardSource = sourceLoader(() => import("../radix/collapsible/animated-card.tsx?raw"))
const UiCollapsibleBottomTriggerSource = sourceLoader(() => import("../radix/collapsible/bottom-trigger.tsx?raw"))
const UiCollapsibleFormFieldsSource = sourceLoader(() => import("../radix/collapsible/form-fields.tsx?raw"))
const UiCollapsibleInFrameSource = sourceLoader(() => import("../radix/collapsible/in-frame.tsx?raw"))
const UiCollapsibleNestedListSource = sourceLoader(() => import("../radix/collapsible/nested-list.tsx?raw"))
const UiCollapsibleUserProfileSource = sourceLoader(() => import("../radix/collapsible/user-profile.tsx?raw"))
const UiCollapsibleMultiLevelMenuSource = sourceLoader(() => import("../radix/collapsible/multi-level-menu.tsx?raw"))
const UiCollapsibleFileTreeSource = sourceLoader(() => import("../radix/collapsible/file-tree.tsx?raw"))
const UiComboboxSource = sourceLoader(() => import("../radix/combobox/default.tsx?raw"))
const UiComboboxStandardSource = sourceLoader(() => import("../radix/combobox/standard.tsx?raw"))
const UiComboboxDisabledSource = sourceLoader(() => import("../radix/combobox/disabled.tsx?raw"))
const UiComboboxInvalidSource = sourceLoader(() => import("../radix/combobox/invalid.tsx?raw"))
const UiComboboxClearButtonSource = sourceLoader(() => import("../radix/combobox/clear-button.tsx?raw"))
const UiComboboxAutoHighlightSource = sourceLoader(() => import("../radix/combobox/auto-highlight.tsx?raw"))
const UiComboboxGroupedOptionsSource = sourceLoader(() => import("../radix/combobox/grouped-options.tsx?raw"))
const UiComboboxGroupSeparatorsSource = sourceLoader(() => import("../radix/combobox/group-separators.tsx?raw"))
const UiComboboxLargeListSource = sourceLoader(() => import("../radix/combobox/large-list.tsx?raw"))
const UiComboboxIconAddonSource = sourceLoader(() => import("../radix/combobox/icon-addon.tsx?raw"))
const UiComboboxCountryPickerSource = sourceLoader(() => import("../radix/combobox/country-picker.tsx?raw"))
const UiComboboxInFormSource = sourceLoader(() => import("../radix/combobox/in-form.tsx?raw"))
const UiComboboxMultiSelectSource = sourceLoader(() => import("../radix/combobox/multi-select.tsx?raw"))
const UiComboboxDisabledMultiSelectSource = sourceLoader(() => import("../radix/combobox/disabled-multi-select.tsx?raw"))
const UiComboboxInvalidMultiSelectSource = sourceLoader(() => import("../radix/combobox/invalid-multi-select.tsx?raw"))
const UiComboboxNonRemovableChipsSource = sourceLoader(() => import("../radix/combobox/non-removable-chips.tsx?raw"))
const UiComboboxCustomItemsSource = sourceLoader(() => import("../radix/combobox/custom-items.tsx?raw"))
const UiComboboxInDialogSource = sourceLoader(() => import("../radix/combobox/in-dialog.tsx?raw"))
const UiComboboxCustomTriggerIconSource = sourceLoader(() => import("../radix/combobox/custom-trigger-icon.tsx?raw"))
const UiComboboxUserTagsSource = sourceLoader(() => import("../radix/combobox/user-tags.tsx?raw"))
const UiComboboxInvisibleTagsSource = sourceLoader(() => import("../radix/combobox/invisible-tags.tsx?raw"))
const UiComboboxStatusChangeSource = sourceLoader(() => import("../radix/combobox/status-change.tsx?raw"))
const UiComboboxPriorityChangeSource = sourceLoader(() => import("../radix/combobox/priority-change.tsx?raw"))
const UiComboboxLeadSelectionSource = sourceLoader(() => import("../radix/combobox/lead-selection.tsx?raw"))
const UiComboboxMemberSelectionSource = sourceLoader(() => import("../radix/combobox/member-selection.tsx?raw"))
const UiComboboxDateSelectionSource = sourceLoader(() => import("../radix/combobox/date-selection.tsx?raw"))
const UiComboboxLabelSelectionSource = sourceLoader(() => import("../radix/combobox/label-selection.tsx?raw"))
const UiComboboxTeamSelectionSource = sourceLoader(() => import("../radix/combobox/team-selection.tsx?raw"))
const UiComboboxAssigneeSelectionSource = sourceLoader(() => import("../radix/combobox/assignee-selection.tsx?raw"))
const UiCommandSource = sourceLoader(() => import("../radix/command/default.tsx?raw"))
const UiCommandStandardSource = sourceLoader(() => import("../radix/command/standard.tsx?raw"))
const UiCommandShortcutsSource = sourceLoader(() => import("../radix/command/shortcuts.tsx?raw"))
const UiCommandGroupsSource = sourceLoader(() => import("../radix/command/groups.tsx?raw"))
const UiCommandManyGroupsSource = sourceLoader(() => import("../radix/command/many-groups.tsx?raw"))
const UiCommandFileSearchSource = sourceLoader(() => import("../radix/command/file-search.tsx?raw"))
const UiCommandUserSearchSource = sourceLoader(() => import("../radix/command/user-search.tsx?raw"))
const UiCommandActionPaletteSource = sourceLoader(() => import("../radix/command/action-palette.tsx?raw"))
const UiCommandRecentFavoritesSource = sourceLoader(() => import("../radix/command/recent-favorites.tsx?raw"))
const UiContextMenuSource = sourceLoader(() => import("../radix/context-menu/default.tsx?raw"))
const UiContextMenuStandardSource = sourceLoader(() => import("../radix/context-menu/standard.tsx?raw"))
const UiContextMenuIconsSource = sourceLoader(() => import("../radix/context-menu/icons.tsx?raw"))
const UiContextMenuShortcutsSource = sourceLoader(() => import("../radix/context-menu/shortcuts.tsx?raw"))
const UiContextMenuNestedSubmenusSource = sourceLoader(() => import("../radix/context-menu/nested-submenus.tsx?raw"))
const UiContextMenuLabelsSeparatorsSource = sourceLoader(() => import("../radix/context-menu/labels-separators.tsx?raw"))
const UiContextMenuCheckboxItemsSource = sourceLoader(() => import("../radix/context-menu/checkbox-items.tsx?raw"))
const UiContextMenuRadioItemsSource = sourceLoader(() => import("../radix/context-menu/radio-items.tsx?raw"))
const UiContextMenuDestructiveActionsSource = sourceLoader(() => import("../radix/context-menu/destructive-actions.tsx?raw"))
const UiContextMenuAlignmentSidesSource = sourceLoader(() => import("../radix/context-menu/alignment-sides.tsx?raw"))
const UiContextMenuInsideDialogSource = sourceLoader(() => import("../radix/context-menu/inside-dialog.tsx?raw"))
const UiDialogSource = sourceLoader(() => import("../radix/dialog/default.tsx?raw"))
const UiDialogStandardSource = sourceLoader(() => import("../radix/dialog/standard.tsx?raw"))
const UiDialogScrollableContentSource = sourceLoader(() => import("../radix/dialog/scrollable-content.tsx?raw"))
const UiDialogStickyFooterSource = sourceLoader(() => import("../radix/dialog/sticky-footer.tsx?raw"))
const UiDialogNoCloseButtonSource = sourceLoader(() => import("../radix/dialog/no-close-button.tsx?raw"))
const UiDialogCustomCloseButtonSource = sourceLoader(() => import("../radix/dialog/custom-close-button.tsx?raw"))
const UiDialogFullScreenSource = sourceLoader(() => import("../radix/dialog/full-screen.tsx?raw"))
const UiDialogDestructiveConfirmationSource = sourceLoader(() => import("../radix/dialog/destructive-confirmation.tsx?raw"))
const UiDialogCookieConsentSource = sourceLoader(() => import("../radix/dialog/cookie-consent.tsx?raw"))
const UiDialogKeyboardShortcutsSource = sourceLoader(() => import("../radix/dialog/keyboard-shortcuts.tsx?raw"))
const UiDialogFullWidthButtonSource = sourceLoader(() => import("../radix/dialog/full-width-button.tsx?raw"))
const UiDrawerSource = sourceLoader(() => import("../radix/drawer/default.tsx?raw"))
const UiDrawerScrollableContentSource = sourceLoader(() => import("../radix/drawer/scrollable-content.tsx?raw"))
const UiDrawerRightSideSource = sourceLoader(() => import("../radix/drawer/right-side.tsx?raw"))
const UiDrawerLeftSideSource = sourceLoader(() => import("../radix/drawer/left-side.tsx?raw"))
const UiDrawerTopSideSource = sourceLoader(() => import("../radix/drawer/top-side.tsx?raw"))
const UiDrawerAllSidesSource = sourceLoader(() => import("../radix/drawer/all-sides.tsx?raw"))
const UiDropdownMenuSource = sourceLoader(() => import("../radix/dropdown-menu/default.tsx?raw"))
const UiDropdownMenuStandardSource = sourceLoader(() => import("../radix/dropdown-menu/standard.tsx?raw"))
const UiDropdownMenuOpeningPositionsSource = sourceLoader(() => import("../radix/dropdown-menu/opening-positions.tsx?raw"))
const UiDropdownMenuIconsSource = sourceLoader(() => import("../radix/dropdown-menu/icons.tsx?raw"))
const UiDropdownMenuKeyboardShortcutsSource = sourceLoader(() => import("../radix/dropdown-menu/keyboard-shortcuts.tsx?raw"))
const UiDropdownMenuNestedSubmenusSource = sourceLoader(() => import("../radix/dropdown-menu/nested-submenus.tsx?raw"))
const UiDropdownMenuCheckboxesSource = sourceLoader(() => import("../radix/dropdown-menu/checkboxes.tsx?raw"))
const UiDropdownMenuRadioGroupsSource = sourceLoader(() => import("../radix/dropdown-menu/radio-groups.tsx?raw"))
const UiDropdownMenuAllItemTypesSource = sourceLoader(() => import("../radix/dropdown-menu/all-item-types.tsx?raw"))
const UiDropdownMenuUserProfileSource = sourceLoader(() => import("../radix/dropdown-menu/user-profile.tsx?raw"))
const UiDropdownMenuWorkspaceSwitcherSource = sourceLoader(() => import("../radix/dropdown-menu/workspace-switcher.tsx?raw"))
const UiDropdownMenuNotificationFeedSource = sourceLoader(() => import("../radix/dropdown-menu/notification-feed.tsx?raw"))
const UiDropdownMenuRecordActionsSource = sourceLoader(() => import("../radix/dropdown-menu/record-actions.tsx?raw"))
const UiDropdownMenuShareExportSource = sourceLoader(() => import("../radix/dropdown-menu/share-export.tsx?raw"))
const UiDropdownMenuThemeStatusSource = sourceLoader(() => import("../radix/dropdown-menu/theme-status.tsx?raw"))
const UiDropdownMenuUserCreateSource = sourceLoader(() => import("../radix/dropdown-menu/user-create.tsx?raw"))
const UiDropdownMenuQuickActionsSource = sourceLoader(() => import("../radix/dropdown-menu/quick-actions.tsx?raw"))
const UiDropdownMenuNotificationItemsSource = sourceLoader(() => import("../radix/dropdown-menu/notification-items.tsx?raw"))
const UiDropdownMenuAiModelSelectorSource = sourceLoader(() => import("../radix/dropdown-menu/ai-model-selector.tsx?raw"))
const UiEmptySource = sourceLoader(() => import("../radix/empty/default.tsx?raw"))
const UiEmptyStandardSource = sourceLoader(() => import("../radix/empty/standard.tsx?raw"))
const UiEmptyNoResultsSource = sourceLoader(() => import("../radix/empty/no-results.tsx?raw"))
const UiEmptySearchInputSource = sourceLoader(() => import("../radix/empty/search-input.tsx?raw"))
const UiEmptyAddButtonSource = sourceLoader(() => import("../radix/empty/add-button.tsx?raw"))
const UiEmptyDocumentsSource = sourceLoader(() => import("../radix/empty/documents.tsx?raw"))
const UiEmptyDashedUploadSource = sourceLoader(() => import("../radix/empty/dashed-upload.tsx?raw"))
const UiEmptyInboxSource = sourceLoader(() => import("../radix/empty/inbox.tsx?raw"))
const UiEmptyTeamMembersSource = sourceLoader(() => import("../radix/empty/team-members.tsx?raw"))
const UiEmptyNoNotificationsSource = sourceLoader(() => import("../radix/empty/no-notifications.tsx?raw"))
const UiEmptyAnalyticsSource = sourceLoader(() => import("../radix/empty/analytics.tsx?raw"))
const UiEmptyBookmarksSource = sourceLoader(() => import("../radix/empty/bookmarks.tsx?raw"))
const UiEmptyTasksSource = sourceLoader(() => import("../radix/empty/tasks.tsx?raw"))
const UiEmptyAutomationsSource = sourceLoader(() => import("../radix/empty/automations.tsx?raw"))
const UiEmptyCommentsBoardSource = sourceLoader(() => import("../radix/empty/comments-board.tsx?raw"))
const UiEmptyStackedProductsSource = sourceLoader(() => import("../radix/empty/stacked-products.tsx?raw"))
const UiEmptySearchFileCardsSource = sourceLoader(() => import("../radix/empty/search-file-cards.tsx?raw"))
const UiEmptyChatBubblesSource = sourceLoader(() => import("../radix/empty/chat-bubbles.tsx?raw"))
const UiEmptyCreditCardSource = sourceLoader(() => import("../radix/empty/credit-card.tsx?raw"))
const UiEmptyConnectedNodesSource = sourceLoader(() => import("../radix/empty/connected-nodes.tsx?raw"))
const UiEmptyEventsCalendarSource = sourceLoader(() => import("../radix/empty/events-calendar.tsx?raw"))
const UiFieldSource = sourceLoader(() => import("../radix/field/default.tsx?raw"))
const UiFieldStandardSource = sourceLoader(() => import("../radix/field/standard.tsx?raw"))
const UiFieldInputTextareaSource = sourceLoader(() => import("../radix/field/input-textarea.tsx?raw"))
const UiFieldSelectControlsSource = sourceLoader(() => import("../radix/field/select-controls.tsx?raw"))
const UiFieldRadioCheckboxesSource = sourceLoader(() => import("../radix/field/radio-checkboxes.tsx?raw"))
const UiFieldSliderSwitchSource = sourceLoader(() => import("../radix/field/slider-switch.tsx?raw"))
const UiFieldOtpInputSource = sourceLoader(() => import("../radix/field/otp-input.tsx?raw"))
const UiFieldSettingsFormSource = sourceLoader(() => import("../radix/field/settings-form.tsx?raw"))
const UiFieldPermissionsSource = sourceLoader(() => import("../radix/field/permissions.tsx?raw"))
const UiFieldResponsiveLayoutSource = sourceLoader(() => import("../radix/field/responsive-layout.tsx?raw"))
const UiFieldNotificationPreferencesSource = sourceLoader(() => import("../radix/field/notification-preferences.tsx?raw"))
const UiFieldValidationErrorsSource = sourceLoader(() => import("../radix/field/validation-errors.tsx?raw"))
const UiFileUploadSource = sourceLoader(() => import("../radix/file-upload/default.tsx?raw"))
const UiFileUploadStandardSource = sourceLoader(() => import("../radix/file-upload/standard.tsx?raw"))
const UiFileUploadAvatarSource = sourceLoader(() => import("../radix/file-upload/avatar.tsx?raw"))
const UiFileUploadDragDropSource = sourceLoader(() => import("../radix/file-upload/drag-drop.tsx?raw"))
const UiFileUploadGallerySource = sourceLoader(() => import("../radix/file-upload/gallery.tsx?raw"))
const UiFileUploadProgressListSource = sourceLoader(() => import("../radix/file-upload/progress-list.tsx?raw"))
const UiFileUploadTableSource = sourceLoader(() => import("../radix/file-upload/table.tsx?raw"))
const UiFileUploadProductImagesSource = sourceLoader(() => import("../radix/file-upload/product-images.tsx?raw"))
const UiFileUploadSortableImagesSource = sourceLoader(() => import("../radix/file-upload/sortable-images.tsx?raw"))
const UiFileUploadPreviewCardsSource = sourceLoader(() => import("../radix/file-upload/preview-cards.tsx?raw"))
const UiFileUploadCoverImageSource = sourceLoader(() => import("../radix/file-upload/cover-image.tsx?raw"))
const UiHoverCardSource = sourceLoader(() => import("../radix/hover-card/default.tsx?raw"))
const UiHoverCardStandardSource = sourceLoader(() => import("../radix/hover-card/standard.tsx?raw"))
const UiHoverCardPositionsSource = sourceLoader(() => import("../radix/hover-card/positions.tsx?raw"))
const UiHoverCardProfileSource = sourceLoader(() => import("../radix/hover-card/profile.tsx?raw"))
const UiHoverCardIconSource = sourceLoader(() => import("../radix/hover-card/icon.tsx?raw"))
const UiHoverCardImageTextSource = sourceLoader(() => import("../radix/hover-card/image-text.tsx?raw"))
const UiHoverCardInDialogSource = sourceLoader(() => import("../radix/hover-card/in-dialog.tsx?raw"))
const UiHoverCardLiveTimestampSource = sourceLoader(() => import("../radix/hover-card/live-timestamp.tsx?raw"))
const UiHoverCardReleaseNotesSource = sourceLoader(() => import("../radix/hover-card/release-notes.tsx?raw"))
const UiInputSource = sourceLoader(() => import("../radix/input/default.tsx?raw"))
const UiInputStandardSource = sourceLoader(() => import("../radix/input/standard.tsx?raw"))
const UiInputWithLabelSource = sourceLoader(() => import("../radix/input/with-label.tsx?raw"))
const UiInputWithDescriptionSource = sourceLoader(() => import("../radix/input/with-description.tsx?raw"))
const UiInputDisabledSource = sourceLoader(() => import("../radix/input/disabled.tsx?raw"))
const UiInputErrorMessageSource = sourceLoader(() => import("../radix/input/error-message.tsx?raw"))
const UiInputCharacterCounterSource = sourceLoader(() => import("../radix/input/character-counter.tsx?raw"))
const UiInputPasswordSource = sourceLoader(() => import("../radix/input/password.tsx?raw"))
const UiInputPhoneSource = sourceLoader(() => import("../radix/input/phone.tsx?raw"))
const UiInputUrlSource = sourceLoader(() => import("../radix/input/url.tsx?raw"))
const UiInputNumberSource = sourceLoader(() => import("../radix/input/number.tsx?raw"))
const UiInputDateSource = sourceLoader(() => import("../radix/input/date.tsx?raw"))
const UiInputFileSource = sourceLoader(() => import("../radix/input/file.tsx?raw"))
const UiInputRequiredIndicatorSource = sourceLoader(() => import("../radix/input/required-indicator.tsx?raw"))
const UiInputTimeSource = sourceLoader(() => import("../radix/input/time.tsx?raw"))
const UiInputContactFormSource = sourceLoader(() => import("../radix/input/contact-form.tsx?raw"))
const UiInputLabelTooltipSource = sourceLoader(() => import("../radix/input/label-tooltip.tsx?raw"))
const UiInputLabelBadgeSource = sourceLoader(() => import("../radix/input/label-badge.tsx?raw"))
const UiInputOptionalBadgeSource = sourceLoader(() => import("../radix/input/optional-badge.tsx?raw"))
const UiInputLinkToggleSource = sourceLoader(() => import("../radix/input/link-toggle.tsx?raw"))
const UiInputHorizontalSource = sourceLoader(() => import("../radix/input/horizontal.tsx?raw"))
const UiInputMultipleErrorsSource = sourceLoader(() => import("../radix/input/multiple-errors.tsx?raw"))
const UiInputStrengthHintSource = sourceLoader(() => import("../radix/input/strength-hint.tsx?raw"))
const UiInputStrengthMeterSource = sourceLoader(() => import("../radix/input/strength-meter.tsx?raw"))
const UiInputPulsedBackgroundSource = sourceLoader(() => import("../radix/input/pulsed-background.tsx?raw"))
const UiInputCustomFocusRingSource = sourceLoader(() => import("../radix/input/custom-focus-ring.tsx?raw"))
const UiInputSubtleBackgroundSource = sourceLoader(() => import("../radix/input/subtle-background.tsx?raw"))
const UiInputBottomBorderSource = sourceLoader(() => import("../radix/input/bottom-border.tsx?raw"))
const UiInputColorSource = sourceLoader(() => import("../radix/input/color.tsx?raw"))
const UiInputRangeSource = sourceLoader(() => import("../radix/input/range.tsx?raw"))
const UiInputPillShapeSource = sourceLoader(() => import("../radix/input/pill-shape.tsx?raw"))
const UiInputBorderlessSource = sourceLoader(() => import("../radix/input/borderless.tsx?raw"))
const UiInputGroupSource = sourceLoader(() => import("../radix/input-group/default.tsx?raw"))
const UiInputGroupStandardSource = sourceLoader(() => import("../radix/input-group/standard.tsx?raw"))
const UiInputGroupDisabledSource = sourceLoader(() => import("../radix/input-group/disabled.tsx?raw"))
const UiInputGroupInvalidSource = sourceLoader(() => import("../radix/input-group/invalid.tsx?raw"))
const UiInputGroupPrefixIconSource = sourceLoader(() => import("../radix/input-group/prefix-icon.tsx?raw"))
const UiInputGroupSuffixIconSource = sourceLoader(() => import("../radix/input-group/suffix-icon.tsx?raw"))
const UiInputGroupPrefixSuffixIconsSource = sourceLoader(() => import("../radix/input-group/prefix-suffix-icons.tsx?raw"))
const UiInputGroupPrefixTextSource = sourceLoader(() => import("../radix/input-group/prefix-text.tsx?raw"))
const UiInputGroupSuffixTextSource = sourceLoader(() => import("../radix/input-group/suffix-text.tsx?raw"))
const UiInputGroupPrefixSuffixTextSource = sourceLoader(() => import("../radix/input-group/prefix-suffix-text.tsx?raw"))
const UiInputGroupActionButtonSource = sourceLoader(() => import("../radix/input-group/action-button.tsx?raw"))
const UiInputGroupIconButtonSource = sourceLoader(() => import("../radix/input-group/icon-button.tsx?raw"))
const UiInputGroupDropdownSelectSource = sourceLoader(() => import("../radix/input-group/dropdown-select.tsx?raw"))
const UiInputGroupKeyboardShortcutSource = sourceLoader(() => import("../radix/input-group/keyboard-shortcut.tsx?raw"))
const UiInputGroupTooltipActionSource = sourceLoader(() => import("../radix/input-group/tooltip-action.tsx?raw"))
const UiInputGroupLoadingSpinnerSource = sourceLoader(() => import("../radix/input-group/loading-spinner.tsx?raw"))
const UiInputGroupBlockStartAddonSource = sourceLoader(() => import("../radix/input-group/block-start-addon.tsx?raw"))
const UiInputGroupCharacterLimitSource = sourceLoader(() => import("../radix/input-group/character-limit.tsx?raw"))
const UiInputGroupAiChatToolbarSource = sourceLoader(() => import("../radix/input-group/ai-chat-toolbar.tsx?raw"))
const UiInputGroupAiChatAttachmentsSource = sourceLoader(() => import("../radix/input-group/ai-chat-attachments.tsx?raw"))
const UiInputGroupLabelUsageSource = sourceLoader(() => import("../radix/input-group/label-usage.tsx?raw"))
const UiInputGroupMultipleEndActionsSource = sourceLoader(() => import("../radix/input-group/multiple-end-actions.tsx?raw"))
const UiInputGroupPopoverTriggerSource = sourceLoader(() => import("../radix/input-group/popover-trigger.tsx?raw"))
const UiInputGroupSparklesShortcutSource = sourceLoader(() => import("../radix/input-group/sparkles-shortcut.tsx?raw"))
const UiInputGroupSuccessIndicatorSource = sourceLoader(() => import("../radix/input-group/success-indicator.tsx?raw"))
const UiInputGroupResultsCountSource = sourceLoader(() => import("../radix/input-group/results-count.tsx?raw"))
const UiInputGroupTextareaActionsSource = sourceLoader(() => import("../radix/input-group/textarea-actions.tsx?raw"))
const UiInputGroupButtonGroupSource = sourceLoader(() => import("../radix/input-group/button-group.tsx?raw"))
const UiInputGroupThreeDotMenuSource = sourceLoader(() => import("../radix/input-group/three-dot-menu.tsx?raw"))
const UiInputGroupPillCategorySource = sourceLoader(() => import("../radix/input-group/pill-category.tsx?raw"))
const UiInputGroupInlineAddonsSource = sourceLoader(() => import("../radix/input-group/inline-addons.tsx?raw"))
const UiInputGroupInlineBlockEndSource = sourceLoader(() => import("../radix/input-group/inline-block-end.tsx?raw"))
const UiInputGroupMemberRowSource = sourceLoader(() => import("../radix/input-group/member-row.tsx?raw"))
const UiInputGroupProjectSaveSource = sourceLoader(() => import("../radix/input-group/project-save.tsx?raw"))
const UiInputGroupPillAiPromptSource = sourceLoader(() => import("../radix/input-group/pill-ai-prompt.tsx?raw"))
const UiInputGroupPasswordToggleSource = sourceLoader(() => import("../radix/input-group/password-toggle.tsx?raw"))
const UiInputGroupApiRequestSource = sourceLoader(() => import("../radix/input-group/api-request.tsx?raw"))
const UiInputGroupOrderSearchSource = sourceLoader(() => import("../radix/input-group/order-search.tsx?raw"))
const UiInputGroupCompanySearchSource = sourceLoader(() => import("../radix/input-group/company-search.tsx?raw"))
const UiInputGroupContactSearchSource = sourceLoader(() => import("../radix/input-group/contact-search.tsx?raw"))
const UiInputGroupShareLinkSource = sourceLoader(() => import("../radix/input-group/share-link.tsx?raw"))
const UiInputOtpSource = sourceLoader(() => import("../radix/input-otp/default.tsx?raw"))
const UiInputOtpStandardSource = sourceLoader(() => import("../radix/input-otp/standard.tsx?raw"))
const UiInputOtpDigitsOnlySource = sourceLoader(() => import("../radix/input-otp/digits-only.tsx?raw"))
const UiInputOtpMultipleSeparatorsSource = sourceLoader(() => import("../radix/input-otp/multiple-separators.tsx?raw"))
const UiInputOtpLettersNumbersSource = sourceLoader(() => import("../radix/input-otp/letters-numbers.tsx?raw"))
const UiInputOtpPinCodeSource = sourceLoader(() => import("../radix/input-otp/pin-code.tsx?raw"))
const UiInputOtpVerificationCardSource = sourceLoader(() => import("../radix/input-otp/verification-card.tsx?raw"))
const UiItemSource = sourceLoader(() => import("../radix/item/default.tsx?raw"))
const UiItemVariantsSource = sourceLoader(() => import("../radix/item/variants.tsx?raw"))
const UiItemIconActionsSource = sourceLoader(() => import("../radix/item/icon-actions.tsx?raw"))
const UiItemUserFollowSource = sourceLoader(() => import("../radix/item/user-follow.tsx?raw"))
const UiItemNavigationLinksSource = sourceLoader(() => import("../radix/item/navigation-links.tsx?raw"))
const UiItemStatusBadgesSource = sourceLoader(() => import("../radix/item/status-badges.tsx?raw"))
const UiItemFileRowsSource = sourceLoader(() => import("../radix/item/file-rows.tsx?raw"))
const UiItemKeyboardShortcutsSource = sourceLoader(() => import("../radix/item/keyboard-shortcuts.tsx?raw"))
const UiItemSmallCountBadgesSource = sourceLoader(() => import("../radix/item/small-count-badges.tsx?raw"))
const UiItemTeamRolesSource = sourceLoader(() => import("../radix/item/team-roles.tsx?raw"))
const UiItemHeaderFooterSource = sourceLoader(() => import("../radix/item/header-footer.tsx?raw"))
const UiItemIntegrationsSource = sourceLoader(() => import("../radix/item/integrations.tsx?raw"))
const UiItemActivityFeedSource = sourceLoader(() => import("../radix/item/activity-feed.tsx?raw"))
const UiKbdSource = sourceLoader(() => import("../radix/kbd/default.tsx?raw"))
const UiKbdStandardKeysSource = sourceLoader(() => import("../radix/kbd/standard-keys.tsx?raw"))
const UiKbdGroupedKeysSource = sourceLoader(() => import("../radix/kbd/grouped-keys.tsx?raw"))
const UiKbdKeysWithIconsSource = sourceLoader(() => import("../radix/kbd/keys-with-icons.tsx?raw"))
const UiKbdInInputSource = sourceLoader(() => import("../radix/kbd/in-input.tsx?raw"))
const UiKbdInTooltipSource = sourceLoader(() => import("../radix/kbd/in-tooltip.tsx?raw"))
const UiKbdShortcutListSource = sourceLoader(() => import("../radix/kbd/shortcut-list.tsx?raw"))
const UiLabelSource = sourceLoader(() => import("../radix/label/default.tsx?raw"))
const UiLabelStandardSource = sourceLoader(() => import("../radix/label/standard.tsx?raw"))
const UiLabelCheckboxSource = sourceLoader(() => import("../radix/label/checkbox.tsx?raw"))
const UiLabelTextareaSource = sourceLoader(() => import("../radix/label/textarea.tsx?raw"))
const UiLabelDisabledSource = sourceLoader(() => import("../radix/label/disabled.tsx?raw"))
const UiLabelRequiredSource = sourceLoader(() => import("../radix/label/required.tsx?raw"))
const UiLabelOptionalSource = sourceLoader(() => import("../radix/label/optional.tsx?raw"))
const UiLabelTooltipInfoSource = sourceLoader(() => import("../radix/label/tooltip-info.tsx?raw"))
const UiLabelBadgeSource = sourceLoader(() => import("../radix/label/badge.tsx?raw"))
const UiLabelCharacterCounterSource = sourceLoader(() => import("../radix/label/character-counter.tsx?raw"))
const UiLabelHelperTextSource = sourceLoader(() => import("../radix/label/helper-text.tsx?raw"))
const UiLabelErrorStateSource = sourceLoader(() => import("../radix/label/error-state.tsx?raw"))
const UiLabelInlineEditSource = sourceLoader(() => import("../radix/label/inline-edit.tsx?raw"))
const UiLabelStatusDotSource = sourceLoader(() => import("../radix/label/status-dot.tsx?raw"))
const UiMarkerSource = sourceLoader(() => import("../radix/marker/default.tsx?raw"))
const UiMarkerStandardVariantsSource = sourceLoader(() => import("../radix/marker/standard-variants.tsx?raw"))
const UiMarkerToolCallLogSource = sourceLoader(() => import("../radix/marker/tool-call-log.tsx?raw"))
const UiMarkerRunStatusSource = sourceLoader(() => import("../radix/marker/run-status.tsx?raw"))
const UiMarkerPhaseSeparatorsSource = sourceLoader(() => import("../radix/marker/phase-separators.tsx?raw"))
const UiMarkerChangedFilesSource = sourceLoader(() => import("../radix/marker/changed-files.tsx?raw"))
const UiMarkerLinksActionSource = sourceLoader(() => import("../radix/marker/links-action.tsx?raw"))
const UiMenubarSource = sourceLoader(() => import("../radix/menubar/default.tsx?raw"))
const UiMenubarStandardSource = sourceLoader(() => import("../radix/menubar/standard.tsx?raw"))
const UiMenubarSubmenusSource = sourceLoader(() => import("../radix/menubar/submenus.tsx?raw"))
const UiMenubarCheckboxRadioSource = sourceLoader(() => import("../radix/menubar/checkbox-radio.tsx?raw"))
const UiMenubarIconsSource = sourceLoader(() => import("../radix/menubar/icons.tsx?raw"))
const UiMenubarFormattingMediaSource = sourceLoader(() => import("../radix/menubar/formatting-media.tsx?raw"))
const UiMessageSource = sourceLoader(() => import("../radix/message/default.tsx?raw"))
const UiMessageTwoSidedChatSource = sourceLoader(() => import("../radix/message/two-sided-chat.tsx?raw"))
const UiMessageAvatarsSource = sourceLoader(() => import("../radix/message/avatars.tsx?raw"))
const UiMessageSenderStatusSource = sourceLoader(() => import("../radix/message/sender-status.tsx?raw"))
const UiMessageReplyActionsSource = sourceLoader(() => import("../radix/message/reply-actions.tsx?raw"))
const UiMessageSharedFilesSource = sourceLoader(() => import("../radix/message/shared-files.tsx?raw"))
const UiMessageConsecutiveMessagesSource = sourceLoader(() => import("../radix/message/consecutive-messages.tsx?raw"))
const UiMessageStreamingReplySource = sourceLoader(() => import("../radix/message/streaming-reply.tsx?raw"))
const UiMessageScrollerSource = sourceLoader(() => import("../radix/message-scroller/default.tsx?raw"))
const UiMessageScrollerJumpToLatestSource = sourceLoader(() => import("../radix/message-scroller/jump-to-latest.tsx?raw"))
const UiMessageScrollerStreamingReplySource = sourceLoader(() => import("../radix/message-scroller/streaming-reply.tsx?raw"))
const UiMessageScrollerAnchoredTurnSource = sourceLoader(() => import("../radix/message-scroller/anchored-turn.tsx?raw"))
const UiMessageScrollerOpeningPositionSource = sourceLoader(() => import("../radix/message-scroller/opening-position.tsx?raw"))
const UiMessageScrollerLoadEarlierSource = sourceLoader(() => import("../radix/message-scroller/load-earlier.tsx?raw"))
const UiMessageScrollerThreadNavigatorSource = sourceLoader(() => import("../radix/message-scroller/thread-navigator.tsx?raw"))
const UiNativeSelectSource = sourceLoader(() => import("../radix/native-select/default.tsx?raw"))
const UiNativeSelectStandardSource = sourceLoader(() => import("../radix/native-select/standard.tsx?raw"))
const UiNativeSelectGroupedOptionsSource = sourceLoader(() => import("../radix/native-select/grouped-options.tsx?raw"))
const UiNativeSelectSmallSource = sourceLoader(() => import("../radix/native-select/small.tsx?raw"))
const UiNativeSelectFieldWithLabelSource = sourceLoader(() => import("../radix/native-select/field-with-label.tsx?raw"))
const UiNativeSelectDisabledSource = sourceLoader(() => import("../radix/native-select/disabled.tsx?raw"))
const UiNativeSelectInvalidSource = sourceLoader(() => import("../radix/native-select/invalid.tsx?raw"))
const UiNavigationMenuSource = sourceLoader(() => import("../radix/navigation-menu/default.tsx?raw"))
const UiNavigationMenuStandardSource = sourceLoader(() => import("../radix/navigation-menu/standard.tsx?raw"))
const UiNavigationMenuGridLayoutSource = sourceLoader(() => import("../radix/navigation-menu/grid-layout.tsx?raw"))
const UiNavigationMenuWithIconsSource = sourceLoader(() => import("../radix/navigation-menu/with-icons.tsx?raw"))
const UiNavigationMenuLearnMoreButtonSource = sourceLoader(() => import("../radix/navigation-menu/learn-more-button.tsx?raw"))
const UiPaginationSource = sourceLoader(() => import("../radix/pagination/default.tsx?raw"))
const UiPaginationStandardSource = sourceLoader(() => import("../radix/pagination/standard.tsx?raw"))
const UiPaginationNoLabelsSource = sourceLoader(() => import("../radix/pagination/no-labels.tsx?raw"))
const UiPaginationHoverBorderSource = sourceLoader(() => import("../radix/pagination/hover-border.tsx?raw"))
const UiPaginationCircleButtonsSource = sourceLoader(() => import("../radix/pagination/circle-buttons.tsx?raw"))
const UiPaginationCompactGoToSource = sourceLoader(() => import("../radix/pagination/compact-go-to.tsx?raw"))
const UiPaginationInCardSource = sourceLoader(() => import("../radix/pagination/in-card.tsx?raw"))
const UiPaginationArrowLinksSource = sourceLoader(() => import("../radix/pagination/arrow-links.tsx?raw"))
const UiPaginationCenteredPageInfoSource = sourceLoader(() => import("../radix/pagination/centered-page-info.tsx?raw"))
const UiPaginationLeftPageInfoSource = sourceLoader(() => import("../radix/pagination/left-page-info.tsx?raw"))
const UiPaginationTrailingEllipsisSource = sourceLoader(() => import("../radix/pagination/trailing-ellipsis.tsx?raw"))
const UiPaginationOutlineStripSource = sourceLoader(() => import("../radix/pagination/outline-strip.tsx?raw"))
const UiPaginationRowsPerPageSource = sourceLoader(() => import("../radix/pagination/rows-per-page.tsx?raw"))
const UiPaginationPageSelectSource = sourceLoader(() => import("../radix/pagination/page-select.tsx?raw"))
const UiPaginationFullWidthGoToSource = sourceLoader(() => import("../radix/pagination/full-width-go-to.tsx?raw"))
const UiPaginationInfoAndPerPageSource = sourceLoader(() => import("../radix/pagination/info-and-per-page.tsx?raw"))
const UiPopoverSource = sourceLoader(() => import("../radix/popover/default.tsx?raw"))
const UiPopoverStandardSource = sourceLoader(() => import("../radix/popover/standard.tsx?raw"))
const UiPopoverOpeningSidesSource = sourceLoader(() => import("../radix/popover/opening-sides.tsx?raw"))
const UiPopoverInlineFormSource = sourceLoader(() => import("../radix/popover/inline-form.tsx?raw"))
const UiPopoverAlignmentSource = sourceLoader(() => import("../radix/popover/alignment.tsx?raw"))
const UiPopoverInDialogSource = sourceLoader(() => import("../radix/popover/in-dialog.tsx?raw"))
const UiPopoverProfileCardSource = sourceLoader(() => import("../radix/popover/profile-card.tsx?raw"))
const UiPopoverFeaturePitchSource = sourceLoader(() => import("../radix/popover/feature-pitch.tsx?raw"))
const UiPopoverMediaPreviewSource = sourceLoader(() => import("../radix/popover/media-preview.tsx?raw"))
const UiPopoverRelativeTimeSource = sourceLoader(() => import("../radix/popover/relative-time.tsx?raw"))
const UiPopoverControlsSource = sourceLoader(() => import("../radix/popover/controls.tsx?raw"))
const UiPopoverStepTourSource = sourceLoader(() => import("../radix/popover/step-tour.tsx?raw"))
const UiProgressSource = sourceLoader(() => import("../radix/progress/default.tsx?raw"))
const UiProgressStandardSource = sourceLoader(() => import("../radix/progress/standard.tsx?raw"))
const UiProgressSmallSource = sourceLoader(() => import("../radix/progress/small.tsx?raw"))
const UiProgressLargeSource = sourceLoader(() => import("../radix/progress/large.tsx?raw"))
const UiProgressStatusMessagesSource = sourceLoader(() => import("../radix/progress/status-messages.tsx?raw"))
const UiProgressFileUploadsSource = sourceLoader(() => import("../radix/progress/file-uploads.tsx?raw"))
const UiProgressWithSliderSource = sourceLoader(() => import("../radix/progress/with-slider.tsx?raw"))
const UiProgressMultiStepSource = sourceLoader(() => import("../radix/progress/multi-step.tsx?raw"))
const UiProgressCustomColorsSource = sourceLoader(() => import("../radix/progress/custom-colors.tsx?raw"))
const UiQuestionnaireSource = sourceLoader(() => import("../radix/questionnaire/default.tsx?raw"))
const UiQuestionnaireGuidedSetupSource = sourceLoader(() => import("../radix/questionnaire/guided-setup.tsx?raw"))
const UiQuestionnaireMultiSelectSource = sourceLoader(() => import("../radix/questionnaire/multi-select.tsx?raw"))
const UiQuestionnaireWriteInAnswerSource = sourceLoader(() => import("../radix/questionnaire/write-in-answer.tsx?raw"))
const UiQuestionnaireSegmentedProgressSource = sourceLoader(() => import("../radix/questionnaire/segmented-progress.tsx?raw"))
const UiQuestionnaireOptionalSkipSource = sourceLoader(() => import("../radix/questionnaire/optional-skip.tsx?raw"))
const UiQuestionnaireCrossQuestionRuleSource = sourceLoader(() => import("../radix/questionnaire/cross-question-rule.tsx?raw"))
const UiQuestionnaireConditionalBranchSource = sourceLoader(() => import("../radix/questionnaire/conditional-branch.tsx?raw"))
const UiRadioGroupSource = sourceLoader(() => import("../radix/radio-group/default.tsx?raw"))
const UiRadioGroupStandardSource = sourceLoader(() => import("../radix/radio-group/standard.tsx?raw"))
const UiRadioGroupDisabledSource = sourceLoader(() => import("../radix/radio-group/disabled.tsx?raw"))
const UiRadioGroupDescriptionsSource = sourceLoader(() => import("../radix/radio-group/descriptions.tsx?raw"))
const UiRadioGroupInvalidSource = sourceLoader(() => import("../radix/radio-group/invalid.tsx?raw"))
const UiRadioGroupColoredSource = sourceLoader(() => import("../radix/radio-group/colored.tsx?raw"))
const UiRadioGroupLegendDescriptionSource = sourceLoader(() => import("../radix/radio-group/legend-description.tsx?raw"))
const UiRadioGroupDescriptiveCardsSource = sourceLoader(() => import("../radix/radio-group/descriptive-cards.tsx?raw"))
const UiRadioGroupCardSeparatorsSource = sourceLoader(() => import("../radix/radio-group/card-separators.tsx?raw"))
const UiRadioGroupCardIconsSource = sourceLoader(() => import("../radix/radio-group/card-icons.tsx?raw"))
const UiRadioGroupInFrameSource = sourceLoader(() => import("../radix/radio-group/in-frame.tsx?raw"))
const UiRadioGroupGridLayoutSource = sourceLoader(() => import("../radix/radio-group/grid-layout.tsx?raw"))
const UiRadioGroupAvatarCardsSource = sourceLoader(() => import("../radix/radio-group/avatar-cards.tsx?raw"))
const UiRadioGroupPaymentMethodsSource = sourceLoader(() => import("../radix/radio-group/payment-methods.tsx?raw"))
const UiRadioGroupTooltipInfoSource = sourceLoader(() => import("../radix/radio-group/tooltip-info.tsx?raw"))
const UiRadioGroupBadgesSource = sourceLoader(() => import("../radix/radio-group/badges.tsx?raw"))
const UiRadioGroupInlineHorizontalSource = sourceLoader(() => import("../radix/radio-group/inline-horizontal.tsx?raw"))
const UiRadioGroupPricingTiersSource = sourceLoader(() => import("../radix/radio-group/pricing-tiers.tsx?raw"))
const UiResizableSource = sourceLoader(() => import("../radix/resizable/default.tsx?raw"))
const UiResizableHorizontalLayoutSource = sourceLoader(() => import("../radix/resizable/horizontal-layout.tsx?raw"))
const UiResizableVerticalLayoutSource = sourceLoader(() => import("../radix/resizable/vertical-layout.tsx?raw"))
const UiResizableMixedDirectionsSource = sourceLoader(() => import("../radix/resizable/mixed-directions.tsx?raw"))
const UiResizableNestedGripsSource = sourceLoader(() => import("../radix/resizable/nested-grips.tsx?raw"))
const UiResizableAnimatedPillSource = sourceLoader(() => import("../radix/resizable/animated-pill.tsx?raw"))
const UiResizableSpringPillSource = sourceLoader(() => import("../radix/resizable/spring-pill.tsx?raw"))
const UiResizableCapsuleExpansionSource = sourceLoader(() => import("../radix/resizable/capsule-expansion.tsx?raw"))
const UiResizableNestedPillsSource = sourceLoader(() => import("../radix/resizable/nested-pills.tsx?raw"))
const UiResizableThreePanelsSource = sourceLoader(() => import("../radix/resizable/three-panels.tsx?raw"))
const UiResizableSizeTrackingSource = sourceLoader(() => import("../radix/resizable/size-tracking.tsx?raw"))
const UiScrollAreaSource = sourceLoader(() => import("../radix/scroll-area/default.tsx?raw"))
const UiScrollAreaStandardSource = sourceLoader(() => import("../radix/scroll-area/standard.tsx?raw"))
const UiScrollAreaHorizontalSource = sourceLoader(() => import("../radix/scroll-area/horizontal.tsx?raw"))
const UiScrollAreaBothScrollbarsSource = sourceLoader(() => import("../radix/scroll-area/both-scrollbars.tsx?raw"))
const UiScrollAreaFadeEdgesSource = sourceLoader(() => import("../radix/scroll-area/fade-edges.tsx?raw"))
const UiScrollAreaScrollbarGutterSource = sourceLoader(() => import("../radix/scroll-area/scrollbar-gutter.tsx?raw"))
const UiSelectSource = sourceLoader(() => import("../radix/select/default.tsx?raw"))
const UiSelectStandardSource = sourceLoader(() => import("../radix/select/standard.tsx?raw"))
const UiSelectIconsSource = sourceLoader(() => import("../radix/select/icons.tsx?raw"))
const UiSelectGroupedLabelsSource = sourceLoader(() => import("../radix/select/grouped-labels.tsx?raw"))
const UiSelectLargeListSource = sourceLoader(() => import("../radix/select/large-list.tsx?raw"))
const UiSelectSmallTriggerSource = sourceLoader(() => import("../radix/select/small-trigger.tsx?raw"))
const UiSelectPlanPickerSource = sourceLoader(() => import("../radix/select/plan-picker.tsx?raw"))
const UiSelectDisabledItemSource = sourceLoader(() => import("../radix/select/disabled-item.tsx?raw"))
const UiSelectFieldWithLabelSource = sourceLoader(() => import("../radix/select/field-with-label.tsx?raw"))
const UiSelectInvalidSource = sourceLoader(() => import("../radix/select/invalid.tsx?raw"))
const UiSelectDisabledSource = sourceLoader(() => import("../radix/select/disabled.tsx?raw"))
const UiSelectInDialogSource = sourceLoader(() => import("../radix/select/in-dialog.tsx?raw"))
const UiSelectMultipleSelectionSource = sourceLoader(() => import("../radix/select/multiple-selection.tsx?raw"))
const UiSelectInlineWithInputSource = sourceLoader(() => import("../radix/select/inline-with-input.tsx?raw"))
const UiSelectWithButtonSource = sourceLoader(() => import("../radix/select/with-button.tsx?raw"))
const UiSelectItemAlignedSource = sourceLoader(() => import("../radix/select/item-aligned.tsx?raw"))
const UiSelectAccessLevelsSource = sourceLoader(() => import("../radix/select/access-levels.tsx?raw"))
const UiSelectStatusBulletsSource = sourceLoader(() => import("../radix/select/status-bullets.tsx?raw"))
const UiSelectUserAvatarsSource = sourceLoader(() => import("../radix/select/user-avatars.tsx?raw"))
const UiSelectStatusBadgesSource = sourceLoader(() => import("../radix/select/status-badges.tsx?raw"))
const UiSelectLeftIndicatorSource = sourceLoader(() => import("../radix/select/left-indicator.tsx?raw"))
const UiSelectClearButtonSource = sourceLoader(() => import("../radix/select/clear-button.tsx?raw"))
const UiSelectCustomChevronsSource = sourceLoader(() => import("../radix/select/custom-chevrons.tsx?raw"))
const UiSelectOverlappingDotsSource = sourceLoader(() => import("../radix/select/overlapping-dots.tsx?raw"))
const UiSelectGroupedSeparatorsSource = sourceLoader(() => import("../radix/select/grouped-separators.tsx?raw"))
const UiSelectCountryFlagsSource = sourceLoader(() => import("../radix/select/country-flags.tsx?raw"))
const UiSelectStatusFilterSource = sourceLoader(() => import("../radix/select/status-filter.tsx?raw"))
const UiSelectOptionDescriptionsSource = sourceLoader(() => import("../radix/select/option-descriptions.tsx?raw"))
const UiSelectTimezoneOffsetsSource = sourceLoader(() => import("../radix/select/timezone-offsets.tsx?raw"))
const UiSelectTeamAssignmentSource = sourceLoader(() => import("../radix/select/team-assignment.tsx?raw"))
const UiSelectPriorityBadgesSource = sourceLoader(() => import("../radix/select/priority-badges.tsx?raw"))
const UiSelectFontPreviewSource = sourceLoader(() => import("../radix/select/font-preview.tsx?raw"))
const UiSelectCategoryIconsSource = sourceLoader(() => import("../radix/select/category-icons.tsx?raw"))
const UiSelectSizeScaleSource = sourceLoader(() => import("../radix/select/size-scale.tsx?raw"))
const UiSeparatorSource = sourceLoader(() => import("../radix/separator/default.tsx?raw"))
const UiSeparatorHorizontalSource = sourceLoader(() => import("../radix/separator/horizontal.tsx?raw"))
const UiSeparatorVerticalSource = sourceLoader(() => import("../radix/separator/vertical.tsx?raw"))
const UiSeparatorGroupedMenuItemsSource = sourceLoader(() => import("../radix/separator/grouped-menu-items.tsx?raw"))
const UiSeparatorListRowsSource = sourceLoader(() => import("../radix/separator/list-rows.tsx?raw"))
const UiSeparatorCenteredLabelSource = sourceLoader(() => import("../radix/separator/centered-label.tsx?raw"))
const UiSeparatorOrderSummarySource = sourceLoader(() => import("../radix/separator/order-summary.tsx?raw"))
const UiSheetSource = sourceLoader(() => import("../radix/sheet/default.tsx?raw"))
const UiSheetProfileEditorSource = sourceLoader(() => import("../radix/sheet/profile-editor.tsx?raw"))
const UiSheetNoCloseButtonSource = sourceLoader(() => import("../radix/sheet/no-close-button.tsx?raw"))
const UiSheetAnySideSource = sourceLoader(() => import("../radix/sheet/any-side.tsx?raw"))
const UiSheetScrollableContentSource = sourceLoader(() => import("../radix/sheet/scrollable-content.tsx?raw"))
const UiSidebarSource = sourceLoader(() => import("../radix/sidebar/default.tsx?raw"))
const UiSidebarWorkspaceSwitcherSource = sourceLoader(() => import("../radix/sidebar/workspace-switcher.tsx?raw"))
const UiSidebarIconRailSource = sourceLoader(() => import("../radix/sidebar/icon-rail.tsx?raw"))
const UiSidebarDocsNavigationSource = sourceLoader(() => import("../radix/sidebar/docs-navigation.tsx?raw"))
const UiSidebarInspectorPanelSource = sourceLoader(() => import("../radix/sidebar/inspector-panel.tsx?raw"))
const UiSidebarFilterLoadingSource = sourceLoader(() => import("../radix/sidebar/filter-loading.tsx?raw"))
const UiSkeletonSource = sourceLoader(() => import("../radix/skeleton/default.tsx?raw"))
const UiSkeletonAvatarInfoSource = sourceLoader(() => import("../radix/skeleton/avatar-info.tsx?raw"))
const UiSkeletonCardSource = sourceLoader(() => import("../radix/skeleton/card.tsx?raw"))
const UiSkeletonTextParagraphsSource = sourceLoader(() => import("../radix/skeleton/text-paragraphs.tsx?raw"))
const UiSkeletonFormSource = sourceLoader(() => import("../radix/skeleton/form.tsx?raw"))
const UiSkeletonDataTableSource = sourceLoader(() => import("../radix/skeleton/data-table.tsx?raw"))
const UiSkeletonStatsRowSource = sourceLoader(() => import("../radix/skeleton/stats-row.tsx?raw"))
const UiSkeletonListWithActionsSource = sourceLoader(() => import("../radix/skeleton/list-with-actions.tsx?raw"))
const UiSkeletonCardGridSource = sourceLoader(() => import("../radix/skeleton/card-grid.tsx?raw"))
const UiSkeletonProfilePageSource = sourceLoader(() => import("../radix/skeleton/profile-page.tsx?raw"))
const UiSkeletonChatMessagesSource = sourceLoader(() => import("../radix/skeleton/chat-messages.tsx?raw"))
const UiSliderSource = sourceLoader(() => import("../radix/slider/default.tsx?raw"))
const UiSliderStandardSource = sourceLoader(() => import("../radix/slider/standard.tsx?raw"))
const UiSliderDisabledSource = sourceLoader(() => import("../radix/slider/disabled.tsx?raw"))
const UiSliderMultipleThumbsSource = sourceLoader(() => import("../radix/slider/multiple-thumbs.tsx?raw"))
const UiSliderVerticalSource = sourceLoader(() => import("../radix/slider/vertical.tsx?raw"))
const UiSliderControlledValueSource = sourceLoader(() => import("../radix/slider/controlled-value.tsx?raw"))
const UiSliderRangeSource = sourceLoader(() => import("../radix/slider/range.tsx?raw"))
const UiSliderNumberInputSource = sourceLoader(() => import("../radix/slider/number-input.tsx?raw"))
const UiSliderColorTemperatureSource = sourceLoader(() => import("../radix/slider/color-temperature.tsx?raw"))
const UiSliderReferenceLabelsSource = sourceLoader(() => import("../radix/slider/reference-labels.tsx?raw"))
const UiSliderTickMarksSource = sourceLoader(() => import("../radix/slider/tick-marks.tsx?raw"))
const UiSliderValueTooltipSource = sourceLoader(() => import("../radix/slider/value-tooltip.tsx?raw"))
const UiSliderEmojiRatingSource = sourceLoader(() => import("../radix/slider/emoji-rating.tsx?raw"))
const UiSonnerSource = sourceLoader(() => import("../radix/sonner/default.tsx?raw"))
const UiSonnerStandardSource = sourceLoader(() => import("../radix/sonner/standard.tsx?raw"))
const UiSonnerWithDescriptionSource = sourceLoader(() => import("../radix/sonner/with-description.tsx?raw"))
const UiSonnerPositionsSource = sourceLoader(() => import("../radix/sonner/positions.tsx?raw"))
const UiSonnerVariantIconsSource = sourceLoader(() => import("../radix/sonner/variant-icons.tsx?raw"))
const UiSonnerDurationsSource = sourceLoader(() => import("../radix/sonner/durations.tsx?raw"))
const UiSonnerActionButtonSource = sourceLoader(() => import("../radix/sonner/action-button.tsx?raw"))
const UiSonnerPromiseSource = sourceLoader(() => import("../radix/sonner/promise.tsx?raw"))
const UiSonnerActionCancelSource = sourceLoader(() => import("../radix/sonner/action-cancel.tsx?raw"))
const UiSonnerRichContentSource = sourceLoader(() => import("../radix/sonner/rich-content.tsx?raw"))
const UiSonnerUploadProgressSource = sourceLoader(() => import("../radix/sonner/upload-progress.tsx?raw"))
const UiSonnerStatusAlertSource = sourceLoader(() => import("../radix/sonner/status-alert.tsx?raw"))
const UiSonnerAccentBorderSource = sourceLoader(() => import("../radix/sonner/accent-border.tsx?raw"))
const UiSonnerInvertSuccessSource = sourceLoader(() => import("../radix/sonner/invert-success.tsx?raw"))
const UiSonnerInvertErrorSource = sourceLoader(() => import("../radix/sonner/invert-error.tsx?raw"))
const UiSonnerInvertInfoSource = sourceLoader(() => import("../radix/sonner/invert-info.tsx?raw"))
const UiSonnerInvertWarningSource = sourceLoader(() => import("../radix/sonner/invert-warning.tsx?raw"))
const UiSonnerInvertAvatarGroupSource = sourceLoader(() => import("../radix/sonner/invert-avatar-group.tsx?raw"))
const UiSonnerCloseTopRightSource = sourceLoader(() => import("../radix/sonner/close-top-right.tsx?raw"))
const UiSonnerCustomIconSource = sourceLoader(() => import("../radix/sonner/custom-icon.tsx?raw"))
const UiSonnerIntegrationSource = sourceLoader(() => import("../radix/sonner/integration.tsx?raw"))
const UiSonnerUpdatableSource = sourceLoader(() => import("../radix/sonner/updatable.tsx?raw"))
const UiSpinnerSource = sourceLoader(() => import("../radix/spinner/default.tsx?raw"))
const UiSpinnerStandardSource = sourceLoader(() => import("../radix/spinner/standard.tsx?raw"))
const UiSpinnerInButtonsSource = sourceLoader(() => import("../radix/spinner/in-buttons.tsx?raw"))
const UiSpinnerInBadgesSource = sourceLoader(() => import("../radix/spinner/in-badges.tsx?raw"))
const UiSpinnerInInputGroupSource = sourceLoader(() => import("../radix/spinner/in-input-group.tsx?raw"))
const UiSpinnerInEmptyStateSource = sourceLoader(() => import("../radix/spinner/in-empty-state.tsx?raw"))
const UiSpinnerPendingButtonsSource = sourceLoader(() => import("../radix/spinner/pending-buttons.tsx?raw"))
const UiSpinnerOverlayWithCaptionSource = sourceLoader(() => import("../radix/spinner/overlay-with-caption.tsx?raw"))
const UiSpinnerFullPageSource = sourceLoader(() => import("../radix/spinner/full-page.tsx?raw"))
const UiSpinnerInlineTextSource = sourceLoader(() => import("../radix/spinner/inline-text.tsx?raw"))
const UiSpinnerLoadingDotsSource = sourceLoader(() => import("../radix/spinner/loading-dots.tsx?raw"))
const UiSpinnerCardOverlaySource = sourceLoader(() => import("../radix/spinner/card-overlay.tsx?raw"))
const UiSpinnerColorVariantsSource = sourceLoader(() => import("../radix/spinner/color-variants.tsx?raw"))
const UiSwitchSource = sourceLoader(() => import("../radix/switch/default.tsx?raw"))
const UiSwitchStandardSource = sourceLoader(() => import("../radix/switch/standard.tsx?raw"))
const UiSwitchWithDescriptionSource = sourceLoader(() => import("../radix/switch/with-description.tsx?raw"))
const UiSwitchDisabledSource = sourceLoader(() => import("../radix/switch/disabled.tsx?raw"))
const UiSwitchSizesSource = sourceLoader(() => import("../radix/switch/sizes.tsx?raw"))
const UiSwitchSwitchGroupSource = sourceLoader(() => import("../radix/switch/switch-group.tsx?raw"))
const UiSwitchCardSeparatorsSource = sourceLoader(() => import("../radix/switch/card-separators.tsx?raw"))
const UiSwitchCardWithIconsSource = sourceLoader(() => import("../radix/switch/card-with-icons.tsx?raw"))
const UiSwitchInFrameSource = sourceLoader(() => import("../radix/switch/in-frame.tsx?raw"))
const UiSwitchTooltipInfoSource = sourceLoader(() => import("../radix/switch/tooltip-info.tsx?raw"))
const UiSwitchWithBadgesSource = sourceLoader(() => import("../radix/switch/with-badges.tsx?raw"))
const UiSwitchColoredSource = sourceLoader(() => import("../radix/switch/colored.tsx?raw"))
const UiSwitchDestructiveConfirmSource = sourceLoader(() => import("../radix/switch/destructive-confirm.tsx?raw"))
const UiSwitchCompactTableSource = sourceLoader(() => import("../radix/switch/compact-table.tsx?raw"))
const UiSwitchCardGridSource = sourceLoader(() => import("../radix/switch/card-grid.tsx?raw"))
const UiTableSource = sourceLoader(() => import("../radix/table/default.tsx?raw"))
const UiTableStandardSource = sourceLoader(() => import("../radix/table/standard.tsx?raw"))
const UiTableWithFooterSource = sourceLoader(() => import("../radix/table/with-footer.tsx?raw"))
const UiTableStatusBadgesSource = sourceLoader(() => import("../radix/table/status-badges.tsx?raw"))
const UiTableActionsColumnSource = sourceLoader(() => import("../radix/table/actions-column.tsx?raw"))
const UiTableInteractiveRowsSource = sourceLoader(() => import("../radix/table/interactive-rows.tsx?raw"))
const UiTableTeamMembersSource = sourceLoader(() => import("../radix/table/team-members.tsx?raw"))
const UiTableOrdersSource = sourceLoader(() => import("../radix/table/orders.tsx?raw"))
const UiTableProjectsSource = sourceLoader(() => import("../radix/table/projects.tsx?raw"))
const UiTableActivityLogSource = sourceLoader(() => import("../radix/table/activity-log.tsx?raw"))
const UiTableSubscriptionsSource = sourceLoader(() => import("../radix/table/subscriptions.tsx?raw"))
const UiTableInventorySource = sourceLoader(() => import("../radix/table/inventory.tsx?raw"))
const UiTableApiKeysSource = sourceLoader(() => import("../radix/table/api-keys.tsx?raw"))
const UiTableFileManagerSource = sourceLoader(() => import("../radix/table/file-manager.tsx?raw"))
const UiTableIssuesSource = sourceLoader(() => import("../radix/table/issues.tsx?raw"))
const UiTableLeaderboardSource = sourceLoader(() => import("../radix/table/leaderboard.tsx?raw"))
const UiTableEmployeeProfileSource = sourceLoader(() => import("../radix/table/employee-profile.tsx?raw"))
const UiTableServerConfigSource = sourceLoader(() => import("../radix/table/server-config.tsx?raw"))
const UiTabsSource = sourceLoader(() => import("../radix/tabs/default.tsx?raw"))
const UiTabsStandardSource = sourceLoader(() => import("../radix/tabs/standard.tsx?raw"))
const UiTabsLineVariantSource = sourceLoader(() => import("../radix/tabs/line-variant.tsx?raw"))
const UiTabsVerticalSource = sourceLoader(() => import("../radix/tabs/vertical.tsx?raw"))
const UiTabsVerticalLineSource = sourceLoader(() => import("../radix/tabs/vertical-line.tsx?raw"))
const UiTabsIconsSource = sourceLoader(() => import("../radix/tabs/icons.tsx?raw"))
const UiTabsFullWidthIconsSource = sourceLoader(() => import("../radix/tabs/full-width-icons.tsx?raw"))
const UiTabsBadgeCountsSource = sourceLoader(() => import("../radix/tabs/badge-counts.tsx?raw"))
const UiTabsSideListIconsSource = sourceLoader(() => import("../radix/tabs/side-list-icons.tsx?raw"))
const UiTabsSegmentedControlSource = sourceLoader(() => import("../radix/tabs/segmented-control.tsx?raw"))
const UiTextareaSource = sourceLoader(() => import("../radix/textarea/default.tsx?raw"))
const UiTextareaStandardSource = sourceLoader(() => import("../radix/textarea/standard.tsx?raw"))
const UiTextareaInvalidSource = sourceLoader(() => import("../radix/textarea/invalid.tsx?raw"))
const UiTextareaWithLabelSource = sourceLoader(() => import("../radix/textarea/with-label.tsx?raw"))
const UiTextareaWithDescriptionSource = sourceLoader(() => import("../radix/textarea/with-description.tsx?raw"))
const UiTextareaDisabledSource = sourceLoader(() => import("../radix/textarea/disabled.tsx?raw"))
const UiTextareaAutoResizeCounterSource = sourceLoader(() => import("../radix/textarea/auto-resize-counter.tsx?raw"))
const UiToggleSource = sourceLoader(() => import("../radix/toggle/default.tsx?raw"))
const UiToggleStandardSource = sourceLoader(() => import("../radix/toggle/standard.tsx?raw"))
const UiToggleOutlineSource = sourceLoader(() => import("../radix/toggle/outline.tsx?raw"))
const UiToggleTextSizesSource = sourceLoader(() => import("../radix/toggle/text-sizes.tsx?raw"))
const UiToggleButtonComparisonSource = sourceLoader(() => import("../radix/toggle/button-comparison.tsx?raw"))
const UiToggleDisabledTextSource = sourceLoader(() => import("../radix/toggle/disabled-text.tsx?raw"))
const UiToggleIconLabelSource = sourceLoader(() => import("../radix/toggle/icon-label.tsx?raw"))
const UiToggleCountBadgeSource = sourceLoader(() => import("../radix/toggle/count-badge.tsx?raw"))
const UiToggleIconSizesSource = sourceLoader(() => import("../radix/toggle/icon-sizes.tsx?raw"))
const UiToggleIconSwapSource = sourceLoader(() => import("../radix/toggle/icon-swap.tsx?raw"))
const UiToggleLabelSwapSource = sourceLoader(() => import("../radix/toggle/label-swap.tsx?raw"))
const UiToggleReactionsSource = sourceLoader(() => import("../radix/toggle/reactions.tsx?raw"))
const UiToggleTooltipSource = sourceLoader(() => import("../radix/toggle/tooltip.tsx?raw"))
const UiToggleDisabledIconsSource = sourceLoader(() => import("../radix/toggle/disabled-icons.tsx?raw"))
const UiToggleMuteButtonSource = sourceLoader(() => import("../radix/toggle/mute-button.tsx?raw"))
const UiToggleGroupSource = sourceLoader(() => import("../radix/toggle-group/default.tsx?raw"))
const UiToggleGroupStandardSource = sourceLoader(() => import("../radix/toggle-group/standard.tsx?raw"))
const UiToggleGroupOutlineSource = sourceLoader(() => import("../radix/toggle-group/outline.tsx?raw"))
const UiToggleGroupSizesSource = sourceLoader(() => import("../radix/toggle-group/sizes.tsx?raw"))
const UiToggleGroupCustomSpacingSource = sourceLoader(() => import("../radix/toggle-group/custom-spacing.tsx?raw"))
const UiToggleGroupFilterControlSource = sourceLoader(() => import("../radix/toggle-group/filter-control.tsx?raw"))
const UiToggleGroupVerticalSource = sourceLoader(() => import("../radix/toggle-group/vertical.tsx?raw"))
const UiToggleGroupTextAlignmentSource = sourceLoader(() => import("../radix/toggle-group/text-alignment.tsx?raw"))
const UiToggleGroupViewModeSource = sourceLoader(() => import("../radix/toggle-group/view-mode.tsx?raw"))
const UiToggleGroupVerticalSettingsSource = sourceLoader(() => import("../radix/toggle-group/vertical-settings.tsx?raw"))
const UiToggleGroupColorThemeSource = sourceLoader(() => import("../radix/toggle-group/color-theme.tsx?raw"))
const UiToggleGroupFontSizeSource = sourceLoader(() => import("../radix/toggle-group/font-size.tsx?raw"))
const UiToggleGroupTimeRangeSource = sourceLoader(() => import("../radix/toggle-group/time-range.tsx?raw"))
const UiToggleGroupNotificationChannelsSource = sourceLoader(() => import("../radix/toggle-group/notification-channels.tsx?raw"))
const UiToggleGroupLayoutColumnsSource = sourceLoader(() => import("../radix/toggle-group/layout-columns.tsx?raw"))
const UiToggleGroupSortDirectionSource = sourceLoader(() => import("../radix/toggle-group/sort-direction.tsx?raw"))
const UiToggleGroupPricingTierSource = sourceLoader(() => import("../radix/toggle-group/pricing-tier.tsx?raw"))
const UiTooltipSource = sourceLoader(() => import("../radix/tooltip/default.tsx?raw"))
const UiTooltipStandardSource = sourceLoader(() => import("../radix/tooltip/standard.tsx?raw"))
const UiTooltipPlacementsSource = sourceLoader(() => import("../radix/tooltip/placements.tsx?raw"))
const UiTooltipIconTriggerSource = sourceLoader(() => import("../radix/tooltip/icon-trigger.tsx?raw"))
const UiTooltipKeyboardShortcutSource = sourceLoader(() => import("../radix/tooltip/keyboard-shortcut.tsx?raw"))
const UiTooltipBellWithCountSource = sourceLoader(() => import("../radix/tooltip/bell-with-count.tsx?raw"))
const UiTooltipStatusBadgesSource = sourceLoader(() => import("../radix/tooltip/status-badges.tsx?raw"))
const UiTooltipVerifiedDomainSource = sourceLoader(() => import("../radix/tooltip/verified-domain.tsx?raw"))
const UiTooltipToolbarActionsSource = sourceLoader(() => import("../radix/tooltip/toolbar-actions.tsx?raw"))
const UiTooltipWarningSource = sourceLoader(() => import("../radix/tooltip/warning.tsx?raw"))
const UiTooltipUpgradePromptSource = sourceLoader(() => import("../radix/tooltip/upgrade-prompt.tsx?raw"))
const UiTooltipAvatarRoleBadgeSource = sourceLoader(() => import("../radix/tooltip/avatar-role-badge.tsx?raw"))
const UiTooltipDisabledButtonSource = sourceLoader(() => import("../radix/tooltip/disabled-button.tsx?raw"))
const UiTooltipOnlineStatusSource = sourceLoader(() => import("../radix/tooltip/online-status.tsx?raw"))
const UiTooltipFileInfoSource = sourceLoader(() => import("../radix/tooltip/file-info.tsx?raw"))
const UiTooltipLabelBadgesSource = sourceLoader(() => import("../radix/tooltip/label-badges.tsx?raw"))
const UiTooltipUnreadBellSource = sourceLoader(() => import("../radix/tooltip/unread-bell.tsx?raw"))
const UiTraceSource = sourceLoader(() => import("../radix/trace/default.tsx?raw"))
const UiTraceAgentStepsSource = sourceLoader(() => import("../radix/trace/agent-steps.tsx?raw"))
const UiTraceStreamingRunSource = sourceLoader(() => import("../radix/trace/streaming-run.tsx?raw"))
const UiTraceChatTurnSource = sourceLoader(() => import("../radix/trace/chat-turn.tsx?raw"))
const UiTraceSubagentsSource = sourceLoader(() => import("../radix/trace/subagents.tsx?raw"))
const UiTraceChangeApprovalSource = sourceLoader(() => import("../radix/trace/change-approval.tsx?raw"))
const UiTraceCitedSourcesSource = sourceLoader(() => import("../radix/trace/cited-sources.tsx?raw"))
const UiTraceSupportCopilotSource = sourceLoader(() => import("../radix/trace/support-copilot.tsx?raw"))
const UiTraceInstallSummarySource = sourceLoader(() => import("../radix/trace/install-summary.tsx?raw"))
const UiTraceCiPipelineSource = sourceLoader(() => import("../radix/trace/ci-pipeline.tsx?raw"))
const UiTraceRequestSpansSource = sourceLoader(() => import("../radix/trace/request-spans.tsx?raw"))
const UiTraceErrorBreadcrumbsSource = sourceLoader(() => import("../radix/trace/error-breadcrumbs.tsx?raw"))
const UiTraceQueryPlanSource = sourceLoader(() => import("../radix/trace/query-plan.tsx?raw"))
const UiTraceDataPipelineSource = sourceLoader(() => import("../radix/trace/data-pipeline.tsx?raw"))
const UiTraceWebhookRetriesSource = sourceLoader(() => import("../radix/trace/webhook-retries.tsx?raw"))
const UiTraceCsvImportSource = sourceLoader(() => import("../radix/trace/csv-import.tsx?raw"))
const UiTraceSecurityAuditSource = sourceLoader(() => import("../radix/trace/security-audit.tsx?raw"))
const UiTraceReviewFindingsSource = sourceLoader(() => import("../radix/trace/review-findings.tsx?raw"))
const UiTraceEvalResultsSource = sourceLoader(() => import("../radix/trace/eval-results.tsx?raw"))
const UiTraceAccessDecisionSource = sourceLoader(() => import("../radix/trace/access-decision.tsx?raw"))
const UiTraceIdentityReviewSource = sourceLoader(() => import("../radix/trace/identity-review.tsx?raw"))
const UiTraceDomainSetupSource = sourceLoader(() => import("../radix/trace/domain-setup.tsx?raw"))
const UiTraceTranscodeSource = sourceLoader(() => import("../radix/trace/transcode.tsx?raw"))

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
  Component: React.ComponentType
  source: string | SourceLoader
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
