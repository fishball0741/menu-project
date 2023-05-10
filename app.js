// items
const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-1.jpg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-1.jpg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-1.jpg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-1.jpg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-1.jpg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-1.jpg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-1.jpg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-1.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "steak dinner",
        category: "dinner",
        price: 33.99,
        img: "./images/item-1.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
  ];

  const sectionCenter = document.querySelector('.section-center');
  const btnContainer = document.querySelector('.btn-container');


//   we have DOM to load
// Load items
window.addEventListener('DOMContentLoaded', function() {
    // function of display menu items
    displayMenuItems(menu)
    displayMenuButtons();
})




// why do that function here instead of in the window function,  because more clean..
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
        // console.log();
        return `<article class="menu-item">
            <img src=${item.img} class="photo" alt=${item.title}>
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">${item.price}</h4>    
                    </header>
                    <p>${item.desc}</p>
                </div>
            </article> `;   
    });
    displayMenu = displayMenu.join('')
    sectionCenter.innerHTML = displayMenu
}

function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll('.filter-btn');


    //   filter buttons
    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            // if you want to use 'dataset' you need to put in after each class, write ''data- and name you want''
            // when you click the button.
            // for now, '.id' = name, you can check the data name called id > when clicked each button will show the name of that button
            // console.log(e.currentTarget.dataset.id);

            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem){
                if(menuItem.category === category){
                    return menuItem;
                }
            })
            // console.log(menuCategory);
            if(category === 'all'){
                displayMenuItems(menu)
            }
            else{
                displayMenuItems(menuCategory)
            }
        })
    })
}