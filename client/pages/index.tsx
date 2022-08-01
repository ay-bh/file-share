import { useState } from 'react';
import { Welcome } from '../components/Welcome/Welcome';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { DropzoneButton } from '../components/Dropzone';
import RenderFile from '../components/RenderFile';
import { Center, Grid, Badge, Transition, Button, Paper, Box } from '@mantine/core';
import axios from 'axios';
import DownloadFile from '../components/DownloadFile';

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
  const [id, setId] = useState(null);
  const [downloadPageLink, setDownloadPageLink] = useState(null);
  const [uploadState, setUploadState] = useState<
    'Uploading' | 'Upload Failed' | 'Uploaded' | 'Upload'
  >('Upload');

  setTimeout(() => setMounted(true), 50);

  const handleUpload = async () => {
    if (uploadState === 'Uploading') return;
    setUploadState('Uploading');
    const formData = new FormData();
    formData.append('myFile', file);
    try {
      const { data } = await axios({
        method: 'post',
        data: formData,
        url: 'api/files/upload',
        headers: {
          'Content-Type': 'multipa,rt/form-data',
        },
      });
      setDownloadPageLink(data.downloadPageLink);
      setId(data.id);
    } catch (error: any) {
      console.log(error.response.data);
      setUploadState('Upload Failed');
    }
  };

  const resetFile = () => {
    setFile(null);
    setDownloadPageLink(null);
    setMounted(false);
    setUploadState('Upload');
  };

  return (
    <>
      <NavBar {...links} />
      <Transition mounted={mounted} transition="fade" duration={1500} timingFunction="ease">
        {(styles) => (
          <div style={styles}>
            <Welcome />
            <Grid mx={25}>
              <Grid.Col md={3} sm={2} xs={1}></Grid.Col>
              <Grid.Col md={6} sm={8} xs={10}>
                {!downloadPageLink && <DropzoneButton setFile={setFile} />}
                <Center>
                  {file && (
                    <div>
                      {' '}
                      <Box
                        sx={(theme) => ({
                          marginTop: '3%',
                          backgroundColor:
                            theme.colorScheme === 'dark'
                              ? theme.colors.dark[6]
                              : theme.colors.gray[0],
                          textAlign: 'center',
                          padding: theme.spacing.xl,
                          borderRadius: theme.radius.md,
                          cursor: 'pointer',
                          width: '100%',

                          // '&:hover': {
                          //   backgroundColor:
                          //     theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
                          // },
                        })}
                      >
                        <RenderFile
                          file={{
                            format: file.type.split('/')[1],
                            name: file.name,
                            sizeBytes: file.size,
                          }}
                        />

                        {downloadPageLink && (
                          <>
                            {' '}
                            <DownloadFile downloadPageLink={downloadPageLink} />
                            <Button variant="gradient" onClick={resetFile} mt={50}>
                              Upload New file
                            </Button>
                          </>
                        )}
                        {!downloadPageLink && (
                          <Button variant="gradient" onClick={handleUpload} mt={50}>
                            {uploadState}
                          </Button>
                        )}
                      </Box>
                    </div>
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
