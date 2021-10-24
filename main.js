const linksSocialMedia = {
  //constante gobal por isso ela ta fora,pode ser chamada em qualquer lugar do codigo]
  github: 'Anad4rc',
  youtube: ' ',
  facebook: ' ',
  instagram: 'anna_d4rc',
  twitter: ' '
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    //laço de repetição
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}` //templete string

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

getGitHubProfileInfos() //pra função ser chamad atem que colocar ela fora das chaves//
