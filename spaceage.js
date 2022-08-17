const earthspace = (planet, second) => {
  const earthspace = second ;
  const planets=planet.toLowerCase()
  console.log(planets)

  const earthtime=31557600 

  const orvitalproid = {
    mercury: 0.2408467 * earthtime,
    venus: 0.61519726 *earthtime,
    mars: 1.8808158 *earthtime,
    jupiter: 11.862615 *earthtime,
    saturn: 29.447498 *earthtime,
    uranus: 84.016846 *earthtime,
    neptune: 164.79132 *earthtime,
    earth: earthtime
  };

// console.log(orvitalproid[planet])

const planetvalue=Number((second /orvitalproid[planets] ).toFixed(2))

return planetvalue;

};
console.log( earthspace('earth', 1000000000))
