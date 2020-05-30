const checkResponse = response => {
    if (response.status !== 200) {
      console.log(`Error with the request! ${response.status}`);
      return;
    }
    return response.json()
  }

  export function getFeeds() {
    return fetch(`http://localhost:4000/feeds`)
      .then(checkResponse)
      .catch(err => {
        throw new Error(`fetch feeds failed${err}`)
      })
  }
