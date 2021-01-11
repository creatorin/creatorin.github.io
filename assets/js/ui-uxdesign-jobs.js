

 

// // GET URL FROM LOCAL JSON FILE
var instancedata = $.getJSON("../../assets/json/instance.json", function (datas) {
var jobs_url = datas.ui_ux_design_jobs_url;
 
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

            if(myJSON.status === "success"){
            // var featuredThroughdata=false;
              // console.log( myJSON.data);
            if(myJSON.data !== null){
            var job_lists_content ='';
            for (var i in myJSON.data) {
              var job_id = myJSON.data[i]._id;
              var company_name = myJSON.data[i].company;
              var job_title = myJSON.data[i].title;
              var job_type = myJSON.data[i].jobtype;
              // var job_location = myJSON.data[i].location;
              var isRemote = myJSON.data[i].remote;
              var createdAt= myJSON.data[i].createdAt.split('T')[0];
              var featuredThroughdata=false;
              var feature_background = '';

              var dateformat = new Date(myJSON.data[i].createdAt);
              

              var url = "job-details.html" + decodeURIComponent("?job_id=" + job_id);
              
              if(myJSON.data[i].hasOwnProperty("featuredThrough"))
              {
                var featuredThrough = myJSON.data[i].featuredThrough;
                featuredThroughdata = true;
                feature_background = 'feature_active';
              }

              var job_content = `
              <div class="col-lg-12 mx-2 mx-md-0  mb-3 bg-white">
              <div id="rmv" class="row border px-0 py-3 align-items-md-center shadow ${feature_background}">
              <div class="col-8 col-md-7">
                <p>${company_name}</p>
                <h4>
                  <a href="${url}" class="text-dark">${job_title}</a>
                </h4>
               
              </div>
              <div class="col-4 col-md-2 text-right text-md-left pl-0 pl-md-6">
                <i class="fa fa-calendar"></i> ${months[dateformat.getUTCMonth()] + " "+ dateformat.getUTCDate()}
              </div>
              <div class="col-md-3 text-left text-md-right mt-2 mt-md-0">
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
            else {
              $('#recent_job_list').html(
              `<div class='mx-auto text-center my-10'>
              <span ><svg xmlns="http://www.w3.org/2000/svg" style="fill:#f57181;" height="60" viewBox="0 0 512 512" width="60"><g><path d="m476 120h-84v-68a28.031 28.031 0 0 0 -28-28h-4v-8a8 8 0 0 0 -8-8h-192a8 8 0 0 0 -8 8v8h-4a28.031 28.031 0 0 0 -28 28v68h-84a28.031 28.031 0 0 0 -28 28v140a8 8 0 0 0 8 8h16v180a28.031 28.031 0 0 0 28 28h392a28.031 28.031 0 0 0 28-28v-180h16a8 8 0 0 0 8-8v-140a28.031 28.031 0 0 0 -28-28zm-308-96h176v16h-176zm-32 28a12.01 12.01 0 0 1 12-12h4v8a8 8 0 0 0 8 8h192a8 8 0 0 0 8-8v-8h4a12.01 12.01 0 0 1 12 12v68h-240zm328 424a12.01 12.01 0 0 1 -12 12h-392a12.01 12.01 0 0 1 -12-12v-180h88.27a120 120 0 0 0 239.46 0h88.27zm-312-188a104 104 0 1 1 104 104 104.112 104.112 0 0 1 -104-104zm336-8h-112.27a120 120 0 0 0 -239.46 0h-112.27v-132a12.01 12.01 0 0 1 12-12h440a12.01 12.01 0 0 1 12 12z"/><path d="m216.4 361.539 39.6-39.6 39.6 39.6a8 8 0 0 0 11.314 0l22.627-22.627a8 8 0 0 0 0-11.314l-39.6-39.6 39.6-39.6a8 8 0 0 0 0-11.314l-22.627-22.627a8 8 0 0 0 -11.314 0l-39.6 39.603-39.6-39.6a8 8 0 0 0 -11.314 0l-22.627 22.627a8 8 0 0 0 0 11.314l39.6 39.6-39.6 39.6a8 8 0 0 0 0 11.314l22.627 22.627a8 8 0 0 0 11.314-.003zm22.627-67.882a8 8 0 0 0 0-11.314l-39.6-39.6 11.313-11.313 39.6 39.6a8 8 0 0 0 11.314 0l39.6-39.6 11.313 11.313-39.6 39.6a8 8 0 0 0 0 11.314l39.6 39.6-11.313 11.313-39.6-39.6a8 8 0 0 0 -11.314 0l-39.6 39.6-11.313-11.313z"/></g></svg></span>
              <h2 class='my-4'>No jobs found for this category</h2></div>`);
            }
          }
          else {
            $('#recent_job_list').html(`<div class='mx-auto text-center my-10'>
            <span ><svg xmlns="http://www.w3.org/2000/svg"  style="fill:#f57181;" height="60" width="60" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
            <g>
              <g>
                <g>
                  <path d="M507.113,428.415L287.215,47.541c-6.515-11.285-18.184-18.022-31.215-18.022c-13.031,0-24.7,6.737-31.215,18.022     L4.887,428.415c-6.516,11.285-6.516,24.76,0,36.044c6.515,11.285,18.184,18.022,31.215,18.022h439.796     c13.031,0,24.7-6.737,31.215-18.022C513.629,453.175,513.629,439.7,507.113,428.415z M481.101,449.441     c-0.647,1.122-2.186,3.004-5.202,3.004H36.102c-3.018,0-4.556-1.881-5.202-3.004c-0.647-1.121-1.509-3.394,0-6.007     L250.797,62.559c1.509-2.613,3.907-3.004,5.202-3.004c1.296,0,3.694,0.39,5.202,3.004L481.1,443.434     C482.61,446.047,481.748,448.32,481.101,449.441z"/>
                  <rect x="240.987" y="166.095" width="30.037" height="160.197"/>
                  <circle cx="256.005" cy="376.354" r="20.025"/>
                </g>
              </g>
            </g>
            </svg></span>
            <h2 class='my-4'>There is a problem in retrieving data</h2></div>`);
          }
          
        },
          error: function(xhr, status, error) {
            // var err = eval("(" + xhr.responseText + ")");
            // alert(err.Message);
            console.log("Error");
            $('#recent_job_list').html(`<div class='mx-auto text-center my-10'>
            <span ><svg xmlns="http://www.w3.org/2000/svg"  style="fill:#f57181;" height="60" width="60" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
            <g>
              <g>
                <g>
                  <path d="M507.113,428.415L287.215,47.541c-6.515-11.285-18.184-18.022-31.215-18.022c-13.031,0-24.7,6.737-31.215,18.022     L4.887,428.415c-6.516,11.285-6.516,24.76,0,36.044c6.515,11.285,18.184,18.022,31.215,18.022h439.796     c13.031,0,24.7-6.737,31.215-18.022C513.629,453.175,513.629,439.7,507.113,428.415z M481.101,449.441     c-0.647,1.122-2.186,3.004-5.202,3.004H36.102c-3.018,0-4.556-1.881-5.202-3.004c-0.647-1.121-1.509-3.394,0-6.007     L250.797,62.559c1.509-2.613,3.907-3.004,5.202-3.004c1.296,0,3.694,0.39,5.202,3.004L481.1,443.434     C482.61,446.047,481.748,448.32,481.101,449.441z"/>
                  <rect x="240.987" y="166.095" width="30.037" height="160.197"/>
                  <circle cx="256.005" cy="376.354" r="20.025"/>
                </g>
              </g>
            </g>
            </svg></span>
            <h2 class='my-4'>There is a problem in retrieving data</h2></div>`);
            // $('#no_page_found_section').removeClass("hide");
          }

  });
});


   

