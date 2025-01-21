var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMINISTRASIKECAMATAN_AR_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_1 = format_ADMINISTRASIKECAMATAN_AR_1.readFeatures(json_ADMINISTRASIKECAMATAN_AR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_1.addFeatures(features_ADMINISTRASIKECAMATAN_AR_1);
var lyr_ADMINISTRASIKECAMATAN_AR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_1, 
                style: style_ADMINISTRASIKECAMATAN_AR_1,
                popuplayertitle: 'ADMINISTRASIKECAMATAN_AR',
                interactive: true,
    title: 'ADMINISTRASIKECAMATAN_AR<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_0.png" /> Boleng<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_1.png" /> Cibal Barat<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_2.png" /> Komodo<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_3.png" /> Kuwus<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_4.png" /> Lelak<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_5.png" /> Lembor<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_6.png" /> Lembor Selatan<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_7.png" /> Macang Pacar<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_8.png" /> Mbeliling<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_9.png" /> Ndoso<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_10.png" /> Rahong Utara<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_11.png" /> Reok Barat<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_12.png" /> Ruteng<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_13.png" /> Sanonggoang<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_14.png" /> Satar Mese Barat<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_15.png" /> Welak<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_16.png" /> <br />'
        });
var format_viben_2 = new ol.format.GeoJSON();
var features_viben_2 = format_viben_2.readFeatures(json_viben_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_viben_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_viben_2.addFeatures(features_viben_2);
var lyr_viben_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_viben_2, 
                style: style_viben_2,
                popuplayertitle: 'viben',
                interactive: true,
                title: '<img src="styles/legend/viben_2.png" /> viben'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_1.setVisible(true);lyr_viben_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ADMINISTRASIKECAMATAN_AR_1,lyr_viben_2];
lyr_ADMINISTRASIKECAMATAN_AR_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_viben_2.set('fieldAliases', {'lokasi': 'lokasi', 'x': 'x', 'y': 'y', 'gambar': 'gambar', 'deskripsi': 'deskripsi', });
lyr_ADMINISTRASIKECAMATAN_AR_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_viben_2.set('fieldImages', {'lokasi': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'gambar': 'ExternalResource', 'deskripsi': 'TextEdit', });
lyr_ADMINISTRASIKECAMATAN_AR_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'inline label - always visible', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_viben_2.set('fieldLabels', {'lokasi': 'inline label - always visible', 'x': 'inline label - always visible', 'y': 'inline label - always visible', 'gambar': 'inline label - always visible', 'deskripsi': 'inline label - always visible', });
lyr_viben_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});