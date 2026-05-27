<!DOCTYPE html>
<html>
<head>
    <title>STEPIO // SECURE CLIENT VIEW</title>
    <style>
        body { font-family: monospace; padding: 20px; max-width: 800px; }
        .asset { border-bottom: 2px solid #000; margin-bottom: 20px; padding-bottom: 10px; }
    </style>
</head>
<body>
    <div id="login">
        <h3>SECURE ACCESS</h3>
        <input type="password" id="pass" placeholder="Enter Password">
        <button onclick="unlock()">ACCESS</button>
    </div>
    <div id="content" style="display:none;">
        <h3>CLIENT 160508 // DAILY DISPATCH</h3>
        <div id="data-view"></div>
    </div>

    <script>
        // REPLACE 'yourpassword' WITH YOUR CHOSEN PASSWORD
        const SECRET = "yourpassword"; 

        function unlock() {
            if(document.getElementById('pass').value === SECRET) {
                document.getElementById('login').style.display = 'none';
                document.getElementById('content').style.display = 'block';
                loadData();
            } else { alert("Access Denied"); }
        }

        async function loadData() {
            // This assumes data.js is in the same repo
            const res = await fetch('data.js?t=' + Date.now()); 
            const text = await res.text();
            const jsonStr = text.replace('const clientWorkspaceData = ', '').replace(';', '');
            const data = JSON.parse(jsonStr);

            const container = document.getElementById('data-view');
            data.forEach(item => {
                container.innerHTML += `
                    <div class="asset">
                        <h4>[${item.type}] ${item.title.en}</h4>
                        <small>${item.date}</small>
                        <p>${item.payload}</p>
                    </div>`;
            });
        }
    </script>
</body>
</html>
