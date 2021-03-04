# This is a Test project against Atlassian Login page

# System requirements

The test are developed on NodeJS version **v14.3.0**. Please install it or newer.
If you have multiple node versions there is a [binary for Windows](https://github.com/coreybutler/nvm/releases) the manage them easily.
On Mac or Linux there is [completely separated project](https://github.com/nvm-sh/nvm).

# Execution instructions

Set up the project and download the project dependencies first, so execute the ```npm install``` command. In post install phase the webdriver will be updated.

To execute the tests just open up a terminal in the project folder and execute the ```npm test -- -suite=<suite> --params.plain.user=<your_username> --params.plain.password=<your_password> --params.google.username=<your_username> --params.google.password=<your_password>``` command.

## Execution options
  Suites:
    - plain
    - google

# Troubleshooting

What if one of the following issue is come up:
  - behind a proxy:
    Turn off the proxy and unset those environment variables which configures the proxy.
    Then run again the ```npm install``` command.
