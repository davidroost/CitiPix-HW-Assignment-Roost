// Roost Pseudocode:
// here's what I'm gonna do
// create a JavaScript file and link the HTML to this JS file
// The user types in a name of a city in the CITY-TYPE field
// when user clicks UPDATE we receive that information
// we will create a function that takes that information and
// checks the name of the city that the user typed and compares it to our lsit of cities
// if there is a match, then change the background to match that city
// this will happen without refreshing the page
// then we will create a prevent default that will prevent the
// page from flickering when we run our function again and again
// ----------------------------------------------------------------------------

$(document).ready(function(){
  // this function handler delays the code from executing until all DOM assets have been loaded

    $("#submit-btn").click(changeCityBackground);
    // this is an event listener (click handler) it hears when the submit button is clicked
    // when clicked, it runs the changeCityBackground function which I created
    // remember that when i hit enter I'm submitting the form, not activating the function,

    function changeCityBackground() {
    // this is the changeCityBackground function I created.
    // we're using .val() to get the user's input of the cityName below
    // from the HTML page on id city-type which is the box where the user types in
    // their information
          var cityName = $("#city-type").val().toUpperCase();
          // because we left val blank we're reading the value
          // if we pt a parameter in there we would be setting the parameter to
          // whatever value i set in there....

          // So now I'm going to have the field "city-type" be cleared every time
          // I submit the form... not click enter. (although it might still work)
          $('#city-type').val("");

          // In the line above I've Called a function, on the field "city-type"
          // we've set the parameter to the value of "" which means the field will
          // clear and reset when we submit the form

          if (
            cityName === "NYC" ||
            cityName === "N.Y.C" ||
            cityName === "N.Y." ||
            cityName === "NEW YORK" ||
            cityName === "NEW YORK CITY")
            {$("body").attr("class", "nyc");}

          // within the Variable cityName we're assigning a value,
          // the value we're assigning it to is the return or output of an IF
          // .val is a jquery Function - it returns the value of whatever the
          // selector is, in this case its the value of the HTML id "city-type"

          // Then we performed the jquery function .toUpperCase, this will convert
          // whatever text is withing the selector to uppercase, the reason we're doing
          // that is so that our text can be not case sensitive, as any casing, will
          // be just made uppercase

          // so if we receive a name of nyc, it will convert it to NYC,
          // then we will change the DOM by
          // activating the class "nyc" which changes the background to the nyc image

          else if (
            cityName === "SF" ||
            cityName === "S.F." ||
            cityName === "SAN FRANCISCO" ||
            cityName === "SAN FRAN" ||
            cityName ===  "BAY AREA")
            {$("body").attr("class", "sf");}

          // If its not NYC, then it will check what else it could be..
          // it's something else... not NYC, so its checking to see if its SF...

          else if (
            cityName === "LA" ||
            cityName === "L.A." ||
            cityName === "LAX" ||
            cityName === "LOS ANGELES" ||
            cityName === "ANGEL CITY")
            {$("body").attr("class", "la");}

          // if it's not SF, then we're checking to see if its LA

          else if (
            cityName === "AUSTIN" ||
            cityName === "ATX" )
            {$("body").attr("class", "austin");}

          // if it's not LA, then we're checking to see if its Austin

          else if (
            cityName === "SYDNEY" ||
            cityName === "SYD" )
            {$("body").attr("class", "sydney");}

          else if (
            cityName === "YAY AREA" ||
            cityName === "MAC DRE" ||
            cityName === "MAKE A LOOK ON YOUR FACE LIKE YOU SMELLED SOME PISS" ||
            cityName === "THIZZ FACE" )
            {$("body").attr("class", "yayarea");}


          // in the event the field doesnt match any of this... then we're saying that
          // if the condition is false, then:
          // return the default background and show an alert message

          else
            {$("body").attr("class", "default");alert("Sorry Bro, Please double check the spelling of your city. It's possible that we currently don't have images for that city. Check back later!"); }


          event.preventDefault();
          // this prevents the page from flickering when we run our function again and again

    }
});
