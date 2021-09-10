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

First, we're going to use Netlify's Deploy button to connect your site to GitHub and your Netlify account.

[![](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/dayhaysoos/prismic-workshop-theme)

# Clone github repo

The starting point of this project is empty right now, to see some code you need to clone the Prismic repo

Now you need to clone the Prismic Repo (not to be confused with a GitHub Repo)

To clone the repo, run the following command:

`npx prismic-cli theme --theme-url https://github.com/dayhaysoos/prismic-workshop-theme --conf prismic-config.js --folder ./ --force`

You'll be prompted to give a unique name to your project, use your name in the prefix: `your-name-smashing-mag-workshop`

For example, I'd do `nick-smashing-mag-workshop`

You can see your repo from here:

https://your-name-smashing-mag-workshop.prismic.io/documents/working?l=en-us

Link to slides: https://slides.com/nickdejesus/deck-f1459b
