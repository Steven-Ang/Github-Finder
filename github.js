class GitHub {
  constructor() {
    this.client_id = "bedeb1654e272cb27c79";
    this.client_secret = "0a1115957859bbced701e2f8301bb149b63f1f48";
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();

    return {
      profile: profileData
    }
  }
}