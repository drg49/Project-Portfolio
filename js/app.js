let a = 0;
let b = 0;
let c = 0;
let txtOne = 'Hello there, my name is';
let txtTwo = 'Daniel Gavin';
let txtThree = 'Full stack developer from Thousand Oaks, California.'

function typeWriter() {
  if (a < txtOne.length) {
    document.getElementById("greeting").innerHTML += txtOne.charAt(a);
    a++;
    setTimeout(typeWriter, 40);
  }
}
setTimeout(function typeTwo () {
    if (b < txtTwo.length) {
        document.getElementById("name").innerHTML += txtTwo.charAt(b);
        b++;
        setTimeout(typeTwo, 70);
      }
}, 1320);
setTimeout(function typeThree () {
    if (c < txtThree.length) {
        document.getElementById("full-stack").innerHTML += txtThree.charAt(c);
        c++;
        setTimeout(typeThree, 30);
      }
}, 2600);


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
