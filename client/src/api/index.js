export default async function request(url, method = 'GET', data = null, headers = {}) {
  try {
    let body;

    if (data) {
      headers['Content-Type'] = 'application/json';
      body = JSON.stringify(data);
    }

    const response = await fetch(url, { method, headers, body });

    if (!response.ok) {
      const data = await response.json()

      if (data?.errors) {
        const { errors } = data;
  
        errors.forEach(error => {
          window.M.toast({ html: error.msg, classes: 'red' });
        })
  
      } else {
        window.M.toast({ html: data.message, classes: 'red' });
      }
      return;
    }

    return await response.json();
  } catch (e) {
    console.log(e);
  }
}