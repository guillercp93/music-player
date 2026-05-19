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
    duration: '6:12',
    albumID: 1,
    artistID: 6,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    lyrics: `[00:05] (Instrumental Intro)
[00:20] En la ciudad de luces rojas y neón...
[00:28] Caminas sola buscando una conexión.
[00:36] El asfalto brilla bajo la lluvia fría,
[00:44] Y tus ojos sueñan con una melodía.
[00:52] (Chorus)
[00:54] Sueños de neón, flotando en el aire,
[01:02] Es una ilusión que no duerme en ninguna parte.
[01:10] Déjate llevar por el ritmo del tambor,
[01:18] Neon dreams, sintiendo todo el calor.
[01:28] (Guitar solo)
[01:50] The grid is alive with static and light,
[01:58] We are the passengers chasing the night.
[02:06] Lose your thoughts in the electric stream,
[02:14] Live inside a beautiful digital dream.
[02:22] (Chorus)
[02:24] Neon dreams, floating in the dark,
[02:32] Looking for the flame, ignited by a spark.
[02:40] Let the synthwave guide you through the digital haze,
[02:48] We will be running in this neon maze.
[03:00] (Instrumental Outro)`,
  },
  {
    id: 2,
    imageURL:
      'https://media.gettyimages.com/id/1944195181/photo/swirl-spiral-abstract-red-green-motion-speed-blured-shape-hypnosis-vintage-retro-spiritual-on.jpg?s=612x612&w=gi&k=20&c=2791_3LDAnip0XmSUdI304-NV3ojOTG7G6gAHT1ZsVI=',
    title: 'Quintessence',
    artistName: 'Luna Waves',
    albumName: 'Neon Dreams',
    duration: '7:05',
    albumID: 1,
    artistID: 6,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    lyrics: `[00:10] (Smooth Electronic Beats)
[00:35] La esencia pura de lo que solíamos ser,
[00:45] Cinco elementos que vuelven a nacer.
[00:55] Tierra y agua, aire, fuego y luz,
[01:05] Llevando en el alma la misteriosa cruz.
[01:15] (Chorus)
[01:18] Quintaesencia, magia del universo,
[01:28] Escrita en las líneas de este humilde verso.
[01:38] Levanta la mirada al cielo estrellado,
[01:48] Lo que buscas siempre ha estado a tu lado.
[02:00] (Synth Break)
[02:40] Quintessence, the fabric of our soul,
[02:50] Together we are parts that make the whole.
[03:00] Beyond the physical, beyond what we can see,
[03:10] Locked in the secrets of infinity.`,
  },
  {
    id: 3,
    imageURL: 'https://cdn.mos.cms.futurecdn.net/hJHjdbVKNhorF6aNu5p8kC.jpg',
    title: 'Echoes',
    artistName: 'The Hollow Sound',
    albumName: 'Echoes of Silence',
    duration: '5:44',
    albumID: 2,
    artistID: 1,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    lyrics: `[00:15] (Hollow Echoing Guitar Intro)
[00:40] En el silencio escucho tu voz resonar,
[00:50] Como olas cansadas rompiendo en el mar.
[01:00] Eco de palabras que el tiempo no borró,
[01:10] Promesas vacías que el viento se llevó.
[01:20] (Chorus)
[01:22] Echoes in the hall, echoing tonight,
[01:32] Shadows on the wall, fading with the light.
[01:42] Can you hear the whisper of a heart in pain?
[01:52] Like endless drops of cold autumn rain.
[02:02] (Deep Bass Drop)
[02:30] Solo ecos quedan en esta habitación...
[02:40] El eco constante de nuestra vieja canción.
[02:50] Desvaneciendo en la eterna oscuridad,
[03:00] Buscando el camino hacia la libertad.`,
  },
  {
    id: 4,
    imageURL: 'https://cdn.mos.cms.futurecdn.net/hJHjdbVKNhorF6aNu5p8kC.jpg',
    title: 'Silent in the Dark - Part 1',
    artistName: 'The Hollow Sound',
    albumName: 'Echoes of Silence',
    duration: '5:02',
    albumID: 2,
    artistID: 1,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    lyrics: `[00:08] (Calm Ambient Piano)
[00:30] Apaga la luz, no digas nada más,
[00:40] Deja que el silencio nos devuelva la paz.
[00:50] En esta penumbra no hay por qué mentir,
[01:00] La noche nos enseña el arte de sentir.
[01:10] (Chorus)
[01:12] Silent in the dark, we are laying here,
[01:22] Washing away every single fear.
[01:32] No words are needed in this sacred space,
[01:42] Just the warm embrace of your lovely face.`,
  },
  {
    id: 5,
    imageURL: 'https://cdn.mos.cms.futurecdn.net/hJHjdbVKNhorF6aNu5p8kC.jpg',
    title: 'Silent in the Dark - Part 2',
    artistName: 'The Hollow Sound',
    albumName: 'Echoes of Silence',
    duration: '6:03',
    albumID: 2,
    artistID: 1,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    lyrics: `[00:12] (Dramatic Orchestral Intro)
[00:45] Continuamos el viaje en la profundidad,
[00:55] Donde el silencio abraza la verdad.
[01:05] Si cierras los ojos podrás escuchar,
[01:15] El latido del mundo que vuelve a empezar.
[01:25] (Chorus)
[01:28] Aún en silencio, brillando en la oscuridad,
[01:38] Buscando verdades más allá de la edad.
[01:48] Guíame, sígueme, no mires atrás,
[01:58] En este silencio al fin cantarás.`,
  },
  {
    id: 6,
    imageURL:
      'https://albumcoverzone.com/slir/w300/png24-front/albumcover0010199.jpg',
    title: 'Lines of Code',
    artistName: 'Zephyr Code',
    albumName: 'Parallel Lines',
    duration: '5:45',
    albumID: 5,
    artistID: 4,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    lyrics: `[00:05] (Chiptune Retro Intro)
[00:25] Const double value equals you and me,
[00:33] Writing our lives in binary.
[00:41] An infinite loop of coffee and design,
[00:49] Hoping that your branch will merge with mine.
[00:57] (Chorus)
[00:59] Líneas de código, corriendo sin parar,
[01:07] Compilando el amor que te quiero dar.
[01:15] Sin errores de sintaxis en el corazón,
[01:23] Ejecutando siempre nuestra gran función.
[01:35] (Cybernetic Synth Solo)
[02:05] Debugging the feelings that I cannot hide,
[02:13] Floating point numbers, keeping inside.
[02:21] Push to the server, pull from your eyes,
[02:29] Underneath these digital skies.`,
  },
  {
    id: 7,
    imageURL:
      'https://albumcoverzone.com/slir/w300/png24-front/albumcover0010199.jpg',
    title: 'Songs of the Heart',
    artistName: 'Zephyr Code',
    albumName: 'Parallel Lines',
    duration: '7:35',
    albumID: 5,
    artistID: 4,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    lyrics: `[00:20] (Acoustic Guitar Style Synth)
[00:50] No hay algoritmos para definir amor,
[01:00] Ni fórmulas frías que calmen el dolor.
[01:10] Solo latidos al compás del tambor,
[01:20] Que pintan la vida con todo su color.
[01:30] (Chorus)
[01:33] Canciones del corazón, sonando para ti,
[01:43] Las notas más dulces que yo nunca escribí.
[01:53] Déjate llevar por esta bella vibración,
[02:03] Que cura las almas con su bendición.`,
  },
];
