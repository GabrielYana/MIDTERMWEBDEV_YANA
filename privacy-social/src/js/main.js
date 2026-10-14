var signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('signupName').value;
    var email = document.getElementById('signupEmail').value;
    var password = document.getElementById('signupPassword').value;

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Account created! Can login.');
    window.location.href = 'login.html';
  });
}

var loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;
    var savedEmail = localStorage.getItem('email');
    var savedPassword = localStorage.getItem('password');

    if ((email === savedEmail && password === savedPassword) ||
        (email === 'student@example.com' && password === '1234')) {
      window.location.href = 'feed.html';
    } else {
      alert('Incorrect login. You can sign up first or use student@example.com / 1234.');
    }
  });
}

var postBtn = document.getElementById('postBtn');
if (postBtn) {
  postBtn.addEventListener('click', function() {
    var text = document.getElementById('postText').value;
    if (text.trim() === '') {
      alert('Please type something first.');
      return;
    }

    var name = localStorage.getItem('name') || 'Student User';
    var post = document.createElement('div');
    post.className = 'post';
    post.innerHTML = '<div class="post-title"><b>' + name + '</b></div>' +
                     '<div class="post-body"></div>' +
                     '<div class="post-actions"><button class="like-btn">Like (<span>0</span>)</button></div>';
    post.querySelector('.post-body').textContent = text;
    document.getElementById('posts').insertBefore(post, document.getElementById('posts').firstChild);
    document.getElementById('postText').value = '';
    addLikeButton(post.querySelector('.like-btn'));
  });
}

function addLikeButton(button) {
  button.addEventListener('click', function() {
    var count = button.querySelector('span');
    count.textContent = Number(count.textContent) + 1;
  });
}

var likeButtons = document.querySelectorAll('.like-btn');
for (var i = 0; i < likeButtons.length; i++) {
  addLikeButton(likeButtons[i]);
}

var profileName = document.getElementById('profileName');
if (profileName) {
  profileName.textContent = localStorage.getItem('name') || 'Student User';
}

var profileEmail = document.getElementById('profileEmail');
if (profileEmail) {
  profileEmail.textContent = localStorage.getItem('email') || 'student@example.com';
}

var logoutLink = document.getElementById('logoutLink');
if (logoutLink) {
  logoutLink.addEventListener('click', function() {
    alert('You are logged out.');
  });
}
