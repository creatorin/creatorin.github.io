

 

// // GET URL FROM LOCAL JSON FILE
var instancedata = $.getJSON("../../assets/json/instance.json", function (datas) {
var jobs_url = datas.jobs_url;
 
// Get url from current url params
// var url = window.location.pathname;
// var urlprofile = url.substring(url.lastIndexOf('/') + 1);

// SPLIT HTML FROM NAME
// var urlprofilename = urlprofile.split('.')[0];

console.log(jobs_url);


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
            // var myJSON = JSON.parse(results);
            // console.log(myJSON);
            if(myJSON.status === "success"){
            // var featuredThroughdata=false;
              // console.log( myJSON.data);
            
            var job_lists_content ='';
            for (var i in myJSON.data) {
              var job_id = myJSON.data[i]._id;
              var company_name = myJSON.data[i].company;
              var job_title = myJSON.data[i].title;
              var job_type = myJSON.data[i].jobtype;
              var job_location = myJSON.data[i].location;
              var isRemote = myJSON.data[i].remote;
              var createdAt= myJSON.data[i].createdAt.split('T')[0];
              var featuredThroughdata=false;
              var feature_background = '';

              var url = "job-details.html" + decodeURIComponent("?job_id=" + job_id);
              
              if(myJSON.data[i].hasOwnProperty("featuredThrough"))
              {
                var featuredThrough= myJSON.data[i].featuredThrough;
                featuredThroughdata = true;
                // $("#featurechecker").addClass("feature_active");
                feature_background = 'feature_active';
              }

              var job_content = `
              <div class="col-lg-12 mb-3">
              <div class="row border px-0 py-3 align-items-center ${feature_background}">
              <div class="col-md-7">
                <p>${company_name}</p>
                <h4>
                  <a href="${url}" class="text-dark">${job_title}</a>
                </h4>
                <p class="mb-0">${job_location}</p>
              </div>
              <div class="col-md-2 text-right">
                <i class="fa fa-calendar"></i> ${createdAt.split("-").reverse("").join("/")}
              </div>
              <div class="col-md-3 text-right">
                <span class="badge badge-warning">${(featuredThroughdata === true)?'Featured':''}</span>
                <span class="badge badge-success">${(isRemote=== true)?'Remote':''}</span>
                <span class="badge badge-creative">${job_type}</span>
            </div>
            </div>
          </div>`;
              // APPENDING CURRENT LOOP DATA WITH PREVIOUS LOOP DATA
              job_lists_content += job_content;

              if(i==2){
                $('#recent_job_list_home').html(job_lists_content);
              }
            }

            $('#recent_job_list').html(job_lists_content);
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


   

