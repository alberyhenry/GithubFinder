class UI{
  constructor(){
    this.profile = document.getElementById('profile')
  }
  showProfile(user){
    let zozo = {...user}
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}">
          <a class="btn btn-primary btn-block mb-3" href="${user.html_url} target="_blank">Show Profile</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary p-2">Public Repos : ${user.public_repos}</span>
          <span class="badge badge-secondary p-2">Public Gists : ${user.public_gists}</span>
          <span class="badge badge-success p-2">Followers : ${user.followers}</span>
          <span class="badge badge-info p-2">Following : ${user.following}</span>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item">Comapny : ${user.company}</li>
            <li class="list-group-item">Website/Blog: ${user.blog}</li>
            <li class="list-group-item">Location : ${user.location}</li>
            <li class="list-group-item">Member Since : ${user.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class="display-4 mb-3">Latest Repos</h3>
    <div id="repos"></div>
    `
  }
  // show repos
  showRepos(repos){
    let output = '';
    repos.forEach(function(repo){
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.name}" target="_blank">${repo.html_url}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary p-2">Stars : ${repo.stargazers_count}</span>
              <span class="badge badge-secondary p-2">Watchers : ${repo.watchers_count}</span>
              <span class="badge badge-success p-2">Forks : ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `
    });
    document.getElementById('repos').innerHTML = output;
  }
  // show alert
  showAlert(message, className){
    //clear any remaining alert
    this.clearAlert();
    //
    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));
    container.insertBefore(div, search);
    // tiemout after 3se
    setTimeout(()=> this.clearAlert(), 2000)
  }

  clearAlert(){
    const currentAlert = document.querySelector('.alert');
    if(currentAlert){
      currentAlert.remove();
    }
  }

  clearProfile(){
    this.profile.innerHTML = "";
  }

  
}