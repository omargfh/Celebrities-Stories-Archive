document.addEventListener("DOMContentLoaded", function (event) {

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
	var searchBarCol = document.getElementById("search-bar-col");
	var searchBarMobile = document.getElementById("search-bar-mobile");
	var searchBarText = document.getElementById("search-bar-text");
	var searchBarTextCol = document.getElementById("search-bar-text-col");
	var searchBarTextMobile = document.getElementById("search-bar-text-mobile");
	var field = document.getElementById("search-query");
	var fieldCol = document.getElementById("search-query-col");
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

	var height = searchBarTextCol.clientHeight;
	var class_height = "height: " + height + "px;";

	document.getElementById("search-bar-text-col").addEventListener("click", function() {
		searchBarTextCol.classList.add("hidden");
		fieldCol.classList.remove("hidden");
		document.querySelector("#search-query-col").setAttribute("style", class_height);
		fieldCol.focus();
	});


	fieldCol.onblur = function() {
		fieldCol.classList.add("hidden");
		searchBarTextCol.classList.remove("hidden");
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
	})

	// document.querySelector("body").addEventListener("click", function() {
	// 	searchBarText.classList.remove("hidden");
	// });


})

