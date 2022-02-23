function distanceFromHqInBlocks(Value) {
    let blocks =  Math.abs(Value - 42);
    return blocks;
  }

  function distanceFromHqInFeet(Value) {
    return distanceFromHqInBlocks(Value)* 264;
  }

 function distanceTravelledInFeet(start, destination) {
    let dist = Math.abs((destination - start)*264)
    return dist;
  }

  function calculatesFarePrice(start,destination){
    let distance = distanceTravelledInFeet(start,destination);
    if (distance <= 400){
      return 0;
    }
    else if (distance >=400 && distance <= 2000){
      return (distance - 400)* 0.02;
    }
    else if(distance >= 2000 && distance <= 2500){
      return 25;
    }
    else if (distance > 2500){
      return "cannot travel that far";
    }
  }