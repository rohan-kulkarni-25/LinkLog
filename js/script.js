
fetch('../json/links.json')
    .then(response => response.json())
    .then(data => {
        let links = data;

        for (let link_no = 0; link_no <= ((links.length) - 1); link_no++) {

            // console.log(links[link_no]);
            let linkdiv = document.createElement('div');
            linkdiv.innerHTML = `<div class='linklogo' >
        <img src="../assets/media/link.png" alt="">
    </div>
    <div class="linkname" id="name">
        ${links[link_no].name}
    </div>
    <div class="linkview">
        <a href="${links[link_no].url}" id="url" target="_blank"><button>View</button></a>
    </div>`;
            linkdiv.setAttribute("class", "linkbox");
            document.getElementById('links').appendChild(linkdiv);


        }

    });
