## MARIE DRAFT STATUS

A Hugo Theme for personal blogs with focus on coding and tech. The theme has lot of features to discover and fully flexible to configure on your own needs. 

Note: This is still in draft mode and some features are not working. It is NOT requested to pull this theme or build any production page right now.

### :bulb: Features

<img alt="SASS" src="https://img.shields.io/badge/SASS%20-hotpink.svg?&style=for-the-badge&logo=SASS&logoColor=white"/> <img alt="Bootstrap" src="https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white"/> <img alt="Markdown" src="https://img.shields.io/badge/markdown-%23000000.svg?&style=for-the-badge&logo=markdown&logoColor=white"/> <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> <img alt="Ko-Fi" src="https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white" />


- [x] Responsive Bootstrap Design
- [x] Full configurable with rich featured config.toml
- [x] Local Font Awesome Icons
- [x] Social Media Links
- [x] JSON Project List for your Visitors
- [ ] Barrier-free reading
- [ ] Go-I18N Multilanguage support
- [ ] TOC templates
- [ ] Local Search
- [ ] Code Highlighter
- [ ] Ko-Fi Support
- [ ] Matomo and Google Analytics 

### :floppy_disk: Installation
Clone codinglover to your hugo site's `themes` folder.
```
git clone https://github.com/jgeisslinger/hugo-marie.git themes/codinglover
```
Change your theme to codinglover in your site config
```toml
# config.toml

theme = "marie"
```
Config your site see configuration and test your site locally with
```
hugo server 
```


### :wrench: Configuration
The Theme can be individually customized to your needs by just editing most of the configs directly within the config.toml. That makes it easy to fit your needs without entering the deep code. Please find below some main config that you may tackle:

#### Basics

#### Color
You can specify your own color theme by just editing the config.toml under the colors section
```toml
[params.colors]
    Text = "#696969"
    Headline = "#63BDA2" 
    Highlight= "#359377"
    Primary = "#63BDA2"
    .
    .
    .
```
There are many colors that you can change. Please refer to the example page.

#### Custom CSS 
You can also activate custom CSS and JS to make some own changes to the theme. To do so just enable it via config.toml. You have both options, enable SCSS (which will be compiled into the main css file) or via extra CSS file.

```toml
[params]
enableCustomSCSS = true 
enableCustomCSS = true
```

#### Matomo Tracking
You can use Matomo as alternative for Google Analytics to track your visitors with your own server instance (or use a hosted service). Just configure the parameters as following:
```toml
[params]
MatomoServer = "https://this.server"
MatomoSiteID = "SiteIDfromDashboard"

```