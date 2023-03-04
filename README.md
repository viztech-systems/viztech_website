# Website Hosting & Setup Details

## Database details

- Login to https://www.mongodb.com/ as a `viztech2021@gmail.com` (Note: use "Sign in with Google")
- After successful login, you will see `Clustor0`, in this, click the button `Browse Collection`.
- Now you can see list of databases with their collections.
  - `DB name: viztech_systems`
- Expand the database "viztech_systems", you will list of collections.
  - `collections name: admins, approvedresumes, jobs, resumes`

## AWS details

- Login on AWS as a `viztech2021@gmail.com`
- Search S3. Here you will a bucket `viztechresumes`. In this all CVs are stored.
- Search Amplify. Here you will see list of deployed websites.

## GitHub details

- Login as a `viztech2021@gmail.com`
- You will find the repositories of hosted websites on AWS.
- `repositories names: KreativeSearch-website, viztech_website`
  (Note: If you push changes to master branch then it will affect the hosted website also because these branches are connected to the AWS amplify).

## Domain details

- `kreativesearch.com` - this domain is purchased from `lcn.com`
- `viztech.in`- this domain purchased from `domains.google.com` (login as hr@viztech.in)

## Very Important

- If you change your domain then you have to configure it from AWS amplify also.
- To do that, search Amplify on AWS search bar, select the hosted website's page.
- You can see `Domain management` on the left menu panel.
- And also you have to change domain value in the env also. On the same left panel, you go to the `Environment variables`. Change the value of `WEBSITE_URL`.

## How to run website locally

- First of all, if you are about to run the website for first time, then you need to install some packages. So hit the command `npm install` on terminal
- Then hit the command `npm run dev` on terminal

## Website Login details

- To create new login details or in case you forgot login credentials then follow below steps
  - Install postman
  - open new page, select `POST` method
  - Copy this url `<YOUR DOMAIN>/signup`
  - send your new login credentials in this format
    ```
    {
    "email": <YOUR EMAIL ID>,
    "password": <PASSWORD>
    }
    ```
- Now hit the `send` button. (Note: You will recieve token and result in response if user created successfully)

## Changing website contents

- To change the contents, all files are present in the folder `pages`
