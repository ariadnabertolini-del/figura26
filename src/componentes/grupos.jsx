import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const gruposData = [
  {
    nombre: "Grupo A",
    equipos: [
      { flag: "🇲🇽", code: "MEX", count: 13, name: "México", description: "Foto del equipo de México", imagen: "/grupos/1.png", stock: 0 },
      { flag: "🇿🇦", code: "RSA", count: 13, name: "Sudáfrica", description: "Foto del equipo de Sudáfrica", imagen: "/grupos/2.png", stock: 0 },
      { flag: "🇰🇷", code: "KOR", count: 13, name: "Corea del Sur", description: "Foto del equipo de Corea del Sur", imagen: "/grupos/3.png", stock: 0 },
      { flag: "🇨🇿", code: "CZE", count: 13, name: "Chequia", description: "Foto del equipo de Chequia", imagen: "/grupos/4.png", stock: 0 }
    ]
  },
  {
    nombre: "Grupo B",
    equipos: [
      { flag: "🇨🇦", code: "CAN", count: 13, name: "Canadá", description: "Foto del equipo de Canadá", imagen: "/grupos/5.png", stock: 1 },
      { flag: "🇨🇭", code: "SUI", count: 13, name: "Suiza", description: "Foto del equipo de Suiza", imagen: "/grupos/6.png", stock: 0 },
      { flag: "🇶🇦", code: "QAT", count: 13, name: "Catar", description: "Foto del equipo de Catar", imagen: "/grupos/7.png", stock: 0 },
      { flag: "🇧🇦", code: "BIH", count: 13, name: "Bosnia y Herzegovina", description: "Foto del equipo de Bosnia y Herzegovina", imagen: "/grupos/8.png", stock: 0 }
    ]
  },
  {
    nombre: "Grupo C",
    equipos: [
      { flag: "🇧🇷", code: "BRA", count: 13, name: "Brasil", description: "Foto del equipo de Brasil", imagen: "/grupos/9.png", stock: 0 },
      { flag: "🇲🇦", code: "MAR", count: 13, name: "Marruecos", description: "Foto del equipo de Marruecos", imagen: "/grupos/10.png", stock: 1 },
      { flag: "🇭🇹", code: "HAI", count: 13, name: "Haití", description: "Foto del equipo de Haití", imagen: "/grupos/11.png", stock: 0 },
      { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", code: "SCO", count: 13, name: "Escocia", description: "Foto del equipo de Escocia", imagen: "/grupos/12.png", stock: 2 }
    ]
  },
  {
    nombre: "Grupo D",
    equipos: [
      { flag: "🇺🇸", code: "USA", count: 13, name: "Estados Unidos", description: "Foto del equipo de Estados Unidos", imagen: "/grupos/13.png", stock: 0 },
      { flag: "🇵🇾", code: "PAR", count: 13, name: "Paraguay", description: "Foto del equipo de Paraguay", imagen: "/grupos/14.png", stock: 0 },
      { flag: "🇦🇺", code: "AUS", count: 13, name: "Australia", description: "Foto del equipo de Australia", imagen: "/grupos/15.png", stock: 3 },
      { flag: "🇹🇷", code: "TUR", count: 13, name: "Turquía", description: "Foto del equipo de Turquía", imagen: "/grupos/16.png", stock: 0 }
    ]
  },
  {
    nombre: "Grupo E",
    equipos: [
      { flag: "🇩🇪", code: "GER", count: 13, name: "Alemania", description: "Foto del equipo de Alemania", imagen: "/grupos/17.png", stock: 0 },
      { flag: "🇨🇼", code: "CUW", count: 13, name: "Curazao", description: "Foto del equipo de Curazao", imagen: "/grupos/18.png", stock: 0 },
      { flag: "🇨🇮", code: "CIV", count: 13, name: "Costa de Marfil", description: "Foto del equipo de Costa de Marfil", imagen: "/grupos/19.png", stock: 1 },
      { flag: "🇪🇨", code: "ECU", count: 13, name: "Ecuador", description: "Foto del equipo de Ecuador", imagen: "/grupos/20.png", stock: 0 }
    ]
  },
  {
    nombre: "Grupo F",
    equipos: [
      { flag: "🇳🇱", code: "NED", count: 13, name: "Países Bajos", description: "Foto del equipo de Países Bajos", imagen: "/grupos/21.png", stock: 0 },
      { flag: "🇯🇵", code: "JPN", count: 13, name: "Japón", description: "Foto del equipo de Japón", imagen: "/grupos/22.png", stock: 1 },
      { flag: "🇸🇪", code: "SWE", count: 13, name: "Suecia", description: "Foto del equipo de Suecia", imagen: "/grupos/23.png", stock: 0 },
      { flag: "🇹🇳", code: "TUN", count: 13, name: "Túnez", description: "Foto del equipo de Túnez", imagen: "/grupos/24.png", stock: 0 }
    ]
  },
  {
    nombre: "Grupo G",
    equipos: [
      { flag: "🇧🇪", code: "BEL", count: 13, name: "Bélgica", description: "Foto del equipo de Bélgica", imagen: "/grupos/25.png", stock: 0 },
      { flag: "🇪🇬", code: "EGY", count: 13, name: "Egipto", description: "Foto del equipo de Egipto", imagen: "/grupos/26.png", stock: 0 },
      { flag: "🇮🇷", code: "IRN", count: 13, name: "Irán", description: "Foto del equipo de Irán", imagen: "/grupos/27.png", stock: 0 },
      { flag: "🇳🇿", code: "NZL", count: 13, name: "Nueva Zelanda", description: "Foto del equipo de Nueva Zelanda", imagen: "/grupos/28.png", stock: 0 }
    ]
  },
  {
    nombre: "Grupo H",
    equipos: [
      { flag: "🇪🇸", code: "ESP", count: 13, name: "España", description: "Foto del equipo de España", imagen: "/grupos/29.png", stock: 0 },
      { flag: "🇨🇻", code: "CPV", count: 13, name: "Cabo Verde", description: "Foto del equipo de Cabo Verde", imagen: "/grupos/30.png", stock: 0 },
      { flag: "🇸🇦", code: "KSA", count: 13, name: "Arabia Saudita", description: "Foto del equipo de Arabia Saudita", imagen: "/grupos/31.png", stock: 0 },
      { flag: "🇺🇾", code: "URU", count: 13, name: "Uruguay", description: "Foto del equipo de Uruguay", imagen: "/grupos/32.png", stock: 0 }
    ]
  },
  {
    nombre: "Grupo I",
    equipos: [
      { flag: "🇫🇷", code: "FRA", count: 13, name: "Francia", description: "Foto del equipo de Francia", imagen: "/grupos/33.png", stock: 0 },
      { flag: "🇸🇳", code: "SEN", count: 13, name: "Senegal", description: "Foto del equipo de Senegal", imagen: "/grupos/34.png", stock: 0 },
      { flag: "🇮🇶", code: "IRQ", count: 13, name: "Irak", description: "Foto del equipo de Irak", imagen: "/grupos/35.png", stock: 2 },
      { flag: "🇳🇴", code: "NOR", count: 13, name: "Noruega", description: "Foto del equipo de Noruega", imagen: "/grupos/36.png", stock: 1 }
    ]
  },
  {
    nombre: "Grupo J",
    equipos: [
      { flag: "🇦🇷", code: "ARG", count: 13, name: "Argentina", description: "Foto del equipo de Argentina", imagen: "/grupos/37.png", stock: 0 },
      { flag: "🇩🇿", code: "ALG", count: 13, name: "Argelia", description: "Foto del equipo de Argelia", imagen: "/grupos/38.png", stock: 2 },
      { flag: "🇦🇹", code: "AUT", count: 13, name: "Austria", description: "Foto del equipo de Austria", imagen: "/grupos/39.png", stock: 0 },
      { flag: "🇯🇴", code: "JOR", count: 13, name: "Jordania", description: "Foto del equipo de Jordania", imagen: "/grupos/40.png", stock: 0 }
    ]
  },
  {
    nombre: "Grupo K",
    equipos: [
      { flag: "🇵🇹", code: "POR", count: 13, name: "Portugal", description: "Foto del equipo de Portugal", imagen: "/grupos/41.png", stock: 0 },
      { flag: "🇨🇩", code: "COD", count: 13, name: "RD Congo", description: "Foto del equipo de RD Congo", imagen: "/grupos/42.png", stock: 1 },
      { flag: "🇺🇿", code: "UZB", count: 13, name: "Uzbekistán", description: "Foto del equipo de Uzbekistán", imagen: "/grupos/43.png", stock: 1 },
      { flag: "🇨🇴", code: "COL", count: 13, name: "Colombia", description: "Foto del equipo de Colombia", imagen: "/grupos/44.png", stock: 0 }
    ]
  },
  {
    nombre: "Grupo L",
    equipos: [
      { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", code: "ENG", count: 13, name: "Inglaterra", description: "Foto del equipo de Inglaterra", imagen: "/grupos/45.png", stock: 0 },
      { flag: "🇭🇷", code: "CRO", count: 13, name: "Croacia", description: "Foto del equipo de Croacia", imagen: "/grupos/46.png", stock: 0 },
      { flag: "🇬🇭", code: "GHA", count: 13, name: "Ghana", description: "Foto del equipo de Ghana", imagen: "/grupos/47.png", stock: 2 },
      { flag: "🇵🇦", code: "PAN", count: 13, name: "Panamá", description: "Foto del equipo de Panamá", imagen: "/grupos/48.png", stock: 0 }
    ]
  }
];

export default function Grupos() {
  // Inicialización del estado leyendo la memoria compartida
  const [cantidades, setCantidades] = useState(() => {
    const guardado = localStorage.getItem('mi_carrito');
    return guardado ? JSON.parse(guardado) : {};
  });

  // Estado para controlar la apertura del modal del carrito
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  // Estado para controlar qué grupo se encuentra desplegado
  const [grupoAbierto, setGrupoAbierto] = useState('GRUPO A');

  const TELEFONO_WHATSAPP = '5491141984267';

  // Guardar en localStorage cada vez que cambian las cantidades
  useEffect(() => {
    localStorage.setItem('mi_carrito', JSON.stringify(cantidades));
  }, [cantidades]);

  const toggleGrupo = (nombreGrupo) => {
    // Abre el grupo si está cerrado, o lo cierra si se vuelve a tocar
    setGrupoAbierto(grupoAbierto === nombreGrupo ? null : nombreGrupo);
  };

  const agregarEquipo = (code, stockDisponible) => {
    const cantidadActual = cantidades[code] || 0;
    if (cantidadActual < stockDisponible) {
      setCantidades({
        ...cantidades,
        [code]: cantidadActual + 1,
      });
    }
  };

  const restarEquipo = (code) => {
    const cantidadActual = cantidades[code] || 0;
    if (cantidadActual > 1) {
      setCantidades({
        ...cantidades,
        [code]: cantidadActual - 1,
      });
    } else {
      eliminarDelCarrito(code);
    }
  };

  // Función directa para eliminar el equipo del carrito
  const eliminarDelCarrito = (code) => {
    const copia = { ...cantidades };
    delete copia[code];
    setCantidades(copia);
  };

  const totalEquipos = Object.values(cantidades).reduce((acc, curr) => acc + curr, 0);

  const enviarAWhatsApp = () => {
    const listaCodes = Object.keys(cantidades);

    if (listaCodes.length === 0) {
      alert('Seleccioná al menos un equipo para enviar el pedido.');
      return;
    }

    const lista = listaCodes
      .map((code) => `• Figurita Equipo ${code} x${cantidades[code]}`)
      .join('\n');

    const mensaje = encodeURIComponent(
      `¡Hola! Me interesan las siguientes figuritas de equipos:\n\n${lista}\n\n¿Están disponibles?`
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
            🛒 {totalEquipos}
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
                {Object.keys(cantidades).map((code) => (
                  <li 
                    key={code} 
                    style={{
                      display: 'flex', justifyContent: 'space-between',
                      alignItems: 'center', background: '#0f172a',
                      padding: '10px', borderRadius: '8px', marginBottom: '8px'
                    }}
                  >
                    <span style={{ fontWeight: 'bold' }}>
                      Equipo {code} <span style={{ color: '#818cf8' }}>(x{cantidades[code]})</span>
                    </span>
                    <button 
                      onClick={() => eliminarDelCarrito(code)}
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
          FIGURITAS DE FOTOS GRUPALES
        </h1>
        <p style={{ color: '#aaa' }}>
          Toca cualquier grupo para desplegar sus equipos y fotos grupales.
        </p>
      </header>

      {/* CONTENEDOR TIPO ACORDEÓN */}
      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px 40px' }}>
        {gruposData.map((grupo) => {
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
                  {estaAbierto ? '▲ Cerrar' : '▼ Ver Equipos'}
                </span>
              </button>

              {/* CONTENIDO DESPLEGABLE CON LA GRID DE EQUIPOS */}
              {estaAbierto && (
                <div style={{ padding: '20px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                      gap: '16px',
                    }}
                  >
                    {grupo.equipos.map((equipo) => {
                      const cantidadElegida = cantidades[equipo.code] || 0;
                      const sinStock = equipo.stock === 0;

                      return (
                        <div
                          key={equipo.code}
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
                                src={equipo.imagen}
                                alt={equipo.name}
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
                              <span style={{ fontSize: '1.5rem' }}>{equipo.flag}</span>
                              <span
                                style={{
                                  fontSize: '0.95rem',
                                  color: '#818cf8',
                                  fontWeight: 'bold',
                                  letterSpacing: '0.5px',
                                }}
                              >
                                {equipo.code} ({equipo.count})
                              </span>
                            </div>
                            <h4
                              style={{
                                color: '#fff',
                                margin: '8px 0 4px 0',
                                fontSize: '1.1rem',
                              }}
                            >
                              {equipo.name}
                            </h4>
                            <p style={{ color: '#aaa', fontSize: '0.8rem', margin: 0 }}>
                              {equipo.description}
                            </p>

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
                              {sinStock ? 'Sin stock' : `Stock: ${equipo.stock} u.`}
                            </p>
                          </div>

                          {/* BOTONES CON MANEJO DE STOCK */}
                          <div style={{ marginTop: '12px' }}>
                            {cantidadElegida === 0 ? (
                              <button
                                disabled={sinStock}
                                onClick={() => agregarEquipo(equipo.code, equipo.stock)}
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
                                  onClick={() => restarEquipo(equipo.code)}
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
                                  disabled={cantidadElegida >= equipo.stock}
                                  onClick={() => agregarEquipo(equipo.code, equipo.stock)}
                                  style={{
                                    background: cantidadElegida >= equipo.stock ? '#4b5563' : '#10b981',
                                    border: 'none',
                                    color: '#fff',
                                    padding: '4px 10px',
                                    borderRadius: '4px',
                                    cursor: cantidadElegida >= equipo.stock ? 'not-allowed' : 'pointer',
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