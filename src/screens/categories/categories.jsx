import React, { useState, useMemo } from 'react';
import {
  Filter,
  Utensils,
  Search,
  ChefHat,
  Coffee,
  Pizza,
  Fish,
  Sandwich,
  Cake,
  Package
} from 'lucide-react';
import './Categories.css';

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
const Categories = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name'); // name, dishCount, alphabetical

  // Obtener todas las categorías únicas con información adicional
  const categoriesData = useMemo(() => {
    const categoriesMap = new Map();

    mockRestaurants.forEach(restaurant => {
      restaurant.dishes.forEach(dish => {
        const category = dish.data.category;
        
        if (!categoriesMap.has(category)) {
          categoriesMap.set(category, {
            name: category,
            dishes: [],
            restaurants: new Set(),
            minPrice: Infinity,
            maxPrice: 0
          });
        }

        const categoryData = categoriesMap.get(category);
        categoryData.dishes.push({
          ...dish,
          restaurantName: restaurant.data.name,
          restaurantSpecialty: restaurant.data.specialty
        });
        categoryData.restaurants.add(restaurant.data.name);
        categoryData.minPrice = Math.min(categoryData.minPrice, dish.data.price);
        categoryData.maxPrice = Math.max(categoryData.maxPrice, dish.data.price);
      });
    });

    return Array.from(categoriesMap.values()).map(category => ({
      ...category,
      restaurantCount: category.restaurants.size,
      dishCount: category.dishes.length,
      avgPrice: Math.round(category.dishes.reduce((sum, dish) => sum + dish.data.price, 0) / category.dishes.length)
    }));
  }, []);

  // Filtrar y ordenar categorías
  const filteredAndSortedCategories = useMemo(() => {
    let filtered = categoriesData;

    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      filtered = categoriesData.filter(category =>
        category.name.toLowerCase().includes(searchLower) ||
        category.dishes.some(dish => 
          dish.data.name.toLowerCase().includes(searchLower) ||
          dish.data.description.toLowerCase().includes(searchLower)
        )
      );
    }

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'dishCount':
          return b.dishCount - a.dishCount;
        case 'price':
          return a.avgPrice - b.avgPrice;
        default:
          return 0;
      }
    });
  }, [categoriesData, searchTerm, sortBy]);

  const formatPrice = price =>
    new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0
    }).format(price);

  const getCategoryIcon = (categoryName) => {
    const iconMap = {
      'Platos de Fondo': ChefHat,
      'Entradas': Package,
      'Hamburguesas': Utensils,
      'Pizzas': Pizza,
      'Sándwiches': Sandwich,
      'Acompañamientos': Utensils,
      'Postres': Cake,
      'Bebidas': Coffee,
      'Mariscos': Fish
    };
    
    return iconMap[categoryName] || Utensils;
  };

  return (
    <div className="categories-page">
      <div className="page-header">
        <div className="header-content">
          <h1 className="page-title">
            <ChefHat className="page-icon" />
            Categorías
          </h1>
          <p className="page-subtitle">
            Explora todos los tipos de platos disponibles en nuestros restaurantes
          </p>
        </div>
      </div>

      <div className="search-and-filters">
        <div className="search-section">
          <div className="search-box">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Buscar en categorías o platos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="filters-section">
          <div className="filter-group">
            <Filter className="filter-icon" />
            <span className="filter-label">Ordenar por:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="filter-select"
            >
              <option value="name">Nombre</option>
              <option value="dishCount">Cantidad de platos</option>
              <option value="price">Precio promedio</option>
            </select>
          </div>
          <div className="results-count">
            {filteredAndSortedCategories.length} categoría{filteredAndSortedCategories.length !== 1 ? 's' : ''} encontrada{filteredAndSortedCategories.length !== 1 ? 's' : ''}
          </div>
        </div>
      </div>

      {filteredAndSortedCategories.length === 0 ? (
        <div className="no-results">
          <div className="no-results-icon">
            <Search className="no-results-svg" />
          </div>
          <h3>No se encontraron categorías</h3>
          <p>Intenta con otros términos de búsqueda</p>
        </div>
      ) : (
        <div className="categories-grid">
          {filteredAndSortedCategories.map((category, index) => {
            const IconComponent = getCategoryIcon(category.name);
            
            return (
              <div key={index} className="category-card">
                <div className="category-header">
                  <div className="category-icon-wrapper">
                    <IconComponent className="category-icon" />
                  </div>
                  <div className="category-main-info">
                    <h2 className="category-name">{category.name}</h2>
                    <div className="category-stats">
                      <span className="stat-item">
                        {category.dishCount} plato{category.dishCount !== 1 ? 's' : ''}
                      </span>
                      <span className="stat-separator">•</span>
                      <span className="stat-item">
                        {category.restaurantCount} restaurante{category.restaurantCount !== 1 ? 's' : ''}
                      </span>
                    </div>
                    <div className="price-info">
                      Desde {formatPrice(category.minPrice)} hasta {formatPrice(category.maxPrice)}
                    </div>
                  </div>
                  <div className="category-summary">
                    <div className="avg-price">
                      <span className="avg-price-label">Precio promedio</span>
                      <span className="avg-price-value">{formatPrice(category.avgPrice)}</span>
                    </div>
                  </div>
                </div>

                <div className="category-dishes">
                  <h3 className="dishes-section-title">Platos Disponibles</h3>
                  <div className="dishes-grid">
                    {category.dishes.slice(0, 6).map((dish, dishIndex) => (
                      <div key={dishIndex} className="dish-card">
                        <div className="dish-header">
                          <h4 className="dish-name">{dish.data.name}</h4>
                          <span className="dish-price">{formatPrice(dish.data.price)}</span>
                        </div>
                        <p className="dish-description">{dish.data.description}</p>
                        <div className="dish-footer">
                          <span className="restaurant-tag">{dish.restaurantName}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  {category.dishes.length > 6 && (
                    <div className="more-dishes-indicator">
                      +{category.dishes.length - 6} platos más en esta categoría
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Categories;