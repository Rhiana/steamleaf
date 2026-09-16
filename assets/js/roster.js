$(document).on('click','.addUnit',function(e){
  const unitName = $(this).data('unit-name')
  const unitPoints = $(this).data('unit-points')
  const rosterTable = $(".roster-table tbody")
  const currentPoints = $(".current-points")
  const pointsRemaining = currentPoints.text() - unitPoints

  currentPoints.text(pointsRemaining)
  rosterTable.append(`<tr><td class='units'>${unitName}</td><td class='amounts'>${unitPoints}</td></tr>`)
});
