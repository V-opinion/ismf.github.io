(function(window, undefined) {

    /*********************** START STATIC ACCESS METHODS ************************/

    var older = jimUtil.loadScrollBars;
    jQuery.extend(jimUtil, {
        "loadScrollBars": function() {
        	if (older != undefined)
        		older();
            jQuery(".s-a0b0d11b-dc4a-4716-aebb-c01998cc7863 .ui-page").overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
            jQuery(".s-a0b0d11b-dc4a-4716-aebb-c01998cc7863 #mi-9670f9f1-Panel_2 .layoutWrapper:first-child").overscroll({ showThumbs:false, direction:'horizontal', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
            jQuery(".s-a0b0d11b-dc4a-4716-aebb-c01998cc7863 #mi-9670f9f1-Text_cell_6 .clipping:first").overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
            jQuery(".s-a0b0d11b-dc4a-4716-aebb-c01998cc7863 #mi-9670f9f1-Text_cell_7 .clipping:first").overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
            jQuery(".s-a0b0d11b-dc4a-4716-aebb-c01998cc7863 #mi-9670f9f1-Text_cell_8 .clipping:first").overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
            jQuery(".s-a0b0d11b-dc4a-4716-aebb-c01998cc7863 #mi-9670f9f1-Text_cell_9 .clipping:first").overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
            jQuery(".s-a0b0d11b-dc4a-4716-aebb-c01998cc7863 #mi-9670f9f1-Text_cell_10 .clipping:first").overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
         }
    });

    /*********************** END STATIC ACCESS METHODS ************************/

}) (window);