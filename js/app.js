let a = 0;  
let b = 0;
let c = 0;
let txtA = 'Hello there, my name is';
let txtB = 'Daniel Gavin';
let txtC = 'Full stack developer from Thousand Oaks, California.';


function typeA() {
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
}, 2300);
setTimeout(function fadeA () {
$("#links").fadeIn("");
}, 4400)

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
    
    
})
.catch((error) => {
    console.log(error);
})
