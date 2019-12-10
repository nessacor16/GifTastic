$(document).ready(function () {

  var emotions = [
    `trust`, `joy`, `sadness`, `suprise`, `anticipation`, `disgust`, `fear`, `happiness`, `anger`, `shame`, `kidness`, `love`, `friendship`, `envy`, `pity`, `weeping`, `excitement`, `horror`, `trrumph`
  ];

  // // var music = [
  // //     `alternative`, `latin`, `reggae`, `dance`, `r&b/soul`, `holiday`, `rap`, `classical`, `soundtrack`, `jazz`, `disney`, `electronic`, `instrumental`, `blues`, `opera`, `hip-hop`, `easy listening`, `country`, `comedy`
  // // ];

  // emotions in array--buttons created in HTML
  var createBtn = function () {
    // Remove all elements within the btn-section
    $(`#btn-section`).empty()
    // Creates buttons based on elements in array
    for (var i = 0; i < emotions.length; i++) {
      // Execute new button
      var newBtn = $(`<button>`);
      // buttons = attribute
      newBtn.attr(`data-type`, emotions[i]);
      // Add class to button
      newBtn.attr(`class`, `gif`)
      // Give button name that refelxs array
      newBtn.text(emotions[i]);
      // Append button to DOM
      $(`#btn-section`).append(newBtn)
    }
  };

  var displayGif = function () {
    var btnVal = $(this).data(`type`);
    console.log(btnVal)
  }

  $(document).on(`click`, `.gif`, displayGif)

  // // Creating and storing an image tag
  // var emotionImage = $("<img>");
  // // Setting the src attribute of the image to a property pulled off the result item
  // emotionImage.attr("src", results[i].images.fixed_height.url);


  var submit = function () {
    // When user clicks on the submit-button
    $(`#submit-btn`).on(`click`, function (event) {
      // Prevent from the default form/input events from occuring */ COME BACK TO THIS
      event.preventDefault();
      var inputVal = $(`#userInput`).val();
      // Push User input to array
      emotions.push(inputVal);
      // Creats new buttons
      createBtn();
      console.log(inputVal)
      console.log(emotion)
    });
  }
  createBtn();
  submit()



  // Adding click event listen listener to all buttons
  $(".btn-emotion").on("click", function () {
    // Grabbing and storing the data-emotionss property value from the button
    emotion = $(this).attr("data-emotion");
    console.log(emotion)
    // Constructing a queryURL using the animal name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      emotion + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    // Performing an AJAX request with the queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // After data comes back from the request
      .then(function (response) {
        console.log(queryURL);

        console.log(response);
        // storing the data from the AJAX request in the results variable
        var results = response.data;

        // Looping through each result item
        for (var i = 0; i < results.length; i++) {

          // Creating and storing a div tag
          var emotionDiv = $("<div>");

          // Creating a paragraph tag with the result item's rating
          var p = $("<p>").text("Rating: " + results[i].rating);

          // Creating and storing an image tag
          var emotionImage = $("<img>");
          // Setting the src attribute of the image to a property pulled off the result item
          emotionImage.attr("src", results[i].images.fixed_height.url);
          newBtn = emotionImage.attr("src", results[i].images.fixed_height.url);

          // Appending the paragraph and image tag to the emotionsDiv
          emotionDiv.append(p);
          emotionDiv.append(emotionImage);

          // Prependng the emotionsDiv to the HTML page in the "#gifs-appear-here" div
          $("#images").prepend(emotionDiv);
        }
      });
  });



});

// -----------------------------------MUSIC-------------------------
// -----------------------------------MUSIC-------------------------
// -----------------------------------MUSIC-------------------------
$(document).ready(function () {

  var emotions = [
    `trust`, `joy`, `sadness`, `suprise`, `anticipation`, `disgust`, `fear`, `happiness`, `anger`, `shame`, `kidness`, `love`, `friendship`, `envy`, `pity`, `weeping`, `excitement`, `horror`, `trrumph`
  ];

  // // var music = [
  // //     `alternative`, `latin`, `reggae`, `dance`, `r&b/soul`, `holiday`, `rap`, `classical`, `soundtrack`, `jazz`, `disney`, `electronic`, `instrumental`, `blues`, `opera`, `hip-hop`, `easy listening`, `country`, `comedy`
  // // ];

  // emotions in array--buttons created in HTML
  var createBtn = function () {
    // Remove all elements within the btn-section
    $(`#btn-section`).empty()
    // Creates buttons based on elements in array
    for (var i = 0; i < emotions.length; i++) {
      // Execute new button
      var newBtn = $(`<button>`);
      // buttons = attribute
      newBtn.attr(`data-type`, emotions[i]);
      // Add class to button
      newBtn.attr(`class`, `gif`)
      // Give button name that refelxs array
      newBtn.text(emotions[i]);
      // Append button to DOM
      $(`#btn-section`).append(newBtn)
    }
  };

  // var displayGif = function(){
  //     var btnVal = $(this).data(`type`);
  //     console.log(btnVal)
  // }

  // $(document).on(`click`,`.gif`,displayGif)

  // // Creating and storing an image tag
  // var emotionImage = $("<img>");
  // // Setting the src attribute of the image to a property pulled off the result item
  // emotionImage.attr("src", results[i].images.fixed_height.url);


  var submit = function () {
    // When user clicks on the submit-button
    $(`#submit-btn`).on(`click`, function (event) {
      // Prevent from the default form/input events from occuring */ COME BACK TO THIS
      event.preventDefault();
      var inputVal = $(`#userInput`).val();
      // Push User input to array
      emotions.push(inputVal);
      // Creats new buttons
      createBtn();
      console.log(inputVal)
      console.log(emotion)
    });
  }
  createBtn();
  submit()



  // Adding click event listen listener to all buttons
  $("button").on("click", function () {
    // Grabbing and storing the data-emotionss property value from the button
    emotion = $(this).attr("data-emotion");

    // Constructing a queryURL using the animal name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      emotion + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    // Performing an AJAX request with the queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // After data comes back from the request
      .then(function (response) {
        console.log(queryURL);

        console.log(response);
        // storing the data from the AJAX request in the results variable
        var results = response.data;

        // Looping through each result item
        for (var i = 0; i < results.length; i++) {

          // Creating and storing a div tag
          var emotionDiv = $("<div>");

          // Creating a paragraph tag with the result item's rating
          var p = $("<p>").text("Rating: " + results[i].rating);

          // Creating and storing an image tag
          var emotionImage = $("<img>");
          // Setting the src attribute of the image to a property pulled off the result item
          emotionImage.attr("src", results[i].images.fixed_height.url);
          newBtn = emotionImage.attr("src", results[i].images.fixed_height.url);

          // Appending the paragraph and image tag to the emotionsDiv
          emotionDiv.append(p);
          emotionDiv.append(emotionImage);

          // Prependng the emotionsDiv to the HTML page in the "#gifs-appear-here" div
          $("#images").prepend(emotionDiv);
        }
      });

  });
  
})