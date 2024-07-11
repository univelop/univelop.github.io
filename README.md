# univelop.github.io

Univelop Docs

# How to work on this repository

## Install Git

Firstly, to use this repository properly, you need to install git on your computer.
For this, you can just search for 'install git' on the internet, find a download on the [offical page of git](https://git-scm.com/) or use [this](https://github.com/git-guides/install-git) tutorial provided by GitHub.

## Install an Editor

To create and maintain pages of this repository, you need an text editor. We recommend 'Visual Studio Code' since it provides many extensions and has an embedded git support.
To install, just search for 'Visual Studio Code' on the internet or use the [official page](https://code.visualstudio.com/).
On the official page, you can also find a documentation and with it a how-to-get-started tutorial for your OS.

### Formatting

We also strongly recommend the installation of a formatter, that will ensure that e.g. Tables look nice and are easy to read. For this, we recommend the installation of the 'Prettier' extension. You can find it in the [extension store of Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

## Use this repository locally

Follow the [official documentation](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) or use the instrucion below.

After the installation process you probably want to start editing pages. For this, you first have to copy this repository to your computer.
Having this project open, you can 'clone' it with the provided url (see image below):

1. Click on the green code button.
2. Copy the provided url under the 'HTTPS'

![howtoclone](https://github.com/univelop/univelop.github.io/assets/81417798/7f9bad65-058b-4b52-aca0-1fc009ed116e)

3. Clone the repository into a local folder via command line interface.
    - For Windows users: Open the folder where you want the repository to be located. Press right-click and find the action 'Git Bash Here'. Now, a command line interface should be open. Into this interface, type 'git clone' followed by a space and the url to the repository you copied earlier.
    - For MacOS/Linux users: Open a terminal inside the folder where you want the repository to be located. Into the terminal, type 'git clone' followed by a space and the url to the repository you copied earlier.
    - When this is done: Press enter. Sometimes, you have to login with your GitHub account to validate your rights. The repository should be located inside your folder.
4. Open the folder with Visual Studio Code. Open your Editor, and open the cloned repository as a folder with your editor.

**Now you're ready to work!**

## Work with GitHub

To understand how branches work, what pull requests are etc. it is recommended to watch a tutorial on YouTube about GitHub basics or read the [official GitHub documentation](https://docs.github.com/en).

# Run the whole website on your computer

When creating changes, you sometimes want to check if these are looking good in action, maybe on mobile or in the web. For this, you have to run the repository on your computer.

## Setup Jekyll and dependencies

For this to work, you need to setup ['Jekyll'](https://jekyllrb.com/docs/). _Important: Ruby-Version must be below 3.2_. This can be quite tricky on Windows, but a lot of help and tutorials can be found on the internet.

To start the project locally, open a terminal with the current location being the repository.
Then, execute the command 'bundle exec jekyll serve'. This can take a while, if the command is done, a link gets displayed.
Open it with your browser to see the website with your local changes.
