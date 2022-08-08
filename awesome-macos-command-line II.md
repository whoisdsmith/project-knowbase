# awesome-macos-command-line - Use your macOS terminal shell to do awesome things.

# ![Awesome macOS Command Line](https://git.herrbischoff.com/awesome-macos-command-line/plain/assets/logo.svg)

> A curated list of shell commands and tools specific to macOS.
> 
> _“You don’t have to know everything. You simply need to know where to find it when necessary.” (John Brunner)_

If you want to contribute, you are highly encouraged to do so. Please read the .

For more terminal shell goodness, please also see this list's sister list .

Not all information contained in this list is always up-to-date with the latest OS releases. Apple does support devices for an extended time frame but they're also costly to purchase. Currently, I don't have the ability to replace my Mid-2014 15" MacBook Pro and it doesn't run Monterey or above. On one hand, the fact that this machine is still running mostly intact is a testament to its hardware and build quality. On the other, the fact that my older OS release will very soon not receive any security updates and bug fixes is a bit unsettling. And well, it directly affects my ability to provide timely updates.

So maybe someone from Apple reads this and can do something about that situation.

Furthermore, looking at almost 26k GitHub stars for this repository, if only about 14% of the people who this resource is useful for, sponsored me with a _one time_ amount of a single Euro, I could order a new machine that probably lasted me another eight years. It's not something I'd expect, nor think I should. It's entirely my issue. And something to think about.

## 

There's really only one thing I'd like to note here: [man pages](https://en.wikipedia.org/wiki/Man_page). [Man pages](https://www.cs.mcgill.ca/~guide/help/man.html). [Man pages](https://xkcd.com/1692/). Okay, three things. But this one thing seemed so important, I had to mention it multiple times. If you're not doing it already, you should get into the habit of consulting man pages before searching anywhere else. Unix-style man pages are an excellent source of documentation. There's even a man page for the `man` command itself:

It also explains what the numbers in the man pages refer to --- like `man(1)`.

## 

  * Appearance
    * Dark Mode
    * Proxy Icon
    * Subpixel Anti-Aliasing
    * Transparency
    * Wallpaper
  * Applications
    * App Store
    * Apple Remote Desktop
    * Contacts
    * Google
    * iTunes
    * Mail
    * Safari
    * Sketch
    * Skim
    * Terminal
    * TextEdit
    * Visual Studio Code
  * Backup
    * Time Machine
  * Developer
    * Vim
    * Xcode
  * Dock
  * Documents
  * Files, Disks and Volumes
    * APFS
    * Disk Images
  * Finder
    * Desktop
    * Files and Folders
    * Layout
    * Metadata Files
    * Opening Things
  * Fonts
  * Functions
  * Hardware
    * Bluetooth
    * Harddisks
    * Hardware Information
    * Infrared Receiver
    * Power Management
  * Input Devices
    * Keyboard
  * Launchpad
  * Media
    * Audio
    * Video
  * Networking
    * Bonjour
    * DHCP
    * DNS
    * Hostname
    * Network Preferences
    * Networking Tools
    * SSH
    * TCP/IP
    * TFTP
    * Wi-Fi
  * Package Managers
  * Printing
  * Security
    * Application Firewall
    * Gatekeeper
    * Passwords
    * Physical Access
    * Privacy Database
    * Wiping Data
  * Search
    * Find
    * Locate
  * System
    * AirDrop
    * AppleScript
    * Basics
    * Clipboard
    * Date and Time
    * FileVault
    * Information/Reports
    * Installation
    * Kernel Extensions
    * LaunchAgents
    * LaunchServices
    * Login Window
    * Memory Management
    * Notification Center
    * QuickLook
    * Remote Management
    * Root User
    * Safe Mode Boot
    * Save Dialogs
    * Screenshots
    * Sidecar
    * Software Installation
    * Software Update
    * Software Version
    * Spotlight
    * System Integrity Protection
  * Terminal
    * Alternative Terminals
    * Shells
    * Terminal Fonts
  * Glossary
    * Mac OS X, OS X, and macOS Version Information

## 

### 

#### 

This is useful for older applications that run properly but haven't been updated to work properly with dark mode. Change app name `Notes` to the actual application you want to target.
    
    
    # Enable
    defaults write $(osascript -e 'id of app "Notes"') NSRequiresAquaSystemAppearance -bool true
    
    # Disable (Default)
    defaults delete $(osascript -e 'id of app "Notes"') NSRequiresAquaSystemAppearance
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    In macOS 11 (Big Sur), the document proxy icon was hidden by default. This 
    restores the former always-visible state.
    
    
    
    
    
    # Disable
    defaults write -g NSToolbarTitleViewRolloverDelay -float 0
    
    # Enable (Default)
    defaults delete -g NSToolbarTitleViewRolloverDelay
    
    
    
    
    
    
    ### 
    
    
    
    
    Setting present since macOS 10.14 (Mojave).
    
    
    
    
    
    # Enable
    defaults write -g CGFontRenderingFontSmoothingDisabled -bool false
    
    # Disable (Default)
    defaults write -g CGFontRenderingFontSmoothingDisabled -bool true
    
    # Per Application
    defaults write com.apple.textedit CGFontRenderingFontSmoothingDisabled -bool false
    
    # Revert for Application
    defaults delete com.apple.textedit CGFontRenderingFontSmoothingDisabled
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    # Reduce Transparency
    defaults write com.apple.universalaccess reduceTransparency -bool true
    
    # Restore Default Transparency
    defaults write com.apple.universalaccess reduceTransparency -bool false
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    # Up to OS X 10.8 (Mountain Lion)
    osascript -e 'tell application "Finder" to set desktop picture to POSIX file "/path/to/picture.jpg"'
    
    # Since OS X 10.9 (Mavericks)
    sqlite3 ~/Library/Application\ Support/Dock/desktoppicture.db "update data set value = '/path/to/picture.jpg'" && killall Dock
    
    
    
    
    
    
    ## 
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    # Via find
    find /Applications -path '*Contents/_MASReceipt/receipt' -maxdepth 4 -print |\sed 's#.app/Contents/_MASReceipt/receipt#.app#g; s#/Applications/##'
    
    # Via Spotlight
    mdfind kMDItemAppStoreHasReceipt=1
    
    
    
    
    
    
    #### 
    
    
    
    
    Works up to OS X 10.10 (Yosemite).
    
    
    
    
    
    # Enable
    defaults write com.apple.appstore ShowDebugMenu -bool true
    
    # Disable (Default)
    defaults write com.apple.appstore ShowDebugMenu -bool false
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    sudo /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources/kickstart -help
    
    
    
    
    
    
    #### 
    
    
    
    
    
    # Activate And Restart the ARD Agent and Helper
    sudo /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources/kickstart -activate -restart -agent -console
    
    # Deactivate and Stop the Remote Management Service
    sudo /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources/kickstart -deactivate -stop
    
    
    
    
    
    
    #### 
    
    
    
    
    
    # Allow Access for All Users and Give All Users Full Access
    sudo /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources/kickstart -configure -allowAccessFor -allUsers -privs -all
    
    # Disable ARD Agent and Remove Access Privileges for All Users (Default)
    sudo /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources/kickstart -deactivate -configure -access -off
    
    
    
    
    
    
    #### 
    
    
    
    
    
    sudo rm -rf /var/db/RemoteManagement ; \
    sudo defaults delete /Library/Preferences/com.apple.RemoteDesktop.plist ; \
    defaults delete ~/Library/Preferences/com.apple.RemoteDesktop.plist ; \
    sudo rm -r /Library/Application\ Support/Apple/Remote\ Desktop/ ; \
    rm -r ~/Library/Application\ Support/Remote\ Desktop/ ; \
    rm -r ~/Library/Containers/com.apple.RemoteDesktop
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    # Enable
    defaults write com.apple.addressbook ABShowDebugMenu -bool true
    
    # Disable (Default)
    defaults write com.apple.addressbook ABShowDebugMenu -bool false
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    ~/Library/Google/GoogleSoftwareUpdate/GoogleSoftwareUpdate.bundle/Contents/Resources/ksinstall --nuke
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    Works up to OS X 10.10 (Yosemite). System Integrity Protection was introduced
    in OS X 10.11 (El Capitan) which prevents system Launch Agents from being
    unloaded.
    
    
    
    
    
    # Stop Responding to Key Presses
    launchctl unload -w /System/Library/LaunchAgents/com.apple.rcd.plist
    
    # Respond to Key Presses (Default)
    launchctl load -w /System/Library/LaunchAgents/com.apple.rcd.plist
    
    
    
    
    
    
    From OS X 10.11 (El Capitan) on, you can either disable SIP or resort to a kind
    of hack, which will make iTunes inaccessible to any user, effectively
    preventing it from starting itself or its helpers. Be aware that for all
    intents and purposes this will trash your iTunes installation and may conflict
    with OS updates down the road.
    
    
    
    
    
    sudo chmod 0000 /Applications/iTunes.app
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    defaults write com.apple.mail DisableInlineAttachmentViewing -bool true
    
    
    
    
    
    
    #### 
    
    
    
    
    The AppleScript code below will quit Mail, vacuum the SQLite index, then
    re-open Mail. On a large email database that hasn't been optimized for a while,
    this can provide significant improvements in responsiveness and speed.
    
    
    
    
    
    (*
    Speed up Mail.app by vacuuming the Envelope Index
    Code from: http://web.archive.org/web/20071008123746/http://www.hawkwings.net/2007/03/03/scripts-to-automate-the-mailapp-envelope-speed-trick/
    Originally by "pmbuko" with modifications by Romulo
    Updated by Brett Terpstra 2012
    Updated by Mathias Törnblom 2015 to support V3 in El Capitan and still keep backwards compatibility
    Updated by Andrei Miclaus 2017 to support V4 in Sierra
    *)
    
    tell application "Mail" to quit
    set os_version to do shell script "sw_vers -productVersion"
    set mail_version to "V2"
    considering numeric strings
        if "10.10" <= os_version then set mail_version to "V3"
        if "10.12" <= os_version then set mail_version to "V4"
        if "10.13" <= os_version then set mail_version to "V5"
        if "10.14" <= os_version then set mail_version to "V6"
        if "10.15" <= os_version then set mail_version to "V7"
        if "11" <= os_version then set mail_version to "V8"
    end considering
    
    set sizeBefore to do shell script "ls -lnah ~/Library/Mail/" & mail_version & "/MailData | grep -E 'Envelope Index$' | awk {'print $5'}"
    do shell script "/usr/bin/sqlite3 ~/Library/Mail/" & mail_version & "/MailData/Envelope\\ Index vacuum"
    
    set sizeAfter to do shell script "ls -lnah ~/Library/Mail/" & mail_version & "/MailData | grep -E 'Envelope Index$' | awk {'print $5'}"
    
    display dialog ("Mail index before: " & sizeBefore & return & "Mail index after: " & sizeAfter & return & return & "Enjoy the new speed!")
    
    tell application "Mail" to activate
    
    
    
    
    
    
    Since the above AppleScript mainly uses shell commands anyway, here's a shell
    script version of the same functionality. It's usable from Big Sur onwards.
    Feel free to send a patch for newer systems. I currently don't have the money
    for a machine capable of running macOS 12+.
    
    
    
    
    
    #!/bin/zsh
    
    #
    # Speed up Mail.app by vacuuming the Envelope Index
    # Written by Marcel Bischoff
    # AppleScript original by "pmbuko" with modifications by Romulo
    #
    
    OS_VERSION=$(sw_vers -productVersion | cut -d. -f 1,2)
    MAIL_RUNNING=$(ps aux | grep -v grep | grep -c "Mail\$")
    MAIL_VERSION="V2"
    
    if [ $MAIL_RUNNING -gt 0 ]; then osascript -e 'tell application "Mail" to quit'; fi
    
    if [ 1 -eq "$(echo "11 <= ${OS_VERSION}" | bc)" ]; then MAIL_VERSION="V8"; fi
    
    SIZE_BEFORE=$(ls -lnah ~/Library/Mail/${MAIL_VERSION}/MailData | grep -E 'Envelope Index$' | awk {'print $5'})
    /usr/bin/sqlite3 ~/Library/Mail/${MAIL_VERSION}/MailData/Envelope\ Index vacuum
    SIZE_AFTER=$(ls -lnah ~/Library/Mail/${MAIL_VERSION}/MailData | grep -E 'Envelope Index$' | awk {'print $5'})
    
    printf "Mail index before: %s\nMail index after: %s\n" $SIZE_BEFORE $SIZE_AFTER
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    defaults write com.apple.Safari com.apple.Safari.ContentPageGroupIdentifier.WebKit2StandardFontFamily Georgia
    defaults write com.apple.Safari com.apple.Safari.ContentPageGroupIdentifier.WebKit2DefaultFontSize 16
    defaults write com.apple.Safari com.apple.Safari.ContentPageGroupIdentifier.WebKit2FixedFontFamily Menlo
    defaults write com.apple.Safari com.apple.Safari.ContentPageGroupIdentifier.WebKit2DefaultFixedFontSize 14
    
    
    
    
    
    
    #### 
    
    
    
    
    
    # Enable
    defaults write com.apple.Safari IncludeInternalDebugMenu -bool true && \
    defaults write com.apple.Safari IncludeDevelopMenu -bool true && \
    defaults write com.apple.Safari WebKitDeveloperExtrasEnabledPreferenceKey -bool true && \
    defaults write com.apple.Safari com.apple.Safari.ContentPageGroupIdentifier.WebKit2DeveloperExtrasEnabled -bool true && \
    defaults write -g WebKitDeveloperExtras -bool true
    
    # Disable (Default)
    defaults delete com.apple.Safari IncludeInternalDebugMenu && \
    defaults delete com.apple.Safari IncludeDevelopMenu && \
    defaults delete com.apple.Safari WebKitDeveloperExtrasEnabledPreferenceKey && \
    defaults delete com.apple.Safari com.apple.Safari.ContentPageGroupIdentifier.WebKit2DeveloperExtrasEnabled && \
    defaults delete -g WebKitDeveloperExtras
    
    
    
    
    
    
    #### 
    
    
    
    
    Other options: get source, get text.
    
    
    
    
    
    osascript -e 'tell application "Safari" to get URL of current tab of front window'
    
    
    
    
    
    
    #### 
    
    
    
    
    
    # Enable
    defaults write com.apple.Safari com.apple.Safari.ContentPageGroupIdentifier.WebKit2BackspaceKeyNavigationEnabled -bool true
    
    # Disable (Default)
    defaults write com.apple.Safari com.apple.Safari.ContentPageGroupIdentifier.WebKit2BackspaceKeyNavigationEnabled -bool false
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    defaults write com.bohemiancoding.sketch3 exportCompactSVG -bool true
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    Removes the dialog and defaults to auto reload.
    
    
    
    
    
    defaults write -app Skim SKAutoReloadFileUpdate -boolean true
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    # Enable
    defaults write com.apple.Terminal FocusFollowsMouse -string true
    
    # Disable (Default)
    defaults write com.apple.Terminal FocusFollowsMouse -string false
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    defaults write com.apple.TextEdit NSShowAppCentricOpenPanelInsteadOfUntitledFile -bool false
    
    
    
    
    
    
    #### 
    
    
    
    
    
    defaults write com.apple.TextEdit RichText -int 0
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    # Enable
    defaults write com.microsoft.VSCode ApplePressAndHoldEnabled -bool false
    
    # Disable (Default)
    defaults delete com.microsoft.VSCode ApplePressAndHoldEnabled
    
    
    
    
    
    
    #### 
    
    
    
    
    Setting present since macOS 10.14 (Mojave). See also system-wide setting:
    Subpixel Anti-Aliasing
    
    
    
    
    
    # Enable
    defaults write com.microsoft.VSCode CGFontRenderingFontSmoothingDisabled -bool false && \
    defaults write com.microsoft.VSCode.helper CGFontRenderingFontSmoothingDisabled -bool false && \
    defaults write com.microsoft.VSCode.helper.EH CGFontRenderingFontSmoothingDisabled -bool false && \
    defaults write com.microsoft.VSCode.helper.NP CGFontRenderingFontSmoothingDisabled -bool false
    
    # Disable (Default)
    defaults delete com.microsoft.VSCode CGFontRenderingFontSmoothingDisabled && \
    defaults delete com.microsoft.VSCode.helper CGFontRenderingFontSmoothingDisabled && \
    defaults delete com.microsoft.VSCode.helper.EH CGFontRenderingFontSmoothingDisabled && \
    defaults delete com.microsoft.VSCode.helper.NP CGFontRenderingFontSmoothingDisabled
    
    
    
    
    
    
    ## 
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    # Enable
    sudo tmutil enable
    
    # Disable
    sudo tmutil disable
    
    # Start backup immediately
    tmutil startbackup
    
    # Stop backup immediately
    tmutil stopbackup
    
    
    
    
    
    
    #### 
    
    
    
    
    This changes the interval to 30 minutes. The integer value is the time in
    seconds.
    
    
    
    
    
    sudo defaults write /System/Library/LaunchDaemons/com.apple.backupd-auto StartInterval -int 1800
    
    
    
    
    
    
    #### 
    
    
    
    
    
    sudo tmutil addexclusion /path/to/file/or/folder
    
    
    
    
    
    
    #### 
    
    
    
    
    Whether Time Machine performs local backups while the Time Machine backup
    volume is not available.
    
    
    
    
    
    # Status
    defaults read /Library/Preferences/com.apple.TimeMachine MobileBackups
    
    # Enable (Default)
    sudo tmutil enablelocal
    
    # Disable
    sudo tmutil disablelocal
    
    
    
    
    
    
    Since macOS 10.13 (High Sierra), you cannot disable local snapshots. Time
    Machine now always creates a local APFS snapshot and uses that snapshot as the
    data source to create a regular backup, rather than using the live disk as the
    source, as is the case with HFS formatted disks.
    
    
    
    
    #### 
    
    
    
    
    
    # Info
    tmutil destinationinfo
    
    # Remove current destination
    tmutil removedestination
    
    # Set physical disk destination
    tmutil setdestination /path/to/volume/or/volume/name
    
    # Set network destination
    tmutil setdestination -p smb://10.20.30.40/share
    
    
    
    
    
    
    #### 
    
    
    
    
    
    sudo defaults write /Library/Preferences/com.apple.TimeMachine DoNotOfferNewDisksForBackup -bool true
    
    
    
    
    
    
    #### 
    
    
    
    
    This little script will output the last 12 hours of Time Machine activity
    followed by live activity.
    
    
    
    
    
    #!/bin/sh
    
    filter='processImagePath contains "backupd" and subsystem beginswith "com.apple.TimeMachine"'
    
    # show the last 12 hours
    start="$(date -j -v-12H +'%Y-%m-%d %H:%M:%S')"
    
    echo ""
    echo "[History (from $start)]"
    echo ""
    
    log show --style syslog --info --start "$start" --predicate "$filter"
    
    echo ""
    echo "[Following]"
    echo ""
    
    log stream --style syslog --info --predicate "$filter"
    
    
    
    
    
    
    #### 
    
    
    
    
    
    # Status
    sudo defaults read /Library/Preferences/com.apple.TimeMachine RequiresACPower
    
    # Enable (Default)
    sudo defaults write /Library/Preferences/com.apple.TimeMachine RequiresACPower -bool true
    
    # Disable
    sudo defaults write /Library/Preferences/com.apple.TimeMachine RequiresACPower -bool false
    
    
    
    
    
    
    #### 
    
    
    
    
    
    # List all backups
    tmutil listbackups
    
    # Show differences
    tmutil calculatedrift /path/to/backup/folder/plus/machine/name/folder
    
    
    
    
    
    
    #### 
    
    
    
    
    Beginning in OS X 10.11, Time Machine records checksums of files copied into
    snapshots. Checksums are not retroactively computed for files that were copied
    by earlier releases of OS X.
    
    
    
    
    
    sudo tmutil verifychecksums /path/to/backup
    
    
    
    
    
    
    ## 
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    Compiling MacVim via Homebrew with all bells and whistles, including overriding
    system Vim.
    
    
    
    
    
    brew install macvim --HEAD
    
    
    
    
    
    
    #### 
    
    
    
    
    Install the modern Vim drop-in alternative via Homebrew.
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    
    #### 
    
    
    
    
    
    xcrun simctl delete unavailable
    
    
    
    
    
    
    ## 
    
    
    
    
    #### 
    
    
    
    
    Obsolete since macOS 10.14 (Mojave). See Show Recent Apps.
    
    
    
    
    
    defaults write com.apple.dock persistent-others -array-add '{ "tile-data" = { "list-type" = 1; }; "tile-type" = "recents-tile"; }' && \
    killall Dock
    
    
    
    
    
    
    #### 
    
    
    
    
    
    defaults write com.apple.dock persistent-others -array-add '{ "tile-data" = {}; "tile-type"="small-spacer-tile"; }' && \
    killall Dock
    
    
    
    
    
    
    #### 
    
    
    
    
    
    defaults write com.apple.dock persistent-apps -array-add '{"tile-type"="spacer-tile";}' && \
    killall Dock
    
    
    
    
    
    
    #### 
    
    
    
    
    
    defaults write com.apple.dock persistent-apps -array-add '{"tile-type"="small-spacer-tile";}' && \
    killall Dock
    
    
    
    
    
    
    #### 
    
    
    
    
    
    # Enable (Default)
    defaults write com.apple.dock mru-spaces -bool true && \
    killall Dock
    
    # Disable
    defaults write com.apple.dock mru-spaces -bool false && \
    killall Dock
    
    
    
    
    
    
    #### 
    
    
    
    
    
    # Enable
    defaults write com.apple.dock autohide -bool true && \
    killall Dock
    
    # Disable (Default)
    defaults write com.apple.dock autohide -bool false && \
    killall Dock
    
    
    
    
    
    
    #### 
    
    
    
    
    Global setting whether Dock icons should bounce when the respective application
    demands your attention.
    
    
    
    
    
    # Enable (Default)
    defaults write com.apple.dock no-bouncing -bool true && \
    killall Dock
    
    # Disable
    defaults write com.apple.dock no-bouncing -bool false && \
    killall Dock
    
    
    
    
    
    
    #### 
    
    
    
    
    
    # Enable
    defaults write com.apple.Dock size-immutable -bool true && \
    killall Dock
    
    # Disable (Default)
    defaults write com.apple.Dock size-immutable -bool false && \
    killall Dock
    
    
    
    
    
    
    #### 
    
    
    
    
    
    defaults delete com.apple.dock && \
    killall Dock
    
    
    
    
    
    
    #### 
    
    
    
    
    Fully resize your Dock's body. To resize change the 0 value as an integer.
    
    
    
    
    
    defaults write com.apple.dock tilesize -int 0 && \
    killall Dock
    
    
    
    
    
    
    #### 
    
    
    
    
    Use your touchpad or mouse scroll wheel to interact with Dock items. Allows you
    to use an upward scrolling gesture to open stacks. Using the same gesture on
    applications that are running invokes Exposé/Mission Control.
    
    
    
    
    
    # Enable
    defaults write com.apple.dock scroll-to-open -bool true && \
    killall Dock
    
    # Disable (Default)
    defaults write com.apple.dock scroll-to-open -bool false && \
    killall Dock
    
    
    
    
    
    
    #### 
    
    
    
    
    The float number defines the show/hide delay in ms.
    
    
    
    
    
    defaults write com.apple.dock autohide-time-modifier -float 0.4 && \
    defaults write com.apple.dock autohide-delay -float 0 && \
    killall Dock
    
    
    
    
    
    
    #### 
    
    
    
    
    
    # Enable
    defaults write com.apple.dock showhidden -bool true && \
    killall Dock
    
    # Disable (Default)
    defaults write com.apple.dock showhidden -bool false && \
    killall Dock
    
    
    
    
    
    
    #### 
    
    
    
    
    
    # Enable
    defaults write com.apple.dock static-only -bool true && \
    killall Dock
    
    # Disable (Default)
    defaults write com.apple.dock static-only -bool false && \
    killall Dock
    
    
    
    
    
    
    #### 
    
    
    
    
    Setting present since macOS 10.14 (Mojave).
    
    
    
    
    
    # Disable
    defaults write com.apple.dock show-recents -bool false  && \
    killall Dock
    
    # Enable (Default)
    defaults write com.apple.dock show-recents -bool true && \
    killall Dock
    
    
    
    
    
    
    #### 
    
    
    
    
    When clicking an application icon in the Dock, the respective windows will come
    to the front, but all other application windows will be hidden.
    
    
    
    
    
    # Enable
    defaults write com.apple.dock single-app -bool true && \
    killall Dock
    
    # Disable (Default)
    defaults write com.apple.dock single-app -bool false && \
    killall Dock
    
    
    
    
    
    
    ## 
    
    
    
    
    #### 
    
    
    
    
    Supported formats are plain text, rich text (rtf) and Microsoft Word (doc/docx).
    
    
    
    
    
    textutil -convert html file.ext
    
    
    
    
    
    
    ## 
    
    
    
    
    #### 
    
    
    
    
    Creates an empty 10 gigabyte test file.
    
    
    
    
    
    mkfile 10g /path/to/file
    
    
    
    
    
    
    #### 
    
    
    
    
    Leaving this turned on is useless when you're using SSDs.
    
    
    
    
    
    
    #### 
    
    
    
    
    The only reliable way to do this is by sending an AppleScript command to
    Finder.
    
    
    
    
    
    osascript -e 'tell application "Finder" to eject (every disk whose ejectable is true)'
    
    
    
    
    
    
    #### 
    
    
    
    
    You don't have to use the Disk Utility GUI for this.
    
    
    
    
    
    sudo diskutil repairPermissions /
    
    
    
    
    
    
    > 
>     
>     
>     Beginning with OS X 10.11 (El Capitan), system file permissions are
>     automatically protected. It's no longer necessary to verify or repair
>     permissions with Disk Utility.
>     ([Source](https://support.apple.com/en-us/HT201560))
>     
>     
>     
    
    
    
    
    #### 
    
    
    
    
    
    # Up to OS X 10.10 (Yosemite)
    bless --mount "/path/to/mounted/volume" --setBoot
    
    # From OS X 10.11 (El Capitan)
    sudo systemsetup -setstartupdisk /System/Library/CoreServices
    
    
    
    
    
    
    #### 
    
    
    
    
    
    
    #### 
    
    
    
    
    A continuous stream of file system access info.
    
    
    
    
    
    
    ### 
    
    
    
    
    Present since macOS 10.13 (High Sierra). There is no central utility and usage
    is inconsistent as most functionality is rolled into tmutil.
    
    
    
    
    #### 
    
    
    
    
    
    /System/Library/Filesystems/apfs.fs/Contents/Resources/hfs_convert /path/to/file/system
    
    
    
    
    
    
    #### 
    
    
    
    
    
    /System/Library/Filesystems/apfs.fs/Contents/Resources/newfs_apfs /path/to/device
    
    
    
    
    
    
    #### 
    
    
    
    
    
    
    #### 
    
    
    
    
    
    tmutil deletelocalsnapshots com.apple.TimeMachine.2018-01-26-044042
    ````
    
    #### List Snapshots
    ```sh
    tmutil listlocalsnapshots /
    
    
    
    
    
    
    #### 
    
    
    
    
    Snapshots are read-only.
    
    
    
    
    
    mkdir ~/mnt
    /System/Library/Filesystems/apfs.fs/Contents/Resources/mount_apfs -s com.apple.TimeMachine.2018-01-26-044042 / ~/mnt
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    hdiutil create -volname "Volume Name" -srcfolder /path/to/folder -ov diskimage.dmg
    
    
    
    
    
    
    If you'd like to encrypt the disk image:
    
    
    
    
    
    hdiutil create -encryption -stdinpass -volname "Volume Name" -srcfolder /path/to/folder -ov encrypted.dmg
    
    
    
    
    
    
    By default, you'll be prompted for a password. You can automate that by piping
    in a password:
    
    
    
    
    
    echo -n YourPassword | hdiutil create -encryption -stdinpass -volname "Volume Name" -srcfolder /path/to/folder -ov encrypted.dmg
    
    
    
    
    
    
    #### 
    
    
    
    
    This command applies to .iso, .img and .dmg images.
    
    
    
    
    
    hdiutil burn /path/to/image_file
    
    
    
    
    
    
    #### 
    
    
    
    
    The disk is backed by physical RAM and will be several times faster than an
    SSD. The contents of the disk cannot be recovered after it has been ejected.
    The example below is for a 500 MiB RAM disk, adjust as needed.
    
    
    
    
    
    # Up to macOS 10.14 (Mojave)
    let DISKSIZE=500*2048 && \
    diskutil erasevolume HFS+ "RAM Disk" `hdiutil attach -nomount ram://$DISKSIZE`
    
    # From macOS 10.15 (Catalina) on
    let "DISKSIZE = 500*2048" && \
    diskutil erasevolume HFS+ "RAM Disk" `hdiutil attach -nomount ram://$DISKSIZE`
    
    
    
    
    
    
    #### 
    
    
    
    
    
    defaults write com.apple.frameworks.diskimages skip-verify -bool true && \
    defaults write com.apple.frameworks.diskimages skip-verify-locked -bool true && \
    defaults write com.apple.frameworks.diskimages skip-verify-remote -bool true
    
    
    
    
    
    
    #### 
    
    
    
    
    
    bless --folder "/path/to/mounted/volume/System/Library/CoreServices" --bootinfo --bootefi
    
    
    
    
    
    
    #### 
    
    
    
    
    
    hdiutil attach /path/to/diskimage.dmg
    
    
    
    
    
    
    #### 
    
    
    
    
    
    hdiutil detach /dev/disk2s1
    
    
    
    
    
    
    #### 
    
    
    
    
    Like the Disk Utility "Restore" function.
    
    
    
    
    
    sudo asr -restore -noverify -source /path/to/diskimage.dmg -target /Volumes/VolumeToRestoreTo
    
    
    
    
    
    
    ## 
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    External HDs, thumb drives, etc.
    
    
    
    
    
    # Enable
    defaults write com.apple.finder ShowExternalHardDrivesOnDesktop -bool true && \
    killall Finder
    
    # Disable (Default)
    defaults write com.apple.finder ShowExternalHardDrivesOnDesktop -bool false && \
    killall Finder
    
    
    
    
    
    
    #### 
    
    
    
    
    Built-in HDs or SSDs.
    
    
    
    
    
    # Enable
    defaults write com.apple.finder ShowHardDrivesOnDesktop -bool true && \
    killall Finder
    
    # Disable (Default)
    defaults write com.apple.finder ShowHardDrivesOnDesktop -bool false && \
    killall Finder
    
    
    
    
    
    
    #### 
    
    
    
    
    CDs, DVDs, iPods, etc.
    
    
    
    
    
    # Enable
    defaults write com.apple.finder ShowRemovableMediaOnDesktop -bool true && \
    killall Finder
    
    # Disable (Default)
    defaults write com.apple.finder ShowRemovableMediaOnDesktop -bool false && \
    killall Finder
    
    
    
    
    
    
    #### 
    
    
    
    
    AFP, SMB, NFS, WebDAV, etc.
    
    
    
    
    
    # Enable
    defaults write com.apple.finder ShowMountedServersOnDesktop -bool true && \
    killall Finder
    
    # Disable (Default)
    defaults write com.apple.finder ShowMountedServersOnDesktop -bool false && \
    killall Finder
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    sudo chmod -RN /path/to/folder
    
    
    
    
    
    
    #### 
    
    
    
    
    
    defaults write -g NSNavRecentPlacesLimit -int 10 && \
    killall Finder
    
    
    
    
    
    
    #### 
    
    
    
    
    
    defaults write -g AppleShowAllExtensions -bool true
    
    
    
    
    
    
    #### 
    
    
    
    
    This is equivalent to Finder "Locked" status.
    
    
    
    
    
    # Disable (Default)
    sudo chflags -R nouchg /path/to/file/or/folder
    
    # Enable
    sudo chflags -R uchg /path/to/file/or/folder
    
    
    
    
    
    
    #### 
    
    
    
    
    
    # Show All
    defaults write com.apple.finder AppleShowAllFiles true
    
    # Restore Default File Visibility
    defaults write com.apple.finder AppleShowAllFiles false
    
    
    
    
    
    
    #### 
    
    
    
    
    
    defaults write com.apple.finder _FXShowPosixPathInTitle -bool true
    
    
    
    
    
    
    #### 
    
    
    
    
    By default, the ~/Library folder is hidden. You can easily show it again. The
    same method works with all other folders.
    
    
    
    
    
    # Hidden (Default)
    chflags hidden ~/Library
    
    # Visible
    chflags nohidden ~/Library
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    Makes possible to see Finder menu item "Quit Finder" with default shortcut
    Cmd + Q
    
    
    
    
    
    # Enable
    defaults write com.apple.finder QuitMenuItem -bool true && \
    killall Finder
    
    # Disable (Default)
    defaults write com.apple.finder QuitMenuItem -bool false && \
    killall Finder
    
    
    
    
    
    
    #### 
    
    
    
    
    Useful if you’re on an older Mac that messes up the animation.
    
    
    
    
    
    # Disable
    defaults write -g NSScrollAnimationEnabled -bool false
    
    # Enable (Default)
    defaults write -g NSScrollAnimationEnabled -bool true
    
    
    
    
    
    
    #### 
    
    
    
    
    
    # Disable
    defaults write -g NSScrollViewRubberbanding -bool false
    
    # Enable (Default)
    defaults write -g NSScrollViewRubberbanding -bool true
    
    
    
    
    
    
    #### 
    
    
    
    
    
    defaults write -g NSNavPanelExpandedStateForSaveMode -bool true && \
    defaults write -g NSNavPanelExpandedStateForSaveMode2 -bool true
    
    
    
    
    
    
    #### 
    
    
    
    
    
    # Hide Icons
    defaults write com.apple.finder CreateDesktop -bool false && \
    killall Finder
    
    # Show Icons (Default)
    defaults write com.apple.finder CreateDesktop -bool true && \
    killall Finder
    
    
    
    
    
    
    #### 
    
    
    
    
    
    # Show
    defaults write com.apple.finder ShowPathbar -bool true
    
    # Hide (Default)
    defaults write com.apple.finder ShowPathbar -bool false
    
    
    
    
    
    
    #### 
    
    
    
    
    Possible values: WhenScrolling, Automatic and Always.
    
    
    
    
    
    defaults write -g AppleShowScrollBars -string "Always"
    
    
    
    
    
    
    #### 
    
    
    
    
    
    # Show
    defaults write com.apple.finder ShowStatusBar -bool true
    
    # Hide (Default)
    defaults write com.apple.finder ShowStatusBar -bool false
    
    
    
    
    
    
    #### 
    
    
    
    
    Sets default save target to be a local disk, not iCloud.
    
    
    
    
    
    defaults write -g NSDocumentSaveNewDocumentsToCloud -bool false
    
    
    
    
    
    
    #### 
    
    
    
    
    
    defaults write com.apple.finder FXDefaultSearchScope -string "SCcf"
    
    
    
    
    
    
    #### 
    
    
    
    
    
    defaults write com.apple.finder NewWindowTarget -string "PfLo" && \
    defaults write com.apple.finder NewWindowTargetPath -string "file://${HOME}"
    
    
    
    
    
    
    #### 
    
    
    
    
    Sets size to 'medium'.
    
    
    
    
    
    defaults write -g NSTableViewDefaultSizeMode -int 2
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    Avoids creation of .DS_Store and AppleDouble files.
    
    
    
    
    
    defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool true
    
    
    
    
    
    
    #### 
    
    
    
    
    Avoids creation of .DS_Store and AppleDouble files.
    
    
    
    
    
    defaults write com.apple.desktopservices DSDontWriteUSBStores -bool true
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    If multiple windows are open, it chooses the top-most one.
    
    
    
    
    
    cd "$(osascript -e 'tell app "Finder" to POSIX path of (insertion location as alias)')"
    
    
    
    
    
    
    #### 
    
    
    
    
    
    open https://herrbischoff.com
    
    
    
    
    
    
    #### 
    
    
    
    
    
    
    #### 
    
    
    
    
    You can open applications using -a.
    
    
    
    
    
    open -a "Google Chrome" https://herrbischoff.com
    
    
    
    
    
    
    #### 
    
    
    
    
    
    
    #### 
    
    
    
    
    
    
    ## 
    
    
    
    
    #### 
    
    
    
    
    To clear font caches for all users, put sudo in front of these commands.
    
    
    
    
    
    atsutil databases -removeUser && \
    atsutil server -shutdown && \
    atsutil server -ping
    
    
    
    
    
    
    #### 
    
    
    
    
    Starting in macOS 10.15 (Catalina), the Utilities apps (including Terminal.app)
    are now found in the /System folder.
    
    
    
    
    
    cp -v /Applications/Xcode-beta.app/Contents/SharedFrameworks/DVTKit.framework/Versions/A/Resources/Fonts/SFMono-* ~/Library/Fonts
    
    
    
    
    
    
    From macOS 10.12 (Sierra) on, they are included in Terminal.app.
    
    
    
    
    
    cp -v /Applications/Utilities/Terminal.app/Contents/Resources/Fonts/SFMono-* ~/Library/Fonts
    
    
    
    
    
    
    In older OS versions, you need to download and install Xcode 8 beta for this to
    work. Afterwards they should be available in all applications.
    
    
    
    
    
    cp -v /System/Applications/Utilities/Terminal.app/Contents/Resources/Fonts/SFMono-* ~/Library/Fonts
    
    
    
    
    
    
    ## 
    
    
    
    
    Please see [this file](functions.md).
    
    
    
    
    ## 
    
    
    
    
    ### 
    
    
    
    
    Up to OS X 10.12 (Sierra) the Bluetooth daemon is named blued instead of
    bluetoothd. You need to adjust the killall command accordingly.
    
    
    
    
    
    # Status
    defaults read /Library/Preferences/com.apple.Bluetooth ControllerPowerState
    
    # Enable (Default)
    sudo defaults write /Library/Preferences/com.apple.Bluetooth ControllerPowerState -int 1
    
    # Disable
    sudo defaults write /Library/Preferences/com.apple.Bluetooth ControllerPowerState -int 0 && \
    sudo killall -HUP bluetoothd
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    Enable Trim for non-Apple SSDs. This command is present since OS X 10.10 (Yosemite).
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    networksetup -listallhardwareports
    
    
    
    
    
    
    #### 
    
    
    
    
    
    pmset -g batt | egrep "([0-9]+\%).*" -o --colour=auto | cut -f1 -d';'
    
    
    
    
    
    
    #### 
    
    
    
    
    
    pmset -g batt | egrep "([0-9]+\%).*" -o --colour=auto | cut -f3 -d';'
    
    
    
    
    
    
    #### 
    
    
    
    
    
    system_profiler SPUSBDataType | sed -n -e '/iPad/,/Serial/p' -e '/iPhone/,/Serial/p'
    
    
    
    
    
    
    #### 
    
    
    
    
    
    system_profiler SPDisplaysDataType | grep Resolution
    
    
    
    
    
    
    #### 
    
    
    
    
    
    sysctl -n machdep.cpu.brand_string
    
    
    
    
    
    
    ### 
    
    
    
    
    
    # Status
    defaults read /Library/Preferences/com.apple.driver.AppleIRController DeviceEnabled
    
    # Enable (Default)
    defaults write /Library/Preferences/com.apple.driver.AppleIRController DeviceEnabled -int 1
    
    # Disable
    defaults write /Library/Preferences/com.apple.driver.AppleIRController DeviceEnabled -int 0
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    Prevent sleep for 1 hour:
    
    
    
    
    
    
    #### 
    
    
    
    
    
    
    #### 
    
    
    
    
    
    sudo pmset displaysleep 15
    
    
    
    
    
    
    #### 
    
    
    
    
    
    
    #### 
    
    
    
    
    
    sudo systemsetup -getcomputersleep
    
    
    
    
    
    
    #### 
    
    
    
    
    
    sudo systemsetup -setcomputersleep 60
    
    
    
    
    
    
    #### 
    
    
    
    
    
    sudo systemsetup -setcomputersleep Never
    
    
    
    
    
    
    #### 
    
    
    
    
    
    sudo systemsetup -setrestartfreeze on
    
    
    
    
    
    
    #### 
    
    
    
    
    Play iOS charging sound when MagSafe is connected.
    
    
    
    
    
    ## Up to macOS 10.12 (Sierra)
    
    # Enable
    defaults write com.apple.PowerChime ChimeOnAllHardware -bool true && \
    open /System/Library/CoreServices/PowerChime.app
    
    # Disable (Default)
    defaults write com.apple.PowerChime ChimeOnAllHardware -bool false && \
    killall PowerChime
    
    
    
    
    
    
    
    ## From macOS 10.13 (High Sierra) on
    
    # Enable (Default)
    defaults write com.apple.PowerChime ChimeOnNoHardware -bool false && \
    open /System/Library/CoreServices/PowerChime.app
    
    # Disable
    defaults write com.apple.PowerChime ChimeOnNoHardware -bool true && \
    killall PowerChime
    
    
    
    
    
    
    ## 
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    # Disable
    defaults write -g NSAutomaticSpellingCorrectionEnabled -bool false
    
    # Enable (Default)
    defaults write -g NSAutomaticSpellingCorrectionEnabled -bool true
    
    # Show Status
    defaults read -g NSAutomaticSpellingCorrectionEnabled
    
    
    
    
    
    
    #### 
    
    
    
    
    Enable Tab in modal dialogs.
    
    
    
    
    
    # Text boxes and lists only (Default)
    defaults write NSGlobalDomain AppleKeyboardUIMode -int 0
    
    # All controls
    defaults write NSGlobalDomain AppleKeyboardUIMode -int 3
    
    
    
    
    
    
    #### 
    
    
    
    
    Change the "press and hold" behavior.
    
    
    
    
    
    # Enable
    defaults write -g ApplePressAndHoldEnabled -bool false
    
    # Disable (Default)
    defaults write -g ApplePressAndHoldEnabled -bool true
    
    
    
    
    
    
    #### 
    
    
    
    
    Sets a very fast repeat rate, adjust to taste.
    
    
    
    
    
    defaults write -g KeyRepeat -int 0.02
    
    
    
    
    
    
    ## 
    
    
    
    
    #### 
    
    
    
    
    You need to restart Dock because Launchpad is tied to it.
    
    
    
    
    
    # Up to OS X 10.10 (Yosemite)
    rm ~/Library/Application\ Support/Dock/*.db && \
    killall Dock
    
    # From OS X 10.11 (El Capitan)
    defaults write com.apple.dock ResetLaunchPad -bool true && \
    killall Dock
    
    
    
    
    
    
    ## 
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    afconvert input.mp3 ringtone.m4r -f m4af
    
    
    
    
    
    
    #### 
    
    
    
    
    Uses "Alex" voice, a plain UTF-8 encoded text file for input and AAC output.
    
    
    
    
    
    say -v Alex -f file.txt -o "output.m4a"
    
    
    
    
    
    
    #### 
    
    
    
    
    
    sudo nvram SystemAudioVolume=" "
    
    
    
    
    
    
    #### 
    
    
    
    
    
    osascript -e 'set volume output muted true'
    
    
    
    
    
    
    #### 
    
    
    
    
    
    osascript -e 'set volume 4'
    
    
    
    
    
    
    #### 
    
    
    
    
    You can play all audio formats that are natively supported by QuickTime.
    
    
    
    
    
    afplay -q 1 filename.mp3
    
    
    
    
    
    
    #### 
    
    
    
    
    
    say 'All your base are belong to us!'
    
    
    
    
    
    
    #### 
    
    
    
    
    Older Macs:
    
    
    
    
    
    # Enable (Default)
    sudo nvram BootAudio=%01
    
    # Disable
    sudo nvram BootAudio=%00
    
    
    
    
    
    
    From 2016 models on:
    
    
    
    
    
    # Enable
    sudo nvram StartupMute=%00
    
    # Disable (Default)
    sudo nvram StartupMute=%01
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    defaults write com.apple.QuickTimePlayerX MGPlayMovieOnOpen 1
    
    
    
    
    
    
    ## 
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    # Disable
    sudo defaults write /System/Library/LaunchDaemons/com.apple.mDNSResponder.plist ProgramArguments -array-add "-NoMulticastAdvertisements"
    
    # Enable (Default)
    sudo defaults write /System/Library/LaunchDaemons/com.apple.mDNSResponder.plist ProgramArguments -array "/usr/sbin/mDNSResponder" "-launchd"
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    sudo ipconfig set en0 DHCP
    
    
    
    
    
    
    #### 
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    sudo dscacheutil -flushcache && \
    sudo killall -HUP mDNSResponder
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    sudo scutil --set ComputerName "newhostname" && \
    sudo scutil --set HostName "newhostname" && \
    sudo scutil --set LocalHostName "newhostname" && \
    sudo defaults write /Library/Preferences/SystemConfiguration/com.apple.smb.server NetBIOSName -string "newhostname"
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    Switch between network locations created in the Network preference pane.
    
    
    
    
    
    # Status
    scselect
    
    # Switch Network Location
    scselect LocationNameFromStatus
    
    
    
    
    
    
    #### 
    
    
    
    
    
    networksetup -setmanual "Ethernet" 192.168.2.100 255.255.255.0 192.168.2.1
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    ping -o herrbischoff.com
    
    
    
    
    
    
    #### 
    
    
    
    
    
    traceroute herrbischoff.com
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    > 
>     
>     
>     Prior to macOS 10.12 (Sierra), ssh would present a dialog asking for your
>     passphrase and would offer the option to store it into the keychain. This UI
>     was deprecated some time ago and has been removed.
>     
>     
>     
>     
>     Instead, a new UseKeychain option was introduced in macOS 10.12 (Sierra)
>     allowing users to specify whether they would like for the passphrase to be
>     stored in the keychain. This option was enabled by default on macOS 10.12
>     (Sierra), which caused all passphrases to be stored in the keychain.
>     
>     
>     
>     
>     This was not the intended default behavior, so this has been changed in macOS
>     10.12.2.
>     ([Source](https://developer.apple.com/library/archive/technotes/tn2449/_index.html))
>     
>     
>     
    
    
    
    
    
    ssh-add -K /path/to/private_key
    
    
    
    
    
    
    Then add to ~/.ssh/config:
    
    
    
    
    
    Host server.example.com
        IdentityFile /path/to/private_key
        UseKeychain yes
    
    
    
    
    
    
    #### 
    
    
    
    
    
    # Enable
    sudo launchctl load -w /System/Library/LaunchDaemons/ssh.plist
    
    # Disable (Default)
    sudo launchctl unload -w /System/Library/LaunchDaemons/ssh.plist
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    This outputs all applications currently using port 80.
    
    
    
    
    
    
    #### 
    
    
    
    
    Works if your ISP doesn't replace DNS requests (which it shouldn't).
    
    
    
    
    
    dig +short myip.opendns.com @resolver1.opendns.com
    
    
    
    
    
    
    Alternative that works on all networks.
    
    
    
    
    
    curl -s https://api.ipify.org && echo
    
    
    
    
    
    
    #### 
    
    
    
    
    Undocumented flag of the scutil command.
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    Files will be served from /private/tftpboot.
    
    
    
    
    
    sudo launchctl load -F /System/Library/LaunchDaemons/tftp.plist && \
    sudo launchctl start com.apple.tftpd
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    networksetup -setairportnetwork en0 WIFI_SSID WIFI_PASSWORD
    
    
    
    
    
    
    #### 
    
    
    
    
    Create a symbolic link to the airport command for easy access:
    
    
    
    
    
    sudo ln -s /System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport /usr/local/bin/airport
    
    
    
    
    
    
    Run a wireless scan:
    
    
    
    
    
    
    #### 
    
    
    
    
    
    /System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport -I | awk '/ SSID/ {print substr($0, index($0, $2))}'
    
    
    
    
    
    
    #### 
    
    
    
    
    
    
    #### 
    
    
    
    
    
    defaults read /Library/Preferences/SystemConfiguration/com.apple.airport.preferences | grep LastConnected -A 7
    
    
    
    
    
    
    #### 
    
    
    
    
    Exchange SSID with the SSID of the access point you wish to query the password from.
    
    
    
    
    
    security find-generic-password -D "AirPort network password" -a "SSID" -gw
    
    
    
    
    
    
    #### 
    
    
    
    
    
    networksetup -setairportpower en0 on
    
    
    
    
    
    
    ## 
    
    
    
    
    
    
      * [Fink](http://www.finkproject.org) - The full world of Unix Open Source
      software for Darwin. A little outdated.
    
    
      * [Homebrew](https://brew.sh) - The missing package manager for OS X. The most
      popular choice.
    
    
      * [MacPorts](https://www.macports.org) - Compile, install and upgrade either
      command-line, X11 or Aqua based open-source software.
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall)"
    
    
    
    
    
    
    ## 
    
    
    
    
    #### 
    
    
    
    
    
    
    #### 
    
    
    
    
    
    defaults write -g PMPrintingExpandedStateForPrint -bool true && \
    defaults write -g PMPrintingExpandedStateForPrint2 -bool true
    
    
    
    
    
    
    #### 
    
    
    
    
    
    defaults write com.apple.print.PrintingPrefs "Quit When Finished" -bool true
    
    
    
    
    
    
    ## 
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    # Show Status
    sudo /usr/libexec/ApplicationFirewall/socketfilterfw --getglobalstate
    
    # Enable
    sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setglobalstate on
    
    # Disable (Default)
    sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setglobalstate off
    
    
    
    
    
    
    #### 
    
    
    
    
    
    sudo /usr/libexec/ApplicationFirewall/socketfilterfw --add /path/to/file
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    spctl --add /path/to/Application.app
    
    
    
    
    
    
    #### 
    
    
    
    
    
    spctl --remove /path/to/Application.app
    
    
    
    
    
    
    #### 
    
    
    
    
    Especially helpful with the annoying macOS 10.15 (Catalina) system popup
    blocking execution of non-signed apps.
    
    
    
    
    
    # Status
    spctl --status
    
    # Enable (Default)
    sudo spctl --master-enable
    
    # Disable
    sudo spctl --master-disable
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    LC_ALL=C tr -dc "[:alnum:]" < /dev/urandom | head -c 20 | pbcopy
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    # Up to macOS 10.12 (Sierra)
    open /System/Library/Frameworks/ScreenSaver.framework/Versions/A/Resources/ScreenSaverEngine.app
    
    # From macOS 10.13 (High Sierra)
    /System/Library/CoreServices/ScreenSaverEngine.app/Contents/MacOS/ScreenSaverEngine
    
    
    
    
    
    
    #### 
    
    
    
    
    
    /System/Library/CoreServices/Menu\ Extras/User.menu/Contents/Resources/CGSession -suspend
    
    
    
    
    
    
    #### 
    
    
    
    
    
    # Status
    defaults read com.apple.screensaver askForPasswordDelay
    
    # Enable (Default)
    defaults write com.apple.screensaver askForPasswordDelay -int 0
    
    # Disable (Integer = lock delay in seconds)
    defaults write com.apple.screensaver askForPasswordDelay -int 10
    
    
    
    
    
    
    #### 
    
    
    
    
    
    # Status
    defaults read com.apple.screensaver askForPassword
    
    # Enable
    defaults write com.apple.screensaver askForPassword -int 1
    
    # Disable (Default)
    defaults write com.apple.screensaver askForPassword -int 0
    
    
    
    
    
    
    ### 
    
    
    
    
    The tccutil command manages the privacy database, which stores decisions the
    user has made about whether apps may access personal data. You need to close
    all applications except Terminal before running any of these commands.
    
    
    
    
    
    # Full Reset for All Applications
    sudo tccutil reset All
    
    # Reset Adress Book Access
    sudo tccutil reset AddressBook
    
    # Reset All Permission for Terminal.app
    sudo tccutil reset All com.apple.Terminal
    
    
    
    
    
    
    ### 
    
    
    
    
    Note: The srm command appears to have been removed on MacOS after 10.9. There
    is a note on an [Apple support page](https://support.apple.com/en-us/HT201949)
    hinting as to why:
    
    
    
    
    > 
>     
>     
>     With an SSD drive, Secure Erase and Erasing Free Space are not available in
>     Disk Utility. These options are not needed for an SSD drive because a
>     standard erase makes it difficult to recover data from an SSD.
>     
>     
>     
    
    
    
    
    #### 
    
    
    
    
    
    
    #### 
    
    
    
    
    
    
    #### 
    
    
    
    
    
    srm -rf /path/to/complete/destruction
    
    
    
    
    
    
    ## 
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    find . -type f -name '.DS_Store' -ls -delete
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    sudo launchctl load -w /System/Library/LaunchDaemons/com.apple.locate.plist
    
    
    
    
    
    
    #### 
    
    
    
    
    The -i modifier makes the search case insensitive.
    
    
    
    
    
    
    ## 
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    # Enable
    defaults write com.apple.NetworkBrowser BrowseAllInterfaces -bool true && \
    defaults remove com.apple.NetworkBrowser DisableAirDrop
    
    # Disable (Default)
    defaults delete com.apple.NetworkBrowser BrowseAllInterfaces && \
    defaults write com.apple.NetworkBrowser DisableAirDrop -bool true
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    osascript /path/to/script.scpt
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    diff -qr /path/to/folder1 /path/to/folder2
    
    
    
    
    
    
    #### 
    
    
    
    
    Make sure you have pv installed and replace /dev/rdisk2 with the
    appropriate write device or file.
    
    
    
    
    
    FILE=/path/to/file.iso pv -s $(du -h $FILE | awk '/.*/ {print $1}') $FILE | sudo dd of=/dev/rdisk2 bs=1m
    
    
    
    
    
    
    #### 
    
    
    
    
    In case your shell session went insane (some script or application turned it
    into a garbled mess).
    
    
    
    
    
    
    #### 
    
    
    
    
    
    
    #### 
    
    
    
    
    
    
    #### 
    
    
    
    
    
    
    #### 
    
    
    
    
    How long since your last restart.
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    cat whatever.txt | pbcopy
    
    
    
    
    
    
    #### 
    
    
    
    
    
    pbpaste | textutil -convert txt -stdin -stdout -encoding 30 | pbcopy
    
    
    
    
    
    
    #### 
    
    
    
    
    
    pbpaste | expand | pbcopy
    
    
    
    
    
    
    #### 
    
    
    
    
    
    
    #### 
    
    
    
    
    
    pbpaste | sort | uniq | pbcopy
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    If FileVault is enabled on the current volume, it restarts the system,
    bypassing the initial unlock. The command may not work on all systems.
    
    
    
    
    
    sudo fdesetup authrestart
    
    
    
    
    
    
    #### 
    
    
    
    
    
    # Status
    sudo fdesetup status
    
    # Enable
    sudo fdesetup enable
    
    # Disable (Default)
    sudo fdesetup disable
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    sudo sysdiagnose -f ~/Desktop/
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    # macOS 11 (Big Sur)
    sudo /Applications/Install\ macOS\ Big\ Sur.app/Contents/Resources/createinstallmedia --volume /Volumes/USB --nointeraction --downloadassets
    
    # macOS 10.15 (Catalina)
    sudo /Applications/Install\ macOS\ Catalina.app/Contents/Resources/createinstallmedia --volume /Volumes/USB --nointeraction --downloadassets
    
    # macOS 10.14 (Mojave)
    sudo /Applications/Install\ macOS\ Mojave.app/Contents/Resources/createinstallmedia --volume /Volumes/USB --nointeraction --downloadassets
    
    # macOS 10.13 (High Sierra)
    sudo /Applications/Install\ macOS\ High\ Sierra.app/Contents/Resources/createinstallmedia --volume /Volumes/USB --applicationpath /Applications/Install\ macOS\ High\ Sierra.app
    
    # macOS 10.12 (Sierra)
    sudo /Applications/Install\ macOS\ Sierra.app/Contents/Resources/createinstallmedia --volume /Volumes/USB --applicationpath /Applications/Install\ macOS\ Sierra.app
    
    # OS X 10.11 (El Capitan)
    sudo /Applications/Install\ OS\ X\ El\ Capitan.app/Contents/Resources/createinstallmedia --volume /Volumes/USB --applicationpath /Applications/Install\ OS\ X\ El\ Capitan.app
    
    # OS X 10.10 (Yosemite)
    sudo /Applications/Install\ OS\ X\ Yosemite.app/Contents/Resources/createinstallmedia --volume /Volumes/USB --applicationpath /Applications/Install\ OS\ X\ Yosemite.app
    
    
    
    
    
    
    
    
      * For confirmation before erasing the drive, remove –-nointeraction from the
      command.
    
    
      * The optional –-downloadassets flag is new in macOS 10.14 (Mojave). It
      downloads assets which may be required during installation, like updates.
    
    
      * The –-applicationpath flag is deprecated since macOS 10.14 (Mojave) and
      will throw an error if used.
    
    
    
    
    #### 
    
    
    
    
    
    
    
    
    
    Version
    Codename
    Download
    
    
    
    
    
    
    
    Mac OS X 10.0
    
    
    Cheetah
    
    
    n/a
    
    
    
    
    
    
    Mac OS X 10.1
    
    
    Puma
    
    
    n/a
    
    
    
    
    
    
    Mac OS X 10.2
    
    
    Jaguar
    
    
    n/a
    
    
    
    
    
    
    Mac OS X 10.3
    
    
    Panther
    
    
    n/a
    
    
    
    
    
    
    Mac OS X 10.4
    
    
    Tiger
    
    
    n/a
    
    
    
    
    
    
    Mac OS X 10.5
    
    
    Leopard
    
    
    n/a
    
    
    
    
    
    
    Mac OS X 10.6
    
    
    Snow Leopard
    
    
    n/a
    
    
    
    
    
    
    Mac OS X 10.7
    
    
    Lion
    
    
    [Direct Download](https://updates.cdn-apple.com/2021/macos/041-7683-20210614-E610947E-C7CE-46EB-8860-D26D71F0D3EA/InstallMacOSX.dmg)
    
    
    
    
    
    
    OS X 10.8
    
    
    Mountain Lion
    
    
    [Direct Download](https://updates.cdn-apple.com/2021/macos/031-0627-20210614-90D11F33-1A65-42DD-BBEA-E1D9F43A6B3F/InstallMacOSX.dmg)
    
    
    
    
    
    
    OS X 10.9
    
    
    Mavericks
    
    
    n/a
    
    
    
    
    
    
    OS X 10.10
    
    
    Yosemite
    
    
    [Direct Download](http://updates-http.cdn-apple.com/2019/cert/061-41343-20191023-02465f92-3ab5-4c92-bfe2-b725447a070d/InstallMacOSX.dmg)
    
    
    
    
    
    
    OS X 10.11
    
    
    El Capitan
    
    
    [Direct Download](http://updates-http.cdn-apple.com/2019/cert/061-41424-20191024-218af9ec-cf50-4516-9011-228c78eda3d2/InstallMacOSX.dmg)
    
    
    
    
    
    
    macOS 10.12
    
    
    Sierra
    
    
    [Direct Download](http://updates-http.cdn-apple.com/2019/cert/061-39476-20191023-48f365f4-0015-4c41-9f44-39d3d2aca067/InstallOS.dmg)
    
    
    
    
    
    
    macOS 10.13
    
    
    High Sierra
    
    
    [App Store](https://apps.apple.com/de/app/macos-high-sierra/id1246284741)
    
    
    
    
    
    
    macOS 10.14
    
    
    Mojave
    
    
    [App Store](https://apps.apple.com/de/app/macos-mojave/id1398502828)
    
    
    
    
    
    
    macOS 10.15
    
    
    Catalina
    
    
    [App Store](https://apps.apple.com/de/app/macos-catalina/id1466841314)
    
    
    
    
    
    
    macOS 11
    
    
    Big Sur
    
    
    [App Store](https://apps.apple.com/de/app/macos-big-sur/id1526878132)
    
    
    
    
    
    
    macOS 12
    
    
    Monterey
    
    
    [App Store](https://apps.apple.com/de/app/macos-monterey/id1576738294)
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    
    #### 
    
    
    
    
    
    sudo kextload -b com.apple.driver.ExampleBundle
    
    
    
    
    
    
    #### 
    
    
    
    
    
    sudo kextunload -b com.apple.driver.ExampleBundle
    
    
    
    
    
    
    ### 
    
    
    
    
    Please see [this file](launchagents.md).
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    To be independent of OS X version, this relies on locate to find
    lsregister. If you do not have your locate database built yet, do
    it.
    
    
    
    
    
    sudo $(locate lsregister) -kill -seed -r
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    sudo defaults write /Library/Preferences/com.apple.loginwindow LoginwindowText "Your text"
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    
    #### 
    
    
    
    
    
    # One time
    vm_stat
    
    # Table of data, repeat 10 times total, 1 second wait between each poll
    vm_stat -c 10 1
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    # Disable
    launchctl unload -w /System/Library/LaunchAgents/com.apple.notificationcenterui.plist && \
    killall -9 NotificationCenter
    
    # Enable (Default)
    launchctl load -w /System/Library/LaunchAgents/com.apple.notificationcenterui.plist
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    qlmanage -p /path/to/file
    
    
    
    
    
    
    ### 
    
    
    
    
    See also: Apple Remote Desktop.
    
    
    
    
    #### 
    
    
    
    
    When logging into a Mac remotely via Apple Remote Desktop or VNC, you are
    sometimes required to enter your password a second time after connecting to the
    Mac. While you can disable this behavior, it is explicitly not recommend to
    turn this functionality off unless you are certain that no one else will be
    able to access your Mac physically when you are away.
    
    
    
    
    
    # Disable
    sudo defaults write /Library/Preferences/com.apple.RemoteManagement.plist RestoreMachineState -bool false
    
    # Enable (Default)
    sudo defaults write /Library/Preferences/com.apple.RemoteManagement.plist RestoreMachineState -bool true
    
    
    
    
    
    
    #### 
    
    
    
    
    
    # Status
    sudo systemsetup -getremoteappleevents
    
    # Enable
    sudo systemsetup -setremoteappleevents on
    
    # Disable (Default)
    sudo systemsetup -setremoteappleevents off
    
    
    
    
    
    
    ### 
    
    
    
    
    
    # Enable
    dsenableroot
    
    # Disable (Default)
    dsenableroot -d
    
    
    
    
    
    
    ### 
    
    
    
    
    
    # Status
    nvram boot-args
    
    # Enable
    sudo nvram boot-args="-x"
    
    # Disable (Default)
    sudo nvram boot-args=""
    
    
    
    
    
    
    ### 
    
    
    
    
    Significantly improve the now rather slow animation in save dialogs.
    
    
    
    
    
    defaults write NSGlobalDomain NSWindowResizeTime .001
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    Takes a screenshot as JPEG after 3 seconds and displays in Preview.
    
    
    
    
    
    screencapture -T 3 -t jpg -P delayedpic.jpg
    
    
    
    
    
    
    #### 
    
    
    
    
    Sets location to ~/Desktop.
    
    
    
    
    
    defaults write com.apple.screencapture location ~/Desktop && \
    killall SystemUIServer
    
    
    
    
    
    
    #### 
    
    
    
    
    Sets format to png. Other options are bmp, gif, jpg, jpeg, pdf,
    tiff.
    
    
    
    
    
    defaults write com.apple.screencapture type -string "png"
    
    
    
    
    
    
    #### 
    
    
    
    
    
    defaults write com.apple.screencapture disable-shadow -bool true && \
    killall SystemUIServer
    
    
    
    
    
    
    #### 
    
    
    
    
    Date and time remain unchanged.
    
    
    
    
    
    defaults write com.apple.screencapture name "Example name" && \
    killall SystemUIServer
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    installer -pkg /path/to/installer.pkg -target /
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    This may or may not work, depending on the age of the machine.
    
    
    
    
    
    # Enable
    defaults write com.apple.sidecar.display AllowAllDevices -bool true && \
    defaults write com.apple.sidecar.display hasShownPref -bool true
    
    # Disable (Default)
    defaults delete com.apple.sidecar.display
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    The identifier can be found via softwareupdate --list. In the example below,
    being on macOS 10.14 (Mojave), will ignore all update prompts to macOS 10.15
    (Catalina), since the latter removes 32-bit support.
    
    
    
    
    
    sudo /usr/sbin/softwareupdate --ignore "macOS Catalina"
    
    
    
    
    
    
    #### 
    
    
    
    
    
    
    #### 
    
    
    
    
    Set to check daily instead of weekly.
    
    
    
    
    
    defaults write com.apple.SoftwareUpdate ScheduleFrequency -int 1
    
    
    
    
    
    
    #### 
    
    
    
    
    
    sudo softwareupdate --list
    
    
    
    
    
    
    #### 
    
    
    
    
    This should only be done for testing purposes or unmanaged clients. To use
    network-wide, either correctly set up DNS along with [Apple SUS
    service](http://krypted.com/mac-security/using-the-software-update-service-on-mountain-lion-server/)
    and bind your clients via OpenDirectory. Alternatively, use
    [Reposado](https://github.com/wdas/reposado) together with correct network DNS
    settings to make resolution transparent.
    [Margarita](https://github.com/jessepeterson/margarita) looks nice to have as
    well.
    
    
    
    
    
    # Use own SUS
    sudo defaults write /Library/Preferences/com.apple.SoftwareUpdate CatalogURL http://su.example.com:8088/index.sucatalog
    
    # Reset to Apple SUS
    sudo defaults delete /Library/Preferences/com.apple.SoftwareUpdate CatalogURL
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    There are several ways to obtain different levels of detail.
    
    
    
    
    
    
    
    system_profiler SPSoftwareDataType
    
    
    
    
    
    
    
    defaults read loginwindow SystemVersionStampAsString
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    # Disable
    mdutil -i off -d /path/to/volume
    
    # Enable (Default)
    mdutil -i on /path/to/volume
    
    
    
    
    
    
    #### 
    
    
    
    
    
    mdutil -E /path/to/volume
    
    
    
    
    
    
    #### 
    
    
    
    
    
    mdfind -name 'searchterm'
    
    
    
    
    
    
    #### 
    
    
    
    
    
    
    ### 
    
    
    
    
    Reboot while holding Cmd + R and open the Terminal
    application. You will need to reboot for the commands to take effect.
    
    
    
    
    
    # Status
    csrutil status
    
    # Enable (Default)
    csrutil enable
    
    # Disable
    csrutil disable
    
    
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    
    sudo systemsetup -listtimezones
    
    
    
    
    
    
    #### 
    
    
    
    
    
    sudo systemsetup -settimezone Europe/Berlin
    
    
    
    
    
    
    #### 
    
    
    
    
    
    # Status
    sudo systemsetup getusingnetworktime
    
    # Enable (Default)
    sudo systemsetup setusingnetworktime on
    
    # Disable
    sudo systemsetup setusingnetworktime off
    
    
    
    
    
    
    #### 
    
    
    
    
    
    # System Preferences > Date & Time > Time options
    # Analogue
    sudo defaults write com.apple.menuextra.clock IsAnalog -bool true
    # Digital (Default)
    sudo defaults write com.apple.menuextra.clock IsAnalog -bool false
    
    # System Preferences > Date & Time > Flash the time separators
    # Enable
    sudo defaults write com.apple.menuextra.clock FlashDateSeparators -bool true
    # Disable (Default)
    sudo defaults write com.apple.menuextra.clock FlashDateSeparators -bool false
    
    # Thu 18 Aug 23:46:18
    # System Preferences > Date & Time > Display time with seconds - Checked [:ss]
    # System Preferences > Date & Time > Use a 24-hour clock - Checked [HH:mm]
    # System Preferences > Date & Time > Show AM/PM - Unchecked
    # System Preferences > Date & Time > Show the day of the week - Checked [EEE]
    # System Preferences > Date & Time > Show date - Checked [d MMM]
    sudo defaults write com.apple.menuextra.clock DateFormat -string "EEE d MMM HH:mm:ss"
    
    # Thu 23:46:18
    # System Preferences > Date & Time > Display time with seconds - Checked [:ss]
    # System Preferences > Date & Time > Use a 24-hour clock - Checked [HH:mm]
    # System Preferences > Date & Time > Show AM/PM - Unchecked
    # System Preferences > Date & Time > Show the day of the week - Checked [EEE]
    # System Preferences > Date & Time > Show date - Unchecked
    sudo defaults write com.apple.menuextra.clock DateFormat -string "EEE HH:mm:ss"
    
    # 18 Aug 23:46:18
    # System Preferences > Date & Time > Display time with seconds - Checked [:ss]
    # System Preferences > Date & Time > Use a 24-hour clock - Checked [HH:mm]
    # System Preferences > Date & Time > Show AM/PM - Unchecked
    # System Preferences > Date & Time > Show the day of the week - Unchecked
    # System Preferences > Date & Time > Show date - Checked [d MMM]
    sudo defaults write com.apple.menuextra.clock DateFormat -string "d MMM HH:mm:ss"
    
    # 23:46:18
    # System Preferences > Date & Time > Display time with seconds - Checked [:ss]
    # System Preferences > Date & Time > Use a 24-hour clock - Checked [HH:mm]
    # System Preferences > Date & Time > Show AM/PM - Unchecked
    # System Preferences > Date & Time > Show the day of the week - Unchecked
    # System Preferences > Date & Time > Show date - Unchecked
    sudo defaults write com.apple.menuextra.clock DateFormat -string "HH:mm:ss"
    
    # Thu 18 Aug 11:46:18 pm
    # System Preferences > Date & Time > Display time with seconds - Checked [:ss]
    # System Preferences > Date & Time > Use a 24-hour clock - Unchecked
    # System Preferences > Date & Time > Show AM/PM - Checked [a]
    # System Preferences > Date & Time > Show the day of the week - Checked [EEE]
    # System Preferences > Date & Time > Show date - Checked [d MMM]
    sudo defaults write com.apple.menuextra.clock DateFormat -string "EEE d MMM h:mm:ss a"
    
    
    # Thu 11:46:18 pm
    # System Preferences > Date & Time > Display time with seconds - Checked [:ss]
    # System Preferences > Date & Time > Use a 24-hour clock - Unchecked
    # System Preferences > Date & Time > Show AM/PM - Checked [a]
    # System Preferences > Date & Time > Show the day of the week - Checked [EEE]
    # System Preferences > Date & Time > Show date - Unchecked
    sudo defaults write com.apple.menuextra.clock DateFormat -string "EEE h:mm:ss a"
    
    # 18 Aug 11:46:18 pm
    # System Preferences > Date & Time > Display time with seconds - Checked [:ss]
    # System Preferences > Date & Time > Use a 24-hour clock - Unchecked
    # System Preferences > Date & Time > Show AM/PM - Checked [a]
    # System Preferences > Date & Time > Show the day of the week - Unchecked
    # System Preferences > Date & Time > Show date - Checked [d MMM]
    sudo defaults write com.apple.menuextra.clock DateFormat -string "d MMM h:mm:ss a"
    
    # 11:46:18 pm
    # System Preferences > Date & Time > Display time with seconds - Checked [:ss]
    # System Preferences > Date & Time > Use a 24-hour clock - Unchecked
    # System Preferences > Date & Time > Show AM/PM - Checked [a]
    # System Preferences > Date & Time > Show the day of the week - Unchecked
    # System Preferences > Date & Time > Show date - Unchecked
    sudo defaults write com.apple.menuextra.clock DateFormat -string "h:mm:ss a"
    
    # Thu 18 Aug 11:46:18
    # System Preferences > Date & Time > Display time with seconds - Checked [:ss]
    # System Preferences > Date & Time > Use a 24-hour clock - Unchecked
    # System Preferences > Date & Time > Show AM/PM - Unchecked
    # System Preferences > Date & Time > Show the day of the week - Checked [EEE]
    # System Preferences > Date & Time > Show date - Checked [d MMM]
    sudo defaults write com.apple.menuextra.clock DateFormat -string "EEE d MMM h:mm:ss"
    
    # Thu 11:46:18
    # System Preferences > Date & Time > Display time with seconds - Checked [:ss]
    # System Preferences > Date & Time > Use a 24-hour clock - Unchecked
    # System Preferences > Date & Time > Show AM/PM - Unchecked
    # System Preferences > Date & Time > Show the day of the week - Checked [EEE]
    # System Preferences > Date & Time > Show date - Unchecked
    sudo defaults write com.apple.menuextra.clock DateFormat -string "EEE h:mm:ss"
    
    # 18 Aug 11:46:18
    # System Preferences > Date & Time > Display time with seconds - Checked [:ss]
    # System Preferences > Date & Time > Use a 24-hour clock - Unchecked
    # System Preferences > Date & Time > Show AM/PM - Unchecked
    # System Preferences > Date & Time > Show the day of the week - Unchecked
    # System Preferences > Date & Time > Show date - Checked [d MMM]
    sudo defaults write com.apple.menuextra.clock DateFormat -string "d MMM h:mm:ss"
    
    # 11:46:18
    # System Preferences > Date & Time > Display time with seconds - Checked [:ss]
    # System Preferences > Date & Time > Use a 24-hour clock - Unchecked
    # System Preferences > Date & Time > Show AM/PM - Unchecked
    # System Preferences > Date & Time > Show the day of the week - Unchecked
    # System Preferences > Date & Time > Show date - Unchecked
    sudo defaults write com.apple.menuextra.clock DateFormat -string "h:mm:ss"
    
    # Thu 18 Aug 23:46
    # System Preferences > Date & Time > Display time with seconds - Unchecked
    # System Preferences > Date & Time > Use a 24-hour clock - Checked [HH:mm]
    # System Preferences > Date & Time > Show AM/PM - Unchecked
    # System Preferences > Date & Time > Show the day of the week - Checked [EEE]
    # System Preferences > Date & Time > Show date - Checked [d MMM]
    sudo defaults write com.apple.menuextra.clock DateFormat -string "EEE d MMM HH:mm"
    
    # Thu 23:46
    # System Preferences > Date & Time > Display time with seconds - Unchecked
    # System Preferences > Date & Time > Use a 24-hour clock - Checked [HH:mm]
    # System Preferences > Date & Time > Show AM/PM - Unchecked
    # System Preferences > Date & Time > Show the day of the week - Checked [EEE]
    # System Preferences > Date & Time > Show date - Unchecked
    sudo defaults write com.apple.menuextra.clock DateFormat -string "EEE HH:mm"
    
    # 18 Aug 23:46
    # System Preferences > Date & Time > Display time with seconds - Unchecked
    # System Preferences > Date & Time > Use a 24-hour clock - Checked [HH:mm]
    # System Preferences > Date & Time > Show AM/PM - Unchecked
    # System Preferences > Date & Time > Show the day of the week - Unchecked
    # System Preferences > Date & Time > Show date - Checked [d MMM]
    sudo defaults write com.apple.menuextra.clock DateFormat -string "d MMM HH:mm"
    
    # 23:46
    # System Preferences > Date & Time > Display time with seconds - Unchecked
    # System Preferences > Date & Time > Use a 24-hour clock - Checked [HH:mm]
    # System Preferences > Date & Time > Show AM/PM - Unchecked
    # System Preferences > Date & Time > Show the day of the week - Unchecked
    # System Preferences > Date & Time > Show date - Unchecked
    sudo defaults write com.apple.menuextra.clock DateFormat -string "HH:mm"
    
    # Thu 18 Aug 11:46 pm
    # System Preferences > Date & Time > Display time with seconds - Unchecked
    # System Preferences > Date & Time > Use a 24-hour clock - Unchecked
    # System Preferences > Date & Time > Show AM/PM - Checked [a]
    # System Preferences > Date & Time > Show the day of the week - Checked [EEE]
    # System Preferences > Date & Time > Show date - Checked [d MMM]
    sudo defaults write com.apple.menuextra.clock DateFormat -string "EEE d MMM h:mm a"
    
    # Thu 11:46 pm
    # System Preferences > Date & Time > Display time with seconds - Unchecked
    # System Preferences > Date & Time > Use a 24-hour clock - Unchecked
    # System Preferences > Date & Time > Show AM/PM - Checked [a]
    # System Preferences > Date & Time > Show the day of the week - Checked [EEE]
    # System Preferences > Date & Time > Show date - Unchecked
    sudo defaults write com.apple.menuextra.clock DateFormat -string "EEE h:mm a"
    
    # 18 Aug 11:46 pm
    # System Preferences > Date & Time > Display time with seconds - Unchecked
    # System Preferences > Date & Time > Use a 24-hour clock - Unchecked
    # System Preferences > Date & Time > Show AM/PM - Checked [a]
    # System Preferences > Date & Time > Show the day of the week - Unchecked
    # System Preferences > Date & Time > Show date - Checked [d MMM]
    sudo defaults write com.apple.menuextra.clock DateFormat -string "d MMM h:mm a"
    
    # 11:46 pm
    # System Preferences > Date & Time > Display time with seconds - Unchecked
    # System Preferences > Date & Time > Use a 24-hour clock - Unchecked
    # System Preferences > Date & Time > Show AM/PM - Checked [a]
    # System Preferences > Date & Time > Show the day of the week - Unchecked
    # System Preferences > Date & Time > Show date - Unchecked
    sudo defaults write com.apple.menuextra.clock DateFormat -string "h:mm a"
    
    # Thu 18 Aug 11:46
    # System Preferences > Date & Time > Display time with seconds - Unchecked
    # System Preferences > Date & Time > Use a 24-hour clock - Unchecked
    # System Preferences > Date & Time > Show AM/PM - Unchecked
    # System Preferences > Date & Time > Show the day of the week - Checked [EEE]
    # System Preferences > Date & Time > Show date - Checked [d MMM]
    sudo defaults write com.apple.menuextra.clock DateFormat -string "EEE d MMM h:mm"
    
    # Thu 11:46
    # System Preferences > Date & Time > Display time with seconds - Unchecked
    # System Preferences > Date & Time > Use a 24-hour clock - Unchecked
    # System Preferences > Date & Time > Show AM/PM - Unchecked
    # System Preferences > Date & Time > Show the day of the week - Checked [EEE]
    # System Preferences > Date & Time > Show date - Unchecked
    sudo defaults write com.apple.menuextra.clock DateFormat -string "EEE h:mm"
    
    # 18 Aug 11:46
    # System Preferences > Date & Time > Display time with seconds - Unchecked
    # System Preferences > Date & Time > Use a 24-hour clock - Unchecked
    # System Preferences > Date & Time > Show AM/PM - Unchecked
    # System Preferences > Date & Time > Show the day of the week - Unchecked
    # System Preferences > Date & Time > Show date - Checked [d MMM]
    sudo defaults write com.apple.menuextra.clock DateFormat -string "d MMM h:mm"
    
    # 11:46
    # System Preferences > Date & Time > Display time with seconds - Unchecked
    # System Preferences > Date & Time > Use a 24-hour clock - Unchecked
    # System Preferences > Date & Time > Show AM/PM - Unchecked
    # System Preferences > Date & Time > Show the day of the week - Unchecked
    # System Preferences > Date & Time > Show date - Unchecked
    sudo defaults write com.apple.menuextra.clock DateFormat -string "h:mm"
    
    # Apply changes immediately
    sudo killall SystemUIServer
    
    
    
    
    
    
    ([Source](https://github.com/tech-otaku/macos-defaults/blob/master/date-time.sh))
    
    
    
    
    ## 
    
    
    
    
    #### 
    
    
    
    
    Rings the terminal bell (if enabled) and puts a badge on it.
    
    
    
    
    
    
    ### 
    
    
    
    
    
    
      * [Alacritty](https://github.com/jwilm/alacritty) - Cross-platform,
      GPU-accelerated terminal emulator.
    
    
      * [iTerm2](https://iterm2.com) - A better Terminal.app.
    
    
      * [kitty](https://sw.kovidgoyal.net/kitty/) - Modern, GPU-accelerated terminal
      emulator.
    
    
    
    
    ### 
    
    
    
    
    #### 
    
    
    
    
    Install the latest version and set as current user's default shell:
    
    
    
    
    
    brew install bash && \
    echo $(brew --prefix)/bin/bash | sudo tee -a /etc/shells && \
    chsh -s $(brew --prefix)/bin/bash
    
    
    
    
    
    
    
    
      * [Homepage](https://www.gnu.org/software/bash/) - The default shell for OS X
      and most other Unix-based operating systems.
    
    
      * [Bash-it](https://github.com/Bash-it/bash-it) - Community Bash framework,
      like Oh My Zsh for Bash.
    
    
    
    
    #### 
    
    
    
    
    Install the latest version and set as current user's default shell:
    
    
    
    
    
    brew install fish && \
    echo $(brew --prefix)/bin/fish | sudo tee -a /etc/shells && \
    chsh -s $(brew --prefix)/bin/fish
    
    
    
    
    
    
    
    
      * [Homepage](http://fishshell.com) - A smart and user-friendly command line
      shell for OS X, Linux, and the rest of the family.
    
    
      * [The Fishshell Framework](https://github.com/oh-my-fish/oh-my-fish) -
      Provides core infrastructure to allow you to install packages which extend or
      modify the look of your shell.
    
    
      * [Installation & Configuration
      Tutorial](https://github.com/ellerbrock/fish-shell-setup-osx) - How to Setup
      Fish Shell with Fisherman, Powerline Fonts, iTerm2 and Budspencer Theme on OS
      X.
    
    
    
    
    #### 
    
    
    
    
    Install the latest version and set as current user's default shell:
    
    
    
    
    
    brew install zsh && \
    sudo sh -c 'echo $(brew --prefix)/bin/zsh >> /etc/shells' && \
    chsh -s $(brew --prefix)/bin/zsh
    
    
    
    
    
    
    
    
      * [Homepage](http://www.zsh.org) - Zsh is a shell designed for interactive use,
      although it is also a powerful scripting language.
    
    
      * [Oh My Zsh](http://ohmyz.sh) - An open source, community-driven framework for
      managing your Zsh configuration.
    
    
      * [Prezto](https://github.com/sorin-ionescu/prezto) - A speedy Zsh framework.
      Enriches the command line interface environment with sane defaults, aliases,
      functions, auto completion, and prompt themes.
    
    
      * [zgen](https://github.com/tarjoilija/zgen) - Another open source framework
      for managing your zsh configuration. Zgen will load oh-my-zsh compatible
      plugins and themes and has the advantage of both being faster and
      automatically cloning any plugins used in your configuration for you.
    
    
    
    
    ### 
    
    
    
    
    
    
      * [Anonymous Pro](http://www.marksimonson.com/fonts/view/anonymous-pro) - A
      family of four fixed-width fonts designed with coding in mind.
    
    
      * [Codeface](https://github.com/chrissimpkins/codeface) - A gallery and
      repository of monospaced fonts for developers.
    
    
      * [DejaVu Sans Mono](https://dejavu-fonts.github.io/) - A font family based on
      the Vera Fonts.
    
    
      * [Fantasque Sans Mono](https://github.com/belluzj/fantasque-sans) - Designed
      with functionality in mind, and with some wibbly-wobbly handwriting-like
      fuzziness that makes it unassumingly cool.
    
    
      * [Hack](http://sourcefoundry.org/hack/) - Hack is hand groomed and optically
      balanced to be your go-to code face.
    
    
      * [Inconsolata](http://levien.com/type/myfonts/inconsolata.html) -  A monospace
      font, designed for code listings and the like.
    
    
      * [Input](http://input.fontbureau.com) - A flexible system of fonts designed
      specifically for code.
    
    
      * [Meslo](https://github.com/andreberg/Meslo-Font) - Customized version of
      Apple's Menlo font.
    
    
      * [Operator Mono](https://www.typography.com/fonts/operator/overview/) - A
      surprisingly usable alternative take on a monospace font (commercial).
    
    
      * [Powerline Fonts](https://github.com/powerline/fonts) - Repo of patched fonts
      for the Powerline plugin.
    
    
      * [Source Code Pro](https://adobe-fonts.github.io/source-code-pro/) - A
      monospaced font family for user interfaces and coding environments.
    
    
    
    
    ## 
    
    
    
    
    ### 
    
    
    
    
    
    
    
    
    
    Version
    Codename
    Release Date
    Most Recent Version
    
    
    
    
    
    
    
    Rhapsody Developer Release
    
    
    Grail1Z4 / Titan1U
    
    
    August 31, 1997
    
    
    DR2 (May 14, 1998)
    
    
    
    
    
    
    Mac OS X Server 1.0
    
    
    Hera
    
    
    March 16, 1999
    
    
    1.2v3 (October 27, 2000)
    
    
    
    
    
    
    Mac OS X Developer Preview
    
    
    n/a
    
    
    March 16, 1999
    
    
    DP4 (April 5, 2000)
    
    
    
    
    
    
    Mac OS X Public Beta
    
    
    Kodiak
    
    
    September 13, 2000
    
    
    n/a
    
    
    
    
    
    
    Mac OS X 10.0
    
    
    Cheetah
    
    
    March 24, 2001
    
    
    10.0.4 (June 22, 2001)
    
    
    
    
    
    
    Mac OS X 10.1
    
    
    Puma
    
    
    September 25, 2001
    
    
    10.1.5 (June 6, 2002)
    
    
    
    
    
    
    Mac OS X 10.2
    
    
    Jaguar
    
    
    August 24, 2002
    
    
    10.2.8 (October 3, 2003)
    
    
    
    
    
    
    Mac OS X 10.3
    
    
    Panther
    
    
    October 24, 2003
    
    
    10.3.9 (April 15, 2005)
    
    
    
    
    
    
    Mac OS X 10.4
    
    
    Tiger
    
    
    April 29, 2005
    
    
    10.4.11 (November 14, 2007)
    
    
    
    
    
    
    Mac OS X 10.5
    
    
    Leopard
    
    
    October 26, 2007
    
    
    10.5.8 (August 5, 2009)
    
    
    
    
    
    
    Mac OS X 10.6
    
    
    Snow Leopard
    
    
    August 28, 2009
    
    
    10.6.8 v1.1 (July 25, 2011)
    
    
    
    
    
    
    Mac OS X 10.7
    
    
    Lion
    
    
    July 20, 2011
    
    
    10.7.5 (September 19, 2012)
    
    
    
    
    
    
    OS X 10.8
    
    
    Mountain Lion
    
    
    July 25, 2012
    
    
    10.8.5 (12F2560) (August 13, 2015)
    
    
    
    
    
    
    OS X 10.9
    
    
    Mavericks
    
    
    October 22, 2013
    
    
    10.9.5 (13F1911) (July 18, 2016)
    
    
    
    
    
    
    OS X 10.10
    
    
    Yosemite
    
    
    October 16, 2014
    
    
    10.10.5 (14F2511) (July 19, 2017)
    
    
    
    
    
    
    OS X 10.11
    
    
    El Capitan
    
    
    September 30, 2015
    
    
    10.11.6 (15G22010) (July 9, 2018)
    
    
    
    
    
    
    macOS 10.12
    
    
    Sierra
    
    
    September 20, 2016
    
    
    10.12.6 (16G2136) (September 26, 2019)
    
    
    
    
    
    
    macOS 10.13
    
    
    High Sierra
    
    
    September 25, 2017
    
    
    10.13.6 (17G14042) (November 12, 2020)
    
    
    
    
    
    
    macOS 10.14
    
    
    Mojave
    
    
    September 24, 2018
    
    
    10.14.6 (18G9323) (July 21, 2021)
    
    
    
    
    
    
    macOS 10.15
    
    
    Catalina
    
    
    October 7, 2019
    
    
    10.15.7 (19H1323) (July 21, 2021)
    
    
    
    
    
    
    macOS 11
    
    
    Big Sur
    
    
    November 12, 2020
    
    
    11.6 (20G165) (September 13, 2021)
    
    
    
    
    
    
    macOS 12
    
    
    Monterey
    
    
    October 25, 2021
    
    
    12.4 (21F79) (May 16, 2022)
    
    
    
    
    
    
    macOS 13
    
    
    Ventura
    
    
    tba
    
    
    13.0 beta 3 (22A5295h) (July 6, 2022)
    
    
    
    
    
    
    ## 
    
    
    
    
    ![Creative Commons License](https://licensebuttons.net/l/by-sa/4.0/88x31.png)  
    This work is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/).
    
    
    
    
    


___

#article 