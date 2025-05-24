// 页面加载时根据 localStorage 设置用户名
document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("user-display");
    if (display) {
      const username = localStorage.getItem("currentUser");
      display.textContent = username ? username : "登录/注册";
    }
  });
  
  // 注销函数
  function logout() {
    const username = localStorage.getItem("currentUser");
    if (username) {
      localStorage.removeItem("currentUser");
      alert("当前已注销！");
      location.reload();
    } else {
      alert("尚未登录！");
    }
  }
  