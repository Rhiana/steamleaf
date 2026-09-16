$(document).on('click','.setRating',function(e){
  const challengeRating = $(this).data('total-points')

  const currentPoints = $(".current-points")
  const totalPoints = $(".total-points")
  const rosterTableTally = $(".roster-table tbody .amounts")

  currentPoints.text(challengeRating)
  totalPoints.text(challengeRating)
  rosterTableTally.text('0')
});


$(document).on('click','.addUnit',function(e){
  const unitName = $(this).data('unit-name')
  const unitPoints = $(this).data('unit-points')

  const currentUnitTally = $(`.roster-table tbody tr[data-unit-tally='${unitName}'] .amounts`)
  const currentPoints = $(".current-points")

  const pointsRemaining = Number(currentPoints.text()) - Number(unitPoints)
  const newUnitTally = Number(currentUnitTally.text()) + 1

  currentPoints.text(pointsRemaining)
  currentUnitTally.text(newUnitTally)
});
