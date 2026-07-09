import Shell from './components/Shell';

export default function Produtos() {
  return (
    <Shell active="produtos">
      <div className="top">
        <div>
          <h2>Produtos</h2>
          <p>Cadastro completo dos produtos da Iluminare</p>
        </div>
      </div>

      <section className="section">
        <h3>Cadastrar produto</h3>

        <div className="form-grid">
          <div className="field">
            <label>Código</label>
            <input placeholder="Ex: T001" />
          </div>

          <div className="field">
            <label>Nome do produto</label>
            <input placeholder="Ex: Terço São Miguel" />
          </div>

          <div className="field">
            <label>Categoria</label>
            <select>
              <option>Terços</option>
              <option>Pulseiras</option>
              <option>Colares</option>
              <option>Velas</option>
              <option>Imagens</option>
              <option>Chaveiros</option>
              <option>Bíblias</option>
              <option>Kits</option>
            </select>
          </div>

          <div className="field">
            <label>Devoção</label>
            <input placeholder="Ex: São Miguel, Santa Rita..." />
          </div>

          <div className="field">
            <label>Custo</label>
            <input placeholder="R$ 0,00" />
          </div>

          <div className="field">
            <label>Preço de venda</label>
            <input placeholder="R$ 0,00" />
          </div>

          <div className="field">
            <label>Valor em 3x</label>
            <input placeholder="3x R$ 0,00" />
          </div>

          <div className="field">
            <label>Estoque atual</label>
            <input placeholder="0" />
          </div>

          <div className="field">
            <label>Estoque mínimo</label>
            <input placeholder="0" />
          </div>

          <div className="field">
            <label>Fornecedor</label>
            <input placeholder="Ex: Encantos da Fé" />
          </div>

          <div className="field">
            <label>Localização</label>
            <input placeholder="Ex: Prateleira 1" />
          </div>

          <div className="field">
            <label>Foto do produto</label>
            <input type="file" />
          </div>
        </div>

        <div className="field" style={{ marginTop: 14 }}>
          <label>Observações</label>
          <textarea placeholder="Detalhes importantes do produto..." />
        </div>

        <div className="actions">
          <button className="btn">Salvar produto</button>
          <button className="btn secondary">Limpar</button>
        </div>
      </section>
    </Shell>
  );
}
