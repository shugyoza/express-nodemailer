# express-nodemailer

Log:

- This project was started on Aug 16, 2022 and ready to use on Aug 17, 2022 for endpoint `/sendmail` to be consumed by angular front-end application developed in this repo: https://github.com/shugyoza/plasma.git

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

- Open your IDE / Code Editor, e.g. `Visual Studio Code` in this `express-nodemailer` directory;
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
- In this `express-nodemailer` directory, type in your terminal: `npm start`

```
terminal-moniker-10% npm start

> express-nodemailer@1.0.0 start
> node server.js

Server is listening on port 3000
```

- When you see the above in your terminal, it means the app is ready to send an email if you send an HTTP POST request to `http://localhost:3000/sendmail`, provided you defined the request body;
- If you are sending the request from Postman or your front-end application, you have to include a request body as follows:

```
{
    "name": "your name",
    "email": "emailAddressThatWillReceiveThis@email.com",
    "content": "Input here any text you want to write as the content of the email"
}
```

- This application has been initially developed to support this front-end application developed in this repository: https://github.com/shugyoza/plasma.git
