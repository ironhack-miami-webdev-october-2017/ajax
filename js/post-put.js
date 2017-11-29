$(document).ready(() => {

    $(".postWalle").click(() => {
        postCharacter("WALL-E", "Head laser", "Waste Allocation Robot");
    });

}); // $(document).ready()


function postCharacter (charName, charWeapon, charJob) {

    $.ajax({
        method: "POST",
        url: "https://ih-crud-api.herokuapp.com/characters",
        // data to send through in the FORM BODY
        data: {
            name: charName,
            weapon: charWeapon,
            occupation: charJob,
        }
    })
      .then((apiResult) => {
          console.log("POST success!");
          console.log(apiResult);

          const newCharHtml = $(`
              <li>
                Added <b>${apiResult.name}</b>
                (id ${apiResult.id})
              </li>
          `);

          $(".feedback").append(newCharHtml);
      })
      .catch((err) => {
          console.log("ERROR!");
          console.log(err);
      });

} // postCharacter()
