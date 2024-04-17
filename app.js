const apiKey = "ESnB7T1FQzBCoXVZRCXQe5FJxQL2stU61GXDWcLh";

const quoteText = document.getElementById("quote"),
  authorName = document.getElementById("author"),
  newQuoteBtn = document.getElementById("new-quote"),
  category = document.getElementById("category"),
  loading = document.getElementById('loading');

newQuoteBtn.addEventListener("click", () => {
    loading.style.display = 'block'
  const selectCategory = category.value;
    const url = `https://api.api-ninjas.com/v1/quotes?category=${selectCategory}&X-Api-Key=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        loading.style.display = 'none'
        quoteText.textContent = `"${data[0].quote}"`
        authorName.textContent = `-- ${data[0].author}`
      }).catch(error =>{
        quoteText.textContent = `"${error.message}" Something went worng.`
        authorName.textContent = `-- ${error.name}`
      })
   
});
