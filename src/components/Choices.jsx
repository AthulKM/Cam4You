import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Accordion, Container, Button } from 'react-bootstrap';
import { ProductContext } from './ProductContext';
import '../App.css';

const Choices = () => {
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');

  const categories = [...new Set(products.map(product => product.category))];
  const brands = [...new Set(products.map(product => product.brand))];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
  };

  const handleApplyFilters = () => {
    let query = '';
    if (selectedCategory) query += `category=${selectedCategory}&`;
    if (selectedBrand) query += `brand=${selectedBrand}`;
    navigate(`/HomePage?${query}`);
  };

  const handleShowAllProducts = () => {
    setSelectedCategory('');
    setSelectedBrand('');
    navigate('/HomePage');
  };

  return (
    <Container className='choices'>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Choose By Category</Accordion.Header>
          <Accordion.Body>
            <ul>
              {categories.map(category => (
                <li key={category}>
                      <Button
                          className={selectedCategory === category ? 'selected' : ''}
                          onClick={() => handleCategoryClick(category)}>
                    {category}
                  </Button>
                </li>
              ))}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Choose By Brand</Accordion.Header>
          <Accordion.Body>
            <ul>
              {brands.map(brand => (
                <li key={brand}>
                    <Button
                          className={selectedBrand === brand ? 'selected' : ''}
                          onClick={() => handleBrandClick(brand)}>
                        {brand}
                    </Button>
                </li>
              ))}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Button className="mt-3" onClick={handleApplyFilters}>Apply Filters</Button>
      <Button className="mt-3 ms-2" onClick={handleShowAllProducts}>Show All Products</Button>
    </Container>
  );
};

export default Choices;





