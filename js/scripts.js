// Custom Scripts
// Custom scripts
// Мобильное меню бургер
  function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)

function tabs(headerSelector, tabSelector, contentSelector, activeClass, display='flex') {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector)
    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none'
        });
        tab.forEach(item => {
            item.classList.remove(activeClass)
        });
    }
    function showTabContent(i = 0) {
       content[i].style.display = display
       tab[i].classList.add(activeClass)
    }
    hideTabContent()
    showTabContent()
    header.addEventListener('click', e => {
        const target = e.target
        if (target.classList.contains(tabSelector.replace(/\./, '')) || 
        target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
            tab.forEach((item, i) => {
                if ( target == item || target.parentNode == item ) {
                    hideTabContent()
                    showTabContent(i)
                }
            });
        }
    })
}

// ПЕРВЫЙ аргумент - класс всего нашего хедера табов.
// ВТОРОЙ аргумент - класс конкретного элемента, при клике на который будет переключатся таб.
// ТРЕТИЙ аргумент - класс того блока, который будет переключаться.
// ЧЕТВЕРТЫЙ аргумент - класс активности, который будет добавлятся для таба, который сейчас активен.
tabs( '.tabs__header' ,'.tabs__header-item', '.tabs__content-item', 'active')
// Аккордеон
function accordion() {
    const items = document.querySelectorAll('.accordion__item-trigger')
    items.forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentNode
            if (parent.classList.contains('accordion__item-active')) {
                parent.classList.remove('accordion__item-active')
            } else {
                document
                    .querySelectorAll('.accordion__item')
                    .forEach(child => child.classList.remove('accordion__item-active'))   
                parent.classList.add('accordion__item-active')
            }
        })
    })
}
accordion() 
// Модальное окно
function bindModal(trigger, modal, close) {
  trigger = document.querySelector(trigger),
    modal = document.querySelector(modal),
    close = document.querySelector(close)

  const body = document.body

  trigger.addEventListener('click', e => {
    e.preventDefault()
    modal.style.display = 'flex'
    body.classList.add('locked')
  });
  close.addEventListener('click', () => {
    modal.style.display = 'none'
     body.classList.remove('locked')
  });
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none'
       body.classList.remove('locked')
    }
  })
}

// ПЕРВЫЙ аргумент - класс кнопки, при клике на которую будет открываться модальное окно.
// ВТОРОЙ аргумент - класс самого модального окна.
// ТРЕТИЙ аргумент - класс кнопки, при клике на которую будет закрываться модальное окно.
bindModal('.modal__btn', '.modal__wrapper', '.modal__close')



const swiper = new Swiper('.swiper', {

  loop:true,
  spaceBetween:20,
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.arrows__btn-next',
      prevEl: '.arrows__btn-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

    // Responsive breakpoints
    breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
    
    },
    768: {
      slidesPerView: 2,
    
    }
  }
  });
/*! SmoothScroll v16.1.4 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).SmoothScroll=t()}(this,(function(){"use strict";var e={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},t=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}})),e},n=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,a=-1,i="",r=n.charCodeAt(0);++a<o;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");t>=1&&t<=31||127==t||0===a&&t>=48&&t<=57||1===a&&t>=48&&t<=57&&45===r?i+="\\"+t.toString(16)+" ":i+=t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(a):"\\"+n.charAt(a)}return"#"+i},o=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},a=function(e){return e?(t=e,parseInt(window.getComputedStyle(t).height,10)+e.offsetTop):0;var t},i=function(e,t,n){0===e&&document.body.focus(),n||(e.focus(),document.activeElement!==e&&(e.setAttribute("tabindex","-1"),e.focus(),e.style.outline="none"),window.scrollTo(0,t))},r=function(e,t,n,o){if(t.emitEvents&&"function"==typeof window.CustomEvent){var a=new CustomEvent(e,{bubbles:!0,detail:{anchor:n,toggle:o}});document.dispatchEvent(a)}};return function(s,c){var u,l,d,f,m={};m.cancelScroll=function(e){cancelAnimationFrame(f),f=null,e||r("scrollCancel",u)},m.animateScroll=function(n,s,c){m.cancelScroll();var l=t(u||e,c||{}),h="[object Number]"===Object.prototype.toString.call(n),p=h||!n.tagName?null:n;if(h||p){var w=window.pageYOffset;l.header&&!d&&(d=document.querySelector(l.header));var g,y,v,S=a(d),E=h?n:function(e,t,n,a){var i=0;if(e.offsetParent)do{i+=e.offsetTop,e=e.offsetParent}while(e);return i=Math.max(i-t-n,0),a&&(i=Math.min(i,o()-window.innerHeight)),i}(p,S,parseInt("function"==typeof l.offset?l.offset(n,s):l.offset,10),l.clip),b=E-w,O=o(),I=0,M=function(e,t){var n=t.speedAsDuration?t.speed:Math.abs(e/1e3*t.speed);return t.durationMax&&n>t.durationMax?t.durationMax:t.durationMin&&n<t.durationMin?t.durationMin:parseInt(n,10)}(b,l),A=function(e){g||(g=e),I+=e-g,v=w+b*function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.customEasing&&(n=e.customEasing(t)),n||t}(l,y=(y=0===M?0:I/M)>1?1:y),window.scrollTo(0,Math.floor(v)),function(e,t){var o=window.pageYOffset;if(e==t||o==t||(w<t&&window.innerHeight+o)>=O)return m.cancelScroll(!0),i(n,t,h),r("scrollStop",l,n,s),g=null,f=null,!0}(v,E)||(f=window.requestAnimationFrame(A),g=e)};0===window.pageYOffset&&window.scrollTo(0,0),function(e,t,n){t||history.pushState&&n.updateURL&&history.pushState({smoothScroll:JSON.stringify(n),anchor:e.id},document.title,e===document.documentElement?"#top":"#"+e.id)}(n,h,l),"matchMedia"in window&&window.matchMedia("(prefers-reduced-motion)").matches?i(n,Math.floor(E),!1):(r("scrollStart",l,n,s),m.cancelScroll(!0),window.requestAnimationFrame(A))}};var h=function(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(l=e.target.closest(s))&&"a"===l.tagName.toLowerCase()&&!e.target.closest(u.ignore)&&l.hostname===window.location.hostname&&l.pathname===window.location.pathname&&/#/.test(l.href)){var t,o;try{t=n(decodeURIComponent(l.hash))}catch(e){t=n(l.hash)}if("#"===t){if(!u.topOnEmptyHash)return;o=document.documentElement}else o=document.querySelector(t);(o=o||"#top"!==t?o:document.documentElement)&&(e.preventDefault(),function(e){if(history.replaceState&&e.updateURL&&!history.state){var t=window.location.hash;t=t||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:t||window.pageYOffset},document.title,t||window.location.href)}}(u),m.animateScroll(o,l))}},p=function(){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(u)){var e=history.state.anchor;"string"==typeof e&&e&&!(e=document.querySelector(n(history.state.anchor)))||m.animateScroll(e,null,{updateURL:!1})}};m.destroy=function(){u&&(document.removeEventListener("click",h,!1),window.removeEventListener("popstate",p,!1),m.cancelScroll(),u=null,l=null,d=null,f=null)};return function(){if(!("querySelector"in document&&"addEventListener"in window&&"requestAnimationFrame"in window&&"closest"in window.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";m.destroy(),u=t(e,c||{}),d=u.header?document.querySelector(u.header):null,document.addEventListener("click",h,!1),u.updateURL&&u.popstate&&window.addEventListener("popstate",p,!1)}(),m}}));

window.addEventListener("load", windowLoadHandler, false);

		//for debug messages
		var Debugger = function() { };
		Debugger.log = function(message) {
			try {
				console.log(message);
			}
			catch (exception) {
				return;
			}
		}

		function windowLoadHandler() {
			canvasApp();
		}

		// function canvasSupport() {
		// 	return Modernizr.canvas;
		// }

		function canvasApp() {
			// if (!canvasSupport()) {
			// 	return;
			// }
			
			var theCanvas = document.getElementById("canvasOne");
			var context = theCanvas.getContext("2d");
			
			var displayWidth;
			var displayHeight;
			var timer;
			var wait;
			var count;
			var numToAddEachFrame;
			var particleList;
			var recycleBin;
			var particleAlpha;
			var r,g,b;
			var fLen;
			var m;
			var projCenterX;
			var projCenterY;
			var zMax;
			var turnAngle;
			var turnSpeed;
			var sphereRad, sphereCenterX, sphereCenterY, sphereCenterZ;
			var particleRad;
			var zeroAlphaDepth;
			var randAccelX, randAccelY, randAccelZ;
			var gravity;
			var rgbString;
			//we are defining a lot of variables used in the screen update functions globally so that they don't have to be redefined every frame.
			var p;
			var outsideTest;
			var nextParticle;
			var sinAngle;
			var cosAngle;
			var rotX, rotZ;
			var depthAlphaFactor;
			var i;
			var theta, phi;
			var x0, y0, z0;
				
			init();
			
			function init() {
				wait = 1;
				count = wait - 1;
				numToAddEachFrame = 8;
				
				//particle color
				r = 255;
				g = 255;
				b = 255;
				
				rgbString = "rgba("+r+","+g+","+b+","; //partial string for color which will be completed by appending alpha value.
				particleAlpha = 1; //maximum alpha
				
				displayWidth = theCanvas.width;
				displayHeight = theCanvas.height;
				
				fLen = 320; //represents the distance from the viewer to z=0 depth.
				
				//projection center coordinates sets location of origin
				projCenterX = displayWidth/2;
				projCenterY = displayHeight/2;
				
				//we will not draw coordinates if they have too large of a z-coordinate (which means they are very close to the observer).
				zMax = fLen-2;
				
				particleList = {};
				recycleBin = {};
				
				//random acceleration factors - causes some random motion
				randAccelX = 0.1;
				randAccelY = 0.1;
				randAccelZ = 0.1;
				
				gravity = 0; //try changing to a positive number (not too large, for example 0.3), or negative for floating upwards.
				
				particleRad = 2.5;
				sphereRad = 280;
				sphereCenterX = 0;
				sphereCenterY = 0;
				sphereCenterZ = -3 - sphereRad;
				
				//alpha values will lessen as particles move further back, causing depth-based darkening:
				zeroAlphaDepth = -750; 
				
				turnSpeed = 2*Math.PI/1600; //the sphere will rotate at this speed (one complete rotation every 1600 frames).
				turnAngle = 0; //initial angle
				
				timer = setInterval(onTimer, 1000/24);
			}
			
			function onTimer() {
				//if enough time has elapsed, we will add new particles.		
				count++;
					if (count >= wait) {
								
					count = 0;
					for (i = 0; i < numToAddEachFrame; i++) {
						theta = Math.random()*2*Math.PI;
						phi = Math.acos(Math.random()*2-1);
						x0 = sphereRad*Math.sin(phi)*Math.cos(theta);
						y0 = sphereRad*Math.sin(phi)*Math.sin(theta);
						z0 = sphereRad*Math.cos(phi);
						
						//We use the addParticle function to add a new particle. The parameters set the position and velocity components.
						//Note that the velocity parameters will cause the particle to initially fly outwards away from the sphere center (after
						//it becomes unstuck).
						var p = addParticle(x0, sphereCenterY + y0, sphereCenterZ + z0, 0.002*x0, 0.002*y0, 0.002*z0);
						
						//we set some "envelope" parameters which will control the evolving alpha of the particles.
						p.attack = 50;
						p.hold = 50;
						p.decay = 160;
						p.initValue = 0;
						p.holdValue = particleAlpha;
						p.lastValue = 0;
						
						//the particle will be stuck in one place until this time has elapsed:
						p.stuckTime = 80 + Math.random()*20;
						
						p.accelX = 0;
						p.accelY = gravity;
						p.accelZ = 0;
					}
				}
				
				//update viewing angle
				turnAngle = (turnAngle + turnSpeed) % (2*Math.PI);
				sinAngle = Math.sin(turnAngle);
				cosAngle = Math.cos(turnAngle);

				//background fill
				context.fillStyle = "#1F1F1F";
				context.fillRect(0,0,displayWidth,displayHeight);
				
				//update and draw particles
				p = particleList.first;
				while (p != null) {
					//before list is altered record next particle
					nextParticle = p.next;
					
					//update age
					p.age++;
					
					//if the particle is past its "stuck" time, it will begin to move.
					if (p.age > p.stuckTime) {	
						p.velX += p.accelX + randAccelX*(Math.random()*2 - 1);
						p.velY += p.accelY + randAccelY*(Math.random()*2 - 1);
						p.velZ += p.accelZ + randAccelZ*(Math.random()*2 - 1);
						
						p.x += p.velX;
						p.y += p.velY;
						p.z += p.velZ;
					}
					
					/*
					We are doing two things here to calculate display coordinates.
					The whole display is being rotated around a vertical axis, so we first calculate rotated coordinates for
					x and z (but the y coordinate will not change).
					Then, we take the new coordinates (rotX, y, rotZ), and project these onto the 2D view plane.
					*/
					rotX = cosAngle*p.x + sinAngle*(p.z - sphereCenterZ);
					rotZ = -sinAngle*p.x + cosAngle*(p.z - sphereCenterZ) + sphereCenterZ;
					m = fLen/(fLen - rotZ);
					p.projX = rotX*m + projCenterX;
					p.projY = p.y*m + projCenterY;
						
					//update alpha according to envelope parameters.
					if (p.age < p.attack+p.hold+p.decay) {
						if (p.age < p.attack) {
							p.alpha = (p.holdValue - p.initValue)/p.attack*p.age + p.initValue;
						}
						else if (p.age < p.attack+p.hold) {
							p.alpha = p.holdValue;
						}
						else if (p.age < p.attack+p.hold+p.decay) {
							p.alpha = (p.lastValue - p.holdValue)/p.decay*(p.age-p.attack-p.hold) + p.holdValue;
						}
					}
					else {
						p.dead = true;
					}
					
					//see if the particle is still within the viewable range.
					if ((p.projX > displayWidth)||(p.projX<0)||(p.projY<0)||(p.projY>displayHeight)||(rotZ>zMax)) {
						outsideTest = true;
					}
					else {
						outsideTest = false;
					}
					
					if (outsideTest||p.dead) {
						recycle(p);
					}
					
					else {
						//depth-dependent darkening
						depthAlphaFactor = (1-rotZ/zeroAlphaDepth);
						depthAlphaFactor = (depthAlphaFactor > 1) ? 1 : ((depthAlphaFactor<0) ? 0 : depthAlphaFactor);
						context.fillStyle = rgbString + depthAlphaFactor*p.alpha + ")";
						
						//draw
						context.beginPath();
						context.arc(p.projX, p.projY, m*particleRad, 0, 2*Math.PI, false);
						context.closePath();
						context.fill();
					}
					
					p = nextParticle;
				}
			}
				
			function addParticle(x0,y0,z0,vx0,vy0,vz0) {
				var newParticle;
				var color;
				
				//check recycle bin for available drop:
				if (recycleBin.first != null) {
					newParticle = recycleBin.first;
					//remove from bin
					if (newParticle.next != null) {
						recycleBin.first = newParticle.next;
						newParticle.next.prev = null;
					}
					else {
						recycleBin.first = null;
					}
				}
				//if the recycle bin is empty, create a new particle (a new ampty object):
				else {
					newParticle = {};
				}
				
				//add to beginning of particle list
				if (particleList.first == null) {
					particleList.first = newParticle;
					newParticle.prev = null;
					newParticle.next = null;
				}
				else {
					newParticle.next = particleList.first;
					particleList.first.prev = newParticle;
					particleList.first = newParticle;
					newParticle.prev = null;
				}
				
				//initialize
				newParticle.x = x0;
				newParticle.y = y0;
				newParticle.z = z0;
				newParticle.velX = vx0;
				newParticle.velY = vy0;
				newParticle.velZ = vz0;
				newParticle.age = 0;
				newParticle.dead = false;
				if (Math.random() < 0.5) {
					newParticle.right = true;
				}
				else {
					newParticle.right = false;
				}
				return newParticle;		
			}
			
			function recycle(p) {
				//remove from particleList
				if (particleList.first == p) {
					if (p.next != null) {
						p.next.prev = null;
						particleList.first = p.next;
					}
					else {
						particleList.first = null;
					}
				}
				else {
					if (p.next == null) {
						p.prev.next = null;
					}
					else {
						p.prev.next = p.next;
						p.next.prev = p.prev;
					}
				}
				//add to recycle bin
				if (recycleBin.first == null) {
					recycleBin.first = p;
					p.prev = null;
					p.next = null;
				}
				else {
					p.next = recycleBin.first;
					recycleBin.first.prev = p;
					recycleBin.first = p;
					p.prev = null;
				}
			}	
		}



new SmoothScroll('a[href*="#"]')

const element = document.querySelector('.phone__input')
const maskOptions = {
  mask: '+{7}(000)000-00-00'
}
const mask = IMask(element, maskOptions)


//Change cursor

function changeCursor(){
  const cursor = document.querySelector('.cursor')
  const follower = document.querySelector('.follower')

  const links = document.querySelectorAll('.link')

  let posX=0,posY=0;
  let mouseX=0,mouseY=0;

  TweenMax.to({},0.01,{
    repeat:-1,
    onRepeat:()=>{

      posX+=(mouseX-posX)/5

      posY +=(mouseY-posY)/5
     TweenMax.set(follower,{
      css:{
        left:posX-12,
        top:posY-12
      }

     })

     TweenMax.set(cursor,{
       css:{
         left:mouseX,
         top:mouseY
       }
       
    })
    }
  })

  links.forEach((link)=>{
    link.addEventListener('mouseenter',()=>{
      cursor.classList.add('active')
      follower.classList.add('active')  
       
    })
    link.addEventListener('mouseleave',()=>{
      cursor.classList.remove('active')
      follower.classList.remove('active')  
       
    })
  })

  window.addEventListener('mousemove',(e)=>{
      mouseX=e.clientX
      mouseY=e.clientY
    
  
  })

}

changeCursor()




