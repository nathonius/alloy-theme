import Theme from "../theme";
export function render(theme: typeof Theme) {
  return {
    $schema: "vscode://schemas/color-theme",
    name: "Alloy",
    type: "dark",
    colors: {
      "activityBar.background": `${theme.background.hex()}`,
      "activityBar.foreground": `${theme.foreground.hex()}`,
      "badge.background": `${theme["background-lighter-3"].hex()}`,
      "badge.foreground": `${theme.foreground.hex()}`,
      "button.background": `${theme["background-lighter-3"].hex()}`,
      "debugToolBar.background": `${theme["background-darker-2"].hex()}`,
      "diffEditor.insertedTextBackground": `${theme["green-darker-2"].hex()}30`,
      "diffEditor.removedTextBackground": `${theme["red-darker-2"].hex()}30`,
      "dropdown.background": `${theme["background-lighter-2"].hex()}`,
      "dropdown.listBackground": `${theme["background-darker-2"].hex()}`,
      "editor.background": `${theme.background.hex()}`,
      "editor.foreground": `${theme.foreground.hex()}`,
      "editor.lineHighlightBackground": `${theme[
        "background-lighter-1"
      ].hex()}A0`,
      "editor.selectionBackground": `${theme["background-lighter-3"].hex()}80`,
      "editor.selectionHighlightBackground": `${theme[
        "background-lighter-2"
      ].hex()}80`,
      "editor.wordHighlightBackground": `${theme[
        "background-lighter-3"
      ].hex()}80`,
      "editor.wordHighlightStrongBackground": `${theme[
        "foreground-darker-2"
      ].hex()}80`,
      "editorCursor.foreground": `${theme.foreground.hex()}`,
      "editorGroup.border": `${theme["background-lighter-2"].hex()}`,
      "editorGroup.dropBackground": `${theme["background-lighter-2"].hex()}80`,
      "editorGroupHeader.tabsBackground": `${theme[
        "background-darker-2"
      ].hex()}`,
      "editorHoverWidget.background": `${theme["background-lighter-2"].hex()}`,
      "editorHoverWidget.border": `${theme["background-lighter-3"].hex()}`,
      "editorIndentGuide.activeBackground": `${theme[
        "background-lighter-3"
      ].hex()}`,
      "editorIndentGuide.background": `${theme["background-lighter-2"].hex()}`,
      "editorLineNumber.activeForeground": `${theme[
        "foreground-darker-1"
      ].hex()}`,
      "editorLineNumber.foreground": `${theme["foreground-darker-2"].hex()}`,
      "editorSuggestWidget.background": `${theme.background.hex()}`,
      "editorSuggestWidget.border": `${theme["background-lighter-3"].hex()}`,
      "editorWhitespace.foreground": `${theme["background-lighter-2"].hex()}`,
      "editorWidget.background": `${theme["background-darker-2"].hex()}`,
      focusBorder: `${theme["background-lighter-3"].hex()}`,
      "input.background": `${theme["background-lighter-2"].hex()}`,
      "inputOption.activeBorder": `${theme["background-lighter-3"].hex()}`,
      "inputValidation.errorBackground": `${theme["red-darker-2"].hex()}`,
      "inputValidation.errorBorder": `${theme.red.hex()}`,
      "inputValidation.infoBackground": `${theme[
        "background-lighter-3"
      ].hex()}`,
      "inputValidation.infoBorder": `${theme.blue.hex()}`,
      "inputValidation.warningBackground": `${theme["yellow-darker-1"].hex()}`,
      "inputValidation.warningBorder": `${theme.yellow.hex()}`,
      "list.activeSelectionBackground": `${theme[
        "background-lighter-3"
      ].hex()}`,
      "list.dropBackground": `${theme["background-lighter-2"].hex()}`,
      "list.focusBackground": `${theme["background-lighter-2"].hex()}`,
      "list.highlightForeground": `${theme.foreground.hex()}`,
      "list.hoverBackground": `${theme["background-lighter-1"].hex()}A0`,
      "list.inactiveSelectionBackground": `${theme[
        "background-lighter-2"
      ].hex()}`,
      "panel.border": `${theme["background-lighter-2"].hex()}`,
      "panelTitle.activeBorder": `${theme["background-lighter-3"].hex()}`,
      "panelTitle.activeForeground": `${theme.foreground.hex()}`,
      "panelTitle.inactiveForeground": `${theme["background-lighter-3"].hex()}`,
      "peekView.border": `${theme["background-lighter-3"].hex()}`,
      "peekViewEditor.background": `${theme.background.hex()}`,
      "peekViewEditor.matchHighlightBackground": `${theme[
        "background-lighter-3"
      ].hex()}`,
      "peekViewResult.background": `${theme["background-darker-2"].hex()}`,
      "peekViewResult.matchHighlightBackground": `${theme[
        "background-lighter-3"
      ].hex()}`,
      "peekViewResult.selectionBackground": `${theme[
        "background-lighter-2"
      ].hex()}`,
      "peekViewTitle.background": `${theme["background-darker-2"].hex()}`,
      "pickerGroup.foreground": `${theme["background-lighter-3"].hex()}`,
      "progressBar.background": `${theme["background-lighter-3"].hex()}`,
      "selection.background": `${theme.foreground.hex()}`,
      "sideBar.background": `${theme["background-darker-2"].hex()}`,
      "sideBarSectionHeader.background": `${theme.background.hex()}`,
      "statusBar.background": `${theme["background-lighter-2"].hex()}`,
      "statusBar.debuggingBackground": `${theme["background-lighter-3"].hex()}`,
      "statusBar.noFolderBackground": `${theme["background-lighter-2"].hex()}`,
      "tab.activeBackground": `${theme["background-lighter-1"].hex()}`,
      "tab.activeBorder": `${theme.red.hex()}`,
      "tab.activeForeground": `${theme.foreground.hex()}`,
      "tab.border": `${theme["background-darker-2"].hex()}`,
      "tab.hoverBackground": `${theme["background-lighter-2"].hex()}`,
      "tab.hoverBorder": `${theme.magenta.hex()}`,
      "tab.inactiveBackground": `${theme["background-darker-1"].hex()}`,
      "tab.inactiveForeground": `${theme.foreground.hex()}`,
      "terminal.ansiBlack": `${theme["background-lighter-1"].hex()}`,
      "terminal.ansiBlue": `${theme["blue-darker-1"].hex()}`,
      "terminal.ansiBrightBlack": `${theme["background-lighter-3"].hex()}`,
      "terminal.ansiBrightBlue": `${theme.blue.hex()}`,
      "terminal.ansiBrightCyan": `${theme.cyan.hex()}`,
      "terminal.ansiBrightGreen": `${theme.green.hex()}`,
      "terminal.ansiBrightMagenta": `${theme.magenta.hex()}`,
      "terminal.ansiBrightRed": `${theme.red.hex()}`,
      "terminal.ansiBrightWhite": `${theme["foreground-accent"].hex()}`,
      "terminal.ansiBrightYellow": `${theme.yellow.hex()}`,
      "terminal.ansiCyan": `${theme["cyan-darker-1"].hex()}`,
      "terminal.ansiGreen": `${theme["green-darker-1"].hex()}`,
      "terminal.ansiMagenta": `${theme["magenta-darker-1"].hex()}`,
      "terminal.ansiRed": `${theme["red-darker-1"].hex()}`,
      "terminal.ansiWhite": `${theme.foreground.hex()}`,
      "terminal.ansiYellow": `${theme["yellow-darker-1"].hex()}`,
      "titleBar.activeBackground": `${theme["background-darker-2"].hex()}`,
      "widget.shadow": "#000000",
      "activityBar.activeBorder": `${theme.foreground.hex()}`,
      "activityBar.dropBorder": `${theme.foreground.hex()}`,
      "activityBar.inactiveForeground": `${theme["foreground-accent"].hex()}66`,
      "activityBarBadge.background": `${theme["blue-darker-2"].hex()}`,
      "activityBarBadge.foreground": `${theme["foreground-accent"].hex()}`,
      //"breadcrumb.activeSelectionForeground": "#e0e0e0",
      "breadcrumb.background": `${theme.background.hex()}`,
      //"breadcrumb.focusForeground": "#e0e0e0",
      //"breadcrumb.foreground": "#cccccccc",
      "breadcrumbPicker.background": `${theme["background-darker-2"].hex()}`,
      "button.foreground": `${theme["foreground-accent"].hex()}`,
      //"button.hoverBackground": "#8d8d8d",
      //"button.secondaryBackground": "#3a3d41",
      "button.secondaryForeground": `${theme["foreground-accent"].hex()}`,
      //"button.secondaryHoverBackground": "#45494e",
      "checkbox.background": `${theme["background-lighter-2"].hex()}`,
      "checkbox.border": `${theme["background-lighter-2"].hex()}`,
      "checkbox.foreground": `${theme.foreground.hex()}`,
      "debugConsole.errorForeground": `${theme.error.hex()}`,
      "debugConsole.infoForeground": `${theme["cyan-darker-1"].hex()}`,
      "debugConsole.sourceForeground": `${theme.foreground.hex()}`,
      "debugConsole.warningForeground": `${theme["orange-darker-1"].hex()}`,
      "debugConsoleInputIcon.foreground": `${theme.foreground.hex()}`,
      //"debugExceptionWidget.background": "#420b0d",
      //"debugExceptionWidget.border": "#a31515",
      //"debugIcon.breakpointCurrentStackframeForeground": "#ffcc00",
      //"debugIcon.breakpointDisabledForeground": "#848484",
      //"debugIcon.breakpointForeground": "#e51400",
      //"debugIcon.breakpointStackframeForeground": "#89d185",
      //"debugIcon.breakpointUnverifiedForeground": "#848484",
      "debugIcon.continueForeground": `${theme["cyan-darker-1"].hex()}`,
      "debugIcon.disconnectForeground": `${theme.error.hex()}`,
      "debugIcon.pauseForeground": `${theme["cyan-darker-1"].hex()}`,
      //"debugIcon.restartForeground": "#89d185",
      //"debugIcon.startForeground": "#89d185",
      "debugIcon.stepBackForeground": `${theme["cyan-darker-1"].hex()}`,
      "debugIcon.stepIntoForeground": `${theme["cyan-darker-1"].hex()}`,
      "debugIcon.stepOutForeground": `${theme["cyan-darker-1"].hex()}`,
      "debugIcon.stepOverForeground": `${theme["cyan-darker-1"].hex()}`,
      "debugIcon.stopForeground": `${theme.error.hex()}`,
      //"debugTokenExpression.boolean": "#4e94ce",
      "debugTokenExpression.error": `${theme.error.hex()}`,
      //"debugTokenExpression.name": "#c586c0",
      //"debugTokenExpression.number": "#b5cea8",
      //"debugTokenExpression.string": "#ce9178",
      //"debugTokenExpression.value": "#cccccc99",
      //"debugView.exceptionLabelBackground": "#6c2022",
      "debugView.exceptionLabelForeground": `${theme.foreground.hex()}`,
      //"debugView.stateLabelBackground": "#88888844",
      "debugView.stateLabelForeground": `${theme.foreground.hex()}`,
      //"debugView.valueChangedHighlight": "#569cd6",
      //"descriptionForeground": "#ccccccb3",
      //"diffEditor.diagonalFill": "#cccccc33",
      "dropdown.border": `${theme["background-lighter-2"].hex()}`,
      "dropdown.foreground": `${theme.foreground.hex()}`,
      //"editor.findMatchBackground": "#515c6a",
      //"editor.findMatchHighlightBackground": "#ea5c0055",
      //"editor.findRangeHighlightBackground": "#3a3d4166",
      //"editor.focusedStackFrameHighlightBackground": "#7abd7a4d",
      //"editor.foldBackground": "#91919127",
      //"editor.hoverHighlightBackground": "#264f7840",
      //"editor.inactiveSelectionBackground": "#91919140",
      "editor.lineHighlightBorder": `${theme.background.hex()}`,
      //"editor.onTypeRenameBackground": "#ff00004d",
      //"editor.rangeHighlightBackground": "#ffffff0b",
      //"editor.snippetFinalTabstopHighlightBorder": "#525252",
      //"editor.snippetTabstopHighlightBackground": "#7c7c7c4d",
      //"editor.stackFrameHighlightBackground": "#ffff0033",
      //"editor.symbolHighlightBackground": "#ea5c0055",
      //"editorActiveLineNumber.foreground": "#c6c6c6",
      //"editorBracketMatch.background": "#0064001a",
      //"editorBracketMatch.border": "#888888",
      //"editorCodeLens.foreground": "#999999",
      "editorError.foreground": `${theme.error.hex()}`,
      "editorGroupHeader.noTabsBackground": `${theme.background.hex()}`,
      "editorGutter.addedBackground": `${theme["green-darker-1"].hex()}`,
      "editorGutter.background": `${theme.background.hex()}`,
      "editorGutter.commentRangeForeground": `${theme[
        "foreground-darker-1"
      ].hex()}`,
      //"editorGutter.deletedBackground": "#94151b",
      "editorGutter.foldingControlForeground": `${theme[
        "foreground-darker-1"
      ].hex()}`,
      //"editorGutter.modifiedBackground": "#0c7d9d",
      //"editorHint.foreground": "#eeeeeeb3",
      "editorHoverWidget.foreground": `${theme.foreground.hex()}`,
      //"editorHoverWidget.statusBarBackground": "#4f4f4f",
      "editorInfo.foreground": `${theme["cyan-darker-1"].hex()}`,
      //"editorLightBulb.foreground": "#ffcc00",
      "editorLightBulbAutoFix.foreground": `${theme["cyan-darker-1"].hex()}`,
      //"editorLink.activeForeground": "#4e94ce",
      //"editorMarkerNavigation.background": "#2d2d30",
      "editorMarkerNavigationError.background": `${theme.error.hex()}`,
      "editorMarkerNavigationInfo.background": `${theme[
        "cyan-darker-1"
      ].hex()}`,
      "editorMarkerNavigationWarning.background": `${theme[
        "orange-darker-1"
      ].hex()}`,
      //"editorOverviewRuler.addedForeground": "#587c0c99",
      //"editorOverviewRuler.border": "#7f7f7f4d",
      //"editorOverviewRuler.bracketMatchForeground": "#a0a0a0",
      //"editorOverviewRuler.commonContentForeground": "#60606066",
      //"editorOverviewRuler.currentContentForeground": "#40c8ae80",
      //"editorOverviewRuler.deletedForeground": "#94151b99",
      "editorOverviewRuler.errorForeground": `${theme.error.hex()}`,
      //"editorOverviewRuler.findMatchForeground": "#d186167e",
      //"editorOverviewRuler.incomingContentForeground": "#40a6ff80",
      "editorOverviewRuler.infoForeground": `${theme["cyan-darker-1"].hex()}`,
      //"editorOverviewRuler.modifiedForeground": "#0c7d9d99",
      //"editorOverviewRuler.rangeHighlightForeground": "#007acc99",
      //"editorOverviewRuler.selectionHighlightForeground": "#a0a0a0cc",
      "editorOverviewRuler.warningForeground": `${theme[
        "orange-darker-1"
      ].hex()}`,
      //"editorOverviewRuler.wordHighlightForeground": "#a0a0a0cc",
      //"editorOverviewRuler.wordHighlightStrongForeground": "#c0a0c0cc",
      "editorPane.background": `${theme.background.hex()}`,
      //"editorRuler.foreground": "#5a5a5a",
      "editorSuggestWidget.foreground": `${theme.foreground.hex()}`,
      "editorSuggestWidget.highlightForeground": `${theme.foreground.hex()}`,
      "editorSuggestWidget.selectedBackground": `${theme[
        "background-lighter-2"
      ].hex()}`,
      //"editorUnnecessaryCode.opacity": "#000000aa",
      "editorWarning.foreground": `${theme["orange-darker-1"].hex()}`,
      "editorWidget.border": `${theme["background-lighter-2"].hex()}`,
      "editorWidget.foreground": `${theme.foreground.hex()}`,
      errorForeground: `${theme.error.hex()}`,
      "extensionBadge.remoteBackground": `${theme["blue-darker-2"].hex()}`,
      "extensionBadge.remoteForeground": `${theme["foreground-accent"].hex()}`,
      "extensionButton.prominentBackground": `${theme["green-darker-2"].hex()}`,
      "extensionButton.prominentForeground": `${theme[
        "foreground-accent"
      ].hex()}`,
      "extensionButton.prominentHoverBackground": `${theme[
        "green-darker-3"
      ].hex()}`,
      foreground: `${theme.foreground.hex()}`,
      //"gitDecoration.addedResourceForeground": "#81b88b",
      //"gitDecoration.conflictingResourceForeground": "#6c6cc4",
      //"gitDecoration.deletedResourceForeground": "#c74e39",
      //"gitDecoration.ignoredResourceForeground": "#8c8c8c",
      //"gitDecoration.modifiedResourceForeground": "#e2c08d",
      //"gitDecoration.submoduleResourceForeground": "#8db9e2",
      //"gitDecoration.untrackedResourceForeground": "#73c991",
      "icon.foreground": `${theme["foreground-darker-1"].hex()}`,
      //"imagePreview.border": "#80808059",
      "input.foreground": `${theme.foreground.hex()}`,
      //"input.placeholderForeground": "#cccccc80",
      //"inputOption.activeBackground": "#75757566",
      "inputOption.activeForeground": `${theme["foreground-accent"].hex()}`,
      "list.activeSelectionForeground": `${theme["foreground-accent"].hex()}`,
      //"list.deemphasizedForeground": "#8c8c8c",
      "list.errorForeground": `${theme.error.hex()}`,
      //"list.filterMatchBackground": "#ea5c0055",
      //"list.invalidItemForeground": "#b89500",
      "list.warningForeground": `${theme["orange-darker-1"].hex()}`,
      //"listFilterWidget.background": "#653723",
      //"listFilterWidget.noMatchesOutline": "#be1100",
      //"listFilterWidget.outline": "#00000000",
      "menu.background": `${theme["background-lighter-2"].hex()}`,
      "menu.foreground": `${theme.foreground.hex()}`,
      "menu.selectionBackground": `${theme["background-lighter-3"].hex()}`,
      "menu.selectionForeground": `${theme["foreground-accent"].hex()}`,
      //"menu.separatorBackground": "#bbbbbb",
      //"menubar.selectionBackground": "#ffffff1a",
      "menubar.selectionForeground": `${theme.foreground.hex()}`,
      //"merge.commonContentBackground": "#60606029",
      //"merge.commonHeaderBackground": "#60606066",
      //"merge.currentContentBackground": "#40c8ae33",
      //"merge.currentHeaderBackground": "#40c8ae80",
      //"merge.incomingContentBackground": "#40a6ff33",
      //"merge.incomingHeaderBackground": "#40a6ff80",
      "minimap.errorHighlight": `${theme.error.hex()}b3`,
      "minimap.findMatchHighlight": `${theme["orange-darker-1"].hex()}`,
      //"minimap.selectionHighlight": "#264f78",
      "minimap.warningHighlight": `${theme["orange-darker-1"].hex()}`,
      "minimapGutter.addedBackground": `${theme["green-darker-1"].hex()}`,
      //"minimapGutter.deletedBackground": "#94151b",
      //"minimapGutter.modifiedBackground": "#0c7d9d",
      //"minimapSlider.activeBackground": "#bfbfbf33",
      //"minimapSlider.background": "#79797933",
      //"minimapSlider.hoverBackground": "#64646459",
      //"notebook.cellBorderColor": "#42424266",
      //"notebook.cellHoverBackground": "#42424233",
      "notebook.cellInsertionIndicator": `${theme[
        "background-lighter-3"
      ].hex()}`,
      //"notebook.cellStatusBarItemHoverBackground": "#ffffff26",
      //"notebook.cellToolbarSeparator": "#80808059",
      //"notebook.focusedCellBackground": "#42424266",
      //"notebook.focusedCellBorder": "#ffffff1f",
      "notebook.focusedEditorBorder": `${theme["background-lighter-3"].hex()}`,
      //"notebook.outputContainerBackgroundColor": "#42424266",
      //"notebook.symbolHighlightBackground": "#ffffff0b",
      "notebookScrollbarSlider.activeBackground": `${theme[
        "foreground-darker-1"
      ].hex()}66`,
      "notebookScrollbarSlider.background": `${theme[
        "foreground-muted"
      ].hex()}66`,
      "notebookScrollbarSlider.hoverBackground": `${theme[
        "foreground-muted"
      ].hex()}b3`,
      "notebookStatusErrorIcon.foreground": `${theme.error.hex()}`,
      "notebookStatusRunningIcon.foreground": `${theme.foreground.hex()}`,
      //"notebookStatusSuccessIcon.foreground": "#89d185",
      //"notificationCenterHeader.background": "#272727",
      "notificationLink.foreground": `${theme.blue.hex()}`,
      "notifications.background": `${theme["background-darker-2"].hex()}`,
      //"notifications.border": "#272727",
      "notifications.foreground": `${theme.foreground.hex()}`,
      "notificationsErrorIcon.foreground": `${theme.error.hex()}`,
      "notificationsInfoIcon.foreground": `${theme["cyan-darker-1"].hex()}`,
      "notificationsWarningIcon.foreground": `${theme[
        "orange-darker-1"
      ].hex()}`,
      "panel.background": `${theme.background.hex()}`,
      "panel.dropBorder": `${theme.foreground.hex()}`,
      "panelSection.border": `${theme["background-lighter-2"].hex()}`,
      "panelSection.dropBackground": `${theme["background-lighter-2"].hex()}80`,
      // "panelSectionHeader.background": "#80808033",
      "peekViewEditorGutter.background": `${theme.background.hex()}`,
      "peekViewResult.fileForeground": `${theme["foreground-accent"].hex()}`,
      //"peekViewResult.lineForeground": "#bbbbbb",
      "peekViewResult.selectionForeground": `${theme[
        "foreground-accent"
      ].hex()}`,
      //"peekViewTitleDescription.foreground": "#ccccccb3",
      "peekViewTitleLabel.foreground": `${theme["foreground-accent"].hex()}`,
      //"pickerGroup.border": "#3f3f46",
      "problemsErrorIcon.foreground": `${theme.error.hex()}`,
      "problemsInfoIcon.foreground": `${theme["cyan-darker-1"].hex()}`,
      "problemsWarningIcon.foreground": `${theme["orange-darker-1"].hex()}`,
      "quickInput.background": `${theme["background-darker-2"].hex()}`,
      "quickInput.foreground": `${theme.foreground.hex()}`,
      //"quickInputTitle.background": "#ffffff1b",
      "scm.providerBorder": `${theme["background-lighter-2"].hex()}`,
      //"scrollbar.shadow": "#000000",
      "scrollbarSlider.activeBackground": `${theme[
        "foreground-darker-1"
      ].hex()}66`,
      "scrollbarSlider.background": `${theme["foreground-muted"].hex()}66`,
      "scrollbarSlider.hoverBackground": `${theme["foreground-muted"].hex()}b3`,
      //"searchEditor.findMatchBackground": "#ea5c0038",
      "settings.checkboxBackground": `${theme["background-lighter-2"].hex()}`,
      "settings.checkboxBorder": `${theme["background-lighter-2"].hex()}`,
      "settings.checkboxForeground": `${theme.foreground.hex()}`,
      "settings.dropdownBackground": `${theme["background-lighter-2"].hex()}`,
      "settings.dropdownBorder": `${theme["background-lighter-2"].hex()}`,
      "settings.dropdownForeground": `${theme.foreground.hex()}`,
      "settings.dropdownListBorder": `${theme["background-lighter-2"].hex()}`,
      "settings.headerForeground": `${theme.foreground.hex()}`,
      //"settings.modifiedItemIndicator": "#0c7d9d",
      "settings.numberInputBackground": `${theme[
        "background-lighter-2"
      ].hex()}`,
      "settings.numberInputForeground": `${theme.foreground.hex()}`,
      "settings.textInputBackground": `${theme["background-lighter-2"].hex()}`,
      "settings.textInputForeground": `${theme.foreground.hex()}`,
      "sideBar.dropBackground": `${theme["background-lighter-2"].hex()}80`,
      "statusBar.debuggingForeground": `${theme["foreground-accent"].hex()}`,
      "statusBar.foreground": `${theme["foreground-accent"].hex()}`,
      "statusBar.noFolderForeground": `${theme["foreground-accent"].hex()}`,
      //"statusBarItem.activeBackground": "#ffffff2e",
      //"statusBarItem.hoverBackground": "#ffffff1f",
      //"statusBarItem.prominentBackground": "#00000080",
      "statusBarItem.prominentForeground": `${theme[
        "foreground-accent"
      ].hex()}`,
      //"statusBarItem.prominentHoverBackground": "#0000004d",
      "statusBarItem.remoteBackground": `${theme["blue-darker-2"].hex()}`,
      "statusBarItem.remoteForeground": `${theme["foreground-accent"].hex()}`,
      "symbolIcon.arrayForeground": `${theme.foreground.hex()}`,
      "symbolIcon.booleanForeground": `${theme.foreground.hex()}`,
      "symbolIcon.classForeground": `${theme.orange.hex()}`,
      "symbolIcon.colorForeground": `${theme.foreground.hex()}`,
      "symbolIcon.constantForeground": `${theme.foreground.hex()}`,
      "symbolIcon.constructorForeground": `${theme.magenta.hex()}`,
      "symbolIcon.enumeratorForeground": `${theme.orange.hex()}`,
      "symbolIcon.enumeratorMemberForeground": `${theme[
        "cyan-darker-1"
      ].hex()}`,
      "symbolIcon.eventForeground": `${theme.orange.hex()}`,
      "symbolIcon.fieldForeground": `${theme["cyan-darker-1"].hex()}`,
      "symbolIcon.fileForeground": `${theme.foreground.hex()}`,
      "symbolIcon.folderForeground": `${theme.foreground.hex()}`,
      "symbolIcon.functionForeground": `${theme.magenta.hex()}`,
      "symbolIcon.interfaceForeground": `${theme["cyan-darker-1"].hex()}`,
      "symbolIcon.keyForeground": `${theme.foreground.hex()}`,
      "symbolIcon.keywordForeground": `${theme.foreground.hex()}`,
      "symbolIcon.methodForeground": `${theme.magenta.hex()}`,
      "symbolIcon.moduleForeground": `${theme.foreground.hex()}`,
      "symbolIcon.namespaceForeground": `${theme.foreground.hex()}`,
      "symbolIcon.nullForeground": `${theme.foreground.hex()}`,
      "symbolIcon.numberForeground": `${theme.foreground.hex()}`,
      "symbolIcon.objectForeground": `${theme.foreground.hex()}`,
      "symbolIcon.operatorForeground": `${theme.foreground.hex()}`,
      "symbolIcon.packageForeground": `${theme.foreground.hex()}`,
      "symbolIcon.propertyForeground": `${theme.foreground.hex()}`,
      "symbolIcon.referenceForeground": `${theme.foreground.hex()}`,
      "symbolIcon.snippetForeground": `${theme.foreground.hex()}`,
      "symbolIcon.stringForeground": `${theme.foreground.hex()}`,
      "symbolIcon.structForeground": `${theme.foreground.hex()}`,
      "symbolIcon.textForeground": `${theme.foreground.hex()}`,
      "symbolIcon.typeParameterForeground": `${theme.foreground.hex()}`,
      "symbolIcon.unitForeground": `${theme.foreground.hex()}`,
      "symbolIcon.variableForeground": `${theme["cyan-darker-1"].hex()}`,
      "tab.activeModifiedBorder": `${theme.cyan.hex()}`,
      //"tab.inactiveModifiedBorder": "#3399cc80",
      "tab.unfocusedActiveBackground": `${theme["background-lighter-1"].hex()}`,
      "tab.unfocusedActiveBorder": `${theme.red.hex()}80`,
      "tab.unfocusedActiveForeground": `${theme["foreground-accent"].hex()}80`,
      //"tab.unfocusedActiveModifiedBorder": "#3399cc80",
      //"tab.unfocusedHoverBackground": "#4c4c4c80",
      "tab.unfocusedHoverBorder": `${theme.magenta.hex()}80`,
      "tab.unfocusedInactiveBackground": `${theme[
        "background-darker-1"
      ].hex()}`,
      //"tab.unfocusedInactiveForeground": "#cccccc80",
      //"tab.unfocusedInactiveModifiedBorder": "#3399cc40",
      "terminal.border": `${theme["background-lighter-2"].hex()}`,
      "terminal.foreground": `${theme.foreground.hex()}`,
      //"terminal.selectionBackground": "#ffffff40",
      //"textBlockQuote.background": "#7f7f7f1a",
      //"textBlockQuote.border": "#007acc80",
      //"textCodeBlock.background": "#0a0a0a66",
      "textLink.activeForeground": `${theme.blue.hex()}`,
      "textLink.foreground": `${theme.blue.hex()}`,
      //"textPreformat.foreground": "#d7ba7d",
      //"textSeparator.foreground": "#ffffff2e",
      "titleBar.activeForeground": `${theme.foreground.hex()}`,
      //"titleBar.inactiveBackground": "#1e1e1e99",
      //"titleBar.inactiveForeground": "#cccccc99",
      //"tree.indentGuidesStroke": "#585858"
    },
    tokenColors: [
      {
        scope: ["meta.embedded", "source.groovy.embedded"],
        settings: {
          foreground: `${theme.foreground.hex()}`,
          background: `${theme.background.hex()}`,
        },
      },
      {
        scope: "comment",
        settings: {
          foreground: `${theme["foreground-muted"].hex()}`,
        },
      },
      {
        scope: "string",
        settings: {
          foreground: `${theme.tan.hex()}`,
        },
      },
      {
        scope: [
          "punctuation.definition.template-expression",
          "punctuation.section.embedded",
        ],
        settings: {
          foreground: `${theme.red.hex()}`,
        },
      },
      {
        scope: ["meta.template.expression"],
        settings: {
          foreground: `${theme.foreground.hex()}`,
        },
      },
      {
        scope: "constant.numeric",
        settings: {
          foreground: `${theme.magenta.hex()}`,
        },
      },
      {
        scope: "constant.language",
        settings: {
          foreground: `${theme.magenta.hex()}`,
        },
      },
      {
        scope: "constant.character, constant.other",
        settings: {
          foreground: `${theme.magenta.hex()}`,
        },
      },
      {
        scope: "variable",
        settings: {
          foreground: `${theme.foreground.hex()}`,
          fontStyle: "",
        },
      },
      {
        scope: "keyword",
        settings: {
          foreground: `${theme.red.hex()}`,
        },
      },
      {
        scope: "storage",
        settings: {
          foreground: `${theme.red.hex()}`,
          fontStyle: "",
        },
      },
      {
        scope: "storage.type",
        settings: {
          foreground: `${theme.cyan.hex()}`,
          fontStyle: "italic",
        },
      },
      {
        scope: "entity.name.type, entity.name.class",
        settings: {
          foreground: `${theme.green.hex()}`,
          fontStyle: "underline",
        },
      },
      {
        scope: "entity.other.inherited-class",
        settings: {
          foreground: `${theme.green.hex()}`,
          fontStyle: "italic underline",
        },
      },
      {
        scope: "entity.name.function",
        settings: {
          foreground: `${theme.green.hex()}`,
          fontStyle: "",
        },
      },
      {
        scope: "variable.parameter",
        settings: {
          foreground: `${theme.orange.hex()}`,
          fontStyle: "italic",
        },
      },
      {
        scope: "entity.name.tag",
        settings: {
          foreground: `${theme.red.hex()}`,
          fontStyle: "",
        },
      },
      {
        scope: "entity.other.attribute-name",
        settings: {
          foreground: `${theme.green.hex()}`,
          fontStyle: "",
        },
      },
      {
        scope: "support.function",
        settings: {
          foreground: `${theme.cyan.hex()}`,
          fontStyle: "",
        },
      },
      {
        scope: "support.constant",
        settings: {
          foreground: `${theme.cyan.hex()}`,
          fontStyle: "",
        },
      },
      {
        scope: "support.type, support.class",
        settings: {
          foreground: `${theme.cyan.hex()}`,
          fontStyle: "italic",
        },
      },
      {
        scope: "support.other.variable",
        settings: {
          fontStyle: "",
        },
      },
      {
        scope: "invalid",
        settings: {
          foreground: `${theme["foreground-accent"].hex()}`,
          background: `${theme.red.hex()}`,
          fontStyle: "",
        },
      },
      {
        scope: "invalid.deprecated",
        settings: {
          foreground: `${theme["foreground-accent"].hex()}`,
          background: `${theme.magenta.hex()}`,
        },
      },
      {
        scope: "meta.structure.dictionary.json string.quoted.double.json",
        settings: {
          foreground: `${theme.foreground.hex()}`,
        },
      },
      {
        scope: "meta.diff, meta.diff.header",
        settings: {
          foreground: `${theme["background-lighter-3"].hex()}`,
        },
      },
      {
        scope: "markup.deleted",
        settings: {
          foreground: `${theme.red.hex()}`,
        },
      },
      {
        scope: "markup.inserted",
        settings: {
          foreground: `${theme.green.hex()}`,
        },
      },
      {
        scope: "markup.changed",
        settings: {
          foreground: `${theme.tan.hex()}`,
        },
      },
      {
        scope: "constant.numeric.line-number.find-in-files - match",
        settings: {
          foreground: `${theme.magenta.hex()}A0`,
        },
      },
      {
        scope: "entity.name.filename.find-in-files",
        settings: {
          foreground: `${theme.tan.hex()}`,
        },
      },
      {
        scope: "markup.quote",
        settings: {
          foreground: `${theme.red.hex()}`,
        },
      },
      {
        scope: "markup.list",
        settings: {
          foreground: `${theme.tan.hex()}`,
        },
      },
      {
        scope: "markup.bold, markup.italic",
        settings: {
          foreground: `${theme.cyan.hex()}`,
        },
      },
      {
        scope: "markup.inline.raw",
        settings: {
          foreground: `${theme.orange.hex()}`,
          fontStyle: "",
        },
      },
      {
        scope: "markup.heading",
        settings: {
          foreground: `${theme.green.hex()}`,
        },
      },
      {
        scope: "markup.heading.setext",
        settings: {
          foreground: `${theme.green.hex()}`,
          fontStyle: "",
        },
      },
      {
        scope: "token.info-token",
        settings: {
          foreground: `${theme["blue-darker-1"].hex()}`,
        },
      },
      {
        scope: "token.warn-token",
        settings: {
          foreground: `${theme["orange-darker-1"].hex()}`,
        },
      },
      {
        scope: "token.error-token",
        settings: {
          foreground: `${theme.error.hex()}`,
        },
      },
      {
        scope: "token.debug-token",
        settings: {
          foreground: `${theme.magenta.hex()}`,
        },
      },
      {
        scope: "variable.language",
        settings: {
          foreground: `${theme.orange.hex()}`,
        },
      },
      {
        scope: ["meta.embedded", "source.groovy.embedded"],
        settings: {
          foreground: `${theme.foreground.hex()}`,
        },
      },
      {
        scope: "comment",
        settings: {
          foreground: `${theme["foreground-muted"].hex()}`,
          fontStyle: "italic",
        },
      },
      {
        scope: "string",
        settings: {
          foreground: `${theme.tan.hex()}`,
        },
      },
      {
        scope: [
          "punctuation.definition.template-expression",
          "punctuation.section.embedded",
        ],
        settings: {
          foreground: `${theme.red.hex()}`,
        },
      },
      {
        scope: ["meta.template.expression"],
        settings: {
          foreground: `${theme.foreground.hex()}`,
        },
      },
      {
        scope: "constant.numeric",
        settings: {
          foreground: `${theme.magenta.hex()}`,
        },
      },
      {
        scope: "constant.language",
        settings: {
          foreground: `${theme.magenta.hex()}`,
        },
      },
      {
        scope: "constant.character, constant.other",
        settings: {
          foreground: `${theme.magenta.hex()}`,
        },
      },
      {
        scope: "variable",
        settings: {
          foreground: `${theme.foreground.hex()}`,
          fontStyle: "",
        },
      },
      {
        scope: "keyword",
        settings: {
          foreground: `${theme.red.hex()}`,
        },
      },
      {
        scope: "storage",
        settings: {
          foreground: `${theme.red.hex()}`,
          fontStyle: "",
        },
      },
      {
        scope: "storage.type",
        settings: {
          foreground: `${theme.cyan.hex()}`,
          fontStyle: "italic",
        },
      },
      {
        scope: "entity.name.type, entity.name.class",
        settings: {
          foreground: `${theme.green.hex()}`,
          fontStyle: "underline",
        },
      },
      {
        scope: "entity.other.inherited-class",
        settings: {
          foreground: `${theme.green.hex()}`,
          fontStyle: "italic underline",
        },
      },
      {
        scope: "entity.name.function",
        settings: {
          foreground: `${theme.green.hex()}`,
          fontStyle: "",
        },
      },
      {
        scope: "variable.parameter",
        settings: {
          foreground: `${theme.orange.hex()}`,
          fontStyle: "italic",
        },
      },
      {
        scope: "entity.name.tag",
        settings: {
          foreground: `${theme.red.hex()}`,
          fontStyle: "",
        },
      },
      {
        scope: "entity.other.attribute-name",
        settings: {
          foreground: `${theme.green.hex()}`,
          fontStyle: "",
        },
      },
      {
        scope: "support.function",
        settings: {
          foreground: `${theme.cyan.hex()}`,
          fontStyle: "",
        },
      },
      {
        scope: "support.constant",
        settings: {
          foreground: `${theme.cyan.hex()}`,
          fontStyle: "",
        },
      },
      {
        scope: "support.type, support.class",
        settings: {
          foreground: `${theme.cyan.hex()}`,
          fontStyle: "italic",
        },
      },
      {
        scope: "support.other.variable",
        settings: {
          fontStyle: "",
        },
      },
      {
        scope: "invalid",
        settings: {
          foreground: `${theme.foreground.hex()}`,
          fontStyle: "",
        },
      },
      {
        scope: "invalid.deprecated",
        settings: {
          foreground: `${theme.foreground.hex()}`,
        },
      },
      {
        scope: "meta.structure.dictionary.json string.quoted.double.json",
        settings: {
          foreground: `${theme.foreground.hex()}`,
        },
      },
      {
        scope: "meta.diff, meta.diff.header",
        settings: {
          foreground: `${theme["background-lighter-3"].hex()}`,
        },
      },
      {
        scope: "markup.deleted",
        settings: {
          foreground: `${theme.red.hex()}`,
        },
      },
      {
        scope: "markup.inserted",
        settings: {
          foreground: `${theme.green.hex()}`,
        },
      },
      {
        scope: "markup.changed",
        settings: {
          foreground: `${theme.tan.hex()}`,
        },
      },
      {
        scope: "constant.numeric.line-number.find-in-files - match",
        settings: {
          foreground: `${theme.magenta.hex()}A0`,
        },
      },
      {
        scope: "entity.name.filename.find-in-files",
        settings: {
          foreground: `${theme.tan.hex()}`,
        },
      },
      {
        scope: "markup.quote",
        settings: {
          foreground: `${theme.red.hex()}`,
        },
      },
      {
        scope: "beginning.punctuation.definition.quote.markdown",
        settings: {
          foreground: `${theme["red-darker-1"].hex()}`,
        },
      },
      {
        scope: "markup.list",
        settings: {
          foreground: `${theme.tan.hex()}`,
        },
      },
      {
        scope: "markup.bold, markup.italic",
        settings: {
          foreground: `${theme.cyan.hex()}`,
        },
      },
      {
        scope: "markup.inline.raw",
        settings: {
          foreground: `${theme.orange.hex()}`,
          fontStyle: "",
        },
      },
      {
        scope: "punctuation.definition.heading.markdown",
        settings: {
          foreground: `${theme.green.hex()}`,
        },
      },
      {
        scope: "markup.heading",
        settings: {
          foreground: `${theme.green.hex()}`,
        },
      },
      {
        scope: "markup.heading.setext",
        settings: {
          foreground: `${theme.green.hex()}`,
          fontStyle: "",
        },
      },
      {
        scope: "token.info-token",
        settings: {
          foreground: `${theme["blue-darker-1"].hex()}`,
        },
      },
      {
        scope: "token.warn-token",
        settings: {
          foreground: `${theme["orange-darker-1"].hex()}`,
        },
      },
      {
        scope: "token.error-token",
        settings: {
          foreground: `${theme.error.hex()}`,
        },
      },
      {
        scope: "token.debug-token",
        settings: {
          foreground: `${theme.magenta.hex()}`,
        },
      },
      {
        scope: "variable.language",
        settings: {
          foreground: `${theme.orange.hex()}`,
        },
      },
    ],
  };
}

export default render;
