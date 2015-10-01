(function() {
  if(typeof Snakes === "undefined") {
    window.Snakes = {};
  }
  // var Snakes = window.Snakes;

  var View = Snakes.View = function($el) {
    this.board = new Snakes.Board();
    this.$el = $el;
    this.bindEvents();
    this.setUpBoard();
    setInterval(this.step.bind(this), 1000);
  };

  View.prototype.bindEvents = function() {
    this.$el.on("keydown", this.handleKeyEvent.bind(this));
  };

  View.prototype.handleKeyEvent = function(e) {
    switch(e.keyCode) {
      case "0x41":
        this.board.snake.turn("W");
        break;
      case "0x44":
        this.board.snake.turn("E");
        break;
      case "0x53":
        this.board.snake.turn("S");
        break;
      case "0x57":
        this.board.snake.turn("N");
        break;
      }
  };

  View.prototype.step = function () {
    this.board.snake.move();
    this.render();
  };

  View.prototype.render = function() {
    this.board.snake.segments.forEach(function(coord) {
      var cellNum = coord.xyConvert();
      var $cell = $('li').find("[data-id='" + cellNum + "']");
      debugger;
      $cell.addClass("snake");
    });
  };

  View.prototype.setUpBoard = function() {
    this.$el.append("<ul></ul>");
    for(var i = 0; i < 400; i++) {
      var $li = $("<li></li>");
      $li.data("id", i);
      $("ul").append($li);
    }
  };

})();
