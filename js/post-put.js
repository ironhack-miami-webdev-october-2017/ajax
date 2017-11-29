$(document).ready(() => {

    $(".postWalle").click(() => {
        postCharacter("WALL-E", "Head laser", "Waste Allocation Robot");
    });

    $(".postCharacter").submit(() => {
        // prevent the submission from refreshing the page
        event.preventDefault();

        const userName = $("#char-name").val();
        const userWeapon = $("#char-weapon").val();
        const userJob = $("#char-job").val();

        postCharacter(userName, userWeapon, userJob);

        // clear the inputs again
        $(".postCharacter").trigger("reset");
    });

    $(".patchCharacter").submit(() => {
        event.preventDefault();

        const charId = $("#update-id").val();
        const charName = $("#update-name").val();
        const charWeapon = $("#update-weapon").val();
        const charJob = $("#update-job").val();

        patchCharacter(charId, charName, charWeapon, charJob);

        $(".patchCharacter").trigger("reset");
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
          console.log("POST error!");
          console.log(err);
      });

} // postCharacter()


function patchCharacter (myId, myName, myWeapon, myOccupation) {

  $.ajax({
      method: "PATCH",
      url: `https://ih-crud-api.herokuapp.com/characters/${myId}`,
      data: {
          name: myName,
          weapon: myWeapon,
          occupation: myOccupation
      }
  })
    .then((apiResult) => {
        console.log("PATCH success!");
        console.log(apiResult);

        const updatedHtml = $(`
            <li>
              UPDATED <b>${apiResult.name}</b>
              (id ${apiResult.id})
            </li>
        `);

        $(".feedback").append(updatedHtml);
    })
    .catch((err) => {
        console.log("PATCH error!");
        console.log(err);
    });

} // patchCharacter()
