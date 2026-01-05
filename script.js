async function getQuote(){
  const quoteEl = document.getElementById('quote');
  quoteEl.innerText = 'Loading...';

  try{
    const res = await fetch('https://api.quotable.io/random');
    const data = await res.json();
    quoteEl.innerText = `"${data.content}" — ${data.author}`;
  }catch{
    quoteEl.innerText = 'Failed to load quote';
  }
}
