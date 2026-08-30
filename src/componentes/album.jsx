import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const albumesData = [
  {
    id: "ALBUM-VACIO",
    icon: "📖",
    name: "Álbum vacío",
    description: "Solo el álbum físico (tapa dura o blanda a eleccion), listo para empezar a pegar figuritas.",
    priceTag: "Álbum básico",
    stock: 0,
    imagen: "/album/albumvacio.webp"
  },
  {
    id: "ALBUM-COMPLETO",
    icon: "📦",
    name: "Pack de 750 figuritas sin repetir",
    description: "Set de 750 figuritas, sin repetir e incluyendo a las estrellas del torneo y las FWC.",
  priceTag: "Pack",
  stock: 1,
  imagen: "/album/figuspros.webp"
  },
 
];

export default function ProductosAlbum() {
  // Carga inicial leyendo la memoria persistente del navegador
  const [cantidades, setCantidades] = useState(() => {
    const guardado = localStorage.getItem('mi_carrito');
    return guardado ? JSON.parse(guardado) : {};
  });

  // Estado para controlar la apertura del modal del carrito
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const TELEFONO_WHATSAPP = '5491141984267';

  // Sincroniza los cambios del estado directamente en localStorage
  useEffect(() => {
    localStorage.setItem('mi_carrito', JSON.stringify(cantidades));
  }, [cantidades]);

  const agregarProducto = (id, stockDisponible) => {
    const cantidadActual = cantidades[id] || 0;
    if (cantidadActual < stockDisponible) {
      setCantidades({
        ...cantidades,
        [id]: cantidadActual + 1,
      });
    }
  };

  const restarProducto = (id) => {
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

  // Función directa para eliminar el ítem del carrito
  const eliminarDelCarrito = (id) => {
    const copia = { ...cantidades };
    delete copia[id];
    setCantidades(copia);
  };

  const totalProductos = Object.values(cantidades).reduce((acc, curr) => acc + curr, 0);

  const itemsMap = {
    'ALBUM-VACIO': 'Álbum vacío Panini Mundial 2026',
    'ALBUM-COMPLETO': 'Álbum completo Panini Mundial 2026 (con todas las figuritas)'
  };

  const enviarAWhatsApp = () => {
    const listaIds = Object.keys(cantidades);

    if (listaIds.length === 0) {
      alert('Seleccioná al menos un producto para enviar el pedido.');
      return;
    }

    const lista = listaIds
      .map((id) => `• ${itemsMap[id] || id} x${cantidades[id]}`)
      .join('\n');

    const mensaje = encodeURIComponent(
      `¡Hola! Me interesa consultar por el siguiente pedido del Álbum Panini Mundial 2026:\n\n${lista}\n\n¿Tienen stock y precio actual?`
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
          {/* Botón para abrir modal */}
          <button className="cart-button" onClick={() => setMostrarCarrito(true)}>
            🛒 {totalProductos}
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
              border: '2px solid #38bdf8',
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
                    <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>
                      {itemsMap[id] || id} <span style={{ color: '#38bdf8' }}>(x{cantidades[id]})</span>
                    </span>
                    <button 
                      onClick={() => eliminarDelCarrito(id)}
                      style={{
                        background: '#ef4444', border: 'none', borderRadius: '6px',
                        color: 'white', padding: '6px 10px', cursor: 'pointer',
                        fontWeight: 'bold', fontSize: '0.9rem', marginLeft: '8px'
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
      <header style={{ textAlign: 'center', padding: '60px 20px 20px' }}>
        <h1 style={{ color: '#38bdf8', fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', lineHeight: '1.05', margin: '0 0 12px', fontWeight: '700' }}>
          ÁLBUM PANINI MUNDIAL 2026 Y PACKS📖
        </h1>
        <p style={{ color: '#aaa' }}>
          Elegí la opción que buscas para consultar disponibilidad y encargar tu pedido.
        </p>
      </header>

      {/* GRID DE PRODUCTOS */}
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {albumesData.map((prod) => {
            const cantidadElegida = cantidades[prod.id] || 0;
            const sinStock = prod.stock === 0;

            return (
              <div
                key={prod.id}
                style={{
                  background: cantidadElegida > 0
                    ? 'rgba(56, 189, 248, 0.2)'
                    : '#1a1a2e',
                  border: cantidadElegida > 0
                    ? '2px solid #38bdf8'
                    : '1px solid #333',
                  borderRadius: '12px',
                  padding: '20px',
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
                      borderRadius: '8px',
                      marginBottom: '14px',
                      background: '#0f172a',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <img
                      src={prod.imagen}
                      alt={prod.name}
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

                  <span
                    style={{
                      fontSize: '0.8rem',
                      color: '#38bdf8',
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {prod.priceTag}
                  </span>

                  <h3
                    style={{
                      color: '#fff',
                      margin: '6px 0 10px 0',
                      fontSize: '1.4rem',
                    }}
                  >
                    {prod.name}
                  </h3>

                  <p style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: '1.4', margin: '0 0 10px 0' }}>
                    {prod.description}
                  </p>

                  {/* INDICADOR DE STOCK */}
                  <p
                    style={{
                      color: sinStock ? '#ef4444' : '#10b981',
                      fontSize: '0.85rem',
                      fontWeight: 'bold',
                      margin: 0,
                    }}
                  >
                    {sinStock ? 'Sin stock disponible' : `Stock: ${prod.stock} u.`}
                  </p>
                </div>

                {/* CONTROLES DE CANTIDAD (+ / -) */}
                <div style={{ marginTop: '20px' }}>
                  {cantidadElegida === 0 ? (
                    <button
                      disabled={sinStock}
                      onClick={() => agregarProducto(prod.id, prod.stock)}
                      style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '8px',
                        border: 'none',
                        background: sinStock ? '#374151' : '#0284c7',
                        color: '#fff',
                        cursor: sinStock ? 'not-allowed' : 'pointer',
                        fontWeight: 'bold',
                        fontSize: '0.95rem',
                      }}
                    >
                      {sinStock ? 'Agotado' : 'Agregar al pedido +'}
                    </button>
                  ) : (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: '#0f172a',
                        borderRadius: '8px',
                        padding: '6px 12px',
                      }}
                    >
                      <button
                        onClick={() => restarProducto(prod.id)}
                        style={{
                          background: '#ef4444',
                          border: 'none',
                          color: '#fff',
                          padding: '6px 12px',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          fontWeight: 'bold',
                        }}
                      >
                        -
                      </button>

                      <span style={{ color: '#fff', fontWeight: 'bold', fontSize: '1rem' }}>
                        {cantidadElegida}
                      </span>

                      <button
                        disabled={cantidadElegida >= prod.stock}
                        onClick={() => agregarProducto(prod.id, prod.stock)}
                        style={{
                          background: cantidadElegida >= prod.stock ? '#4b5563' : '#10b981',
                          border: 'none',
                          color: '#fff',
                          padding: '6px 12px',
                          borderRadius: '6px',
                          cursor: cantidadElegida >= prod.stock ? 'not-allowed' : 'pointer',
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
      </main>
    </div>
  );
}