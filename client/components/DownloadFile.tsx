import React, { useState } from 'react'
import { Box, Transition } from '@mantine/core';
import {IconCopy} from '@tabler/icons'
import { useClipboard } from '@mantine/hooks';

export default function DownloadFile({downloadPageLink}) {
    const clipboard = useClipboard({ timeout: 500 });
    const [opened, setOpened] = useState(false)
    setTimeout(() => {
        setOpened(true)
        
    }, 10);
  return (
    <Transition mounted={opened} transition="fade" duration={2000} timingFunction="ease">
    {(styles) => 
  
    <div style={styles} onClick={() => clipboard.copy(downloadPageLink)}>
    <IconCopy size={25} color={clipboard.copied ? "grey" : '#00abfb'}/>
      <span color={clipboard.copied ? "grey" : '#00abfb'}>{downloadPageLink}</span>
   
    </div>
    }</Transition>
  )
}
