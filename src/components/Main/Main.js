import React, { useEffect, useContext, useState } from 'react';
import ReactPaginate from 'react-paginate';
import PaginationButton from './PaginationButton';
import Input from '../Input/Input';
import { PER_PAGE, API_URL } from '../../constant';
import { Context } from '../../store/'
import { getPokemonsList } from '../../service';
import Card from '../Card/Card';
import './main.css';

const Main = () => {
  const [searchValue, setSearchValue] = useState('');
  const [state, dispatch] = useContext(Context);
  const { pokemons, totalPokemons, page } = state;

  const handlePageClick = (data) => {
    // update selected page in store
    dispatch({ type: 'SET_PAGE', payload: data.selected + 1 })
  }

  // Calculate Total Page
  const calculateTotalPage = () => {
    const totalPage = Math.ceil(totalPokemons / PER_PAGE);
    return totalPage;
  }

  // Search pokemon
  const handleSearch = () => {
    getPokemonsList(dispatch, page, searchValue);
  }

  // back to the first data 
  const handleReset = () => {
    setSearchValue('');
    dispatch({ type: 'SET_PAGE', payload:1})
    getPokemonsList(dispatch, page);
  }

  // Get Initial Data and When page changed, fetch new data
  useEffect(() => {
    getPokemonsList(dispatch, page);
  }, [page])

  return (
    <main className="main">
      <Input
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleReset={handleReset}
        handleSearch={handleSearch} 
      />
      <section className="cards-wrapper">
        {pokemons.map((pokemon, index) => {
          return <Card key={index} url={pokemon.url || `${API_URL}/${pokemon.name}` } />
        })}
      </section>
      <ReactPaginate
        previousLabel={<PaginationButton name="Prev" />}
        nextLabel={<PaginationButton name="Next" />}
        forcePage={page - 1}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={calculateTotalPage()}
        marginPagesDisplayed={2}
        pageRangeDisplayed={4}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </main>
  )
}

export default Main;