Thank you for purchasing our theme. We appreciate the trust you have given us, and so we made this documentation as clear as possible, so that no one will encounter any problem. If you can't find what are you looking for in the documentation or FAQ section, feel free to contact us. We are happy to help you with every problem you may encounter.  
You are entitled to get free lifetime updates to this product + exceptional support from the author directly.

Within the download you'll find the following file structure and contents, logically grouping common assets and providing.

Once downloaded, unzip the compressed folder to see the structure of your theme. You'll see something like this:

```
Angio/
              ├── Documentation - This document
              ├── Elementor Templates/ - Example templates for Elementor page builder
              ├── Licensing/ - Licenses.
              ├── Theme/
              │   ├── angio.zip - Main theme files.
              │   └── angio-child.zip - Default settings for theme admin panel.
              └── changelog.txt - All theme changes.
            
```

### Installation

After you have purchased the theme, the archive downloaded from Themeforest will look something like this: The theme itself is located in /theme/ folder. The installable .zip archive is the one called angio.zip

![Image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/installation-theme-folder.png)

You can complete installation in two different ways:

  

#### 1\. WordPress Theme Manager

Login to your WordPress Dashboard (your-site.com/wp-admin/), and then navigate to Appearance > Themes. Then click on the Add New button.

![Image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/installation-add-new.png)

A new page will open. Click on the Upload Theme button.

![Image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/installation-upload.png)

Press the Choose File button.

![Image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/installation-choose-file.png)

A common mistake that users make at this point, is that they try to upload the .zip archive with all the files that they have downloaded from Themeforest. You must upload the .zip archive with only the theme itself, not the .zip archive with all files.

In order for this not to happen, be sure you have downloaded the Installable file only from Themeforest.

![Image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/installation-correct-file.png)

That's the .zip you must upload.

The theme will now upload. After the upload is done, you need to click on Activate.

![Image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/installation-activate.png)

#### 2\. Via FTP program

1.  **Download and install FileZilla**
    
    Download FileZilla from [http://filezilla-project.org/](http://filezilla-project.org/) and install program.
    
2.  **Run program**
    
    Double click on your FileZilla icon from your desktop.
    
3.  **Setup**
    
    Complete the following boxes (below the header at the top of the screen)  
    ftpAddress - The URL of your blog/website (don’t include http:// at the beginning)  
    User - your ftp username  
    Password - your ftp password  
    Port - Leave Blank or enter 21 (it should by default enter this automatically)
    
4.  **Quickconnect**
    
    Click Quickconnect! are now connected to your ftp account.
    
5.  **WWW**
    
    Double click on the WWW directory folder located on the right hand side so that the directory is opened. If you have a registered domain on your account then the 'index.html' file should be within your 'www/yourdomain.com/' directory. 'index.html' will be the main page of your site.  
    If you use Wordpress and have a registered domain on your account then the Wordpress files can be accessed using the following path /www/wp-content/themes/ and select your theme folder. You will find all the php, css and image files for your Wordpress site in there.
    
6.  **Search for your files**
    
    From the left hand side of the FileZilla program, you will need to search for your files on your computer in which you would like to upload to your site under 'Local Site'.
    
    Browse the contents and find the actual theme folder (/Theme/). In this folder you will find angio.zip. Unzip this file then. After unpacking, you'll see a new folder containing your theme files. This is your **theme folder** .
    
7.  **Upload**
    
    Highlight all of the files you wish to upload and then DRAG them over to an open area on the right hand side of the FileZilla program so that you will upload the files into www/wp-content/themes/your theme folder.  
    Your files will upload instantly onto your site. A message will appear at the top above the local site to let you know if the upload was successful. Thats all theme should already be on the server ready to activation.
    

### Plugins installation & activation

After activating theme you will be notified that Angio requires "Angio Toolkit" and "Elementor Page Builder" to work properly. It's also recommended to others plugins. This is because this theme requires and recommends a series of plugin in order to work correctly.

Click "install" next to every plugin from the list starting from the top of the list, after installing the last one click Activate in same order.

![Image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/installation-activate-plugins.png)

  

### Setup Your Homepage

1.  Click on Settings -> Reading
2.  Set "Front page" to Home as displayed bellow:

![Image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/installation-set-homepage.png)

Please Leave "Posts page" unselected. This setting will cause problems with theme if used.

  

### Update theme

The most important aspect of updating is that one should always have made a backup of their site and database prior to performing an update. Updates are very easy to do, but because we are dealing with the internet, and also several different programs attempting to work together, sometimes updates will fail, and "bad things" can happen to your existing site. If you have made a backup, then the problems may be reversible.

Many often worry that upgrading by ftp overwrite will cause one to lose the existing content they have input into their site. This is not the case. Your content, formatting and images you have uploaded are not effected.

If you have made any **custom modifications to your php files** - for example you have have hardcoded changes to a file, **you can lose those modifications** . You should definitely save each php or css file you have "hard" modified, so that you can reinstall them after the global program update. If you have made changes and you don't want to lose them, you can use one of freeware tools for comparing files, ex. [Beyond Compare](http://www.scootersoftware.com/) (Please don't ask us how to use it because we are not the authors of this tool. Help can be found on their website). After comparing these files you can upload on server only the files that hasn't been changed.

If you haven't custom modifications any theme files, all you need to do is update your version of theme by downloading the latest package from market, unpacking files and uploading new files on the server while replacing the old files.

  

### Update theme with Envato WordPress Toolkit (easy!)

1.  **API Key**
    
    You will need to generate an API key to link your WordPress site to your Themeforest account.
    
    Login to Themeforest, go to your dashboard and click on “My Settings.” The API Keys screen allows you to generate a free API key.
    
2.  **Install Envato WordPress Toolkit Plugin**
    
    Install and activate the toolkit plugin. A new menu item, “Envato Toolkit,” will appear in the admin sidebar. Click on the sidebar link and enter your marketplace username and secret API key. Click “Save Settings.”
    
    All of your theme purchases will now appear on this page after it refreshes.
    
3.  **Theme Updates**
    
    The plugin will now alert you to theme updates – so long as you check the toolkit settings regularly.
    
    Click on “install automatically” beside each of your themes to automatically update them.
    
    The toolkit settings page also allows you to install themes that you haven’t already uploaded to your site, delete ones you don’t use and view version details. You can also set up theme backups.
    
    Make sure that you do not edit the theme files! If you have custom CSS code, insert it into the Additional CSS Panel in Customizer. If you also want to modify PHP files, then please use a [child theme](http://codex.wordpress.org/Child_Themes).
    

  

### How to fix "Broken Theme/Stylesheet Missing WordPress"?

A common issue that can occur with users new to installing WordPress themes is a "Broken theme and/or stylesheets missing" error message being displayed when trying to upload or activate the theme. This error message does not mean that the theme you have purchased is broken, it simply means it has been uploaded incorrectly. Luckily, there is a very easy fix. Please follow the steps below to rectify this issue.

1.  Download the final zip file from your downloads page.
2.  Unzip the final zip file; you should now have a final download folder.
3.  Do NOT upload the final download folder. Open up the final download folder.
4.  Browse the contents and find the actual theme folder (/Theme/). In this folder you will find angio.zip. Unzip this file then. After unpacking, you'll see a new folder containing your theme files. This is your **theme folder** .
5.  If you look inside the theme folder, you will see a "style.css" file. This is how you know you have found the theme folder.
6.  Upload ONLY the theme folder to your "wp-content/themes" folder.
7.  Login to your WordPress admin panel and activate the theme.
    
    **Optional:** If you do not wish to manually upload the theme only folder to your "themes" folder, there is an option. You can zip up the theme folder (remember, ONLY the theme folder) and upload it via the WordPress themes admin panel by selecting "add new" and clicking "upload". That's all there is to it, please be **absolutely sure that you are uploading only the theme folder** when trying to install a WordPress theme.
    

If tab "Install Demos" is inactive, please install and activate **Angio Toolkit** plugin.

![Image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/install-demos-inactive.png)

### One-Click Demo Import

![Image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/demo-import.png)

With the one-click import functionality you can quickly and easily import all the sample content (content, menu, options and widgets). So setting up your site to look and function just like the demo has never been easier. If you are using this option you don't need to use .xml files no longer. Before you begin, make sure that **all the necessary plug-ins you have installed and activated** .

  

1.  Goto Angio -> Install Demos.
2.  Select demo and click the Import button.
3.  Be patient and wait for the import process to complete. It can take up to 5-7 minutes. Running Demo Importer multiple times will result in duplicate content.

#### When import get stuck

Probably you need to increase the maximum execution time. You can do this by clicking again on "Import" button until you will see a message that demo data has been imported correctly. Also you can try to adding following code to your /wp-config.php file right above the `/* That’s all, stop editing! Happy blogging. */`

```
set_time_limit(700);
```

If you still have problems make sure that you have enough memory allocated to php. This can be set in your wp-config.php file. You can read more at WordPress [codex page](http://codex.wordpress.org/Editing_wp-config.php#Increasing_memory_allocated_to_PHP) .

Before running the demo import again, you should reset the database. We recommend the WordPress [Reset plugin](https://wordpress.org/plugins/wordpress-reset/) .

  

### 2\. Permalinks

The most important aspect after importing content is to set the permalinks. WordPress posts returning a **404 Error** . This usually happens if your .htaccess file got deleted or something went wrong with the rewrite rules. What you need to do is fix your permalinks settings.

By default, WordPress uses web URLs which have day and name in them; however, WordPress offers you the ability to create a custom URL structure for your permalinks and archives. This can improve the aesthetics, usability, and forward-compatibility of your links ([WordPress Codex](https://codex.wordpress.org/Settings_Permalinks_Screen) ).

Permalink settings are found in the left-hand WordPress Dashboard -> Settings -> Permalink menu.

![Image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/permalink.png)

Once you have selected the specific format you want, click "Save Changes." This will update your permalinks settings and flush rewrite rules. In most cases this solution fixes the WordPress posts 404 error.

  

### 3\. Page Builder

#### 1\. Setup

The color of each content you add to the page you create with Elementor falls under the influence of your layout **Default Colors**. Giving an example, if you add a **Heading** element to your layout, the color of that **Heading** element will be defined by the default colors of the Elementor’s Layout. As a result, if the color of Headings is green by default, then each Heading will turn into green after adding it to your Elementor layout.

One thing you might want to check before we get started, is that you have disabled the default Elementor fonts and colors. This way Elementor will inherit the styles from the theme, which is exactly what we want to do here.

![Image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/elementor-setup.png)

  

#### 2\. Page Templates

Once your site is ready, the only thing left to set up page builder. Elementor Page Builder is one of the most popular page builder plugins out there, making it easy for users to create beautiful, complex layouts with a simple drag and drop interface.

From now, Angio comes with templates specially designed to use with Elementor:

1.  **About** - About page template which can be used as a starting point for building your creative about page.
2.  **Contact** - Ideally used to easily stay in touch with your users.

  

##### Using Templates

1.  Make sure you have installed Elementor Page Builder.
    
2.  Download templates .zip file on your machine. File is located in the final zip file that you downloaded from your downloads page on ThemeForest website. In folder Angio -> Elementor Templates -> elementor-templates.zip
    
3.  Navigate to Dashboard > Elementor > My Library. There click Import Template. For import, select the file downloaded in the previous step.
    
    ![Image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/elementor-import-templates.png)
    
4.  The imported template will appear in a list, and you will be able to view and edit it with Elementor.
    
    ![Image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/elementor-imported-templates.png)
    
5.  After the importing process is over, you can create a new page to use with that new template. Navigate to Dashboard > Pages, add a new page, select the Page Builder Blank template for that page and publish it. After that, just click Edit with Elementor to start creating the page content.
    
6.  When you choose to edit a new page with Elementor, the first thing you will see will be the adding panel; you will be asked to add a new section or a template. Hit the “Add template” button.
    
    ![Image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/elementor-add-template.png)
    
7.  In the library, you can choose to go downloading available blocks or pages (some of them are free), but since you’ve already downloaded a template, go to “My Templates” bar.
    
8.  Click the My Templates tab, and select the name of the template you want to use ( in this case About Our Business template ) and click Insert.
    
    ![Image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/elementor-insert-template.png)
    
9.  Voila! You have a ready-made page, containing all the necessary elements. You can edit them any way you like and change the content according to your business needs. All the elements are fully customizable and flexible. Have fun dealing with dozens of color, shape and fonts variations!
    

![Image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/theme-panel.png)

Theme Panel are found in the left-hand WordPress Dashboard -> Theme Panel or in WordPress admin bar at the top of page and it is an easy-to-access toolbar with a few shortcuts to some central dashboard pages.

Theme Panel has been especially created to make your work faster and easier. Using it is very easy and in just a few minutes you can change a lot of things on your page. On this panel you can adjust many various configuration settings including basics like: Date format, Google fonts, to more advanced AJAX options, section permalinks structure etc.

We have the options organized into logical tabbed sections, and each option has a description of what it will do on the front end. Because of the sizable amount of options this theme, we cannot go over them in full detail here in our documentation.

-   **General Settings** - All the global theme options
-   **Sections** - These options allow you to configure theme sections/pages like comments, music, events...
    -   **News** - These options allow you to configure news/blog pages.
    -   **Comments** - These options allow you to integrate DISQUS comments system to your site (without 3rd party plugins).
    -   **Events** - These options allow you to configure events pages.
-   **Customize** - All the customization theme options
    -   **Colors** - Select theme colors
        
        ![Image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/customize-colors.png)
        
    -   **Header** - Configure theme header
        
        ![Image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/customize-logo.png)
        
        Logo Image - Upload your logo to be displayed at the left side of the header menu.
    -   **Footer** - Configure theme footer
        
        ![Image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/customize-footer.png)
        
        Footer Note - Any html content (usually a copyright text) displayed in the copyright section.
-   **Fonts**
    -   **Google Web Fonts** - These options allow you to change or add new fonts from [Google Libary](https://www.google.com/fonts) . Just remember that each Google Web Font you select adds a slight weight to your site loading, you should wisely use only those that you really need to keep the good performance of your site. In other word, more fonts you select means heavier site load.
-   **Permalinks** - Change custom post permalinks
    
    ![Image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/theme-panel-permalinks.png)
    
    For example single album permalink in browser address:
    
    ![Image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/theme-panel-permalinks-preview.png)
    
-   **Socials** - Manage your social links
    
    ![Image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/theme-panel-socials.png)
    
    ![Image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/theme-panel-socials-preview.png)
    
-   **Sidebars** - These options allow you to change or add sidebars, information can be found in this document in section "Widgets and Sidebars".
    
    ![Image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/theme-panel-sidebars.png)
    
-   **Advanced**
    -   **Ajax** - These options allow you to set advanced ajax options.
    -   **Plugins** - These options allow you to enable or disable theme plugins.
    -   **Import/Export** - These options allow you to import sample settings as our demo sites and export your own settings value.

Please don't mess with "Ajax" options menu unless you know what you are doing. Any misconfiguration there may cause some serious unpredictable issues.

  

## How To Integration DISQUS comments?

1.  Go to Dashboard -> Sections -> Add New
2.  Search for "Disqus Comment System" plugin, install &activate it.
3.  Dashboard -> Sections, look for newly installed plugin and click Configure below it.
4.  Disqus will ask for your account credentials. If you don't have Disqus account yet please go to their website and create it - link is visible on plugin login page.
5.  Now you will have to "Add Disqus to your site" if you haven't yet. It's located here: https://disqus.com/admin/create/ - please follow those instructions.
6.  Follow the steps as instructed in plugin.
7.  If you need to learn more about Disqus functionality please visit https://help.disqus.com/

Theme Customizer are found in Theme Panel -> Customize.

![Image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/customizer.png)

The Customizer panel has been especially created to make your customization faster and easier. Using it is very easy and in just a few minutes you can change a lot of things on your page.

![Image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/customize-logo.png)

![Image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/customize-colors.png)

Theme is based on Elementor Page Builder.  
Angio is fully integrates with Elementor page builder and allows you to customize every aspect of your website.

![Image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/elementor.png)

To explore the capabilities of Elementor, we recommend you study the [documentation](https://elementor.com/learn/) and watch following video:

<iframe width="714" height="480" src="https://www.youtube.com/embed/nZlgNmbC-Cw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>

## Page

#### Facebook Sharing

![image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/creating-common-facebook.png)

On this tab are options to set Facebook og: tags. They are useful when you want to overwrite title, description or image currently edited page. In this way you will have the certainty that the share page on Facebook will be exactly the same.

  

___

  

## Blog/News

The blog is divided into two sections: Blog Page and Single Post.

  

### 1\. Blog Page

If you want to create the blog page, firstly, you need to create a simple page. You can also open already created page. Blog page allows you to display posts published at your webbsite.

![image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/page-templates.png)

Only after chosing the blog template and clicking on Publish / Update button, the options for blog pages will appear. If you just open the editor mode for the page, there will be NO options for blog. Blog options depend on blog page template.

The corresponding options for the selected template will be displayed after page refresh.

Please Leave "Posts page" unselected. This setting will cause problems with theme if used.

![image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/creating-blog.png)

Blog options are divided on tabs:

![image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/creating-blog-tabs.png)

-   **Content** - Here you can set the page layout, sidebar, background.
-   **Filter** - Here you can set options for loop settings, number of posts on page, selected category, order...
-   **Background Music** - Select music track that will be played when user open this page.
-   **Facebook Sharing** - Special options for Facebook sharing: title, image, description.

**Please note:** some options are depend on the selected parent option. For example if you selected sidebar position: Left or Right then extra option "Select Sidebar" will be visibled.

![image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/creating-common-depedency.gif)

  

#### Content

![image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/creating-blog-tab-content.png)

-   **Loop Block** - Select post loop block. Contains post title, featured image, date and assigned categories.
-   **Page Layout** - On this page template layout can be set only at Vertical Scroll, and this is classic page layout. On other pages layout may contain more options to choose.
-   **Page Title** - Hero section that is displayed on the top of the page. It depends on the selected option can be a classic title, title over image and much more.
    
    ![image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/creating-blog-tab-page-title.png)
    
    If you want to set **sticky image** between pages transitions (like on live preview) please select "Fullscreen Image".
    
    ![image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/creating-blog-tab-page-title-parallax.png)
    
    ![image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/creating-blog-tab-page-title-parallax2.png)
    
-   **Sidebar** - Select sidebar position. Please refer to "Widgets nad sidebars" section for more informations.
-   **Custom Sidebar** - Select default (primary) or custom sidebar (created in Theme Panel).

  

#### Filter

![image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/creating-blog-tab-filter.png)

If you want to create more that one news/blog page it's not a problem with our framework. Just select categories, tags or even posts IDS, and posts will be displayed only from your selections.

![image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/creating-blog-tab-filter-cats.png)

You can also "trim" a list of items that will appear. Use "Offset" field to enter number of posts that will be omitted. For example type number "3", then the first three posts will be omitted.

![image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/creating-blog-tab-filter-offset.png)

#### Background Music

Please refer to "Creating Music" section for more informations.

#### Facebook Sharing

Please refer to "Creating Page" section for more informations.

  

### 2\. Single Post

### How to add and display the posts in a few steps?

1.  Navigate to Posts in your WordPress admin sidebar.
2.  Click on the "Add New" to create a new post. Add a title, and insert your post content in the editing field.
3.  Select layout for your post.
4.  Add Categories from the right side. To assign it to the post, check the box next to the Category name.
5.  Add Tags from the right side. Type the name of the tag in the field, separate multiple tags with commas.
6.  Click on Featured Image Box, select an image and click the Set Featured Image button.
7.  Once you are finished, click Publish or Update to save the post.
8.  Navigate to Pages in your WordPress admin sidebar.
9.  Click on the "Add New" to create a new page. Add a title ex: "Blog".
10.  Select Blog template from page attributes.
11.  Once you are finished, click Publish or Update to save the page.
12.  Add your page to menu, and done!

  

___

  

## Music

The Music is divided into the following sections:

1.  **Tracks Libary** - All songs are stored here.
2.  **Music** - Here are the albums that can include any of the content like description, songs (from Tracks Libary), cover, buttons etc.
3.  **Music Template** - Displays music albums thumbnails on horizonatl or vertical layout.
4.  **Background Player** - Interactive music player which plays the music in the background. On most pages, you can set the background track in page options. For example you can set your favorite song on the "About" page and other on the Events page.

  

### Tracks Libary

In this place you have tracks libary. From here you select tracklist, tracks, single track... and put them on other theme pages or via shortcodes or page builder elements.

  

#### 1\. Libary

![image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/creating-music-tracks-add.png)

1.  Add new tracklist.
2.  The list of available tracklists.

  

#### 2\. Tracklist Editor

![image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/creating-music-tracklist-editor.png)

1.  **Title**
    
    Add a title of your tracklist.
    
2.  **List**
    
    List of available tracks.
    
3.  **Select All Tracks**
    
    Select all tracks from tracklist.
    
4.  **Track Editor**
    
    Each track contains additional options such as title, subtitle, button link, etc. If you want to edit them, click on the "edit" button, then you will see new slide-down block with additional settings. Please check below **Track Editor**:
    
5.  **Select Track**
    
    Click on this button to select single track.
    
6.  **Add Track**
    
    Adds locally hosted files on your server, please note that file has to be visible in Media Library. From Media Manager window select images by clicking on them, and click on "Add selected items" button to add selected music file(s) to your track or tracklist. Please check below: **Media Manager**
    
7.  **Add Custom Track**
    
    ou can add external link to MP3 file or online cloud.
    
8.  **Track ID**
    
    Each track has unique ID. It is necessary to select songs by IDS in some page builder elements, shortcodes or theme panel.
    

If you want, now you can change the order of your tracks, just **click and drag them**.

#### 3\. Media Manager

If you click on "Add Track" you will see this popup window. Select tracks and click on "Add" button and selected tracks will be added to the tracklist.

![image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/creating-music-media-manager.png)

1.  **Search**
    
    Search tracks in Media Libary.
    
2.  **Select Track**
    
    This file will be added to tracklist.
    
3.  **Load**
    
    Load more tracks (max 30 on one load).
    
4.  **Add**
    
    Click on this button and all selected tracks will be added to tracklist.
    

#### 4\. Track Editor

If you click on "Track Editor" or "Add Custom Track" you will see this slide-down content. Here you can edit track details like title, artists, buttons etc. (It's depends on theme settings).

![image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/creating-music-track-editor.png)

Please note **"Release/Track URL"** field can not be empty.

  

### Background Player

Interactive music player which plays the music in the background. On most pages, you can set the background track in page options.

Background player can be disabled or enabled in Theme Panel > General Settings **(1)**. Also in theme panel can be selected global track **(2)**. Global track will be played on the current page when you do not select a different background song in page options (see below). Please note only the first track on the list will be played, but you can select track by ID **(3)**. Tracks IDS of selected tracklist you will find in Tracks Libary -> Tracklist.

![image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/creating-music-bg-player-panel.png)

The track can be different for each page and can be selected in Page/Post options in tab: **"Background Music"**. Tracks are loaded from Tracks Libary. Please note only the first track on the list will be played. If you want, you can change the order of your tracks, just **click and drag them**.

![image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/creating-music-bg-player.png)

  

___

  

## Page Templates

![image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/page-templates.png)

1.  Default Template - Default WP template.
2.  Albums Slider - Displays music albums slider with glitch effect.
3.  Parallax Slider - Displays music albums slider with parallax effect.
4.  Music ALbums - Displays music albums.
5.  Events - Displays events list
6.  Gallery - Display images thumnails with lightbox
7.  News - Displays blog articles blocks
8.  Parallax - Display image layer with background effect also with extra menu. On this page main menu can be hidden.

One of the great features of Rascals themes is that our themes are Internationalized (I18n). In simple language, it means that you can translate any of our themes in your own language! Here, we explain how you can translate a theme.  
**Poedit and Loco Translate are not just for the translation, it also can make changes in theme texts, without any changes in template code.** This is very convenient because if the new upgrade will change the code, you will need to change the texts again.

You can translate/edit texts, using the free "**POedit** " software or free " **[Loco Translate](https://wordpress.org/plugins/loco-translate/)** " plugin for wordpress. Here's a step-by-step instructions:

### POedit.

1.  Download and install: [http://www.poedit.net/](http://www.poedit.net/)
2.  Unzip the download package (that you've downloaded from ThemeForest) and go to /angio/theme/ folder and unzip angio\_theme\_version.zip
3.  Go to /angio/theme/angio/languages/
    
    If your language is English open "en\_EN.po" through POedit and just change texts that you want. When complete save file.
    
    Otherwise:
    
    Open "en\_EN.po" through POedit and translate the English language into your preferred language. When complete, you’ll want to save the file twice, as two separate files – a .po file and a .mo file. When you save the files, you must name them according to your language code.
    
    Find a list of language codes at [http://codex.wordpress.org/WordPress\_in\_Your\_Language](http://codex.wordpress.org/WordPress_in_Your_Language) . As an example, the language code for English is en\_EN, so you would save the translated files as "en\_EN.po" first, then "en\_EN.mo"
    
4.  Open FTP program
    
    On the drive side, navigate to the /angio/theme/angio\_theme\_version/languages/. On the host side, navigate to your WordPress installation root directory:
    
    `/wp-content/themes/angio_theme_version/languages/`
    
    Where you have your current version of angio installed. Simply drag and replace /languages/ folder from your drive on the /languages/ folder on the host side.
    
5.  Make sure that you have correctly set language code in your Wordpress.
    
    On the host side, navigate to your WordPress installation root directory and open "wp-config.php". For example, if you’re using a French translation, you’ll need to add the "fr\_FR.po" and "fr\_FR.mo" files to your theme folder, then set your language in "wp-config.php", like this:
    
    `define('WPLANG', 'fr_FR');`

Language code for English should look like this:

`define('WPLANG', 'en_US');`8.  Save your "wp-config.php file", upload it to your WordPress installation, and you are ready to go.

### Widget

Widget is a fancy word for tools or content that you can add, arrange, and remove from the sidebars of your blog. Widgets make it easy to customize the content of your blog sidebar. You can access the widgets page from the Appearance menu in your Dashboard.

![image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/widgets.png)

To open and close a widget, mouse over the widget bar and click the small arrow that appears to the right.

  

### Adding Widgets

To add a widget, drag the widget from the Available Widgets or Inactive Widgets area on the left into the Sidebar area on the right. When you see a dashed line appear, you can drop the widget into place.

You can also change the order of the widgets by dragging and dropping them around in the sidebar.

### Configuring Widgets

Each widget has configuration options. To make changes to a widget in the sidebar, click on the triangle on the right side. This will open up the options for the widget. Each widget will be different.

After you have have configured the widget, click the Save button. Clicking the Close link will minimize the configuration options again.

  

### Removing Widgets

If you would like to remove a widget from the sidebar, click the Delete link in the configuration options as show above.

  

### Unlimited sidebars with Theme Panel

Create new sidebar and assign it to any page or post. Now you can design special sidebars for each page with easy.

![Muttley sidebars](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/theme-panel-sidebars.png)

Go to -> Theme Panel -> Sidebars. Click on "Add Sidebar", then in the field labeled 'Name' type the name of your sidebar and click on 'Save' button. Now you can add widgets to the new sidebar. Go to a page or post where you want to see your sidebar. Select your sidebar in the page options and click on save button. Your sidebar should be now visible on the site.

![image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/page-sidebars.png)

### CSS

![Image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/customizer-css.png)

Your theme consists of two basic CSS files. The first one (style.css) holds all of your theme's base CSS styles. The second set of CSS styles is located in your theme's root directory /styles/ This folder contains all of the separate CSS files for your theme's skin variations.

You can make changes in CSS style through: Appearance -> Customize -> Additional CSS.

Every main CSS style rule can be adjusted. **Whenever you want to change theme style always use this field.** When you do that you'll have assurance that **whenever you upgrade the theme, your code will stay untouched.** Avoid making changes to "style.css" file directly. Whenever you change something, you can always export your data.

### How to customize everything

Every single element in this theme can be easily customized with the help of Yellow Pencil Plugin. In order to use it, simple click on Edit with Yellow Pencil and then Global Customize from the Admin Bar.

![Image](file:///W:/Website/Wordpress/Themes/Angio/Documentation/photos/customizer-yellow-pencil.png)

After that you will be taken to the Yellow Pencil's Front End Editor, where editing things is very simple and intuitive.

People and links that we want to say thank you!

### Plugins

-   [Elementor: Lightweight &Extremely Powerful WordPress Page Builder Plugin](https://elementor.com/)
-   [Contact Form 7](http://contactform7.com/)

### Javascripts

-   [JavaScript 3D Libary](https://threejs.org/)
-   [GSAP Smooth Animation Engine](https://greensock.com/gsap/)
-   [Smooth Scrollbar](https://github.com/idiotWu/smooth-scrollbar)
-   [BasicLightbox - The lightest Lightbox ever made](https://basiclightbox.electerious.com/)

### Images

-   [Pexels](https://www.pexels.com/)
-   [Unsplash](https://unsplash.com/)

### Icons

-   [IcoMoon](http://icomoon.io/)

### Fonts

-   [Google Fonts - Roboto](https://fonts.google.com/specimen/Roboto)

### Support Policy.

Just for the record: we provide theme assistance because we consider ourselves as proffesionals and not because it is required from Envato authors. We will do our best to answer all your questions and help you, but sometimes you have to be patient. Modifications and 3rd party plugins are not subject to support - sorry.

##### Before you ask.

Make sure that you have read documentation which was in theme package - it contains useful information on how to install and use the theme. You may be familiar with our FAQ section too.

##### Range of support.

Installation, customization or administration of WordPress itself are not a subject of support. We also do not provide support for any third party plugins or problems associated with using them with our themes. We focus on topics like installation and configuration of the theme, usage of theme features and potential bugs fix. We do not provide customization services. Support will not be provided when you want to modify the theme to suit your specific needs or when you want feature 'X' to be integrated with the theme.

##### Working Hours.

Rascals Themes office is located in Poland (EU) and our working hours are 8:00AM - 4:00PM (GMT +1) on workdays (Monday to Friday excluding public holidays).

___

[Premium Support](http://rascalslabs.ticksy.com/) [Basic FAQs](http://rascals.eu/faq)