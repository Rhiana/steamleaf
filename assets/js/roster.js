$(document).on('click','.addUnit',function(e){
  const unitName = $(this).data('unit-name')
  const unitPoints = $(this).data('unit-points')
  const rosterTable = $(".roster-table tbody");

  console.log(unitPoints)

  rosterTable.append(`<tr><td class='units'>${unitName}</td><td class='amounts'>1</td></tr>`)
});
