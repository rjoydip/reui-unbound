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
import RadixBadgePrimaryPreview from "../radix/badge/primary"
import RadixBadgeSecondaryPreview from "../radix/badge/secondary"
import RadixBadgeDestructivePreview from "../radix/badge/destructive"
import RadixBadgeSuccessPreview from "../radix/badge/success"
import RadixBadgeInfoPreview from "../radix/badge/info"
import RadixBadgeWarningPreview from "../radix/badge/warning"
import RadixBadgeOutlinePreview from "../radix/badge/outline"
import RadixBadgePrimaryOutlinePreview from "../radix/badge/primary-outline"
import RadixBadgeDestructiveOutlinePreview from "../radix/badge/destructive-outline"
import RadixBadgeInfoOutlinePreview from "../radix/badge/info-outline"
import RadixBadgeSuccessOutlinePreview from "../radix/badge/success-outline"
import RadixBadgeWarningOutlinePreview from "../radix/badge/warning-outline"
import RadixBadgePrimaryLightPreview from "../radix/badge/primary-light"
import RadixBadgeDestructiveLightPreview from "../radix/badge/destructive-light"
import RadixBadgeSuccessLightPreview from "../radix/badge/success-light"
import RadixBadgeInfoLightPreview from "../radix/badge/info-light"
import RadixBadgeWarningLightPreview from "../radix/badge/warning-light"
import RadixBadgeSizesPreview from "../radix/badge/sizes"
import RadixBadgeFullRadiusPreview from "../radix/badge/full-radius"
import RadixBadgeWithIconPreview from "../radix/badge/with-icon"
import RadixBadgeDismissButtonPreview from "../radix/badge/dismiss-button"
import RadixBadgeStatusDotPreview from "../radix/badge/status-dot"
import RadixBadgeAsLinkPreview from "../radix/badge/as-link"
import RadixBadgeWithAvatarPreview from "../radix/badge/with-avatar"
import RadixBadgeWithFlagPreview from "../radix/badge/with-flag"
import RadixCascaderPreview from "../radix/cascader/default"
import RadixCascaderAttributePickerPreview from "../radix/cascader/attribute-picker"
import RadixCascaderMultiSelectCapPreview from "../radix/cascader/multi-select-cap"
import RadixCascaderDeepSearchPreview from "../radix/cascader/deep-search"
import RadixCascaderFooterFlyoutPreview from "../radix/cascader/footer-flyout"
import RadixCascaderAvatarRowsPreview from "../radix/cascader/avatar-rows"
import RadixCascaderPathFormattingPreview from "../radix/cascader/path-formatting"
import RadixCascaderEmbeddedPanelPreview from "../radix/cascader/embedded-panel"
import RadixCascaderFlatDataPreview from "../radix/cascader/flat-data"
import RadixCascaderControlledStatePreview from "../radix/cascader/controlled-state"
import RadixCascaderTranslatedLabelsPreview from "../radix/cascader/translated-labels"
import RadixCascaderTwoLineRowsPreview from "../radix/cascader/two-line-rows"
import RadixCascaderNativeFormFieldPreview from "../radix/cascader/native-form-field"
import RadixCascaderColumnsModePreview from "../radix/cascader/columns-mode"
import RadixCascaderTreeModePreview from "../radix/cascader/tree-mode"
import RadixCascaderAsyncLoadingPreview from "../radix/cascader/async-loading"
import RadixCascaderVirtualizedListPreview from "../radix/cascader/virtualized-list"
import RadixCascaderRemovableChipsPreview from "../radix/cascader/removable-chips"
import RadixCascaderTreeMultiSelectPreview from "../radix/cascader/tree-multi-select"
import RadixCascaderColorDotsPreview from "../radix/cascader/color-dots"
import RadixCascaderInheritedColorsPreview from "../radix/cascader/inherited-colors"
import RadixCascaderGlobalSearchPreview from "../radix/cascader/global-search"
import RadixCodeBlockPreview from "../radix/code-block/default"
import CodeBlockStandardPreview from "../radix/code-block/standard"
import CodeBlockPinnedCopyPreview from "../radix/code-block/pinned-copy"
import CodeBlockStreamingAgentPreview from "../radix/code-block/streaming-agent"
import CodeBlockAiChatPreview from "../radix/code-block/ai-chat"
import CodeBlockDiffSummaryPreview from "../radix/code-block/diff-summary"
import CodeBlockTransformerDiffPreview from "../radix/code-block/transformer-diff"
import CodeBlockHighlightsPreview from "../radix/code-block/highlights"
import CodeBlockFocusWalkthroughPreview from "../radix/code-block/focus-walkthrough"
import CodeBlockTerminalOutputPreview from "../radix/code-block/terminal-output"
import CodeBlockLongFilePreview from "../radix/code-block/long-file"
import CodeBlockDiagnosticsActionsPreview from "../radix/code-block/diagnostics-actions"
import CodeBlockLineSelectionPreview from "../radix/code-block/line-selection"
import CodeBlockSearchInFilePreview from "../radix/code-block/search-in-file"
import CodeBlockFileTabsPreview from "../radix/code-block/file-tabs"
import CodeBlockPreHighlightedLinesPreview from "../radix/code-block/pre-highlighted-lines"
import CodeBlockBeforeAfterPreview from "../radix/code-block/before-after"
import CodeBlockSoftWrapPreview from "../radix/code-block/soft-wrap"
import CodeBlockUnifiedPatchPreview from "../radix/code-block/unified-patch"
import CodeBlockDesignTokenThemePreview from "../radix/code-block/design-token-theme"
import CodeBlockAlwaysDarkPreview from "../radix/code-block/always-dark"
import CodeBlockDarkTerminalPreview from "../radix/code-block/dark-terminal"
import CodeBlockAcceptRejectPreview from "../radix/code-block/accept-reject"
import CodeBlockCodeFoldingPreview from "../radix/code-block/code-folding"
import CodeBlockFixWithAiPreview from "../radix/code-block/fix-with-ai"
import CodeBlockReferenceLinesPreview from "../radix/code-block/reference-lines"
import CodeBlockExternalScrollPreview from "../radix/code-block/external-scroll"
import CodeBlockAnsiTerminalPreview from "../radix/code-block/ansi-terminal"
import RadixColorPickerPreview from "../radix/color-picker/default"
import RadixColorPickerInlinePanelPreview from "../radix/color-picker/inline-panel"
import RadixColorPickerPopoverPreview from "../radix/color-picker/popover"
import RadixColorPickerColorInputPreview from "../radix/color-picker/color-input"
import RadixColorPickerOpacityPreview from "../radix/color-picker/opacity"
import RadixColorPickerPresetSwatchesPreview from "../radix/color-picker/preset-swatches"
import RadixColorPickerOklchTokenPreview from "../radix/color-picker/oklch-token"
import RadixColorPickerFormatConverterPreview from "../radix/color-picker/format-converter"
import RadixColorPickerHueWheelPreview from "../radix/color-picker/hue-wheel"
import RadixColorPickerRecentColorsPreview from "../radix/color-picker/recent-colors"
import RadixColorPickerTextHighlightPreview from "../radix/color-picker/text-highlight"
import RadixColorPickerChannelSlidersPreview from "../radix/color-picker/channel-sliders"
import RadixColorPickerDesignInspectorPreview from "../radix/color-picker/design-inspector"
import RadixColorPickerContrastCheckerPreview from "../radix/color-picker/contrast-checker"
import RadixColorPickerBrandScalePreview from "../radix/color-picker/brand-scale"
import RadixColorPickerFormValidationPreview from "../radix/color-picker/form-validation"
import RadixDataGridPreview from "../radix/data-grid/default"
import RadixDataGridPaginationPreview from "../radix/data-grid/pagination"
import RadixDataGridCellBordersPreview from "../radix/data-grid/cell-borders"
import RadixDataGridDenseLayoutPreview from "../radix/data-grid/dense-layout"
import RadixDataGridBorderlessPreview from "../radix/data-grid/borderless"
import RadixDataGridStripedRowsPreview from "../radix/data-grid/striped-rows"
import RadixDataGridAutoWidthPreview from "../radix/data-grid/auto-width"
import RadixDataGridRowSelectionPreview from "../radix/data-grid/row-selection"
import RadixDataGridExpandableRowsPreview from "../radix/data-grid/expandable-rows"
import RadixDataGridSubTablePreview from "../radix/data-grid/sub-table"
import RadixDataGridColumnIconsPreview from "../radix/data-grid/column-icons"
import RadixDataGridSortableColumnsPreview from "../radix/data-grid/sortable-columns"
import RadixDataGridMovableColumnsPreview from "../radix/data-grid/movable-columns"
import RadixDataGridDraggableColumnsPreview from "../radix/data-grid/draggable-columns"
import RadixDataGridDraggableRowsPreview from "../radix/data-grid/draggable-rows"
import RadixDataGridColumnResizingPreview from "../radix/data-grid/column-resizing"
import RadixDataGridPinnableColumnsPreview from "../radix/data-grid/pinnable-columns"
import RadixDataGridStickyHeaderPreview from "../radix/data-grid/sticky-header"
import RadixDataGridColumnControlsPreview from "../radix/data-grid/column-controls"
import RadixDataGridCardContainerPreview from "../radix/data-grid/card-container"
import RadixDataGridColumnVisibilityPreview from "../radix/data-grid/column-visibility"
import RadixDataGridLoadingSkeletonPreview from "../radix/data-grid/loading-skeleton"
import RadixDataGridCrudAdminPreview from "../radix/data-grid/crud-admin"
import RadixDataGridCrudInFramePreview from "../radix/data-grid/crud-in-frame"
import RadixDataGridTotalsFooterPreview from "../radix/data-grid/totals-footer"
import RadixDataGridSummaryStatsFooterPreview from "../radix/data-grid/summary-stats-footer"
import RadixDataGridAggregateFooterPreview from "../radix/data-grid/aggregate-footer"
import RadixDataGridLocalInfiniteScrollPreview from "../radix/data-grid/local-infinite-scroll"
import RadixDataGridRemoteInfiniteScrollPreview from "../radix/data-grid/remote-infinite-scroll"
import RadixDataGridRowPinningPreview from "../radix/data-grid/row-pinning"
import RadixDataGridTreeRowsPreview from "../radix/data-grid/tree-rows"
import RadixDataGridSpreadsheetEditingPreview from "../radix/data-grid/spreadsheet-editing"
import RadixDataGridColumnVirtualizationPreview from "../radix/data-grid/column-virtualization"
import RadixDataGridLocalizedLabelsPreview from "../radix/data-grid/localized-labels"
import RadixDataGridServerSidePaginationPreview from "../radix/data-grid/server-side-pagination"
import RadixDateSelectorPreview from "../radix/date-selector/default"
import RadixDateSelectorStandardInlinePreview from "../radix/date-selector/standard-inline"
import RadixDateSelectorPopoverPreview from "../radix/date-selector/popover"
import RadixDateSelectorDialogPreview from "../radix/date-selector/dialog"
import RadixDateSelectorLanguageMenuPreview from "../radix/date-selector/language-menu"
import RadixEmojiPickerPreview from "../radix/emoji-picker/default"
import RadixEmojiPickerInlinePreview from "../radix/emoji-picker/inline"
import RadixEmojiPickerChatComposerPreview from "../radix/emoji-picker/chat-composer"
import RadixEmojiPickerMessageReactionsPreview from "../radix/emoji-picker/message-reactions"
import RadixEmojiPickerPageIconPreview from "../radix/emoji-picker/page-icon"
import RadixEmojiPickerCustomTeamEmojiPreview from "../radix/emoji-picker/custom-team-emoji"
import RadixEmojiPickerShortcodeSuggestionsPreview from "../radix/emoji-picker/shortcode-suggestions"
import RadixEmojiPickerWorkplaceSafeSetPreview from "../radix/emoji-picker/workplace-safe-set"
import RadixEmojiPickerLocalizedLabelsPreview from "../radix/emoji-picker/localized-labels"
import RadixEventCalendarPreview from "../radix/event-calendar/default"
import RadixEventCalendarAllViewsPreview from "../radix/event-calendar/all-views"
import RadixEventCalendarRoomBookingsPreview from "../radix/event-calendar/room-bookings"
import RadixEventCalendarEventFormDialogPreview from "../radix/event-calendar/event-form-dialog"
import RadixEventCalendarCustomEventChipsPreview from "../radix/event-calendar/custom-event-chips"
import RadixEventCalendarDragToBookPreview from "../radix/event-calendar/drag-to-book"
import RadixFileTypePreview from "../radix/file-type/default"
import RadixFileTypeCommonFormatsPreview from "../radix/file-type/common-formats"
import RadixFileTypeVariantsPreview from "../radix/file-type/variants"
import RadixFileTypeSizesPreview from "../radix/file-type/sizes"
import RadixFileTypeFamilyGlyphsPreview from "../radix/file-type/family-glyphs"
import RadixFileTypeAllFormatsPreview from "../radix/file-type/all-formats"
import RadixFileTypeFileBrowserPreview from "../radix/file-type/file-browser"
import RadixFileTypeAttachmentListPreview from "../radix/file-type/attachment-list"
import RadixFileTypeUploadQueuePreview from "../radix/file-type/upload-queue"
import RadixFileTypeResolveFromNamePreview from "../radix/file-type/resolve-from-name"
import RadixFileTypeCustomLabelsPreview from "../radix/file-type/custom-labels"
import RadixFileTypeCustomColorsPreview from "../radix/file-type/custom-colors"
import RadixFileTypeFormatPickerPreview from "../radix/file-type/format-picker"
import RadixFileTypeLockedStarredPreview from "../radix/file-type/locked-starred"
import RadixFileTypeRestyledLabelsPreview from "../radix/file-type/restyled-labels"
import RadixFileTypeDotfilesBuildNamesPreview from "../radix/file-type/dotfiles-build-names"
import RadixFiltersPreview from "../radix/filters/default"
import RadixFiltersFullFilterBarPreview from "../radix/filters/full-filter-bar"
import RadixFiltersNestedAttributesPreview from "../radix/filters/nested-attributes"
import RadixFiltersStatusBadgesPreview from "../radix/filters/status-badges"
import RadixFiltersAvatarsPagingPreview from "../radix/filters/avatars-paging"
import RadixFiltersDateEditorsPreview from "../radix/filters/date-editors"
import RadixFiltersSliderEditorPreview from "../radix/filters/slider-editor"
import RadixFiltersTableFilteringPreview from "../radix/filters/table-filtering"
import RadixFiltersChoiceControlsPreview from "../radix/filters/choice-controls"
import RadixFiltersTypedInputsPreview from "../radix/filters/typed-inputs"
import RadixFiltersPopoverBuilderPreview from "../radix/filters/popover-builder"
import RadixFiltersInlineBuilderPreview from "../radix/filters/inline-builder"
import RadixFiltersControlledTranslatedPreview from "../radix/filters/controlled-translated"
import RadixFramePreview from "../radix/frame/default"
import RadixFrameStandardPreview from "../radix/frame/standard"
import RadixFrameSeparatedPanelsPreview from "../radix/frame/separated-panels"
import RadixFrameStackedPanelsPreview from "../radix/frame/stacked-panels"
import RadixFrameStackedDensePreview from "../radix/frame/stacked-dense"
import RadixFrameCollapsiblePanelsPreview from "../radix/frame/collapsible-panels"
import RadixFrameGhostVariantPreview from "../radix/frame/ghost-variant"
import RadixFrameDenseLayoutPreview from "../radix/frame/dense-layout"
import RadixFrameStackedRowsPreview from "../radix/frame/stacked-rows"
import RadixFrameExtraSmallSpacingPreview from "../radix/frame/extra-small-spacing"
import RadixFrameSmallSpacingPreview from "../radix/frame/small-spacing"
import RadixFrameDefaultSpacingPreview from "../radix/frame/default-spacing"
import RadixFrameLargeSpacingPreview from "../radix/frame/large-spacing"
import RadixFrameSmallRadiusPreview from "../radix/frame/small-radius"
import RadixFrameMediumRadiusPreview from "../radix/frame/medium-radius"
import RadixFrameLargeRadiusPreview from "../radix/frame/large-radius"
import RadixFrameDefaultRadiusPreview from "../radix/frame/default-radius"
import RadixFrameExtraLargeRadiusPreview from "../radix/frame/extra-large-radius"
import RadixFrameContentOnlyPanelsPreview from "../radix/frame/content-only-panels"
import RadixFrameStackedContentOnlyPreview from "../radix/frame/stacked-content-only"
import RadixGanttPreview from "../radix/gantt/default"
import RadixGanttSettingsMenuPreview from "../radix/gantt/settings-menu"
import RadixGanttDragReorderPreview from "../radix/gantt/drag-reorder"
import RadixGanttQuarterRoadmapPreview from "../radix/gantt/quarter-roadmap"
import RadixGanttCapacityBoardPreview from "../radix/gantt/capacity-board"
import RadixGanttTaskTablePreview from "../radix/gantt/task-table"
import RadixGanttBaselineTrackingPreview from "../radix/gantt/baseline-tracking"
import RadixGanttDependenciesMilestonesPreview from "../radix/gantt/dependencies-milestones"
import RadixGanttWorkingDaysPreview from "../radix/gantt/working-days"
import RadixIconStackPreview from "../radix/icon-stack/default"
import RadixIconStackIsometricPreview from "../radix/icon-stack/isometric"
import RadixIconStackSizesPreview from "../radix/icon-stack/sizes"
import RadixIconStackColorsPreview from "../radix/icon-stack/colors"
import RadixIconStackBadgeOverlayPreview from "../radix/icon-stack/badge-overlay"
import RadixIconStackEmptyStatePreview from "../radix/icon-stack/empty-state"
import RadixIconStackItemMediaPreview from "../radix/icon-stack/item-media"
import RadixIconTilePreview from "../radix/icon-tile/default"
import RadixIconTileDefaultPreview from "../radix/icon-tile/default"
import RadixIconTileElevatedPreview from "../radix/icon-tile/elevated"
import RadixIconTileFramedPreview from "../radix/icon-tile/framed"
import RadixIconTileAllVariantsPreview from "../radix/icon-tile/all-variants"
import RadixIconTileSizesPreview from "../radix/icon-tile/sizes"
import RadixIconTileCircularPreview from "../radix/icon-tile/circular"
import RadixIconTileCustomSizingPreview from "../radix/icon-tile/custom-sizing"
import RadixIconTileColorTonesPreview from "../radix/icon-tile/color-tones"
import RadixIconTileTextContentPreview from "../radix/icon-tile/text-content"
import RadixIconTileListRowPreview from "../radix/icon-tile/list-row"
import RadixIconTileFeatureCardPreview from "../radix/icon-tile/feature-card"
import RadixIconTileEmptyStatePreview from "../radix/icon-tile/empty-state"
import RadixIconTileInteractivePreview from "../radix/icon-tile/interactive"
import RadixIconTileStatusOverlayPreview from "../radix/icon-tile/status-overlay"
import RadixIconTileSoftTonesPreview from "../radix/icon-tile/soft-tones"
import RadixIconTileSolidTonesPreview from "../radix/icon-tile/solid-tones"
import RadixIconTileBrandColorsPreview from "../radix/icon-tile/brand-colors"
import RadixKanbanPreview from "../radix/kanban/default"
import RadixKanbanPlaceholderOverlayPreview from "../radix/kanban/placeholder-overlay"
import RadixKanbanDynamicOverlayPreview from "../radix/kanban/dynamic-overlay"
import RadixKanbanFrameColumnsPreview from "../radix/kanban/frame-columns"
import RadixKanbanStackedFramePreview from "../radix/kanban/stacked-frame"
import RadixKanbanFeatureRoadmapPreview from "../radix/kanban/feature-roadmap"
import RadixKanbanPersistedMovesPreview from "../radix/kanban/persisted-moves"
import RadixNumberFieldPreview from "../radix/number-field/default"
import RadixNumberFieldDefaultSizePreview from "../radix/number-field/default-size"
import RadixNumberFieldSmallSizePreview from "../radix/number-field/small-size"
import RadixNumberFieldLargeSizePreview from "../radix/number-field/large-size"
import RadixNumberFieldButtonsOnRightPreview from "../radix/number-field/buttons-on-right"
import RadixNumberFieldSpinnerButtonsPreview from "../radix/number-field/spinner-buttons"
import RadixNumberFieldFormValidationPreview from "../radix/number-field/form-validation"
import RadixPhoneInputPreview from "../radix/phone-input/default"
import RadixPhoneInputStandardPreview from "../radix/phone-input/standard"
import RadixPhoneInputSmallPreview from "../radix/phone-input/small"
import RadixPhoneInputLargePreview from "../radix/phone-input/large"
import RadixPhoneInputDisabledPreview from "../radix/phone-input/disabled"
import RadixPhoneInputPresetValuePreview from "../radix/phone-input/preset-value"
import RadixPhoneInputErrorStatePreview from "../radix/phone-input/error-state"
import RadixPhoneInputDefaultCountryPreview from "../radix/phone-input/default-country"
import RadixPhoneInputReadOnlyPreview from "../radix/phone-input/read-only"
import RadixRatingPreview from "../radix/rating/default"
import RadixRatingStandardPreview from "../radix/rating/standard"
import RadixRatingDecimalValuePreview from "../radix/rating/decimal-value"
import RadixRatingShowValuePreview from "../radix/rating/show-value"
import RadixRatingEditablePreview from "../radix/rating/editable"
import RadixRatingSizesPreview from "../radix/rating/sizes"
import RadixRatingReviewSummaryPreview from "../radix/rating/review-summary"
import RadixRatingHalfStarInputPreview from "../radix/rating/half-star-input"
import RadixRatingEmojiReactionsPreview from "../radix/rating/emoji-reactions"
import RadixRatingReviewTextPreview from "../radix/rating/review-text"
import RadixScrollspyPreview from "../radix/scrollspy/default"
import RadixScrollspyVerticalNavPreview from "../radix/scrollspy/vertical-nav"
import RadixScrollspyHorizontalNavPreview from "../radix/scrollspy/horizontal-nav"
import RadixSignaturePadPreview from "../radix/signature-pad/default"
import RadixSignaturePadPinnedActionsPreview from "../radix/signature-pad/pinned-actions"
import RadixSignaturePadUndoRedoPreview from "../radix/signature-pad/undo-redo"
import RadixSignaturePadFormValidationPreview from "../radix/signature-pad/form-validation"
import RadixSignaturePadSigningWorkspacePreview from "../radix/signature-pad/signing-workspace"
import RadixSignaturePadExportFormatsPreview from "../radix/signature-pad/export-formats"
import RadixSignaturePadDrawOrTypePreview from "../radix/signature-pad/draw-or-type"
import RadixSignaturePadAgreementCardPreview from "../radix/signature-pad/agreement-card"
import RadixSignaturePadInDialogPreview from "../radix/signature-pad/in-dialog"
import RadixSignaturePadStylusModePreview from "../radix/signature-pad/stylus-mode"
import RadixSignaturePadClauseInitialsPreview from "../radix/signature-pad/clause-initials"
import RadixSignaturePadProofOfDeliveryPreview from "../radix/signature-pad/proof-of-delivery"
import RadixSignaturePadFileUploadPreview from "../radix/signature-pad/file-upload"
import RadixSortablePreview from "../radix/sortable/default"
import RadixSortableFileListPreview from "../radix/sortable/file-list"
import RadixSortableGridLayoutPreview from "../radix/sortable/grid-layout"
import RadixSortableNestedLayoutPreview from "../radix/sortable/nested-layout"
import RadixSortablePlaylistPreview from "../radix/sortable/playlist"
import RadixSortableSettingsPriorityPreview from "../radix/sortable/settings-priority"
import RadixSortableSidebarNavigationPreview from "../radix/sortable/sidebar-navigation"
import RadixSortableImageGalleryPreview from "../radix/sortable/image-gallery"
import RadixSortablePersistedOrderPreview from "../radix/sortable/persisted-order"
import RadixStepperPreview from "../radix/stepper/default"
import RadixStepperStandardPreview from "../radix/stepper/standard"
import RadixStepperCompletedStatePreview from "../radix/stepper/completed-state"
import RadixStepperLoadingStatePreview from "../radix/stepper/loading-state"
import RadixStepperControlledPreview from "../radix/stepper/controlled"
import RadixStepperLabelsBelowPreview from "../radix/stepper/labels-below"
import RadixStepperLeftAlignedTitlesPreview from "../radix/stepper/left-aligned-titles"
import RadixStepperIconsBadgesPreview from "../radix/stepper/icons-badges"
import RadixStepperDescriptionsPreview from "../radix/stepper/descriptions"
import RadixStepperInlineTitlesPreview from "../radix/stepper/inline-titles"
import RadixStepperTitleCaptionPreview from "../radix/stepper/title-caption"
import RadixStepperBarWithTitlesPreview from "../radix/stepper/bar-with-titles"
import RadixStepperSegmentedBarPreview from "../radix/stepper/segmented-bar"
import RadixStepperVerticalDescriptionsPreview from "../radix/stepper/vertical-descriptions"
import RadixStepperVerticalPreview from "../radix/stepper/vertical"
import RadixStepperVerticalTitlesPreview from "../radix/stepper/vertical-titles"
import RadixStepperDeliveryStopsPreview from "../radix/stepper/delivery-stops"
import RadixStepperDottedProgressPreview from "../radix/stepper/dotted-progress"
import RadixStepperStageDetailsPreview from "../radix/stepper/stage-details"
import RadixStepperFrameIconTilesPreview from "../radix/stepper/frame-icon-tiles"
import RadixStepperPurchaseOrdersPreview from "../radix/stepper/purchase-orders"
import RadixStepperSecurityChecksPreview from "../radix/stepper/security-checks"
import RadixStepperBottomColorBarsPreview from "../radix/stepper/bottom-color-bars"
import RadixStepperTopColorBarsPreview from "../radix/stepper/top-color-bars"
import RadixStepperIconTileRowsPreview from "../radix/stepper/icon-tile-rows"
import RadixStepperPhaseTrackPreview from "../radix/stepper/phase-track"
import RadixStepperTimestampedCheckpointsPreview from "../radix/stepper/timestamped-checkpoints"
import RadixStepperTransitArrowPreview from "../radix/stepper/transit-arrow"
import RadixStepperBreadcrumbStepsPreview from "../radix/stepper/breadcrumb-steps"
import RadixStepperCompactInlinePreview from "../radix/stepper/compact-inline"
import RadixStepperTruckRoutePreview from "../radix/stepper/truck-route"
import RadixStepperChevronIconTilesPreview from "../radix/stepper/chevron-icon-tiles"
import RadixStepperNumberedChevronsPreview from "../radix/stepper/numbered-chevrons"
import RadixStepperFilledChevronsPreview from "../radix/stepper/filled-chevrons"
import RadixStepperOutlinedChevronsPreview from "../radix/stepper/outlined-chevrons"
import RadixStepperFlatChevronsPreview from "../radix/stepper/flat-chevrons"
import RadixStepperShippingRoutePreview from "../radix/stepper/shipping-route"
import RadixStepperHorizontalStepCardsPreview from "../radix/stepper/horizontal-step-cards"
import RadixStepperShipmentProgressPreview from "../radix/stepper/shipment-progress"
import RadixStepperVerticalStepCardsPreview from "../radix/stepper/vertical-step-cards"
import RadixStepperSideRailIconsPreview from "../radix/stepper/side-rail-icons"
import RadixStepperStatusListPreview from "../radix/stepper/status-list"
import RadixStepperVerticalStatusBarsPreview from "../radix/stepper/vertical-status-bars"
import RadixStepperCollapsibleSubStepsPreview from "../radix/stepper/collapsible-sub-steps"
import RadixStepperRightAlignedSubStepsPreview from "../radix/stepper/right-aligned-sub-steps"
import RadixTimePickerPreview from "../radix/time-picker/default"
import RadixTimePickerInlinePanelPreview from "../radix/time-picker/inline-panel"
import RadixTimePickerPopoverPreview from "../radix/time-picker/popover"
import RadixTimePickerTypableInputPreview from "../radix/time-picker/typable-input"
import RadixTimePicker12HourSecondsPreview from "../radix/time-picker/12-hour-seconds"
import RadixTimePickerHourOnlyPreview from "../radix/time-picker/hour-only"
import RadixTimePickerOpeningHoursPreview from "../radix/time-picker/opening-hours"
import RadixTimePickerUnavailableSlotsPreview from "../radix/time-picker/unavailable-slots"
import RadixTimePickerStartEndPreview from "../radix/time-picker/start-end"
import RadixTimePickerTimeZonePreview from "../radix/time-picker/time-zone"
import RadixTimePickerConfirmBeforeApplyPreview from "../radix/time-picker/confirm-before-apply"
import RadixTimePickerLocalizedPreview from "../radix/time-picker/localized"
import RadixTimePickerFormValidationPreview from "../radix/time-picker/form-validation"
import RadixTimePickerDateTimePreview from "../radix/time-picker/date-time"
import RadixTimelinePreview from "../radix/timeline/default"
import RadixTimelineStandardPreview from "../radix/timeline/standard"
import RadixTimelineRoadmapPreview from "../radix/timeline/roadmap"
import RadixTimelineOrderStatusPreview from "../radix/timeline/order-status"
import RadixTimelineGitActivityPreview from "../radix/timeline/git-activity"
import RadixTimelineMilestonesPreview from "../radix/timeline/milestones"
import RadixTimelinePipelineStepsPreview from "../radix/timeline/pipeline-steps"
import RadixTimelineRoadmapItemsPreview from "../radix/timeline/roadmap-items"
import RadixTimelineHorizontalPreview from "../radix/timeline/horizontal"
import RadixTimelineLeadingLabelsPreview from "../radix/timeline/leading-labels"
import RadixTimelineDeploymentLogPreview from "../radix/timeline/deployment-log"
import RadixTimelineAvatarActivityPreview from "../radix/timeline/avatar-activity"
import RadixTimelineCompactMilestonesPreview from "../radix/timeline/compact-milestones"
import RadixTreePreview from "../radix/tree/default"
import RadixTreeStandardPreview from "../radix/tree/standard"
import RadixTreeIndentLinesPreview from "../radix/tree/indent-lines"
import RadixTreeFolderFileIconsPreview from "../radix/tree/folder-file-icons"
import RadixTreePlusMinusTogglesPreview from "../radix/tree/plus-minus-toggles"
import RadixTreeFileExplorerPreview from "../radix/tree/file-explorer"
import RadixTreeOrgChartPreview from "../radix/tree/org-chart"
import RadixTreePermissionsPreview from "../radix/tree/permissions"
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
import RadixBadgePrimarySource from "../radix/badge/primary.tsx?raw"
import RadixBadgeSecondarySource from "../radix/badge/secondary.tsx?raw"
import RadixBadgeDestructiveSource from "../radix/badge/destructive.tsx?raw"
import RadixBadgeSuccessSource from "../radix/badge/success.tsx?raw"
import RadixBadgeInfoSource from "../radix/badge/info.tsx?raw"
import RadixBadgeWarningSource from "../radix/badge/warning.tsx?raw"
import RadixBadgeOutlineSource from "../radix/badge/outline.tsx?raw"
import RadixBadgePrimaryOutlineSource from "../radix/badge/primary-outline.tsx?raw"
import RadixBadgeDestructiveOutlineSource from "../radix/badge/destructive-outline.tsx?raw"
import RadixBadgeInfoOutlineSource from "../radix/badge/info-outline.tsx?raw"
import RadixBadgeSuccessOutlineSource from "../radix/badge/success-outline.tsx?raw"
import RadixBadgeWarningOutlineSource from "../radix/badge/warning-outline.tsx?raw"
import RadixBadgePrimaryLightSource from "../radix/badge/primary-light.tsx?raw"
import RadixBadgeDestructiveLightSource from "../radix/badge/destructive-light.tsx?raw"
import RadixBadgeSuccessLightSource from "../radix/badge/success-light.tsx?raw"
import RadixBadgeInfoLightSource from "../radix/badge/info-light.tsx?raw"
import RadixBadgeWarningLightSource from "../radix/badge/warning-light.tsx?raw"
import RadixBadgeSizesSource from "../radix/badge/sizes.tsx?raw"
import RadixBadgeFullRadiusSource from "../radix/badge/full-radius.tsx?raw"
import RadixBadgeWithIconSource from "../radix/badge/with-icon.tsx?raw"
import RadixBadgeDismissButtonSource from "../radix/badge/dismiss-button.tsx?raw"
import RadixBadgeStatusDotSource from "../radix/badge/status-dot.tsx?raw"
import RadixBadgeAsLinkSource from "../radix/badge/as-link.tsx?raw"
import RadixBadgeWithAvatarSource from "../radix/badge/with-avatar.tsx?raw"
import RadixBadgeWithFlagSource from "../radix/badge/with-flag.tsx?raw"
import RadixCascaderSource from "../radix/cascader/default.tsx?raw"
import RadixCascaderAttributePickerSource from "../radix/cascader/attribute-picker.tsx?raw"
import RadixCascaderMultiSelectCapSource from "../radix/cascader/multi-select-cap.tsx?raw"
import RadixCascaderDeepSearchSource from "../radix/cascader/deep-search.tsx?raw"
import RadixCascaderFooterFlyoutSource from "../radix/cascader/footer-flyout.tsx?raw"
import RadixCascaderAvatarRowsSource from "../radix/cascader/avatar-rows.tsx?raw"
import RadixCascaderPathFormattingSource from "../radix/cascader/path-formatting.tsx?raw"
import RadixCascaderEmbeddedPanelSource from "../radix/cascader/embedded-panel.tsx?raw"
import RadixCascaderFlatDataSource from "../radix/cascader/flat-data.tsx?raw"
import RadixCascaderControlledStateSource from "../radix/cascader/controlled-state.tsx?raw"
import RadixCascaderTranslatedLabelsSource from "../radix/cascader/translated-labels.tsx?raw"
import RadixCascaderTwoLineRowsSource from "../radix/cascader/two-line-rows.tsx?raw"
import RadixCascaderNativeFormFieldSource from "../radix/cascader/native-form-field.tsx?raw"
import RadixCascaderColumnsModeSource from "../radix/cascader/columns-mode.tsx?raw"
import RadixCascaderTreeModeSource from "../radix/cascader/tree-mode.tsx?raw"
import RadixCascaderAsyncLoadingSource from "../radix/cascader/async-loading.tsx?raw"
import RadixCascaderVirtualizedListSource from "../radix/cascader/virtualized-list.tsx?raw"
import RadixCascaderRemovableChipsSource from "../radix/cascader/removable-chips.tsx?raw"
import RadixCascaderTreeMultiSelectSource from "../radix/cascader/tree-multi-select.tsx?raw"
import RadixCascaderColorDotsSource from "../radix/cascader/color-dots.tsx?raw"
import RadixCascaderInheritedColorsSource from "../radix/cascader/inherited-colors.tsx?raw"
import RadixCascaderGlobalSearchSource from "../radix/cascader/global-search.tsx?raw"
import RadixCodeBlockSource from "../radix/code-block/default.tsx?raw"
import CodeBlockStandardSource from "../radix/code-block/standard.tsx?raw"
import CodeBlockPinnedCopySource from "../radix/code-block/pinned-copy.tsx?raw"
import CodeBlockStreamingAgentSource from "../radix/code-block/streaming-agent.tsx?raw"
import CodeBlockAiChatSource from "../radix/code-block/ai-chat.tsx?raw"
import CodeBlockDiffSummarySource from "../radix/code-block/diff-summary.tsx?raw"
import CodeBlockTransformerDiffSource from "../radix/code-block/transformer-diff.tsx?raw"
import CodeBlockHighlightsSource from "../radix/code-block/highlights.tsx?raw"
import CodeBlockFocusWalkthroughSource from "../radix/code-block/focus-walkthrough.tsx?raw"
import CodeBlockTerminalOutputSource from "../radix/code-block/terminal-output.tsx?raw"
import CodeBlockLongFileSource from "../radix/code-block/long-file.tsx?raw"
import CodeBlockDiagnosticsActionsSource from "../radix/code-block/diagnostics-actions.tsx?raw"
import CodeBlockLineSelectionSource from "../radix/code-block/line-selection.tsx?raw"
import CodeBlockSearchInFileSource from "../radix/code-block/search-in-file.tsx?raw"
import CodeBlockFileTabsSource from "../radix/code-block/file-tabs.tsx?raw"
import CodeBlockPreHighlightedLinesSource from "../radix/code-block/pre-highlighted-lines.tsx?raw"
import CodeBlockBeforeAfterSource from "../radix/code-block/before-after.tsx?raw"
import CodeBlockSoftWrapSource from "../radix/code-block/soft-wrap.tsx?raw"
import CodeBlockUnifiedPatchSource from "../radix/code-block/unified-patch.tsx?raw"
import CodeBlockDesignTokenThemeSource from "../radix/code-block/design-token-theme.tsx?raw"
import CodeBlockAlwaysDarkSource from "../radix/code-block/always-dark.tsx?raw"
import CodeBlockDarkTerminalSource from "../radix/code-block/dark-terminal.tsx?raw"
import CodeBlockAcceptRejectSource from "../radix/code-block/accept-reject.tsx?raw"
import CodeBlockCodeFoldingSource from "../radix/code-block/code-folding.tsx?raw"
import CodeBlockFixWithAiSource from "../radix/code-block/fix-with-ai.tsx?raw"
import CodeBlockReferenceLinesSource from "../radix/code-block/reference-lines.tsx?raw"
import CodeBlockExternalScrollSource from "../radix/code-block/external-scroll.tsx?raw"
import CodeBlockAnsiTerminalSource from "../radix/code-block/ansi-terminal.tsx?raw"
import RadixColorPickerSource from "../radix/color-picker/default.tsx?raw"
import RadixColorPickerInlinePanelSource from "../radix/color-picker/inline-panel.tsx?raw"
import RadixColorPickerPopoverSource from "../radix/color-picker/popover.tsx?raw"
import RadixColorPickerColorInputSource from "../radix/color-picker/color-input.tsx?raw"
import RadixColorPickerOpacitySource from "../radix/color-picker/opacity.tsx?raw"
import RadixColorPickerPresetSwatchesSource from "../radix/color-picker/preset-swatches.tsx?raw"
import RadixColorPickerOklchTokenSource from "../radix/color-picker/oklch-token.tsx?raw"
import RadixColorPickerFormatConverterSource from "../radix/color-picker/format-converter.tsx?raw"
import RadixColorPickerHueWheelSource from "../radix/color-picker/hue-wheel.tsx?raw"
import RadixColorPickerRecentColorsSource from "../radix/color-picker/recent-colors.tsx?raw"
import RadixColorPickerTextHighlightSource from "../radix/color-picker/text-highlight.tsx?raw"
import RadixColorPickerChannelSlidersSource from "../radix/color-picker/channel-sliders.tsx?raw"
import RadixColorPickerDesignInspectorSource from "../radix/color-picker/design-inspector.tsx?raw"
import RadixColorPickerContrastCheckerSource from "../radix/color-picker/contrast-checker.tsx?raw"
import RadixColorPickerBrandScaleSource from "../radix/color-picker/brand-scale.tsx?raw"
import RadixColorPickerFormValidationSource from "../radix/color-picker/form-validation.tsx?raw"
import RadixDataGridSource from "../radix/data-grid/default.tsx?raw"
import RadixDataGridPaginationSource from "../radix/data-grid/pagination.tsx?raw"
import RadixDataGridCellBordersSource from "../radix/data-grid/cell-borders.tsx?raw"
import RadixDataGridDenseLayoutSource from "../radix/data-grid/dense-layout.tsx?raw"
import RadixDataGridBorderlessSource from "../radix/data-grid/borderless.tsx?raw"
import RadixDataGridStripedRowsSource from "../radix/data-grid/striped-rows.tsx?raw"
import RadixDataGridAutoWidthSource from "../radix/data-grid/auto-width.tsx?raw"
import RadixDataGridRowSelectionSource from "../radix/data-grid/row-selection.tsx?raw"
import RadixDataGridExpandableRowsSource from "../radix/data-grid/expandable-rows.tsx?raw"
import RadixDataGridSubTableSource from "../radix/data-grid/sub-table.tsx?raw"
import RadixDataGridColumnIconsSource from "../radix/data-grid/column-icons.tsx?raw"
import RadixDataGridSortableColumnsSource from "../radix/data-grid/sortable-columns.tsx?raw"
import RadixDataGridMovableColumnsSource from "../radix/data-grid/movable-columns.tsx?raw"
import RadixDataGridDraggableColumnsSource from "../radix/data-grid/draggable-columns.tsx?raw"
import RadixDataGridDraggableRowsSource from "../radix/data-grid/draggable-rows.tsx?raw"
import RadixDataGridColumnResizingSource from "../radix/data-grid/column-resizing.tsx?raw"
import RadixDataGridPinnableColumnsSource from "../radix/data-grid/pinnable-columns.tsx?raw"
import RadixDataGridStickyHeaderSource from "../radix/data-grid/sticky-header.tsx?raw"
import RadixDataGridColumnControlsSource from "../radix/data-grid/column-controls.tsx?raw"
import RadixDataGridCardContainerSource from "../radix/data-grid/card-container.tsx?raw"
import RadixDataGridColumnVisibilitySource from "../radix/data-grid/column-visibility.tsx?raw"
import RadixDataGridLoadingSkeletonSource from "../radix/data-grid/loading-skeleton.tsx?raw"
import RadixDataGridCrudAdminSource from "../radix/data-grid/crud-admin.tsx?raw"
import RadixDataGridCrudInFrameSource from "../radix/data-grid/crud-in-frame.tsx?raw"
import RadixDataGridTotalsFooterSource from "../radix/data-grid/totals-footer.tsx?raw"
import RadixDataGridSummaryStatsFooterSource from "../radix/data-grid/summary-stats-footer.tsx?raw"
import RadixDataGridAggregateFooterSource from "../radix/data-grid/aggregate-footer.tsx?raw"
import RadixDataGridLocalInfiniteScrollSource from "../radix/data-grid/local-infinite-scroll.tsx?raw"
import RadixDataGridRemoteInfiniteScrollSource from "../radix/data-grid/remote-infinite-scroll.tsx?raw"
import RadixDataGridRowPinningSource from "../radix/data-grid/row-pinning.tsx?raw"
import RadixDataGridTreeRowsSource from "../radix/data-grid/tree-rows.tsx?raw"
import RadixDataGridSpreadsheetEditingSource from "../radix/data-grid/spreadsheet-editing.tsx?raw"
import RadixDataGridColumnVirtualizationSource from "../radix/data-grid/column-virtualization.tsx?raw"
import RadixDataGridLocalizedLabelsSource from "../radix/data-grid/localized-labels.tsx?raw"
import RadixDataGridServerSidePaginationSource from "../radix/data-grid/server-side-pagination.tsx?raw"
import RadixDateSelectorSource from "../radix/date-selector/default.tsx?raw"
import RadixDateSelectorStandardInlineSource from "../radix/date-selector/standard-inline.tsx?raw"
import RadixDateSelectorPopoverSource from "../radix/date-selector/popover.tsx?raw"
import RadixDateSelectorDialogSource from "../radix/date-selector/dialog.tsx?raw"
import RadixDateSelectorLanguageMenuSource from "../radix/date-selector/language-menu.tsx?raw"
import RadixEmojiPickerSource from "../radix/emoji-picker/default.tsx?raw"
import RadixEmojiPickerInlineSource from "../radix/emoji-picker/inline.tsx?raw"
import RadixEmojiPickerChatComposerSource from "../radix/emoji-picker/chat-composer.tsx?raw"
import RadixEmojiPickerMessageReactionsSource from "../radix/emoji-picker/message-reactions.tsx?raw"
import RadixEmojiPickerPageIconSource from "../radix/emoji-picker/page-icon.tsx?raw"
import RadixEmojiPickerCustomTeamEmojiSource from "../radix/emoji-picker/custom-team-emoji.tsx?raw"
import RadixEmojiPickerShortcodeSuggestionsSource from "../radix/emoji-picker/shortcode-suggestions.tsx?raw"
import RadixEmojiPickerWorkplaceSafeSetSource from "../radix/emoji-picker/workplace-safe-set.tsx?raw"
import RadixEmojiPickerLocalizedLabelsSource from "../radix/emoji-picker/localized-labels.tsx?raw"
import RadixEventCalendarSource from "../radix/event-calendar/default.tsx?raw"
import RadixEventCalendarAllViewsSource from "../radix/event-calendar/all-views.tsx?raw"
import RadixEventCalendarRoomBookingsSource from "../radix/event-calendar/room-bookings.tsx?raw"
import RadixEventCalendarEventFormDialogSource from "../radix/event-calendar/event-form-dialog.tsx?raw"
import RadixEventCalendarCustomEventChipsSource from "../radix/event-calendar/custom-event-chips.tsx?raw"
import RadixEventCalendarDragToBookSource from "../radix/event-calendar/drag-to-book.tsx?raw"
import RadixFileTypeSource from "../radix/file-type/default.tsx?raw"
import RadixFileTypeCommonFormatsSource from "../radix/file-type/common-formats.tsx?raw"
import RadixFileTypeVariantsSource from "../radix/file-type/variants.tsx?raw"
import RadixFileTypeSizesSource from "../radix/file-type/sizes.tsx?raw"
import RadixFileTypeFamilyGlyphsSource from "../radix/file-type/family-glyphs.tsx?raw"
import RadixFileTypeAllFormatsSource from "../radix/file-type/all-formats.tsx?raw"
import RadixFileTypeFileBrowserSource from "../radix/file-type/file-browser.tsx?raw"
import RadixFileTypeAttachmentListSource from "../radix/file-type/attachment-list.tsx?raw"
import RadixFileTypeUploadQueueSource from "../radix/file-type/upload-queue.tsx?raw"
import RadixFileTypeResolveFromNameSource from "../radix/file-type/resolve-from-name.tsx?raw"
import RadixFileTypeCustomLabelsSource from "../radix/file-type/custom-labels.tsx?raw"
import RadixFileTypeCustomColorsSource from "../radix/file-type/custom-colors.tsx?raw"
import RadixFileTypeFormatPickerSource from "../radix/file-type/format-picker.tsx?raw"
import RadixFileTypeLockedStarredSource from "../radix/file-type/locked-starred.tsx?raw"
import RadixFileTypeRestyledLabelsSource from "../radix/file-type/restyled-labels.tsx?raw"
import RadixFileTypeDotfilesBuildNamesSource from "../radix/file-type/dotfiles-build-names.tsx?raw"
import RadixFiltersSource from "../radix/filters/default.tsx?raw"
import RadixFiltersFullFilterBarSource from "../radix/filters/full-filter-bar.tsx?raw"
import RadixFiltersNestedAttributesSource from "../radix/filters/nested-attributes.tsx?raw"
import RadixFiltersStatusBadgesSource from "../radix/filters/status-badges.tsx?raw"
import RadixFiltersAvatarsPagingSource from "../radix/filters/avatars-paging.tsx?raw"
import RadixFiltersDateEditorsSource from "../radix/filters/date-editors.tsx?raw"
import RadixFiltersSliderEditorSource from "../radix/filters/slider-editor.tsx?raw"
import RadixFiltersTableFilteringSource from "../radix/filters/table-filtering.tsx?raw"
import RadixFiltersChoiceControlsSource from "../radix/filters/choice-controls.tsx?raw"
import RadixFiltersTypedInputsSource from "../radix/filters/typed-inputs.tsx?raw"
import RadixFiltersPopoverBuilderSource from "../radix/filters/popover-builder.tsx?raw"
import RadixFiltersInlineBuilderSource from "../radix/filters/inline-builder.tsx?raw"
import RadixFiltersControlledTranslatedSource from "../radix/filters/controlled-translated.tsx?raw"
import RadixFrameSource from "../radix/frame/default.tsx?raw"
import RadixFrameStandardSource from "../radix/frame/standard.tsx?raw"
import RadixFrameSeparatedPanelsSource from "../radix/frame/separated-panels.tsx?raw"
import RadixFrameStackedPanelsSource from "../radix/frame/stacked-panels.tsx?raw"
import RadixFrameStackedDenseSource from "../radix/frame/stacked-dense.tsx?raw"
import RadixFrameCollapsiblePanelsSource from "../radix/frame/collapsible-panels.tsx?raw"
import RadixFrameGhostVariantSource from "../radix/frame/ghost-variant.tsx?raw"
import RadixFrameDenseLayoutSource from "../radix/frame/dense-layout.tsx?raw"
import RadixFrameStackedRowsSource from "../radix/frame/stacked-rows.tsx?raw"
import RadixFrameExtraSmallSpacingSource from "../radix/frame/extra-small-spacing.tsx?raw"
import RadixFrameSmallSpacingSource from "../radix/frame/small-spacing.tsx?raw"
import RadixFrameDefaultSpacingSource from "../radix/frame/default-spacing.tsx?raw"
import RadixFrameLargeSpacingSource from "../radix/frame/large-spacing.tsx?raw"
import RadixFrameSmallRadiusSource from "../radix/frame/small-radius.tsx?raw"
import RadixFrameMediumRadiusSource from "../radix/frame/medium-radius.tsx?raw"
import RadixFrameLargeRadiusSource from "../radix/frame/large-radius.tsx?raw"
import RadixFrameDefaultRadiusSource from "../radix/frame/default-radius.tsx?raw"
import RadixFrameExtraLargeRadiusSource from "../radix/frame/extra-large-radius.tsx?raw"
import RadixFrameContentOnlyPanelsSource from "../radix/frame/content-only-panels.tsx?raw"
import RadixFrameStackedContentOnlySource from "../radix/frame/stacked-content-only.tsx?raw"
import RadixGanttSource from "../radix/gantt/default.tsx?raw"
import RadixGanttSettingsMenuSource from "../radix/gantt/settings-menu.tsx?raw"
import RadixGanttDragReorderSource from "../radix/gantt/drag-reorder.tsx?raw"
import RadixGanttQuarterRoadmapSource from "../radix/gantt/quarter-roadmap.tsx?raw"
import RadixGanttCapacityBoardSource from "../radix/gantt/capacity-board.tsx?raw"
import RadixGanttTaskTableSource from "../radix/gantt/task-table.tsx?raw"
import RadixGanttBaselineTrackingSource from "../radix/gantt/baseline-tracking.tsx?raw"
import RadixGanttDependenciesMilestonesSource from "../radix/gantt/dependencies-milestones.tsx?raw"
import RadixGanttWorkingDaysSource from "../radix/gantt/working-days.tsx?raw"
import RadixIconStackSource from "../radix/icon-stack/default.tsx?raw"
import RadixIconStackIsometricSource from "../radix/icon-stack/isometric.tsx?raw"
import RadixIconStackSizesSource from "../radix/icon-stack/sizes.tsx?raw"
import RadixIconStackColorsSource from "../radix/icon-stack/colors.tsx?raw"
import RadixIconStackBadgeOverlaySource from "../radix/icon-stack/badge-overlay.tsx?raw"
import RadixIconStackEmptyStateSource from "../radix/icon-stack/empty-state.tsx?raw"
import RadixIconStackItemMediaSource from "../radix/icon-stack/item-media.tsx?raw"
import RadixIconTileSource from "../radix/icon-tile/default.tsx?raw"
import RadixIconTileDefaultSource from "../radix/icon-tile/default.tsx?raw"
import RadixIconTileElevatedSource from "../radix/icon-tile/elevated.tsx?raw"
import RadixIconTileFramedSource from "../radix/icon-tile/framed.tsx?raw"
import RadixIconTileAllVariantsSource from "../radix/icon-tile/all-variants.tsx?raw"
import RadixIconTileSizesSource from "../radix/icon-tile/sizes.tsx?raw"
import RadixIconTileCircularSource from "../radix/icon-tile/circular.tsx?raw"
import RadixIconTileCustomSizingSource from "../radix/icon-tile/custom-sizing.tsx?raw"
import RadixIconTileColorTonesSource from "../radix/icon-tile/color-tones.tsx?raw"
import RadixIconTileTextContentSource from "../radix/icon-tile/text-content.tsx?raw"
import RadixIconTileListRowSource from "../radix/icon-tile/list-row.tsx?raw"
import RadixIconTileFeatureCardSource from "../radix/icon-tile/feature-card.tsx?raw"
import RadixIconTileEmptyStateSource from "../radix/icon-tile/empty-state.tsx?raw"
import RadixIconTileInteractiveSource from "../radix/icon-tile/interactive.tsx?raw"
import RadixIconTileStatusOverlaySource from "../radix/icon-tile/status-overlay.tsx?raw"
import RadixIconTileSoftTonesSource from "../radix/icon-tile/soft-tones.tsx?raw"
import RadixIconTileSolidTonesSource from "../radix/icon-tile/solid-tones.tsx?raw"
import RadixIconTileBrandColorsSource from "../radix/icon-tile/brand-colors.tsx?raw"
import RadixKanbanSource from "../radix/kanban/default.tsx?raw"
import RadixKanbanPlaceholderOverlaySource from "../radix/kanban/placeholder-overlay.tsx?raw"
import RadixKanbanDynamicOverlaySource from "../radix/kanban/dynamic-overlay.tsx?raw"
import RadixKanbanFrameColumnsSource from "../radix/kanban/frame-columns.tsx?raw"
import RadixKanbanStackedFrameSource from "../radix/kanban/stacked-frame.tsx?raw"
import RadixKanbanFeatureRoadmapSource from "../radix/kanban/feature-roadmap.tsx?raw"
import RadixKanbanPersistedMovesSource from "../radix/kanban/persisted-moves.tsx?raw"
import RadixNumberFieldSource from "../radix/number-field/default.tsx?raw"
import RadixNumberFieldDefaultSizeSource from "../radix/number-field/default-size.tsx?raw"
import RadixNumberFieldSmallSizeSource from "../radix/number-field/small-size.tsx?raw"
import RadixNumberFieldLargeSizeSource from "../radix/number-field/large-size.tsx?raw"
import RadixNumberFieldButtonsOnRightSource from "../radix/number-field/buttons-on-right.tsx?raw"
import RadixNumberFieldSpinnerButtonsSource from "../radix/number-field/spinner-buttons.tsx?raw"
import RadixNumberFieldFormValidationSource from "../radix/number-field/form-validation.tsx?raw"
import RadixPhoneInputSource from "../radix/phone-input/default.tsx?raw"
import RadixPhoneInputStandardSource from "../radix/phone-input/standard.tsx?raw"
import RadixPhoneInputSmallSource from "../radix/phone-input/small.tsx?raw"
import RadixPhoneInputLargeSource from "../radix/phone-input/large.tsx?raw"
import RadixPhoneInputDisabledSource from "../radix/phone-input/disabled.tsx?raw"
import RadixPhoneInputPresetValueSource from "../radix/phone-input/preset-value.tsx?raw"
import RadixPhoneInputErrorStateSource from "../radix/phone-input/error-state.tsx?raw"
import RadixPhoneInputDefaultCountrySource from "../radix/phone-input/default-country.tsx?raw"
import RadixPhoneInputReadOnlySource from "../radix/phone-input/read-only.tsx?raw"
import RadixRatingSource from "../radix/rating/default.tsx?raw"
import RadixRatingStandardSource from "../radix/rating/standard.tsx?raw"
import RadixRatingDecimalValueSource from "../radix/rating/decimal-value.tsx?raw"
import RadixRatingShowValueSource from "../radix/rating/show-value.tsx?raw"
import RadixRatingEditableSource from "../radix/rating/editable.tsx?raw"
import RadixRatingSizesSource from "../radix/rating/sizes.tsx?raw"
import RadixRatingReviewSummarySource from "../radix/rating/review-summary.tsx?raw"
import RadixRatingHalfStarInputSource from "../radix/rating/half-star-input.tsx?raw"
import RadixRatingEmojiReactionsSource from "../radix/rating/emoji-reactions.tsx?raw"
import RadixRatingReviewTextSource from "../radix/rating/review-text.tsx?raw"
import RadixScrollspySource from "../radix/scrollspy/default.tsx?raw"
import RadixScrollspyVerticalNavSource from "../radix/scrollspy/vertical-nav.tsx?raw"
import RadixScrollspyHorizontalNavSource from "../radix/scrollspy/horizontal-nav.tsx?raw"
import RadixSignaturePadSource from "../radix/signature-pad/default.tsx?raw"
import RadixSignaturePadPinnedActionsSource from "../radix/signature-pad/pinned-actions.tsx?raw"
import RadixSignaturePadUndoRedoSource from "../radix/signature-pad/undo-redo.tsx?raw"
import RadixSignaturePadFormValidationSource from "../radix/signature-pad/form-validation.tsx?raw"
import RadixSignaturePadSigningWorkspaceSource from "../radix/signature-pad/signing-workspace.tsx?raw"
import RadixSignaturePadExportFormatsSource from "../radix/signature-pad/export-formats.tsx?raw"
import RadixSignaturePadDrawOrTypeSource from "../radix/signature-pad/draw-or-type.tsx?raw"
import RadixSignaturePadAgreementCardSource from "../radix/signature-pad/agreement-card.tsx?raw"
import RadixSignaturePadInDialogSource from "../radix/signature-pad/in-dialog.tsx?raw"
import RadixSignaturePadStylusModeSource from "../radix/signature-pad/stylus-mode.tsx?raw"
import RadixSignaturePadClauseInitialsSource from "../radix/signature-pad/clause-initials.tsx?raw"
import RadixSignaturePadProofOfDeliverySource from "../radix/signature-pad/proof-of-delivery.tsx?raw"
import RadixSignaturePadFileUploadSource from "../radix/signature-pad/file-upload.tsx?raw"
import RadixSortableSource from "../radix/sortable/default.tsx?raw"
import RadixSortableFileListSource from "../radix/sortable/file-list.tsx?raw"
import RadixSortableGridLayoutSource from "../radix/sortable/grid-layout.tsx?raw"
import RadixSortableNestedLayoutSource from "../radix/sortable/nested-layout.tsx?raw"
import RadixSortablePlaylistSource from "../radix/sortable/playlist.tsx?raw"
import RadixSortableSettingsPrioritySource from "../radix/sortable/settings-priority.tsx?raw"
import RadixSortableSidebarNavigationSource from "../radix/sortable/sidebar-navigation.tsx?raw"
import RadixSortableImageGallerySource from "../radix/sortable/image-gallery.tsx?raw"
import RadixSortablePersistedOrderSource from "../radix/sortable/persisted-order.tsx?raw"
import RadixStepperSource from "../radix/stepper/default.tsx?raw"
import RadixStepperStandardSource from "../radix/stepper/standard.tsx?raw"
import RadixStepperCompletedStateSource from "../radix/stepper/completed-state.tsx?raw"
import RadixStepperLoadingStateSource from "../radix/stepper/loading-state.tsx?raw"
import RadixStepperControlledSource from "../radix/stepper/controlled.tsx?raw"
import RadixStepperLabelsBelowSource from "../radix/stepper/labels-below.tsx?raw"
import RadixStepperLeftAlignedTitlesSource from "../radix/stepper/left-aligned-titles.tsx?raw"
import RadixStepperIconsBadgesSource from "../radix/stepper/icons-badges.tsx?raw"
import RadixStepperDescriptionsSource from "../radix/stepper/descriptions.tsx?raw"
import RadixStepperInlineTitlesSource from "../radix/stepper/inline-titles.tsx?raw"
import RadixStepperTitleCaptionSource from "../radix/stepper/title-caption.tsx?raw"
import RadixStepperBarWithTitlesSource from "../radix/stepper/bar-with-titles.tsx?raw"
import RadixStepperSegmentedBarSource from "../radix/stepper/segmented-bar.tsx?raw"
import RadixStepperVerticalDescriptionsSource from "../radix/stepper/vertical-descriptions.tsx?raw"
import RadixStepperVerticalSource from "../radix/stepper/vertical.tsx?raw"
import RadixStepperVerticalTitlesSource from "../radix/stepper/vertical-titles.tsx?raw"
import RadixStepperDeliveryStopsSource from "../radix/stepper/delivery-stops.tsx?raw"
import RadixStepperDottedProgressSource from "../radix/stepper/dotted-progress.tsx?raw"
import RadixStepperStageDetailsSource from "../radix/stepper/stage-details.tsx?raw"
import RadixStepperFrameIconTilesSource from "../radix/stepper/frame-icon-tiles.tsx?raw"
import RadixStepperPurchaseOrdersSource from "../radix/stepper/purchase-orders.tsx?raw"
import RadixStepperSecurityChecksSource from "../radix/stepper/security-checks.tsx?raw"
import RadixStepperBottomColorBarsSource from "../radix/stepper/bottom-color-bars.tsx?raw"
import RadixStepperTopColorBarsSource from "../radix/stepper/top-color-bars.tsx?raw"
import RadixStepperIconTileRowsSource from "../radix/stepper/icon-tile-rows.tsx?raw"
import RadixStepperPhaseTrackSource from "../radix/stepper/phase-track.tsx?raw"
import RadixStepperTimestampedCheckpointsSource from "../radix/stepper/timestamped-checkpoints.tsx?raw"
import RadixStepperTransitArrowSource from "../radix/stepper/transit-arrow.tsx?raw"
import RadixStepperBreadcrumbStepsSource from "../radix/stepper/breadcrumb-steps.tsx?raw"
import RadixStepperCompactInlineSource from "../radix/stepper/compact-inline.tsx?raw"
import RadixStepperTruckRouteSource from "../radix/stepper/truck-route.tsx?raw"
import RadixStepperChevronIconTilesSource from "../radix/stepper/chevron-icon-tiles.tsx?raw"
import RadixStepperNumberedChevronsSource from "../radix/stepper/numbered-chevrons.tsx?raw"
import RadixStepperFilledChevronsSource from "../radix/stepper/filled-chevrons.tsx?raw"
import RadixStepperOutlinedChevronsSource from "../radix/stepper/outlined-chevrons.tsx?raw"
import RadixStepperFlatChevronsSource from "../radix/stepper/flat-chevrons.tsx?raw"
import RadixStepperShippingRouteSource from "../radix/stepper/shipping-route.tsx?raw"
import RadixStepperHorizontalStepCardsSource from "../radix/stepper/horizontal-step-cards.tsx?raw"
import RadixStepperShipmentProgressSource from "../radix/stepper/shipment-progress.tsx?raw"
import RadixStepperVerticalStepCardsSource from "../radix/stepper/vertical-step-cards.tsx?raw"
import RadixStepperSideRailIconsSource from "../radix/stepper/side-rail-icons.tsx?raw"
import RadixStepperStatusListSource from "../radix/stepper/status-list.tsx?raw"
import RadixStepperVerticalStatusBarsSource from "../radix/stepper/vertical-status-bars.tsx?raw"
import RadixStepperCollapsibleSubStepsSource from "../radix/stepper/collapsible-sub-steps.tsx?raw"
import RadixStepperRightAlignedSubStepsSource from "../radix/stepper/right-aligned-sub-steps.tsx?raw"
import RadixTimePickerSource from "../radix/time-picker/default.tsx?raw"
import RadixTimePickerInlinePanelSource from "../radix/time-picker/inline-panel.tsx?raw"
import RadixTimePickerPopoverSource from "../radix/time-picker/popover.tsx?raw"
import RadixTimePickerTypableInputSource from "../radix/time-picker/typable-input.tsx?raw"
import RadixTimePicker12HourSecondsSource from "../radix/time-picker/12-hour-seconds.tsx?raw"
import RadixTimePickerHourOnlySource from "../radix/time-picker/hour-only.tsx?raw"
import RadixTimePickerOpeningHoursSource from "../radix/time-picker/opening-hours.tsx?raw"
import RadixTimePickerUnavailableSlotsSource from "../radix/time-picker/unavailable-slots.tsx?raw"
import RadixTimePickerStartEndSource from "../radix/time-picker/start-end.tsx?raw"
import RadixTimePickerTimeZoneSource from "../radix/time-picker/time-zone.tsx?raw"
import RadixTimePickerConfirmBeforeApplySource from "../radix/time-picker/confirm-before-apply.tsx?raw"
import RadixTimePickerLocalizedSource from "../radix/time-picker/localized.tsx?raw"
import RadixTimePickerFormValidationSource from "../radix/time-picker/form-validation.tsx?raw"
import RadixTimePickerDateTimeSource from "../radix/time-picker/date-time.tsx?raw"
import RadixTimelineSource from "../radix/timeline/default.tsx?raw"
import RadixTimelineStandardSource from "../radix/timeline/standard.tsx?raw"
import RadixTimelineRoadmapSource from "../radix/timeline/roadmap.tsx?raw"
import RadixTimelineOrderStatusSource from "../radix/timeline/order-status.tsx?raw"
import RadixTimelineGitActivitySource from "../radix/timeline/git-activity.tsx?raw"
import RadixTimelineMilestonesSource from "../radix/timeline/milestones.tsx?raw"
import RadixTimelinePipelineStepsSource from "../radix/timeline/pipeline-steps.tsx?raw"
import RadixTimelineRoadmapItemsSource from "../radix/timeline/roadmap-items.tsx?raw"
import RadixTimelineHorizontalSource from "../radix/timeline/horizontal.tsx?raw"
import RadixTimelineLeadingLabelsSource from "../radix/timeline/leading-labels.tsx?raw"
import RadixTimelineDeploymentLogSource from "../radix/timeline/deployment-log.tsx?raw"
import RadixTimelineAvatarActivitySource from "../radix/timeline/avatar-activity.tsx?raw"
import RadixTimelineCompactMilestonesSource from "../radix/timeline/compact-milestones.tsx?raw"
import RadixTreeSource from "../radix/tree/default.tsx?raw"
import RadixTreeStandardSource from "../radix/tree/standard.tsx?raw"
import RadixTreeIndentLinesSource from "../radix/tree/indent-lines.tsx?raw"
import RadixTreeFolderFileIconsSource from "../radix/tree/folder-file-icons.tsx?raw"
import RadixTreePlusMinusTogglesSource from "../radix/tree/plus-minus-toggles.tsx?raw"
import RadixTreeFileExplorerSource from "../radix/tree/file-explorer.tsx?raw"
import RadixTreeOrgChartSource from "../radix/tree/org-chart.tsx?raw"
import RadixTreePermissionsSource from "../radix/tree/permissions.tsx?raw"
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
    id: "badge-primary-radix",
    name: "Badge",
    variant: "Primary",
    installTarget: "@reui-unbound/badge-primary",
    Component: RadixBadgePrimaryPreview,
    source: RadixBadgePrimarySource,
  }),
  componentEntry({
    flavor: "radix",
    item: "badge",
    id: "badge-secondary-radix",
    name: "Badge",
    variant: "Secondary",
    installTarget: "@reui-unbound/badge-secondary",
    Component: RadixBadgeSecondaryPreview,
    source: RadixBadgeSecondarySource,
  }),
  componentEntry({
    flavor: "radix",
    item: "badge",
    id: "badge-destructive-radix",
    name: "Badge",
    variant: "Destructive",
    installTarget: "@reui-unbound/badge-destructive",
    Component: RadixBadgeDestructivePreview,
    source: RadixBadgeDestructiveSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "badge",
    id: "badge-success-radix",
    name: "Badge",
    variant: "Success",
    installTarget: "@reui-unbound/badge-success",
    Component: RadixBadgeSuccessPreview,
    source: RadixBadgeSuccessSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "badge",
    id: "badge-info-radix",
    name: "Badge",
    variant: "Info",
    installTarget: "@reui-unbound/badge-info",
    Component: RadixBadgeInfoPreview,
    source: RadixBadgeInfoSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "badge",
    id: "badge-warning-radix",
    name: "Badge",
    variant: "Warning",
    installTarget: "@reui-unbound/badge-warning",
    Component: RadixBadgeWarningPreview,
    source: RadixBadgeWarningSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "badge",
    id: "badge-outline-radix",
    name: "Badge",
    variant: "Outline",
    installTarget: "@reui-unbound/badge-outline",
    Component: RadixBadgeOutlinePreview,
    source: RadixBadgeOutlineSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "badge",
    id: "badge-primary-outline-radix",
    name: "Badge",
    variant: "Primary Outline",
    installTarget: "@reui-unbound/badge-primary-outline",
    Component: RadixBadgePrimaryOutlinePreview,
    source: RadixBadgePrimaryOutlineSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "badge",
    id: "badge-destructive-outline-radix",
    name: "Badge",
    variant: "Destructive Outline",
    installTarget: "@reui-unbound/badge-destructive-outline",
    Component: RadixBadgeDestructiveOutlinePreview,
    source: RadixBadgeDestructiveOutlineSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "badge",
    id: "badge-info-outline-radix",
    name: "Badge",
    variant: "Info Outline",
    installTarget: "@reui-unbound/badge-info-outline",
    Component: RadixBadgeInfoOutlinePreview,
    source: RadixBadgeInfoOutlineSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "badge",
    id: "badge-success-outline-radix",
    name: "Badge",
    variant: "Success Outline",
    installTarget: "@reui-unbound/badge-success-outline",
    Component: RadixBadgeSuccessOutlinePreview,
    source: RadixBadgeSuccessOutlineSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "badge",
    id: "badge-warning-outline-radix",
    name: "Badge",
    variant: "Warning Outline",
    installTarget: "@reui-unbound/badge-warning-outline",
    Component: RadixBadgeWarningOutlinePreview,
    source: RadixBadgeWarningOutlineSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "badge",
    id: "badge-primary-light-radix",
    name: "Badge",
    variant: "Primary Light",
    installTarget: "@reui-unbound/badge-primary-light",
    Component: RadixBadgePrimaryLightPreview,
    source: RadixBadgePrimaryLightSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "badge",
    id: "badge-destructive-light-radix",
    name: "Badge",
    variant: "Destructive Light",
    installTarget: "@reui-unbound/badge-destructive-light",
    Component: RadixBadgeDestructiveLightPreview,
    source: RadixBadgeDestructiveLightSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "badge",
    id: "badge-success-light-radix",
    name: "Badge",
    variant: "Success Light",
    installTarget: "@reui-unbound/badge-success-light",
    Component: RadixBadgeSuccessLightPreview,
    source: RadixBadgeSuccessLightSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "badge",
    id: "badge-info-light-radix",
    name: "Badge",
    variant: "Info Light",
    installTarget: "@reui-unbound/badge-info-light",
    Component: RadixBadgeInfoLightPreview,
    source: RadixBadgeInfoLightSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "badge",
    id: "badge-warning-light-radix",
    name: "Badge",
    variant: "Warning Light",
    installTarget: "@reui-unbound/badge-warning-light",
    Component: RadixBadgeWarningLightPreview,
    source: RadixBadgeWarningLightSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "badge",
    id: "badge-sizes-radix",
    name: "Badge",
    variant: "Sizes",
    installTarget: "@reui-unbound/badge-sizes",
    Component: RadixBadgeSizesPreview,
    source: RadixBadgeSizesSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "badge",
    id: "badge-full-radius-radix",
    name: "Badge",
    variant: "Full Radius",
    installTarget: "@reui-unbound/badge-full-radius",
    Component: RadixBadgeFullRadiusPreview,
    source: RadixBadgeFullRadiusSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "badge",
    id: "badge-with-icon-radix",
    name: "Badge",
    variant: "With Icon",
    installTarget: "@reui-unbound/badge-with-icon",
    extraDependencies: ["@reui-unbound/icon-placeholder"],
    Component: RadixBadgeWithIconPreview,
    source: RadixBadgeWithIconSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "badge",
    id: "badge-dismiss-button-radix",
    name: "Badge",
    variant: "Dismiss Button",
    installTarget: "@reui-unbound/badge-dismiss-button",
    extraDependencies: ["button", "@reui-unbound/icon-placeholder"],
    Component: RadixBadgeDismissButtonPreview,
    source: RadixBadgeDismissButtonSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "badge",
    id: "badge-status-dot-radix",
    name: "Badge",
    variant: "Status Dot",
    installTarget: "@reui-unbound/badge-status-dot",
    Component: RadixBadgeStatusDotPreview,
    source: RadixBadgeStatusDotSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "badge",
    id: "badge-as-link-radix",
    name: "Badge",
    variant: "As Link",
    installTarget: "@reui-unbound/badge-as-link",
    Component: RadixBadgeAsLinkPreview,
    source: RadixBadgeAsLinkSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "badge",
    id: "badge-with-avatar-radix",
    name: "Badge",
    variant: "With Avatar",
    installTarget: "@reui-unbound/badge-with-avatar",
    extraDependencies: ["avatar", "button", "@reui-unbound/icon-placeholder"],
    Component: RadixBadgeWithAvatarPreview,
    source: RadixBadgeWithAvatarSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "badge",
    id: "badge-with-flag-radix",
    name: "Badge",
    variant: "With Flag",
    installTarget: "@reui-unbound/badge-with-flag",
    Component: RadixBadgeWithFlagPreview,
    source: RadixBadgeWithFlagSource,
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
    item: "cascader",
    id: "cascader-attribute-picker-radix",
    name: "Cascader",
    variant: "Attribute Picker",
    installTarget: "@reui-unbound/cascader-attribute-picker",
    extraDependencies: ["@reui-unbound/cascader", "button", "@reui-unbound/icon-placeholder"],
    Component: RadixCascaderAttributePickerPreview,
    source: RadixCascaderAttributePickerSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "cascader",
    id: "cascader-multi-select-cap-radix",
    name: "Cascader",
    variant: "Multi-Select Cap",
    installTarget: "@reui-unbound/cascader-multi-select-cap",
    extraDependencies: ["@reui-unbound/cascader", "button", "@reui-unbound/icon-placeholder"],
    Component: RadixCascaderMultiSelectCapPreview,
    source: RadixCascaderMultiSelectCapSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "cascader",
    id: "cascader-deep-search-radix",
    name: "Cascader",
    variant: "Deep Search",
    installTarget: "@reui-unbound/cascader-deep-search",
    extraDependencies: ["@reui-unbound/cascader", "button", "@reui-unbound/icon-placeholder"],
    Component: RadixCascaderDeepSearchPreview,
    source: RadixCascaderDeepSearchSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "cascader",
    id: "cascader-footer-flyout-radix",
    name: "Cascader",
    variant: "Footer Flyout",
    installTarget: "@reui-unbound/cascader-footer-flyout",
    extraDependencies: ["@reui-unbound/cascader", "button", "@reui-unbound/icon-placeholder"],
    Component: RadixCascaderFooterFlyoutPreview,
    source: RadixCascaderFooterFlyoutSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "cascader",
    id: "cascader-avatar-rows-radix",
    name: "Cascader",
    variant: "Avatar Rows",
    installTarget: "@reui-unbound/cascader-avatar-rows",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/cascader", "avatar", "button"],
    Component: RadixCascaderAvatarRowsPreview,
    source: RadixCascaderAvatarRowsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "cascader",
    id: "cascader-path-formatting-radix",
    name: "Cascader",
    variant: "Path Formatting",
    installTarget: "@reui-unbound/cascader-path-formatting",
    extraDependencies: ["@reui-unbound/cascader", "button", "toggle-group", "@reui-unbound/icon-placeholder"],
    Component: RadixCascaderPathFormattingPreview,
    source: RadixCascaderPathFormattingSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "cascader",
    id: "cascader-embedded-panel-radix",
    name: "Cascader",
    variant: "Embedded Panel",
    installTarget: "@reui-unbound/cascader-embedded-panel",
    extraDependencies: ["@reui-unbound/cascader", "card", "@reui-unbound/icon-placeholder"],
    Component: RadixCascaderEmbeddedPanelPreview,
    source: RadixCascaderEmbeddedPanelSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "cascader",
    id: "cascader-flat-data-radix",
    name: "Cascader",
    variant: "Flat Data",
    installTarget: "@reui-unbound/cascader-flat-data",
    extraDependencies: ["@reui-unbound/cascader", "button", "@reui-unbound/icon-placeholder"],
    Component: RadixCascaderFlatDataPreview,
    source: RadixCascaderFlatDataSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "cascader",
    id: "cascader-controlled-state-radix",
    name: "Cascader",
    variant: "Controlled State",
    installTarget: "@reui-unbound/cascader-controlled-state",
    extraDependencies: ["@reui-unbound/cascader", "button"],
    Component: RadixCascaderControlledStatePreview,
    source: RadixCascaderControlledStateSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "cascader",
    id: "cascader-translated-labels-radix",
    name: "Cascader",
    variant: "Translated Labels",
    installTarget: "@reui-unbound/cascader-translated-labels",
    extraDependencies: ["@reui-unbound/cascader", "button"],
    Component: RadixCascaderTranslatedLabelsPreview,
    source: RadixCascaderTranslatedLabelsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "cascader",
    id: "cascader-two-line-rows-radix",
    name: "Cascader",
    variant: "Two-Line Rows",
    installTarget: "@reui-unbound/cascader-two-line-rows",
    extraDependencies: ["@reui-unbound/cascader", "@reui-unbound/icon-tile", "button", "@reui-unbound/icon-placeholder"],
    Component: RadixCascaderTwoLineRowsPreview,
    source: RadixCascaderTwoLineRowsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "cascader",
    id: "cascader-native-form-field-radix",
    name: "Cascader",
    variant: "Native Form Field",
    installTarget: "@reui-unbound/cascader-native-form-field",
    extraDependencies: ["@reui-unbound/cascader", "button", "field"],
    Component: RadixCascaderNativeFormFieldPreview,
    source: RadixCascaderNativeFormFieldSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "cascader",
    id: "cascader-columns-mode-radix",
    name: "Cascader",
    variant: "Columns Mode",
    installTarget: "@reui-unbound/cascader-columns-mode",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/cascader", "@reui-unbound/icon-tile", "button", "@reui-unbound/icon-placeholder"],
    Component: RadixCascaderColumnsModePreview,
    source: RadixCascaderColumnsModeSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "cascader",
    id: "cascader-tree-mode-radix",
    name: "Cascader",
    variant: "Tree Mode",
    installTarget: "@reui-unbound/cascader-tree-mode",
    extraDependencies: ["@reui-unbound/cascader", "button", "@reui-unbound/icon-placeholder"],
    Component: RadixCascaderTreeModePreview,
    source: RadixCascaderTreeModeSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "cascader",
    id: "cascader-async-loading-radix",
    name: "Cascader",
    variant: "Async Loading",
    installTarget: "@reui-unbound/cascader-async-loading",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/cascader", "button", "@reui-unbound/icon-placeholder"],
    Component: RadixCascaderAsyncLoadingPreview,
    source: RadixCascaderAsyncLoadingSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "cascader",
    id: "cascader-virtualized-list-radix",
    name: "Cascader",
    variant: "Virtualized List",
    installTarget: "@reui-unbound/cascader-virtualized-list",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/cascader", "button", "spinner", "@reui-unbound/icon-placeholder"],
    Component: RadixCascaderVirtualizedListPreview,
    source: RadixCascaderVirtualizedListSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "cascader",
    id: "cascader-removable-chips-radix",
    name: "Cascader",
    variant: "Removable Chips",
    installTarget: "@reui-unbound/cascader-removable-chips",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/cascader", "button", "@reui-unbound/icon-placeholder"],
    Component: RadixCascaderRemovableChipsPreview,
    source: RadixCascaderRemovableChipsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "cascader",
    id: "cascader-tree-multi-select-radix",
    name: "Cascader",
    variant: "Tree Multi-Select",
    installTarget: "@reui-unbound/cascader-tree-multi-select",
    extraDependencies: ["@reui-unbound/cascader", "button", "@reui-unbound/icon-placeholder"],
    Component: RadixCascaderTreeMultiSelectPreview,
    source: RadixCascaderTreeMultiSelectSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "cascader",
    id: "cascader-color-dots-radix",
    name: "Cascader",
    variant: "Color Dots",
    installTarget: "@reui-unbound/cascader-color-dots",
    extraDependencies: ["@reui-unbound/cascader", "button", "@reui-unbound/icon-placeholder"],
    Component: RadixCascaderColorDotsPreview,
    source: RadixCascaderColorDotsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "cascader",
    id: "cascader-inherited-colors-radix",
    name: "Cascader",
    variant: "Inherited Colors",
    installTarget: "@reui-unbound/cascader-inherited-colors",
    extraDependencies: ["@reui-unbound/cascader", "@reui-unbound/icon-tile", "button", "@reui-unbound/icon-placeholder"],
    Component: RadixCascaderInheritedColorsPreview,
    source: RadixCascaderInheritedColorsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "cascader",
    id: "cascader-global-search-radix",
    name: "Cascader",
    variant: "Global Search",
    installTarget: "@reui-unbound/cascader-global-search",
    extraDependencies: ["@reui-unbound/cascader", "button", "field"],
    Component: RadixCascaderGlobalSearchPreview,
    source: RadixCascaderGlobalSearchSource,
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
    item: "code-block",
    id: "code-block-standard-radix",
    name: "Code Block",
    variant: "Standard",
    installTarget: "@reui-unbound/code-block-standard",
    extraDependencies: ["@reui-unbound/code-block"],
    Component: CodeBlockStandardPreview,
    source: CodeBlockStandardSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "code-block",
    id: "code-block-pinned-copy-radix",
    name: "Code Block",
    variant: "Pinned Copy",
    installTarget: "@reui-unbound/code-block-pinned-copy",
    extraDependencies: ["@reui-unbound/code-block", "scroll-area"],
    Component: CodeBlockPinnedCopyPreview,
    source: CodeBlockPinnedCopySource,
  }),
  componentEntry({
    flavor: "radix",
    item: "code-block",
    id: "code-block-streaming-agent-radix",
    name: "Code Block",
    variant: "Streaming Agent",
    installTarget: "@reui-unbound/code-block-streaming-agent",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/code-block", "button", "scroll-area"],
    Component: CodeBlockStreamingAgentPreview,
    source: CodeBlockStreamingAgentSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "code-block",
    id: "code-block-ai-chat-radix",
    name: "Code Block",
    variant: "AI Chat",
    installTarget: "@reui-unbound/code-block-ai-chat",
    extraDependencies: ["@reui-unbound/code-block", "@reui-unbound/frame", "avatar"],
    Component: CodeBlockAiChatPreview,
    source: CodeBlockAiChatSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "code-block",
    id: "code-block-diff-summary-radix",
    name: "Code Block",
    variant: "Diff Summary",
    installTarget: "@reui-unbound/code-block-diff-summary",
    extraDependencies: ["@reui-unbound/code-block"],
    Component: CodeBlockDiffSummaryPreview,
    source: CodeBlockDiffSummarySource,
  }),
  componentEntry({
    flavor: "radix",
    item: "code-block",
    id: "code-block-transformer-diff-radix",
    name: "Code Block",
    variant: "Transformer Diff",
    installTarget: "@reui-unbound/code-block-transformer-diff",
    extraDependencies: ["@reui-unbound/code-block"],
    Component: CodeBlockTransformerDiffPreview,
    source: CodeBlockTransformerDiffSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "code-block",
    id: "code-block-highlights-radix",
    name: "Code Block",
    variant: "Highlights",
    installTarget: "@reui-unbound/code-block-highlights",
    extraDependencies: ["@reui-unbound/code-block"],
    Component: CodeBlockHighlightsPreview,
    source: CodeBlockHighlightsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "code-block",
    id: "code-block-focus-walkthrough-radix",
    name: "Code Block",
    variant: "Focus Walkthrough",
    installTarget: "@reui-unbound/code-block-focus-walkthrough",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/code-block", "button"],
    Component: CodeBlockFocusWalkthroughPreview,
    source: CodeBlockFocusWalkthroughSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "code-block",
    id: "code-block-terminal-output-radix",
    name: "Code Block",
    variant: "Terminal Output",
    installTarget: "@reui-unbound/code-block-terminal-output",
    extraDependencies: ["@reui-unbound/code-block"],
    Component: CodeBlockTerminalOutputPreview,
    source: CodeBlockTerminalOutputSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "code-block",
    id: "code-block-long-file-radix",
    name: "Code Block",
    variant: "Long File",
    installTarget: "@reui-unbound/code-block-long-file",
    extraDependencies: ["@reui-unbound/code-block", "scroll-area"],
    Component: CodeBlockLongFilePreview,
    source: CodeBlockLongFileSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "code-block",
    id: "code-block-diagnostics-actions-radix",
    name: "Code Block",
    variant: "Diagnostics & Actions",
    installTarget: "@reui-unbound/code-block-diagnostics-actions",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/code-block", "button"],
    Component: CodeBlockDiagnosticsActionsPreview,
    source: CodeBlockDiagnosticsActionsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "code-block",
    id: "code-block-line-selection-radix",
    name: "Code Block",
    variant: "Line Selection",
    installTarget: "@reui-unbound/code-block-line-selection",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/code-block", "button"],
    Component: CodeBlockLineSelectionPreview,
    source: CodeBlockLineSelectionSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "code-block",
    id: "code-block-search-in-file-radix",
    name: "Code Block",
    variant: "Search In File",
    installTarget: "@reui-unbound/code-block-search-in-file",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/code-block", "button", "button-group", "input", "scroll-area", "@reui-unbound/icon-placeholder"],
    Component: CodeBlockSearchInFilePreview,
    source: CodeBlockSearchInFileSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "code-block",
    id: "code-block-file-tabs-radix",
    name: "Code Block",
    variant: "File Tabs",
    installTarget: "@reui-unbound/code-block-file-tabs",
    extraDependencies: ["@reui-unbound/code-block", "@reui-unbound/frame", "tabs"],
    Component: CodeBlockFileTabsPreview,
    source: CodeBlockFileTabsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "code-block",
    id: "code-block-pre-highlighted-lines-radix",
    name: "Code Block",
    variant: "Pre-Highlighted Lines",
    installTarget: "@reui-unbound/code-block-pre-highlighted-lines",
    extraDependencies: ["@reui-unbound/code-block"],
    Component: CodeBlockPreHighlightedLinesPreview,
    source: CodeBlockPreHighlightedLinesSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "code-block",
    id: "code-block-before-after-radix",
    name: "Code Block",
    variant: "Before & After",
    installTarget: "@reui-unbound/code-block-before-after",
    extraDependencies: ["@reui-unbound/code-block", "@reui-unbound/frame"],
    Component: CodeBlockBeforeAfterPreview,
    source: CodeBlockBeforeAfterSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "code-block",
    id: "code-block-soft-wrap-radix",
    name: "Code Block",
    variant: "Soft Wrap",
    installTarget: "@reui-unbound/code-block-soft-wrap",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/code-block", "separator"],
    Component: CodeBlockSoftWrapPreview,
    source: CodeBlockSoftWrapSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "code-block",
    id: "code-block-unified-patch-radix",
    name: "Code Block",
    variant: "Unified Patch",
    installTarget: "@reui-unbound/code-block-unified-patch",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/code-block"],
    Component: CodeBlockUnifiedPatchPreview,
    source: CodeBlockUnifiedPatchSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "code-block",
    id: "code-block-design-token-theme-radix",
    name: "Code Block",
    variant: "Design Token Theme",
    installTarget: "@reui-unbound/code-block-design-token-theme",
    extraDependencies: ["@reui-unbound/code-block", "scroll-area"],
    Component: CodeBlockDesignTokenThemePreview,
    source: CodeBlockDesignTokenThemeSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "code-block",
    id: "code-block-always-dark-radix",
    name: "Code Block",
    variant: "Always Dark",
    installTarget: "@reui-unbound/code-block-always-dark",
    extraDependencies: ["@reui-unbound/code-block"],
    Component: CodeBlockAlwaysDarkPreview,
    source: CodeBlockAlwaysDarkSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "code-block",
    id: "code-block-dark-terminal-radix",
    name: "Code Block",
    variant: "Dark Terminal",
    installTarget: "@reui-unbound/code-block-dark-terminal",
    extraDependencies: ["@reui-unbound/code-block"],
    Component: CodeBlockDarkTerminalPreview,
    source: CodeBlockDarkTerminalSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "code-block",
    id: "code-block-accept-reject-radix",
    name: "Code Block",
    variant: "Accept & Reject",
    installTarget: "@reui-unbound/code-block-accept-reject",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/code-block", "button", "card"],
    Component: CodeBlockAcceptRejectPreview,
    source: CodeBlockAcceptRejectSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "code-block",
    id: "code-block-code-folding-radix",
    name: "Code Block",
    variant: "Code Folding",
    installTarget: "@reui-unbound/code-block-code-folding",
    extraDependencies: ["@reui-unbound/code-block", "button", "scroll-area", "separator"],
    Component: CodeBlockCodeFoldingPreview,
    source: CodeBlockCodeFoldingSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "code-block",
    id: "code-block-fix-with-ai-radix",
    name: "Code Block",
    variant: "Fix With AI",
    installTarget: "@reui-unbound/code-block-fix-with-ai",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/code-block", "button", "@reui-unbound/icon-placeholder"],
    Component: CodeBlockFixWithAiPreview,
    source: CodeBlockFixWithAiSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "code-block",
    id: "code-block-reference-lines-radix",
    name: "Code Block",
    variant: "Reference Lines",
    installTarget: "@reui-unbound/code-block-reference-lines",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/code-block", "button", "card", "@reui-unbound/icon-placeholder"],
    Component: CodeBlockReferenceLinesPreview,
    source: CodeBlockReferenceLinesSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "code-block",
    id: "code-block-external-scroll-radix",
    name: "Code Block",
    variant: "External Scroll",
    installTarget: "@reui-unbound/code-block-external-scroll",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/code-block", "card", "scroll-area"],
    Component: CodeBlockExternalScrollPreview,
    source: CodeBlockExternalScrollSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "code-block",
    id: "code-block-ansi-terminal-radix",
    name: "Code Block",
    variant: "ANSI Terminal",
    installTarget: "@reui-unbound/code-block-ansi-terminal",
    extraDependencies: ["@reui-unbound/code-block"],
    Component: CodeBlockAnsiTerminalPreview,
    source: CodeBlockAnsiTerminalSource,
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
    item: "color-picker",
    id: "color-picker-inline-panel-radix",
    name: "Color Picker",
    variant: "Inline Panel",
    installTarget: "@reui-unbound/color-picker-inline-panel",
    extraDependencies: ["@reui-unbound/color-picker", "card"],
    Component: RadixColorPickerInlinePanelPreview,
    source: RadixColorPickerInlinePanelSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "color-picker",
    id: "color-picker-popover-radix",
    name: "Color Picker",
    variant: "Popover",
    installTarget: "@reui-unbound/color-picker-popover",
    extraDependencies: ["@reui-unbound/color-picker", "field"],
    Component: RadixColorPickerPopoverPreview,
    source: RadixColorPickerPopoverSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "color-picker",
    id: "color-picker-color-input-radix",
    name: "Color Picker",
    variant: "Color Input",
    installTarget: "@reui-unbound/color-picker-color-input",
    extraDependencies: ["@reui-unbound/color-picker", "field"],
    Component: RadixColorPickerColorInputPreview,
    source: RadixColorPickerColorInputSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "color-picker",
    id: "color-picker-opacity-radix",
    name: "Color Picker",
    variant: "Opacity",
    installTarget: "@reui-unbound/color-picker-opacity",
    extraDependencies: ["@reui-unbound/color-picker", "card", "field"],
    Component: RadixColorPickerOpacityPreview,
    source: RadixColorPickerOpacitySource,
  }),
  componentEntry({
    flavor: "radix",
    item: "color-picker",
    id: "color-picker-preset-swatches-radix",
    name: "Color Picker",
    variant: "Preset Swatches",
    installTarget: "@reui-unbound/color-picker-preset-swatches",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/color-picker", "card", "field", "input", "@reui-unbound/icon-placeholder"],
    Component: RadixColorPickerPresetSwatchesPreview,
    source: RadixColorPickerPresetSwatchesSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "color-picker",
    id: "color-picker-oklch-token-radix",
    name: "Color Picker",
    variant: "OKLCH Token",
    installTarget: "@reui-unbound/color-picker-oklch-token",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/color-picker", "button", "card", "checkbox", "input-group", "label"],
    Component: RadixColorPickerOklchTokenPreview,
    source: RadixColorPickerOklchTokenSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "color-picker",
    id: "color-picker-format-converter-radix",
    name: "Color Picker",
    variant: "Format Converter",
    installTarget: "@reui-unbound/color-picker-format-converter",
    extraDependencies: ["@reui-unbound/color-picker", "card"],
    Component: RadixColorPickerFormatConverterPreview,
    source: RadixColorPickerFormatConverterSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "color-picker",
    id: "color-picker-hue-wheel-radix",
    name: "Color Picker",
    variant: "Hue Wheel",
    installTarget: "@reui-unbound/color-picker-hue-wheel",
    extraDependencies: ["@reui-unbound/color-picker", "card"],
    Component: RadixColorPickerHueWheelPreview,
    source: RadixColorPickerHueWheelSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "color-picker",
    id: "color-picker-recent-colors-radix",
    name: "Color Picker",
    variant: "Recent Colors",
    installTarget: "@reui-unbound/color-picker-recent-colors",
    extraDependencies: ["@reui-unbound/color-picker", "field"],
    Component: RadixColorPickerRecentColorsPreview,
    source: RadixColorPickerRecentColorsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "color-picker",
    id: "color-picker-text-highlight-radix",
    name: "Color Picker",
    variant: "Text & Highlight",
    installTarget: "@reui-unbound/color-picker-text-highlight",
    extraDependencies: ["@reui-unbound/color-picker", "@reui-unbound/frame", "separator", "toggle", "@reui-unbound/icon-placeholder"],
    Component: RadixColorPickerTextHighlightPreview,
    source: RadixColorPickerTextHighlightSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "color-picker",
    id: "color-picker-channel-sliders-radix",
    name: "Color Picker",
    variant: "Channel Sliders",
    installTarget: "@reui-unbound/color-picker-channel-sliders",
    extraDependencies: ["@reui-unbound/color-picker", "card", "input-group"],
    Component: RadixColorPickerChannelSlidersPreview,
    source: RadixColorPickerChannelSlidersSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "color-picker",
    id: "color-picker-design-inspector-radix",
    name: "Color Picker",
    variant: "Design Inspector",
    installTarget: "@reui-unbound/color-picker-design-inspector",
    extraDependencies: ["@reui-unbound/color-picker", "card"],
    Component: RadixColorPickerDesignInspectorPreview,
    source: RadixColorPickerDesignInspectorSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "color-picker",
    id: "color-picker-contrast-checker-radix",
    name: "Color Picker",
    variant: "Contrast Checker",
    installTarget: "@reui-unbound/color-picker-contrast-checker",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/color-picker", "@reui-unbound/frame", "button", "card", "field", "@reui-unbound/icon-placeholder"],
    Component: RadixColorPickerContrastCheckerPreview,
    source: RadixColorPickerContrastCheckerSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "color-picker",
    id: "color-picker-brand-scale-radix",
    name: "Color Picker",
    variant: "Brand Scale",
    installTarget: "@reui-unbound/color-picker-brand-scale",
    extraDependencies: ["@reui-unbound/color-picker", "button", "card", "field"],
    Component: RadixColorPickerBrandScalePreview,
    source: RadixColorPickerBrandScaleSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "color-picker",
    id: "color-picker-form-validation-radix",
    name: "Color Picker",
    variant: "Form Validation",
    installTarget: "@reui-unbound/color-picker-form-validation",
    extraDependencies: ["@reui-unbound/color-picker", "button", "field"],
    Component: RadixColorPickerFormValidationPreview,
    source: RadixColorPickerFormValidationSource,
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
    item: "data-grid",
    id: "data-grid-pagination-radix",
    name: "Data Grid",
    variant: "Pagination",
    installTarget: "@reui-unbound/data-grid-pagination",
    extraDependencies: ["@reui-unbound/data-grid"],
    Component: RadixDataGridPaginationPreview,
    source: RadixDataGridPaginationSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "data-grid",
    id: "data-grid-cell-borders-radix",
    name: "Data Grid",
    variant: "Cell Borders",
    installTarget: "@reui-unbound/data-grid-cell-borders",
    extraDependencies: ["@reui-unbound/data-grid", "avatar", "card"],
    Component: RadixDataGridCellBordersPreview,
    source: RadixDataGridCellBordersSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "data-grid",
    id: "data-grid-dense-layout-radix",
    name: "Data Grid",
    variant: "Dense Layout",
    installTarget: "@reui-unbound/data-grid-dense-layout",
    extraDependencies: ["@reui-unbound/data-grid", "avatar"],
    Component: RadixDataGridDenseLayoutPreview,
    source: RadixDataGridDenseLayoutSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "data-grid",
    id: "data-grid-borderless-radix",
    name: "Data Grid",
    variant: "Borderless",
    installTarget: "@reui-unbound/data-grid-borderless",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/data-grid", "avatar"],
    Component: RadixDataGridBorderlessPreview,
    source: RadixDataGridBorderlessSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "data-grid",
    id: "data-grid-striped-rows-radix",
    name: "Data Grid",
    variant: "Striped Rows",
    installTarget: "@reui-unbound/data-grid-striped-rows",
    extraDependencies: ["@reui-unbound/data-grid", "avatar"],
    Component: RadixDataGridStripedRowsPreview,
    source: RadixDataGridStripedRowsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "data-grid",
    id: "data-grid-auto-width-radix",
    name: "Data Grid",
    variant: "Auto Width",
    installTarget: "@reui-unbound/data-grid-auto-width",
    extraDependencies: ["@reui-unbound/data-grid", "avatar"],
    Component: RadixDataGridAutoWidthPreview,
    source: RadixDataGridAutoWidthSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "data-grid",
    id: "data-grid-row-selection-radix",
    name: "Data Grid",
    variant: "Row Selection",
    installTarget: "@reui-unbound/data-grid-row-selection",
    extraDependencies: ["@reui-unbound/data-grid", "avatar"],
    Component: RadixDataGridRowSelectionPreview,
    source: RadixDataGridRowSelectionSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "data-grid",
    id: "data-grid-expandable-rows-radix",
    name: "Data Grid",
    variant: "Expandable Rows",
    installTarget: "@reui-unbound/data-grid-expandable-rows",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/data-grid", "avatar", "button", "@reui-unbound/icon-placeholder"],
    Component: RadixDataGridExpandableRowsPreview,
    source: RadixDataGridExpandableRowsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "data-grid",
    id: "data-grid-sub-table-radix",
    name: "Data Grid",
    variant: "Sub Table",
    installTarget: "@reui-unbound/data-grid-sub-table",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/data-grid", "avatar", "button", "card", "@reui-unbound/icon-placeholder"],
    Component: RadixDataGridSubTablePreview,
    source: RadixDataGridSubTableSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "data-grid",
    id: "data-grid-column-icons-radix",
    name: "Data Grid",
    variant: "Column Icons",
    installTarget: "@reui-unbound/data-grid-column-icons",
    extraDependencies: ["@reui-unbound/data-grid", "avatar", "@reui-unbound/icon-placeholder"],
    Component: RadixDataGridColumnIconsPreview,
    source: RadixDataGridColumnIconsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "data-grid",
    id: "data-grid-sortable-columns-radix",
    name: "Data Grid",
    variant: "Sortable Columns",
    installTarget: "@reui-unbound/data-grid-sortable-columns",
    extraDependencies: ["@reui-unbound/data-grid", "avatar"],
    Component: RadixDataGridSortableColumnsPreview,
    source: RadixDataGridSortableColumnsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "data-grid",
    id: "data-grid-movable-columns-radix",
    name: "Data Grid",
    variant: "Movable Columns",
    installTarget: "@reui-unbound/data-grid-movable-columns",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/data-grid", "avatar"],
    Component: RadixDataGridMovableColumnsPreview,
    source: RadixDataGridMovableColumnsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "data-grid",
    id: "data-grid-draggable-columns-radix",
    name: "Data Grid",
    variant: "Draggable Columns",
    installTarget: "@reui-unbound/data-grid-draggable-columns",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/data-grid", "avatar"],
    Component: RadixDataGridDraggableColumnsPreview,
    source: RadixDataGridDraggableColumnsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "data-grid",
    id: "data-grid-draggable-rows-radix",
    name: "Data Grid",
    variant: "Draggable Rows",
    installTarget: "@reui-unbound/data-grid-draggable-rows",
    extraDependencies: ["@reui-unbound/data-grid", "avatar"],
    Component: RadixDataGridDraggableRowsPreview,
    source: RadixDataGridDraggableRowsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "data-grid",
    id: "data-grid-column-resizing-radix",
    name: "Data Grid",
    variant: "Column Resizing",
    installTarget: "@reui-unbound/data-grid-column-resizing",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/data-grid", "avatar", "card"],
    Component: RadixDataGridColumnResizingPreview,
    source: RadixDataGridColumnResizingSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "data-grid",
    id: "data-grid-pinnable-columns-radix",
    name: "Data Grid",
    variant: "Pinnable Columns",
    installTarget: "@reui-unbound/data-grid-pinnable-columns",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/data-grid", "avatar", "card"],
    Component: RadixDataGridPinnableColumnsPreview,
    source: RadixDataGridPinnableColumnsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "data-grid",
    id: "data-grid-sticky-header-radix",
    name: "Data Grid",
    variant: "Sticky Header",
    installTarget: "@reui-unbound/data-grid-sticky-header",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/data-grid", "avatar"],
    Component: RadixDataGridStickyHeaderPreview,
    source: RadixDataGridStickyHeaderSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "data-grid",
    id: "data-grid-column-controls-radix",
    name: "Data Grid",
    variant: "Column Controls",
    installTarget: "@reui-unbound/data-grid-column-controls",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/data-grid", "avatar", "card"],
    Component: RadixDataGridColumnControlsPreview,
    source: RadixDataGridColumnControlsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "data-grid",
    id: "data-grid-card-container-radix",
    name: "Data Grid",
    variant: "Card Container",
    installTarget: "@reui-unbound/data-grid-card-container",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/data-grid", "avatar", "button", "card", "@reui-unbound/icon-placeholder"],
    Component: RadixDataGridCardContainerPreview,
    source: RadixDataGridCardContainerSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "data-grid",
    id: "data-grid-column-visibility-radix",
    name: "Data Grid",
    variant: "Column Visibility",
    installTarget: "@reui-unbound/data-grid-column-visibility",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/data-grid", "avatar", "button", "card", "@reui-unbound/icon-placeholder"],
    Component: RadixDataGridColumnVisibilityPreview,
    source: RadixDataGridColumnVisibilitySource,
  }),
  componentEntry({
    flavor: "radix",
    item: "data-grid",
    id: "data-grid-loading-skeleton-radix",
    name: "Data Grid",
    variant: "Loading Skeleton",
    installTarget: "@reui-unbound/data-grid-loading-skeleton",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/data-grid", "avatar", "button", "card", "skeleton"],
    Component: RadixDataGridLoadingSkeletonPreview,
    source: RadixDataGridLoadingSkeletonSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "data-grid",
    id: "data-grid-crud-admin-radix",
    name: "Data Grid",
    variant: "CRUD Admin",
    installTarget: "@reui-unbound/data-grid-crud-admin",
    extraDependencies: ["@reui-unbound/use-copy-to-clipboard", "@reui-unbound/badge", "@reui-unbound/data-grid", "avatar", "button", "card", "checkbox", "dropdown-menu", "input-group", "label", "popover", "@reui-unbound/icon-placeholder"],
    Component: RadixDataGridCrudAdminPreview,
    source: RadixDataGridCrudAdminSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "data-grid",
    id: "data-grid-crud-in-frame-radix",
    name: "Data Grid",
    variant: "CRUD in Frame",
    installTarget: "@reui-unbound/data-grid-crud-in-frame",
    extraDependencies: ["@reui-unbound/use-copy-to-clipboard", "@reui-unbound/badge", "@reui-unbound/data-grid", "@reui-unbound/frame", "avatar", "button", "checkbox", "dropdown-menu", "input-group", "label", "popover", "@reui-unbound/icon-placeholder"],
    Component: RadixDataGridCrudInFramePreview,
    source: RadixDataGridCrudInFrameSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "data-grid",
    id: "data-grid-totals-footer-radix",
    name: "Data Grid",
    variant: "Totals Footer",
    installTarget: "@reui-unbound/data-grid-totals-footer",
    extraDependencies: ["@reui-unbound/use-copy-to-clipboard", "@reui-unbound/badge", "@reui-unbound/data-grid", "avatar", "button", "card", "dropdown-menu", "separator", "@reui-unbound/icon-placeholder"],
    Component: RadixDataGridTotalsFooterPreview,
    source: RadixDataGridTotalsFooterSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "data-grid",
    id: "data-grid-summary-stats-footer-radix",
    name: "Data Grid",
    variant: "Summary Stats Footer",
    installTarget: "@reui-unbound/data-grid-summary-stats-footer",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/data-grid", "avatar", "button", "card", "@reui-unbound/icon-placeholder"],
    Component: RadixDataGridSummaryStatsFooterPreview,
    source: RadixDataGridSummaryStatsFooterSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "data-grid",
    id: "data-grid-aggregate-footer-radix",
    name: "Data Grid",
    variant: "Aggregate Footer",
    installTarget: "@reui-unbound/data-grid-aggregate-footer",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/data-grid", "avatar", "button", "card", "@reui-unbound/icon-placeholder"],
    Component: RadixDataGridAggregateFooterPreview,
    source: RadixDataGridAggregateFooterSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "data-grid",
    id: "data-grid-local-infinite-scroll-radix",
    name: "Data Grid",
    variant: "Local Infinite Scroll",
    installTarget: "@reui-unbound/data-grid-local-infinite-scroll",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/data-grid", "avatar", "button", "card", "@reui-unbound/icon-placeholder"],
    Component: RadixDataGridLocalInfiniteScrollPreview,
    source: RadixDataGridLocalInfiniteScrollSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "data-grid",
    id: "data-grid-remote-infinite-scroll-radix",
    name: "Data Grid",
    variant: "Remote Infinite Scroll",
    installTarget: "@reui-unbound/data-grid-remote-infinite-scroll",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/data-grid", "avatar", "button", "card", "@reui-unbound/icon-placeholder"],
    Component: RadixDataGridRemoteInfiniteScrollPreview,
    source: RadixDataGridRemoteInfiniteScrollSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "data-grid",
    id: "data-grid-row-pinning-radix",
    name: "Data Grid",
    variant: "Row Pinning",
    installTarget: "@reui-unbound/data-grid-row-pinning",
    extraDependencies: ["@reui-unbound/use-copy-to-clipboard", "@reui-unbound/badge", "@reui-unbound/data-grid", "avatar", "button", "card", "dropdown-menu", "@reui-unbound/icon-placeholder"],
    Component: RadixDataGridRowPinningPreview,
    source: RadixDataGridRowPinningSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "data-grid",
    id: "data-grid-tree-rows-radix",
    name: "Data Grid",
    variant: "Tree Rows",
    installTarget: "@reui-unbound/data-grid-tree-rows",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/data-grid", "avatar", "card"],
    Component: RadixDataGridTreeRowsPreview,
    source: RadixDataGridTreeRowsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "data-grid",
    id: "data-grid-spreadsheet-editing-radix",
    name: "Data Grid",
    variant: "Spreadsheet Editing",
    installTarget: "@reui-unbound/data-grid-spreadsheet-editing",
    extraDependencies: ["@reui-unbound/data-grid", "@reui-unbound/icon-placeholder", "@reui-unbound/badge", "avatar", "button", "alert-dialog", "context-menu", "combobox", "calendar", "popover", "card", "select"],
    Component: RadixDataGridSpreadsheetEditingPreview,
    source: RadixDataGridSpreadsheetEditingSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "data-grid",
    id: "data-grid-column-virtualization-radix",
    name: "Data Grid",
    variant: "Column Virtualization",
    installTarget: "@reui-unbound/data-grid-column-virtualization",
    extraDependencies: ["@reui-unbound/data-grid", "avatar", "button", "card", "@reui-unbound/icon-placeholder"],
    Component: RadixDataGridColumnVirtualizationPreview,
    source: RadixDataGridColumnVirtualizationSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "data-grid",
    id: "data-grid-localized-labels-radix",
    name: "Data Grid",
    variant: "Localized Labels",
    installTarget: "@reui-unbound/data-grid-localized-labels",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/data-grid", "avatar", "card", "toggle-group"],
    Component: RadixDataGridLocalizedLabelsPreview,
    source: RadixDataGridLocalizedLabelsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "data-grid",
    id: "data-grid-server-side-pagination-radix",
    name: "Data Grid",
    variant: "Server-Side Pagination",
    installTarget: "@reui-unbound/data-grid-server-side-pagination",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/data-grid", "avatar", "button", "card", "input", "select", "skeleton", "@reui-unbound/icon-placeholder"],
    Component: RadixDataGridServerSidePaginationPreview,
    source: RadixDataGridServerSidePaginationSource,
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
    item: "date-selector",
    id: "date-selector-standard-inline-radix",
    name: "Date Selector",
    variant: "Standard Inline",
    installTarget: "@reui-unbound/date-selector-standard-inline",
    extraDependencies: ["@reui-unbound/date-selector", "card"],
    Component: RadixDateSelectorStandardInlinePreview,
    source: RadixDateSelectorStandardInlineSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "date-selector",
    id: "date-selector-popover-radix",
    name: "Date Selector",
    variant: "Popover",
    installTarget: "@reui-unbound/date-selector-popover",
    extraDependencies: ["@reui-unbound/date-selector", "button", "popover", "separator", "@reui-unbound/icon-placeholder"],
    Component: RadixDateSelectorPopoverPreview,
    source: RadixDateSelectorPopoverSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "date-selector",
    id: "date-selector-dialog-radix",
    name: "Date Selector",
    variant: "Dialog",
    installTarget: "@reui-unbound/date-selector-dialog",
    extraDependencies: ["@reui-unbound/date-selector", "button", "dialog", "@reui-unbound/icon-placeholder"],
    Component: RadixDateSelectorDialogPreview,
    source: RadixDateSelectorDialogSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "date-selector",
    id: "date-selector-language-menu-radix",
    name: "Date Selector",
    variant: "Language Menu",
    installTarget: "@reui-unbound/date-selector-language-menu",
    extraDependencies: ["@reui-unbound/date-selector", "button", "dialog", "dropdown-menu", "@reui-unbound/icon-placeholder"],
    Component: RadixDateSelectorLanguageMenuPreview,
    source: RadixDateSelectorLanguageMenuSource,
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
    item: "emoji-picker",
    id: "emoji-picker-inline-radix",
    name: "Emoji Picker",
    variant: "Inline",
    installTarget: "@reui-unbound/emoji-picker-inline",
    extraDependencies: ["@reui-unbound/emoji-picker", "card"],
    Component: RadixEmojiPickerInlinePreview,
    source: RadixEmojiPickerInlineSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "emoji-picker",
    id: "emoji-picker-chat-composer-radix",
    name: "Emoji Picker",
    variant: "Chat Composer",
    installTarget: "@reui-unbound/emoji-picker-chat-composer",
    extraDependencies: ["@reui-unbound/emoji-picker", "avatar", "bubble", "button", "card", "input-group", "message", "separator", "@reui-unbound/icon-placeholder"],
    Component: RadixEmojiPickerChatComposerPreview,
    source: RadixEmojiPickerChatComposerSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "emoji-picker",
    id: "emoji-picker-message-reactions-radix",
    name: "Emoji Picker",
    variant: "Message Reactions",
    installTarget: "@reui-unbound/emoji-picker-message-reactions",
    extraDependencies: ["@reui-unbound/emoji-picker", "avatar", "button", "item", "tooltip", "@reui-unbound/icon-placeholder"],
    Component: RadixEmojiPickerMessageReactionsPreview,
    source: RadixEmojiPickerMessageReactionsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "emoji-picker",
    id: "emoji-picker-page-icon-radix",
    name: "Emoji Picker",
    variant: "Page Icon",
    installTarget: "@reui-unbound/emoji-picker-page-icon",
    extraDependencies: ["@reui-unbound/emoji-picker", "avatar", "@reui-unbound/badge", "breadcrumb", "button", "card", "popover", "separator", "@reui-unbound/icon-placeholder"],
    Component: RadixEmojiPickerPageIconPreview,
    source: RadixEmojiPickerPageIconSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "emoji-picker",
    id: "emoji-picker-custom-team-emoji-radix",
    name: "Emoji Picker",
    variant: "Custom Team Emoji",
    installTarget: "@reui-unbound/emoji-picker-custom-team-emoji",
    extraDependencies: ["@reui-unbound/emoji-picker", "avatar", "button", "card", "input-group", "item", "separator", "@reui-unbound/icon-placeholder"],
    Component: RadixEmojiPickerCustomTeamEmojiPreview,
    source: RadixEmojiPickerCustomTeamEmojiSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "emoji-picker",
    id: "emoji-picker-shortcode-suggestions-radix",
    name: "Emoji Picker",
    variant: "Shortcode Suggestions",
    installTarget: "@reui-unbound/emoji-picker-shortcode-suggestions",
    extraDependencies: ["@reui-unbound/emoji-picker", "avatar", "button", "card", "input-group", "item", "@reui-unbound/icon-placeholder"],
    Component: RadixEmojiPickerShortcodeSuggestionsPreview,
    source: RadixEmojiPickerShortcodeSuggestionsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "emoji-picker",
    id: "emoji-picker-workplace-safe-set-radix",
    name: "Emoji Picker",
    variant: "Workplace-Safe Set",
    installTarget: "@reui-unbound/emoji-picker-workplace-safe-set",
    extraDependencies: ["@reui-unbound/emoji-picker", "avatar", "button", "card", "item", "textarea", "@reui-unbound/icon-placeholder"],
    Component: RadixEmojiPickerWorkplaceSafeSetPreview,
    source: RadixEmojiPickerWorkplaceSafeSetSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "emoji-picker",
    id: "emoji-picker-localized-labels-radix",
    name: "Emoji Picker",
    variant: "Localized Labels",
    installTarget: "@reui-unbound/emoji-picker-localized-labels",
    extraDependencies: ["@reui-unbound/emoji-picker", "card", "native-select"],
    Component: RadixEmojiPickerLocalizedLabelsPreview,
    source: RadixEmojiPickerLocalizedLabelsSource,
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
    item: "event-calendar",
    id: "event-calendar-all-views-radix",
    name: "Event Calendar",
    variant: "All Views",
    installTarget: "@reui-unbound/event-calendar-all-views",
    extraDependencies: ["@reui-unbound/event-calendar", "avatar", "button", "card", "label", "popover", "select", "switch", "tabs", "@reui-unbound/icon-placeholder"],
    Component: RadixEventCalendarAllViewsPreview,
    source: RadixEventCalendarAllViewsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "event-calendar",
    id: "event-calendar-room-bookings-radix",
    name: "Event Calendar",
    variant: "Room Bookings",
    installTarget: "@reui-unbound/event-calendar-room-bookings",
    extraDependencies: ["@reui-unbound/event-calendar", "button", "card", "@reui-unbound/icon-placeholder"],
    Component: RadixEventCalendarRoomBookingsPreview,
    source: RadixEventCalendarRoomBookingsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "event-calendar",
    id: "event-calendar-event-form-dialog-radix",
    name: "Event Calendar",
    variant: "Event Form Dialog",
    installTarget: "@reui-unbound/event-calendar-event-form-dialog",
    extraDependencies: ["@reui-unbound/event-calendar", "button", "card", "dialog", "field", "input", "select", "switch", "@reui-unbound/icon-placeholder"],
    Component: RadixEventCalendarEventFormDialogPreview,
    source: RadixEventCalendarEventFormDialogSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "event-calendar",
    id: "event-calendar-custom-event-chips-radix",
    name: "Event Calendar",
    variant: "Custom Event Chips",
    installTarget: "@reui-unbound/event-calendar-custom-event-chips",
    extraDependencies: ["@reui-unbound/event-calendar", "button", "card", "@reui-unbound/icon-placeholder"],
    Component: RadixEventCalendarCustomEventChipsPreview,
    source: RadixEventCalendarCustomEventChipsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "event-calendar",
    id: "event-calendar-drag-to-book-radix",
    name: "Event Calendar",
    variant: "Drag-to-Book",
    installTarget: "@reui-unbound/event-calendar-drag-to-book",
    extraDependencies: ["@reui-unbound/event-calendar", "avatar", "button", "card", "@reui-unbound/icon-placeholder"],
    Component: RadixEventCalendarDragToBookPreview,
    source: RadixEventCalendarDragToBookSource,
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
    item: "file-type",
    id: "file-type-common-formats-radix",
    name: "File Type",
    variant: "Common Formats",
    installTarget: "@reui-unbound/file-type-common-formats",
    extraDependencies: ["@reui-unbound/file-type"],
    Component: RadixFileTypeCommonFormatsPreview,
    source: RadixFileTypeCommonFormatsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "file-type",
    id: "file-type-variants-radix",
    name: "File Type",
    variant: "Variants",
    installTarget: "@reui-unbound/file-type-variants",
    extraDependencies: ["@reui-unbound/file-type"],
    Component: RadixFileTypeVariantsPreview,
    source: RadixFileTypeVariantsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "file-type",
    id: "file-type-sizes-radix",
    name: "File Type",
    variant: "Sizes",
    installTarget: "@reui-unbound/file-type-sizes",
    extraDependencies: ["@reui-unbound/file-type"],
    Component: RadixFileTypeSizesPreview,
    source: RadixFileTypeSizesSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "file-type",
    id: "file-type-family-glyphs-radix",
    name: "File Type",
    variant: "Family Glyphs",
    installTarget: "@reui-unbound/file-type-family-glyphs",
    extraDependencies: ["@reui-unbound/file-type"],
    Component: RadixFileTypeFamilyGlyphsPreview,
    source: RadixFileTypeFamilyGlyphsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "file-type",
    id: "file-type-all-formats-radix",
    name: "File Type",
    variant: "All Formats",
    installTarget: "@reui-unbound/file-type-all-formats",
    extraDependencies: ["@reui-unbound/file-type", "tabs"],
    Component: RadixFileTypeAllFormatsPreview,
    source: RadixFileTypeAllFormatsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "file-type",
    id: "file-type-file-browser-radix",
    name: "File Type",
    variant: "File Browser",
    installTarget: "@reui-unbound/file-type-file-browser",
    extraDependencies: ["@reui-unbound/data-grid", "@reui-unbound/file-type"],
    Component: RadixFileTypeFileBrowserPreview,
    source: RadixFileTypeFileBrowserSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "file-type",
    id: "file-type-attachment-list-radix",
    name: "File Type",
    variant: "Attachment List",
    installTarget: "@reui-unbound/file-type-attachment-list",
    extraDependencies: ["@reui-unbound/file-type", "button", "item", "@reui-unbound/icon-placeholder"],
    Component: RadixFileTypeAttachmentListPreview,
    source: RadixFileTypeAttachmentListSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "file-type",
    id: "file-type-upload-queue-radix",
    name: "File Type",
    variant: "Upload Queue",
    installTarget: "@reui-unbound/file-type-upload-queue",
    extraDependencies: ["@reui-unbound/file-type", "button", "item", "progress", "@reui-unbound/icon-placeholder"],
    Component: RadixFileTypeUploadQueuePreview,
    source: RadixFileTypeUploadQueueSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "file-type",
    id: "file-type-resolve-from-name-radix",
    name: "File Type",
    variant: "Resolve From Name",
    installTarget: "@reui-unbound/file-type-resolve-from-name",
    extraDependencies: ["@reui-unbound/file-type", "button", "card", "field", "input-group", "@reui-unbound/icon-placeholder"],
    Component: RadixFileTypeResolveFromNamePreview,
    source: RadixFileTypeResolveFromNameSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "file-type",
    id: "file-type-custom-labels-radix",
    name: "File Type",
    variant: "Custom Labels",
    installTarget: "@reui-unbound/file-type-custom-labels",
    extraDependencies: ["@reui-unbound/file-type", "item"],
    Component: RadixFileTypeCustomLabelsPreview,
    source: RadixFileTypeCustomLabelsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "file-type",
    id: "file-type-custom-colors-radix",
    name: "File Type",
    variant: "Custom Colors",
    installTarget: "@reui-unbound/file-type-custom-colors",
    extraDependencies: ["@reui-unbound/file-type"],
    Component: RadixFileTypeCustomColorsPreview,
    source: RadixFileTypeCustomColorsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "file-type",
    id: "file-type-format-picker-radix",
    name: "File Type",
    variant: "Format Picker",
    installTarget: "@reui-unbound/file-type-format-picker",
    extraDependencies: ["@reui-unbound/file-type", "button", "field", "radio-group"],
    Component: RadixFileTypeFormatPickerPreview,
    source: RadixFileTypeFormatPickerSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "file-type",
    id: "file-type-locked-starred-radix",
    name: "File Type",
    variant: "Locked & Starred",
    installTarget: "@reui-unbound/file-type-locked-starred",
    extraDependencies: ["@reui-unbound/file-type", "@reui-unbound/icon-placeholder"],
    Component: RadixFileTypeLockedStarredPreview,
    source: RadixFileTypeLockedStarredSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "file-type",
    id: "file-type-restyled-labels-radix",
    name: "File Type",
    variant: "Restyled Labels",
    installTarget: "@reui-unbound/file-type-restyled-labels",
    extraDependencies: ["@reui-unbound/file-type"],
    Component: RadixFileTypeRestyledLabelsPreview,
    source: RadixFileTypeRestyledLabelsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "file-type",
    id: "file-type-dotfiles-build-names-radix",
    name: "File Type",
    variant: "Dotfiles & Build Names",
    installTarget: "@reui-unbound/file-type-dotfiles-build-names",
    extraDependencies: ["@reui-unbound/file-type"],
    Component: RadixFileTypeDotfilesBuildNamesPreview,
    source: RadixFileTypeDotfilesBuildNamesSource,
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
    item: "filters",
    id: "filters-full-filter-bar-radix",
    name: "Filters",
    variant: "Full Filter Bar",
    installTarget: "@reui-unbound/filters-full-filter-bar",
    extraDependencies: ["@reui-unbound/filters", "avatar", "@reui-unbound/icon-placeholder"],
    Component: RadixFiltersFullFilterBarPreview,
    source: RadixFiltersFullFilterBarSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "filters",
    id: "filters-nested-attributes-radix",
    name: "Filters",
    variant: "Nested Attributes",
    installTarget: "@reui-unbound/filters-nested-attributes",
    extraDependencies: ["@reui-unbound/filters", "@reui-unbound/icon-placeholder"],
    Component: RadixFiltersNestedAttributesPreview,
    source: RadixFiltersNestedAttributesSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "filters",
    id: "filters-status-badges-radix",
    name: "Filters",
    variant: "Status Badges",
    installTarget: "@reui-unbound/filters-status-badges",
    extraDependencies: ["@reui-unbound/filters", "@reui-unbound/badge", "@reui-unbound/icon-placeholder"],
    Component: RadixFiltersStatusBadgesPreview,
    source: RadixFiltersStatusBadgesSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "filters",
    id: "filters-avatars-paging-radix",
    name: "Filters",
    variant: "Avatars & Paging",
    installTarget: "@reui-unbound/filters-avatars-paging",
    extraDependencies: ["@reui-unbound/filters", "avatar", "button", "@reui-unbound/icon-placeholder"],
    Component: RadixFiltersAvatarsPagingPreview,
    source: RadixFiltersAvatarsPagingSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "filters",
    id: "filters-date-editors-radix",
    name: "Filters",
    variant: "Date Editors",
    installTarget: "@reui-unbound/filters-date-editors",
    extraDependencies: ["@reui-unbound/filters", "button", "calendar", "input", "@reui-unbound/icon-placeholder"],
    Component: RadixFiltersDateEditorsPreview,
    source: RadixFiltersDateEditorsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "filters",
    id: "filters-slider-editor-radix",
    name: "Filters",
    variant: "Slider Editor",
    installTarget: "@reui-unbound/filters-slider-editor",
    extraDependencies: ["@reui-unbound/filters", "button", "slider", "@reui-unbound/icon-placeholder"],
    Component: RadixFiltersSliderEditorPreview,
    source: RadixFiltersSliderEditorSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "filters",
    id: "filters-table-filtering-radix",
    name: "Filters",
    variant: "Table Filtering",
    installTarget: "@reui-unbound/filters-table-filtering",
    extraDependencies: ["@reui-unbound/data-grid", "@reui-unbound/filters", "avatar", "@reui-unbound/badge", "card", "@reui-unbound/icon-placeholder"],
    Component: RadixFiltersTableFilteringPreview,
    source: RadixFiltersTableFilteringSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "filters",
    id: "filters-choice-controls-radix",
    name: "Filters",
    variant: "Choice Controls",
    installTarget: "@reui-unbound/filters-choice-controls",
    extraDependencies: ["@reui-unbound/filters", "button", "checkbox", "label", "native-select", "radio-group", "switch", "toggle-group", "@reui-unbound/icon-placeholder"],
    Component: RadixFiltersChoiceControlsPreview,
    source: RadixFiltersChoiceControlsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "filters",
    id: "filters-typed-inputs-radix",
    name: "Filters",
    variant: "Typed Inputs",
    installTarget: "@reui-unbound/filters-typed-inputs",
    extraDependencies: ["@reui-unbound/filters", "button", "input", "input-group", "input-otp", "textarea", "@reui-unbound/icon-placeholder"],
    Component: RadixFiltersTypedInputsPreview,
    source: RadixFiltersTypedInputsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "filters",
    id: "filters-popover-builder-radix",
    name: "Filters",
    variant: "Popover Builder",
    installTarget: "@reui-unbound/filters-popover-builder",
    extraDependencies: ["@reui-unbound/data-grid", "@reui-unbound/filters", "avatar", "@reui-unbound/badge", "button", "card", "@reui-unbound/icon-placeholder"],
    Component: RadixFiltersPopoverBuilderPreview,
    source: RadixFiltersPopoverBuilderSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "filters",
    id: "filters-inline-builder-radix",
    name: "Filters",
    variant: "Inline Builder",
    installTarget: "@reui-unbound/filters-inline-builder",
    extraDependencies: ["@reui-unbound/filters", "avatar", "button", "card", "@reui-unbound/icon-placeholder"],
    Component: RadixFiltersInlineBuilderPreview,
    source: RadixFiltersInlineBuilderSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "filters",
    id: "filters-controlled-translated-radix",
    name: "Filters",
    variant: "Controlled & Translated",
    installTarget: "@reui-unbound/filters-controlled-translated",
    extraDependencies: ["@reui-unbound/filters", "avatar", "@reui-unbound/badge", "toggle-group", "@reui-unbound/icon-placeholder"],
    Component: RadixFiltersControlledTranslatedPreview,
    source: RadixFiltersControlledTranslatedSource,
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
    item: "frame",
    id: "frame-standard-radix",
    name: "Frame",
    variant: "Standard",
    installTarget: "@reui-unbound/frame-standard",
    extraDependencies: ["@reui-unbound/frame"],
    Component: RadixFrameStandardPreview,
    source: RadixFrameStandardSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "frame",
    id: "frame-separated-panels-radix",
    name: "Frame",
    variant: "Separated Panels",
    installTarget: "@reui-unbound/frame-separated-panels",
    extraDependencies: ["@reui-unbound/frame"],
    Component: RadixFrameSeparatedPanelsPreview,
    source: RadixFrameSeparatedPanelsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "frame",
    id: "frame-stacked-panels-radix",
    name: "Frame",
    variant: "Stacked Panels",
    installTarget: "@reui-unbound/frame-stacked-panels",
    extraDependencies: ["@reui-unbound/frame"],
    Component: RadixFrameStackedPanelsPreview,
    source: RadixFrameStackedPanelsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "frame",
    id: "frame-stacked-dense-radix",
    name: "Frame",
    variant: "Stacked Dense",
    installTarget: "@reui-unbound/frame-stacked-dense",
    extraDependencies: ["@reui-unbound/frame"],
    Component: RadixFrameStackedDensePreview,
    source: RadixFrameStackedDenseSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "frame",
    id: "frame-collapsible-panels-radix",
    name: "Frame",
    variant: "Collapsible Panels",
    installTarget: "@reui-unbound/frame-collapsible-panels",
    extraDependencies: ["@reui-unbound/frame", "collapsible", "@reui-unbound/icon-placeholder"],
    Component: RadixFrameCollapsiblePanelsPreview,
    source: RadixFrameCollapsiblePanelsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "frame",
    id: "frame-ghost-variant-radix",
    name: "Frame",
    variant: "Ghost Variant",
    installTarget: "@reui-unbound/frame-ghost-variant",
    extraDependencies: ["@reui-unbound/frame"],
    Component: RadixFrameGhostVariantPreview,
    source: RadixFrameGhostVariantSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "frame",
    id: "frame-dense-layout-radix",
    name: "Frame",
    variant: "Dense Layout",
    installTarget: "@reui-unbound/frame-dense-layout",
    extraDependencies: ["@reui-unbound/frame"],
    Component: RadixFrameDenseLayoutPreview,
    source: RadixFrameDenseLayoutSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "frame",
    id: "frame-stacked-rows-radix",
    name: "Frame",
    variant: "Stacked Rows",
    installTarget: "@reui-unbound/frame-stacked-rows",
    extraDependencies: ["@reui-unbound/frame"],
    Component: RadixFrameStackedRowsPreview,
    source: RadixFrameStackedRowsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "frame",
    id: "frame-extra-small-spacing-radix",
    name: "Frame",
    variant: "Extra Small Spacing",
    installTarget: "@reui-unbound/frame-extra-small-spacing",
    extraDependencies: ["@reui-unbound/frame"],
    Component: RadixFrameExtraSmallSpacingPreview,
    source: RadixFrameExtraSmallSpacingSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "frame",
    id: "frame-small-spacing-radix",
    name: "Frame",
    variant: "Small Spacing",
    installTarget: "@reui-unbound/frame-small-spacing",
    extraDependencies: ["@reui-unbound/frame"],
    Component: RadixFrameSmallSpacingPreview,
    source: RadixFrameSmallSpacingSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "frame",
    id: "frame-default-spacing-radix",
    name: "Frame",
    variant: "Default Spacing",
    installTarget: "@reui-unbound/frame-default-spacing",
    extraDependencies: ["@reui-unbound/frame"],
    Component: RadixFrameDefaultSpacingPreview,
    source: RadixFrameDefaultSpacingSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "frame",
    id: "frame-large-spacing-radix",
    name: "Frame",
    variant: "Large Spacing",
    installTarget: "@reui-unbound/frame-large-spacing",
    extraDependencies: ["@reui-unbound/frame"],
    Component: RadixFrameLargeSpacingPreview,
    source: RadixFrameLargeSpacingSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "frame",
    id: "frame-small-radius-radix",
    name: "Frame",
    variant: "Small Radius",
    installTarget: "@reui-unbound/frame-small-radius",
    extraDependencies: ["@reui-unbound/frame"],
    Component: RadixFrameSmallRadiusPreview,
    source: RadixFrameSmallRadiusSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "frame",
    id: "frame-medium-radius-radix",
    name: "Frame",
    variant: "Medium Radius",
    installTarget: "@reui-unbound/frame-medium-radius",
    extraDependencies: ["@reui-unbound/frame"],
    Component: RadixFrameMediumRadiusPreview,
    source: RadixFrameMediumRadiusSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "frame",
    id: "frame-large-radius-radix",
    name: "Frame",
    variant: "Large Radius",
    installTarget: "@reui-unbound/frame-large-radius",
    extraDependencies: ["@reui-unbound/frame"],
    Component: RadixFrameLargeRadiusPreview,
    source: RadixFrameLargeRadiusSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "frame",
    id: "frame-default-radius-radix",
    name: "Frame",
    variant: "Default Radius",
    installTarget: "@reui-unbound/frame-default-radius",
    extraDependencies: ["@reui-unbound/frame"],
    Component: RadixFrameDefaultRadiusPreview,
    source: RadixFrameDefaultRadiusSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "frame",
    id: "frame-extra-large-radius-radix",
    name: "Frame",
    variant: "Extra Large Radius",
    installTarget: "@reui-unbound/frame-extra-large-radius",
    extraDependencies: ["@reui-unbound/frame"],
    Component: RadixFrameExtraLargeRadiusPreview,
    source: RadixFrameExtraLargeRadiusSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "frame",
    id: "frame-content-only-panels-radix",
    name: "Frame",
    variant: "Content-Only Panels",
    installTarget: "@reui-unbound/frame-content-only-panels",
    extraDependencies: ["@reui-unbound/frame"],
    Component: RadixFrameContentOnlyPanelsPreview,
    source: RadixFrameContentOnlyPanelsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "frame",
    id: "frame-stacked-content-only-radix",
    name: "Frame",
    variant: "Stacked Content-Only",
    installTarget: "@reui-unbound/frame-stacked-content-only",
    extraDependencies: ["@reui-unbound/frame"],
    Component: RadixFrameStackedContentOnlyPreview,
    source: RadixFrameStackedContentOnlySource,
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
    item: "gantt",
    id: "gantt-settings-menu-radix",
    name: "Gantt",
    variant: "Settings Menu",
    installTarget: "@reui-unbound/gantt-settings-menu",
    extraDependencies: ["@reui-unbound/gantt", "button", "card", "label", "popover", "radio-group", "select", "switch", "tabs", "@reui-unbound/icon-placeholder"],
    Component: RadixGanttSettingsMenuPreview,
    source: RadixGanttSettingsMenuSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "gantt",
    id: "gantt-drag-reorder-radix",
    name: "Gantt",
    variant: "Drag Reorder",
    installTarget: "@reui-unbound/gantt-drag-reorder",
    extraDependencies: ["@reui-unbound/gantt", "card"],
    Component: RadixGanttDragReorderPreview,
    source: RadixGanttDragReorderSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "gantt",
    id: "gantt-quarter-roadmap-radix",
    name: "Gantt",
    variant: "Quarter Roadmap",
    installTarget: "@reui-unbound/gantt-quarter-roadmap",
    extraDependencies: ["@reui-unbound/gantt", "button", "card", "@reui-unbound/icon-placeholder"],
    Component: RadixGanttQuarterRoadmapPreview,
    source: RadixGanttQuarterRoadmapSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "gantt",
    id: "gantt-capacity-board-radix",
    name: "Gantt",
    variant: "Capacity Board",
    installTarget: "@reui-unbound/gantt-capacity-board",
    extraDependencies: ["@reui-unbound/gantt", "avatar", "button", "card", "@reui-unbound/icon-placeholder"],
    Component: RadixGanttCapacityBoardPreview,
    source: RadixGanttCapacityBoardSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "gantt",
    id: "gantt-task-table-radix",
    name: "Gantt",
    variant: "Task Table",
    installTarget: "@reui-unbound/gantt-task-table",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/gantt", "avatar", "button", "card", "@reui-unbound/icon-placeholder"],
    Component: RadixGanttTaskTablePreview,
    source: RadixGanttTaskTableSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "gantt",
    id: "gantt-baseline-tracking-radix",
    name: "Gantt",
    variant: "Baseline Tracking",
    installTarget: "@reui-unbound/gantt-baseline-tracking",
    extraDependencies: ["@reui-unbound/gantt", "card"],
    Component: RadixGanttBaselineTrackingPreview,
    source: RadixGanttBaselineTrackingSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "gantt",
    id: "gantt-dependencies-milestones-radix",
    name: "Gantt",
    variant: "Dependencies & Milestones",
    installTarget: "@reui-unbound/gantt-dependencies-milestones",
    extraDependencies: ["@reui-unbound/gantt", "card"],
    Component: RadixGanttDependenciesMilestonesPreview,
    source: RadixGanttDependenciesMilestonesSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "gantt",
    id: "gantt-working-days-radix",
    name: "Gantt",
    variant: "Working Days",
    installTarget: "@reui-unbound/gantt-working-days",
    extraDependencies: ["@reui-unbound/gantt", "card"],
    Component: RadixGanttWorkingDaysPreview,
    source: RadixGanttWorkingDaysSource,
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
    item: "icon-stack",
    id: "icon-stack-isometric-radix",
    name: "Icon Stack",
    variant: "Isometric",
    installTarget: "@reui-unbound/icon-stack-isometric",
    extraDependencies: ["@reui-unbound/icon-stack", "@reui-unbound/icon-placeholder"],
    Component: RadixIconStackIsometricPreview,
    source: RadixIconStackIsometricSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "icon-stack",
    id: "icon-stack-sizes-radix",
    name: "Icon Stack",
    variant: "Sizes",
    installTarget: "@reui-unbound/icon-stack-sizes",
    extraDependencies: ["@reui-unbound/icon-stack", "@reui-unbound/icon-placeholder"],
    Component: RadixIconStackSizesPreview,
    source: RadixIconStackSizesSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "icon-stack",
    id: "icon-stack-colors-radix",
    name: "Icon Stack",
    variant: "Colors",
    installTarget: "@reui-unbound/icon-stack-colors",
    extraDependencies: ["@reui-unbound/icon-stack", "@reui-unbound/icon-placeholder"],
    Component: RadixIconStackColorsPreview,
    source: RadixIconStackColorsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "icon-stack",
    id: "icon-stack-badge-overlay-radix",
    name: "Icon Stack",
    variant: "Badge Overlay",
    installTarget: "@reui-unbound/icon-stack-badge-overlay",
    extraDependencies: ["@reui-unbound/icon-stack", "@reui-unbound/icon-placeholder"],
    Component: RadixIconStackBadgeOverlayPreview,
    source: RadixIconStackBadgeOverlaySource,
  }),
  componentEntry({
    flavor: "radix",
    item: "icon-stack",
    id: "icon-stack-empty-state-radix",
    name: "Icon Stack",
    variant: "Empty State",
    installTarget: "@reui-unbound/icon-stack-empty-state",
    extraDependencies: ["@reui-unbound/icon-stack", "button", "empty", "@reui-unbound/icon-placeholder"],
    Component: RadixIconStackEmptyStatePreview,
    source: RadixIconStackEmptyStateSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "icon-stack",
    id: "icon-stack-item-media-radix",
    name: "Icon Stack",
    variant: "Item Media",
    installTarget: "@reui-unbound/icon-stack-item-media",
    extraDependencies: ["@reui-unbound/icon-stack", "item", "@reui-unbound/icon-placeholder"],
    Component: RadixIconStackItemMediaPreview,
    source: RadixIconStackItemMediaSource,
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
    item: "icon-tile",
    id: "icon-tile-default-radix",
    name: "Icon Tile",
    variant: "Default",
    installTarget: "@reui-unbound/icon-tile-default",
    extraDependencies: ["@reui-unbound/icon-tile", "@reui-unbound/icon-placeholder"],
    Component: RadixIconTileDefaultPreview,
    source: RadixIconTileDefaultSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "icon-tile",
    id: "icon-tile-elevated-radix",
    name: "Icon Tile",
    variant: "Elevated",
    installTarget: "@reui-unbound/icon-tile-elevated",
    extraDependencies: ["@reui-unbound/icon-tile", "@reui-unbound/icon-placeholder"],
    Component: RadixIconTileElevatedPreview,
    source: RadixIconTileElevatedSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "icon-tile",
    id: "icon-tile-framed-radix",
    name: "Icon Tile",
    variant: "Framed",
    installTarget: "@reui-unbound/icon-tile-framed",
    extraDependencies: ["@reui-unbound/icon-tile", "@reui-unbound/icon-placeholder"],
    Component: RadixIconTileFramedPreview,
    source: RadixIconTileFramedSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "icon-tile",
    id: "icon-tile-all-variants-radix",
    name: "Icon Tile",
    variant: "All Variants",
    installTarget: "@reui-unbound/icon-tile-all-variants",
    extraDependencies: ["@reui-unbound/icon-tile", "@reui-unbound/icon-placeholder"],
    Component: RadixIconTileAllVariantsPreview,
    source: RadixIconTileAllVariantsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "icon-tile",
    id: "icon-tile-sizes-radix",
    name: "Icon Tile",
    variant: "Sizes",
    installTarget: "@reui-unbound/icon-tile-sizes",
    extraDependencies: ["@reui-unbound/icon-tile", "@reui-unbound/icon-placeholder"],
    Component: RadixIconTileSizesPreview,
    source: RadixIconTileSizesSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "icon-tile",
    id: "icon-tile-circular-radix",
    name: "Icon Tile",
    variant: "Circular",
    installTarget: "@reui-unbound/icon-tile-circular",
    extraDependencies: ["@reui-unbound/icon-tile", "@reui-unbound/icon-placeholder"],
    Component: RadixIconTileCircularPreview,
    source: RadixIconTileCircularSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "icon-tile",
    id: "icon-tile-custom-sizing-radix",
    name: "Icon Tile",
    variant: "Custom Sizing",
    installTarget: "@reui-unbound/icon-tile-custom-sizing",
    extraDependencies: ["@reui-unbound/icon-tile", "@reui-unbound/icon-placeholder"],
    Component: RadixIconTileCustomSizingPreview,
    source: RadixIconTileCustomSizingSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "icon-tile",
    id: "icon-tile-color-tones-radix",
    name: "Icon Tile",
    variant: "Color Tones",
    installTarget: "@reui-unbound/icon-tile-color-tones",
    extraDependencies: ["@reui-unbound/icon-tile", "@reui-unbound/icon-placeholder"],
    Component: RadixIconTileColorTonesPreview,
    source: RadixIconTileColorTonesSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "icon-tile",
    id: "icon-tile-text-content-radix",
    name: "Icon Tile",
    variant: "Text Content",
    installTarget: "@reui-unbound/icon-tile-text-content",
    extraDependencies: ["@reui-unbound/icon-tile"],
    Component: RadixIconTileTextContentPreview,
    source: RadixIconTileTextContentSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "icon-tile",
    id: "icon-tile-list-row-radix",
    name: "Icon Tile",
    variant: "List Row",
    installTarget: "@reui-unbound/icon-tile-list-row",
    extraDependencies: ["@reui-unbound/icon-tile", "item", "@reui-unbound/icon-placeholder"],
    Component: RadixIconTileListRowPreview,
    source: RadixIconTileListRowSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "icon-tile",
    id: "icon-tile-feature-card-radix",
    name: "Icon Tile",
    variant: "Feature Card",
    installTarget: "@reui-unbound/icon-tile-feature-card",
    extraDependencies: ["@reui-unbound/frame", "@reui-unbound/icon-tile", "@reui-unbound/icon-placeholder"],
    Component: RadixIconTileFeatureCardPreview,
    source: RadixIconTileFeatureCardSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "icon-tile",
    id: "icon-tile-empty-state-radix",
    name: "Icon Tile",
    variant: "Empty State",
    installTarget: "@reui-unbound/icon-tile-empty-state",
    extraDependencies: ["@reui-unbound/icon-tile", "empty", "@reui-unbound/icon-placeholder"],
    Component: RadixIconTileEmptyStatePreview,
    source: RadixIconTileEmptyStateSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "icon-tile",
    id: "icon-tile-interactive-radix",
    name: "Icon Tile",
    variant: "Interactive",
    installTarget: "@reui-unbound/icon-tile-interactive",
    extraDependencies: ["@reui-unbound/icon-tile", "@reui-unbound/icon-placeholder"],
    Component: RadixIconTileInteractivePreview,
    source: RadixIconTileInteractiveSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "icon-tile",
    id: "icon-tile-status-overlay-radix",
    name: "Icon Tile",
    variant: "Status Overlay",
    installTarget: "@reui-unbound/icon-tile-status-overlay",
    extraDependencies: ["@reui-unbound/icon-tile", "@reui-unbound/icon-placeholder"],
    Component: RadixIconTileStatusOverlayPreview,
    source: RadixIconTileStatusOverlaySource,
  }),
  componentEntry({
    flavor: "radix",
    item: "icon-tile",
    id: "icon-tile-soft-tones-radix",
    name: "Icon Tile",
    variant: "Soft Tones",
    installTarget: "@reui-unbound/icon-tile-soft-tones",
    extraDependencies: ["@reui-unbound/icon-tile", "@reui-unbound/icon-placeholder"],
    Component: RadixIconTileSoftTonesPreview,
    source: RadixIconTileSoftTonesSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "icon-tile",
    id: "icon-tile-solid-tones-radix",
    name: "Icon Tile",
    variant: "Solid Tones",
    installTarget: "@reui-unbound/icon-tile-solid-tones",
    extraDependencies: ["@reui-unbound/icon-tile", "@reui-unbound/icon-placeholder"],
    Component: RadixIconTileSolidTonesPreview,
    source: RadixIconTileSolidTonesSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "icon-tile",
    id: "icon-tile-brand-colors-radix",
    name: "Icon Tile",
    variant: "Brand Colors",
    installTarget: "@reui-unbound/icon-tile-brand-colors",
    extraDependencies: ["@reui-unbound/icon-tile", "@reui-unbound/icon-placeholder"],
    Component: RadixIconTileBrandColorsPreview,
    source: RadixIconTileBrandColorsSource,
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
    item: "kanban",
    id: "kanban-placeholder-overlay-radix",
    name: "Kanban",
    variant: "Placeholder Overlay",
    installTarget: "@reui-unbound/kanban-placeholder-overlay",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/kanban", "avatar", "button", "card", "@reui-unbound/icon-placeholder"],
    Component: RadixKanbanPlaceholderOverlayPreview,
    source: RadixKanbanPlaceholderOverlaySource,
  }),
  componentEntry({
    flavor: "radix",
    item: "kanban",
    id: "kanban-dynamic-overlay-radix",
    name: "Kanban",
    variant: "Dynamic Overlay",
    installTarget: "@reui-unbound/kanban-dynamic-overlay",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/kanban", "avatar", "button", "card", "@reui-unbound/icon-placeholder"],
    Component: RadixKanbanDynamicOverlayPreview,
    source: RadixKanbanDynamicOverlaySource,
  }),
  componentEntry({
    flavor: "radix",
    item: "kanban",
    id: "kanban-frame-columns-radix",
    name: "Kanban",
    variant: "Frame Columns",
    installTarget: "@reui-unbound/kanban-frame-columns",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/frame", "@reui-unbound/kanban", "@reui-unbound/icon-placeholder"],
    Component: RadixKanbanFrameColumnsPreview,
    source: RadixKanbanFrameColumnsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "kanban",
    id: "kanban-stacked-frame-radix",
    name: "Kanban",
    variant: "Stacked Frame",
    installTarget: "@reui-unbound/kanban-stacked-frame",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/frame", "@reui-unbound/kanban", "avatar", "progress"],
    Component: RadixKanbanStackedFramePreview,
    source: RadixKanbanStackedFrameSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "kanban",
    id: "kanban-feature-roadmap-radix",
    name: "Kanban",
    variant: "Feature Roadmap",
    installTarget: "@reui-unbound/kanban-feature-roadmap",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/frame", "@reui-unbound/kanban", "progress", "@reui-unbound/icon-placeholder"],
    Component: RadixKanbanFeatureRoadmapPreview,
    source: RadixKanbanFeatureRoadmapSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "kanban",
    id: "kanban-persisted-moves-radix",
    name: "Kanban",
    variant: "Persisted Moves",
    installTarget: "@reui-unbound/kanban-persisted-moves",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/kanban", "button", "card", "@reui-unbound/icon-placeholder"],
    Component: RadixKanbanPersistedMovesPreview,
    source: RadixKanbanPersistedMovesSource,
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
    item: "number-field",
    id: "number-field-default-size-radix",
    name: "Number Field",
    variant: "Default Size",
    installTarget: "@reui-unbound/number-field-default-size",
    extraDependencies: ["@reui-unbound/number-field"],
    Component: RadixNumberFieldDefaultSizePreview,
    source: RadixNumberFieldDefaultSizeSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "number-field",
    id: "number-field-small-size-radix",
    name: "Number Field",
    variant: "Small Size",
    installTarget: "@reui-unbound/number-field-small-size",
    extraDependencies: ["@reui-unbound/number-field"],
    Component: RadixNumberFieldSmallSizePreview,
    source: RadixNumberFieldSmallSizeSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "number-field",
    id: "number-field-large-size-radix",
    name: "Number Field",
    variant: "Large Size",
    installTarget: "@reui-unbound/number-field-large-size",
    extraDependencies: ["@reui-unbound/number-field"],
    Component: RadixNumberFieldLargeSizePreview,
    source: RadixNumberFieldLargeSizeSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "number-field",
    id: "number-field-buttons-on-right-radix",
    name: "Number Field",
    variant: "Buttons on Right",
    installTarget: "@reui-unbound/number-field-buttons-on-right",
    extraDependencies: ["@reui-unbound/number-field"],
    Component: RadixNumberFieldButtonsOnRightPreview,
    source: RadixNumberFieldButtonsOnRightSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "number-field",
    id: "number-field-spinner-buttons-radix",
    name: "Number Field",
    variant: "Spinner Buttons",
    installTarget: "@reui-unbound/number-field-spinner-buttons",
    extraDependencies: ["@reui-unbound/number-field", "@reui-unbound/icon-placeholder"],
    Component: RadixNumberFieldSpinnerButtonsPreview,
    source: RadixNumberFieldSpinnerButtonsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "number-field",
    id: "number-field-form-validation-radix",
    name: "Number Field",
    variant: "Form Validation",
    installTarget: "@reui-unbound/number-field-form-validation",
    extraDependencies: ["@reui-unbound/number-field", "alert", "button", "field", "@reui-unbound/icon-placeholder"],
    Component: RadixNumberFieldFormValidationPreview,
    source: RadixNumberFieldFormValidationSource,
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
    item: "phone-input",
    id: "phone-input-standard-radix",
    name: "Phone Input",
    variant: "Standard",
    installTarget: "@reui-unbound/phone-input-standard",
    extraDependencies: ["@reui-unbound/phone-input"],
    Component: RadixPhoneInputStandardPreview,
    source: RadixPhoneInputStandardSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "phone-input",
    id: "phone-input-small-radix",
    name: "Phone Input",
    variant: "Small",
    installTarget: "@reui-unbound/phone-input-small",
    extraDependencies: ["@reui-unbound/phone-input"],
    Component: RadixPhoneInputSmallPreview,
    source: RadixPhoneInputSmallSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "phone-input",
    id: "phone-input-large-radix",
    name: "Phone Input",
    variant: "Large",
    installTarget: "@reui-unbound/phone-input-large",
    extraDependencies: ["@reui-unbound/phone-input"],
    Component: RadixPhoneInputLargePreview,
    source: RadixPhoneInputLargeSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "phone-input",
    id: "phone-input-disabled-radix",
    name: "Phone Input",
    variant: "Disabled",
    installTarget: "@reui-unbound/phone-input-disabled",
    extraDependencies: ["@reui-unbound/phone-input"],
    Component: RadixPhoneInputDisabledPreview,
    source: RadixPhoneInputDisabledSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "phone-input",
    id: "phone-input-preset-value-radix",
    name: "Phone Input",
    variant: "Preset Value",
    installTarget: "@reui-unbound/phone-input-preset-value",
    extraDependencies: ["@reui-unbound/phone-input"],
    Component: RadixPhoneInputPresetValuePreview,
    source: RadixPhoneInputPresetValueSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "phone-input",
    id: "phone-input-error-state-radix",
    name: "Phone Input",
    variant: "Error State",
    installTarget: "@reui-unbound/phone-input-error-state",
    extraDependencies: ["@reui-unbound/phone-input"],
    Component: RadixPhoneInputErrorStatePreview,
    source: RadixPhoneInputErrorStateSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "phone-input",
    id: "phone-input-default-country-radix",
    name: "Phone Input",
    variant: "Default Country",
    installTarget: "@reui-unbound/phone-input-default-country",
    extraDependencies: ["@reui-unbound/phone-input"],
    Component: RadixPhoneInputDefaultCountryPreview,
    source: RadixPhoneInputDefaultCountrySource,
  }),
  componentEntry({
    flavor: "radix",
    item: "phone-input",
    id: "phone-input-read-only-radix",
    name: "Phone Input",
    variant: "Read-Only",
    installTarget: "@reui-unbound/phone-input-read-only",
    extraDependencies: ["@reui-unbound/phone-input"],
    Component: RadixPhoneInputReadOnlyPreview,
    source: RadixPhoneInputReadOnlySource,
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
    item: "rating",
    id: "rating-standard-radix",
    name: "Rating",
    variant: "Standard",
    installTarget: "@reui-unbound/rating-standard",
    extraDependencies: ["@reui-unbound/rating"],
    Component: RadixRatingStandardPreview,
    source: RadixRatingStandardSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "rating",
    id: "rating-decimal-value-radix",
    name: "Rating",
    variant: "Decimal Value",
    installTarget: "@reui-unbound/rating-decimal-value",
    extraDependencies: ["@reui-unbound/rating"],
    Component: RadixRatingDecimalValuePreview,
    source: RadixRatingDecimalValueSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "rating",
    id: "rating-show-value-radix",
    name: "Rating",
    variant: "Show Value",
    installTarget: "@reui-unbound/rating-show-value",
    extraDependencies: ["@reui-unbound/rating"],
    Component: RadixRatingShowValuePreview,
    source: RadixRatingShowValueSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "rating",
    id: "rating-editable-radix",
    name: "Rating",
    variant: "Editable",
    installTarget: "@reui-unbound/rating-editable",
    extraDependencies: ["@reui-unbound/rating"],
    Component: RadixRatingEditablePreview,
    source: RadixRatingEditableSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "rating",
    id: "rating-sizes-radix",
    name: "Rating",
    variant: "Sizes",
    installTarget: "@reui-unbound/rating-sizes",
    extraDependencies: ["@reui-unbound/rating"],
    Component: RadixRatingSizesPreview,
    source: RadixRatingSizesSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "rating",
    id: "rating-review-summary-radix",
    name: "Rating",
    variant: "Review Summary",
    installTarget: "@reui-unbound/rating-review-summary",
    extraDependencies: ["@reui-unbound/rating", "progress", "separator"],
    Component: RadixRatingReviewSummaryPreview,
    source: RadixRatingReviewSummarySource,
  }),
  componentEntry({
    flavor: "radix",
    item: "rating",
    id: "rating-half-star-input-radix",
    name: "Rating",
    variant: "Half-Star Input",
    installTarget: "@reui-unbound/rating-half-star-input",
    extraDependencies: ["@reui-unbound/rating"],
    Component: RadixRatingHalfStarInputPreview,
    source: RadixRatingHalfStarInputSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "rating",
    id: "rating-emoji-reactions-radix",
    name: "Rating",
    variant: "Emoji Reactions",
    installTarget: "@reui-unbound/rating-emoji-reactions",
    Component: RadixRatingEmojiReactionsPreview,
    source: RadixRatingEmojiReactionsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "rating",
    id: "rating-review-text-radix",
    name: "Rating",
    variant: "Review Text",
    installTarget: "@reui-unbound/rating-review-text",
    extraDependencies: ["@reui-unbound/rating", "button", "card", "label", "textarea"],
    Component: RadixRatingReviewTextPreview,
    source: RadixRatingReviewTextSource,
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
    item: "scrollspy",
    id: "scrollspy-vertical-nav-radix",
    name: "Scrollspy",
    variant: "Vertical Nav",
    installTarget: "@reui-unbound/scrollspy-vertical-nav",
    extraDependencies: ["@reui-unbound/scrollspy", "button", "scroll-area"],
    Component: RadixScrollspyVerticalNavPreview,
    source: RadixScrollspyVerticalNavSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "scrollspy",
    id: "scrollspy-horizontal-nav-radix",
    name: "Scrollspy",
    variant: "Horizontal Nav",
    installTarget: "@reui-unbound/scrollspy-horizontal-nav",
    extraDependencies: ["@reui-unbound/scrollspy", "button", "scroll-area"],
    Component: RadixScrollspyHorizontalNavPreview,
    source: RadixScrollspyHorizontalNavSource,
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
    item: "signature-pad",
    id: "signature-pad-pinned-actions-radix",
    name: "Signature Pad",
    variant: "Pinned Actions",
    installTarget: "@reui-unbound/signature-pad-pinned-actions",
    extraDependencies: ["@reui-unbound/signature-pad"],
    Component: RadixSignaturePadPinnedActionsPreview,
    source: RadixSignaturePadPinnedActionsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "signature-pad",
    id: "signature-pad-undo-redo-radix",
    name: "Signature Pad",
    variant: "Undo & Redo",
    installTarget: "@reui-unbound/signature-pad-undo-redo",
    extraDependencies: ["@reui-unbound/signature-pad", "button-group", "kbd", "@reui-unbound/icon-placeholder"],
    Component: RadixSignaturePadUndoRedoPreview,
    source: RadixSignaturePadUndoRedoSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "signature-pad",
    id: "signature-pad-form-validation-radix",
    name: "Signature Pad",
    variant: "Form Validation",
    installTarget: "@reui-unbound/signature-pad-form-validation",
    extraDependencies: ["@reui-unbound/signature-pad", "button", "field", "input"],
    Component: RadixSignaturePadFormValidationPreview,
    source: RadixSignaturePadFormValidationSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "signature-pad",
    id: "signature-pad-signing-workspace-radix",
    name: "Signature Pad",
    variant: "Signing Workspace",
    installTarget: "@reui-unbound/signature-pad-signing-workspace",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/signature-pad", "button", "card", "dropdown-menu", "separator", "@reui-unbound/icon-placeholder"],
    Component: RadixSignaturePadSigningWorkspacePreview,
    source: RadixSignaturePadSigningWorkspaceSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "signature-pad",
    id: "signature-pad-export-formats-radix",
    name: "Signature Pad",
    variant: "Export Formats",
    installTarget: "@reui-unbound/signature-pad-export-formats",
    extraDependencies: ["@reui-unbound/frame", "@reui-unbound/signature-pad", "button", "button-group"],
    Component: RadixSignaturePadExportFormatsPreview,
    source: RadixSignaturePadExportFormatsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "signature-pad",
    id: "signature-pad-draw-or-type-radix",
    name: "Signature Pad",
    variant: "Draw or Type",
    installTarget: "@reui-unbound/signature-pad-draw-or-type",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/signature-pad", "button", "field", "input", "tabs"],
    Component: RadixSignaturePadDrawOrTypePreview,
    source: RadixSignaturePadDrawOrTypeSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "signature-pad",
    id: "signature-pad-agreement-card-radix",
    name: "Signature Pad",
    variant: "Agreement Card",
    installTarget: "@reui-unbound/signature-pad-agreement-card",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/signature-pad", "button", "card", "checkbox", "field"],
    Component: RadixSignaturePadAgreementCardPreview,
    source: RadixSignaturePadAgreementCardSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "signature-pad",
    id: "signature-pad-in-dialog-radix",
    name: "Signature Pad",
    variant: "In Dialog",
    installTarget: "@reui-unbound/signature-pad-in-dialog",
    extraDependencies: ["@reui-unbound/signature-pad", "button", "dialog", "item"],
    Component: RadixSignaturePadInDialogPreview,
    source: RadixSignaturePadInDialogSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "signature-pad",
    id: "signature-pad-stylus-mode-radix",
    name: "Signature Pad",
    variant: "Stylus Mode",
    installTarget: "@reui-unbound/signature-pad-stylus-mode",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/signature-pad", "field", "switch"],
    Component: RadixSignaturePadStylusModePreview,
    source: RadixSignaturePadStylusModeSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "signature-pad",
    id: "signature-pad-clause-initials-radix",
    name: "Signature Pad",
    variant: "Clause Initials",
    installTarget: "@reui-unbound/signature-pad-clause-initials",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/signature-pad", "button", "item", "@reui-unbound/icon-placeholder"],
    Component: RadixSignaturePadClauseInitialsPreview,
    source: RadixSignaturePadClauseInitialsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "signature-pad",
    id: "signature-pad-proof-of-delivery-radix",
    name: "Signature Pad",
    variant: "Proof of Delivery",
    installTarget: "@reui-unbound/signature-pad-proof-of-delivery",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/signature-pad", "button", "card", "field", "input"],
    Component: RadixSignaturePadProofOfDeliveryPreview,
    source: RadixSignaturePadProofOfDeliverySource,
  }),
  componentEntry({
    flavor: "radix",
    item: "signature-pad",
    id: "signature-pad-file-upload-radix",
    name: "Signature Pad",
    variant: "File Upload",
    installTarget: "@reui-unbound/signature-pad-file-upload",
    extraDependencies: ["@reui-unbound/signature-pad", "button"],
    Component: RadixSignaturePadFileUploadPreview,
    source: RadixSignaturePadFileUploadSource,
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
    item: "sortable",
    id: "sortable-file-list-radix",
    name: "Sortable",
    variant: "File List",
    installTarget: "@reui-unbound/sortable-file-list",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/sortable", "@reui-unbound/icon-placeholder"],
    Component: RadixSortableFileListPreview,
    source: RadixSortableFileListSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "sortable",
    id: "sortable-grid-layout-radix",
    name: "Sortable",
    variant: "Grid Layout",
    installTarget: "@reui-unbound/sortable-grid-layout",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/sortable", "@reui-unbound/icon-placeholder"],
    Component: RadixSortableGridLayoutPreview,
    source: RadixSortableGridLayoutSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "sortable",
    id: "sortable-nested-layout-radix",
    name: "Sortable",
    variant: "Nested Layout",
    installTarget: "@reui-unbound/sortable-nested-layout",
    extraDependencies: ["@reui-unbound/sortable", "card", "@reui-unbound/icon-placeholder"],
    Component: RadixSortableNestedLayoutPreview,
    source: RadixSortableNestedLayoutSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "sortable",
    id: "sortable-playlist-radix",
    name: "Sortable",
    variant: "Playlist",
    installTarget: "@reui-unbound/sortable-playlist",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/frame", "@reui-unbound/sortable", "@reui-unbound/icon-placeholder"],
    Component: RadixSortablePlaylistPreview,
    source: RadixSortablePlaylistSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "sortable",
    id: "sortable-settings-priority-radix",
    name: "Sortable",
    variant: "Settings Priority",
    installTarget: "@reui-unbound/sortable-settings-priority",
    extraDependencies: ["@reui-unbound/frame", "@reui-unbound/sortable", "switch", "@reui-unbound/icon-placeholder"],
    Component: RadixSortableSettingsPriorityPreview,
    source: RadixSortableSettingsPrioritySource,
  }),
  componentEntry({
    flavor: "radix",
    item: "sortable",
    id: "sortable-sidebar-navigation-radix",
    name: "Sortable",
    variant: "Sidebar Navigation",
    installTarget: "@reui-unbound/sortable-sidebar-navigation",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/frame", "@reui-unbound/sortable", "@reui-unbound/icon-placeholder"],
    Component: RadixSortableSidebarNavigationPreview,
    source: RadixSortableSidebarNavigationSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "sortable",
    id: "sortable-image-gallery-radix",
    name: "Sortable",
    variant: "Image Gallery",
    installTarget: "@reui-unbound/sortable-image-gallery",
    extraDependencies: ["@reui-unbound/frame", "@reui-unbound/sortable", "@reui-unbound/icon-placeholder"],
    Component: RadixSortableImageGalleryPreview,
    source: RadixSortableImageGallerySource,
  }),
  componentEntry({
    flavor: "radix",
    item: "sortable",
    id: "sortable-persisted-order-radix",
    name: "Sortable",
    variant: "Persisted Order",
    installTarget: "@reui-unbound/sortable-persisted-order",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/sortable", "@reui-unbound/icon-placeholder"],
    Component: RadixSortablePersistedOrderPreview,
    source: RadixSortablePersistedOrderSource,
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
    item: "stepper",
    id: "stepper-standard-radix",
    name: "Stepper",
    variant: "Standard",
    installTarget: "@reui-unbound/stepper-standard",
    extraDependencies: ["@reui-unbound/stepper"],
    Component: RadixStepperStandardPreview,
    source: RadixStepperStandardSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-completed-state-radix",
    name: "Stepper",
    variant: "Completed State",
    installTarget: "@reui-unbound/stepper-completed-state",
    extraDependencies: ["@reui-unbound/stepper"],
    Component: RadixStepperCompletedStatePreview,
    source: RadixStepperCompletedStateSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-loading-state-radix",
    name: "Stepper",
    variant: "Loading State",
    installTarget: "@reui-unbound/stepper-loading-state",
    extraDependencies: ["@reui-unbound/stepper", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperLoadingStatePreview,
    source: RadixStepperLoadingStateSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-controlled-radix",
    name: "Stepper",
    variant: "Controlled",
    installTarget: "@reui-unbound/stepper-controlled",
    extraDependencies: ["@reui-unbound/stepper", "button"],
    Component: RadixStepperControlledPreview,
    source: RadixStepperControlledSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-labels-below-radix",
    name: "Stepper",
    variant: "Labels Below",
    installTarget: "@reui-unbound/stepper-labels-below",
    extraDependencies: ["@reui-unbound/stepper", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperLabelsBelowPreview,
    source: RadixStepperLabelsBelowSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-left-aligned-titles-radix",
    name: "Stepper",
    variant: "Left Aligned Titles",
    installTarget: "@reui-unbound/stepper-left-aligned-titles",
    extraDependencies: ["@reui-unbound/stepper", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperLeftAlignedTitlesPreview,
    source: RadixStepperLeftAlignedTitlesSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-icons-badges-radix",
    name: "Stepper",
    variant: "Icons & Badges",
    installTarget: "@reui-unbound/stepper-icons-badges",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/stepper", "button", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperIconsBadgesPreview,
    source: RadixStepperIconsBadgesSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-descriptions-radix",
    name: "Stepper",
    variant: "Descriptions",
    installTarget: "@reui-unbound/stepper-descriptions",
    extraDependencies: ["@reui-unbound/stepper", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperDescriptionsPreview,
    source: RadixStepperDescriptionsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-inline-titles-radix",
    name: "Stepper",
    variant: "Inline Titles",
    installTarget: "@reui-unbound/stepper-inline-titles",
    extraDependencies: ["@reui-unbound/stepper", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperInlineTitlesPreview,
    source: RadixStepperInlineTitlesSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-title-caption-radix",
    name: "Stepper",
    variant: "Title & Caption",
    installTarget: "@reui-unbound/stepper-title-caption",
    extraDependencies: ["@reui-unbound/stepper", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperTitleCaptionPreview,
    source: RadixStepperTitleCaptionSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-bar-with-titles-radix",
    name: "Stepper",
    variant: "Bar With Titles",
    installTarget: "@reui-unbound/stepper-bar-with-titles",
    extraDependencies: ["@reui-unbound/stepper"],
    Component: RadixStepperBarWithTitlesPreview,
    source: RadixStepperBarWithTitlesSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-segmented-bar-radix",
    name: "Stepper",
    variant: "Segmented Bar",
    installTarget: "@reui-unbound/stepper-segmented-bar",
    extraDependencies: ["@reui-unbound/stepper", "button", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperSegmentedBarPreview,
    source: RadixStepperSegmentedBarSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-vertical-descriptions-radix",
    name: "Stepper",
    variant: "Vertical Descriptions",
    installTarget: "@reui-unbound/stepper-vertical-descriptions",
    extraDependencies: ["@reui-unbound/stepper", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperVerticalDescriptionsPreview,
    source: RadixStepperVerticalDescriptionsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-vertical-radix",
    name: "Stepper",
    variant: "Vertical",
    installTarget: "@reui-unbound/stepper-vertical",
    extraDependencies: ["@reui-unbound/stepper", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperVerticalPreview,
    source: RadixStepperVerticalSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-vertical-titles-radix",
    name: "Stepper",
    variant: "Vertical Titles",
    installTarget: "@reui-unbound/stepper-vertical-titles",
    extraDependencies: ["@reui-unbound/stepper", "button", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperVerticalTitlesPreview,
    source: RadixStepperVerticalTitlesSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-delivery-stops-radix",
    name: "Stepper",
    variant: "Delivery Stops",
    installTarget: "@reui-unbound/stepper-delivery-stops",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/stepper", "button", "separator", "tooltip", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperDeliveryStopsPreview,
    source: RadixStepperDeliveryStopsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-dotted-progress-radix",
    name: "Stepper",
    variant: "Dotted Progress",
    installTarget: "@reui-unbound/stepper-dotted-progress",
    extraDependencies: ["@reui-unbound/stepper", "button", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperDottedProgressPreview,
    source: RadixStepperDottedProgressSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-stage-details-radix",
    name: "Stepper",
    variant: "Stage Details",
    installTarget: "@reui-unbound/stepper-stage-details",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/stepper", "avatar", "button", "carousel", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperStageDetailsPreview,
    source: RadixStepperStageDetailsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-frame-icon-tiles-radix",
    name: "Stepper",
    variant: "Frame Icon Tiles",
    installTarget: "@reui-unbound/stepper-frame-icon-tiles",
    extraDependencies: ["@reui-unbound/frame", "@reui-unbound/icon-tile", "@reui-unbound/stepper", "button", "empty", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperFrameIconTilesPreview,
    source: RadixStepperFrameIconTilesSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-purchase-orders-radix",
    name: "Stepper",
    variant: "Purchase Orders",
    installTarget: "@reui-unbound/stepper-purchase-orders",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/tree", "button", "dropdown-menu", "separator", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperPurchaseOrdersPreview,
    source: RadixStepperPurchaseOrdersSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-security-checks-radix",
    name: "Stepper",
    variant: "Security Checks",
    installTarget: "@reui-unbound/stepper-security-checks",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/tree", "button", "separator", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperSecurityChecksPreview,
    source: RadixStepperSecurityChecksSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-bottom-color-bars-radix",
    name: "Stepper",
    variant: "Bottom Color Bars",
    installTarget: "@reui-unbound/stepper-bottom-color-bars",
    extraDependencies: ["@reui-unbound/frame", "@reui-unbound/icon-stack", "@reui-unbound/stepper", "button", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperBottomColorBarsPreview,
    source: RadixStepperBottomColorBarsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-top-color-bars-radix",
    name: "Stepper",
    variant: "Top Color Bars",
    installTarget: "@reui-unbound/stepper-top-color-bars",
    extraDependencies: ["@reui-unbound/frame", "@reui-unbound/stepper", "button"],
    Component: RadixStepperTopColorBarsPreview,
    source: RadixStepperTopColorBarsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-icon-tile-rows-radix",
    name: "Stepper",
    variant: "Icon Tile Rows",
    installTarget: "@reui-unbound/stepper-icon-tile-rows",
    extraDependencies: ["@reui-unbound/frame", "@reui-unbound/icon-tile", "@reui-unbound/stepper", "button", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperIconTileRowsPreview,
    source: RadixStepperIconTileRowsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-phase-track-radix",
    name: "Stepper",
    variant: "Phase Track",
    installTarget: "@reui-unbound/stepper-phase-track",
    extraDependencies: ["@reui-unbound/stepper", "button", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperPhaseTrackPreview,
    source: RadixStepperPhaseTrackSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-timestamped-checkpoints-radix",
    name: "Stepper",
    variant: "Timestamped Checkpoints",
    installTarget: "@reui-unbound/stepper-timestamped-checkpoints",
    extraDependencies: ["@reui-unbound/stepper", "button", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperTimestampedCheckpointsPreview,
    source: RadixStepperTimestampedCheckpointsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-transit-arrow-radix",
    name: "Stepper",
    variant: "Transit Arrow",
    installTarget: "@reui-unbound/stepper-transit-arrow",
    extraDependencies: ["@reui-unbound/stepper", "button", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperTransitArrowPreview,
    source: RadixStepperTransitArrowSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-breadcrumb-steps-radix",
    name: "Stepper",
    variant: "Breadcrumb Steps",
    installTarget: "@reui-unbound/stepper-breadcrumb-steps",
    extraDependencies: ["@reui-unbound/stepper", "button", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperBreadcrumbStepsPreview,
    source: RadixStepperBreadcrumbStepsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-compact-inline-radix",
    name: "Stepper",
    variant: "Compact Inline",
    installTarget: "@reui-unbound/stepper-compact-inline",
    extraDependencies: ["@reui-unbound/stepper", "button", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperCompactInlinePreview,
    source: RadixStepperCompactInlineSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-truck-route-radix",
    name: "Stepper",
    variant: "Truck Route",
    installTarget: "@reui-unbound/stepper-truck-route",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/icon-tile", "@reui-unbound/stepper", "button", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperTruckRoutePreview,
    source: RadixStepperTruckRouteSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-chevron-icon-tiles-radix",
    name: "Stepper",
    variant: "Chevron Icon Tiles",
    installTarget: "@reui-unbound/stepper-chevron-icon-tiles",
    extraDependencies: ["@reui-unbound/icon-tile", "@reui-unbound/stepper", "button", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperChevronIconTilesPreview,
    source: RadixStepperChevronIconTilesSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-numbered-chevrons-radix",
    name: "Stepper",
    variant: "Numbered Chevrons",
    installTarget: "@reui-unbound/stepper-numbered-chevrons",
    extraDependencies: ["@reui-unbound/icon-tile", "@reui-unbound/stepper", "button"],
    Component: RadixStepperNumberedChevronsPreview,
    source: RadixStepperNumberedChevronsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-filled-chevrons-radix",
    name: "Stepper",
    variant: "Filled Chevrons",
    installTarget: "@reui-unbound/stepper-filled-chevrons",
    extraDependencies: ["@reui-unbound/frame", "@reui-unbound/stepper", "button", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperFilledChevronsPreview,
    source: RadixStepperFilledChevronsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-outlined-chevrons-radix",
    name: "Stepper",
    variant: "Outlined Chevrons",
    installTarget: "@reui-unbound/stepper-outlined-chevrons",
    extraDependencies: ["@reui-unbound/frame", "@reui-unbound/stepper", "button", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperOutlinedChevronsPreview,
    source: RadixStepperOutlinedChevronsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-flat-chevrons-radix",
    name: "Stepper",
    variant: "Flat Chevrons",
    installTarget: "@reui-unbound/stepper-flat-chevrons",
    extraDependencies: ["@reui-unbound/frame", "@reui-unbound/stepper", "button", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperFlatChevronsPreview,
    source: RadixStepperFlatChevronsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-shipping-route-radix",
    name: "Stepper",
    variant: "Shipping Route",
    installTarget: "@reui-unbound/stepper-shipping-route",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/icon-tile", "@reui-unbound/stepper", "avatar", "button", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperShippingRoutePreview,
    source: RadixStepperShippingRouteSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-horizontal-step-cards-radix",
    name: "Stepper",
    variant: "Horizontal Step Cards",
    installTarget: "@reui-unbound/stepper-horizontal-step-cards",
    extraDependencies: ["@reui-unbound/frame", "@reui-unbound/icon-tile", "@reui-unbound/stepper", "button", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperHorizontalStepCardsPreview,
    source: RadixStepperHorizontalStepCardsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-shipment-progress-radix",
    name: "Stepper",
    variant: "Shipment Progress",
    installTarget: "@reui-unbound/stepper-shipment-progress",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/stepper", "button", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperShipmentProgressPreview,
    source: RadixStepperShipmentProgressSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-vertical-step-cards-radix",
    name: "Stepper",
    variant: "Vertical Step Cards",
    installTarget: "@reui-unbound/stepper-vertical-step-cards",
    extraDependencies: ["@reui-unbound/frame", "@reui-unbound/icon-tile", "@reui-unbound/stepper", "button", "separator", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperVerticalStepCardsPreview,
    source: RadixStepperVerticalStepCardsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-side-rail-icons-radix",
    name: "Stepper",
    variant: "Side Rail Icons",
    installTarget: "@reui-unbound/stepper-side-rail-icons",
    extraDependencies: ["@reui-unbound/frame", "@reui-unbound/stepper", "button", "separator", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperSideRailIconsPreview,
    source: RadixStepperSideRailIconsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-status-list-radix",
    name: "Stepper",
    variant: "Status List",
    installTarget: "@reui-unbound/stepper-status-list",
    extraDependencies: ["@reui-unbound/frame", "@reui-unbound/stepper", "button", "separator", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperStatusListPreview,
    source: RadixStepperStatusListSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-vertical-status-bars-radix",
    name: "Stepper",
    variant: "Vertical Status Bars",
    installTarget: "@reui-unbound/stepper-vertical-status-bars",
    extraDependencies: ["@reui-unbound/stepper", "button", "separator"],
    Component: RadixStepperVerticalStatusBarsPreview,
    source: RadixStepperVerticalStatusBarsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-collapsible-sub-steps-radix",
    name: "Stepper",
    variant: "Collapsible Sub-Steps",
    installTarget: "@reui-unbound/stepper-collapsible-sub-steps",
    extraDependencies: ["@reui-unbound/frame", "@reui-unbound/stepper", "button", "collapsible", "separator", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperCollapsibleSubStepsPreview,
    source: RadixStepperCollapsibleSubStepsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "stepper",
    id: "stepper-right-aligned-sub-steps-radix",
    name: "Stepper",
    variant: "Right-Aligned Sub-Steps",
    installTarget: "@reui-unbound/stepper-right-aligned-sub-steps",
    extraDependencies: ["@reui-unbound/stepper", "button", "collapsible", "separator", "@reui-unbound/icon-placeholder"],
    Component: RadixStepperRightAlignedSubStepsPreview,
    source: RadixStepperRightAlignedSubStepsSource,
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
    item: "time-picker",
    id: "time-picker-inline-panel-radix",
    name: "Time Picker",
    variant: "Inline Panel",
    installTarget: "@reui-unbound/time-picker-inline-panel",
    extraDependencies: ["@reui-unbound/time-picker", "card"],
    Component: RadixTimePickerInlinePanelPreview,
    source: RadixTimePickerInlinePanelSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "time-picker",
    id: "time-picker-popover-radix",
    name: "Time Picker",
    variant: "Popover",
    installTarget: "@reui-unbound/time-picker-popover",
    extraDependencies: ["@reui-unbound/time-picker", "field"],
    Component: RadixTimePickerPopoverPreview,
    source: RadixTimePickerPopoverSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "time-picker",
    id: "time-picker-typable-input-radix",
    name: "Time Picker",
    variant: "Typable Input",
    installTarget: "@reui-unbound/time-picker-typable-input",
    extraDependencies: ["@reui-unbound/time-picker", "field"],
    Component: RadixTimePickerTypableInputPreview,
    source: RadixTimePickerTypableInputSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "time-picker",
    id: "time-picker-12-hour-seconds-radix",
    name: "Time Picker",
    variant: "12-Hour Seconds",
    installTarget: "@reui-unbound/time-picker-12-hour-seconds",
    extraDependencies: ["@reui-unbound/time-picker", "field"],
    Component: RadixTimePicker12HourSecondsPreview,
    source: RadixTimePicker12HourSecondsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "time-picker",
    id: "time-picker-hour-only-radix",
    name: "Time Picker",
    variant: "Hour Only",
    installTarget: "@reui-unbound/time-picker-hour-only",
    extraDependencies: ["@reui-unbound/time-picker", "item", "@reui-unbound/icon-placeholder"],
    Component: RadixTimePickerHourOnlyPreview,
    source: RadixTimePickerHourOnlySource,
  }),
  componentEntry({
    flavor: "radix",
    item: "time-picker",
    id: "time-picker-opening-hours-radix",
    name: "Time Picker",
    variant: "Opening Hours",
    installTarget: "@reui-unbound/time-picker-opening-hours",
    extraDependencies: ["@reui-unbound/time-picker", "field"],
    Component: RadixTimePickerOpeningHoursPreview,
    source: RadixTimePickerOpeningHoursSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "time-picker",
    id: "time-picker-unavailable-slots-radix",
    name: "Time Picker",
    variant: "Unavailable Slots",
    installTarget: "@reui-unbound/time-picker-unavailable-slots",
    extraDependencies: ["@reui-unbound/time-picker", "field"],
    Component: RadixTimePickerUnavailableSlotsPreview,
    source: RadixTimePickerUnavailableSlotsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "time-picker",
    id: "time-picker-start-end-radix",
    name: "Time Picker",
    variant: "Start & End",
    installTarget: "@reui-unbound/time-picker-start-end",
    extraDependencies: ["@reui-unbound/time-picker", "field"],
    Component: RadixTimePickerStartEndPreview,
    source: RadixTimePickerStartEndSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "time-picker",
    id: "time-picker-time-zone-radix",
    name: "Time Picker",
    variant: "Time Zone",
    installTarget: "@reui-unbound/time-picker-time-zone",
    extraDependencies: ["@reui-unbound/time-picker", "field", "@reui-unbound/icon-placeholder"],
    Component: RadixTimePickerTimeZonePreview,
    source: RadixTimePickerTimeZoneSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "time-picker",
    id: "time-picker-confirm-before-apply-radix",
    name: "Time Picker",
    variant: "Confirm Before Apply",
    installTarget: "@reui-unbound/time-picker-confirm-before-apply",
    extraDependencies: ["@reui-unbound/time-picker", "field"],
    Component: RadixTimePickerConfirmBeforeApplyPreview,
    source: RadixTimePickerConfirmBeforeApplySource,
  }),
  componentEntry({
    flavor: "radix",
    item: "time-picker",
    id: "time-picker-localized-radix",
    name: "Time Picker",
    variant: "Localized",
    installTarget: "@reui-unbound/time-picker-localized",
    extraDependencies: ["@reui-unbound/time-picker", "card", "tabs"],
    Component: RadixTimePickerLocalizedPreview,
    source: RadixTimePickerLocalizedSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "time-picker",
    id: "time-picker-form-validation-radix",
    name: "Time Picker",
    variant: "Form Validation",
    installTarget: "@reui-unbound/time-picker-form-validation",
    extraDependencies: ["@reui-unbound/time-picker", "button", "field"],
    Component: RadixTimePickerFormValidationPreview,
    source: RadixTimePickerFormValidationSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "time-picker",
    id: "time-picker-date-time-radix",
    name: "Time Picker",
    variant: "Date & Time",
    installTarget: "@reui-unbound/time-picker-date-time",
    extraDependencies: ["@reui-unbound/time-picker", "button", "calendar", "card"],
    Component: RadixTimePickerDateTimePreview,
    source: RadixTimePickerDateTimeSource,
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
    item: "timeline",
    id: "timeline-standard-radix",
    name: "Timeline",
    variant: "Standard",
    installTarget: "@reui-unbound/timeline-standard",
    extraDependencies: ["@reui-unbound/timeline"],
    Component: RadixTimelineStandardPreview,
    source: RadixTimelineStandardSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "timeline",
    id: "timeline-roadmap-radix",
    name: "Timeline",
    variant: "Roadmap",
    installTarget: "@reui-unbound/timeline-roadmap",
    extraDependencies: ["@reui-unbound/timeline"],
    Component: RadixTimelineRoadmapPreview,
    source: RadixTimelineRoadmapSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "timeline",
    id: "timeline-order-status-radix",
    name: "Timeline",
    variant: "Order Status",
    installTarget: "@reui-unbound/timeline-order-status",
    extraDependencies: ["@reui-unbound/timeline", "@reui-unbound/icon-placeholder"],
    Component: RadixTimelineOrderStatusPreview,
    source: RadixTimelineOrderStatusSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "timeline",
    id: "timeline-git-activity-radix",
    name: "Timeline",
    variant: "Git Activity",
    installTarget: "@reui-unbound/timeline-git-activity",
    extraDependencies: ["@reui-unbound/timeline", "@reui-unbound/icon-placeholder"],
    Component: RadixTimelineGitActivityPreview,
    source: RadixTimelineGitActivitySource,
  }),
  componentEntry({
    flavor: "radix",
    item: "timeline",
    id: "timeline-milestones-radix",
    name: "Timeline",
    variant: "Milestones",
    installTarget: "@reui-unbound/timeline-milestones",
    extraDependencies: ["@reui-unbound/timeline"],
    Component: RadixTimelineMilestonesPreview,
    source: RadixTimelineMilestonesSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "timeline",
    id: "timeline-pipeline-steps-radix",
    name: "Timeline",
    variant: "Pipeline Steps",
    installTarget: "@reui-unbound/timeline-pipeline-steps",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/frame", "@reui-unbound/timeline", "avatar", "collapsible", "spinner", "@reui-unbound/icon-placeholder"],
    Component: RadixTimelinePipelineStepsPreview,
    source: RadixTimelinePipelineStepsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "timeline",
    id: "timeline-roadmap-items-radix",
    name: "Timeline",
    variant: "Roadmap Items",
    installTarget: "@reui-unbound/timeline-roadmap-items",
    extraDependencies: ["@reui-unbound/timeline"],
    Component: RadixTimelineRoadmapItemsPreview,
    source: RadixTimelineRoadmapItemsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "timeline",
    id: "timeline-horizontal-radix",
    name: "Timeline",
    variant: "Horizontal",
    installTarget: "@reui-unbound/timeline-horizontal",
    extraDependencies: ["@reui-unbound/timeline"],
    Component: RadixTimelineHorizontalPreview,
    source: RadixTimelineHorizontalSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "timeline",
    id: "timeline-leading-labels-radix",
    name: "Timeline",
    variant: "Leading Labels",
    installTarget: "@reui-unbound/timeline-leading-labels",
    extraDependencies: ["@reui-unbound/timeline"],
    Component: RadixTimelineLeadingLabelsPreview,
    source: RadixTimelineLeadingLabelsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "timeline",
    id: "timeline-deployment-log-radix",
    name: "Timeline",
    variant: "Deployment Log",
    installTarget: "@reui-unbound/timeline-deployment-log",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/timeline", "@reui-unbound/icon-placeholder"],
    Component: RadixTimelineDeploymentLogPreview,
    source: RadixTimelineDeploymentLogSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "timeline",
    id: "timeline-avatar-activity-radix",
    name: "Timeline",
    variant: "Avatar Activity",
    installTarget: "@reui-unbound/timeline-avatar-activity",
    extraDependencies: ["@reui-unbound/timeline", "avatar"],
    Component: RadixTimelineAvatarActivityPreview,
    source: RadixTimelineAvatarActivitySource,
  }),
  componentEntry({
    flavor: "radix",
    item: "timeline",
    id: "timeline-compact-milestones-radix",
    name: "Timeline",
    variant: "Compact Milestones",
    installTarget: "@reui-unbound/timeline-compact-milestones",
    extraDependencies: ["@reui-unbound/badge", "@reui-unbound/timeline", "@reui-unbound/icon-placeholder"],
    Component: RadixTimelineCompactMilestonesPreview,
    source: RadixTimelineCompactMilestonesSource,
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
    flavor: "radix",
    item: "tree",
    id: "tree-standard-radix",
    name: "Tree",
    variant: "Standard",
    installTarget: "@reui-unbound/tree-standard",
    extraDependencies: ["@reui-unbound/tree"],
    Component: RadixTreeStandardPreview,
    source: RadixTreeStandardSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "tree",
    id: "tree-indent-lines-radix",
    name: "Tree",
    variant: "Indent Lines",
    installTarget: "@reui-unbound/tree-indent-lines",
    extraDependencies: ["@reui-unbound/tree"],
    Component: RadixTreeIndentLinesPreview,
    source: RadixTreeIndentLinesSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "tree",
    id: "tree-folder-file-icons-radix",
    name: "Tree",
    variant: "Folder File Icons",
    installTarget: "@reui-unbound/tree-folder-file-icons",
    extraDependencies: ["@reui-unbound/tree", "@reui-unbound/icon-placeholder"],
    Component: RadixTreeFolderFileIconsPreview,
    source: RadixTreeFolderFileIconsSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "tree",
    id: "tree-plus-minus-toggles-radix",
    name: "Tree",
    variant: "Plus Minus Toggles",
    installTarget: "@reui-unbound/tree-plus-minus-toggles",
    extraDependencies: ["@reui-unbound/tree", "@reui-unbound/icon-placeholder"],
    Component: RadixTreePlusMinusTogglesPreview,
    source: RadixTreePlusMinusTogglesSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "tree",
    id: "tree-file-explorer-radix",
    name: "Tree",
    variant: "File Explorer",
    installTarget: "@reui-unbound/tree-file-explorer",
    extraDependencies: ["@reui-unbound/tree", "@reui-unbound/icon-placeholder"],
    Component: RadixTreeFileExplorerPreview,
    source: RadixTreeFileExplorerSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "tree",
    id: "tree-org-chart-radix",
    name: "Tree",
    variant: "Org Chart",
    installTarget: "@reui-unbound/tree-org-chart",
    extraDependencies: ["@reui-unbound/tree", "avatar"],
    Component: RadixTreeOrgChartPreview,
    source: RadixTreeOrgChartSource,
  }),
  componentEntry({
    flavor: "radix",
    item: "tree",
    id: "tree-permissions-radix",
    name: "Tree",
    variant: "Permissions",
    installTarget: "@reui-unbound/tree-permissions",
    extraDependencies: ["@reui-unbound/tree", "checkbox"],
    Component: RadixTreePermissionsPreview,
    source: RadixTreePermissionsSource,
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
