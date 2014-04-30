function m_prompt()//用户名右边提示
{
    document.getElementById("m_name").innerHTML = "<small><b>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp5 to 15 characters and can only consist of letters, Numbers, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;underscores, beginning must be a letter. </b></small>";
    document.getElementById("m_name").style.color = "BLUE";
}


function check_email(thisfile)//邮箱判断
{var p1=thisfile.value.indexOf("@");
 var p2=thisfile.value.lastIndexOf(".");
 var myBoolean=new Boolean(0);
if(p1<1||p2-p1<2)

{document.getElementById("F_email").innerHTML = "<small><b>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspError! Please press the input format XXXX@XX.XX </b></small>";
document.getElementById("F_email").style.color = "red";
}
else {document.getElementById("F_email").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp√";document.getElementById("F_email").style.color = "green";
      return myBoolean=true;}
  return false;

}

function check_name(thispart)//用户名正确性验证
{ var myRegExp = /[^\w]/;
  var myBoolean=new Boolean(0);
  if(thispart.value.length==0)
    {document.getElementById("m_name").innerHTML = "<small><b>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspInput can't be empty </b></small>";
    document.getElementById("m_name").style.color = "red";
	}    
        else if(/[\_\d]/gi.test(thispart.value.substr(0,1)))
             {document.getElementById("m_name").innerHTML = "<small><b>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspThe beginning must be letters </b></small>";
              document.getElementById("m_name").style.color = "red";
          

             }
           else if (myRegExp.test(thispart.value) )
            {document.getElementById("m_name").innerHTML = "<small><b>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspCan only consist of letters, Numbers, underscores, beginning &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;must be a letter </b></small>";
              document.getElementById("m_name").style.color = "red";
            }

             else  if(thispart.value.length>15){document.getElementById("m_name").innerHTML = "<small><b>&nbsp&nbsp&nbsp&nbsp&nbspNot more than 15 characters </b></small>";
              document.getElementById("m_name").style.color = "red";
            }

            else if (thispart.value.length<5)
              {document.getElementById("m_name").innerHTML = "<small><b>&nbsp&nbsp&nbsp&nbsp&nbspNot less than 5 characters </b></small>";
              document.getElementById("m_name").style.color = "red";
               }

               else{
                document.getElementById("m_name").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp√";
              document.getElementById("m_name").style.color = "green";
              return myBoolean=true;
              }
            return false;

}

function p_prompt()//密码框提示

 {document.getElementById("pw").innerHTML = "<font><small><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6-16 characters,beginning must be a letter. </b></small></font>";
    document.getElementById("pw").style.color = "BLUE";
  }

function check_password(thispart)//登陆密码验证
{var plength=thispart.value.length;
   var myBoolean=new Boolean(0);
  var num2=0;
     var chA=/[A-Z]/g.test(thispart.value);
     var cha=/[a-z]/g.test(thispart.value);
     var ch1=/[\d]/.test(thispart.value);
     var ch_=/[\_\,\.\;]/.test(thispart.value);
     var ch =/[^a-zA-z\d\_\,\.\;]/g.test(thispart.value);
      if(ch1) num2++;
      if(ch_) num2++;

     
  if(plength==0)
       {document.getElementById("pw").innerHTML = "<small><b>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspFor the password cannot be empty </b></small>";
              document.getElementById("pw").style.color = "red";
               }
             else if(plength<6)
               {document.getElementById("pw").innerHTML = "<small><b>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspPassword cannot be less 6 characters </b></small>";
                   document.getElementById("pw").style.color = "red";
                  }
               else if(plength>16)
                 {document.getElementById("pw").innerHTML = "<small><b>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspPassword cannot be more than 16 characters </b></small>";
                     document.getElementById("pw").style.color = "red";
                  }
                  else if(num2<1&&(chA||cha))
                 {document.getElementById("pw").innerHTML = "<small><b>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspPassword not only letters </b></small>";
                     document.getElementById("pw").style.color = "red";
                  }
                   else if(!chA&&!cha&&num2<2)
                 {document.getElementById("pw").innerHTML = "<small><b>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspPassword cannot be only Numbers or symbols</b></small>";
                     document.getElementById("pw").style.color = "red";
                  }
                else if(ch)
                 
                     {document.getElementById("pw").style.color = "red";
                 document.getElementById("pw").innerHTML = "<small><b>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspSymbol can only use _ &nbsp ;&nbsp,&nbsp.&nbsp</b></small>"; }
                 
              else{
                document.getElementById("pw").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp√";
              document.getElementById("pw").style.color = "green";
              return myBoolean=true;
              }
     return false;
      }


function cp_prompt()//密码确认框的提示
{document.getElementById("cpw").innerHTML = "<small><b>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspPlease enter your password again</b></small>";
                     document.getElementById("cpw").style.color = "blue";
}



function check_pwagain(thispart)//判断密码验证
{var myBoolean=new Boolean(0);
if(thispart.value.length)
             if(document.getElementById("password").value===thispart.value)
               {
                 document.getElementById("cpw").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp√";
                    document.getElementById("cpw").style.color = "green";
                    return myBoolean=true;
               }
            else{  document.getElementById("cpw").innerHTML = "<small><b>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspTwo input password, please enter again </b></small>";
               document.getElementById("cpw").style.color = "red";
              }
 else{document.getElementById("cpw").innerHTML = "<small><b>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspConfirm password cannot be empty</b></small>";
         document.getElementById("cpw").style.color = "red";
         }          
 
  return false;
}


function show_pw(thispart)//密码强度的显示
{var plength=thispart.value.length;
  var num=0;
     var chA=/[A-Z]/g.test(thispart.value);
     var cha=/[a-z]/g.test(thispart.value);
     var ch1=/[\d]/.test(thispart.value);
     var ch_=/[\_\,\.\;]/.test(thispart.value);
      if(chA) num++;
      if(cha) num++;
      if(ch1) num++;
      if(ch_) num++;
  if(plength<=8&&num<=2)
   {document.getElementById("weak").style.background = "red";
    document.getElementById("middle").style.background = "#333333";
    document.getElementById("strong").style.background = "#333333";
   }

  else if(plength>=12&&num>=3)
    {document.getElementById("weak").style.background = "#333333";
    document.getElementById("middle").style.background = "red";
    document.getElementById("strong").style.background = "#333333";
   }

  else  {document.getElementById("weak").style.background = "#333333";
    document.getElementById("middle").style.background = "#333333";
    document.getElementById("strong").style.background = "red";
   }

}

function check_email(thisfile)//邮箱判断
{var p1=thisfile.value.indexOf("@");
 var p2=thisfile.value.lastIndexOf(".");
 var myBoolean=new Boolean(0);
if(p1<1||p2-p1<2)

{document.getElementById("F_email").innerHTML = "<small><b>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspInput error! Please press the input format XXXX@XX.XX</b></small>";
document.getElementById("F_email").style.color = "red";
}
else {document.getElementById("F_email").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp√";document.getElementById("F_email").style.color = "green";
      return myBoolean=true;}
  return false;

}

function check_all()//提交前的对所以框状态的确认
{
  
   var b1=check_email(document.getElementById("email"));
  var b2=check_name(document.getElementById("name"));
  var b3=check_pwagain(document.getElementById("c_password1"));
   var b4=check_password(document.getElementById("password"));
if(b1&&b2&&b3&&b4)
{ return true;}
else
return false; 



}