$(document).ready(function() {
    $('#logbt').click(function() {
        alert("clicked. ajax실행합니다.");
        var userid = document.getElementById("login_id").value;
        var userpw = document.getElementById("login_pw").value;
        var userrpw = document.getElementById("login_rpw").value;
        var usermean = document.getElementById("login_mean").value;
        var useridle = document.getElementById("login_ideal").value;
        var username = document.getElementById("login_username").value;
        var genderobj = document.getElementsByName("gender");
        var usergender;
        if (userpw != userrpw) {
            alert("재입력한 비밀번호가 일치하지 않습니다. 확인해주세요.");
        }
        else if(usermean.length == 0)
        {
          alert("한줄 소개(당신을 소개할 무언가)가 비었습니다. 입력해주세요.")
        }
        else if(!(genderobj[0].checked||genderobj[1].checked)){
          alert("성별을 선택해주세요.");
        }
        else
        {
          if(genderobj[0].checked)
          {
            alert("남");
            usergender = "남";
          }
          else if(genderobj[1].checked)
          {
            alert("여");
            usergender = "여";
          }
            var regdata = "name=" + username + "&id=" + userid + "&password=" + userpw + "&mean=" + usermean +"&gender=" + usergender+ "&ideal_type=" + useridle;
            $.ajax({        
                type: "POST",
                url: "http://soylatte.kr:4848/register",
                    data: regdata,
                    success: function(data)     {         //data - response from server
                    if (data.success == true) {
                        alert("회원가입 성공");
                    }
                },
                    error: function(xhr, status, error)     {
                    alert("서버에 오류생겼다 bro; jqXHR : " + xhr + " status : " + status + " error : " + error);
                }
            });
        }
    })
});
