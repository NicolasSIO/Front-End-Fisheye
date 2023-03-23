import Photographer from "../models/Photographer.js";

export default class PhotographerFactory {
  constructor(photographer) {
    return new Photographer(photographer);
  }
}
