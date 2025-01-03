import express from 'express';
import { init } from '../utils/prismicByType.js'

const router = express.Router();

router.get('/about', async (req, res) => {
  const prismicData = await init('about');
  if(Object.keys(prismicData).length > 0){
    const about = prismicData.results[0];
    about.data.body.forEach(slice => {
      if(slice.slice_type == "content"){
        slice.primary.description = slice.primary.description.replace(/\n/g, '<br>')
      }
    })
    const about_high = about.data.body.filter(slice => slice.slice_type == 'gallery')
    console.log(about_high[0].items);
    res.render('pages/about', {
      about, meta : res.locals.meta
     });
  } else {
    res.status(404).send('Page not Found');
  }
});

export default router;