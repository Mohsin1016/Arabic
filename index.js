
					// Checkbox and Product display

const checkbox = document.getElementById("flexCheckDefault1");
const productDiv = document.getElementById("product1");

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    // Checkbox is checked, add classes to the productDiv
    productDiv.classList.remove("d-none");
  } else {
    // Checkbox is unchecked, remove classes from the productDiv
    productDiv.classList.add("d-none");
  }
});
const checkbox2 = document.getElementById("flexCheckDefault2");
const productDiv2 = document.getElementById("product2");

checkbox2.addEventListener("change", function () {
  if (checkbox2.checked) {
    // Checkbox is checked, add classes to the productDiv
    productDiv2.classList.remove("d-none");
  } else {
    // Checkbox is unchecked, remove classes from the productDiv
    productDiv2.classList.add("d-none");
  }
});
const checkbox3 = document.getElementById("flexCheckDefault3");
const productDiv3 = document.getElementById("product3");

checkbox3.addEventListener("change", function () {
  if (checkbox3.checked) {
    // Checkbox is checked, add classes to the productDiv
    productDiv3.classList.remove("d-none");
  } else {
    // Checkbox is unchecked, remove classes from the productDiv
    productDiv3.classList.add("d-none");
  }
});
const checkbox4 = document.getElementById("flexCheckDefault4");
const productDiv4 = document.getElementById("product4");

checkbox4.addEventListener("change", function () {
  if (checkbox4.checked) {
    // Checkbox is checked, add classes to the productDiv
    productDiv4.classList.remove("d-none");
  } else {
    // Checkbox is unchecked, remove classes from the productDiv
    productDiv4.classList.add("d-none");
  }
});
const checkbox5 = document.getElementById("flexCheckDefault5");
const productDiv5 = document.getElementById("product5");

checkbox5.addEventListener("change", function () {
  if (checkbox5.checked) {
    // Checkbox is checked, add classes to the productDiv
    productDiv5.classList.remove("d-none");
  } else {
    // Checkbox is unchecked, remove classes from the productDiv
    productDiv5.classList.add("d-none");
  }
});
const checkbox6 = document.getElementById("flexCheckDefault6");
const productDiv6 = document.getElementById("product6");

checkbox6.addEventListener("change", function () {
  if (checkbox6.checked) {
    // Checkbox is checked, add classes to the productDiv
    productDiv6.classList.remove("d-none");
  } else {
    // Checkbox is unchecked, remove classes from the productDiv
    productDiv6.classList.add("d-none");
  }
});




			// Calculator

let display = document.getElementById('display');

function appendToDisplay(text) {
  display.textContent += text;
}

function deleteLeft() {
  let currentText = display.textContent;
  if (currentText.length > 0) {
    display.textContent = currentText.slice(0, -1);
  }
}

// Add an event listener for the delete left icon
let deleteLeftIcon = document.querySelector('.fa-delete-left');
deleteLeftIcon.addEventListener('click', deleteLeft);

let previousActiveColumn = null;

					// Active Columns



function activateColumn(column) {
  // Deactivate the previously active column, if any
  if (previousActiveColumn) {

    previousActiveColumn.classList.add("active-none");

    previousActiveColumn.classList.remove("active");
  }

  // Activate the clicked column
  column.classList.add("active");
  column.classList.remove("active-none");





  // Update the previousActiveColumn
  previousActiveColumn = column;
}

					// Minus and Displaynone

document.addEventListener('DOMContentLoaded', function() {
    const minusIcon = document.getElementById('minus1');
    const productDiv = document.getElementById('product1');
    const checkbox = document.getElementById('flexCheckDefault1');

    if (minusIcon && productDiv && checkbox) {
        minusIcon.addEventListener('click', function() {
			productDiv.classList.add("d-none");
            checkbox.checked = false;
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const minusIcon = document.getElementById('minus2');
    const productDiv = document.getElementById('product2');
    const checkbox = document.getElementById('flexCheckDefault2');

    if (minusIcon && productDiv && checkbox) {
        minusIcon.addEventListener('click', function() {
			productDiv.classList.add("d-none");
            checkbox.checked = false;
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const minusIcon = document.getElementById('minus3');
    const productDiv = document.getElementById('product3');
    const checkbox = document.getElementById('flexCheckDefault3');

    if (minusIcon && productDiv && checkbox) {
        minusIcon.addEventListener('click', function() {
			productDiv.classList.add("d-none");
            checkbox.checked = false;
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const minusIcon = document.getElementById('minus4');
    const productDiv = document.getElementById('product4');
    const checkbox = document.getElementById('flexCheckDefault4');

    if (minusIcon && productDiv && checkbox) {
        minusIcon.addEventListener('click', function() {
			productDiv.classList.add("d-none");
            checkbox.checked = false;
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const minusIcon = document.getElementById('minus5');
    const productDiv = document.getElementById('product5');
    const checkbox = document.getElementById('flexCheckDefault5');

    if (minusIcon && productDiv && checkbox) {
        minusIcon.addEventListener('click', function() {
			productDiv.classList.add("d-none");
            checkbox.checked = false;
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const minusIcon = document.getElementById('minus6');
    const productDiv = document.getElementById('product6');
    const checkbox = document.getElementById('flexCheckDefault6');

    if (minusIcon && productDiv && checkbox) {
        minusIcon.addEventListener('click', function() {
			productDiv.classList.add("d-none");
            checkbox.checked = false;
        });
    }
});

 document.addEventListener("DOMContentLoaded", function () {
    const productCards = document.querySelectorAll(".prodiv");
    const offcanvas = document.getElementById("offcanvasExample1");
    const display = document.getElementById("display");
    let previousImage = "";
    let previousName = "";
    let count = 1;

    productCards.forEach(function (productCard) {
      productCard.addEventListener("click", function () {
        // Get the product information from the clicked product card
        const productImage = productCard.querySelector("img.img-fluid").getAttribute("src");
        const productName = productCard.querySelector(".fs-6").textContent;
        // Assuming you have the element with the class "propric" selected
const propricElement = document.querySelector('.propric');

// Get the number as a float (decimal number)
const productPrice= parseFloat(propricElement.textContent);

console.log(productPrice); // This will print the number to the console


        // Update the offcanvas content with the product information
        const offcanvasImage = offcanvas.querySelector(".product-image");
        const offcanvasName = offcanvas.querySelector(".product-name");
        const offcanvasPrice = offcanvas.querySelector("#price1");


        offcanvasImage.setAttribute("src", productImage);
        offcanvasName.textContent = productName;
        offcanvasPrice.textContent = productPrice;


        // Check if the current image source and product name are the same as the previous ones
        if (productImage === previousImage && productName === previousName) {
          // Increment the count if they are the same
          count++;
        } else {
          // Reset the count to 1 if they are different
          count = 1;
        }
const result =count*productPrice
offcanvasPrice.textContent = result+"$";

        // Update the display div with the current count
        display.textContent = count;
const pre=display.textContent
const result2 =pre*productPrice;
offcanvasPrice.textContent = result2+"$";


        // Open the offcanvas
        const offcanvasInstance = new bootstrap.Offcanvas(offcanvas);
        // offcanvasInstance.show();

        // Update the previous image source and product name
        previousImage = productImage;
        previousName = productName;
      });
    });
  });

// Dummy data for demonstration
const dummyData = [
	"Apple",
	"Banana",
	"Cherry",
	"Date",
	"Fig",
	"Grape",
	"Lemon",
	"Mango",
	"Orange",
	"Peach",
	"Pear",
	"Strawberry",
	"Watermelon",
  ];
  
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  
  searchInput.addEventListener("input", function () {
	const searchTerm = searchInput.value.trim().toLowerCase();
  
	// Clear previous search results
	searchResults.innerHTML = "";
  
	if (searchTerm === "") {
	  // If the search input is empty, don't display any results
	  return;
	}
  
	// Filter dummy data based on the search term
	const filteredData = dummyData.filter((item) =>
	  item.toLowerCase().includes(searchTerm)
	);
  
	// Display the filtered results
	filteredData.forEach((result) => {
		const resultElement2 = document.createElement("div");
		resultElement2.textContent = result;
		searchResults.appendChild(resultElement2);
		resultElement2.classList.add("searchResultItem");
		resultElement2.style.cursor = "pointer"; // Add a pointer cursor
		searchResults.appendChild(resultElement2);
	});
  });
  searchResults.addEventListener("click", function (event) {
	const clickedResult = event.target;
	if (clickedResult.classList.contains("searchResultItem")) {
	  // Set the selected dummy data as the input value
	  searchInput.value = clickedResult.textContent;
	  // Hide the search results container

	}
  });






  const searchInput2 = document.getElementById("searchInput2");
  const searchResults2 = document.getElementById("searchResults2");
  
  searchInput2.addEventListener("input", function () {
	const searchTerm2 = searchInput2.value.trim().toLowerCase();
  
	// Clear previous search results
	searchResults2.innerHTML = "";
  
	if (searchTerm2 === "") {
	  // If the search input is empty, don't display any results
	  return;
	}
  
	// Filter dummy data based on the search term
	const filteredData2 = dummyData.filter((item) =>
	  item.toLowerCase().includes(searchTerm2)
	);
  
	// Display the filtered results
	filteredData2.forEach((result) => {
	  const resultElement2 = document.createElement("div");
	  resultElement2.textContent = result;
	  searchResults2.appendChild(resultElement2);
	  resultElement2.classList.add("searchResultItem");
	  resultElement2.style.cursor = "pointer"; // Add a pointer cursor
      searchResults2.appendChild(resultElement2);
	});
  });
  searchResults2.addEventListener("click", function (event) {
	const clickedResult = event.target;
	if (clickedResult.classList.contains("searchResultItem")) {
	  // Set the selected dummy data as the input value
	  searchInput2.value = clickedResult.textContent;
	  // Hide the search results container

	}
  });
  


  // Function to save name and password to local storage
function saveUserData() {
	const nameInput = document.getElementById("formGroupExampleInput");
	const passwordInput = document.getElementById("formGroupExampleInput2");
  
	const name = nameInput.value;
	const password = passwordInput.value;
  
	// Check if name and password are not empty
	if (name && password) {
	  // Save the name and password to local storage
	  localStorage.setItem("name", name);
	  localStorage.setItem("password", password);
	}
	 // Retrieve the name from local storage
	 const savedName = localStorage.getItem("name");
  
	 // Display the saved name in the other div with the "user" class
	 const userDiv = document.querySelector(".user");
	 if (savedName) {
	   userDiv.textContent = `User: ${savedName}`;
	 }
	 const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
	 modal.hide();
	
  }
  
  // Add a submit event listener to the form to save the data
  document.querySelector("form").addEventListener("submit", function (e) {
	e.preventDefault(); // Prevent the form from actually submitting
	saveUserData();
	
  });
  
  // Retrieve the name from local storage
  const savedName = localStorage.getItem("name");
  
  // Display the saved name in the other div with the "user" class
  const userDiv = document.querySelector(".user");
  if (savedName) {
	userDiv.textContent = `User: ${savedName}`;
  }
  

  
						// Slider

document.getElementById('prev').addEventListener('click', function() {
	var cards = document.getElementById('cards');
	var currentScrollLeft = cards.scrollLeft;
	var cardWidth = cards.querySelector('.list').offsetWidth; // Get the card width
	var targetScrollLeft = currentScrollLeft - cardWidth;
	cards.scrollLeft = targetScrollLeft;
  });
  
  document.getElementById('next').addEventListener('click', function() {
	var cards = document.getElementById('cards');
	var currentScrollLeft = cards.scrollLeft;
	var cardWidth = cards.querySelector('.list').offsetWidth; // Get the card width
	var targetScrollLeft = currentScrollLeft + cardWidth;
	cards.scrollLeft = targetScrollLeft;
  });
  
  