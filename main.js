//Create an object which will contain all the variables which will be used
const socialMediaAccounts = {
  github: 'itsmeEric',
  youtube: 'jakelinygracielly',
  instagram: 'jakeliny.gracielly',
  facebook: 'eric.mbarushimana.3',
  twitter: 'jakelinytec'
}
//Create a function  which will be used to call the object and tell it what to do
function changeSocialMediaLinks() {
  // Create a cicle in which it will perform the circulation in the ul(unordened list) in html through the ID name
  for (let li of socialMediaLinks.children) {
    // Create a variable which will take a new name and change it in the li(lists) through the class name
    const social = li.getAttribute('class')
    /*Look for the specific children inline the tag, in this case (href) then
      Assign the name(in this case social ) variable name, on the specific/related name variable from the object(socialMediaAccounts)
      Plus , using the template string(`${}`), to input a variable(social) in between a string to call it and do the same for the object(socialMediaAccounts), then put the new variable(socila) in between the object do that it can look through the object the exact same variable(with the same name)*/
    li.children[0].href = `https://${social}.com/${socialMediaAccounts[social]}`
    //Run the for command whilst changing the href(children) of (li) which is in the first position to the new one
    //alert(li.children[0].href)
  }
}
function githubProfileInfos() {
  const url = `https://api.github.com/users/${socialMediaAccounts.github}`
  //Create an Fetch function so that it can take the json documentation of the github api, then connect  with a created arrow function so that we can make the changes
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
//Run the function which will enable the changes
githubProfileInfos()
// Run the code calling the function so that it could to its job
changeSocialMediaLinks()
