class Github{
  constructor(){
    this.client_id = 'e330e21730da50795868';
    this.client_secret = '046d4e7bc241b4e9433615f9978b281e00efb653';
    this.repo_count = 5;
    this.repos_sort = 'created: asc';
  }
  async getUser(user){
    const resUser = await ( await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`) ).json();
    const repoResponse = await ( await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`) ).json();
    return {resUser, repoResponse}
  }
}