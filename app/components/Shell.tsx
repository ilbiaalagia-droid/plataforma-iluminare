import Link from "next/link";
import type { ReactNode } from "react";
import {
  Package,
  ShoppingBag,
  Truck,
  Users,
  BarChart3,
  Heart,
  Boxes,
  Wallet,
  FileText,
  Sparkles,
} from "lucide-react";

export default function Shell({
  children,
  active,
}: {
  children: ReactNode;
  active: string;
}) {
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-symbol">✦</div>
          <h1>Iluminare</h1>
          <p>Luz da fé em cada detalhe</p>
        </div>

        <nav className="menu">
          <Link className={active === "dashboard" ? "active" : ""} href="/"><BarChart3 size={18} />Dashboard</Link>
          <Link className={active === "produtos" ? "active" : ""} href="/produtos"><Package size={18} />Produtos</Link>
          <Link className={active === "compras" ? "active" : ""} href="/compras"><Truck size={18} />Compras</Link>
          <Link className={active === "estoque" ? "active" : ""} href="/estoque"><Boxes size={18} />Estoque</Link>
          <Link className={active === "vendas" ? "active" : ""} href="/vendas"><ShoppingBag size={18} />Vendas</Link>
          <Link className={active === "clientes" ? "active" : ""} href="/clientes"><Users size={18} />Clientes</Link>
          <Link className={active === "fornecedores" ? "active" : ""} href="/fornecedores"><FileText size={18} />Fornecedores</Link>
          <Link className={active === "financeiro" ? "active" : ""} href="/financeiro"><Wallet size={18} />Financeiro</Link>
          <Link className={active === "marketing" ? "active" : ""} href="/marketing"><Heart size={18} />Marketing</Link>
          <Link className={active === "ia" ? "active" : ""} href="/ia"><Sparkles size={18} />IA Iluminare</Link>
        </nav>
      </aside>

      <main className="main">{children}</main>
    </div>
  );
}