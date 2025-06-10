import React from 'react';
import { Layout } from './Layout';
import { Album } from '../components/AlbumList/Album';

const albums = [
  {
    id: 1,
    imageURL:
      'https://media.gettyimages.com/id/1944195181/photo/swirl-spiral-abstract-red-green-motion-speed-blured-shape-hypnosis-vintage-retro-spiritual-on.jpg?s=612x612&w=gi&k=20&c=2791_3LDAnip0XmSUdI304-NV3ojOTG7G6gAHT1ZsVI=',
    title: 'Neon Dreams',
    artistName: 'Luna Waves',
  },
  {
    id: 2,
    imageURL: 'https://cdn.mos.cms.futurecdn.net/hJHjdbVKNhorF6aNu5p8kC.jpg',
    title: 'Echoes of Silence',
    artistName: 'The Hollow Sound',
  },
  {
    id: 3,
    imageURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqTG5Mfo7PbcdXQ9bQklm9xGyB_I8QmF6kELDquk5ET8zY4WyXPqSRHco1MQPuPp158bA&usqp=CAU',
    title: 'Golden Hour',
    artistName: 'Aria Bloom',
  },
  {
    id: 4,
    imageURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkIwsRrdQYfxJvWdTtlQxGBnUyb6Xj9mQp9A&s',
    title: 'Gravity & Light',
    artistName: 'Nova Trails',
  },
  {
    id: 5,
    imageURL:
      'https://albumcoverzone.com/slir/w300/png24-front/albumcover0010199.jpg',
    title: 'Parallel Lines',
    artistName: 'Zephyr Code',
  },
  {
    id: 6,
    imageURL:
      'https://img.freepik.com/free-vector/gradient-album-cover-template_23-2150613483.jpg?semt=ais_hybrid&w=740',
    title: 'Silent City',
    artistName: 'Echo Drive',
  },
];

export const AlbumList = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
          Your Albums
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 h-170 overflow-auto">
          {albums.map(data => (
            <Album
              key={data.id}
              image={data.imageURL}
              title={data.title}
              artistName={data.artistName}
              customClass="group relative bg-[var(--bg-secondary)] rounded-xl p-4 shadow-xl transition-all duration-300 transform cursor-pointer"
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};
