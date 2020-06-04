Things to install

Terminal

Terminal.app (installed with MacOS) or [iTerm](https://www.iterm2.com/)

[XCode Command line tools](https://developer.apple.com/library/archive/technotes/tn2339/_index.html)
`xcode-select --install`

Text editor

[Atom](https://atom.io) or [VSCode](https://code.visualstudio.com)
    
[Homebrew](https://brew.sh/)
`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`

[NodeJS](https://nodejs.org)
`brew install node`

[Yarn](https://yarnpkg.org)
`brew install yarn`


[MAMP](https://mamp.info)
Apache web server and PHP programming language

[Git](https://git-scm.org)
    * `brew install git`

Identity and Keys

Generate a key

`ssh-keygen -t ed25519`

Show your public key

`cat ~/.ssh/id_ed25519.pub`

Copy public key to clipboard

`cat ~/.ssh/id_ed25519.pub | pbcopy`

Test key-based authentication with GitHub

`ssh -T git@github.com`

https://secure.vexxhost.com/billing/index.php/knowledgebase/171/How-can-I-generate-SSH-keys-on-Mac-OS-X.html


The Shell

* clear
* pwd
* man
* history
* ls
* cd
* mkdir
* touch

A directory for your code

```
mkdir ~/Sites
cd ~/Sites
```

Tell Git your name and email address

```
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

Set MAMP htdocs to `~/Sites` (default is `/Applications/MAMP/htdocs`)

Clone a repository

`git clone git@github.com:public-office/workshop.git`

Change into the new directory

`cd workshop`

Move "up" a directory, to it's parent

`cd ..`

Git commands

`git status`

`git add .`

`git status`

`git commit -m 'A description of what I did'`