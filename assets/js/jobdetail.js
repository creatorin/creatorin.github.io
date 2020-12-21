

 

// // GET URL FROM LOCAL JSON FILE
var instancedata = $.getJSON("../../assets/json/instance.json", function (datas) {
var jobs_url = datas.jobs_url;
 
// Get url from current url params
// var url = window.location.pathname;
// var urlprofile = url.substring(url.lastIndexOf('/') + 1);

// SPLIT HTML FROM NAME
// var urlprofilename = urlprofile.split('.')[0];

// console.log(jobs_url);


  $.ajax({
          "async": true,
          "crossDomain": true,
          "url": jobs_url,
          "cors": true ,
          "method": "GET",
          "headers": {
            // 'Access-Control-Allow-Origin': '*',
            // 'Content-Type':'application/json',
            },

          success:function (myJSON) {
            // var results = JSON.parse(myJSON);
            console.log(myJSON);
            if(myJSON.status === "success"){
              // CODE SHOULD BE REMOVED AFTER GETTING PARAMS URL
              var myJSONs= myJSON.data;
              

              var jobPageURL = window.location.search.substring(1);
              var job_idVariable = jobPageURL.split('=')[1];
              console.log(job_idVariable);
              var index = myJSONs.findIndex(function(item, i){
                if(item._id === job_idVariable){
                  console.log("data index", i);
                }
                return item._id === job_idVariable;
                
              });
              console.log(index);
              var dataobject=myJSONs[index];
              console.log(dataobject);


            
              var job_lists_content ='';
              // for (var i in myJSON.data) {
              var job_id = dataobject._id;
              var company_name = dataobject.company;
              var job_title = dataobject.title;
              var job_type = dataobject.jobtype;
              var job_location = dataobject.location;
              var isRemote = dataobject.remote;
              var createdAt= dataobject.createdAt.split('T')[0];
              var job_mail = dataobject.contact;
              // var job_post_date = dataobject.createdAt;
              var job_site_url = dataobject.siteUrl;


              var job_description = dataobject.htmlDescription;
              var featuredThroughdata=false;
              
              if(dataobject.hasOwnProperty("featuredThrough"))
              {
                var featuredThrough= dataobject.featuredThrough.split('T')[0];
                $("#job_featureddate_html").html(featuredThrough.split("-").reverse("").join("/"));
                $("#job_featureddate_html_li").removeClass("hide");
                featuredThroughdata = true;
              }
              $("#job_title_html").html(job_title);

              // BADGES CODE
              $("#job_featured_html").html(featuredThroughdata=== true?'Featured':'');

              $("#job_remote_html").html((isRemote=== true)?'Remote':'');

              $("#job_type_html").html(job_type);

              $("#job_desc_html").html(job_description);

              $("#company_name_html").html(company_name);
              $("#job_location_html").html(job_location);
              $("#job_mail_html").html(job_mail);
              $("#job_posteddate_html").html(createdAt.split("-").reverse("").join("/"));
              
              $("#job_external_link_html").attr("href", job_site_url);

          }
        },
          error: function(xhr, status, error) {
            // var err = eval("(" + xhr.responseText + ")");
            // alert(err.Message);
            console.log("Error");
            // $('#no_page_found_section').removeClass("hide");
          }

  });
});


   

