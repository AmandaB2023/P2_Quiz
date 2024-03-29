![logo](documentation/logo_quiz.webp)
# How Irish Are You

Is a multiple-choice Irish-themed trivia quiz about all things Ireland.

Link to live site: [How Irish Are You](https://amandab2023.github.io/P2_Quiz/)

## Contents
*   User Experience
    *   Site Owner Goals
    *   First Time User/ Returning Visitor/Frequent User
    *   Features to Achieve Goals
*   Site Structure
*   Features
    *   Header
    *   Start button
    *   Footer
    *   Main quiz area
    *   Results Page

*   Technologies Used
*   Design
    *   Color Scheme
    *   Typography
*   Wireframes
*   Testing
*   Deployment
    *   Deployment to Github pages
    *   Local Deployment
*   Future Improvements
*   Credits
    *   Content
    *   Media
    *   Tools
*   Acknowledgments

## User Experience

### Site Owner Goals
*   To be able to view the site on a range of device sizes.

*  For users to easily navigate the quiz.

*  For users to easily identify that the quiz is about Ireland.

*  For users to be able to start the quiz.

*  For users to be able to be able to get information on how to play the quiz the quiz.

*   For users to be able to be able to select between four different answers.
*   For users to be able to be able to identify the correct answer.

*   For users to be to provided with the correct answer if they select an incorrect answer.

*   For users to be able to get their end score.


### First Time / Returning Visitor / Frequent Visitor Goals

*   As a user, I want to be able to navigate the website using a variety of devices.

*   As a user, I want to be able to play the quiz without any bugs.

*   I want to be able to ascertain that I selected the correct answer.

*   I want to be able to be informed what the correct answer is if I select the incorrect answer.

*   As a user from outside of Ireland,  I want to gain information about Ireland as a country.

*   As an Irish citizen, I want to check my cultural knowledge.

*   As a user, I want to be able to check my final score.

### Features to Achieve Goals

*   The website will be built with a mobile-first approach, to ensure it is responsive. I will also test it on various devices and screen sizes.

*   General information about how to play the quiz will be provided before the start of the game.

*   The questions will be based on various aspects of Irish culture, geography, history and general Irish knowledge.

*   A results container will display the user's result to them at the end of the game.

## Site Structure
The website is comprised of two pages, one with a number of popup boxes that interchange throughout the quiz and the other is a 404 error page.

All pages will be:

* Responsive.

* Have a fixed header at the top with the quiz name and logo.

* The quiz area will be in the middle of the page and easy for the user to view .it will contain 

*   The footer at the bottom of the page will contain social media links and the current year.

## Features
The website consists of one main page, index.html where the entire quiz game will be played. This page is responsive to a variety of devices.

### Favicon
A favicon will be displayed in the page tab, this is an icon that is related to the theme of the quiz.

![Favicon](documentation/favicon-quiz.png)

### Header

The header which includes the name of the quiz and its logo is fixed to improve user experience. This will be displayed throughout the game.

![Header](documentation/quiz-header.webp)

### Main Section

*  This is the quiz area where all the game happens.
    *   When the user logs onto the website they are presented with a start button.

![Start](documentation/quiz-start.webp
)

*   When the user clicks the start button they are then presented with a popup information box about how to play the game. They are also presented with two buttons:
        *   Exit - which will exit the game and return the user to the main start screen when clicked, and 
        *   Play - which will bring the user to the main quiz when clicked. If play is not clicked then the quiz cannot begin.

![Information_Box](documentation/info-popup.webp)

*   When the user clicks Play the main game area is shown which consists of a timer, a question counter from one to ten, the question display area and four answer options.

![Quiz](documentation/quiz-popup.webp)

*   The timer counts down from 10 seconds.
*   The answer options change color on hover.
*   Both the questions and answers will be displayed randomly.
*    The question counter increases on each question answered until it reaches 10 questions.
*   When the user selects an answer it will turn green if correct or red if incorrect.

![Correct](documentation/quiz-incorrect.webp)

*   If user selects the incorrect answer then the correct answer will also be shown.
*   After selecting an answer the user will then click the next button to move to the next question.   
*   Once the user has answered 10 questions their result will be shown with a message and image, which will vary depending on the user's score.

![Result](documentation/quiz-result.webp)

###  Footer
*   The footer contains social media links, and the current year.
![Footer](documentation/quiz-footerJPG.webp)
## Technologies Used

*   HTML was used as the foundation of the site.
*   CSS - was used to add the styles and layout of the site.
*   CSS Flexbox - was used to arrange items on the pages.
*   Javascript was used to add functionality to the website.
*   Balsamiq was used to make wireframes for the website.
*   VSCode was used as the main tool to write and edit code.
*   Git was used for the version control of the website.
*   GitHub was used to host the code of the website.
*   Github Pages was used to deploy the website,
*   Canva was used to create the logo, background image and to resize images.
*   Google Fonts was used to import fonts for use on the website.
*   Font Awesome was used to add icons to the website.
*   Chrome screen recorder plugin was used to create gifs.
*   W3C CSS Validation [W3C CSS Validation](https://jigsaw.w3.org/css-validator/)
*   W3C Markup Validation [W3C Markup Validation](https://validator.w3.org/)
*   JSHint to validate my javascript code [JSHint](https://jshint.com/)

##  404 Page
![404](documentation/404.webp)
## Design

### Color Scheme
The color scheme was my idea and I took inspiration from the Irish colors being green, white and gold. I also focused n on using the Leaprucan image to make the quiz fun as they are distinctively Irish symbols.

![Colors](documentation/colors.png)

### Typography
I used Irish Glover for the font type as I thought it was a very suitable choice given the theme of my quiz.

![Font](documentation/quiz_font.webp)


## Wireframes

The wireframes for the website were designed using Balsamiq. The designs vary from the end layout in some places due to creative decisions made throughout the development process.

![Wireframe](documentation/Wireframe.png)

## Testing

Please refer to the [Testing](TESTING.md) file for all test-related documentation.


## Deployment


#### Deployment to GitHub Pages
The site was deployed to GitHub pages. The steps to deploy are as follows:
*   In the GitHub repository, navigate to the Settings tab
*   From the source section drop-down menu, select the Main Branch, then click "Save".
*   The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here: [Github](https://amandab2023.github.io/P2_Quiz/)

#### Local Deployment
In order to make a local copy of this project, you can clone it. In your IDE Terminal, type the following command to clone my repository.

1.   Sign in to GitHub, locate the repository and click to open the repository.

2.   On the repository main page, click the green code button where the files are located. 

3.   This will open a drop down menu.

4.   In the dropdown menu stay on the HTTPS option and click the copy icon button next to the URL to copy it.

5.   Next open Git Bash and type git clone and your directory link.#

6.  Then type cd and the directory name.

7. Then code . to open VS Studio using Windows.

![Github](documentation/github_image.JPG)

## Future Improvements

*  I would like to add a leaderboard.
*  I would like to add more questions.
*  I would also like to add different levels of questions.
*  I would like to add images to the score container for each result.

## Credits

#### Content
*   I got the colors for the social media icons from [Us Brand Colors](https://usbrandcolors.com/instagram-colors/)
*   Fonts were imported from Google Fonts.
*   Icons were imported from Font Awesome.
*   The Code Institute Love Maths project for the basic Javascript structure and quiz container display.

#### Media
*   The logo I created myself using [Canva](https://www.canva.com)
*   All images used are from [Canva](https://www.canva.com)

Tools
*   Canva was used to create the logo and to resize the images where needed.[Canva](https://www.canva.com)
*   Snipping Tool was used to take pictures of my screen for testing.
*   Freeconvert was used to convert my images from jpg or png to webp.[Link](https://www.freeconvert.com/)

## Acknowledgments

*   First and foremost my mentor Juliia Konovalova for all her advice and guidance on this project. She was very helpful when I was struggling to understand certain Javascript aspects.

*   Code Institute tutors and Slack community members for their support and help.

*   CodeVal on youTube (https://www.youtube.com/watch?v=PNRsd2CD4S8)

*   Web Dev Simplified on youtube(https://www.youtube.com/watch?v=riDzcEQbX6k)

*   CodeHal on youtube(https://www.youtube.com/watch?v=Vp8x8-reqZA&t=4761s)

*   W3Schools (https://www.w3schools.com/js/js_examples.asp)


