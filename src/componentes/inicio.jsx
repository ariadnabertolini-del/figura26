import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const PRECIOS_REFERENCIA = [
  { categoria: 'FWC 00 / FWC 14 / FWC 19', precio: '10.000 ARS c/u' },
  { categoria: 'FWC 1 al 8', precio: '5.000 ARS c/u' },
  { categoria: 'FWC 9 al 13', precio: '5.000 ARS c/u' },
  { categoria: 'FWC 15 al 18', precio: '5.000 ARS c/u' },
  { categoria: 'Lionel Messi (ARG 17)', precio: '25.000 ARS c/u' },
  { categoria: 'Lamine Yamal (ESP 15)', precio: '7.000 ARS c/u' },
  { categoria: 'Cristiano Ronaldo (POR 15)', precio: '15.000 ARS c/u' },
  { categoria: 'Kylian Mbappé (FRA 20)', precio: '10.000 ARS c/u' },
  { categoria: 'Jude Bellingham (ENG 11)', precio: '3.000 ARS c/u' },
  { categoria: 'Harry Kane (ENG 18)', precio: '3.000 ARS c/u' },
  { categoria: 'Erling Haaland (NOR 15)', precio: '5.000 ARS c/u' },
  { categoria: 'Luka Modrić (CRO 9)', precio: '3.000 ARS c/u' },
  { categoria: 'Vozinha (CPV 2)', precio: '3.000 ARS c/u' },
  { categoria: 'Virgil van Dijk (NED 3)', precio: '3.000 ARS c/u' },
  { categoria: 'Joshua Kimmich (GER 10)', precio: '3.000 ARS c/u' },
  { categoria: 'Jamal Musiala (GER 15)', precio: '3.000 ARS c/u' },
  { categoria: 'Escudos', precio: '2.000 ARS c/u' },    
  { categoria: 'Formaciones', precio: '2.000 ARS c/u' }, 
  { categoria: 'Figuritas Comunes', precio: '500 ARS c/u' }, 
  { categoria: 'Figuritas CocaCola', precio: 'Sin stock' }, 
  { categoria: 'Combo 226 Figuritas Comunes sin repetir', precio: '80.000 ARS combo unico' },  
];

export default function Inicio() {
  const [cantidades, setCantidades] = useState({});
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [mostrarPrecios, setMostrarPrecios] = useState(false);

  const TELEFONO_WHATSAPP = '5491141984267'; 

  useEffect(() => {
    const guardado = localStorage.getItem('mi_carrito');
    if (guardado) {
      setCantidades(JSON.parse(guardado));
    }
  }, []);

  useEffect(() => {
    if (Object.keys(cantidades).length > 0) {
      localStorage.setItem('mi_carrito', JSON.stringify(cantidades));
    } else {
      localStorage.removeItem('mi_carrito');
    }
  }, [cantidades]);

  const totalProductos = Object.values(cantidades).reduce((acc, curr) => acc + curr, 0);

  const eliminarDelCarrito = (id) => {
    const nuevasCantidades = { ...cantidades };
    delete nuevasCantidades[id];
    setCantidades(nuevasCantidades);
  };

  const enviarAWhatsApp = () => {
    const listaIds = Object.keys(cantidades);

    if (listaIds.length === 0) {
      alert('Seleccioná al menos una figurita para enviar tu pedido.');
      return;
    }

    const listaFormateada = listaIds
      .map((id) => `• ${id} x${cantidades[id]}`)
      .join('\n');

    const mensaje = encodeURIComponent(
      `¡Hola! Quisiera consultar disponibilidad por el siguiente pedido:\n\n${listaFormateada}\n\n¿Cómo coordinamos el pago y envío?`
    );

    window.open(`https://wa.me/${TELEFONO_WHATSAPP}?text=${mensaje}`, '_blank');
  };

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-inner">
          <div className="logo">
            FIGURA <span>26</span>
          </div>
          <div className="nav-links">
            <a href="#coleccion">Colección</a>
            <a href="#como-funciona">Cómo Funciona</a>
          </div>
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
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
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
                    <span style={{ fontWeight: 'bold' }}>{id} <span style={{ color: '#818cf8' }}>(x{cantidades[id]})</span></span>
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

      {/* MODAL DE PRECIOS */}
      {mostrarPrecios && (
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
          onClick={() => setMostrarPrecios(false)}
        >
          <div 
            style={{
              background: '#1a1a2e',
              border: '2px solid #10b981',
              borderRadius: '12px',
              padding: '24px',
              width: '90%',
              maxWidth: '450px',
              maxHeight: '80vh',
              overflowY: 'auto',
              color: '#fff',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setMostrarPrecios(false)}
              style={{
                position: 'absolute', top: '10px', right: '15px',
                background: 'transparent', border: 'none',
                color: '#aaa', fontSize: '1.2rem', cursor: 'pointer'
              }}
            >
              ✖
            </button>
            <h2 style={{ color: '#fff', marginTop: 0, borderBottom: '1px solid #333', paddingBottom: '10px' }}>
              Lista de Precios 🏷️
            </h2>

            <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0' }}>
              {PRECIOS_REFERENCIA.map((item, index) => (
                <li 
                  key={index} 
                  style={{
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', background: '#0f172a',
                    padding: '12px', borderRadius: '8px', marginBottom: '10px'
                  }}
                >
                  <span style={{ fontWeight: 'bold', fontSize: '0.95rem' }}>{item.categoria}</span>
                  <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '1rem' }}>{item.precio}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* HERO SECTION CON FONDO DE JUGADORES */}
      <header 
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.92) 40%, rgba(15, 23, 42, 0.55)), url('https://i.pinimg.com/originals/70/5f/93/705f93f79f697a3ff7ac158020f8de65.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">COLECCIONÁ LA GLORIA</h1>
          <p className="hero-description">
            Conseguí las figuritas de tus jugadores favoritos, completá las selecciones y viví la pasión del mundial.
          </p>
          <button 
            className="hero-button" 
            onClick={() => setMostrarPrecios(true)}
            style={{ cursor: 'pointer', border: 'none' }}
          >
            EXPLORAR PRECIOS 🏷️
          </button>
        </div>
        
        <div className="hero-ball">
          <div className="ball">⚽</div>
        </div>
      </header>

      {/* COLLECTION SECTION */}
      <section className="collection" id="coleccion">
        <div className="section-header">
          <span>LA COLECCIÓN</span>
          <h2>ENCONTRÁ TUS FIGURITAS</h2>
          <p>Explorá todas las categorías del álbum oficial.</p>
        </div>

        <div className="collection-grid">
          <div className="collection-card">
            <span className="card-number">01</span>
            <div className="card-icon">⚽</div>
            <h3>JUGADORES</h3>
            <p>Figuritas individuales de cada futbolista.</p>
            <Link to="/jugadores">
              <button>VER JUGADORES →</button>
            </Link>
          </div>

          <div className="collection-card">
            <span className="card-number">02</span>
            <div className="card-icon">👥</div>
            <h3>FOTOS GRUPALES</h3>
            <p>Fotos de los planteles completos.</p>
            <Link to="/grupos">
              <button>VER EQUIPOS →</button>
            </Link>
          </div>

          <div className="collection-card">
            <span className="card-number">03</span>
            <div className="card-icon">🛡️</div>
            <h3>ESCUDOS NACIONALES</h3>
            <p>Insignias metalizadas de cada país.</p>
            <Link to="/escudos">
              <button>VER ESCUDOS →</button>
            </Link>
          </div>

          <div className="collection-card">
            <span className="card-number">04</span>
            <div className="card-icon">✨</div>
            <h3>ESPECIALES</h3>
            <p>Serie de CocaCola.</p>
            <Link to="/cocacola">
              <button>VER ESPECIALES →</button>
            </Link>
          </div>

          <div className="collection-card">
            <span className="card-number">05</span>
            <div className="card-icon">🌎</div>
            <h3>HISTORIA, PAISES Y ESPECIALES</h3>
            <p>Balon, mascota, paises e historia de la FIFA.</p>
            <Link to="/fwc">
              <button>VER SECCIÓN FWC →</button>
            </Link>
          </div>
          
          <div className="collection-card">
            <span className="card-number">06</span>
            <div className="card-icon">🃏</div>
            <h3>COMBO 226 FIGURITAS</h3>
            <p>Comunes sin repetir — Combo único.</p>
            <span className="card-price">80.000 ARS</span>
            <button 
              onClick={() => {
                const telefono = '5491141984267';
                const mensaje = encodeURIComponent(
                  '¡Hola! Quisiera consultar disponibilidad para comprar el "COMBO 226 FIGURITAS" (Comunes sin repetir - $80.000 ARS). ¿Cómo coordinamos el pago y envío?'
                );
                window.open(`https://wa.me/${telefono}?text=${mensaje}`, '_blank');
              }}
            >
              COMPRAR POR WHATSAPP →
            </button>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="how-section" id="como-funciona">
        <div className="section-header">
          <span>PASO A PASO</span>
          <h2>¿CÓMO FUNCIONA?</h2>
          <p>Conseguí tus faltantes de forma rápida y directa.</p>
        </div>

        <div className="steps">
          <div className="step">
            <div className="step-number">01</div>
            <h3>Seleccioná tus Faltantes</h3>
            <p>Buscá y marcá en la página todas las figuritas que te hacen falta.</p>
          </div>

          <div className="step">
            <div className="step-number">02</div>
            <h3>Generá el Pedido</h3>
            <p>Revisá tu lista seleccionada y confirmá tu pedido con un solo clic.</p>
          </div>

          <div className="step">
            <div className="step-number">03</div>
            <h3>Enviá a WhatsApp</h3>
            <p>Tu lista se envía automáticamente por chat para coordinar el pago y envío.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-logo">
          FIGURA <span>26</span>
        </div>
        <p>Tu sitio de confianza para completar el álbum del mundial.</p>
        
        {/* HITWEBCOUNTER ADAPTADO A REACT */}
        <div style={{ textAlign: 'center', margin: '12px 0' }}>
          <a 
            href="https://www.hitwebcounter.com/age-calculator" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="Count age days"
          >
            <img 
              src="https://www.hitwebcounter.com/counter/counter.php?page=21517058&style=0006&nbdigits=9&type=ip" 
              alt="Count age days" 
              decoding="async" 
              style={{ border: 0, maxWidth: '100%', height: 'auto' }} 
            />
          </a>
          <br />
          <a 
            href="https://www.hitwebcounter.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ 
              fontFamily: 'Arial, Helvetica, sans-serif', 
              fontSize: '9px', 
              color: '#6D5B77', 
              textDecoration: 'underline' 
            }}
          >
            Total Visits
          </a>
        </div>

        <small>© 2026 FWC Collection. Todos los derechos reservados.</small>
      </footer>
    </div>
  );
}