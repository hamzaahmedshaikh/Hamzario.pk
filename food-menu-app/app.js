let menu = [
    {
        name: "Halwa Puri",
        price: 200,
        description: "Garam halwa aur crispy puriyan chanay ke saath",
        imgUrl: "https://images.deliveryhero.io/image/fd-pk/LH/b2x2-listing.jpg",
        category: "breakfast"
    },
    {
        name: "Nihari",
        price: 350,
        description: "Slow cooked gosht ka salan naan ke saath subah ka maza",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Mutton_Nihari.jpg/1200px-Mutton_Nihari.jpg",
        category: "breakfast"
    },
    {
        name: "Paratha Roll",
        price: 180,
        description: "Anda aur hari chutney wala roll nashte ke liye perfect",
        imgUrl: "https://i.ytimg.com/vi/6Rj5CRMeWHI/maxresdefault.jpg",
        category: "breakfast"
    },
    {
        name: "Aloo Paratha",
        price: 120,
        description: "Masaledar aloo se bhara paratha dahi aur achaar ke saath",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/5/54/Aloo_Paratha_also_known_as_Batatay_Jo_Phulko.jpg",
        category: "breakfast"
    },

    {
        name: "Chicken Biryani",
        price: 350,
        description: "Khushboodar chawal chicken aur masalon se bharpur",
        imgUrl: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500",
        category: "lunch"
    },
    {
        name: "Chicken Karahi",
        price: 450,
        description: "Desi style mein tomato aur green chili ke saath karahi",
        imgUrl: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
        category: "lunch"
    },
    {
        name: "Seekh Kabab",
        price: 300,
        description: "Juicy keemay ki tikki masalon se bharpoor naan ke saath",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Pakistani_Food_Beef_Kabobs.jpg/250px-Pakistani_Food_Beef_Kabobs.jpg",
        category: "lunch"
    },
    {
        name: "Chicken Tikka",
        price: 400,
        description: "Tandoori chicken tikka raita aur naan ke saath served",
        imgUrl: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500",
        category: "lunch"
    },
    {
        name: "Daal Chawal",
        price: 200,
        description: "Yellow daal rice aur salad ke saath simple aur tasty",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Vj-O4tyK2DyUyNp6wSy4YEfo8erFaA-7uQ&s",
        category: "lunch"
    },

    {
        name: "Mutton Korma",
        price: 600,
        description: "Soft mutton creamy gravy mein naan ya roti ke saath",
        imgUrl: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
        category: "dinner"
    },
    {
        name: "Chicken Handi",
        price: 500,
        description: "Thick gravy mein chicken perfect dinner choice",
        imgUrl: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=500",
        category: "dinner"
    },
    {
        name: "Palak Paneer",
        price: 350,
        description: "Palak aur paneer ka 500combo roti ke saath mazedaar",
        imgUrl: "https://www.flourandspiceblog.com/wp-content/uploads/2024/11/IMG_4768.jpg",
        category: "dinner"
    },
    {
        name: "Fish Fry",
        price: 450,
        description: "Crispy fried fish masalon se bharpoor salad ke saath",
        imgUrl: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=500",
        category: "dinner"
    },
    {
        name: "Chicken Pulao",
        price: 400,
        description: "Light aur fluffy rice chicken ke tukdon ke saath",
        imgUrl: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500",
        category: "dinner"
    },
    {
        name: "Aloo Gosht",
        price: 550,
        description: "Aloo aur gosht ka classic combination roti ke saath",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeQhiQgUDwXCBdT_M3AY2ESfgHpZT_a1Wdbg&s",
        category: "dinner"
    },

    {
        name: "Doodh Patti Chai",
        price: 80,
        description: "Garam aur meethi chai jo dil ko sukoon de",
        imgUrl: "https://thumbs.dreamstime.com/b/doodh-patti-chai-hot-milk-tea-served-cup-isolated-background-top-view-indian-pakistani-desi-food-259859038.jpg",
        category: "beverages"
    },
    {
        name: "Lassi",
        price: 150,
        description: "Thandi meethi lassi garmi mein best choice",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToT6aOEahBB7QHwX_knBjOqaPBq-TQA8m4kw&s",
        category: "beverages"
    },
    {
        name: "Rooh Afza",
        price: 100,
        description: "Thanda aur refreshing sharbat doodh ke saath",
        imgUrl: "https://www.babsprojects.com/wp-content/uploads/2023/04/rooh-afza-drinks-1-720x540.jpg",
        category: "beverages"
    },
    {
        name: "Sugarcane Juice",
        price: 120,
        description: "Taza gannay ka juice natural aur healthy",
        imgUrl: "https://cdn.apkamuaalij.com/development/05b5e2bd-37d9-4b3f-a70a-038b5ec5c00f-20251017T121710096Z.jpg",
        category: "beverages"
    },
    {
        name: "Kashmiri Chai",
        price: 150,
        description: "Pink color ki special chai nuts ke saath",
        imgUrl: "https://www.chilitochoc.com/wp-content/uploads/2019/11/kashmiri-pink-chai-1-featured.jpg",
        category: "beverages"
    }
];

    let cardParent = document.getElementById("cardParent");
    let allBtn = document.getElementById("all");
    let breakfastBtn = document.getElementById("breakfast");
    let lunchBtn = document.getElementById("lunch");
    let dinnerBtn = document.getElementById("dinner");
    let beveragesBtn = document.getElementById("beverages");
    let searchInput = document.getElementById("searchBar");
    let searchBtn = document.getElementById("search");

function showItems(list) {
    if (list.length === 0) {
        cardParent.innerHTML = "<h1 class='no-results'>Menu me nahi hai</h1>";
        return;
    }

    let html = "";
    for (let i = 0; i < list.length; i++) {
        html += `
            <div class='card'>
                <img src='${list[i].imgUrl}' alt='${list[i].name}'>
                <div class='card-content'>
                    <h3>${list[i].name}</h3>
                    <p class='description'>${list[i].description}</p>
                    <p class='price'>Rs. ${list[i].price}</p>
                    <span class='category'>${list[i].category}</span>
                </div>
            </div>
        `;
    }
    cardParent.innerHTML = html;
}

function setActiveButton(activeBtn) {
    document.querySelectorAll('.menu p').forEach(btn => {
        btn.classList.remove('active');
    });
    activeBtn.classList.add('active');
}

allBtn.onclick = function() {
    setActiveButton(allBtn);
    showItems(menu);
};

breakfastBtn.onclick = function() {
    setActiveButton(breakfastBtn);
    const filtered = menu.filter(item => item.category === "breakfast");
    showItems(filtered);
};

lunchBtn.onclick = function() {
    setActiveButton(lunchBtn);
    const filtered = menu.filter(item => item.category === "lunch");
    showItems(filtered);
};

dinnerBtn.onclick = function() {
    setActiveButton(dinnerBtn);
    const filtered = menu.filter(item => item.category === "dinner");
    showItems(filtered);
};

beveragesBtn.onclick = function() {
    setActiveButton(beveragesBtn);
    const filtered = menu.filter(item => item.category === "beverages");
    showItems(filtered);
};

function performSearch() {
    const value = searchInput.value.toLowerCase().trim();
    
    if (value === "") {
        showItems(menu);
        setActiveButton(allBtn);
        return;
    }

    const filtered = menu.filter(item => 
        item.name.toLowerCase().includes(value) ||
        item.description.toLowerCase().includes(value) ||
        item.category.toLowerCase().includes(value)
    );

    showItems(filtered);
    document.querySelectorAll('.menu p').forEach(btn => {
        btn.classList.remove('active');
    });
}

searchBtn.onclick = performSearch;

searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

searchInput.addEventListener('input', function() {
    if (searchInput.value === "") {
        showItems(menu);
        setActiveButton(allBtn);
    }
});

showItems(menu);