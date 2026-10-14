# PrivySpace - Web Development Midterm

## 1. Project Overview
PrivySpace is a simple multi-page social media website made using HTML, CSS, and Vanilla JavaScript. The project is only a frontend prototype, so there is no backend, database, or API.

The main goal is to practice the basic parts of Web Development. Simple ra ang project para dali masabtan unsaon pag-connect sa different HTML pages, CSS design, ug basic JavaScript functions.

## 2. Purpose of the Website
The website gives a basic social media experience. A user can sign up, login, view the main feed, create a post, like a post, open a profile, read the About Us page, and view simple privacy settings.

The website also reminds users to be careful with personal information online. Importante nga dili basta-basta mag-share og sensitive information sa internet.

## 3. Pages Included
- `index.html` - Home page
- `pages/login.html` - Login page
- `pages/signup.html` - Signup page
- `pages/feed.html` - Main feed page
- `pages/profile.html` - User profile page
- `pages/about.html` - About Us page
- `pages/settings.html` - Privacy settings page

## 4. Main Features
- Create a simple account
- Login using the account created in the browser
- Demo login account
- View sample posts
- Create a temporary post
- Like posts
- View user information in the profile
- Simple privacy settings
- Navigation links between pages

Dili complicated ang functions because this activity is mainly for practicing the fundamentals.

## 5. Technologies Used
### HTML
HTML is used to create the structure of every page, such as headings, forms, buttons, links, tables, and text.

### CSS
CSS is used to style the pages. The design is intentionally simple and similar to older websites so the code is easier to read and explain.

### JavaScript
JavaScript is used for the basic interactive functions, such as signup, login, creating a post, and increasing the like count.

### localStorage
`localStorage` is used only to keep the signup information inside the same browser. Murag temporary substitute ra ni sa database for this activity. It is not a real secure login system.

## 6. Folder Structure
```
privacy-social/
├── index.html
├── pages/
│   ├── login.html
│   ├── signup.html
│   ├── feed.html
│   ├── profile.html
│   ├── about.html
│   └── settings.html
├── src/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
└── assets/
    └── img/
```

## 7. How the Website Works
### Signup
The user enters a name, email, and password. JavaScript saves this information using `localStorage` in the browser. After signup, the user is sent to the login page.

### Login
The user enters an email and password. The website checks if they match the information saved during signup. A demo account is also available:

- Email: `student@example.com`
- Password: `1234`

If the login is correct, the website opens the main feed.

### Main Feed
The main feed shows sample posts. The user can type a message and click the Post button. The new post will appear at the top of the page. Pwede pud i-click ang Like button para mudaghan ang like count.

### Profile
The profile page shows the name and email entered during signup. It also shows simple sample information such as the course and bio.

### About Us
The About Us page explains the purpose of PrivySpace and the basic idea of the project.

### Settings
The Settings page contains sample privacy options. These checkboxes are only for display because there is no database to permanently save them.

## 8. Limitations
This project is for learning and demonstration only. It does not include:

- Real database
- Real backend server
- Real user authentication
- Real online accounts
- Real permanent posts
- Real friend requests or messaging

Kung e refresh or gamiton sa lain nga browser/computer, some information may not appear because the project only uses browser `localStorage`.

## 9. What I Learned
Through this midterm, I practiced how to create several HTML pages and connect them using links. I also practiced basic CSS styling, HTML forms, and simple JavaScript events.

Nakatabang pud ang midterm para masabtan nako nga ang frontend is responsible for what the user sees and interacts with on the website. Even without a backend, makahimo gihapon og simple prototype for practice.
