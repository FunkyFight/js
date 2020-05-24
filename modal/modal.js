jQuery.fn.extend({
      modalUnfolding: function() {
        $('#modal-container').removeAttr('class').addClass('one');
        $('body').addClass('modal-active');
      }
      modalRevealing: function() {
        $('#modal-container').removeAttr('class').addClass('two');
        $('body').addClass('modal-active');
      }
      modalUncovering: function() {
        $('#modal-container').removeAttr('class').addClass('three');
        $('body').addClass('modal-active');
      }
      modalBlowUp: function() {
        $('#modal-container').removeAttr('class').addClass('four');
        $('body').addClass('modal-active');
      }
      modalMeepMeep: function() {
        $('#modal-container').removeAttr('class').addClass('five');
        $('body').addClass('modal-active');
      }
      modalSketch: function() {
        $('#modal-container').removeAttr('class').addClass('six');
        $('body').addClass('modal-active');
      }
      modalBond: function() {
        $('#modal-container').removeAttr('class').addClass('seven');
        $('body').addClass('modal-active');
      }
})

$('#modal-container').click(function(){
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});
