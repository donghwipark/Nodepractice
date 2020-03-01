// comment loading on user click
[].forEach.call(document.querySelectorAll('#user-list tr'), function (el) {
    el.addEventListener('click', function () {
        var id = el.querySelector('td').textContent;
        getComment(id);
    });
});

// User loading
function getUser() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status === 200) {
            var users = JSON.parse(xhr.responseText);
            console.log(users);
            var tbody = document.querySelector('#user-list tbody');
            tbody.innerHTML = '';
            users.map(function (user) {
                var row = document.createElement('tr');
                row.addEventListener('click', function () {
                    getComment(user._id);
                });
                var td = document.createElement('td');
                td.textContent = user._id;
                row.appendChild(td);
                td = document.createElement('td');
                td.textContent = user.name;
                row.appendChild(td);
                td = document.createElement('td');
                td.textContent = user.age;
                row.appendChild(td);
                td = document.createElement('td');
                td.textContent = user.married ? 'Married' : 'Unmarried';
                row.appendChild(td);
                tbody.appendChild(row);
            });
        } else {
            console.error(xhr.responseText);
        }
    };
    xhr.open('GET', '/users');
    xhr.send();
}

// Comment loading
function getComment(id) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status === 200) {
            var comments = JSON.parse(xhr.responseText);
            var tbody = document.querySelector('#comment-list tbody');
            tbody.innerHTML = '';
            comments.map(function (comment) {
                var row = document.createElement('tr');
                var td = document.createElement('td');
                td.textContent = comment._id;
                row.appendChild(td);
                td = document.createElement('td');
                td.textContent = comment.commenter.name;
                row.appendChild(td);
                td = document.createElement('td');
                td.textContent = comment.comment;
                row.appendChild(td);
                // edit
                var edit = document.createElement('button');
                edit.textContent = 'edit';
                edit.addEventListener('click', function () {
                    // On click edit
                    var newComment = prompt('Input edit text');
                    if (!newComment) {
                        return alert('You need to input');
                    }
                    var xhr = new XMLHttpRequest();
                    xhr.onload = function () {
                        if (xhr.status === 200) {
                            console.log(xhr.responseText);
                            getComment(id);
                        } else {
                            console.error(xhr.responseText);
                        }
                    };
                    xhr.open('PATCH', '/comments/' + comment._id);
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    xhr.send(JSON.stringify({ comment: newComment }))
                });

                // remove
                var remove = document.createElement('button');
                remove.textContent = 'delete';
                remove.addEventListener('click', function () {
                    var xhr = new XMLHttpRequest();
                    xhr.onload = function () {
                        if (xhr.status === 200) {
                            console.log(xhr.responseText);
                            getComment(id);
                        } else {
                            console.error(xhr.responseText);
                        }
                    };
                    xhr.open('DELETE', '/comments/' + comment._id);
                    xhr.send();
                });
                td = document.createElement('td');
                td.appendChild(edit);
                row.appendChild(td);
                td = document.createElement('td');
                td.appendChild(remove);
                row.appendChild(td);
                tbody.appendChild(row);
            });
        } else {
            console.error(xhr.responseText);
        }
    };
    xhr.open('GET', '/comments/' + id);
    xhr.send();
}

// On user registration
document.getElementById('user-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var name = e.target.username.value;
    var age = e.target.age.value;
    var married = e.target.married.checked;
    if (!name) {
        return alert('Input your name');
    }
    if (!age) {
        return alert('Input your age');
    }
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status === 201) {
            console.log(xhr.responseText);
            getUser();
        } else {
            console.error(xhr.responseText);
        }
    };
    xhr.open('POST', '/users');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({ name: name, age: age, married: married }));
    e.target.username.value = '';
    e.target.age.value = '';
    e.target.married.checked = false;
});

// On Commnet register
document.getElementById('comment-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var id = e.target.userid.value;
    var comment = e.target.comment.value;
    if (!id) {
        return alert('please input your id');
    }
    if (!comment) {
        return alert('please input your comment');
    }
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status === 201) {
            console.log(xhr.responseText);
            getComment(id);
        } else {
            console.error(xhr.responseText);
        }
    };
    xhr.open('POST', '/comment');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({ id: id, comment: comment }));
    e.target.userid.value = '';
    e.target.comment.value = '';
});
