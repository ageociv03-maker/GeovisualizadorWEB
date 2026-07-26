var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_contorno_1 = new ol.format.GeoJSON();
var features_contorno_1 = format_contorno_1.readFeatures(json_contorno_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_contorno_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_contorno_1.addFeatures(features_contorno_1);
var lyr_contorno_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_contorno_1, 
                style: style_contorno_1,
                popuplayertitle: 'contorno',
                interactive: true,
                title: '<img src="styles/legend/contorno_1.png" /> contorno'
            });
var format_areas_verdes_2 = new ol.format.GeoJSON();
var features_areas_verdes_2 = format_areas_verdes_2.readFeatures(json_areas_verdes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areas_verdes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areas_verdes_2.addFeatures(features_areas_verdes_2);
var lyr_areas_verdes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_areas_verdes_2, 
                style: style_areas_verdes_2,
                popuplayertitle: 'areas_verdes',
                interactive: true,
                title: '<img src="styles/legend/areas_verdes_2.png" /> areas_verdes'
            });
var format_hidrografia_3 = new ol.format.GeoJSON();
var features_hidrografia_3 = format_hidrografia_3.readFeatures(json_hidrografia_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hidrografia_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hidrografia_3.addFeatures(features_hidrografia_3);
var lyr_hidrografia_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hidrografia_3, 
                style: style_hidrografia_3,
                popuplayertitle: 'hidrografia',
                interactive: true,
                title: '<img src="styles/legend/hidrografia_3.png" /> hidrografia'
            });
var format_Buffer_Salud_600m_4 = new ol.format.GeoJSON();
var features_Buffer_Salud_600m_4 = format_Buffer_Salud_600m_4.readFeatures(json_Buffer_Salud_600m_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffer_Salud_600m_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer_Salud_600m_4.addFeatures(features_Buffer_Salud_600m_4);
var lyr_Buffer_Salud_600m_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffer_Salud_600m_4, 
                style: style_Buffer_Salud_600m_4,
                popuplayertitle: 'Buffer_Salud_600m',
                interactive: true,
                title: '<img src="styles/legend/Buffer_Salud_600m_4.png" /> Buffer_Salud_600m'
            });
var format_buffer_educacion_300m_5 = new ol.format.GeoJSON();
var features_buffer_educacion_300m_5 = format_buffer_educacion_300m_5.readFeatures(json_buffer_educacion_300m_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffer_educacion_300m_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffer_educacion_300m_5.addFeatures(features_buffer_educacion_300m_5);
var lyr_buffer_educacion_300m_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buffer_educacion_300m_5, 
                style: style_buffer_educacion_300m_5,
                popuplayertitle: 'buffer_educacion_300m',
                interactive: true,
                title: '<img src="styles/legend/buffer_educacion_300m_5.png" /> buffer_educacion_300m'
            });
var format_zonas_de_riesgo_6 = new ol.format.GeoJSON();
var features_zonas_de_riesgo_6 = format_zonas_de_riesgo_6.readFeatures(json_zonas_de_riesgo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zonas_de_riesgo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zonas_de_riesgo_6.addFeatures(features_zonas_de_riesgo_6);
var lyr_zonas_de_riesgo_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zonas_de_riesgo_6, 
                style: style_zonas_de_riesgo_6,
                popuplayertitle: 'zonas_de_riesgo',
                interactive: true,
    title: 'zonas_de_riesgo<br />\
    <img src="styles/legend/zonas_de_riesgo_6_0.png" /> zona_insegura<br />\
    <img src="styles/legend/zonas_de_riesgo_6_1.png" /> zona_segura<br />' });
var format_parcelas_7 = new ol.format.GeoJSON();
var features_parcelas_7 = format_parcelas_7.readFeatures(json_parcelas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcelas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcelas_7.addFeatures(features_parcelas_7);
var lyr_parcelas_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parcelas_7, 
                style: style_parcelas_7,
                popuplayertitle: 'parcelas',
                interactive: true,
    title: 'parcelas<br />\
    <img src="styles/legend/parcelas_7_0.png" /> areas_verdes<br />\
    <img src="styles/legend/parcelas_7_1.png" /> comercial<br />\
    <img src="styles/legend/parcelas_7_2.png" /> educacion<br />\
    <img src="styles/legend/parcelas_7_3.png" /> equipamientos<br />\
    <img src="styles/legend/parcelas_7_4.png" /> residencial<br />\
    <img src="styles/legend/parcelas_7_5.png" /> salud<br />\
    <img src="styles/legend/parcelas_7_6.png" /> servicio<br />' });
var format_lotes_urbanos_8 = new ol.format.GeoJSON();
var features_lotes_urbanos_8 = format_lotes_urbanos_8.readFeatures(json_lotes_urbanos_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lotes_urbanos_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lotes_urbanos_8.addFeatures(features_lotes_urbanos_8);
var lyr_lotes_urbanos_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lotes_urbanos_8, 
                style: style_lotes_urbanos_8,
                popuplayertitle: 'lotes_urbanos',
                interactive: true,
    title: 'lotes_urbanos<br />\
    <img src="styles/legend/lotes_urbanos_8_0.png" /> <br />' });
var format_red_vial_9 = new ol.format.GeoJSON();
var features_red_vial_9 = format_red_vial_9.readFeatures(json_red_vial_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_red_vial_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_red_vial_9.addFeatures(features_red_vial_9);
var lyr_red_vial_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_red_vial_9, 
                style: style_red_vial_9,
                popuplayertitle: 'red_vial',
                interactive: true,
                title: '<img src="styles/legend/red_vial_9.png" /> red_vial'
            });
var format_equipamientos_10 = new ol.format.GeoJSON();
var features_equipamientos_10 = format_equipamientos_10.readFeatures(json_equipamientos_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_equipamientos_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_equipamientos_10.addFeatures(features_equipamientos_10);
var lyr_equipamientos_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_equipamientos_10, 
                style: style_equipamientos_10,
                popuplayertitle: 'equipamientos',
                interactive: true,
                title: '<img src="styles/legend/equipamientos_10.png" /> equipamientos'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_contorno_1.setVisible(true);lyr_areas_verdes_2.setVisible(false);lyr_hidrografia_3.setVisible(true);lyr_Buffer_Salud_600m_4.setVisible(false);lyr_buffer_educacion_300m_5.setVisible(false);lyr_zonas_de_riesgo_6.setVisible(false);lyr_parcelas_7.setVisible(true);lyr_lotes_urbanos_8.setVisible(false);lyr_red_vial_9.setVisible(true);lyr_equipamientos_10.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_contorno_1,lyr_areas_verdes_2,lyr_hidrografia_3,lyr_Buffer_Salud_600m_4,lyr_buffer_educacion_300m_5,lyr_zonas_de_riesgo_6,lyr_parcelas_7,lyr_lotes_urbanos_8,lyr_red_vial_9,lyr_equipamientos_10];
lyr_contorno_1.set('fieldAliases', {'fid': 'fid', });
lyr_areas_verdes_2.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'area_m2': 'area_m2', 'estado': 'estado', });
lyr_hidrografia_3.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'cota_msnm': 'cota_msnm', 'caudal_m3s': 'caudal_m3s', });
lyr_Buffer_Salud_600m_4.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'subtipo': 'subtipo', 'capacidad': 'capacidad', });
lyr_buffer_educacion_300m_5.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'subtipo': 'subtipo', 'capacidad': 'capacidad', });
lyr_zonas_de_riesgo_6.set('fieldAliases', {'fid': 'fid', 'cod_predio': 'cod_predio', 'uso_suelo': 'uso_suelo', 'area_m2': 'area_m2', 'valor_m2': 'valor_m2', 'cota_msnm': 'cota_msnm', 'n_habitantes': 'n_habitantes', });
lyr_parcelas_7.set('fieldAliases', {'fid': 'fid', 'cod_predio': 'cod_predio', 'uso_suelo': 'uso_suelo', 'area_m2': 'area_m2', 'valor_m2': 'valor_m2', 'cota_msnm': 'cota_msnm', 'n_habitantes': 'n_habitantes', });
lyr_lotes_urbanos_8.set('fieldAliases', {'fid': 'fid', 'id_lote': 'id_lote', 'manzana': 'manzana', 'uso': 'uso', 'n_habitantes': 'n_habitantes', 'area_m2': 'area_m2', 'cod_predio': 'cod_predio', 'valor_m2': 'valor_m2', 'cota_msnm': 'cota_msnm', });
lyr_red_vial_9.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo_via': 'tipo_via', 'ancho_m': 'ancho_m', 'sentido': 'sentido', });
lyr_equipamientos_10.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'subtipo': 'subtipo', 'capacidad': 'capacidad', });
lyr_contorno_1.set('fieldImages', {'fid': 'TextEdit', });
lyr_areas_verdes_2.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'area_m2': 'TextEdit', 'estado': 'TextEdit', });
lyr_hidrografia_3.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'cota_msnm': 'TextEdit', 'caudal_m3s': 'TextEdit', });
lyr_Buffer_Salud_600m_4.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'subtipo': 'TextEdit', 'capacidad': 'TextEdit', });
lyr_buffer_educacion_300m_5.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'subtipo': 'TextEdit', 'capacidad': 'TextEdit', });
lyr_zonas_de_riesgo_6.set('fieldImages', {'fid': 'TextEdit', 'cod_predio': 'TextEdit', 'uso_suelo': 'TextEdit', 'area_m2': 'TextEdit', 'valor_m2': 'TextEdit', 'cota_msnm': 'TextEdit', 'n_habitantes': 'Range', });
lyr_parcelas_7.set('fieldImages', {'fid': 'TextEdit', 'cod_predio': 'TextEdit', 'uso_suelo': 'TextEdit', 'area_m2': 'TextEdit', 'valor_m2': 'TextEdit', 'cota_msnm': 'TextEdit', 'n_habitantes': 'Range', });
lyr_lotes_urbanos_8.set('fieldImages', {'fid': 'TextEdit', 'id_lote': 'TextEdit', 'manzana': 'TextEdit', 'uso': 'TextEdit', 'n_habitantes': 'TextEdit', 'area_m2': 'TextEdit', 'cod_predio': 'TextEdit', 'valor_m2': 'TextEdit', 'cota_msnm': 'TextEdit', });
lyr_red_vial_9.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo_via': 'TextEdit', 'ancho_m': 'TextEdit', 'sentido': 'TextEdit', });
lyr_equipamientos_10.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'subtipo': 'TextEdit', 'capacidad': 'TextEdit', });
lyr_contorno_1.set('fieldLabels', {'fid': 'inline label - visible with data', });
lyr_areas_verdes_2.set('fieldLabels', {'fid': 'inline label - visible with data', 'nombre': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', 'estado': 'inline label - visible with data', });
lyr_hidrografia_3.set('fieldLabels', {'fid': 'inline label - visible with data', 'nombre': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'cota_msnm': 'inline label - visible with data', 'caudal_m3s': 'inline label - visible with data', });
lyr_Buffer_Salud_600m_4.set('fieldLabels', {'fid': 'inline label - visible with data', 'nombre': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'subtipo': 'inline label - visible with data', 'capacidad': 'inline label - visible with data', });
lyr_buffer_educacion_300m_5.set('fieldLabels', {'fid': 'inline label - visible with data', 'nombre': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'subtipo': 'inline label - visible with data', 'capacidad': 'inline label - visible with data', });
lyr_zonas_de_riesgo_6.set('fieldLabels', {'fid': 'inline label - visible with data', 'cod_predio': 'inline label - visible with data', 'uso_suelo': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', 'valor_m2': 'inline label - visible with data', 'cota_msnm': 'inline label - visible with data', 'n_habitantes': 'inline label - visible with data', });
lyr_parcelas_7.set('fieldLabels', {'fid': 'inline label - visible with data', 'cod_predio': 'inline label - visible with data', 'uso_suelo': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', 'valor_m2': 'inline label - visible with data', 'cota_msnm': 'inline label - visible with data', 'n_habitantes': 'inline label - visible with data', });
lyr_lotes_urbanos_8.set('fieldLabels', {'fid': 'inline label - visible with data', 'id_lote': 'inline label - visible with data', 'manzana': 'inline label - visible with data', 'uso': 'inline label - visible with data', 'n_habitantes': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', 'cod_predio': 'inline label - visible with data', 'valor_m2': 'inline label - visible with data', 'cota_msnm': 'inline label - visible with data', });
lyr_red_vial_9.set('fieldLabels', {'fid': 'inline label - visible with data', 'nombre': 'inline label - always visible', 'tipo_via': 'inline label - visible with data', 'ancho_m': 'inline label - visible with data', 'sentido': 'inline label - visible with data', });
lyr_equipamientos_10.set('fieldLabels', {'fid': 'inline label - visible with data', 'nombre': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'subtipo': 'inline label - visible with data', 'capacidad': 'inline label - visible with data', });
lyr_equipamientos_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});