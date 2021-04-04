
console.log($(this))
console.log("hello")

let addData = `<div class="wthrRslt">
<span id="city"></span><br>
<h1></h1>
<h2></h2>
<span id="tempT">Temp : </span><span id="temp"></span>
<br>
<span id="minT">Min-Temp : </span> <span id="min"></span>
<span id="maxT">Max-Temp : </span> <span id="max"></span>
</div>
`




$('input[type="text"]').keypress( async function (e) {


   

    $('#load').toggleClass("loader");
    console.log(e.which);
    if (e.which === 13) {
        console.log("sending request");
        console.log($(this).val())
        let city = $(this).val();

        await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0f1e2a6478ca8c4bb01863225e757747`).then(data => {
            return data.json();
        }).then(data => {
            if (data.cod == "404") {
                throw data
            }
            addResult(data, city);


            $(this).val("");
        }).catch(e => {
            alert(e.message);
        })

    }
     $('#load').toggleClass("loader");
    console.log("clicked")



})




$("#cur").on("click", function () {
    $('#load').toggleClass("loader");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        
    } else {
        alert("Geolocation is not supported by this browser.");
    }
    
})

async function showPosition(position) {
    let city;
    let url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`
    await fetch(url).then((data) => { return data.json(); }).then((data) => {
        console.log(data);
        city = data.locality;
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0f1e2a6478ca8c4bb01863225e757747`).then(data => {
            return data.json();
        }).then(data => {
            if (data.cod == "404") {
                throw data
            }
            addResult(data, city);

           
        }).catch(e => {
            alert(e.message);
        })


    }
    ).catch((e) => { console.log(e.message); })
  
    
    $('#load').toggleClass("loader");
}

function addResult(data, city) {
    console.log(data);
    $(".wthrRslt").remove();
    $(".wthrScn").append(addData);

    console.log(data.weather[0].main)
    $(".wthrRslt h1").append(data.weather[0].main);
    $(".wthrRslt h2").append(data.weather[0].description);
    $("#temp").append((data.main.temp / 10).toFixed(2));
    $("#min").append((data.main.temp_min / 10).toFixed(2));
    $("#max").append((data.main.temp_max / 10).toFixed(2));
    $("#city").append(city);
}

