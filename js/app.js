///////////////////////////////////
// Get data from Google Sheets
///////////////////////////////////
$.ajax("https://spreadsheets.google.com/feeds/list/10vCKRW3pH7xYwJO6E_0_ufhaKcfvna8j6HUz9hPKhbA/1/public/full?alt=json")
//.then for when the data arrives
.then((data) => {
    console.log(data)
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
        $div.html(`<project-card projectName="${project.projectName}" img="${project.image}" description="${project.description}" github="${project.giturl}"></project-card>`);
        $main.append($div);
    })
    
    
})
.catch((error) => {
    console.log(error);
})
