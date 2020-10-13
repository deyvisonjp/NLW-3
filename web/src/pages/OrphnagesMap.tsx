import React from 'react';
import { Link } from 'react-router-dom';

import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import mapPointer from '../images/map-point.svg'
import { FiPlus } from 'react-icons/fi';
import '../styles/pages/orphnages-map.css';

export default function OrphnagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapPointer} alt="Ponto Happy" />

          <h2>Escolha um orfanato no Mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Patrocínio do Muriaé</strong>
          <span>Minas Gerais</span>
        </footer>
      </aside>

      <Map
                center={[-21.1719552,-42.3140331]}
                zoom={12}
                style={{ 
                    width: '100%',
                    height: '100%'
                 }}
            >
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
            </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>

    </div>
  )
}