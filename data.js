<!DOCTYPE html>
<html>
<body>
    <input type="password" id="pass" placeholder="Password"><button onclick="load()">Enter</button>
    <div id="view"></div>
    <script src="data.js"></script>
    <script>
        function load() {
            if(document.getElementById('pass').value !== "YOUR_SECRET_PASSWORD") return alert("Denied");
            const view = document.getElementById('view');
            clientWorkspaceData.forEach(a => {
                view.innerHTML += `<div><h3>[${a.type}] ${a.title.en}</h3><p>${a.payload}</p><hr></div>`;
            });
        }
    </script>
</body>
</html>
