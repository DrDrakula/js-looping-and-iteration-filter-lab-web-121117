// Code your solution in this file
function findMatching(drivers, name){
  new_drivers = drivers.filter(function(driver){ return driver.toLowerCase() === name.toLowerCase()})
  return new_drivers
}

function fuzzyMatch(drivers, letters){
  new_drivers = drivers.filter(function(driver){ return driver.slice(0,letters.length) === letters })
  return new_drivers
}

function matchName(drivers, name){
  new_drivers = drivers.filter(function(object){ return object.name === name })
  return new_drivers
}
