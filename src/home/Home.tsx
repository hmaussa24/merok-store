import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
interface Producto {
    id: number;
    codigo: string;
    nombre: string;
    descripcion: string;
    precioPublico: number;
    descuento: number;
    createdAt: string;
    imagenes: {
        url?: string;
    }[]
    tallas?: {
        talla: string;
    };
    categorias: {
        nombre: string;
    };
    colors?: {
        color: string;
        codigoColor: string;
    };
}
export function Home() {
    const [productos, setProductos] = useState<Producto[]>([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchProductos = async () => {
            const token = localStorage.getItem("access_token");
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/productos`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setProductos(response.data);
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            }
        };

        fetchProductos();
    }, []);

    return (
        <div className="font-sans text-gray-800">
            <header className="bg-black py-4 shadow-md fixed top-0 w-full z-50 mb-15">
                <div className="container mx-auto text-center cursor-pointer" onClick={() => navigate(`/home/${productos.length > 0 ? productos[0].id : ''}`)}>
                    <h1 className="text-white text-xl font-bold inline-block px-4 py-2 border-2 border-white rounded-lg">
                        MEROK
                    </h1>
                </div>
            </header>
            <section className="relative w-full h-[300px] xs:h-[380px] sm:h-[440px] md:h-[560px] lg:h-[760px] flex items-center justify-center mt-16 overflow-hidden">
                <img
                    src="https://raw.githubusercontent.com/hmaussa24/store-back/main/images/banner.png"
                    alt="Modelo"
                    className="absolute inset-0 w-full h-full object-cover object-[center_10%] z-0 transition-all duration-300"
                    style={{ objectPosition: 'center 10%' }}
                />
                <div className="relative z-10 w-full max-w-2xl mx-auto bg-black/60 rounded-xl p-4 xs:p-6 md:p-16 text-center text-white backdrop-blur-sm shadow-lg flex flex-col items-center justify-center mt-16 xs:mt-12 md:mt-0 mb-16 xs:mb-12 md:mb-0 mx-4 xs:mx-6 md:mx-0">
                    <h1 className="text-xl xs:text-2xl md:text-5xl font-bold mb-2 md:mb-4 drop-shadow-lg leading-tight">
                        Renueva tu estilo con lo último en moda urbana
                    </h1>
                    <p className="text-sm xs:text-base md:text-xl mb-3 md:mb-6 text-gray-200">
                        Envíos rápidos a todo el país • Stock limitado
                    </p>
                    <button
                        onClick={() => navigate(`/home/${productos[0]?.id}`)}
                        className="bg-white text-black px-4 xs:px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold shadow hover:bg-gray-200 transition text-xs xs:text-sm md:text-base"
                    >
                        Comprar ahora
                    </button>
                </div>
            </section>

            {/* Productos destacados */}
            <section className="py-12 px-6">
                <h2 className="text-2xl font-bold mb-6 text-center">Productos destacados</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {productos.map((producto, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-4 border border-gray-100 relative group"
                            style={{ width: "fit-content", minWidth: 220, maxWidth: 260 }}
                        >
                            <div>
                                <img
                                    src={producto.imagenes[0]?.url || 'https://via.placeholder.com/220x220?text=Sin+Imagen'}
                                    alt={producto.nombre}
                                    className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                                    style={{ maxWidth: 192, maxHeight: 192 }}
                                />
                            </div>
                            <h3 className="font-semibold text-lg mb-1 text-gray-900 truncate w-full text-center" title={producto.nombre}>{producto.nombre}</h3>
                            <p className="text-gray-700 text-base font-bold mb-2">${producto.precioPublico}</p>
                            <button
                                onClick={() => navigate(`/home/${producto.id}`)}
                                className="mt-auto bg-gradient-to-r from-black to-gray-800 text-white px-6 py-2 rounded-full font-semibold shadow hover:from-gray-900 hover:to-black transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
                            >
                                Comprar
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Ofertas */}
            <section className="bg-gray-100 text-center py-8 text-xl font-bold">
                <p>
                    <span className="text-black">Ofertas limitadas</span> <span className="text-red-600">¡Últimas unidades!</span>
                </p>
            </section>

            {/* Reseñas */}
            <section className="py-10 px-6">
                <h2 className="text-xl font-bold mb-4">Reseñas</h2>
                <div className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto">
                    <div className="flex items-center mb-2">
                        <div className="w-10 h-10 bg-gray-300 rounded-full mr-3 flex items-center justify-center">
                            <svg
                                className="w-6 h-6 text-gray-600"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z" />
                            </svg>
                        </div>
                        <span className="font-semibold">Maria Fernanda Colon</span>
                    </div>
                    <p className="text-gray-700 mb-2">
                        Excelente calidad y muy buen servicio. ¡Muy recomendable!
                    </p>
                    <div className="text-yellow-400 text-lg">★★★★★</div>
                </div>
            </section>
        </div>
    );
}
