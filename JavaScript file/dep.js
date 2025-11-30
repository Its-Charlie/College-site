function highlightLink(link) {
    // Remove the 'active' class from all links
    var links = document.querySelectorAll('nav li');
    links.forEach(function (li) {
        li.classList.remove('active');
    });

    // Add the 'active' class to the clicked link
    link.parentNode.classList.add('active');
}



var rotatingImages = ["pandey sir mech.jpg", "fsmita.jpg", "siot.jpg"]; // Add more image URLs as needed
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