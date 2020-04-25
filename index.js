"use strict"

function handleSubmit() {
  $('#form').submit(function() {
    event.preventDefault();
    $('.results').empty();
    getUserRepos();
  })
}

function getUserRepos() {
  let userName = $('#textInput').val();
  fetch('https://api.github.com/users/' + userName + '/repos')
  .then(function(response) {
    return response.json();
  })
  .then(function (repos) {
    const repoInfo = repos.map(function(repo) {
      $('.results').append(`<li><a href="${repo.html_url}">${repo.name}</a></li>`);
    })
  })
}

function handleGithubUserSearch() {
  handleSubmit();
}

$(handleGithubUserSearch);

















