# MARIE DRAFT STATUS

A fully bootstrap resonsive Hugo Theme for personal blogs with focus on coding and tech. The theme has lot of features to discover and fully flexible to configure on your own needs. 

Note: This is still in draft mode and some features are not working. It is NOT requested to pull this theme or build any production page right now.


## :bulb: Features

<img alt="SASS" src="https://img.shields.io/badge/SASS%20-hotpink.svg?&style=for-the-badge&logo=SASS&logoColor=white"/> <img alt="Bootstrap" src="https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white"/> <img alt="Markdown" src="https://img.shields.io/badge/markdown-%23000000.svg?&style=for-the-badge&logo=markdown&logoColor=white"/> <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> <img alt="Ko-Fi" src="https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white" />

MARIE includes many features build in the theme and ready for use. Some highlights are the barrier-free reading with text adjustments, build-in syntax highlighter with PrismJS including all languages, line numbers and clipboard function, newsletter support and many more. 

- [x] Responsive Bootstrap Design
- [x] Full configurable with rich featured config.toml
- [x] Local Font Awesome Icons
- [x] Social Media Links
- [ ] JSON Project List for your Visitors
- [x] Barrier-free reading
- [ ] I18N Multilanguage support for EN, DE, ES, FR
- [ ] TOC templates
- [ ] Archive Page with List view of all posts
- [x] Code Highlighter with PRISMJS
- [x] Newsletter support
- [x] Matomo and Google Analytics Support


## :floppy_disk: Installation
Clone codinglover to your hugo site's `themes` folder.
```
git clone https://github.com/jgeisslinger/hugo-marie.git themes/codinglover
```
Change your theme to codinglover in your site config
```toml
# config.toml

theme = "marie"
```
Config your site see configuration or copy from example.config.toml and test your site locally with
```
hugo server 
```


## :wrench: Configuration
The theme has been build to support an *no-code* customization to your needs by just editing most of the configs directly within the config.toml. That makes it easy to fit your needs without entering the deep code. Please find below some main config that you may tackle:

### Basics

#### :art: Color
You can specify your own color theme by just editing the config.toml under the special params.colors section. You can select the basic color theme or just set individual colors as you like. The standard theme is grey/black/white. 
```toml
[params.colors]
    Text = "#696969"
    Headline = "#63BDA2" 
    Highlight= "#359377"
    Primary = "#63BDA2"
```
There are many colors that you can change. Please refer to the example page.

#### Pagination
the theme includes a basic pagination on the index page. You can select the number of posts visible on the start page by just setting the pagination variable in the config. This automatically controls the pagination pages that are generated.
```toml
paginate = 2 #set the number of posts
```

#### Custom CSS 
You can also activate custom CSS and JS to make some own changes to the theme. To do so just enable it via config.toml. You have both options, enable SCSS (which will be compiled into the main css file) or via extra CSS file.
```toml
[params]
enableCustomSCSS = true 
enableCustomCSS = true
```

#### Custom JS
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


### :balloon: Specials
 
#### Social Media Links
If you like to show your visitors your social media channels or how they can connect with you, just specify them in the config and they will be automatically added to the sidebar below the navigation. The service is named like the *fontawesome* icon. 
```toml
[[params.social]]
    service = "twitter"
    url = "https://twitter.com/"
```
*Note*: You must add one params.social set per link you would like to add. There is no option that you can combine multiple in one section.

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


#### :bar_chart: Matomo Tracking
You can use Matomo as alternative for Google Analytics to track your visitors with your own server instance (or use a hosted service). Just configure the parameters as following:
```toml
[params]
MatomoServer = "https://this.server"
MatomoSiteID = "SiteIDfromDashboard"
```

