// 登录页面逻辑

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // 模拟登录验证
    if (validateLogin(username, password)) {
        // 登录成功，保存状态
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        // 跳转到首页
        window.location.href = 'index.html';
    } else {
        // 显示错误信息
        errorMessage.style.display = 'block';
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 3000);
    }
});

// 验证登录信息
function validateLogin(username, password) {
    // 模拟用户数据
    const users = [
        { username: 'admin', password: 'admin123' },
        { username: 'test', password: 'test123' }
    ];

    return users.some(user =>
        user.username === username && user.password === password
    );
}

// 检查登录状态
function checkLoginStatus() {
    return localStorage.getItem('isLoggedIn') === 'true';
}
