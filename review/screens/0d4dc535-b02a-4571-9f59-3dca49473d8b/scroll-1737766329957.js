(function(window, undefined) {

    /*********************** START STATIC ACCESS METHODS ************************/

    var older = jimUtil.loadScrollBars;
    jQuery.extend(jimUtil, {
        "loadScrollBars": function() {
        	if (older != undefined)
        		older();
            jQuery(".s-0d4dc535-b02a-4571-9f59-3dca49473d8b .ui-page").overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
            jQuery(".s-0d4dc535-b02a-4571-9f59-3dca49473d8b #mi-3f8c1bee-Panel_2 .layoutWrapper:first-child").overscroll({ showThumbs:false, direction:'horizontal', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
            jQuery(".s-0d4dc535-b02a-4571-9f59-3dca49473d8b #mi-3f8c1bee-Text_cell_6 .clipping:first").overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
            jQuery(".s-0d4dc535-b02a-4571-9f59-3dca49473d8b #mi-3f8c1bee-Text_cell_7 .clipping:first").overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
            jQuery(".s-0d4dc535-b02a-4571-9f59-3dca49473d8b #mi-3f8c1bee-Text_cell_8 .clipping:first").overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
            jQuery(".s-0d4dc535-b02a-4571-9f59-3dca49473d8b #mi-3f8c1bee-Text_cell_9 .clipping:first").overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
            jQuery(".s-0d4dc535-b02a-4571-9f59-3dca49473d8b #mi-3f8c1bee-Text_cell_10 .clipping:first").overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
         }
    });

    /*********************** END STATIC ACCESS METHODS ************************/

}) (window);