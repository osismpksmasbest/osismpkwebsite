document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    const checkCredentials = (username, password, data) => {
        const [storedUsername, storedPassword] = data.split('\n');
        return username === storedUsername && password === storedPassword;
    };

    const readFileAndCheck = (file, callback) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'data/' + file, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const data = xhr.responseText.trim();
                if (checkCredentials(username, password, data)) {
                    authenticated = true;
                }
                callback();
            }
        };
        xhr.send();
    };

    let authenticated = false;
    let filesChecked = 0;

    // Fetch the list of files from index.json
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data/index.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const fileList = JSON.parse(xhr.responseText).files;

            fileList.forEach(file => {
                readFileAndCheck(file, () => {
                    filesChecked++;
                    if (filesChecked === fileList.length) {
                        if (authenticated) {
                            window.location.href = 'home.html'; // Redirect to home.html
                        } else {
                            messageElement.textContent = 'Invalid username or password.';
                            messageElement.style.color = 'red';
                        }
                    }
                });
            });
        }
    };
    xhr.send();
});
