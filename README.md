# MARIE

A fully resonsive bootstrap based HUGO Theme for personal blogs with focus on coding and tech. The theme has lot of features to discover and fully flexible and easy to configure on your own needs.

## :bulb: Features

<img alt="HTML5" src="https://img.shields.io/badge/html5-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>  <img alt="SASS" src="https://img.shields.io/badge/SASS%20-hotpink.svg?&style=for-the-badge&logo=SASS&logoColor=white"/> <img alt="Bootstrap" src="https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white"/> <img alt="Markdown" src="https://img.shields.io/badge/markdown-%23000000.svg?&style=for-the-badge&logo=markdown&logoColor=white"/> <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> <img alt="jQuery" src="https://img.shields.io/badge/jquery-%230769AD.svg?&style=for-the-badge&logo=jquery&logoColor=white"/> <img alt="Ko-Fi" src="https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white" />

MARIE includes many features build in the theme and ready for use. Some highlights are the barrier-free reading with text adjustments, build-in syntax highlighter with PrismJS including all languages, line numbers and clipboard function as well as newsletter support and build-in utterances comments. As special MARIE also contains a dynamic file section where you can provide your post readers files to download.

- [x] Responsive Bootstrap Design
- [x] Full configurable with rich featured config.toml
- [x] Local Font Awesome Icons
- [x] Utteranc.es Comments
- [x] Code Highlighter and Clipboard with PRISM JS
- [x] Ko-Fi Implementation
- [x] Twitter and facebook cards
- [x] Barrier-free reading
- [x] Demo File Download Section for posts
- [x] I18N Multilanguage support for EN and DE
- [x] Table of Content Generator
- [ ] Archive Page with List view of all posts
- [x] Mailerlite Newsletter support
- [x] Matomo and Google Analytics Support
- [x] Social Media Share Buttons (see Credits)


## Table of Contents

- [Installation](#Installation)



## :floppy_disk: Installation
Create a new hugo site (e.g. example). Move to the new directory and clone MARIE to your hugo site's `themes` folder if you are using git
```bash
hugo new site example
cd example
git init
git submodule add https://github.com/jgeisslinger/hugo-marie.git themes/marie
```
As alternative you can also download this repo and extract into your themes folder - dont forget to rename the extracted folder to "marie".

Change your theme to MARIE in your site config
```toml
# config.toml

theme = "marie"
```
Config your site see configuration or copy from example.config.toml and test your site locally with
```
hugo server 
```

## Demo
For a quick demo you can visit the sample page here or check out my personal blog.


## :wrench: Configuration
The theme has been build to support a *no-code* customization by just editing most of the customizations directly within the config.toml. This makes it easy to fit your needs without entering the deep code. Please find below some main config that you may tackle:

### Basics

#### :art: Color
Marie supports two main themes from the scratch. This is a light theme mainly white/grey and a dark theme. The default is the light theme. You can switch to default dark theme by adding to the config.toml
```toml
[params]
theme = "dark"
```
The user can always switch between light and dark through the theme switcher. 

#### :page_facing_up: Pagination
The theme includes a basic pagination on the index and archive pages. You can select the number of posts visible on the start page by just setting the pagination variable in the config. This automatically controls the pagination pages that are generated.
```toml
[params]
paginate = 2 #set the number of posts
```

#### :triangular_ruler: Custom CSS 
You can also activate custom CSS to make some own changes to the theme. To do so just enable it via config.toml. You have both options, enable SCSS (which will be compiled into the main css file) or via extra CSS file. The files you can edit are placed under assets/css
```toml
[params]
enableCustomSCSS = true 
enableCustomCSS = true
```

#### :wrench: Custom JS
If you need special scripts for your personal usage you can enable a custom JS file that is automatically linked before the body tag. 
```toml
[params]
enableCustomJS = true 
```

#### :mag: SEO
You should also configure basic SEO before starting up. To do so just set some basic configs that will appear in the sites meta data.
```toml
[params.seo]
    description = "This is a Hugo theme" #Search Engine description of your site
    keywords = "Hugo, Theme, Marie"
```

#### :cookie: Cookies 
If you use cookies in your theme (like with Matomo, theme switcher etc.) you may want to inform your visitors about this. MARIE uses the famous cookieconsent JS plugin to manage your cookie banner. However, you can adjust the banner to your needs with the following parameter in the params section of your config.toml.

```toml
[params]
    cookiebanner = true #activate the banner
    
    cb_buttontext = "Accept" #text of the banner button
    cb_buttonbg = "#000000" #color of the button
    cb_buttontextcolor = "#ffffff" #color of the text
    
    cb_text = "Your text goes here" #Information text for the visitor
    cb_textbg = "#c4c4c4" #color of the text field
    cb_textcolor = "#000000" #color of the text
```


### :balloon: Specials
 
#### Social Media Links
If you like to show your visitors your social media channels or how they can connect with you, just specify them in the config and they will be automatically added to the sidebar below the navigation. The service is named like the *fontawesome* icon. 
```toml
[[params.social]]
    service = "twitter"
    url = "https://twitter.com/"
```
*Note*: You must add one params.social group per link you would like to add. There is no option that you can combine multiple in one section.

#### :email: Mailerlite Newsletter
The theme includes a standard way to add your mailerlite (check out here) account for newsletter subscribtion in the footer of the page. To enable you must register with mailerlite first and create an embedded form. Afterwards you can configure your details via congig.toml
```toml
[params]
    MLnewsletter = true #activate newsletter footer
    MLaccount = "123456" #here goes your account id
    MLsecret = "getzgetz" #your secret
    MLdataaccount = "27819876:j1p2f8n4c1" #the data account id
    MLform = "3623887:o3b7m8" #the form you want to include
```

#### :crystal_ball: Utterances Comments
You can activate a comment section based on Utterances. Follow their how-to (https://utteranc.es) to setup your GitHub issues for collecting your comments. Afterwards configure your site as following: 
```toml
[params]
ut_comments = true
ut_repo = "yourgithubname/repo"
ut_issue-term = "title"
ut_label = "issue label"
ut_theme = "boxy-light"
```

#### :bar_chart: Matomo Tracking
You can use Matomo as alternative for Google Analytics to track your visitors with your own server instance (or use a hosted service). Just configure the parameters as following:
```toml
[params]
Matomo = true
MatomoServer = "https://this.server"
MatomoSiteID = "SiteIDfromDashboaHird"
```

#### Table of Content
Marie supports automatic table of content generation. Activate it by adding
```toml
[params]
toc = true;
```
to you config.toml. The TOC will be published under the navigation on the left menu or mobile menu.


## Usage
### New post
To add a new post to your page just call the Hugo command 
```bash
hugo new posts/my-first-post.md
```

### File Downloads
You can easily provide your readers some files to download (like demo files or examples). To do this just add in the post frontmatter the following code snippet
```yaml
Files: 
- src: "Your URL to the file"
  title: "The Name of the File"
  type: "word"
```
You can add as much files as you like by adding more dashes under the Files section. The parameter "type" controls the icon on the file link and could be anything from fontawesome beginning with "file-" (like pdf, audio, word, image, powerpoint, excel, code...).

## Credits

Finally some credits for the good work on the resources used in this theme: 

- [Font Awesome](https://fontawesome.com/)
- [Bootstrap](https://bootstrap.com/)
- [Prism.JS]()
- [cookieconsent](https://github.com/osano/cookieconsent)

## Sponsor

If you like the theme I would be very happy to reveive your feedback or a coffee to stay awake and continue coding nice things

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/I2I12FSW2)

Follow me on Twitter for any news

<img alt="Twitter" src="https://img.shields.io/badge/b1cKberry-%231DA1F2.svg?&style=for-the-badge&logo=Twitter&logoColor=white"/>

