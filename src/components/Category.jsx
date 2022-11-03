import Sort from "./Sort"

import { useSelector, useDispatch } from 'react-redux'
import { setCategory } from '../redux/reduxSlices/categorySlice' 

function Category () {
   const category = useSelector((state) => state.categoryData.category);
   const dispatch = useDispatch();

   const categoryList = ["all", "work", "life", "relations"]
   return ( 
      <nav className="navigate">
         <div className="navigate_container">   
            <ul className="category_list">
               {categoryList.map((categoryName, i) =>
               <li className="category_list_element" key={i} onClick={() => {dispatch(setCategory(i))}}>
                  <div className="element_text">categody1</div>
               </li>
               )}
            </ul>
            <Sort />
         </div>
      </nav>
   );
}

export default Category;