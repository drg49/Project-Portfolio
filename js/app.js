let a = 0;  
let b = 0;
let c = 0;
let txtA = 'Hi there, my name is';
let txtB = 'Daniel Gavin';
let txtC = 'Full stack developer from Thousand Oaks, California';

const typeA = () => {
  if (a < txtA.length) {
    document.getElementById("greeting").innerHTML += txtA.charAt(a);
    a++;
    setTimeout(typeA, 37);
  }
}
setTimeout(function typeB () {
    if (b < txtB.length) {
        document.getElementById("name").innerHTML += txtB.charAt(b);
        b++;
        setTimeout(typeB, 72);
      }
}, 1200);
setTimeout(function typeC () {
    if (c < txtC.length) {
        document.getElementById("full-stack").innerHTML += txtC.charAt(c);
        c++;
        setTimeout(typeC, 30);
      }
}, 2200);

const openLink = (x) => {
    open("https://" + x);
}

const setTheme = (x) => {
    localStorage.setItem("theme", x)
    const theme = localStorage.getItem("theme")
    console.log(localStorage)
    if (theme === "1") {
        $("body, main, form").css("background-color", "#1FA1B8");
        $("#header").css("background-color", "#1fa1b8d3");
        $("li").css("color", "black");
        $("li").hover(function(){
            $(this).css("color", "#79FF7A");
            $(this).css('textShadow','3px 3px #065664');
            }, function(){
            $(this).css("color", "black");
            $(this).css('textShadow','none');
          });
        $("#turn-blue, #about-heading, #contact-heading").css("background-image", "linear-gradient( 171.8deg,  rgba(5,111,146,1) 13.5%, rgba(6,57,84,1) 78.6% )")
        $("#name, #greeting, #full-stack").css("color", "white")
        $("#name, #fet, #bet").css("background", "(rgb(255, 255, 255), rgb(177, 177, 177))")
        $("#fet, #bet").css("color", "white")
        $("#main-heading, #about, #contact").css("color", "whitesmoke")
        $("form").css("border", "3px groove darkblue")
        $(".modals").css("background-color", "black")
        $(".close-button, .title").css("color", "white")
        if(window.matchMedia("(max-width: 768px)").matches) {
            $("li").css("color", "white")
            $("li").hover(function(){
                $(this).css("color", "white");
                $(this).css('textShadow','none');
                }, function(){
                $(this).css("color", "white");
                $(this).css('textShadow','none');
              });
        }
        document.getElementById("blue").checked = true
    }
    if (theme === "2") {
        $("body, main, form").css("background-color", "#1FA1B8");
        $("#header").css("background-color", "#1fa1b8d3");
        $("li").css("color", "black");
        $("li").hover(function(){
            $(this).css("color", "#79FF7A");
            $(this).css('textShadow','3px 3px #065664');
            }, function(){
            $(this).css("color", "black");
            $(this).css('textShadow','none');
          });
        $("#turn-blue, #about-heading, #contact-heading").css("background-image", "linear-gradient( 171.8deg,  rgba(5,111,146,1) 13.5%, rgba(6,57,84,1) 78.6% )")
        $("#name, #greeting, #full-stack").css("color", "white")
        $("#name, #fet, #bet").css("background", "(rgb(255, 255, 255), rgb(177, 177, 177))")
        $("#fet, #bet").css("color", "white")
        $("#main-heading, #about, #contact").css("color", "whitesmoke")
        $("form").css("border", "3px groove darkblue")
        $(".modals").css("background-color", "black")
        $(".close-button, .title").css("color", "white")
        if(window.matchMedia("(max-width: 768px)").matches) {
            $("li").css("color", "white")
            $("li").hover(function(){
                $(this).css("color", "white");
                $(this).css('textShadow','none');
                }, function(){
                $(this).css("color", "white");
                $(this).css('textShadow','none');
              });
        }
        document.getElementById("dark").checked = true
    }
    if (theme === "3") {
        document.getElementById("bee").checked = true
    }
    if (theme === "4") {
        document.getElementById("melon").checked = true
    }
}

const start = () => {
    typeA()
    setTheme(localStorage.getItem("theme"))
}

///////////////////////////////////
// Get data from Google Sheets
///////////////////////////////////
$.ajax("https://spreadsheets.google.com/feeds/list/10vCKRW3pH7xYwJO6E_0_ufhaKcfvna8j6HUz9hPKhbA/1/public/full?alt=json")
//.then for when the data arrives
.then((data) => {
    
    //Map over the data to generate a simpler/prettier data set
    const projects = data.feed.entry.map((item) => {
        return {
            description: item.gsx$description.$t,
            giturl: item.gsx$giturl.$t,
            image: item.gsx$image.$t,
            liveurl: item.gsx$liveurl.$t,
            projectName: item.gsx$project.$t
        }
    })
    
    const $main = $("main");
    projects.forEach((project) => {
        const $div = $("<div>");
        $div.html(`<project-card projectName="${project.projectName}" img="${project.image}" description="${project.description}" github="${project.giturl}" liveurl="${project.liveurl}"></project-card>`);
        $main.append($div);
    })
    //When project cards load, the rest of the content will load
    document.getElementById("main-heading").style.display = "block"
    document.getElementById("about-heading").style.display = "block"
    document.getElementById("tools").style.display = "block";
    document.getElementById("contact-heading").style.display = "block";

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

})
.catch((error) => {
    console.log(error);
})
