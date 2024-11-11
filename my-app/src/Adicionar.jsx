import React from 'react';
import './Adicionar.css';
import LockIcon from '@mui/icons-material/Lock';

function Adicionar() {
  return (
    <div className="main-container">
      <header className="header">
        <button className="back-button">⬅</button>
        <h1>Endereço</h1>
        <button className="lock-button">
          <LockIcon />
        </button>
      </header>
      
      <section className="banner-section">
        <div className="banner">
          <p>Banner</p>
        </div>
        <button className="add-banner">Adicionar Banner</button>
      </section>
      
      <section className="title-section">
        <div className="title-avatar">
          <button className="add-avatar">+</button>
        </div>
        <div className="title-info">
          <h2 className="title">Título</h2>
          <p className="rating">★★★★☆</p>
          <button className="add-title-rating">Adicionar Título e Classificação</button>
          <button className="add-address">Adicionar Endereço</button>
          <button className="add-phone">Adicionar Telefone</button>
          <button className="add-hours">Adicionar Horário de Funcionamento</button>
        </div>
      </section>
      
      <section className="categories">
        <div className="category-header">
          <button className="category-button">Adicionar Categoria</button>
          <button className="category-button">Adicionar Categoria</button>
          <button className="category-button">Adicionar Categoria</button>
          <button className="category-button">Adicionar Categoria</button>
        </div>

        <div className="category">
          <h3>Sua Categoria</h3>
          <div className="items">
            <div className="item">
              <button className="add-item">+</button>
              <p>Título</p>
              <p>Sua Descrição</p>
              <p className="price">R$ 00,00</p>
            </div>
            <div className="item">
              <button className="add-item">+</button>
              <p>Título</p>
              <p>Sua Descrição</p>
              <p className="price">R$ 00,00</p>
            </div>
            <div className="item">
              <button className="add-item">+</button>
              <p>Título</p>
              <p>Sua Descrição</p>
              <p className="price">R$ 00,00</p>
            </div>
            <div className="item">
              <button className="add-item">+</button>
              <p>Título</p>
              <p>Sua Descrição</p>
              <p className="price">R$ 00,00</p>
            </div>
          </div>
        </div>

        <div className="category">
          <h3>Sua Categoria</h3>
          <div className="items">
            <div className="item">
              <button className="add-item">+</button>
              <p>Título</p>
              <p>Sua Descrição</p>
              <p className="price">R$ 00,00</p>
            </div>
            <div className="item">
              <button className="add-item">+</button>
              <p>Título</p>
              <p>Sua Descrição</p>
              <p className="price">R$ 00,00</p>
            </div>
            <div className="item">
              <button className="add-item">+</button>
              <p>Título</p>
              <p>Sua Descrição</p>
              <p className="price">R$ 00,00</p>
            </div>
            <div className="item">
              <button className="add-item">+</button>
              <p>Título</p>
              <p>Sua Descrição</p>
              <p className="price">R$ 00,00</p>
            </div>
          </div>
        </div>

        <div className="category">
          <h3>Sua Categoria</h3>
          <div className="items">
            <div className="item">
              <button className="add-item">+</button>
              <p>Título</p>
              <p>Sua Descrição</p>
              <p className="price">R$ 00,00</p>
            </div>
            <div className="item">
              <button className="add-item">+</button>
              <p>Título</p>
              <p>Sua Descrição</p>
              <p className="price">R$ 00,00</p>
            </div>
            <div className="item">
              <button className="add-item">+</button>
              <p>Título</p>
              <p>Sua Descrição</p>
              <p className="price">R$ 00,00</p>
            </div>
            <div className="item">
              <button className="add-item">+</button>
              <p>Título</p>
              <p>Sua Descrição</p>
              <p className="price">R$ 00,00</p>
            </div>
          </div>
        </div>
        
        <div className="category">
          <h3>Sua Categoria</h3>
          <div className="items">
            <div className="item">
              <button className="add-item">+</button>
              <p>Título</p>
              <p>Sua Descrição</p>
              <p className="price">R$ 00,00</p>
            </div>
            <div className="item">
              <button className="add-item">+</button>
              <p>Título</p>
              <p>Sua Descrição</p>
              <p className="price">R$ 00,00</p>
            </div>
            <div className="item">
              <button className="add-item">+</button>
              <p>Título</p>
              <p>Sua Descrição</p>
              <p className="price">R$ 00,00</p>
            </div>
            <div className="item">
              <button className="add-item">+</button>
              <p>Título</p>
              <p>Sua Descrição</p>
              <p className="price">R$ 00,00</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Adicionar;
