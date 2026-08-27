import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const fwcData = [
  { id: "FWC 0", flag: "🟨", name: "Logo de Panini", category: "Especial", imagen: "/fwc/1.png", stock: 0 },
  { id: "FWC 1", flag: "🌍", name: "Emblema oficial — parte superior", category: "Oficial", imagen: "/fwc/2.png", stock: 0 },
  { id: "FWC 2", flag: "🌍", name: "Emblema oficial — parte inferior", category: "Oficial", imagen: "/fwc/3.png", stock: 0 },
  { id: "FWC 3", flag: "🐻🦅🐆", name: "Mascotas oficiales del Mundial 2026", category: "Mascotas", imagen: "/fwc/4.png", stock: 0 },
  { id: "FWC 4", flag: "✨", name: "Eslogan oficial", category: "Oficial", imagen: "/fwc/5.png", stock: 0 },
  { id: "FWC 5", flag: "⚽", name: "Pelota oficial — Trionda", category: "Oficial", imagen: "/fwc/6.png", stock: 0 },
  { id: "FWC 6", flag: "🇨🇦", name: "Emblema anfitrión: Canadá", category: "Anfitrión", imagen: "/fwc/7.png", stock: 0 },
  { id: "FWC 7", flag: "🇲🇽", name: "Emblema anfitrión: México", category: "Anfitrión", imagen: "/fwc/8.png", stock: 0 },
  { id: "FWC 8", flag: "🇺🇸", name: "Emblema anfitrión: Estados Unidos", category: "Anfitrión", imagen: "/fwc/9.png", stock: 0 },
  { id: "FWC 9", flag: "🇮🇹", name: "Italia 1934", category: "Campeones", imagen: "/fwc/10.png", stock: 0 },
  { id: "FWC 10", flag: "🇺🇾", name: "Uruguay 1950", category: "Campeones", imagen: "/fwc/11.png", stock: 1 },
  { id: "FWC 11", flag: "🇩🇪", name: "Alemania Occidental 1954", category: "Campeones", imagen: "/fwc/12.png", stock: 0 },
  { id: "FWC 12", flag: "🇧🇷", name: "Brasil 1962", category: "Campeones", imagen: "/fwc/13.png", stock: 0 },
  { id: "FWC 13", flag: "🇩🇪", name: "Alemania Occidental 1974", category: "Campeones", imagen: "/fwc/14.png", stock: 0 },
  { id: "FWC 14", flag: "🇦🇷", name: "Argentina 1986", category: "Campeones", imagen: "/fwc/15.png", stock: 0 },
  { id: "FWC 15", flag: "🇧🇷", name: "Brasil 1994", category: "Campeones", imagen: "/fwc/16.png", stock: 1 },
  { id: "FWC 16", flag: "🇧🇷", name: "Brasil 2002", category: "Campeones", imagen: "/fwc/17.png", stock: 0 },
  { id: "FWC 17", flag: "🇮🇹", name: "Italia 2006", category: "Campeones", imagen: "/fwc/18.png", stock: 0 },
  { id: "FWC 18", flag: "🇩🇪", name: "Alemania 2014", category: "Campeones", imagen: "/fwc/19.png", stock: 0 },
  { id: "FWC 19", flag: "🇦🇷", name: "Argentina 2022 🏆⭐", category: "Campeones", imagen: "/fwc/20.png", stock: 0 },
];

export default function EspecialesFWC() {
  // Estado con lectura inicial desde el storage del navegador
  const [cantidades, setCantidades] = useState(() => {
    const guardado = localStorage.getItem('mi_carrito');
    return guardado ? JSON.parse(guardado) : {};
  });

  // Estado para controlar la apertura del modal del carrito
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const TELEFONO_WHATSAPP = '5491141984267';

  // Guardado automático al modificar cantidades
  useEffect(() => {
    localStorage.setItem('mi_carrito', JSON.stringify(cantidades));
  }, [cantidades]);

  const agregarFigurita = (id, stockDisponible) => {
    const cantidadActual = cantidades[id] || 0;
    if (cantidadActual < stockDisponible) {
      setCantidades({
        ...cantidades,
        [id]: cantidadActual + 1,
      });
    }
  };

  const restarFigurita = (id) => {
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

  const totalFiguritas = Object.values(cantidades).reduce((acc, curr) => acc + curr, 0);

  const enviarAWhatsApp = () => {
    const listaIds = Object.keys(cantidades);

    if (listaIds.length === 0) {
      alert('Seleccioná al menos una figurita FWC para enviar el pedido.');
      return;
    }

    const lista = listaIds
      .map((id) => `• Figurita ${id} x${cantidades[id]}`)
      .join('\n');

    const mensaje = encodeURIComponent(
      `¡Hola! Me interesan las siguientes figuritas FWC:\n\n${lista}\n\n¿Están disponibles?`
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
            🛒 {totalFiguritas}
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
              border: '2px solid #fbbf24',
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
                      Figurita {id} <span style={{ color: '#fbbf24' }}>(x{cantidades[id]})</span>
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
      <header style={{ textAlign: 'center', padding: '60px 20px 20px' }}>
        <h1 style={{ color: '#fbbf24', fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', lineHeight: '1.05', margin: '0 0 12px', fontWeight: '700' }}>
          FIGURITAS ESPECIALES FWC 🏆
        </h1>
        <p style={{ color: '#aaa' }}>
          Seleccioná los emblemas, mascotas y campeones históricos que te faltan.
        </p>
      </header>

      {/* GRID DE FIGURITAS */}
      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '20px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '16px',
          }}
        >
          {fwcData.map((figu) => {
            const cantidadElegida = cantidades[figu.id] || 0;
            const sinStock = figu.stock === 0;

            return (
              <div
                key={figu.id}
                style={{
                  background: cantidadElegida > 0
                    ? 'rgba(251, 191, 36, 0.25)'
                    : '#1a1a2e',
                  border: cantidadElegida > 0
                    ? '2px solid #fbbf24'
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
                      background: '#0f172a',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <img
                      src={figu.imagen}
                      alt={figu.name}
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
                    <span style={{ fontSize: '1.5rem' }}>{figu.flag}</span>
                    <span
                      style={{
                        fontSize: '0.9rem',
                        color: '#fbbf24',
                        fontWeight: 'bold',
                      }}
                    >
                      {figu.id}
                    </span>
                  </div>

                  <h4
                    style={{
                      color: '#fff',
                      margin: '8px 0 2px 0',
                      fontSize: '1rem',
                    }}
                  >
                    {figu.name}
                  </h4>
                  <p style={{ color: '#aaa', fontSize: '0.85rem', margin: 0 }}>
                    {figu.category}
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
                    {sinStock ? 'Sin stock' : `Stock: ${figu.stock} u.`}
                  </p>
                </div>

                {/* BOTONES CON MANEJO DE STOCK */}
                <div style={{ marginTop: '12px' }}>
                  {cantidadElegida === 0 ? (
                    <button
                      disabled={sinStock}
                      onClick={() => agregarFigurita(figu.id, figu.stock)}
                      style={{
                        width: '100%',
                        padding: '6px 10px',
                        borderRadius: '6px',
                        border: 'none',
                        background: sinStock ? '#374151' : '#d97706',
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
                        background: '#0f172a',
                        borderRadius: '6px',
                        padding: '4px 8px',
                      }}
                    >
                      <button
                        onClick={() => restarFigurita(figu.id)}
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
                        disabled={cantidadElegida >= figu.stock}
                        onClick={() => agregarFigurita(figu.id, figu.stock)}
                        style={{
                          background: cantidadElegida >= figu.stock ? '#4b5563' : '#10b981',
                          border: 'none',
                          color: '#fff',
                          padding: '4px 10px',
                          borderRadius: '4px',
                          cursor: cantidadElegida >= figu.stock ? 'not-allowed' : 'pointer',
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