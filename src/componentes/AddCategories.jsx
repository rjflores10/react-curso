import {useState} from 'react'

export const AddCategories = ({onNewCategory}) => {

    const [inputvalue, setInputValue] = useState('One punch');
    
    const OnInputChange = ({target}) => {
        setInputValue( target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        
        if( inputvalue.trim().length < 1) return;

        //setCategories( categories =>[inputvalue, ...categories])
        onNewCategory( inputvalue.trim());
        setInputValue('');
    }
    
    return (
    
        <form onSubmit= {onSubmit}>

            <input 
            type="text" 
            placeholder='Buscar'
            value={inputvalue}
            onChange={OnInputChange}/>


        </form>
            
    )
}
