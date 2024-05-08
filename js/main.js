$(function(){
	$('.revies__inner').slick({
		arrows: true,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		Infinite: true,
		nextArrow: '<button type="button" class="team__slider-next slick-arr"><img src="images/arrow-right.svg" alt="next"></button>',
		prevArrow: '<button type="button" class="team__slider-prev slick-arr"><img src="images/arrow-left.svg" alt="prev"></button>',
	  });

	  $("#rateYo-1").rateYo({
		rating    : 5,
		spacing   : "5px",
		multiColor: {
	 
		  "startColor": "#FF0000", 
		  "endColor"  : "#F39C12"  
		}
	  });
	  $("#rateYo-2").rateYo({
		rating    : 4,
		spacing   : "5px",
		multiColor: {
	 
		  "startColor": "#FF0000", 
		  "endColor"  : "#F39C12"  
		}
	  });
	  $("#rateYo-3").rateYo({
		rating    : 4.5,
		spacing   : "5px",
		multiColor: {
	
		  "startColor": "#FF0000", 
		  "endColor"  : "#F39C12"  
		}
	  });
	  
});


// полифил для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach){
	NodeList.prototype.forEach = function (callback, thisArg){
	  thisArg = thisArg || window;
	  for (var i = 0; i <this.length; i++){
		callback.call(thisArg, this[i], i, this);
	  };
	};
  };
  
  document.querySelectorAll('.dropdown').forEach(function(dropDownWrapper){
  
		  const dropDownBtn = dropDownWrapper.querySelector('.dropdown-btn');
		  const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
		  const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
		  const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');
		  const dropDownArr = dropDownWrapper.querySelector('.dropdown-arr');
  
		  // клик по кнопке - открыть/закрыть select
			dropDownBtn.addEventListener('click', function(){
			dropDownList.classList.toggle('on-flex');
			dropDownArr.classList.toggle('rotate-arr');
		  })
  
		  dropDownListItems.forEach(function(listItem){
			listItem.addEventListener('click', function(e) {
			  e.stopPropagation();
			  dropDownBtn.innerText = this.innerText;
			  dropDownInput.value = this.dataset.value;
  
			  dropDownList.classList.remove('on-flex');
			  dropDownArr.classList.remove('rotate-arr');
			});
		  });
  
		  // клик вне дропдауна - закрвть дропдаун
		  document.addEventListener('click', function(e){
			if(e.target !== dropDownBtn){
			  dropDownList.classList.remove('on-flex');
			  dropDownArr.classList.remove('rotate-arr');
			}
		  });
  
		  document.addEventListener('keydown', function(e) {
			if(e.key === 'Tab' || e.key ==='Escape'){
			  dropDownList.classList.remove('on-flex');
			  dropDownArr.classList.remove('rotate-arr');
			}
		  });
  });