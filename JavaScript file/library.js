function hideMenu() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.style.right = '-170px';
    dropdownMenu.style.transition = '1s';
  }
  
  function showMenu() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.style.right = '0';
    dropdownMenu.style.transition = '1s';
  }
  function toggleMenu() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const currentRightValue = dropdownMenu.style.right;
  
    if (currentRightValue === '0px' || currentRightValue === '0') {
        hideMenu();
    } else {
        showMenu();
    }
  }
  function setActiveOption(option) {
    hideMenu(); // Clear any existing 'active' class
    option.classList.add('active');
  }
  
    function addDarkmodeWidget() {
        new Darkmode().showWidget();
      }
      const options = {
        bottom: '64px', // default: '32px'
        right: 'unset', // default: '32px'
        left: '32px', // default: 'unset'
        time: '0.5s', // default: '0.3s'
        mixColor: '#fff', // default: '#fff'
        backgroundColor: '#fff',  // default: '#fff'
        buttonColorDark: '#100f2c',  // default: '#100f2c'
        buttonColorLight: '#fff', // default: '#fff'
        saveInCookies: false, // default: true,
        label: '🌓', // default: ''
        autoMatchOsTheme: true // default: true
      }
      
      const darkmode = new Darkmode(options);
      darkmode.showWidget();
      window.addEventListener('load', addDarkmodeWidget);
      $(window).on("load",function(){
        $(".loader-wrapper").fadeOut("slow");
      });
      document.addEventListener('DOMContentLoaded', function () {
        const firstDropdownOption = document.querySelector('.dropdown-content a');
        setActiveOption(firstDropdownOption);
    });

function highlightLink(link) {
    // Remove the 'active' class from all links
    var links = document.querySelectorAll('nav li');
    links.forEach(function (li) {
        li.classList.remove('active');
    });

    // Add the 'active' class to the clicked link
    link.parentNode.classList.add('active');
}



var rotatingImages = ["smita.JPG", "fsmita.jpg", "siot.jpg"]; // Add more image URLs as needed
var rotatingIndex = 0;

function rotateImage() {
    var imageElement = document.getElementById("rotatingImage");

    // Apply fading effect by changing opacity
    imageElement.style.opacity = 0;

    // Change the image source after a short delay
    setTimeout(function () {
        imageElement.src = rotatingImages[rotatingIndex];
        rotatingIndex = (rotatingIndex + 1) % rotatingImages.length;

        // Restore opacity after changing the image
        imageElement.style.opacity = 1;
    }, 500); // Adjust the delay as needed (half of the transition duration)
}

setInterval(rotateImage, 3000);



// event 
var rotatingImages = ["smita.JPG", "event1.jpg", "event2.jpg"]; // Add more image URLs as needed
var rotatingIndex = 0;

function rotateImage() {
    var imageElement = document.getElementById("rotatingImage1");

    // Apply fading effect by changing opacity
    imageElement.style.opacity = 0;

    // Change the image source after a short delay
    setTimeout(function () {
        imageElement.src = rotatingImages[rotatingIndex];
        rotatingIndex = (rotatingIndex + 1) % rotatingImages.length;

        // Restore opacity after changing the image
        imageElement.style.opacity = 1;
    }, 500); // Adjust the delay as needed (half of the transition duration)
}

setInterval(rotateImage, 3000);

var rotatingImages2 = ["lib2.jpg","lib3.jpg","lib4.jpg","lib5.jpg"]; // Add more image URLs as needed
var rotatingIndex2 = 0;

function rotateImage2() {
    var imageElement2 = document.getElementById("rotatingImage2");

    // Apply fading effect by changing opacity
    imageElement2.style.opacity = 0;

    // Change the image source after a short delay
    setTimeout(function () {
        imageElement2.src = rotatingImages2[rotatingIndex2];
        rotatingIndex2 = (rotatingIndex2 + 1) % rotatingImages2.length;

        // Restore opacity after changing the image
        imageElement2.style.opacity = 1;
    }, 500); // Adjust the delay as needed (half of the transition duration)
}


setInterval(rotateImage2, 3000);
var rotatingImages3 = ["mechevent1.jpg", "mechevent2.jpg", "mechevent3.jpg"]; // Add more image URLs as needed
var rotatingIndex3 = 0;

function rotateImage3() {
    var imageElement3 = document.getElementById("rotatingImage3");

    // Apply fading effect by changing opacity
    imageElement3.style.opacity = 0;

    // Change the image source after a short delay
    setTimeout(function () {
        imageElement3.src = rotatingImages3[rotatingIndex3];
        rotatingIndex3 = (rotatingIndex3 + 1) % rotatingImages3.length;

        // Restore opacity after changing the image
        imageElement3.style.opacity = 1;
    }, 500); // Adjust the delay as needed (half of the transition duration)
}

// Rotate the image initially
rotateImage3();

// Rotate the image every 3 seconds
setInterval(rotateImage3, 3000);
 
var rotatingImages5 = ["lib1.jpg", "lib2.jpg","lib3.jpg","lib4.jpg","lib5.jpg"]; // Add more image URLs as needed
var rotatingIndex5 = 0;

function rotateImage5() {
    var imageElement5 = document.getElementById("rotatingImage5");

    // Apply fading effect by changing opacity
    imageElement5.style.opacity = 0;

    // Change the image source after a short delay
    setTimeout(function () {
        imageElement5.src = rotatingImages5[rotatingIndex5];
        rotatingIndex5 = (rotatingIndex5 + 1) % rotatingImages5.length;

        // Restore opacity after changing the image
        imageElement5.style.opacity = 1;
    }, 500); // Adjust the delay as needed (half of the transition duration)
}

// Rotate the image initially
rotateImage5();

// Rotate the image every 3 seconds
setInterval(rotateImage5, 3000);

