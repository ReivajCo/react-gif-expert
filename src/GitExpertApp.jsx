import { useState } from "react"
import {AddCategory, GifGrid} from './components'

export const GitExpertApp = () => {

    const [categorias, setcategorias] = useState([ 'One Punch' ]);

    const onAddCategory = (newCategory) =>{
        //categorias.push(newCategory);
        if (categorias.includes(newCategory))return;
        setcategorias([newCategory, ...categorias]);
    };

  return (
    <>
        <h1>GifExpertApp</h1>
        
        < AddCategory 
            onNewCategory = { (value) => onAddCategory(value)}
        />

        {
            categorias.map(( category )=> (

                    <GifGrid 
                        key={ category }
                        category={ category }    />

                ))
        }
        
    </>
  )
}