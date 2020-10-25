(function (global) {


var dc = {};

var database = "data/database.json";
var actor = "snippets/actorpage.html";
var browsetop = "snippets/browsetop.html";
var browse_tiles = "snippets/browsetiles.html";
var browse_container = "snippets/browsecontentcontainer.html";


var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};

var insertProperty = function (string, propName, propValue) {
  var propToReplace = "{{" + propName + "}}";
  string = string
    .replace(new RegExp(propToReplace, "g"), propValue);
  return string;
};

document.addEventListener("DOMContentLoaded", function (event) {

$ajaxUtils.sendGetRequest(
  database, buildAndShowBrowse, 
  true);


window.onload=function(){

  document.getElementById("nav-button").addEventListener("click", function() {
  var element = document.getElementById("header-background");
  var elementOther = document.getElementById("toggle-nav");
  var content = document.getElementById("collapsable-nav");
  element.classList.toggle("hidden");
  elementOther.classList.toggle("hidden");
  elementOther.classList.toggle("header");
  elementOther.classList.toggle("header-mini");
  });

  var searchBar = document.getElementById("search-bar");
  var searchBarMobile = document.getElementById("search-bar-mobile");

  var searchBarText = document.getElementById("search-bar-text");

  var searchBarTextMobile = document.getElementById("search-bar-text-mobile");

  var field = document.getElementById("search-query");

  var fieldMobile = document.getElementById("search-query-mobile");

  document.getElementById("search-bar-text").addEventListener("click", function() {
    searchBarText.classList.add("hidden");
    searchBar.classList.add("animate-search-bar");
    field.classList.remove("hidden");
    searchBar.classList.remove("deanimate-search-bar");
    field.focus();
  });


  field.onblur = function() {
    field.classList.add("hidden");
    searchBar.classList.remove("animate-search-bar");
    searchBar.classList.add("deanimate-search-bar");
    searchBarText.classList.remove("hidden");
  }

  document.getElementById("search-bar-text-mobile").addEventListener("click", function() {
    searchBarTextMobile.classList.add("hidden");
    fieldMobile.classList.remove("hidden");
    fieldMobile.focus();
  });


  fieldMobile.onblur = function() {
    fieldMobile.classList.add("hidden");
    searchBarTextMobile.classList.remove("hidden");
  }


  var all_objects = document.getElementsByClassName("items");

  function hide_all_objects() {
    document.getElementById("all").classList.remove("active-element");
    for (i=0;i<all_objects.length;i++) {
      all_objects[i].classList.add("display-none");
      all_objects[i].classList.remove("show-object");
    }
  }

  function toggle_objects(selected_object) {
    selected_object.classList.remove("display-none");
    selected_object.classList.add("show-object");
  }


  document.getElementById("singer").addEventListener("click", function() {
    hide_all_objects();
    var singer = document.getElementsByClassName("singer");
    for (i=0;i<singer.length;i++) {
      toggle_objects(singer[i]);
    }
  });

  document.getElementById("actor").addEventListener("click", function() {
    hide_all_objects();
    var actor = document.getElementsByClassName("actor");
    for (i=0;i<actor.length;i++) {
      toggle_objects(actor[i]);
    }
  });

  document.getElementById("rapper").addEventListener("click", function() {
    hide_all_objects();
    var rapper = document.getElementsByClassName("rapper");
    for (i=0;i<rapper.length;i++) {
      toggle_objects(rapper[i]);
    }
  });

  document.getElementById("all").addEventListener("click", function() {
    hide_all_objects();
    var all = document.getElementsByClassName("items");
    for (i=0;i<all.length;i++) {
      toggle_objects(all[i]);
    }
  });

}

});

function buildAndShowBrowse (database) {

  $ajaxUtils.sendGetRequest(browsetop, function(response) {

    insertHtml("#main-content", response);

    $ajaxUtils.sendGetRequest(browse_tiles, function(tiles) {

      var finalHtml = "";

      for (var i=0;i<database.length;i++) {
        var currentString = tiles;
        currentString = insertProperty(currentString, "name", database[i].name);
        currentString = insertProperty(currentString, "image_name", database[i].image_name);

        var classes = "";
        var db = database[i];
        for (var j=0;j<db.classes.length;j++) {
          classes = classes + " " + db.classes[j];
        }

        currentString = insertProperty(currentString, "classes", classes);

        finalHtml += currentString;
      }

      insertHtml("#insert-browse-tiles", finalHtml);

    }

      ,false);

  }
  ,false);

}






function actorScript() {

  var searchBarCol = document.getElementById("search-bar-col");
  var searchBarTextCol = document.getElementById("search-bar-text-col");
  var fieldCol = document.getElementById("search-query-col");
  
  document.getElementById("search-bar-text-col").addEventListener("click", function() {
    var height = searchBarTextCol.clientHeight;
    var class_height = "height: " + height + "px;";
    searchBarTextCol.classList.add("hidden");
    fieldCol.classList.remove("hidden");
    document.querySelector("#search-query-col").setAttribute("style", class_height);
    fieldCol.focus();
  });


  fieldCol.onblur = function() {
    fieldCol.classList.add("hidden");
    searchBarTextCol.classList.remove("hidden");
  }

  var ig = document.getElementById("e-f");
  var snapchat = document.getElementById("e-s");
  var ig_logo = document.getElementById("logo-ig");
  var snap_logo = document.getElementById("logo-snap");

  document.getElementById("click-instagram").addEventListener("click", function() {
    ig.classList.toggle("story-animate")
    ig_logo.classList.toggle("hidden")
  });
  document.getElementById("click-snapchat").addEventListener("click", function() {
    snapchat.classList.toggle("story-animate")
    snap_logo.classList.toggle("hidden")
  });

  var underButton = document.getElementById("under-button");

  document.getElementById("ig-button").addEventListener("click", function() {
    underButton.classList.add("c-b-animate-reverse");
    underButton.classList.remove("c-b-animate");
  });
  document.getElementById("snap-button").addEventListener("click", function() {
    underButton.classList.add("c-b-animate");
    underButton.classList.remove("c-b-animate-reverse");
  });

  var ig_button = document.getElementById("ig-button");
  var snap_button = document.getElementById("snap-button");

  document.getElementById("ig-button").addEventListener("click", function(self) {
    var stories_elements = document.getElementsByClassName("story-side");
    var logo_side = document.getElementsByClassName("logo-side");
    for (var i = 0; i < stories_elements.length; i++) {
      stories_elements[i].classList.replace("story-snapchat", "story-instagram");
      logo_side[i].innerHTML = '<img src="images/ig.png">';
    }
  });

  document.getElementById("snap-button").addEventListener("click", function(self) {
    var stories_elements = document.getElementsByClassName("story-side");
    var logo_side = document.getElementsByClassName("logo-side");
    for (var i = 0; i < stories_elements.length; i++) {
      stories_elements[i].classList.replace("story-instagram", "story-snapchat");
      logo_side[i].innerHTML = '<img src="images/snap.png">';
    }
  });
}

dc.loadActorPage = function (name, image_name) {

  showLoading("#main-content");


 $ajaxUtils.sendGetRequest(actor, function(actorHtml) {
    currentString = actorHtml;
    currentString = insertProperty(currentString, "name", name);
    currentString = insertProperty(currentString, "image_name", image_name);
    insertHtml("#main-content", currentString);
    actorScript();
 }
  , false);

};






global.$dc = dc;

}



)(window);




