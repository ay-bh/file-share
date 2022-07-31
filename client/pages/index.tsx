import { useState } from 'react';
import { Welcome } from '../components/Welcome/Welcome';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { DropzoneButton } from '../components/Dropzone';
import RenderFile from '../components/RenderFile';
import { Center, Grid, Badge, Transition, Button } from '@mantine/core';

export default function HomePage() {
  const links = {
    links: [
      {
        link: '/',
        label: 'Home',
      },
      {
        link: '/about',
        label: 'About',
      },
    ],
  };
  const [file, setFile] = useState(null);
  const [mounted, setMounted] = useState(false);
  setTimeout(() => setMounted(true), 50);

  return (
    <>
      <NavBar {...links} />
      <Transition mounted={mounted} transition="fade" duration={400} timingFunction="ease">
        {(styles) => (
          <div style={styles}>
            <Welcome />
            <Grid mx={25}>
              <Grid.Col md={3} sm={2} xs={1}></Grid.Col>
              <Grid.Col md={6} sm={8} xs={10}>
                <DropzoneButton setFile={setFile} />
                <Center>
                  {file && (
                    <RenderFile
                      file={{
                        format: file.type.split('/')[1],
                        name: file.name,
                        sizeBytes: file.size,
                      }}
                    />
                  )}
                  
                </Center>
              </Grid.Col>

              <Grid.Col md={3} sm={2} xs={1}></Grid.Col>
            </Grid>
          </div>
        )}
      </Transition>
      {/* <Footer /> */}
    </>
  );
}
