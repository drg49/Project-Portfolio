# Project Overview

**PROJECT NAME:** SEIR Project Portfolio

**PROJECT AUTHOR:** Daniel Gavin

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Incomplete
|Day 1| Wireframes / Priority Matrix / Timeline | Incomplete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Day 4| MVP & Bug Fixes | Incomplete
|Day 5| Final Touches | Incomplete
|Day 6| Present | Incomplete


## Project Description

At the end, my project will contain all my project links, images, and 

## Google Sheet

Include link to your google sheet here.  Here is the sample [Joe had used in class](https://docs.google.com/spreadsheets/d/10vCKRW3pH7xYwJO6E_0_ufhaKcfvna8j6HUz9hPKhbA/edit#gid=0) 

## Portfolio I want to Emulate

Search and compare at least 3 profile web sites.  Record your findings in the table below and include some aspect of the site that you would like to incorporate into your own site.

Link To Site  | One Thing I'd Like To Incorporate | 
| ------------- | ------------- |
| [denisechandler.com](https://www.dcfonts.com/)| mouseover animations on each website |
|[jkeohan.com](https://pierre.io/) | cursors and animations |
| [mattfarley.ca](https://mattfarley.ca/contact) |  at some point I would like to put a contact form that works so employers can reach me.

---

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page.  

- [Mobile](https://imgur.com/gallery/vbi6smu)
- [Tablet](https://imgur.com/gallery/PTZBBSk)
- [Desktop](https://imgur.com/gallery/vOzcxmR)

Wireframing Resources:

- [Mockflow](https://mockflow.com/app/#Wireframe)
- [Figma](https://www.figma.com/)


## Time/Priority Matrix 

[Link](https://imgur.com/gallery/D97UbRa)

Include a full list of features that have been prioritized based on the `Time and Priority` Matix.  This involves drawing a a square.  In the middle of the square, on the x axis draw a line.  The most left part of the line should start with 0hrs and the end of the line should include 2hrs.  This line will be used to estimate how much time any one feature will take to complete. 

Now draw a vertical line on the y axis.  The top of this line should have `High` and the bottom `Low`.  This line will be used to assign a priority to to each feature you wish to include in the project.  

Now create a separate list starting with A and assign it one of the features.  Continue to assign each feature a letter.  Once complete add each letter to the matrix assigning based on what your feel it's prioirty is an how long it will take to implement. If any one feature takes longer than 2hrs to complete than break it down into smaller tasks and reassign them a new letter. 

Once complete tally up the time and determine how long the project will take to complete. Now break those features into MVP and PostMVP so you can guarantee you will have a fully functioning project to demo. 

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP (examples)

- Pull data using google json api
- Render data on page 
- Allow user to choose favorites 
- Save their choices in firebase

#### PostMVP 

- Anything else that is not MVP

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### MVP
| Component | Priority | Estimated Time | Actual Time |
| Logo | H |  2hr | :---: | 
| Project Previews | H | 2hr | hr |
| Navbar and Flexbox | H | 2hr | hr |  
| Adding Form | H | 2hr|  hr | 
| Main section styling| M | 3hr | hr|
| Working with API | H | 3hrs|  hr | 
| Responsive | H | 2.5hr | hr | hr |
| Banner Image | M | 1.5hr |  hr |
  Project Web Component | H | 3hr | hr	
| Total | H | 21hrs| hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| Project Images | M |  2hr | :---: | 
| Project Image Hover | L | 2hr | -hr | hr |
| Drop-down Menu | M | 4hr | hr |
| Descriptions | L | 3hr | -hr | hr |
| Bootstrap | H | 3hr | hr |
| Other icons | L | 4hr | hr |
| Total | H | 15hrs| hrs |

## Additional Libraries
 I will only be using bootstrap for the CSS responsive Design, and I will also be using jQuery for DOM manipulation.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

This is a function I made a while back that changes the theme of the website to 'Dark' or 'Light'. It is very long and written in Vanilla JS. I used it in an old static website of mine.
```JS
function theme(x) {
  if(x==0) {
    document.querySelector("body").style.backgroundColor = "#e4e4e4";
    document.querySelector("h1").style.color = "#000000";
    document.querySelector("h1").style.borderColor = "#d1d1d1";
    document.querySelector("h1").style.backgroundColor = "#d1d1d1";
    document.querySelector("p").style.color = "#000000";
    document.getElementById("greetText").style.color = "#000000";
    document.getElementById("home").style.color = "#000000";
    document.getElementById("home").onmouseover = function() 
    {
        this.style.color = "blue";
    }
    document.getElementById("home").onmouseleave = function() 
    {
        this.style.color = "#000000";
    }
    document.getElementById("about").style.color = "#000000";
    document.getElementById("about").onmouseover = function() 
    {
        this.style.color = "blue";
    }
    document.getElementById("about").onmouseleave = function() 
    {
        this.style.color = "#000000";
    }
    document.getElementById("contact").style.color = "#000000";
    document.getElementById("contact").onmouseover = function() 
    {
        this.style.color = "blue";
    }
    document.getElementById("contact").onmouseleave = function() 
    {
        this.style.color = "#000000";
    }
    document.getElementById("labelA").style.color = "#000000";
    document.getElementById("labelB").style.color = "#000000";
  } else if (x==1) {
    document.querySelector("body").style.backgroundColor = "#121212";
    document.querySelector("h1").style.color = "#00bd10";
    document.querySelector("h1").style.borderColor = "#383838";
    document.querySelector("h1").style.backgroundColor = "#383838";
    document.querySelector("p").style.color = "#00e013";
    document.getElementById("greetText").style.color = "#00e013";
    document.getElementById("home").style.color = "#00e013";
    document.getElementById("home").onmouseover = function() 
    {
        this.style.color = "blue";
    }
    document.getElementById("home").onmouseleave = function() 
    {
        this.style.color = "#00e013";
    }
    document.getElementById("about").style.color = "#00e013";
    document.getElementById("about").onmouseover = function() 
    {
        this.style.color = "blue";
    }
    document.getElementById("about").onmouseleave = function() 
    {
        this.style.color = "#00e013";
    }
    document.getElementById("contact").style.color = "#00e013";
    document.getElementById("contact").onmouseover = function() 
    {
        this.style.color = "blue";
    }
    document.getElementById("contact").onmouseleave = function() 
    {
        this.style.color = "#00e013";
    }
    document.getElementById("labelA").style.color = "#00e013";
    document.getElementById("labelB").style.color = "#00e013";
  }
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
