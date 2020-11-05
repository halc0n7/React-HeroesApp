import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroByName } from '../../selectors/getHeroByName';

export const SearshScreem = ({history}) => {

   const location = useLocation();
   
   const {q=''} =queryString.parse(location.search);
   console.log(q);

    
   const [fomValues, handleInputChange]= useForm({
       description:q
   });

   const {description}=fomValues;
   
   const heroesFiltered = useMemo(() => getHeroByName(q), [q])
   
    const handleSearch = (e)=>{
        e.preventDefault();
        console.log(description)
        history.push(`?q=${description}`);
    }
    


    return (
        <div>
            <h1>Search Screem</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>

                    <form onSubmit={handleSearch}>
                        <input
                        name='description'
                        type="text"
                        placeholder="find your hero"
                        className="form-control"
                        value={description}
                        onChange={handleInputChange}
        
                     
                        />
                        <button
                        type="submit"
                        className="btn m-1 btn-block btn-outline-primary"
                        >
                         Search...
                        </button>
                    </form>
                </div>



                <div className="col-7"> 
                  <h4>Results</h4>
                  <hr/>
                   {
                        (q==='') 
                            &&
                        <div className="alert alert-info">
                               Search a Hero

                        </div>}

                        {
                        (q!=='' && heroesFiltered.length === 0) 
                            &&
                        <div className="alert alert-danger">
                            There is not a hero with {q}

                        </div>}

                    {
                      heroesFiltered.map(hero=>(

                        <HeroCard
                        key={hero.id}
                        {...hero}
                        />
                      ))
                    }

                </div>
            </div>
        </div>
    )
}
