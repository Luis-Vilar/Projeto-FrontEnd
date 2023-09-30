import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useContexto } from "../context/useContexto";

export const Map = () => {
  const {loadEstablecimentos, getEstablecimentos} = useContexto();

  useEffect(() => {
    loadEstablecimentos();
    
  }, []);

  const establecimentos = getEstablecimentos();
  console.log(establecimentos);
  const florianopolis = [-27.5969, -48.5495];
  const zoomLevel = 15;

  return (
    <MapContainer
      zoom={zoomLevel}
      center={florianopolis}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/*recorre a lista de estabelecimentos y cria un Marker por cada um */}
      {establecimentos.map((establecimento) => (
        <Marker
          key={establecimento.cnpj}
          position={[establecimento.latitude, establecimento.longitude]}
        >
          <Popup>
            <h4>{establecimento.razaoSocial}</h4>
            <p>{`CNPJ : ${establecimento.cnpj}`}</p>
            <p>{`Nome Fantasia : ${establecimento.nome_fantasia}`}</p>
            <p>{`E-mail : ${establecimento.email}`}</p>
            {establecimento.telefone && (
              <p>{`Telefone : ${establecimento.celular}`}</p>
            )}
            <p>
              Celular :
              {
                <Link
                  to={`https://wa.me/55${establecimento.celular}`}
                >{`${establecimento.celular}`}</Link>
              }
            </p>
            <p>{`CEP : ${establecimento.cep}`}</p>
            <p>{`Logradouro : ${establecimento.logradouro}`}</p>
            <p>{`Número : ${establecimento.numero}`}</p>
            {establecimento.complemento && (
              <p>{`Complemento : ${establecimento.complemento}`}</p>
            )}
            <p>{`Bairro : ${establecimento.bairro}`}</p>
            <p>{`Cidade : ${establecimento.cidade}`}</p>
            <p>{`Estado : ${establecimento.estado}`}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
