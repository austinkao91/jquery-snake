(function() {
  if(typeof Snakes === "undefined") {
    window.Snakes = {};
  }

  var Snakes = window.Snakes;


  var Snake = Snakes.Snake = function(dir) {
    this.dir = dir;
    this.segments = [new Coord(11, 10), new Coord(10, 10)];
  };

  Snake.prototype.move = function() {
    this.segments.pop();
    this.addNextSegment(this.dir);
  };

  Snake.prototype.addNextSegment = function (dir) {
    switch (dir) {
      case "N":
        this.segments.unshift(this.segments[0].plus(new Coord(0, -1)));
        break;
      case "E":
        this.segments.unshift(this.segments[0].plus(new Coord(1, 0)));
        break;
      case "S":
        this.segments.unshift(this.segments[0].plus(new Coord(0, 1)));
        break;
      case "W":
        this.segments.unshift(this.segments[0].plus(new Coord(-1, 0)));
        break;
    }
  };

  Snake.prototype.turn = function(dir) {
    this.dir = dir;
  };

  var Coord = Snakes.Coord = function(x,y) {
    this.x = x;
    this.y = y;
  };

  Coord.prototype.plus = function(otherCoord) {
    return new Coord(this.x + otherCoord.x, this.y+ otherCoord.y);
  };

  Coord.prototype.xyConvert = function () {
    return (this.x * 20 + this.y);
  };

  Coord.prototype.equals = function(otherCoord) {
    return this.x === otherCoord.x && this.y === otherCoord.y;
  };

  Coord.prototype.isOpposite = function(otherCoord) {
    return this.x === otherCoord.y && this.y === otherCoord.x;
  };

  var Board = Snakes.Board = function() {
    this.grid = [];
    this.snake = new Snakes.Snake("E");
    this.setUpGrid();
  };

  Board.prototype.setUpGrid = function() {
    for(var i = 0; i < 20; i++) {
      this.grid[i] = [];
      for(var j = 0; j < 20; j++) {
        this.grid[i][j] = ".";
      }
    }

    for (var k = 0; k < this.snake.segments.length; k++) {
      var coord = this.snake.segments[k];
      this.grid[coord.y][coord.x] = "S";
    }
  };

  Board.prototype.render = function() {
    this.grid.forEach(function(rows) {
      console.log(rows.join(" "));
    });
  };


  Snake.DIR = ["N", "E", "S", "W"];
})();
