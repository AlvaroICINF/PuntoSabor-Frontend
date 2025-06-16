import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Star,
  Utensils,
  Car,
  Package,
  Calendar,
  Globe,
  Filter,
  DollarSign
} from 'lucide-react';
import './restaurants.css';

const mockRestaurants = [
  {
    id: "r1",
    data: {
      name: "La Picá de la Esquina",
      address: "Mackenna 1234, Osorno",
      phone: "+56642233445",
      specialty: "Comida Chilena",
      upTime: "12:00 PM - 10:00 PM",
      website: null,
      priceRange: "5000 - 15000",
      services: [
        { delivery: true },
        { takeOut: true },
        { booking: false },
        { parking: true }
      ]
    },
    dishes: [
      {
        id: "r1d1",
        data: {
          name: "Cazuela de Vacuno",
          description: "Contundente cazuela con vacuno, papa, zapallo y choclo.",
          price: 8500,
          category: "Platos de Fondo"
        }
      },
      {
        id: "r1d2",
        data: {
          name: "Pastel de Choclo",
          description: "Clásico pastel de choclo con pino de carne y pollo.",
          price: 9000,
          category: "Platos de Fondo"
        }
      },
      {
        id: "r1d3",
        data: {
          name: "Lomo a lo Pobre",
          description: "Lomo liso, papas fritas, huevo frito y cebolla caramelizada.",
          price: 12500,
          category: "Platos de Fondo"
        }
      },
      {
        id: "r1d4",
        data: {
          name: "Empanada de Pino",
          description: "Empanada frita con pino de carne.",
          price: 3500,
          category: "Entradas"
        }
      },
      {
        id: "r1d5",
        data: {
          name: "Porotos con Riendas",
          description: "Plato tradicional chileno con porotos, fideos y longaniza.",
          price: 7500,
          category: "Platos de Fondo"
        }
      },
      {
        id: "r1d6",
        data: {
          name: "Papas Fritas Caseras",
          description: "Papas fritas doradas y crujientes cortadas a mano.",
          price: 4500,
          category: "Acompañamientos"
        }
      }
    ]
  },
  {
    id: "r2",
    data: {
      name: "Burger Palace",
      address: "Ramírez 567, Osorno",
      phone: "+56642445566",
      specialty: "Hamburguesas Gourmet",
      upTime: "6:00 PM - 12:00 AM",
      website: "www.burgerpalace.cl",
      priceRange: "8000 - 18000",
      services: [
        { delivery: true },
        { takeOut: true },
        { booking: true },
        { parking: false }
      ]
    },
    dishes: [
      {
        id: "r2d1",
        data: {
          name: "Burger Clásica",
          description: "Hamburguesa de carne con lechuga, tomate, cebolla y papas fritas.",
          price: 9500,
          category: "Hamburguesas"
        }
      },
      {
        id: "r2d2",
        data: {
          name: "Churrasco Italiano",
          description: "Pan batido, carne, palta, tomate y mayonesa casera.",
          price: 8500,
          category: "Sándwiches"
        }
      },
      {
        id: "r2d3",
        data: {
          name: "Papas Fritas Premium",
          description: "Papas fritas gruesas con especias secretas y salsas variadas.",
          price: 5500,
          category: "Acompañamientos"
        }
      },
      {
        id: "r2d4",
        data: {
          name: "Lomo Saltado",
          description: "Lomo de res salteado con verduras y papas fritas.",
          price: 13500,
          category: "Platos de Fondo"
        }
      },
      {
        id: "r2d5",
        data: {
          name: "Empanada de Queso",
          description: "Empanada horneada rellena de queso derretido.",
          price: 3000,
          category: "Entradas"
        }
      }
    ]
  },
  {
    id: "r3",
    data: {
      name: "Pizzería Bella Vista",
      address: "O'Higgins 890, Osorno",
      phone: "+56642778899",
      specialty: "Pizzas Artesanales",
      upTime: "7:00 PM - 11:30 PM",
      website: null,
      priceRange: "10000 - 20000",
      services: [
        { delivery: true },
        { takeOut: true },
        { booking: false },
        { parking: true }
      ]
    },
    dishes: [
      {
        id: "r3d1",
        data: {
          name: "Pizza Margherita",
          description: "Pizza clásica con tomate, mozzarella y albahaca fresca.",
          price: 12000,
          category: "Pizzas"
        }
      },
      {
        id: "r3d2",
        data: {
          name: "Empanada Napolitana",
          description: "Empanada especial con jamón, queso y tomate.",
          price: 4000,
          category: "Entradas"
        }
      },
      {
        id: "r3d3",
        data: {
          name: "Lasaña de Carne",
          description: "Lasaña casera con carne molida, queso y salsa boloñesa.",
          price: 11500,
          category: "Platos de Fondo"
        }
      },
      {
        id: "r3d4",
        data: {
          name: "Papas Rústicas",
          description: "Papas fritas con cáscara, ajo y hierbas aromáticas.",
          price: 4800,
          category: "Acompañamientos"
        }
      },
      {
        id: "r3d5",
        data: {
          name: "Cazuela de Mariscos",
          description: "Cazuela abundante con mariscos frescos y verduras.",
          price: 14500,
          category: "Platos de Fondo"
        }
      }
    ]
  },
  {
    id: "r4",
    data: {
      name: "Mariscos del Sur",
      address: "Costanera 445, Osorno",
      phone: "+56642556677",
      specialty: "Mariscos y Pescados",
      upTime: "12:30 PM - 9:00 PM",
      website: "www.mariscossur.cl",
      priceRange: "12000 - 25000",
      services: [
        { delivery: false },
        { takeOut: true },
        { booking: true },
        { parking: true }
      ]
    },
    dishes: [
      {
        id: "r4d1",
        data: {
          name: "Paila Marina Especial",
          description: "Paila marina con mariscos frescos, pescado y verduras.",
          price: 16500,
          category: "Platos de Fondo"
        }
      },
      {
        id: "r4d2",
        data: {
          name: "Salmón Grillado",
          description: "Salmón fresco a la parrilla con papas fritas y ensalada.",
          price: 18000,
          category: "Platos de Fondo"
        }
      },
      {
        id: "r4d3",
        data: {
          name: "Cazuela de Congrio",
          description: "Cazuela tradicional con congrio fresco y verduras de estación.",
          price: 15500,
          category: "Platos de Fondo"
        }
      },
      {
        id: "r4d4",
        data: {
          name: "Empanada de Mariscos",
          description: "Empanada horneada rellena de mariscos frescos.",
          price: 5500,
          category: "Entradas"
        }
      },
      {
        id: "r4d5",
        data: {
          name: "Ceviche Mixto",
          description: "Ceviche fresco con pescado, camarones y mariscos.",
          price: 13500,
          category: "Entradas"
        }
      }
    ]
  },
  {
    id: "r5",
    data: {
      name: "Café Central",
      address: "Plaza de Armas 123, Osorno",
      phone: "+56642334455",
      specialty: "Café y Repostería",
      upTime: "8:00 AM - 8:00 PM",
      website: null,
      priceRange: "3000 - 8000",
      services: [
        { delivery: true },
        { takeOut: true },
        { booking: false },
        { parking: false }
      ]
    },
    dishes: [
      {
        id: "r5d1",
        data: {
          name: "Pastel de Choclo Dulce",
          description: "Versión dulce del pastel de choclo con canela y azúcar.",
          price: 4500,
          category: "Postres"
        }
      },
      {
        id: "r5d2",
        data: {
          name: "Empanada de Dulce de Leche",
          description: "Empanada frita rellena de dulce de leche casero.",
          price: 3500,
          category: "Postres"
        }
      },
      {
        id: "r5d3",
        data: {
          name: "Sándwich de Lomo",
          description: "Sándwich con lomo, queso, tomate y papas fritas.",
          price: 7500,
          category: "Sándwiches"
        }
      },
      {
        id: "r5d4",
        data: {
          name: "Café con Piernas",
          description: "Café americano doble con leche y acompañado de cookies.",
          price: 3800,
          category: "Bebidas"
        }
      },
      {
        id: "r5d5",
        data: {
          name: "Cazuela de Pollo",
          description: "Cazuela casera con pollo, verduras frescas y papas.",
          price: 6500,
          category: "Platos de Fondo"
        }
      }
    ]
  }
];

const Restaurants = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('Todos');
  const [sortBy, setSortBy] = useState('name');

  // Obtener especialidades únicas
  const specialties = ['Todos', ...new Set(mockRestaurants.map(r => r.data.specialty))];

  // Filtrar y ordenar restaurantes
  const filteredAndSortedRestaurants = mockRestaurants
    .filter(restaurant => 
      selectedSpecialty === 'Todos' || restaurant.data.specialty === selectedSpecialty
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.data.name.localeCompare(b.data.name);
        case 'specialty':
          return a.data.specialty.localeCompare(b.data.specialty);
        case 'price':
          const priceA = parseInt(a.data.priceRange.split(' - ')[0]);
          const priceB = parseInt(b.data.priceRange.split(' - ')[0]);
          return priceA - priceB;
        default:
          return 0;
      }
    });

  const formatPrice = price =>
    new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0
    }).format(price);

  const getServiceIcons = services => {
    const icons = [];
    services.forEach(service => {
      if (service.delivery) icons.push({ icon: Package, label: 'Delivery' });
      if (service.takeOut) icons.push({ icon: Utensils, label: 'Para llevar' });
      if (service.booking) icons.push({ icon: Calendar, label: 'Reservas' });
      if (service.parking) icons.push({ icon: Car, label: 'Estacionamiento' });
    });
    return icons;
  };

  return (
    <div className="restaurants-page">
      <div className="page-header">
        <div className="header-content">
          <h1 className="page-title">
            <Utensils className="page-icon" />
            Restaurantes
          </h1>
          <p className="page-subtitle">
            Descubre todos los restaurantes disponibles en Osorno
          </p>
        </div>
      </div>

      <div className="filters-section">
        <div className="filters-container">
          <div className="filter-group">
            <Filter className="filter-icon" />
            <span className="filter-label">Especialidad:</span>
            <select 
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="filter-select"
            >
              {specialties.map(specialty => (
                <option key={specialty} value={specialty}>
                  {specialty}
                </option>
              ))}
            </select>
          </div>
          <div className="filter-group">
            <span className="filter-label">Ordenar por:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="filter-select"
            >
              <option value="name">Nombre</option>
              <option value="specialty">Especialidad</option>
              <option value="price">Precio</option>
            </select>
          </div>
        </div>
        <div className="results-count">
          {filteredAndSortedRestaurants.length} restaurante{filteredAndSortedRestaurants.length !== 1 ? 's' : ''} encontrado{filteredAndSortedRestaurants.length !== 1 ? 's' : ''}
        </div>
      </div>

      <div className="restaurants-grid">
        {filteredAndSortedRestaurants.map(restaurant => (
          <div key={restaurant.id} className="restaurant-card">
            <div className="restaurant-header">
              <div className="restaurant-main-info">
                <div className="restaurant-icon-wrapper">
                  <Utensils className="restaurant-icon" />
                </div>
                <div className="restaurant-details">
                  <h2 className="restaurant-name">{restaurant.data.name}</h2>
                  <p className="restaurant-specialty">{restaurant.data.specialty}</p>
                  <div className="restaurant-meta">
                    <div className="meta-item">
                      <MapPin className="meta-icon" />
                      <span>{restaurant.data.address}</span>
                    </div>
                    <div className="meta-item">
                      <Clock className="meta-icon" />
                      <span>{restaurant.data.upTime}</span>
                    </div>
                    <div className="meta-item">
                      <Phone className="meta-icon" />
                      <span>{restaurant.data.phone}</span>
                    </div>
                    {restaurant.data.website && (
                      <div className="meta-item">
                        <Globe className="meta-icon" />
                        <span>{restaurant.data.website}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="restaurant-extras">
                <div className="price-badge">
                  <DollarSign className="price-icon" />
                  <span>${restaurant.data.priceRange}</span>
                </div>
                <div className="services-icons">
                  {getServiceIcons(restaurant.data.services).map((service, idx) => (
                    <div key={idx} className="service-icon-container">
                      <service.icon className="service-icon" />
                      <div className="service-tooltip">{service.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="restaurant-menu">
              <h3 className="menu-title">
                <Star className="menu-star" />
                Menú Destacado
              </h3>
              <div className="dishes-list">
                {restaurant.dishes.slice(0, 4).map(dish => (
                  <div key={dish.id} className="dish-item">
                    <div className="dish-info">
                      <h4 className="dish-name">{dish.data.name}</h4>
                      <p className="dish-description">{dish.data.description}</p>
                      <span className="dish-category">{dish.data.category}</span>
                    </div>
                    <div className="dish-price">
                      {formatPrice(dish.data.price)}
                    </div>
                  </div>
                ))}
                {restaurant.dishes.length > 4 && (
                  <div className="more-dishes">
                    +{restaurant.dishes.length - 4} platos más
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;