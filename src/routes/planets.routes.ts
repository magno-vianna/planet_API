import { Router } from 'restify-router';
import PlanetController from '../controllers/PlanetController';


const router = new Router();
const planetController = new PlanetController(); 

router.get('/planets', planetController.index);

export = router;
