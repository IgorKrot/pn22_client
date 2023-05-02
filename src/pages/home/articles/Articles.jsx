import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import PetsIcon from '@mui/icons-material/Pets';
import CircularProgress from '@mui/material/CircularProgress';

import {useSelector} from 'react-redux'
import {Link, useNavigate} from "react-router-dom";

function Articles () {
   const {articles, paginationNumber} = useSelector((state) => state.categoryData);

   const navigate = useNavigate();

   return ( 
      <main className="articles">
         {articles ?
         <article className="articles_container">
            {articles.slice(paginationNumber * 8 - 8, paginationNumber * 8).map((articleName, i) => 
            <section className="articles_section" key={i} data-testid="articles">
               <Link key={articleName.id} to={`/articlepage/${articleName.id}`}>
                  <div className="articles_section_head">
                     <img className="section_head_img" src={articleName.img} alt="img"></img>
                  </div>
               </Link>
               <div className="section_title">
                  <div className="section_title_text">{articleName.title}</div>
               </div>
               <div className="section_description">
                  <div className="section_description_text">{articleName.description}</div>
               </div>
               <div className="articles_section_footer">
                  <div className="section_footer_statistic">
                     <div className="section_footer_views"><RemoveRedEyeIcon fontSize="inherit" color="inherit" /></div>
                     <div className="section_footer_likes"><ThumbUpOffAltIcon fontSize="inherit" color="inherit" /></div>
                     <div className="section_footer_favorites"><FavoriteBorderIcon fontSize="inherit" color="inherit" /></div>
                  </div>
                  <button className="section_footer_button" onClick={() => navigate(`/articlepage/${articleName.id}`)}>
                     <div className="section_footer_button_text"><PetsIcon fontSize="inherit" color="inherit" /></div>
                  </button>
               </div>
            </section>
            )}
         </article>
         : <CircularProgress sx={{ color: "white", marginTop: "30px", marginRight: "45%", marginLeft: "45%", marginBottom: "30px"}} />}
      </main>
   );
}

export default Articles;



// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';