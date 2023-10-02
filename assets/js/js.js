function getXMLHttp(){xml_http=new XMLHttpRequest();return xml_http;}
function clearValues(theForm)
{for(var i=0;i<theForm.elements.length;i++)
{var e=theForm.elements[i];e.value="";}
return false;}
function trim(strVar){if(strVar.length>0){while(strVar.charAt(0)==" ")
strVar=strVar.substring(1,strVar.length);while(strVar.charAt(strVar.length-1)==" ")
strVar=strVar.substring(0,strVar.length-1);}
return strVar;}
function isNotAlphabets(str){for(var i=0;i<str.length;i++)
{var ch=str.substring(i,i+1);if((ch<"a"||"z"<ch)&&(ch<"A"||"Z"<ch))
{return true;}}
return false;}
function isNotNumeric(str){for(var i=0;i<str.length;i++)
{var ch=str.substring(i,i+1);if((ch<'0'||'9'<ch))
{if(ch=="-"||ch==".")continue;return true;}}
return false;}
function isNotID(str){for(var i=0;i<str.length;i++)
{var ch=str.substring(i,i+1);if((ch<'0'||'9'<ch)&&((ch<"a"||"z"<ch)&&(ch<"A"||"Z"<ch)))
{if(ch=="_")continue;return true;}}
return false;}
function isValidEmail(emailid){var l=emailid.length;if(l==0)
{return false;}
if(l!=0)
{var a=emailid.indexOf('@');var d=emailid.lastIndexOf('.');var str1=emailid.substr(0,a);var str2=emailid.substr(a+1,d-a-1);var str3=emailid.substr(d+1,l);var len1=str1.length;var len2=str2.length;var len3=str3.length;if(a<0||d<2)
{alert("Check for missing '@' or '.' ");return false;}
else if(a>d)
{alert("Invalid email. Please enter correct email address");return false;}
if(len1<=1||len2<=1||len3<=1)
{alert("Invalid email. Please enter correct email address");return false;}}
return true;}
function validEmail(str)
{mailRE=new RegExp();mailRE.compile('^[\._a-z0-9-]+@[\.a-z0-9-]+[\.]{1}[a-z]{2,4}$','gi');return(mailRE.test(str));}
function checkAll(checked){for(var i=0;i<document.removeForm.elements.length;i++){var e=document.removeForm.elements[i];if(checked==true)e.checked=checked;else e.checked='';}}
function checkAllNew(checked,DataForm){for(var i=0;i<document.forms[DataForm].elements.length;i++){var e=document.forms[DataForm].elements[i];if(e.type=="checkbox")e.checked=checked;}}
function checkAllFreight(checked)
{for(var i=0;i<document.frmdelStatus.elements.length;i++)
{var e=document.frmdelStatus.elements[i];if(e.type=="checkbox")e.checked=checked;}}
function checkCreateUser(membersForm)
{var member=trim(document.membersForm.loginId.value);if(member.length==0)
{alert("Please enter Login ID");document.membersForm.loginId.focus();return false;}
var member=document.membersForm.loginId.value;if(member.length<5)
{alert("Login ID should be atleast Five(5) Characters!");document.membersForm.loginId.focus();return false;}
if(isNotID(member))
{alert("Invalid Characters in Login ID");document.membersForm.loginId.focus();return false;}
var password=trim(document.membersForm.password.value);if(password.length==0)
{alert("Please enter Password");document.membersForm.password.focus();return false;}
var password=document.membersForm.password.value;if(password.length<6)
{alert("Password should be atleast Six(6) Characters!");document.membersForm.password.focus();return false;}
if(isNotID(password))
{alert("Invalid Characters in Password");document.membersForm.password.focus();return false;}
var confirm_password=document.membersForm.confirm_password.value;if(password!=confirm_password)
{alert("Password & Confirm Password mismatch!");document.membersForm.confirm_password.focus();return false;}
var fname=trim(document.membersForm.name.value);if(fname.length==0)
{alert("Please enter Name");document.membersForm.name.focus();return false;}
var address_1=trim(document.membersForm.address_1.value);if(address_1.length==0)
{alert("Please enter Street Address - 1");document.membersForm.address_1.focus();return false;}
var country=document.membersForm.country.value;if(country.length==0)
{alert("Please Select Users Country");document.membersForm.country.focus();return false;}
var email_1=trim(document.membersForm.email_1.value);if(email_1.length==0)
{alert("Please enter Email - 1");document.membersForm.email_1.focus();return false;}
if(!validEmail(email_1))
{alert("Invalid Email ID !");document.membersForm.email_1.focus();return false;}
return true;}
function checkfrmedit(chk)
{if(chk.keyword.value=="")
{alert("Please enter keyword to search");chk.keyword.focus();return false;}}
function deleteAlert1()
{var i=0;var total=0;var msg="";dml=frmdelStatus;len=dml.elements.length;if(len)
{for(i=0;i<len;i++)
{ss=dml.elements[i].name
if(dml.elements[i].type=="checkbox")
{if(dml.elements[i].checked==true)
{total=total+1;}}}
if(total>0)
{msg=msg+'Do You Like to remove '+total+' records ?';}
else
{alert("Please check the items to remove !");return false;}
if(msg.length>0)
{var flag;flag=confirm(msg+" \n If Yes Press \"OK\" else Press \"Cancel\".");if(flag==true)
return true;}}
return false;}
function deleteRecords(DataForm){var total=0;var msg="";for(var i=0;i<document.forms[DataForm].elements.length;i++)
{var e=document.forms[DataForm].elements[i];if(e.type=="checkbox"&&e.checked==true)total++;}
if(parseInt(total)>0){msg=msg+'Do You Like to remove '+total+' records ?';}
else{alert("Please check the items to remove !");return false;}
if(msg.length>0)
{var flag;flag=confirm(msg+" \n If Yes Press \"OK\" else Press \"Cancel\".");if(flag==true)
return true;else return false;}}
function deleteAlert(theForm){var records=theForm.records.value;var total=0;var msg="";if(records>0)
{for(i=0;i<theForm.length;i++)
{e=theForm.elements[i];name=e.name;name=name.substr(0,4);if(e.type=='checkbox'&&(name=="item"||name=="note"||name=="mana"||name=="comm"||name=="unsu"||name=="subi"||name=="memb"||name=="chkm"))
{if(eval('e.checked')==true)
{total=total+1;}}}
if(total>0)
{msg=msg+'Do You Like to remove '+total+' records ?';}
else
{alert("Please check the items to remove !");return false;}
if(msg.length>0)
{var flag;flag=confirm(msg+" If Yes Press \"OK\" else Press \"Cancel\".");if(flag==true)
return true;}}
return false;}
function deleteVehicleAlert(theForm){var records=theForm.records.value;var total=0;var msg="";if(records>0){var form_len=theForm.elements.length;for(i=0;i<form_len;i++){var e=theForm.elements[i];if(e.type=='checkbox'&&e.name=="sno[]"&&e.checked){total=total+1;}}
if(total>0){msg=msg+'Do You Like to remove '+total+' records ?';}
else{alert("Please check the items to remove !");return false;}
if(msg.length>0){var flag;flag=confirm(msg+" If Yes Press \"OK\" else Press \"Cancel\".");if(flag==true)
return true;}}
return false;}
function deleteAlert_currency(theForm){var total=0;var msg="";for(i=0;i<document.forms[theForm].elements.length;i++)
{e=document.forms[theForm].elements[i];name=e.name;name=name.substr(0,4);if(e.type=='checkbox'&&name=="item")
{if(eval('e.checked')==true)
{total=total+1;}}}
if(total>0)
{msg=msg+'Do You Like to remove '+total+' records ?';}
else
{alert("Please check the items to remove !");return false;}
if(msg.length>0)
{var flag;flag=confirm(msg+" If Yes Press \"OK\" else Press \"Cancel\".");if(flag==true)
return true;}
return false;}
function deleteAlertOrder(theForm)
{var records=theForm.records.value;var total=0;var msg="";if(records>0)
{for(i=0;i<theForm.length;i++)
{e=theForm.elements[i];name=e.name;name=name.substr(0,4);if(e.type=='checkbox'&&name=="item")
{if(eval('e.checked')==true)
{total=total+1;}}}
if(total>0)
{msg=msg+"If you will delete these orders, it will delete from below modules \nOrder Manager \nCustomer Invoice \nCustom Invoice	\nShipping Instruction \n\nDo You want to delete "+total+" orders ???";}
else
{alert("Please check the items to remove !");return false;}
if(msg.length>0)
{var flag;flag=confirm(msg+" If Yes Press \"OK\" else Press \"Cancel\".");if(flag==true)
return true;}}
return false;}
function deleteAdmin(theForm)
{var records=theForm.records.value;var total=0;var msg="";if(records>0)
{for(i=0;i<theForm.length;i++)
{e=theForm.elements[i];if(e.type=='checkbox')
{if(eval('e.checked')==true)
{total=total+1;}}}
if(total>0)
{msg=msg+'Do You Like to remove '+total+' records ?';}
else
{alert("Please check the items to remove !");return false;}
if(msg.length>0)
{var flag;flag=confirm(msg+" If Yes Press \"OK\" else Press \"Cancel\".");if(flag==true)
return true;}}
return false;}
function chkCompare(theForm)
{var records=theForm.records.value;var total=0;var msg="";if(records>0)
{for(i=0;i<theForm.length;i++)
{e=theForm.elements[i];name=e.name;name=name.substr(0,4);if(e.type=='checkbox'&&name=="item")
{if(eval('e.checked')==true)
{total=total+1;}}}
if(total<=0)
{alert("Please select atleast two vehicles to compare !");return false;}
else if(total<2||total>5)
{alert("Please select minimum 2 & maximum 5 vehicles for comparison !");return false;}}
return true;}
function checkEmpty(formName,fieldArr,fieldNameArr)
{var arrLen=fieldArr.length;for(i=0;i<arrLen;i++)
{var field=eval("document."+formName+"."+fieldArr[i]);if(field.value.length==0)
{alert("Please enter "+fieldNameArr[i]+"");field.focus();return false;}}
return true;}
function createFreight(chk)
{if((chk.fctryId.value=="")&&(chk.fromCountry.value==""))
{alert("Please Select From Country Or Add New Country to create Freight...");chk.fctryId.focus();return false;}
if((chk.fportId.value=="")&&(chk.fromPort.value==""))
{alert("Please Select From Port Or Add New Port to create Freight...");chk.fportId.focus();return false;}
if((chk.tctryId.value=="")&&(chk.toCountry.value==""))
{alert("Please Select To Country Or Add New Country to create Freight...");chk.tctryId.focus();return false;}
if((chk.tportId.value=="")&&(chk.toPort.value==""))
{alert("Please Select To Port Or Add New Port to create Freight...");chk.tportId.focus();return false;}}
var pop='';function openwin(nm,width,height){var name=nm;if(pop&&!pop.closed){pop.close();}
pop=eval("window.open('"+name+"','NewWIN','chrome[4],toolbar=no,left=50,top=50,width="+width+",height="+height+",directories=no,menubar=no,SCROLLBARS=yes,left=2,right=2')");if(!pop.opener)popUpWin.opener=self;}
function closewin()
{window.close();}
function checkLogin(chk)
{if(chk.userName.value.length==0)
{alert("User Name can not be left blank");chk.userName.focus();return false;}
if(chk.password.value.length==0)
{alert("Password can not be left blank");chk.password.focus();return false;}}
function MM_openBrWindow(theURL,winName,features){window.open(theURL,winName,features);}
function checkDelete(theForm)
{var records=theForm.records.value;var total=0;var msg="";if(records>0)
{for(i=0;i<theForm.length;i++)
{e=theForm.elements[i];if(e.type=='checkbox')
{if(eval('e.checked')==true)
{total=total+1;}}}
if(total>0)
{msg=msg+'Do You Like to remove '+total+' records ?';}
else
{alert("Please check the items to remove !");return false;}
if(total==records)
{alert("Atleast one vehicle compulsory in your order");return false;}
if(msg.length>0)
{var flag;flag=confirm(msg+" If Yes Press \"OK\" else Press \"Cancel\".");if(flag==true)
return true;}}
return false;}
function auctionOrder()
{var current_bid,bid_price;var num=0;var isSubmit=0;var records=form.records.value;var bid_interval=document.form.bid_interval.value;for(var j=0;j<records;j++)
{current_bid=document.form['current_bid['+j+']'].value;bid_price=document.form['price['+j+']'].value;current_bid=eval(current_bid)+eval(bid_interval);if(current_bid>bid_price)
{break;}}
if(j==records)isSubmit=1;if(isSubmit==1)
{document.form.action="auction_order_bid.php";document.form.target="";document.form.submit();}
else alert("Please enter your Bid Price more than "+current_bid+"\nMinimum bid margin is JPY "+bid_interval+"!");}
function check(checked,theForm,id)
{var bidPrice=theForm.value;if(bidPrice.length==0)
{checked=false;}
if(isNotInt(bidPrice))
{alert("Invalid Bid Price, Enter Only  Numeric value!");theForm.focus();}
else
{for(var i=0;i<document.form.elements.length;i++)
{var e=document.form.elements[i];if(e.type=="checkbox")
{if(e.value==id)
e.checked=checked;}}}}
function isNotInt(str){for(var i=0;i<str.length;i++)
{var ch=str.substring(i,i+1);if(ch<'0'||'9'<ch)
{return true;}}
return false;}
var scrj=1;function pageTop(){var x1=x2=x3=0;var y1=y2=y3=0;if(document.documentElement){x1=document.documentElement.scrollLeft||0;y1=document.documentElement.scrollTop||0;}
if(document.body){x2=document.body.scrollLeft||0;y2=document.body.scrollTop||0;}
x3=window.scrollX||0;y3=window.scrollY||0;var x=Math.max(x1,Math.max(x2,x3));var y=Math.max(y1,Math.max(y2,y3));window.scrollTo(Math.floor(x/2),Math.floor(y/2));if(x>0||y>0){window.setTimeout("pageTop()",30);}}
function req_check_toggle(checked,na,obj)
{for(var i=0;i<document.form1.elements.length;i++)
{var e=document.form1.elements[i];var n=e.name;var str=n.substring(0,na.length);if(e.type=="checkbox"&&str==na)
{if(obj.checked==true)
{e.checked=false;e.disabled=true;}
else
{e.disabled=false;}}}}
function req_checkAll(checked,na)
{for(var i=0;i<document.form1.elements.length;i++)
{var e=document.form1.elements[i];var n=e.name;var str=n.substring(0,na.length);if(e.type=="checkbox"&&str==na)
e.checked=checked;}}
function textLimitCheck(theForm,theControl,maxLength)
{if(theForm.value.length>maxLength)
{alert(maxLength+' characters limit. \r Excessive data will be truncated.');theForm.value=theForm.value.substring(0,maxLength-1);theForm.focus();}
theControl.value=theForm.value.length;}
var blink_onoff=1;function blinkMe(obj,on_color,off_color,blinkspeed)
{if(blink_onoff==1){document.getElementById(obj).style.color=on_color;blink_onoff=0;}
else{document.getElementById(obj).style.color=off_color;blink_onoff=1;}
setTimeout('blinkMe("'+obj+'","'+on_color+'","'+off_color+'",'+blinkspeed+')',blinkspeed);}
function changCurr(crate){theForm=document.form1;var j=theForm.changeCurrBox.selectedIndex;var sym=theForm.changeCurrBox[j].text;var maxLimit=theForm.total_records.value;for(i=0;i<maxLimit;i++){var jpy='price_local'+i;var dmp_prc='dmp_price'+i;var curr='curr'+i;var dmp_curr='dummy_curr'+i;var save_id='save'+i;jpyVal=document.getElementById(jpy).value;DmpjpyVal=document.getElementById(dmp_prc).value;if(jpyVal>0){newVal=parseInt((jpyVal*crate)/100);newVal=addCommas(newVal)+' '+sym;document.getElementById(curr).innerHTML=newVal;}
else document.getElementById(curr).innerHTML='ASK';if(DmpjpyVal>0){dmpnewVal=parseInt((DmpjpyVal*crate)/100);dmpnewVal=addCommas(dmpnewVal)+' '+sym;document.getElementById(dmp_curr).innerHTML=dmpnewVal;}
if(jpyVal>0&&DmpjpyVal>0)
{var saveVal=0;saveVal=parseInt(jpyVal)-parseInt(DmpjpyVal);if(saveVal>0)
{saveVal=parseInt((saveVal*crate)/100);saveVal=addCommas(saveVal)+' '+sym;document.getElementById(save_id).innerHTML=saveVal;}}}
var foo=typeof document.forms['bot_form']!='undefined';if(foo){theForm=document.bot_form;var maxLimit=theForm.total_records.value;for(i=1;i<maxLimit;i++)
{var jpy='price_local'+i;var curr='curr'+i;jpyVal=document.getElementById(jpy).value;if(jpyVal>0){newVal=parseInt((jpyVal*crate)/100);newVal=addCommas(newVal)+' '+sym;document.getElementById(curr).innerHTML=newVal;}
else document.getElementById(curr).innerHTML='ASK';}}
var xml_Http=getHttp();xml_Http.open("GET","set_currency.php?curr="+sym,true);xml_Http.send(null);}
function addCommas(nStr){nStr+='';x=nStr.split('.');x1=x[0];x2=x.length>1?'.'+x[1]:'';var rgx=/(\d+)(\d{3})/;while(rgx.test(x1)){x1=x1.replace(rgx,'$1'+','+'$2');}
return x1+x2;}
function changCurr_compare(crate,curr_name){var s=0;$('.compare_curr_c').each(function(){var old_value=$(this).val();var new_value=roundByTen(Math.round((old_value*crate)/100));if(new_value==0){$('#price_'+s).html('ASK');}
else{$('#price_'+s).html(curr_name+" "+addCommas(new_value));}
s++;});}
function compare(stockno,t){var count=$('#compareCount').html();if(count>=5){alert('You cannot select more than five vehicles.');return false;}
var parameters='action=compare';parameters+='&conversion_rate='+conversion_rate
parameters+='&dafault_curr='+dafault_curr
parameters+='&stock_no='+stockno;parameters+='&t='+t;$.ajax({url:ajaxLinkURL+'action.php',data:parameters,cache:false,type:'POST',dataType:'html',async:true,success:function(responseHtml){showcomparediv(conversion_rate,dafault_curr,stockno,t);$('#com_uni_'+stockno+t).addClass("com_bac_col");$('#com_uni_'+stockno+t).removeAttr("onclick");var onclickFunction='remove_vehicle(\''+stockno+'\', \''+t+'\');';$('#com_uni_'+stockno+t)[0].setAttribute('onclick',onclickFunction);$('#compare_text_'+stockno+t).html('Remove ');$('#compare').removeAttr("style");$('#compare')[0].setAttribute('style','display:block');$('#compareCount').html(responseHtml);}});return false;}
function hidecompare(){$('#veh_title').hide();$('.veh_title').hide();$('#show_hide').html('Show &uarr;');$('#compare_box').removeAttr("onclick");var onclickFunction='showcompare();';$('#show_hide')[0].setAttribute('onclick',onclickFunction);$("#mini").hide();var parameters='action=comhideshow';parameters+='&type=hide';$.ajax({url:ajaxLinkURL+'action.php',data:parameters,cache:false,type:'POST',dataType:'html',async:true,success:function(responseHtml){}});}
function showcompare(){$('.veh_title').show();$('#veh_title').show();$("#mini").text("-");$('#show_hide').html('Hide &darr;');$('#compare_box').removeAttr("onclick");var onclickFunction='hidecompare();';$('#show_hide')[0].setAttribute('onclick',onclickFunction);$("#mini").show();var parameters='action=comhideshow';parameters+='&type=show';$.ajax({url:ajaxLinkURL+'action.php',data:parameters,cache:false,type:'POST',dataType:'html',async:true,success:function(responseHtml){}});}
function remove_vehicle(stockno,t){var parameters='action=remove_vehicle';parameters+='&stock_no='+stockno;parameters+='&t='+t;$.ajax({url:ajaxLinkURL+'action.php',data:parameters,cache:false,type:'POST',dataType:'html',async:true,success:function(responseHtml){if(responseHtml==0)$('.compare').hide();$('#comparebox_'+stockno+t).remove();$('#compare_text_'+stockno+t).html('Compare ');$('#com_uni_'+stockno+t).removeClass("com_bac_col");$('#com_uni_'+stockno+t).removeAttr("onclick");var onclickFunction='compare(\''+stockno+'\', \''+t+'\');';$('#compareCount').html('');$('#compareCount').html(responseHtml);if($("#com_uni_"+stockno+t).length!=0)$('#com_uni_'+stockno+t)[0].setAttribute('onclick',onclickFunction);}});}
function clearall(){var parameters='action=clear_all_compare';var i='';$.ajax({url:ajaxLinkURL+'action.php',data:parameters,cache:false,type:'POST',dataType:'json',async:true,success:function(responseHtml){$('#compareCount').html('');$('.compare').hide();var stkArr=String(responseHtml).split(',');for(var s=0;s<stkArr.length;s++){var lastChar=stkArr[s].charAt(stkArr[s].length-1);var stockno=stkArr[s].substring(0,stkArr[s].length-1);if($("#com_uni_"+stkArr[s]).length!=0)
{$('#comparebox_'+stkArr[s]).remove();$('#compare_text_'+stkArr[s]).html('Compare ');$('#com_uni_'+stkArr[s]).removeAttr("onclick");$('#com_uni_'+stkArr[s]).removeClass("com_bac_col");var onclickFunction='compare(\''+stockno+'\', \''+lastChar+'\');';$('#com_uni_'+stkArr[s])[0].setAttribute('onclick',onclickFunction);}}}});}
function showcomparediv(conversion_rate,dafault_curr,stockno,t){var parameters='action=data_show';parameters+='&conversion_rate='+conversion_rate;parameters+='&dafault_curr='+dafault_curr;parameters+='&stockno='+stockno;parameters+='&t='+t;$.ajax({url:ajaxLinkURL+'action.php',data:parameters,cache:false,type:'POST',dataType:'html',async:true,success:function(responseHtml){$("#compare_box").append(responseHtml);if($('#mini').html()=='-'){setTimeout($(".veh_title").css("display","block"),200);}}});}
$("#mini").click(function(){if($("#mini").text()=='-')
{$('.veh_title').hide();$("#mini").text("+");}
else
{$('.veh_title').show();$("#mini").text("-");$('#show_hide').html('Hide <i class="fa fa-angle-down font20"></i>');$('#compare_box').removeAttr("onclick");var onclickFunction='hidecompare();';$('#show_hide')[0].setAttribute('onclick',onclickFunction);$("#mini").show();$("#show_hide").show();}});function compareDate(date_string1,date_string2){var firstValue=date_string1.split('-');var secondValue=date_string2.split('-');var firstDate=new Date();firstDate.setFullYear(firstValue[0],(firstValue[1]-1),firstValue[2]);var secondDate=new Date();secondDate.setFullYear(secondValue[0],(secondValue[1]-1),secondValue[2]);if(firstDate.getTime()>secondDate.getTime())
{return 1;}
else if(firstDate.getTime()<secondDate.getTime())
{return-1;}
else
{return 0;}}
function isNumber(obj,msg_txt){if(!isNaN(obj.value))
{alert(msg_txt+' should be a number !');obj.focus();return false}
return true;}
function stripNonNumeric(str){str+='';var rgx=/^\d|\.|-$/;var out='';for(var i=0;i<str.length;i++){if(rgx.test(str.charAt(i))){if(!((str.charAt(i)=='.'&&out.indexOf('.')!=-1)||(str.charAt(i)=='-'&&out.length!=0))||str.match(/\D/g)){out+=str.charAt(i);}}}
return out;}
function format_price(theControl){var num=stripNonNumeric(theControl.value);num=eval(num);if(!isNaN(num))theControl.value=num.formatMoney(0,'.',',');else theControl.value='';}
Number.prototype.formatMoney=function(c,d,t){var n=this,c=isNaN(c=Math.abs(c))?2:c,d=d==undefined?",":d,t=t==undefined?".":t,s=n<0?"-":"",i=parseInt(n=Math.abs(+n||0).toFixed(c))+"",j=(j=i.length)>3?j%3:0;return s+(j?i.substr(0,j)+t:"")+i.substr(j).replace(/(\d{3})(?=\d)/g,"$1"+t)+(c?d+Math.abs(n-i).toFixed(c).slice(2):"");};function isNumber(evt){evt=(evt)?evt:window.event;var charCode=(evt.which)?evt.which:evt.keyCode;if(charCode>31&&(charCode<48||charCode>57)){return false;}
return true;}
function checkChildCheckboxes(element_object,checked_boolean){var len=element_object.childNodes.length;if(len>0){for(var i=0;i<len;i++){var e=element_object.childNodes[i];if(e.type=='checkbox')e.checked=checked_boolean;else if(e.hasChildNodes){checkChildCheckboxes(e,checked_boolean);}}}}
function check_combo_of_checkboxes_mouse_position(e,control_pair_arr){var obj_id=new Array();obj_id[0]=control_pair_arr;for(var i=0;i<obj_id.length;i++){var target=(e&&e.target)||(event&&event.srcElement);var obj=document.getElementById(obj_id[i][0]);checkParent(target,obj_id[i][0])?document.getElementById(obj_id[i][1]).style.display='none':'block';}}
function checkParent(t,div_id){while(t.parentNode){if(t==document.getElementById(div_id)){return false}
t=t.parentNode;}
return true}
function getFunc(action){var xmlHttp=__createXMLObject();function __getList(){var tmpStr=xmlHttp.responseText.split("|||");for(i=1;i<tmpStr.length;i+=2){obj=document.getElementById(tmpStr[i]+"_id");obj.length=null;var valueArr=tmpStr[i+1].split("||");for(j=0;j<valueArr.length-1;j++){valStr=valueArr[j].split("|");opt=document.createElement("option");opt.setAttribute("value",valStr[0]);opt.appendChild(document.createTextNode(valStr[1]));obj.appendChild(opt);}
obj.selectedIndex=0;}
document.getElementById("loader2").style.visibility='hidden';document.getElementById("loader2").style.display='none';}
if(xmlHttp){var frmObj=document.productForm;switch(action){case 1:var url="getlist.php?action="+action;break;case 2:var url="getlist.php?action="+action+"&make_id="+frmObj.type_id.value;break;case 3:var url="getlist.php?action="+action+"&make_id="+frmObj.make_id.value;break;}
xmlHttp.open('get',url);xmlHttp.send(null);xmlHttp.onreadystatechange=function(){if(xmlHttp.readyState==4)
__getList();};if(xmlHttp.readyState==1){if(action==3){document.getElementById("loader2").style.visibility='visible';document.getElementById("loader2").style.display='inline';}}}}
var preOpenDivIds='';function showDivPanels(divIds){$(document).ready(function(){if(preOpenDivIds!=''){$('#'+preOpenDivIds).hide();}$('#'+divIds).show();preOpenDivIds=divIds;});}
function hideDivPanels(divIds){$(document).ready(function(){$('#'+divIds).hide();});}
function textLimitCheck(theForm,theControl,maxLength){if(theForm.value.length>maxLength)
{alert(maxLength+' characters limit. \r Excessive data will be truncated.');theForm.value=theForm.value.substring(0,maxLength-1);theForm.focus();}
var total=theForm.value.length;$(theControl).text(total);}
function startUpload(loader,ima,frm){if(window.parent.document.getElementById('confirm_press'))window.parent.document.getElementById('confirm_press').value="confirm_press";if(window.parent.document.getElementById('single_selection'))window.parent.document.getElementById('single_selection').value="confirm_press";document.getElementById('vehicle_other_image').value='';document.getElementById(loader).style.display='block';document.getElementById(ima).style.display='none';var action=document.getElementById(frm).action;document.getElementById(frm).action=action.replace("delete","add");document.getElementById(frm).submit();}
function uploadZIPFolder(frm,theForm){var filename=document.getElementById("zip_folder").value;if(filename!=''){var ext=filename.split('.').pop();if(ext=='zip'){if(window.parent.document.getElementById('confirm_press'))window.parent.document.getElementById('confirm_press').value="confirm_press";if(window.parent.document.getElementById('single_selection'))window.parent.document.getElementById('single_selection').value="confirm_press";document.getElementById('vehicle_other_image').value='';document.getElementById('vehicle_main_image').value='';var action=theForm.action;theForm.action=action.replace("delete","add");document.getElementById(frm).submit();}
else alert('please select only zip format file.');}}
function startUpload(loader,ima,frm){if(window.parent.document.getElementById('confirm_press'))window.parent.document.getElementById('confirm_press').value="confirm_press";if(window.parent.document.getElementById('single_selection'))window.parent.document.getElementById('single_selection').value="confirm_press";document.getElementById('vehicle_other_image').value='';document.getElementById(loader).style.display='block';document.getElementById(ima).style.display='none';var action=document.getElementById(frm).action;document.getElementById(frm).action=action.replace("delete","add");document.getElementById(frm).submit();}
function startSingleUpload(frm,act,theForm){if(window.parent.document.getElementById('confirm_press'))window.parent.document.getElementById('confirm_press').value="confirm_press";if(window.parent.document.getElementById('single_selection'))window.parent.document.getElementById('single_selection').value="confirm_press";document.getElementById('vehicle_other_image').value='';var action=theForm.action;theForm.action=action.replace("delete","add");document.getElementById(frm).submit();}
function startMultipleUpload(frm,act,theForm){if(window.parent.document.getElementById('confirm_press'))
window.parent.document.getElementById('confirm_press').value="confirm_press";if(window.parent.document.getElementById('single_selection'))
window.parent.document.getElementById('single_selection').value="confirm_press";document.getElementById('vehicle_main_image').value='';file_count=0;var file_count=theForm.vehicle_other_image.files.length;if(file_count>0){if(act=='otherImg'&&file_count>29){alert("Please Select 29 Images Only !!");return false;}
var totalRecordCount=theForm.totalRecordCount.value;var remainingImageCounter=30-(parseInt(totalRecordCount)+parseInt(file_count));var total=(parseInt(totalRecordCount)+parseInt(file_count));if(total>30){var remain=30-(parseInt(totalRecordCount));alert("Please Select "+remain+" Images Only !!");return false;}
if(remainingImageCounter<0){alert("Max. 30 Images Allow !!");return false;}
if(remainingImageCounter>=0)add_more(remainingImageCounter,total);}
var action=theForm.action;theForm.action=action.replace("delete","add");theForm.submit();}
function startMultipleUploadInEditMode(frm,act,theForm){if(window.parent.document.getElementById('confirm_press'))window.parent.document.getElementById('confirm_press').value="confirm_press";if(window.parent.document.getElementById('single_selection'))window.parent.document.getElementById('single_selection').value="confirm_press";document.getElementById('vehicle_main_image').value='';file_count=0;var file_count=theForm.vehicle_other_image.files.length;if(file_count>0){if(act=='otherImg'&&file_count>29){alert("Please Select 29 Images Only !!");return false;}
var totalRecordCount=theForm.totalRecordCount.value;var remainingImageCounter=30-(parseInt(totalRecordCount)+parseInt(file_count));var total=(parseInt(totalRecordCount)+parseInt(file_count));if(total>30){var remain=30-(parseInt(totalRecordCount));alert("Please Select "+remain+" Images Only !!");return false;}
if(remainingImageCounter<0){alert("Max. 30 Images Allow !!");return false;}}
var action=theForm.action;theForm.action=action.replace("delete","add");theForm.submit();}
function ReturnImageAddMorePanel(counter){if(counter>10)return true;if(counter<=10&&counter>15)return true;if(counter<=15&&counter>20)return true;if(counter<=20&&counter>25)return true;return false;}
function stopUpload(success,ima,loader){if(success==4)alert("File name is not compatible");else if(success==5)alert("File extension is not compatible, upload JPG file only");else if(success==6)alert("Filesize is over 800KB, Upload smaller image");else{if(window.parent.document.getElementById('confirm_press'))window.parent.document.getElementById('confirm_press').value="";if(window.parent.document.getElementById('single_selection'))window.parent.document.getElementById('single_selection').value="";}}
function startDelete(frm,id){document.getElementById('left'+id).style.display='none';document.getElementById('right'+id).style.display='none';var totalRecordCount=document.getElementById('totalRecordCount').value;document.getElementById('totalRecordCount').value=parseInt(totalRecordCount)-1;var action=document.getElementById(frm).action;document.getElementById(frm).action=action.replace("add","delete");document.getElementById(frm).submit();}
(function($){$.fn.jQuerySimpleCounter=function(options){var settings=$.extend({start:0,end:100,easing:'swing',duration:400,complete:''},options);var thisElement=$(this);$({count:settings.start}).animate({count:settings.end},{duration:settings.duration,easing:settings.easing,step:function(){var mathCount=Math.ceil(this.count);thisElement.text(mathCount);},complete:settings.complete});};}(jQuery));!function(t){t.slidebars=function(s){function e(){!c.disableOver||"number"==typeof c.disableOver&&c.disableOver>=k?(w=!0,t("html").addClass("sb-init"),c.hideControlClasses&&T.removeClass("sb-hide"),i()):"number"==typeof c.disableOver&&c.disableOver<k&&(w=!1,t("html").removeClass("sb-init"),c.hideControlClasses&&T.addClass("sb-hide"),g.css("minHeight",""),(p||y)&&o())}function i(){g.css("minHeight","");var s=parseInt(g.css("height"),10),e=parseInt(t("html").css("height"),10);e>s&&g.css("minHeight",t("html").css("height")),m&&m.hasClass("sb-width-custom")&&m.css("width",m.attr("data-sb-width")),C&&C.hasClass("sb-width-custom")&&C.css("width",C.attr("data-sb-width")),m&&(m.hasClass("sb-style-push")||m.hasClass("sb-style-overlay"))&&m.css("marginLeft","-"+m.css("width")),C&&(C.hasClass("sb-style-push")||C.hasClass("sb-style-overlay"))&&C.css("marginRight","-"+C.css("width")),c.scrollLock&&t("html").addClass("sb-scroll-lock")}function n(t,s,e){function n(){a.removeAttr("style"),i()}var a;if(a=t.hasClass("sb-style-push")?g.add(t).add(O):t.hasClass("sb-style-overlay")?t:g.add(O),"translate"===x)"0px"===s?n():a.css("transform","translate( "+s+" )");else if("side"===x)"0px"===s?n():("-"===s[0]&&(s=s.substr(1)),a.css(e,"0px"),setTimeout(function(){a.css(e,s)},1));else if("jQuery"===x){"-"===s[0]&&(s=s.substr(1));var o={};o[e]=s,a.stop().animate(o,400)}}function a(s){function e(){w&&"left"===s&&m?(t("html").addClass("sb-active sb-active-left"),m.addClass("sb-active"),n(m,m.css("width"),"left"),setTimeout(function(){p=!0},400)):w&&"right"===s&&C&&(t("html").addClass("sb-active sb-active-right"),C.addClass("sb-active"),n(C,"-"+C.css("width"),"right"),setTimeout(function(){y=!0},400))}"left"===s&&m&&y||"right"===s&&C&&p?(o(),setTimeout(e,400)):e()}function o(s,e){(p||y)&&(p&&(n(m,"0px","left"),p=!1),y&&(n(C,"0px","right"),y=!1),setTimeout(function(){t("html").removeClass("sb-active sb-active-left sb-active-right"),m&&m.removeClass("sb-active"),C&&C.removeClass("sb-active"),"undefined"!=typeof s&&(void 0===typeof e&&(e="_self"),window.open(s,e))},400))}function l(t){"left"===t&&m&&(p?o():a("left")),"right"===t&&C&&(y?o():a("right"))}function r(t,s){t.stopPropagation(),t.preventDefault(),"touchend"===t.type&&s.off("click")}var c=t.extend({siteClose:!0,scrollLock:!1,disableOver:!1,hideControlClasses:!1},s),h=document.createElement("div").style,d=!1,f=!1;(""===h.MozTransition||""===h.WebkitTransition||""===h.OTransition||""===h.transition)&&(d=!0),(""===h.MozTransform||""===h.WebkitTransform||""===h.OTransform||""===h.transform)&&(f=!0);var u=navigator.userAgent,b=!1,v=!1;/Android/.test(u)?b=u.substr(u.indexOf("Android")+8,3):/(iPhone|iPod|iPad)/.test(u)&&(v=u.substr(u.indexOf("OS ")+3,3).replace("_",".")),(b&&3>b||v&&5>v)&&t("html").addClass("sb-static");var g=t("#sb-site, .sb-site-container");if(t(".sb-left").length)var m=t(".sb-left"),p=!1;if(t(".sb-right").length)var C=t(".sb-right"),y=!1;var w=!1,k=t(window).width(),T=t(".sb-toggle-left, .sb-toggle-right, .sb-open-left, .sb-open-right, .sb-close"),O=t(".sb-slide");e(),t(window).resize(function(){var s=t(window).width();k!==s&&(k=s,e(),p&&a("left"),y&&a("right"))});var x;d&&f?(x="translate",b&&4.4>b&&(x="side")):x="jQuery",this.slidebars={open:a,close:o,toggle:l,init:function(){return w},active:function(t){return"left"===t&&m?p:"right"===t&&C?y:void 0},destroy:function(t){"left"===t&&m&&(p&&o(),setTimeout(function(){m.remove(),m=!1},400)),"right"===t&&C&&(y&&o(),setTimeout(function(){C.remove(),C=!1},400))}},t(".sb-toggle-left").on("touchend click",function(s){r(s,t(this)),l("left")}),t(".sb-toggle-right").on("touchend click",function(s){r(s,t(this)),l("right")}),t(".sb-open-left").on("touchend click",function(s){r(s,t(this)),a("left")}),t(".sb-open-right").on("touchend click",function(s){r(s,t(this)),a("right")}),t(".sb-close").on("touchend click",function(s){if(t(this).is("a")||t(this).children().is("a")){if("click"===s.type){s.stopPropagation(),s.preventDefault();var e=t(this).is("a")?t(this):t(this).find("a"),i=e.attr("href"),n=e.attr("target")?e.attr("target"):"_self";o(i,n)}}else r(s,t(this)),o()}),g.on("touchend click",function(s){c.siteClose&&(p||y)&&(r(s,t(this)),o())})}}(jQuery);jQuery(document).ready(function($){$(window).scroll(function(){if($(this).scrollTop()>100)$('.scrollup').fadeIn();else $('.scrollup').fadeOut();});$('.scrollup').click(function(){$("html, body").animate({scrollTop:0},1000);return false;});});(function($){$(document).ready(function(){$.slidebars();});})(jQuery);$(document).ready(function(){"use strict";$('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');$('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');$(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\">Navigation</a>");$(".menu > ul > li").hover(function(e){if($(window).width()>=768){$(this).children("ul").stop(true,false).fadeToggle(150);e.preventDefault();}});$(".menu > ul > li").click(function(){if($(window).width()<=768){$(this).children("ul").fadeToggle(150);}});$(".menu-mobile").click(function(e){$(".menu > ul").toggleClass('show-on-mobile');e.preventDefault();});});(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)?a["on"+b]():void 0},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a,b){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),null!=a.scrollContainer&&(this.config.scrollContainer=document.querySelector(a.scrollContainer)),this.animationNameCache=new c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],c=0,d=b.length;d>c;c++)f=b[c],g.push(function(){var a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(this.doSync(e));return d}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(b){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.resetAnimation=function(a){var b;return a.type.toLowerCase().indexOf("animationend")>=0?(b=a.target||a.srcElement,b.className=b.className.replace(this.config.animateClass,"").trim()):void 0},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;d>b;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;e>c;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return g},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);