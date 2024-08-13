document.addEventListener("DOMContentLoaded", function() {
  const menuContainer = document.getElementById("menu-container");

  fetch("static/json/menu.json")
    .then(response => response.json())
    .then(data => {
      const parents = data.parents;

      parents.forEach((item,index) => {
        // Create main list item for each menu item
        const menuItem = document.createElement("li");
        menuItem.className = "menu-item";
        menuItem.id=`item${index + 1}`;
       

        // Create image element for main item
        const image = document.createElement("img");
        image.src = `${item.icon}`;
        image.alt = "i " + " : ";

        // Append image to main list item
        menuItem.appendChild(image);

        // Create text node for main item title
        const textNode = document.createTextNode(item.title);

        // Append text node to main list item
        menuItem.appendChild(textNode);

        // Create a child container
        const childContainer = document.createElement("ul");
        childContainer.className = "child-container";

        // Loop through childs and create child list items
        item.childs.forEach(child => {
          const childItem = document.createElement("li");
          childItem.className = "child-item";
          //თუ შვილ ელემნტებსაც აქვს იკონები ჩართე ქვედა კომენტარი
          // const childImage = document.createElement("img");
          // childImage.src = `${child.icon}`;
          // childImage.alt = "";
          // childItem.appendChild(childImage);

          const childTextNode = document.createTextNode(child.title);
          childItem.appendChild(childTextNode);

          childContainer.appendChild(childItem);
        });

        // Append child container to main list item
        menuItem.appendChild(childContainer);

        // Append main list item to menu container
        menuContainer.appendChild(menuItem);

        // Add click event to toggle child items
        menuItem.addEventListener("click", function() {
          childContainer.classList.toggle("visible");
        });
      });
    })
    .catch(error => {
      console.error('Error fetching menu data:', error);
    });
});
