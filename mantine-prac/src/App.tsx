import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports

import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Center, Group, Skeleton,Button,SimpleGrid,Image,Text, Title} from '@mantine/core';


export default function BasicAppShell() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="lg"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        Navbar
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
      </AppShell.Navbar>
      <AppShell.Main>
          <App/>
      </AppShell.Main>
    </AppShell>
  );
}

function App() {
  const [count, setCount] = useState(10000)
  return(
    <>
      <Center>
        <SimpleGrid  cols={2}>
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <Image src={viteLogo} 
              h={200}
              w="auto"
              fit="contain"/>
            </a>
          </div>

          <div>
            <a href="https://react.dev" target="_blank">
              <Image src={reactLogo} h={200} w='auto' fit='contain' />
            </a>
          </div>
        </SimpleGrid>
      </Center>
      <Title order={1} ta='center' c='cyan'>
          Mantine Practice 
      </Title>
      <div className="card">
      <Center>
        <Button variant="light"  size="xl" onClick={() => setCount((count) => count + 1000)}>
          count is {count}
        </Button>
      </Center>
      <Text ta='center'>
      Edit <code>src/App.tsx</code> and save to test HMR
      </Text>
      </div>
      <Text ta='center'>
      Click on the Vite and React logos to learn more
      </Text>
    </>
  )
}
