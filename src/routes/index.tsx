import { Routes, Route } from "react-router-dom"
import { LandingProducto } from "../welcome/LandingProducto";
import { Checkout } from "../checkout/checkout";
import { ConfirmacionContraEntrega } from "../validar-compra/contraentrega";
import { ConfirmacionTransferencia } from "../validar-compra/transferencia";
import { ListaCompras } from "../dashboard/compras/compras";
import { VerProducto } from "../dashboard/productos/ver-producto";
import { CrearProducto } from "../dashboard/productos/crear-producto";
import { ListaProductos } from "../dashboard/productos/lista-productos";
import { Login } from "../login/login";

const AppRoutes = () => 
(
        <Routes>
            <Route path="home/:id" element={<LandingProducto />} />
            <Route path="checkout/:id/:talla/:color" element={<Checkout />} />
            <Route path="contraentrega" element={<ConfirmacionContraEntrega />} />
            <Route path="transferencia/:idp/:idc" element={<ConfirmacionTransferencia />} />
            <Route path="compras" element={<ListaCompras />} />
            <Route path="ver-producto/:id" element={<VerProducto/>} />
            <Route path="crear-producto" element={<CrearProducto />} />
            <Route path="listar-productos" element={<ListaProductos />} />
            <Route path="login" element={<Login />} />
            
        </Routes>
);
export default AppRoutes;