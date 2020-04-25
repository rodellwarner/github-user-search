"use strict"





function handleSubmit() {
  $('#form').submit(function() {
    event.preventDefault();
    getUserRepos();
    console.log('handleSubmit ran');
  })
}

function getUserRepos() {
  let userName = $('#textInput').val();
  console.log(userName);
  console.log('getUserRepos ran');
  fetch('https://api.github.com/users/' + userName + '/repos')
  .then(function(response) {
    return response.json();
  })
  .then(function (repos) {
    const repoInfo = repos.map(function(repo) {
      
    })
  });
}



function handleGithubUserSearch() {
  console.log('handleGithubUserSearch ran');
  handleSubmit();
}

$(handleGithubUserSearch);

















