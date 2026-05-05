// 主页逻辑

document.addEventListener('DOMContentLoaded', function() {
    checkLoginStatus();
    updateVisitCount();
});

// 检查登录状态并更新UI
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const username = localStorage.getItem('username');

    const loginLink = document.getElementById('loginLink');
    const logoutItem = document.getElementById('logoutItem');
    const logoutLink = document.getElementById('logoutLink');
    const userInfo = document.getElementById('userInfo');
    const welcomeUser = document.getElementById('welcomeUser');
    const heroLoginBtn = document.getElementById('heroLoginBtn');
    const heroText = document.getElementById('heroText');
    const quickActions = document.getElementById('quickActions');

    if (isLoggedIn && username) {
        // 已登录状态
        loginLink.style.display = 'none';
        logoutItem.style.display = 'block';
        userInfo.style.display = 'block';
        welcomeUser.textContent = username;
        heroLoginBtn.textContent = '进入系统';
        heroLoginBtn.href = '#';
        heroLoginBtn.onclick = function(e) {
            e.preventDefault();
            showToast('欢迎回来, ' + username + '!');
        };
        heroText.textContent = '您好, ' + username + '! 今天想做些什么?';
        quickActions.style.display = 'block';
    } else {
        // 未登录状态
        loginLink.style.display = 'block';
        logoutItem.style.display = 'none';
        userInfo.style.display = 'none';
        quickActions.style.display = 'none';
    }

    // 退出登录
    logoutLink.addEventListener('click', function(e) {
        e.preventDefault();
        logout();
    });
}

// 退出登录
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    showToast('已成功退出登录');
    setTimeout(function() {
        window.location.reload();
    }, 1000);
}

// 更新访问次数
function updateVisitCount() {
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount = parseInt(visitCount) + 1;
    localStorage.setItem('visitCount', visitCount);

    const visitCountEl = document.getElementById('visitCount');
    if (visitCountEl) {
        visitCountEl.textContent = (1000 + visitCount) + '+';
    }
}

// 显示Toast提示
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(function() {
        toast.classList.remove('show');
    }, 3000);
}
