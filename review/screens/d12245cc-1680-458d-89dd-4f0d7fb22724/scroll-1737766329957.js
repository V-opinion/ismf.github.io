(function(window, undefined) {

    /*********************** START STATIC ACCESS METHODS ************************/

    var older = jimUtil.loadScrollBars;
    jQuery.extend(jimUtil, {
        "loadScrollBars": function() {
        	if (older != undefined)
        		older();
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .ui-page").overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Panel_1 .layoutWrapper:first-child").overscroll({ showThumbs:false, direction:'horizontal', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 #mi-ce476a37-Panel_4 .layoutWrapper:first-child").overscroll({ showThumbs:false, direction:'horizontal', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 #mi-ce476a37-Text_cell_6 .clipping:first").overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 #mi-ce476a37-Text_cell_7 .clipping:first").overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 #mi-ce476a37-Text_cell_8 .clipping:first").overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 #mi-ce476a37-Text_cell_9 .clipping:first").overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 #mi-ce476a37-Text_cell_10 .clipping:first").overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
         }
    });

    /*********************** END STATIC ACCESS METHODS ************************/

}) (window);