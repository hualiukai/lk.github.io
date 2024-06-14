$(document).ready(function() {
  $('#registrationForm').submit(function(event) {
    // 阻止表单默认提交行为
    event.preventDefault();
	  var formData = {
	            username: $('#username').val(),
	            password: $('#password').val(),
	            confirmPassword: $('#confirmPassword').val(),
	            email: $('#email').val()
	        };
	
	        $.ajax({
	            type: 'POST',
	            url: '/register',
	            data: JSON.stringify(formData),
	            contentType: 'application/json',
	            success: function(response) {
	                // 注册成功
	                $('#registrationForm')[0].reset(); // 重置表单
	                $('#registrationSuccessMessage').text(response.message).show(); // 显示成功消息
	                setTimeout(function() {
	                    $('#registrationSuccessMessage').fadeOut('slow'); // 在一段时间后隐藏成功消息
	                }, 5000);
	            },
	            error: function(xhr, status, error) {
	                // 注册失败
	                var errorMessage = xhr.responseJSON ? xhr.responseJSON.message : '发生错误，请稍后再试';
	                alert(errorMessage);
	            }
	        });

    // 获取表单字段的值
    var username = $('#username').val();
    var password = $('#password').val();
    var confirmPassword = $('#confirmPassword').val();
    var email = $('#email').val();

    // 验证用户名
    if (username.trim() === '') {
      $('#usernameError').text('用户名不能为空');
      return;
    } else {
      $('#usernameError').text('');
    }

    // 验证密码
    if (password.trim() === '') {
      $('#passwordError').text('密码不能为空');
      return;
    } else if (password.length < 6) {
      $('#passwordError').text('密码长度不能少于6位');
      return;
    } else {
      $('#passwordError').text('');
    }

    // 验证确认密码
    if (confirmPassword.trim() === '') {
      $('#confirmPasswordError').text('确认密码不能为空');
      return;
    } else if (password !== confirmPassword) {
      $('#confirmPasswordError').text('两次输入的密码不一致');
      return;
    } else {
      $('#confirmPasswordError').text('');
    }

    // 验证邮箱格式
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      $('#emailError').text('邮箱格式不正确');
      return;
    } else {
      $('#emailError').text('');
    }

    // 如果所有验证通过，可以进行注册操作
    alert('注册成功！');
  });
});
