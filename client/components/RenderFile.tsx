import { FunctionComponent, useState } from 'react';
import { IFile } from '../libs/types';
import { IconFileCheck } from '@tabler/icons';

import { Badge, Avatar, Center, Transition, ThemeIcon, Paper } from '@mantine/core';

const RenderFile: FunctionComponent<{ file: IFile }> = ({ file }) => {
    const [mounted, setMounted] = useState(false)
    const sizeMB = (parseFloat(file.sizeBytes)/(1024*1024)).toFixed(2)
    setTimeout(() => setMounted(true), 100);
  return (
    <Transition mounted={mounted} transition="fade" duration={400} timingFunction="ease">
      {(styles) => 

    <div style={styles}>
    
      <Center>

          {/* <IconFileCheck size={60} stroke={1.5} /> */}
    
      </Center>
      <br />
      <Badge variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} size="xl" radius="lg">
        <span>{file.name} </span>
        <span> - {sizeMB} MB</span>
      </Badge>
 
    </div>}
    </Transition>
  );
};

export default RenderFile;
