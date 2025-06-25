import { Album } from '../Interfaces/Album';
import { Artist } from '../Interfaces/Artist';
import { Song } from '../Interfaces/Song';

export const albums: Album[] = [
  {
    id: 1,
    imageURL:
      'https://media.gettyimages.com/id/1944195181/photo/swirl-spiral-abstract-red-green-motion-speed-blured-shape-hypnosis-vintage-retro-spiritual-on.jpg?s=612x612&w=gi&k=20&c=2791_3LDAnip0XmSUdI304-NV3ojOTG7G6gAHT1ZsVI=',
    title: 'Neon Dreams',
    artistName: 'Luna Waves',
    artistID: 6,
  },
  {
    id: 2,
    imageURL: 'https://cdn.mos.cms.futurecdn.net/hJHjdbVKNhorF6aNu5p8kC.jpg',
    title: 'Echoes of Silence',
    artistName: 'The Hollow Sound',
    artistID: 1,
  },
  {
    id: 3,
    imageURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqTG5Mfo7PbcdXQ9bQklm9xGyB_I8QmF6kELDquk5ET8zY4WyXPqSRHco1MQPuPp158bA&usqp=CAU',
    title: 'Golden Hour',
    artistName: 'Aria Bloom',
    artistID: 3,
  },
  {
    id: 4,
    imageURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkIwsRrdQYfxJvWdTtlQxGBnUyb6Xj9mQp9A&s',
    title: 'Gravity & Light',
    artistName: 'Nova Trails',
    artistID: 2,
  },
  {
    id: 5,
    imageURL:
      'https://albumcoverzone.com/slir/w300/png24-front/albumcover0010199.jpg',
    title: 'Parallel Lines',
    artistName: 'Zephyr Code',
    artistID: 4,
  },
  {
    id: 6,
    imageURL:
      'https://img.freepik.com/free-vector/gradient-album-cover-template_23-2150613483.jpg?semt=ais_hybrid&w=740',
    title: 'Silent City',
    artistName: 'Echo Drive',
    artistID: 5,
  },
];

export const artists: Artist[] = [
  {
    id: 1,
    imageURL:
      'https://i.scdn.co/image/ab67616100005174b5c8399bd5cae167e7aa2572',
    name: 'The Hollow Sound',
    albumID: 2,
  },
  {
    id: 2,
    imageURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqDSflbyeL_PUmASkyDHNfcxepGfNKs5GsDA&s',
    name: 'Nova Trails',
    albumID: 4,
  },
  {
    id: 3,
    imageURL:
      'https://i1.sndcdn.com/avatars-8EoGy4kiKk70rpOX-WiDkJg-t1080x1080.jpg',
    name: 'Aria Bloom',
    albumID: 3,
  },
  {
    id: 4,
    imageURL:
      'https://upload.wikimedia.org/wikipedia/commons/1/1d/Zephyr_%281%29.jpg',
    name: 'Zephyr Code',
    albumID: 5,
  },
  {
    id: 5,
    imageURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVfPauLsuHmT58eiyeel3L4kntLaL6K-F5EQ&s',
    name: 'Echo Drive',
    albumID: 6,
  },
  {
    id: 6,
    imageURL:
      'https://i.scdn.co/image/ab67616100005174f06e772b714c92b1ab5d7e5b',
    name: 'Luna Waves',
    albumID: 1,
  },
];

export const songs: Song[] = [
  {
    id: 1,
    imageURL:
      'https://media.gettyimages.com/id/1944195181/photo/swirl-spiral-abstract-red-green-motion-speed-blured-shape-hypnosis-vintage-retro-spiritual-on.jpg?s=612x612&w=gi&k=20&c=2791_3LDAnip0XmSUdI304-NV3ojOTG7G6gAHT1ZsVI=',
    title: 'Neon Dreams',
    artistName: 'Luna Waves',
    albumName: 'Neon Dreams',
    duration: '3:45',
    albumID: 1,
    artistID: 6,
  },
  {
    id: 2,
    imageURL:
      'https://media.gettyimages.com/id/1944195181/photo/swirl-spiral-abstract-red-green-motion-speed-blured-shape-hypnosis-vintage-retro-spiritual-on.jpg?s=612x612&w=gi&k=20&c=2791_3LDAnip0XmSUdI304-NV3ojOTG7G6gAHT1ZsVI=',
    title: 'Quintessence',
    artistName: 'Luna Waves',
    albumName: 'Neon Dreams',
    duration: '3:45',
    albumID: 1,
    artistID: 6,
  },
  {
    id: 3,
    imageURL: 'https://cdn.mos.cms.futurecdn.net/hJHjdbVKNhorF6aNu5p8kC.jpg',
    title: 'Echoes',
    artistName: 'The Hollow Sound',
    albumName: 'Echoes of Silence',
    duration: '3:20',
    albumID: 2,
    artistID: 1,
  },
  {
    id: 4,
    imageURL: 'https://cdn.mos.cms.futurecdn.net/hJHjdbVKNhorF6aNu5p8kC.jpg',
    title: 'Silent in the Dark - Part 1',
    artistName: 'The Hollow Sound',
    albumName: 'Echoes of Silence',
    duration: '1:44',
    albumID: 2,
    artistID: 1,
  },
  {
    id: 5,
    imageURL: 'https://cdn.mos.cms.futurecdn.net/hJHjdbVKNhorF6aNu5p8kC.jpg',
    title: 'Silent in the Dark - Part 2',
    artistName: 'The Hollow Sound',
    albumName: 'Echoes of Silence',
    duration: '2:12',
    albumID: 2,
    artistID: 1,
  },
  {
    id: 6,
    imageURL:
      'https://albumcoverzone.com/slir/w300/png24-front/albumcover0010199.jpg',
    title: 'Lines of Code',
    artistName: 'Zephyr Code',
    albumName: 'Parallel Lines',
    duration: '12:45',
    albumID: 5,
    artistID: 4,
  },
  {
    id: 7,
    imageURL:
      'https://albumcoverzone.com/slir/w300/png24-front/albumcover0010199.jpg',
    title: 'Songs of the Heart',
    artistName: 'Zephyr Code',
    albumName: 'Parallel Lines',
    duration: '4:21',
    albumID: 5,
    artistID: 4,
  },
];
