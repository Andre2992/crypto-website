

  var queryURL = 'https://newsapi.org/v2/everything?' +
  'q=Bitcoin&' +
  'from=2018-01-01&' +
  'sortBy=popularity&' +
  'apiKey=c91847ec964243038db42e65ab4c8169';
//var req = new Request(queryURL);
//var req = new Request(url);
var limit = 3;
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {
  var results = response.articles;

  for(var i = 0; i <limit; i++){
    var res=results[i];
    console.log(res);
    var cryptoDiv = $('<div class ="mycrypto">');
    var cryptImage = $("<img>");
    cryptImage.attr("src", res.urlToImage);
    var crypto1 = res.title;
    var crypto2 = res.author;
    var crypto3 = res.description;
    var crypto4 = res.url;
    var link = $('<a>').attr('href', crypto4).text(crypto4);
    link.a
    var cryptfo = $('<div class ="crypto">').html("More Info: " + crypto1 + crypto2 + crypto3);
    cryptoDiv.append(link);
    $("img").width(100);
    $("img").height(100);
    
   cryptoDiv.append(cryptImage);
   cryptoDiv.append(cryptfo); 

   $("#crypto-info-here").append(cryptoDiv);
   
  }
});

