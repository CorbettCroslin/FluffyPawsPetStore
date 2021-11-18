    // Nail Trimming
    
    var nailServ  = [ 

        {   
          title: 'Nail Trimming for Dogs',
          price: 'Packages ranging from $25-$50',
        }
      ]
        var postHTML = " "
    
  
  
        for (var i=0; i <nailServ.length ; i++){
          var price = '<p id="priceServe" class="servPrice">' + nailServ[i].price + '</p></span><button type="button" class="servButton btn ">add to cart</button></div>'
          var concatThis = heading + price;
          postHTML = postHTML + concatThis
      } document.getElementById('nailServ').innerHTML = postHTML


    // Grooming

    
    var groomServ  = [ 
        {   
          title: 'Grooming Salon for Dogs and Cats',
          price: 'Packages running from $25-$100',
      
        },
      ]
        var postHTML = " "
    
    
    
        for (var i=0; i <groomServ.length ; i++){
          var price = '<p id="priceGroomServ" class="servPrice">' + groomServ[i].price + '</p><button type="button" class="servButton btn btn-warning"> add to cart</button></div></div></div>'
          var concatThis = heading + price;
          postHTML = postHTML + concatThis
      } document.getElementById('groomServ').innerHTML = postHTML

// Training

      var trainServ  = [ 
        {   
          title: '',
          price: '',
        }
      ]
        var postHTML = " "
    
  
  
        for (var i=0; i <trainServ.length ; i++){

            var price = '<p id="priceTrainServ" class="servPrice">' + trainServ[i].price + '</p><div id="btnTrainServ"><button type="button" class="servButton btn btn-warning"> add to cart</button></div>'
          var concatThis = heading + price;
          postHTML = postHTML + concatThis
      } document.getElementById('nailServ').innerHTML = postHTML