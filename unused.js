// path to paper.js - draw line into it
    var path = new Path();
// give the stroke a color
    path.strokeColor = 'black';
    var start = new Point (100,100);
// move to start and draw a line from there
    path.moveTo(start);
// note the plus operator on Point objects
// PaperScript does that for us, and more!
    path.lineTo(start + [ 500, -50 ]);
    // create circles
      var circle1 = new Path.Circle(new Point(0, 0), 10);
      circle1.fillColor = 'red';
      var circle2 = new Path.Circle(new Point(100, 70), 50);
      circle2.fillColor = 'gray';

      // NESTED FOR LOOP - x stays at 0 while y loops to max, then x increments for next y loop
            for(var x= 0; x <= 1500; x += 100) {
              for(var y= 0; y <= 1500; y += 100) {
                  new Path.Circle(new Point(x, y), 10).fillColor = 'red';
            }
          }

          // animate circle
            var animateCircle = new Path.Circle(new Point(300,300), 100);
            animateCircle.fillColor = 'purple';
          // change color and size
            animateCircle.fillColor.hue += 2;
            animateCircle.scale(.95);
