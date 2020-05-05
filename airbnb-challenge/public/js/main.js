(async function() {

  let loading = false
  let error = false

  const fetchData = async () => {
    const API_URL = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72'
    let data = []
    try {
      loading = true
      const response = await fetch(API_URL)
      data = await response.json()        
    } catch (err) {
      error = true
    } finally {
      loading = false
    } 

    return data
  }

  const homes = await fetchData()
  console.log('DATA: ', homes)
})()