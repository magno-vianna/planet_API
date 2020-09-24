import { plugin } from 'mongoose';
import { Router } from 'restify-router';
import PlanetController from '../controllers/PlanetController';


const router = new Router();
const planetController = new PlanetController(); 

router.post('/planets', planetController.create);

router.get('/planets', planetController.index);
router.get('/planets/:id', planetController.findById); 

//router.put('/planets/:id', planetController.update); 

router.del('/planets/:id', planetController.delete);


export = router;
