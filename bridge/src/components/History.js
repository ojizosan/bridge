import { Text, Heading, Box } from '@chakra-ui/react'

const History = () => {

  // TODO get dealList

  const dealList = [
    { "partner": "NPO JAPAN", "type": "apple", "num": 1 },
    { "partner": "foodbank sapporo", "type": "orange", "num": 100 },
  ]

  return (
    <>
      <Box>
        <Heading size="md">取引履歴</Heading>
        <Box textAlign="left" w="400px">
          {dealList.map((val) => (
            <Box marginTop="30px">
              <Heading size="sm">{val["partner"]}</Heading>
              <Text fontSize="md">種類：{val["type"]}</Text>
              <Text fontSize="md">個数：{val["num"]}</Text>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  )
}

export default History