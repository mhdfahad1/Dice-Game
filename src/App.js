import { Button, Image } from '@chakra-ui/react';
import './App.css';
import { Flex, Heading, Stack, Box, Text, List, ListItem } from '@chakra-ui/layout';
import { useState } from 'react';
function App() {
  const [gameStarted, setgameSatarted] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState()
  const [imageChange, setimageChange] = useState(1)
  const [error, setError] = useState(null)
  const [score, setScore] = useState(0)

  const numbers = [1, 2, 3, 4, 5, 6]

  const startGameHandler = () => {
    setgameSatarted(true)
  }

  const onNumberClicked = (value) => {
    setSelectedNumber(value)
    setError(null)
  }
  // console.log(selectedNumber);


  const genRandomNo = () => {
    if (selectedNumber) {
      const genNumber = Math.ceil(Math.random() * 6)
      setimageChange(genNumber)

      if (selectedNumber === genNumber) {
        setScore((prev) => prev + genNumber)
      } else {
        setScore((prev) => score - 2)

      }
    } else {
      setError('Please Select Number')
    }
    // console.log(genNumber);
  }


  return (
    <>
      {gameStarted ?
        <>
          <Stack justify="center" align="center" maxW='1300px' mx='auto' h='100vh'>
            <Heading as='h1' fontSize='6xl' mb='8' mt='10' color={error ? "red" : "black"}>{error ? error : "Select Number"}</Heading>
            <Flex pb='10'>
              {numbers.map((item) => (
                <Flex justify="center" align="center" h="50px" w='50px' bg={selectedNumber === item ? 'green' : 'black'}
                  color="white" fontSize='2xl' key={item} mr={4} borderRadius='md'
                  onClick={() => onNumberClicked(item)}>{item}</Flex>

              ))}
            </Flex>
            <Box>
              <Image onClick={genRandomNo} src={`/dice/dice${imageChange}.jpg`} />
            </Box>

            <Text as='p' fontSize='xl'>Click on dice to roll</Text>
            <Text fontSize='8xl' fontWeight='bold' color={score >= 0 ? "black" : "red"}>{score}</Text>
            <Text fontSize='6xl' fontWeight='bold'>Total Score</Text>
            <Button padding='10px' onClick={() => setScore(0)}>Reset Score</Button>
          </Stack>

          <Stack maxW='900px' mx='auto'>
            <Heading as='h2'>Game Rules:</Heading>
            <List>
              <ListItem>-select any number</ListItem>
              <ListItem>-click on dice image to roll it</ListItem>
              <ListItem>-select number is equal to obtain dice result then you will get same point of dice</ListItem>

            </List>

          </Stack>

        </>


        : <Flex justify="center" align="center">
          <Image width="50%" src='/dices.png' />
          <Stack>
            <Heading fontSize='7xl' as="h1">{" "} Dice Game</Heading>
            <Button alignSelf="flex-end"
              bg='black'
              color='white'
              _hover={{ bg: "grey" }}
              onClick={startGameHandler}>Start Game</Button>
          </Stack>
        </Flex>}
    </>
  );
}

export default App;
