---
tags:: medium
created: 2022-08-05T17:16:30 (UTC -04:00)
tags: []
source: https://medium.com/macoclock/how-to-make-your-macos-terminal-look-as-awesome-as-mine-in-2021-9e7351d39bc7
author: Charlie Levine
---

# How to Make Your MacOS Terminal Look as Awesome as Mine in 2021 | by Charlie Levine | Mac O’Clock | Medium

---
## A Highly Opinionated Guide

![[1BVeCLu_koTTnjc8oIvyWRw.png]]

Screenshot by Author

If you want your terminal to look as cool as mine, then you came to the right place. As a work-from-home developer, I look at my terminal just about every day. Since the default macOS terminal is awfully bland, I went ahead and gave it some personality. The following guide will walk you through the steps needed to make your terminal look exactly like mine, with the help of some amazing open-source projects.

## Install Homebrew

Homebrew is [**The Missing Package Manager for macOS**](https://brew.sh/).

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)
```

## Install Prezto

[**Prezto — Instantly Awesome Zsh**](https://github.com/sorin-ionescu/prezto)

```
git clone --recursive https://github.com/sorin-ionescu/prezto.git "${ZDOTDIR:-$HOME}/.zprezto"
```

First, we need to remove the default `~/.zshrc` file.

```
rm -f ~/.zshrc
```

Now we can initialize our Prezto configuration files.

```
setopt EXTENDED_GLOBfor rcfile in "${ZDOTDIR:-$HOME}"/.zprezto/runcoms/^README.md(.N); do  ln -s "$rcfile" "${ZDOTDIR:-$HOME}/.${rcfile:t}"done
```

We need to expose Homebrew to our PATH variable in ZSH. Do this by adding `export PATH=/opt/homebrew/bin:$PATH` at the end of our new `~/.zshrc` file.

![[1fJfYmH_-5FCJKJSeKUbGlA.png]]

Screenshot by Author

## Set Your Prezto Style

Open up `~/.zpreztorc` and find where it says:

```
# Set the prompt theme to load.# Setting it to 'random' loads a random theme.# Auto set to 'off' on dumb terminals.
```

Below it, change “sorin” to “steeef.”

```
zstyle ':prezto:module:prompt' theme 'steeef'
```

## Add Some Prezto Modules

Prezto comes with many useful modules.

In that same `~/.zpreztorc` file, scroll down, and find where it says:

```
# Set the Prezto modules to load (browse modules).# The order matters.
```

Below it, change the list of modules to the following.

```
'environment' \  'terminal' \  'editor' \  'history' \  'directory' \  'spectrum' \  'utility' \  'completion' \  'prompt' \  'git' \  'completion' \  'syntax-highlighting' \  'history-substring-search'
```

You can read about these modules [**here**](https://github.com/sorin-ionescu/prezto/tree/master/modules).

Long story short, they will make your life a lot easier.

## Install Fira Code

Fira Code is [**a free monospaced font with programming ligatures**](https://github.com/tonsky/FiraCode).

Download the font from its official GitHub repository: [https://github.com/tonsky/FiraCode/blob/master/README.md](https://github.com/tonsky/FiraCode/blob/master/README.md).

Taken from the [official installation guide](https://github.com/tonsky/FiraCode/wiki/Installing):

In the [downloaded TTF folder](https://github.com/tonsky/FiraCode/tree/master/distr/ttf):

1.  Select all font files
2.  Right-click and select `Open` (alternatively `Open With Font Book`)
3.  Select “Install Font”

## Install iTerm2

iTerm2 is [**a terminal emulator for macOS that does amazing things**](https://iterm2.com/).

```
brew install --cask iterm2
```

## Set the Font to Fira Code

Open iTerm2>Preferences>Profiles>Text>Font.

Then set the font and select “Use ligatures.”

![[1UQdgNEvZGLWLIPFWhOWjgQ.png]]

Screenshot by Author

## Set Login Message to Prezto

Open iTerm2>Preferences>Profiles>General>Command.

Then change “Login Shell” to “Command” and set it to `zsh --login`.

This will enable iTerm2 to read `~/.zlogin` from Prezto on startup.

![[19D_r6vaXsk5D_wQVG1HbsA.png]]

Screenshot by Author

## \*OPTIONAL\* Enable Scrolling for Nano Text Editor

Open iTerm2>Preferences>Advanced

Then change “Scroll wheel sends arrow keys when in alternate screen mode” to “Yes.”

![[1cfszUSmewJ_2oAW_MFxLIQ.png]]

Screenshot by Author

## Create the Login Message

First, we need to install a few Homebrew packages.

## Figlet

Figlet is [**a program for making large letters out of ordinary text**](http://www.figlet.org/).

```
brew install figlet
```

## Cowsay

Cowsay enables [**configurable talking characters in ASCII art**](https://github.com/tnalpgge/rank-amateur-cowsay/blob/master/cows/bong.cow).

```
brew install cowsay
```

## Lolcat

Lolcat enables [**rainbow text**](https://github.com/busyloop/lolcat).

```
brew install lolcat
```

Now that we have these masterpieces installed, we can put them together beautifully to compose our login message. Do this by adding `figlet TERMINAL | cowsay -n turtle | lolcat` at the end of our `~/.zlogin` file.

Now close out of iTerm 2 and reopen it. That’s it!

## Make It Your Own

Browse available characters [**here**](https://github.com/tnalpgge/rank-amateur-cowsay/tree/master/cows).

For example, change your login message to `figlet roar | cowsay -n dragon | lolcat` to get the following.

![[1DphaCiYvT0EzVPj0t4oP4w.png]]

Screenshot by Author

I hope your terminal looks as cool as mine now! Let me know if this guide helped you out.

Thank you for reading!

**Check out my other Mac-related articles!**
