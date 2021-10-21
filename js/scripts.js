$(document).ready(function(){
  $("#quiz").submit(function(event){
    event.preventDefault();
    $("#quiz-hide").hide();
    const flavor= $("input:radio[name=flavor]:checked").val();
    const job= $("input:radio[name=job]:checked").val();
    const music= $("input:radio[name=music]:checked").val();
    const sport= $("input:radio[name=sport]:checked").val();
    const place= $("input:radio[name=place]:checked").val();
    let total= 0;

    if (flavor === "vanilla") {
        total += 1;
    } else if (flavor === "cookiesandcream") {
        total += 2;
    } else if (flavor === "mintchocolatechip") {
        total += 3;
    };

    if (job === "musician") {
      total += 1;
    } else if (job === "engineer") {
      total += 2;
    } else if (job === "twitch") {
      total += 3;
    };

    if (music === "rock") {
      total += 1;
    } else if (music === "techno") {
      total += 2;
    } else if (music === "emo") {
      total += 3;
    };

    if (sport === "football") {
      total += 1;
    } else if (sport === "basketball") {
      total += 2;
    } else if (sport === "iHateSports") {
      total += 3;
    };

    if (place === "tokyo") {
      total += 1;
    } else if (place === "osaka") {
      total += 2;
    } else if (place === "kyoto") {
      total += 3;
    };

    if (total <= 4) {
      $("#belle").show();
    } else if (total <= 8) {
      $("#ariel").show();
    } else if (total <= 12) {
      $("#snowWhite").show();
    } else {
      $("#naruto").show();
    }
  });
});