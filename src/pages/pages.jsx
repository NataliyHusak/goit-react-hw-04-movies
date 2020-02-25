import { lazy } from "react";

const HomePage = lazy(() =>
  import("../components/HomePage/HomePage" /* webpackChunkName: "HomePage" */)
);
const MoviesPage = lazy(() =>
  import(
    "../components/MoviesPage/MoviesPage" /* webpackChunkName: "MoviesPage" */
  )
);
const MovieDetailsPage = lazy(() =>
  import(
    "../components/MoviesDetail/MoviesDetail" /* webpackChunkName: "MovieDetailsPage" */
  )
);
const Cast = lazy(() =>
  import("../components/Cast/Cast" /* webpackChunkName: "Cast" */)
);
const Reviews = lazy(() =>
  import("../components/Reviews/Reviews" /* webpackChunkName: "Reviews" */)
);

export default {
  HOME_PAGE: {
    path: "/",
    component: HomePage
  },
  MOVIE_DETAILS_PAGE: {
    path: "/movies/:id",
    component: MovieDetailsPage
  },
  MOVIES_PAGE: {
    path: "/movies",
    component: MoviesPage
  },
  CAST_PAGE: {
    path: `/movies/:id/cast`,
    component: Cast
  },
  REVIEWS_PAGE: {
    path: `/movies/:id/reviews`,
    component: Reviews
  }
};
