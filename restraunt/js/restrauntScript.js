$(()=>{
    $(".navbar-brand").mouseover(()=>{
        $(".navbar-brand").css({"background": "linear-gradient(to right,#ff6a00,#ee0979)",
                "-webkit-background-clip":"text",
                "color": "transparent"});
    });
    $(".navbar-brand").mouseout(()=>{
        $(".navbar-brand").css({"background": "linear-gradient(#ee0979,#ff6a00)",
                "-webkit-background-clip":"text",
                "color": "transparent"});
    });
})