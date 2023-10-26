import React, { useEffect, useRef, useState } from 'react';
import OL from '/public/js/ol-custom-1.0.0.js';

const CompMap = (props) => {
    
    const mapId = props.mapId || 'map';

    // 지도생성
    useEffect(() => {
        OL.roadMap({
            // target: mapId //target을 키로 지도 오브젝트 호출  Ol.map  ex) target:'map2'이면 OL.map2
            target: mapId //target을 키로 지도 오브젝트 호출  Ol.map  ex) target:'map2'이면 OL.map2
        });
    }, []);

    return (
        <>
            <div id={mapId} style={{ height: '800px', width: '1500px', marginLeft : "150px" }}></div>
        </>
    );
};

export default CompMap;
