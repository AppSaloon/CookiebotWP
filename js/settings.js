/**
 * Load init function when the page is ready
 *
 * @since 1.8.0
 */
jQuery( document ).ready( init );

/**
 * Init settings
 *
 * @since 1.8.0
 */
function init() {
    placeholder_select_language();
    placeholder_toggle();
    button_add_placeholder_language();
}

/**
 * Enable/disable placeholder
 *
 * @since 1.8.0
 */
function placeholder_toggle() {
    jQuery( document ).on( 'change', '.placeholder_enable', function () {
        var status = jQuery( this ).is( ':checked' );
        var addon = jQuery( this ).data( 'addon' );

        if ( status ) {
            placeholder_enable( addon );
        } else {
            placeholder_disable( addon );
        }
    } );
}

/**
 * Placeholder disable
 *
 * @param addon
 *
 * @since 1.8.0
 */
function placeholder_disable( addon ) {
    jQuery( '.placeholder[data-addon="' + addon + '"]' ).hide();
}

/**
 * Placeholder enable
 *
 * @param addon
 *
 * @since 1.8.0
 */
function placeholder_enable( addon ) {
    jQuery( '.placeholder[data-addon="' + addon + '"]' ).show();
}

/**
 * Add language for placeholder
 *
 * @since 1.8.0
 */
function button_add_placeholder_language() {
    jQuery( '.btn_add_language' ).on( 'click', function ( e ) {
        e.preventDefault();

        var addon = jQuery( this ).data( 'addon' );

        add_placeholder_language_content( addon );

        return false;
    } );
}

/**
 * Add placeholder language div
 *
 * @param addon
 *
 * @since 1.8.0
 */
function add_placeholder_language_content( addon ) {
    jQuery( '.placeholder[data-addon="' + addon + '"] .placeholder_content:first' ).each( function () {
        jQuery( '.placeholder[data-addon="' + addon + '"]' ).prepend( jQuery( this ).html() );
    } )
}

/**
 * Replace select and textarea name
 *
 * @since 1.8.0
 */
function placeholder_select_language() {
    jQuery( document ).on( 'change', '.placeholder_select_language', function () {
        var new_value = jQuery( this ).val();
        var select_name = jQuery( this ).attr( 'name' );

        // get new name
        select_name = select_name.substr( 0, select_name.lastIndexOf( '[' ) );
        select_name += '[' + new_value + ']';

        // rename select field
        jQuery( this ).attr( 'name', select_name );

        // rename textarea
        jQuery( this ).parent().next().find( 'textarea' ).attr( 'name', select_name );
    } )
}