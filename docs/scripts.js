const identity = { name: "Ayush Gupta", image: "Ayush" };
const data = {
	NavBar: {
		...identity,
		links: [
			"Home",
			"About",
			"Projects",
			"Achievement",
			"Contact",
		],
	},
	Home: {
		introduction:
			"I am a third year student of Bachelor of Technology in Computer Science Engineering from Indian Institute of Information Technology, Lucknow",
		resumeLink: "1h3YxT2JGx0Bj3UdNs3XAxLAD1tUU3wCk",
		typedElement: [
			"Ayush Gupta",
			"Tech Aficionado",
			"Machine Learning Developer",
			"Open Source Contributor",
			// "Spring Boot Developer",
		],
	},
	About: {
		...identity,
		NavTabs: [
			{ id: "story", name: "About", placement: "top" },
			{ id: "skill", name: "Skill", placement: "bottom" },
			{ id: "education", name: "Education", placement: "top" },
		],
		about: {
			"tech-stats": "Machine Learning Developer, Open Source Contributer",
			bio: "I am a tech enthusiast who enjoys learning new technologies and tackling interesting problems. I thrive in a team environment, where I can collaborate with others and contribute my skills effectively. I always look for opportunities that help enhance my skills.",
			"IDE, Editors & Tools": [
				"VS Code",
				"Google Colab"
				// "Spring Tools Suite",
				// "Android Studio",
			],
		},
		skills: [
			[
				{ skill: "C", progress: "90" },
				{ skill: "React Js", progress: "85" },
				{ skill: "Python", progress: "85" },
				{ skill: "Tensorflow", progress: "80" },
				{ skill: "OpenCV", progress: "90" },
				// { skill: "Machine Learning", progress: "90" },
				// { skill: "Data Science", progress: "90" },
				// { skill: "Android", progress: "90" },
				// { skill: "Kotlin", progress: "90" },
				// { skill: "Mongo DB", progress: "95" },
			],
			[
				{ skill: "C++", progress: "90" },
				{ skill: "JAVA", progress: "95" },
				{ skill: "HTML/CSS", progress: "90" },
				{ skill: "Javascript", progress: "90" },
				{ skill: "Git/GitHub", progress: "95" },
			],
		],
		education: [
			{
				animationClass: "Right left",
				textAlignment: "right",
				degree: "Bachelor of Technology (B.Tech), Computer Science",
				college: "Indian Institute Of Information Technology, Lucknow",
				duration: "2022 - 2026",
				percentage: "CGPA:8.5",
			},
			{
				animationClass: "Left right",
				textAlignment: "left",
				degree: "XII (Senior Secondary), PCM",
				college: "Boston Public School",
				duration: "Year of Completion : 2021",
				percentage: "Percentage : 83%",
			},
			{
				animationClass: "Right left",
				textAlignment: "right",
				degree: "X (Secondary)",
				college: "St.Peter's College",
				duration: "Year of Completion : 2019",
				percentage: "GPA: 9.4",
			},
		],
	},
	
	Projects: {
		background: "footer-cloud.svg",
		sun: [
			"stream z-1 d-block",
			"stream z-1 d-block",
			"stream z-1 d-block",
			"stream z-1 d-block",
			"stream z-1 d-block",
			"stream z-1 d-block",
			"stream z-1 d-block",
			"stream z-1 d-block",
			"circle z-2 height-full width-full",
			"circle-night z-2 height-full width-full",
		],
		developTime: [
			{ time: "1", style: { left: "66px", top: "-10px" } },
			{ time: "2", style: { left: "88px", top: "-20px" } },
			{ time: "3", style: { left: "110px", top: "-10px" } },
		],
		moon: { dot: ["dot", "dot", "dot"], name: ["Moon-dark", "Moon"] },
		projects: [
			[
				{
					class: "Left",
					title: "Guardian Vision",
					subtitle: "Hackathon Winning Project",
					date: "23 April, 2023 - 25 April, 2023",
					description:
						"The project aims to develop a system for violence detection using CCTV footage and providing an immediate alert to the police. The system will use advanced image processing and machine learning techniques to analyze the CCTV footage in real-time and detect any violent behavior or actions.",
					link: "https://github.com/PavanaSakethaRam/Guardian-Vision",
				},

				{
					class: "Up",
					title: "BalanceBeats",
					subtitle: "Google Solution Challenge 2024",
					date: "05 August, 2023 - 06 August, 2023",
					description:
						"BalanceBeats is a mobile application developed with Flutter, dedicated to advancing the United Nations Sustainable Development Goal for Good Health and Well-being.",
					link: "https://github.com/Ayushlion8/balencebeats",
				},

				{
					class: "Right",
					title: "Attendance Assistance",
					subtitle: "First year final project",
					date: "1 April, 2023 - 1 July, 2023",
					description:
						"Open source project which helps the teachers 	 to track the attendance of the students. It is group project which uses React.js as the frontend and Spring Boot as the backend",
					link: "https://github.com/maskboyAvi/Attendance-Assistant-",
				},
			],
			[
				// {
				// 	class: "Left",
				// 	title: "Attendance Assistance",
				// 	subtitle: "First year final project",
				// 	date: "1 April, 2023 - 1 July, 2023",
				// 	description:
				// 		"Open source project which helps the teachers to track the attendance of the students. It is group project which uses React.js as the frontend and Spring Boot as the backend",
				// 	link: "https://github.com/maskboyAvi/Attendance-Assistant-",
				// },

				// {
				// 	class: "Up",
				// 	title: "Survey Form",
				// 	subtitle: "MSME Project",
				// 	date: "5 May, 2023 - 31 May, 2023",
				// 	description:
				// 		"It is MSME government project for collecting various details. It is a group project which is made using MERN stack",
				// 	link: "https://form-survey-oz22gvjon-umeshsinghverma.vercel.app/",
				// },

				// {
				// 	class: "Right",
				// 	title: "Promptify",
				// 	subtitle: "AI - Prompts",
				// 	date: "15 May, 2023 - 21 May, 2023",
				// 	description:
				// 		"Promptify is a web application made to discover, create and share innovative thoughts through creative prompts.Tech Stacks used are Next.js Tailwind css and MongoDB",
				// 	link: "https://promptify-89fwtx63e-akhilender-bongirwar.vercel.app/",
				// },
			],
			[
				// {
				// 	class: "Left",
				// 	title: "Note-Taker",
				// 	subtitle: "Short Notes taking website",
				// 	date: "20 Dec 2022 - 12 Jan 2023",
				// 	description:
				// 		"Note Taker is an amazing web application for taking immediate notes. It is built with React.js",
				// 	link: "https://note-taker-six-chi.vercel.app/",
				// },

				// {
				// 	class: "Up",
				// 	title: "To-do-list",
				// 	subtitle: "Simple to-do-list ",
				// 	date: "15 Jan, 2023 - 20 Jan, 2023",
				// 	description:
				// 		"It has all search, create, delete and mark as done functionalities. It is built using Next.js.",
				// 	link: "https://to-do-app-tawny-tau.vercel.app/",
				// },

				// {
				// 	class: "Right",
				// 	title: "Ecommerce",
				// 	subtitle: "Shopping Website",
				// 	date: "21 September, 2023 - 24 September, 2023",
				// 	description:
				// 		"E-commerce is a shopping website. Tech stacks used are React.js, Tailwind css and express.js.",
				// 	link: "https://ecommerce-mauve-two-15.vercel.app/",
				// },
			],
		],
	},
	Achievement: [
		{
			animationClass: "Left",
			description:
				"Coordinator of NIVESH, Investment and Finance Club of IIIT Lucknow.",
			image: "Nivesh",
		},
		{
			animationClass: "Up",
			description:
				"Succesfully completed HacktoberFest 2023 by making valuable contributions to various startup organizations.",
			image: "Hacktoberfest",
		},
		{
			animationClass: "Left",
			description:
				"Machine Learning Representative of Technical Club of IIIT Lucknow.",
			image: "Axios",
		},
		{
			animationClass: "Up",
			description:
				"GDG LEAD ML Wing IIIT Lucknow.",
			image: "GDSC",
		}

		// {
		// 	animationClass: "Left",
		// 	description:
		// 		"Got Selected as a contributor for Girl's Script Summer of Code and Secured 162th Rank out of 2000+ participants.",
		// 	image: "GSSOC",
		// },
		// {
		// 	animationClass: "Up",
		// 	description:
		// 		"Got Selected as a contributor for Social Summer of Code - 2.0",
		// 	image: "SSOC",
		// },

		// {
		// 	animationClass: "Left",
		// 	description:
		// 		"Secured 1st Position among all first years in Issue Hunting competiton",
		// 	image: "Equinox",
		// },

		// {
		// 	animationClass: "Right",
		// 	description:
		// 		"Won 𝗛𝗮𝗰𝗸𝘁𝗼𝗯𝗲𝗿𝗳𝗲𝘀𝘁 𝟮𝟬𝟮2 T-shirt by creating more than 6 Pull Request.",
		// 	image: "Hacktoberfest",
		// },
	],
	Contact: [
		{
			animationClass: "Left",
			title: "Location",
			icon: "fas fa-street-view",
			links: [
				{
					type: "https://maps.google.com/?q=",
					title: "Lucknow, Uttar Pradesh, India",
				},
			],
		},
		{
			animationClass: "Up",
			title: "Contact Number",
			icon: "fas fa-mobile-alt",
			links: [{ type: "tel:", title: "+91-8923194616" }],
		},
		{
			animationClass: "Right",
			title: "E-Mail",
			icon: "far fa-envelope",
			links: [{ type: "mailto:", title: "ayushcodecraft@gmail.com" }],
		},
	],
	Social: [
		[
			{
				link: "https://github.com/Ayushlion8",
				class: "fab fa-github",
				name: "GitHub",
				placement: "left",
			},
			{
				link: "https://www.linkedin.com/in/ayush-gupta-ab71bb257/",
				class: "fab fa-linkedin-in",
				name: "LinkedIn",
				placement: "top",
			},
			{
				link: "https://wa.me/918923194616",
				class: "fab fa-whatsapp",
				name: "WhatsApp",
				placement: "top",
			},
			// {
			// 	link: "https://www.instagram.com/akhils/",
			// 	class: "fab fa-instagram",
			// 	name: "Instagram",
			// 	placement: "right",
			// },
			// {
			// 	link: "https://gist.github.com/akhils/",
			// 	class: "fas fa-laptop-code",
			// 	name: "Gist",
			// 	placement: "top",
			// },
			// {
			// 	link: "https://www.hackerrank.com/akhils",
			// 	class: "fab fa-hackerrank",
			// 	name: "HackerRank",
			// 	placement: "right",
			// },
		],
		[
			// {
			// 	link: "https://www.instagram.com/akhils/",
			// 	class: "fab fa-instagram",
			// 	name: "Instagram",
			// 	placement: "left",
			// },
			// {
			// 	link: "https://www.facebook.com/jayant.goel.12/",
			// 	class: "fab fa-facebook",
			// 	name: "Facebook",
			// 	placement: "bottom",
			// },
			// {
			// 	link: "https://wa.me/918377838183",
			// 	class: "fab fa-whatsapp",
			// 	name: "WhatsApp",
			// 	placement: "bottom",
			// },
			// {
			// 	link: "https://twitter.com/akhils/",
			// 	class: "fab fa-twitter",
			// 	name: "Twitter",
			// 	placement: "right",
			// },
		],
	],
	Footer: {
		dev: {
			name: "dev",
			link: "/",
			image: "monkey",
		},
		citation: {
			...identity,
			animationClass: "flipInX",
			icon: "fas fa-heart",
		},
	},
};

;!function(b,a){"object"==typeof exports&&"object"==typeof module?module.exports=a():"function"==typeof define&&define.amd?define([],a):"object"==typeof exports?exports.Typed=a():b.Typed=a()}(this,function(){return function(b){function a(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return b[d].call(e.exports,e,e.exports,a),e.loaded=!0,e.exports}var c={};return a.m=b,a.c=c,a.p="",a(0)}([function(c,a,b){"use strict";var e=function(){function a(d,c){for(var b=0;b<c.length;b++){var a=c[b];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(d,a.key,a)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=b(1),g=b(3),d=function(){function a(b,c){(function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")})(this,a),f.initializer.load(this,c,b),this.begin()}return e(a,[{key:"begin",value:function(){var a=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){a.currentElContent&&0!==a.currentElContent.length?a.backspace(a.currentElContent,a.currentElContent.length):a.typewrite(a.strings[a.sequence[a.arrayPos]],a.strPos)},this.startDelay)}},{key:"typewrite",value:function(a,b){var d=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var c=this.humanizer(this.typeSpeed),e=1;return!0===this.pause.status?void this.setPauseStatus(a,b,!0):void(this.timeout=setTimeout(function(){b=g.htmlParser.typeHtmlChars(a,b,d);var f=0,c=a.substr(b);if("^"===c.charAt(0)&&/^\^\d+/.test(c)){var h=1;h+=(c=/\d+/.exec(c)[0]).length,f=parseInt(c),d.temporaryPause=!0,d.options.onTypingPaused(d.arrayPos,d),a=a.substring(0,b)+a.substring(b+h),d.toggleBlinking(!0)}if("`"===c.charAt(0)){for(;"`"!==a.substr(b+e).charAt(0)&&!(b+ ++e>a.length););var i=a.substring(0,b),j=a.substring(i.length+1,b+e),k=a.substring(b+e+1);a=i+j+k,e--}d.timeout=setTimeout(function(){d.toggleBlinking(!1),b>=a.length?d.doneTyping(a,b):d.keepTyping(a,b,e),d.temporaryPause&&(d.temporaryPause=!1,d.options.onTypingResumed(d.arrayPos,d))},f)},c))}},{key:"keepTyping",value:function(b,a,c){0===a&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),a+=c;var d=b.substr(0,a);this.replaceText(d),this.typewrite(b,a)}},{key:"doneTyping",value:function(a,b){var c=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){c.backspace(a,b)},this.backDelay))}},{key:"backspace",value:function(a,b){var d=this;if(!0===this.pause.status)return void this.setPauseStatus(a,b,!1);if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var c=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){b=g.htmlParser.backSpaceHtmlChars(a,b,d);var c=a.substr(0,b);if(d.replaceText(c),d.smartBackspace){var e=d.strings[d.arrayPos+1];e&&c===e.substr(0,b)?d.stopNum=b:d.stopNum=0}b>d.stopNum?(b--,d.backspace(a,b)):b<=d.stopNum&&(d.arrayPos++,d.arrayPos===d.strings.length?(d.arrayPos=0,d.options.onLastStringBackspaced(),d.shuffleStringsIfNeeded(),d.begin()):d.typewrite(d.strings[d.sequence[d.arrayPos]],b))},c)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"toggleBlinking",value:function(a){this.cursor&&(this.pause.status||this.cursorBlinking!==a&&(this.cursorBlinking=a,a?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(a){return Math.round(Math.random()*a/2)+a}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))}},{key:"replaceText",value:function(a){this.attr?this.el.setAttribute(this.attr,a):this.isInput?this.el.value=a:"html"===this.contentType?this.el.innerHTML=a:this.el.textContent=a}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),a}();a.default=d,c.exports=a.default},function(f,b,d){"use strict";var a,g=Object.assign||function(d){for(var a=1;a<arguments.length;a++){var b=arguments[a];for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(d[c]=b[c])}return d},h=function(){function a(d,c){for(var b=0;b<c.length;b++){var a=c[b];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(d,a.key,a)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),i=(a=d(2))&&a.__esModule?a:{default:a},c=function(){function a(){!function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}(this,a)}return h(a,[{key:"load",value:function(a,f,c){if("string"==typeof c?a.el=document.querySelector(c):a.el=c,a.options=g({},i.default,f),a.isInput="input"===a.el.tagName.toLowerCase(),a.attr=a.options.attr,a.bindInputFocusEvents=a.options.bindInputFocusEvents,a.showCursor=!a.isInput&&a.options.showCursor,a.cursorChar=a.options.cursorChar,a.cursorBlinking=!0,a.elContent=a.attr?a.el.getAttribute(a.attr):a.el.textContent,a.contentType=a.options.contentType,a.typeSpeed=a.options.typeSpeed,a.startDelay=a.options.startDelay,a.backSpeed=a.options.backSpeed,a.smartBackspace=a.options.smartBackspace,a.backDelay=a.options.backDelay,a.fadeOut=a.options.fadeOut,a.fadeOutClass=a.options.fadeOutClass,a.fadeOutDelay=a.options.fadeOutDelay,a.isPaused=!1,a.strings=a.options.strings.map(function(a){return a.trim()}),"string"==typeof a.options.stringsElement?a.stringsElement=document.querySelector(a.options.stringsElement):a.stringsElement=a.options.stringsElement,a.stringsElement){a.strings=[],a.stringsElement.style.display="none";var d=Array.prototype.slice.apply(a.stringsElement.children),e=d.length;if(e)for(var b=0;b<e;b+=1){var h=d[b];a.strings.push(h.innerHTML.trim())}}for(var b in a.strPos=0,a.arrayPos=0,a.stopNum=0,a.loop=a.options.loop,a.loopCount=a.options.loopCount,a.curLoop=0,a.shuffle=a.options.shuffle,a.sequence=[],a.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},a.typingComplete=!1,a.strings)a.sequence[b]=b;a.currentElContent=this.getCurrentElContent(a),a.autoInsertCss=a.options.autoInsertCss,this.appendAnimationCss(a)}},{key:"getCurrentElContent",value:function(a){return a.attr?a.el.getAttribute(a.attr):a.isInput?a.el.value:"html"===a.contentType?a.el.innerHTML:a.el.textContent}},{key:"appendAnimationCss",value:function(a){var d="data-typed-js-css";if(a.autoInsertCss&&(a.showCursor||a.fadeOut)&&!document.querySelector("["+d+"]")){var b=document.createElement("style");b.type="text/css",b.setAttribute(d,!0);var c="";a.showCursor&&(c+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),a.fadeOut&&(c+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==b.length&&(b.innerHTML=c,document.body.appendChild(b))}}}]),a}();b.default=c;var e=new c;b.initializer=e},function(b,a){a.default={strings:[],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(a){},onComplete:function(a){},preStringTyped:function(a,b){},onStringTyped:function(a,b){},onLastStringBackspaced:function(a){},onTypingPaused:function(a,b){},onTypingResumed:function(a,b){},onReset:function(a){},onStop:function(a,b){},onStart:function(a,b){},onDestroy:function(a){}},b.exports=a.default},function(d,a){"use strict";var e=function(){function a(d,c){for(var b=0;b<c.length;b++){var a=c[b];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(d,a.key,a)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),b=function(){function a(){!function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}(this,a)}return e(a,[{key:"typeHtmlChars",value:function(b,a,e){if("html"!==e.contentType)return a;var c=b.substr(a).charAt(0);if("<"===c||"&"===c){var d="";for(d="<"===c?">":";";b.substr(a+1).charAt(0)!==d&&!(++a+1>b.length););a++}return a}},{key:"backSpaceHtmlChars",value:function(c,a,e){if("html"!==e.contentType)return a;var b=c.substr(a).charAt(0);if(">"===b||";"===b){var d="";for(d=">"===b?"<":"&";c.substr(a-1).charAt(0)!==d&&!(--a<0););a--}return a}}]),a}();a.default=b;var c=new b;a.htmlParser=c}])})

;const pJS=function(e){const a=document.querySelector("#"+e+" > .particles-js-canvas-el");var t={canvas:{el:a,w:a.offsetWidth,h:a.offsetHeight},particles:{number:{value:29,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#000000"}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:10,random:!0,anim:{enable:!1,speed:80,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:300,color:"#ff9800",opacity:.4,width:2},move:{enable:!0,speed:12,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}},array:[]},fps_limit:250,interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:800,line_linked:{opacity:1}},bubble:{distance:800,size:80,duration:2,opacity:.8,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,fn:{interact:{},modes:{},vendors:{}},tmp:{}};t.tmp.obj={size_value:t.particles.size.value,size_anim_speed:t.particles.size.anim.speed,move_speed:t.particles.move.speed,line_linked_distance:t.particles.line_linked.distance,line_linked_width:t.particles.line_linked.width,mode_grab_distance:t.interactivity.modes.grab.distance,mode_bubble_distance:t.interactivity.modes.bubble.distance,mode_bubble_size:t.interactivity.modes.bubble.size,mode_repulse_distance:t.interactivity.modes.repulse.distance},t.fn.retinaInit=function(){t.retina_detect&&window.devicePixelRatio>1?(t.canvas.pxratio=window.devicePixelRatio,t.tmp.retina=!0):(t.canvas.pxratio=1,t.tmp.retina=!1),t.canvas.w=t.canvas.el.offsetWidth*t.canvas.pxratio,t.canvas.h=t.canvas.el.offsetHeight*t.canvas.pxratio,t.particles.size.value=t.tmp.obj.size_value*t.canvas.pxratio,t.particles.size.anim.speed=t.tmp.obj.size_anim_speed*t.canvas.pxratio,t.particles.move.speed=t.tmp.obj.move_speed*t.canvas.pxratio,t.particles.line_linked.distance=t.tmp.obj.line_linked_distance*t.canvas.pxratio,t.interactivity.modes.grab.distance=t.tmp.obj.mode_grab_distance*t.canvas.pxratio,t.interactivity.modes.bubble.distance=t.tmp.obj.mode_bubble_distance*t.canvas.pxratio,t.particles.line_linked.width=t.tmp.obj.line_linked_width*t.canvas.pxratio,t.interactivity.modes.bubble.size=t.tmp.obj.mode_bubble_size*t.canvas.pxratio,t.interactivity.modes.repulse.distance=t.tmp.obj.mode_repulse_distance*t.canvas.pxratio},t.fn.canvasInit=function(){t.canvas.ctx=t.canvas.el.getContext("2d")},t.fn.canvasSize=function(){t.canvas.el.width=t.canvas.w,t.canvas.el.height=t.canvas.h,t&&t.interactivity.events.resize&&window.addEventListener("resize",function(){t.canvas.w=t.canvas.el.offsetWidth,t.canvas.h=t.canvas.el.offsetHeight,t.canvas.el.width=t.canvas.w,t.canvas.el.height=t.canvas.h,t.fn.vendors.densityAutoParticles()})},t.fn.canvasPaint=function(){t.canvas.ctx.fillRect(0,0,t.canvas.w,t.canvas.h)},t.fn.particle=function(e,a,i){this.radius=(t.particles.size.random?Math.random():1)*t.particles.size.value,this.x=i?i.x:Math.random()*t.canvas.w,this.y=i?i.y:Math.random()*t.canvas.h,this.x>t.canvas.w-2*this.radius?this.x=this.x-this.radius:this.x<2*this.radius&&(this.x=this.x+this.radius),this.y>t.canvas.h-2*this.radius?this.y=this.y-this.radius:this.y<2*this.radius&&(this.y=this.y+this.radius),this.color={},this.color=e,this.color.rgb=hexToRgb(this.color.value),this.opacity=(t.particles.opacity.random?Math.random():1)*t.particles.opacity.value,this.vx=Math.random()-.5,this.vy=Math.random()-.5,this.vx_i=this.vx,this.vy_i=this.vy,this.shape=t.particles.shape.type},t.fn.particle.prototype.draw=function(){var e=this,a=e.radius,i=e.opacity,n="rgba("+e.color.rgb.r+","+e.color.rgb.g+","+e.color.rgb.b+","+i+")";t.canvas.ctx.fillStyle=n,t.canvas.ctx.beginPath(),t.canvas.ctx.arc(e.x,e.y,a,0,2*Math.PI,!1),t.canvas.ctx.closePath(),t.canvas.ctx.fill()},t.fn.particlesCreate=function(){for(var e=0;e<t.particles.number.value;e++)t.particles.array.push(new t.fn.particle(t.particles.color,t.particles.opacity.value))},t.fn.particlesUpdate=function(){for(var e=0;e<t.particles.array.length;e++){var a=t.particles.array[e];if(t.particles.move.enable){var i=t.particles.move.speed/2;a.x+=a.vx*i,a.y+=a.vy*i}let r={x_left:-a.radius,x_right:t.canvas.w+a.radius,y_top:-a.radius,y_bottom:t.canvas.h+a.radius};if(a.x-a.radius>t.canvas.w?(a.x=r.x_left,a.y=Math.random()*t.canvas.h):a.x+a.radius<0&&(a.x=r.x_right,a.y=Math.random()*t.canvas.h),a.y-a.radius>t.canvas.h?(a.y=r.y_top,a.x=Math.random()*t.canvas.w):a.y+a.radius<0&&(a.y=r.y_bottom,a.x=Math.random()*t.canvas.w),t.fn.modes.grabParticle(a),t.particles.line_linked.enable)for(var n=e+1;n<t.particles.array.length;n++){var s=t.particles.array[n];t.fn.interact.linkParticles(a,s)}}},t.fn.particlesDraw=function(){t.canvas.ctx.clearRect(0,0,t.canvas.w,t.canvas.h),t.fn.particlesUpdate();for(var e=0;e<t.particles.array.length;e++)t.particles.array[e].draw()},t.fn.interact.linkParticles=function(e,a){var i=e.x-a.x,n=e.y-a.y,s=Math.sqrt(i*i+n*n);if(s<=t.particles.line_linked.distance){var r=t.particles.line_linked.opacity-s/(1/t.particles.line_linked.opacity)/t.particles.line_linked.distance;if(r>0){var c=t.particles.line_linked.color_rgb_line;t.canvas.ctx.strokeStyle="rgba("+c.r+","+c.g+","+c.b+","+r+")",t.canvas.ctx.lineWidth=t.particles.line_linked.width,t.canvas.ctx.beginPath(),t.canvas.ctx.moveTo(e.x,e.y),t.canvas.ctx.lineTo(a.x,a.y),t.canvas.ctx.stroke(),t.canvas.ctx.closePath()}}},t.fn.modes.pushParticles=function(e,a){t.tmp.pushing=!0;for(var i=0;i<e;i++)t.particles.array.push(new t.fn.particle(t.particles.color,t.particles.opacity.value,{x:a?a.pos_x:Math.random()*t.canvas.w,y:a?a.pos_y:Math.random()*t.canvas.h}))},t.fn.modes.removeParticles=function(e){t.particles.array.splice(0,e),t.particles.move.enable||t.fn.particlesDraw()},t.fn.modes.grabParticle=function(e){if(t.interactivity.events.onhover.enable&&"mousemove"===t.interactivity.status){var a=e.x-t.interactivity.mouse.pos_x,i=e.y-t.interactivity.mouse.pos_y,n=Math.sqrt(a*a+i*i);if(n<=t.interactivity.modes.grab.distance){var s=t.interactivity.modes.grab.line_linked.opacity-n/(1/t.interactivity.modes.grab.line_linked.opacity)/t.interactivity.modes.grab.distance;if(s>0){var r=t.particles.line_linked.color_rgb_line;t.canvas.ctx.strokeStyle="rgba("+r.r+","+r.g+","+r.b+","+s+")",t.canvas.ctx.lineWidth=t.particles.line_linked.width,t.canvas.ctx.beginPath(),t.canvas.ctx.moveTo(e.x,e.y),t.canvas.ctx.lineTo(t.interactivity.mouse.pos_x,t.interactivity.mouse.pos_y),t.canvas.ctx.stroke(),t.canvas.ctx.closePath()}}}},t.fn.vendors.eventsListeners=function(){"window"===t.interactivity.detect_on?t.interactivity.el=window:t.interactivity.el=t.canvas.el,(t.interactivity.events.onhover.enable||t.interactivity.events.onclick.enable)&&(t.interactivity.el.addEventListener("mousemove",function(e){let a=e.offsetX||e.clientX,i=e.offsetY||e.clientY;t.interactivity.mouse.pos_x=a,t.interactivity.mouse.pos_y=i,t.tmp.retina&&(t.interactivity.mouse.pos_x*=t.canvas.pxratio,t.interactivity.mouse.pos_y*=t.canvas.pxratio),t.interactivity.status="mousemove"}),t.interactivity.el.addEventListener("mouseleave",function(e){t.interactivity.mouse.pos_x=null,t.interactivity.mouse.pos_y=null,t.interactivity.status="mouseleave"})),t.interactivity.el.addEventListener("click",function(){t.interactivity.mouse.click_pos_x=t.interactivity.mouse.pos_x,t.interactivity.mouse.click_pos_y=t.interactivity.mouse.pos_y,t.interactivity.mouse.click_time=(new Date).getTime(),t.fn.modes.pushParticles(t.interactivity.modes.push.particles_nb,t.interactivity.mouse)})},t.fn.vendors.densityAutoParticles=function(){if(t.particles.number.density.enable){var e=t.canvas.el.width*t.canvas.el.height/1e3;t.tmp.retina&&(e/=2*t.canvas.pxratio);var a=e*t.particles.number.value/t.particles.number.density.value_area,i=t.particles.array.length-a;i<0?t.fn.modes.pushParticles(Math.abs(i)):t.fn.modes.removeParticles(i)}},t.fn.vendors.draw=function(){var e=t.fps_limit;e<=0||setTimeout(function(){t.fn.particlesDraw(),t.particles.move.enable?t.fn.drawAnimFrame=requestAnimFrame(t.fn.vendors.draw):cancelRequestAnimFrame(t.fn.drawAnimFrame)},1e3/e)},t.fn.vendors.init=function(){t.fn.retinaInit(),t.fn.canvasInit(),t.fn.canvasSize(),t.fn.canvasPaint(),t.fn.particlesCreate(),t.fn.vendors.densityAutoParticles(),t.particles.line_linked.color_rgb_line=hexToRgb(t.particles.line_linked.color)},t.fn.vendors.start=function(){t.fn.vendors.init(),t.fn.vendors.draw()},t.fn.vendors.eventsListeners(),t.fn.vendors.start()};function hexToRgb(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,a,t,i){return a+a+t+t+i+i});var a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null}window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},window.cancelRequestAnimFrame=window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout,window.pJSDom=[],window.particlesJS=function(e){document.getElementById(e).getElementsByClassName("particles-js-canvas-el");var a=document.createElement("canvas");a.className="particles-js-canvas-el",a.style.width="100%",a.style.height="100%",a.style.position="absolute",a.style.top="0px",null!==document.getElementById(e).appendChild(a)&&pJSDom.push(new pJS(e))},window.particlesJS.load=function(e){setTimeout(()=>{window.particlesJS(e)},0)};

;var VanillaTilt=function(){"use strict";class t{constructor(e,i={}){if(!(e instanceof Node))throw"Can't initialize VanillaTilt because "+e+" is not a Node.";this.width=null,this.height=null,this.clientWidth=null,this.clientHeight=null,this.left=null,this.top=null,this.gammazero=null,this.betazero=null,this.lastgammazero=null,this.lastbetazero=null,this.transitionTimeout=null,this.updateCall=null,this.event=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=e,this.settings=this.extendSettings(i),this.reverse=this.settings.reverse?-1:1,this.glare=t.isSettingTrue(this.settings.glare),this.glarePrerender=t.isSettingTrue(this.settings["glare-prerender"]),this.fullPageListening=t.isSettingTrue(this.settings["full-page-listening"]),this.gyroscope=t.isSettingTrue(this.settings.gyroscope),this.gyroscopeSamples=this.settings.gyroscopeSamples,this.elementListener=this.getElementListener(),this.glare&&this.prepareGlare(),this.fullPageListening&&this.updateClientSize(),this.addEventListeners(),this.updateInitialPosition()}static isSettingTrue(t){return""===t||!0===t||1===t}getElementListener(){if(this.fullPageListening)return window.document;if("string"==typeof this.settings["mouse-event-element"]){const t=document.querySelector(this.settings["mouse-event-element"]);if(t)return t}return this.settings["mouse-event-element"]instanceof Node?this.settings["mouse-event-element"]:this.element}addEventListeners(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onDeviceOrientationBind=this.onDeviceOrientation.bind(this),this.elementListener.addEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.addEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.addEventListener("mousemove",this.onMouseMoveBind),(this.glare||this.fullPageListening)&&window.addEventListener("resize",this.onWindowResizeBind),this.gyroscope&&window.addEventListener("deviceorientation",this.onDeviceOrientationBind)}onDeviceOrientation(t){if(null===t.gamma||null===t.beta)return;this.updateElementPosition(),this.gyroscopeSamples>0&&(this.lastgammazero=this.gammazero,this.lastbetazero=this.betazero,null===this.gammazero?(this.gammazero=t.gamma,this.betazero=t.beta):(this.gammazero=(t.gamma+this.lastgammazero)/2,this.betazero=(t.beta+this.lastbetazero)/2),this.gyroscopeSamples-=1);const e=this.settings.gyroscopeMaxAngleX-this.settings.gyroscopeMinAngleX,i=this.settings.gyroscopeMaxAngleY-this.settings.gyroscopeMinAngleY,s=e/this.width,n=i/this.height,a=(t.gamma-(this.settings.gyroscopeMinAngleX+this.gammazero))/s,l=(t.beta-(this.settings.gyroscopeMinAngleY+this.betazero))/n;null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event={clientX:a+this.left,clientY:l+this.top},this.updateCall=requestAnimationFrame(this.updateBind)}onMouseEnter(){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()}onMouseMove(t){null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event=t,this.updateCall=requestAnimationFrame(this.updateBind)}onMouseLeave(){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)}reset(){this.event={clientX:this.left+this.width/2,clientY:this.top+this.height/2},this.element&&this.element.style&&(this.element.style.transform=`perspective(${this.settings.perspective}px) `+"rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"),this.resetGlare()}resetGlare(){this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")}updateInitialPosition(){if(0===this.settings.startX&&0===this.settings.startY)return;this.onMouseEnter(),this.fullPageListening?this.event={clientX:(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.clientWidth,clientY:(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.clientHeight}:this.event={clientX:this.left+(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.width,clientY:this.top+(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.height};let t=this.settings.scale;this.settings.scale=1,this.update(),this.settings.scale=t,this.resetGlare()}getValues(){let t,e;return this.fullPageListening?(t=this.event.clientX/this.clientWidth,e=this.event.clientY/this.clientHeight):(t=(this.event.clientX-this.left)/this.width,e=(this.event.clientY-this.top)/this.height),t=Math.min(Math.max(t,0),1),e=Math.min(Math.max(e,0),1),{tiltX:(this.reverse*(this.settings.max-t*this.settings.max*2)).toFixed(2),tiltY:(this.reverse*(e*this.settings.max*2-this.settings.max)).toFixed(2),percentageX:100*t,percentageY:100*e,angle:Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI)}}updateElementPosition(){let t=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=t.left,this.top=t.top}update(){let t=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.axis?0:t.tiltY)+"deg) rotateY("+("y"===this.settings.axis?0:t.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform=`rotate(${t.angle}deg) translate(-50%, -50%)`,this.glareElement.style.opacity=`${t.percentageY*this.settings["max-glare"]/100}`),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:t})),this.updateCall=null}setTransition(){clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition=`opacity ${this.settings.speed}ms ${this.settings.easing}`),this.transitionTimeout=setTimeout(()=>{this.element.style.transition="",this.glare&&(this.glareElement.style.transition="")},this.settings.speed)}extendSettings(t){let e={reverse:!1,max:15,startX:0,startY:0,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1,speed:300,transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,"full-page-listening":!1,"mouse-event-element":null,reset:!0,gyroscope:!0,gyroscopeMinAngleX:-45,gyroscopeMaxAngleX:45,gyroscopeMinAngleY:-45,gyroscopeMaxAngleY:45,gyroscopeSamples:10},i={};for(var s in e)if(s in t)i[s]=t[s];else if(this.element.hasAttribute("data-tilt-"+s)){let t=this.element.getAttribute("data-tilt-"+s);try{i[s]=JSON.parse(t)}catch(e){i[s]=t}}else i[s]=e[s];return i}static init(e,i){e instanceof Node&&(e=[e]),e instanceof NodeList&&(e=[].slice.call(e)),e instanceof Array&&e.forEach(e=>{"vanillaTilt"in e||(e.vanillaTilt=new t(e,i))})}}return"undefined"!=typeof document&&(window.VanillaTilt=t,t.init(document.querySelectorAll("[data-tilt]"))),t}();

;
//# sourceMappingURL=scripts.js.map