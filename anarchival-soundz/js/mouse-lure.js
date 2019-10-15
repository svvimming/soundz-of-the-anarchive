
let canvas = 800;

function setup(){
  frameRate(60);
  createCanvas(canvas*1.5, canvas, WEBGL);
}

function stopBuffers(){
  if(copey.isPlaying()){
    copey.stop();
  }
  if(amsty.isPlaying()){
    amsty.stop();
  }
  if(helsi.isPlaying()){
    helsi.stop();
  }
}

function loopBuf(buf){
  buf.play(0, 1.0, 1.0, 0, buf.duration());
  buf.loop();
}

function draw(){
  var mouseNow = pow((pow(((mouseX*2)/(canvas*1.5)), 2)+pow(((mouseY*2)/canvas), 2)), 0.5);
  var mouseBefore = pow((pow(((pmouseX*2)/(canvas*1.5)), 2)+pow(((pmouseY*2)/canvas), 2)), 0.5);
  var deltaT = (10*abs(mouseNow-mouseBefore));

  if (deltaT>1){
    deltaT = 1;
  }

  copey.setVolume(deltaT, 0.5);
  copey.rate(1+(0.5*(mouseNow-mouseBefore)));
  amsty.setVolume(deltaT, 0.5);
  amsty.rate(1+(0.5*(mouseNow-mouseBefore)));
  helsi.setVolume(deltaT, 0.5);
  helsi.rate(1+(0.5*(mouseNow-mouseBefore)));
}
