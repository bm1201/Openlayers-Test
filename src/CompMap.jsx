import React, { useEffect, useRef, useState } from 'react';
import OL from '../public/js/ol-custom_v2.js';

const CompMap = (props) => {
    
    const mapId = props.mapId || 'map';

    // 지도생성
    useEffect(() => {
        OL.roadMap({
            // target: mapId //target을 키로 지도 오브젝트 호출  Ol.map  ex) target:'map2'이면 OL.map2
            target: mapId //target을 키로 지도 오브젝트 호출  Ol.map  ex) target:'map2'이면 OL.map2
        });
    }, []);

    //지도 모드 변경
    const changeCanvas = e => {
        if (e.target.id === 'lightMode') {
            document.getElementById('darkMode').checked = false;
            OL.map.changeCanvas({ type: 'ligth' });
        } else if (e.target.id === 'darkMode') {
            document.getElementById('lightMode').checked = false;
            OL.map.changeCanvas({ type: 'dark' });
        }
    };

    return (
        <>
        <div style={{ height: '800px', width: '1500px', marginLeft : "150px" }}>
            <div id={mapId} style={{width: '100%', height: '100%'}}></div>
            {/* 지도모드 변경버튼 */}
            <div className="selec_btnArea" style={{ top: '10px', right: '1330px' }}>
                <form className="form-check">
                    <label
                        className="form-check-label"
                        style={{ marginRight: '5px', color: 'black', fontWeight: 'bold' }}
                    >
                        <input
                            className="form-check-input"
                            type="radio"
                            name="lightMode"
                            id="lightMode"
                            style={{ marginLeft: '15px', marginRight: '5px' }}
                            onClick={e => changeCanvas(e)}
                        />
                        라이트 모드
                    </label>
                    <label
                        className="form-check-label"
                        style={{ marginRight: '5px', color: 'black', fontWeight: 'bold' }}
                    >
                        <input
                            className="form-check-input"
                            type="radio"
                            name="darkMode"
                            id="darkMode"
                            style={{ marginLeft: '15px', marginRight: '5px' }}
                            onClick={e => changeCanvas(e)}
                            defaultChecked="true"
                        />
                        다크 모드
                    </label>
                </form>
            </div>
        </div>
        </>
    );
};

export default CompMap;
