function getQueryStringValue (key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}
// variable for the id
var id = getQueryStringValue("id");


fetch("csvjson.json")
  .then(result => result.json())
  .then((res) => {
    createSpecific(res);
    })
  .catch(err => console.log(err))

function createSpecific(result) {

    var cardDetails = document.getElementById('cardDetails');
    var year = document.getElementById('year');
    var h2 = document.createElement("h2");
    var h2Text = this.id;
    var titleH4 = document.createElement("h4");
    var kommuneH4 = document.createElement("h4");
    var urlH4 = document.createElement("h4");
    var titleText = "Tittel:"
    var kommuneText = "Kommune:"
    var urlText = "Url:"
    h2.append(h2Text);
    //titleH4.append(titleText);
    //kommuneH4.append(kommuneText);
    //urlH4.append(urlText);

    year.append(h2);
    cardDetails.append(titleH4);
    cardDetails.append(kommuneH4);
    cardDetails.append(urlH4);
    var myCards = result.cards;

  var h1Text = "Norge Rundt Appen";

  for (var i = 0; i < result.length; i++) {
    if (result[i].aar + ".html" == this.id) {
      var title = result[i].tittel;
      var pTittel = document.createElement("p");
      pTittel.append("Tittel: " + title);
      cardDetails.append(pTittel);

      var kommune = result[i].kommune;
      var pKommune = document.createElement("p");
      pKommune.append("Kommune: " + kommune);
      cardDetails.append(pKommune);

      var videoUrl = result[i].video_url;
      var p = document.createElement("p");
      var a = document.createElement("a");
      var hr = document.createElement("hr");
      p.append("Url: " + videoUrl);
      a.append(p);
      a. href = videoUrl;
      a. classList = ("yearsA");
      cardDetails.append(a);

      cardDetails.append(hr);
    } else {
    }

  }

}
