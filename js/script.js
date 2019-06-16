fetch("csvjson.json")
  .then(result => result.json())
  .then((res) => {
    createCards(res);
    })
  .catch(err => console.log(err))

function createCards(result) {

  var years = [1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986,
               1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997,
               1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008,
               2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019]

  var myContainer = document.querySelector('.container');

  for (var i = 0; i < years.length; i++) {
    var div = document.createElement("div");
    var a = document.createElement("a");
    var p = document.createElement("p");
    var allYears = years[i];
    p. classList = ("frontpageP")
    div.classList = ("box");
    div.append(p);
    p.append(allYears);
    var specific = "specific.html?id=";
    a.append(div);
    a. href = specific + allYears + ".html";
    myContainer.append(a);
  }
}


function searchResult() {

  fetch("csvjson.json")
    .then(result2 => result2.json())
    .then((res2) => {
      filterResult(res2);
      })
    .catch(err => console.log(err))
}

function filterResult(result2) {

  var myInput = document.getElementById("myInput");
  var filter = myInput.value.toUpperCase();


  for (var i = 0; i < result2.length; i++) {
      var results = result2[i].kommune.toUpperCase();

      if (filter === results) {
        //console.log(result2[i].aar);
        var myContainer = document.querySelector('.container');
        myContainer.style.display = "none";

        var outputContainer = document.querySelector(".search-container");
        var a = document.createElement("a");
        var tittelP = document.createElement("p");
        var aarP = document.createElement("p");
        var urlP = document.createElement("p");
        var hr = document.createElement("hr");
        var tittel = result2[i].tittel;
        var aar = result2[i].aar;
        var url = result2[i].video_url;

        tittelP.append(tittel);
        aarP.append(aar);
        urlP.append(url);
        a.append(urlP);
        a. href = url;
        a. style.width = "80%";
        a. classList = ("yearsA");
        hr. classList = ("searchHr");
        outputContainer.append(tittelP);
        outputContainer.append(aarP);
        outputContainer.append(a);
        outputContainer.append(hr);

      } else {
        
      }
  }
}
