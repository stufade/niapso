async function getData() {
  try {
    const response = await fetch("http://localhost:1234/");
    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
}

getData();
