(function(window, undefined) {

    /*********************** START STATIC ACCESS METHODS ************************/

    var older = jimUtil.loadScrollBars;
    jQuery.extend(jimUtil, {
        "loadScrollBars": function() {
        	if (older != undefined)
        		older();
            jQuery(".s-89cf7d1f-168d-4e2c-a7bf-6ab0781e66cc .ui-page").overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
            jQuery(".s-89cf7d1f-168d-4e2c-a7bf-6ab0781e66cc #mi-2306b935-Panel_2 .layoutWrapper:first-child").overscroll({ showThumbs:false, direction:'horizontal', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
            jQuery(".s-89cf7d1f-168d-4e2c-a7bf-6ab0781e66cc #mi-2306b935-Text_cell_6 .clipping:first").overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
            jQuery(".s-89cf7d1f-168d-4e2c-a7bf-6ab0781e66cc #mi-2306b935-Text_cell_7 .clipping:first").overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
            jQuery(".s-89cf7d1f-168d-4e2c-a7bf-6ab0781e66cc #mi-2306b935-Text_cell_8 .clipping:first").overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
            jQuery(".s-89cf7d1f-168d-4e2c-a7bf-6ab0781e66cc #mi-2306b935-Text_cell_9 .clipping:first").overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
            jQuery(".s-89cf7d1f-168d-4e2c-a7bf-6ab0781e66cc #mi-2306b935-Text_cell_10 .clipping:first").overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
         }
    });

    /*********************** END STATIC ACCESS METHODS ************************/

}) (window);