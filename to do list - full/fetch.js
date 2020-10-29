



  const apiUrl = `https://jsonbox.io/box_978ac4880a2013d9b13f`;
  async function getData() {
      try {
          const res = await fetch(apiUrl);
          return res.json();
      } catch (error) {
          console.log(`Something went wrong: ${error}`);
      }
  };


  async function postData(input) {
      const data = {description: input, done: true};
      await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
      });
      return pushData();
  }
  async function deleteData(id) {
      const deleteUrl = apiUrl + "/" + id;
      await fetch(deleteUrl, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
      });
      return pushData();
  }