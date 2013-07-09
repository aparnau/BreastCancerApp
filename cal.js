// JScript File

servlet = "http://www.mobiletest.mednl.com/assessment.php";
_error_msg_history = "This tool cannot calculate breast cancer risk accurately for women with a medical history of any breast cancer or of DCIS or LCIS.";
_error_msg_current_age = "This tool only calculates risk for women 35 years of age or older.";
_error_msg_hist_age = "This tool cannot calculate breast cancer risk accurately for women with a medical history of breast cancer or of DCIS or LCIS. In addition, the tool only calculates risk for women 35 years of age or older.";
function checkAge() {
	
  if (document.risk.current_age.selectedIndex==1)
  {	  
    alert(_error_msg_current_age);
  }
  else
  {
	 if(document.risk.current_age.selectedIndex==0)
	 {
		 alert("You must select the age of the patient.");
	 }
	 else
	 {
 window.location = 'riskcalc.html#riskcalc3'	 		 
//	alert('next question');  
	 }
  }
}
function checkHistory(val) {
	
//	alert(val);
 if (val==1){
   alert(_error_msg_history);
 }
 else
 {
	  history_val=val;
  window.location = 'riskcalc.html#riskcalc2'	  
//	 alert('go to next question');
 }
   
}

function getage_at_menarche(val1)
{
age_at_menarche=val1;
 window.location = 'riskcalc.html#riskcalc4'	
//alert(age_at_menarche);
//alert("go to next ques");	
}

function getage_at_first_live_birth(val2)
{
	//alert(val2);
	 age_at_first_live_birth=val2;
 window.location = 'riskcalc.html#riskcalc5'	 
//	alert('go to next question');
}

function getrelated_with_breast_cancer(val3)
{
	related_with_breast_cancer=val3;
	window.location = 'riskcalc.html#riskcalc6'
//	alert('go to next page');
	
}

function checkBiopsy(val4)
{
ever_had_biopsy=val4;
//alert(val4);
if(val4=='99')
{

document.getElementById('btn1').style.display='block';
document.getElementById('btn2').style.display='none';
document.getElementById('btn3').style.display='none';
document.getElementById('btn4').style.display='block';
document.getElementById('btn5').style.display='none';
document.getElementById('btn6').style.display='none';
document.getElementById('btn7').style.display='none';
previous_biopsies='99';
biopsy_with_hyperplasia='99';
setTimeout(redirect, 5000);
}

if(val4=='0')
{
	
document.getElementById('btn1').style.display='block';
document.getElementById('btn2').style.display='none';
document.getElementById('btn3').style.display='none';
document.getElementById('btn4').style.display='block';
document.getElementById('btn5').style.display='none';
document.getElementById('btn6').style.display='none';
document.getElementById('btn7').style.display='none';
previous_biopsies='0';
biopsy_with_hyperplasia='0';
setTimeout(redirect, 5000);
}

if(val4=='1')
{

document.getElementById('btn1').style.display='none';
document.getElementById('btn2').style.display='block';
document.getElementById('btn3').style.display='block';
document.getElementById('btn4').style.display='none';
document.getElementById('btn5').style.display='block';
document.getElementById('btn6').style.display='block';
document.getElementById('btn7').style.display='block';
}

function redirect(){
   window.location = "riskcalc.html#riskcalc7";
}

}

function test(val5)
{
	//	alert(val5);
previous_biopsies=val5;	
}

function test1(val6)
{

biopsy_with_hyperplasia=val6;	

window.location= 'riskcalc.html#riskcalc7'
// setTimeout("window.location= riskcalc.html#riskcalc7",5000);

}



function checkEthnicity(val7){
	race=val7;
	rc=val7;
    if (race=='1') {
		
		document.getElementById('btn71').style.display='block';
		document.getElementById('btn72').style.display='none';
		document.getElementById('btn73').style.display='none';
		document.getElementById('btn74').style.display='none';
		document.getElementById('btn75').style.display='none';
		document.getElementById('btn76').style.display='none';
		document.getElementById('btn77').style.display='none';
		
        //alert("Assessments for African American women may underestimate the chance of breast cancer and are subject to greater uncertainty than those for white women. Researchers are conducting additional studies, including studies with minority populations, to gather more data and to increase the accuracy of the tool for women in these populations."); 
        //dec282007 SRamaiah: this has been removed as the new model(CARE) is now in use for african american women
    }
	
	if(race=='2')
	{
		
		document.getElementById('btn71').style.display='block';
		document.getElementById('btn72').style.display='none';
		document.getElementById('btn73').style.display='none';
		document.getElementById('btn74').style.display='none';
		document.getElementById('btn75').style.display='none';
		document.getElementById('btn76').style.display='none';
		document.getElementById('btn77').style.display='none';
		
        //alert("Assessments for African American women may underestimate the chance of breast cancer and are subject to greater uncertainty than those for white women. Researchers are conducting additional studies, including studies with minority populations, to gather more data and to increase the accuracy of the tool for women in these populations."); 
        //dec282007 SRamaiah: this has been removed as the new model(CARE) is now in use for african american women
    
	}
	
	if (race == '3')
    { 
	alert("Assessments for Hispanic women are subject to greater uncertainty than those for white and African American women. Researchers are conducting additional studies, including studies with minority populations, to gather more data and to increase the accuracy of the tool for women in these populations."); 
	
		document.getElementById('btn71').style.display='block';
		document.getElementById('btn72').style.display='none';
		document.getElementById('btn73').style.display='none';
		document.getElementById('btn74').style.display='none';
		document.getElementById('btn75').style.display='none';
		document.getElementById('btn76').style.display='none';
		document.getElementById('btn77').style.display='none';
		
        //alert("Assessments for African American women may underestimate the chance of breast cancer and are subject to greater uncertainty than those for white women. Researchers are conducting additional studies, including studies with minority populations, to gather more data and to increase the accuracy of the tool for women in these populations."); 
        //dec282007 SRamaiah: this has been removed as the new model(CARE) is now in use for african american women
    
	}
      
   if (race == '5')
    { 
	alert("Assessments for American Indian or Alaskan Native women are uncertain and are based on data for white women. Researchers are conducting additional studies, including studies with minority populations, to gather more data and to increase the accuracy of the tool for women in these populations.");
	
		document.getElementById('btn71').style.display='block';
		document.getElementById('btn72').style.display='none';
		document.getElementById('btn73').style.display='none';
		document.getElementById('btn74').style.display='none';
		document.getElementById('btn75').style.display='none';
		document.getElementById('btn76').style.display='none';
		document.getElementById('btn77').style.display='none';
		
        //alert("Assessments for African American women may underestimate the chance of breast cancer and are subject to greater uncertainty than those for white women. Researchers are conducting additional studies, including studies with minority populations, to gather more data and to increase the accuracy of the tool for women in these populations."); 
        //dec282007 SRamaiah: this has been removed as the new model(CARE) is now in use for african american women
    
	
	 }
	 
   if (race == '6')
    { 
	alert("This risk assessment was based on data for white females.");
	
		document.getElementById('btn71').style.display='block';
		document.getElementById('btn72').style.display='none';
		document.getElementById('btn73').style.display='none';
		document.getElementById('btn74').style.display='none';
		document.getElementById('btn75').style.display='none';
		document.getElementById('btn76').style.display='none';
		document.getElementById('btn77').style.display='none';
		
        //alert("Assessments for African American women may underestimate the chance of breast cancer and are subject to greater uncertainty than those for white women. Researchers are conducting additional studies, including studies with minority populations, to gather more data and to increase the accuracy of the tool for women in these populations."); 
        //dec282007 SRamaiah: this has been removed as the new model(CARE) is now in use for african american women
    
	 }
	 
	 
	 
	 
	 if(race=='4')
	 {
		document.getElementById('btn71').style.display='none';
		document.getElementById('btn72').style.display='block';
		document.getElementById('btn73').style.display='block';
		document.getElementById('btn74').style.display='block';
		document.getElementById('btn75').style.display='block';
		document.getElementById('btn76').style.display='block';
		document.getElementById('btn77').style.display='block';	 
		 
	 }

	}
	
function subrace(val8)
{
	if(race=='4'){
	subrace=val8;
	}
}

/*function checkBiopsy(val4) {
	
	
	
  if (document.risk.ever_had_biopsy.selectedIndex==1) { // Unknown
    document.risk.previous_biopsies.options.length = 0;
    document.risk.previous_biopsies.options[0] = new Option("n/a");
    document.risk.previous_biopsies.selectedIndex = 0;
    document.risk.previous_biopsies.options[0].value = 99;
    document.risk.biopsy_with_hyperplasia.options.length = 0;
    document.risk.biopsy_with_hyperplasia.options[0] = new Option("n/a");
    document.risk.biopsy_with_hyperplasia.selectedIndex = 0;
    document.risk.biopsy_with_hyperplasia.options[0].value = 99;
  }
  
  
  if (document.risk.ever_had_biopsy.selectedIndex==2) { // No
    document.risk.previous_biopsies.options.length = 0;
    document.risk.previous_biopsies.options[0] = new Option("n/a");
    document.risk.previous_biopsies.selectedIndex = 0;
    document.risk.previous_biopsies.options[0].value = 0;
    document.risk.biopsy_with_hyperplasia.options.length = 0;
    document.risk.biopsy_with_hyperplasia.options[0] = new Option("n/a");
    document.risk.biopsy_with_hyperplasia.selectedIndex = 0;
    document.risk.biopsy_with_hyperplasia.options[0].value = 0;
  }
  if (document.risk.ever_had_biopsy.selectedIndex==3) { // Yes
    document.risk.previous_biopsies.options[0] = new Option("(select) ");
    document.risk.previous_biopsies.options[0].value = 999;
    document.risk.previous_biopsies.options[1] = new Option("1");
    document.risk.previous_biopsies.options[1].value = 1;
    document.risk.previous_biopsies.options[2] = new Option("> 1");
    document.risk.previous_biopsies.options[2].value = 2;
    document.risk.previous_biopsies.selectedIndex = 0;
    document.risk.biopsy_with_hyperplasia.options[0] = new Option("(select) ");
    document.risk.biopsy_with_hyperplasia.options[0].value = 999;
    document.risk.biopsy_with_hyperplasia.options[1] = new Option("Unknown");
    document.risk.biopsy_with_hyperplasia.options[1].value = 99;
    document.risk.biopsy_with_hyperplasia.options[2] = new Option("No");
    document.risk.biopsy_with_hyperplasia.options[2].value = 0;
    document.risk.biopsy_with_hyperplasia.options[3] = new Option("Yes");
    document.risk.biopsy_with_hyperplasia.options[3].value = 1;
    document.risk.biopsy_with_hyperplasia.selectedIndex = 0;
//    document.reload();
  }
}*/
function calculate() {
//alert('hi');

  current_age = document.risk.current_age.options[document.risk.current_age.selectedIndex].value;
  //alert(current_age);
//  age_at_menarche = age_at_menarche;
 // alert("age_at_menarche"+age_at_menarche);
  age_at_first_live_birth = age_at_first_live_birth;
 // alert(age_at_first_live_birth);
  ever_had_biopsy = ever_had_biopsy;
 // alert(ever_had_biopsy);
  previous_biopsies = previous_biopsies;
 //alert(previous_biopsies);
  biopsy_with_hyperplasia = biopsy_with_hyperplasia;
 // alert( biopsy_with_hyperplasia);
  related_with_breast_cancer = related_with_breast_cancer;
 // alert(related_with_breast_cancer);
 //alert("ra"+race);
  if (race == '4') {
      race = subrace;
  }
  else {
      race = race;

  }
 // alert("rt"+race);

  if (rc=='4')
    asian = "&asian=" + escape("It has been observed that recent immigrants from rural Asia may have a lower risk of breast cancer than calculated.");
  else
    asian = "";
//alert(asian);
  if (previous_biopsies=="")
    previous_biopsies = "99";
	//alert(previous_biopsies);
  if (biopsy_with_hyperplasia=="")
    biopsy_with_hyperplasia = "99";
//alert(biopsy_with_hyperplasia);
  parameters = "current_age=" + current_age +
         "&age_at_menarche=" + age_at_menarche +
         "&age_at_first_live_birth=" + age_at_first_live_birth +
         "&ever_had_biopsy=" + ever_had_biopsy +
         "&previous_biopsies=" + previous_biopsies +
         "&biopsy_with_hyperplasia=" + biopsy_with_hyperplasia +
         "&related_with_breast_cancer=" + related_with_breast_cancer +
         "&race=" + race +
           asian;
	//	   alert(parameters);

  // Web Analytics (Omniture) - call web analytics-related function defined in 
  // in analytics_include.html and rendered in the web analytics page-load tag.  
  // If web analytics are turned off,  analytics_include.html is empty and this function is not found.
  // In the future it may be more efficient to attach this JavaScript code 
  // to the appropriate page event (click or submit) so no reference to web analytics
  // will be needed in this file.  
  if(window.Analytics_CalculateRiskConversionEvent)
    window.Analytics_CalculateRiskConversionEvent();
//alert(document.location);
 $.getJSON("http://www.mobiletest.mednl.com/assessment.php?jsoncallback=?&"+parameters, function(data){ 
//alert(data);

var abs1=data['abs1'];
var avr1=data['avr1'];
var abs2=data['abs2'];
var avr2=data['avr2'];
var age=data['age'];
var minus1=data['minus1'];
window.location='assesmentresult.html?&abs1='+abs1+'&avr1='+avr1+'&abs2='+abs2+'&avr2='+avr2+'&age='+age+'&minus1='+minus1+'&subrace='+race;
});
  return;

 
}
function disclaimer() {
  if (document.risk.race.selectedIndex==0||document.risk.race.selectedIndex==1) {
    document.risk.dText.value = "";
  }
  else if (document.risk.race.selectedIndex==2) {
    document.risk.dText.value = "The projections for African American women may slightly underestimate the likelihood of breast cancer and are subject to greater uncertainty than those for white women.";
  }
  else if (document.risk.race.selectedIndex==3) {
    document.risk.dText.value = "The projections for Hispanic women are subject to greater uncertainty than those for white women.";
  }
  else if (document.risk.race.selectedIndex==4) {
    document.risk.dText.value = "Calculations for Asian or Pacific Islander women are based on the rates for white women and are uncertain.";
  }
  else if (document.risk.race.selectedIndex==5) {
    document.risk.dText.value = "Calculations for American Indian or Alaskan Native women are based on the rates for white women and are uncertain.";
  }
  else if (document.risk.race.selectedIndex==6) {
    document.risk.dText.value = "If the patient's race is unknown, the program will use data for white females to estimate the predicted risk.";
  }
}

function popUp(URL) {
day = new Date();
id = day.getTime();
eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=0,location=0,statusbar=1,menubar=0,resizable=1,width=497,height=262,left = 391.5,top = 381');");
}
