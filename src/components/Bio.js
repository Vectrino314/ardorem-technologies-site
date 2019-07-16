import React from 'react'
import styled from 'styled-components'
import {
  Flex,
  Box,
  Heading,
  Text,
  Avatar,
  Badge,
  Card,
  Image,
  theme
} from '@hackclub/design-system'
import Sheet from 'components/Sheet'

const Base = styled(Sheet)`
  display: flex;
  border-radius: ${theme.radii[2]};
  max-width: 36rem;
  img {
    flex-shrink: 0;
  }
`

const Headshot = styled(Image)`
  width: 100%;
  height: auto;
   border-radius: 8px;
`

// Make a grid of badges to illustrate all major topic i know

const Bio = ({ img, name, teamRole, pronouns, text, ...props }) => (
  <Base mb={0} {...props}>
    <Box mr={[2, 3]} flex flexDirection="column" align="center">
      {/* <Avatar size="64px" src={img} alt={name} /> */}
      <Card
        boxShadowSize="sm"
        // my={4}
        // p={3}
        width={128}
        color="black"
        bg="white"
        borderRadius={2}
      >
        <Headshot src={img} alt={name}/>
      </Card>
      <Badge
        my={1}
        px={2}
        fontSize={1}
        bg="warning"
        align="center"
        mt={-1}
        children={pronouns}
      />
    </Box>
    <Box>
      <Flex align="center" wrap style={{ lineHeight: '1.125' }}>
        <Heading.h3 fontSize={4} m={0} mr={2} color="black" children={name} />
        <Badge px={2} fontSize={1} bg="primary" children={teamRole} />
      </Flex>
      <Text fontSize={2} mt={1} mb={0} color="slate" children={text} />
    </Box>
  </Base>
)

export default Bio
