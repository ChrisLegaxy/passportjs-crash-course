import express, { Application } from 'express';
import cors from 'cors';

const Http = {
  init: (_express: Application) => {
    _express.use(express.json());

    _express.use(express.urlencoded({ extended: false }));

    _express.use(cors());
  }
};

export default Http;
