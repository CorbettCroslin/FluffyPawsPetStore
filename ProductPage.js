

var dogShop = [

    // DOGS
    {
      title: 'Chuckit! Ultra Ball Dog Toy',
      image: './images/Items/ChuckitUltraBallDogToy10.99_4.5stars.jpg',
      price: '7.78 <strike>WAS $10.99</strike>',
      star: '',
      description: "Designed for the most demanding use of your dog. High bounce for maximum play. Floats - great for playing near a pool or other body of water."
    },
        {
      title: 'KONG Genius Mike Dog Toy',
      image: './images/Items/KONGGeniusMikeDogToy5.19to8.99_4stars.jpg',
      price: '5.19 <strike>WAS $8.99</strike>',
      // star: '',
      description: "Named in honor of Michelangelo and is designed to stimulate a dog's curiosity and hold its attention. Great for helping to combat boredom and separation anxiety and can be used as a treat-dispensing toy on its own."
    },
    {
        title: 'Nerf TPR Bash Squeak Toy',
        image: './images/Items/NerfTPRBashSqueakandCrunchFootballDogToy11.99_3.5stars.jpg',
        price: '11.99',
        // stars: 3.5,
        description: "Durable rubber body stands up to extended chewing. Makes an interactive squeaking and crunching sound that dogs love."
      },
    {
        title: 'Wild One Spruce Dog Harness',
        image: './images/Items/WildOneSpruceDogHarness47.99_4stars.png',
        price: '35.59 <strike>WAS $47.99</strike>',
        // stars: 4,
        description: "An adjustable neck and chest for all shapes and sizes.  Three leash attachment points because we all lead in different ways."
      },
    {
        title: 'Wild One Lilac Dog Harness',
        image: './images/Items/WildOneLilacDogHarness47.99_4stars.jpg',
        price: '35.59 <strike>WAS $47.99</strike>',
        // stars: 4,
        description: "An adjustable neck and chest for all shapes and sizes.  Three leash attachment points because we all lead in different ways."
      },
    {
        title: 'Reddy Olive Dog Bed',
        image: './images/Items/ReddyIndoorOutdoorOliveDogBed59.99_4.5stars.jpg',
        price: '59.99',
        // stars: 4.5,
        description: "Features a strong fabric built to last through all your adventures together. Odor-resistant treatment reduces odor-causing bacteria on bed fabric."
      },

    ]
    
    var postHTML = " "
  
  
  
  
    for (var i=0; i < dogShop.length ; i++){
        var heading = '<div class="containerPP ' + '"><div class="innerContainerPP"><span><h5 id="dogProduct" class="productPP">' + dogShop[i].title + '</h5>'
        var image = '<img id="dogImage" class="imagePP" src="' + dogShop[i].image + '"/<br>' 
        var price = '<p id="dogPice" class="pricePP"> $' + dogShop[i].price + '</p></span>'
        var description = '<button class="btn buttonDis" type="button" data-bs-toggle="popover" data-bs-content="' + dogShop[i].description + '">Details</button><div id="myButton"><button type="button" class="buttonPP btn">add to cart</button></div></div></div>'        
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis

    } document.getElementById('dogShop').innerHTML = postHTML

    // CATS
    
  var catShop = [ 
      {   
        title: 'Leaps and Bounds Cat Track',
        image: './images/Items/LeapsandBoundsCatTrackCatToy14.99_4.5star.jpg',
        price: '14.78 <strike>WAS $20.99</strike>',
        // stars: 4.5,
        description: " Cat chaser track and scratcher in one. Rattle ball keeps kitty on the chase. Refillable sisal pad."
      },
      {
        title: 'Safari Mice Toy with Catnip',
        image: './images/Items/SafariMiceCatToyswithCatnip4.99_4stars.jpg',
        price: '3.58 <strike>WAS $4.99</strike>',
        // stars: 4,
        description: "Pack of three. Catnip infused to entice your cat. Encourages exercise cleverly disguised as fun."
      },
      {
        title: 'Leaps & Bounds Sardine Toy',
        image: './images/Items/LeapsBoundsSardineCatToys8.99_4.5stars.jpg',
        price: '8.99',
        // stars: 4.5,
        description: "Leaps & Bounds Sardine Cat Toy Set."
      },
      {
        title: 'YOULY Red Check Collar',
        image:'./images/Items/YOULYTheHipsterRedBuffalo CheckBreakawayCollar12.99_4stars.jpg',
        price: '12.99',
        // stars: 4 '(98)',
        description: "Breakaway buckle releases collar when caught. Adjustable for a custom fit. Removable bells help your human keeps tabs on your whereabouts."
      },
      {
        title: 'YOULY Blue Moon & Star Collar',
        image: './images/Items/YOULYTheMagicianBlueMoonStarPrintBreakawayCatCollar8.99_4stars.jpg',
        price: '8.99',
        // stars: 4 '(35)',
        description: "Breakaway buckle releases collar when caught. Adjustable for a custom fit. Removable bells help your human keeps tabs on your whereabouts."
      },
      {
        title: 'KONG 2-In-1 Cat Carrier',
        image: './images/Items/KONG2In1CatCarrierandravelMat79.99_3stars.jpg',
        price: '79.99',
        // stars: 3 '(21)',
        description: "Include a removable padded travel mat which can help reduce stress when travelling, Loadable from either the side or the top, suitable for Air or Car travel and also has comfortable handle and shoulder straps for moving your pet around."
      }
    ]
      var postHTML = " "
  


      for (var i=0; i <catShop.length ; i++){
        var heading = '<div class="containerPP ' + '"><div class="innerContainerPP"><span><h5 class="productPP" id"catProduct">' + catShop[i].title + '</h5>'
        var image = '<img id="catImage" class="imagePP" src="' + catShop[i].image + '"/ <br>'
        var price = '<p id="catPrice" class="pricePP"> $' + catShop[i].price + '</p></span>'
        var description = '<button class="btn buttonDis" type="button" data-bs-toggle="popover" data-bs-content="' + catShop[i].description + '">Details</button><div id="myButton"><button type="button" class="buttonPP btn btn-warning"> add to cart</button></div></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    } document.getElementById('catShop').innerHTML = postHTML



    // FISH

  var fishShop = [ 
    {
        title: 'Aqueon Color Enhancing Food',
        image: './images/Items/AqueonBettaColorEnhancingPelletsBettaFood0.95oz_4.99_4.5stars.jpg',
        price: '4.99',
        // stars: 4.5 '(63)',
        description: "0.95oz Aqueon foods contain only natural ingredients and contain no artificial colors. Brings out true colors and essentials for proper growth."
      },
    {
        title: 'Aqueon Water Conditioner',
        image: './images/Items/AqueonWaterConditioner16oz_13.99_5stars.jpg',
        price: '13.99',
        // stars: 5 '(113)',
        description: "16 oz. Instantly neutralizes choline and chloramines typically found in tap water, making it safe for fish. Instantly neutralizes choline and chloramines typically found in tap water, making it safe for fish"
      },
    {
        title: 'Instant Ocean Marine Sea Salt',
        image: './images/Items/InstantOceanMarineFastDissolvingSeaSalt3lbs_9.99_4.5stars.jpg',
        price: '9.99',
        // stars: 4.5,
        description: "3lbs. No matter the size of your aquarium, Instant Ocean sea salts and water care products offer the smartest, easiest way to bring the ocean home. Scientifically formulated sea salts are used exclusively by many of the leading large-scale aquariums and research facilities across the country."
      },
    {
        title: 'Instant Ocean Test Hydrometer',
        image: './images/Items/InstantOceanAquariumWaterTestHydrometer15.99._4stars.jpg',
        price: '15.99',
        // stars: 4 '(52)',
        description: "No matter the size of your aquarium, Instant Ocean sea salts and water care products offer the smartest, easiest way to bring the ocean home. Accurate, reliable water test equipment is a vital part of maintaining a healthy, successful marine aquarium. "
      },
      {
        title: 'Hikari Tropical Micro Pellets',
        image: './images/Items/HikariTropicalMicroPellets5.99_5stars.jpg',
        price: '5.69 <strike>WAS $5.99</strike>',
        // stars: '5';,
        description: "0.77 oz, For Tetras, Barbs & Small Fish. Designed To Stay In The Water Column Allowing Fish Easy Access. Scientifically Formulated To Support Immune System Health While Offering Outstanding Nutrition"
      },
    {
        title: 'Imagitarium Aquarium Net',
        image: './images/Items/ImagitariumAquariumNet3.99_4.5stars.jpg',
        price: '3.99',
        // stars: ,
        description: "Features a soft and dependable weave that can gently scoop up and help relocate pet fish. Covered handle allows for a comfortable and secure grip. Ideal for freshwater or saltwater habitats"
      },
  ]

      var postHTML = " "
  


      for (var i=0; i <fishShop.length ; i++){
        var heading = '<div class="containerPP" ' + '"><div class="innerContainerPP"><span><h5 id="fishProduct" class="productPP">' + fishShop[i].title + '</h5>'
        var image = '<img id="fishImage" class="imagePP" src="' + fishShop[i].image + '"/<br>'
        var price = '<p id="fishPrice" class="pricePP"> $' + fishShop[i].price + '</p></span>'
        var description = '<button class="btn buttonDis" type="button" data-bs-toggle="popover" data-bs-content="' + fishShop[i].description + '">Details</button><div id="myButton"><button type="button" class="buttonPP btn btn-warning"> add to cart</button></div></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    } document.getElementById('fishShop').innerHTML = postHTML


    //SMALL ANIMALS


  var smallAnShop = [ 
    {
        title: 'Higgins Hamster/Gerbil Food',
        image: './images/Items/HigginsSunburst HamsterGerbil6.99_5stars.jpg',
        price: '6.99',
        // stars: '5stars',
        description: "2.5 lb, Premium gourmet small animal food loaded with natural goodness. Enriched with DHA, balanced with Omega fatty acids as well as digestive probiotics"
      },
    {
        title: 'Mazuri Timothy Rabbit Food',
        image: './images/Items/MazuriTimothBasedRabbitFood17.99_4.5stars.jpg',
        price: '14.34 <strike>WAS $17.99</strike>',
        // stars: '4.5',
        description: "5 lb, Contains stabilized vitamin C & yucca schidigera extract. Nutritionally complete, supplementation not necessary."
      },
    {
        title: 'Zoo Aquatic Turtle Food',
        image: './images/Items/ZooMedGourmetAquaticTurtleFood14.99_4.5.jpg',
        price: '14.99',
        // stars: '4.5',
        description: "11 oz, This food adds a nice high protein treat to your turtles diet with the addition of dried shrimp and mealworms. With added vitamins and minerals. No artificial preservatives, colors, or flavors"
      },
    {
        title: 'So Phresh Animal Bedding',
        image: './images/Items/SoPhreshSmallAnimalBedding24.99_4.5stars.jpg',
        price: '24.99',
        // stars: '4.5' ,
        description: "40 L, Crumbled Paper Small Animal Bedding from So Phresh. Features absorbent crumbled paper.Completely non-toxic and biodegradab."
      },
    {
        title: 'So Phresh Small Litter Scoop',
        image: './images/Items/SoPhreshSmallAnimalLitterScoop3.49_3.5stars.jpg',
        price: '3.49',
        // stars: '3.5',
        description: '12 L X 5 W X 1.5 H, Plastic scoop with sifting grid and long handle for easy access'
      },
      {
        title: 'WARE Small Animal Cage',
        image: './images/Items/WARESmallAnimalCritterCage39.99_4stars.jpg',
        price: '31.66 <strike>WAS $39.99</strike>',
        // stars: '4',
        description: "Easy to clean metal drop pan. Large access door with safety lock. Hamster cages require no tool assembly"
      },

  ]


  var postHTML = " "
  


    for (var i=0; i <smallAnShop.length ; i++){
      var heading = '<div class="containerPP" ' + '"><div class="innerContainerPP"><span><h5 id="smallAnProduct" class="productPP">' + smallAnShop[i].title + '</h5>'
      var image = '<img id="smallAnImage" class="imagePP" src="' +smallAnShop[i].image + '"/<br>'
      var price = '<p id="smallAnPrice" class="pricePP"> $' + smallAnShop[i].price + '</p></span>'
      var description = '<button class="btn buttonDis" type="button" data-bs-toggle="popover" data-bs-content="' + smallAnShop[i].description + '">Details</button><div id="myButton"><button type="button" class="buttonPP btn"> add to cart</button></div></div></div>'
      var concatThis = heading + image + price + description;
      postHTML = postHTML + concatThis

    } document.getElementById('smallAnShop').innerHTML = postHTML

