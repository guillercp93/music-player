/**
 * Represents a music album.
 * @property {number} id - The unique identifier for this album.
 * @property {string} title - The title of the album.
 * @property {string} artistName - The name of the artist who created the album.
 * @property {string} imageURL - The URL of the image to display for the album.
 * @property {number} artistID - The ID of the artist who created the album.
 */
export interface Album {
  id: number;
  title: string;
  artistName: string;
  imageURL: string;
  artistID: number;
}
