# express-nodemailer

## SETUP IN LOCAL SERVER (LOCAL COMPUTER USE ONLY)

The process to setup the app in the computer terminal is as follows:

- Go to the directory (folder) where you want to install the app;
- Type: `https://github.com/shugyoza/express-nodemailer.git`;
- Enter the express-nodemailer directory. Type: `cd express-nodemailer`

```
terminal-moniker-10% cd express-nodemailer
terminal-moniker-10% ls
README.md		package-lock.json	server.js
example.env		package.json
```

- Install dependencies, type: `npm install` . You will see something like this in your terminal afterwards:

```
terminal-moniker-10% npm install

added 61 packages, and audited 62 packages in 2s

7 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
terminal-moniker-10%
```

- If you type: `ls` again, you will see `node_modules` directory now.

```
terminal-moniker-10% ls
README.md		node_modules		package.json
example.env		package-lock.json	server.js
terminal-moniker-10%
```

- You need to create a file named: `.env` in the `express-nodemailer` directory by copying from file named `example.env` and change the variable values with email address and password for that email address. Detail as follows:
- Replace the `youremailaddress@emailprovider.com` with your own email address
- DO NOT use your original password! Instead, you have to use the Google generated password by following these steps:
  - Login to your Google account;
  - Visit `https://myaccount.google.com/`;
  - Click / tap `Security` tab;
  - Activate `2-Step Verification`. The steps are as follows:
    - Click / tap `2-Step Verification`;
    - Click / tap `Get Started`;
    - Enter your Google account original password;
    - Enter your phone number to use to get codes for verification;
    - Enter the code Google gave you through text message / phone call on the field;
    - Click / tap `TURN ON` to activate `2-Step Verification`;
  - Revisit (click / tap) `Security` tab on `https://myaccount.google.com/`;
  - Click / tap `App passwords` in the `Signing in to Google` fieldset (Google will ask you to reenter your original password);
  - Click / tap `Select app`;
  - Click / tap `Other (Custom name)` from the drop-down menu;
  - Type `expressnodemailer` in the given field (or any other name you want to for your own reference);
  - Copy the yellow-highlighted 16 (sixteen) digits password in the pop-up dialog;
- Paste the copied 16 (sixteen) digits password to replace the `sixteencharspass`.
