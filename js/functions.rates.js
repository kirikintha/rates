/**
 * Rates JS
 * Checks for invalid date ranges from the end user, and rebinds after CCK add another item ahah
 */
if (Drupal.jsEnabled) {
	
	$(document).ready( function() {
    
    _rebindElements();
    
    $(document).bind( 'ajaxComplete', function() { //This resets the elements if CCK add another is used. This is compatible for jQuery 1.2.6 +
      
      //Drupal.trace( 'Ajax Complete' );
      _rebindElements();
      
    } );
    
    function _rebindElements() {
      
      //When we blur the field, We have to sanity check here, that this date does not conflict with it's corresponding to/from date
      $('div.property-rates-widget input.form-text').bind( 'change', function () {
        
        //Find out which field we are looking
        //Drupal.trace( $(this).parent('div').parent('div').children('div').children('input') );
        
        var inputs = $(this).parent('div').parent('div').children('div').children('input');
        
        if ( inputs[0].value && inputs[1].value ) {
          
          //Get a valid Start Date for this date set
          var start = inputs[0].value;
          startDate = new Date( start );
          
          //Get a Valid End Date for this date set
          var end = inputs[1].value;
          endDate = new Date( end );
          
          if ( start >= end ) { //If you have not entered in a valid set of dates
            
            alert( Drupal.t('Sorry, but you must enter an End Date that is greater than the Begin Date.') );
            
            $(this).val('');
          
          }
          
        }
        
      } );
    
    }
    
    //end document ready
    
	} );
  
  //End JS endabled

}