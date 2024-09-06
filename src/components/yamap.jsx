import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps"
 export const Yamap = () => {
     return (
        <YMaps>
        <div className="contacts__map-block"> 
          <Map width='100%' height='100%'defaultState={{ center: [56.895555, 60.637315], zoom: 16 }}>
          <Placemark defaultGeometry={[56.895555, 60.637315]} />
          </Map>
        </div>
      </YMaps>
    )
 }

