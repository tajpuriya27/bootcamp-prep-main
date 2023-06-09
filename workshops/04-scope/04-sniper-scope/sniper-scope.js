let bond = "007";

function oddJob() {
  let AgentinScope = bond === "007";
  //let prediction = null; // YOUR BOOLEAN PREDICTION HERE
  let prediction = true;
  return AgentinScope === prediction;
}
//console.log(oddJob());
//goldFinger();

function goldFinger(bond) {
  let AgentinScope = bond === "007";
  //console.log(bond);
  //let prediction = null; // YOUR BOOLEAN PREDICTION HERE
  //console.log(prediction);
  //console.log(typeof prediction);
  let prediction = false;
  return AgentinScope === prediction;
}

//scaramanga();

function scaramanga(target) {
  target = bond;
  //console.log(target);
  let AgentinScope = bond === "007";
  let prediction = true; // YOUR BOOLEAN PREDICTION HERE

  return AgentinScope === prediction;
}

function drNo() {
  let bond = "Body Double";

  let AgentinScope = bond === "007";
  let prediction = false; // YOUR BOOLEAN PREDICTION HERE

  return AgentinScope === prediction;
}

function jaws(agent) {
  agent = bond;
  bond = "Body Double";

  let AgentinScope = agent === "007";
  let prediction = true; // YOUR BOOLEAN PREDICTION HERE

  return AgentinScope === prediction;
}

//console.log(elChiffre());

function elChiffre() {
  let agent = bond;
  bond = "Body Double";
  //console.log(typeof agent);
  let AgentinScope = agent === "007";
  let prediction = false; // YOUR BOOLEAN PREDICTION HERE

  return AgentinScope === prediction;
}
