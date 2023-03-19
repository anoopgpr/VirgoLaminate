$.mobile.allowCrossDomainPages = true;
_debug = false;

var popUp;
var city_id='';
var category_id='';

var gallery_cat='';
var galstr='';
var player_cat='';
var fix_cat='';

var reg_id="";
var backstore ="";
var lastattemptpage='';

var shop_img='';
var pan_img='';
var aadhar_img='';

var file_pphoto='';
var file_pdoc='';
var file_adimg_front='';
var file_adimg_back='';
var doc_img='';
var filenmshop ='';

var filenmshop_byse ='';
var file_pdoc_byse ='';


var json_fb='https://taghash.co/mloyalApps/facebookvirgolaminates.php';
var RSS_twitter='https://taghash.co/mloyalApps/twitter.php?uname=virgolaminateshome';
var RSS_pinterest='http://103.25.128.61/projects/taghash/mloyalApps/pinteresttantra.php?brand=virgolaminates';
var RSS_instagram='https://www.instagram.com/virgolaminates/?__a=1';
var RSS_youtube='http://xceedfbapps.com/mloyalfeeds/youtube.php?brandname=virgolaminates';
var RSS_tumblr='http://xceedfbapps.com/mloyalfeeds/tumblr.php?brandurl=http://virgolaminates.tumblr.com';

var brandname='virgolaminates';
var aboutus_det='virgolaminates';
var brand_url='https://www.virgolam.com/';
var cart = { cartdata: []};
var indexary=new Array();
var ids = [];
var cityarr=new Array();
var cityidarr=new Array();

user = {
	"balance" : 0,
	"firstname" : "",
	"id" : "",
	"lastname" : "",
	"total" : 0,
	"validity" : "",
	"mobile" : "",
	"datatype":"",
	"other_mobile_no":"",
	"Upi_id":"",
	"store_code_virgolaminates" : "",
	"email":"",
	"dob":"",
	"doa":"",
	"membership_slab":"",
	"pincode":"",
	"city":"",
	"age":"",
	"locationn":"",
    "address":"",
	"district":"",
	"gender":"",
	"cattype_virgolam":"",
	"gst_no":"",
	"pan_no":"",
	"aadhar_no":"",
	"p_photo":"",
	"state":"",
	"IsApproved_se":"",
	"totalpurchaseval":"",
	"totalpurchaseval_approved":"",
	"cashback":"",
	"Nature_Workshop":"",
	"Vehicle_Type":"",
	"vehicleno":"",
	"vehicletype":"",
	"vpa1":"",
	"vpa2":"",
	"card1":"",
	"card2":"",
	"No_of_Mechanics":"",
	"Potential":"",
	"Charger_Available":"",
	"Preferred_Language":"",
	"Preferred_Payment_mode":"",
	"Shop_Name":"",
	"ShopPhoto":"",
	"docPhoto":"",
	"adhPhoto":"",
	"adimg_front":"",
	"adimg_back":"",
	"refer_code":"",
	"manpower":"",
	"infrastructure":"",
	"bankaccountno":"",
	"ongoing_sites":"",
	"completed_sites":"",
	"source":"",
	"point_claim":"",
	"ao_code":"",
	"ao_name":"",
	"mobile_alt":"",
	"uid_virgolaminates":""

};

store = {
	"store_id" : "",
    "store_name" : "",
	"store_category" : "",
    "redeem_logic" : "",
    "store_members" : "",
	"store_rank" : "",
	"storecode ":"",
	"storefirstname ":"",
	"secode ":"",
	"sename ":"",
	"storemobile":""
};

var SERVER = "https://virgolaminates.mloyalretail.com/m/";
var SERVER1 = "https://virgolaminates.mloyalretail.com/";
var SERVER2 = "https://virgolaminates.mloyalretail.com/APIs/";
var SERVER3 = 'https://virgolaminates.mloyalretail.com/Rewards/';
var GSERVER2 = "https://virgolaminates.mloyalretail.com/APIs/";
var GSERVER22 = "https://virgolaminates.mloyalretail.com/APIs/";
var SERVERCPACTION = "https://taghash.co/grati/virgolam/cpnaction.php";


var gbrd='2D5BDFC7-C406-4883-BA67-E4B327A61787';


var SERVER_m = "https://mliveshare.com/"; 
var SERVER1_m = "https://mliveshare.com/user/";
var BITLYS = "https://mliveshare.com/";
var versionurl  ='https://taghash.co/';
var versionurl1  ='https://taghash.co/';


var app_versionCode = '2';

$(document).ready(function(event){
	
	$( function() {
		 $("#optionspop_profile").enhanceWithin().popup();
		 $("#tnc_popup").enhanceWithin().popup();
         $("#shopPhotoregistration_photo").enhanceWithin().popup();
         $("#identficationPhotoregistration_photo").enhanceWithin().popup();
		 $("#newuser_register_byse_popup").enhanceWithin().popup();

		 $("#shopPhotoregistration_photo_se").enhanceWithin().popup();
		 $("#identficationPhotoregistration_photo_se").enhanceWithin().popup();
	});

	$("#wait").css("display","none");
	
	$(document).ajaxStart(function() {
		   $("#wait").css("display","block");
	});
	  
	$(document).ajaxStop(function() {
		   $("#wait").css("display","none");
	});

	localStorage.setItem('selectedstorevirgolaminates',gbrd);

	loadState_list();
	//proloadState_list();
	//loadLocation();
	//setToday_date();

	document.addEventListener("backbutton", function(e)
	{
		   if($.mobile.activePage.is('#login_pg'))
		   {
				navigator.app.exitApp();
		   }
		   else if($.mobile.activePage.is('#homepage'))
		   {
			   e.preventDefault();
			   var x;
				if (confirm("Are you sure you want to exit?") == true) {
					x = "Yes";
					navigator.app.exitApp();
				} else {
					x = "No";
				}
			   
		   }
		   else 
		   {
			   navigator.app.backHistory();
		   }
	 }, false);

	    
		var cattype = localStorage.getItem('cattype_virgolam');

		if(typeof cattype==undefined || cattype== null || cattype== 'undefined')
		cattype='';

        if(cattype=='Carpenter')
		{
				if(localStorage.getItem("usernamevirgolaminates")!=null && localStorage.getItem("usernamevirgolaminates")!='' && localStorage.getItem("passwordvirgolaminates")!=null && localStorage.getItem("passwordvirgolaminates")!='')
				{
						$('#username_new').val(localStorage.getItem("usernamevirgolaminates"));
						var pass = localStorage.getItem("passwordvirgolaminates");

						if(pass.length>=4)
						{
						  var i=4;
						  while(i>0)
								  {
									$('#codeBox'+i).val(parseInt(pass%10));
									i--;
									pass = parseInt(pass/10);
									
								  }
						}

						//$('#password_myacc').val(localStorage.getItem("passwordvirgolaminates"));
						user.mobile = localStorage.getItem('usernamevirgolaminates');
						var pwd = localStorage.getItem('passwordvirgolaminates');
						var uname = user.mobile;
						user.balance = localStorage.getItem('balance');
						user.firstname = localStorage.getItem('firstname');
						user.lastname = localStorage.getItem('lastname');
						user.id = localStorage.getItem('id');
						user.total = localStorage.getItem('total');
						user.validity = localStorage.getItem('validity');
						user.trans_sms = localStorage.getItem('trans_sms');
						user.mktgsms = localStorage.getItem('mktgsms');
						user.cpns = localStorage.getItem('cpns');
						user.ads = localStorage.getItem('ads');
						user.dob = localStorage.getItem('dob');
						user.emailid = localStorage.getItem('emailid');
						user.store_code_virgolaminates = localStorage.getItem('store_code_virgolaminates');
						user.def_store = localStorage.getItem('def_store');
						user.def_city = localStorage.getItem('def_city');
						user.visit_frequency = localStorage.getItem('visit_frequency');
						user.membership_slab = localStorage.getItem('membership_slab');
						
						if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null)
							user.firstname = '';
						if(user.lastname=='undefined' || user.lastname=='null' || user.lastname==null)
								user.lastname = '';
						if(user.emailid=='undefined' || user.emailid=='null' || user.emailid==null)
								user.emailid = '';
						if(user.dob=='undefined' || user.dob=='null' || user.dob==null)
								user.dob = '';
						if(user.mobile=='undefined' || user.mobile=='null' || user.mobile==null)
								user.mobile = '';
						if(user.balance=='undefined' || user.balance=='null' || user.balance==null)
								user.balance = '0';
						
						$('#firstName_update').val(user.firstname);
						$('#lastName_update').val(user.lastname);
						//$('#retailShopName_update').val(user.retailShopName);
						$('#pincode_update').val(user.pincode);
						$('#city_update').val(user.city);
						$('#state_update').val(user.state);

							var dob = user.dob.split('-');
							var mm = dob.length == 3 ? dob[1] : '';
							var dd = dob.length == 3 ? dob[0] : '';
							var yyyy = dob.length == 3 ? dob[2] : '';
							
							/*$('#update_dd').val(dd);
							$('#update_mm').val(mm);
							$('#update_yyyy').val(yyyy);*/

						$('#update_email').val(user.emailid);
						//$('#update_dob').val(user.dob);

						// document.getElementById("pro_id").innerHTML=id1+' '+id2+' '+id3;

						if(user.firstname != '' || user.lastname != ''){
							var fn = user.firstname.substring(0, 1);
							var ln = user.lastname.substring(0, 1);
						}

						document.getElementById("sortname").innerHTML= fn+''+ln;

						// **********************************************PROFILE PAGE CHANGES**********************************************
						document.getElementById("profilenm").innerHTML= user.firstname+' '+user.lastname;
						document.getElementById("profilepts").innerHTML=user.balance;
						document.getElementById("profilenm1").innerHTML= user.firstname+' '+user.lastname;
						document.getElementById("profilepts1").innerHTML=user.balance;

						var dob = user.dob.split('-');
			            mm = dob.length == 3 ? dob[1] : '';
			            dd = dob.length == 3 ? dob[0] : '';
			            dd1 = dob.length == 3 ? dob[0] : '';
			            yyyy = dob.length == 3 ? dob[2] : '';
			            yyyy1 = dob.length == 3 ? dob[2] : '';
                        $('#update_dob').val(yyyy+'-'+mm+'-'+dd);


						//document.getElementById("homeshort_nm").innerHTML= user.firstname.substring(0, 1);
						document.getElementById("pr_valid").innerHTML = user.validity;
						
						 $("#wait").css("display","none");

						 $.mobile.changePage( "#gifslider", { transition: "none"} );
						 setTimeout( function() {
							authenticate_new();
						 }, 2000);  // 2 seconds

						 
						/*if(imageExists('https://taghash.co/virgolaminates/uploads/virgolaminates_'+localStorage.getItem("usernamevirgolaminates")+'.jpg'))
						{
							document.getElementById("update_photo1").src='https://taghash.co/virgolaminates/uploads/virgolaminates_'+localStorage.getItem("usernamevirgolaminates")+'.jpg';
						}*/        
				 }
				 else if(localStorage.getItem("usernamevirgolaminates")!=null && localStorage.getItem("usernamevirgolaminates")!='' && (localStorage.getItem("passwordvirgolaminates")==null || localStorage.getItem("passwordvirgolaminates")=='')) 
				 {
						$('#username_new').val(localStorage.getItem("usernamevirgolaminates"));
						$.mobile.changePage( "#otp_pg", { transition: "none"} );
				 }
				 else
				 {	
						//$.mobile.changePage( "#login_pg", { transition: "none"} );
						$.mobile.changePage( "#selectcategorypage", { transition: "none"} );
				 }
	    }
		else if(cattype=='SalesExecutive' )
		{	
								//document.getElementById('headlbl_login_se').innerHTML='Sales Executive';

								var dealeruser = localStorage.getItem("usernamemloyal_virgolam");
								var dealerpass = localStorage.getItem("userpassloyal_virgolam");
								//alert(dealeruser+'................'+dealerpass);
								if(typeof dealeruser == undefined || dealeruser == null)
									dealeruser = '';
								if(typeof dealerpass == undefined || dealerpass == null)
									dealerpass = '';
								//console.log('dealeruser'+dealeruser+'.......dealerpass'+dealerpass);
								if(dealeruser!='')
								{
									 $('#username_se').val(dealeruser);
								}
								if(dealeruser!='' && dealerpass!='')
								{
									   
									   $('#username_se').val(localStorage.getItem("usernamemloyal_virgolam"));
									   $('#password_myacc_se').val(localStorage.getItem("userpassloyal_virgolam"));
									   
									   //$.mobile.changePage( "#gifslider", { transition: "none"} );
										setTimeout( function() {
											authenticate_se();
										}, 2000);
									   
								}
								else if(dealeruser!='' && dealerpass=='')
								{
									$('#username_se').val(localStorage.getItem("usernamemloyal_virgolam"));
									$('#password_myacc_se').val(localStorage.getItem("usermobilemloyal_virgolam")); 
									$.mobile.changePage( "#login_pg_se", { transition: "none"} );
									
								}
								else
								{
									$.mobile.changePage( "#selectcategorypage", { transition: "none"} );
								}
		}
		else
		{
			             $.mobile.changePage( "#selectcategorypage", { transition: "none"} );
		}

});

function savecategory()
{
	
	var cattype = $("input[name='select_role']:checked").val()
	console.log(cattype);

	if(typeof cattype==undefined || cattype=='undefined'|| cattype==null|| cattype=='null' || cattype=='')
	{
		toast('Please select category type');
	}
	else
	{
		localStorage.setItem('cattype_virgolam',cattype);

		if(cattype=='SalesExecutive')
		{
			$.mobile.changePage( "#login_pg_se", { transition: "none"} );
		}
		else
		{
			$.mobile.changePage( "#login_pg", { transition: "none"} );
		}

	}
}

var toast = function (msg) {
    $("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h5>" + msg + "</h5></div>")
            .css({display: "block",
                opacity: 0.97,
                position: "fixed",
                padding: "7px",
                "text-align": "center",
                width: "270px",
                background: "#ed1c24",
                "text-shadow": "none",
                "color": "#ffffff",
                left: ($(window).width() - 284) / 2,
                top: $(window).height() / 2})
            .appendTo($.mobile.pageContainer).delay(5000)
            .fadeOut(400, function () {
                $(this).remove();
            });
}

var toast_scan = function (msg) {
    $("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h4>" + msg + "</h4></div>")
            .css({display: "block",
                opacity: 0.97,
                position: "fixed",
                padding: "17px",
                "text-align": "center",
                width: "270px",
                background: "#4a4a46",
                "text-shadow": "none",
                "color": "#ffffff",
                left: ($(window).width() - 284) / 2,
                top: $(window).height() / 2})
            .appendTo($.mobile.pageContainer).delay(5500)
            .fadeOut(400, function () {
                $(this).remove();
            });
}

var toast_scan_blue = function (msg) {
    $("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h4>" + msg + "</h4></div>")
            .css({display: "block",
                opacity: 0.97,
                position: "fixed",
                padding: "17px",
                "text-align": "center",
                width: "270px",
                background: "#4043a9",
                "text-shadow": "none",
                "color": "#ffffff",
                left: ($(window).width() - 284) / 2,
                top: $(window).height() / 2})
            .appendTo($.mobile.pageContainer).delay(5500)
            .fadeOut(400, function () {
                $(this).remove();
            });
}

var toast_scan_black = function (msg) {
    $("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h4>" + msg + "</h4></div>")
            .css({display: "block",
                opacity: 0.97,
                position: "fixed",
                padding: "17px",
                "text-align": "center",
                width: "270px",
                background: "#000000",
                "text-shadow": "none",
                "color": "#ffffff",
                left: ($(window).width() - 284) / 2,
                top: $(window).height() / 2})
            .appendTo($.mobile.pageContainer).delay(5500)
            .fadeOut(400, function () {
                $(this).remove();
            });
}




var toast_p = function (msg) {
    $("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h5>" + msg + "</h5></div>")
            .css({display: "block",
                opacity: 0.97,
                position: "fixed",
                padding: "7px",
                "text-align": "center",
                width: "270px",
                background: "#ed1c24",
                "text-shadow": "none",
                "color": "#ffffff",
                left: ($(window).width() - 284) / 2,
                top: $(window).height() / 2})
            .appendTo($.mobile.pageContainer).delay(5500)
            .fadeOut(400, function () {
                $(this).remove();
            });
}

function forget_pswd_confirm()
{ 
		 if($("#tnc-chck1").is(":checked"))
		 {
			forget_pswd();
		 }
		 else
		 {
			toast('Please agree to all terms and conditions');	 
		 }
}

function forget_pswd()
{
	 var mob = $('#forgot_mobile').val();
	 
	 if(mob=='')
	 {
		 toast('Please enter your mobile number');
	 }
	 else if(mob.length==10)
	 {
		 //$.mobile.changePage("#login_pg");
		 $.ajax({
			url: SERVER+'forgot_pswd.asp',
			type: 'GET',
			timeout: 30000,
			data: {'mobileno': mob},
			success: function(data, textStatus, xhr) {
			 console.log(data);
			 console.log(textStatus);
			 if(data.toLowerCase()=='success'){
				 //startWatch();
				 
				 toast('OTP has been sent to your mobile.Please check your SMS.');
			  
				  localStorage.setItem("SMSMNO",mob);
				 
			      //$('#username').val(mob);
				  $('#username_new').val(mob);
				  localStorage.setItem('usernamevirgolaminates',mob);
				 
				  //$.mobile.changePage("#login_pg_new");
				  $.mobile.changePage("#otp_pg");
				  
              }
			  else
			  {
				 toast(mob+' is not valid.');
				 $('#forgot_mobile').val('');
			  }
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				   toast('Could not connect to Server, make sure you are connected to Internet');
				}
		});
  }
  else
  {
	  toast('Please enter 10 digits mobile number');
  }
}

// event.which  : The event.which property returns which keyboard key or mouse button was pressed for the event.
// event.keyCode  : Get the Unicode value of the pressed keyboard key
function onKeyUpEvent(index, event) {
	const eventCode = event.which || event.keyCode;
	if (getCodeBoxElement(index).value.length === 1) {
	  if (index !== 4) {
		getCodeBoxElement(index+ 1).focus();
	  } else {
		getCodeBoxElement(index).blur();
		// Submit code
		console.log('submit code ');
	  }
	}
	if (eventCode === 8 && index !== 1) {
	  getCodeBoxElement(index - 1).focus();
	}
  }
  function onFocusEvent(index) {
	for (item = 1; item < index; item++) {
	  const currentElement = getCodeBoxElement(item);
	  if (!currentElement.value) {
		  currentElement.focus();
		  break;
	  }
	}
  }

  function getCodeBoxElement(index) {
	return document.getElementById('codeBox' + index);
  }

  
function authenticate_new()
{

  var uname = $('#username_new').val();
  var pwd = $('#codeBox1').val()+$('#codeBox2').val()+$('#codeBox3').val()+$('#codeBox4').val();

  var phno = localStorage.getItem("phno");
    
  if(phno=='')
		JSON.stringify(phonenos);
  else
	phno='';
 if(uname=='' || pwd==''){
  toast('Please enter Mobile Number /Passcode');
 }
 else{
  $.ajax({
    url: SERVER+'mloyallogin_json.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: {'username': uname, 'password': pwd},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
   
	console.log("success"+JSON.stringify(data));
   if(data.status=='success'){
    user.balance = data.balance;
    user.firstname = checkforundefined(data.firstname);
    user.id = data.id;
    user.lastname = checkforundefined(data.lastname);
    user.total = data.total;
    user.validity = data.validity;
    user.mobile = uname;
	user.trans_sms = data.trans_sms;
	user.mktgsms = data.mktgsms;
	user.cpns = data.cpns;
    user.ads = data.ads;
	user.state = checkforundefined(data.StateId);
    user.dob = checkforundefined(data.dob);
	user.doa = checkforundefined(data.doa);
    user.emailid = checkforundefined(data.emailid);
	user.store_code_virgolaminates = checkforundefined(data.store_code);
	user.def_store = checkforundefined(data.store);
	user.datatype = checkforundefined(data.IdProof_Name);
	user.city = checkforundefined(data.CityId);
	user.district = checkforundefined(data.Distict);
	user.floor_flat = data.floor_flat;
	user.visit_frequency = data.visit_frequency;
	user.membership_slab = checkforundefined(data.slabid);
	user.uid_virgolaminates = checkforundefined(data.uid);
	user.Shop_Name = checkforundefined(data.Shop_Name);
	user.ShopPhoto = checkforundefined(data.Shop_Photo);
	user.docPhoto = checkforundefined(data.doc_photo);
	user.p_photo = checkforundefined(data.Self_Photo);

	user.vehicletype = checkforundefined(data.Vehicle_type);
	user.vpa1 = checkforundefined(data.VPA1);
	user.vpa2 = checkforundefined(data.VPA2);
	// user.card1 = checkforundefined(data.card_number1);
	// user.card2 = checkforundefined(data.card_number2);


	user.source = checkforundefined(data.source);
	user.point_claim = checkforundefined(data.point_claim);

	user.ao_code = checkforundefined(data.Area_Office_code);
	user.ao_name = checkforundefined(data.Area_Office_Name);
	user.IsApproved_se = checkforundefined(data.IsApproved);
	user.QtyReqForNextSlab = checkforundefined(data.QtyReqForNextSlab);

	if(user.source=='')
	user.source ='self';

	user.proprietorname = checkforundefined_nonblank(data.ProprietorName);
	user.sapcode = checkforundefined_nonblank(data.SapCode);
    
	user.gender = checkforundefined(data.Gender);
    user.pincode = checkforundefined(data.PostalCode);
	user.address = checkforundefined(data.Address);
	user.userstate = checkforundefined(data.store_state_id);
	user.district11 = checkforundefined(data.district);
	user.aadhar_no =  checkforundefined(data.aadhar_card_no);
    user.adimg_front = checkforundefined(data.aadhar_front_photo);
    user.adimg_back = checkforundefined(data.aadhar_back_photo);
	//user.refer_code = checkforundefined(data.Ref_code);

	
	user.manpower = checkforundefined(data.Manpower);
	user.infrastructure = checkforundefined(data.Infrastructure);
	user.bankaccountno = checkforundefined(data.AccountNo);
	user.gst_no = checkforundefined(data.GstNo);
	user.qualification  = checkforundefined(data.Qualification);
	user.ongoing_sites = checkforundefined(data.OngoingSites);
	user.completed_sites  = checkforundefined(data.CompleteSites);
	

	if(user.cpns==null || user.cpns=='null' || user.cpns=='undefined')
		user.cpns='0';

	console.log("user.firstname:"+user.firstname);
    
    $('#username').val('');
    $('#password_myacc').val('');
  
   localStorage.setItem('usernamevirgolaminates',uname);
   localStorage.setItem('passwordvirgolaminates',pwd);
   localStorage.setItem('balance',user.balance);
   localStorage.setItem('firstname',user.firstname);
   localStorage.setItem('lastname',user.lastname);
   localStorage.setItem('id',user.id);
   localStorage.setItem('total',user.total);
   localStorage.setItem('validity',user.validity);
   localStorage.setItem('trans_sms',user.trans_sms);
   localStorage.setItem('mktgsms',user.mktgsms);
   localStorage.setItem('cpns',user.cpns);
   localStorage.setItem('ads',user.ads);
   localStorage.setItem('dob',user.dob);
   localStorage.setItem('doa',user.doa);
   localStorage.setItem('emailid',user.emailid);
   localStorage.setItem('def_store',user.def_store);
   localStorage.setItem('def_city',user.def_city);
   localStorage.setItem('visit_frequency',user.visit_frequency);
   localStorage.setItem('membership_slab',user.membership_slab);
   // localStorage.setItem('passworddd',pwd);

	
	if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null)
	    user.firstname = '';
	if(user.lastname=='undefined' || user.lastname=='null' || user.lastname==null)
		user.lastname = '';
	if(user.emailid=='undefined' || user.emailid=='null' || user.emailid==null)
		 user.emailid = '';
	if(user.dob=='undefined' || user.dob=='null' || user.dob==null)
		 user.dob = '';
	if(user.doa=='undefined' || user.doa=='null' || user.doa==null)
		 user.doa = '';
	if(user.mobile=='undefined' || user.mobile=='null' || user.mobile==null)
		user.mobile = '';
	if(user.store_code_virgolaminates.trim()=='' || user.store_code_virgolaminates=='null' || user.store_code_virgolaminates==null || user.store_code_virgolaminates=='undefined')
		user.store_code_virgolaminates = 'HO-001';

            $('#firstName_update').val(user.firstname);
            $('#lastName_update').val(user.lastname);
           // $('#retailShopName_update').val(user.retailShopName);
            $('#pincode_update').val(user.pincode);
            $('#city_update').val(user.city);
            $('#state_update').val(user.state);
			$('#update_address').val(user.address);
            //$('#retailShopName_update').val(user.Shop_Name);



	//$('#update_aadharno').val(user.aadhar_no);

	//$('#update_address').val(user.floor_flat);
	$('#update_mobile').val(user.mobile);

	// $('#update_vtype').val(user.vehicletype);

	// if(user.vpa1.indexOf("@")>=0)
	// {
	// 	$('#update_vpa1_txt').val(user.vpa1.split('@')[0]);
	//     $('#update_vpa1_domain').val('@'+user.vpa1.split('@')[1]);
	// }

	// if(user.vpa2.indexOf("@")>=0)
	// {
	// 	$('#update_vpa2_txt').val(user.vpa2.split('@')[0]);
	//     $('#update_vpa2_domain').val('@'+user.vpa2.split('@')[1]);
	// }

	// $('#update_card1').val(user.card1);
	// $('#update_card2').val(user.card2);
    
	if(user.id != ''){
		var id1 = user.id.substring(0, 4);
		var id2 = user.id.substring(4, 8);
		var id3 = user.id.substring(8, 10);
	}
    if(user.firstname != '' || user.lastname != ''){
		var fn = user.firstname.substring(0, 1);
		var ln = user.lastname.substring(0, 1);
	}
	document.getElementById("sortname").innerHTML= fn+''+ln;
	document.getElementById("profilenm").innerHTML= user.firstname+' '+user.lastname;
	document.getElementById("profilepts").innerHTML=user.balance;
    document.getElementById("profilenm1").innerHTML= user.firstname+' '+user.lastname;
    document.getElementById("profilepts1").innerHTML=user.balance;
	//document.getElementById("pro_id").innerHTML=id1+' '+id2+' '+id3;
	document.getElementById("pr_valid").innerHTML=user.validity;

	//document.getElementById("firm_nm").innerHTML= user.proprietorname;
	//document.getElementById("sap_code").innerHTML= user.sapcode;


  
	

	if(user.p_photo != '')
    {
		if(imageExists(user.p_photo))
		{
			document.getElementById("shopPhoto_registration").src = user.p_photo;
			document.getElementById("update_photo").src = user.p_photo;
			document.getElementById("update_photo1").src = user.p_photo;
			//localStorage.setItem('file_pphoto',user.p_photo);
			localStorage.setItem('filenmshop',user.p_photo);
		}
	}

	/*if(checkforundefined(user.ShopPhoto) != '')
    {
		if(imageExists(user.ShopPhoto))
		{
			document.getElementById("shopPhoto_registration").src = user.ShopPhoto;
			localStorage.setItem('filenmshop',user.ShopPhoto);
		}
	}*/
	if(checkforundefined(user.docPhoto) != '')
    {
		if(imageExists(user.docPhoto))
		{
			document.getElementById("identficationPhoto_registration").src = user.docPhoto;
			localStorage.setItem('file_pdoc',user.docPhoto);
		}
	}
	

	if(user.dob!='')
	{
			
		var dob = user.dob.split('-');
		mm = dob.length == 3 ? dob[1] : '';
		dd = dob.length == 3 ? dob[0] : '';
		yyyy = dob.length == 3 ? dob[2] : '';
		mm = mm.trim();
		dd = dd.trim();
		yyyy = yyyy.trim();
		if(dd.length == 1)
			dd = '0'+dd;
		if(mm.length == 1)
			mm = '0'+mm;
		$('#update_dob').val(yyyy+'-'+mm+'-'+dd);
		
	}

	if(user.doa!='')
	{
			
		var doa = user.doa.split('-');
		mm1 = doa.length == 3 ? doa[1] : '';
		dd1 = doa.length == 3 ? doa[0] : '';
		yyyy1 = doa.length == 3 ? doa[2] : '';
		mm1 = mm1.trim();
		dd1 = dd1.trim();
		yyyy1 = yyyy1.trim();
		if(dd1.length == 1)
			dd1 = '0'+dd1;
		if(mm1.length == 1)
			mm1 = '0'+mm1;
		$('#update_doa').val(yyyy1+'-'+mm1+'-'+dd1);
		
	}

	user.state = user.state.toString();
	var numbers = /^[0-9]+$/;
	if(user.state!='')
	{
		if(user.state.match(numbers))
		{
			$("#state_update").val(user.state);
			fetchCitylist_1_new(user.state);
		}
		else
		{
	   
			$("#state_update option").each(function() {
						  if($(this).text().indexOf(user.state)>=0) {
							 
							$(this).prop('selected', 'selected');            
						  }                        
			});
			var sval=$("#state_update").val();
			fetchCitylist_1_new(sval);
		 }
	}

	
	
	if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname.trim()=='')
	{
		//document.getElementById('update_firstname').readOnly = false;
	    //document.getElementById('update_lastname').readOnly = false;
        
		document.getElementById('firstName_update').readOnly = false;
		document.getElementById('lastName_update').readOnly = false;
		document.getElementById('pincode_update').readOnly = false;
		document.getElementById("state_update").removeAttribute("disabled");
		document.getElementById("city_update").removeAttribute("disabled");

		$.mobile.changePage( "#profiledata", { transition: "flip"} );
    }
    else
    {
		   
	    /*if(localStorage.getItem("profiledone_virgolaminates"))
		{
			
			if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname=='')
			{
				document.getElementById("profilenm").innerHTML= 'Guest';
				document.getElementById("profilenm1").innerHTML='Guest';
			}
			else
			{
				document.getElementById("sortname").innerHTML= fn+''+ln;
				document.getElementById("profilenm").innerHTML= user.firstname+' '+user.lastname;
				document.getElementById("profilepts").innerHTML=user.balance;
				document.getElementById("profilenm1").innerHTML= user.firstname+' '+user.lastname;
				document.getElementById("profilepts1").innerHTML=user.balance;
				//document.getElementById("pro_id").innerHTML=id1+' '+id2+' '+id3;
				//document.getElementById("pr_valid").innerHTML=user.validity;
					
			}

			$.mobile.changePage( "#homepage", { transition: "flip"} );
		}
		else
		{
			 $.mobile.changePage( "#profilepage", { transition: "flip"} );
		}*/

		$.mobile.changePage( "#homepage", { transition: "flip"} );
    }

   }
   else
   {
		 toast('Authenticantion failed');
		 $.mobile.changePage( "#login_pg", { transition: "flip"} );
   }
	
    },
    error: function(xhr, textStatus, errorThrown) {
	user.mobile = localStorage.getItem('usernamevirgolaminates');
	pwd = localStorage.getItem('passwordvirgolaminates');
	uname = user.mobile;
    user.balance = localStorage.getItem('balance');
    user.firstname = localStorage.getItem('firstname');
    user.lastname = localStorage.getItem('lastname');
    user.id = localStorage.getItem('id');
    user.total = localStorage.getItem('total');
    user.validity = localStorage.getItem('validity');
    user.trans_sms = localStorage.getItem('trans_sms');
    user.mktgsms = localStorage.getItem('mktgsms');
    user.cpns = localStorage.getItem('cpns');
    user.ads = localStorage.getItem('ads');
    user.dob = localStorage.getItem('dob');
    user.emailid = localStorage.getItem('emailid');
    user.def_store = localStorage.getItem('def_store');
    user.def_city = localStorage.getItem('def_city');
	user.visit_frequency = localStorage.getItem('visit_frequency');
    /*document.getElementById("pr_name").innerHTML=user.firstname+' '+user.lastname;
	document.getElementById("pr_id").innerHTML=user.id;
	document.getElementById("pr_dob").innerHTML=user.dob;
	//document.getElementById("pr_valid").innerHTML=user.validity;*/
	   if(localStorage.getItem("imagedata")!=null)
	   {
		//document.getElementById("cardImagemenu").src = localStorage.getItem("imagedata");
		//document.getElementById("cardImagepunch").src = localStorage.getItem("imagedata");
	   }
     }
   });
  }
}

function checkforundefined(str)
{
    if(typeof str==undefined || str=='undefined'|| str==null || str=='null')
    {
        str='';
    }
        return str;
}

function checkforundefined_nonblank(str)
{
    if(typeof str==undefined || typeof str==null || str=='undefined'|| str==null || str=='null')
    {
        str= '';
    }
        return str;
}

function imageExists(image_url){

    /*var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();
    return http.status != 404;*/

	return true;
}
function gotomessages()
	{
		$("#message").css('display', 'block');
		$("#membership2").css('display', 'none');
		$("#rewards").css('display', 'none');
		$("#points").css('display', 'none');

		//$('a[href="#weekly"]').trigger("click");	
		//$("#sidebar").panel("close")
		$.mobile.changePage( "#my_membership", { transition: "none"} );
		showTabContent('inbox', 'msg_history_json.asp');
		//$("#contest_tabs").tabs( "option", "active", 1 );

		document.getElementById("tab1").classList.remove("is-active");
		document.getElementById("tab2").classList.add("is-active");
		document.getElementById("tab3").classList.remove("is-active");
		document.getElementById("tab4").classList.remove("is-active");
	}

	function showTabContent(id, url) {
		console.log("url -> "+url);
		var tabserver='';
			if(id=='rewardstore' || id=='reward-cat' || id=='reward-brand')
			{
				tabserver = "https://virgolaminates.mloyalretail.com/Rewards/";
			}
			else
			{
				tabserver = "https://virgolaminates.mloyalretail.com/m/";
			}
			console.log("tabserver ->"+tabserver);
			console.log("user.mobile ->"+user.mobile);
			$.getJSON(
				tabserver+url, {
				//page: url,
				mno : user.mobile
				// mno : 9876543210
			}, function (json) {
			   console.log("SSSS"+JSON.stringify(json));
					
				renderTemplate(id, json);
			}).error(function () {
				alert("Error: Could not connect to Server, make sure you are connected to Network");
			});
		}

		function gotomembership()
		{
	
			$("#message").css('display', 'none');
			$("#membership2").css('display', 'block');
			$("#rewards").css('display', 'none');
			$("#points").css('display', 'none');
	
			//$("#sidebar").panel("close");
			renderTemplatedetail('aboutus');
			$.mobile.changePage( "#my_membership", { transition: "none"} );	
			//$("#contest_tabs").tabs( "option", "active", 0 );		
	
			document.getElementById("tab1").classList.add("is-active");
			document.getElementById("tab2").classList.remove("is-active");
			document.getElementById("tab3").classList.remove("is-active");
			document.getElementById("tab4").classList.remove("is-active");
		}

















		function renderTemplatedetail(pageID) {
			var str = '';
			
			
			
				switch (pageID) {
					
					
		case 'aboutus':

			console.log('cardname:-'+user.firstname+' '+user.lastname);
			document.getElementById("cardname").innerHTML = user.firstname+' '+user.lastname;
			//document.getElementById("cardname").innerHTML = user.firstname;
		    var uuu='';
			for(var i=0;i<user.id.length;i++)
		    {
             if(i%4==2)
				{
				 uuu = uuu + user.id.charAt(i) +'  ';
				}
			 else
				{
				 uuu = uuu + user.id.charAt(i);
				}
			}
			
			var mobileqr = '';
			if(user.mobile==null || user.mobile=='' || user.mobile=='undefined')
			{
				mobileqr = 'Guest';
			}
			else
		    {
				mobileqr = user.mobile;
			}

		    // document.getElementById("cardid").innerHTML = uuu;
		    //document.getElementById("valid").innerHTML = 'Valid Thru:'+user.validity;
			//document.getElementById("tpoint").innerHTML = user.balance;
			document.getElementById("barimg").innerHTML = '<img src="https://quickchart.io/qr?text='+mobileqr+'&size=80&margin=2" class="img-responsive" />';

			/*if(user.membership_slab=='1' || user.membership_slab=='')
            {
               document.getElementById('baseslab').className = '';
               document.getElementById('silverslab').className = '';
			   document.getElementById('goldslab').className = '';
		       document.getElementById('platinumslab').className = '';

		       document.getElementById('baseslab').className = 'active';
			   document.getElementById("mType").innerHTML = 'Base Member';
            }
            else if(user.membership_slab=='2')
            {
               document.getElementById('baseslab').className = '';
               document.getElementById('silverslab').className = '';
			   document.getElementById('goldslab').className = '';
		       document.getElementById('platinumslab').className = '';

		       document.getElementById('silverslab').className = 'active';
			   document.getElementById("mType").innerHTML = 'Silver Member';
            }
			else if(user.membership_slab=='4')
            {
               document.getElementById('baseslab').className = '';
               document.getElementById('silverslab').className = '';
			   document.getElementById('goldslab').className = '';
		       document.getElementById('platinumslab').className = '';

		       document.getElementById('goldslab').className = 'active';
			   document.getElementById("mType").innerHTML = 'Gold Member';
            }
			else if(user.membership_slab=='3')
            {
               document.getElementById('baseslab').className = '';
               document.getElementById('silverslab').className = '';
			   document.getElementById('goldslab').className = '';
		       document.getElementById('platinumslab').className = '';

		       document.getElementById('platinumslab').className = 'active';
			   document.getElementById("mType").innerHTML = 'Platinum Member';
            }*/

			setUserbalance_aboutus();
        

			break;
			
					case 'page-card':
						
						document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span><img src="img/pro_btn.png" class="mem_acc_icon"></span><a href="javascript:showLoyalty();"><span class="myacc">My Account</span></a>';
						//document.getElementById("welcomehome").innerHTML = 'Welcome '+user.firstname+' '+user.lastname;
						document.getElementById("cardname").innerHTML = user.firstname+' '+user.lastname;
						var uuu='';
						for(var i=0;i<user.id.length;i++)
						{
						 if(i%4==2)
							{
							 uuu = uuu + user.id.charAt(i) +'  ';
							}
						 else
							{
							 uuu = uuu + user.id.charAt(i);
							}
						}
						document.getElementById("cardid").innerHTML = uuu;
						document.getElementById("valid").innerHTML = user.validity;
						var ustr = user.balance;
						var tstr = '';
						if(ustr.length<=8)
					   {
						 for (var k=0;k<(8-ustr.length); k++)
						{
						tstr += '<span class="bdrht" style="">0</span>';
						}
					   }
						for (var j=0;j<ustr.length; j++)
						{
						tstr += '<span class="bdrht" style="">'+ustr.charAt(j)+'</span>';
						}
						
						document.getElementById("tpoint").innerHTML = tstr;
						document.getElementById("barimg").innerHTML = '<img src="http://delhidaredevilsadda.com/barcode.php?text='+user.mobile+'" style="padding:5px;border: solid 1px #ffffff;border-radius: 1px;background:#ffffff;" />';
			
						document.getElementById("headername").innerHTML='Membership';
						 
						break;
			
			
						case 'page-card-punch':
						
						
			
			
									document.getElementById("barcontentpunch").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span><img src="img/pro_btn.png" class="mem_acc_icon"></span><a href="javascript:showLoyalty();"><span class="myacc">My Account</span></a>';
						//document.getElementById("welcomehome").innerHTML = 'Welcome '+user.firstname+' '+user.lastname;
						document.getElementById("cardnamepunch").innerHTML = user.firstname+' '+user.lastname;
						var pstr='<span style="color:#ffffff;"><br><br>';
						console.log("user.visit_frequency)"+user.visit_frequency);
						//user.visit_frequency='2';
						console.log("parseInt(user.visit_frequency)"+parseInt(user.visit_frequency));
						 for (var k1=0;k1<parseInt(user.visit_frequency); k1++)
						{
						pstr += '<img src="img/star11.png"/>';
						}
						 for (var k1=0;k1<10-parseInt(user.visit_frequency); k1++)
						{
						pstr += '<img src="img/star.png"/>';
						}
						pstr +='</span>'
						console.log("pstr"+pstr);
			
			
			
						document.getElementById("card_punches").innerHTML =pstr;
						var uuu='';
						for(var i=0;i<user.id.length;i++)
						{
						 if(i%4==2)
							{
							 uuu = uuu + user.id.charAt(i) +'  ';
							}
						 else
							{
							 uuu = uuu + user.id.charAt(i);
							}
						}
					   
						var ustr = user.balance;
						var tstr = '';
						if(ustr.length<=8)
					   {
						 for (var k=0;k<(8-ustr.length); k++)
						{
						tstr += '<span class="bdrht" style="">0</span>';
						}
					   }
						for (var j=0;j<ustr.length; j++)
						{
						tstr += '<span class="bdrht" style="">'+ustr.charAt(j)+'</span>';
						}
						
						document.getElementById("tpointpunch").innerHTML = tstr;
						
						document.getElementById("headernamepunch").innerHTML='Membership';
						break;
			
						case 'shop':
						str +='<ul data-role="listview" id="ul_shop" class="ul_shop" data-icon="false" data-iconpos="none">';
						str +='<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showshoplinks(\'S1\');" class="lt_shop_a"><h2>Khazana</h2></a></li>';
						str +='</ul>';
						
						$("#" + pageID + " .ui-content").html(str);
				$('#ul_shop').listview();
			   break;
			  
				}
				}
				function setUserbalance_aboutus()
				{
					 $.ajax({
						url: SERVER+'points_history_json.asp',
						type: 'GET',
						timeout: 50000,
						dataType: 'json',
						data: {'mno': user.mobile},
						complete: function(xhr, textStatus) {
						   //called when complete
						},
						success: function(data, textStatus, xhr) {
				
							//console.log('JSONDATA:'+JSON.stringify(data));
							document.getElementById("tpoint").innerHTML = data.balance;
							document.getElementById("profilepts").innerHTML = data.balance;
							document.getElementById("profilepts1").innerHTML = data.balance;
							document.getElementById("transactions_bal").innerHTML = data.balance;
							//document.getElementById("blink_div").innerHTML = 'You need '+data.move_nxt_pts+' points to move to the next tier';
							
							
						},
						error: function(xhr, textStatus, errorThrown) {
							toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
						}
					  });
				}


		
function renderTemplate(pageID, json) {
	var str = '';
	var str1 = '';
	var oth = document.getElementById("othercontent");
    var main = document.getElementById("cardcontent");

	console.log('pageID'+pageID);
	switch (pageID) {
	case 'loyalty':
				
		str += '<br/><div class="pts_new"><span>' + json.balance + '</span></div>';   
        str += '<p class="tpts">Total Points</p>';
        str += '<a href="javascript:purchaseHistory();" id="ptsEarn" class="ui-btn ui-corner-all"><img src="assets/images/earned-points.png" alt="img" class="eIcon"><span>Earned Points :' + json.earnpoints + '</span><span class="purchaseBtnTxt">My Purchase History</span></a>';
        str += '<a href="javascript:redeemHistory();" id="ptsRedeem" class="ui-btn ui-corner-all"><img src="assets/images/redeemed-points.png" alt="img" class="rIcon"><span>Redeemed Points :' + json.burnpoints + '</span><span class="purchaseBtnTxt">My Purchase History</span></span></a>';
		str += '<a href="javascript:bonusHistory();" id="ptsBonus" class="ui-btn ui-corner-all"><img src="assets/images/earned-points.png" alt="img" class="rIcon"><span>Bonus Points :' + json.bonuspoints + '</span><span class="purchaseBtnTxt">My Purchase History</span></span></a>';
	
		//str += '<a href="#" id="ptsEarn1" class="ui-btn ui-corner-all"><img src="assets/images/earned-points.png" alt="img" class="eIconT"><span class="ernPt1">Earned Points :' + json.earnpoints + '</span><span class="rdmPt1">Redeemed Points :' + json.burnpoints + '</span><span class="purchaseBtnTxt1">My Purchase History</span></a>';
		
		
		
		str += '<div id="purchaseHistory" style="display:none;">';
		str+='<hr><span class="phist">Purchase History</span><hr>';
		for(var i=0;i<json.data.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
			str +='<caption><span style="float:left;">EARNED POINTS <span class="ptsRed">'+json.data[i].earn+'</span></span>  <span class="cap_date">'+json.data[i].billdate+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.data[i].billnumber+'</td><td>'+json.data[i].billamount+'</td><td>'+json.data[i].earn+'</td></tr>';
			str +='</tbody></table><br/>';
		}
		str +='</div>';
		
		
		str += '<div id="redeemHistory" style="display:none;">';
		str+='<hr><span class="phist">Redeem History</span><hr>';
        for(var i=0;i<json.data.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
		    str +='<caption><span style="float:left;">REDEEM POINTS <span class="ptsRed">'+json.data[i].burn+'</span></span>  <span class="cap_date">'+json.data[i].billdate+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.data[i].billnumber+'</td><td>'+json.data[i].billamount+'</td><td>'+json.data[i].burn+'</td></tr>';
			str +='</tbody></table><br/>';
		}
	    str +='</div>';


		str += '<div id="bonusHistory" style="display:none;">';
		str+='<hr><span class="phist">Bonus History</span><hr>';
		for(var i=0;i<json.bonus.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
			str +='<caption><span style="float:left;">BONUS POINTS <span class="ptsRed">'+json.bonus[i].bonuspoints+'</span></span>  <span class="cap_date">'+json.bonus[i].createdon+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.bonus[i].bonuspoints+'</td><td>'+json.bonus[i].flag+'</td></tr>';
			str +='</tbody></table><br/>';
		}
		str +='</div>';

        document.getElementById("points").innerHTML=str;   
		
		
		break;

	case 'loyaltynew':
		
	    str += '<div class="p-3">';
		str += '<div class="pts"><span>' + json.balance + '</span></div>';   
        str += '<p class="tpts">Total Points</p>';

		str += '<a href="javascript:purchaseHistory();" id="ptsEarn" class="ui-btn ui-corner-all"><img src="assets/images/pointredeem.png" alt="img" class="eIcon"><span>Earned Points : ' + json.earnpoints + '</span></a>';
		str += '<a href="javascript:redeemHistory();" id="ptsRedeem" class="ui-btn ui-corner-all"><img src="assets/images/pointredused.png" alt="img" class="eIcon"><span>Redeemed Points : ' + json.burnpoints + '</span></a>';
		str += '<a href="javascript:bonusHistory();" id="ptsEarn" class="ui-btn ui-corner-all"><img src="assets/images/pointredeem.png" alt="img" class="eIcon"><span>Bonus Points : ' + json.bonuspoints + '</span></a>';
		str += '</div>';
		
		str += '<div id="purchaseHistory" style="display:none;">';
		str+='<hr><span class="phist">Earned History</span><hr>';
		for(var i=0;i<json.data.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
			str +='<caption><span style="float:left;">EARNED POINTS <span class="ptsRed">'+json.data[i].earn+'</span></span>  <span class="cap_date">'+json.data[i].billdate+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.data[i].billnumber+'</td><td>'+json.data[i].billamount+'</td><td>'+json.data[i].earn+'</td></tr>';
			str +='</tbody></table><br/>';
		}
		str +='</div>';
		
		
		str += '<div id="redeemHistory" style="display:none;">';
		str+='<hr><span class="phist">Redeem History</span><hr>';
        for(var i=0;i<json.redeem.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
		    str +='<caption><span style="float:left;">REDEEM POINTS <span class="ptsRed">'+json.redeem[i].redeempoints+'</span></span>  <span class="cap_date">'+json.redeem[i].billdate+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.redeem[i].redeempoints+'</td><td>'+json.redeem[i].billnumber+'</td></tr>';
			str +='</tbody></table><br/>';
		}
	    str +='</div>';


		str += '<div id="bonusHistory" style="display:none;">';
		str+='<hr><span class="phist">Bonus History</span><hr>';
		for(var i=0;i<json.bonus.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
			str +='<caption><span style="float:left;">BONUS POINTS <span class="ptsRed">'+json.bonus[i].bonuspoints+'</span></span>  <span class="cap_date">'+json.bonus[i].createdon+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.bonus[i].bonuspoints+'</td><td>'+json.bonus[i].flag+'</td></tr>';
			str +='</tbody></table><br/>';
		}
		str +='</div>';

        document.getElementById("points").innerHTML=str;   
		
		
		break;

	case 'specials':
		console.log(JSON.stringify(json));

		if(json.length == 0)
		{
			str = '<div style="text-align:center;">No Events Found</div>';
		}
		else
		{
			str += '<div class="whats_new_slider owl-carousel owl-theme">';

			for (var i=0;i<json.length;i++ )
			{
			
			    console.log('Video:'+json[i].AdVideoURL);
			    if(json[i].AdVideoURL=='' || json[i].AdVideoURL==null  || json[i].AdVideoURL=='null')
				{
				    str += '<div class="wn_offer">';
					str += '<a href="#">';
					str += '<img src='+SERVER+json[i].AdImgURL+' alt="" class="img-responsive" />';
				    str += '</a>';
				    str += '</div>';
				}
				else
				{
					 console.log('Img:'+json[i].AdVideoURL);
					//str += '<div class="whats_new_slider owl-carousel owl-theme">';
					//str += '<div class="specials7"><div><h3>'+json[i].AdName+'</h3><p>'+json[i].AdDesc+'</p>';
					str += '<video width="320" height="240" controls="controls" poster='+SERVER+json[i].AdImgURL+' onClick=this.play();><source src='+SERVER+json[i].AdVideoURL+'  this.play();/></video>';
					//str += '</div></div>';
					//str += '</div>';
					
				}
			}

			str += '</div>';
		}
        
		document.getElementById("whatsnew_div").innerHTML=str;
		
		var _owl2 = $(".whats_new_slider");
		setTimeout(function(){
 			_owl2.owlCarousel({
				items:1,
						loop:false,
						margin:0,
						//merge:true,
						nav:false,
						dots:false,
						autoplay:true,
						autoWidth:false,
						navText: ['<','>']
			});
		}, 100);

		
		break;
	case 'coupons':
		str = '';


        if (json.data.length == 0) 
		 {
                str = '<span style="text-align:center;margin: 0 auto;display: block;">No Coupons Found</span>';
         }
		else
		 {
		   for(var i=0;i<json.data.length;i++)
		{
            str += '<div class="px-3 pb-3">';

            if(json.data[i].couponstatus == 'Active')
            {
                str += '<div class="coupon active">';
            }
            else
            {
                str += '<div class="coupon inactive">';
            }


			str += '<div class="d-flex align-items-center justify-content-between">';
			str += '<div class="w-80">';
			str += '<h2 class="coupon_code">'+json.data[i].couponcode+'</h2>';
			str += '<h3 class="validity">Valid Till : <span>'+json.data[i].validtill+'</span></h3>';
			str += '<h3 class="coupon_no">Coupon Detail : '+json.data[i].offername+'</h3>';
			str += '<a href="#tnc">T&amp;C* </a>';
			str += '<div class="coupon_state"></div>';
		    str += '</div>';
			str += '<div class="w-20">';
			str += '<div class="qr_code"><img src="https://chart.googleapis.com/chart?chs=80x80&cht=qr&chl='+json.data[i].couponcode+'&choe=UTF-8" alt="" /></div>';
			str += '</div>';
			str += '</div>';

            str += '</div>';
			str += '</div>';
		
		}
		}
		//str += '</ul>';
		document.getElementById("rewards").innerHTML=str;
		break;

	case 'inbox':
		console.log('json'+JSON.stringify(json));
		
		str +='<ul id="MsgUl" class="messages">';
		for(var i=0;i<json.length;i++ )
		{

			str += '<li>';
			str += '<div class="msg_img">';
			str += '<img src="assets/images/open.png" alt="" class="msgImg"/>';
			str += '</div>';
			str += '<div class="MsgBlk">';
			str += '<div class="MsgBdr">';
			str += '<span class="msghdr">DM-VIRGO</span>';
			str += '<span class="msgTime">'+json[i].msgtime+'</span>';
			str += '<span class="msgDate">' + json[i].msgdate + '</span>';
			str += '</div>';
			str += '<div class="msg_body">';
			str += '<span class="msgTxt">'+json[i].msg+'</span>';
			str += '</div>';
			str += '</div>';
			str += '</li>';
	
		}
		
		str +='</ul>';
		document.getElementById("message").innerHTML=str;
		break;


		case 'centre':
   //console.log('inside centre');
      console.log('json'+JSON.stringify(json));
  
  str += '<ul data-role="listview" data-autodividers="false" data-filter="true" data-inset="false" class="ul_locator_sub" id="ul_locator_sub">';
  for (var i=0;i<json.length;i++ )
  {
   var storecontact=json[i].storephone;
   var custcare=json[i].CustomerCare;
   if(storecontact==null)
    storecontact='';
   if(custcare==null)
    custcare='';

   if(json[i].storename.indexOf('Email Admin')==0 || json[i].storename.indexOf('ONLINE')==0 || json[i].storename.indexOf('online')==0 || json[i].storename.indexOf('Paytm App Store')==0 || json[i].storename.indexOf('ShortCode')==0 || json[i].storename.indexOf('Mobile App')==0 || json[i].storename.indexOf('Paytm Store')==0|| json[i].storename.indexOf('MicroSite')==0|| json[i].storename.indexOf('test')==0)
				continue;
   
  
      str += '<li data-icon="false" class="storeList"><h3 class="storeName">'+json[i].storename+','+json[i].storelocation+'</h3><span class="callout1">'+json[i].storeaddress+'</span><br/><br/>';
   if(storecontact!='')
   {
   str += '<a href="tel:'+storecontact+'" data-role="button" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external" style="background: #ffffff; border: #ffffff; color: #999;font-weight: normal;  font-size: 13px;">'+storecontact+'</a>';
   }
  if(custcare!='')
   {
   str +='<a href="tel:'+custcare+'" data-role="button" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external" style="background: #ffffff; border: #ffffff; color: #999;font-weight: normal;  font-size: 13px;">'+json[i].CustomerCare+'</a>';
   }

  //str +='<div  id=map-canvas'+i+' style="height:250px;width:95%;margin: 0 auto;">';

  str +='</li>';



  
  
  //alert(str);
  //str += '<li data-icon="false" style="background:#eeeeee;margin-top: 5px;margin-bottom: 5px;">'+json[i].storename+','+json[i].storelocation+'<br/><span class="callout1">'+json[i].storeaddress+'</span><br/><br/><a href="tel:'+json[i].storephone+'\'" data-role="button" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external">'+json[i].storephone+'</a><a href="javascript:showTabContent_Map(\''+json[i].storeaddress+'\');" data-role="button" class="ui-btn ui-icon-location ui-btn-icon-left" rel="external">Map</a></li>';
        //str += '<li data-icon="false"><span class="callout-date1">'+json[i].storename+', '+json[i].storelocation+'</span><br/><span class="callout1">'+json[i].storeaddress+'</span><br/><div class="ui-grid-a"><div class="ui-block-a"><a href="tel:'+json[i].storephone+'" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external">'+json[i].storephone+'</a></div><div class="ui-block-b"><a href="#" class="ui-btn ui-icon-location ui-btn-icon-left" rel="external">Map</a></div></div></li>';
  //str += '<div class="center-box"><div class="callout-date1">'+json[i].storename+', '+json[i].storelocation+'</div><div class="callout1">'+json[i].storeaddress+'<br/><a href="tel:'+json[i].storephone+'" class="ui-btn ui-icon-phone ui-btn-icon-left" data-role="button" rel="external">'+json[i].storephone+'</a></div></div>';
  
  }
  //str +='<div  id=map-canvas'+i+' style="height:250px;width:250px;">';
  str += '</ul>';
  
  document.getElementById("stor").innerHTML=str;

	  /*for (var i=0;i<json.length;i++ )
	  {
			if(json[i].storename.indexOf('Email Admin')==0 || json[i].storename.indexOf('ONLINE')==0 || json[i].storename.indexOf('online')==0 || json[i].storename.indexOf('Paytm App Store')==0 || json[i].storename.indexOf('ShortCode')==0 || json[i].storename.indexOf('Mobile App')==0 || json[i].storename.indexOf('Paytm Store')==0|| json[i].storename.indexOf('MicroSite')==0|| json[i].storename.indexOf('test')==0)
			continue;

			var lat1  = checkforundefined(json[i].storelatitude);
			var long1 = checkforundefined(json[i].storelongitude);
			var add   = lat1+','+long1;
	   

		   showTabContent_Map_latlong(lat1,long1,i);
	  }*/
	   
	 $('#ul_locator_sub').listview();

  break;
		
	case 'defstore':
		//console.log('inside default store'+user.def_store);
	     console.log('json'+JSON.stringify(json));
		//str +='<div  style="text-align:center;width:100%;"><img src="img/c-logo.png" width="137" height="44" /></div>';
		str += '<h2 align="center" style=\"color:#ff0000;font-size:14px;font-weight:normal;\">Default Store : '+user.def_store+'</h2>';
		str += '<a href="#citylist" data-role="button" data-theme="reset" class="ios">View All Stores</a>';
		str += '<h3 align="center" style=\"color:#ff0000;font-size:14px;font-weight:normal;\">Other Stores in your city</h3><h3></h3>';
		//$("#" + pageID + " .ui-content").html(str);
		$("#" + pageID + " .ui-content").html(str+$.render[pageID](json));
		$("a[data-role='button']").button();
		break;
	case 'citylist':
		//console.log('inside citylist');
	    console.log('json'+JSON.stringify(json));
		
        str += '<ul data-role="listview" data-autodividers="false" data-filter="true" data-inset="false" class="ul_locator" id="ul_locator">';
		for (var i=0;i<json.data.length;i++ )
		{
			if(json.data[i].cityid!='9')
			{
				cityidarr[i]=json.data[i].cityid;
				cityarr[i]=json.data[i].cityname;
				//str +='<a href="javascript:getCityId('+json.data[i].cityid+');" data-role="button"  data-theme="reset" class="ios">'+json.data[i].cityname+'</a>'
				str += '<li data-icon="false"><a href="javascript:getCityId('+json.data[i].cityid+');" class="ui-btn ui-icon-location ui-btn-icon-left ui-shadow ui-corner-all">'+json.data[i].cityname+'</a></li>';
			}
		}
		str += '</ul>';
		document.getElementById("stor").innerHTML=str;
		  
        $('#ul_locator').listview();
		//$("a[data-role='button']").button();
		break;

	case 'merchandise':
	  console.log(JSON.stringify(json));
	  
	  /*str += '<h3>Merchandise</h3>';


	  for (var i=0;i<json.length;i++ )
	  {
			
	   str += '<div><div><h3>'+json[i].AdName+'</h3><p>'+json[i].AdDesc+'</p><video width="320" height="240"  poster='+json[i].AdImgURL+' onClick=this.play();><source src='+SERVER+json[i].AdVideoURL+'  this.play();/></video><br/><hr/> <a href="#" data-role="button" id="forgot_button">Order</a></div></div>';

	  }


	  $("#" + pageID + " .ui-content").html(str);*/
	  break;
case 'categorylist':
   console.log(JSON.stringify(json));

  //str = str +'<div class="subheading_t" style="font-size:14px;"><div style="color:#555555;">Welcome '+user.firstname+'</div><div class="submenu_button_right" ><img src="img/coupons.png" style="height:26px;width:auto;"></div></div>';
  str +='<img src="img/rstore.png" style="width:97%;height:auto;"><br/>';
  //str +='<div id="rss_desc1"><ul>';
 // str +='<ul>';
  // for (var i=0;i<json.length;i++ )
  //{
  //str +='<li><a href="javascript:getCatDetails('+json[i].Catid+');" data-theme="reset" class="ios" style="background: url(../img/shop_categoryList.png);height: 78px;color:#000;">'+json[i].CatName+'</a></li>';
  //str +='<li class="s_cn"><a href="javascript:getCatDetails('+json[i].Catid+');" style="background-image: url(../img/s_cn.png);color:#000;text-align:center;">'+json[i].CatName+'</a></li>';
  //}
 // str +='</ul>';
  //str +='</ul></div>';
  $("#" + pageID + " .ui-content").html(str);

  $("a[data-role='button']").button();
   break;
	  case 'rewardsmain':
		
		 $("#" + pageID + " .ui-content").html(str);
		break;
	  case 'viewcart':
		
		//str += '<div class="cartinfo">You have '+json.cartdata.length+' items in your cart</div>';
		
		str += '<ul data-role="listview" data-autodividers="false" data-filter="true" data-inset="false" class="ul_locator_sub" id="cartlist">';
        for (var i=0;i<json.cartdata.length;i++ )
		{
		
		
		str += '<li data-icon="delete" data-iconpos="right" style="background:#eeeeee;margin-top: 5px;margin-bottom: 5px;line-height:90px;"><img src='+json.cartdata[i].url+' style="width: 100px;height: 100px;padding: 5px;"/>'+json.cartdata[i].BrandName+' Offer,Cost:Rs. '+json.cartdata[i].BrandValue+'<br/><span class="callout1">'+json.cartdata[i].BrandDescription+'</span></li>';
        																																					   
																																							   
		
		//	str +='<li><div class="li-img"><img src='+json.cartdata[i].url+' /></div><div class="li-text"><h4 class="li-head">'+json.cartdata[i].BrandName+' Offer,Cost:Rs. '+json.cartdata[i].BrandValue+'</h4><br/><p class="li-sub">'+json.cartdata[i].BrandDescription+'</p></div></li>';
            
		}
		str += '</ul>';
		
		str += '<br clear="all" /><a href="#" data-role="button" id="view_cart" class="btnclass">Redeem</a>';
		console.log("str herrrrrr"+str);
		oth.innerHTML=str; oth.style.display = 'block';  
		 $('#cartlist').listview();
		 $('#view_cart').button();
		break;

	case 'rewardstore':
    
  
       
	  jsonary = json.data;
  
  // str += '<div class="ui-content rsbanner"><span class="vouchers"><a href=\'javascript:addincart('+i+');\' id='+i+'><img src="img/get_voucher.png" class="vouchers" id="vouchers"'+i+'/></a></span><img src="img/featured.png" class="rs_b1" /></div>';
          
  for (var i=0;i<json.data.length;i++ )
  {

   if(json.data[i].BrandDescription=='Featured')
   {
   
   str += '<div class="ui-content rsbanner"><a href=\'javascript:addincart('+i+');\' id='+i+'><div class="cartbx">Add to Cart</div></a><br/><img src='+json.data[i].url+' class="rs_b1" /></div>';
   }
   else
   {

   
   //str += '<div class="ui-content rs_msg"><a href=\'javascript:addincart('+i+');\' id='+i+'><div class="cartbx">Add to Cart</div></a><br/><img src="http://portico.mloyalengage.com/'+json.data[i].brand_logo+'" class="rs_b2"></div>';
   str += '<div class="ui-content rs_msg"><img src="" class="rs_b2"><div class="amount_date"> <b>Rs. '+json.data[i].gift_voucher_value+'</b><br/>Valid Thru : '+json.data[i].end_date+'</div></div>';
   
   str += '<div class="ui-grid-a msg_cont"><div><img src="'+SERVER1+json.data[i].brand_logo+'" class="img_blogo1"></div><div class="ui-block-a wid20"></div>';
   

   str += '<div class="ui-block-b wid80"><div class="ui-grid-a"><div class="ui-block-a wid60"><span class="headergjw">'+json.data[i].brand_name+' </span><br/>';
   str += '<span class="sub1header">Rewards Manager </span><br/><span class="sub2header">Friday at 10:40 am </span><br/></div>';
   str += '<div class="ui-block-b wid40"><div class="flt_rght">';
   //str += '<a href="javascript:likeMessage_rewards(\''+json.data[i].brand_id+'\',\''+i+'\');" data-role="button"><span id="likingrewards'+i+'"><img src="img/msg_up.png"></span></a>';
   str += '<span><a href="javascript:shareMessage(\''+json.data[i].brand_description+'\');" data-role="button"><img src="img/msg_share.png"></a></span>';
   str += '</div></div></div><hr class="style-one">';
   str += '<div class="ui-grid-solo"><div class="ui-block"><span class="paratxt">'+json.data[i].brand_description;
   str += '</span></div></div></div></div>';
   str += '<div class="ui-grid-solo msg_like_comt"><div class="rs_lk_cmt">';
 //  str += '<span class="msg_lke"><a href=\'javascript:addincart('+i+');\' id='+i+'><img src="img/get_voucher.png" id="vouchers"'+i+'/></a></div></div></div></div><br/><br/>';
   str += '<span class="msg_lke"><a href=\'javascript:getVoucher('+json.data[i].gv_id+','+json.data[i].gift_voucher_value+');\' id='+i+'><img src="img/get_voucher.png" id="vouchers"'+i+'/></a></div></div></div></div><br/><br/>';
   }

 
  }
  //str +='Coming Soon';
  
   oth.innerHTML=str; oth.style.display = 'block';  
    break;
 case 'reward-cat':
   str +='<ul data-role="listview" id="ul_reward-cat" class="ul_shop" data-icon="false" data-iconpos="none">';
   for(var i=0;i<json.data.length;i++)
  {
            str +='<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showcatbrands('+json.data[i].catid+');" class="lt_shop_a"><h2>'+json.data[i].catname+'</h2></a></li>';
  }
 str +='</ul>';
 //str +='Coming Soon';
    $("#" + pageID + " .ui-content").html(str);
    $('#ul_reward-cat').listview();
   break;
   case 'reward-brand':
   for (var i=0;i<json.data.length;i++ )
  {

   if(json.data[i].BrandDescription=='Featured')
   {
   
   str += '<div class="ui-content rsbanner"><a href=\'javascript:addincart('+i+');\' id='+i+'><div class="cartbx">Add to Cart</div></a><br/><img src='+json.data[i].url+' class="rs_b1" /></div>';
   }
   else
   {

   
   //str += '<div class="ui-content rs_msg"><a href=\'javascript:addincart('+i+');\' id='+i+'><div class="cartbx">Add to Cart</div></a><br/><img src="http://portico.mloyalengage.com/'+json.data[i].brand_logo+'" class="rs_b2"></div>';
   str += '<div class="ui-content rs_msg"><img src="" class="rs_b2"><span class="amount_date"> <b>Rs. '+json.data[i].gift_voucher_value+'</b><br/>Valid Thru : '+json.data[i].end_date+'</span></div>';
   
   str += '<div class="ui-grid-a msg_cont"><div><img src="'+SERVER1+json.data[i].brand_logo+'" class="img_blogo1"></div><div class="ui-block-a wid20"></div>';
   

   str += '<div class="ui-block-b wid80"><div class="ui-grid-a"><div class="ui-block-a wid60"><span class="headergjw">'+json.data[i].brand_name+' </span><br/>';
   str += '<span class="sub1header">Rewards Manager </span><br/><span class="sub2header">Friday at 10:40 am </span><br/></div>';
   str += '<div class="ui-block-b wid40"><div class="flt_rght">';
  // str += '<a href="javascript:likeMessage_rewards(\''+json.data[i].brand_id+'\',\''+i+'\');" data-role="button"><span id="likingrewards'+i+'"><img src="img/msg_up.png"></span></a>';
   str += '<span><a href="javascript:shareMessage(\''+json.data[i].brand_description+'\');" data-role="button"><img src="img/msg_share.png"></a></span>';
   str += '</div></div></div><hr class="style-one">';
   str += '<div class="ui-grid-solo"><div class="ui-block"><span class="paratxt">'+json.data[i].brand_description;
   str += '</span></div></div></div></div>';
   str += '<div class="ui-grid-solo msg_like_comt"><div class="rs_lk_cmt">';
   //str += '<span class="msg_lke"><a href=\'javascript:addincart('+i+');\' id='+i+'><img src="img/get_voucher.png" id="vouchers"'+i+'/></a></div></div></div></div><br/><br/>';
   str += '<span class="msg_lke"><a href=\'javascript:getVoucher('+json.data[i].gv_id+','+json.data[i].gift_voucher_value+');\' id='+i+'><img src="img/get_voucher.png" id="vouchers"'+i+'/></a></div></div></div></div><br/><br/>';
   }

 
  }
            $("#" + pageID + " .ui-content").html(str);
   break;
			
    case 'socialwall_youtube':
		
		//str += '<a href=\"javascript:loadDataGal(\''+gallery_cat+'\');\" data-role=\"button\" data-theme=\"reset\" class=\"ios\"><span><img src=\"img/cheer/refresh.png\" /></span></a></div>';
		
		for (var i=0;i<json.length;i++ )
		{
			//console.log(JSON.stringify(json[i]));
        if(json[i].link!='')
			{

			//console.log(json[i].link[1].href);
			//console.log(json[i].link[1].href.indexOf("videos/")+7);

			//console.log(json[i].link[1].href.substring(json[i].link[1].href.indexOf("videos/")+7,json[i].link[1].href.indexOf("/related")));
			

			 str1="http://www.youtube.com/embed/"+json[i].link[1].href.substring(json[i].link[1].href.indexOf("videos/")+7,json[i].link[1].href.indexOf("/related"));
			 //console.log(str1);
			
			
				
			   	str += '<div id="rss_desc"><div><span style=\"color:#F39E34;font-size:12px;font-weight:bold;\">'+json[i].title.t+'</span><HR>';
				
				
					str +='<iframe width="95%" height="240" src='+str1+' frameborder="0" allowfullscreen=""></iframe>';
					str +='<br/>'+json[i].content.t;
					
				 
				  str += '</div></div>';
				
				
			}
		}

		
        document.getElementById("contensocial").innerHTML=str;
		break;
		case 'socialwall_facebook':
		for (var i = 0; i < json.data.length; i++)
            {

                if (json.data[i].link != '')
                {
                    var fbid=json.data[i].id;
                    
                    
                    
                    var first_part=fbid.substr(0,fbid.indexOf('_'));
                     
                     var sec_part=fbid.substr(fbid.indexOf('_')+1,fbid.length);
                    
                    
                    var linkfbpost='https://www.facebook.com/'+first_part+'/posts/'+sec_part;
                   
                    
                    
				
				var msg=json.data[i].message;
				if(msg=='' || msg=='undefined' || msg==null || msg=='null')
					{
						msg='';
					}
		
				var lk='';
				if(json.data[i].likes)
				{
					lk= json.data[i].likes.data.length;
				}
				else
				{
					lk= '0';
				}
				

				str+='<div class="ui-grid-solo">';
				str+='<div class="ui-block">';
				str+='<ul class="facebookFeed">';
				str+='<li>';
				str+='<div class="f_feedCon"><div class="f_feed_hdr">';
				//str+='<div class="f_hdr_img"><img src="images/social/profile.jpg" id="f_profile" alt="profile"></div>';
				//<!--<div class="f_hdr_time" id="f_hdr_time">'+jQuery.timeago(json.data[i].updated_time)+'</div>-->
				//str+='<div class="f_hdr_txt"><span class="f_hdr_title" id="f_hdr_title">'+json.data[i].from.name+'</span><br/><span class="f_hdr_desc" id="f_hdr_desc">'+json.data[i].from.category+'</span></div>';
				if(typeof json.data[i].picture !== "undefined" && json.data[i].picture != null)
					{
					str+='<div class="f_feed_bdy"><img src='+json.data[i].picture+' id="f_banner" alt="banner"></div>';
					}
				str+='<div class="f_feed_bdy"><p id="fb_msg">'+msg+'</p></div>';
				str+='<div class=f_feed_ftr><hr class=hori /><div class=f_bdy_lcs><span><img src=img/like.jpg onClick=javascript:openBrowser(\''+linkfbpost+'\');>Like</span><span><img src=img/comment.jpg onClick=javascript:openBrowser(\''+linkfbpost+'\');>Comment</span><span><img src=img/share.jpg onClick=javascript:openBrowser(\''+linkfbpost+'\');>Share</span></div>';
				str+='</div>';
				str+='</li>';
				str+='</ul>';
				str+='</div>';
				str+='</div>';

                }
            }

			document.getElementById("FACEBOOK").innerHTML = str;
            
            break;

		case 'socialwall_twitter':
		for (var i = 0; i < json.length; i++)
            {

               


					str+='<ul class="facebookFeed">';
					str+='<li>';
					str+='<div class="y_feedCon">';
					str+='<div class="ui-grid-a">';
					str+='<div class="ui-block-a" style="width:25%;"><img src="img/twitter.png" alt="twitter" class="y_video"></div>';
					str+='<div class="ui-block-b" style="width:75%;padding-left:10px;">';
					str+='<div class="y_hdr_title">'+json[i].user.name+'</div>';
					//str+='<div class="y_hdr_desc">'+json[i].user.description+'</div>';
					try{
					str+='<div class="f_feed_bdy"><img src='+json[i].entities.media[0].media_url+' id="f_banner" alt="banner" onClick=javascript:openBrowser(\''+json[i].entities.urls.url+'\');></div>';
					}
					catch(err){}
					str+='<div class="y_hdr_desc">'+json[i].text+'</div>';
					//str+='<div class=f_bdy_likes>'+json[i].user.followers_count+' Followers</div>';
					str+='</div></div></div></li></ul>';

                
            }

            document.getElementById("TWITTER").innerHTML = str;

            break;

		case 'socialwall_pinterest':
		console.log(JSON.stringify(json));
		for (var i=0;i<json.length;i++ )
		{
				console.log(json[i].name);
				str+='<ul class="facebookFeed">';
				str+='<li>';
				str+='<div class="f_feedCon"><div class="f_feed_hdr">';
				str+='<div class="f_hdr_txt"><span class="f_hdr_title" id="f_hdr_title">'+brandname+'</span><br/><span class="f_hdr_desc" id="f_hdr_desc">'+json[i].board.name+'<br>'+json[i].desc+'</span></div>';
				str +='<div class="ui-grid-solo"><div class="ui-block"><img src="'+json[i].src+'" ></div></div>';
				str+='</div>';
				str+='</li>';
				str+='</ul>';
		}
        
        
        document.getElementById("PINTEREST").innerHTML=str;
		break;
		case 'socialwall_tumblr':
		console.log(JSON.stringify(json));
		for (var i=0;i<json.length;i++ )
		{
        
         if(json[i].link!='')
			{
		
				str += '<div id="rss_desc"><div><img src="img/ddsmall.jpg"><div style=\"margin: -50px 5px 20px 60px;\"><span style=\"color:#F39E34;font-size:12px;font-weight:bold;\">'+json[i].title+'</span><br/><span style="font-size:11px;color:#999999;"></span></div><HR><div style=\"margin: 10px 10px 10px -20px;\" class="content-responsive">'+json[i].description+'</div><HR><a href=\"javascript:playvideo(\''+json[i].link+'\');\" data-role=\"button\" data-theme=\"reset\" class=\"ios\"><div class=\"see-all\">See All</div></a></div></div>';
				
		
			}
		}
        
        document.getElementById("contensocial").innerHTML=str;
		break;

		case 'socialwall_instagram':

		var json = JSON.parse(json)
		var length = JSON.stringify(json.images.length);

		//console.log('instagram: '+JSON.stringify(json));

		for (var i = 0; i < length; i++)
        {
				str+='<ul class="facebookFeed">';
				str+='<li>';
				str+='<div class="f_feedCon"><div class="f_feed_hdr">';
				//str+='<div class="f_hdr_img"><img src="images/social/profile.jpg" id="f_profile" alt="profile"></div>';
				str+='<div class="f_hdr_txt"><span class="f_hdr_title" id="f_hdr_title">'+json.full_name+'</span><br/>';
				//str+='<span class="f_hdr_desc" id="f_hdr_desc">'+json.images[i].node.edge_media_to_caption.edges[0].node.text+'</span></div>';
				str +='<img style="border: 1px solid #cccccc;text-align: center;width: 98%;height: auto;" src="'+json.images[i].node.display_url+'" />';
				str+='<div class=f_bdy_likes>'+json.images[i].node.edge_liked_by.count+' Likes</div>';
				str+='</div>';
				str+='</li>';
				str+='</ul>';

		}

        document.getElementById("INSTAGRAM").innerHTML = str;

        break;
		
		case 'popuppage4':

       
		for(var i=0;i<json.data.length;i++)
		
		{

		str += '<ul data-role="listview" data-inset="true" class="listPpup ui-listview ui-listview-inset ui-corner-all ui-shadow" data-icon="false">';
		str += '<li class="ui-li-has-thumb ui-first-child ui-last-child"><a href="#" class="ui-btn"><img src="img/rstar.jpg"/>';
		str += '<h2>'+json.data[i].offername+'</h2><p>Coupon Code : '+json.data[i].couponcode+'</p></a>';
		str += '</li></ul>';
               
		
		}
		 $("#" + pageID + " .ui-content").html(str);
		break;
		


	}
}

function gotopoints()
	{
		$("#message").css('display', 'none');
		$("#membership2").css('display', 'none');
		$("#rewards").css('display', 'none');
		$("#points").css('display', 'block');

		//$('a[href="#monthly"]').trigger("click");	
		//$("#sidebar").panel("close")
		$.mobile.changePage( "#my_membership", { transition: "none"} );
		showTabContent('loyaltynew', 'points_history_json.asp');
		//$("#contest_tabs").tabs( "option", "active", 2 );

	
		document.getElementById("tab1").classList.remove("is-active");
		document.getElementById("tab2").classList.remove("is-active");
		document.getElementById("tab3").classList.add("is-active");
		document.getElementById("tab4").classList.remove("is-active");
	}
	function gotorewards()
	{

		$("#message").css('display', 'none');
		$("#membership2").css('display', 'none');
		$("#rewards").css('display', 'block');
		$("#points").css('display', 'none');

		//$('a[href="#monthly"]').trigger("click");	
		//$("#sidebar").panel("close")
		$.mobile.changePage( "#my_membership", { transition: "none"} );
		showTabContent('coupons', 'cpns_history_json.asp');
		//$("#contest_tabs").tabs( "option", "active", 3 );

		document.getElementById("tab1").classList.remove("is-active");
		document.getElementById("tab2").classList.remove("is-active");
		document.getElementById("tab3").classList.remove("is-active");
		document.getElementById("tab4").classList.add("is-active");
	}
	function showRewards_latest()
	{
		/*var url_new = 'https://virgolaminates.mloyalretail.com/rewardstore/default.asp?uid='+user.uid_virgolaminates;
		var ref_new = cordova.InAppBrowser.open(url_new, '_blank', 'location=yes');
	
		ref_new.addEventListener('exit', function (event) {
				 
				$('#username_new').val(localStorage.getItem("usernamevirgolaminates"));
				var pass = localStorage.getItem("passwordvirgolaminates");
	
				if(pass.length>=4)
				{
							var i=4;
							while(i>0)
							{
								$('#codeBox'+i).val(parseInt(pass%10));
								i--;
								pass = parseInt(pass/10);
													
							}
			   }
	
				setTimeout( function() {
					  authenticate_new();
				}, 1000);  //1 seconds
		});*/
	
		toast('coming soon..');
	}
	
function showScan_new_check()
{          
	     stopVideos();
	     //$.mobile.changePage( "#scanpage", {transition: "none"} );
	     cordova.plugins.barcodeScanner.scan(
			   function (result) {

					//$.mobile.changePage( "#homepage", {transition: "none"} );

					if(result.cancelled == true)
				    {
						//toast('Scanning canceled');
						$.mobile.changePage( "#homepage", {transition: "none"} );
				    }
					else
				    {
						var bcode = result.text;
						var bcode1 = bcode.trim();

						submit_scanResult_check(bcode1);
						//earn_Scanpage(bcode1);
                       
					}

			  },
			  function (error) {
				  alert("Scanning failed: " + error);
			  },
			  {
				  preferFrontCamera : false, // iOS and Android
				  showFlipCameraButton : true, // iOS and Android
				  showTorchButton : true, // iOS and Android
				  torchOn: false, // Android, launch with the torch switched on (if available)
				  saveHistory: true, // Android, save scan history (default false)
				  prompt : "Place the code inside the scan area", // Android
				  resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
				  formats : "QR_CODE,PDF_417,CODABAR,DATA_MATRIX,RSS14,CODE_39,CODE_93,CODE_128", // default:
				  orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
				  disableAnimations : true, // iOS
				  disableSuccessBeep: false // iOS and Android
			  }
		   );
}

function submit_scanResult_check(cpncode)
{
	 $.ajax({
		   url: SERVERCPACTION,
		   type: 'POST',
		   timeout: 50000,
		   dataType: 'json',
		   headers: {
			"Content-Type": "application/json"
		   },
		   data:JSON.stringify({
					"mobileno": user.mobile,
					"type": "0",
					"cpncode": cpncode
			}),
		   complete: function(xhr, textStatus) {
		   //called when complete
			},
			success: function(data, textStatus, xhr) {

				 console.log('JSONDATA:'+JSON.stringify(data));

				 if(data.success=='1')
				 {
					  if(data.data.GET_PROMOTIONAL_COUPON_VALIDATION_INFOResult.Success === true)
					  {
						   burnCoupon(cpncode);
					  }
					  else
					  {
						  toast_scan_blue(data.data.GET_PROMOTIONAL_COUPON_VALIDATION_INFOResult.message);
					  }
				 }
				 else
				 {
					 toast_scan_blue('No suceess response found..');
					 $.mobile.changePage( "#homepage", {transition: "none"} );
				 }
		   
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
			}
		  });
}

function burnCoupon(cpncode)
{

 $.ajax({
   url: SERVERCPACTION,
   type: 'POST',
   timeout: 50000,
   dataType: 'json',
   headers: {
    "Content-Type": "application/json"
  },
   data:JSON.stringify({
			"mobileno": user.mobile,
			"type": "1",
			"cpncode": cpncode
	}),
   complete: function(xhr, textStatus) {
   //called when complete
    },
    success: function(data, textStatus, xhr) {

		 console.log('JSONDATA'+JSON.stringify(data));
        
		 if(data.success=='1')
		 {
			  if(data.data.GET_PROMOTIONAL_COUPON_VALIDATION_INFOResult.Success === true)
			  {
				    earn_Scanpage(cpncode);
			  }
			  else
			  {
				    toast_scan_blue(data.data.GET_PROMOTIONAL_COUPON_VALIDATION_INFOResult.message);
					$.mobile.changePage( "#homepage", {transition: "none"} );
			  }
		 }
		 else
		 {
			 toast_scan_blue('No response found..');
			 $.mobile.changePage( "#homepage", {transition: "none"} );
		 }
		 
   
    },
    error: function(xhr, textStatus, errorThrown) {
		toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });
 
}

function earn_Scanpage(bcode)
{

	$.ajax({
		url: SERVER2+'issue_qr_item_points.asp',
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {'apiuid': 'MLOYALAPI','apipswd':'Ml0yalAP!2o21','mobileno': user.mobile,'qrcode': bcode,'scode': user.store_code_virgolaminates },
		complete: function(xhr, textStatus) {
	   //called when complete
		}, success: function(data, textStatus, xhr) {

		//console.log(JSON.stringify(data));


			if(data.error.length>=1)
			{
				    toast_scan_blue(data.error);
			}
			else
			{
				toast_scan_black(data.data);

					//$.mobile.changePage( "#homepage", { transition: "none"} );
					/*document.getElementById("filter_panel_div").innerHTML= data.data;
					$.mobile.changePage( "#homepage", { transition: "none"} );
					$(".overlay").fadeIn("fast");
					$("#filter_panel").slideToggle("fast");*/

					$('#username_new').val(localStorage.getItem("usernamevirgolaminates"));
					var pass = localStorage.getItem("passwordvirgolaminates");
		
					if(pass.length>=4)
					{
								var i=4;
								while(i>0)
								{
									$('#codeBox'+i).val(parseInt(pass%10));
									i--;
									pass = parseInt(pass/10);
														
								}
				   }
		
					setTimeout( function() {
						  authenticate_new();
					}, 1000);  //1 seconds
		   
			}
		},
		error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
}

function logoutApp()
{
	localStorage.removeItem("usernamevirgolaminates");
	localStorage.removeItem("passwordvirgolaminates");
	localStorage.removeItem("profiledone_virgolaminates");

	localStorage.removeItem("usernamemloyal_virgolam");
	localStorage.removeItem("usermobilemloyal_virgolam");
	localStorage.removeItem("cattype_virgolam");
	
    user.mobile='';

	$('#codeBox1').val('');
	$('#codeBox2').val('');
	$('#codeBox3').val('');
	$('#codeBox4').val('');

	$.mobile.changePage("#selectcategorypage");
}

function updateProfile()
{
		var firstname = $('#firstName_update').val();
		var lastname = $('#lastName_update').val();
		var mobile = user.mobile;
		var retailShopName = '';
		//var retailShopName = $('#retailShopName_update').val();
		var pincode =$('#pincode_update').val();
		var city =$('#city_update').val();
		var state =$('#state_update').val();
		var address =$('#update_address').val();



		var mm ='';
		var dd ='';
		var dd1 ='';
		var yyyy = '';
		var yyyy1 = '';
		var dd2='';
		var mm2='';
		var dd3='';
		var yyyy2='';
		var yyyy3='';
		
		var birthday =$('#update_dob').val();
		var marriage2 =$('#update_doa').val();



		var selfimg = localStorage.getItem('file_pphoto');
		var shopimg_self = localStorage.getItem('filenmshop');
		var docimg = localStorage.getItem('file_pdoc');


        /* for birthday date */

		if(birthday!='')
		{
				var dob = birthday.split('-');
				mm = dob.length == 3 ? dob[1] : '';
				dd = dob.length == 3 ? dob[0] : '';
				dd1 = dob.length == 3 ? dob[0] : '';

				yyyy = dob.length == 3 ? dob[2] : '';
				yyyy1 = dob.length == 3 ? dob[2] : '';

		}
		if(dd.length==4)
		{
			yyyy=dd1;
			dd=yyyy1;
		}

		/* for marraiege date */

		if(marriage2!='')
		{
				var dom = marriage2.split('-');
				mm2 = dom.length == 3 ? dom[1] : '';
				dd2 = dom.length == 3 ? dom[0] : '';
				dd3 = dom.length == 3 ? dom[0] : '';

				yyyy2 = dom.length == 3 ? dom[2] : '';
				yyyy3 = dom.length == 3 ? dom[2] : '';

		}
		if(dd2.length==4)
		{
			yyyy2=dd3;
			dd2=yyyy3;
		}
		

		// var vtype = $('#update_vtype').val();

		// var vpa_txt1 = $('#update_vpa1_txt').val();
		// var vpa_domain1 = $('#update_vpa1_domain').val();
		// var vpa_txt2 = $('#update_vpa2_txt').val();
		// var vpa_domain2 = $('#update_vpa2_domain').val();

		// var card1 = $('#update_card1').val();
		// var card2 = $('#update_card2').val();

		// var vpamain1 = vpa_txt1+vpa_domain1;
		// var vpamain2 = vpa_txt2+vpa_domain2;

		// console.log(vpamain1);
		// console.log(vpamain2);
        
		
		
    if(firstname.trim()=='')
	{
		toast('Please enter mandatory fields.');
	}
	/*else if(shopimg_self=='' || shopimg_self==undefined || shopimg_self==null)
	{
		toast('Please check self photo');
	}*/
	// else if(vtype=='' || vtype==undefined || vtype==null)
	// {
	// 	toast('Please check Vehicle Type');
	// }
	// else if(vpa_txt1.trim()=='' || vpa_domain1=='' || vpa_domain1==undefined || vpa_domain1==null)
	// {
	// 	toast('Please check VPA details');
	// }
	// else if(vpa_txt2.trim()=='' || vpa_domain2=='' || vpa_domain2==undefined || vpa_domain2==null)
	// {
	// 	toast('Please check VPA details');
	// }
	// else if(card1.trim()=='' || card2.trim()=='')
	// {
	// 	toast('Please enter card details.');
	// }
	else
	{
    
	 $.ajax({
			url: SERVER+'mloyalprofileupdate.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				'FirstName': firstname,
				'LastName': lastname,
				'deviceid': reg_id,
				'cname':'',
				'mobileno': mobile,
				'Emailid': '',
				'dd': dd,
				'mm': mm,
				'yy': yyyy,
                'deviceType': deviceType,
				'dd1': dd2,
				'mm1': mm2,
				'yy1': yyyy2,
				'Address': address,
				'PinCode': pincode,
				'CityId': city,
				'StateId': state,
				'ShopName': retailShopName,
				'UserPhoto': shopimg_self,
				'Shopphoto': '',
			    'docphoto': docimg
			},
			success: function(data, textStatus, xhr) {

				
				localStorage.setItem("profiledone_virgolaminates","Yes");
				
				if (data.indexOf("Success")>=0)
				{
						toast('Your profile has been updated successfully.');
						user.firstname=firstname;
						user.lastname=lastname;
						//user.emailid=email;
						user.address = address;
						user.city = city;
						user.pincode = pincode;

				}
				else if(data=='Failed')
					toast('Update failed.');
				else
					toast(data);
					

				
				if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname=='')
				{
					document.getElementById("profilenm").innerHTML= 'Guest';
					document.getElementById("profilenm1").innerHTML='Guest';
				}
				else
				{
					var fn='';
					var ln='';
					if(user.firstname != '')
					{
						fn = user.firstname.substring(0, 1);
					}
					if(user.lastname != '')
					{
						ln = user.lastname.substring(0, 1);
					}
					if(user.id != '')
					{
						var id1 = user.id.substring(0, 4);
						var id2 = user.id.substring(4, 8);
						var id3 = user.id.substring(8, 10);
					}

					document.getElementById("sortname").innerHTML= fn+''+ln;
					document.getElementById("profilenm").innerHTML= user.firstname+' '+user.lastname;
					document.getElementById("profilepts").innerHTML=user.balance;
					document.getElementById("profilenm1").innerHTML= user.firstname+' '+user.lastname;
					document.getElementById("profilepts1").innerHTML=user.balance;
					//document.getElementById("pro_id").innerHTML=id1+' '+id2+' '+id3;
					document.getElementById("pr_valid").innerHTML=user.validity;

					//document.getElementById("firm_nm").innerHTML= user.proprietorname;
					//document.getElementById("sap_code").innerHTML= user.sapcode;
						
				}
					
				$.mobile.changePage( "#homepage", {transition: "flip"} );
		         
				
				
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
		
  }
		
}

function submitFeedback()
{

 var service=$('input[name="service"]:checked').val();
 var product=$('input[name="product"]:checked').val();
 var offers=$('input[name="offers"]:checked').val();
 var store_atmosphere=$('input[name="store_atmosphere"]:checked').val();

 var comments = $('#feedback_enq').val();


 /*if(service==''){
		  toast('Please enter mandatory fields!');
		}
 else{*/

   $.ajax({
    url: SERVER+'feedback_json.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'html',
    data: {

				'MobileNo': user.mobile,
				'FirstName': '',
				'LastName': '',
				'EmailId': '',       
				'StoreId': '',    
				'Var1': service,   
				'Var2': product,     
				'Var3': offers,
				'Var4': store_atmosphere,    
				'Var5': '',      
				'Var6': '',     
				'Var7': '',        
				'Var8': '',             
				'Var9': '',
				'Var10': '',
				'Var11': '',           
				'Var12': '',
				'Var13': comments,
				'Var14': '',
				'Var15': '',
				'Var16': '',
				'Var17': '',
				'Var18': '',
				'Var19': '',
				'Var20': ''	
					
			},
   
    success: function(data, textStatus, xhr) {

				console.log('JSONDATA:'+JSON.stringify(data));

				toast('Thanks for submitting your valuable feedback.');

				$.mobile.changePage( "#homepage", { transition: "none"} );

				$('input[name="service"]').attr('checked', false);
				$('input[name="service"]').prop('checked',false);
				$('input[name="product"]').attr('checked', false);
				$('input[name="product"]').prop('checked',false);
				$('input[name="offers"]').attr('checked', false);
				$('input[name="offers"]').prop('checked',false);
				$('input[name="store_atmosphere"]').attr('checked', false);
				$('input[name="store_atmosphere"]').prop('checked',false);
				$('#feedback_enq').val('');
    },
    error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });

 //}

}

function showTrainingVideos()
{
	 document.getElementById("training_vdos_div").innerHTML= '';
	 
	 var tabserver = SERVER+"specials_json.asp";
	 
	 $.getJSON(
            tabserver , {  }, 
		     function (json) {
			   //console.log("SSSSS:" + JSON.stringify(json));
				var str='';
                 
				for(var i=0;i<json.length;i++)
				{
					if(json[i].AdName=='TrainingVideo')
					{
						str+= '<div class="event_block" style="margin-bottom: 25px;">';
						str+= '<div class="event_fig">';
					    str+= '<iframe width="100%" height="200" src='+json[i].AdDesc+' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
						//str+= '<iframe width="100%" height="200" src=https://www.youtube.com/embed/FqRQGaCVrsM&t=3s title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen><img src="assets/images/app_images/update-banner.png" alt=""></iframe>';
				        str+= '</div>';
						str+= '</div>';
					}
		        }

				document.getElementById("training_vdos_div").innerHTML= str;

				$.mobile.changePage( "#training", { transition: "none"} );

    }).error(function () {
        
            toast("Error: Could not connect to Server, make sure you are connected to Network");
       
    });
	 
}

function showTnc_popup()
{

	$('#tnc_popup').popup();
    $('#tnc_popup').popup("open");
}

function close_Popup()
{
	$('#tnc_popup').popup("close");
}

function receivedEvent(id) {
       

 var push = PushNotification.init({ "android": {"senderID": "488939433774"}});
                     push.on('registration', function(data) {
                     
					 reg_id=data.registrationId;
                     });
          
                     push.on('notification', function(data) {
						alert(data.message);
					 
						//showInbox();
                     });
          
                     push.on('error', function(e) {
						//alert(e);
                     }
					);
}

function capturePhoto_profile()
{
	  //navigator.camera.getPicture(uploadPhoto4, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true});
	  $("#optionspop_profile").popup();
	  $("#optionspop_profile").popup("open");
}

function capturePhoto4() 
{
	try{
		$("#optionspop_profile").popup("close");
		}catch(err) 
	{	}

	navigator.camera.getPicture(uploadPhoto4, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true});
}

function capturePhoto4_gallery()
{
	try{
		$("#optionspop_profile").popup("close");
		}catch(err) 
	{	}

	navigator.camera.getPicture(uploadPhoto4, onFail, { quality: 40,
					destinationType: navigator.camera.DestinationType.FILE_URI,
					sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,targetWidth:512,targetWidth:512,correctOrientation:true
				});
}

function onFail(message)
{
	toast('Failed because: ' + message);
}

function uploadPhoto4(imageURI) 
{

				
				var b_Image = document.getElementById('update_photo');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;

				var b_Image = document.getElementById('update_photo1');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;


				var options = new FileUploadOptions();
				options.fileKey="file";
				//var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				//var fName='photo_'+Math.floor((Math.random() * 1000000) + 1);
				var fName='virgolaminates_'+user.mobile;

				
				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'uploads/'+options.fileName;
				//file_pphoto = options.fileName+".jpg";

				file_pphoto="https://taghash.co/virgolaminates/uploads/"+options.fileName+".jpg";

				localStorage.setItem('file_pphoto',file_pphoto);
				
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

			    var statusDom;
			    var statusDomdiv;

				//var cattype = localStorage.getItem('cattype');
				/*statusDom=document.getElementById("update_photo_status");
				statusDomdiv=document.getElementById("update_photo_status_div");
				
				var ft = new FileTransfer();
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;

       						 
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}

       						 
   				 } else {
     				  
     				      
    			}
    			
				};*/

				ft.upload(imageURI, encodeURI("https://taghash.co/virgolaminates/upload_photo_new.php"), win, failPhoto4, options, true);
}

function failPhoto4(error) 
{
				toast('Photo upload failed. Please try after sometime: ' + error.code);
				localStorage.removeItem('file_pphoto');
				file_pphoto = '';
				document.getElementById('update_photo1').src = "assets/images/user_pic.png";
				document.getElementById('update_photo').src = "assets/images/user_pic.png";
				//document.getElementById('update_photo_self').src = "";
}

function win(r) 
{
	toast('Photo uploaded sucessfully');
}

function fail(error) 
{
	toast("There was an error uploading image");
}

function showUpdatesbanners_vdo()
{
	 document.getElementById("homepagebanners_update").innerHTML= '';
	 document.getElementById("homepagebanners_update_se").innerHTML= '';

	 var tabserver = SERVER+"specials_json.asp";
	 
	 $.getJSON(
            tabserver , {  }, 
		     function (json) {
			   //console.log("SSSSS:" + JSON.stringify(json));

				var str='';
				str+='<div class="primary_block mb-20 border_none promo_slider owl-carousel owl-theme p-0">';
                 
				for(var i=0;i<json.length;i++)
				{
					if(json[i].AdName=='Updates')
					{
						str+='<div class="event_fig">';
						str+='<iframe width="100%" height="200" src='+json[i].AdDesc+' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
						str+='</div>';
					}
		        }
                
				str+='</div>';

				document.getElementById("homepagebanners_update").innerHTML= str;
				document.getElementById("homepagebanners_update_se").innerHTML= str;

				$(".promo_slider").owlCarousel({
					items:1,
					loop:false,
					margin:0,
					autoplay:true,
					nav:false,
					dots:true,
					autoplayTimeout:1800
				});

				//$.mobile.changePage( "#homepage", { transition: "none"} );

    }).error(function () {
        
            //toast("Error: Could not connect to Server, make sure you are connected to Network");
       
    });
	 
}

$(document).on("pageshow", "#homepage", function(){
	
	// stopVideos();
	update_balancePts();
	showUpdatesbanners_vdo();
	$('.submit-btn-gratii').css("pointer-events", "");
	//setUserbalance_aboutus();

});

$(document).on("pageshow", "#homepage_se", function(){
	
	// stopVideos();
	showUpdatesbanners_vdo();
	//setUserbalance_aboutus();

});

function loadProducts()
{
	
	var url_new = 'https://www.virgolam.com/';
	var ref_new = cordova.InAppBrowser.open(url_new, '_blank', 'location=yes');

}

function purchaseHistory()
{
	var pop = document.getElementById('purchaseHistory');

	if(pop.style.display=='block')
	{
		pop.style.display = 'none';
	}
    else
	{
		pop.style.display = 'block';
		var pop1 = document.getElementById('redeemHistory');
		var pop2 = document.getElementById('bonusHistory');
		pop1.style.display = 'none';
		pop2.style.display = 'none';
	}
}

function redeemHistory()
{
	var pop = document.getElementById('redeemHistory');
	if(pop.style.display=='block')
	{
		pop.style.display = 'none';
	}
    else
	{
		pop.style.display = 'block';
		var pop1 = document.getElementById('purchaseHistory');
		var pop2 = document.getElementById('bonusHistory');
		pop1.style.display = 'none';
		pop2.style.display = 'none';
	}
}

function bonusHistory()
{
	var pop = document.getElementById('bonusHistory');
	if(pop.style.display=='block')
	{
		pop.style.display = 'none';
	}
    else
	{
		pop.style.display = 'block';
		var pop1 = document.getElementById('purchaseHistory');
		var pop2 = document.getElementById('redeemHistory');
		pop1.style.display = 'none';
		pop2.style.display = 'none';
	}
}

function showwhats_New()
{
	 document.getElementById("whatsnew_div").innerHTML= '';
	 
	 var tabserver = SERVER+"specials_json.asp";
	 
	 $.getJSON(
            tabserver , {  }, 
		     function (json) {
			   //console.log("SSSSS:" + JSON.stringify(json));

				var str='';
                 
				for(var i=0;i<json.length;i++)
				{
					if(json[i].AdName=='Updates')
					{
						str+= '<div class="event_block" style="margin-bottom: 25px;">';
						str+= '<div class="event_fig">';
					    str+= '<iframe width="100%" height="200" src='+json[i].AdDesc+' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
				        str+= '</div>';
						str+= '</div>';
					}
		        }

				document.getElementById("whatsnew_div").innerHTML= str;

				$.mobile.changePage( "#whatsnew", { transition: "none"} );

    }).error(function () {
        
            toast("Error: Could not connect to Server, make sure you are connected to Network");
       
    });
	 
}

$(document).on('pageshow', '#transactions', function (event, ui) {
	stopVideos();
    get_transactions_details();
	setUserbalance_aboutus();


	        $('input[type=radio][name=filter_transaction]').change(function() {

					$("#dateduration-emp").hide();
					get_transactions_details_datewise(this.value);
					$("#filter_panel1").toggle();
					$(".overlay").fadeOut("fast");
			});

});

function get_transactions_details()
{
	
	  $.ajax({
		url: SERVER2+'get_transactions_details_json_api.asp',
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {'apiuid': 'MLOYALAPI','apipswd':'Ml0yalAP!2o14','mobileno': user.mobile },
		complete: function(xhr, textStatus) {
	   //called when complete
		}, success: function(data, textStatus, xhr) {

		console.log(JSON.stringify(data));

			var str='';
			var str2='';

			if(data.data[0].msg=='No Records Found.')
			{
				//toast('No Records Found.');
				document.getElementById('txns_pg_div1').innerHTML= '<div class="recent_transfer_header pl-4 pr-4">Earned History</div><span class="no_tx_rcrds">No Records Found.</span>';
			}
			else
			{    
				 str += '<div class="recent_transfer_header pl-4 pr-4">Earned History</div>';
				 str += '<div class="out_wrapper2">';
				 str += '<div class="recent_transfer">';
				 for (var i = 0; i < data.data.length; i++)
				 {	
					
					    //str += '<div class="recent_transfer_header pl-4 pr-4">'+data.data[i].BillDate+'</div>';
						if(data.data[i].TransType == 'Revoke')
					    {
							str += '<div class="recent_block pl-4 pr-4">';
							str += '<div class="recent_user_icon1"> <img src="assets/images/pointredused.png" class="img-responsive" alt=""> </div>';
							str += '<div class="recent_user_details">';						
							str += '<p class="recent_detail_text">Points Revoked from Virgolam</p>';
							str += '<p class="recent_date">'+data.data[i].BillDate+'</p>';
							str += '<p class="recent_date">'+data.data[i].BillNumber+'</p>';
						    str += '</div>';
						    str += '<div class="recent_user_points"><h2 class="text_green">-'+data.data[i].Points+'<span>Points</span></h2></div>';						
					        str += '</div>';
						}
						else if(data.data[i].TransType == 'Redeem')
						{
							str += '<div class="recent_block pl-4 pr-4">';
							str += '<div class="recent_user_icon1"> <img src="assets/images/pointredused.png" class="img-responsive" alt=""> </div>';
							str += '<div class="recent_user_details">';						
							str += '<p class="recent_detail_text">Points Redeemed from Virgolam</p>';
							str += '<p class="recent_date">'+data.data[i].BillDate+'</p>';
							str += '<p class="recent_date">'+data.data[i].BillNumber+'</p>';
						    str += '</div>';
						    str += '<div class="recent_user_points"><h2 class="text_green">-'+data.data[i].Points+'<span>Points</span></h2></div>';						
					        str += '</div>';
						}
						else
						{
							str += '<div class="recent_block pl-4 pr-4">';
							str += '<div class="recent_user_icon1"> <img src="assets/images/pointredeem.png" class="img-responsive" alt=""> </div>';
							str += '<div class="recent_user_details">';						
							str += '<p class="recent_detail_text">Points Received from Virgolam</p>';
							str += '<p class="recent_date">'+data.data[i].BillDate+'</p>';
							str += '<p class="recent_date">'+data.data[i].BillNumber+'</p>';
						    str += '</div>';
						    str += '<div class="recent_user_points"><h2 class="text_green">+'+data.data[i].Points+'<span>Points</span></h2></div>';						
					        str += '</div>';
					    }
							
				 }

				 str += '</div>';
				 str += '</div>';

				 document.getElementById('txns_pg_div1').innerHTML=str;

			}


			if(data.data1[0].msg=='No Records Found.')
			{
				//toast('No Records Found.');
				document.getElementById('txns_pg_div2').innerHTML= '<div class="recent_transfer_header pl-4 pr-4">Redeem History</div><span class="no_tx_rcrds">No Records Found.</span>';
			}
			else
			{
				 str2 += '<div class="recent_transfer_header pl-4 pr-4">Redeem History</div>';
				 str2 += '<div class="out_wrapper2">';
				 str2 += '<div class="recent_transfer">';
				 for (var i = 0; i < data.data1.length; i++)
				 {	
					
					    //str += '<div class="recent_transfer_header pl-4 pr-4">'+data.data[i].BillDate+'</div>';
						if(data.data1[i].TransType == 'Revoke')
					    {
							str2 += '<div class="recent_block pl-4 pr-4">';
							str2 += '<div class="recent_user_icon1"> <img src="assets/images/pointredused.png" class="img-responsive" alt=""> </div>';
							str2 += '<div class="recent_user_details">';						
							str2 += '<p class="recent_detail_text">Points Revoked from Virgolam</p>';
							str2 += '<p class="recent_date">'+data.data1[i].RedeemDate+'</p>';
							str2 += '<p class="recent_date">'+data.data1[i].RefBillNumber+'</p>';
						    str2 += '</div>';
						    str2 += '<div class="recent_user_points"><h2 class="text_red">-'+data.data1[i].Points+'<span>Points</span></h2></div>';						
					        str2 += '</div>';
						}
						else if(data.data1[i].TransType == 'Redeem')
						{
							str2 += '<div class="recent_block pl-4 pr-4">';
							str2 += '<div class="recent_user_icon1"> <img src="assets/images/pointredused.png" class="img-responsive" alt=""> </div>';
							str2 += '<div class="recent_user_details">';						
							str2 += '<p class="recent_detail_text">Points Redeemed from Virgolam</p>';
							str2 += '<p class="recent_date">'+data.data1[i].RedeemDate+'</p>';
							str2 += '<p class="recent_date">'+data.data1[i].RefBillNumber+'</p>';
						    str2 += '</div>';
						    str2 += '<div class="recent_user_points"><h2 class="text_red">-'+data.data1[i].Points+'<span>Points</span></h2></div>';						
					        str2 += '</div>';
						}
						else
						{
							str2 += '<div class="recent_block pl-4 pr-4">';
							str2 += '<div class="recent_user_icon1"> <img src="assets/images/pointredused.png" class="img-responsive" alt=""> </div>';
							str2 += '<div class="recent_user_details">';						
							str2 += '<p class="recent_detail_text">Points Redeemed from Virgolam</p>';
							str2 += '<p class="recent_date">'+data.data1[i].RedeemDate+'</p>';
							str2 += '<p class="recent_date">'+data.data1[i].RefBillNumber+'</p>';
						    str2 += '</div>';
						    str2 += '<div class="recent_user_points"><h2 class="text_red">-'+data.data1[i].Points+'<span>Points</span></h2></div>';						
					        str2 += '</div>';
					    }
							
				 }

				 str2 += '</div>';
				 str2 += '</div>';

				 document.getElementById('txns_pg_div2').innerHTML=str2;

			}

			//$.mobile.changePage("#txns_pg");
		},
		error: function(xhr, textStatus, errorThrown) {

		}
	  });
}

function get_transactions_details_datewise(transact)
{

	//$("#filter_panel1").slideToggle();

	document.getElementById('txns_pg_div1').innerHTML='';
	document.getElementById('txns_pg_div2').innerHTML='';

    //var duration1 = $('input[type=radio][name=filter_transaction]').val();
	var duration=$("#filter_transaction_div :radio:checked").val();
	console.log('duration:'+duration);
	var fromdt ='';
	var enddt = '';
	
	if(duration == 'last1month')
    {
    	var today = new Date();
    	var d = new Date();
    	d.setMonth(d.getMonth() - 1);
    	enddt = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    	fromdt = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    }
    else if(duration == 'last3months')
    {
    	var today = new Date();
    	var d = new Date();
    	d.setMonth(d.getMonth() - 3);
    	enddt = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    	fromdt = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    }
    else if(duration == 'last6months')
    {
    	var today = new Date();
    	var d = new Date();
    	d.setMonth(d.getMonth() - 6);
    	enddt = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    	fromdt = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    }
    else if(duration == 'last1year')
    {
    	var today = new Date();
    	var d = new Date();
    	d.setMonth(d.getMonth() - 12);
    	enddt = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    	fromdt = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    }

	console.log('fromdt:'+fromdt);
	console.log('enddt:'+enddt);
	
	  $.ajax({
		url: SERVER2+'get_transactions_details_json_api.asp',
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {'apiuid': 'MLOYALAPI','apipswd':'Ml0yalAP!2o14','mobileno': user.mobile,'sdate': fromdt,'edate': enddt },
		complete: function(xhr, textStatus) {
	   //called when complete
		}, success: function(data, textStatus, xhr) {

		console.log(JSON.stringify(data));

			var str='';
			var str2='';

			if(data.data[0].msg=='No Records Found.')
			{
				//toast('No Records Found.');
				document.getElementById('txns_pg_div1').innerHTML= '<div class="recent_transfer_header pl-4 pr-4">Earned History</div><span class="no_tx_rcrds">No Records Found.</span>';
			}
			else
			{    
				 str += '<div class="recent_transfer_header pl-4 pr-4">Earned History</div>';
				 str += '<div class="out_wrapper2">';
				 str += '<div class="recent_transfer">';
				 for (var i = 0; i < data.data.length; i++)
				 {	
					
					    //str += '<div class="recent_transfer_header pl-4 pr-4">'+data.data[i].BillDate+'</div>';
						if(data.data[i].TransType == 'Revoke')
					    {
							str += '<div class="recent_block pl-4 pr-4">';
							str += '<div class="recent_user_icon1"> <img src="assets/images/pointredused.png" class="img-responsive" alt=""> </div>';
							str += '<div class="recent_user_details">';						
							str += '<p class="recent_detail_text">Points Revoked from Virgolam</p>';
							str += '<p class="recent_date">'+data.data[i].BillDate+'</p>';
							str += '<p class="recent_date">'+data.data[i].BillNumber+'</p>';
						    str += '</div>';
						    str += '<div class="recent_user_points"><h2 class="text_green">-'+data.data[i].Points+'<span>Points</span></h2></div>';						
					        str += '</div>';
						}
						else if(data.data[i].TransType == 'Redeem')
						{
							str += '<div class="recent_block pl-4 pr-4">';
							str += '<div class="recent_user_icon1"> <img src="assets/images/pointredused.png" class="img-responsive" alt=""> </div>';
							str += '<div class="recent_user_details">';						
							str += '<p class="recent_detail_text">Points Redeemed from Virgolam</p>';
							str += '<p class="recent_date">'+data.data[i].BillDate+'</p>';
							str += '<p class="recent_date">'+data.data[i].BillNumber+'</p>';
						    str += '</div>';
						    str += '<div class="recent_user_points"><h2 class="text_green">-'+data.data[i].Points+'<span>Points</span></h2></div>';						
					        str += '</div>';
						}
						else
						{
							str += '<div class="recent_block pl-4 pr-4">';
							str += '<div class="recent_user_icon1"> <img src="assets/images/pointredeem.png" class="img-responsive" alt=""> </div>';
							str += '<div class="recent_user_details">';						
							str += '<p class="recent_detail_text">Points Received from Virgolam</p>';
							str += '<p class="recent_date">'+data.data[i].BillDate+'</p>';
							str += '<p class="recent_date">'+data.data[i].BillNumber+'</p>';
						    str += '</div>';
						    str += '<div class="recent_user_points"><h2 class="text_green">+'+data.data[i].Points+'<span>Points</span></h2></div>';						
					        str += '</div>';
					    }
							
				 }

				 str += '</div>';
				 str += '</div>';

				 document.getElementById('txns_pg_div1').innerHTML=str;

			}


			if(data.data1[0].msg=='No Records Found.')
			{
				//toast('No Records Found.');
				document.getElementById('txns_pg_div2').innerHTML= '<div class="recent_transfer_header pl-4 pr-4">Redeem History</div><span class="no_tx_rcrds">No Records Found.</span>';
			}
			else
			{
				 str2 += '<div class="recent_transfer_header pl-4 pr-4">Redeem History</div>';
				 str2 += '<div class="out_wrapper2">';
				 str2 += '<div class="recent_transfer">';
				 for (var i = 0; i < data.data1.length; i++)
				 {	
					
					    //str += '<div class="recent_transfer_header pl-4 pr-4">'+data.data[i].BillDate+'</div>';
						if(data.data1[i].TransType == 'Revoke')
					    {
							str2 += '<div class="recent_block pl-4 pr-4">';
							str2 += '<div class="recent_user_icon1"> <img src="assets/images/pointredused.png" class="img-responsive" alt=""> </div>';
							str2 += '<div class="recent_user_details">';						
							str2 += '<p class="recent_detail_text">Points Revoked from Virgolam</p>';
							str2 += '<p class="recent_date">'+data.data1[i].RedeemDate+'</p>';
							str2 += '<p class="recent_date">'+data.data1[i].RefBillNumber+'</p>';
						    str2 += '</div>';
						    str2 += '<div class="recent_user_points"><h2 class="text_red">-'+data.data1[i].Points+'<span>Points</span></h2></div>';						
					        str2 += '</div>';
						}
						else if(data.data1[i].TransType == 'Redeem')
						{
							str2 += '<div class="recent_block pl-4 pr-4">';
							str2 += '<div class="recent_user_icon1"> <img src="assets/images/pointredused.png" class="img-responsive" alt=""> </div>';
							str2 += '<div class="recent_user_details">';						
							str2 += '<p class="recent_detail_text">Points Redeemed from Virgolam</p>';
							str2 += '<p class="recent_date">'+data.data1[i].RedeemDate+'</p>';
							str2 += '<p class="recent_date">'+data.data1[i].RefBillNumber+'</p>';
						    str2 += '</div>';
						    str2 += '<div class="recent_user_points"><h2 class="text_red">-'+data.data1[i].Points+'<span>Points</span></h2></div>';						
					        str2 += '</div>';
						}
						else
						{
							str2 += '<div class="recent_block pl-4 pr-4">';
							str2 += '<div class="recent_user_icon1"> <img src="assets/images/pointredused.png" class="img-responsive" alt=""> </div>';
							str2 += '<div class="recent_user_details">';						
							str2 += '<p class="recent_detail_text">Points Redeemed from Virgolam</p>';
							str2 += '<p class="recent_date">'+data.data1[i].RedeemDate+'</p>';
							str2 += '<p class="recent_date">'+data.data1[i].RefBillNumber+'</p>';
						    str2 += '</div>';
						    str2 += '<div class="recent_user_points"><h2 class="text_red">-'+data.data1[i].Points+'<span>Points</span></h2></div>';						
					        str2 += '</div>';
					    }
							
				 }

				 str2 += '</div>';
				 str2 += '</div>';

				 document.getElementById('txns_pg_div2').innerHTML=str2;

			}

			//$.mobile.changePage("#txns_pg");
		},
		error: function(xhr, textStatus, errorThrown) {

		}
	  });
}

$(document).on('pageshow', '#pointPage', function (event, ui) {
    stopVideos();
	$('#kyc_paytm_id').val(user.mobile);
	document.getElementById('kyc_paytm_id').readOnly = true;

	update_balancePts();
	$('.submit-btn-gratii').css("pointer-events", "");
 
});

function update_balancePts()
{
	  $.ajax({
			url: SERVER2+'get_points_json_api.asp',
			type: 'GET',
			timeout: 300000,
            dataType: "json",
            data: {
			    'apiuid': 'MLOYALAPI',
				'apipswd': 'Ml0yalAP!2o14',
				'mobileno': user.mobile
				},
			success: function(data, textStatus, xhr) {
				
				//console.log('Data:'+JSON.stringify(data));

				if(data.data!='')
				{
					 console.log('BalancePoints:'+data.data[0].BalancePoints);
					 user.balance = data.data[0].BalancePoints;
					 localStorage.setItem('balance',user.balance);

					 document.getElementById("profilepts").innerHTML= data.data[0].BalancePoints;
					 document.getElementById("profilepts1").innerHTML= data.data[0].BalancePoints;
				}
				else
				{
					 user.balance = '0';
					 localStorage.setItem('balance',user.balance);

					 document.getElementById("profilepts").innerHTML= '0';
					 document.getElementById("profilepts1").innerHTML= '0';
				}
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				 $.mobile.changePage( "#homepage", { transition: "none"} );
				}
			 
		});
}

function submitPaytm()
{
   
    var userid = $('#kyc_paytm_id').val();
    var amount = $('#kyc_paytm_amount').val();

	if(userid=='')
	{
		toast("Please enter Paytm Wallet Number");
	}
	else if(userid.length!=10)
    {
		toast('Please enter valid Paytm Wallet Number');
	}
	else if(amount=='' || amount=='0' )
	{
		toast("Please enter points to redeem");
	}
	else if(amount=='1')
	{
		toast("Points to redeem should be greater than 1");
	}
    else if((parseFloat(amount)) > parseFloat(user.balance))
	{
		toast('Points redeemeed cannot be greater than point balance');
	}
	else
	{    
		 $('.submit-btn-gratii').css("pointer-events", "none");
		 burnpoints_byqr(amount,userid);
	}

}

function burnpoints_byqr(camount,userid)
{

	var refbillno =  'virgolam'+Math.floor((Math.random() * 100000000) + 1)+''+Math.floor(Date.now() / 1000);

	//console.log('refbillno:'+refbillno);

	$.ajax({
			url: SERVER2+"burn_points_json_api.asp",
			type: 'POST',
		    timeout: 50000,
		    dataType: 'json',
		    data:{
			  "mobileno": user.mobile,
			  "ref_bill_number": refbillno,
			  "redeem_points": camount,
			  "send": '1'
            },
		    beforeSend: function (xhr) {

		     	$("#wait").css("display","block");
				xhr.setRequestHeader('apiuid', 'MLOYALAPI');
				xhr.setRequestHeader('apipswd', 'Ml0yalAP!2o14');

            },
		    complete: function(xhr, textStatus) {
		    	$("#wait").css("display","none");
		    },
			success: function(data, textStatus, xhr) {
			    
				 console.log("data:"+JSON.stringify(data));

				 if(data.data.length>=1)
				 {
					//toast(data.data);
					sendGratification(camount,userid,refbillno);
				 }
				 else
				 {
					 toast(data.error);
					 $.mobile.changePage( "#homepage", { transition: "none"} );
				 }
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet');
				 $.mobile.changePage( "#homepage", { transition: "none"} );
			}
		});
}

function sendGratification(amount,userid,refbillno)
{
	    var amnt_new = parseFloat(amount*0.7).toFixed(1);

	    $.ajax({
				url: "https://taghash.co/grati/virgolam/send.php",
				type: 'POST',
				timeout: 70000,
				dataType: 'json',
				data:JSON.stringify({
					  "mobileno": userid,
					  "amount": amnt_new,
					  "req_oid": refbillno
				}),
				beforeSend: function (xhr) {

					$("#wait").css("display","block");

				},
				complete: function(xhr, textStatus) {
					$("#wait").css("display","none");
				},
				success: function(data, textStatus, xhr) {
				 
				 console.log("data:"+JSON.stringify(data));

					if(data.response.status=='ACCEPTED')
					{
						//toast('Request accepted');
						toast_p('RS.('+amnt_new+') Will be credited to your Paytm wallet.');
						//burnpoints(amount);

						//document.getElementById("filter_panel_div").innerHTML= 'RS.('+amount+') Will be credited to your Paytm wallet after Approval.';
						$.mobile.changePage( "#homepage", { transition: "none"} );
						//$(".overlay").fadeIn("fast");
						//$("#filter_panel").slideToggle("fast");
					}
					else
					{
						toast('Request failed');
						$.mobile.changePage( "#homepage", { transition: "none"} );
					}
						
				 },
				error: function(xhr, textStatus, errorThrown) {
					 toast('Could not connect to Server, make sure you are connected to Internet');
					}
			});
}

function captureShopPhoto_profile()
{
	  //navigator.camera.getPicture(uploadPhoto4, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true});
	  $("#shopPhotoregistration_photo").popup();
	  $("#shopPhotoregistration_photo").popup("open");
}
function captureShopPhoto_profile_se()
{
	  //navigator.camera.getPicture(uploadPhoto4, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true});
	  $("#shopPhotoregistration_photo_se").popup();
	  $("#shopPhotoregistration_photo_se").popup("open");
}
function captureShopPhoto4() 
{
	try{
		$("#shopPhotoregistration_photo").popup("close");
		}catch(err) 
	{	}

	navigator.camera.getPicture(uploadPhoto_shop, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true});

}

function captureShopPhoto4_se() 
{

	var mobileno = $('#mobileno_update_se').val();
	if(mobileno=='')
	{
		toast('Please enter mobile no first');
	}
	else if(mobileno.length!=10)
	{
		toast('Please enter valid 10 digits mobile number first');
	}
	else
	{

		try{
			$("#shopPhotoregistration_photo_se").popup("close");
			}catch(err) 
		{	}

		navigator.camera.getPicture(uploadPhoto_shop_se, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true});
		
	}

}

function captureShopPhoto4_gallery()
{
	try{
		$("#shopPhotoregistration_photo").popup("close");
		}catch(err) 
	{	}

    navigator.camera.getPicture(uploadPhoto_shop, onFail, { quality: 40,
					destinationType: navigator.camera.DestinationType.FILE_URI,
					sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,targetWidth:512,targetWidth:512,correctOrientation:true
				});
}

function captureShopPhoto4_gallery_se()
{
	var mobileno = $('#mobileno_update_se').val();
	if(mobileno=='')
	{
		toast('Please enter mobile no first');
	}
	else if(mobileno.length!=10)
	{
		toast('Please enter valid 10 digits mobile number first');
	}
	else
	{

		try{
			$("#shopPhotoregistration_photo_se").popup("close");
			}catch(err) 
		{	}

		navigator.camera.getPicture(uploadPhoto_shop_se, onFail, { quality: 40,
						destinationType: navigator.camera.DestinationType.FILE_URI,
						sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,targetWidth:512,targetWidth:512,correctOrientation:true
					});
	}
}

function uploadShopPhoto4(imageURI) 
{

				
				/*var b_Image = document.getElementById('update_photo');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;*/

				var b_Image = document.getElementById('shopPhoto_registration');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;


				var options = new FileUploadOptions();
				options.fileKey="file";
				//var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				//var fName='photo_'+Math.floor((Math.random() * 1000000) + 1);
				var fName='hppragti_'+user.mobile;

				
				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'uploads/'+options.fileName;
				//file_pphoto = options.fileName+".jpg";

				file_pphoto="https://taghash.co/hppragti/uploads/"+options.fileName+".jpg";

				localStorage.setItem('file_pphoto',file_pphoto);
				
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

			    var statusDom;
			    var statusDomdiv;

				//var cattype = localStorage.getItem('cattype');
				/*statusDom=document.getElementById("update_photo_status");
				statusDomdiv=document.getElementById("update_photo_status_div");
				
				var ft = new FileTransfer();
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;

       						 
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}

       						 
   				 } else {
     				  
     				      
    			}
    			
				};*/

				ft.upload(imageURI, encodeURI("https://taghash.co/hppragti/upload_photo_new.php"), win, failPhoto4, options, true);
}

function failPhoto4(error) 
{
				toast('Photo upload failed. Please try after sometime: ' + error.code);
				localStorage.removeItem('file_pphoto');
				file_pphoto = '';
				document.getElementById('shopPhoto_registration').src = "assets/images/user_pic.png";
				//document.getElementById('update_photo_self').src = "";
}
// *******************************Identification Photo*******************************
function captureIdentficationPhoto_profile()
{
	  //navigator.camera.getPicture(uploadPhoto4, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true});
	  $("#identficationPhotoregistration_photo").popup();
	  $("#identficationPhotoregistration_photo").popup("open");
}

function captureIdentficationPhoto_profile_se()
{
	  //navigator.camera.getPicture(uploadPhoto4, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true});
	  $("#identficationPhotoregistration_photo_se").popup();
	  $("#identficationPhotoregistration_photo_se").popup("open");
}

function captureIdentficationPhoto4() 
{
	try{
		$("#identficationPhotoregistration_photo").popup("close");
		}catch(err) 
	{	}

	navigator.camera.getPicture(uploadPhoto_doc, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true});
}
function captureIdentficationPhoto4_gallery()
{
	try{
		$("#identficationPhotoregistration_photo").popup("close");
		}catch(err) 
	{	}

	navigator.camera.getPicture(uploadPhoto_doc, onFail, { quality: 40,
					destinationType: navigator.camera.DestinationType.FILE_URI,
					sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,targetWidth:512,targetWidth:512,correctOrientation:true
				});
}

function captureIdentficationPhoto4_se() 
{
	var mobileno = $('#mobileno_update_se').val();
	if(mobileno=='')
	{
		toast('Please enter mobile no first');
	}
	else if(mobileno.length!=10)
	{
		toast('Please enter valid 10 digits mobile number first');
	}
	else
	{

	try{
		$("#identficationPhotoregistration_photo_se").popup("close");
		}catch(err) 
	{	}

	navigator.camera.getPicture(uploadPhoto_doc_se, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true});

	}
}
function captureIdentficationPhoto4_gallery_se()
{
	var mobileno = $('#mobileno_update_se').val();
	if(mobileno=='')
	{
		toast('Please enter mobile no first');
	}
	else if(mobileno.length!=10)
	{
		toast('Please enter valid 10 digits mobile number first');
	}
	else
	{

	try{
		$("#identficationPhotoregistration_photo_se").popup("close");
		}catch(err) 
	{	}

	navigator.camera.getPicture(uploadPhoto_doc_se, onFail, { quality: 40,
					destinationType: navigator.camera.DestinationType.FILE_URI,
					sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,targetWidth:512,targetWidth:512,correctOrientation:true
				});
	}
}


function uploadIdentficationPhoto4(imageURI) 
{

				
				/*var b_Image = document.getElementById('update_photo');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;*/

				var b_Image = document.getElementById('shopPhoto_registration');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;


				var options = new FileUploadOptions();
				options.fileKey="file";
				//var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				//var fName='photo_'+Math.floor((Math.random() * 1000000) + 1);
				var fName='hppragti_'+user.mobile;

				
				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'uploads/'+options.fileName;
				//file_pphoto = options.fileName+".jpg";

				file_pphoto="https://taghash.co/hppragti/uploads/"+options.fileName+".jpg";

				localStorage.setItem('file_pphoto',file_pphoto);
				
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

			    var statusDom;
			    var statusDomdiv;

				//var cattype = localStorage.getItem('cattype');
				/*statusDom=document.getElementById("update_photo_status");
				statusDomdiv=document.getElementById("update_photo_status_div");
				
				var ft = new FileTransfer();
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;

       						 
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}

       						 
   				 } else {
     				  
     				      
    			}
    			
				};*/

				ft.upload(imageURI, encodeURI("https://taghash.co/hppragti/upload_photo_new.php"), win, failPhoto4, options, true);
}

function failPhoto4(error) 
{
				toast('Photo upload failed. Please try after sometime: ' + error.code);
				localStorage.removeItem('file_pphoto');
				file_pphoto = '';
				document.getElementById('identficationPhoto_registration').src = "assets/images/user_pic.png";
				//document.getElementById('update_photo_self').src = "";
}

function getdetailsPincode(str1,str2,str3)
{  
    var pincode =  $('#'+str1).val();

	$.ajax({
		url: 'https://api.postalpincode.in/pincode/'+pincode,
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {},
		complete: function(xhr, textStatus) {
	   //called when complete
		}, success: function(data, textStatus, xhr) {

		    console.log(JSON.stringify(data));
			console.log(data[0].Status);

			var citylist = '';

            if(data[0].Status=='Success')
		    {
				//$('#'+str4).val(data[0].PostOffice[0].Block);
				//$('#update_city').val(data[0].PostOffice[0].District);
				//$('#update_state').val(data[0].PostOffice[0].State);

				var selectedText = data[0].PostOffice[0].State;
				// Now set dropdown selected option to 'State'.
				var strstate = '#'+str2+' option';
				// console.log('asdsadasdsa'+strstate);

               //$('#workshopState option').map(function () {
				$(strstate).map(function () { 
					if ($(this).text() == selectedText) return this;
				}).prop('selected', 'selected');

				//showCityList();
				//showCityList_new(str1,str2,str3,data[0].PostOffice[0].Block);


				 var listItems= "";
				 listItems+= "<option value='' disabled='disabled' style='background-color:#3E3E3E' selected='selected'>-City-</option>";

				 for (var i = 0; i < data[0].PostOffice.length; i++)
				 {
						if(data[0].PostOffice[i].Name == user.city)
							listItems+= "<option value='" + data[0].PostOffice[i].Name + "' selected>" + data[0].PostOffice[i].Name +"</option>";
						else
							listItems+= "<option value='" + data[0].PostOffice[i].Name + "'>" + data[0].PostOffice[i].Name +"</option>";
				 }
				  
				 $("#"+str3).html(listItems);

				  /*var strcity = '#'+str3+' option';
				  $(strcity).map(function () {
					if ($(this).text() == mycity) return this;
				  }).prop('selected', 'selected');*/

		    }
			
		},
		error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
}

function showCityList_new(str1,str2,str3,mycity)
{

  var stateid = $('#'+str2).val();
//   alert("------------------------->"+stateid);

  $.ajax({
    url: 'https://virgolaminates.mloyalretail.com/m/' +'city_locator_json.asp',
    // https://virgolaminates.mloyalretail.com/m/city_locator_json.asp?stateid=8
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: {
		'stateid' : stateid
      },
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
   console.log(data)
   
        var listItems= "";
		    listItems+= "<option value='' disabled='disabled' style='background-color:#3E3E3E' selected='selected'>-City-</option>";

		for (var i = 0; i < data.data.length; i++)
		{
			    if(data.data[i].cityid == user.city)
					listItems+= "<option value='" + data.data[i].cityid + "' selected>" + data.data[i].cityname + "</option>";
				else
				    listItems+= "<option value='" + data.data[i].cityid + "'>" + data.data[i].cityname + "</option>";
		}

				  
				  $("#"+str3).html(listItems);

				  var strcity = '#'+str3+' option';

				  $(strcity).map(function () {
					if ($(this).text() == mycity) return this;
				  }).prop('selected', 'selected');
		
				  /*$("#city_registration").selectmenu('refresh');*/
			
      },
      error: function(xhr, textStatus, errorThrown) {
    }
  });
}
function loadState_list()
{
	$.getJSON(
            'https://virgolaminates.mloyalretail.com/APIs/get_states_data_json_api.asp?apiuid=MLOYALAPI&apipswd=Ml0yalAP!2o14',
			{

			}, 
		    function (json) {

				 //localStorage.setItem("agappestatejson", JSON.stringify(json));

				 var listItems= "";
				     listItems+= "<option value='' disabled='disabled' style='background-color:#3E3E3E;color:#000000;' selected='selected'>-State-</option>";
				     for (var i = 0; i < json.data.length; i++)
					 {
						if(json.data[i].state_id == user.state)
						listItems+= "<option value='" + json.data[i].state_id + "' selected>" + json.data[i].state_name + "</option>";
						else
						listItems+= "<option value='" + json.data[i].state_id + "'>" + json.data[i].state_name + "</option>";
					 }
				
				     $("#state_update").html(listItems);
					 $("#state_update_se").html(listItems);
				
	 
	 }).error(function () {  console.log("err in loading state") });
}

function showCityList(str1,str2)
{

  var stateid = $('#'+str1).val();
//   alert("------------------------->"+stateid);

  $.ajax({
    url: 'https://virgolaminates.mloyalretail.com/m/' +'city_locator_json.asp',
    // https://virgolaminates.mloyalretail.com/m/city_locator_json.asp?stateid=8
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: {
		'stateid' : stateid
      },
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
   console.log(data)
   
        var listItems= "";
		    listItems+= "<option value='' disabled='disabled' style='background-color:#3E3E3E' selected='selected'>-City-</option>";

		for (var i = 0; i < data.data.length; i++)
		{
			    if(data.data[i].cityid == user.city)
					listItems+= "<option value='" + data.data[i].cityid + "' selected>" + data.data[i].cityname + "</option>";
				else
				    listItems+= "<option value='" + data.data[i].cityid + "'>" + data.data[i].cityname + "</option>";
		}

				  
				  $("#"+str2).html(listItems);
		
				  /*$("#city_registration").selectmenu('refresh');*/
			
      },
      error: function(xhr, textStatus, errorThrown) {
    }
  });
}

function capturePhoto_shop()
{

	navigator.camera.getPicture(uploadPhoto_shop, onFail, { quality: 40,
					destinationType: navigator.camera.DestinationType.FILE_URI,
					sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,targetWidth:512,targetWidth:512,correctOrientation:true
				});
}

function capturePhoto_doc()
{

	navigator.camera.getPicture(uploadPhoto_doc, onFail, { quality: 40,
					destinationType: navigator.camera.DestinationType.FILE_URI,
					sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,targetWidth:512,targetWidth:512,correctOrientation:true
				});
}

function uploadPhoto_shop(imageURI) 
{

				var b_Image = document.getElementById('shopPhoto_registration');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;


				var b_Image1 = document.getElementById('update_photo1');
				b_Image1.style.display = 'block';
				b_Image1.src = imageURI;

				var b_Image2 = document.getElementById('update_photo');
				b_Image2.style.display = 'block';
				b_Image2.src = imageURI;


				var options = new FileUploadOptions();
				options.fileKey="file";
				//var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				//var fName='photo_'+Math.floor((Math.random() * 1000000) + 1);
				var fName='shop_'+user.mobile;

				
				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'uploads/'+options.fileName;
				//filenmshop = options.fileName+".jpg";

				filenmshop="https://taghash.co/virgolaminates/uploads/"+options.fileName+".jpg";

				localStorage.setItem('filenmshop',filenmshop);
				
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

			    var statusDom;
			    var statusDomdiv;

				//var cattype = localStorage.getItem('cattype');
				statusDom=document.getElementById("shop_photo_status");
				statusDomdiv=document.getElementById("shop_photo_status_div");
				
				var ft = new FileTransfer();
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;

       						 
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}

       						 
   				 } else {
     				  
     				      
    			}
    			
				};

				ft.upload(imageURI, encodeURI("https://taghash.co/virgolaminates/upload_photo_new.php"), win, failPhoto_shop, options, true);
}

function failPhoto_shop(error) 
{
				toast('Photo upload failed. Please try after sometime: ' + error.code);
				localStorage.removeItem('filenmshop');
				filenmshop = '';
				document.getElementById('shopPhoto_registration').src = "assets/images/camera_icon.png";
				//document.getElementById('update_photo_self').src = "";
				document.getElementById("shop_photo_status_div").style.display = 'none';
}

function uploadPhoto_shop_se(imageURI) 
{
                
				var mobileno = $('#mobileno_update_se').val();

				var b_Image = document.getElementById('shopPhoto_registration_se');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;


				var b_Image1 = document.getElementById('update_photo1_se');
				b_Image1.style.display = 'block';
				b_Image1.src = imageURI;

				/*var b_Image2 = document.getElementById('update_photo_se');
				b_Image2.style.display = 'block';
				b_Image2.src = imageURI;*/


				var options = new FileUploadOptions();
				options.fileKey="file";
				//var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				//var fName='photo_'+Math.floor((Math.random() * 1000000) + 1);
				var fName='shop_'+mobileno;

				
				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'uploads/'+options.fileName;
				//filenmshop = options.fileName+".jpg";

				filenmshop_byse="https://taghash.co/virgolaminates/uploads/"+options.fileName+".jpg";

				localStorage.setItem('filenmshop_byse',filenmshop_byse);
				
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

			    var statusDom;
			    var statusDomdiv;

				//var cattype = localStorage.getItem('cattype');
				statusDom=document.getElementById("shop_photo_status_se");
				statusDomdiv=document.getElementById("shop_photo_status_div_se");
				
				var ft = new FileTransfer();
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;

       						 
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}

       						 
   				 } else {
     				  
     				      
    			}
    			
				};

				ft.upload(imageURI, encodeURI("https://taghash.co/virgolaminates/upload_photo_new.php"), win, failPhoto_shop_se, options, true);
}

function failPhoto_shop_se(error) 
{
				toast('Photo upload failed. Please try after sometime: ' + error.code);
				localStorage.removeItem('filenmshop_byse');
				filenmshop_byse = '';
				document.getElementById('shopPhoto_registration_se').src = "assets/images/camera_icon.png";
				//document.getElementById('update_photo_self').src = "";
				document.getElementById("shop_photo_status_div_se").style.display = 'none';
}

function uploadPhoto_doc(imageURI) 
{

				var b_Image = document.getElementById('identficationPhoto_registration');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;


				var options = new FileUploadOptions();
				options.fileKey="file";
				//var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				//var fName='photo_'+Math.floor((Math.random() * 1000000) + 1);
				var fName='doc_'+user.mobile;

				
				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'uploads/'+options.fileName;
				//file_pdoc = options.fileName+".jpg";

				file_pdoc="https://taghash.co/virgolaminates/uploads/"+options.fileName+".jpg";

				localStorage.setItem('file_pdoc',file_pdoc);
				
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

			    var statusDom;
			    var statusDomdiv;

				//var cattype = localStorage.getItem('cattype');
				statusDom=document.getElementById("doc_photo_status");
				statusDomdiv=document.getElementById("doc_photo_status_div");
				
				var ft = new FileTransfer();
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;

       						 
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}

       						 
   				 } else {
     				  
     				      
    			}
    			
				};

				ft.upload(imageURI, encodeURI("https://taghash.co/virgolaminates/upload_photo_new.php"), win, failPhoto_doc, options, true);
}

function failPhoto_doc(error) 
{
				toast('Photo upload failed. Please try after sometime: ' + error.code);
				localStorage.removeItem('file_pdoc');
				file_pdoc = '';
				document.getElementById('identficationPhoto_registration').src = "assets/images/camera_icon.png";
				//document.getElementById('update_photo_self').src = "";
				document.getElementById("doc_photo_status_div").style.display = 'none';
}

function uploadPhoto_doc_se(imageURI) 
{
                
				var mobileno = $('#mobileno_update_se').val();


				var b_Image = document.getElementById('identficationPhoto_registration_se');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;


				var options = new FileUploadOptions();
				options.fileKey="file";
				//var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				//var fName='photo_'+Math.floor((Math.random() * 1000000) + 1);
				var fName='doc_'+mobileno;

				
				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'uploads/'+options.fileName;
				//file_pdoc_byse = options.fileName+".jpg";

				file_pdoc_byse="https://taghash.co/virgolaminates/uploads/"+options.fileName+".jpg";

				localStorage.setItem('file_pdoc_byse',file_pdoc_byse);
				
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

			    var statusDom;
			    var statusDomdiv;

				//var cattype = localStorage.getItem('cattype');
				statusDom=document.getElementById("doc_photo_status");
				statusDomdiv=document.getElementById("doc_photo_status_div");
				
				var ft = new FileTransfer();
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;

       						 
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}

       						 
   				 } else {
     				  
     				      
    			}
    			
				};

				ft.upload(imageURI, encodeURI("https://taghash.co/virgolaminates/upload_photo_new.php"), win, failPhoto_doc_se, options, true);
}

function failPhoto_doc_se(error) 
{
				toast('Photo upload failed. Please try after sometime: ' + error.code);
				localStorage.removeItem('file_pdoc_byse');
				file_pdoc_byse = '';
				document.getElementById('identficationPhoto_registration_se').src = "assets/images/camera_icon.png";
				//document.getElementById('update_photo_self').src = "";
				document.getElementById("doc_photo_status_div_se").style.display = 'none';
}
 
function fetchCitylist_1(stateid)
{
  $.ajax({
    url: 'https://virgolaminates.mloyalretail.com/m/city_locator_json.asp',
	//url: SERVER +'city_locator_json.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: {'stateid': stateid},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
        var listItems= "";
		    listItems+= "<option value='' disabled='disabled' style='background-color:#3E3E3E' selected='selected'>-City-</option>";
		for (var i = 0; i < data.data.length; i++)
		{
			if(data.data[i].cityid == user.city)
			    listItems+= "<option value='" + data.data[i].cityid + "' selected>" + data.data[i].cityname + "</option>";
			else
				listItems+= "<option value='" + data.data[i].cityid + "'>" + data.data[i].cityname + "</option>";
		}
		   $("#city_update").html(listItems);
    },
    error: function(xhr, textStatus, errorThrown) {
    }
  });
}

function fetchCitylist_1_new(stateid)
{
   var pincode =  $('#pincode_update').val();
	$.ajax({
		url: 'https://api.postalpincode.in/pincode/'+pincode,
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {},
		complete: function(xhr, textStatus) {
	   //called when complete
		}, success: function(data, textStatus, xhr) {
		    console.log(JSON.stringify(data));
			console.log(data[0].Status);
			var listItems = '';
            if(data[0].Status=='Success')
		    {
				 var listItems= "";
				 listItems+= "<option value='' disabled='disabled' style='background-color:#3E3E3E' selected='selected'>-City-</option>";
				 for (var i = 0; i < data[0].PostOffice.length; i++)
				 {
						if(data[0].PostOffice[i].Name == user.city)
							listItems+= "<option value='" + data[0].PostOffice[i].Name + "' selected>" + data[0].PostOffice[i].Name +"</option>";
						else
							listItems+= "<option value='" + data[0].PostOffice[i].Name + "'>" + data[0].PostOffice[i].Name +"</option>";
				 }
				 $("#city_update").html(listItems);
				  /*var strcity = '#'+str3+' option';
				  $(strcity).map(function () {
					if ($(this).text() == mycity) return this;
				  }).prop('selected', 'selected');*/
		    }
		},
		error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });

}

function isDate18orMoreYears(dt) 
{
		var mm ='';
		var dd ='';
		var yyyy = '';
		var birthday = new Date($('#'+dt).val());
		var age = parseInt((Date.now() - birthday) / (31557600000));
		
		if(age>=18)
		{
			return true;
		}
		
		toast('Kindly check your Date of Birth');
		$('#'+dt).val('');
		return false;
}

function goto_Profileupdate()
{

    if(user.firstname.trim()!='')
	{
		document.getElementById('firstName_update').readOnly = true;
	}
	if(user.lastname.trim()!='')
	{
		document.getElementById('lastName_update').readOnly = true;
	}

	if(user.dob!='')
	{
			
		var dob = user.dob.split('-');
		mm = dob.length == 3 ? dob[1] : '';
		dd = dob.length == 3 ? dob[0] : '';
		yyyy = dob.length == 3 ? dob[2] : '';
		mm = mm.trim();
		dd = dd.trim();
		yyyy = yyyy.trim();
		if(dd.length == 1)
			dd = '0'+dd;
		if(mm.length == 1)
			mm = '0'+mm;
	    
		if(dd!='' && dd!='-' && dd!='0' && mm!='' && mm!='-' && mm!='0'  && yyyy!='' && yyyy!='-' && yyyy!='0' )
		{
			document.getElementById('update_dob').readOnly = true;
		}
		
	}

	if(user.doa!='')
	{
			
		var doa = user.doa.split('-');
		mm1 = doa.length == 3 ? doa[1] : '';
		dd1 = doa.length == 3 ? doa[0] : '';
		yyyy1 = doa.length == 3 ? doa[2] : '';
		mm1 = mm1.trim();
		dd1 = dd1.trim();
		yyyy1 = yyyy1.trim();
		if(dd1.length == 1)
			dd1 = '0'+dd1;
		if(mm1.length == 1)
			mm1 = '0'+mm1;
		

		if(dd1!='' && dd1!='-' && dd1!='0' && mm1!='' && mm1!='-' && mm1!='0'  && yyyy1!='' && yyyy1!='-' && yyyy1!='0' )
		{
			document.getElementById('update_doa').readOnly = true;
		}
		
	}


	// if(user.pincode.trim()!='')
	// {
	// 	document.getElementById('pincode_update').readOnly = true;
	// }
	// if(user.state!='')
	// {
	// 	//document.getElementById('state_update').disabled = true;
	// 	document.getElementById("state_update").setAttribute("disabled", "disabled");
		
	// }
	// if(user.city!='')
	// {
	// 	//document.getElementById('city_update').disabled = true;
	// 	document.getElementById("city_update").setAttribute("disabled", "disabled");
	// }


	$.mobile.changePage( "#profiledata", { transition: "none"} );

}

function open_pdf(pdfloc)
{
	 var ref = window.open(pdfloc, '_system', 'location=yes');
	 ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
     ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
     ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
     ref.addEventListener('exit', function(event) { alert(event.type); });

	 //var ref_new = cordova.InAppBrowser.open(url_new, '_blank', 'location=yes');
}

function shareCard()
{
	var vdata = 'Name: '+user.firstname+' ' +user.lastname+'\nMobile Number: '+user.mobile+ '\nAddress:'+ user.address +' ' +user.city+' ' +user.pincode;
	//console.log(vdata);
	window.plugins.socialsharing.share( vdata, null, 'https://taghash.co/virgolaminates/m-card.png', 'https://www.virgolam.com');
}

var stopVideos = function () {
	// var videos = document.querySelectorAll('iframe');


	// Array.prototype.forEach.call(videos, function (video) {
		
	// 		var src = video.src;
	// 		video.src = src;
		
	// });
    document.getElementById('homepagebanners_update').innerHTML='';
    document.getElementById('whatsnew_div').innerHTML='';

};

function showpass1_se()
{

  var input = $("#password_myacc_se");

  if (input.attr("type") === "password") 
  {
      input.attr("type", "text");
  } 
  else 
  {
      input.attr("type", "password");
  }
}


function authenticate_se()
{
  
  var uname = $('#username_se').val();
  var pwd = $('#password_myacc_se').val();
 
  console.log("uname:"+uname);
  console.log("pwd:"+pwd);

  if(uname=='' || pwd=='')
  {
	  toast('Please enter Username /Password');
  }
  else
  {

  $.ajax({
    url: SERVER2+'forgot_pswd_dealer_se_json_api.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'json',
    data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o14','login_name': uname, 'user_pwd': pwd,'Status_flag':'1'},
    complete: function(xhr, textStatus) {
    
    },
    success: function(data, textStatus, xhr) {

     console.log('data'+JSON.stringify(data));

	    if(data.error.length>0)
		{
			toast('Authentication failed');

			localStorage.removeItem('usernamemloyal_virgolam');
			localStorage.removeItem('userpassloyal_virgolam');
			
			$('#username_se').val('');
			$('#password_myacc_se').val('');

			$.mobile.changePage( "#login_pg_se", { transition: "none"} );

		}
		else
		{

			store.secode = data.SEdata[0].SE_code ;
			store.sename = data.SEdata[0].SE_name;
            
            if(store.sename != '')
			{
				var fn = store.sename.substring(0, 1);
			}

			document.getElementById("sortname_se").innerHTML= fn;
			document.getElementById("user_id1_se").innerHTML='SE Code '+store.secode;
    		document.getElementById("profilenm1_se").innerHTML= store.sename;

			localStorage.setItem('usernamemloyal_virgolam',uname);
			localStorage.setItem('userpassloyal_virgolam',pwd);

			localStorage.setItem('store_code_se',uname);

			$.mobile.changePage( "#homepage_se", { transition: "none"} );

		}
    
    },
    error: function(xhr, textStatus, errorThrown) {
		toast('se auth:Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });
 }

}

function AddUser_byse()
{
	
	try{
	$( "#sidebar_se" ).panel( "close" );
	}catch(err) 
	{	}

	$('#newuser_mobile_byse').val('');
	$('#newuser_register_byse_popup').popup();
    $('#newuser_register_byse_popup').popup("open");

}

function existingUser_check_byse()
{
	
	 var searchcust = $('#newuser_mobile_byse').val();

	 if(searchcust=='')
	 {
		toast('Please Enter Mobile No.');
	 }
	 else if(searchcust.indexOf(".")>=0)
	 {
		 toast('Invalid Mobile No.');
	 }
	 else if(searchcust.length<10 || searchcust.length>10)
	 {
		 toast('Invalid Mobile No.');
	 }
	 else
	 {
	  
	  $.ajax({
	    url: SERVER2+'get_points_json_api.asp',
	    type: 'GET',
	    timeout: 50000,
		dataType: 'json',
		data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o14','mobileno': searchcust},
		complete: function(xhr, textStatus) {
	    //called when complete
		},
		success: function(data, textStatus, xhr) {

		    //console.log('JSONDATA'+JSON.stringify(data));
			//fetchcurrent_Location();

			if(data.data.length>0)
			{
				toast('User already registered with us');
				$('#newuser_mobile_byse').val('');
			}
			else
			{
				document.getElementById("shop_photo_status_div_se").style.display = 'none';
				document.getElementById("doc_photo_status_div_se").style.display = 'none';

				document.getElementById('update_photo1_se').src = "assets/images/user_pic.png";
				document.getElementById('shopPhoto_registration_se').src = "assets/images/camera_icon.png";
				document.getElementById('identficationPhoto_registration_se').src = "assets/images/camera_icon.png";
    
				localStorage.removeItem('filenmshop_byse');
				filenmshop_byse = '';
				localStorage.removeItem('file_pdoc_byse');
				file_pdoc_byse = '';

				clearReg_forse();
				customerRegistration_forSe(searchcust);
			}
		
	  
		},
		error: function(xhr, textStatus, errorThrown) {
			//toast('searchcust:Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
	  

	 }
}

function clearReg_forse()
{
	$('#mobileno_update_se').val('');
	$('#firstName_update_se').val('');
    $('#lastName_update_se').val('');
    $('#update_address_se').val('');
	$('#pincode_update_se').val('');
	//$('#city_update_se').val('');

	$('#update_dob_se').val('');
	$('#update_doa_se').val('');

	
	document.getElementById('state_update_se').selectedIndex= 0;
	$("#city_update_se").html('');

	
	localStorage.setItem('filenmshop_byse','');
	localStorage.setItem('file_pdoc_byse','');

	document.getElementById("shop_photo_status_div_se").style.display = 'none';
	document.getElementById("doc_photo_status_div_se").style.display = 'none';

	document.getElementById('update_photo1_se').src = "assets/images/user_pic.png";
	document.getElementById('shopPhoto_registration_se').src = "assets/images/camera_icon.png";
	document.getElementById('identficationPhoto_registration_se').src = "assets/images/camera_icon.png";

	
}

function customerRegistration_forSe(mobileno)
{
	  //console.log('mobileno:'+mobileno);
	  $.ajax({
				
				url: SERVER2+'cust_registration_json_api.asp',
				type: 'GET',
				timeout: 300000,
				dataType: "json",
				data: {'apiuid':'MLOYALAPI','apipswd':'Ml0yalAP!2o14','mobileno': mobileno, 'title': '', 'firstname': ' ', 'Lastname': ''
				, 'gender': '', 'email': '', 'homeno': '', 'dobday': '', 'dobmonth': '', 'dobyear': '',
				'doaday': '', 'domonth': '', 'doayear': '', 'floor_flat': '', 'building': '', 'street': '',
				'town': '', 'city': '', 'country': '', 'occupation': '', 'scode': '','postalcode': ''},
				
				success: function(data, textStatus, xhr) {
					
					//console.log('Data:'+JSON.stringify(data));

					if(data.error!='')
					{
						toast(data.error);
					}
					else
					{
						$('#mobileno_update_se').val(mobileno);
						//showGeolocation_se();
						$.mobile.changePage( "#profiledata_se", { transition: "none"} );
					}
						
				 },
				error: function(xhr, textStatus, errorThrown) {
					 toast('Could not connect to Server, make sure you are conn ected to Internet'+errorThrown);
					}
				 
			});
}

function updateProfile_byse()
{
		var firstname = $('#firstName_update_se').val();
		var lastname = $('#lastName_update_se').val();
		var mobile = $('#mobileno_update_se').val();
		var retailShopName = '';
		//var retailShopName = $('#retailShopName_update_se').val();
		var pincode =$('#pincode_update_se').val();
		var city =$('#city_update_se').val();
		var state =$('#state_update_se').val();
		var address =$('#update_address_se').val();



		var mm ='';
		var dd ='';
		var dd1 ='';
		var yyyy = '';
		var yyyy1 = '';
		var dd2='';
		var mm2='';
		var dd3='';
		var yyyy2='';
		var yyyy3='';
		
		var birthday =$('#update_dob_se').val();
		var marriage2 =$('#update_doa_se').val();



		//var selfimg = localStorage.getItem('file_pphoto_byse');
		var shopimg_self = localStorage.getItem('filenmshop_byse');
		var docimg = localStorage.getItem('file_pdoc_byse');


        /* for birthday date */

		if(birthday!='')
		{
				var dob = birthday.split('-');
				mm = dob.length == 3 ? dob[1] : '';
				dd = dob.length == 3 ? dob[0] : '';
				dd1 = dob.length == 3 ? dob[0] : '';

				yyyy = dob.length == 3 ? dob[2] : '';
				yyyy1 = dob.length == 3 ? dob[2] : '';

		}
		if(dd.length==4)
		{
			yyyy=dd1;
			dd=yyyy1;
		}

		/* for marraiege date */

		if(marriage2!='')
		{
				var dom = marriage2.split('-');
				mm2 = dom.length == 3 ? dom[1] : '';
				dd2 = dom.length == 3 ? dom[0] : '';
				dd3 = dom.length == 3 ? dom[0] : '';

				yyyy2 = dom.length == 3 ? dom[2] : '';
				yyyy3 = dom.length == 3 ? dom[2] : '';

		}
		if(dd2.length==4)
		{
			yyyy2=dd3;
			dd2=yyyy3;
		}
		

		// var vtype = $('#update_vtype').val();

		// var vpa_txt1 = $('#update_vpa1_txt').val();
		// var vpa_domain1 = $('#update_vpa1_domain').val();
		// var vpa_txt2 = $('#update_vpa2_txt').val();
		// var vpa_domain2 = $('#update_vpa2_domain').val();

		// var card1 = $('#update_card1').val();
		// var card2 = $('#update_card2').val();

		// var vpamain1 = vpa_txt1+vpa_domain1;
		// var vpamain2 = vpa_txt2+vpa_domain2;

		// console.log(vpamain1);
		// console.log(vpamain2);
        
		
	if(mobile=='')
	{
		toast('Please enter mobile number.');
	}
    else if(firstname.trim()=='')
	{
		toast('Please enter mandatory fields.');
	}
	/*else if(shopimg_self=='' || shopimg_self==undefined || shopimg_self==null)
	{
		toast('Please check self photo');
	}*/
	// else if(vtype=='' || vtype==undefined || vtype==null)
	// {
	// 	toast('Please check Vehicle Type');
	// }
	// else if(vpa_txt1.trim()=='' || vpa_domain1=='' || vpa_domain1==undefined || vpa_domain1==null)
	// {
	// 	toast('Please check VPA details');
	// }
	// else if(vpa_txt2.trim()=='' || vpa_domain2=='' || vpa_domain2==undefined || vpa_domain2==null)
	// {
	// 	toast('Please check VPA details');
	// }
	// else if(card1.trim()=='' || card2.trim()=='')
	// {
	// 	toast('Please enter card details.');
	// }
	else
	{
    
	 $.ajax({
			url: SERVER+'mloyalprofileupdate.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				'FirstName': firstname,
				'LastName': lastname,
				'deviceid': reg_id,
				'cname':'',
				'mobileno': mobile,
				'Emailid': '',
				'dd': dd,
				'mm': mm,
				'yy': yyyy,
                'deviceType': deviceType,
				'dd1': dd2,
				'mm1': mm2,
				'yy1': yyyy2,
				'Address': address,
				'PinCode': pincode,
				'CityId': city,
				'StateId': state,
				'ShopName': retailShopName,
				'UserPhoto': shopimg_self,
				'Shopphoto': '',
			    'docphoto': docimg
			},
			success: function(data, textStatus, xhr) {

				
				if (data.indexOf("Success")>=0)
				{
						toast('User updated/registered successfully.');
						$.mobile.changePage( "#homepage_se", { transition: "none"} );
						clearReg_forse();

				}
				else if(data=='Failed')
					toast('Update failed.');
				else
					toast(data);
				
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
		
  }
		
}

function askfor_Catalog()
{

	try{
	$( "#sidebar" ).panel( "close" );
	}catch(err) 
	{  }

	$.ajax({
	    url: SERVER2+'add_pyhsical_catalogue_json_api.asp',
	    type: 'GET',
	    timeout: 50000,
		dataType: 'json',
		data: {
			'apiuid':'MLOYALAPI',
			'apipswd':'Ml0yalAP!2o14',
			'firstname': user.firstname,
			'lastname': user.lastname,
			'mobileno': user.mobile,
			'Address1': user.address,
			'Address2': '',
			'City': user.city,
			'state': user.state,
			'pincode': user.pincode
		},
		complete: function(xhr, textStatus) {
	    //called when complete
		},
		success: function(data, textStatus, xhr) {

		    console.log('JSONDATA:'+JSON.stringify(data));

			if(data.error.length>0)
			{
				toast(data.error);
			}
			else
			{
		        toast_scan(data.msg);
			}
	  
		},
		error: function(xhr, textStatus, errorThrown) {
			toast('catalog request:Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
		}
	  });
}