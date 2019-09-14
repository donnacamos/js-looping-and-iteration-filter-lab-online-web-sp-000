// Code your solution in this file
function findMatching(drivers, name){
  return drivers.filter(n => n.toUpperCase() === name.toUpperCase())
}
