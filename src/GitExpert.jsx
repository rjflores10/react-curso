import { useState } from "react"
import {AddCategories, GifGrid} from './componentes/ind'
export const GitExpertApp = () => {

const [Categories, setCategories] = useState(['One Punch']);
    
const onAddCategories = (newCategory) => {

        console.log(newCategory);

        if( Categories.includes(newCategory)) return;
        //agregar alg
        // const s = 'Valorant'
        setCategories ([newCategory, ...Categories]);
        // Categories.push(newCategory);
    }

    return(
    <>
        <h1>GifExpertAppp</h1>
            {}
            {}
        <AddCategories 
            onNewCategory = { event => onAddCategories(event)}
            // currentCategories= {Categories}      
        />
            { 
                Categories.map ((category) =>(
                        <GifGrid 
                        key={category}
                        category={category} />
                ))
            }
    </>
        
    )
}

//LQdEMERXbUzbXG6wL3VsXf5SmuK4yOUV