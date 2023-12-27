function includeHTML(){
  let z, elmnt, file, xhttp;

  z = document.getElementsByTagName("*");
  
  for (let i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("data-include");
    
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("data-include");
          includeHTML();
        }//if
      }//onreadystatechange

      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }//if - file
  }//for


    
    // $(".navbar-collapse > ul > li").mouseenter(function(){
    //     let length = $(this).children(".submenu").find("li").length;
    //     $(this).children(".submenu").css("height", "auto")
        
    //       $(this).children(".submenu").stop().slideDown(400);
    //     });
    //     $(".navbar-collapse > ul > li").mouseleave(function(){
    //       $(this).children(".submenu").stop().slideUp(300);
    //     });
  
    
  $("document").ready(function(){


    const $hamburger = $(".hamburger");
  
    const $list = $(".header .nav > ul > li");
    const $m_list = $(".m-nav > ul > li");
    $m_list.click(function(){
      let i = $(this).index();
      console.log($m_list.eq(i).find("ul").css("height"), $m_list.eq(i).find("ul").css("height", ($(this).find("ul li").length*50)+"px"))
      if(i == 0 || i == 1 || i == 2 || i == 4){
        if($m_list.eq(i).find("ul").css("height") > "0px"){
          $m_list.find("ul").css("height", "")
        }else{
          $m_list.find("ul").css("height", "")
          $m_list.eq(i).find("ul").css("height", ($m_list.eq(i).find("ul li").length*47)+"px")
        }
      }
    })
    $list.mouseover(function(){
      let i = $(this).index();
        $list.eq(i).find("ul").css("height", ($(this).find("ul li").length*51)+"px")
      console.log($(this).find("ul li").length)
    }).mouseout(function(){
      $list.find("ul").css("height", "")
    })
    $hamburger.click(function(){
      $(this).toggleClass("on")
      $(".m-nav").toggleClass("on")
    })
    
  })
    
  
  $("#slider").mouseenter(function(){
    $(".bt").addClass("on");
  }).mouseleave(function(){
      $(".bt").removeClass("on");
  })

  $(".top_header .social_icon a").mouseenter(function(){
      
      let i = $(this).index();
      $(".top_header .social_icon i").eq(i).addClass("on")
  }).mouseleave(function(){
      $(".top_header .social_icon i").removeClass("on");
  })
}
 
/* ✨ 실행 */
window.addEventListener('DOMContentLoaded',()=>{
    includeHTML();
});
