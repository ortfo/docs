Output demo-add.mp4

Require ortfodb
Require bat

Set Shell "bash"
Set FontSize 24
Set Width 1400
Set Height 1000
Set Theme "Catppuccin Mocha"
Set FontFamily "Victor Mono"
Set BorderRadius 20
Set TypingSpeed 100ms


Hide
Type@1ms "cd ~/projects/portfolio" Enter
Type@1ms "rm -r ~/projects/vscode-pychemin/.ortfo .ortfodb-build-lock" Enter
Type@1ms "alias ortfodb='EDITOR= ortfodb'" Enter
Type@1ms "alias bat='bat --paging=never'" Enter
Ctrl+L Show

Type@75ms "ortfodb add vscode-pychemin" Sleep 200ms Enter Sleep 2s
# Type@75ms "ortfodb add vscode-pyc" Tab Sleep 200ms Enter Sleep 2s

Type "VSCode extension for PyChemin" Sleep 200ms Enter Sleep 500ms
Type "A VSCode extension to get syntax highlighting in PyChemin scripts" Sleep 200ms Enter Sleep 500ms

Type "/" Sleep 200ms
Type "JSON" Sleep 100ms
Space Sleep 100ms
Enter Sleep 100ms
Tab Sleep 2s

Type "/" Sleep 200ms
Type "programming" Sleep 100ms
Space Sleep 100ms
Enter Sleep 100ms
Tab Sleep 2s

Enter Sleep 2s

Left Sleep 1s
Right Sleep 2s
Enter Sleep 2s

Enter Sleep 3s

Sleep 1s

Type "bat ~/projects/vscode-pychemin/.ortfo/description.md" Enter Sleep 5s
