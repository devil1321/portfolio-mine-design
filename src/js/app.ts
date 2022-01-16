class UI_ACTIONS {
    public navBtn:HTMLDivElement;
    public navMenu:HTMLDivElement;
    public spanFontBold:HTMLSpanElement;
    public heroTitle: HTMLHeadingElement;
    public heroText: HTMLParagraphElement;
    public heroImg: HTMLImageElement;
    public serviceTitle: HTMLHeadingElement;
    public serviceText: HTMLParagraphElement;
    public serviceImg: HTMLImageElement;
   
    constructor() {
        this.navBtn = document.querySelector(".home__navbar-btn")
        this.navMenu = document.querySelector(".home__navbar-menu")
        this.spanFontBold = document.querySelectorAll(".violet-bold")
        this.heroTitle = document.querySelector(".home__hero h1");
        this.heroText = document.querySelector(".home__hero p");
        this.heroImg = document.querySelector(".home__hero img");
        this.serviceTitle = document.querySelector(".home__service > h2");
        this.serviceText = document.querySelector(".home__service p");
        this.serviceImg = document.querySelector(".home__service img");
  }
    handleNavbar = () =>{
        if(this.navBtn.classList.contains('active')){
            this.navMenu.style.padding = '0'
            this.navMenu.style.maxHeight = '0'
            this.navBtn.classList.remove('active')
        }else{
            this.navMenu.style.padding = '20px 0px'
            this.navMenu.style.maxHeight = '300px'
            this.navBtn.classList.add('active')
        }
    } 
    handleAnimHero = () => {
        const tl = gsap.timeline();
        tl.fromTo(
            this.heroTitle,
            {
                y: -40,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
            }
        );
        tl.fromTo(
            this.heroText,
            {
                x: -240,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 1,
            }
        );
        tl.fromTo(
            this.heroImg,
            {
                y: 20,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
            }
        );
    };
    handleAnimService = ()=>{
        const tl = gsap.timeline()
        const tlImg = gsap.timeline()
        const tlText = gsap.timeline()
        gsap.registerPlugin(ScrollTrigger)
        tl.fromTo(this.serviceTitle,{
          
                    y:-40,opacity:0 
                },
               {
                scrollTrigger:{
                    trigger:this.serviceTitle,
                    toggleActions:"none none none none",
                    start:"-300px",
                    end:"-400px",
                    scrub:5,
                    },
                   y:0,
                   opacity:1,
                   duration:0.5
                })

                tlText.fromTo(this.serviceText,{
                    x:400,opacity:0 
                },
               {
                scrollTrigger:{
                    trigger:this.serviceText,
                    toggleActions:"none none none none",
                    start:"-500px",
                    end:"-400px",
                    scrub:5,
                    },
                   x:0,
                   opacity:1,
                   duration:1
                })
            tlText.fromTo(this.spanFontBold,{opacity:0},{
                scrollTrigger:{
                    trigger:this.serviceText,
                    toggleActions:"none none none none",
                    start:"-350px",
                    end:"-250px",
                    scrub:5,
                    },
                opacity:1,stagger:0.3,duration:0.5})
            tlImg.fromTo(this.serviceImg,{
          
                    x:-400,opacity:0 
                },
               {
                scrollTrigger:{
                    trigger:this.serviceImg,
                    toggleActions:"none none none none",
                    start:"-300px",
                    end:"-400px",
                    scrub:5,
                    },
                   x:0,
                   opacity:1,
                   duration:1
                })
    }
  
}
const UI = new UI_ACTIONS

UI.handleAnimHero();
UI.handleAnimService();
UI.navBtn.addEventListener('click',UI.handleNavbar)