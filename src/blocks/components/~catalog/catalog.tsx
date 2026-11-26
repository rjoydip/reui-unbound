import { blockFile as file, lazyComponent, sourceLoader } from "@/blocks/~internal/lazy"
import type { SourceLoader } from "@/blocks/~internal/lazy"
import { BLOCKS } from "@/blocks/~internal/registry"
import { UI_COMPONENT_ENTRIES } from "./ui-catalog"
import type { BlockEntry, BlockFile } from "@/blocks/~internal/registry"
import baseRegistry from "@/components/kit/base/registry.json"
import reuiRegistry from "@/components/kit/registry.json"

const RadixAlertTitleDescriptionPreview = lazyComponent(() => import("../radix/alert/title-description"))
const RadixAlertLeadingIconPreview = lazyComponent(() => import("../radix/alert/leading-icon"))
const RadixAlertIconActionsPreview = lazyComponent(() => import("../radix/alert/icon-actions"))
const RadixAlertPaymentFailurePreview = lazyComponent(() => import("../radix/alert/payment-failure"))
const RadixAlertInfoVariantPreview = lazyComponent(() => import("../radix/alert/info-variant"))
const RadixAlertSuccessVariantPreview = lazyComponent(() => import("../radix/alert/success-variant"))
const RadixAlertWarningVariantPreview = lazyComponent(() => import("../radix/alert/warning-variant"))
const RadixAlertErrorVariantPreview = lazyComponent(() => import("../radix/alert/error-variant"))
const RadixAlertInvertVariantPreview = lazyComponent(() => import("../radix/alert/invert-variant"))
const RadixAlertTitleActionsPreview = lazyComponent(() => import("../radix/alert/title-actions"))
const RadixAlertDescriptionActionsPreview = lazyComponent(() => import("../radix/alert/description-actions"))
const RadixAlertFrameResetBordersPreview = lazyComponent(() => import("../radix/alert/frame-reset-borders"))
const RadixAlertStackedInFramePreview = lazyComponent(() => import("../radix/alert/stacked-in-frame"))
const RadixAlertFrameWithActionsPreview = lazyComponent(() => import("../radix/alert/frame-with-actions"))
const RadixAlertProUpsellPreview = lazyComponent(() => import("../radix/alert/pro-upsell"))
const RadixAlertUrgentBillingPreview = lazyComponent(() => import("../radix/alert/urgent-billing"))
const RadixAlertServiceStatusPreview = lazyComponent(() => import("../radix/alert/service-status"))
const RadixAlertFeatureDiscoveryPreview = lazyComponent(() => import("../radix/alert/feature-discovery"))
const RadixAlertDirectMessagePreview = lazyComponent(() => import("../radix/alert/direct-message"))
const RadixAlertCommentMentionPreview = lazyComponent(() => import("../radix/alert/comment-mention"))
const RadixAutocompleteStandardPreview = lazyComponent(() => import("../radix/autocomplete/standard"))
const RadixAutocompleteDisabledPreview = lazyComponent(() => import("../radix/autocomplete/disabled"))
const RadixAutocompleteAutoHighlightPreview = lazyComponent(() => import("../radix/autocomplete/auto-highlight"))
const RadixAutocompleteLabeledPreview = lazyComponent(() => import("../radix/autocomplete/labeled"))
const RadixAutocompleteClearButtonPreview = lazyComponent(() => import("../radix/autocomplete/clear-button"))
const RadixAutocompleteTriggerButtonPreview = lazyComponent(() => import("../radix/autocomplete/trigger-button"))
const RadixAutocompleteClearTriggerPreview = lazyComponent(() => import("../radix/autocomplete/clear-trigger"))
const RadixAutocompleteGroupsLabelsPreview = lazyComponent(() => import("../radix/autocomplete/groups-labels"))
const RadixAutocompleteSearchResultsPreview = lazyComponent(() => import("../radix/autocomplete/search-results"))
const RadixAutocompleteSmallPreview = lazyComponent(() => import("../radix/autocomplete/small"))
const RadixAutocompleteLargePreview = lazyComponent(() => import("../radix/autocomplete/large"))
const RadixAutocompleteFormIntegrationPreview = lazyComponent(() => import("../radix/autocomplete/form-integration"))
const RadixBadgePrimaryPreview = lazyComponent(() => import("../radix/badge/primary"))
const RadixBadgeSecondaryPreview = lazyComponent(() => import("../radix/badge/secondary"))
const RadixBadgeDestructivePreview = lazyComponent(() => import("../radix/badge/destructive"))
const RadixBadgeSuccessPreview = lazyComponent(() => import("../radix/badge/success"))
const RadixBadgeInfoPreview = lazyComponent(() => import("../radix/badge/info"))
const RadixBadgeWarningPreview = lazyComponent(() => import("../radix/badge/warning"))
const RadixBadgeOutlinePreview = lazyComponent(() => import("../radix/badge/outline"))
const RadixBadgePrimaryOutlinePreview = lazyComponent(() => import("../radix/badge/primary-outline"))
const RadixBadgeDestructiveOutlinePreview = lazyComponent(() => import("../radix/badge/destructive-outline"))
const RadixBadgeInfoOutlinePreview = lazyComponent(() => import("../radix/badge/info-outline"))
const RadixBadgeSuccessOutlinePreview = lazyComponent(() => import("../radix/badge/success-outline"))
const RadixBadgeWarningOutlinePreview = lazyComponent(() => import("../radix/badge/warning-outline"))
const RadixBadgePrimaryLightPreview = lazyComponent(() => import("../radix/badge/primary-light"))
const RadixBadgeDestructiveLightPreview = lazyComponent(() => import("../radix/badge/destructive-light"))
const RadixBadgeSuccessLightPreview = lazyComponent(() => import("../radix/badge/success-light"))
const RadixBadgeInfoLightPreview = lazyComponent(() => import("../radix/badge/info-light"))
const RadixBadgeWarningLightPreview = lazyComponent(() => import("../radix/badge/warning-light"))
const RadixBadgeSizesPreview = lazyComponent(() => import("../radix/badge/sizes"))
const RadixBadgeFullRadiusPreview = lazyComponent(() => import("../radix/badge/full-radius"))
const RadixBadgeWithIconPreview = lazyComponent(() => import("../radix/badge/with-icon"))
const RadixBadgeDismissButtonPreview = lazyComponent(() => import("../radix/badge/dismiss-button"))
const RadixBadgeStatusDotPreview = lazyComponent(() => import("../radix/badge/status-dot"))
const RadixBadgeAsLinkPreview = lazyComponent(() => import("../radix/badge/as-link"))
const RadixBadgeWithAvatarPreview = lazyComponent(() => import("../radix/badge/with-avatar"))
const RadixBadgeWithFlagPreview = lazyComponent(() => import("../radix/badge/with-flag"))
const RadixCascaderPreview = lazyComponent(() => import("../radix/cascader/default"))
const RadixCascaderAttributePickerPreview = lazyComponent(() => import("../radix/cascader/attribute-picker"))
const RadixCascaderMultiSelectCapPreview = lazyComponent(() => import("../radix/cascader/multi-select-cap"))
const RadixCascaderDeepSearchPreview = lazyComponent(() => import("../radix/cascader/deep-search"))
const RadixCascaderFooterFlyoutPreview = lazyComponent(() => import("../radix/cascader/footer-flyout"))
const RadixCascaderAvatarRowsPreview = lazyComponent(() => import("../radix/cascader/avatar-rows"))
const RadixCascaderPathFormattingPreview = lazyComponent(() => import("../radix/cascader/path-formatting"))
const RadixCascaderEmbeddedPanelPreview = lazyComponent(() => import("../radix/cascader/embedded-panel"))
const RadixCascaderFlatDataPreview = lazyComponent(() => import("../radix/cascader/flat-data"))
const RadixCascaderControlledStatePreview = lazyComponent(() => import("../radix/cascader/controlled-state"))
const RadixCascaderTranslatedLabelsPreview = lazyComponent(() => import("../radix/cascader/translated-labels"))
const RadixCascaderTwoLineRowsPreview = lazyComponent(() => import("../radix/cascader/two-line-rows"))
const RadixCascaderNativeFormFieldPreview = lazyComponent(() => import("../radix/cascader/native-form-field"))
const RadixCascaderColumnsModePreview = lazyComponent(() => import("../radix/cascader/columns-mode"))
const RadixCascaderTreeModePreview = lazyComponent(() => import("../radix/cascader/tree-mode"))
const RadixCascaderAsyncLoadingPreview = lazyComponent(() => import("../radix/cascader/async-loading"))
const RadixCascaderVirtualizedListPreview = lazyComponent(() => import("../radix/cascader/virtualized-list"))
const RadixCascaderRemovableChipsPreview = lazyComponent(() => import("../radix/cascader/removable-chips"))
const RadixCascaderTreeMultiSelectPreview = lazyComponent(() => import("../radix/cascader/tree-multi-select"))
const RadixCascaderColorDotsPreview = lazyComponent(() => import("../radix/cascader/color-dots"))
const RadixCascaderInheritedColorsPreview = lazyComponent(() => import("../radix/cascader/inherited-colors"))
const RadixCascaderGlobalSearchPreview = lazyComponent(() => import("../radix/cascader/global-search"))
const RadixCodeBlockPreview = lazyComponent(() => import("../radix/code-block/default"))
const CodeBlockStandardPreview = lazyComponent(() => import("../radix/code-block/standard"))
const CodeBlockPinnedCopyPreview = lazyComponent(() => import("../radix/code-block/pinned-copy"))
const CodeBlockStreamingAgentPreview = lazyComponent(() => import("../radix/code-block/streaming-agent"))
const CodeBlockAiChatPreview = lazyComponent(() => import("../radix/code-block/ai-chat"))
const CodeBlockDiffSummaryPreview = lazyComponent(() => import("../radix/code-block/diff-summary"))
const CodeBlockTransformerDiffPreview = lazyComponent(() => import("../radix/code-block/transformer-diff"))
const CodeBlockHighlightsPreview = lazyComponent(() => import("../radix/code-block/highlights"))
const CodeBlockFocusWalkthroughPreview = lazyComponent(() => import("../radix/code-block/focus-walkthrough"))
const CodeBlockTerminalOutputPreview = lazyComponent(() => import("../radix/code-block/terminal-output"))
const CodeBlockLongFilePreview = lazyComponent(() => import("../radix/code-block/long-file"))
const CodeBlockDiagnosticsActionsPreview = lazyComponent(() => import("../radix/code-block/diagnostics-actions"))
const CodeBlockLineSelectionPreview = lazyComponent(() => import("../radix/code-block/line-selection"))
const CodeBlockSearchInFilePreview = lazyComponent(() => import("../radix/code-block/search-in-file"))
const CodeBlockFileTabsPreview = lazyComponent(() => import("../radix/code-block/file-tabs"))
const CodeBlockPreHighlightedLinesPreview = lazyComponent(() => import("../radix/code-block/pre-highlighted-lines"))
const CodeBlockBeforeAfterPreview = lazyComponent(() => import("../radix/code-block/before-after"))
const CodeBlockSoftWrapPreview = lazyComponent(() => import("../radix/code-block/soft-wrap"))
const CodeBlockUnifiedPatchPreview = lazyComponent(() => import("../radix/code-block/unified-patch"))
const CodeBlockDesignTokenThemePreview = lazyComponent(() => import("../radix/code-block/design-token-theme"))
const CodeBlockAlwaysDarkPreview = lazyComponent(() => import("../radix/code-block/always-dark"))
const CodeBlockDarkTerminalPreview = lazyComponent(() => import("../radix/code-block/dark-terminal"))
const CodeBlockAcceptRejectPreview = lazyComponent(() => import("../radix/code-block/accept-reject"))
const CodeBlockCodeFoldingPreview = lazyComponent(() => import("../radix/code-block/code-folding"))
const CodeBlockFixWithAiPreview = lazyComponent(() => import("../radix/code-block/fix-with-ai"))
const CodeBlockReferenceLinesPreview = lazyComponent(() => import("../radix/code-block/reference-lines"))
const CodeBlockExternalScrollPreview = lazyComponent(() => import("../radix/code-block/external-scroll"))
const CodeBlockAnsiTerminalPreview = lazyComponent(() => import("../radix/code-block/ansi-terminal"))
const RadixColorPickerPreview = lazyComponent(() => import("../radix/color-picker/default"))
const RadixColorPickerInlinePanelPreview = lazyComponent(() => import("../radix/color-picker/inline-panel"))
const RadixColorPickerPopoverPreview = lazyComponent(() => import("../radix/color-picker/popover"))
const RadixColorPickerColorInputPreview = lazyComponent(() => import("../radix/color-picker/color-input"))
const RadixColorPickerOpacityPreview = lazyComponent(() => import("../radix/color-picker/opacity"))
const RadixColorPickerPresetSwatchesPreview = lazyComponent(() => import("../radix/color-picker/preset-swatches"))
const RadixColorPickerOklchTokenPreview = lazyComponent(() => import("../radix/color-picker/oklch-token"))
const RadixColorPickerFormatConverterPreview = lazyComponent(() => import("../radix/color-picker/format-converter"))
const RadixColorPickerHueWheelPreview = lazyComponent(() => import("../radix/color-picker/hue-wheel"))
const RadixColorPickerRecentColorsPreview = lazyComponent(() => import("../radix/color-picker/recent-colors"))
const RadixColorPickerTextHighlightPreview = lazyComponent(() => import("../radix/color-picker/text-highlight"))
const RadixColorPickerChannelSlidersPreview = lazyComponent(() => import("../radix/color-picker/channel-sliders"))
const RadixColorPickerDesignInspectorPreview = lazyComponent(() => import("../radix/color-picker/design-inspector"))
const RadixColorPickerContrastCheckerPreview = lazyComponent(() => import("../radix/color-picker/contrast-checker"))
const RadixColorPickerBrandScalePreview = lazyComponent(() => import("../radix/color-picker/brand-scale"))
const RadixColorPickerFormValidationPreview = lazyComponent(() => import("../radix/color-picker/form-validation"))
const RadixDataGridPreview = lazyComponent(() => import("../radix/data-grid/default"))
const RadixDataGridPaginationPreview = lazyComponent(() => import("../radix/data-grid/pagination"))
const RadixDataGridCellBordersPreview = lazyComponent(() => import("../radix/data-grid/cell-borders"))
const RadixDataGridDenseLayoutPreview = lazyComponent(() => import("../radix/data-grid/dense-layout"))
const RadixDataGridBorderlessPreview = lazyComponent(() => import("../radix/data-grid/borderless"))
const RadixDataGridStripedRowsPreview = lazyComponent(() => import("../radix/data-grid/striped-rows"))
const RadixDataGridAutoWidthPreview = lazyComponent(() => import("../radix/data-grid/auto-width"))
const RadixDataGridRowSelectionPreview = lazyComponent(() => import("../radix/data-grid/row-selection"))
const RadixDataGridExpandableRowsPreview = lazyComponent(() => import("../radix/data-grid/expandable-rows"))
const RadixDataGridSubTablePreview = lazyComponent(() => import("../radix/data-grid/sub-table"))
const RadixDataGridColumnIconsPreview = lazyComponent(() => import("../radix/data-grid/column-icons"))
const RadixDataGridSortableColumnsPreview = lazyComponent(() => import("../radix/data-grid/sortable-columns"))
const RadixDataGridMovableColumnsPreview = lazyComponent(() => import("../radix/data-grid/movable-columns"))
const RadixDataGridDraggableColumnsPreview = lazyComponent(() => import("../radix/data-grid/draggable-columns"))
const RadixDataGridDraggableRowsPreview = lazyComponent(() => import("../radix/data-grid/draggable-rows"))
const RadixDataGridColumnResizingPreview = lazyComponent(() => import("../radix/data-grid/column-resizing"))
const RadixDataGridPinnableColumnsPreview = lazyComponent(() => import("../radix/data-grid/pinnable-columns"))
const RadixDataGridStickyHeaderPreview = lazyComponent(() => import("../radix/data-grid/sticky-header"))
const RadixDataGridColumnControlsPreview = lazyComponent(() => import("../radix/data-grid/column-controls"))
const RadixDataGridCardContainerPreview = lazyComponent(() => import("../radix/data-grid/card-container"))
const RadixDataGridColumnVisibilityPreview = lazyComponent(() => import("../radix/data-grid/column-visibility"))
const RadixDataGridLoadingSkeletonPreview = lazyComponent(() => import("../radix/data-grid/loading-skeleton"))
const RadixDataGridCrudAdminPreview = lazyComponent(() => import("../radix/data-grid/crud-admin"))
const RadixDataGridCrudInFramePreview = lazyComponent(() => import("../radix/data-grid/crud-in-frame"))
const RadixDataGridTotalsFooterPreview = lazyComponent(() => import("../radix/data-grid/totals-footer"))
const RadixDataGridSummaryStatsFooterPreview = lazyComponent(() => import("../radix/data-grid/summary-stats-footer"))
const RadixDataGridAggregateFooterPreview = lazyComponent(() => import("../radix/data-grid/aggregate-footer"))
const RadixDataGridLocalInfiniteScrollPreview = lazyComponent(() => import("../radix/data-grid/local-infinite-scroll"))
const RadixDataGridRemoteInfiniteScrollPreview = lazyComponent(() => import("../radix/data-grid/remote-infinite-scroll"))
const RadixDataGridRowPinningPreview = lazyComponent(() => import("../radix/data-grid/row-pinning"))
const RadixDataGridTreeRowsPreview = lazyComponent(() => import("../radix/data-grid/tree-rows"))
const RadixDataGridSpreadsheetEditingPreview = lazyComponent(() => import("../radix/data-grid/spreadsheet-editing"))
const RadixDataGridColumnVirtualizationPreview = lazyComponent(() => import("../radix/data-grid/column-virtualization"))
const RadixDataGridLocalizedLabelsPreview = lazyComponent(() => import("../radix/data-grid/localized-labels"))
const RadixDataGridServerSidePaginationPreview = lazyComponent(() => import("../radix/data-grid/server-side-pagination"))
const RadixDateSelectorPreview = lazyComponent(() => import("../radix/date-selector/default"))
const RadixDateSelectorStandardInlinePreview = lazyComponent(() => import("../radix/date-selector/standard-inline"))
const RadixDateSelectorPopoverPreview = lazyComponent(() => import("../radix/date-selector/popover"))
const RadixDateSelectorDialogPreview = lazyComponent(() => import("../radix/date-selector/dialog"))
const RadixDateSelectorLanguageMenuPreview = lazyComponent(() => import("../radix/date-selector/language-menu"))
const RadixEmojiPickerPreview = lazyComponent(() => import("../radix/emoji-picker/default"))
const RadixEmojiPickerInlinePreview = lazyComponent(() => import("../radix/emoji-picker/inline"))
const RadixEmojiPickerChatComposerPreview = lazyComponent(() => import("../radix/emoji-picker/chat-composer"))
const RadixEmojiPickerMessageReactionsPreview = lazyComponent(() => import("../radix/emoji-picker/message-reactions"))
const RadixEmojiPickerPageIconPreview = lazyComponent(() => import("../radix/emoji-picker/page-icon"))
const RadixEmojiPickerCustomTeamEmojiPreview = lazyComponent(() => import("../radix/emoji-picker/custom-team-emoji"))
const RadixEmojiPickerShortcodeSuggestionsPreview = lazyComponent(() => import("../radix/emoji-picker/shortcode-suggestions"))
const RadixEmojiPickerWorkplaceSafeSetPreview = lazyComponent(() => import("../radix/emoji-picker/workplace-safe-set"))
const RadixEmojiPickerLocalizedLabelsPreview = lazyComponent(() => import("../radix/emoji-picker/localized-labels"))
const RadixEventCalendarPreview = lazyComponent(() => import("../radix/event-calendar/default"))
const RadixEventCalendarAllViewsPreview = lazyComponent(() => import("../radix/event-calendar/all-views"))
const RadixEventCalendarRoomBookingsPreview = lazyComponent(() => import("../radix/event-calendar/room-bookings"))
const RadixEventCalendarEventFormDialogPreview = lazyComponent(() => import("../radix/event-calendar/event-form-dialog"))
const RadixEventCalendarCustomEventChipsPreview = lazyComponent(() => import("../radix/event-calendar/custom-event-chips"))
const RadixEventCalendarDragToBookPreview = lazyComponent(() => import("../radix/event-calendar/drag-to-book"))
const RadixFileTypePreview = lazyComponent(() => import("../radix/file-type/default"))
const RadixFileTypeCommonFormatsPreview = lazyComponent(() => import("../radix/file-type/common-formats"))
const RadixFileTypeVariantsPreview = lazyComponent(() => import("../radix/file-type/variants"))
const RadixFileTypeSizesPreview = lazyComponent(() => import("../radix/file-type/sizes"))
const RadixFileTypeFamilyGlyphsPreview = lazyComponent(() => import("../radix/file-type/family-glyphs"))
const RadixFileTypeAllFormatsPreview = lazyComponent(() => import("../radix/file-type/all-formats"))
const RadixFileTypeFileBrowserPreview = lazyComponent(() => import("../radix/file-type/file-browser"))
const RadixFileTypeAttachmentListPreview = lazyComponent(() => import("../radix/file-type/attachment-list"))
const RadixFileTypeUploadQueuePreview = lazyComponent(() => import("../radix/file-type/upload-queue"))
const RadixFileTypeResolveFromNamePreview = lazyComponent(() => import("../radix/file-type/resolve-from-name"))
const RadixFileTypeCustomLabelsPreview = lazyComponent(() => import("../radix/file-type/custom-labels"))
const RadixFileTypeCustomColorsPreview = lazyComponent(() => import("../radix/file-type/custom-colors"))
const RadixFileTypeFormatPickerPreview = lazyComponent(() => import("../radix/file-type/format-picker"))
const RadixFileTypeLockedStarredPreview = lazyComponent(() => import("../radix/file-type/locked-starred"))
const RadixFileTypeRestyledLabelsPreview = lazyComponent(() => import("../radix/file-type/restyled-labels"))
const RadixFileTypeDotfilesBuildNamesPreview = lazyComponent(() => import("../radix/file-type/dotfiles-build-names"))
const RadixFiltersPreview = lazyComponent(() => import("../radix/filters/default"))
const RadixFiltersFullFilterBarPreview = lazyComponent(() => import("../radix/filters/full-filter-bar"))
const RadixFiltersNestedAttributesPreview = lazyComponent(() => import("../radix/filters/nested-attributes"))
const RadixFiltersStatusBadgesPreview = lazyComponent(() => import("../radix/filters/status-badges"))
const RadixFiltersAvatarsPagingPreview = lazyComponent(() => import("../radix/filters/avatars-paging"))
const RadixFiltersDateEditorsPreview = lazyComponent(() => import("../radix/filters/date-editors"))
const RadixFiltersSliderEditorPreview = lazyComponent(() => import("../radix/filters/slider-editor"))
const RadixFiltersTableFilteringPreview = lazyComponent(() => import("../radix/filters/table-filtering"))
const RadixFiltersChoiceControlsPreview = lazyComponent(() => import("../radix/filters/choice-controls"))
const RadixFiltersTypedInputsPreview = lazyComponent(() => import("../radix/filters/typed-inputs"))
const RadixFiltersPopoverBuilderPreview = lazyComponent(() => import("../radix/filters/popover-builder"))
const RadixFiltersInlineBuilderPreview = lazyComponent(() => import("../radix/filters/inline-builder"))
const RadixFiltersControlledTranslatedPreview = lazyComponent(() => import("../radix/filters/controlled-translated"))
const RadixFramePreview = lazyComponent(() => import("../radix/frame/default"))
const RadixFrameStandardPreview = lazyComponent(() => import("../radix/frame/standard"))
const RadixFrameSeparatedPanelsPreview = lazyComponent(() => import("../radix/frame/separated-panels"))
const RadixFrameStackedPanelsPreview = lazyComponent(() => import("../radix/frame/stacked-panels"))
const RadixFrameStackedDensePreview = lazyComponent(() => import("../radix/frame/stacked-dense"))
const RadixFrameCollapsiblePanelsPreview = lazyComponent(() => import("../radix/frame/collapsible-panels"))
const RadixFrameGhostVariantPreview = lazyComponent(() => import("../radix/frame/ghost-variant"))
const RadixFrameDenseLayoutPreview = lazyComponent(() => import("../radix/frame/dense-layout"))
const RadixFrameStackedRowsPreview = lazyComponent(() => import("../radix/frame/stacked-rows"))
const RadixFrameExtraSmallSpacingPreview = lazyComponent(() => import("../radix/frame/extra-small-spacing"))
const RadixFrameSmallSpacingPreview = lazyComponent(() => import("../radix/frame/small-spacing"))
const RadixFrameDefaultSpacingPreview = lazyComponent(() => import("../radix/frame/default-spacing"))
const RadixFrameLargeSpacingPreview = lazyComponent(() => import("../radix/frame/large-spacing"))
const RadixFrameSmallRadiusPreview = lazyComponent(() => import("../radix/frame/small-radius"))
const RadixFrameMediumRadiusPreview = lazyComponent(() => import("../radix/frame/medium-radius"))
const RadixFrameLargeRadiusPreview = lazyComponent(() => import("../radix/frame/large-radius"))
const RadixFrameDefaultRadiusPreview = lazyComponent(() => import("../radix/frame/default-radius"))
const RadixFrameExtraLargeRadiusPreview = lazyComponent(() => import("../radix/frame/extra-large-radius"))
const RadixFrameContentOnlyPanelsPreview = lazyComponent(() => import("../radix/frame/content-only-panels"))
const RadixFrameStackedContentOnlyPreview = lazyComponent(() => import("../radix/frame/stacked-content-only"))
const RadixGanttPreview = lazyComponent(() => import("../radix/gantt/default"))
const RadixGanttSettingsMenuPreview = lazyComponent(() => import("../radix/gantt/settings-menu"))
const RadixGanttDragReorderPreview = lazyComponent(() => import("../radix/gantt/drag-reorder"))
const RadixGanttQuarterRoadmapPreview = lazyComponent(() => import("../radix/gantt/quarter-roadmap"))
const RadixGanttCapacityBoardPreview = lazyComponent(() => import("../radix/gantt/capacity-board"))
const RadixGanttTaskTablePreview = lazyComponent(() => import("../radix/gantt/task-table"))
const RadixGanttBaselineTrackingPreview = lazyComponent(() => import("../radix/gantt/baseline-tracking"))
const RadixGanttDependenciesMilestonesPreview = lazyComponent(() => import("../radix/gantt/dependencies-milestones"))
const RadixGanttWorkingDaysPreview = lazyComponent(() => import("../radix/gantt/working-days"))
const RadixIconStackPreview = lazyComponent(() => import("../radix/icon-stack/default"))
const RadixIconStackIsometricPreview = lazyComponent(() => import("../radix/icon-stack/isometric"))
const RadixIconStackSizesPreview = lazyComponent(() => import("../radix/icon-stack/sizes"))
const RadixIconStackColorsPreview = lazyComponent(() => import("../radix/icon-stack/colors"))
const RadixIconStackBadgeOverlayPreview = lazyComponent(() => import("../radix/icon-stack/badge-overlay"))
const RadixIconStackEmptyStatePreview = lazyComponent(() => import("../radix/icon-stack/empty-state"))
const RadixIconStackItemMediaPreview = lazyComponent(() => import("../radix/icon-stack/item-media"))
const RadixIconTilePreview = lazyComponent(() => import("../radix/icon-tile/default"))
const RadixIconTileDefaultPreview = lazyComponent(() => import("../radix/icon-tile/default"))
const RadixIconTileElevatedPreview = lazyComponent(() => import("../radix/icon-tile/elevated"))
const RadixIconTileFramedPreview = lazyComponent(() => import("../radix/icon-tile/framed"))
const RadixIconTileAllVariantsPreview = lazyComponent(() => import("../radix/icon-tile/all-variants"))
const RadixIconTileSizesPreview = lazyComponent(() => import("../radix/icon-tile/sizes"))
const RadixIconTileCircularPreview = lazyComponent(() => import("../radix/icon-tile/circular"))
const RadixIconTileCustomSizingPreview = lazyComponent(() => import("../radix/icon-tile/custom-sizing"))
const RadixIconTileColorTonesPreview = lazyComponent(() => import("../radix/icon-tile/color-tones"))
const RadixIconTileTextContentPreview = lazyComponent(() => import("../radix/icon-tile/text-content"))
const RadixIconTileListRowPreview = lazyComponent(() => import("../radix/icon-tile/list-row"))
const RadixIconTileFeatureCardPreview = lazyComponent(() => import("../radix/icon-tile/feature-card"))
const RadixIconTileEmptyStatePreview = lazyComponent(() => import("../radix/icon-tile/empty-state"))
const RadixIconTileInteractivePreview = lazyComponent(() => import("../radix/icon-tile/interactive"))
const RadixIconTileStatusOverlayPreview = lazyComponent(() => import("../radix/icon-tile/status-overlay"))
const RadixIconTileSoftTonesPreview = lazyComponent(() => import("../radix/icon-tile/soft-tones"))
const RadixIconTileSolidTonesPreview = lazyComponent(() => import("../radix/icon-tile/solid-tones"))
const RadixIconTileBrandColorsPreview = lazyComponent(() => import("../radix/icon-tile/brand-colors"))
const RadixKanbanPreview = lazyComponent(() => import("../radix/kanban/default"))
const RadixKanbanPlaceholderOverlayPreview = lazyComponent(() => import("../radix/kanban/placeholder-overlay"))
const RadixKanbanDynamicOverlayPreview = lazyComponent(() => import("../radix/kanban/dynamic-overlay"))
const RadixKanbanFrameColumnsPreview = lazyComponent(() => import("../radix/kanban/frame-columns"))
const RadixKanbanStackedFramePreview = lazyComponent(() => import("../radix/kanban/stacked-frame"))
const RadixKanbanFeatureRoadmapPreview = lazyComponent(() => import("../radix/kanban/feature-roadmap"))
const RadixKanbanPersistedMovesPreview = lazyComponent(() => import("../radix/kanban/persisted-moves"))
const RadixNumberFieldPreview = lazyComponent(() => import("../radix/number-field/default"))
const RadixNumberFieldDefaultSizePreview = lazyComponent(() => import("../radix/number-field/default-size"))
const RadixNumberFieldSmallSizePreview = lazyComponent(() => import("../radix/number-field/small-size"))
const RadixNumberFieldLargeSizePreview = lazyComponent(() => import("../radix/number-field/large-size"))
const RadixNumberFieldButtonsOnRightPreview = lazyComponent(() => import("../radix/number-field/buttons-on-right"))
const RadixNumberFieldSpinnerButtonsPreview = lazyComponent(() => import("../radix/number-field/spinner-buttons"))
const RadixNumberFieldFormValidationPreview = lazyComponent(() => import("../radix/number-field/form-validation"))
const RadixPhoneInputPreview = lazyComponent(() => import("../radix/phone-input/default"))
const RadixPhoneInputStandardPreview = lazyComponent(() => import("../radix/phone-input/standard"))
const RadixPhoneInputSmallPreview = lazyComponent(() => import("../radix/phone-input/small"))
const RadixPhoneInputLargePreview = lazyComponent(() => import("../radix/phone-input/large"))
const RadixPhoneInputDisabledPreview = lazyComponent(() => import("../radix/phone-input/disabled"))
const RadixPhoneInputPresetValuePreview = lazyComponent(() => import("../radix/phone-input/preset-value"))
const RadixPhoneInputErrorStatePreview = lazyComponent(() => import("../radix/phone-input/error-state"))
const RadixPhoneInputDefaultCountryPreview = lazyComponent(() => import("../radix/phone-input/default-country"))
const RadixPhoneInputReadOnlyPreview = lazyComponent(() => import("../radix/phone-input/read-only"))
const RadixRatingPreview = lazyComponent(() => import("../radix/rating/default"))
const RadixRatingStandardPreview = lazyComponent(() => import("../radix/rating/standard"))
const RadixRatingDecimalValuePreview = lazyComponent(() => import("../radix/rating/decimal-value"))
const RadixRatingShowValuePreview = lazyComponent(() => import("../radix/rating/show-value"))
const RadixRatingEditablePreview = lazyComponent(() => import("../radix/rating/editable"))
const RadixRatingSizesPreview = lazyComponent(() => import("../radix/rating/sizes"))
const RadixRatingReviewSummaryPreview = lazyComponent(() => import("../radix/rating/review-summary"))
const RadixRatingHalfStarInputPreview = lazyComponent(() => import("../radix/rating/half-star-input"))
const RadixRatingEmojiReactionsPreview = lazyComponent(() => import("../radix/rating/emoji-reactions"))
const RadixRatingReviewTextPreview = lazyComponent(() => import("../radix/rating/review-text"))
const RadixScrollspyPreview = lazyComponent(() => import("../radix/scrollspy/default"))
const RadixScrollspyVerticalNavPreview = lazyComponent(() => import("../radix/scrollspy/vertical-nav"))
const RadixScrollspyHorizontalNavPreview = lazyComponent(() => import("../radix/scrollspy/horizontal-nav"))
const RadixSignaturePadPreview = lazyComponent(() => import("../radix/signature-pad/default"))
const RadixSignaturePadPinnedActionsPreview = lazyComponent(() => import("../radix/signature-pad/pinned-actions"))
const RadixSignaturePadUndoRedoPreview = lazyComponent(() => import("../radix/signature-pad/undo-redo"))
const RadixSignaturePadFormValidationPreview = lazyComponent(() => import("../radix/signature-pad/form-validation"))
const RadixSignaturePadSigningWorkspacePreview = lazyComponent(() => import("../radix/signature-pad/signing-workspace"))
const RadixSignaturePadExportFormatsPreview = lazyComponent(() => import("../radix/signature-pad/export-formats"))
const RadixSignaturePadDrawOrTypePreview = lazyComponent(() => import("../radix/signature-pad/draw-or-type"))
const RadixSignaturePadAgreementCardPreview = lazyComponent(() => import("../radix/signature-pad/agreement-card"))
const RadixSignaturePadInDialogPreview = lazyComponent(() => import("../radix/signature-pad/in-dialog"))
const RadixSignaturePadStylusModePreview = lazyComponent(() => import("../radix/signature-pad/stylus-mode"))
const RadixSignaturePadClauseInitialsPreview = lazyComponent(() => import("../radix/signature-pad/clause-initials"))
const RadixSignaturePadProofOfDeliveryPreview = lazyComponent(() => import("../radix/signature-pad/proof-of-delivery"))
const RadixSignaturePadFileUploadPreview = lazyComponent(() => import("../radix/signature-pad/file-upload"))
const RadixSortablePreview = lazyComponent(() => import("../radix/sortable/default"))
const RadixSortableFileListPreview = lazyComponent(() => import("../radix/sortable/file-list"))
const RadixSortableGridLayoutPreview = lazyComponent(() => import("../radix/sortable/grid-layout"))
const RadixSortableNestedLayoutPreview = lazyComponent(() => import("../radix/sortable/nested-layout"))
const RadixSortablePlaylistPreview = lazyComponent(() => import("../radix/sortable/playlist"))
const RadixSortableSettingsPriorityPreview = lazyComponent(() => import("../radix/sortable/settings-priority"))
const RadixSortableSidebarNavigationPreview = lazyComponent(() => import("../radix/sortable/sidebar-navigation"))
const RadixSortableImageGalleryPreview = lazyComponent(() => import("../radix/sortable/image-gallery"))
const RadixSortablePersistedOrderPreview = lazyComponent(() => import("../radix/sortable/persisted-order"))
const RadixStepperPreview = lazyComponent(() => import("../radix/stepper/default"))
const RadixStepperStandardPreview = lazyComponent(() => import("../radix/stepper/standard"))
const RadixStepperCompletedStatePreview = lazyComponent(() => import("../radix/stepper/completed-state"))
const RadixStepperLoadingStatePreview = lazyComponent(() => import("../radix/stepper/loading-state"))
const RadixStepperControlledPreview = lazyComponent(() => import("../radix/stepper/controlled"))
const RadixStepperLabelsBelowPreview = lazyComponent(() => import("../radix/stepper/labels-below"))
const RadixStepperLeftAlignedTitlesPreview = lazyComponent(() => import("../radix/stepper/left-aligned-titles"))
const RadixStepperIconsBadgesPreview = lazyComponent(() => import("../radix/stepper/icons-badges"))
const RadixStepperDescriptionsPreview = lazyComponent(() => import("../radix/stepper/descriptions"))
const RadixStepperInlineTitlesPreview = lazyComponent(() => import("../radix/stepper/inline-titles"))
const RadixStepperTitleCaptionPreview = lazyComponent(() => import("../radix/stepper/title-caption"))
const RadixStepperBarWithTitlesPreview = lazyComponent(() => import("../radix/stepper/bar-with-titles"))
const RadixStepperSegmentedBarPreview = lazyComponent(() => import("../radix/stepper/segmented-bar"))
const RadixStepperVerticalDescriptionsPreview = lazyComponent(() => import("../radix/stepper/vertical-descriptions"))
const RadixStepperVerticalPreview = lazyComponent(() => import("../radix/stepper/vertical"))
const RadixStepperVerticalTitlesPreview = lazyComponent(() => import("../radix/stepper/vertical-titles"))
const RadixStepperDeliveryStopsPreview = lazyComponent(() => import("../radix/stepper/delivery-stops"))
const RadixStepperDottedProgressPreview = lazyComponent(() => import("../radix/stepper/dotted-progress"))
const RadixStepperStageDetailsPreview = lazyComponent(() => import("../radix/stepper/stage-details"))
const RadixStepperFrameIconTilesPreview = lazyComponent(() => import("../radix/stepper/frame-icon-tiles"))
const RadixStepperPurchaseOrdersPreview = lazyComponent(() => import("../radix/stepper/purchase-orders"))
const RadixStepperSecurityChecksPreview = lazyComponent(() => import("../radix/stepper/security-checks"))
const RadixStepperBottomColorBarsPreview = lazyComponent(() => import("../radix/stepper/bottom-color-bars"))
const RadixStepperTopColorBarsPreview = lazyComponent(() => import("../radix/stepper/top-color-bars"))
const RadixStepperIconTileRowsPreview = lazyComponent(() => import("../radix/stepper/icon-tile-rows"))
const RadixStepperPhaseTrackPreview = lazyComponent(() => import("../radix/stepper/phase-track"))
const RadixStepperTimestampedCheckpointsPreview = lazyComponent(() => import("../radix/stepper/timestamped-checkpoints"))
const RadixStepperTransitArrowPreview = lazyComponent(() => import("../radix/stepper/transit-arrow"))
const RadixStepperBreadcrumbStepsPreview = lazyComponent(() => import("../radix/stepper/breadcrumb-steps"))
const RadixStepperCompactInlinePreview = lazyComponent(() => import("../radix/stepper/compact-inline"))
const RadixStepperTruckRoutePreview = lazyComponent(() => import("../radix/stepper/truck-route"))
const RadixStepperChevronIconTilesPreview = lazyComponent(() => import("../radix/stepper/chevron-icon-tiles"))
const RadixStepperNumberedChevronsPreview = lazyComponent(() => import("../radix/stepper/numbered-chevrons"))
const RadixStepperFilledChevronsPreview = lazyComponent(() => import("../radix/stepper/filled-chevrons"))
const RadixStepperOutlinedChevronsPreview = lazyComponent(() => import("../radix/stepper/outlined-chevrons"))
const RadixStepperFlatChevronsPreview = lazyComponent(() => import("../radix/stepper/flat-chevrons"))
const RadixStepperShippingRoutePreview = lazyComponent(() => import("../radix/stepper/shipping-route"))
const RadixStepperHorizontalStepCardsPreview = lazyComponent(() => import("../radix/stepper/horizontal-step-cards"))
const RadixStepperShipmentProgressPreview = lazyComponent(() => import("../radix/stepper/shipment-progress"))
const RadixStepperVerticalStepCardsPreview = lazyComponent(() => import("../radix/stepper/vertical-step-cards"))
const RadixStepperSideRailIconsPreview = lazyComponent(() => import("../radix/stepper/side-rail-icons"))
const RadixStepperStatusListPreview = lazyComponent(() => import("../radix/stepper/status-list"))
const RadixStepperVerticalStatusBarsPreview = lazyComponent(() => import("../radix/stepper/vertical-status-bars"))
const RadixStepperCollapsibleSubStepsPreview = lazyComponent(() => import("../radix/stepper/collapsible-sub-steps"))
const RadixStepperRightAlignedSubStepsPreview = lazyComponent(() => import("../radix/stepper/right-aligned-sub-steps"))
const RadixTimePickerPreview = lazyComponent(() => import("../radix/time-picker/default"))
const RadixTimePickerInlinePanelPreview = lazyComponent(() => import("../radix/time-picker/inline-panel"))
const RadixTimePickerPopoverPreview = lazyComponent(() => import("../radix/time-picker/popover"))
const RadixTimePickerTypableInputPreview = lazyComponent(() => import("../radix/time-picker/typable-input"))
const RadixTimePicker12HourSecondsPreview = lazyComponent(() => import("../radix/time-picker/12-hour-seconds"))
const RadixTimePickerHourOnlyPreview = lazyComponent(() => import("../radix/time-picker/hour-only"))
const RadixTimePickerOpeningHoursPreview = lazyComponent(() => import("../radix/time-picker/opening-hours"))
const RadixTimePickerUnavailableSlotsPreview = lazyComponent(() => import("../radix/time-picker/unavailable-slots"))
const RadixTimePickerStartEndPreview = lazyComponent(() => import("../radix/time-picker/start-end"))
const RadixTimePickerTimeZonePreview = lazyComponent(() => import("../radix/time-picker/time-zone"))
const RadixTimePickerConfirmBeforeApplyPreview = lazyComponent(() => import("../radix/time-picker/confirm-before-apply"))
const RadixTimePickerLocalizedPreview = lazyComponent(() => import("../radix/time-picker/localized"))
const RadixTimePickerFormValidationPreview = lazyComponent(() => import("../radix/time-picker/form-validation"))
const RadixTimePickerDateTimePreview = lazyComponent(() => import("../radix/time-picker/date-time"))
const RadixTimelinePreview = lazyComponent(() => import("../radix/timeline/default"))
const RadixTimelineStandardPreview = lazyComponent(() => import("../radix/timeline/standard"))
const RadixTimelineRoadmapPreview = lazyComponent(() => import("../radix/timeline/roadmap"))
const RadixTimelineOrderStatusPreview = lazyComponent(() => import("../radix/timeline/order-status"))
const RadixTimelineGitActivityPreview = lazyComponent(() => import("../radix/timeline/git-activity"))
const RadixTimelineMilestonesPreview = lazyComponent(() => import("../radix/timeline/milestones"))
const RadixTimelinePipelineStepsPreview = lazyComponent(() => import("../radix/timeline/pipeline-steps"))
const RadixTimelineRoadmapItemsPreview = lazyComponent(() => import("../radix/timeline/roadmap-items"))
const RadixTimelineHorizontalPreview = lazyComponent(() => import("../radix/timeline/horizontal"))
const RadixTimelineLeadingLabelsPreview = lazyComponent(() => import("../radix/timeline/leading-labels"))
const RadixTimelineDeploymentLogPreview = lazyComponent(() => import("../radix/timeline/deployment-log"))
const RadixTimelineAvatarActivityPreview = lazyComponent(() => import("../radix/timeline/avatar-activity"))
const RadixTimelineCompactMilestonesPreview = lazyComponent(() => import("../radix/timeline/compact-milestones"))
const RadixTreePreview = lazyComponent(() => import("../radix/tree/default"))
const RadixTreeStandardPreview = lazyComponent(() => import("../radix/tree/standard"))
const RadixTreeIndentLinesPreview = lazyComponent(() => import("../radix/tree/indent-lines"))
const RadixTreeFolderFileIconsPreview = lazyComponent(() => import("../radix/tree/folder-file-icons"))
const RadixTreePlusMinusTogglesPreview = lazyComponent(() => import("../radix/tree/plus-minus-toggles"))
const RadixTreeFileExplorerPreview = lazyComponent(() => import("../radix/tree/file-explorer"))
const RadixTreeOrgChartPreview = lazyComponent(() => import("../radix/tree/org-chart"))
const RadixTreePermissionsPreview = lazyComponent(() => import("../radix/tree/permissions"))
const BaseAutocompletePreview = lazyComponent(() => import("../base/autocomplete/default"))
const BaseBadgePreview = lazyComponent(() => import("../base/badge/default"))
const BaseCascaderPreview = lazyComponent(() => import("../base/cascader/default"))
const BaseCodeBlockPreview = lazyComponent(() => import("../base/code-block/default"))
const BaseColorPickerPreview = lazyComponent(() => import("../base/color-picker/default"))
const BaseDataGridPreview = lazyComponent(() => import("../base/data-grid/default"))
const BaseDateSelectorPreview = lazyComponent(() => import("../base/date-selector/default"))
const BaseEmojiPickerPreview = lazyComponent(() => import("../base/emoji-picker/default"))
const BaseEventCalendarPreview = lazyComponent(() => import("../base/event-calendar/default"))
const BaseFiltersPreview = lazyComponent(() => import("../base/filters/default"))
const BaseFramePreview = lazyComponent(() => import("../base/frame/default"))
const BaseGanttPreview = lazyComponent(() => import("../base/gantt/default"))
const BaseIconStackPreview = lazyComponent(() => import("../base/icon-stack/default"))
const BaseIconTilePreview = lazyComponent(() => import("../base/icon-tile/default"))
const BaseKanbanPreview = lazyComponent(() => import("../base/kanban/default"))
const BaseNumberFieldPreview = lazyComponent(() => import("../base/number-field/default"))
const BasePhoneInputPreview = lazyComponent(() => import("../base/phone-input/default"))
const BaseSignaturePadPreview = lazyComponent(() => import("../base/signature-pad/default"))
const BaseSortablePreview = lazyComponent(() => import("../base/sortable/default"))
const BaseStepperPreview = lazyComponent(() => import("../base/stepper/default"))
const BaseTimePickerPreview = lazyComponent(() => import("../base/time-picker/default"))
const BaseTimelinePreview = lazyComponent(() => import("../base/timeline/default"))
const BaseTreePreview = lazyComponent(() => import("../base/tree/default"))

const RadixAlertTitleDescriptionSource = sourceLoader(() => import("../radix/alert/title-description.tsx?raw"))
const RadixAlertLeadingIconSource = sourceLoader(() => import("../radix/alert/leading-icon.tsx?raw"))
const RadixAlertIconActionsSource = sourceLoader(() => import("../radix/alert/icon-actions.tsx?raw"))
const RadixAlertPaymentFailureSource = sourceLoader(() => import("../radix/alert/payment-failure.tsx?raw"))
const RadixAlertInfoVariantSource = sourceLoader(() => import("../radix/alert/info-variant.tsx?raw"))
const RadixAlertSuccessVariantSource = sourceLoader(() => import("../radix/alert/success-variant.tsx?raw"))
const RadixAlertWarningVariantSource = sourceLoader(() => import("../radix/alert/warning-variant.tsx?raw"))
const RadixAlertErrorVariantSource = sourceLoader(() => import("../radix/alert/error-variant.tsx?raw"))
const RadixAlertInvertVariantSource = sourceLoader(() => import("../radix/alert/invert-variant.tsx?raw"))
const RadixAlertTitleActionsSource = sourceLoader(() => import("../radix/alert/title-actions.tsx?raw"))
const RadixAlertDescriptionActionsSource = sourceLoader(() => import("../radix/alert/description-actions.tsx?raw"))
const RadixAlertFrameResetBordersSource = sourceLoader(() => import("../radix/alert/frame-reset-borders.tsx?raw"))
const RadixAlertStackedInFrameSource = sourceLoader(() => import("../radix/alert/stacked-in-frame.tsx?raw"))
const RadixAlertFrameWithActionsSource = sourceLoader(() => import("../radix/alert/frame-with-actions.tsx?raw"))
const RadixAlertProUpsellSource = sourceLoader(() => import("../radix/alert/pro-upsell.tsx?raw"))
const RadixAlertUrgentBillingSource = sourceLoader(() => import("../radix/alert/urgent-billing.tsx?raw"))
const RadixAlertServiceStatusSource = sourceLoader(() => import("../radix/alert/service-status.tsx?raw"))
const RadixAlertFeatureDiscoverySource = sourceLoader(() => import("../radix/alert/feature-discovery.tsx?raw"))
const RadixAlertDirectMessageSource = sourceLoader(() => import("../radix/alert/direct-message.tsx?raw"))
const RadixAlertCommentMentionSource = sourceLoader(() => import("../radix/alert/comment-mention.tsx?raw"))
const RadixAutocompleteStandardSource = sourceLoader(() => import("../radix/autocomplete/standard.tsx?raw"))
const RadixAutocompleteDisabledSource = sourceLoader(() => import("../radix/autocomplete/disabled.tsx?raw"))
const RadixAutocompleteAutoHighlightSource = sourceLoader(() => import("../radix/autocomplete/auto-highlight.tsx?raw"))
const RadixAutocompleteLabeledSource = sourceLoader(() => import("../radix/autocomplete/labeled.tsx?raw"))
const RadixAutocompleteClearButtonSource = sourceLoader(() => import("../radix/autocomplete/clear-button.tsx?raw"))
const RadixAutocompleteTriggerButtonSource = sourceLoader(() => import("../radix/autocomplete/trigger-button.tsx?raw"))
const RadixAutocompleteClearTriggerSource = sourceLoader(() => import("../radix/autocomplete/clear-trigger.tsx?raw"))
const RadixAutocompleteGroupsLabelsSource = sourceLoader(() => import("../radix/autocomplete/groups-labels.tsx?raw"))
const RadixAutocompleteSearchResultsSource = sourceLoader(() => import("../radix/autocomplete/search-results.tsx?raw"))
const RadixAutocompleteSmallSource = sourceLoader(() => import("../radix/autocomplete/small.tsx?raw"))
const RadixAutocompleteLargeSource = sourceLoader(() => import("../radix/autocomplete/large.tsx?raw"))
const RadixAutocompleteFormIntegrationSource = sourceLoader(() => import("../radix/autocomplete/form-integration.tsx?raw"))
const RadixBadgePrimarySource = sourceLoader(() => import("../radix/badge/primary.tsx?raw"))
const RadixBadgeSecondarySource = sourceLoader(() => import("../radix/badge/secondary.tsx?raw"))
const RadixBadgeDestructiveSource = sourceLoader(() => import("../radix/badge/destructive.tsx?raw"))
const RadixBadgeSuccessSource = sourceLoader(() => import("../radix/badge/success.tsx?raw"))
const RadixBadgeInfoSource = sourceLoader(() => import("../radix/badge/info.tsx?raw"))
const RadixBadgeWarningSource = sourceLoader(() => import("../radix/badge/warning.tsx?raw"))
const RadixBadgeOutlineSource = sourceLoader(() => import("../radix/badge/outline.tsx?raw"))
const RadixBadgePrimaryOutlineSource = sourceLoader(() => import("../radix/badge/primary-outline.tsx?raw"))
const RadixBadgeDestructiveOutlineSource = sourceLoader(() => import("../radix/badge/destructive-outline.tsx?raw"))
const RadixBadgeInfoOutlineSource = sourceLoader(() => import("../radix/badge/info-outline.tsx?raw"))
const RadixBadgeSuccessOutlineSource = sourceLoader(() => import("../radix/badge/success-outline.tsx?raw"))
const RadixBadgeWarningOutlineSource = sourceLoader(() => import("../radix/badge/warning-outline.tsx?raw"))
const RadixBadgePrimaryLightSource = sourceLoader(() => import("../radix/badge/primary-light.tsx?raw"))
const RadixBadgeDestructiveLightSource = sourceLoader(() => import("../radix/badge/destructive-light.tsx?raw"))
const RadixBadgeSuccessLightSource = sourceLoader(() => import("../radix/badge/success-light.tsx?raw"))
const RadixBadgeInfoLightSource = sourceLoader(() => import("../radix/badge/info-light.tsx?raw"))
const RadixBadgeWarningLightSource = sourceLoader(() => import("../radix/badge/warning-light.tsx?raw"))
const RadixBadgeSizesSource = sourceLoader(() => import("../radix/badge/sizes.tsx?raw"))
const RadixBadgeFullRadiusSource = sourceLoader(() => import("../radix/badge/full-radius.tsx?raw"))
const RadixBadgeWithIconSource = sourceLoader(() => import("../radix/badge/with-icon.tsx?raw"))
const RadixBadgeDismissButtonSource = sourceLoader(() => import("../radix/badge/dismiss-button.tsx?raw"))
const RadixBadgeStatusDotSource = sourceLoader(() => import("../radix/badge/status-dot.tsx?raw"))
const RadixBadgeAsLinkSource = sourceLoader(() => import("../radix/badge/as-link.tsx?raw"))
const RadixBadgeWithAvatarSource = sourceLoader(() => import("../radix/badge/with-avatar.tsx?raw"))
const RadixBadgeWithFlagSource = sourceLoader(() => import("../radix/badge/with-flag.tsx?raw"))
const RadixCascaderSource = sourceLoader(() => import("../radix/cascader/default.tsx?raw"))
const RadixCascaderAttributePickerSource = sourceLoader(() => import("../radix/cascader/attribute-picker.tsx?raw"))
const RadixCascaderMultiSelectCapSource = sourceLoader(() => import("../radix/cascader/multi-select-cap.tsx?raw"))
const RadixCascaderDeepSearchSource = sourceLoader(() => import("../radix/cascader/deep-search.tsx?raw"))
const RadixCascaderFooterFlyoutSource = sourceLoader(() => import("../radix/cascader/footer-flyout.tsx?raw"))
const RadixCascaderAvatarRowsSource = sourceLoader(() => import("../radix/cascader/avatar-rows.tsx?raw"))
const RadixCascaderPathFormattingSource = sourceLoader(() => import("../radix/cascader/path-formatting.tsx?raw"))
const RadixCascaderEmbeddedPanelSource = sourceLoader(() => import("../radix/cascader/embedded-panel.tsx?raw"))
const RadixCascaderFlatDataSource = sourceLoader(() => import("../radix/cascader/flat-data.tsx?raw"))
const RadixCascaderControlledStateSource = sourceLoader(() => import("../radix/cascader/controlled-state.tsx?raw"))
const RadixCascaderTranslatedLabelsSource = sourceLoader(() => import("../radix/cascader/translated-labels.tsx?raw"))
const RadixCascaderTwoLineRowsSource = sourceLoader(() => import("../radix/cascader/two-line-rows.tsx?raw"))
const RadixCascaderNativeFormFieldSource = sourceLoader(() => import("../radix/cascader/native-form-field.tsx?raw"))
const RadixCascaderColumnsModeSource = sourceLoader(() => import("../radix/cascader/columns-mode.tsx?raw"))
const RadixCascaderTreeModeSource = sourceLoader(() => import("../radix/cascader/tree-mode.tsx?raw"))
const RadixCascaderAsyncLoadingSource = sourceLoader(() => import("../radix/cascader/async-loading.tsx?raw"))
const RadixCascaderVirtualizedListSource = sourceLoader(() => import("../radix/cascader/virtualized-list.tsx?raw"))
const RadixCascaderRemovableChipsSource = sourceLoader(() => import("../radix/cascader/removable-chips.tsx?raw"))
const RadixCascaderTreeMultiSelectSource = sourceLoader(() => import("../radix/cascader/tree-multi-select.tsx?raw"))
const RadixCascaderColorDotsSource = sourceLoader(() => import("../radix/cascader/color-dots.tsx?raw"))
const RadixCascaderInheritedColorsSource = sourceLoader(() => import("../radix/cascader/inherited-colors.tsx?raw"))
const RadixCascaderGlobalSearchSource = sourceLoader(() => import("../radix/cascader/global-search.tsx?raw"))
const RadixCodeBlockSource = sourceLoader(() => import("../radix/code-block/default.tsx?raw"))
const CodeBlockStandardSource = sourceLoader(() => import("../radix/code-block/standard.tsx?raw"))
const CodeBlockPinnedCopySource = sourceLoader(() => import("../radix/code-block/pinned-copy.tsx?raw"))
const CodeBlockStreamingAgentSource = sourceLoader(() => import("../radix/code-block/streaming-agent.tsx?raw"))
const CodeBlockAiChatSource = sourceLoader(() => import("../radix/code-block/ai-chat.tsx?raw"))
const CodeBlockDiffSummarySource = sourceLoader(() => import("../radix/code-block/diff-summary.tsx?raw"))
const CodeBlockTransformerDiffSource = sourceLoader(() => import("../radix/code-block/transformer-diff.tsx?raw"))
const CodeBlockHighlightsSource = sourceLoader(() => import("../radix/code-block/highlights.tsx?raw"))
const CodeBlockFocusWalkthroughSource = sourceLoader(() => import("../radix/code-block/focus-walkthrough.tsx?raw"))
const CodeBlockTerminalOutputSource = sourceLoader(() => import("../radix/code-block/terminal-output.tsx?raw"))
const CodeBlockLongFileSource = sourceLoader(() => import("../radix/code-block/long-file.tsx?raw"))
const CodeBlockDiagnosticsActionsSource = sourceLoader(() => import("../radix/code-block/diagnostics-actions.tsx?raw"))
const CodeBlockLineSelectionSource = sourceLoader(() => import("../radix/code-block/line-selection.tsx?raw"))
const CodeBlockSearchInFileSource = sourceLoader(() => import("../radix/code-block/search-in-file.tsx?raw"))
const CodeBlockFileTabsSource = sourceLoader(() => import("../radix/code-block/file-tabs.tsx?raw"))
const CodeBlockPreHighlightedLinesSource = sourceLoader(() => import("../radix/code-block/pre-highlighted-lines.tsx?raw"))
const CodeBlockBeforeAfterSource = sourceLoader(() => import("../radix/code-block/before-after.tsx?raw"))
const CodeBlockSoftWrapSource = sourceLoader(() => import("../radix/code-block/soft-wrap.tsx?raw"))
const CodeBlockUnifiedPatchSource = sourceLoader(() => import("../radix/code-block/unified-patch.tsx?raw"))
const CodeBlockDesignTokenThemeSource = sourceLoader(() => import("../radix/code-block/design-token-theme.tsx?raw"))
const CodeBlockAlwaysDarkSource = sourceLoader(() => import("../radix/code-block/always-dark.tsx?raw"))
const CodeBlockDarkTerminalSource = sourceLoader(() => import("../radix/code-block/dark-terminal.tsx?raw"))
const CodeBlockAcceptRejectSource = sourceLoader(() => import("../radix/code-block/accept-reject.tsx?raw"))
const CodeBlockCodeFoldingSource = sourceLoader(() => import("../radix/code-block/code-folding.tsx?raw"))
const CodeBlockFixWithAiSource = sourceLoader(() => import("../radix/code-block/fix-with-ai.tsx?raw"))
const CodeBlockReferenceLinesSource = sourceLoader(() => import("../radix/code-block/reference-lines.tsx?raw"))
const CodeBlockExternalScrollSource = sourceLoader(() => import("../radix/code-block/external-scroll.tsx?raw"))
const CodeBlockAnsiTerminalSource = sourceLoader(() => import("../radix/code-block/ansi-terminal.tsx?raw"))
const RadixColorPickerSource = sourceLoader(() => import("../radix/color-picker/default.tsx?raw"))
const RadixColorPickerInlinePanelSource = sourceLoader(() => import("../radix/color-picker/inline-panel.tsx?raw"))
const RadixColorPickerPopoverSource = sourceLoader(() => import("../radix/color-picker/popover.tsx?raw"))
const RadixColorPickerColorInputSource = sourceLoader(() => import("../radix/color-picker/color-input.tsx?raw"))
const RadixColorPickerOpacitySource = sourceLoader(() => import("../radix/color-picker/opacity.tsx?raw"))
const RadixColorPickerPresetSwatchesSource = sourceLoader(() => import("../radix/color-picker/preset-swatches.tsx?raw"))
const RadixColorPickerOklchTokenSource = sourceLoader(() => import("../radix/color-picker/oklch-token.tsx?raw"))
const RadixColorPickerFormatConverterSource = sourceLoader(() => import("../radix/color-picker/format-converter.tsx?raw"))
const RadixColorPickerHueWheelSource = sourceLoader(() => import("../radix/color-picker/hue-wheel.tsx?raw"))
const RadixColorPickerRecentColorsSource = sourceLoader(() => import("../radix/color-picker/recent-colors.tsx?raw"))
const RadixColorPickerTextHighlightSource = sourceLoader(() => import("../radix/color-picker/text-highlight.tsx?raw"))
const RadixColorPickerChannelSlidersSource = sourceLoader(() => import("../radix/color-picker/channel-sliders.tsx?raw"))
const RadixColorPickerDesignInspectorSource = sourceLoader(() => import("../radix/color-picker/design-inspector.tsx?raw"))
const RadixColorPickerContrastCheckerSource = sourceLoader(() => import("../radix/color-picker/contrast-checker.tsx?raw"))
const RadixColorPickerBrandScaleSource = sourceLoader(() => import("../radix/color-picker/brand-scale.tsx?raw"))
const RadixColorPickerFormValidationSource = sourceLoader(() => import("../radix/color-picker/form-validation.tsx?raw"))
const RadixDataGridSource = sourceLoader(() => import("../radix/data-grid/default.tsx?raw"))
const RadixDataGridPaginationSource = sourceLoader(() => import("../radix/data-grid/pagination.tsx?raw"))
const RadixDataGridCellBordersSource = sourceLoader(() => import("../radix/data-grid/cell-borders.tsx?raw"))
const RadixDataGridDenseLayoutSource = sourceLoader(() => import("../radix/data-grid/dense-layout.tsx?raw"))
const RadixDataGridBorderlessSource = sourceLoader(() => import("../radix/data-grid/borderless.tsx?raw"))
const RadixDataGridStripedRowsSource = sourceLoader(() => import("../radix/data-grid/striped-rows.tsx?raw"))
const RadixDataGridAutoWidthSource = sourceLoader(() => import("../radix/data-grid/auto-width.tsx?raw"))
const RadixDataGridRowSelectionSource = sourceLoader(() => import("../radix/data-grid/row-selection.tsx?raw"))
const RadixDataGridExpandableRowsSource = sourceLoader(() => import("../radix/data-grid/expandable-rows.tsx?raw"))
const RadixDataGridSubTableSource = sourceLoader(() => import("../radix/data-grid/sub-table.tsx?raw"))
const RadixDataGridColumnIconsSource = sourceLoader(() => import("../radix/data-grid/column-icons.tsx?raw"))
const RadixDataGridSortableColumnsSource = sourceLoader(() => import("../radix/data-grid/sortable-columns.tsx?raw"))
const RadixDataGridMovableColumnsSource = sourceLoader(() => import("../radix/data-grid/movable-columns.tsx?raw"))
const RadixDataGridDraggableColumnsSource = sourceLoader(() => import("../radix/data-grid/draggable-columns.tsx?raw"))
const RadixDataGridDraggableRowsSource = sourceLoader(() => import("../radix/data-grid/draggable-rows.tsx?raw"))
const RadixDataGridColumnResizingSource = sourceLoader(() => import("../radix/data-grid/column-resizing.tsx?raw"))
const RadixDataGridPinnableColumnsSource = sourceLoader(() => import("../radix/data-grid/pinnable-columns.tsx?raw"))
const RadixDataGridStickyHeaderSource = sourceLoader(() => import("../radix/data-grid/sticky-header.tsx?raw"))
const RadixDataGridColumnControlsSource = sourceLoader(() => import("../radix/data-grid/column-controls.tsx?raw"))
const RadixDataGridCardContainerSource = sourceLoader(() => import("../radix/data-grid/card-container.tsx?raw"))
const RadixDataGridColumnVisibilitySource = sourceLoader(() => import("../radix/data-grid/column-visibility.tsx?raw"))
const RadixDataGridLoadingSkeletonSource = sourceLoader(() => import("../radix/data-grid/loading-skeleton.tsx?raw"))
const RadixDataGridCrudAdminSource = sourceLoader(() => import("../radix/data-grid/crud-admin.tsx?raw"))
const RadixDataGridCrudInFrameSource = sourceLoader(() => import("../radix/data-grid/crud-in-frame.tsx?raw"))
const RadixDataGridTotalsFooterSource = sourceLoader(() => import("../radix/data-grid/totals-footer.tsx?raw"))
const RadixDataGridSummaryStatsFooterSource = sourceLoader(() => import("../radix/data-grid/summary-stats-footer.tsx?raw"))
const RadixDataGridAggregateFooterSource = sourceLoader(() => import("../radix/data-grid/aggregate-footer.tsx?raw"))
const RadixDataGridLocalInfiniteScrollSource = sourceLoader(() => import("../radix/data-grid/local-infinite-scroll.tsx?raw"))
const RadixDataGridRemoteInfiniteScrollSource = sourceLoader(() => import("../radix/data-grid/remote-infinite-scroll.tsx?raw"))
const RadixDataGridRowPinningSource = sourceLoader(() => import("../radix/data-grid/row-pinning.tsx?raw"))
const RadixDataGridTreeRowsSource = sourceLoader(() => import("../radix/data-grid/tree-rows.tsx?raw"))
const RadixDataGridSpreadsheetEditingSource = sourceLoader(() => import("../radix/data-grid/spreadsheet-editing.tsx?raw"))
const RadixDataGridColumnVirtualizationSource = sourceLoader(() => import("../radix/data-grid/column-virtualization.tsx?raw"))
const RadixDataGridLocalizedLabelsSource = sourceLoader(() => import("../radix/data-grid/localized-labels.tsx?raw"))
const RadixDataGridServerSidePaginationSource = sourceLoader(() => import("../radix/data-grid/server-side-pagination.tsx?raw"))
const RadixDateSelectorSource = sourceLoader(() => import("../radix/date-selector/default.tsx?raw"))
const RadixDateSelectorStandardInlineSource = sourceLoader(() => import("../radix/date-selector/standard-inline.tsx?raw"))
const RadixDateSelectorPopoverSource = sourceLoader(() => import("../radix/date-selector/popover.tsx?raw"))
const RadixDateSelectorDialogSource = sourceLoader(() => import("../radix/date-selector/dialog.tsx?raw"))
const RadixDateSelectorLanguageMenuSource = sourceLoader(() => import("../radix/date-selector/language-menu.tsx?raw"))
const RadixEmojiPickerSource = sourceLoader(() => import("../radix/emoji-picker/default.tsx?raw"))
const RadixEmojiPickerInlineSource = sourceLoader(() => import("../radix/emoji-picker/inline.tsx?raw"))
const RadixEmojiPickerChatComposerSource = sourceLoader(() => import("../radix/emoji-picker/chat-composer.tsx?raw"))
const RadixEmojiPickerMessageReactionsSource = sourceLoader(() => import("../radix/emoji-picker/message-reactions.tsx?raw"))
const RadixEmojiPickerPageIconSource = sourceLoader(() => import("../radix/emoji-picker/page-icon.tsx?raw"))
const RadixEmojiPickerCustomTeamEmojiSource = sourceLoader(() => import("../radix/emoji-picker/custom-team-emoji.tsx?raw"))
const RadixEmojiPickerShortcodeSuggestionsSource = sourceLoader(() => import("../radix/emoji-picker/shortcode-suggestions.tsx?raw"))
const RadixEmojiPickerWorkplaceSafeSetSource = sourceLoader(() => import("../radix/emoji-picker/workplace-safe-set.tsx?raw"))
const RadixEmojiPickerLocalizedLabelsSource = sourceLoader(() => import("../radix/emoji-picker/localized-labels.tsx?raw"))
const RadixEventCalendarSource = sourceLoader(() => import("../radix/event-calendar/default.tsx?raw"))
const RadixEventCalendarAllViewsSource = sourceLoader(() => import("../radix/event-calendar/all-views.tsx?raw"))
const RadixEventCalendarRoomBookingsSource = sourceLoader(() => import("../radix/event-calendar/room-bookings.tsx?raw"))
const RadixEventCalendarEventFormDialogSource = sourceLoader(() => import("../radix/event-calendar/event-form-dialog.tsx?raw"))
const RadixEventCalendarCustomEventChipsSource = sourceLoader(() => import("../radix/event-calendar/custom-event-chips.tsx?raw"))
const RadixEventCalendarDragToBookSource = sourceLoader(() => import("../radix/event-calendar/drag-to-book.tsx?raw"))
const RadixFileTypeSource = sourceLoader(() => import("../radix/file-type/default.tsx?raw"))
const RadixFileTypeCommonFormatsSource = sourceLoader(() => import("../radix/file-type/common-formats.tsx?raw"))
const RadixFileTypeVariantsSource = sourceLoader(() => import("../radix/file-type/variants.tsx?raw"))
const RadixFileTypeSizesSource = sourceLoader(() => import("../radix/file-type/sizes.tsx?raw"))
const RadixFileTypeFamilyGlyphsSource = sourceLoader(() => import("../radix/file-type/family-glyphs.tsx?raw"))
const RadixFileTypeAllFormatsSource = sourceLoader(() => import("../radix/file-type/all-formats.tsx?raw"))
const RadixFileTypeFileBrowserSource = sourceLoader(() => import("../radix/file-type/file-browser.tsx?raw"))
const RadixFileTypeAttachmentListSource = sourceLoader(() => import("../radix/file-type/attachment-list.tsx?raw"))
const RadixFileTypeUploadQueueSource = sourceLoader(() => import("../radix/file-type/upload-queue.tsx?raw"))
const RadixFileTypeResolveFromNameSource = sourceLoader(() => import("../radix/file-type/resolve-from-name.tsx?raw"))
const RadixFileTypeCustomLabelsSource = sourceLoader(() => import("../radix/file-type/custom-labels.tsx?raw"))
const RadixFileTypeCustomColorsSource = sourceLoader(() => import("../radix/file-type/custom-colors.tsx?raw"))
const RadixFileTypeFormatPickerSource = sourceLoader(() => import("../radix/file-type/format-picker.tsx?raw"))
const RadixFileTypeLockedStarredSource = sourceLoader(() => import("../radix/file-type/locked-starred.tsx?raw"))
const RadixFileTypeRestyledLabelsSource = sourceLoader(() => import("../radix/file-type/restyled-labels.tsx?raw"))
const RadixFileTypeDotfilesBuildNamesSource = sourceLoader(() => import("../radix/file-type/dotfiles-build-names.tsx?raw"))
const RadixFiltersSource = sourceLoader(() => import("../radix/filters/default.tsx?raw"))
const RadixFiltersFullFilterBarSource = sourceLoader(() => import("../radix/filters/full-filter-bar.tsx?raw"))
const RadixFiltersNestedAttributesSource = sourceLoader(() => import("../radix/filters/nested-attributes.tsx?raw"))
const RadixFiltersStatusBadgesSource = sourceLoader(() => import("../radix/filters/status-badges.tsx?raw"))
const RadixFiltersAvatarsPagingSource = sourceLoader(() => import("../radix/filters/avatars-paging.tsx?raw"))
const RadixFiltersDateEditorsSource = sourceLoader(() => import("../radix/filters/date-editors.tsx?raw"))
const RadixFiltersSliderEditorSource = sourceLoader(() => import("../radix/filters/slider-editor.tsx?raw"))
const RadixFiltersTableFilteringSource = sourceLoader(() => import("../radix/filters/table-filtering.tsx?raw"))
const RadixFiltersChoiceControlsSource = sourceLoader(() => import("../radix/filters/choice-controls.tsx?raw"))
const RadixFiltersTypedInputsSource = sourceLoader(() => import("../radix/filters/typed-inputs.tsx?raw"))
const RadixFiltersPopoverBuilderSource = sourceLoader(() => import("../radix/filters/popover-builder.tsx?raw"))
const RadixFiltersInlineBuilderSource = sourceLoader(() => import("../radix/filters/inline-builder.tsx?raw"))
const RadixFiltersControlledTranslatedSource = sourceLoader(() => import("../radix/filters/controlled-translated.tsx?raw"))
const RadixFrameSource = sourceLoader(() => import("../radix/frame/default.tsx?raw"))
const RadixFrameStandardSource = sourceLoader(() => import("../radix/frame/standard.tsx?raw"))
const RadixFrameSeparatedPanelsSource = sourceLoader(() => import("../radix/frame/separated-panels.tsx?raw"))
const RadixFrameStackedPanelsSource = sourceLoader(() => import("../radix/frame/stacked-panels.tsx?raw"))
const RadixFrameStackedDenseSource = sourceLoader(() => import("../radix/frame/stacked-dense.tsx?raw"))
const RadixFrameCollapsiblePanelsSource = sourceLoader(() => import("../radix/frame/collapsible-panels.tsx?raw"))
const RadixFrameGhostVariantSource = sourceLoader(() => import("../radix/frame/ghost-variant.tsx?raw"))
const RadixFrameDenseLayoutSource = sourceLoader(() => import("../radix/frame/dense-layout.tsx?raw"))
const RadixFrameStackedRowsSource = sourceLoader(() => import("../radix/frame/stacked-rows.tsx?raw"))
const RadixFrameExtraSmallSpacingSource = sourceLoader(() => import("../radix/frame/extra-small-spacing.tsx?raw"))
const RadixFrameSmallSpacingSource = sourceLoader(() => import("../radix/frame/small-spacing.tsx?raw"))
const RadixFrameDefaultSpacingSource = sourceLoader(() => import("../radix/frame/default-spacing.tsx?raw"))
const RadixFrameLargeSpacingSource = sourceLoader(() => import("../radix/frame/large-spacing.tsx?raw"))
const RadixFrameSmallRadiusSource = sourceLoader(() => import("../radix/frame/small-radius.tsx?raw"))
const RadixFrameMediumRadiusSource = sourceLoader(() => import("../radix/frame/medium-radius.tsx?raw"))
const RadixFrameLargeRadiusSource = sourceLoader(() => import("../radix/frame/large-radius.tsx?raw"))
const RadixFrameDefaultRadiusSource = sourceLoader(() => import("../radix/frame/default-radius.tsx?raw"))
const RadixFrameExtraLargeRadiusSource = sourceLoader(() => import("../radix/frame/extra-large-radius.tsx?raw"))
const RadixFrameContentOnlyPanelsSource = sourceLoader(() => import("../radix/frame/content-only-panels.tsx?raw"))
const RadixFrameStackedContentOnlySource = sourceLoader(() => import("../radix/frame/stacked-content-only.tsx?raw"))
const RadixGanttSource = sourceLoader(() => import("../radix/gantt/default.tsx?raw"))
const RadixGanttSettingsMenuSource = sourceLoader(() => import("../radix/gantt/settings-menu.tsx?raw"))
const RadixGanttDragReorderSource = sourceLoader(() => import("../radix/gantt/drag-reorder.tsx?raw"))
const RadixGanttQuarterRoadmapSource = sourceLoader(() => import("../radix/gantt/quarter-roadmap.tsx?raw"))
const RadixGanttCapacityBoardSource = sourceLoader(() => import("../radix/gantt/capacity-board.tsx?raw"))
const RadixGanttTaskTableSource = sourceLoader(() => import("../radix/gantt/task-table.tsx?raw"))
const RadixGanttBaselineTrackingSource = sourceLoader(() => import("../radix/gantt/baseline-tracking.tsx?raw"))
const RadixGanttDependenciesMilestonesSource = sourceLoader(() => import("../radix/gantt/dependencies-milestones.tsx?raw"))
const RadixGanttWorkingDaysSource = sourceLoader(() => import("../radix/gantt/working-days.tsx?raw"))
const RadixIconStackSource = sourceLoader(() => import("../radix/icon-stack/default.tsx?raw"))
const RadixIconStackIsometricSource = sourceLoader(() => import("../radix/icon-stack/isometric.tsx?raw"))
const RadixIconStackSizesSource = sourceLoader(() => import("../radix/icon-stack/sizes.tsx?raw"))
const RadixIconStackColorsSource = sourceLoader(() => import("../radix/icon-stack/colors.tsx?raw"))
const RadixIconStackBadgeOverlaySource = sourceLoader(() => import("../radix/icon-stack/badge-overlay.tsx?raw"))
const RadixIconStackEmptyStateSource = sourceLoader(() => import("../radix/icon-stack/empty-state.tsx?raw"))
const RadixIconStackItemMediaSource = sourceLoader(() => import("../radix/icon-stack/item-media.tsx?raw"))
const RadixIconTileSource = sourceLoader(() => import("../radix/icon-tile/default.tsx?raw"))
const RadixIconTileDefaultSource = sourceLoader(() => import("../radix/icon-tile/default.tsx?raw"))
const RadixIconTileElevatedSource = sourceLoader(() => import("../radix/icon-tile/elevated.tsx?raw"))
const RadixIconTileFramedSource = sourceLoader(() => import("../radix/icon-tile/framed.tsx?raw"))
const RadixIconTileAllVariantsSource = sourceLoader(() => import("../radix/icon-tile/all-variants.tsx?raw"))
const RadixIconTileSizesSource = sourceLoader(() => import("../radix/icon-tile/sizes.tsx?raw"))
const RadixIconTileCircularSource = sourceLoader(() => import("../radix/icon-tile/circular.tsx?raw"))
const RadixIconTileCustomSizingSource = sourceLoader(() => import("../radix/icon-tile/custom-sizing.tsx?raw"))
const RadixIconTileColorTonesSource = sourceLoader(() => import("../radix/icon-tile/color-tones.tsx?raw"))
const RadixIconTileTextContentSource = sourceLoader(() => import("../radix/icon-tile/text-content.tsx?raw"))
const RadixIconTileListRowSource = sourceLoader(() => import("../radix/icon-tile/list-row.tsx?raw"))
const RadixIconTileFeatureCardSource = sourceLoader(() => import("../radix/icon-tile/feature-card.tsx?raw"))
const RadixIconTileEmptyStateSource = sourceLoader(() => import("../radix/icon-tile/empty-state.tsx?raw"))
const RadixIconTileInteractiveSource = sourceLoader(() => import("../radix/icon-tile/interactive.tsx?raw"))
const RadixIconTileStatusOverlaySource = sourceLoader(() => import("../radix/icon-tile/status-overlay.tsx?raw"))
const RadixIconTileSoftTonesSource = sourceLoader(() => import("../radix/icon-tile/soft-tones.tsx?raw"))
const RadixIconTileSolidTonesSource = sourceLoader(() => import("../radix/icon-tile/solid-tones.tsx?raw"))
const RadixIconTileBrandColorsSource = sourceLoader(() => import("../radix/icon-tile/brand-colors.tsx?raw"))
const RadixKanbanSource = sourceLoader(() => import("../radix/kanban/default.tsx?raw"))
const RadixKanbanPlaceholderOverlaySource = sourceLoader(() => import("../radix/kanban/placeholder-overlay.tsx?raw"))
const RadixKanbanDynamicOverlaySource = sourceLoader(() => import("../radix/kanban/dynamic-overlay.tsx?raw"))
const RadixKanbanFrameColumnsSource = sourceLoader(() => import("../radix/kanban/frame-columns.tsx?raw"))
const RadixKanbanStackedFrameSource = sourceLoader(() => import("../radix/kanban/stacked-frame.tsx?raw"))
const RadixKanbanFeatureRoadmapSource = sourceLoader(() => import("../radix/kanban/feature-roadmap.tsx?raw"))
const RadixKanbanPersistedMovesSource = sourceLoader(() => import("../radix/kanban/persisted-moves.tsx?raw"))
const RadixNumberFieldSource = sourceLoader(() => import("../radix/number-field/default.tsx?raw"))
const RadixNumberFieldDefaultSizeSource = sourceLoader(() => import("../radix/number-field/default-size.tsx?raw"))
const RadixNumberFieldSmallSizeSource = sourceLoader(() => import("../radix/number-field/small-size.tsx?raw"))
const RadixNumberFieldLargeSizeSource = sourceLoader(() => import("../radix/number-field/large-size.tsx?raw"))
const RadixNumberFieldButtonsOnRightSource = sourceLoader(() => import("../radix/number-field/buttons-on-right.tsx?raw"))
const RadixNumberFieldSpinnerButtonsSource = sourceLoader(() => import("../radix/number-field/spinner-buttons.tsx?raw"))
const RadixNumberFieldFormValidationSource = sourceLoader(() => import("../radix/number-field/form-validation.tsx?raw"))
const RadixPhoneInputSource = sourceLoader(() => import("../radix/phone-input/default.tsx?raw"))
const RadixPhoneInputStandardSource = sourceLoader(() => import("../radix/phone-input/standard.tsx?raw"))
const RadixPhoneInputSmallSource = sourceLoader(() => import("../radix/phone-input/small.tsx?raw"))
const RadixPhoneInputLargeSource = sourceLoader(() => import("../radix/phone-input/large.tsx?raw"))
const RadixPhoneInputDisabledSource = sourceLoader(() => import("../radix/phone-input/disabled.tsx?raw"))
const RadixPhoneInputPresetValueSource = sourceLoader(() => import("../radix/phone-input/preset-value.tsx?raw"))
const RadixPhoneInputErrorStateSource = sourceLoader(() => import("../radix/phone-input/error-state.tsx?raw"))
const RadixPhoneInputDefaultCountrySource = sourceLoader(() => import("../radix/phone-input/default-country.tsx?raw"))
const RadixPhoneInputReadOnlySource = sourceLoader(() => import("../radix/phone-input/read-only.tsx?raw"))
const RadixRatingSource = sourceLoader(() => import("../radix/rating/default.tsx?raw"))
const RadixRatingStandardSource = sourceLoader(() => import("../radix/rating/standard.tsx?raw"))
const RadixRatingDecimalValueSource = sourceLoader(() => import("../radix/rating/decimal-value.tsx?raw"))
const RadixRatingShowValueSource = sourceLoader(() => import("../radix/rating/show-value.tsx?raw"))
const RadixRatingEditableSource = sourceLoader(() => import("../radix/rating/editable.tsx?raw"))
const RadixRatingSizesSource = sourceLoader(() => import("../radix/rating/sizes.tsx?raw"))
const RadixRatingReviewSummarySource = sourceLoader(() => import("../radix/rating/review-summary.tsx?raw"))
const RadixRatingHalfStarInputSource = sourceLoader(() => import("../radix/rating/half-star-input.tsx?raw"))
const RadixRatingEmojiReactionsSource = sourceLoader(() => import("../radix/rating/emoji-reactions.tsx?raw"))
const RadixRatingReviewTextSource = sourceLoader(() => import("../radix/rating/review-text.tsx?raw"))
const RadixScrollspySource = sourceLoader(() => import("../radix/scrollspy/default.tsx?raw"))
const RadixScrollspyVerticalNavSource = sourceLoader(() => import("../radix/scrollspy/vertical-nav.tsx?raw"))
const RadixScrollspyHorizontalNavSource = sourceLoader(() => import("../radix/scrollspy/horizontal-nav.tsx?raw"))
const RadixSignaturePadSource = sourceLoader(() => import("../radix/signature-pad/default.tsx?raw"))
const RadixSignaturePadPinnedActionsSource = sourceLoader(() => import("../radix/signature-pad/pinned-actions.tsx?raw"))
const RadixSignaturePadUndoRedoSource = sourceLoader(() => import("../radix/signature-pad/undo-redo.tsx?raw"))
const RadixSignaturePadFormValidationSource = sourceLoader(() => import("../radix/signature-pad/form-validation.tsx?raw"))
const RadixSignaturePadSigningWorkspaceSource = sourceLoader(() => import("../radix/signature-pad/signing-workspace.tsx?raw"))
const RadixSignaturePadExportFormatsSource = sourceLoader(() => import("../radix/signature-pad/export-formats.tsx?raw"))
const RadixSignaturePadDrawOrTypeSource = sourceLoader(() => import("../radix/signature-pad/draw-or-type.tsx?raw"))
const RadixSignaturePadAgreementCardSource = sourceLoader(() => import("../radix/signature-pad/agreement-card.tsx?raw"))
const RadixSignaturePadInDialogSource = sourceLoader(() => import("../radix/signature-pad/in-dialog.tsx?raw"))
const RadixSignaturePadStylusModeSource = sourceLoader(() => import("../radix/signature-pad/stylus-mode.tsx?raw"))
const RadixSignaturePadClauseInitialsSource = sourceLoader(() => import("../radix/signature-pad/clause-initials.tsx?raw"))
const RadixSignaturePadProofOfDeliverySource = sourceLoader(() => import("../radix/signature-pad/proof-of-delivery.tsx?raw"))
const RadixSignaturePadFileUploadSource = sourceLoader(() => import("../radix/signature-pad/file-upload.tsx?raw"))
const RadixSortableSource = sourceLoader(() => import("../radix/sortable/default.tsx?raw"))
const RadixSortableFileListSource = sourceLoader(() => import("../radix/sortable/file-list.tsx?raw"))
const RadixSortableGridLayoutSource = sourceLoader(() => import("../radix/sortable/grid-layout.tsx?raw"))
const RadixSortableNestedLayoutSource = sourceLoader(() => import("../radix/sortable/nested-layout.tsx?raw"))
const RadixSortablePlaylistSource = sourceLoader(() => import("../radix/sortable/playlist.tsx?raw"))
const RadixSortableSettingsPrioritySource = sourceLoader(() => import("../radix/sortable/settings-priority.tsx?raw"))
const RadixSortableSidebarNavigationSource = sourceLoader(() => import("../radix/sortable/sidebar-navigation.tsx?raw"))
const RadixSortableImageGallerySource = sourceLoader(() => import("../radix/sortable/image-gallery.tsx?raw"))
const RadixSortablePersistedOrderSource = sourceLoader(() => import("../radix/sortable/persisted-order.tsx?raw"))
const RadixStepperSource = sourceLoader(() => import("../radix/stepper/default.tsx?raw"))
const RadixStepperStandardSource = sourceLoader(() => import("../radix/stepper/standard.tsx?raw"))
const RadixStepperCompletedStateSource = sourceLoader(() => import("../radix/stepper/completed-state.tsx?raw"))
const RadixStepperLoadingStateSource = sourceLoader(() => import("../radix/stepper/loading-state.tsx?raw"))
const RadixStepperControlledSource = sourceLoader(() => import("../radix/stepper/controlled.tsx?raw"))
const RadixStepperLabelsBelowSource = sourceLoader(() => import("../radix/stepper/labels-below.tsx?raw"))
const RadixStepperLeftAlignedTitlesSource = sourceLoader(() => import("../radix/stepper/left-aligned-titles.tsx?raw"))
const RadixStepperIconsBadgesSource = sourceLoader(() => import("../radix/stepper/icons-badges.tsx?raw"))
const RadixStepperDescriptionsSource = sourceLoader(() => import("../radix/stepper/descriptions.tsx?raw"))
const RadixStepperInlineTitlesSource = sourceLoader(() => import("../radix/stepper/inline-titles.tsx?raw"))
const RadixStepperTitleCaptionSource = sourceLoader(() => import("../radix/stepper/title-caption.tsx?raw"))
const RadixStepperBarWithTitlesSource = sourceLoader(() => import("../radix/stepper/bar-with-titles.tsx?raw"))
const RadixStepperSegmentedBarSource = sourceLoader(() => import("../radix/stepper/segmented-bar.tsx?raw"))
const RadixStepperVerticalDescriptionsSource = sourceLoader(() => import("../radix/stepper/vertical-descriptions.tsx?raw"))
const RadixStepperVerticalSource = sourceLoader(() => import("../radix/stepper/vertical.tsx?raw"))
const RadixStepperVerticalTitlesSource = sourceLoader(() => import("../radix/stepper/vertical-titles.tsx?raw"))
const RadixStepperDeliveryStopsSource = sourceLoader(() => import("../radix/stepper/delivery-stops.tsx?raw"))
const RadixStepperDottedProgressSource = sourceLoader(() => import("../radix/stepper/dotted-progress.tsx?raw"))
const RadixStepperStageDetailsSource = sourceLoader(() => import("../radix/stepper/stage-details.tsx?raw"))
const RadixStepperFrameIconTilesSource = sourceLoader(() => import("../radix/stepper/frame-icon-tiles.tsx?raw"))
const RadixStepperPurchaseOrdersSource = sourceLoader(() => import("../radix/stepper/purchase-orders.tsx?raw"))
const RadixStepperSecurityChecksSource = sourceLoader(() => import("../radix/stepper/security-checks.tsx?raw"))
const RadixStepperBottomColorBarsSource = sourceLoader(() => import("../radix/stepper/bottom-color-bars.tsx?raw"))
const RadixStepperTopColorBarsSource = sourceLoader(() => import("../radix/stepper/top-color-bars.tsx?raw"))
const RadixStepperIconTileRowsSource = sourceLoader(() => import("../radix/stepper/icon-tile-rows.tsx?raw"))
const RadixStepperPhaseTrackSource = sourceLoader(() => import("../radix/stepper/phase-track.tsx?raw"))
const RadixStepperTimestampedCheckpointsSource = sourceLoader(() => import("../radix/stepper/timestamped-checkpoints.tsx?raw"))
const RadixStepperTransitArrowSource = sourceLoader(() => import("../radix/stepper/transit-arrow.tsx?raw"))
const RadixStepperBreadcrumbStepsSource = sourceLoader(() => import("../radix/stepper/breadcrumb-steps.tsx?raw"))
const RadixStepperCompactInlineSource = sourceLoader(() => import("../radix/stepper/compact-inline.tsx?raw"))
const RadixStepperTruckRouteSource = sourceLoader(() => import("../radix/stepper/truck-route.tsx?raw"))
const RadixStepperChevronIconTilesSource = sourceLoader(() => import("../radix/stepper/chevron-icon-tiles.tsx?raw"))
const RadixStepperNumberedChevronsSource = sourceLoader(() => import("../radix/stepper/numbered-chevrons.tsx?raw"))
const RadixStepperFilledChevronsSource = sourceLoader(() => import("../radix/stepper/filled-chevrons.tsx?raw"))
const RadixStepperOutlinedChevronsSource = sourceLoader(() => import("../radix/stepper/outlined-chevrons.tsx?raw"))
const RadixStepperFlatChevronsSource = sourceLoader(() => import("../radix/stepper/flat-chevrons.tsx?raw"))
const RadixStepperShippingRouteSource = sourceLoader(() => import("../radix/stepper/shipping-route.tsx?raw"))
const RadixStepperHorizontalStepCardsSource = sourceLoader(() => import("../radix/stepper/horizontal-step-cards.tsx?raw"))
const RadixStepperShipmentProgressSource = sourceLoader(() => import("../radix/stepper/shipment-progress.tsx?raw"))
const RadixStepperVerticalStepCardsSource = sourceLoader(() => import("../radix/stepper/vertical-step-cards.tsx?raw"))
const RadixStepperSideRailIconsSource = sourceLoader(() => import("../radix/stepper/side-rail-icons.tsx?raw"))
const RadixStepperStatusListSource = sourceLoader(() => import("../radix/stepper/status-list.tsx?raw"))
const RadixStepperVerticalStatusBarsSource = sourceLoader(() => import("../radix/stepper/vertical-status-bars.tsx?raw"))
const RadixStepperCollapsibleSubStepsSource = sourceLoader(() => import("../radix/stepper/collapsible-sub-steps.tsx?raw"))
const RadixStepperRightAlignedSubStepsSource = sourceLoader(() => import("../radix/stepper/right-aligned-sub-steps.tsx?raw"))
const RadixTimePickerSource = sourceLoader(() => import("../radix/time-picker/default.tsx?raw"))
const RadixTimePickerInlinePanelSource = sourceLoader(() => import("../radix/time-picker/inline-panel.tsx?raw"))
const RadixTimePickerPopoverSource = sourceLoader(() => import("../radix/time-picker/popover.tsx?raw"))
const RadixTimePickerTypableInputSource = sourceLoader(() => import("../radix/time-picker/typable-input.tsx?raw"))
const RadixTimePicker12HourSecondsSource = sourceLoader(() => import("../radix/time-picker/12-hour-seconds.tsx?raw"))
const RadixTimePickerHourOnlySource = sourceLoader(() => import("../radix/time-picker/hour-only.tsx?raw"))
const RadixTimePickerOpeningHoursSource = sourceLoader(() => import("../radix/time-picker/opening-hours.tsx?raw"))
const RadixTimePickerUnavailableSlotsSource = sourceLoader(() => import("../radix/time-picker/unavailable-slots.tsx?raw"))
const RadixTimePickerStartEndSource = sourceLoader(() => import("../radix/time-picker/start-end.tsx?raw"))
const RadixTimePickerTimeZoneSource = sourceLoader(() => import("../radix/time-picker/time-zone.tsx?raw"))
const RadixTimePickerConfirmBeforeApplySource = sourceLoader(() => import("../radix/time-picker/confirm-before-apply.tsx?raw"))
const RadixTimePickerLocalizedSource = sourceLoader(() => import("../radix/time-picker/localized.tsx?raw"))
const RadixTimePickerFormValidationSource = sourceLoader(() => import("../radix/time-picker/form-validation.tsx?raw"))
const RadixTimePickerDateTimeSource = sourceLoader(() => import("../radix/time-picker/date-time.tsx?raw"))
const RadixTimelineSource = sourceLoader(() => import("../radix/timeline/default.tsx?raw"))
const RadixTimelineStandardSource = sourceLoader(() => import("../radix/timeline/standard.tsx?raw"))
const RadixTimelineRoadmapSource = sourceLoader(() => import("../radix/timeline/roadmap.tsx?raw"))
const RadixTimelineOrderStatusSource = sourceLoader(() => import("../radix/timeline/order-status.tsx?raw"))
const RadixTimelineGitActivitySource = sourceLoader(() => import("../radix/timeline/git-activity.tsx?raw"))
const RadixTimelineMilestonesSource = sourceLoader(() => import("../radix/timeline/milestones.tsx?raw"))
const RadixTimelinePipelineStepsSource = sourceLoader(() => import("../radix/timeline/pipeline-steps.tsx?raw"))
const RadixTimelineRoadmapItemsSource = sourceLoader(() => import("../radix/timeline/roadmap-items.tsx?raw"))
const RadixTimelineHorizontalSource = sourceLoader(() => import("../radix/timeline/horizontal.tsx?raw"))
const RadixTimelineLeadingLabelsSource = sourceLoader(() => import("../radix/timeline/leading-labels.tsx?raw"))
const RadixTimelineDeploymentLogSource = sourceLoader(() => import("../radix/timeline/deployment-log.tsx?raw"))
const RadixTimelineAvatarActivitySource = sourceLoader(() => import("../radix/timeline/avatar-activity.tsx?raw"))
const RadixTimelineCompactMilestonesSource = sourceLoader(() => import("../radix/timeline/compact-milestones.tsx?raw"))
const RadixTreeSource = sourceLoader(() => import("../radix/tree/default.tsx?raw"))
const RadixTreeStandardSource = sourceLoader(() => import("../radix/tree/standard.tsx?raw"))
const RadixTreeIndentLinesSource = sourceLoader(() => import("../radix/tree/indent-lines.tsx?raw"))
const RadixTreeFolderFileIconsSource = sourceLoader(() => import("../radix/tree/folder-file-icons.tsx?raw"))
const RadixTreePlusMinusTogglesSource = sourceLoader(() => import("../radix/tree/plus-minus-toggles.tsx?raw"))
const RadixTreeFileExplorerSource = sourceLoader(() => import("../radix/tree/file-explorer.tsx?raw"))
const RadixTreeOrgChartSource = sourceLoader(() => import("../radix/tree/org-chart.tsx?raw"))
const RadixTreePermissionsSource = sourceLoader(() => import("../radix/tree/permissions.tsx?raw"))
const BaseAutocompleteSource = sourceLoader(() => import("../base/autocomplete/default.tsx?raw"))
const BaseBadgeSource = sourceLoader(() => import("../base/badge/default.tsx?raw"))
const BaseCascaderSource = sourceLoader(() => import("../base/cascader/default.tsx?raw"))
const BaseCodeBlockSource = sourceLoader(() => import("../base/code-block/default.tsx?raw"))
const BaseColorPickerSource = sourceLoader(() => import("../base/color-picker/default.tsx?raw"))
const BaseDataGridSource = sourceLoader(() => import("../base/data-grid/default.tsx?raw"))
const BaseDateSelectorSource = sourceLoader(() => import("../base/date-selector/default.tsx?raw"))
const BaseEmojiPickerSource = sourceLoader(() => import("../base/emoji-picker/default.tsx?raw"))
const BaseEventCalendarSource = sourceLoader(() => import("../base/event-calendar/default.tsx?raw"))
const BaseFiltersSource = sourceLoader(() => import("../base/filters/default.tsx?raw"))
const BaseFrameSource = sourceLoader(() => import("../base/frame/default.tsx?raw"))
const BaseGanttSource = sourceLoader(() => import("../base/gantt/default.tsx?raw"))
const BaseIconStackSource = sourceLoader(() => import("../base/icon-stack/default.tsx?raw"))
const BaseIconTileSource = sourceLoader(() => import("../base/icon-tile/default.tsx?raw"))
const BaseKanbanSource = sourceLoader(() => import("../base/kanban/default.tsx?raw"))
const BaseNumberFieldSource = sourceLoader(() => import("../base/number-field/default.tsx?raw"))
const BasePhoneInputSource = sourceLoader(() => import("../base/phone-input/default.tsx?raw"))
const BaseSignaturePadSource = sourceLoader(() => import("../base/signature-pad/default.tsx?raw"))
const BaseSortableSource = sourceLoader(() => import("../base/sortable/default.tsx?raw"))
const BaseStepperSource = sourceLoader(() => import("../base/stepper/default.tsx?raw"))
const BaseTimePickerSource = sourceLoader(() => import("../base/time-picker/default.tsx?raw"))
const BaseTimelineSource = sourceLoader(() => import("../base/timeline/default.tsx?raw"))
const BaseTreeSource = sourceLoader(() => import("../base/tree/default.tsx?raw"))

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
  Component: React.ComponentType
  source: string | SourceLoader
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
