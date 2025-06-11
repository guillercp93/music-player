/**
 * Represents a music song.
 *
 * @prop {number} id - The unique identifier for this song.
 * @prop {string} title - The title of the song.
 * @prop {string} artistName - The name of the artist who created the song.
 * @prop {string} albumName - The name of the album associated with the song.
 * @prop {string} duration - The duration of the song in minutes and seconds.
 * @prop {number} albumID - The ID of the album associated with the song.
 * @prop {number} artistID - The ID of the artist who created the song.
 * @prop {string} imageURL - The URL of the image to display for the song.
 */
export interface Song {
  id: number;
  title: string;
  artistName: string;
  albumName: string;
  duration: string;
  albumID: number;
  artistID: number;
  imageURL: string;
}
