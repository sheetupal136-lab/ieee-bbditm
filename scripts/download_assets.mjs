import fs from 'fs';
import path from 'path';
import https from 'https';

const downloads = [
  { url: 'https://edu.ieee.org/in-bbdnitm/wp-content/uploads/sites/237/IEEE-BBDITM-Student-Branch-Facebook-Cover.png', file: 'public/cover-banner.png' },
  { url: 'https://edu.ieee.org/in-bbdnitm/wp-content/uploads/sites/237/WhatsApp-Image-2024-04-21-at-22.37.06_ebb7c6ac-1024x768.jpg', file: 'public/event-conclave.jpg' },
  { url: 'https://edu.ieee.org/in-bbdnitm/wp-content/uploads/sites/237/WhatsApp-Image-2024-04-21-at-22.37.04_4f6e8ed1-1024x768.jpg', file: 'public/auditorium-session.jpg' },
  { url: 'https://edu.ieee.org/in-bbdnitm/wp-content/uploads/sites/237/WhatsApp-Image-2024-04-21-at-22.37.05_3ee44bca-1024x768.jpg', file: 'public/award-ceremony.jpg' },
  { url: 'https://edu.ieee.org/in-bbdnitm/wp-content/uploads/sites/237/WhatsApp-Image-2024-04-21-at-22.37.01_cf859baa-1024x768.jpg', file: 'public/student-activities.jpg' },
  { url: 'https://edu.ieee.org/in-bbdnitm/wp-content/uploads/sites/237/WhatsApp-Image-2024-04-21-at-22.37.03_62ba5a34-1024x768.jpg', file: 'public/technical-meeting.jpg' },
  { url: 'https://edu.ieee.org/in-bbdnitm/wp-content/uploads/sites/237/Copy-of-Copy-of-Copy-of-IEEE-PES-DAY-1-1024x768.png', file: 'public/pes-celebration.png' },
  { url: 'https://edu.ieee.org/in-bbdnitm/wp-content/uploads/sites/237/IEEE-BBDITM-370x278.jpg', file: 'public/committee-photo.jpg' },
  // Earth textures for photorealistic 3D model:
  { url: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg', file: 'public/earth-day.jpg' },
  { url: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_lights_2048.png', file: 'public/earth-lights.png' },
  { url: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg', file: 'public/earth-specular.jpg' },
  { url: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png', file: 'public/earth-clouds.png' }
];

async function download(item) {
  return new Promise((resolve) => {
    const fileStream = fs.createWriteStream(item.file);
    https.get(item.url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        https.get(response.headers.location, (redirectRes) => {
          redirectRes.pipe(fileStream);
          fileStream.on('finish', () => {
            fileStream.close();
            console.log(`Success (redirect): ${item.file}`);
            resolve();
          });
        }).on('error', (err) => {
          console.error(`Error redirect: ${item.file}`, err.message);
          resolve();
        });
      } else if (response.statusCode === 200) {
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`Success: ${item.file}`);
          resolve();
        });
      } else {
        console.warn(`Failed ${item.file} status: ${response.statusCode}`);
        fileStream.close();
        resolve();
      }
    }).on('error', (err) => {
      console.error(`Error: ${item.file}`, err.message);
      resolve();
    });
  });
}

async function run() {
  for (const item of downloads) {
    await download(item);
  }
  console.log('Finished downloading all assets!');
}

run();
