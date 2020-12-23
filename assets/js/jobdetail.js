

 

// // GET URL FROM LOCAL JSON FILE
var instancedata = $.getJSON("../../assets/json/instance.json", function (datas) {
var jobs_url = datas.jobs_url;
 
// Get url from current url params
// var url = window.location.pathname;
// var urlprofile = url.substring(url.lastIndexOf('/') + 1);

// SPLIT HTML FROM NAME
// var urlprofilename = urlprofile.split('.')[0];

// console.log(jobs_url);

var months = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Aug',
  8: 'Sep',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec'
};

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
            // console.log(myJSON);
            if(myJSON.status === "success"){
              // CODE SHOULD BE REMOVED AFTER GETTING PARAMS URL
              var myJSONs= myJSON.data;
              

              var jobPageURL = window.location.search.substring(1);
              var job_idVariable = jobPageURL.split('=')[1];
              // console.log(job_idVariable);
              var index = myJSONs.findIndex(function(item, i){
                if(item._id === job_idVariable){
                  // console.log("data index", i);
                }
                return item._id === job_idVariable;
                
              });
              
              var dataobject=myJSONs[index];
             


            
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
              

              var posteddateformat = new Date(dataobject.createdAt);


              var job_description = dataobject.htmlDescription;
              var featuredThroughdata=false;
              
              if(dataobject.hasOwnProperty("featuredThrough"))
              {
                var featuredThrough= new Date(dataobject.featuredThrough);
                $("#job_featureddate_html").html("<b>"+ months[featuredThrough.getUTCMonth()] + " "+ featuredThrough.getUTCDate() + ", " + featuredThrough.getUTCFullYear() + "</b>");
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
              $("#job_posteddate_html").html("<b>"+ months[posteddateformat.getUTCMonth()] + " "+ posteddateformat.getUTCDate() + ", " + posteddateformat.getUTCFullYear() + "</b>");
              
              if(dataobject.hasOwnProperty("url"))
              {
                var job_site_url = dataobject.url;
                $("#job_external_link_html").attr("href", job_site_url);
                $("#job_external_link_html_li").removeClass("hide");
                featuredThroughdata = true;
              }
              

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


   

