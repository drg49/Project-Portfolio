const openLink = (x) => {
    open("https://" + x);
}

const setTheme = (x) => {
    localStorage.setItem("theme", x)
    const theme = localStorage.getItem("theme")
    if (theme === "1") {
        $("body, main, form").css("background-color", "#1FA1B8");
        $("#header").css("background-color", "#1fa1b8d3");
        $("li").css("color", "black");
        $("li").hover(function(){
            $(this).css("color", "#99AFD7");
            $(this).css('textShadow','3px 3px #065664');
            }, function(){
            $(this).css("color", "black");
            $(this).css('textShadow','none');
          });
        $("#turn-blue, #about-section, #contact-heading").css("background-image", "linear-gradient( 171.8deg,  rgba(5,111,146,1) 13.5%, rgba(6,57,84,1) 78.6% )")
        $("#name, #greeting, #full-stack").css("color", "white")
        $("#fet, #bet").css("color", "white")
        $("#main-heading, #about, #contact").css("color", "whitesmoke")
        $("#about-p").css("color", "white")
        $("figcaption").css("color", "white")
        $("#jslogo").css("color", "yellow")
        $("form").css("border", "3px groove darkblue")
        $(".form-label").css("color", "white")
        $("#menu-icon").css("color", "black")
        $("#linked-in, #github, #resume").css("color", "white")
        $(".modals").css("background-color", "#96CDCD")
        $(".close-button, .title").css("color", "black")
        if(window.matchMedia("(max-width: 768px)").matches) {
            $("li").css("color", "black")
            $("li").hover(function(){
                $(this).css("color", "#99AFD7");
                $(this).css('textShadow','none');
                }, function(){
                $(this).css("color", "black");
                $(this).css('textShadow','none');
              });
        }
        document.getElementById("blue").checked = true
    }
    if (theme === "2") {
        $("body, main, form").css("background-color", "#0c0032");
        $("#header").css("background-color", "#190061d3");
        $("li").css("color", "white");
        $("li").hover(function(){
            $(this).css("color", "#1261A0");
            $(this).css('textShadow','3px 3px #3500D3');
            }, function(){
            $(this).css("color", "white");
            $(this).css('textShadow','none');
          });
        $("#turn-blue, #about-section, #contact-heading").css("background-image", "linear-gradient(90deg, rgba(58,27,152,1) 25%, rgba(46,2,172,1) 71%)")
        $("#name, #greeting, #full-stack").css("color", "white")
        $("#fet, #bet").css("color", "white")
        $("#main-heading, #about, #contact").css("color", "whitesmoke")
        $("#about-p").css("color", "white")
        $("figcaption").css("color", "white")
        $("#jslogo").css("color", "yellow")
        $("form").css("border", "3px groove blue")
        $(".form-label").css("color", "white")
        $("#menu-icon").css("color", "white")
        $("#linked-in, #github, #resume").css("color", "white")
        $(".modals").css("background-color", "purple")
        $(".close-button, .title").css("color", "white")
        if(window.matchMedia("(max-width: 768px)").matches) {
            $("li").css("color", "white")
            $("li").hover(function(){
                $(this).css("color", "#1261A0");
                $(this).css('textShadow','none');
                }, function(){
                $(this).css("color", "white");
                $(this).css('textShadow','none');
              });
        }
        document.getElementById("dark").checked = true
    }
    if (theme === "3") {
        $("body, main, form").css("background-color", "#FFFF00");
        $("#header").css("background-color", "#FFFF00d3");
        $("li").css("color", "black");
        $("li").hover(function(){
            $(this).css("color", "brown");
            $(this).css('textShadow','3px 3px #CCCC00');
            }, function(){
            $(this).css("color", "black");
            $(this).css('textShadow','none');
          });
        $("#turn-blue, #about-section, #contact-heading").css("background-image", "linear-gradient(90deg, rgba(0,0,0,1) 8%, rgba(0,0,0,1) 71%)")
        $("#name, #greeting, #full-stack").css("color", "yellow")
        $("#fet, #bet").css("color", "black")
        $("#main-heading").css("color", "black")
        $("#about, #contact").css("color", "yellow")
        $("#about-p").css("color", "yellow")
        $("figcaption").css("color", "yellow")
        $("#jslogo").css("color", "darkorange")
        $(".form-label").css("color", "black")
        $("form").css("border", "3px solid brown")
        $("#menu-icon").css("color", "black")
        $("#linked-in, #github, #resume").css("color", "yellow")
        $(".modals").css("background-color", "yellow")
        $(".close-button, .title").css("color", "black")
        if(window.matchMedia("(max-width: 768px)").matches) {
            $("li").css("color", "black")
            $("li").hover(function(){
                $(this).css("color", "brown");
                $(this).css('textShadow','none');
                }, function(){
                $(this).css("color", "black");
                $(this).css('textShadow','none');
              });
        }
        document.getElementById("bee").checked = true
    }
    if (theme === "4") {
        $("body, main, form").css("background-color", "#ff7077");
        $("#header").css("background-color", "#ff7077d3");
        $("li").css("color", "black");
        $("li").hover(function(){
            $(this).css("color", "#79FF7A");
            $(this).css('textShadow','3px 3px #065664');
            }, function(){
            $(this).css("color", "black");
            $(this).css('textShadow','none');
          });
        $("#turn-blue, #about-section, #contact-heading").css("background-image", "linear-gradient(90deg, rgba(0,150,111,1) 0%, rgba(21,114,65,1) 71%)")
        $("#name, #greeting, #full-stack").css("color", "black")
        $("#fet, #bet").css("color", "black")
        $("#main-heading").css("color", "black")
        $("#about, #contact").css("color", "black")
        $("#about-p").css("color", "black")
        $("figcaption").css("color", "black")
        $("#jslogo").css("color", "yellow")
        $(".form-label").css("color", "black")
        $("form").css("border", "3px solid #75b855")
        $("#menu-icon").css("color", "#157241")
        $("#linked-in, #github, #resume").css("color", "#ff7077")
        $(".modals").css("background-color", "#ff7077")
        $(".close-button, .title").css("color", "black")
        if(window.matchMedia("(max-width: 768px)").matches) {
            $("li").css("color", "black")
            $("li").hover(function(){
                $(this).css("color", "#79FF7A");
                $(this).css('textShadow','none');
                }, function(){
                $(this).css("color", "black");
                $(this).css('textShadow','none');
              });
        }
        document.getElementById("melon").checked = true
    }
}
    
//Map over the data to generate a simpler/prettier data set
const projects = [
    // {
    //   description: "",
    //   giturl: "",
    //   image: "",
    //   liveurl: "",
    //   projectName: ""
    // }, 
    {
      description: "Piranha is a social media app that allows you to share images with the world. It uses the MERN stack and Amazon S3.",
      giturl: "https://github.com/drg49/drg49-public-repo/blob/main/README.md",
      image: "https://i.imgur.com/b01JZ9h.png",
      liveurl: "https://piranha-six.vercel.app/",
      projectName: "Piranha"
    },
    {
      description: "A full-stack forum app created with Ruby on Rails, PostgreSQL,  React, and Sass.",
      giturl: "https://github.com/drg49/drg49-public-repo/blob/main/README.md",
      image: "https://i.imgur.com/bM7UPIG.png",
      liveurl: "https://healthylivingforums.vercel.app/",
      projectName: "Healthy Living Forums"
    },
    {
      description: "Using the MealDB API, I created an awesome recipe app with 274 meals, 274 images, and 510 total ingredients. You can search for recipes by cuisine, category, or main ingredient!",
      giturl: "https://github.com/drg49/Instant-Recipe",
      image: "https://i.imgur.com/l4ZKxzK.png",
      liveurl: "https://instant-recipe.vercel.app/",
      projectName: "Instant Recipe"
    },
    {
      description: "Fun, tricky, and short quizzes made with HTML, CSS, and Vanilla JavaScript.",
      giturl: "https://github.com/drg49/quizzie",
      image: "https://i.imgur.com/cP0kjnL.png",
      liveurl: "https://quizzie-pi.vercel.app/",
      projectName: "Quizzie"
    },
    {
      description: "This app is programmed completely in Vanilla JavaScript. Type your income at the top, add as many expenses as you want, and $ea Budget will tell you how much you have left over!",
      giturl: "https://github.com/drg49/sea_budget",
      image: "https://i.imgur.com/Hob7UWy.png",
      liveurl: "https://sea-budget.vercel.app/",
      projectName: "$ea Budget"
    },
    {
      description: "Excited for an event to take place? Count down the days until it happens! This app was created in one day and is completely responsive in design.",
      giturl: "https://github.com/drg49/countdown_app",
      image: "https://i.imgur.com/lEnSm0V.png",
      liveurl: "https://countdown-app-ddg49.vercel.app/",
      projectName: "Countdown App"
    },
]
    
    const $main = $("main");
    projects.forEach((project) => {
        const $div = $("<div>");
        $div.html(`<project-card projectName="${project.projectName}" img="${project.image}" description="${project.description}" github="${project.giturl}" liveurl="${project.liveurl}"></project-card>`);
        $main.append($div);
    })

    const openModalButtons = document.querySelectorAll("[data-modal-target]")
    const closeModalButtons = document.querySelectorAll("[data-close-button]")
    const overlay = document.getElementById("overlay")

    openModalButtons.forEach(button => {
        button.addEventListener('click', ()=> {
            const modal = document.querySelector(button.dataset.modalTarget)
            openModal(modal)
        })
    })

    overlay.addEventListener("click", () => {
        const modals = document.querySelectorAll('.modals.active')
        modals.forEach(modal => {
            closeModal(modal)
        })
    })

    closeModalButtons.forEach(button => {
        button.addEventListener('click', ()=> {
            const modal = button.closest('.modals')
            closeModal(modal)
        })
    })

    function openModal(modal) {
        if (modal == null) return
        modal.classList.add('active')
        overlay.classList.add('active')
    }

    function closeModal () {
        if (modal == null) return
        modal.classList.remove('active')
        overlay.classList.remove('active')
    }
