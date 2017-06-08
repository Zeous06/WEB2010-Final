const api_endpoint = 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch='
const wiki_link = 'https://en.wikipedia.org/wiki/'
const btn = document.querySelector('#searchButton')
const input = document.querySelector('#searchBox')
const articlesContainer = document.querySelector('#articlesContainer')

btn.addEventListener('click'), function(){
  console.log(input.value)
}
    $.ajax({
    url: api_url + input.Value,
    dataType: 'jsonp',
    success: function (response)
    console.log(response)

let articlesString = ''

        response.query.search.forEach = (function)('article'){
          articleString += (article.title);
          articleString += (article.snippet);
          console.log(articlesString);
          articlesContainer.innerHTML += articleString
        }
  })
