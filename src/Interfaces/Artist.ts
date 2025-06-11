/**
 * Represents a music artist.
 *
 * @prop {number} id - The unique identifier for this artist.
 * @prop {string} name - The name of the artist.
 * @prop {string} imageURL - The URL of the image to display for the artist.
 * @prop {number} albumID - The ID of the album associated with this artist.
 */
export interface Artist {
  id: number;
  name: string;
  imageURL: string;
  albumID: number;
}
