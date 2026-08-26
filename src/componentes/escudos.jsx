import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const escudosData = [
  {
    nombre: "Grupo A",
    escudos: [
      { flag: "🇲🇽", code: "MEX", id: "MEX 1", name: "Escudo de México", imagen: "src/assets/escudos/1.png", stock: 0 },
      { flag: "🇿🇦", code: "RSA", id: "RSA 1", name: "Escudo de Sudáfrica", imagen: "src/assets/escudos/2.png", stock: 0 },
      { flag: "🇰🇷", code: "KOR", id: "KOR 1", name: "Escudo de Corea del Sur", imagen: "src/assets/escudos/3.png", stock: 0 },
      { flag: "🇨🇿", code: "CZE", id: "CZE 1", name: "Escudo de Chequia", imagen: "src/assets/escudos/4.png", stock: 1 }
    ]
  },
  {
    nombre: "Grupo B",
    escudos: [
      { flag: "🇨🇦", code: "CAN", id: "CAN 1", name: "Escudo de Canadá", imagen: "src/assets/escudos/5.png", stock: 0 },
      { flag: "🇨🇭", code: "SUI", id: "SUI 1", name: "Escudo de Suiza", imagen: "src/assets/escudos/6.png", stock: 0 },
      { flag: "🇶🇦", code: "QAT", id: "QAT 1", name: "Escudo de Catar", imagen: "src/assets/escudos/7.png", stock: 0 },
      { flag: "🇧🇦", code: "BIH", id: "BIH 1", name: "Escudo de Bosnia y Herzegovina", imagen: "src/assets/escudos/8.png", stock: 0 }
    ]
  },
  {
    nombre: "Grupo C",
    escudos: [
      { flag: "🇧🇷", code: "BRA", id: "BRA 1", name: "Escudo de Brasil", imagen: "src/assets/escudos/9.png", stock: 0 },
      { flag: "🇲🇦", code: "MAR", id: "MAR 1", name: "Escudo de Marruecos", imagen: "src/assets/escudos/10.png", stock: 1 },
      { flag: "🇭🇹", code: "HAI", id: "HAI 1", name: "Escudo de Haití", imagen: "src/assets/escudos/11.png", stock: 0 },
      { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", code: "SCO", id: "SCO 1", name: "Escudo de Escocia", imagen: "src/assets/escudos/12.png", stock: 0 }
    ]
  },
  {
    nombre: "Grupo D",
    escudos: [
      { flag: "🇺🇸", code: "USA", id: "USA 1", name: "Escudo de Estados Unidos", imagen: "src/assets/escudos/13.png", stock: 0 },
      { flag: "🇵🇾", code: "PAR", id: "PAR 1", name: "Escudo de Paraguay", imagen: "src/assets/escudos/14.png", stock: 1 },
      { flag: "🇦🇺", code: "AUS", id: "AUS 1", name: "Escudo de Australia", imagen: "src/assets/escudos/15.png", stock: 0 },
      { flag: "🇹🇷", code: "TUR", id: "TUR 1", name: "Escudo de Turquía", imagen: "src/assets/escudos/16.png", stock: 0 }
    ]
  },
  {
    nombre: "Grupo E",
    escudos: [
      { flag: "🇩🇪", code: "GER", id: "GER 1", name: "Escudo de Alemania", imagen: "src/assets/escudos/17.png", stock: 0 },
      { flag: "🇨🇼", code: "CUW", id: "CUW 1", name: "Escudo de Curazao", imagen: "src/assets/escudos/18.png", stock: 0 },
      { flag: "🇨🇮", code: "CIV", id: "CIV 1", name: "Escudo de Costa de Marfil", imagen: "src/assets/escudos/19.png", stock: 2 },
      { flag: "🇪🇨", code: "ECU", id: "ECU 1", name: "Escudo de Ecuador", imagen: "src/assets/escudos/20.png", stock: 0 }
    ]
  },
  {
    nombre: "Grupo F",
    escudos: [
      { flag: "🇳🇱", code: "NED", id: "NED 1", name: "Escudo de Países Bajos", imagen: "src/assets/escudos/21.png", stock: 1 },
      { flag: "🇯🇵", code: "JPN", id: "JPN 1", name: "Escudo de Japón", imagen: "src/assets/escudos/22.png", stock: 0 },
      { flag: "🇸🇪", code: "SWE", id: "SWE 1", name: "Escudo de Suecia", imagen: "src/assets/escudos/23.png", stock: 1 },
      { flag: "🇹🇳", code: "TUN", id: "TUN 1", name: "Escudo de Túnez", imagen: "src/assets/escudos/24.png", stock: 0 }
    ]
  },
  {
    nombre: "Grupo G",
    escudos: [
      { flag: "🇧🇪", code: "BEL", id: "BEL 1", name: "Escudo de Bélgica", imagen: "src/assets/escudos/25.png", stock: 2 },
      { flag: "🇪🇬", code: "EGY", id: "EGY 1", name: "Escudo de Egipto", imagen: "src/assets/escudos/26.png", stock: 0 },
      { flag: "🇮🇷", code: "IRN", id: "IRN 1", name: "Escudo de Irán", imagen: "src/assets/escudos/27.png", stock: 0 },
      { flag: "🇳🇿", code: "NZL", id: "NZL 1", name: "Escudo de Nueva Zelanda", imagen: "src/assets/escudos/28.png", stock: 0 }
    ]
  },
  {
    nombre: "Grupo H",
    escudos: [
      { flag: "🇪🇸", code: "ESP", id: "ESP 1", name: "Escudo de España", imagen: "src/assets/escudos/29.png", stock: 0 },
      { flag: "🇨🇻", code: "CPV", id: "CPV 1", name: "Escudo de Cabo Verde", imagen: "src/assets/escudos/30.png", stock: 0 },
      { flag: "🇸🇦", code: "KSA", id: "KSA 1", name: "Escudo de Arabia Saudita", imagen: "src/assets/escudos/31.png", stock: 0 },
      { flag: "🇺🇾", code: "URU", id: "URU 1", name: "Escudo de Uruguay", imagen: "src/assets/escudos/32.png", stock: 0 }
    ]
  },
  {
    nombre: "Grupo I",
    escudos: [
      { flag: "🇫🇷", code: "FRA", id: "FRA 1", name: "Escudo de Francia", imagen: "src/assets/escudos/33.png", stock: 0 },
      { flag: "🇸🇳", code: "SEN", id: "SEN 1", name: "Escudo de Senegal", imagen: "src/assets/escudos/34.png", stock: 2 },
      { flag: "🇮🇶", code: "IRQ", id: "IRQ 1", name: "Escudo de Irak", imagen: "src/assets/escudos/35.png", stock: 2 },
      { flag: "🇳🇴", code: "NOR", id: "NOR 1", name: "Escudo de Noruega", imagen: "src/assets/escudos/36.png", stock: 0 }
    ]
  },
  {
    nombre: "Grupo J",
    escudos: [
      { flag: "🇦🇷", code: "ARG", id: "ARG 1", name: "Escudo de Argentina", imagen: "src/assets/escudos/37.png", stock: 0 },
      { flag: "🇩🇿", code: "ALG", id: "ALG 1", name: "Escudo de Argelia", imagen: "src/assets/escudos/38.png", stock: 0 },
      { flag: "🇦🇹", code: "AUT", id: "AUT 1", name: "Escudo de Austria", imagen: "src/assets/escudos/39.png", stock: 1 },
      { flag: "🇯🇴", code: "JOR", id: "JOR 1", name: "Escudo de Jordania", imagen: "src/assets/escudos/40.png", stock: 0 }
    ]
  },
  {
    nombre: "Grupo K",
    escudos: [
      { flag: "🇵🇹", code: "POR", id: "POR 1", name: "Escudo de Portugal", imagen: "src/assets/escudos/41.png", stock: 1 },
      { flag: "🇨🇩", code: "COD", id: "COD 1", name: "Escudo de RD Congo", imagen: "src/assets/escudos/42.png", stock: 0 },
      { flag: "🇺🇿", code: "UZB", id: "UZB 1", name: "Escudo de Uzbekistán", imagen: "src/assets/escudos/43.png", stock: 1 },
      { flag: "🇨🇴", code: "COL", id: "COL 1", name: "Escudo de Colombia", imagen: "src/assets/escudos/44.png", stock: 0 }
    ]
  },
  {
    nombre: "Grupo L",
    escudos: [
      { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", code: "ENG", id: "ENG 1", name: "Escudo de Inglaterra", imagen: "src/assets/escudos/45.png", stock: 0 },
      { flag: "🇭🇷", code: "CRO", id: "CRO 1", name: "Escudo de Croacia", imagen: "src/assets/escudos/46.png", stock: 0 },
      { flag: "🇬🇭", code: "GHA", id: "GHA 1", name: "Escudo de Ghana", imagen: "src/assets/escudos/47.png", stock: 0 },
      { flag: "🇵🇦", code: "PAN", id: "PAN 1", name: "Escudo de Panamá", imagen: "src/assets/escudos/48.png", stock: 1 }
    ]
  }
];

export default function Escudos() {
  // Inicialización del estado leyendo la memoria compartida del navegador
  const [cantidades, setCantidades] = useState(() => {
    const guardado = localStorage.getItem('mi_carrito');
    return guardado ? JSON.parse(guardado) : {};
  });

  // Estado para controlar la apertura del modal del carrito
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  // Estado para controlar qué grupo se encuentra desplegado
  const [grupoAbierto, setGrupoAbierto] = useState('GRUPO A');

  const TELEFONO_WHATSAPP = '5491141984267';

  // Persistencia de datos ante cambios en las cantidades
  useEffect(() => {
    localStorage.setItem('mi_carrito', JSON.stringify(cantidades));
  }, [cantidades]);

  const toggleGrupo = (nombreGrupo) => {
    // Abre el grupo si está cerrado, o lo cierra si se vuelve a tocar
    setGrupoAbierto(grupoAbierto === nombreGrupo ? null : nombreGrupo);
  };

  const agregarEscudo = (id, stockDisponible) => {
    const cantidadActual = cantidades[id] || 0;
    if (cantidadActual < stockDisponible) {
      setCantidades({
        ...cantidades,
        [id]: cantidadActual + 1,
      });
    }
  };

  const restarEscudo = (id) => {
    const cantidadActual = cantidades[id] || 0;
    if (cantidadActual > 1) {
      setCantidades({
        ...cantidades,
        [id]: cantidadActual - 1,
      });
    } else {
      eliminarDelCarrito(id);
    }
  };

  // Función directa para eliminar el escudo del carrito
  const eliminarDelCarrito = (id) => {
    const copia = { ...cantidades };
    delete copia[id];
    setCantidades(copia);
  };

  const totalEscudos = Object.values(cantidades).reduce((acc, curr) => acc + curr, 0);

  const enviarAWhatsApp = () => {
    const listaIds = Object.keys(cantidades);

    if (listaIds.length === 0) {
      alert('Seleccioná al menos un escudo para enviar el pedido.');
      return;
    }

    const lista = listaIds
      .map((id) => `• Figurita ${id} x${cantidades[id]}`)
      .join('\n');

    const mensaje = encodeURIComponent(
      `¡Hola! Me interesan las siguientes figuritas de escudos:\n\n${lista}\n\n¿Están disponibles?`
    );

    window.open(`https://wa.me/${TELEFONO_WHATSAPP}?text=${mensaje}`, '_blank');
  };

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-inner">
          <div className="logo">
            <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
              FIGURA <span>26</span>
            </Link>
          </div>
          <div className="nav-links">
            <Link to="/">← Volver al Inicio</Link>
          </div>
          {/* Abrir Modal */}
          <button className="cart-button" onClick={() => setMostrarCarrito(true)}>
            🛒 {totalEscudos}
          </button>
        </div>
      </nav>

      {/* MODAL DEL CARRITO */}
      {mostrarCarrito && (
        <div 
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999
          }}
          onClick={() => setMostrarCarrito(false)}
        >
          <div 
            style={{
              background: '#1a1a2e',
              border: '2px solid #6366f1',
              borderRadius: '12px',
              padding: '24px',
              width: '90%',
              maxWidth: '400px',
              maxHeight: '80vh',
              overflowY: 'auto',
              color: '#fff',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setMostrarCarrito(false)}
              style={{
                position: 'absolute', top: '10px', right: '15px',
                background: 'transparent', border: 'none',
                color: '#aaa', fontSize: '1.2rem', cursor: 'pointer'
              }}
            >
              ✖
            </button>
           <h2 style={{ color: '#fff', marginTop: 0, borderBottom: '1px solid #333', paddingBottom: '10px' }}>
  Tu Pedido 🛒
</h2>

            {Object.keys(cantidades).length === 0 ? (
              <p style={{ color: '#aaa', textAlign: 'center', margin: '20px 0' }}>
                Tu carrito está vacío.
              </p>
            ) : (
              <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0' }}>
                {Object.keys(cantidades).map((id) => (
                  <li 
                    key={id} 
                    style={{
                      display: 'flex', justifyContent: 'space-between',
                      alignItems: 'center', background: '#0f172a',
                      padding: '10px', borderRadius: '8px', marginBottom: '8px'
                    }}
                  >
                    <span style={{ fontWeight: 'bold' }}>
                      Escudo {id} <span style={{ color: '#818cf8' }}>(x{cantidades[id]})</span>
                    </span>
                    <button 
                      onClick={() => eliminarDelCarrito(id)}
                      style={{
                        background: '#ef4444', border: 'none', borderRadius: '6px',
                        color: 'white', padding: '6px 10px', cursor: 'pointer',
                        fontWeight: 'bold', fontSize: '0.9rem'
                      }}
                    >
                      🗑️
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <button 
              onClick={enviarAWhatsApp}
              disabled={Object.keys(cantidades).length === 0}
              style={{
                width: '100%', padding: '12px', borderRadius: '8px',
                border: 'none', background: Object.keys(cantidades).length === 0 ? '#374151' : '#10b981',
                color: '#fff', fontWeight: 'bold', fontSize: '1.1rem',
                cursor: Object.keys(cantidades).length === 0 ? 'not-allowed' : 'pointer'
              }}
            >
              Enviar a WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* ENCABEZADO */}
      <header style={{ textAlign: 'center', padding: '40px 20px 20px' }}>
        <h1
          style={{
            color: '#fff',
            fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
            lineHeight: '1.05',
            margin: '0 0 12px',
            fontWeight: '700',
          }}
        >
          FIGURITAS DE ESCUDOS OFICIALES 🛡️
        </h1>
        <p style={{ color: '#aaa' }}>
          Toca cualquier grupo para desplegar sus escudos oficiales (figurita N° 1).
        </p>
      </header>

      {/* CONTENEDOR TIPO ACORDEÓN */}
      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px 40px' }}>
        {escudosData.map((grupo) => {
          const estaAbierto = grupoAbierto === grupo.nombre;

          return (
            <div
              key={grupo.nombre}
              style={{
                marginBottom: '16px',
                borderRadius: '12px',
                border: estaAbierto ? '2px solid #6366f1' : '1px solid #333',
                background: '#1a1a2e',
                overflow: 'hidden',
                transition: 'border 0.2s ease',
              }}
            >
              {/* BOTÓN / CABECERA DEL ACORDEÓN */}
              <button
                onClick={() => toggleGrupo(grupo.nombre)}
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  background: estaAbierto ? 'rgba(99, 102, 241, 0.2)' : 'transparent',
                  border: 'none',
                  color: '#fff',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span>{grupo.nombre}</span>
                <span style={{ fontSize: '1rem', color: '#818cf8' }}>
                  {estaAbierto ? '▲ Cerrar' : '▼ Ver Escudos'}
                </span>
              </button>

              {/* CONTENIDO DESPLEGABLE CON LA GRID DE ESCUDOS */}
              {estaAbierto && (
                <div style={{ padding: '20px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                      gap: '16px',
                    }}
                  >
                    {grupo.escudos.map((escudo) => {
                      const cantidadElegida = cantidades[escudo.id] || 0;
                      const sinStock = escudo.stock === 0;

                      return (
                        <div
                          key={escudo.id}
                          style={{
                            background: cantidadElegida > 0
                              ? 'rgba(99, 102, 241, 0.25)'
                              : '#0f172a',
                            border: cantidadElegida > 0
                              ? '2px solid #6366f1'
                              : '1px solid #333',
                            borderRadius: '10px',
                            padding: '14px',
                            transition: 'all 0.2s ease',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            opacity: sinStock ? 0.5 : 1,
                          }}
                        >
                          <div>
                            {/* CONTENEDOR DE LA IMAGEN */}
                            <div
                              style={{
                                width: '100%',
                                aspectRatio: '4.9 / 6.5',
                                overflow: 'hidden',
                                borderRadius: '6px',
                                marginBottom: '10px',
                                background: '#1a1a2e',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <img
                                src={escudo.imagen}
                                alt={escudo.name}
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'contain',
                                }}
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                }}
                              />
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span style={{ fontSize: '1.5rem' }}>{escudo.flag}</span>
                              <span
                                style={{
                                  fontSize: '0.9rem',
                                  color: '#818cf8',
                                  fontWeight: 'bold',
                                }}
                              >
                                {escudo.id}
                              </span>
                            </div>

                            <h4
                              style={{
                                color: '#fff',
                                margin: '8px 0 0 0',
                                fontSize: '1rem',
                              }}
                            >
                              {escudo.name}
                            </h4>

                            {/* INDICADOR DE STOCK */}
                            <p
                              style={{
                                color: sinStock ? '#ef4444' : '#10b981',
                                fontSize: '0.8rem',
                                fontWeight: 'bold',
                                marginTop: '6px',
                                marginBottom: 0,
                              }}
                            >
                              {sinStock ? 'Sin stock' : `Stock: ${escudo.stock} u.`}
                            </p>
                          </div>

                          {/* CONTROLES DE BOTONES + / - Y AGREGAR */}
                          <div style={{ marginTop: '12px' }}>
                            {cantidadElegida === 0 ? (
                              <button
                                disabled={sinStock}
                                onClick={() => agregarEscudo(escudo.id, escudo.stock)}
                                style={{
                                  width: '100%',
                                  padding: '6px 10px',
                                  borderRadius: '6px',
                                  border: 'none',
                                  background: sinStock ? '#374151' : '#4f46e5',
                                  color: '#fff',
                                  cursor: sinStock ? 'not-allowed' : 'pointer',
                                  fontWeight: 'bold',
                                  fontSize: '0.85rem',
                                }}
                              >
                                {sinStock ? 'Agotado' : 'Agregar +'}
                              </button>
                            ) : (
                              <div
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  background: '#1a1a2e',
                                  borderRadius: '6px',
                                  padding: '4px 8px',
                                }}
                              >
                                <button
                                  onClick={() => restarEscudo(escudo.id)}
                                  style={{
                                    background: '#ef4444',
                                    border: 'none',
                                    color: '#fff',
                                    padding: '4px 10px',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  -
                                </button>

                                <span style={{ color: '#fff', fontWeight: 'bold' }}>
                                  {cantidadElegida}
                                </span>

                                <button
                                  disabled={cantidadElegida >= escudo.stock}
                                  onClick={() => agregarEscudo(escudo.id, escudo.stock)}
                                  style={{
                                    background: cantidadElegida >= escudo.stock ? '#4b5563' : '#10b981',
                                    border: 'none',
                                    color: '#fff',
                                    padding: '4px 10px',
                                    borderRadius: '4px',
                                    cursor: cantidadElegida >= escudo.stock ? 'not-allowed' : 'pointer',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  +
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </main>
    </div>
  );
}