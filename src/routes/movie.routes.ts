import { Router } from "express";
const router = Router();

import {
 getMovies,
 getTopRated,
 getPopular,
 getSearch,
 getDetail
} from "../controllers/movie.controller";

router.get("/movies",  getMovies);
router.get("/top_rated",  getTopRated);
router.get("/popular",  getPopular);
router.get("/detail/:id",  getDetail);
router.get("/search/:search",  getSearch);


export default router;