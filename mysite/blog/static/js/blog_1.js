$(document).ready(function() {
  //** notice we are including jquery and the color plugin at
  //** https://code.jquery.com/color/jquery.color-2.1.0.js

  var scroll_pos = 0;
  var animation_begin_pos = 0; //where you want the animation to begin
  var animation_end_pos = 2000; //where you want the animation to stop
  var beginning_color = new $.Color("rgb(210,50,98)"); //we can set this here, but it'd probably be better to get it from the CSS; for the example we're setting it here.
  var ending_color = new $.Color("rgb(0,197,209)"); //what color we want to use in the end
  $(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos >= animation_begin_pos && scroll_pos <= animation_end_pos) {
      // console.log( 'scrolling and animating' );
      //we want to calculate the relevant transitional rgb value
      var percentScrolled =
        scroll_pos / (animation_end_pos - animation_begin_pos);
      var newRed =
        beginning_color.red() +
        (ending_color.red() - beginning_color.red()) * percentScrolled;
      var newGreen =
        beginning_color.green() +
        (ending_color.green() - beginning_color.green()) * percentScrolled;
      var newBlue =
        beginning_color.blue() +
        (ending_color.blue() - beginning_color.blue()) * percentScrolled;
      var newColor = new $.Color(newRed, newGreen, newBlue);
      //console.log( newColor.red(), newColor.green(), newColor.blue() );
      $("body").animate({ backgroundColor: newColor }, 0);
    } else if (scroll_pos > animation_end_pos) {
      $("body").animate({ backgroundColor: ending_color }, 0);
    } else if (scroll_pos < animation_begin_pos) {
      $("body").animate({ backgroundColor: beginning_color }, 0);
    } else {
    }
  });
});
