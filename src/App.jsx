import React, { useEffect, useState, useContext, useRef } from 'react';
import CompMap from './CompMap';
import OL from '../public/js/ol-custom-1.0.0.js';
function App() {

    useEffect(() => {
		//마커 표출 레이어생성
		OL.map.addLayer({
			lid : 'lyr1', 	 //레이어ID
			type : 'vector', //레이어타입
			minZoom : 7, 	 //지도 최소 줌 zoom이 설정값 보다 작아지면 레이어 위에 정보들이 숨겨짐
			urls: ['../images/ico_map_event.svg', '../images/ico_map_walker.svg'], //마커표출 이미지
		});
		
		// urls[0]을 이미지로 갖는 마커 생성
		OL.map.addFeature({
			lid: "lyr1",  //마커를 생성할 레이어ID
			fid: "test", //마커ID
			xy: [126.95518245, 37.39256374], // 마커 생성 좌표값[위도, 경도]
			state: 0 //레이어 생성할 때 만든 urls 배열의 순번으로 입력받은 순번의 이미지로 마커생성
		});

		// urls[1]을 이미지로 갖는 마커 생성
		OL.map.addFeature({
			lid: "lyr1",  //마커를 생성할 레이어ID
			fid: "test1", //마커ID
			xy: [126.95488245, 37.39244374], // 마커 생성 좌표값[위도, 경도]
			state: 1 //레이어 생성할 때 만든 urls 배열의 순번으로 입력받은 순번의 이미지로 마커생성
		});

		//폴리라인 표출 레이어생성
		OL.map.addLayer({
			lid : 'lyr2',
			type : 'vector',
			minZoom : 7,
			styles: [
                {
                    fill: { color: 'grey' },
                    stroke: { color: 'grey', width: '5' }
                },
                {
                    fill: { color: 'red' },
                    stroke: { color: 'red', width: '5' }
                },
                {
                    fill: { color: 'yellow' },
                    stroke: { color: 'yellow', width: '5' }
                },
                {
                    fill: { color: 'green' },
                    stroke: { color: 'green', width: '5' }
                }
            ],
		});

		const coordDatalist = [
			[
				126.957652,
				37.387832
			],
			[
				126.958725,
				37.388197
			],
			[
				126.959476,
				37.388433
			],
			[
				126.960292,
				37.388776
			],
			[
				126.961257,
				37.389141
			],
			[
				126.962051,
				37.389485
			],
			[
				126.96148307,
				37.39071179
			],
			[
				126.96085,
				37.391759
			],
			[
				126.960077,
				37.391974
			],
			[
				126.959026,
				37.39163
			],
			[
				126.958167,
				37.391287
			],
			[
				126.957331,
				37.390965
			],
			[
				126.956537,
				37.390686
			]
		];

		//폴리라인 생성
		OL.map.addPolyline({
			lid : 'lyr2',   //표출할 레이어ID
			fid: 'test', 	//폴리라인ID
			data : coordDatalist, //폴리라인 생성 좌표값[[위도, 경도], [위도, 경도], ...]
			state : 1 //레이어 생성할 때 만든 style 배열의 순번으로 입력받은 순번의 색깔로 폴리라인 생성
		});
    }, [])

    return (
      <>
        <CompMap/>
      </>
    )
}

export default App
