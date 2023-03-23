import Media from "../models/Media.js";

export default class MediaFactory {
  constructor(media) {
    return new Media(media);
  }
}
