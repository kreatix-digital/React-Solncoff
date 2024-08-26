import { YMaps, Map } from "@pbe/react-yandex-maps"
 export const Yamap = () => {
     return (
        <YMaps>
        <div className="contacts__map-block"> 
          <Map defaultState={{ center: [55.75, 37.57], zoom: 12 }} />
        </div>
      </YMaps>
    )
 }

