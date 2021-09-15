# How to Build Content-Rich eCommerce Sites with Next.js and the Jamstack

## Welcome

The Jamstack can be an excellent way to power eCommerce sites. In this free workshop from our friends at Netlify, Nick DeJesus will walk you through how to create fast, reliable, and content-rich Jamstack sites using Next.js, Netlify, Stripe, and Prismic.

This workshop assume you've got a developer environment set up with Node js and can install packages with npm

## Setting up

You're going to need accounts for the following platforms:

### Netlify for hosting and dev environment

[https://www.netlify.com/](https://www.netlify.com/)

### Prismic for CMS

[https://www.prismic.io/](https://prismic.io)

### Stripe for payment processing

[https://www.stripe.com/](https://stripe.com)

You're also going to need to install the Netlify CLI:

`npm install -g netlify-cli`

### Step 1

First, we're going to use Netlify's Deploy button to connect your site to GitHub and your Netlify account.

[![](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/dayhaysoos/smashing-mag-workshop)

### Step 2

Clone the repo that just got created on GitHub locally

The starting point of this project is empty right now

Now you need to clone the Prismic Repo from within this project.

### Step 3

To clone the Prismic repo, run the following command:

`npx prismic-cli@4.1.1 theme --theme-url https://github.com/dayhaysoos/prismic-workshop-theme/tree/start --conf prismic-config.js --folder . --force`

You'll be prompted to give a unique name to your project, use your name in the prefix: `your-name-smashing-mag-workshop`

For example, I'd do `nick-smashing-mag-workshop`

You can see your repo from here:

https://your-name-smashing-mag-workshop.prismic.io/

### Step 4

Go to `prismic-config.js` and check if the variable `apiEndPoint` has the url of your prismic repo in there already. If it does, you skip to step 5.

Add your Prismic Repo URL to the `prismic-config.js` file.

There's a variable there called `apiEndpoint`. The value currently assigned should look like this:

`https://your-repo-name.prismic.io/api/v2`

Replace `your-repo-name` with your Prismic Repo name. For example, mine would be:

`https://nick-smashing-mag-workshop.prismic.io/api/v2`

### Step 5

Commit the new code that has been added and push to your GitHub repo.

`git add .`
`git commit -m "Starting point"`

Netlify should build successfully and you'll be able to see the workshop UI.

From here, I will be giving a presentation from some slides.

### Note

To navigate through the workshop and steps that'll be taken you can search the code base for two things:

Use the search feature for "Walkthrough <number>" to see parts of the code that have been pre-emptively set up already.

Example: "Walkthrough 1". After reading the comments there, move on to "Walkthrough 2"

When you're ready to make changes to the workshop to get to the final product, use the search feature and look for "Step <number>"

Link to slides: https://slides.com/nickdejesus/deck-f1459b
