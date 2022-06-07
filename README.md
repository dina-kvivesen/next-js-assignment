** JS Frameworks Course Assignment

<img width="555" alt="Skjermbilde 2022-06-07 kl  15 05 48" src="https://user-images.githubusercontent.com/71272716/172389051-1ba78582-50a7-4bf6-b327-9510ffb955b9.png">

This is a Next.js app with the following paths:

- "/"
- "/detail/:param"
- "/contact"
- "/login"
- "/admin"

*** Description
The admin section will not appear in the navigation. I used WordPress for the login functionality, and an open source API.

"/"
- Find an API that returns an array of items and single items.
- Display two properties from each result.
- Each restult should link to a detail page, passing a parameter in the URL.

"/detail/:param"
- Display tree items.

"/contact"
- Create a contact firm with validation on each input.

"/login"
- Create a form with username and password fields with validation.
- Login request to WordPress API with a JWT plugin installed.
- If successfully logged in, redirect to /admin.

"/admin"
- This page will simply display an "Admin" heading.

*** Built With
- Next.js
- Bootstrap

*** Getting Started
**** Installing
Clone the repo:
```
git clone https://github.com/dina-kvivesen/next-js-assignment.git
```
Install the dependencies:
```
npm i
```
**** Running
To run the app, run the following commands:
```
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

If you want to test the login/admin panel you need to have your own local API.
I used, and would reccomend using Local by Flywwheel.

[Local by Flywheel](https://localwp.com/)

Contact

[My LinkedIn page](https://www.linkedin.com/in/dina-kvivesen-7ab5141b4/)

- --




