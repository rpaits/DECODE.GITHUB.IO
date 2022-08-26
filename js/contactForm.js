
        $("#submit-form").submit((e)=>{
            e.preventDefault()
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbzVQb_qxwvEDscilz3GL38ZuNX6mb1MdmxA_dG34B1A77BmXYc2pQD2QONSYlDPqY-9vg/exec",
                data:$("#submit-form").serialize(),
                method:"post",
                success:function (response){
                    //alert("Form submitted successfully")
                    window.location.reload()
                    //window.location.href="https://google.com"
                },
                error:function (err){
                    alert("Something Error")
    
                }
            })
        })
   