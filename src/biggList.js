let biggList = [
    {
        name: "Americano",
        ingredients: ["espresso", "water"],
    },
    {
        name: "Avalanche Latte",
        ingredients: ["mocha", "white lightning", "mint", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Banana Berry Creme Freeze",
        ingredients: ["ice", "tenacious tonic", "banana", "strawberry", "oj"],
    },
    {
        name: "Banana Bread Creme Freeze",
        ingredients: ["ice", "tenacious tonic", "chai", "banana", "milk"],
    },
    {
        name: "Banana Chip Creme Freeze",
        ingredients: ["ice", "tenacious tonic", "mocha", "vanilla", "banana", "choc chips", "whipped cream"],
    },
    {
        name: "Banana Creme Freeze",
        ingredients: ["ice", "tenacious tonic", "banana", "oj"],
    },
    {
        name: "Banana Mango Creme Freeze",
        ingredients: ["ice", "tenacious tonic", "bango mango", "banana"],
    },
    {
        name: "Banana Split Creme Freeze",
        ingredients: ["ice", "tenacious tonic", "mocha", "strawberry", "banana", "milk", "whipped cream"],
    },
    {
        name: "Bear Cub Latte",
        ingredients: ["caramel", "white lightning", "hazelnut", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Beautiful Haze Latte",
        ingredients: ["hazelnut", "blackberry", "espresso", "velvetized milk"],
    },
    {
        name: "Berry Chocolatey Creme Freeze",
        ingredients: ["ice", "tenacious tonic", "mocha", "white lightning", "strawberry", "choc chips", "milk", "whipped cream"],
    },
    {
        name: "Berry White Latte",
        ingredients: ["white lightning", "blueberry", "raspberry", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Black Bear Latte",
        ingredients: ["mocha", "caramel", "butterscotch", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Black Forest Latte",
        ingredients: ["mocha", "caramel", "blackberry", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Black, White and Red Over Freeze",
        ingredients: ["ice", "tenacious tonic", "mocha", "white lightning", "strawberry", "milk", "whipped cream"],
    },
    {
        name: "Blackberry Banana Freeze",
        ingredients: ["ice", "tenacious tonic", "blackberry", "banana", "oj"],
    },
    {
        name: "Blackberry Cream Creme Freeze",
        ingredients: ["ice", "tenacious tonic", "blackberry", "half and half", "lemonade"],
    },
    {
        name: "Blue Streak Creme Freeze",
        ingredients: ["ice", "tenacious tonic", "blueberry", "milk"],
    },
    {
        name: "Blueberry Bliss Latte",
        ingredients: ["white lightning", "blueberry", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Butter Bear Latte",
        ingredients: ["caramel", "butterscotch", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Buttercup Latte",
        ingredients: ["caramel", "hazelnut", "butterscotch", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Cafe au Lait",
        ingredients: ["french roast", "velvetized milk"],
    },
    {
        name: "Caffe Latte",
        ingredients: ["espresso", "velvetized milk"],
    },
    {
        name: "Cappuccino",
        ingredients: ["espresso", "velvetized milk", "foam"],
    },
    {
        name: "Caramel Apple Cider",
        ingredients: ["caramel", "cider"],
    },
    {
        name: "Caramel Marvel",
        ingredients: ["caramel", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Caramel Mellow",
        ingredients: ["caramel", "mellow", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Chai Charger",
        ingredients: ["chai", "espresso", "velvetized milk"],
    },
    {
        name: "Chai Latte",
        ingredients: ["chai", "milk"],
    },
    {
        name: "Chocolate Chip Cookie Creme Freeze",
        ingredients: ["ice", "tenacious tonic", "choc chip cookies", "milk"],
    },
    {
        name: "Cinn-ful Latte",
        ingredients: ["mocha", "mellow", "cinnamon", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Cinnabuzz Latte",
        ingredients: ["mellow", "cinnamon", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Cinnamon Roll Latte",
        ingredients: ["mellow", "white lightning", "cinnamon", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Coco-Marvel Latte",
        ingredients: ["caramel", "coconut", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Cocoa Carmella",
        ingredients: ["mocha", "caramel", "whipped cream"],
    },
    {
        name: "Coconut Beach Creme Freeze",
        ingredients: ["ice", "tenacious tonic", "coconut", "strawberry", "lemonade"],
    },
    {
        name: "Coconut Cream Latte",
        ingredients: ["vanilla", "coconut", "espresso", "velvetized milk"],
    },
    {
        name: "Confetti Cupcake Creme Freeze",
        ingredients: ["ice", "tenacious tonic", "white lightning", "vanilla", "sprinkles", "milk", "whipped cream"],
    },
    {
        name: "Cotton Candy Latte",
        ingredients: ["mellow", "raspberry", "blueberry", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Dark Chocolate Cookie Creme Freeze",
        ingredients: ["ice", "tenacious tonic", "mocha", "choc chip cookies", "milk", "whipped cream"],
    },
    {
        name: "Dark Hot Chocolate",
        ingredients: ["mocha", "whipped cream"],
    },
    {
        name: "Delightfully Spicy Latte",
        ingredients: ["chai", "cinnamon"],
    },
    {
        name: "Desert Paradise Latte",
        ingredients: ["caramel", "white lightning", "cinnamon", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Enlightened Chai",
        ingredients: ["chai", "white chocolate", "whipped cream"],
    },
    {
        name: "Firefly Latte",
        ingredients: ["white lightning", "vanilla", "cinnamon", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Fluffy Clouds Latte",
        ingredients: ["mellow", "white lightning", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Freedom Creme Freeze Blue",
        ingredients: ["ice", "tenacious tonic", "white lightning", "blueberry", "milk", "whipped cream"],
    },
    {
        name: "Freedom Creme Freeze Red",
        ingredients: ["ice", "tenacious tonic", "white lightning", "strawberry", "milk", "whipped cream"],
    },
    {
        name: "Freedom Creme Freeze White",
        ingredients: ["ice", "tenacious tonic", "white lightning", "milk", "whipped cream"],
    },
    {
        name: "Frisbee Creme Freeze",
        ingredients: ["ice", "tenacious tonic", "strawberry", "milk"],
    },
    {
        name: "Frozen Banana Bonanza Mocha Latte",
        ingredients: ["ice", "tenacious tonic", "mocha", "banana", "espresso", "whipped cream"],
    },
    {
        name: "German Mocha Latte",
        ingredients: ["mocha", "caramel", "coconut", "hazelnut", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Gingerbread Cookie in a Cup Latte",
        ingredients: ["mocha", "gingerbread", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Gingerbread Man Latte",
        ingredients: ["mocha", "cinnamon", "gingerbread", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Gingersnap Latte",
        ingredients: ["mellow", "gingerbread", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "H=MC2 Latte",
        ingredients: ["caramel", "mellow", "cinnamon", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Hazelnut Mocha Latte",
        ingredients: ["mocha", "hazelnut", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Hazy Day Latte",
        ingredients: ["mellow", "hazelnut", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Hot Tea",
        ingredients: ["tea sachet", "hot water"],
    },
    {
        name: "Iced Coffee",
        ingredients: ["iced coffee"],
    },
    {
        name: "Iced Tea",
        ingredients: ["iced tea"],
    },
    {
        name: "Intergalactic Creme Freeze",
        ingredients: ["ice", "tenacious tonic", "raspberry", "blackberry", "strawberry", "lemonade"],
    },
    {
        name: "Lemonade",
        ingredients: ["lemonade"],
    },
    {
        name: "Lissa’s Luscious Latte",
        ingredients: ["white lightning", "raspberry", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Lotta Love Latte",
        ingredients: ["white lightning", "strawberry", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Magic Milk – Chocolate",
        ingredients: ["milk", "chocolate", "whipped cream"],
    },
    {
        name: "Magic Milk – Strawberry",
        ingredients: ["milk", "strawberry", "whipped cream"],
    },
    {
        name: "Magic Milk – Vanilla",
        ingredients: ["milk", "vanilla", "whipped cream"],
    },
    {
        name: "Mango Creme Freeze",
        ingredients: ["ice", "tenacious tonic", "bango mango"],
    },
    {
        name: "Mellow Hot Chocolate",
        ingredients: ["mellow", "mocha", "whipped cream"],
    },
    {
        name: "Mellow Mellow Latte",
        ingredients: ["mellow", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Mellow Mochanut Latte",
        ingredients: ["mellow", "mocha", "coconut", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Midnight Dream Latte",
        ingredients: ["mocha", "blueberry", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Mint Hot Chocolate",
        ingredients: ["mocha", "frosted mint", "whipped cream"],
    },
    {
        name: "Mint Mocha Latte",
        ingredients: ["mocha", "frosted mint", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Mocha Caramel Latte",
        ingredients: ["mocha", "caramel", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Mocha Mellow Latte",
        ingredients: ["mocha", "mellow", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Mocha Mocha Latte",
        ingredients: ["chocolate"],
    },
    {
        name: "Mocha Nut Latte",
        ingredients: ["mocha", "coconut", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Moonboot Latte",
        ingredients: ["mellow", "frosted mint", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Neapolitan Latte",
        ingredients: ["mocha", "vanilla", "strawberry", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Nutty Buddy Latte",
        ingredients: ["hazelnut", "espresso", "velvetized milk"],
    },
    {
        name: "Nutty Mocha Caramel Latte",
        ingredients: ["mocha", "caramel", "hazelnut", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Nutty Squirrel Latte",
        ingredients: ["mocha", "caramel", "white lightning", "hazelnut", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Orange Juice",
        ingredients: ["oj"],
    },
    {
        name: "Peppermint Blizzard Latte",
        ingredients: ["white lightning", "frosted mint", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Peppermint Stick Mocha Latte",
        ingredients: ["mocha", "mint", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Pina Colada Creme Freeze",
        ingredients: ["ice", "tenacious tonic", "coconut", "banana", "oj"],
    },
    {
        name: "Pink Panther Creme Freeze",
        ingredients: ["ice", "tenacious tonic", "blackberry", "strawberry", "oj"],
    },
    {
        name: "Premium Iced Tea",
        ingredients: ["ice", "tea sachet"],
    },
    {
        name: "Pumpkin Spice Latte",
        ingredients: ["pumpkin"],
    },
    {
        name: "Purple Haze Latte",
        ingredients: ["caramel", "blackberry", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Raspberry Cream Mocha Latte",
        ingredients: ["mocha", "raspberry", "vanilla", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Raspberry Zinger Creme Freeze",
        ingredients: ["ice", "tenacious tonic", "raspberry", "lemon slice", "lemonade"],
    },
    {
        name: "Red Bull Creme Freeze",
        ingredients: ["ice", "tenacious tonic", "red bull"],
    },
    {
        name: "Red Eye",
        ingredients: ["biggby® best", "espresso"],
    },
    {
        name: "Snickerdoodle Latte",
        ingredients: ["mellow", "caramel", "cinnamon", "vanilla", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Snow Bear Latte",
        ingredients: ["white lightning", "hazelnut", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Snow Berry Latte",
        ingredients: ["white lightning", "blackberry", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Snow Mint Mocha",
        ingredients: ["white lightning", "frosted mint", "velvetized milk", "whipped cream"],
    },
    {
        name: "Spotted Owl Latte",
        ingredients: ["mellow", "vanilla", "hazelnut", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Starry Skies Creme Freeze",
        ingredients: ["mocha", "vanilla", "cinnamon", "choc chips", "espresso", "whipped cream", "milk"],
    },
    {
        name: "Starry Skies Latte",
        ingredients: ["mocha", "vanilla", "cinnamon", "choc chips", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Strawberry Chai Creme Freeze",
        ingredients: ["ice", "tenacious tonic", "strawberry", "chai", "milk"],
    },
    {
        name: "Strawberry Puff Latte",
        ingredients: ["mellow", "strawberry", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Sugar &amp; Spice Latte",
        ingredients: ["caramel", "hazelnut", "cinnamon", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Sugar Bear Latte",
        ingredients: ["caramel", "hazelnut", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Summer Breeze Creme Freeze",
        ingredients: ["ice", "tenacious tonic", "white lightning", "coconut", "milk", "whipped cream"],
    },
    {
        name: "Sunburn Latte",
        ingredients: ["mocha", "white lightning", "raspberry", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Sweet Dreams Latte",
        ingredients: ["mocha", "butterscotch", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Sweet Tooth Special Latte",
        ingredients: ["caramel", "white lightning", "butterscotch", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Tan Line Latte",
        ingredients: ["caramel", "vanilla", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Tea Latte – Hot Caramel Spice",
        ingredients: ["tea sachet", "cinnamon", "caramel", "vanilla", "velvetized milk"],
    },
    {
        name: "Tea Latte – Peppermint",
        ingredients: ["tea sachet", "vanilla", "velvetized milk"],
    },
    {
        name: "Tea Latte – The Spice of Life",
        ingredients: ["tea sachet", "chai", "vanilla", "velvetized milk"],
    },
    {
        name: "Teddy Bear Latte",
        ingredients: ["caramel", "white lightning", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Teddy Berry Latte",
        ingredients: ["caramel", "white lightning", "blackberry", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Triple Mocha Latte",
        ingredients: ["chocolate"],
    },
    {
        name: "Vanilla Bean",
        ingredients: ["vanilla", "espresso", "velvetized milk"],
    },
    {
        name: "Vanilla Bean Creme Freeze",
        ingredients: ["ice", "tenacious tonic", "vanilla", "milk"],
    },
    {
        name: "Vanilla Nut Creme Latte",
        ingredients: ["vanilla", "hazelnut", "espresso", "velvetized milk"],
    },
    {
        name: "White Lightning Latte",
        ingredients: ["white lightning", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Wild Zebra Latte",
        ingredients: ["mocha", "white lightning", "espresso", "velvetized milk", "whipped cream"],
    },
    {
        name: "Winter Wonderland Latte",
        ingredients: ["white lightning", "cinnamon", "espresso", "velvetized milk", "whipped cream"],
    },
];

let uniqueIngredients = [
    "banana",
    "bango mango",
    "biggby® best",
    "blackberry",
    "blueberry",
    "butterscotch",
    "caramel",
    "chai",
    "choc chip cookies",
    "choc chips",
    "chocolate",
    "cider",
    "cinnamon",
    "coconut",
    "espresso",
    "foam",
    "french roast",
    "frosted mint",
    "gingerbread",
    "half and half",
    "hazelnut",
    "hot water",
    "ice",
    "iced coffee",
    "iced tea",
    "lemon slice",
    "lemonade",
    "mellow",
    "milk",
    "mint",
    "mocha",
    "oj",
    "pumpkin",
    "raspberry",
    "red bull",
    "sprinkles",
    "strawberry",
    "tea sachet",
    "tenacious tonic",
    "vanilla",
    "velvetized milk",
    "water",
    "whipped cream",
    "white chocolate",
    "white lightning",
];

export { biggList, uniqueIngredients };
